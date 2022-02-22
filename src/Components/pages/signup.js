import classes from "./../../Styles.Siginup.css";
import Form from "./../Form";
import Illustration from "./../Illustration";
const Signup = () => {
  return (
    <>
      <h1>Create an Account</h1>
      <div className="column"></div>
      <Illustration />
      <Form className={`${classes.signup} form`} />
    </>
  );
};

export default Signup;
