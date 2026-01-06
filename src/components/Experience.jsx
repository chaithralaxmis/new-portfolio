import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-gray-50 dark:bg-slate-800 text-gray-800 dark:text-gray-200 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white"
                >
                    Professional Experience
                </motion.h2>
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-lg border-l-4 border-blue-600 transform transition-all hover:scale-[1.01]"
                    >
                        <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                    <Briefcase className="w-6 h-6 text-blue-600" />
                                    Senior Software Developer
                                </h3>
                                <div className="text-xl text-blue-600 font-semibold mt-1">Simplify3x</div>
                            </div>
                            <div className="flex items-center text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-slate-800 px-3 py-1 rounded-full text-sm mt-2 md:mt-0">
                                <Calendar className="w-4 h-4 mr-2" />
                                4.6+ Years
                            </div>
                        </div>

                        <div className="mt-6 space-y-3 text-gray-600 dark:text-gray-400 leading-relaxed">
                            <p>
                                As a Senior Software Developer at Simplify3x, I play a key role in the development and optimization of our core products.
                                My responsibilities include:
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>
                                    Lead the development of user-centric web applications using React.js and Vue.js, ensuring clean, maintainable, and scalable codebases
                                </li>
                                <li>
                                    Design and implement reusable, modular components that improve development speed and long-term maintainability
                                </li>
                                <li>
                                    Collaborate closely with product managers, designers, backend, and QA teams to translate business requirements into reliable frontend solutions
                                </li>
                                <li>
                                    Plan and manage sprint goals, break down tasks, and ensure smooth execution across development cycles
                                </li>
                                <li>
                                    Handle deployments across environments, coordinating releases to ensure stable and seamless production rollouts
                                </li>
                                <li>
                                    Mentor junior developers through hands-on guidance and code reviews, promoting best practices and consistent coding standards
                                </li>
                                <li>
                                    Drive frontend performance optimization, including lazy loading and code splitting, to deliver fast and responsive user experiences
                                </li>
                                <li>
                                    Contribute to improving overall engineering workflows by introducing better structure, documentation, and development standards
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
