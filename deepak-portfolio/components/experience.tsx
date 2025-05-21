"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Briefcase, Calendar } from "lucide-react"

export default function Experience() {
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

  const experiences = [
    {
      company: "Balaji Loomtex Pvt. Ltd.",
      position: "Business Development & SAP Analyst",
      period: "Dec 2024 - May 2024",
      description: [
        "Identified and nurtured business opportunities, enhancing client acquisition.",
        "Analyzed sales data via SAP, improving strategic decision-making.",
        "Coordinated with teams to support revenue generation.",
      ],
    },
    {
      company: "Hoping Minds",
      position: "Front-End Development Intern",
      period: "Jul 2024 - Sept 2024",
      description: [
        "Built responsive ReactJS interfaces aligned with client expectations.",
        "Conducted user research and collaborated with teams to implement features.",
        "Developed and maintained front-end components for web applications.",
      ],
    },
    {
      company: "Solitaire Infosys",
      position: "ReactJS Intern",
      period: "Jun 2023 - Aug 2023",
      description: [
        "Developed engaging web UIs, contributing to improved UX.",
        "Recognized as Best Intern for delivering impactful results.",
        "Collaborated with senior developers to implement new features and fix bugs.",
      ],
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-950" id="experience">
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
              Professional Experience
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-purple-600 mx-auto"></div>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              My journey through various roles and organizations
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-0.5 bg-slate-200 dark:bg-slate-800"></div>

            {/* Experience items */}
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative mb-12 md:mb-0 md:clear-both ${
                  index % 2 === 0 ? "md:float-left md:pr-10 md:text-right" : "md:float-right md:pl-10"
                } md:w-1/2`}
              >
                <div className="mb-8 md:mb-0">
                  {/* Timeline dot */}
                  <div
                    className={`absolute top-0 ${
                      index % 2 === 0 ? "right-0 md:right-0 md:-mr-2.5" : "left-0 md:left-0 md:-ml-2.5"
                    } md:left-1/2 md:transform md:-translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-r from-teal-500 to-purple-600 border-4 border-white dark:border-slate-950`}
                  ></div>

                  {/* Content */}
                  <div
                    className={`relative ml-8 md:ml-0 p-6 bg-slate-50 dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800 ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <div className="flex items-center mb-2 text-teal-600 dark:text-teal-400">
                      <Briefcase className="h-5 w-5 mr-2" />
                      <h3 className="text-xl font-semibold">{exp.position}</h3>
                    </div>
                    <h4 className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-2">{exp.company}</h4>
                    <div className="flex items-center mb-4 text-slate-600 dark:text-slate-400">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{exp.period}</span>
                    </div>
                    <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 text-teal-500">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="clear-both"></div>
        </motion.div>
      </div>
    </section>
  )
}
