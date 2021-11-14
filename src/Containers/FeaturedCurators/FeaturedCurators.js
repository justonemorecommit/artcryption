import React, { useState, useMemo } from "react";
import {
  Typography,
  Box,
  Button,
  IconButton,
  Grid,
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
import Image from "material-ui-image";
import {
  Add as AddIcon,
  Create as EditIcon,
  Image as ImageIcon,
  ShoppingCart as PurchaseIcon,
} from "@material-ui/icons";

import AppLink from "../../Components/AppLink";

import CuratorCard from "./CuratorCard";

import { CardLink } from "./FeaturedCard.styles";

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
  const [purchaseOpen, setPurchaseOpen] = useState(false);
  const [keyword, setKeyword] = useState("");
  const searchedList = useMemo(
    () =>
      curators.filter(
        (title) => title.toLowerCase().search(keyword.toLowerCase()) >= 0
      ),
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
        <Box marginLeft="auto" display="flex" alignItems="center">
          <Button
            color="primary"
            variant="contained"
            onClick={() => setOpen(true)}
          >
            <AddIcon />
            Add a curator
          </Button>
          <Box marginRight={1}></Box>
          <Button
            color="primary"
            variant="contained"
            onClick={() => setPurchaseOpen(true)}
          >
            <PurchaseIcon />
            Purchase
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
      <Dialog
        open={purchaseOpen}
        onClose={() => setPurchaseOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="lg"
      >
        <DialogTitle id="alert-dialog-title">
          <Box display="flex" alignItems="center" borderBottom="1px solid #eee">
            <Typography variant="h5">Purchase</Typography>
            <Box marginLeft="auto">
              <List>
                <ListItem>
                  <ListItemText
                    primary="2.00ETH"
                    secondary="Nov 2, 2021"
                  ></ListItemText>
                </ListItem>
              </List>
            </Box>
          </Box>
        </DialogTitle>
        <DialogContent>
          <Grid container>
            <Grid item md={3}>
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <ImageIcon />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Vandana Taxali"
                    secondary="Transferor"
                  ></ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <ImageIcon />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Rachel Nguen"
                    secondary="Transferee"
                  ></ListItemText>
                </ListItem>
              </List>
            </Grid>
            <Grid item md={9}>
              <Box width="600px" padding={2}>
                <Button variant="contained" color="secondary">
                  Purchase
                </Button>
                <Box marginTop={2}>
                  <img
                    src="/images/paella.jpg"
                    title="Demo Image"
                    height="300px"
                    imageStyle={{ width: "300px", height: "auto" }}
                  />
                  <Typography>Title</Typography>
                  <Typography>Type of the assets</Typography>
                  <CardLink to="/meta-data">Click to see metadata</CardLink>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={() => setOpen(false)} variant="contained" autoFocus>
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
