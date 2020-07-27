import { Theme, createStyles } from '@material-ui/core';

const styles = ({ palette, breakpoints }: Theme) =>
  createStyles({
    root: {
      textAlign: 'center',
      padding: '30px 10px 0px 10px',
    },
    releaseButton: {
      marginTop: 20,
      backgroundColor: '#5fd58c',
      color: palette.background.paper,
      textTransform: 'capitalize',
      fontWeight: 'normal',
      borderRadius: '20px',
    },
    borderBottom: {
      borderBottom: 'solid 1px',
      borderColor: palette.divider,
    },
    success: {
      color: palette.success.main,
      fontWeight: 'bold',
    },
    error: {
      color: palette.error.main,
      fontWeight: 'bold',
    },
    table: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: 20,
    },
    row: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderBottom: '1px solid #f4f6f5',
      color: palette.text.secondary,
    },
    col: {
      '&:nth-child(2n)': {
        borderLeft: '1px solid #f4f6f5',
      },
      width: '50%',
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      minHeight: 70,
    },
    mobileDrawer: {
      width: '80%',
    },
    burger: {
      position: 'absolute',
      right: 0,
      top: 64,
      [breakpoints.down('sm')]: {
        top: 54,
      },
    },
  });

export default styles;
