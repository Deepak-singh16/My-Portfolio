"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send } from "lucide-react"

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitSuccess(true)

    // Reset form after success
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" })
      setSubmitSuccess(false)
    }, 3000)
  }

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
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900" id="contact">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-slate-100">Get In Touch</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-purple-600 mx-auto"></div>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <motion.div variants={containerVariants} className="space-y-6">
              <motion.h3 variants={itemVariants} className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                Contact Information
              </motion.h3>

              <motion.div variants={itemVariants} className="flex items-start space-x-4">
                <div className="bg-white dark:bg-slate-950 p-3 rounded-full shadow-sm">
                  <Phone className="h-6 w-6 text-teal-500" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-slate-100">Phone</h4>
                  <p className="text-slate-600 dark:text-slate-400 mt-1">+91 9015345957</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start space-x-4">
                <div className="bg-white dark:bg-slate-950 p-3 rounded-full shadow-sm">
                  <Mail className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-slate-100">Email</h4>
                  <p className="text-slate-600 dark:text-slate-400 mt-1">deepaksinghg53@gmail.com</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start space-x-4">
                <div className="bg-white dark:bg-slate-950 p-3 rounded-full shadow-sm">
                  <MapPin className="h-6 w-6 text-teal-500" />
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-slate-100">Location</h4>
                  <p className="text-slate-600 dark:text-slate-400 mt-1">Baddi, Himachal Pradesh, India</p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="mt-8 p-6 bg-white dark:bg-slate-950 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800"
              >
                <h4 className="font-semibold text-lg text-slate-900 dark:text-slate-100 mb-4">Connect With Me</h4>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your
                  vision.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Deepak-singh16"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-100 dark:bg-slate-800 p-3 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    <svg
                      className="h-5 w-5 text-slate-700 dark:text-slate-300"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.166 8.84 21.49C9.34 21.581 9.52 21.272 9.52 21.007C9.52 20.719 9.514 20.061 9.51 19.191C6.73 19.792 6.14 17.81 6.14 17.81C5.689 16.629 5.029 16.32 5.029 16.32C4.109 15.677 5.094 15.69 5.094 15.69C6.1 15.76 6.63 16.741 6.63 16.741C7.5 18.255 8.97 17.858 9.54 17.602C9.631 16.97 9.889 16.573 10.17 16.348C7.879 16.12 5.479 15.272 5.479 11.45C5.479 10.387 5.879 9.519 6.65 8.839C6.55 8.584 6.2 7.619 6.75 6.219C6.75 6.219 7.569 5.95 9.5 7.267C10.29 7.044 11.15 6.932 12 6.928C12.85 6.932 13.71 7.044 14.5 7.267C16.43 5.95 17.249 6.219 17.249 6.219C17.8 7.619 17.45 8.584 17.35 8.839C18.121 9.519 18.52 10.387 18.52 11.45C18.52 15.282 16.12 16.119 13.82 16.339C14.17 16.619 14.49 17.179 14.49 18.029C14.49 19.289 14.48 20.629 14.48 21.007C14.48 21.275 14.66 21.587 15.17 21.489C19.138 20.162 22 16.417 22 12C22 6.477 17.523 2 12 2Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/in/deepak-singh-a42178234"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-100 dark:bg-slate-800 p-3 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    <svg
                      className="h-5 w-5 text-slate-700 dark:text-slate-300"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={containerVariants}>
              <motion.form
                variants={itemVariants}
                onSubmit={handleSubmit}
                className="bg-white dark:bg-slate-950 p-6 rounded-lg shadow-sm border border-slate-200 dark:border-slate-800"
              >
                <h3 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-slate-100">Send Me a Message</h3>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                    >
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message here..."
                      required
                      className="w-full min-h-[150px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-teal-500 to-purple-600 hover:from-teal-600 hover:to-purple-700 text-white"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : submitSuccess ? (
                      <span className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Message Sent!
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </div>
              </motion.form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
