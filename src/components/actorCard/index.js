import React, { useContext  } from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import img from '../../images/film-poster-placeholder.png';
import Avatar from '@mui/material/Avatar';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Link } from "react-router-dom";
import { ActorsContext } from "../../contexts/actorsContext";

export default function ActorCard({ actor, action }) {
  const { favourites } = useContext(ActorsContext);

   if (favourites.find((id) => id === actor.id)) {
     actor.favourite = true;
   } else {
     actor.favourite = false
   }

   return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          actor.favourite ? (
            <Avatar sx={{ backgroundColor: 'green' }}>
              <PersonAddIcon />
            </Avatar>
          ) : null
        }
        title={
          <Typography variant="h5" component="p">
            {actor.name}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 500 }}
        image={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
            : img
        }
      />
      <CardContent>
      <Grid container>
        <Grid item xs={6}>
          <Typography variant="h6" component="p">
          {actor.gender === 1 ? "Female" : "Male"}
          </Typography>
        </Grid>
        </Grid>
        <CardActions disableSpacing>
        {action(actor)}
          <Link to={`/actors/${actor.id}`}>
            <Button variant="outlined" size="medium" color="primary">
              More Info ...
            </Button>
          </Link>
        </CardActions>
      </CardContent>
    </Card>
  );
}