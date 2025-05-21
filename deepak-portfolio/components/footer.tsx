import Link from "next/link"
import { Github, Heart, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Deepak Singh</h3>
            <p className="mb-4">Full Stack Developer & Business Analyst based in Himachal Pradesh, India.</p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/Deepak-singh16"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com/in/deepak-singh-a42178234"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:deepaksinghg53@gmail.com"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#skills" className="hover:text-white transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#experience" className="hover:text-white transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Info</h3>
            <address className="not-italic space-y-2">
              <p>Baddi, Himachal Pradesh</p>
              <p>
                <a href="tel:+919015345957" className="hover:text-white transition-colors">
                  +91 9015345957
                </a>
              </p>
              <p>
                <a href="mailto:deepaksinghg53@gmail.com" className="hover:text-white transition-colors">
                  deepaksinghg53@gmail.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="flex items-center justify-center">
            &copy; {currentYear} Deepak Singh. All rights reserved. Made with{" "}
            <Heart className="h-4 w-4 mx-1 text-red-500" /> in India
          </p>
        </div>
      </div>
    </footer>
  )
}
