import React from 'react';
import avatar from '../../assets/avataaars.png';
import { makeStyles, Typography, Avatar } from '@material-ui/core';
import { Message as IMessage } from '../../store/types/tradesTypes';
import styles from './styles';

const useStyles = makeStyles(styles);

const Message: React.FC<IMessage> = ({ text, income, time }) => {
  const classes = useStyles();

  return (
    <div className={`${classes.messageContainer} ${income && classes.income}`}>
      <div>
        <div className={classes.message}>
          <Typography>{text}</Typography>
        </div>
        <span className={classes.timeStamp}>{time}</span>
      </div>
      <Avatar alt="Remy Sharp" src={avatar} className={classes.avatar}/>
    </div>
  );
};

export default Message;
