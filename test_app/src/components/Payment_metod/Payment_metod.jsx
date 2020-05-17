import React from 'react';
import s from './Payment_metod.module.css';
import {NavLink} from "react-router-dom";

let button_class = document.getElementById("button_class")


const Payment_metod = () => {
    return (
        <div className={s.main}>
            <div className={s.button}><NavLink to="/"><button className={s.button_item} autoFocus type="button">Credit card</button></NavLink></div>
            <div className={s.button}><NavLink to="/gift_card"><button className={s.button_item} type="button">Gift_card</button></NavLink></div>
            <div className={s.button}><NavLink to="/paypal"><button className={s.button_item} type="button">PayPal</button></NavLink></div>
        </div>
    )
}

export default Payment_metod;