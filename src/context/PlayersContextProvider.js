import axios from "axios";
import React, { createContext, useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const playersContext = createContext();

const API = "http://localhost:8000/players";

const INIT_STATE = {
  players: null,
  playerDetails: null,
  pageTotalCount: 1,
};

function reducer(prevState, action) {
  switch (action.type) {
    case "GET_PLAYER":
      return {
        ...prevState,
        players: action.payload.data,
        pageTotalCount: Math.ceil(action.payload.headers["x-total-count"] / 8),
      };
    case "GET_ONE_PLAYER":
      return { ...prevState, playerDetails: action.payload };
    default:
      return prevState;
  }
}

const PlayersContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const location = useLocation();

  const navigate = useNavigate();

  //! CREATE
  async function addPlayers(newPlayer) {
    try {
      await axios.post(API, newPlayer);
    } catch (error) {
      return error;
    }
  }

  //! READ
  async function readPlayers() {
    const res = await axios(`${API}${location.search}`);
    dispatch({
      type: "GET_PLAYER",
      payload: res,
    });
  }

  //! DELETE
  async function deletePlayers(id) {
    try {
      const res = await axios.delete(`${API}/${id}`);
      readPlayers();
      navigate("/mainsquad");
    } catch (error) {
      console.log(error);
    }
  }

  //! EDIT
  async function editPlayers(id, editedObj) {
    await axios.patch(`${API}/${id}`, editedObj);
    readPlayers();
    navigate(`/details/${id}`);
  }

  //! DETAIL SHOW

  async function readOnePlayer(id) {
    const { data } = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_PLAYER",
      payload: data,
    });
  }

  let cloud = {
    addPlayers,
    readPlayers,
    deletePlayers,
    readOnePlayer,
    editPlayers,
    playersArr: state.players,
    playerDetails: state.playerDetails,
    pageTotalCount: state.pageTotalCount,
  };
  return (
    <playersContext.Provider value={cloud}>
      {props.children}
    </playersContext.Provider>
  );
};

export default PlayersContextProvider;
