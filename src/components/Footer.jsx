import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronUp, Code, Phone, ExternalLink } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="bg-transparent pt-24 pb-12 border-t border-border/50 relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-accent/10 blur-[100px] rounded-full -z-10" />

            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 mb-20">
                    {/* Brand & Mission section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <a href="#" className="inline-block text-3xl font-heading font-black text-foreground mb-6 group">
                            Rohit<span className="text-accent group-hover:animate-pulse">.</span>
                        </a>
                        <p className="text-muted-foreground text-lg font-medium leading-relaxed max-w-md mb-10">
                            Engineering reliable backend architectures and performant web systems with a focus on scalability and security.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { Icon: Github, href: 'https://github.com/RohitAllanki04', label: 'GitHub' },
                                { Icon: Linkedin, href: 'https://www.linkedin.com/in/rohitallanki/', label: 'LinkedIn' },
                                { Icon: Code, href: 'https://leetcode.com/u/Rohit_allanki/', label: 'LeetCode' },
                                { Icon: Mail, href: 'mailto:allanki.rohit@gmail.com', label: 'Email' }
                            ].map(({ Icon, href, label }, idx) => (
                                <motion.a
                                    key={idx}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    className="p-4 bg-secondary/30 backdrop-blur-md border border-border/50 rounded-2xl hover:bg-accent hover:text-background text-muted-foreground transition-all duration-300 shadow-sm"
                                    title={label}
                                >
                                    <Icon size={22} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Info section */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="md:pl-12"
                    >
                        <h3 className="text-xl font-black text-foreground mb-8 uppercase tracking-[0.2em]">Quick Contact</h3>
                        <div className="space-y-4">
                            <a
                                href="mailto:allanki.rohit@gmail.com"
                                className="flex items-center gap-6 p-6 bg-secondary/20 backdrop-blur-xl rounded-[2rem] border-2 border-border/50 hover:border-accent/40 hover:bg-secondary/40 transition-all duration-500 group"
                            >
                                <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-background transition-all duration-500">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 mb-1">Send an Email</p>
                                    <p className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">allanki.rohit@gmail.com</p>
                                </div>
                            </a>

                            <a
                                href="tel:+917075586902"
                                className="flex items-center gap-6 p-6 bg-secondary/20 backdrop-blur-xl rounded-[2rem] border-2 border-border/50 hover:border-accent/40 hover:bg-secondary/40 transition-all duration-500 group"
                            >
                                <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-background transition-all duration-500">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 mb-1">Call Anytime</p>
                                    <p className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">+91 7075586902</p>
                                </div>
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar section */}
                <div className="flex flex-col md:flex-row justify-between items-center text-sm font-bold text-muted-foreground/60 pt-10 border-t border-border/50">
                    <p className="uppercase tracking-widest">© {new Date().getFullYear()} Rohit Allanki • Built with Impact</p>

                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="flex items-center gap-3 hover:text-accent transition-colors mt-6 md:mt-0 px-6 py-3 bg-secondary/30 rounded-full border border-border hover:border-accent/30 backdrop-blur-md"
                    >
                        Scroll to Top <ChevronUp size={18} />
                    </button>
                </div>
            </div>
        </footer>
    );
};


export default Footer;
