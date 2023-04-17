import React from "react";
import Header from "./Component/Header/Header";
import Shop from "./Component/Shop/Shop";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default App;
