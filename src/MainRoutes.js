import React from "react";
import { Route, Routes } from "react-router-dom";
import Authorization from "./Components/Auth/Authorization";
import BasketPlay from "./Components/BasketPlay/BasketPlay";
import Fanzone from "./Components/Fanzone/Fanzone";
import HomePage from "./Components/HomePage/HomePage";
import AddPlayers from "./Components/MainPlayers/AddPlayers/AddPlayers";
import EditPlayers from "./Components/MainPlayers/EditPlayers/EditPlayers";
import MainSquad from "./Components/MainSquad/MainSquad";
import PlayersDetailList from "./Components/Players/PlayersDetailList/PlayersDetailList";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<Authorization />} />
      <Route path="/add" element={<AddPlayers />} />
      <Route path="/fanzone" element={<Fanzone />} />
      <Route path="/mainsquad" element={<MainSquad />} />
      <Route path="/details/:id" element={<PlayersDetailList />} />
      <Route path="/edit/:id" element={<EditPlayers />} />
      <Route path="/basket" element={<BasketPlay />} />
    </Routes>
  );
};

export default MainRoutes;
