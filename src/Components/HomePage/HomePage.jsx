import React from "react";
import homePicture from '../../Assets/Images/mainPicture.webp'
import './HomePage.css'
import Sponsored from "../Sponsored/Sponsored";
import Content from "../Common/Content/Content"
import Navbar from "../Common/Header/Navbar";
import { Link } from 'react-router-dom'

const HomePage = () => {


  return (
    <>
      <div className="mainDiv">
        <div className="content">
          <div className="text">
            <h1>Душа Галичини в кожній нитці</h1>
            <p>Наш бізнес створює унікальні вишиванки,поєднуючи старі традиції
              та <br /> нові модні тенденції.Ми пропонуємо різноманітні вишиванки
              для всієї родини, кожна з яких <br />  розповідає історію через
              свій дизайн і кольори. Наші вишиванки створені з любов'ю
              щоб додати особливості до вашого гардеробу.
            </p>



            <Link to="/items" >
              <button id='button'> Наші послуги </button>
            </Link>


          </div>
          <div className="image">
            <img src={homePicture} alt="homePicture" id="imageDiv" />
          </div>
        </div>
      </div>
      <Sponsored />
      <Content />
    </>
  )
}

export default HomePage;