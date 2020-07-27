import React, { useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import Navigation from './components/header/Navigation';
import SubNavigation from './components/header/SubNavigation';
import LeftBar from './components/left-bar/LeftBar';
import RightBar from './components/right-bar/RightBar';
import Chat from './components/main/Chat';
import { asyncGetTrades } from './store/middlewares';
import { useDispatch, useSelector } from 'react-redux';
import { allTrades } from './store/selectors';

const headerStyles = {
  boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
  width: '100%',
  zIndex: 10,
};

const App: React.FC = () => {
  const dispatch = useDispatch();
  const tradesList = useSelector(allTrades);

  useEffect(() => {
    dispatch(asyncGetTrades());
  }, [dispatch]);

  return (
    <Grid container direction="column">
      <Grid item style={headerStyles}>
        <Navigation/>
        <SubNavigation/>
      </Grid>

      {tradesList.length > 0 ? (
        <Grid item container>
          <Grid item sm={4} md={3}>
            <LeftBar/>
          </Grid>
          <Grid item xs={12} sm={8} md={6}>
            <Chat/>
          </Grid>
          <Grid item xs={12} sm={8} md={3}>
            <RightBar/>
          </Grid>
        </Grid>
      ) : (
        <Grid item style={{ textAlign: 'center' }}>
          <Typography variant="h6" color="initial">
            No trades
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default App;
