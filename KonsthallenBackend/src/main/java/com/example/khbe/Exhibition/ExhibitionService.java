package com.example.khbe.Exhibition;

import org.springframework.stereotype.Service;

import com.example.khbe.Artist.Artist;

import org.springframework.beans.factory.annotation.Autowired;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ExhibitionService {

    @Autowired
    private ExhibitionRepository exhibitionRepository;

    public List<Exhibition> getAllExhibitions() {
        return exhibitionRepository.findAll();
    }

    public Exhibition getExhibitionById(int id) {
        Exhibition test = exhibitionRepository.findByExhibitionId(id);
        System.out.println(test.getExhibition_date_start());
        System.out.println("HEHEHEHHEEH");

        return exhibitionRepository.findByExhibitionId(id);
    }

    public Exhibition createExhibition(String exhibition_name, LocalDateTime sqlStartDate, String exhibition_desc, Artist artist, LocalDateTime sqlEndDate) {
        Exhibition exhibition = new Exhibition(exhibition_name, sqlStartDate, exhibition_desc, artist, sqlEndDate);
        System.out.println("ExhibitionService: createExhibition called");
        return exhibitionRepository.save(exhibition);
    }
    
}