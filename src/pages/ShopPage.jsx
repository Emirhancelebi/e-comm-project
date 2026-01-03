import React, { useState } from 'react'
import Header from "../layout/Header.jsx"
import Footer from '../layout/Footer.jsx'
import { product, clothImages, } from "@images";
import ProductCard from '../components/ProductCard.jsx';

import Filter from '../layout/Filter.jsx';
import BrandImage from '../layout/BrandImage.jsx';
import { Link } from 'react-router-dom/cjs/react-router-dom.js';
import ProductDetails from '../components/ProductDetails.jsx';

function ShopPage() {

    const products = Array(32).fill({
        name: "Graphics Design",
        desc: "English Department",
        oldPrice: "16.48",
        price: "6.48$",
        image: product
    });

    //  Pagination ayarları
    const ITEMS_PER_PAGE = 12;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const visibleProducts = products.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE
    );

    return (
        <>
            <Header bg={"bg-[#23856D]"} />

            <div className='container'>


                <section className='flex flex-row justify-between py-6 gap-[30px] '>
                    <h3 className='text-h3'>Shop</h3>
                    <span className='text-h6li'>Home {">"} Shop</span>
                </section>


                <div className='flex flex-col items-center lg:flex-row pb-12 gap-2'>
                    {clothImages.map((item) => (
                        <div key={item.id} className='relative w-[332px] h-[300px] lg:w-[205px] lg:h-[223px]'>
                            <img
                                className='filter brightness-75 w-full h-full object-cover'
                                src={item.src}
                                alt={item.alt}
                                loading="lazy"
                            />
                            <div className='absolute inset-0 flex flex-col items-center justify-center gap-1'>
                                <h5 className='text-light text-h5'>Cloths</h5>
                                <p className='text-light text-p'>5 Items</p>
                            </div>
                        </div>
                    ))}
                </div>
                <Filter />


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
                    {visibleProducts.map((item, index) => (
                        <Link to="shopdetail" key={index} >
                            <ProductCard
                                key={index}
                                {...item}
                                className="w-full h-auto"
                            />
                        </Link>

                    ))}
                </div>


                <div className='flex justify-center gap-2 py-10'>

                    <button
                        onClick={() => setCurrentPage(1)}
                        disabled={currentPage === 1}
                        className='rounded border w-[84px] h-[74px] text-h6li disabled:opacity-50'
                    >
                        First
                    </button>

                    {Array.from({ length: totalPages }).map((_, index) => {
                        const page = index + 1;
                        return (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`rounded border w-[46px] h-[74px] text-h6li
                                ${currentPage === page
                                        ? "bg-blu text-light"
                                        : "text-blu"
                                    }`}
                            >
                                {page}
                            </button>
                        );
                    })}

                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className='rounded border w-[84px] h-[74px] text-h6li disabled:opacity-50'
                    >
                        Next
                    </button>

                </div>


                <BrandImage />

            </div>

            <Footer />
        </>
    )
}

export default ShopPage
