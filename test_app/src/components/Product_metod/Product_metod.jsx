import React from 'react';
import s from './Product_metod.module.css';


const Product_metod = () => {
    return (
        <div className={s.main}>
            <div>
                <p className={s.items__title}>Products</p>
                <div className={s.item}>
                    <div className={s.item__title}>
                        <a href="#">Apple - iPad with Retina display Wi-Fi - 32GB - White</a>
                    </div>
                    <div className={s.item__price}>$499.00</div>
                </div>
                <div className={s.item}>
                    <div className={s.item__title}>
                        <a href="#">16GB A Series Walkman Video MP3</a>
                    </div>
                    <div className={s.item__price}>$130.00</div>
                </div>
            </div>
            <div>
                <p className={s.items__title}>Shipping metod</p>
                <div className={s.item}>
                    <div className={s.item__title}>
                        <p>FedEx</p>
                    </div>
                    <div className={s.item__price__shipping}>$13.99</div>
                </div>
            </div>
            <div>
                <p className={s.items__title}>Payment metod</p>
            </div>

        </div>

    )
};


export default Product_metod;