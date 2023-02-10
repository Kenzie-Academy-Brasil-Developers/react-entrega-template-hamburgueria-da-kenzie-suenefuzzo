import React, { useState } from "react";
import { CartList } from "../../components/CartList";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductsList";
import { StyledMain } from "./style";
import { useEffect } from "react";
import { api } from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Dashboard = () => {
  const localList = localStorage.getItem("@cartList");
  const [productsList, setProductsList] = useState([]);
  const [currentSale, setCurrentSale] = useState(
    localList ? JSON.parse(localList) : []
  );
  const [filteredProducts, setFilteredProducts] = useState("");

  const addItemToCart = (cartItem) => {
    const some = currentSale.some((element) => element.id === cartItem.id);
    if (!some) {
      setCurrentSale((newCart) => [...newCart, cartItem]);
      toast.success("Item adicionado com sucesso");
    } else {
      toast.warning("Item já está presente no carrinho");
    }
  };

  const removeItemFromCart = (itemId) => {
    const filteredItems = currentSale.filter((item) => item.id !== itemId);
    setCurrentSale(filteredItems);
    toast.error("Item removido com sucesso");
  };

  const filteredList = productsList.filter((product) => {
    return filteredProducts === ""
      ? true
      : product.name.toLowerCase().includes(filteredProducts) ||
          product.category.toLowerCase().includes(filteredProducts);
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await api.get("products");
        setProductsList(response.data);
        console.log(response.data)
      } catch (error) {
        console.log(error);
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    localStorage.setItem("@cartList", JSON.stringify(currentSale));
  }, [currentSale]);

  return (
    <>
      <Header setFilteredProducts={setFilteredProducts} />

      <StyledMain>
        <>
          {filteredProducts && (  
            <div className="container__searchResult">
              <p>Resultado de busca para: {filteredProducts}</p>
              <button onClick={() => setFilteredProducts("")}>
                Limpar a busca
              </button>
            </div>
          )}
        </>

        <ProductList
          addItemToCart={addItemToCart}
          filteredList={filteredList}
        />

        <CartList
          currentSale={currentSale}
          removeItemFromCart={removeItemFromCart}
          setCurrentSale={setCurrentSale}
        />
      </StyledMain>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};
