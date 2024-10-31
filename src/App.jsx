import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import WishList from "./pages/WishList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="*" element={<h2>Page not found</h2>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
