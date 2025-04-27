package com.example.khbe.Exhibition;

import java.sql.Date;
import java.time.Instant;
import java.time.OffsetDateTime ;
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
    @RequestParam("exhibition_date_start") String exhibition_date_start,
    @RequestParam("exhibition_date_end") String exhibition_date_end,
    @RequestParam("photos") List<MultipartFile> photos) 
{

    System.out.println(exhibition_date_start);
    System.out.println(exhibition_date_end);
    System.out.println("____");

    OffsetDateTime exhibitionStartDate;
    OffsetDateTime exhibitionEndDate;
    // Parse date strings to OffsetDateTime 
    try {
        // Parse date strings with time zone
        exhibitionStartDate = OffsetDateTime.parse(exhibition_date_start);
        exhibitionEndDate = OffsetDateTime.parse(exhibition_date_end);

        // Ensure the dates have time zone information
        System.out.println("Start Date (with time zone): " + exhibitionStartDate);
        System.out.println("End Date (with time zone): " + exhibitionEndDate);
    } catch (Exception e) {
        return ResponseEntity.status(400).body("Invalid date format.");
    }
    

    System.out.println("heheheheeheheh");
    System.out.println("Exhibition Name: " + exhibition_name);
    System.out.println("Exhibition Artist: " + exhibition_artist);
    System.out.println("Exhibition Description: " + exhibition_desc);
    System.out.println("Exhibition Start Date (String): " + exhibitionStartDate);
    System.out.println("Exhibition End Date (String): " + exhibitionEndDate);


    // Convert OffsetDateTime  to java.sql.Date

    // Create Artist
    Artist artist = artistService.createArtist(exhibition_artist);

    // Create Exhibition
    Exhibition exhibition = exhibitionService.createExhibition(exhibition_name, exhibitionStartDate, exhibition_desc, artist, exhibitionEndDate); 
    
    try {
        // Save photos
        artphotoService.savePhotos(photos, exhibition);
        System.out.println("Photos saved successfully.");
        return ResponseEntity.ok("Files uploaded and saved successfully.");
    } catch (Exception e) {
        System.err.println("Error saving photos: " + e.getMessage());
        return ResponseEntity.status(500).body("Error saving photos: " + e.getMessage());
    }
}

}