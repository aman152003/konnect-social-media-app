import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";

const PostCard = () => {
  return (
    <Card sx={{ maxWidth: 600 }}>
      <Link
        component={RouterLink}
        to="/profile"
        variant="body2"
        underline="none"
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              J
            </Avatar>
          }
          title="John Edwards"
          subheader="November 18, 2021"
        />
      </Link>

      <CardMedia
        component="img"
        height="320"
        image="https://www.saveur.com/uploads/2019/01/28/VFAG4PIZZODZKJVXLMKQ5BM4BU.jpg?auto=webp&width=785&height=564.0225"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteBorderOutlinedIcon />
        </IconButton>
        <IconButton aria-label="show more comments">
          <ModeCommentOutlinedIcon />
        </IconButton>
      </CardActions>
      <CardActions>
        <TextField
          label="Post your comment"
          variant="outlined"
          multiline
          fullWidth
        />
      </CardActions>
    </Card>
  );
};

export default PostCard;
