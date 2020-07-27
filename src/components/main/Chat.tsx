import React, { Fragment, useEffect, useState } from 'react';
import {
  makeStyles,
  Typography,
  Divider,
  InputAdornment,
  Button,
  OutlinedInput,
} from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Message from './Message';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsSeller, selectCurrentTrade } from '../../store/selectors';
import { useParams, useHistory } from 'react-router-dom';
import {
  selectTrade,
  sendMessage,
  deleteTrade,
} from '../../store/actions/tradesActions';
import styles from './styles';

const useStyles = makeStyles(styles);

const Chat: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { trade } = useParams();
  const isSeller = useSelector(selectIsSeller);
  const [message, setMessage] = useState<string>('');
  const history = useHistory();
  const currentTrade = useSelector(selectCurrentTrade);

  useEffect(() => {
    if (trade) {
      dispatch(selectTrade(parseInt(trade)));
    }
  }, [trade, dispatch]);

  const changeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const onMessageSend = () => {
    if (message.length > 0) {
      const timeStamp = new Date();
      dispatch(
        sendMessage({
          id: `${Math.random() * (99999 - 999)}${timeStamp.getHours()} : ${timeStamp.getMinutes()}`,
          income: !isSeller,
          text: message,
          time: `${timeStamp.getHours()} : ${timeStamp.getMinutes()}`,
        }),
      );
      setMessage('');
    }
  };

  return (
    <div className={classes.chatContainer}>
      {currentTrade ? (
        <Fragment>
          <div className={classes.heading}>
            <div className={classes.circleIcon}>
              <DeleteOutlineIcon
                onClick={() => {
                  dispatch(deleteTrade(currentTrade.id));
                  history.push('/trades');
                }}
              />
            </div>
            <div>
              <Typography variant="h4">
                {currentTrade.paymentMethod}
              </Typography>
              <Typography
                color="textSecondary"
                variant="h5"
                gutterBottom
              >
                {currentTrade.buyerName}
                <span className={classes.success}> +37 </span>/
                <span className={classes.error}> -1 </span>
              </Typography>
            </div>
            <Divider className={classes.divider} variant="middle"/>
          </div>
          <div className={classes.chat}>
            {currentTrade.chat.messages.map((message) => (
              <Message
                id={message.id}
                key={message.id}
                text={message.text}
                income={message.income}
                time={message.time}
              />
            ))}
          </div>
          <OutlinedInput
            id="outlined-basic"
            placeholder="Type your message..."
            className={classes.messageInput}
            onChange={changeMessage}
            value={message}
            endAdornment={
              <InputAdornment position="end">
                <Button
                  className={classes.sendButton}
                  onClick={onMessageSend}
                >
                  Send
                </Button>
              </InputAdornment>
            }
          />
        </Fragment>
      ) : (
        <Typography variant="h6" color="initial">
          Select a trade
        </Typography>
      )}
    </div>
  );
};

export default Chat;
