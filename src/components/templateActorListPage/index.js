import React, { useState } from "react";
import Header from "../headerMovieList";
import Grid from "@mui/material/Grid";
import ActorList from "../actorList";

function ActorsListPageTemplate({ actors, title, action }) {
  const [nameFilter] = useState("");

  let displayedActors = actors
    .filter((a) => {
      return a.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    });

  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <ActorList action={action} actors={displayedActors}></ActorList>
      </Grid>
    </Grid>
  );
}
export default ActorsListPageTemplate;