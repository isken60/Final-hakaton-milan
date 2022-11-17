import React, { useContext, useEffect } from "react";
import { basketContext } from "../../context/BasketContextProvider";
import EuroIcon from "@mui/icons-material/Euro";
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const BasketPlay = () => {
  const { playersInBasket, getBasket, deleteBasketPlayer } =
    useContext(basketContext);

  useEffect(() => {
    getBasket();
  }, []);

  return (
    <>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ color: "white" }}>
          Transfer list
        </Typography>
        {playersInBasket ? (
          <>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }}>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Lastname</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Position</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Age</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Country</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Salary</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Image</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {playersInBasket.players.map(elem => (
                    <TableRow key={elem.item.id}>
                      <TableCell>{elem.item.name}</TableCell>
                      <TableCell>{elem.item.lastName}</TableCell>
                      <TableCell>{elem.item.position}</TableCell>
                      <TableCell>{elem.item.age}</TableCell>
                      <TableCell>{elem.item.country}</TableCell>
                      <TableCell
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          height: "60px",
                          alignItems: "center",
                        }}>
                        {elem.item.salary} <EuroIcon />
                      </TableCell>
                      <TableCell>
                        <img src={elem.item.img} alt="" width={40} />
                      </TableCell>
                      <TableCell
                        onClick={() => deleteBasketPlayer(elem.item.id)}>
                        <DeleteOutlineIcon className="deleteIconBasket" />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        ) : (
          <h1>Loading...</h1>
        )}
      </Container>
    </>
  );
};

export default BasketPlay;
