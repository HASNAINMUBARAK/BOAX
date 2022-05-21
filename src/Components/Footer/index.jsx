import React from "react";
import { makeStyles } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TelegramIcon from "@material-ui/icons/Telegram";
import log from "../../Assets/Images/log.PNG";
import ForwardIcon from "@material-ui/icons/Forward";
import CopyrightIcon from "@material-ui/icons/Copyright";

const Footer = () => {
  const classes = useStyles();
  return (
    <div>
      <hr
        style={{
          margin: "40px 0px",
          border: "none",
          height: "2px",
          padding: "0.8px 0px",
          background: "linear-gradient(45deg, transparent 10%, #002c40)",
        }}
      />
      <div className={classes.foottt}>
        <div className={classes.foot}>
          <div className={classes.one}>
            <img src={log} alt=" " style={{ width: "250px" }} />
            <h5 style={{ display: "flex", alignItems: "center" }}>
              <CopyrightIcon />
              Copy Rights
            </h5>
          </div>
          <div className={classes.two}>
            <h5>Help Center</h5>
            <h5>Terms and Conditions</h5>
          </div>
          <div className={classes.three}>
            <h5>Contact Us</h5>
            <h5>Support</h5>
          </div>
          <div className={classes.foott}>
            <div style={{ margin: "20px 0px" }}>
              <TwitterIcon style={{ padding: "0px 10px" }} />
              <InstagramIcon style={{ padding: "0px 10px" }} />
              <FacebookIcon style={{ padding: "0px 10px" }} />
              <TelegramIcon style={{ padding: "0px 10px" }} />
            </div>
          </div>
          <div className={classes.four}>
            <div className={classes.signin}>
              <input></input>
              <button>
                <ForwardIcon />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  foottt: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  foot: {
    display: "flex",
    justifyContent: "space-between",
    margin: "40px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      margin: "0px",
    },
  },
  one: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "15px",
    },
  },
  signin: {
    display: "flex",
  },
  two: {
    "& ul": {
      listStyle: "none",
    },
    "& a": {
      color: "white",
      opacity: "0.7",
      textDecoration: "none",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "15px",
    },
  },
  three: {
    "& ul": {
      listStyle: "none",
    },
    "& a": {
      color: "white",
      opacity: "0.7",
      textDecoration: "none",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "15px",
    },
  },
  four: {
    "& ul": {
      listStyle: "none",
    },
    "& a": {
      color: "white",
      opacity: "0.7",
      textDecoration: "none",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "15px",
    },
  },
  foott: {
    marginLeft: "40px",
    [theme.breakpoints.down("sm")]: {
      display: "center",
      alignItems: "center",
      margin: 0,
    },
  },
}));
export default Footer;
