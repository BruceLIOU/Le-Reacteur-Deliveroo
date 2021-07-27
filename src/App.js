import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import Restaurants from "./components/Restaurants";
import Categories from "./components/Categories";
import Cart from "./components/Cart";
import EmptyCart from "./components/EmptyCart";
// import Footer from "./components/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faStar);

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const fetchData = async () => {
    const response = await axios.get(
      "https://lereacteur-deliveroo-backend.herokuapp.com/"
    );
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <div className="App">
      <Header />
      <Restaurants data={data} />
      <section className="content">
        <div className="menu">
          {data.categories.map((item, index) => {
            return (
              <Categories
                data={item}
                index={index}
                cart={cart}
                setCart={setCart}
              />
            );
          })}
        </div>
        <div className="cartLayout">
          {cart.length ? <Cart cart={cart} setCart={setCart} /> : <EmptyCart />}
        </div>
      </section>
    </div>
  );
}

export default App;
