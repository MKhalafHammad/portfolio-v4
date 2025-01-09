"use client"

import { motion } from "framer-motion"
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { Plane, Stethoscope, Users, Network } from "lucide-react"

export default function Section3() {
  return (
    <section className="relative min-h-screen py-20">
      <BackgroundBeams className="absolute inset-0" />
      <div className="container mx-auto px-4 relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Past Projects & Experience
          </h2>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto relative">
          {[
            {
              title: "Airplane Reservation System",
              description: "Complete flight booking system with user management, seat selection, and booking management features",
              icon: Plane,
              tech: ["C++", "SQLite", "Qt Framework"],
              gradient: "from-blue-500 to-blue-600"
            },
            {
              title: "Medical Corporation System",
              description: "Healthcare management platform featuring patient records, appointment scheduling, and medical history tracking",
              icon: Stethoscope,
              tech: ["Java", "Oracle SQL", "JavaFX"],
              gradient: "from-purple-500 to-purple-600"
            },
            {
              title: "Conference Web Application",
              description: "Real-time conference management system with live updates, session tracking, and attendee management",
              icon: Users,
              tech: ["JavaScript", "HTML", "CSS", "Prisma"],
              gradient: "from-cyan-500 to-cyan-600"
            },
            {
              title: "Network Infrastructure",
              description: "Enterprise network setup with dedicated servers, security protocols, and network monitoring",
              icon: Network,
              tech: ["Cisco Packet Tracer", "Networking", "Security"],
              gradient: "from-indigo-500 to-indigo-600"
            }
          ].map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <CardContainer className="w-full">
                <CardBody className="relative h-full bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl border border-white/10 p-8 backdrop-blur-sm">
                  <CardItem translateZ={50} className="flex items-center gap-3">
                    <div className={`bg-gradient-to-r ${project.gradient} p-2.5 rounded-xl`}>
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xl font-bold text-white">{project.title}</span>
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ={30}
                    className="text-neutral-300 text-sm max-w-sm mt-4"
                  >
                    {project.description}
                  </CardItem>
                  <CardItem translateZ={20} className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-900/30 px-3 py-1 rounded-full text-sm text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 