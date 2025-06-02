"use client"

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="flex flex-col items-start">
            <div className="mb-8 -ml-6">
              <Image
                src="/logo.svg"
                alt="BenOps Consulting"
                width={400}
                height={400}
                className="w-48 h-48 [filter:invert(1)]"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="self-end">
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="self-end">
            <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="mailto:bengezimohamed@gmail.com" className="hover:text-white transition-colors">
                  bengezimohamed@gmail.com
                </a>
              </li>
              <li>Location: Remote / Worldwide</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} BenOps Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 