"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, Database, Layout, Server, Terminal, PenToolIcon as Tool } from "lucide-react"

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6 text-teal-500" />,
      skills: ["JavaScript", "Python", "C", "C++", "SQL"],
    },
    {
      title: "Frontend Development",
      icon: <Layout className="h-6 w-6 text-purple-600" />,
      skills: ["HTML5", "CSS3", "ReactJS", "Bootstrap", "Tailwind CSS"],
    },
    {
      title: "Backend Development",
      icon: <Server className="h-6 w-6 text-teal-500" />,
      skills: ["Node.js", "Express.js", "MongoDB", "API Integration"],
    },
    {
      title: "Tools & Technologies",
      icon: <Tool className="h-6 w-6 text-purple-600" />,
      skills: ["VS Code", "Git", "GitHub", "Postman", "Chrome DevTools"],
    },
    {
      title: "Database Management",
      icon: <Database className="h-6 w-6 text-teal-500" />,
      skills: ["MongoDB", "SQL", "DBMS"],
    },
    {
      title: "Other Skills",
      icon: <Terminal className="h-6 w-6 text-purple-600" />,
      skills: ["OOPs", "Operating Systems", "Software Engineering", "Version Control"],
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-slate-950" id="skills">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">Skills & Technologies</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-purple-600 mx-auto animate-pulse"></div>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiencies
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-slate-900 rounded-lg shadow-lg p-6 border border-slate-800 hover:border-teal-500/30 transition-all duration-300 card-hover"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold ml-2 text-slate-100">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-slate-800 text-teal-400 rounded-full text-sm animate-shimmer"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-16 bg-slate-900 rounded-lg shadow-lg p-8 border border-slate-800"
          >
            <h3 className="text-2xl font-semibold mb-6 text-slate-100 text-center">Skill Proficiency</h3>
            <div className="space-y-6">
              {[
                { name: "Frontend Development", percentage: 90 },
                { name: "Backend Development", percentage: 85 },
                { name: "JavaScript", percentage: 90 },
                { name: "React.js", percentage: 85 },
                { name: "Node.js", percentage: 80 },
                { name: "MongoDB", percentage: 75 },
              ].map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-300">{skill.name}</span>
                    <span className="text-teal-400">{skill.percentage}%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 1, delay: 0.2 * index }}
                      className="h-full bg-gradient-to-r from-teal-500 to-purple-600 rounded-full animate-pulse"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
