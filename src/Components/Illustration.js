import classes from "../Styles/Illustration.module.css";
import image from "./../assets/signup.svg";

const Illustration = () => {
  return (
    <div className={classes.illustration}>
      <img src={image} alt="Signup" />
    </div>
  );
};

export default Illustration;
