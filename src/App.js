import Header from "./components/Header";
import Card from "./components/UI/Card/Card";
import Drawer from "./components/Drawer";
import { useEffect, useState } from "react";


function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch('https://64b3700a38e74e386d56118c.mockapi.io/items').then(res => {
      return res.json();
    }).then(json => {
      setItems(json);
    });
  }, []);

  const onAddToCart = (obj) => {
    setCartItems(prev => [...prev, obj]);
  }
  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer items = {cartItems}  onClose={() => setCartOpened(false)} ></Drawer>}
      <Header onClickCart={() => setCartOpened(true)}></Header>
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1 className="">Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/Lupa.svg" alt="Search"></img>
            <input placeholder="Поиск..."></input>
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items.map((item) => (<Card
            onAdd={(obj) => onAddToCart(obj)}
            onFavorite={() => console.log("Добавили закладки")}
            title={item.title}
            price={item.price}
            imageUrl={item.imageUrl}></Card>))}
        </div>

      </div>
    </div >
    // Если что уберем flex-wrap to DO
  );
}

export default App;
