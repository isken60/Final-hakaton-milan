import React, { createContext, useReducer } from "react";
export const basketContext = createContext();

function getCountPlayersBasket() {
  let basket = JSON.parse(localStorage.getItem("basket"));
  return basket ? basket.players?.length : 0;
}

const INIT_STATE = {
  basket: JSON.parse(localStorage.getItem("basket")),
  basketCount: getCountPlayersBasket(),
};

function reducer(prevState, action) {
  switch (action.type) {
    case "GET_PLAYER":
      return { ...prevState, basket: action.payload };
    case "CHANGE_BASKET_COUNT":
      return { ...prevState, basketCount: action.payload };
    default:
      return prevState;
  }
}

const BasketContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  function addPlayerToBasket(playObj) {
    let basket = JSON.parse(localStorage.getItem("basket"));
    if (basket === null) {
      basket = {
        players: [],
      };
    }

    let newPlayer = {
      item: playObj,
    };

    let filterBasket = basket.players.filter(elem => {
      return elem.item.id === playObj.id;
    });

    if (filterBasket.length > 0) {
      basket.players = basket.players.filter(elem => {
        return elem.item.id !== playObj.id;
      });
    } else {
      basket.players.push(newPlayer);
    }
    localStorage.setItem("basket", JSON.stringify(basket));
    dispatch({
      type: "CHANGE_BASKET_COUNT",
      payload: basket.players.length,
    });
  }

  function getBasket() {
    let basket = JSON.parse(localStorage.getItem("basket"));
    if (!basket) {
      basket = {
        players: [],
      };
    }

    dispatch({
      type: "GET_PLAYER",
      payload: basket,
    });
  }

  function deleteBasketPlayer(id) {
    let basket = JSON.parse(localStorage.getItem("basket"));
    basket.players = basket.players.filter(elem => {
      return elem.item.id !== id;
    });
    dispatch({
      type: "CHANGE_BASKET_COUNT",
      payload: basket.players.length,
    });
    localStorage.setItem("basket", JSON.stringify(basket));
    getBasket();
  }
  const cloud = {
    addPlayerToBasket,
    getBasket,
    deleteBasketPlayer,
    playersInBasket: state.basket,
    basketCount: state.basketCount,
  };
  return (
    <basketContext.Provider value={cloud}>{children}</basketContext.Provider>
  );
};

export default BasketContextProvider;
