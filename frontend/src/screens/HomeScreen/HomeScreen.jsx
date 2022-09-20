import { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate, createSearchParams } from 'react-router-dom';
import { getOriginCities, getDestinationCitiesByOriginCityId } from '../../service/FlightService';

export default function HomeScreen() {
  const navigate = useNavigate();
  const [originCities, setOriginCities] = useState([]);
  const [destinationCities, setDestinationCities] = useState([]);
  const [formData, setFormData] = useState({
    flightType: 'RT',
    originCityId: '',
    destinationCityId: '',
    departureDate: null,
    returnDate: null,
    adults: '',
    children: ''
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    getOriginCities().then((cities) => setOriginCities(cities));
  }, []);

  useEffect(() => {
    if (formData.originCityId == '' || formData.originCityId == null) {
      setDestinationCities([]);
    } else {
      getDestinationCitiesByOriginCityId(formData.originCityId).then((cities) =>
        setDestinationCities(cities)
      );
    }
  }, [formData.originCityId]);

  useEffect(() => {
    if (formData.flightType === 'OW') {
      setFormData({ ...formData, returnDate: null });
    }
  }, [formData.flightType]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      ...formData,
      departureDate: formData.departureDate ? formData.departureDate.format('DD/MM/YYYY') : null,
      returnDate: formData.returnDate ? formData.returnDate.format('DD/MM/YYYY') : null
    };

    navigate({
      pathname: '/booking',
      search: `?${createSearchParams(data)}`
    });
  };

  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Paper
        component="form"
        onSubmit={handleSubmit}
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        <FormControl margin={'normal'}>
          <FormLabel id="flightTypeRadio">Flight Type</FormLabel>
          <RadioGroup
            row
            aria-labelledby="flightTypeRadio"
            name="flightType"
            value={formData.flightType}
            onChange={handleChange}>
            <FormControlLabel value="OW" control={<Radio />} label="One Trip" />
            <FormControlLabel value="RT" control={<Radio />} label="Round Way" />
          </RadioGroup>
        </FormControl>

        <Stack direction="row" spacing={2} sx={{ marginTop: '15px' }}>
          <FormControl fullWidth>
            <InputLabel id="select-flying-from">Origin</InputLabel>
            <Select
              labelId="select-flying-from"
              id="select-flying-from"
              label="Origin"
              name={'originCityId'}
              value={formData.originCityId}
              onChange={handleChange}>
              {originCities.map((city) => (
                <MenuItem key={city.id} value={city.id}>
                  {city.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="select-flying-to">Destination</InputLabel>
            <Select
              labelId="select-flying-to"
              id="select-flying-to"
              label="Destination"
              name={'destinationCityId'}
              value={formData.destinationCityId}
              onChange={handleChange}>
              {destinationCities.map((city) => (
                <MenuItem key={city.id} value={city.id}>
                  {city.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
        <Stack direction="row" spacing={2} sx={{ marginTop: '15px' }}>
          <FormControl fullWidth>
            <DesktopDatePicker
              label="Departure Date"
              inputFormat="MM/DD/YYYY"
              value={formData.departureDate}
              onChange={(value) => setFormData({ ...formData, departureDate: value })}
              renderInput={(params) => <TextField {...params} />}
            />
          </FormControl>
          <FormControl fullWidth>
            <DesktopDatePicker
              label="Return Date"
              inputFormat="MM/DD/YYYY"
              value={formData.returnDate}
              onChange={(value) => setFormData({ ...formData, returnDate: value })}
              disabled={formData.flightType === 'OW'}
              renderInput={(params) => <TextField {...params} />}
            />
          </FormControl>
        </Stack>

        <Stack direction="row" spacing={2} sx={{ marginTop: '15px' }}>
          <FormControl fullWidth>
            <InputLabel id="select-adults">Adults (18+)</InputLabel>
            <Select
              labelId="select-adults"
              id="select-adults"
              label="Adults (18+)"
              name="adults"
              value={formData.adults}
              onChange={handleChange}>
              <MenuItem value={1}>One</MenuItem>
              <MenuItem value={2}>Two</MenuItem>
              <MenuItem value={3}>Three</MenuItem>
              <MenuItem value={4}>Four</MenuItem>
              <MenuItem value={5}>Five</MenuItem>
              <MenuItem value={6}>Six</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="select-children">Children (0-17)</InputLabel>
            <Select
              labelId="select-children"
              id="select-children"
              label="Children (0-17)"
              name="children"
              value={formData.children}
              onChange={handleChange}>
              <MenuItem value={1}>One</MenuItem>
              <MenuItem value={2}>Two</MenuItem>
              <MenuItem value={3}>Three</MenuItem>
              <MenuItem value={4}>Four</MenuItem>
              <MenuItem value={5}>Five</MenuItem>
              <MenuItem value={6}>Six</MenuItem>
            </Select>
          </FormControl>
        </Stack>
        <Button type="submit" variant="contained" fullWidth sx={{ marginTop: '15px' }}>
          Find Flight
        </Button>
      </Paper>
    </Container>
  );
}
