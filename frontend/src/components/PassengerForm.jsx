import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function PassengerForm({ passengerNumber }) {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Passenger Number#{passengerNumber + 1}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="select-document-type">Document Type</InputLabel>
            <Select labelId="select-document-type" id="select-document-type" label="Document Type">
              <MenuItem value={1}>Cedula</MenuItem>
              <MenuItem value={2}>Pasport</MenuItem>
              <MenuItem value={3}>Visa</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="document"
            name="document"
            label="Document"
            fullWidth
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField required id="name" name="name" label="Name" fullWidth variant="standard" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="phoneNumber"
            name="phoneNumber"
            label="Phone Number"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField required id="age" name="age" label="Age" fullWidth variant="standard" />
        </Grid>
        <Grid item xs={12}>
          <TextField id="email" name="email" label="Email" fullWidth variant="standard" />
        </Grid>
      </Grid>
    </>
  );
}
