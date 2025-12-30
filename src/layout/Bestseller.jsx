
import ProductCard from '../components/ProductCard'
import { product } from "@images"

function Bestseller() {
    // Ürün verilerini bir diziye alarak kod kalabalığını önleyelim
    const products = Array(8).fill({
        name: "Graphics Design",
        desc: "English Department",
        oldPrice: "16.48",
        price: "6.48$",
        image: product
    });

    return (
        <section className="py-16 md:py-20 flex flex-col gap-12 md:gap-20 bg-light">

            {/* Header */}
            <div className="container text-center flex flex-col gap-[10px]">
                <h4 className="font-normal text-secondary text-[20px] leading-[28px] tracking-[0.2px]">
                    Featured Products
                </h4>
                <h3 className="font-bold text-primary text-[24px] leading-[32px] tracking-[0.1px]">
                    Best Seller Product
                </h3>
                <p className="font-normal text-secondary text-[14px] leading-[20px] tracking-[0.2px]">
                    Problems trying to resolve the conflict between
                </p>
            </div>

            {/* Products Grid */}
            {/* grid-cols-1: Mobilde tek kolon (Taşmayı %100 engeller)
                sm:grid-cols-2: Küçük tabletlerde 2 kolon
                lg:grid-cols-4: Masaüstünde 4 kolon
            */}
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

        </section>
    )
}

export default Bestseller