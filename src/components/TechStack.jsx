import { motion } from 'framer-motion';
import {
    SiSpringboot,
    SiSpringsecurity,
    SiSpring,
    SiMysql,
    SiPostgresql,
    SiJavascript,
    SiReact,
    SiHtml5,
    SiTailwindcss,
    SiGithub,
    SiPostman,
    SiDocker,
    SiJunit5,
    SiHibernate,
} from 'react-icons/si';
import { FaJava, FaGitAlt, FaDocker, FaJenkins, FaToolbox, FaDatabase } from 'react-icons/fa6';
import {
    Layout, Server, Settings, BookOpen, Database
} from 'lucide-react';

const skillIcons = {
    Java: FaJava,
    'Spring Boot': SiSpringboot,
    'Spring Security': SiSpringsecurity,
    'Spring MVC': SiSpring,
    'Spring Data': SiSpring,
    'Hibernate/JPA': SiHibernate,
    'REST APIs': null,
    MySQL: SiMysql,
    PostgreSQL: SiPostgresql,
    'React.js': SiReact,
    JavaScript: SiJavascript,
    'HTML/CSS': SiHtml5,
    TailwindCSS: SiTailwindcss,
    'Git/GitHub': FaGitAlt,
    Postman: SiPostman,
    Docker: FaDocker,
    Maven: FaToolbox,
    JUnit: SiJunit5,
    JWT: null,
    'Spring Cloud Gateway': SiSpring,
    'Spring Cloud Netflix Eureka': SiSpring,
    OpenFeign: SiSpring,
    'Load Balancing': null,
    'Service Registry': null,
    'CompletableFuture': null,
    'Caffeine Cache': null,
    SQL: null,
    'PL/SQL': FaDatabase,
    'GitHub API': SiGithub,
    Render: null,
    'Chart.js': null,
    'IntelliJ IDEA': null,
    'VS Code': null,
    'Algorithmic Problem Solving': null,
    'Agile Testing': FaJenkins,
    'Software Development Life Cycle': null,
};

const skillList = (skills) => skills.map((skill) => ({
    label: skill,
    icon: skillIcons[skill] ?? null,
}));

const TechStack = () => {
    const categories = [
        {
            title: "Backend & Core",
            icon: Server,
            skills: skillList(["Java", "Spring Boot", "Spring Security", "Spring MVC", "Spring Data", "REST APIs", "Hibernate/JPA", "JWT", "JUnit", "Maven"])
        },
        {
            title: "Architecture & Integration",
            icon: Settings,
            skills: skillList(["Microservices", "Spring Cloud Gateway", "Spring Cloud Netflix Eureka", "OpenFeign", "Load Balancing", "Service Registry", "CompletableFuture", "Caffeine Cache", "Docker"])
        },
        {
            title: "Databases",
            icon: Database,
            skills: skillList(["MySQL", "PostgreSQL", "SQL", "PL/SQL", "Database Design", "Database Modeling", "Database Optimization"])
        },
        {
            title: "Frontend",
            icon: Layout,
            skills: skillList(["React.js", "JavaScript", "Chart.js", "HTML/CSS", "TailwindCSS"])
        },
        {
            title: "CS Fundamentals",
            icon: BookOpen,
            skills: skillList(["Operating Systems", "DBMS", "Computer Networks", "OOP", "DSA", "Algorithmic Problem Solving"])
        },
        {
            title: "Tools & Concepts",
            icon: Settings,
            skills: skillList(["Git/GitHub", "Postman", "IntelliJ IDEA", "VS Code", "GitHub API", "Render", "Agile Testing", "Software Development Life Cycle"])
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

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto auto-rows-fr">
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
                            <div className="h-full min-h-[290px] bg-white/8 backdrop-blur-2xl border border-white/15 rounded-[2rem] p-6 md:p-7 flex flex-col transition-all duration-500 hover:border-accent group-hover:shadow-[0_20px_50px_rgba(255,103,0,0.18)] shadow-xl shadow-black/10">
                                {/* Icon Container */}
                                <div className="w-14 h-14 bg-accent/20 rounded-2xl mb-5 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                                    <category.icon className="text-accent" size={28} />
                                </div>

                                <h3 className="text-xl font-black text-foreground mb-4 group-hover:text-accent transition-colors">
                                    {category.title}
                                </h3>

                                <div className="flex flex-wrap gap-2 mt-auto content-start">
                                    {category.skills.map((skill, sIdx) => {
                                        const SkillIcon = skill.icon;

                                        return (
                                            <span
                                            key={sIdx}
                                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-background/50 border border-border/50 rounded-xl text-[11px] font-bold text-muted-foreground group-hover:text-foreground group-hover:border-accent/40 transition-all duration-300"
                                        >
                                            {SkillIcon ? <SkillIcon className="h-3 w-3 shrink-0" /> : null}
                                            <span>{skill.label}</span>
                                        </span>
                                        );
                                    })}
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
