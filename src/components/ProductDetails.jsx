import React from 'react'
import Header from '../layout/Header'
import BrandImage from '../layout/BrandImage'
import Footer from '../layout/Footer'
import { shopima } from '@images'

function ProductDetails() {
    return (
        <div>
            <Header bg={"bg-[#23856D]"} />

            <div>
                <section className='container flex flex-row gap-8'>
                    <img src={shopima} alt="" />
                    <section className='flex flex-col'>
                        <h4>Graphics Design</h4>
                        {/* yıldızlar gelicek*/}
                        <h6>10 Reviews</h6>
                        <h3>$ 16.48</h3>
                        <h6>Avability :<span>in stock</span></h6>
                        <p>Met minim Mollie non desert Alamo est sit cliquey dolor
                            do met sent. RELIT official consequent door ENIM RELIT Mollie.
                            Excitation venial consequent sent nostrum met.</p>
                        <br />

                        <div> {/* renkler gelicek*/}</div>
                        <div>
                            <button>Select Options</button>
                            {/* lucide  begen  kart görüntüleme icon gelicek*/}
                        </div>
                    </section>


                </section>



            </div>
            <BrandImage />
            <Footer />
        </div>
    )
}

export default ProductDetails