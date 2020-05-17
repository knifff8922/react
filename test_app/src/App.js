import React from 'react';
import logo from './logo.svg';
import './App.css';
import Product_metod from "./components/Product_metod/Product_metod";
import Credit_card from "./components/Credit_card/Credit_card";
import Payment_metod from "./components/Payment_metod/Payment_metod";
import {BrowserRouter, Route} from "react-router-dom";
import Gift_card from "./components/Gift_card/Gift_card";
import Paypal from "./components/PayPal/PayPal";
import Title from "./components/Title/Title";

const App = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <Title />
                <Product_metod/>
                <Payment_metod/>
                <Route exact path='/' component={Credit_card}/>
                <Route exact path='/gift_card' component={Gift_card}/>
                <Route exact path='/paypal' component={Paypal}/>
            </div>
        </BrowserRouter>
    )
}

export default App;
