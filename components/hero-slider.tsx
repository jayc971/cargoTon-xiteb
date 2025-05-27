"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function HeroSlider() {
  const [showPopup, setShowPopup] = useState(false)

  const handleButtonClick = () => {
    setShowPopup(true)
  }

  return (
    <>
      <section className="bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-0 items-center min-h-[600px]">
            <div className="py-16 lg:py-24">
              <div className="flex items-center mb-4">
                <div className="w-12 h-1 bg-common-bg-color mr-4"></div>
                <span className="text-gray-600 font-medium tracking-wider">LOGISTIC</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Best Shipping <span className="text-common-bg-color">Partner</span>
              </h1>

              <p className="text-gray-600 text-lg mb-8 max-w-md leading-relaxed">
                Amet, tempus egestas facilisis volutpat viverra molestie lobortis posuere maecenas. molestie lobortis
                posuere maecenas. Eget sapien, gravida neque.
              </p>

              <Button
                onClick={handleButtonClick}
                className="bg-common-bg-color hover:bg-yellow-600 text-black font-semibold px-8 py-3 text-lg"
              >
                DISCOVER MORE
              </Button>
            </div>

            <div className="relative lg:h-[600px] h-[400px]">
              <Image
                src="/images/cargo-hero.webp"
                alt="Cargo shipping cranes"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

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
