import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className="d-flex justify-content-center align-items-center">
        <p className={classes.creditText}>prueba mostrar</p>
        <a className={classes.mhq} target="_blank" href="#">
          Matheus Henrique
        </a>
      </div>
      <a
        className={classes.viewCode}
        target="_blank"
        href="https://github.com/matheusmhq/pokedex-react-js"
      >
        View code on Github
        <FontAwesomeIcon className="ml-2" icon={faGithub} />
      </a>
    </footer>
  );
};

export default Footer;
