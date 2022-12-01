import React, { useState} from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};

const ActorDetails = ({ actors }) => {

  return (
    <>
      <Typography variant="h5" component="h3">
        <b>Biography of {actors.name}</b>
      </Typography>

      <Typography variant="h6" component="p">
        {actors.biography}
      </Typography>

      <Paper 
        component="ul" 
        sx={root}
      >
         <Chip
         label={`${actors.popularity}`}
        />
        
        <Chip
         label={`${actors.birthday}`}
        />

         <Chip
         label={`${actors.place_of_birth}`}
        />

         <Chip
         label={`${actors.known_for_department}`}
        />

        </Paper>
      </>
  );
};

export default ActorDetails ;