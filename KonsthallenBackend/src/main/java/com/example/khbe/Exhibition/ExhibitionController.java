package com.example.khbe.Exhibition;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/exhibitions")
public class ExhibitionController {

    @Autowired
    private ExhibitionService exhibitionService;

    @GetMapping
    public List<Exhibition> getAllExhibitions(){
        return exhibitionService.getAllExhibitions();
    }

    @GetMapping("/{id}")
    public Exhibition getExhibitionById(@PathVariable int id) {
        return exhibitionService.getExhibitionById(id);
    }
}