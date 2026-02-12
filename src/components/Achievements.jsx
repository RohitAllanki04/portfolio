import { motion } from 'framer-motion';
import { Award, Trophy, Code, ExternalLink } from 'lucide-react';

const Achievements = () => {
    const items = [
        {
            title: 'GATE 2025 (CS) - Qualified',
            description: 'Graduate Aptitude Test in Engineering',
            date: '2025',
            icon: Trophy,
            link: null,
            color: 'text-yellow-500'
        },
        {
            title: '190+ LeetCode Problems',
            description: 'Data Structures and Algorithms',
            date: 'Ongoing',
            icon: Code,
            link: 'https://leetcode.com/u/Rohit_allanki/',
            color: 'text-accent'
        },
        {
            title: 'Enterprise Design Thinking',
            description: 'IBM Practitioner Certification',
            date: '2024',
            icon: Award,
            link: 'https://www.credly.com/earner/earned/share/29579768-7cfb-408b-91d7-0fe251e0af43',
            color: 'text-blue-500'
        },
        {
            title: 'AWS Academy Graduate',
            description: 'Amazon Web Services',
            date: '2024',
            icon: Award,
            link: 'https://www.credly.com/earner/earned/share/4445e2e5-5fd0-4238-9755-65cb48dc9229',
            color: 'text-orange-500'
        },
        {
            title: 'Agile Scrum Fundamentals',
            description: 'Infosys Springboard Certification',
            date: '2025',
            icon: Award,
            link: 'https://drive.google.com/file/d/1W05UrMN-6iKn69wxnMnkUQH1kzMlYUNk/view?usp=sharing',
            color: 'text-green-500'
        },
    ];

    return (
        <section id="achievements" className="py-24 bg-transparent relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-black text-foreground mb-4">
                        Honors & <span className="text-accent underline decoration-accent/20 underline-offset-8">Certifications</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl font-medium">
                        Milestones and recognitions that mark my professional growth.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            whileHover={{ y: -5 }}
                            className="bg-secondary/20 backdrop-blur-xl rounded-[2.5rem] border-2 border-border/50 hover:border-accent/40 transition-all duration-500 group overflow-hidden relative"
                        >
                            <div className="p-8">
                                <div className="flex items-start gap-6 mb-6">
                                    <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                                        <item.icon className={`${item.color}`} size={32} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-xl font-black text-foreground mb-2 leading-tight group-hover:text-accent transition-colors">{item.title}</h3>
                                        <p className="text-muted-foreground font-medium mb-2">{item.description}</p>
                                        <span className="px-3 py-1 bg-accent/5 text-[10px] font-black uppercase tracking-widest text-accent rounded-full border border-accent/10">
                                            {item.date}
                                        </span>
                                    </div>
                                </div>

                                {item.link && (
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-foreground/50 hover:text-accent transition-colors group/link mt-4 pt-4 border-t border-border/50"
                                    >
                                        Verify Credential
                                        <ExternalLink size={14} className="group-hover/link:translate-x-1 transition-transform" />
                                    </a>
                                )}
                            </div>

                            {/* Glass reflection */}
                            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/0 via-white/5 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default Achievements;
