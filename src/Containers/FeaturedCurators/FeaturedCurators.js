import React, { useState, useMemo } from "react";
import {
  Typography,
  Box,
  Button,
  IconButton,
  Grid,
  Modal,
  TextField,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import {
  Add as AddIcon,
  Create as EditIcon,
  Image as ImageIcon,
} from "@material-ui/icons";

import CuratorCard from "./CuratorCard";

const curators = [
  "Curator Apple",
  "Curator Banana",
  "Curator Apricots",
  "Curator Avocados",
  "Curator Elderberry",
];

export default function FeaturedCurators(props) {
  const {} = props;
  const [open, setOpen] = useState(false);
  const [keyword, setKeyword] = useState("");
  const searchedList = useMemo(
    () => curators.filter((title) => title.search(keyword) >= 0),
    [keyword]
  );

  return (
    <div>
      <Box display="flex">
        <Box display="flex">
          <Typography variant="h4">Curators</Typography>
          <Box marginLeft={3}>
            <IconButton>
              <EditIcon />
            </IconButton>
          </Box>
        </Box>
        <Box marginLeft="auto">
          <Button
            color="primary"
            variant="contained"
            onClick={() => setOpen(true)}
          >
            <AddIcon />
            Add a curator
          </Button>
        </Box>
      </Box>
      <Grid container spacing={1}>
        <Grid item lg={3} md={4}>
          <CuratorCard curator={{ title: "Curator 1" }} />
        </Grid>
        <Grid item lg={3} md={4}>
          <CuratorCard curator={{ title: "Curator 1" }} />
        </Grid>
        <Grid item lg={3} md={4}>
          <CuratorCard curator={{ title: "Curator 1" }} />
        </Grid>
        <Grid item lg={3} md={4}>
          <CuratorCard curator={{ title: "Curator 1" }} />
        </Grid>
      </Grid>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <Typography variant="h5">Add a curator</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </DialogContentText>
          <TextField
            id="standard-basic"
            label="Standard"
            fullWidth
            onChange={(e) => setKeyword(e.target.value)}
          />
          <List>
            {searchedList.map((item) => (
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => setOpen(false)}
            color="primary"
            variant="contained"
            autoFocus
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
