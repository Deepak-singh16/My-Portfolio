"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Projects() {
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

  const projects = [
    {
      title: "E-commerce Website",
      description:
        "A single-vendor clothing store with admin dashboard and shopping cart functionality. Built with MERN stack (MongoDB, Express.js, React.js, Node.js).",
      image: "/ecommerce-project.png",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux"],
      github: "https://github.com/Deepak-singh16",
      demo: "#",
    },
    {
      title: "Cryptocurrency Tracker",
      description:
        "Real-time cryptocurrency monitor using public APIs and interactive charts. Users can track prices, market cap, and historical data for various cryptocurrencies.",
      image: "/crypto-project.png",
      tags: ["React.js", "Chart.js", "API Integration", "Tailwind CSS"],
      github: "https://github.com/Deepak-singh16",
      demo: "#",
    },
    {
      title: "Weather Application",
      description:
        "A responsive weather application that displays real-time weather data for any location. Integrates with OpenWeather API to provide accurate forecasts.",
      image: "/weather-project.png",
      tags: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
      github: "https://github.com/Deepak-singh16",
      demo: "#",
    },
    {
      title: "Virtual Voice Assistant",
      description:
        "JavaScript-based voice assistant that can perform basic tasks through voice commands, such as searching the web, playing music, and providing information.",
      image: "/voice-project.png",
      tags: ["JavaScript", "Web Speech API", "HTML", "CSS"],
      github: "https://github.com/Deepak-singh16",
      demo: "#",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900" id="projects">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-slate-100">Projects</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-purple-600 mx-auto"></div>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Showcasing my technical skills and creative problem-solving abilities
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-slate-900 rounded-lg overflow-hidden shadow-lg border border-slate-800 hover:shadow-teal-500/20 transition-all duration-500 group card-hover"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="default"
                        asChild
                        className="bg-teal-500 hover:bg-teal-600 shadow-lg shadow-teal-500/20"
                      >
                        <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-1" /> Demo
                        </Link>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="bg-slate-800/50 backdrop-blur-sm border-teal-500/30 text-teal-400 hover:bg-teal-500/20"
                      >
                        <Link href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-1" /> Code
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-slate-100">{project.title}</h3>
                  <p className="text-slate-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-slate-800 text-teal-400 rounded-full text-xs animate-shimmer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="text-center mt-12">
            <Button asChild variant="outline" className="border-slate-300 dark:border-slate-700">
              <Link href="https://github.com/Deepak-singh16" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> View More on GitHub
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
