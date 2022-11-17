import { Grid, Pagination, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { playersContext } from "../../../context/PlayersContextProvider";
import Filter from "../../Filter/Filter";
import PlayerCard from "../PlayerCard/PlayerCard";

const PlayersList = () => {
  const { playersArr, readPlayers, pageTotalCount } =
    useContext(playersContext);

  const [paramsSearch, setParamsSearch] = useSearchParams();
  const [position, setPosition] = useState("all");
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (position === "all") {
      setParamsSearch({
        q: paramsSearch.get("q") || "",
        _page: page,
        _limit: 8,
      });
    } else {
      setParamsSearch({
        q: paramsSearch.get("q") || "",
        position: position,
        _page: page,
        _limit: 8,
      });
    }
  }, [paramsSearch, position, page]);

  useEffect(() => {
    readPlayers();
  }, [pageTotalCount, paramsSearch]);

  return (
    <>
      <Grid sx={{ width: "40%" }} ml="40px" my="20px">
        <Typography variant="h5" sx={{ color: "orange" }}>
          Фильтрация
        </Typography>
        <Filter position={position} setPosition={setPosition} />
      </Grid>
      <Grid
        sx={{ width: "80%" }}
        container
        direction="row"
        justifyContent="space-evenly"
        gap="15px"
        padding="10px 20px"
        flexWrap="wrap"
        mx="auto"
        my="20px">
        {playersArr
          ? playersArr.map(item => <PlayerCard playObj={item} />)
          : null}
      </Grid>
      <Grid
        sx={{
          width: "15%",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "lightgrey",
          opacity: 0.6,
        }}
        mx="auto"
        my="20px">
        <Pagination
          count={+pageTotalCount}
          color="warning"
          page={+page}
          onChange={(e, value) => setPage(value)}
        />
      </Grid>
    </>
  );
};

export default PlayersList;
