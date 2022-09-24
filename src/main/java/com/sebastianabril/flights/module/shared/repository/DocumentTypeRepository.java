package com.sebastianabril.flights.module.shared.repository;

import com.sebastianabril.flights.module.shared.model.DocumentType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DocumentTypeRepository  extends JpaRepository<DocumentType, Long> {
}
