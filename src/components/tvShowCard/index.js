import React, { useContext  } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import WatchLaterIcon from "@mui/icons-material/Visibility";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import { TVShowsContext } from "../../contexts/tvShowsContext";

export default function TVShowCard({ tvShow, action }) {
  const { favourites } = useContext(TVShowsContext);
  const { mustWatch } = useContext(TVShowsContext);
 
   if (favourites.find((id) => id === tvShow.id)) {
    tvShow.favourite = true;
   } else {
    tvShow.favourite = false
   }

   if (mustWatch.find((id) => id === tvShow.id)) {
    tvShow.mustWatch = true;
  } else {
    tvShow.mustWatch = false
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          tvShow.mustWatch ? (
            <Avatar sx={{ backgroundColor: 'blue' }}>
              <WatchLaterIcon />
            </Avatar>
          ) : tvShow.favourite ? (
            <Avatar sx={{ backgroundColor: 'red' }}>
              <FavoriteIcon />
            </Avatar>
          ) : null
        }
        title={
          <Typography variant="h5" component="p">
            {tvShow.name}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 500 }}
        image={
          tvShow.poster_path
            ? `https://image.tmdb.org/t/p/w500/${tvShow.poster_path}`
            : img
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {tvShow.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        {action(tvShow)}
        <Link to={`/tvshows/${tvShow.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}