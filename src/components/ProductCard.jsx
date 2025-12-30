
function ProductCard({ image, name, desc, price, oldPrice, className = "" }) {
    return (
        <div className={`flex flex-col gap-4 text-center ${className}`}>

            {/* Image */}
            <div className="w-full overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full object-cover"
                />
            </div>

            {/* Title */}
            <h5 className="text-h5 text-primary">
                {name}
            </h5>

            {/* Description */}
            <p className="text-p text-secondary">
                {desc}
            </p>

            {/* Price */}
            <div className=" flex flex-row gap-1 py-1 px-1 justify-evenly">
                <div
                    className="text-h5 text-secondary  ">{oldPrice}</div>
                <span
                    className="text-h5 text-green">
                    {price}
                </span >

            </div>
            <div className=" flex flex-row justify-evenly">
                <span className="bg-blu">0</span>
                <span className="bg-green">0</span>
                <span className="bg-alert">0</span>
                <span className="bg-primary">0</span>


            </div>

        </div>
    );
}

export default ProductCard;
