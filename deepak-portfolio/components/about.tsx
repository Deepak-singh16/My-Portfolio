"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Calendar, MapPin, User } from "lucide-react"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-16 md:py-24 bg-slate-900" id="about">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">About Me</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-purple-600 mx-auto animate-pulse"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="prose prose-invert max-w-none mb-8">
            <p className="text-lg text-slate-300">
              I am a motivated and results-driven Full Stack Developer with hands-on experience in developing dynamic
              web applications using the MERN stack (MongoDB, Express, ReactJS, Node.js). I have a proven expertise in
              front-end and back-end development with a strong foundation in software engineering principles and
              problem-solving skills.
            </p>
            <p className="text-lg text-slate-300">
              I am adept at building scalable, user-centric websites and applications, with a focus on clean code,
              performance optimization, and seamless integration of APIs. I am known for collaborating in fast-paced
              team environments, achieving high-quality results under pressure.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-slate-800 p-6 rounded-lg shadow-lg shadow-teal-500/5 flex items-start space-x-4 card-hover">
              <User className="h-6 w-6 text-teal-500 mt-1" />
              <div>
                <h3 className="font-medium text-slate-100">Personal Info</h3>
                <p className="text-slate-400 mt-2">Born on February 1, 2004</p>
              </div>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg shadow-lg shadow-purple-500/5 flex items-start space-x-4 card-hover">
              <MapPin className="h-6 w-6 text-purple-500 mt-1" />
              <div>
                <h3 className="font-medium text-slate-100">Location</h3>
                <p className="text-slate-400 mt-2">Baddi, Himachal Pradesh, India</p>
              </div>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg shadow-lg shadow-teal-500/5 flex items-start space-x-4 card-hover">
              <Calendar className="h-6 w-6 text-teal-500 mt-1" />
              <div>
                <h3 className="font-medium text-slate-100">Experience</h3>
                <p className="text-slate-400 mt-2">2+ years in development</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
