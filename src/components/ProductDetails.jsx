import React from 'react'
import Header from '../layout/Header'
import BrandImage from '../layout/BrandImage'
import Footer from '../layout/Footer'
import { shopima, star, starhalf, product, women, men } from '@images'
import { ChevronRight, Eye, Heart, ShoppingCart } from 'lucide-react'
import ProductCard from './ProductCard'


function ProductDetails() {
    const products = Array(8).fill({
        name: "Graphics Design",
        desc: "English Department",
        oldPrice: "16.48",
        price: "6.48$",
        image: product
    });
    const text = "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
    const li = "the quick fox jumps over the lazy dog"
    return (
        <div >
            <Header bg={"bg-[#23856D]"} />
            <section className='container flex flex-row py-6 '>
                <h6 className='text-primary text-h6li'>Home  </h6>
                <ChevronRight />
                <span className='text-secondary text-h6li'>Store</span>
            </section>

            <div>
                <section className='container flex gap-8 flex-col lg:flex-row '>
                    <img className='w-[506px] h-[450px]' src={shopima} alt="" />
                    <section className='flex flex-col gap-8'>
                        <h4>Graphics Design</h4>
                        <div className='flex flex-row '>
                            <img className='w-5 h-5' src={star} alt="star" />
                            <img className='w-5 h-5' src={star} alt="star" />
                            <img className='w-5 h-5' src={star} alt="star" />
                            <img className='w-5 h-5' src={star} alt="star" />
                            <img className='w-5 h-5' src={starhalf} alt="starhalf" />
                            <h6 className='pl-6 text-secondary text-h6li'>10 Reviews</h6>
                        </div>

                        {/* yıldızlar gelicek*/}

                        <h3 className='text-h3 text-primary'>$ 16.48</h3>
                        <h6 className='text-secondary text-h6li'>Avability : <span className='text-blu text-h6li '>In stock</span></h6>
                        <p className='text-p text-secondary'>Met minim Mollie non desert Alamo est sit cliquey dolor
                            do met sent. RELIT official consequent door ENIM RELIT Mollie.
                            Excitation venial consequent sent nostrum met.</p>
                        <br />

                        <div> {/* renkler gelicek*/}</div>
                        <div className='flex flex-row items-center gap-3'>
                            <button className='bg-blu text-light text-btn w-36 h-12 rounded '>Select Options</button>
                            {/* lucide  begen  kart görüntüleme icon gelicek*/}
                            <div className='gap-3 flex flex-row'>
                                <Heart />
                                <ShoppingCart />
                                <Eye />
                            </div>
                        </div>
                    </section>


                </section>
            </div>
            <div className='container'>
                <section className='text-secondary text-h6li flex flex-row justify-center items-center gap-8 h-[91px]'>
                    <h6 className='text-secondary text-h6li'>Description</h6>
                    <h6 className='text-secondary text-h6li'>Additional Information</h6>
                    <h6 className='text-secondary text-h6li'>Reviews <span className='text-green'>(0)</span></h6>
                </section>
                <hr className='text-[#ECECEC]' />

                <section className='flex  justify-between gap-7 pt-6 pb-12 flex-col lg:flex-row'>
                    <div>
                        <img className='h-96 w-83' src={men} alt="women" />
                    </div>

                    <div className='pb-6 gap-8 flex flex-col  w-[332px] h-[427px]  size-fit'>
                        <h3 className='text-h3 text-primary'>the quick fox jumps over </h3>
                        <p className='text-p text-secondary'>{text}</p>
                        <p className='text-p text-secondary'>{text}</p>
                        <p className='text-p text-secondary'>{text}</p>

                    </div>
                    <div className=''>
                        <div>
                            <h3 className='text-h3 text-primary '>the quick fox jumps over </h3>
                            <ul> {/*bunlarda > icon yok*/}
                                <li>{li}</li>
                                <li>{li}</li>
                                <li>{li}</li>
                                <li>{li}</li>
                            </ul>

                        </div>
                        <div>
                            <h3 className='text-h3 text-primary'>the quick fox jumps over </h3>
                            <ul>
                                <li>{li}</li>
                                <li>{li}</li>
                                <li>{li}</li>
                            </ul>


                        </div>
                    </div>

                </section>
            </div>

            <section className='container gap-6 '>
                <div>
                    <h3 className='gap-6 py-12 text-primary text-h3'>BESTSELLER PRODUCT</h3>
                </div>
                <div>
                    <hr className='py-6 text-[#ECECEC]' />

                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] ">

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

            </section>

            <BrandImage />
            <Footer />
        </div>
    )
}

export default ProductDetails