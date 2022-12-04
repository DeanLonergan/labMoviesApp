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

const ActorDetails = ({ actor }) => {

  return (
    <>
      <Typography variant="h5" component="h3">
        <b>{actor.name}'s biography</b>
      </Typography>

      <Typography variant="h6" component="p">
        {actor.biography}
      </Typography>

      <Paper component="ul" sx={root} >
        <li>
        <Chip label={`With a popularity score of ${actor.popularity}, they are primarily known for ${actor.known_for_department}.`} />
        </li>
      </Paper>

      <Paper component="ul" sx={root} >
        <li>
        <Chip label={`Born on ${actor.birthday} in ${actor.place_of_birth}.`} />
        </li>
      </Paper>
    </>
  );
};

export default ActorDetails ;