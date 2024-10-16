import React, {FC} from 'react';
import {IProduct} from '../../models/IProduct'

const Product: FC<IProduct> = (data) => {
    const {
        id,
        title,
        description,
        category,
        price,
        discountPercentage,
        rating,
        stock,
        tags,
        brand,
        sku,
        weight,
        dimensions,
        warrantyInformation,
        shippingInformation,
        availabilityStatus,
        reviews,
        returnPolicy,
        minimumOrderQuantity,
        meta,
        thumbnail
    } = data;
    return (
        <div className='product'>
            <img src={thumbnail} alt={title}/>
            <p><strong>Id:</strong> {id}</p>
            <h3>{title}</h3>
            <p><strong>Description:</strong> {description}</p>
            <p><strong>Category:</strong> {category}</p>
            <p><strong>Price:</strong> ${price} <span className="discount">({discountPercentage}% off)</span></p>
            <p><strong>Rating:</strong> {rating} / 5</p>
            <p><strong>Stock:</strong> {stock} ({availabilityStatus})</p>
            <p><strong>Brand:</strong> {brand}</p>
            <p><strong>SKU:</strong> {sku}</p>
            <p><strong>Weight:</strong> {weight} g</p>
            <p><strong>Dimensions:</strong> {dimensions.width} x {dimensions.height} x {dimensions.depth} cm</p>
            <p><strong>Warranty:</strong> {warrantyInformation}</p>
            <p><strong>Shipping:</strong> {shippingInformation}</p>
            <p><strong>Return Policy:</strong> {returnPolicy}</p>
            <p><strong>Minimum Order Quantity:</strong> {minimumOrderQuantity}</p>
            <div className='tags'>
                <p>
                    <strong>Tags: </strong> {tags.join(', ')}
                </p>
            </div>
            <div className='reviews'>
                <h3>Reviews:</h3>
                {reviews.map((rev) => (
                    <ul className='list-reviews'>
                        <li><i>Rating:</i> {rev.rating}</li>
                        <li><i>Comment:</i>{rev.comment}</li>
                        <li><i>Date:</i>{rev.date}</li>
                        <li><i>Rev name:</i>{rev.reviewerName}</li>
                        <li><i>Rew email:</i>{rev.reviewerEmail}</li>
                    </ul>
                ))}
            </div>
            {meta && (
            <div className='meta'>
                <h3>Meta:</h3>
                <ul className='list-meta'>
                    <li><i>Created:</i> {meta?.createdAt}</li>
                    <li><i>Updated:</i>{meta?.updatedAt}</li>
                    <li><i>Bar code:</i>{meta?.barcode}</li>
                    <li><i>QR code:</i>{meta?.qrCode}</li>
                </ul>
            </div>
            )}
        </div>

    );
};

export default Product;