import React from 'react'
import Header from "../layout/Header.jsx"
import Footer from '../layout/Footer.jsx'
import { product, clothImages, brandImages } from "@images";
import ProductCard from '../components/ProductCard.jsx';


function ShopPage() {
    const products = Array(12).fill({
        name: "Graphics Design",
        desc: "English Department",
        oldPrice: "16.48",
        price: "6.48$",
        image: product
    });
    return (
        <>
            <Header />
            <div className='container'>
                <section className='flex flex-row justify-between py-6 gap-[30px]'>
                    <h3 className='text-h3'>Shop</h3>
                    <span className='text-h6li'>Home {">"} Shop</span>
                </section>

                <div className='flex flex-col items-center lg:flex-row pb-12 gap-2'>

                    {clothImages.map((item) => (
                        <div key={item.id} className='relative w-[332px] h-[300px] lg:w-[205px] lg:h-[223px] '>

                            <img className='filter brightness-75 w-full h-full object-cover'

                                src={item.src}
                                alt={item.alt}
                                loading="lazy"
                            />
                            <div className='absolute inset-0 flex flex-col items-center justify-center gap-1 '>
                                <h5 className='text-light text-h5 '>Cloths</h5>
                                <p className='text-light text-p'>5 Items</p>
                            </div>
                        </div>
                    ))}
                </div>


                <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
                    {products.map((item, index) => (
                        <ProductCard
                            key={index}
                            name={item.name}
                            desc={item.desc}
                            oldPrice={item.oldPrice}
                            price={item.price}
                            image={item.image}
                            className="w-full h-auto"
                        />

                    ))}
                </div>
                <div className='container flex flex-row  justify-center h-18 py-10  '>
                    <button className='rounded border-[#BDBDBD] border text-h6li w-[84px] h-[74px] bg-[#F3F3F3] text-[#BDBDBD] '>First</button>
                    <button className='rounded border-[#BDBDBD] border text-h6li w-[46px] h-[74px] text-blu' >1</button>
                    <button className='rounded border-[#BDBDBD] border text-h6li w-[46px] h-[74px] bg-blu text-light'>2</button>
                    <button className='rounded border-[#BDBDBD] border text-h6li w-[46px] h-[74px] text-blu'>3</button>
                    <button className='rounded border-[#BDBDBD] border text-h6li w-[84px] h-[74px] text-blu'>Next</button>

                </div>


                <section className=' container flex flex-col justify-between items-center  py-[50px] gap-[60px] lg:flex-row lg:py-12.5 lg:gap-[30px] '>

                    <div className=' container flex flex-col justify-between items-center  py-[50px] gap-[60px] lg:flex-row lg:py-12.5 lg:gap-[30px] ' >
                        {brandImages.map((item) => (
                            <img
                                key={item.id}
                                src={item.src}
                                alt={item.alt}
                                loading="lazy"
                            />
                        ))}
                    </div>



                </section>






            </div>



            <Footer />
        </>
    )
}

export default ShopPage