package com.sebastianabril.flights.module.booking.repository;

import com.sebastianabril.flights.module.booking.model.DocumentType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DocumentTypeRepository  extends JpaRepository<DocumentType, Long> {
}
