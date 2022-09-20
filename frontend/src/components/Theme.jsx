import { createTheme } from '@mui/material/styles';

const Blue = '#0B72B9';
const Orange = '#FFBA60';

export default createTheme({
  palette: {
    common: {
      blue: `${Blue}`,
      orange: `${Orange}`
    },
    primary: {
      main: `${Blue}`
    }
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      textTransform: 'none',
      fontWeight: 700,
      fontSize: '1rem'
    },
    logo: {
      fontSize: '1rem',
      textTransform: 'none',
      color: 'white'
    }
  }
});
