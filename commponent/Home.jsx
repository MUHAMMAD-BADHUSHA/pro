// Home.js
import React from 'react';
import { motion } from 'framer-motion';
import Photo from './photo.jpg'

function Home() {
    return (
        <div  id='home' className="bg-gray-900 text-gray-100 min-h-screen">
              <div className="bg-gray-900 text-gray-100 min-h-screen">
            {/* Hero Section */}
            <motion.section
                className="py-20 bg-gray-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="container mx-auto text-center">
                    {/* Profile Picture Animation */}
                    <motion.div
                        className="inline-block rounded-full overflow-hidden w-40 h-40 mb-6"
                        initial={{ scale: 0, rotate: 180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                            type: 'spring',
                            stiffness: 100,
                            damping: 15,
                            delay: 0.3,
                        }}
                    >
                        <img
                            src={Photo}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Text Below Profile Picture */}
                    <motion.h1
                        className="text-5xl font-bold text-indigo-500 mb-4"
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        transition={{ type: 'spring', stiffness: 120 }}
                    >
                        Hello, I'm MUHAMMAD BADHUSHA
                    </motion.h1>
                    <motion.p
                        className="text-gray-300 text-lg mb-6"
                        initial={{ y: 50 }}
                        animate={{ y: 0 }}
                        transition={{ type: 'spring', stiffness: 100, delay: 0.3 }}
                    >
                        A Passionate Web Developer Based in [Your Location]
                    </motion.p>
                </div>
            </motion.section>
        </div>
            {/* Hero Section */}

           
           

            {/* About Section */}
            <motion.section
                id="about"
                className="py-20 bg-gray-900"
                initial={{ opacity: 0, x: -100 }}  // Slide in from the left
                animate={{ opacity: 1, x: 0 }}     // Slide into place
                transition={{ duration: 1, delay: 1.5 }}
            >
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-semibold text-indigo-500 mb-4">About Me</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        I'm a full-stack developer with a passion for creating beautiful and functional web applications. 
                        I specialize in modern technologies like React, Node.js, and Tailwind CSS. Let's build something great together!
                    </p>
                </div>
            </motion.section>

            {/* Projects Section */}
            <motion.section
                id="projects"
                className="py-20 bg-gray-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
            >
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-semibold text-indigo-500 mb-6">My Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Project 1 */}
                        <motion.div
                            className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                            initial={{ opacity: 0, x: 100 }}  // Slide in from the right
                            animate={{ opacity: 1, x: 0 }}     // Slide into place
                            transition={{ duration: 1 }}
                        >
                            <h3 className="text-xl font-semibold text-white">Project 1</h3>
                            <p className="text-gray-400 mt-2">A description of your first project, technologies used, and features.</p>
                        </motion.div>

                        {/* Project 2 */}
                        <motion.div
                            className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                            initial={{ opacity: 0, x: -100 }}  // Slide in from the left
                            animate={{ opacity: 1, x: 0 }}     // Slide into place
                            transition={{ duration: 1 }}
                        >
                            <h3 className="text-xl font-semibold text-white">Project 2</h3>
                            <p className="text-gray-400 mt-2">A description of your second project, technologies used, and features.</p>
                        </motion.div>

                        {/* Project 3 */}
                        <motion.div
                            className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                            initial={{ opacity: 0, x: 100 }}  // Slide in from the right
                            animate={{ opacity: 1, x: 0 }}     // Slide into place
                            transition={{ duration: 1, delay: 0.3 }}
                        >
                            <h3 className="text-xl font-semibold text-white">Project 3</h3>
                            <p className="text-gray-400 mt-2">A description of your third project, technologies used, and features.</p>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Contact Section */}
            <motion.section
                id="contact"
                className="py-20 bg-gray-900"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2.5 }}
            >
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-semibold text-indigo-500 mb-4">Get in Touch</h2>
                    <p className="text-gray-300 mb-8">Feel free to reach out if you'd like to work together or just say hello!</p>
                    <motion.form
                        className="max-w-lg mx-auto"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 2.7 }}
                    >
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-3 mb-4 bg-gray-800 text-gray-100 border border-gray-600 rounded-lg focus:outline-none focus:border-indigo-500"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-3 mb-4 bg-gray-800 text-gray-100 border border-gray-600 rounded-lg focus:outline-none focus:border-indigo-500"
                        />
                        <textarea
                            placeholder="Your Message"
                            className="w-full p-3 mb-4 bg-gray-800 text-gray-100 border border-gray-600 rounded-lg focus:outline-none focus:border-indigo-500"
                        ></textarea>
                        <motion.button
                            type="submit"
                            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
                            whileHover={{ scale: 1.1 }} // Hover effect to scale the button
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 2.8 }}
                        >
                            Send Message
                        </motion.button>
                    </motion.form>
                </div>
            </motion.section>
        </div>
    );
}

export default Home;

