import { createStyles, Theme } from '@material-ui/core';

const styles = ({ palette, breakpoints }: Theme) =>
  createStyles({
    chatContainer: {
      paddingTop: 20,
      backgroundColor: '#f6f7fb',
      [breakpoints.up('md')]: {
        padding: 20,
      },
      [breakpoints.down('sm')]: {
        paddingTop: 40,
      },
    },
    heading: {
      textAlign: 'center',
    },
    circleIcon: {
      backgroundColor: '#b1bec6',
      color: '#ffffff',
      borderRadius: '50%',
      padding: '8px',
      float: 'left',
      marginLeft: 20,
      cursor: 'pointer',
      width: '30px',
      height: '30px',
    },
    success: {
      color: palette.success.main,
      fontWeight: 'bold',
    },
    error: {
      color: palette.error.main,
      fontWeight: 'bold',
    },
    divider: {
      marginTop: 20,
    },
    chat: {
      marginTop: 5,
      maxHeight: '57vh',
      minHeight: '57vh',
      overflowX: 'auto',
      [breakpoints.up('md')]: {
        maxHeight: '52vh',
        minHeight: '52vh',
      },
    },
    messageInput: {
      width: '100%',
      marginTop: 22,
      backgroundColor: palette.info.contrastText,
    },
    sendButton: {
      color: palette.success.main,
    },
    messageContainer: {
      display: 'flex',
      width: '80%',
      float: 'right',
      padding: 15,
      justifyContent: 'flex-end',
    },
    income: {
      float: 'left',
      flexDirection: 'row-reverse',

      '& span': {
        float: 'left',
      },
    },
    avatar: {
      margin: 10,
    },
    message: {
      border: '1px solid',
      borderColor: palette.divider,
      borderRadius: '4px',
      padding: 15,
      marginBottom: '10px',
      backgroundColor: '#fff',
    },
    timeStamp: {
      color: palette.text.secondary,
      fontSize: 12,
      float: 'right',
      marginTop: 3,
    },
  });

export default styles;
