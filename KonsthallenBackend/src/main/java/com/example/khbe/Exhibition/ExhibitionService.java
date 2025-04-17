package com.example.khbe.Exhibition;

import org.springframework.stereotype.Service;

import com.example.khbe.Artist.Artist;

import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.sql.Date;

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

    public Exhibition createExhibition(String exhibition_name, String exhibition_desc, Date exhibition_date,Artist artist) {

        Exhibition exhibition = new Exhibition(exhibition_name, exhibition_desc, exhibition_date,artist);

        return exhibitionRepository.save(exhibition);
    }
}