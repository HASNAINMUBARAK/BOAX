import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
const Detail = () => {
  const Products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const classes = useStyles();
  return (
    <div>
      <div className="cartWrapper">
        {Products.map((product) => {
          return (
            <box className={classes.b}>
              <Link to="/">
                <button className={classes.btn}>
                  <ArrowBackIcon />
                  back
                </button>
              </Link>
              <box className={classes.cardContain}>
                <box className={classes.left}>
                  <img className={classes.cardimg} src={product.flag} alt="" />
                </box>
                <box className={classes.right}>
                  <box>
                    <h2 className={classes.upper}>{product.name}</h2>
                  </box>
                  <box className={classes.lower}>
                    <p>Capital: {product.capital}</p>
                    <p>Region: {product.region}</p>
                    <p>Population: {product.population}</p>
                    <p>Area: {product.area} sq</p>
                  </box>
                </box>
              </box>
            </box>
          );
        })}
      </div>
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  back: {
    display: "flex",
    justifyContent: "flex-start",
    width: 80,
    height: 50,
  },
  btn: {
    display: "flex",
    alignItems: "center",
  },
  cardContain: {
    margin: "40px 0px",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  right: {
    display: "flex",
    flexDirection: "column",
  },
  cardimg: {
    width: "550px",
    height: "350px",
  },
  remove: {
    width: 150,
    height: 40,
  },
}));
export default Detail;
