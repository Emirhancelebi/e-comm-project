import { Menu, Search, ShoppingCart } from 'lucide-react';
import React, { useState } from 'react'
import { Link } from "react-router-dom"

function InnerHeader() {
    const [mobileOpen, setMobileOpen] = useState(false);
    return (
        <div>
            <div className="container flex items-center justify-between py-8 ">
                <h3 className="text-h3 text-primary">
                    Bandage
                </h3>
                <ul className=" flex-row items-center hidden gap-4 text-h5 text-secondary text-h6 lg:flex ">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/product">Product</Link></li>
                    <li><Link to="/pricing">Pricing</Link></li>
                    <li><Link to="/contact">Contact</Link></li>


                </ul>
                <div className="flex items-center gap-4 text-primary lg:text-blu lg:hidden">

                    <Search size={20} />
                    <ShoppingCart size={20} />
                    <Menu
                        size={26}
                        className="lg:hidden cursor-pointer"
                        onClick={() => setMobileOpen(prev => !prev)}
                    />



                </div>

                <div className="hidden items-center gap-4 text-primary lg:flex">

                    <span className=" lg:inline text-p text-blu">
                        Login
                    </span>

                    <button className="rounded text-btn bg-blu text-light w-[214px] h-[52px] ">Become a remember -</button>

                </div>
            </div>

            <div className="">
                {mobileOpen && (
                    <nav className="mt-6 lg:hidden">
                        <ul className="flex flex-col items-center gap-4 text-h2 text-secondary text-h6">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/product">Product</Link></li>
                            <li><Link to="/pricing">Pricing</Link></li>
                            <li><Link to="/contact">Contact</Link></li>


                        </ul>
                    </nav>
                )}
            </div>
        </div>

    )
}

export default InnerHeader