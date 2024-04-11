import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ItemOne from '../../../Assets/Images/image_one.jpg'
import ItemTwo from '../../../Assets/Images/image_two.jpg'
import ItemThree from '../../../Assets/Images/image_three.jpg'
import ItemFour from '../../../Assets/Images/image_four.jpg'
import SampleNextArrow from './NextArrow'
import SamplePrevArrow from './PrevArrow'
 import './Swipelist.css'


const SwipeList = () => {


  const settings = {
    dots: false , // Show dot indicators at the bottom
    infinite: true, // Infinite looping
    speed: 500, // Animation speed
    slidesToShow: 3, // Number of items to show at once
    slidesToScroll: 3, // Number of items to scroll
    arrows:true,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>,
    responsive: [
      {
        breakpoint: 768, // Mobile breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:true
        },
      },
    ],
  };

  // Example items
  const items = [
    { id: 1, name: 'Костюмчик', description: 'Льон - 520 ГРН ', imageUrl: ItemOne },
    { id: 2, name: 'Костюмчик', description: 'Паплін,Габардин - 500 ГРН', imageUrl: ItemTwo },
    { id: 3, name: 'Костюмчик', description: 'Льон - 500 ГРН', imageUrl: ItemThree },
    { id: 4, name: 'Костюмчик', description: 'Льон - 520 ГРН', imageUrl: ItemFour },
    // Add more items as needed
  ];

  return (
    <div className="App">
    <Slider {...settings}>
  {items.map((item) => (
    <div key={item.id} className="item">
      <img src={item.imageUrl} alt={item.name} style={{ width: "100%", height: "auto" }} />
      <h2>{item.name}</h2>
      <p>{item.description}</p>
    </div>
  ))}
</Slider>
    </div>
  );
}

export default SwipeList;
