package com.sebastianabril.flights.module.booking.model;

import javax.persistence.*;


@Entity
@Table(name="booking-details")
public class BookingDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @OneToOne
    private Passenger passenger;
    @OneToOne
    private Flight flight;
    private String passengerSeat;
    private Double payment;
    private Double discount;

    public Passenger getPassenger() {
        return passenger;
    }

    public void setPassenger(Passenger passenger) {
        this.passenger = passenger;
    }

    public Flight getFlight() {
        return flight;
    }

    public void setFlight(Flight flight) {
        this.flight = flight;
    }

    public String getPassengerSeat() {
        return passengerSeat;
    }

    public void setPassengerSeat(String passengerSeat) {
        this.passengerSeat = passengerSeat;
    }

    public Double getPayment() {
        return payment;
    }

    public void setPayment(Double payment) {
        this.payment = payment;
    }

    public Double getDiscount() {
        return discount;
    }

    public void setDiscount(Double discount) {
        this.discount = discount;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
