import React, { useEffect } from 'react';
import {
  makeStyles,
  Card,
  CardContent,
  Typography,
  Avatar,
} from '@material-ui/core';
import avatar from '../../assets/avataaars.png';
import { Trade } from '../../store/types/tradesTypes';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsSeller, selectTradeInfo } from '../../store/selectors';
import { markAsRead } from '../../store/actions/tradesActions';
import styles from './styles';
import { asyncGetTradeInfo } from '../../store/middlewares';

const useStyles = makeStyles(styles);
const REFRESH_CURRENCY_TIMEOUT = 10000;

interface TraidingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  selected: number | null;
  tradeInfo: Trade;
}

const TraidingCard: React.FC<TraidingCardProps> = ({ selected, tradeInfo }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const isSeller = useSelector(selectIsSeller);
  const currentPrice = useSelector(selectTradeInfo);

  useEffect(() => {
    dispatch(asyncGetTradeInfo());

    setInterval(() => {
      dispatch(asyncGetTradeInfo());
    }, REFRESH_CURRENCY_TIMEOUT);
  }, []);

  const currencyTemplate = (rateFloat: number) => {
    return `${tradeInfo.amount} USD (${(tradeInfo.amount / rateFloat).toFixed(6)} BTC)`;
  };

  return (
    <Card
      className={`${classes.cardContainer} ${
        selected === tradeInfo.id && classes.selected
      }`}
      variant="outlined"
      onClick={() => {
        history.push(`/trades/${tradeInfo.id}`);
        dispatch(markAsRead(tradeInfo.id));
      }}
    >
      <CardContent className={classes.content}>
        <div>
          {(isSeller && tradeInfo.chat.gotUnreads.seller) ||
          (!isSeller && tradeInfo.chat.gotUnreads.buyer) ? (
            <span className={classes.dotGreen}>•</span>
          ) : (
            <span className={classes.dot}>•</span>
          )}
        </div>
        <div>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {tradeInfo.buyerName}
            <span className={classes.bold}> is buying</span>
          </Typography>
          <Typography variant="h6" component="h3">
            {tradeInfo.paymentMethod}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {currentPrice.bpi
              ? currencyTemplate(currentPrice.bpi.USD.rate_float)
              : `${tradeInfo.amount} USD`}
          </Typography>
        </div>
        <div className={classes.status}>
          <Avatar src={avatar} className={classes.avatar}/>
          {tradeInfo.isPaid ? (
            <span className={`${classes.success} ${classes.statusText}`}>PAID</span>
          ) : (
            <span className={classes.statusText}>NOT PAID</span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TraidingCard;
