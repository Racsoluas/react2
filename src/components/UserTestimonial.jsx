import React, { useState, useEffect } from 'react'
import StarRating from './StarRating'

function UserTestimonial() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials');
        const data = await response.json();
        setTestimonials(data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <>
      {testimonials.map((item) => (
        <div key={item.id} className="customer-1 fannie">
          <div className="cus-quote-1">
            <div className="rating-and-quote">
              <i className="fa-solid fa-quote-left"></i>
            </div>
            <StarRating rating={item.starRating} />
            <p className="custom-text">{item.comment}</p>
            <div className="custom">
              <img className="avatar" src={item.avatarUrl} alt={item.author} />
              <div className="avatar-who">
                <h2 className="author-name">{item.author}</h2>
                <p className="author-role">{item.jobRole}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default UserTestimonial