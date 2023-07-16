import React from "react";

const Drawer = ({ onClose, items = []}) => {
    return (

        <div className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between mb-30">Корзина <img onClick={onClose} className="cu-p" src="/img/btnRemove.svg" alt="Remove"></img> </h2>

                <div className="items">
                    {items.map((obj) => (
                        <div className="cartItem d-flex align-center mb-20">
                            <img className="mr-20" width={80} height={70} src={obj.imageUrl} alt="Sneakers" />
                            <div className="mr-20">
                                <p mb-5>{obj.title}</p>
                                <b>{`${obj.price} руб.` }</b>
                            </div>
                            <img className="cartItemRemoveBtn"  onClick = {2} src="/img/btnRemove.svg" alt="Remove"></img>
                        </div>
                    ))}
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