import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";
import logo from "../../../img/logo.png";

const Header = () => {
  return (
    <header className={`${classes.container} mb-5`}>
      <Container fluid>
        <div className={classes.divCenter}>
          <Link to="/">
            <img title="Go to home" alt="Go to home" src={logo} />
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
