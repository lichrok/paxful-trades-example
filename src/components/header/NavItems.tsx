import React from 'react';
import { Link, makeStyles } from '@material-ui/core';
import styles from './styles';

const links = [
  { name: 'Buy bitcoins' },
  { name: 'Sell bitcoins' },
  { name: 'Wallet' },
  { name: 'Support' },
  { name: 'Your account' },
];
const useStyles = makeStyles(styles);

export const NavItems = () => {
  const classes = useStyles();

  return (
    <>
      {links.map((link, index) => {
          const activeClassname = link.name === 'Sell bitcoins' ? classes.active : null;

          return <Link
            href="#"
            className={`${classes.navLink} ${activeClassname}`}
            key={`navlink-${index}`}
          >
            {link.name}
          </Link>;
        },
      )}
    </>
  );
};