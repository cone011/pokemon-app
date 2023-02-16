import classes from "./PokeStats.module.css";
import CustomContainer from "../UI/CustomContainer/CustomContainer";

const PokeStats = (props) => {
  const { stats } = props;
  return (
    <CustomContainer classStyle={`${classes.containerBar} mt-0`}>
      <h4 className={`w-100 mb-4 ${classes.sectionTitle}`}>Stats</h4>
      {stats.map((item, key) => (
        <div key={key} className={classes.barItem}>
          <div className={classes.bar}>
            <div
              style={{ height: item.base_stat }}
              className={classes.barActive}
            />
            <div className={classes.containerLabel}>
              <p className={classes.value}>{item.base_stat}</p>
            </div>
          </div>
          <p
            className="mb-0 mt-2 text-center label limit-text"
            style={{ color: "white" }}
          >
            {item.stat.name}
          </p>
        </div>
      ))}
    </CustomContainer>
  );
};

export default PokeStats;
