import React, { useState, useEffect} from "react";
import styles from './Card.module.scss';

const Card = ({ onFavorite, title, imageUrl, price, onAdd}) => {

    const [isAdded, setIsAdded] = useState();

    const onClickPlus = () => {
        onAdd({title, imageUrl, price});
        setIsAdded(!isAdded);
    };

    // useEffect(() => { 
    //     console.log("Изменилась")
    // }, [isAdded]);
    return (
        <div className={styles.card}>
            <div className={styles.favorite} onClick={onFavorite}>
                <img src="/img/heart-off.svg" alt="Unliked"></img>
            </div>

            <img width={133} height={112} src={imageUrl} alt="Sneakers" />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена</span>
                    <b>{price} руб</b>
                </div>
                <img className =  {styles.plus} onClick={onClickPlus} width={32} height={32} src= {isAdded ? "/img/+On.svg" : "/img/+.svg"  } alt="Plus" />
            </div>

        </div>


    )

}

export default Card;

