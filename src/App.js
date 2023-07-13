import Header from "./components/Header";
import Card from "./components/Card";
import Drawer from "./components/Drawer";


function App() {
  return (
    <div className="wrapper clear">
      <Drawer></Drawer>
      <Header></Header>
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1 className="">Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/Lupa.svg" alt="Search"></img>
            <input placeholder="Поиск..."></input>
          </div>
        </div>

        <div className="d-flex flex-wrap"> 
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>

        </div>
        
      </div>
    </div>
    // Если что уберем flex-wrap to DO
  );
}

export default App;
