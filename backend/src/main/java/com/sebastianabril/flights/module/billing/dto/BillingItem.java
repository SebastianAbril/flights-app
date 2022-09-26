package com.sebastianabril.flights.module.billing.dto;

import com.sebastianabril.flights.module.flight.model.FlightDTO;

import java.util.ArrayList;
import java.util.List;

public class BillingItem {
    private String name;
    private String lastName;
    private Double miles;
    private Double newMiles;

    private FlightDTO flight;

    private List<Float> discounts = new ArrayList<>();

    private Double subTotal = 0d;
    private Double totalDiscount = 0d;
    private Double total = 0d;

    public void addDiscount(Float discount) {
        discounts.add(discount);

        for(Float discountPercentage : discounts) {
            totalDiscount += discountPercentage * subTotal / 100;
        }

        total = subTotal - totalDiscount;
    }

    public Double getMiles() {
        return miles;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setMiles(Double miles) {
        this.miles = miles;
    }

    public Double getNewMiles() {
        return newMiles;
    }

    public void setNewMiles(Double newMiles) {
        this.newMiles = newMiles;
    }

    public List<Float> getDiscounts() {
        return discounts;
    }

    public void setDiscounts(List<Float> discounts) {
        this.discounts = discounts;
    }

    public FlightDTO getFlight() {
        return flight;
    }

    public void setFlight(FlightDTO flight) {
        this.flight = flight;
    }

    public Double getSubTotal() {
        return subTotal;
    }

    public void setSubTotal(Double subTotal) {
        this.subTotal = subTotal;
    }

    public Double getTotalDiscount() {
        return totalDiscount;
    }

    public void setTotalDiscount(Double totalDiscount) {
        this.totalDiscount = totalDiscount;
    }

    public Double getTotal() {
        return total;
    }

    public void setTotal(Double total) {
        this.total = total;
    }


}
