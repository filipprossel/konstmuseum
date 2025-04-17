package com.example.khbe.Exhibition;

import java.sql.Date;
import java.time.Instant;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.example.khbe.Artist.Artist;
import com.example.khbe.Artist.ArtistService;
import com.example.khbe.Artphoto.ArtphotoService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/exhibitions")
public class ExhibitionController {

    @Autowired
    private ExhibitionService exhibitionService;

    @Autowired
    private ArtistService artistService;

    @Autowired 
    private ArtphotoService artphotoService;

    @GetMapping
    public List<Exhibition> getAllExhibitions(){
        return exhibitionService.getAllExhibitions();
    }

    @GetMapping("/{id}")
    public Exhibition getExhibitionById(@PathVariable int id) {
        return exhibitionService.getExhibitionById(id);
    }

    @PostMapping("/upload")
    public ResponseEntity<String> uploadFiles(
        @RequestParam("exhibition_name") String exhibition_name,
        @RequestParam("exhibition_artist") String exhibition_artist,
        @RequestParam("exhibition_desc") String exhibition_desc,
        @RequestParam("exhibition_date") String exhibition_date,
        @RequestParam("photos") List<MultipartFile> photos) 
        {

        Instant instant = Instant.parse(exhibition_date);
        java.util.Date utilDate = java.util.Date.from(instant);
        Date sqlDate = new Date(utilDate.getTime());

        Artist artist = artistService.createArtist(exhibition_artist);

        Exhibition exhibition = exhibitionService.createExhibition(exhibition_name, exhibition_desc, sqlDate, artist); 
        
        try {
            artphotoService.savePhotos(photos, exhibition);
            System.out.println("Photos saved successfully.");
            return ResponseEntity.ok("Files uploaded and saved successfully.");
        } catch (Exception e) {
            System.err.println("Error saving photos: " + e.getMessage());
            return ResponseEntity.status(500).body("Error saving photos: " + e.getMessage());
        }
    }
}