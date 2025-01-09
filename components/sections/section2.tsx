"use client"

import { motion } from "framer-motion"
import { VelocityScroll } from "@/components/ui/scrollbasedvelocity"
import { GridBackgroundDemo } from "@/components/ui/grid-background"
import { WavyBackground } from "@/components/ui/wavy-background"
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card"
import { Code2, Star } from "lucide-react"

export default function Section2() {
  return (
    <>
      {/* Current Projects Section with Wavy Background */}
      <section className="py-32 relative">
        <WavyBackground className="absolute inset-0 opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ongoing Projects
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Multi-vendor Marketplace",
                description: "Comprehensive marketplace platform enabling multiple vendors to sell products with integrated payment and inventory management, and with super admin dashboard to board the vendors and manage the platform",
                icon: Code2,
                tech: ["Next.js", "Redux", "PostgreSQL", "Stripe", "Prisma", "Tailwind", "Docker"],
                stars: 15
              },
              {
                title: "Event Management",
                description: "Full-featured event planning and management system with scheduling, and attendee tracking",
                icon: Code2,
                tech: ["Next.js", "PostgreSQL", "Prisma", "Tailwind", "Docker", "GlusterFS"],
                stars: 12
              },
              {
                title: "Blackbird",
                description: "Automated attendance tracking mobile application and real-time monitoring",
                icon: Code2,
                tech: ["Flutter", "FastAPI", "Kubernetes", "Docker", "PostgreSQL"],
                stars: 18
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <CardContainer className="w-full">
                  <CardBody className="relative bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl border border-white/10 p-6">
                    <CardItem
                      translateZ={50}
                      className="flex items-center gap-4 mb-4"
                    >
                      <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-2.5 rounded-xl">
                        <project.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-xl font-bold text-white">
                          {project.title}
                        </h3>
                      </div>
                    </CardItem>
                    
                    <CardItem
                      as="p"
                      translateZ={30}
                      className="text-neutral-300 text-sm mt-2 min-h-[60px]"
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
    </>
  )
} 