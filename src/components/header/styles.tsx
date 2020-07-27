import { Theme, createStyles } from '@material-ui/core';

const styles = ({ spacing, breakpoints }: Theme) =>
  createStyles({
    bar: {
      backgroundColor: '#30364e',
    },
    logoWrapper: {
      marginRight: 'auto',
    },
    logo: {
      width: '120px',
      height: 'auto',
    },
    menuButton: {
      marginRight: spacing(2),
      textTransform: 'capitalize',
    },
    title: {
      flexGrow: 1,
      textTransform: 'uppercase',
      fontWeight: 'bold',
      letterSpacing: 4,
    },
    active: {
      textDecoration: 'underline',
      fontWeight: 'bold',
    },
    mobileDrawer: {
      width: '45%',
      padding: '20px',
    },
    accountSwitcher: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 20,
    },
    navLink: {
      [breakpoints.down('sm')]: {
        marginBottom: '10px',
      },
      [breakpoints.up('md')]: {
        color: '#fff',
        '&:not(:last-of-type)': {
          marginRight: '10px',
        },
      },
    },
    subNavWrapper: {
      alignItems: 'inherit',
      overflowX: 'auto',
    },
    subNav: {
      display: 'flex',
      flexWrap: 'nowrap',
      alignItems: 'stretch',
    },
    subNavLink: {
      display: 'flex',
      alignItems: 'center',
      whiteSpace: 'nowrap',
      color: '#686c72',
      padding: '0 20px',
      borderLeft: '1px solid #e6eaeb',

      '&:last-of-type': {
        borderRight: '1px solid #e6eaeb',
      },
    },
    subNavLinkActive: {
      backgroundColor: '#f4f8fb',
      fontWeight: 'bold',
    },
  });

export default styles;
