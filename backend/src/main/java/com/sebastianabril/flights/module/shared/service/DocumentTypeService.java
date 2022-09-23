package com.sebastianabril.flights.module.shared.service;


import com.sebastianabril.flights.module.shared.model.DocumentType;
import com.sebastianabril.flights.module.shared.repository.DocumentTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DocumentTypeService {

    @Autowired
    private DocumentTypeRepository documentTypeRepository;

    public List<DocumentType> getAll() {
        return documentTypeRepository.findAll();
    }
}
