import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DepartingFlightForm from './DepartingFlightForm';
import ReturningFlightForm from './ReturningFlightForm';
import PassengersForm from './PassengersForm';

const steps = ['Departing flight', 'Returning flight', 'Passengers', 'Payment'];

function getStepContent(step, onDepartedFlightSelected, onReturningFlightSelected) {
  switch (step) {
    case 0:
      return <DepartingFlightForm onDepartedFlightSelected={onDepartedFlightSelected} />;
    case 1:
      return <ReturningFlightForm onReturningFlightSelected={onReturningFlightSelected} />;
    case 2:
      return <PassengersForm />;
    default:
      throw new Error('Unknown step');
  }
}

export default function BookingScreen() {
  const [activeStep, setActiveStep] = React.useState(2);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const onDepartedFlightSelected = (flight) => {
    console.log(flight);
    handleNext();
  };

  const onReturningFlightSelected = (flight) => {
    console.log(flight);
    handleNext();
  };

  return (
    <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
      <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <>
          {activeStep === steps.length ? (
            <>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order confirmation, and will
                send you an update when your order has shipped.
              </Typography>
            </>
          ) : (
            <>
              {getStepContent(activeStep, onDepartedFlightSelected, onReturningFlightSelected)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button variant="contained" onClick={handleNext} sx={{ mt: 3, ml: 1 }}>
                  {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                </Button>
              </Box>
            </>
          )}
        </>
      </Paper>
    </Container>
  );
}
