import HomeScreen from './screens/HomeScreen/HomeScreen';
import BookingScreen from './screens/BookingScreen/BookingScreen';

import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const theme = createTheme();

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <CssBaseline />
          <Header />
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/booking" element={<BookingScreen />} />
          </Routes>
        </LocalizationProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
