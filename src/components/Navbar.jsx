import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, Sun, Moon } from 'lucide-react';
import { useTheme } from './theme-provider';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [scrollProgress, setScrollProgress] = useState(0);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Calculate scroll progress
            const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalScroll) * 100;
            setScrollProgress(progress);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Track active section based on scroll position - More precise intersection observer
    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');
        const options = {
            root: null,
            rootMargin: '-40% 0px -40% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, options);

        sections.forEach(section => observer.observe(section));
        return () => sections.forEach(section => observer.unobserve(section));
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Tech', href: '#tech' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    const [hoveredLink, setHoveredLink] = useState(null);

    return (
        <>
            {/* Top-screen Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 h-1 bg-accent z-[60] origin-left shadow-[0_0_10px_rgba(255,103,0,0.5)]"
                style={{ width: `${scrollProgress}%` }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
            />

            <header className="fixed top-0 w-full z-50 flex justify-center pointer-events-none pt-6 px-4">
                <nav
                    className={`flex items-center gap-2 pointer-events-auto transition-all duration-500 rounded-[2rem] px-4 md:px-6 py-2.5 ${scrolled
                        ? 'bg-background/80 backdrop-blur-2xl border border-border/50 shadow-[0_20px_50px_rgba(0,0,0,0.1)]'
                        : 'bg-background/40 backdrop-blur-md border border-border/20'
                        } relative overflow-visible`}
                >
                    <motion.a
                        href="#hero"
                        className="text-xl font-heading font-black text-foreground relative z-50 flex items-center gap-2 group mr-2 md:mr-6"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActiveSection('')}
                    >
                        <div className="p-1.5 bg-accent/10 rounded-xl group-hover:bg-accent group-hover:text-background transition-all duration-300">
                            <Code2 size={18} />
                        </div>
                        <span className="tracking-tighter">Rohit<span className="text-accent group-hover:text-foreground transition-colors">.</span></span>
                    </motion.a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-1 items-center relative">
                        {navLinks.map((link, index) => {
                            const isActive = activeSection === link.href.substring(1);
                            return (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    onHoverStart={() => setHoveredLink(link.name)}
                                    onHoverEnd={() => setHoveredLink(null)}
                                    className={`relative px-4 py-2 text-[10px] tracking-widest font-black uppercase transition-all duration-300 rounded-xl ${isActive
                                        ? 'text-accent'
                                        : 'text-muted-foreground hover:text-foreground'
                                        }`}
                                >
                                    <span className="relative z-10">{link.name}</span>
                                    {isActive && (
                                        <motion.div
                                            layoutId="activePill"
                                            className="absolute inset-0 bg-accent/10 border border-accent/20 rounded-xl"
                                            initial={false}
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                    {hoveredLink === link.name && !isActive && (
                                        <motion.div
                                            layoutId="hoverPill"
                                            className="absolute inset-0 bg-secondary/40 rounded-xl -z-10"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </motion.a>
                            );
                        })}
                    </div>

                    <div className="hidden md:flex h-6 w-[1px] bg-border/40 mx-2" />

                    {/* Actions */}
                    <div className="flex items-center gap-1.5">
                        <motion.button
                            whileHover={{ scale: 1.1, rotate: 15 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className="p-2 rounded-xl text-foreground hover:bg-secondary/80 transition-all duration-300 border border-transparent hover:border-border/50"
                            aria-label="Toggle Theme"
                        >
                            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                        </motion.button>

                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="hidden sm:flex px-5 py-2 bg-accent text-background border border-accent rounded-full transition-all duration-300 font-black text-[10px] uppercase tracking-widest shadow-lg shadow-accent/20 hover:shadow-accent/40"
                        >
                            Hire Me
                        </motion.a>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 text-foreground hover:text-accent transition-colors ml-1"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Mobile Menu Overlay */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 20 }}
                                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                                className="md:hidden absolute top-[100%] left-0 right-0 bg-background/90 backdrop-blur-2xl border border-border/50 rounded-[2.5rem] shadow-2xl p-6 z-40 pointer-events-auto"
                            >
                                <div className="flex flex-col gap-3">
                                    {navLinks.map((link, idx) => (
                                        <motion.a
                                            key={link.name}
                                            href={link.href}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            onClick={() => setIsOpen(false)}
                                            className="text-xl text-foreground hover:text-accent font-black uppercase tracking-tighter py-3 border-b border-border/10 last:border-0 block"
                                        >
                                            {link.name}
                                        </motion.a>
                                    ))}
                                    <motion.a
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                        href="#contact"
                                        onClick={() => setIsOpen(false)}
                                        className="mt-4 text-center px-8 py-5 bg-accent text-background font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl shadow-accent/20 text-xs"
                                    >
                                        Hire Me
                                    </motion.a>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </nav>
            </header>
        </>
    );
};

export default Navbar;
