import { Button, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { playersContext } from "../../../context/PlayersContextProvider";

const EditPlayers = () => {
  const { playerDetails, readOnePlayer, editPlayers } =
    useContext(playersContext);
  const [inpValues, setInpValues] = useState(playerDetails);
  const { id } = useParams();

  useEffect(() => {
    readOnePlayer(id);
  }, [id]);

  function handleChange(e) {
    let playObj = {
      ...inpValues,
      [e.target.name]: e.target.value,
    };
    setInpValues(playObj);
  }

  const navigate = useNavigate();

  function handleSave(e) {
    e.preventDefault();
    if (
      !inpValues.name.trim() ||
      !inpValues.lastName.trim() ||
      !inpValues.position.trim() ||
      !inpValues.age.trim() ||
      !inpValues.country.trim() ||
      !inpValues.salary ||
      !inpValues.img.trim()
    ) {
      alert("Заполните поля!");
      return;
    }
    editPlayers(id, inpValues);
    navigate("/");
  }
  return (
    <>
      <form id="form-add" onSubmit={e => handleSave(e)}>
        <h3 id="add-title" style={{ fontSize: "20px" }}>
          Редактирование товара
        </h3>
        <TextField
          className="outlined-basic"
          label="Имя"
          variant="outlined"
          name="name"
          value={inpValues.name}
          onChange={e => handleChange(e)}
        />
        <TextField
          className="outlined-basic"
          label="Фамилия"
          variant="outlined"
          name="lastName"
          value={inpValues.lastName}
          onChange={e => handleChange(e)}
        />
        <TextField
          className="outlined-basic"
          label="Позиция"
          variant="outlined"
          name="position"
          value={inpValues.position}
          onChange={e => handleChange(e)}
        />
        <TextField
          className="outlined-basic"
          label="Возраст"
          variant="outlined"
          name="age"
          value={+inpValues.age}
          onChange={e => handleChange(e)}
        />
        <TextField
          className="outlined-basic"
          label="Страна"
          variant="outlined"
          name="country"
          value={inpValues.country}
          onChange={e => handleChange(e)}
        />
        <TextField
          type="number"
          className="outlined-basic"
          label="Зарплата"
          variant="outlined"
          name="salary"
          value={+inpValues.salary}
          onChange={e => handleChange(e)}
        />
        <TextField
          className="outlined-basic"
          label="Фото"
          variant="outlined"
          name="img"
          value={inpValues.img}
          onChange={e => handleChange(e)}
        />
        <Button variant="contained" type="submit" color="error">
          Сохранить
        </Button>
      </form>
    </>
  );
};

export default EditPlayers;
