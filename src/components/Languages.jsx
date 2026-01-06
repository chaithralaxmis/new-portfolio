
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Languages as LangIcon } from 'lucide-react';

const Languages = () => {
    const languages = [
        {
            name: 'English',
            greeting: 'Hello! I can communicate fluently in English.'
        },
        {
            name: 'Kannada',
            greeting: 'ನಮಸ್ಕಾರ! ನಾನು ಕನ್ನಡದಲ್ಲಿ ಮಾತನಾಡಬಲ್ಲೆ.'
        },
        {
            name: 'Hindi',
            greeting: 'नमस्ते! मैं हिंदी में बात कर सकती हूँ।'
        },
        {
            name: 'Konkani',
            greeting: 'Dev Boren Korun! Hanv Konkani uloita.'
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % languages.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [languages.length]);

    return (
        <section id="languages" className="py-20 bg-white dark:bg-slate-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white flex items-center justify-center gap-3"
                >
                    <LangIcon className="w-10 h-10 text-blue-600" />
                    Languages I Know
                </motion.h2>

                <div className="max-w-xl mx-auto h-[200px] flex items-center justify-center">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="bg-gray-50 dark:bg-slate-800 p-8 rounded-xl shadow-lg border-t-4 border-blue-500 w-full text-center"
                        >
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">{languages[currentIndex].name}</h3>
                            <motion.p
                                className="text-xl text-gray-700 dark:text-gray-300 font-medium font-mono min-h-[3.5rem]"
                            >
                                {Array.from(languages[currentIndex].greeting).map((char, charIndex) => (
                                    <motion.span
                                        key={charIndex}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.03, delay: charIndex * 0.04 }}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </motion.p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Indicators */}
                <div className="flex justify-center mt-8 gap-2">
                    {languages.map((_, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-blue-600 w-6' : 'bg-gray-300 dark:bg-slate-700'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Languages;
