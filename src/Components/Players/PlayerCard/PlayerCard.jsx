import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { playersContext } from "../../../context/PlayersContextProvider";
import "./PlayerCard.css";

const ExpandMore = styled(props => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const PlayerCard = ({ playObj }) => {
  const { deletePlayer } = useContext(playersContext);

  const navigate = useNavigate();
  return (
    <Card
      className="card-hover"
      sx={{ width: 250 }}
      onClick={() => navigate(`/details/${playObj.id}`)}>
      <CardMedia
        component="img"
        height="300"
        image={playObj.img}
        alt={playObj.name}
      />
      <CardContent>
        <Typography className="text-hover" variant="body2" color="text.dark">
          {playObj.name}
          {<span> </span>}
          {playObj.lastName},{<span> </span>}
          {playObj.position} {<span> </span>}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PlayerCard;
