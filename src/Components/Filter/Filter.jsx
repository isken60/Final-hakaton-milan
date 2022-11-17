import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";

const Filter = ({ position, setPosition }) => {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label" sx={{ color: "orange" }}>
        По позиции
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="all"
        name="radio-buttons-group"
        value={position}
        onChange={e => setPosition(e.target.value)}>
        <div
          style={{
            color: "orange",
            display: "flex",
            flexDirection: "column",
          }}>
          <FormControlLabel
            value="Goalkeeper"
            control={<Radio sx={{ color: "white" }} />}
            label="Goalkeeper"
          />
          <FormControlLabel
            value="Defender"
            control={<Radio sx={{ color: "white" }} />}
            label="Defender"
          />
          <FormControlLabel
            value="Midfielder"
            control={<Radio sx={{ color: "white" }} />}
            label="Midfielder"
          />
          <FormControlLabel
            value="Forward"
            control={<Radio sx={{ color: "white" }} />}
            label="Forward"
          />
          <FormControlLabel
            value="all"
            control={<Radio sx={{ color: "white" }} />}
            label="All positions"
          />
        </div>
      </RadioGroup>
    </FormControl>
  );
};

export default Filter;
