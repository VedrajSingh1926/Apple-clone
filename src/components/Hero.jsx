import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <>
      
      <div className="relative w-full h-170 bg-[#f5f5f7] overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          src="/Hero.png"
          alt="MacBook Air M5"
          className="absolute inset-0 w-full h-full object-cover object-bottom z-0"
        />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute inset-x-0 top-20 z-10 flex flex-col items-center text-center px-4"
        >
          <h1 className="text-5xl font-semibold tracking-tight text-[#1d1d1f]">
            MacBook Air
          </h1>
          <p className="text-xl text-[#1d1d1f] mt-2 font-normal">
            Now supercharged by M5.
          </p>
          
          <div className="flex gap-3 mt-4 items-center">
            <button className="bg-[#0071e3] hover:bg-[#0077ed] text-white text-sm font-normal py-2 px-5 rounded-full transition-colors cursor-pointer">
              Learn more
            </button>
            <button className="bg-transparent hover:bg-[#0071e3] border border-[#0071e3] text-[#0071e3] hover:text-white text-sm font-normal py-2 px-5 rounded-full transition-colors cursor-pointer">
              Buy
            </button>
          </div>
        </motion.div>
      </div>

      
      <div className="relative w-full h-170 bg-black overflow-hidden mt-3">
        <motion.img 
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          src="/iphone.jpg"
          alt="iPhone"
          className="absolute inset-0 w-full h-full object-cover object-bottom z-0"
        />
        
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute inset-x-0 top-20 z-10 flex flex-col items-center text-center px-4"
        >
          <h1 className="text-5xl font-semibold tracking-tight text-[#1d1d1f]">
            iPhone
          </h1>
          <p className="text-xl text-[#1d1d1f] mt-2 font-normal">
            Meet the latest iphone line-up
          </p>
          
          <div className="flex gap-3 mt-4 items-center">
            <button className="bg-[#0071e3] hover:bg-[#0077ed] text-white text-sm font-normal py-2 px-5 rounded-full transition-colors cursor-pointer">
              Learn more
            </button>
            <button className="bg-transparent hover:bg-[#0071e3] border border-[#0071e3] text-[#0071e3] hover:text-white text-sm font-normal py-2 px-5 rounded-full transition-colors cursor-pointer">
              Shop iphone
            </button>
          </div>
        </motion.div>
      </div>
      

       <div className="relative w-full h-170 bg-black overflow-hidden mt-3">
        <motion.img 
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          src="/ipad.png"
          alt="iPad"
          className="absolute inset-0 w-full h-full object-cover object-bottom z-0"
        />
        
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute inset-x-0 top-20 z-10 flex flex-col items-center text-center px-4"
        >
          <h1 className="text-5xl font-semibold tracking-tight text-[#1d1d1f]">
            iPad air
          </h1>
          <p className="text-xl text-[#1d1d1f] mt-2 font-normal">
            Now supercharge by M4
          </p>
          
          <div className="flex gap-3 mt-4 items-center">
            <button className="bg-[#0071e3] hover:bg-[#0077ed] text-white text-sm font-normal py-2 px-5 rounded-full transition-colors cursor-pointer">
              Learn more
            </button>
            <button className="bg-transparent hover:bg-[#0071e3] border border-[#0071e3] text-[#0071e3] hover:text-white text-sm font-normal py-2 px-5 rounded-full transition-colors cursor-pointer">
              Buy
            </button>
          </div>
        </motion.div>
      </div>
      
    </>
  )
}

export default Hero