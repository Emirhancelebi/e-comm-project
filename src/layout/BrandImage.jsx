import { brandImages } from "@images";

function BrandImage() {
    return (
        <div>
            <section className='container flex flex-col justify-between items-center py-[50px] gap-[60px] lg:flex-row lg:gap-[30px]'>
                {brandImages.map((item) => (
                    <img
                        key={item.id}
                        src={item.src}
                        alt={item.alt}
                        loading="lazy"
                    />
                ))}
            </section>

        </div>
    )
}

export default BrandImage