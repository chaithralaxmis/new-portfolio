import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
    return (
        <section id="education" className="py-20 bg-white dark:bg-slate-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold mb-16 text-center text-gray-900 dark:text-white"
                >
                    Education
                </motion.h2>

                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left"
                    >
                        {/* Icon */}
                        <div className="flex-shrink-0">
                            <div className="w-20 h-20 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                <GraduationCap className="w-10 h-10" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="space-y-2">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                Bachelor of Engineering in Computer Science
                            </h3>
                            <p className="text-xl text-blue-600 dark:text-blue-400 font-medium">
                                Moodalkatte Institute of Technology
                            </p>
                            <div className="flex items-center justify-center md:justify-start gap-2 text-gray-500 dark:text-gray-400 pt-2">
                                <Calendar className="w-5 h-5" />
                                <span>2017 - 2021</span>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 pt-4 leading-relaxed max-w-xl">
                                Focused on core computer science principles, software engineering, and full-stack development. Active participant in coding hackathons and technical seminars.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;
