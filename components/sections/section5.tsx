"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Github, Linkedin, Code2, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Section5() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Get in Touch
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Email Card */}
          <motion.a
            href="mailto:m.khalafhammad@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            className="col-span-1 md:col-span-2 lg:col-span-1"
          >
            <Card className="w-full bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-white/10 p-8 relative overflow-hidden">
              <CardContent className="p-8 flex flex-col items-center justify-center gap-4">
                <div className="p-4 rounded-full">
                  <Mail className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-white">Email</h3>
                <p className="text-blue-400">m.khalafhammad@gmail.com</p>
              </CardContent>
            </Card>
          </motion.a>

          {/* Phone Card */}
          <motion.a
            href="tel:+97430019938"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            className="col-span-1"
          >
            <Card className="h-full relative bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-white/10">
              <CardContent className="p-8 flex flex-col items-center justify-center gap-4">
                <div className="p-4 rounded-full">
                  <Phone className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold text-white">Phone</h3>
                <p className="text-purple-400">+974 30019938</p>
              </CardContent>
            </Card>
          </motion.a>

          {/* Location Card */}
          <motion.a
            href="https://www.google.com/maps/place/Qatar"
            target="_blank"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            className="col-span-1"
          >
            <Card className="h-full relative bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-white/10">
              <CardContent className="p-8 flex flex-col items-center justify-center gap-4">
                <div className="p-4 rounded-full">
                  <MapPin className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold text-white">Location</h3>
                <p className="text-purple-400">Qatar</p>
              </CardContent>
            </Card>
          </motion.a>

          {/* Social Links Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="col-span-1 md:col-span-2 lg:col-span-3"
          >
            <Card className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-white/10">
              <CardContent className="p-8">
                <div className="flex justify-center gap-8">
                  <motion.a
                    href="https://github.com/MKhalafHammad"
                    target="_blank"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    className="p-4 rounded-full hover:bg-white/20 transition-colors"
                  >
                    <Github className="w-8 h-8 text-blue-500" />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/m-khalafhammad"
                    target="_blank"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    className="p-4 rounded-full hover:bg-white/20 transition-colors"
                  >
                    <Linkedin className="w-8 h-8 text-purple-500" />
                  </motion.a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}