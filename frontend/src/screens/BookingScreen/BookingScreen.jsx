import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSearchParams } from 'react-router-dom';
import DepartingFlightForm from './DepartingFlightForm';
import ReturningFlightForm from './ReturningFlightForm';
import PassengersForm from './PassengersForm';
import { BookingContext } from './BookingContext';
import BillingForm from './BillingForm';

const steps = ['Departing flight', 'Returning flight', 'Passengers', 'Billing'];

export default function BookingScreen() {
  const [activeStep, setActiveStep] = useState(3);
  const [searchParams] = useSearchParams();
  const numberOfAdults = searchParams.get('adults') || 0;
  const numberOfChildrens = searchParams.get('children') || 0;
  const flightType = searchParams.get('flightType');

  const [departedFlight, setDepartedFlight] = useState(null);
  const [returningFlight, setReturningFlight] = useState(null);
  const [passengers, setPassengers] = useState(getPassengerList(numberOfAdults, numberOfChildrens));

  const handleNext = () => {
    if (activeStep === 0 && flightType === 'OW') {
      setActiveStep(activeStep + 2);
    } else {
      setActiveStep(activeStep + 1);
    }
  };
  const handleBack = () => {
    if (activeStep === 2 && flightType === 'OW') {
      setActiveStep(activeStep - 2);
    } else {
      setActiveStep(activeStep - 1);
    }
  };

  const value = {
    departedFlight,
    setDepartedFlight,
    returningFlight,
    setReturningFlight,
    passengers,
    setPassengers
  };

  const isNextButtonDisabled = getNextButtonState(
    activeStep,
    departedFlight,
    returningFlight,
    passengers
  );

  return (
    <BookingContext.Provider value={value}>
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
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                    disabled={isNextButtonDisabled}>
                    {activeStep === steps.length - 1 ? 'Make Booking' : 'Next'}
                  </Button>
                </Box>
              </>
            )}
          </>
        </Paper>
      </Container>
    </BookingContext.Provider>
  );
}

const getPassengerList = (numberOfAdults, numberOfChildrens) => {
  const passenger = [];
  const defaultState = {
    documentTypeId: '',
    document: '',
    name: '',
    lastName: '',
    phoneNumber: '',
    age: '',
    email: ''
  };

  for (let i = 0; i < numberOfAdults; i++) {
    passenger.push({
      ...defaultState,
      isAdult: true,
      id: i
    });
  }

  for (let i = 0; i < numberOfChildrens; i++) {
    passenger.push({
      ...defaultState,
      isAdult: false,
      id: i
    });
  }

  return passenger;
};

const getNextButtonState = (step, departedFlight, returningFlight, passengers, billing) => {
  switch (step) {
    case 0:
      return departedFlight === null;
    case 1:
      return returningFlight === null;
    case 2:
      return passengers === null;
    case 3:
      return billing === null;
    default:
      throw new Error('Unknown step');
  }
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return <DepartingFlightForm />;
    case 1:
      return <ReturningFlightForm />;
    case 2:
      return <PassengersForm />;
    case 3:
      return <BillingForm />;
    default:
      throw new Error('Unknown step');
  }
}
