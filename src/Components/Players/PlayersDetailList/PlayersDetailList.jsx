import React, { useContext, useEffect } from "react";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import EuroIcon from "@mui/icons-material/Euro";
import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";
import { playersContext } from "../../../context/PlayersContextProvider";
import { basketContext } from "../../../context/BasketContextProvider";
import userEvent from "@testing-library/user-event";
import { authContext } from "../../../context/AuthContextProvider";

const PlayersDetailList = () => {
  const { playerDetails, readOnePlayer, deletePlayers } =
    useContext(playersContext);

  const { addPlayerToBasket } = useContext(basketContext);

  const { user } = useContext(authContext);

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    readOnePlayer(id);
  }, [id]);

  return (
    <>
      {playerDetails ? (
        <Container
          sx={{
            marginTop: "10px",
            marginBottom: "10px",
          }}>
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}>
            <Grid item xs={10}>
              <Paper
                elevation={8}
                sx={{ padding: "10px", marginBottom: "10px" }}>
                <Typography
                  variant="h5"
                  sx={{ display: "flex", justifyContent: "center" }}>
                  {playerDetails.name}{" "}
                  <SportsSoccerIcon sx={{ fontSize: "20px" }} />
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ display: "flex", justifyContent: "center" }}>
                  {playerDetails.lastName}
                </Typography>
                <hr />
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <img
                    style={{ width: "50%" }}
                    src={playerDetails.img}
                    alt="error"
                  />
                </Box>
                <hr />
                <Typography
                  sx={{
                    marginTop: "10px",
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}>
                  Позиция: <br />
                  {playerDetails.position}
                </Typography>
                <hr />
                <Typography
                  sx={{
                    marginTop: "20px",
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}>
                  Страна: <br />
                  {playerDetails.country}
                </Typography>
                <hr />
                <Typography
                  sx={{
                    marginTop: "10px",
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}>
                  Возраст: {playerDetails.age}
                </Typography>
                <hr />
                <Alert
                  sx={{
                    fontSize: "20px",
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                  Зарплата: {playerDetails.salary} <EuroIcon />
                  <Button
                    variant="contained"
                    color="warning"
                    sx={{
                      display: "flex",
                    }}
                    onClick={() => addPlayerToBasket(playerDetails)}>
                    Add to Basket {<span> </span>} <AddShoppingCart />
                  </Button>
                </Alert>
                {user.email === "isken60@gmail.com" ? (
                  <Box
                    sx={{
                      mt: "15px",
                      display: "flex",
                      justifyContent: "center",
                    }}>
                    <Button
                      variant="contained"
                      color="error"
                      sx={{ width: "100px" }}
                      onClick={() => deletePlayers(playerDetails.id)}>
                      Delete
                    </Button>

                    <Button
                      variant="contained"
                      color="warning"
                      sx={{ width: "100px" }}
                      onClick={() => navigate(`/edit/${playerDetails.id}`)}>
                      Edit
                    </Button>
                  </Box>
                ) : null}
              </Paper>
            </Grid>
          </Grid>
        </Container>
      ) : null}
    </>
  );
};

export default PlayersDetailList;
