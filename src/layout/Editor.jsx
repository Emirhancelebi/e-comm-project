
import React from 'react';
import men from "../assets/image/men.png";
import women from "../assets/image/women.png";
import accessories from "../assets/image/accessories.png";
import kids from "../assets/image/kids.png";

function Editor() {
    return (
        <section className="container mx-auto px-4 py-10 md:py-20">
            {/* Grid Yapısı: Mobilde 1 kolon, Tableti geçince 2, Desktopta 4 kolon (esnek) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-auto lg:h-[600px]">

                {/* MEN - Mobilde tam genişlik, Desktopta 2 kolon kaplar */}
                <div className="relative md:col-span-2 group overflow-hidden">
                    <img src={men} alt="MEN" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute bottom-6 left-6 bg-light px-8 py-3 font-bold uppercase tracking-wider">
                        Men
                    </div>
                </div>

                {/* WOMEN - Mobilde tam genişlik, Desktopta 1 kolon kaplar */}
                <div className="relative group overflow-hidden">
                    <img src={women} alt="WOMEN" className="w-full h-[400px] lg:h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute bottom-6 left-6 bg-light px-8 py-3 font-bold uppercase tracking-wider">
                        Women
                    </div>
                </div>

                {/* ACCESSORIES + KIDS - Mobilde alt alta, Desktopta tek kolonda üst üste */}
                <div className="flex flex-col gap-4">
                    <div className="relative h-[250px] lg:h-1/2 group overflow-hidden">
                        <img src={accessories} alt="ACCESSORIES" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        <div className="absolute bottom-6 left-6 bg-light px-4 py-2 font-bold uppercase text-sm">
                            Accessories
                        </div>
                    </div>

                    <div className="relative h-[250px] lg:h-1/2 group overflow-hidden">
                        <img src={kids} alt="KIDS" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        <div className="absolute bottom-6 left-6 bg-light px-4 py-2 font-bold uppercase text-sm">
                            Kids
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Editor;