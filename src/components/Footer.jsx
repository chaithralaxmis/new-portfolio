import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="container mx-auto px-4 text-center"
            >
                <h2 className="text-2xl font-bold mb-6">Chaithralaxmi S Shanbog</h2>
                <div className="flex justify-center space-x-6 mb-8">
                    <motion.a whileHover={{ y: -5 }} href="https://github.com/chaithralaxmis" target='_blank' className="text-gray-400 hover:text-white transition-colors"><Github className="w-6 h-6" /></motion.a>
                    <motion.a whileHover={{ y: -5 }} target="_blank" href="https://www.linkedin.com/in/chaithralaxmi-s-shanbog-22b527213/" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-6 h-6" /></motion.a>
                    <motion.a whileHover={{ y: -5 }} target="_blank" href="mailto:chaithralaxmisshanbog@gmail.com" className="text-gray-400 hover:text-white transition-colors"><Mail className="w-6 h-6" /></motion.a>
                </div>
                <p className="text-gray-500 flex items-center justify-center gap-1">
                    &copy; {new Date().getFullYear()} All rights reserved. Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> using React & Tailwind.
                </p>
            </motion.div>
        </footer>
    );
};

export default Footer;
