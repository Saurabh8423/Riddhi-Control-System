import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import { getProductDetails, postReview } from "../../api/api.js";

export default function ProductPage() {
  const { id } = useParams();   // ✅ Correct way to get id
  const [product, setProduct] = useState(null);

  useEffect(() => {
    loadProduct();
  }, [id]);

  const loadProduct = async () => {
    try {
      const res = await getProductDetails(id);
      setProduct(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const submitReview = async (rating, comment) => {
    try {
      await postReview({ productId: id, rating, comment });
      await loadProduct();
    } catch (err) {
      console.error(err);
    }
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.images?.[0]} alt="" />
      <p>{product.description}</p>
      <div>
        Rating: {product.ratings?.toFixed(1)} ({product.numReviews})
      </div>
    </div>
  );
}
