import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Monitor, Layout, Database, Globe } from 'lucide-react';
import chaithra from '../assets/chaithra.jpg';

const About = () => {
    const skills = [
        { name: 'Vue.js', icon: <Monitor className="w-5 h-5" />, color: 'bg-green-100 text-green-700' },
        { name: 'React.js', icon: <Code2 className="w-5 h-5" />, color: 'bg-blue-100 text-blue-700' },
        { name: 'HTML', icon: <Layout className="w-5 h-5" />, color: 'bg-orange-100 text-orange-700' },
        { name: 'CSS', icon: <Globe className="w-5 h-5" />, color: 'bg-blue-100 text-blue-600' },
        { name: 'Javascript', icon: <Database className="w-5 h-5" />, color: 'bg-yellow-100 text-yellow-700' },
        { name: 'Bootstrap', icon: <Layout className="w-5 h-5" />, color: 'bg-purple-100 text-purple-700' },
        { name: 'Tailwind', icon: <Code2 className="w-5 h-5" />, color: 'bg-cyan-100 text-cyan-700' },
        { name: 'Node.js', icon: <Database className="w-5 h-5" />, color: 'bg-green-100 text-green-700' },
    ];

    return (
        <section id="about" className="py-20 bg-white dark:bg-slate-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="md:w-1/2 justify-items-center"
                    >
                        <img
                            src={chaithra}
                            alt="Working Professional"
                            loading="lazy"
                            className="rounded-lg shadow-2xl object-cover h-[500px]"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="md:w-1/2"
                    >
                        <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white border-l-4 border-blue-500 pl-4">About Me</h2>
                        <div className="text-lg leading-relaxed text-gray-600 dark:text-gray-400 mb-8 space-y-4">
                            <p>
                                I am a dedicated Senior Software Developer with over 4.6 years of experience in building dynamic and responsive web applications.
                                I currently work at <span className="font-semibold text-gray-900 dark:text-white">Simplify3x</span>, where I leverage my expertise to deliver high-quality software solutions.
                            </p>
                            <p>
                                Passionate about creating intuitive user interfaces and writing clean, maintainable code.
                                I thrive in collaborative environments and am always eager to learn new technologies.
                            </p>
                        </div>

                        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Technical Skills</h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05 }}
                                    className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium ${skill.color} cursor-default`}
                                >
                                    {skill.icon}
                                    <span>{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
