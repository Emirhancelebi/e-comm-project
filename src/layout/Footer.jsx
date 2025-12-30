import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";


function Footer() {
    const footerLinks = [
        {
            title: "Company Info",
            links: ["About Us", "Carrier", "We are hiring", "Blog"],
        },
        {
            title: "Legal",
            links: ["Terms of Use", "Privacy Policy", "Cookie Policy", "Disclaimer"],
        },
        {
            title: "Features",
            links: [
                "Business Marketing",
                "User Analytics",
                "Live Chat",
                "Unlimited Support",
            ],
        },
        {
            title: "Resources",
            links: ["iOS & Android", "Watch a Demo", "Customers", "API"],
        },
    ];

    return (
        <footer className="bg-muted">
            {/* Top */}
            <div className="container py-10">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                    <Link to="/" className="text-h3 font-bold text-foreground">
                        Bandage
                    </Link>

                    <div className="flex gap-4 mt-4 sm:mt-0 text-accent">
                        <Facebook
                            size={24}
                            className="cursor-pointer hover:opacity-80 transition-opacity"
                        />
                        <Instagram
                            size={24}
                            className="cursor-pointer hover:opacity-80 transition-opacity"
                        />
                        <Twitter
                            size={24}
                            className="cursor-pointer hover:opacity-80 transition-opacity"
                        />
                    </div>
                </div>
            </div>

            <hr className="border-border" />

            {/* Links */}
            <div className="container py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {/* Link columns */}
                    {footerLinks.map((column) => (
                        <div key={column.title} className="flex flex-col gap-4">
                            <h5 className="text-h5 text-foreground">{column.title}</h5>

                            {column.links.map((link) => (
                                <Link
                                    key={link}
                                    to="/"
                                    className="text-p text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    {link}
                                </Link>
                            ))}
                        </div>
                    ))}

                    {/* Subscribe */}
                    <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
                        <h5 className="text-h5 text-foreground">Get In Touch</h5>

                        <div className="flex flex-row ">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="h-14 flex-1 min-w-0 rounded-md sm:rounded-r-none border border-border bg-background px-4 text-p focus:outline-none focus:ring-2 focus:ring-accent"
                            />
                            <button className="bg-blu text-light">Subscribe</button>

                        </div>

                        <p className="text-small ">
                            Lore imp sum dolor Amit
                        </p>
                    </div>
                </div>
            </div>

            <hr className="border-border" />

            {/* Bottom */}
            <div className="container py-6">
                <p className="text-h6  text-center sm:text-left">
                    Made With Love By Emirhan. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
