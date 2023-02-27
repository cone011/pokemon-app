import classes from "./Pagination.module.css";
const Pagination = (props) => {
  const { gotoPrevPage, gotoNextPage } = props;
  return (
    <div className={classes.Pagination}>
      {gotoPrevPage && <button onClick={gotoPrevPage}>Previous</button>}
      {gotoNextPage && <button onClick={gotoNextPage}>Next</button>}
    </div>
  );
};

export default Pagination;
