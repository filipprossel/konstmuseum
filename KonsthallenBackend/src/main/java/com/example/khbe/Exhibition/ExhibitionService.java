package com.example.khbe.Exhibition;

import org.springframework.stereotype.Service;

import com.example.khbe.Artist.Artist;

import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.sql.Date;
import java.time.LocalDate;
import java.time.OffsetDateTime;

@Service
public class ExhibitionService {

    @Autowired
    private ExhibitionRepository exhibitionRepository;

    public List<Exhibition> getAllExhibitions() {
        return exhibitionRepository.findAll();
    }

    public Exhibition getExhibitionById(int id) {
        return exhibitionRepository.findByExhibitionId(id);
    }

    public Exhibition createExhibition(String exhibition_name, OffsetDateTime sqlStartDate, String exhibition_desc, Artist artist, OffsetDateTime sqlEndDate) {
        // Create a new Exhibition object with both start and end dates
        Exhibition exhibition = new Exhibition(exhibition_name, sqlStartDate, exhibition_desc, artist, sqlEndDate);
        
        // Save the exhibition to the database and return the saved entity
        return exhibitionRepository.save(exhibition);
    }
    
}