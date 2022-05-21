import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPost } from "../../Features/Artwork/postSlicer";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import rec from "../../Assets/Images/Rectangle15.png";
import elli from "../../Assets/Images/Ellipse4.png";

export default function ApiMap() {
  const classes = useStyles();
  const {
    postSlicer: { post, postLoading, postSuccess, postFailed },
  } = useSelector((state) => state);
  console.log(post, postFailed, postSuccess, postLoading, "post");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost());
  }, []);

  return (
    <div>
      <div>
        <h1>Featured Creators</h1>
      </div>
      <div className={classes.mapComponent}>
        {postLoading && "....Loading ..."}
        {postSuccess &&
          post.map((post) => {
            return (
              <div className={classes.card}>
                <Link to="/Detail">
                  <img src={rec} alt="" className={classes.imag} />
                </Link>
                <box className={classes.detail}>
                  <img
                    src={elli}
                    alt=" "
                    style={{
                      paddingRight: "170px",
                      zIndex: 1,
                      marginTop: "-70px",
                    }}
                  />

                  <box className={classes.name}>
                    <h3 className={classes.head13}>Name : {post.username}</h3>
                  </box>
                  <box className={classes.des}>
                    <h5 className={classes.head5}>Email : {post.email}</h5>
                    <h5 className={classes.head5}>
                      Created At: {post.createdAt}
                    </h5>
                    <h5 className={classes.head5}>
                      Wallet address : {post.id}
                    </h5>
                  </box>
                </box>
              </div>
            );
          })}
        {postFailed && <h1>Please Check your internet connection</h1>}
      </div>
    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  mapComponent: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    width: "280px",
    height: "450px",
    margin: 20,
    position: "relative",
    borderColor: "black",
    boxShadow: "0px 0px 15px 2px",
    background: "#B5B5B5",
    borderRadius: "5px",
  },
  name: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
  },
  des: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px 15px",
    opacity: "0.8",
  },
  imag: {
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px",
    width: "280px",
  },
  count: {
    width: "20px",
    background: "#063875",
    border: "none",
    color: "white",
  },
  like: {
    display: "flex",
    alignItems: "center",
  },
  likebtn: {
    background: "#063875",
    border: "none",
  },
  head13: {
    
    color: "white",
  },
  head5: {
    color: "white",
    padding: 0,
    margin: 5,
  },
}));
