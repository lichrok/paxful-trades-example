import React from 'react';
import { Link, makeStyles, Box, Toolbar } from '@material-ui/core';
import styles from './styles';

const useStyles = makeStyles(styles);

const SubNavigation: React.FC = () => {
  const classes = useStyles();
  return (
    <Toolbar className={classes.subNavWrapper}>
      <nav className={classes.subNav}>
        <Link href="#" className={classes.subNavLink}>Overview</Link>
        <Link href="#" className={`${classes.subNavLink} ${classes.subNavLinkActive}`}>Trades</Link>
        <Link href="#" className={classes.subNavLink}>Disputes</Link>
        <Link href="#" className={classes.subNavLink}>Your offers</Link>
        <Link href="#" className={classes.subNavLink}>My Team</Link>
        <Link href="#" className={classes.subNavLink}>Trade History</Link>
      </nav>
    </Toolbar>
  );
};

export default SubNavigation;
