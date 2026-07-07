    import React from 'react'
    import { Search, ShoppingBag } from 'lucide-react'

    const Header = () => {
    return (
        <>
            <header className="w-full bg-[#f5f5f7]/80 backdrop-blur-md sticky top-0 z-50 mr-4">
                <div className="flex items-center justify-between max-w-5xl mx-auto px-4 py-2 ">
                    <div>
                        <img src="./Logo.png" alt="Apple Logo" className="h-7 w-auto ml-60" />
                    </div>
                    
                        <ul className="flex items-center gap-6 text-xs text-black/80 font-light">
                            <li><a href="#">Store</a></li>
                            <li><a href="#">Mac</a></li>
                            <li><a href="#">iPad</a></li>
                            <li><a href="#">iPhone</a></li>
                            <li><a href="#">Watch</a></li>
                            <li><a href="#">AirPods</a></li>
                            <li><a href="#">TV & Home</a></li>
                            <li><a href="#">Entertainment</a></li>
                            <li><a href="#">Accessories</a></li>
                            <li><a href="#">Support</a></li>
                        </ul>
                        <div className="flex items-center gap-4">
                            <Search size={14} className="text-black/80 cursor-pointer" />

                            <ShoppingBag size={14} className="text-black/80 cursor-pointer" />
                        </div>
                    
                </div>
            <div className="bg-[#f5f5f7] text-center text-xs text-black/80 py-2 px-4">
                Get up to 6 months of No Cost EMI* plus up to ₹10000 instant cashback‡ on selected products with eligible cards. Shop
            </div>
    </header>        
        </>
    )
    }

    export default Header