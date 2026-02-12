import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Briefcase, Calendar, ExternalLink, Users, Award, MapPin } from 'lucide-react';
import { useRef } from 'react';

const Experience = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scrollY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const y = useTransform(scrollY, [0.1, 0.8], [0, 1000]);
    const opacity = useTransform(scrollY, [0.1, 0.2, 0.8, 0.9], [0, 1, 1, 0]);

    const experiences = [
        {
            role: 'Java Backend Developer Intern',
            company: 'Infosys Springboard',
            period: 'Sep 2025 - Dec 2025',
            type: 'Industry Mentored Internship Program',
            location: 'Remote',
            icon: Briefcase,
            certificateUrl: 'https://drive.google.com/file/d/1eQyrT7twqAN1YPbJgRwaXl5R1Y6LHe9Y/view?usp=sharing',
            description: 'Developed scalable backend services using Java and Spring Boot. Built REST APIs using controller-service-repository layered architecture. Designed MySQL schemas and optimized SQL queries with indexing. Integrated backend services with frontend and external systems. Implemented authentication using Spring Security and JWT.',
            skills: ['Java', 'Spring Boot', 'MySQL', 'REST APIs', 'JWT']
        },
        {
            role: 'Technical Team Member',
            company: 'CodeChef VIT-AP Chapter',
            period: 'Dec 2023 - Apr 2024',
            type: 'Part-time · 5 months',
            location: 'Vijayawada, India',
            icon: Users,
            certificateUrl: null,
            description: 'Encouraged participants to work in pairs and small teams to promote collaboration and develop teamwork skills crucial for hackathons. Organized workshops to teach coding basics and project management skills, including sessions on using specific tools, brainstorming ideas, and developing presentation skills.',
            skills: ['Technical Support', 'Teamwork', 'Workshop Organization']
        },
        {
            role: 'School People Leader',
            company: 'High School',
            period: '2019 - 2020',
            type: 'Class 10th Leadership Role',
            location: 'India',
            icon: Award,
            certificateUrl: null,
            description: 'Led and coordinated class activities, fostering teamwork and communication among peers. Developed leadership and organizational skills while representing the class in school events.',
            skills: ['Leadership', 'Communication', 'Team Coordination']
        }
    ];

    return (
        <section id="experience" className="py-24 bg-transparent relative overflow-hidden" ref={containerRef}>
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-black text-foreground mb-4">
                        Professional <span className="text-accent underline decoration-accent/20 underline-offset-8">Journey</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl font-medium">
                        The evolution of my skills and impact through various roles.
                    </p>
                </motion.div>

                <div className="max-w-6xl mx-auto relative px-4 md:px-0">
                    {/* Centered Track */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-2 bg-gradient-to-b from-accent/40 via-accent/10 to-transparent md:-translate-x-1/2 rounded-full overflow-hidden">
                        <motion.div
                            className="absolute top-0 left-0 right-0 bg-accent origin-top"
                            style={{ height: useTransform(scrollY, [0.1, 0.9], ["0%", "100%"]) }}
                        />
                    </div>

                    <div className="space-y-24">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.8 }}
                                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                {/* Milestone Node */}
                                <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 z-20">
                                    <div className="w-6 h-6 bg-accent rounded-full border-4 border-background shadow-[0_0_20px_rgba(255,103,0,0.5)]" />
                                </div>

                                {/* Content Card */}
                                <div className={`ml-20 md:ml-0 md:w-[45%] ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                                    <div className="bg-secondary/20 backdrop-blur-xl p-8 rounded-[2.5rem] border-2 border-border/50 hover:border-accent/40 transition-all duration-500 group relative">
                                        <span className="absolute -top-4 left-8 px-4 py-1 bg-accent text-background text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg shadow-accent/20">
                                            {exp.period}
                                        </span>

                                        <div className="mb-6">
                                            <div className="flex items-center justify-between mb-2">
                                                <h3 className="text-2xl font-black text-foreground group-hover:text-accent transition-colors">
                                                    {exp.role}
                                                </h3>
                                                <div className="p-3 bg-accent/10 rounded-2xl">
                                                    <exp.icon size={24} className="text-accent" />
                                                </div>
                                            </div>
                                            <p className="text-accent font-bold text-sm tracking-wide flex items-center gap-2">
                                                <Briefcase size={16} /> {exp.company}
                                            </p>
                                        </div>

                                        <ul className="space-y-3 mb-8">
                                            {exp.description.split('. ').map((point, i) => (
                                                point && (
                                                    <li key={i} className="flex items-start gap-4 text-muted-foreground font-medium text-sm leading-relaxed">
                                                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent/40 shrink-0" />
                                                        {point.endsWith('.') ? point : `${point}.`}
                                                    </li>
                                                )
                                            ))}
                                        </ul>

                                        <div className="flex flex-wrap gap-2 pt-6 border-t border-border/50">
                                            {exp.skills.map((skill, idx) => (
                                                <span key={idx} className="px-3 py-1 bg-background/50 text-[10px] font-black text-foreground/70 rounded-lg border border-border">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>

                                        {exp.certificateUrl && (
                                            <a
                                                href={exp.certificateUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mt-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-accent hover:text-foreground transition-colors group/link"
                                            >
                                                Credentials <ExternalLink size={14} className="group-hover/link:translate-x-1 transition-transform" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Experience;
