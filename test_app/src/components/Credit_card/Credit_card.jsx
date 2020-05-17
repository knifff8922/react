import React from 'react';
import s from './Credit_card.module.css';



const Credit_card = () => {



    return (

        <form>
            <div className={s.credit__card}>
                <div className={s.credit__card__data}>
                    <div className={s.card__number}>
                        <label htmlFor="validationDefault01">Card number<span>*</span> </label>
                        <input type="number" className="form-control card_number_icon" id="validationDefault01" required/>
                    </div>
                    <div className={s.card__valid__main}>
                        <label htmlFor="validationDefault02">Vaild thru (mm/yy)<span>*</span></label>
                        <div className={s.card__valid}>
                            <div className={s.card__valid__items}>
                                <input type="number" className="form-control" id="validationDefault02" required/>
                            </div>
                            <p>/</p>
                            <div className={s.card__valid__items__2}>
                                <input type="number" className="form-control" id="validationDefault03" required/>
                            </div>
                        </div>
                        <div className={s.card__city}>
                            <label htmlFor="validationDefault03">Cardholder's name<span>*</span></label>
                            <input type="text" className="form-control" id="validationDefault04" required/>
                        </div>
                    </div>
                </div>
                <div className={s.cvc}>
                    <label htmlFor="validationDefault01">CVV/CVC<span>*</span> </label>
                    <div className={s.cvv_block}>
                        <input type="text" className="form-control cvv_icon" id="validationDefault05" required/>
                        <div className={s.cvv_quest}>
                            <button className={s.cvv_button} data-toggle="tooltip" data-placement="top" title="Enter the CVV / CVC code at the back of your payment card and proceed to payment.">
                            <svg className="bi bi-question-circle-fill" width="1em" height="1em" viewBox="0 0 16 16"
                                 fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                      d="M16 8A8 8 0 110 8a8 8 0 0116 0zM6.57 6.033H5.25C5.22 4.147 6.68 3.5 8.006 3.5c1.397 0 2.673.73 2.673 2.24 0 1.08-.635 1.594-1.244 2.057-.737.559-1.01.768-1.01 1.486v.355H7.117l-.007-.463c-.038-.927.495-1.498 1.168-1.987.59-.444.965-.736.965-1.371 0-.825-.628-1.168-1.314-1.168-.901 0-1.358.603-1.358 1.384zm1.251 6.443c-.584 0-1.009-.394-1.009-.927 0-.552.425-.94 1.01-.94.609 0 1.028.388 1.028.94 0 .533-.42.927-1.029.927z"
                                      clip-rule="evenodd"/>
                            </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.check_box}>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
                    <label className="form-check-label" htmlFor="invalidCheck2">I accept
                        <a className data-toggle="collapse" href="#collapseExample" role="button"
                                 aria-expanded="false" aria-controls="collapseExample"><span className={s.terms_condition}> Terms and Condition</span>

                        </a>
                        <div className="collapse" id="collapseExample">
                            <div className="card card-body">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae debitis dolorem earum expedita hic ipsum nesciunt nostrum, odit officiis quaerat quasi quisquam quo rem, repudiandae vel vero! Repellat, voluptate.
                            </div>
                        </div>
                    </label>
                </div>
            </div>
            <div className={s.button}>
                <button className="btn btn-primary" type="submit">Place order ($624.99)</button>
            </div>
        </form>
    )
}

export default Credit_card;