import React, { Fragment, useState } from 'react';
import TraidingCard from './TraidingCard';
import { makeStyles, Drawer, Hidden, IconButton } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { allTrades, selectedTrade } from '../../store/selectors';
import { Chat } from '@material-ui/icons';
import { Trade } from '../../store/types/tradesTypes';
import styles from './styles';

const useStyles = makeStyles(styles);

const LeftBar: React.FC = () => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const trades = useSelector(allTrades);
  const currentTradeId = useSelector(selectedTrade);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const barInner = (
    <div className={classes.root}>
      {trades.map((trade: Trade) => (
        <TraidingCard
          key={trade.id}
          selected={currentTradeId}
          tradeInfo={trade}
        />
      ))}
    </div>
  );

  return (
    <Fragment>
      <Hidden smUp implementation="css">
        <IconButton
          color="primary"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.burger}
        >
          <Chat/>
        </IconButton>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.mobileDrawer,
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {barInner}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        {barInner}
      </Hidden>
    </Fragment>
  );
};

export default LeftBar;
