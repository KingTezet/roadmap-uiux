import React from "react";
import { Fragment } from "react";
import logo from "../logo";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        

        <div className={classes["header__logo"]}>{logo}</div>
        
          
        </div>

      </header>
    </Fragment>
  );
};

export default Header;
