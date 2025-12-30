import { useState, useEffect } from "react";

export default function ImageSlider({ h5, h1, h4, button, price, image }) {
    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? image.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === image.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className=" relative h-screen w-full overflow-hidden">
            {/* Slides */}
            <div
                className="flex h-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {image.map((src, index) => (
                    <div key={index} className="relative h-full w-full shrink-0">
                        <img
                            src={src}
                            alt={`slide-${index}`}
                            className="h-full w-full object-cover"
                        />

                        {/* Content */}
                        <div className="absolute inset-0 flex items-center">
                            <div className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 text-center lg:text-left">
                                <h5 className="text-h6li text-light">
                                    {h5}
                                </h5>

                                <h1 className="text-h1 text-light">
                                    {h1}
                                </h1>

                                <h4 className="text-h4 text-light">
                                    {h4}
                                </h4>

                                <div className="flex flex-col items-center gap-4 lg:items-start">
                                    <h3 className="text-h3 text-light">
                                        {price}
                                    </h3>

                                    <button className="flex h-[62px] w-[221px] items-center justify-center bg-success text-h3 text-light">
                                        {button}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Controls */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-primary/50 p-2 text-light"
            >
                ‹
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-primary/50 p-2 text-light"
            >
                ›
            </button>

            {/* Indicators */}
            <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
                {image.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`h-2 w-8 rounded-full transition ${current === index ? "bg-light" : "bg-light/40"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
