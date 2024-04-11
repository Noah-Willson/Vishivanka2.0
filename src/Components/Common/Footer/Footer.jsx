import React from "react";
import { useForm, ValidationError } from '@formspree/react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faComment, faLocationDot } from '@fortawesome/free-solid-svg-icons';



function Footer() {
  const [state, handleSubmit] = useForm("xeqyllby");


  if (state.succeeded) {
    return <p>Дякую,очікуйте дзвінок про відправлення!</p>;
  } 

  return (

    <div className="MainFooterDiv">


      <div className="FooterInfo">

        <div className="FormIsHere">
          <form id='Form' onSubmit={handleSubmit}>
            <label id="Label" htmlFor="email">
            Замовити можна тут → 
            </label>
          
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <textarea
              id="message"
              name="message"
              placeholder="Хочу замовити ..."
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button id="Button"  type="submit" disabled={state.submitting}>
              Замовити
            </button>
          </form>
        </div>

        <div className="Contacts">

          <span className="Phone">
            <FontAwesomeIcon icon={faPhone} />
            <p>
              Телефонуйте за номером +380968692179

            </p>
          </span>

          <span className="Location">
            <FontAwesomeIcon icon={faLocationDot} />

            <p>
              Коломия,Вулиця Чорновола 26,Івано-Франківська обл
            </p>
          </span>

          <span className="Social">
            <FontAwesomeIcon icon={faComment} style={{ paddingBottom: "20px" }} />
            <br />
            Viber - <br />
            Instagram
          </span>


        </div>
      </div>


      <div className="Map">

        <iframe
          width="100%"
          height="300px"
          style={{ border: 0, paddingTop: "10%" }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5284.8521230338165!2d25.03235613688774!3d48.525066079556176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4736d3af9f2342e9%3A0xec2f5a85cb3ff4a6!2sKolomyia%20Town%20Hall!5e0!3m2!1sen!2sua!4v1711034826955!5m2!1sen!2sua">
        </iframe>

      </div>

    </div>
  );
}


export default Footer