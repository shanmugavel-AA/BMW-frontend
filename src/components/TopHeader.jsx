
import React from 'react'
import { Mail, Phone, MapPin } from "lucide-react";

const TopHeader = () => {
  return (
    <div className="bg-secondary text-gray-100 shadow-md top-0 z-50 text-base py-1 px-0 transition-all duration-300">
      <div className="w-full flex justify-end max-w-7xl mx-auto items-center gap-4">
        <div className="flex items-center gap-8">
          <a
            href="mailto:info@yourcompany.com"
            className="hover:text-black transition-colors text-base flex items-center gap-1"
          >
            <Mail size={16} /> info@yourcompany.com
          </a>
          <a
            href="tel:+917904626295"
            className="hover:text-black text-base flex items-center gap-1"
          >
            <Phone size={16} /> +91 7904626295
          </a>
        </div>
      </div>
    </div>
  )
}

export default TopHeader