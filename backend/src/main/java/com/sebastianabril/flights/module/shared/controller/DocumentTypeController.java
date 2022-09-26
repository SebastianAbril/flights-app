package com.sebastianabril.flights.module.shared.controller;

import com.sebastianabril.flights.module.shared.model.DocumentType;
import com.sebastianabril.flights.module.shared.service.DocumentTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
public class DocumentTypeController {

    @Autowired
    private DocumentTypeService documentTypeService;

    @GetMapping("/api/document-type")
    public List<DocumentType> getDocumentTypes(){
        return documentTypeService.getAll();
    }
}