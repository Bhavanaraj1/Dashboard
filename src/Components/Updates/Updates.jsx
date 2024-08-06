import React from 'react';
import CustomerReview from '../CustomerReview/CustomerReview'; 
import img4 from "../../imgs/img4.png"
import img2 from "../../imgs/img2.png"
import img1 from "../../imgs/img1.png"
import img5 from "../../imgs/img5.png"



const reviews = [
  {
    img: img4,
    name: 'Jessica',
    rating: 4.5,
    text: ' The service was excellent, and I am very satisfied with the product!',
  },
  {
    img: img2,
    name: 'Jane Smith',
    rating: 5,
    text: 'Amazing experience! Highly recommended.',
  },
  {
    img: img5,
    name: 'John doe',
    rating: 5,
    text: 'Best price and services',
  },
  {
    img: img1,
    name: 'Jane Smith',
    rating: 5,
    text: 'Amazing experience! Highly recommended.',
  },
  
];

const Updates = () => {
  return (
    <div className="App">
      <CustomerReview reviews={reviews} />
    </div>
  );
};

export default Updates;
