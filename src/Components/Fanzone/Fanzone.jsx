import { Container, Grid, Typography } from "@mui/material";
import React from "react";

const Fanzone = () => {
  return (
    <>
      <Container sx={{ color: "white" }}>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
          }}>
          <h1>Трофеи и награды "Милана"</h1>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
          }}>
          <img
            src="https://milanac.ru/wp-content/uploads/2011/08/8f4e3637468a1.jpg"
            alt="img"
            width={"50%"}
          />
        </Grid>
        <Typography>
          <h1>Официальные трофеи</h1>
        </Typography>
        <Typography sx={{ fontSize: "20px" }}>
          <span style={{ fontWeight: "bold", fontSize: "20px" }}>
            Национальные: 29 трофеев
          </span>
          <hr />
          Чемпионат Италии: 1901, 1906, 1907, 1950-1951, 1954-1955, 1956-1957,
          1958-1959, 1961-1962, 1967-1968, 1978-1979, 1987-1988, 1991-1992,
          1992-1993, 1993-1994, 1995-1996, 1998-1999, 2003-2004, 2010-2011,
          2021-2022
        </Typography>
        <hr />
        <Typography>
          <span style={{ fontWeight: "bold", fontSize: "20px" }}>
            Кубок Италии: 5 трофеев
          </span>
          <br />
          1966-1967, 1971-1972, 1972-1973, 1976-1977, 2002-2003
        </Typography>
        <hr />
        <Typography>
          <span style={{ fontWeight: "bold", fontSize: "20px" }}>
            Суперкубок Италии: 7 (рекорд)
          </span>
          <br />
          1988, 1992, 1993, 1994, 2004, 2011, 2016
        </Typography>
        <Typography>
          <h1>Международные:</h1>
          <span style={{ fontSize: "20px" }}>18 трофеев (рекорд)</span>
        </Typography>
        <hr />
        <Typography sx={{ fontSize: "20px" }}>
          <span>
            Кубок Чемпионов/Лига Чемпионов: 7 (лучший среди итальянских клубов)
          </span>
          <br />
          1962-1963, 1968-1969, 1988-1989, 1989-1990, 1993-1994, 2002-2003,
          2006-2007
        </Typography>
        <hr />
        <Typography sx={{ fontSize: "20px" }}>
          <span>
            Кубок Обладателей Кубков: 2 (лучший среди итальянских клубов)
          </span>
          <br />
          1967-1968, 1972-1973
        </Typography>
        <hr />
        <Typography sx={{ fontSize: "20px" }}>
          <span>Суперкубок УЕФА: 5 (рекорд)</span>
          <br />
          1989, 1990, 1994, 2003, 2007
        </Typography>
        <hr />
        <Typography sx={{ fontSize: "20px" }}>
          <span>
            Межконтинентальный Кубок/Клубный чемпионат Мира: 4 (рекорд)
          </span>
          <br />
          1969, 1989, 1990, 2007
        </Typography>
        <hr />
      </Container>
    </>
  );
};

export default Fanzone;
