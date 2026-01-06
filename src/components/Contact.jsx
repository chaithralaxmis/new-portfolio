import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-white dark:bg-slate-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white"
                >
                    Get In Touch
                </motion.h2>
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="md:w-1/2 space-y-6"
                    >
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>

                        <motion.div
                            whileHover={{ x: 5 }}
                            className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-slate-800 rounded-lg hover:shadow-md transition-shadow"
                        >
                            <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full text-blue-600 dark:text-blue-400">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white">Email Me</h4>
                                <p className="text-gray-600 dark:text-gray-400">chaithralaxmisshanbog@gmail.com</p>
                            </div>
                        </motion.div>

                        {/* <motion.div
                            whileHover={{ x: 5 }}
                            className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-slate-800 rounded-lg hover:shadow-md transition-shadow"
                        >
                            <div className="bg-green-100 dark:bg-green-900/50 p-3 rounded-full text-green-600 dark:text-green-400">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white">Call Me</h4>
                                <p className="text-gray-600 dark:text-gray-400">+91 98765 43210</p>
                            </div>
                        </motion.div> */}

                        <motion.div
                            whileHover={{ x: 5 }}
                            className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-slate-800 rounded-lg hover:shadow-md transition-shadow"
                        >
                            <div className="bg-purple-100 dark:bg-purple-900/50 p-3 rounded-full text-purple-600 dark:text-purple-400">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white">Location</h4>
                                <p className="text-gray-600 dark:text-gray-400">Bangalore, India</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="md:w-1/2 bg-gray-50 dark:bg-slate-800 p-8 rounded-2xl shadow-sm"
                    >
                        <form className="space-y-6">
                            <div>
                                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900 outline-none transition-all" placeholder="Your Name" />
                            </div>
                            <div>
                                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Email</label>
                                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900 outline-none transition-all" placeholder="your@email.com" />
                            </div>
                            <div>
                                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Message</label>
                                <textarea className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900 outline-none transition-all h-32" placeholder="Your message..."></textarea>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                            >
                                <Send className="w-5 h-5" />
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section >
    );
};

export default Contact;
