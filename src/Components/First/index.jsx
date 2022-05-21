import "./style.css";
import { Grid } from "@material-ui/core";
// import imag from "../../Assets/Images/imag.png";
// import dr from "../../Assets/Images/dr.jpg";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSingle } from "../../Features/Creator/singleSlicer";
import { makeStyles } from "@material-ui/core";

const First = () => {
  const classes = useStyles();
  const {
    singleSlicer: { single, singleLoading, singleSuccess, singleFailed },
  } = useSelector((state) => state);
  console.log(single, singleFailed, singleSuccess, singleLoading, "single");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingle());
  }, []);

  return (
    <div className={classes.mapComponent}>
      {singleLoading && "....Loading ..."}
      {singleSuccess &&
        single.map((single) => {
          return (
            <Grid
              container
              className={classes.contain}
              style={{ margin: "100px 0px" }}
            >
              <Grid xs={12} md={6} container justifyContent="center">
                <img
                  src={single.creator_img}
                  alt=""
                  style={{ width: "65%", height: "85%", borderRadius: "10px" }}
                />
              </Grid>
              <Grid xs={12} md={6} className={classes.con}>
                <Grid container>
                  <div className="mainuauctionTop">
                    <img
                      className="imageRound"
                      src={single.creator_img}
                      alt=""
                      style={{ borderRadius: "50%" }}
                    />
                    <h3 className="text-mainauction">{single.art_name}</h3>
                  </div>
                </Grid>
                <Grid container>
                  <div className="Blob">
                    <h1>{single.creator_name}</h1>
                  </div>

                  <Grid item xs={12} className="timing-auction">
                    <Grid container item xs={5} spacing={2}>
                      <div>
                        <p className="bid">Current Bid</p>
                        <p className="lbrt">1.18ETH</p>
                        <p className="dollar">26,000$</p>
                      </div>
                      <Grid>
                        <div
                          className="horline"
                          container
                          item
                          xs={2}
                          spacing={1}
                        ></div>
                      </Grid>
                    </Grid>

                    <Grid className="timming" container item xs={5} spacing={2}>
                      <div>
                        <p className="bid">Auction ending in</p>
                        <p className="min">11 40 30</p>
                        <b className="dollar">Hours Min Seconds</b>
                      </div>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    className="blueButton"
                    spacing={1}
                  >
                    <Grid container item xs={6} style={{ marginTop: "20px" }}>
                      <button
                        style={{
                          width: "130px",
                          height: "40px",
                          borderRadius: "10px",
                          backgroundColor: "#0A1A72",
                          color: "white",
                          border:"none",
                        }}
                      >
                        place a bit
                      </button>
                    </Grid>
                    <Grid item container xs={6} style={{ marginTop: "20px" }}>
                      <button
                        className={classes.view}
                        style={{
                          width: "130px",
                          height: "40px",
                          border:"none",
                          borderRadius: "10px",
                          backgroundColor: "#B3A16C",
                          color: "white",
                        }}
                      >
                        view Art
                      </button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      {singleFailed && <h1>Please Check your internet connection</h1>}
    </div>
  );
};
const useStyles = makeStyles((theme) => ({
  contain: {
    [theme.breakpoints.down("md")]: {
      alignItems: "center",
    },
  },
  con: {
    [theme.breakpoints.down("md")]: {
      paddingTop: "50px",
      paddingLeft: "160px",
    },
  },
  view: {
    color: "white",
  },
}));
export default First;
