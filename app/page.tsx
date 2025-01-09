
import Section1 from "@/components/sections/section1"
import Section2 from "@/components/sections/section2"
import Section3 from "@/components/sections/section3"
import Section4 from "@/components/sections/section4"
import Section5 from "@/components/sections/section5"
import { VelocityScroll } from "@/components/ui/scrollbasedvelocity"
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <Section1 />

      {/* Divider 1 */}
      <div className="py-12">
        <VelocityScroll 
          text="INNOVATIVE SOLUTIONS • MODERN TECHNOLOGY • "
          default_velocity={3}
          className="text-2xl font-bold text-blue-500/20"
        />
      </div>

      {/* Current Projects Section */}
      <Section2 />

      {/* Divider 2 */}
      <div className="py-12">
        <VelocityScroll 
          text="EXPERIENCE • PORTFOLIO • ACHIEVEMENTS • "
          default_velocity={-3}
          className="text-2xl font-bold text-blue-500/20"
        />
      </div>

      {/* Past Projects Section */}
      <Section3 />

      {/* Divider 3 */}
      <div className="py-12">
        <VelocityScroll 
          text="GET IN TOUCH • LET'S COLLABORATE • "
          default_velocity={3}
          className="text-2xl font-bold text-blue-500/20"
        />
      </div>

      {/* Portfolio CTA Section */}
      <Section4 />

      {/* Contact Section */}
      <Section5 />
    </main>
  )
}