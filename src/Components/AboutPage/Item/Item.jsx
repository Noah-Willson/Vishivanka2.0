import React from "react";
import "./Item.css"

const Item = ({ element }) => {

    return (
        <div className="element">

            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCjRgFeoBj67EfArHSTWBHIarZ70L1wyGAd9kg6XvdVw&s" alt="image" />

            <h2>
                Назва вишиванки
            </h2>

            <p>Опис - Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quis consequatur aliquam obcaecati magnam incidunt assumenda quaerat ratione sed possimus? </p>

            <span id="price">

            <button id="buttonGrid"> Купити </button>
                <h3> 550 грн</h3>
            </span>

            <hr />

        </div>
    )



}


export default Item