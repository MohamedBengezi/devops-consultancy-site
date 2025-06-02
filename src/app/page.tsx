"use client"

import { motion } from 'framer-motion'
import { WrenchScrewdriverIcon, RocketLaunchIcon, CloudIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-32 pb-64 overflow-hidden text-white">
          <div className="absolute inset-0 bg-grid-white/[0.05] -z-1" />
          <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-blue-500/10 to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8"
              >
                DevOps Automation for Small Tech Teams
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
              >
                I automate the manual stuff that slows down small tech teams—from cloud setups to deploy pipelines—so they can move faster and break less.
              </motion.p>
              <div className="flex justify-center items-center w-full">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="w-[550px] h-[550px] mx-auto"
                  dangerouslySetInnerHTML={{
                    __html: `
                      <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script>
                      <dotlottie-player
                        src="https://lottie.host/15abe678-65dc-41e9-8304-640f7005f987/78RGt3TpiO.lottie"
                        background="transparent"
                        speed="1"
                        style="width: 550px; height: 550px;"
                        loop
                        autoplay
                      ></dotlottie-player>
                    `
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="pt-40 pb-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-gray-900/[0.02] -z-1" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <br/>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {/* DevOps Automation Toolkit */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg p-2 mb-6">
                  <WrenchScrewdriverIcon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">DevOps Automation Toolkit</h3>
                <p className="text-gray-600 mb-4">Perfect for: Startups or teams still doing everything manually.</p>
                <ul className="space-y-3 text-gray-600">
                  <li>• Custom Python/Bash scripts</li>
                  <li>• CI job templates</li>
                  <li>• Slack/email notifications</li>
                  <li>• Documentation & training</li>
                </ul>
              </motion.div>

              {/* CI/CD Pipeline Setup */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg p-2 mb-6">
                  <RocketLaunchIcon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">CI/CD Pipeline Setup</h3>
                <p className="text-gray-600 mb-4">Perfect for: Teams with fragile or manual deploys.</p>
                <ul className="space-y-3 text-gray-600">
                  <li>• Jenkins/GitHub Actions setup</li>
                  <li>• Automated builds & testing</li>
                  <li>• Docker-based workflows</li>
                  <li>• Developer training</li>
                </ul>
              </motion.div>

              {/* Infrastructure-as-Code */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg p-2 mb-6">
                  <CloudIcon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Infrastructure-as-Code</h3>
                <p className="text-gray-600 mb-4">Perfect for: Teams looking to scale or reduce cloud chaos.</p>
                <ul className="space-y-3 text-gray-600">
                  <li>• AWS with Terraform</li>
                  <li>• Ansible configuration</li>
                  <li>• Environment automation</li>
                  <li>• Monitoring & logging</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Work With Me Section */}
        <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.05] -z-1" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">Why Work With Me?</h2>
            <div className="max-w-3xl mx-auto text-center">
              <motion.ul 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-6 text-lg text-gray-300"
              >
                <li>✓ 5+ years automating pipelines, infrastructure, and developer tooling</li>
                <li>✓ Deep experience with Jenkins, Docker, Ansible, Linux, Python</li>
                <li>✓ I move fast, communicate clearly, and build clean, maintainable systems</li>
              </motion.ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-gray-900/[0.02] -z-1" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl relative">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">Let's Talk</h2>
            <div className="text-center">
              <p className="text-xl text-gray-600 mb-8">
                Ready to automate your deploys or cloud setup?<br />
                Let&apos;s chat about what you&apos;re working on.
              </p>
              <Link
                href="mailto:bengezimohamed@gmail.com"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Schedule a Free Chat
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style jsx global>{`
        .bg-grid-gray-900\/\[0\.02\] {
          background-size: 40px 40px;
          background-image: linear-gradient(to right, rgb(17 24 39 / 0.02) 1px, transparent 1px),
                          linear-gradient(to bottom, rgb(17 24 39 / 0.02) 1px, transparent 1px);
        }
        .bg-grid-white\/\[0\.05\] {
          background-size: 40px 40px;
          background-image: linear-gradient(to right, rgb(255 255 255 / 0.05) 1px, transparent 1px),
                          linear-gradient(to bottom, rgb(255 255 255 / 0.05) 1px, transparent 1px);
        }
      `}</style>
    </>
  )
}
