"use client"

import { motion } from "framer-motion"
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { Meteors } from "@/components/ui/meteors"
import { IconCloud } from "@/components/ui/icon-cloud"
import { Github, Star } from "lucide-react"

export default function Section4() {
  return (
    <section className="py-24 relative overflow-hidden">
      <BackgroundBeams className="opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - CTA Card */}
          <div className="w-full lg:w-1/2">
            <CardContainer className="w-full">
              <CardBody className="w-full bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl border border-white/10 p-8 relative overflow-hidden">                <CardItem translateZ={50} className="text-3xl font-bold text-white mb-4">
                  Like This Template?
                </CardItem>
                <CardItem
                  as="p"
                  translateZ={30}
                  className="text-neutral-300 text-lg mb-8"
                >
                  Get this portfolio template from my GitHub and don't forget to leave a star! ⭐
                </CardItem>
                <CardItem translateZ={20} className="flex flex-col sm:flex-row gap-4">
                  <motion.a 
                    href="https://github.com/MKhalafHammad/portfolio-template" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-80 transition-opacity"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-5 h-5" />
                    Get Template
                  </motion.a>
                  <motion.a 
                    href="https://github.com/MKhalafHammad" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:opacity-80 transition-opacity"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Star className="w-5 h-5" />
                    Star Profile
                  </motion.a>
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>

          {/* Right side - IconCloud */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-md">
              <IconCloud 
                images={[
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg",
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/qt/qt-original.svg",
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
                  "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
                ]} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 