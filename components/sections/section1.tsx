"use client"

import { motion } from "framer-motion"
import { IconCloud } from "@/components/ui/icon-cloud"
import SphereAnimation from "@/components/ui/sphereanimation"

export default function Section1() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <SphereAnimation />
      
      <div className="relative z-10 px-4 pt-20 sm:pt-32 max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Left side content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl space-y-8"
          >
            <div className="space-y-2">
              <h1 className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Mohammed K.
              </h1>
              <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent opacity-80">
                Hammad
              </h2>
            </div>
            
            <span className="inline-block text-blue-400 bg-blue-900/20 px-6 py-2 rounded-full text-sm font-medium">
              Full Stack Developer
            </span>
            
            <h3 className="text-4xl md:text-5xl font-bold text-white/90">
              Building Digital Solutions
            </h3>
            
            <p className="text-xl text-gray-400 max-w-lg">
              Transforming ideas into secure and scalable applications
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 