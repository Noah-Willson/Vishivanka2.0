import React from "react"
import './Items.css'
import Navbar from "../../Common/Header/Navbar"
import Grid from "../Item/Grid"


const Items = () => {

    const items = Array.from({ length: 50 }, (_, i) => `Element ${i + 1}`);


    
    return (
        <>
            <Navbar />

            <div className="mainItem">

                <div className="item">
                    <Grid elements={items} />
                </div>

            </div>
        </>

    )
}

export default Items