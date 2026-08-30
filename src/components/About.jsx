import { motion } from 'framer-motion';
import { User, Code, Trophy, GraduationCap } from 'lucide-react';
import profileImage from '../assets/ChatGPT Image Aug 30, 2026, 06_51_39 PM.png';

const About = () => {
    const stats = [
        { icon: GraduationCap, label: 'CGPA', value: '8.20', color: 'text-blue-500' },
        { icon: Code, label: 'DSA Solved', value: '300+', color: 'text-accent' },
        { icon: Trophy, label: 'GATE 2025', value: 'Qualified', color: 'text-yellow-500' },
    ];

    const profileImage = new URL('../assets/ChatGPT Image Aug 30, 2026, 06_51_39 PM.png', import.meta.url).href;

    return (
        <section id="about" className="py-12 bg-transparent relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
                >
                    {/* Image / Visual Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative order-2 md:order-1 max-w-sm mx-auto md:max-w-none w-full md:w-auto"
                    >
                        <div className="aspect-square rounded-full bg-gradient-to-br from-accent/20 via-accent/10 to-background border-2 border-accent/30 overflow-hidden relative z-10 group shadow-lg hover:shadow-accent/30 transition-all duration-500 max-w-[320px] mx-auto md:ml-auto">
                            <img
                                src={profileImage}
                                alt="Rohit Allanki - Backend Developer"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                        {/* Decorative background element */}
                        <div className="absolute -top-4 -left-4 w-full h-full border-2 border-accent/20 rounded-full -z-10 group-hover:border-accent/40 transition-colors duration-500 max-w-[320px] mx-auto md:ml-auto" />
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="order-1 md:order-2 space-y-6"
                    >
                        <div>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                                About <span className="text-accent">Me</span>
                            </h2>
                            <p className="text-muted-foreground leading-relaxed text-base">
                                Only a few individuals possess the passion to build things that truly make a difference; I count myself among them. I am currently pursuing my B.Tech in Computer Science and Engineering at <span className="text-accent font-medium">Vellore Institute of Technology, Andhra Pradesh (2022-2026)</span>.
                            </p>
                            <p className="text-muted-foreground leading-relaxed mt-3 text-base">
                                As a Backend Developer with a strong foundation in Computer Science principles, I specialize in designing scalable architectures, optimizing database queries, and building secure RESTful APIs. I am an active problem solver on platforms like LeetCode and CodeChef, driven by a commitment to continuous learning.
                            </p>
                            <p className="text-muted-foreground leading-relaxed mt-3 text-base">
                                Currently, I am seeking a <span className="text-accent font-medium">software internship (leading to a full-time offer)</span> or an <span className="text-accent font-medium">entry-level software engineer position</span> where I can apply my expertise to solve complex challenges and contribute to innovative teams.
                            </p>
                        </div>

                        {/* Stats Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-4"
                        >
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-card/80 to-secondary/40 dark:from-secondary/30 dark:to-background/50 p-6 rounded-2xl border-2 border-border text-center hover:border-accent/50 transition-all duration-500 group shadow-md hover:shadow-accent/20 hover:shadow-xl hover:scale-105"
                                >
                                    <div className="flex justify-center mb-3">
                                        <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md">
                                            <stat.icon className={`${stat.color}`} size={24} />
                                        </div>
                                    </div>
                                    <div className="text-2xl font-bold text-foreground mb-1 group-hover:text-accent transition-colors">{stat.value}</div>
                                    <div className="text-xs font-semibold text-muted-foreground group-hover:text-foreground transition-colors">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
