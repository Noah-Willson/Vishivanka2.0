import React, { useState } from 'react';
import Star from './Star';

const StarRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0); 

  return (
    <div id="starComponent">
      <h2 style={{marginBottom:35}}>Rate us!</h2>
       
      {[...Array(totalStars)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <Star 
            key={index} 
            filled={ratingValue <= (hover || rating)} 
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(0)}
            onClick={() => setRating(ratingValue)}
          />
        );
      })}

<p>{rating} of {totalStars} stars</p>

    </div>
  );
};

export default StarRating;
