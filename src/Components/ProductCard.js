import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard(props) {
    return (
        <Link to={`/products/${props.product.id}`}>
            <div className="border rounded p-3 m-3 text-center">
                <div>

                    <img
                        className="m-auto"
                        src={props.product.images[0].imageUrl}
                        alt={props.product.name}
                    />

                </div>
                <div className="p-3">
                    <h3 className="font-bold text-xl">
                        {props.product.name}
                    </h3>
                </div>
                <div className="font-bold pb-3">
                    ${props.product.price}
                </div>
                <div className="pb-3">
                    {props.product.description}
                </div>
                <button
                    type="button"
                    className="border border-gray-500 text-gray-500 rounded-md px-3 py-1 m-1 transition duration-500 ease select-none hover:text-white hover:bg-gray-600 focus:outline-none focus:shadow-outline">
                    View
                </button>
            </div>
        </Link>
    );
}

export default ProductCard;