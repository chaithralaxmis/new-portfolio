import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Users, FileText, BookOpen, ShieldCheck } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'Assessment Portal',
            organization: 'Simplify3x',
            icon: <FileText className="w-8 h-8 text-blue-500" />,
            description: 'A comprehensive platform for conducting and managing technical assessments.',
            role: 'Designed and implemented the core assessment engine, enabling secure and scalable test-taking experiences. Optimized performance for high-concurrency usage.',
            tech: ['Vue.js', 'VUEX', 'Javascript' ,'HTML','CSS','Bootstrap','Axios']
        },
        {
            title: 'Recruitment Portal',
            organization: 'Simplify3x',
            icon: <Users className="w-8 h-8 text-green-500" />,
            description: 'Streamlines the end-to-end recruitment process from job posting to offer rollout.',
            tech: ['Vue.js', 'VUEX', 'Javascript' ,'HTML','CSS','Bootstrap','Axios'],
            role: 'Developed the job application workflow and interviewer dashboard. Integrated email notifications and real-time status updates.'
        },
        {
            title: 'Candidate Portal',
            organization: 'Simplify3x',
            icon: <Layout className="w-8 h-8 text-purple-500" />,
            description: 'A dedicated interface for candidates to track applications and take assessments.',
            tech: ['React.js', 'Redux', 'Javascript','HTML','CSS','Bootstrap','Axios'],
            role: 'Built a responsive and intuitive UI for candidates. Implemented resume parsing and profile management features.'
        },
        {
            title: 'Training Portal',
            organization: 'Simplify3x',
            icon: <BookOpen className="w-8 h-8 text-orange-500" />,
            description: 'LMS for employee upskilling, featuring course management and progress tracking.',
            tech: ['Vue.js', 'VUEX', 'Javascript' ,'HTML','CSS','Bootstrap','Axios'],
            role: 'Created the video course player and interactive quiz modules. Developed analytics dashboards for tracking learning progress.'
        },
        {
            title: 'Admin Console',
            organization: 'Simplify3x',
            icon: <ShieldCheck className="w-8 h-8 text-red-500" />,
            description: 'Centralized control hub for managing all platforms, users, and configurations.',
            tech: ['React.js', 'Redux', 'Javascript','HTML','CSS','Bootstrap','Axios'],
            role: 'Architected the role-based access control (RBAC) system. Developed complex data tables and reporting tools for system administrators.'
        },
         {
            title: 'Dev Tinder',
            organization: 'Personal',
            icon: <Users className="w-8 h-8 text-blue-500" />,
            description: 'A web platform designed exclusively for developers to connect, collaborate, and grow. Developers can create profiles, showcase skills, and send collaboration invites to build meaningful tech partnerships.',
            tech: ['React.js', 'Javascript','HTML','CSS','Tailwind','Axios', 'Node.js', 'MongoDB', 'Express.js'],
            role: 'Architected and developed RESTful APIs, implemented business logic, and integrated them with responsive, user-friendly frontend interfaces.'
        },
    ];

    return (
        <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-800 text-gray-800 dark:text-gray-200 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white"
                >
                    Key Projects
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-slate-700 hover:shadow-xl transition-all relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 bg-blue-600/10 dark:bg-blue-400/10 px-3 py-1 rounded-bl-xl">
                                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">{project.organization}</span>
                            </div>

                            <div className="flex items-center gap-4 mb-4 mt-2">
                                <div className="p-3 bg-gray-50 dark:bg-slate-800 rounded-lg">
                                    {project.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                            </div>

                            <p className="text-gray-600 dark:text-gray-400 mb-4 h-12 line-clamp-2">
                                {project.description}
                            </p>

                            <div className="mb-4">
                                <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-200 mb-2 uppercase tracking-wide">My Role</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {project.role}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="text-xs font-medium px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-md">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
