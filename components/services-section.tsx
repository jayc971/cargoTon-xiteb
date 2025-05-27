import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "Freight Forwarding",
    description:
      "We manage the transportation of your goods across borders, ensuring timely and secure delivery by air, sea, or land.",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-truck"
      >
        <rect x="1" y="7" width="15" height="13" rx="2" />
        <path d="M16 16V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v13" />
        <circle cx="5.5" cy="20.5" r="2.5" />
        <circle cx="18.5" cy="20.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Warehousing",
    description:
      "Our secure and modern warehouses provide short and long-term storage solutions for your inventory, with real-time tracking.",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-home"
      >
        <path d="M3 9.5L12 4l9 5.5V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.5z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Customs Clearance",
    description:
      "We handle all customs documentation and procedures, ensuring your shipments comply with international regulations.",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-file-check"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="m9 15 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Last Mile Delivery",
    description:
      "We ensure fast and reliable delivery from the warehouse to your customer’s doorstep, optimizing routes for efficiency.",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-navigation"
      >
        <polygon points="3 11 22 2 13 21 11 13 3 11" />
      </svg>
    ),
  },
]

const ServicesSection = () => {
  return (
    <section className="py-12 ">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Our Logistics Services</h2>
        <p className="text-gray-600 mb-8">We provide comprehensive logistics solutions to streamline your supply chain.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="mx-auto mb-4 p-3 bg-yellow-100 rounded-full w-fit group-hover:bg-common-bg-color transition-colors">
                <service.icon className="h-8 w-8 text-common-bg-color group-hover:text-black transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <a
                href="#"
                className="text-common-bg-color hover:text-common-bg-color-dark font-semibold inline-flex items-center"
              >
                Learn More
                <ArrowRight className="h-4 w-4 text-common-bg-color mr-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
