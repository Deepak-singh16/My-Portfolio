"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { BookOpen, Calendar, Medal, School } from "lucide-react"

export default function Education() {
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

  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Maharaja Agrasen University",
      location: "Baddi, Himachal Pradesh",
      period: "Aug 2021 - Jun 2025",
      score: "CGPA: 8.6",
    },
    {
      degree: "Senior Secondary (Non-Medical)",
      institution: "Sushila Public Sr. Sec. School",
      location: "Baddi, Himachal Pradesh",
      period: "Mar 2020 - Apr 2021",
      score: "Percentage: 89%",
    },
    {
      degree: "Matriculation (10th)",
      institution: "Sushila Public Sr. Sec. School",
      location: "Baddi, Himachal Pradesh",
      period: "Mar 2018 - Apr 2019",
      score: "Percentage: 90%",
    },
  ]

  const certifications = [
    {
      title: "Business Development Certification",
      issuer: "Udemy",
      date: "2023",
    },
    {
      title: "Full Stack Development Internship",
      issuer: "Hoping Minds",
      date: "2024",
    },
    {
      title: "ReactJS Certification",
      issuer: "Solitaire Infosys",
      date: "2023",
    },
    {
      title: "JavaScript Mastery Course",
      issuer: "Udemy",
      date: "2022",
    },
  ]

  const achievements = [
    "Winner, Intercollege Idea Pitching Competition",
    "Best Intern Award – Solitaire Infosys",
    "Academic Merit Certificates – HPBOSE (Class X & XII)",
    "Team Leader, GDSC (MAU)",
    "Coordinator, SIH Bootcamp",
    "Sports Coordinator, University Sports Week",
  ]

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-950" id="education">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-slate-100">
              Education & Achievements
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-purple-600 mx-auto"></div>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              My academic journey and notable accomplishments
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="mb-16">
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-semibold mb-6 text-slate-900 dark:text-slate-100 flex items-center"
            >
              <School className="h-6 w-6 mr-2 text-teal-500" />
              Education
            </motion.h3>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h4 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{edu.degree}</h4>
                    <div className="flex items-center mt-2 md:mt-0 text-slate-600 dark:text-slate-400">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="text-sm">{edu.period}</span>
                    </div>
                  </div>
                  <div className="flex items-center mb-2 text-slate-700 dark:text-slate-300">
                    <BookOpen className="h-4 w-4 mr-2 text-purple-600" />
                    <span>{edu.institution}</span>
                  </div>
                  <div className="flex justify-between text-slate-600 dark:text-slate-400">
                    <span>{edu.location}</span>
                    <span className="font-medium text-teal-600 dark:text-teal-400">{edu.score}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={containerVariants}>
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-semibold mb-6 text-slate-900 dark:text-slate-100 flex items-center"
              >
                <Medal className="h-6 w-6 mr-2 text-purple-600" />
                Certifications
              </motion.h3>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800"
                  >
                    <h4 className="text-lg font-medium text-slate-900 dark:text-slate-100">{cert.title}</h4>
                    <div className="flex justify-between mt-2 text-slate-600 dark:text-slate-400 text-sm">
                      <span>{cert.issuer}</span>
                      <span>{cert.date}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={containerVariants}>
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-semibold mb-6 text-slate-900 dark:text-slate-100 flex items-center"
              >
                <Medal className="h-6 w-6 mr-2 text-teal-500" />
                Achievements
              </motion.h3>

              <motion.div
                variants={itemVariants}
                className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800"
              >
                <ul className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start text-slate-700 dark:text-slate-300">
                      <span className="text-teal-500 mr-2">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
