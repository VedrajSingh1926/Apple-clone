import React from 'react'
import { motion } from 'framer-motion'

const ProductGrid = () => {
  return (
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full overflow-hidden mt-6 px-4 pb-6">
     
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative w-full h-135 rounded-3xl shadow-md overflow-hidden border border-slate-200 bg-black group cursor-pointer"
      >
        <motion.img 
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          src="./AirPods.png" 
          alt="AirPods" 
          className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 ease-out group-hover:scale-110" 
        />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 text-center px-4 z-10 bg-linear-to-t from-black/70 via-black/30 to-transparent">
          <h2 className="text-3xl font-semibold text-white">AirPods Pro 3</h2>
          <p className="text-lg text-white mt-2">Wireless freedom for your music</p>
          <div className="flex gap-3 mt-4 items-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
              Buy Now
            </button>
          </div>
        </div>
      </motion.div>
     
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative w-full h-135 rounded-3xl shadow-md overflow-hidden border border-slate-200 bg-slate-50 group cursor-pointer"
      >
        <motion.img 
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          src="./mac.jpeg" 
          alt="Mac" 
          className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 ease-out group-hover:scale-110" 
        />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 text-center px-4 z-10 bg-linear-to-t from-black/70 via-black/30 to-transparent">
          <h2 className="text-3xl font-semibold text-white">Mac for Student </h2>
          <p className="text-lg text-white mt-2">Powerful performance for professionals</p>
          <div className="flex gap-3 mt-4 items-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
              Buy Now
            </button>
          </div>
        </div>
      </motion.div>

      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative w-full h-135 rounded-3xl shadow-md overflow-hidden border border-slate-200 bg-slate-50 group cursor-pointer"
      >
        <motion.img 
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          src="./Watch11.jpg" 
          alt="Watch" 
          className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 ease-out group-hover:scale-110" 
        />
        <div className="absolute inset-0 flex flex-col items-center justify-start pt-12 text-center px-4 z-10 bg-linear-to-b from-black/60 via-black/20 to-transparent">
          <h2 className="text-3xl font-semibold text-white">Watch 11 series</h2>
          <p className="text-lg text-white mt-2">The ultimate Watch for health life</p>
          <div className="flex gap-3 mt-4 items-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
              Buy Now
            </button>
          </div>
        </div>
      </motion.div>
   
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative w-full h-135 rounded-3xl shadow-md overflow-hidden border border-slate-200 bg-slate-50 group cursor-pointer"
      >
        <motion.img 
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          src="/ipad-2.webp" 
          alt="iPad" 
          className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 ease-out group-hover:scale-110" 
        />
        <div className="absolute inset-0 flex flex-col items-center justify-start pt-12 text-center px-4 z-10 bg-linear-to-b from-black/60 via-black/20 to-transparent">
          <h2 className="text-3xl font-semibold text-white">iPad</h2>
          <p className="text-lg text-white mt-2">The ultimate iPad experience</p>
          <div className="flex gap-3 mt-4 items-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
              Buy Now
            </button>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative w-full h-135 rounded-3xl shadow-md overflow-hidden border border-slate-200 bg-slate-50 group cursor-pointer"
      >
        <motion.img 
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          src="./ultra3.jpg" 
          alt="Watch Ultra 3" 
          className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 ease-out group-hover:scale-110" 
        />
        <div className="absolute inset-0 flex flex-col items-center justify-start pt-12 text-center px-4 z-10 bg-linear-to-b from-black/60 via-black/20 to-transparent">
          <h2 className="text-3xl font-semibold text-white">Watch Ultra 3</h2>
          <p className="text-lg text-white mt-2">Stay connected and track your fitness</p>
          <div className="flex gap-3 mt-4 items-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
              Buy Now
            </button>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative w-full h-135 rounded-3xl shadow-md overflow-hidden border border-slate-200 bg-slate-50 group cursor-pointer"
      >
        <motion.img 
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          src="./macmini.webp" 
          alt="Mac Mini" 
          className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 ease-out group-hover:scale-110" 
        />
        <div className="absolute inset-0 flex flex-col items-center justify-start pt-12 text-center px-4 z-10 bg-linear-to-b from-black/60 via-black/20 to-transparent">
          <h2 className="text-3xl font-semibold text-white">Mac Mini</h2>
          <p className="text-lg text-white mt-2">Compact power for your workspace</p>
          <div className="flex gap-3 mt-4 items-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
              Buy Now
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ProductGrid