import React from 'react';
import './CustomerReview.css'; 

const CustomerReview = ({ reviews }) => {
  return (
    <div className="customer-feed">
      {reviews.map((review, index) => (
        <div key={index} className="review">
          <div className="review-header">
            <img src={review.img} alt={review.name} className="customer-img" />
            <div className="customer-info">
              <h4>{review.name}</h4>
              <div className="rating">
                {Array.from({ length: 5 }, (v, i) => (
                  <span key={i} className={i < review.rating ? 'star filled' : 'star'}>
                    ★
                  </span>
                ))}
                <span className="rating-number">({review.rating})</span>
              </div>
            </div>
          </div>
          <p className="review-text">{review.text}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default CustomerReview;
