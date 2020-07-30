import React, { Fragment, useEffect } from 'react';
import {
  Typography,
  Button,
  makeStyles,
  Avatar,
  CircularProgress,
} from '@material-ui/core';
import avatar from '../../assets/avataaars.png';
import { useDispatch, useSelector } from 'react-redux';
import { asyncGetTradeInfo } from '../../store/middlewares';
import { selectTradeInfo } from '../../store/selectors';
import styles from './styles';

const useStyles = makeStyles(styles);
const USD_AMOUNT = 25;

const RightBar: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const tradingInfo = useSelector(selectTradeInfo);

  useEffect(() => {
    setInterval(() => {
      dispatch(asyncGetTradeInfo());
    }, 3000);
  }, [dispatch]);

  const barInner = (
    <div className={classes.root}>
      <Typography variant="h5">
        You are trading with <b>Chanaar</b>
      </Typography>
      <Typography color="textSecondary">
        Started 23 minutes ago
      </Typography>
      <Button variant="contained" className={classes.releaseButton}>
        Release bitcoins
      </Button>
      <div className={classes.table}>
        <div className={classes.row}>
          <div className={classes.col}>
            <Avatar alt="Remy Sharp" src={avatar}/>
            <div>
              <span className={classes.success}> +37 </span>/
              <span className={classes.error}> -1 </span>
            </div>
          </div>
          <div className={classes.col}>
            <Typography color="textPrimary">
              <strong># OF TRADES</strong>
            </Typography>
            <Typography>
              <strong>4</strong>
            </Typography>
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.col}>
            <Typography color="textPrimary">
              <strong>TRADE STATUS</strong>
            </Typography>
            <Typography className={classes.success}>
              PAID
            </Typography>
          </div>
          <div className={classes.col}>
            <Typography color="textPrimary">
              <strong>TRADE HASH</strong>
            </Typography>
            <Typography>44aFDr3g</Typography>
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.col}>
            <Typography color="textPrimary">
              <strong>AMOUNT USD</strong>
            </Typography>
            <Typography>{USD_AMOUNT}</Typography>
          </div>
          <div className={classes.col}>
            <Typography color="textPrimary">
              <strong>AMOUNT BTC</strong>
            </Typography>

            {tradingInfo.isFetching
              ? (<CircularProgress size={15}/>)
              : tradingInfo.bpi
                ? <Typography>
                  {(USD_AMOUNT / tradingInfo.bpi?.USD.rate_float).toFixed(6)}
                </Typography>
                : null}

          </div>
        </div>
      </div>
    </div>
  );
  return (
    <Fragment>
      {barInner}
    </Fragment>
  );
};

export default RightBar;
