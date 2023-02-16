import classes from "./LoadingForm.module.css";

const LoadingForm = () => {
  return (
    <div className={classes.centered}>
      <div>
        <h1 className={classes.textCenter}>
          LOADING............. Obtain the first 500 pokemons
        </h1>
        <br />
        <div className={classes.spinner} />
      </div>
    </div>
  );
};

export default LoadingForm;
