import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';
import {
  AppBar,
  Drawer,
  Hidden,
  IconButton,
  makeStyles,
  Switch,
  Toolbar,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useDispatch } from 'react-redux';
import { switchUser } from '../../store/actions/tradesActions';
import { useHistory } from 'react-router-dom';
import { NavItems } from './NavItems';
import styles from './styles';

const logo = require('../../assets/svg/logo.svg') as string;
const useStyles = makeStyles(styles);

const Navigation: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isSeller, setIsSeller] = useState(true);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const history = useHistory();

  const accountSwitcher = (
    <Typography component="div" className={classes.accountSwitcher}>
      <div>Buyer</div>
      <Switch
        color='primary'
        checked={isSeller}
        onChange={() => {
          setIsSeller(!isSeller);
          dispatch(switchUser(!isSeller));
          history.push('/trades');
        }}
        name="accountStatus"
      />
      <div>Seller</div>
    </Typography>
  );

  return (
    <AppBar position="static" className={classes.bar}>
      <Toolbar>
        <div className={classes.logoWrapper}>
          <ReactSVG
            src={logo}
            beforeInjection={svg => svg.classList.add(classes.logo)}
          />
        </div>
        {accountSwitcher}
        <Hidden smDown implementation="css">
          <NavItems/>
        </Hidden>
        <Hidden mdUp implementation="css">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon/>
          </IconButton>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.mobileDrawer,
            }}
            anchor="right"
            ModalProps={{
              keepMounted: true,
            }}
          >
            <NavItems/>
          </Drawer>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
