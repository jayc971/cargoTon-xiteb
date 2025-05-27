"use client"

import { useEffect, useState } from "react"
import { Users, Award, Clock, Star } from "lucide-react"

const stats = [
  {
    icon: Users,
    number: 500,
    label: "Happy Clients",
    suffix: "+",
  },
  {
    icon: Award,
    number: 150,
    label: "Projects Completed",
    suffix: "+",
  },
  {
    icon: Clock,
    number: 15,
    label: "Years Experience",
    suffix: "+",
  },
  {
    icon: Star,
    number: 98,
    label: "Success Rate",
    suffix: "%",
  },
]

function CountUp({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return <span>{count}</span>
}

export default function StatsSection() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-1 bg-common-bg-color mr-4"></div>
            <span className="text-gray-300 font-medium tracking-wider">OUR ACHIEVEMENTS</span>
            <div className="w-12 h-1 bg-common-bg-color ml-4"></div>
          </div>
          <h2 className="text-4xl font-bold mb-4">Numbers That Speak</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Our track record demonstrates our commitment to excellence and client satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto mb-4 p-4 bg-common-bg-color rounded-full w-fit">
                <stat.icon className="h-8 w-8 text-black" />
              </div>
              <div className="text-4xl font-bold mb-2 text-common-bg-color">
                <CountUp end={stat.number} />
                {stat.suffix}
              </div>
              <div className="text-gray-300 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
