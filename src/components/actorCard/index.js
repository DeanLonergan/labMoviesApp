import React, { useContext  } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import img from '../../images/film-poster-placeholder.png';
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';

export default function ActorCard({ actor, action }) {
   return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
      avatar={
        actor.favourite ? (
          <Avatar sx={{ backgroundColor: 'green' }}>
            <FavoriteIcon />
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
        <CardActions disableSpacing>
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