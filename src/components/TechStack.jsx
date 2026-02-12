import { motion } from 'framer-motion';
import {
    Code2, Database, Layout, Server, Settings, Globe,
    Cpu, Terminal, Cloud, Shield, Box, BookOpen
} from 'lucide-react';

const TechStack = () => {
    const categories = [
        {
            title: "Backend & Core",
            icon: Server,
            skills: ["Java", "Spring Boot", "Spring Security", "Hibernate/JPA", "REST APIs", "MySQL"]
        },
        {
            title: "Frontend",
            icon: Layout,
            skills: ["React.js", "JavaScript", "HTML/CSS", "TailwindCSS"]
        },
        {
            title: "CS Fundamentals",
            icon: BookOpen,
            skills: ["Operating Systems", "DBMS", "Computer Networks", "OOPs", "DSA"]
        },
        {
            title: "Tools & Concepts",
            icon: Settings,
            skills: ["Git/GitHub", "Maven", "Postman", "IntelliJ IDEA", "VS Code"]
        }
    ];

    // Skills for the marquee
    // const marqueeSkills = [
    //     "Java", "Spring Boot", "React.js", "MySQL", "Hibernate", "Spring Security",
    //     "REST APIs", "DS & Algo", "Postman", "Git", "Maven", "Spring Boot"
    // ];

    return (
        <section id="tech" className="py-24 bg-transparent relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-black text-foreground mb-4">
                        Technical <span className="text-accent">Toolkit</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl font-medium">
                        A curated collection of technologies I use to bring ideas to life.
                    </p>
                </motion.div>

                {/* Marquee Effect */}
                {/* <div className="relative flex overflow-hidden group mb-20">
                    <div className="flex space-x-12 animate-marquee whitespace-nowrap py-10">
                        {[...marqueeSkills, ...marqueeSkills].map((skill, i) => (
                            <span
                                key={i}
                                className="text-5xl md:text-7xl font-black text-foreground/5 hover:text-accent/20 transition-colors uppercase tracking-tighter"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div> */}

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            whileHover={{ y: -10 }}
                            className="relative group h-full"
                        >
                            <div className="h-full bg-secondary/30 backdrop-blur-md border-2 border-border/50 rounded-[2.5rem] p-8 flex flex-col transition-all duration-500 hover:border-accent group-hover:shadow-[0_20px_50px_rgba(255,103,0,0.15)]">
                                {/* Icon Container */}
                                <div className="w-16 h-16 bg-accent/20 rounded-2xl mb-6 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                                    <category.icon className="text-accent" size={32} />
                                </div>

                                <h3 className="text-2xl font-black text-foreground mb-6 group-hover:text-accent transition-colors">
                                    {category.title}
                                </h3>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {category.skills.map((skill, sIdx) => (
                                        <span
                                            key={sIdx}
                                            className="px-3 py-1.5 bg-background/50 border border-border/50 rounded-xl text-xs font-bold text-muted-foreground group-hover:text-foreground group-hover:border-accent/40 transition-all duration-300"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                {/* Floating accent element */}
                                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default TechStack;
