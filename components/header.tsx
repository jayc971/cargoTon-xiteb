"use client"

import { Button } from "@/components/ui/button"
import { Menu, Package, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

const navItems = [
  {
    name: "HOME",
    href: "#",
    action: "scroll-top",
    subItems: [
      { name: "About Us", href: "#" },
      { name: "Our Team", href: "#" },
      { name: "Company History", href: "#" },
    ],
  },
  {
    name: "PAGES",
    href: "#",
    action: "popup",
    subItems: [
      { name: "About", href: "#" },
      { name: "Contact", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Privacy Policy", href: "#" },
    ],
  },
  {
    name: "TRACKING",
    href: "#",
    action: "popup",
    subItems: [],
  },
  {
    name: "SERVICES",
    href: "#",
    action: "scroll-services",
    subItems: [
      { name: "Business Strategy", href: "#" },
      { name: "Team Management", href: "#" },
      { name: "Innovation Consulting", href: "#" },
      { name: "Risk Management", href: "#" },
    ],
  },
  {
    name: "BLOG",
    href: "#",
    action: "scroll-blog",
    subItems: [
      { name: "Latest Articles", href: "#" },
      { name: "Industry News", href: "#" },
      { name: "Case Studies", href: "#" },
      { name: "Expert Insights", href: "#" },
    ],
  },
]

export default function Header() {
  const [activeItem, setActiveItem] = useState("HOME")
  const [showPopup, setShowPopup] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = (item: (typeof navItems)[0]) => {
    setActiveItem(item.name)

    switch (item.action) {
      case "scroll-top":
        window.scrollTo({ top: 0, behavior: "smooth" })
        break
      case "scroll-services":
        const servicesSection = document.querySelector('[data-section="services"]')
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: "smooth" })
        }
        break
      case "scroll-blog":
        const blogSection = document.querySelector('[data-section="blog"]')
        if (blogSection) {
          blogSection.scrollIntoView({ behavior: "smooth" })
        }
        break
      case "popup":
        setShowPopup(true)
        break
    }
  }

  const handleSubItemClick = () => {
    setShowPopup(true)
  }

  const handleButtonClick = () => {
    setShowPopup(true)
  }

  return (
    <>
      <header className="w-full bg-white shadow-sm">
        <nav className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4 lg:justify-between justify-end">
            <div className="flex items-center lg:justify-start justify-end w-full">
              <Link href="/" className="flex items-center space-x-2">
              <Package className="h-8 w-8 text-common-bg-color" />
              <span className="text-2xl font-bold text-gray-900">
                Cargo<span className="text-common-bg-color">TON</span>
              </span>
              </Link>
            </div>

            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.subItems.length > 0 ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                  <button
                    onClick={() => handleNavClick(item)}
                    className="text-gray-700 hover:text-common-bg-color transition-colors font-medium flex items-center group"
                  >
                    {activeItem === item.name && (
                    <span className="w-2 h-2 bg-common-bg-color rounded-full mr-2"></span>
                    )}
                    {item.name}
                    <ChevronDown className="h-4 w-4 ml-1 group-hover:text-common-bg-color" />
                  </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48">
                  {item.subItems.map((subItem) => (
                    <DropdownMenuItem
                    key={subItem.name}
                    onClick={handleSubItemClick}
                    className="cursor-pointer hover:bg-yellow-50 hover:text-common-bg-color"
                    >
                    {subItem.name}
                    </DropdownMenuItem>
                  ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                ) : (
                <button
                  onClick={() => handleNavClick(item)}
                  className="text-gray-700 hover:text-common-bg-color transition-colors font-medium flex items-center"
                >
                  {activeItem === item.name && (
                  <span className="w-2 h-2 bg-common-bg-color rounded-full mr-2"></span>
                  )}
                  {item.name}
                </button>
                )}
              </div>
              ))}
            </div>

            <div className="flex space-x-4 w-full ">
              <div className="flex flex-col md:flex-row gap-2 lg:gap-4 ml-auto items-end">
              <Button
                onClick={handleButtonClick}
                className="bg-common-bg-color hover:bg-yellow-600 text-black font-semibold px-6"
              >
                GET A QUOTE
              </Button>
              <Button
                onClick={handleButtonClick}
                className="bg-black hover:bg-gray-800 text-white font-semibold px-6"
              >
                SIGN IN
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu className="h-4 w-4" />
              </Button>
              </div>
            </div>
            </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <button
                      onClick={() => {
                        handleNavClick(item)
                        setMobileMenuOpen(false)
                      }}
                      className="text-gray-700 hover:text-common-bg-color transition-colors font-medium flex items-center w-full text-left"
                    >
                      {activeItem === item.name && (
                        <span className="w-2 h-2 bg-common-bg-color rounded-full mr-2"></span>
                      )}
                      {item.name}
                    </button>
                    {item.subItems.length > 0 && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.subItems.map((subItem) => (
                          <button
                            key={subItem.name}
                            onClick={() => {
                              handleSubItemClick()
                              setMobileMenuOpen(false)
                            }}
                            className="text-gray-600 hover:text-common-bg-color transition-colors text-sm block"
                          >
                            {subItem.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Under Construction Popup */}
      <Dialog open={showPopup} onOpenChange={setShowPopup}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-common-bg-color">🚧 Under Construction</DialogTitle>
            <DialogDescription className="text-center">
              This feature is still being built. We're working hard to bring you an amazing experience. Please check
              back soon!
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center mt-4">
            <Button onClick={() => setShowPopup(false)} className="bg-common-bg-color hover:bg-yellow-600 text-black">
              Got it!
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
