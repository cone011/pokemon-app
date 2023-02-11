import classes from "./LoadingForm.module.css";

const LoadingForm = () => {
  return (
    <div className={classes.centered}>
      <div>
        <h1 className={classes.textCenter}>LOADING.............</h1>
        <br />
        <div className={classes.spinner} />
      </div>
    </div>
  );
};

export default LoadingForm;
