function ProductCard({ image, name, desc, price, className = "" }) {
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
            <span className="text-h5 text-primary ">
                {price}
            </span>

        </div>
    );
}

export default ProductCard;
