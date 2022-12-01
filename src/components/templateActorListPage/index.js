import React, { useState } from "react";
import Header from "../headerMovieList";
import Grid from "@mui/material/Grid";
import ActorList from "../actorList";

function ActorListPageTemplate({ actors, title, action }) {
  const [nameFilter] = useState("");

  let displayedActors = actors
    .filter((m) => {
      return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    });
 console.log(displayedActors)

  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
        <ActorList action={action} actors={displayedActors}></ActorList>
    </Grid>
  );
}
export default ActorListPageTemplate;