import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDark, setIsDark] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') === 'dark' ||
                (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
        }
        return false;
    });

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-md py-4 text-gray-900 dark:text-white'
                : 'bg-transparent py-6 text-white'
                }`}
        >
            <nav className="container mx-auto px-4 flex justify-between items-center">
                <motion.h1
                    whileHover={{ scale: 1.05 }}
                    className="text-2xl font-bold cursor-pointer"
                >
                    Chaithralaxmi
                </motion.h1>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <ul className="flex space-x-8 font-medium">
                        {['About', 'Experience', 'Projects', 'Languages', 'Contact'].map((item) => (
                            <motion.li key={item} whileHover={{ scale: 1.1 }}>
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    className={`hover:text-blue-500 transition-colors ${isScrolled ? 'text-gray-800 dark:text-gray-200' : 'text-gray-200'
                                        }`}
                                >
                                    {item}
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                    <button
                        onClick={() => setIsDark(!isDark)}
                        className={`p-2 rounded-full transition-colors ${isScrolled
                            ? 'hover:bg-gray-100 dark:hover:bg-slate-800'
                            : 'hover:bg-white/10'
                            }`}
                    >
                        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>
                </div>

                {/* Mobile Controls */}
                <div className="md:hidden flex items-center space-x-4">
                    <button
                        onClick={() => setIsDark(!isDark)}
                        className="p-2 rounded-full hover:bg-white/10"
                    >
                        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 text-gray-900 dark:text-white shadow-lg overflow-hidden"
                    >
                        <div className="flex flex-col space-y-4 p-6">
                            {['About', 'Experience', 'Projects', 'Languages', 'Contact'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block hover:text-blue-500 dark:hover:text-blue-400 font-medium"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;
