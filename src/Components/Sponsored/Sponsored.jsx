import React from "react";
import './Sponsored.css'
import sponsors from '../../Assets/Images/texture2.png'
import sponsors1 from '../../Assets/Images/texture1.png'
import sponsors2 from '../../Assets/Images/texture3.png'
import sponsors3 from '../../Assets/Images/texture4.png'
import sponsors4 from '../../Assets/Images/texture5.png'


const Sponsored = () => {

  return (

    <div className="sponsorsMainDiv">

      <div className="contentSponsors">

        <div className="sponsoredImageDiv" >
          <img src={sponsors} alt="sponsors" />
          <img src={sponsors1} alt="sponsors1" />
          <img src={sponsors2} alt="sponsors2" />
          <img src={sponsors3} alt="sponsors3" />
          <img src={sponsors4} alt="sponsors4" />
        </div>

        <div className="text">


          <div className="info">

            {/* <div id="ratingOne">
                       <StartRating/>
                 </div> */}

            <div className="infoText">
              <h1>Що кажуть наші клієнти</h1>
              <h2>Марія Войтович</h2>
              <p>
                Купуючи цю вишиванку, я отримала більше
                ніж одяг – це шматок української культури.
                Якість вражає, а візерунки наповнені глибоким сенсом.
                Ідеально підходить як для святкових днів,
                так і для повсякденного носіння.
                Сервіс на вищому рівні, доставка швидка.
                Ця вишиванка – справжня гордість мого гардеробу!
              </p>
            </div>


            <div id="ratingStatik">
              <img id="HappyCustomer" src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="happyCustomer" />
              <p id="star">★★★★★</p>
              <p>2,394 Відгуки
                <br />  Google Reviews</p>
            </div>



          </div>
        </div>


      </div>
    </div>
  )


}

export default Sponsored