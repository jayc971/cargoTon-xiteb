import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight, Package } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Newsletter Section */}
      <div className="bg-common-bg-color py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2 text-black">Stay Updated</h3>
              <p className="text-gray-800">Subscribe to our newsletter for the latest insights and updates.</p>
            </div>
            <div className="flex w-full md:w-auto space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white text-gray-900 border-0 min-w-[300px]"
              />
              <Button className="bg-black hover:bg-gray-800 text-white">
                Subscribe
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <Package className="h-8 w-8 text-common-bg-color" />
                <span className="text-2xl font-bold text-white">
                  Cargo<span className="text-common-bg-color">TON</span>
                </span>
              </Link>
              <p className="text-gray-300 mb-6">
                We are a leading business consulting firm dedicated to helping companies achieve sustainable growth and
                success through innovative strategies.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-common-bg-color transition-colors">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-common-bg-color transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-common-bg-color transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-common-bg-color transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-common-bg-color transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-300 hover:text-common-bg-color transition-colors">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="text-gray-300 hover:text-common-bg-color transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-gray-300 hover:text-common-bg-color transition-colors">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-300 hover:text-common-bg-color transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-common-bg-color transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/services/strategy" className="text-gray-300 hover:text-common-bg-color transition-colors">
                    Business Strategy
                  </Link>
                </li>
                <li>
                  <Link href="/services/management" className="text-gray-300 hover:text-common-bg-color transition-colors">
                    Team Management
                  </Link>
                </li>
                <li>
                  <Link href="/services/innovation" className="text-gray-300 hover:text-common-bg-color transition-colors">
                    Innovation Consulting
                  </Link>
                </li>
                <li>
                  <Link href="/services/risk" className="text-gray-300 hover:text-common-bg-color transition-colors">
                    Risk Management
                  </Link>
                </li>
                <li>
                  <Link href="/services/digital" className="text-gray-300 hover:text-common-bg-color transition-colors">
                    Digital Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/services/growth" className="text-gray-300 hover:text-common-bg-color transition-colors">
                    Growth Optimization
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-common-bg-color mt-1" />
                  <div className="text-gray-300">
                    <p>123 Business Street</p>
                    <p>Suite 100</p>
                    <p>New York, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-common-bg-color" />
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-common-bg-color" />
                  <span className="text-gray-300">info@cargoton.com</span>
                </div>
              </div>

              <div className="mt-6">
                <h5 className="font-semibold mb-2">Business Hours</h5>
                <div className="text-gray-300 text-sm">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2024 CargoTON. All rights reserved.</p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-common-bg-color transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-common-bg-color transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-common-bg-color transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
