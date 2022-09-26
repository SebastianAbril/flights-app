import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function PassengerForm({ passenger, updatePassengerData, documentTypes }) {
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    updatePassengerData(passenger.id, name, value);
  };

  return (
    <>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography> Passenger Number # {passenger.id + 1}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="select-document-type">Document Type</InputLabel>
                <Select
                  labelId="select-document-type"
                  id="select-document-type"
                  label="Document Type"
                  name="documentTypeId"
                  value={passenger.documentTypeId}
                  onChange={handleChange}>
                  {documentTypes.map((documentType) => (
                    <MenuItem key={documentType.id} value={documentType.id}>
                      {documentType.name}
                    </MenuItem>
                  ))}
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
                value={passenger.document}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="name"
                name="name"
                label="Name"
                fullWidth
                variant="standard"
                value={passenger.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="lastName"
                name="lastName"
                label="Last name"
                fullWidth
                variant="standard"
                value={passenger.lastName}
                onChange={handleChange}
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
                value={passenger.phoneNumber}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="age"
                name="age"
                label="Age"
                fullWidth
                variant="standard"
                value={passenger.age}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="email"
                name="email"
                label="Email"
                fullWidth
                variant="standard"
                value={passenger.email}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
