package com.sebastianabril.flights.module.booking.model;

import javax.persistence.*;
import java.util.List;


@Entity
@Table(name="booking")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String code;
    @OneToMany
    private List<BookingDetails> details;
    private Double totalPayment;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public List<BookingDetails> getDetails() {
        return details;
    }

    public void setDetails(List<BookingDetails> details) {
        this.details = details;
    }

    public Double getTotalPayment() {
        return totalPayment;
    }

    public void setTotalPayment(Double totalPayment) {
        this.totalPayment = totalPayment;
    }
}
