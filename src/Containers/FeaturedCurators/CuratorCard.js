import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {},
  media: {
    height: 140,
  },
});

export default function CuratorCard(props) {
  const { curator } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Box padding={1}>
        <CardMedia
          className={classes.media}
          image="/images/paella.jpg"
          title="Demo Image"
        />
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {curator.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Details
        </Button>
      </CardActions>
    </Card>
  );
}
