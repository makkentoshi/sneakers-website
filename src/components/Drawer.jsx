import React from "react";

const Drawer = () => {
    return (

        <div style={{ display: 'none' }} className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between mb-30">Корзина <img className="cu-p" src="/img/btnRemove.svg" alt="Remove"></img> </h2>

                <div className="items">
                    <div className="cartItem d-flex align-center mb-20">
                        <img className="mr-20" width={80} height={70} src="/img/sneakers/image 2.jpg" alt="Sneakers" />
                        <div className="mr-20">
                            <p mb-5>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className="cartItemRemoveBtn" src="/img/btnRemove.svg" alt="Remove"></img>
                    </div>
                    <div className="cartItem d-flex align-center mb-20">
                        <img className="mr-20" width={80} height={70} src="/img/sneakers/image 2.jpg" alt="Sneakers" />
                        <div className="mr-20">
                            <p mb-5>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className="cartItemRemoveBtn" src="/img/btnRemove.svg" alt="Remove"></img>
                    </div>

                </div>

                <div className="cardBlock">
                    <ul className="cartTotalBlock">
                        <li>
                            <span>Итого:</span>
                            <div></div>
                            <b>21 498 руб.</b>
                        </li>
                        <li>
                            <span>Налог 5% :</span>
                            <div></div>
                            <b>1074 руб.</b>
                        </li>
                    </ul>
                    <button className="greenButton">Оформить заказ <img src="/img/arrow.svg"></img></button>
                </div>
            </div>
        </div>

    )

}

export default Drawer;