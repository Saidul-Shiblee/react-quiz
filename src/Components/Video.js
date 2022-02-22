import image from "../assets/3.jpg";
import classes from "../Styles/Video.module.css";

const Video = () => {
  return (
    <a href="quiz.html">
      <div className={classes.video}>
        <img src={image} alt="" />
        <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        <div className={classes.qmeta}>
          <p>10 Questions</p>
          <p>Score : 10 / 10</p>
        </div>
      </div>
    </a>
  );
};

export default Video;
