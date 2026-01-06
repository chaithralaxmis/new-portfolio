import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [typingKey, setTypingKey] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTypingKey(prev => prev + 1);
    }, 5000); // Restart every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>

      <div className="container mx-auto text-center relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Chaithralaxmi S Shanbog
          </h1>
        </motion.div>

        <motion.p
          key={typingKey}
          className="text-2xl md:text-3xl text-gray-300 mb-8 font-light"
          initial={{ opacity: 1 }}
        >
          {Array.from("Senior Software Developer").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.05, delay: 0.5 + index * 0.1 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.p>

        <motion.div
          className="flex justify-center space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.a
            href="https://github.com/chaithralaxmis"
            target='_blank'
            className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all backdrop-blur-sm"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/chaithralaxmi-s-shanbog-22b527213/"
            className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all backdrop-blur-sm"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="mailto:chaithralaxmisshanbog@gmail.com"
            className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all backdrop-blur-sm"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Mail className="w-6 h-6" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
