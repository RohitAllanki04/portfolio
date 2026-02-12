import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code, ArrowUpRight, ArrowDown, ExternalLink } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative bg-transparent overflow-hidden pt-20">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent/10 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, -120, 0],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-600/10 rounded-full blur-[150px]"
                />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
            </div>

            <div className="container mx-auto px-6 text-center z-10 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-8"
                >
                    {/* Premium Tag */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block"
                    >
                        <span className="px-4 py-1.5 bg-accent/10 text-accent font-bold rounded-full text-xs border border-accent/20 tracking-widest uppercase backdrop-blur-sm">
                            Aspiring Software Engineer
                        </span>
                    </motion.div>

                    {/* Main Heading with Shimmer */}
                    <div className="relative inline-block">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-foreground leading-[1.1] tracking-tighter mb-4">
                            Hi, I'm{' '}
                            <span className="relative inline-block">
                                <span className="bg-gradient-to-r from-accent via-orange-400 to-accent bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer">
                                    Rohit Allanki
                                </span>
                                <motion.span
                                    initial={{ width: 0 }}
                                    animate={{ width: '100%' }}
                                    transition={{ delay: 0.8, duration: 1 }}
                                    className="absolute -bottom-2 left-0 h-2 bg-accent/20 rounded-full -z-10"
                                />
                            </span>
                        </h1>
                    </div>

                    {/* Refined Subheading */}
                    <h2 className="text-2xl md:text-4xl font-heading font-extrabold text-foreground/80 max-w-4xl mx-auto mb-8 leading-tight">
                        Architecting <span className="text-accent italic font-serif">Scalable</span> Backend Systems
                        <br className="hidden md:block" /> with Java & Spring Boot
                    </h2>

                    {/* Description */}
                    <p className="text-muted-foreground/80 max-w-3xl mx-auto text-lg md:text-2xl font-medium mb-12 leading-relaxed">
                        Computer Science student dedicated to building robust infrastructures,
                        optimizing data flow, and securing digital experiences.
                      <br/>
                      I am a quick learner and a team player with a strong work ethic.
                    </p>

                    {/* Premium CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05, translateY: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative px-10 py-5 bg-accent text-background font-black text-xl rounded-2xl shadow-2xl shadow-accent/30 overflow-hidden transition-all duration-300 w-full sm:w-auto"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Explorer My Work <ArrowUpRight size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        </motion.a>

                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05, translateY: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-10 py-5 bg-secondary/50 backdrop-blur-md border-2 border-border/50 text-foreground font-black text-xl rounded-2xl hover:bg-secondary/80 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2"
                        >
                            Get In Touch <Mail size={22} />
                        </motion.a>
                    </div>

                    {/* Social Links with Tooltips (implied) */}
                    <div className="flex justify-center gap-6 pt-12">
                        {[
                            { icon: Github, href: 'https://github.com/RohitAllanki04', label: 'GitHub', color: 'hover:text-[#2b3137]' },
                            { icon: Linkedin, href: 'https://www.linkedin.com/in/rohitallanki/', label: 'LinkedIn', color: 'hover:text-[#0077b5]' },
                            { icon: Code, href: 'https://leetcode.com/u/Rohit_allanki/', label: 'LeetCode', color: 'hover:text-[#ffa116]' },
                            { icon: Mail, href: 'mailto:allanki.rohit@gmail.com', label: 'Email', color: 'hover:text-accent' }
                        ].map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + index * 0.1 }}
                                whileHover={{ y: -5, scale: 1.1 }}
                                className={`p-4 bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl text-muted-foreground shadow-sm transition-all duration-300 ${social.color} hover:border-accent/30 hover:shadow-lg`}
                                title={social.label}
                            >
                                <social.icon size={24} />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Premium Scroll indicator */}
            <motion.a
                href="#about"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/40 hover:text-accent transition-colors group cursor-pointer"
            >
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold group-hover:text-accent transition-colors">Scroll</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center p-1"
                >
                    <motion.div className="w-1 h-2 bg-accent rounded-full" />
                </motion.div>
            </motion.a>
        </section>
    );
};


export default Hero;
