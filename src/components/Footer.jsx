import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="w-full bg-[#f5f5f7] text-[#1d1d1f]/80 text-[11px] mt-10">
      <div className="max-w-5xl mx-auto px-6 py-8">
        
        <div className="border-b border-black/10 pb-5 mb-5 text-[#6e6e73] space-y-2 leading-relaxed">
          <p>1. Special pricing available to qualified customers. To learn more about how to start qualifying for special pricing, talk to an Apple Specialist in a store or give us a call.</p>
          <p>2. Trade‑in values will vary based on the condition, year, and configuration of your eligible trade‑in device.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 pb-6 items-start">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-3"
          >
            <h3 className="font-semibold text-black text-[12px]">Shop and Learn</h3>
            <ul className="space-y-2 text-[#1d1d1f]/70">
              <li><a href="#" className="hover:underline">Store</a></li>
              <li><a href="#" className="hover:underline">Mac</a></li>
              <li><a href="#" className="hover:underline">iPad</a></li>
              <li><a href="#" className="hover:underline">iPhone</a></li>
              <li><a href="#" className="hover:underline">Watch</a></li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-3"
          >
            <h3 className="font-semibold text-black text-[12px]">Account</h3>
            <ul className="space-y-2 text-[#1d1d1f]/70">
              <li><a href="#" className="hover:underline">Manage Your Apple ID</a></li>
              <li><a href="#" className="hover:underline">Apple Store Account</a></li>
              <li><a href="#" className="hover:underline">iCloud.com</a></li>
            </ul>
            <h3 className="font-semibold text-black text-[12px] mt-2">Entertainment</h3>
            <ul className="space-y-2 text-[#1d1d1f]/70">
              <li><a href="#" className="hover:underline">Apple One</a></li>
              <li><a href="#" className="hover:underline">Apple TV+</a></li>
              <li><a href="#" className="hover:underline">Apple Music</a></li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-3"
          >
            <h3 className="font-semibold text-black text-[12px]">Apple Store</h3>
            <ul className="space-y-2 text-[#1d1d1f]/70">
              <li><a href="#" className="hover:underline">Find a Store</a></li>
              <li><a href="#" className="hover:underline">Genius Bar</a></li>
              <li><a href="#" className="hover:underline">Today at Apple</a></li>
              <li><a href="#" className="hover:underline">Apple Store App</a></li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col gap-3"
          >
            <h3 className="font-semibold text-black text-[12px]">For Business</h3>
            <ul className="space-y-2 text-[#1d1d1f]/70">
              <li><a href="#" className="hover:underline">Apple and Business</a></li>
              <li><a href="#" className="hover:underline">Shop for Business</a></li>
            </ul>
            <h3 className="font-semibold text-black text-[12px] mt-2">Apple Values</h3>
            <ul className="space-y-2 text-[#1d1d1f]/70">
              <li><a href="#" className="hover:underline">Accessibility</a></li>
              <li><a href="#" className="hover:underline">Environment</a></li>
              <li><a href="#" className="hover:underline">Privacy</a></li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col gap-3"
          >
            <h3 className="font-semibold text-black text-[12px]">About Apple</h3>
            <ul className="space-y-2 text-[#1d1d1f]/70">
              <li><a href="#" className="hover:underline">Newsroom</a></li>
              <li><a href="#" className="hover:underline">Apple Leadership</a></li>
              <li><a href="#" className="hover:underline">Career Opportunities</a></li>
              <li><a href="#" className="hover:underline">Investors</a></li>
            </ul>
          </motion.div>

        </div>

        <div className="text-[#6e6e73] border-b border-black/10 pb-4 mb-4">
          More ways to shop: <a href="#" className="text-blue-600 hover:underline">Find an Apple Store</a> or <a href="#" className="text-blue-600 hover:underline">other retailer</a> near you.
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-4 text-[#6e6e73] pt-2">
          
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 order-2 md:order-1">
            <span>Copyright © 2026 Apple Inc. All rights reserved.</span>
            
            <div className="flex flex-wrap gap-x-2 text-[#1d1d1f]/70">
              <a href="#" className="hover:underline border-r border-black/10 pr-2">Privacy Policy</a>
              <a href="#" className="hover:underline border-r border-black/10 pr-2">Terms of Use</a>
              <a href="#" className="hover:underline border-r border-black/10 pr-2">Sales and Refunds</a>
              <a href="#" className="hover:underline">Site Map</a>
            </div>
          </div>

          <div className="hover:underline cursor-pointer text-[#1d1d1f]/80 order-1 md:order-2">
            India / English
          </div>

        </div>
        
        {/* क्रेडिट सेक्शन */}
        <div className="max-w-5xl mx-auto px-4 mt-8 pt-4 border-t border-slate-300/50 flex flex-col items-center justify-center gap-2">
          
          <p className="text-xs text-slate-500">
             Clone crafted for recruiters with ❤️ by
          </p>

          {/* सिंपल <a> टैग: क्लिक करने पर सीधे लिंक खुलेगा (जैसे आपका गिटहब या पोर्टफोलियो) */}
          <a 
            href="https://github.com" // यहाँ अपना या अपनी टीम का लिंक डाल दो भाई!
            target="_blank"            // इससे लिंक नए टैब में खुलेगा
            rel="noopener noreferrer" // सुरक्षा के लिए ज़रूरी
          >
            <motion.div
              className="relative px-4 py-1.5 bg-black text-white rounded-full text-sm font-medium cursor-pointer shadow-sm overflow-hidden"
              whileInView={{ scale: [0.9, 1.05, 1] }} 
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0px 0px 15px rgba(0, 113, 227, 0.7)",
              }}
            >
              <motion.span
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                Veds Team
              </motion.span>
            </motion.div>
          </a>

        </div>
      </div>
    </footer>
  )
}

export default Footer