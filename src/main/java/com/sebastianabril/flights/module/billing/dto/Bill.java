package com.sebastianabril.flights.module.billing.dto;

import java.util.ArrayList;
import java.util.List;

public class Bill {

    private Double subTotal = 0d;
    private Double totalDiscount = 0d;
    private Double total = 0d;

    private List<BillingItem> items = new ArrayList<>();

    public void addItem(BillingItem item){
        items.add(item);

        total += item.getTotal();
        subTotal += item.getSubTotal();
        totalDiscount += item.getTotalDiscount();
    }

    public List<BillingItem> getItems() {
        return items;
    }

    public void setItems(List<BillingItem> items) {
        this.items = items;
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
