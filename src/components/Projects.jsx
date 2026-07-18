import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, Database, Shield, MapPin, ArrowUpRight } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'Job Platform for Informal Sector',
            description: 'Built a scalable job-matching platform for the informal sector with modular Spring Boot REST APIs, OTP-based authentication, and role-based authorization using Spring Security. Implemented location-aware job discovery using Haversine distance and skill matching using cosine similarity, with query optimizations for better performance.',
            tags: ['Spring Boot', 'Spring Security', 'MySQL', 'React.js', 'JWT'],
            icon: MapPin,
            color: 'from-orange-500/20 to-accent/20',
            links: {
                demo: '#',
                backend: 'https://github.com/AKHIL-8055/Jobs-Portal-Backend-v1.0',
                frontend: 'https://github.com/AKHIL-8055/Jobs-Portal-Frontend-v1.0'
            }
        },
        {
            title: 'Identity Reconciliation Service',
            description: 'Developed a Spring Boot REST API to reconcile customer identities across multiple purchases using email and phone number matching. Implemented primary and secondary contact linking logic, handled bridge cases between duplicate records, and designed a relational MySQL schema with self-referencing contacts for efficient lookup and merging.',
            tags: ['Spring Boot', 'MySQL', 'REST API', 'Identity Matching', 'Render'],
            icon: Shield,
            color: 'from-purple-500/20 to-purple-600/20',
            links: {
                demo: '#',
                github: 'https://github.com/RohitAllanki04/IdentityReconciliation'
            }
        },
        {
            title: 'Quiz Microservices',
            description: 'Refactored a quiz application into a modular Spring Boot microservices architecture with separate services for quiz management and quiz execution. Focused on service separation, REST-based communication, and maintainable backend design for scalable feature delivery.',
            tags: ['Spring Boot', 'Microservices', 'Java', 'REST API', 'Backend'],
            icon: Code2,
            color: 'from-blue-500/20 to-blue-600/20',
            links: {
                demo: '#',
                github: 'https://github.com/RohitAllanki04/Quiz-microservices'
            }
        },
        {
            title: 'GitHub Organization Access Report Service',
            description: 'Built a Spring Boot service that integrates with the GitHub REST API to generate structured JSON reports of user-to-repository access mappings within an organization. Added parallel collaborator fetching with CompletableFuture and @Async, Caffeine caching with a 5-minute TTL, pagination handling, and bot account filtering to improve report generation speed and stay within API rate limits.',
            tags: ['Spring Boot', 'GitHub API', 'Caffeine Cache', 'CompletableFuture', 'Java'],
            icon: Github,
            color: 'from-emerald-500/20 to-emerald-600/20',
            links: {
                demo: '#',
                github: 'https://github.com/RohitAllanki04/Github-access-report-project'
            }
        }
    ];

    return (
        <section id="projects" className="py-24 bg-transparent relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="relative mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-heading font-black text-foreground mb-4">
                            Featured <span className="text-accent underline decoration-accent/20 underline-offset-8">Projects</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl font-medium">
                            Crafting robust digital experiences with attention to detail and performance.
                        </p>
                    </motion.div>

                    <motion.a
                        href="https://github.com/RohitAllanki04?tab=repositories"
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.06, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="group absolute right-0 top-1/2 hidden -translate-y-1/2 items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-foreground shadow-lg shadow-black/10 backdrop-blur-md transition-all hover:border-accent/40 hover:text-accent md:inline-flex"
                        aria-label="View more projects on GitHub"
                    >
                        <Github size={14} className="transition-transform group-hover:rotate-12" />
                        More Works
                    </motion.a>

                    <motion.a
                        href="https://github.com/RohitAllanki04?tab=repositories"
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className="mt-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-foreground shadow-lg shadow-black/10 backdrop-blur-md transition-all hover:border-accent/40 hover:text-accent md:hidden"
                        aria-label="View more projects on GitHub"
                    >
                        <Github size={14} />
                        More Works
                    </motion.a>
                </div>

                {/* Horizontal Scroll with Glow */}
                <div className="relative group">
                    <div className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide px-4">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ y: -5 }}
                                className="group/card flex-shrink-0 w-[84vw] md:w-[380px] snap-center"
                            >
                                <div className="h-full bg-white/8 backdrop-blur-2xl rounded-[2.5rem] overflow-hidden border border-white/15 hover:border-accent/40 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(255,103,0,0.18)] flex flex-col relative shadow-xl shadow-black/10">
                                    {/* Project Preview Area */}
                                    <div className={`relative h-48 bg-gradient-to-br ${project.color} overflow-hidden group-hover/card:scale-[1.02] transition-transform duration-700`}>
                                        <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover/card:scale-125 transition-transform duration-1000">
                                            <project.icon size={96} className="text-accent" />
                                        </div>

                                        {/* Floating Tags */}
                                        <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                                            {project.tags.slice(0, 2).map((tag, i) => (
                                                <span key={i} className="px-3 py-1 bg-background/80 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-foreground/80 border border-white/10">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Project Content */}
                                    <div className="p-7 flex flex-col flex-grow">
                                        <div className="mb-5">
                                            <h3 className="text-xl font-black text-foreground mb-3 group-hover/card:text-accent transition-colors flex items-center gap-3">
                                                {project.title}
                                                <ArrowUpRight size={20} className="opacity-0 group-hover/card:opacity-100 group-hover/card:translate-x-1 group-hover/card:-translate-y-1 transition-all duration-300" />
                                            </h3>
                                            <p className="text-muted-foreground font-medium leading-relaxed line-clamp-3 text-sm md:text-[15px]">
                                                {project.description}
                                            </p>
                                        </div>

                                        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                                            {project.tags.map((tag, idx) => (
                                                <span key={idx} className="px-3 py-1 bg-accent/5 text-[11px] font-bold text-accent/80 rounded-lg border border-accent/10">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Dynamic Link Buttons */}
                                        <div className="grid grid-cols-2 gap-4">
                                            {project.links.backend && project.links.frontend ? (
                                                <>
                                                    <motion.a
                                                        href={project.links.backend}
                                                        whileHover={{ y: -2 }}
                                                        className="flex items-center justify-center gap-2 py-3 px-4 bg-accent text-background font-black text-xs rounded-xl shadow-lg shadow-accent/20 transition-all"
                                                    >
                                                        <Code2 size={16} /> Backend
                                                    </motion.a>
                                                    <motion.a
                                                        href={project.links.frontend}
                                                        whileHover={{ y: -2 }}
                                                            className="flex items-center justify-center gap-2 py-3 px-4 bg-secondary/50 text-foreground font-black text-xs rounded-xl border border-border/50 transition-all hover:bg-secondary/80"
                                                    >
                                                        <ExternalLink size={16} /> Frontend
                                                    </motion.a>
                                                </>
                                            ) : (
                                                <motion.a
                                                    href={project.links.github}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    whileHover={{ y: -2 }}
                                                    className="col-span-2 flex items-center justify-center gap-2 py-3 px-4 bg-accent text-background font-black text-sm rounded-2xl shadow-lg shadow-accent/20 transition-all"
                                                >
                                                    <Github size={20} /> Source Code
                                                </motion.a>
                                            )}
                                        </div>
                                    </div>

                                    {/* Glass reflection effect */}
                                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/0 via-white/5 to-white/0 -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000" />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Styled Scroll Indicators */}
                    <div className="flex justify-center gap-3">
                        {projects.map((_, index) => (
                            <div
                                key={index}
                                className="w-8 h-1.5 rounded-full bg-accent/10 group-hover:bg-accent/30 transition-all duration-300"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Projects;
