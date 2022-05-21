import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

const DrawerComponent = ({ openDrawer, handleDrawerClose }) => {
  return (
    <>
      <Drawer anchor="right" open={openDrawer}>
        <List>
          <ChevronLeftIcon onClick={handleDrawerClose} />
          <ListItem divider button>
            <ListItemText>MARKET</ListItemText>
          </ListItem>
          <ListItem divider button>
            <ListItemText>ARTIST</ListItemText>
          </ListItem>
          <ListItem divider button>
            <ListItemText>ABOUT US</ListItemText>
          </ListItem>
          <ListItem divider button>
            <ListItemText>BLOG</ListItemText>
          </ListItem>
          <ListItem divider button>
            <ListItemText>FAQS</ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};
export default DrawerComponent;