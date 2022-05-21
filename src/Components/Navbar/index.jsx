import React from "react";
import { Box, Grid, makeStyles } from "@material-ui/core";
import log from "../../Assets/Images/log.PNG";
import SearchIcon from "@material-ui/icons/Search";
import HamBurger from "../Hamberger";
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// import { Badge } from '@material-ui/core';
// import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const Navbar = () => {
  const classes = useStyles();
  // const {cartData:{selection}} = useSelector((state)=>state);

  return (
    <>
      <Grid
        container
        className={classes.container}
        display="flex"
        justifyContent="space-evenly"
      >
        <Grid item lg={4} md={2} sm={2} className={classes.grid1}>
          <Link to="/">
            <img src={log} alt=" " className={classes.log} />
          </Link>
          <Box className={classes.searchContain}>
            <input
              type="text"
              placeholder="SEARCH HERE"
              className={classes.search}
            />
            <SearchIcon />
          </Box>
        </Grid>
        <Grid
          item
          container
          lg={3}
          md={5}
          sm={5}
          className={classes.grid2}
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Link to="/About" className={classes.dropdown}>
            MARKET{" "}
          </Link>
          <Link to="/About" className={classes.dropdown}>
            ARTIST{" "}
          </Link>
          <Link to="/About" className={classes.anchors}>
            ABOUT US
          </Link>
          <Link to="/" className={classes.anchors}>
            BLOG
          </Link>
          <Link to="/" className={classes.anchors}>
            FAQS
          </Link>
        </Grid>
        <Grid
          item
          container
          lg={1}
          md={3}
          sm={3}
          className={classes.grid3}
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Link to="/" className={classes.anchors}>
            Registration/Login
          </Link>
        </Grid>
        <Grid
          item
          container
          lg={3}
          md={1}
          sm={1}
          className={classes.grid4}
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Link to="/cart">
            <button className={classes.btn1}>CREATE</button>
          </Link>
          <Link to="/cart">
            <button className={classes.btn2}>CONNECT WALLET</button>
          </Link>
        </Grid>
        <Grid item className={classes.drawer}>
          <HamBurger />
        </Grid>
      </Grid>
    </>
  );
};
const useStyles = makeStyles((theme) => ({
  container: {
    margin: "20px 0px",
    [theme.breakpoints.down("md")]: {
      justifyContent: "space-around",
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-between",
    },
  },
  searchContain: {
    display: "flex",
    alignItems: "center",
    border: "1px solid gray",
    borderRadius: 10,
    height: 30,
  },
  search: {
    border: "none",
    margin: 2,
  },
  grid1: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  log: {
    width: 120,
    [theme.breakpoints.down("sm")]: {
      width: 100,
    },
  },
  grid2: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  grid3: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  grid4: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },

  drawer: {
    paddingRight: "20px",
    [theme.breakpoints.down("sm")]: {
      order: 2,
    },
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },

  image: {
    width: "100px",
  },
  anchors: {
    fontWeight: 600,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  dropdown: {
    fontWeight: 600,
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  btn1: {
    color: "white",
    backgroundColor: "#B3A16C",
    borderRadius: 5,
    padding: "7px 22px",
    border: "none",
    height: 40,
    fontWeight: 700,
  },
  btn2: {
    color: "white",
    backgroundColor: "#0A1A72",
    borderRadius: 5,
    padding: "7px 22px",
    border: "none",
    height: 40,
    fontWeight: 700,
  },
}));
export default Navbar;
