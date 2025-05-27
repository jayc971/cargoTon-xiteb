import { CheckCircle, Truck } from "lucide-react"

const WelcomeSection = () => {
  return (
    <div className="py-12 bg-gray-50 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="relative">
              <img
                src="/images/welcome-section.jpg"
                alt="Logistics Services"
                className="rounded-lg shadow-md"
              />
              <div className="absolute bottom-0 right-0 p-4 bg-white rounded-lg shadow-md transform translate-x-1/4 translate-y-1/4">
                <div className="flex items-center space-x-2">
                  <Truck className="h-8 w-8 text-common-bg-color" />
                  <div>
                    <p className="text-sm font-medium text-gray-800">Your Logistics Experts</p>
                    <p className="text-xs text-gray-500">Connecting businesses globally</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Welcome to CargoTon Logistics!</h2>
            <p className="text-gray-600 mb-6">
              At CargoTon, we specialize in comprehensive logistics services, including freight forwarding, warehousing, and supply chain management. Our mission is to optimize your cargo movement and ensure seamless delivery across the globe.
            </p>
            <ul className="list-none pl-0">
              <li className="mb-2 flex items-center">
                <CheckCircle className="h-5 w-5 text-common-bg-color mr-2" />
                International & Domestic Freight Solutions
              </li>
              <li className="mb-2 flex items-center">
                <CheckCircle className="h-5 w-5 text-common-bg-color mr-2" />
                Real-Time Cargo Tracking & Updates
              </li>
              <li className="mb-2 flex items-center">
                <CheckCircle className="h-5 w-5 text-common-bg-color mr-2" />
                Dedicated Support for All Logistics Needs
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WelcomeSection
