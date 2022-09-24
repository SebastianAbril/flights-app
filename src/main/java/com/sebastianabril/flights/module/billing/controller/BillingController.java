package com.sebastianabril.flights.module.billing.controller;

import com.sebastianabril.flights.module.billing.dto.Bill;
import com.sebastianabril.flights.module.billing.dto.PassengerRequest;
import com.sebastianabril.flights.module.billing.service.BillingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BillingController {

    @Autowired
    private BillingService billingService;

    @PostMapping("/api/billing/calculate")
    public Bill calculate(@RequestBody BillingRequest billingRequest) {
        return  billingService.calculate(
                billingRequest.departedFlightId,
                billingRequest.returningFlightId,
                billingRequest.passengers
        );
    }

    public static class BillingRequest {
        public Long departedFlightId;
        public Long returningFlightId;
        public List<PassengerRequest> passengers;
    }
}
