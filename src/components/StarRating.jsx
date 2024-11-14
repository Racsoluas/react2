import React from 'react';

function StarRating({ rating }) {
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => (
        <span key={index}>
          {index < rating ? (
            <i className="fa-star star-filled" style={{ color: '#ffc107' }}></i>
          ) : (
            <i className="fa-star star-empty" style={{ color: '#e4e5e9' }}></i>
          )}
        </span>
      ))}
    </div>
  );
}

export default StarRating