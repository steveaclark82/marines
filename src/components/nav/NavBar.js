import React from "react";
import { Paper, Tab, Tabs } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";

import styles from "./Nav.module.scss";

const NavBar = (props) => {
  const selected = useLocation().pathname.toUpperCase();

  return (
    <div className={styles.container}>
      <Paper className={styles.navContainer}>
        <Tabs
          value={selected}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab component={Link} to="/" value="/" label="Home"></Tab>
          <Tab component={Link} to="/About" value="/" label="About"></Tab>
          <Tab component={Link} to="/PFT" value="/PFT" label="PFT"></Tab>
          <Tab component={Link} to="/CFT" value="/CFT" label="CFT"></Tab>
          <Tab component={Link} to="/Graph" value="/Graph" label="Graph"></Tab>
          <Tab component={Link} to="/StopWatch" value="/StopWatch" label="StopWatch"></Tab>
          <Tab component={Link} to="/Bmi" value="/Bmi" label="BMI"></Tab>
          <Tab component={Link} to="/login" value="/" label="Login"></Tab>
          <Tab component={Link} to="/register" value="/" label="Register"></Tab>
        </Tabs>
      </Paper>
    </div>
  );
};

export default NavBar;
