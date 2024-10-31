import { createContext, useEffect, useReducer, useState } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import reducer from "./reducer";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    currentUser: null,
    products: [],
    loading: false,
    openLoginModal: false,
    wishlist: [],
  });
  const fetchData = async () => {
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const result = await response.json();
      const finalProducts = result.map((x) => {
        return {
          ...x,
          brand: ["Adidas", "Reebok", "Levis", "Puma"][
            Math.floor(Math.random() * 4)
          ],
          offer: ["50%", "30%", "69%", "65%"][Math.floor(Math.random() * 4)],
          originalPrice: x.price * Math.floor(Math.random() * x.id),
          sizes: [
            ["S", "M", "L", "XL"],
            ["S", "M", "L"],
            ["M", "L", "XL"],
            ["L", "XXL"],
            ["S", "M", "XL"],
            ["M", "L", "XXL"],
          ][Math.floor(Math.random() * 6)],
        };
      });
      dispatch({ type: "SET_PRODUCTS", payload: finalProducts });
    } catch (error) {
      console.error(error);
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return () => {
      unsubscribe();
    };
  }, []);
  async function initializeUser(user) {
    if (user) {
      //setCurrentUser(user);
      dispatch({ type: "SET_USER", payload: user });
    } else {
      dispatch({ type: "SET_USER", payload: null });
    }
  }

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
