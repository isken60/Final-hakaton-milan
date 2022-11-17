import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import PlayersContextProvider from "./context/PlayersContextProvider";
import MainRoutes from "./MainRoutes";
import "./index.css";
import Footer from "./Components/Footer/Footer";
import BasketContextProvider from "./context/BasketContextProvider";
import AuthContextProvider from "./context/AuthContextProvider";

const App = () => {
  return (
    <AuthContextProvider>
      <BasketContextProvider>
        <PlayersContextProvider>
          <Navbar />
          <MainRoutes />
          <Footer />
        </PlayersContextProvider>
      </BasketContextProvider>
    </AuthContextProvider>
  );
};

export default App;
