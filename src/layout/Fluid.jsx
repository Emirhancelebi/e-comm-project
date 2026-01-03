import { fluid } from "@images";

function Fluid() {
    return (
        <section className="container mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 py-20 px-4 md:flex-row">


            <div className="flex-1">
                <img
                    src={fluid}
                    alt="fluid"
                    className="mr-auto ml-[32px] w-full max-w-md object-contain lg:mx-auto"
                />
            </div>


            <div className="flex flex-1 flex-col gap-6 text-center md:text-left">
                <h5 className="text-h5 text-secondary">
                    SUMMER 2020
                </h5>

                <h2 className="text-h2 text-primary">
                    Part of the Neural Universe
                </h2>

                <p className="text-h4 text-secondary">
                    We know how large objects will act, but things on a small scale.
                </p>

                <div className="flex flex-col lg:flex-row lg:justify-start lg:items-start gap-2.5">
                    <button className="flex h-[52px] w-[160px] items-center justify-center bg-blu text-btn text-light lg:bg-success  lg:text-center">
                        Shop Now
                    </button>

                    <button className="flex h-[52px] w-[160px] items-center justify-center border border-blu text-btn text-blu lg:border-success lg:text-success  lg:text-center">
                        Read More
                    </button>
                </div>
            </div>

        </section>
    );
}

export default Fluid;
