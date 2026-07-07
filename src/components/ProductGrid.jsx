import React from 'react'

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full overflow-hidden mt-6 px-4 pb-6">
      <div className="relative w-full h-135 rounded-3xl shadow-md overflow-hidden border border-slate-200 bg-black">
        <img src="./AirPods.png" alt="AirPods" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 text-center px-4 z-10 bg-linear-to-t from-black/70 via-black/30 to-transparent">
          <h2 className="text-3xl font-semibold text-white">AirPods</h2>
          <p className="text-lg text-white mt-2">Wireless freedom for your music</p>
          <div className="flex gap-3 mt-4 items-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="relative w-full h-135 rounded-3xl shadow-md overflow-hidden border border-slate-200 bg-slate-50">
        <img src="./mac.jpeg" alt="Mac" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 text-center px-4 z-10 bg-linear-to-t from-black/70 via-black/30 to-transparent">
          <h2 className="text-3xl font-semibold text-white">Mac</h2>
          <p className="text-lg text-white mt-2">Powerful performance for professionals</p>
          <div className="flex gap-3 mt-4 items-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="relative w-full h-135 rounded-3xl shadow-md overflow-hidden border border-slate-200 bg-slate-50">
        <img src="./Watch11.jpg" alt="Watch" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 flex flex-col items-center justify-start pt-12 text-center px-4 z-10 bg-linear-to-b from-black/60 via-black/20 to-transparent">
          <h2 className="text-3xl font-semibold text-white">Watch</h2>
          <p className="text-lg text-white mt-2">Stay connected and track your fitness</p>
          <div className="flex gap-3 mt-4 items-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="relative w-full h-135 rounded-3xl shadow-md overflow-hidden border border-slate-200 bg-slate-50">
        <img src="/ipad-2.webp" alt="iPad" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 flex flex-col items-center justify-start pt-12 text-center px-4 z-10 bg-linear-to-b from-black/60 via-black/20 to-transparent">
          <h2 className="text-3xl font-semibold text-white">iPad</h2>
          <p className="text-lg text-white mt-2">The ultimate iPad experience</p>
          <div className="flex gap-3 mt-4 items-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="relative w-full h-135 rounded-3xl shadow-md overflow-hidden border border-slate-200 bg-slate-50">
        <img src="./ultra3.jpg" alt="Watch Ultra 3" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 flex flex-col items-center justify-start pt-12 text-center px-4 z-10 bg-linear-to-b from-black/60 via-black/20 to-transparent">
          <h2 className="text-3xl font-semibold text-white">Watch Ultra 3</h2>
          <p className="text-lg text-white mt-2">Stay connected and track your fitness</p>
          <div className="flex gap-3 mt-4 items-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="relative w-full h-135 rounded-3xl shadow-md overflow-hidden border border-slate-200 bg-slate-50">
        <img src="./macmini.webp" alt="Mac Mini" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 flex flex-col items-center justify-start pt-12 text-center px-4 z-10 bg-linear-to-b from-black/60 via-black/20 to-transparent">
          <h2 className="text-3xl font-semibold text-white">Mac Mini</h2>
          <p className="text-lg text-white mt-2">Compact power for your workspace</p>
          <div className="flex gap-3 mt-4 items-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductGrid