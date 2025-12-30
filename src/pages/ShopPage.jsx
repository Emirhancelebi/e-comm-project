import React from 'react'
import Header from "../layout/Header.jsx"
import Footer from '../layout/Footer.jsx'
import { product, brandImages } from "@images";
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