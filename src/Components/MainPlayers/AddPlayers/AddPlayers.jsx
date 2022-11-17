import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { playersContext } from "../../../context/PlayersContextProvider";
import "./AddPlayers.css";

const AddPlayers = () => {
  const { addPlayers } = useContext(playersContext);
  const [name, setName] = useState("");
  const [lastName, setlastName] = useState("");
  const [position, setPosition] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [salary, setSalary] = useState(0);
  const [img, setImg] = useState("");

  function handleAdd(e) {
    e.preventDefault();
    if (
      !name.trim() ||
      !lastName.trim() ||
      !position.trim() ||
      !age.trim() ||
      !country.trim() ||
      !salary.trim() ||
      !img.trim()
    ) {
      alert("Заполните поля!");
      return;
    }

    let playObj = {
      name,
      lastName,
      position,
      age,
      country,
      salary: +salary,
      img,
    };

    addPlayers(playObj);
    setName("");
    setlastName("");
    setPosition("");
    setAge("");
    setCountry("");
    setSalary(0);
    setImg("");
  }
  return (
    <>
      <form id="form-add" onSubmit={e => handleAdd(e)}>
        <h2 id="add-title">Добавление игрока</h2>
        <TextField
          className="outlined-basic"
          label="Имя"
          variant="outlined"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="Фамилия"
          variant="outlined"
          value={lastName}
          onChange={e => setlastName(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="Позиция"
          variant="outlined"
          value={position}
          onChange={e => setPosition(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="Возраст"
          variant="outlined"
          value={age}
          onChange={e => setAge(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="Страна"
          variant="outlined"
          value={country}
          onChange={e => setCountry(e.target.value)}
        />
        <TextField
          type="number"
          className="outlined-basic"
          label="Зарплата"
          variant="outlined"
          value={salary}
          onChange={e => setSalary(e.target.value)}
        />
        <TextField
          className="outlined-basic"
          label="Фото"
          variant="outlined"
          value={img}
          onChange={e => setImg(e.target.value)}
        />
        <Button
          variant="contained"
          type="submit"
          style={{ backgroundColor: "black", color: "white" }}>
          Добавить
        </Button>
      </form>
    </>
  );
};

export default AddPlayers;
