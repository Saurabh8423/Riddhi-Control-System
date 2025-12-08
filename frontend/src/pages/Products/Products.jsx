// ProductPage.jsx (simplified)
import React, { useEffect, useState } from 'react';
import api from '../../api/api';

export default function ProductPage({ id }){
  const [product, setProduct] = useState(null);
  useEffect(()=>{ api.get(`/products/${id}`).then(r=>setProduct(r.data)).catch(console.error); }, [id]);

  const submitReview = async (rating, comment) => {
    try {
      const token = localStorage.getItem('token');
      if(token) api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      await api.post('/reviews', { productId: id, rating, comment });
      const { data } = await api.get(`/products/${id}`);
      setProduct(data);
    } catch(e){ console.error(e) }
  };

  if(!product) return <div>Loading...</div>;
  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.images?.[0]} />
      <p>{product.description}</p>
      <div>Rating: {product.ratings?.toFixed(1)} ({product.numReviews})</div>
      {/* rating input + onSubmit call submitReview */}
    </div>
  );
}
