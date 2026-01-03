import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Phone,
    Mail,
    Instagram,
    Youtube,
    Facebook,
    Twitter,
    User,
    Search,
    ShoppingCart,
    Heart,
    Menu,
} from "lucide-react";

function Header({ bg, }) {
    const [shopOpen, setShopOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <div className="  font-main">


            <div className={`hidden md:flex items-center justify-between px-6 py-3 text-smal text-light ${bg}`}>
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <Phone size={14} />
                        <span>(225) 555-0118</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Mail size={14} />
                        <span>michella.rivera@example.com</span>
                    </div>
                </div>

                <p className="text-smal">
                    Follow Us and get a chance to win 80% off
                </p>

                <div className="flex items-center gap-3">
                    <span className="text-smal">Follow Us :</span>
                    <Instagram size={16} />
                    <Youtube size={16} />
                    <Facebook size={16} />
                    <Twitter size={16} />
                </div>
            </div>

            <header className="px-4 py-4 lg:px-10">
                <div className="flex items-center justify-between">


                    <h3 className="text-h3 text-primary">
                        Bandage
                    </h3>

                    <nav className="hidden lg:flex">
                        <ul className="flex items-center gap-4  text-secondary ">

                            <li><Link to="/">Home</Link></li>


                            <li
                                className="relative cursor-pointer"
                                onClick={() => setShopOpen(prev => !prev)}
                            >
                                <span>Shop ▾</span>

                                {shopOpen && (
                                    <div className="absolute left-0 top-full z-50 mt-2 flex bg-light border">
                                        {["Kadın", "Erkek"].map((title) => (
                                            <div key={title} className="p-6">
                                                <h5 className="text-h5 text-primary mb-2">
                                                    {title}
                                                </h5>
                                                <ul className="flex flex-col gap-1 text-p text-secondary">
                                                    <li><Link to="/shop">Bags</Link></li>
                                                    <li><Link to="/shop">Belts</Link></li>
                                                    <li><Link to="/shop">Cosmetics</Link></li>
                                                    <li><Link to="/shop">Hats</Link></li>
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </li>

                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/pages">Pages</Link></li>
                        </ul>
                    </nav>


                    <div className="flex items-center gap-4 text-primary lg:text-blu">
                        <User size={18} />
                        <span className="hidden lg:inline text-p">
                            Login / Register
                        </span>
                        <Search size={20} />
                        <ShoppingCart size={20} />
                        <Heart size={20} />


                        <Menu
                            size={26}
                            className="lg:hidden cursor-pointer"
                            onClick={() => setMobileOpen(prev => !prev)}
                        />
                    </div>
                </div>


                {mobileOpen && (
                    <nav className="mt-6 lg:hidden">
                        <ul className="flex flex-col items-center gap-4 text-h5 text-secondary text-h6">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/contact">Contact</Link></li>

                        </ul>
                    </nav>
                )}
            </header>
        </div>
    );
}

export default Header;
