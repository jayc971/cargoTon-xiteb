import type React from "react"
import { Quote } from "lucide-react"
import { Star, Truck, PackageCheck, Clock } from "lucide-react"
import { CheckCircle } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  title: string
  quote: string
  rating: number
  image: string
}

interface WhyChooseUsItem {
  id: number
  title: string
  description: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Alex Turner",
    title: "Logistics Manager, FastMove Inc.",
    quote: "Our deliveries have never been smoother. The tracking and support are top-notch!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&w=50&h=50&facepad=2",
  },
  {
    id: 2,
    name: "Maria Lopez",
    title: "Supply Chain Lead, CargoPro",
    quote: "Reliable and efficient service. Our clients are happier than ever.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=50&h=50&facepad=2",
  },
  {
    id: 3,
    name: "Samuel Green",
    title: "Operations Director, ShipRight",
    quote: "The real-time updates and professional team make all the difference.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=50&h=50&facepad=2",
  },
]

const whyChooseUsData: WhyChooseUsItem[] = [
  {
    id: 1,
    title: "On-Time Delivery",
    description: "We ensure your cargo arrives on schedule, every time.",
    icon: Clock,
  },
  {
    id: 2,
    title: "Secure Handling",
    description: "Your goods are handled with utmost care and security.",
    icon: PackageCheck,
  },
  {
    id: 3,
    title: "Fleet of Experts",
    description: "Our experienced drivers and logistics experts guarantee smooth operations.",
    icon: Truck,
  },
]

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">What Our Logistics Clients Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6">
              <Quote className="h-8 w-8 text-common-bg-color mb-4" />
              <p className="text-gray-700 mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-common-bg-color text-common-bg-color" />
                ))}
              </div>
              <div className="flex items-center">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="rounded-full w-10 h-10 mr-4"
                />
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Why Choose Our Logistics Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUsData.map((item) => (
              <div key={item.id} className="flex flex-col items-center text-center">
                <div className="p-3 bg-yellow-100 rounded-lg">
                  <item.icon className="h-6 w-6 text-common-bg-color" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-800">{item.title}</h3>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
