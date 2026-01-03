
import { kids, women, accessories, men } from "@images"

function Editor() {
    return (
        <section className="container mx-auto px-4 py-10 md:py-20">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-auto lg:h-[600px]">


                <div className="relative md:col-span-2 group overflow-hidden">
                    <img src={men} alt="MEN" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute bottom-6 left-6 bg-light px-8 py-3 font-bold uppercase tracking-wider">
                        Men
                    </div>
                </div>


                <div className="relative group overflow-hidden">
                    <img src={women} alt="WOMEN" className="w-full h-[400px] lg:h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute bottom-6 left-6 bg-light px-8 py-3 font-bold uppercase tracking-wider">
                        Women
                    </div>
                </div>


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