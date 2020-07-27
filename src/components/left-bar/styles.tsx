import { createStyles, Theme } from '@material-ui/core';

const styles = ({ palette }: Theme) =>
  createStyles({
    root: {
      height: '91vh',
      position: 'relative',
      // overflowX: 'auto',
    },
    drawerPaper: {
      position: 'relative',
    },
    mobileDrawer: {
      width: '80%',
    },
    burger: {
      position: 'absolute',
      left: 12,
    },

    cardContainer: {
      cursor: 'pointer',

      '&:hover': {
        background: '#f6f7fb',
      },
    },
    content: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingBottom: 0,
    },
    dot: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(3)',
      color: palette.text.disabled,
    },
    dotGreen: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(3)',
      color: palette.success.main,
    },
    title: {
      fontSize: 16,
      marginLeft: 3,
    },
    pos: {
      marginBottom: 12,
    },
    success: {
      color: palette.success.main,
    },
    bold: {
      fontWeight: 'bold',
    },
    selected: {
      backgroundColor: '#f6f7fb',
      border: '2px solid',
      borderColor: '#dedfe4',
      // transform: 'translateX(10px)',
      width: 'calc(100% + 10px)',

      '&:hover': {
        backgroundColor: '#f6f7fb',
      },
    },
    status: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      maxWidth: 42,
      color: palette.text.secondary,
    },
    statusText: {
      fontSize: '14px',
      fontWeight: 'bold',
      whiteSpace: 'nowrap',
    },
    avatar: {
      marginBottom: '10px',
    },
  });

export default styles;
