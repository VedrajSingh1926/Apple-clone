import React from 'react'

const AppleTvSlider = () => {
  return (
    <>
{/* <hr className="border-t-4 border-black" /><br /> */}
    <h1 className="text-6xl font-bold text-black text-center mb-6">Apple TV</h1>
      <div className="w-full bg-white pb-8">
        
        
        <div className="w-full overflow-x-auto flex gap-4 p-4 scrollbar-hide">
          <div className="min-w-[700px] h-[400px] rounded-2xl overflow-hidden relative">
            <img 
              src="/Apple-TV/AppleTV-1.png"
              alt="Apple TV 1" 
              className="w-full h-full object-cover" 
            />
          </div>

          <div className="min-w-[700px] h-[400px] rounded-2xl overflow-hidden relative">
            <img 
              src="/Apple-TV/AppleTV-2.jpg" 
              alt="Apple TV 2" 
              className="w-full h-full object-cover" 
            />
          </div>

          <div className="min-w-[700px] h-[400px] rounded-2xl overflow-hidden relative">
            <img 
              src="/Apple-TV/AppleTV-3.webp" 
              alt="Apple TV 3" 
              className="w-full h-full object-cover" 
            />
          </div>

          <div className="min-w-[700px] h-[400px] rounded-2xl overflow-hidden relative">
            <img 
              src="/Apple-TV/AppleTV-4.webp" 
              alt="Apple TV 4" 
              className="w-full h-full object-cover" 
            />
          </div>

          <div className="min-w-[700px] h-[400px] rounded-2xl overflow-hidden relative">
            <img 
              src="/Apple-TV/AppleTV-5.webp" 
              alt="Apple TV 5" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>

        
        <div className="max-w-[1280px] mx-auto px-4 mt-4 flex flex-col md:flex-row items-center justify-between gap-4 p-6 bg-[#f5f5f7] rounded-2xl border border-slate-100">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-[#1d1d1f]">
              Ready to watch?
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Explore award‑winning Apple Originals, movies, and more on the Apple TV app.
            </p>
          </div>
          
          <button className="bg-[#1d1d1f] hover:bg-black text-white text-sm font-medium py-3 px-8 rounded-full transition-colors shadow-sm cursor-pointer whitespace-nowrap">
            Stream Now
          </button>
        </div>

      </div>
    </>
  )
}

export default AppleTvSlider