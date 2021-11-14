import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { List, ListItem } from "@material-ui/core";

import logo from "../Logo/LogoLight.svg";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  NavLink,
} from "./NavBar.styles";

const menus = [
  {
    title: "Settings",
    children: [
      { title: "Notifications" },
      { title: "Service Fees" },
      { title: "Resale Royalitics" },
      { title: "Plans & Pricing" },
    ],
  },
  {
    title: "PageManagement",
    children: [
      { title: "Page Management" },
      { title: "Welcome" },
      { title: "Home" },
      { title: "Profile Page" },
      { title: "Feed" },
      { title: "Featured Users" },
      { title: "Featured Curators", path: "/featured-curators" },
      { title: "Support, Help & FAQs" },
      { title: "Agreements" },
    ],
  },
  {
    title: "Transactions",
    children: [{ title: "Menu1" }, { title: "Menu2" }],
  },

  { title: "IP Case Management" },
  { title: "Analytics" },
  { title: "Chat" },
  { title: "User Reports" },
  { title: "Logs/Errors" },
  { title: "Roadmap" },
];

export default function NavBar({ onClose }) {
  const [expanded, setExpanded] = React.useState({});

  const setListExpanded = (panel, value) => {
    setExpanded({ ...expanded, [panel]: value });
  };

  return (
    <div>
      <Box
        display="flex"
        justifyContent="space-between"
        paddingLeft={1}
        paddingTop={1}
      >
        <img src={logo} />
        <IconButton onClick={onClose}>
          <ChevronLeftIcon />
          <Box position="absolute" style={{ left: "8px", top: "12px" }}>
            <ChevronLeftIcon />
          </Box>
        </IconButton>
      </Box>
      {menus.map((menu, index) => (
        <Accordion
          key={index}
          square
          expanded={!!expanded[index]}
          onChange={() => setListExpanded(index, !expanded[index])}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
            expandIcon={menu.children ? <ExpandMoreIcon /> : null}
          >
            <Typography>{menu.title}</Typography>
          </AccordionSummary>
          {menu.children && (
            <AccordionDetails>
              <List>
                {menu.children.map((item, index) => (
                  <ListItem key={index}>
                    <NavLink to={item.path || "/url"}>{item.title}</NavLink>
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          )}
        </Accordion>
      ))}
    </div>
  );
}
