package com.example.khbe.Exhibition;

import java.sql.Date;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.List;
import java.util.Map;

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
 public ResponseEntity<Map<String, String>> uploadFiles(
     @RequestParam("exhibition_name") String exhibitionName,
     @RequestParam("exhibition_organizer") String exhibitionOrganizer,
     @RequestParam("exhibition_desc") String exhibitionDesc,
     @RequestParam("exhibition_date_start") String exhibitionDateStart,
     @RequestParam("exhibition_date_end") String exhibitionDateEnd,
     @RequestParam("artfile") List<MultipartFile> artfiles,
     @RequestParam Map<String, String> allRequestParams)
 {
     System.out.println("ExhibitionController: uploadFiles called");
 
     Artist artist = artistService.createArtist(exhibitionOrganizer);
 
     DateTimeFormatter formatter = DateTimeFormatter.ISO_DATE_TIME;
     LocalDateTime startDateTime;
     LocalDateTime endDateTime;
     try {
         startDateTime = LocalDateTime.parse(exhibitionDateStart, formatter);
         endDateTime = LocalDateTime.parse(exhibitionDateEnd, formatter);
     } catch (DateTimeParseException e) {
         return ResponseEntity.badRequest().body(Map.of(
             "status", "error",
             "message", "Invalid date format. Expected format: YYYY-MM-DDTHH:MM:SS"
         ));
     }
 
     Exhibition exhibition = exhibitionService.createExhibition(exhibitionName, startDateTime, exhibitionDesc, artist, endDateTime);
 
     for (int i = 0; i < artfiles.size(); i++) {
         MultipartFile file = artfiles.get(i);
         String nameKey = "artname[" + i + "]";
         String descKey = "artdesc[" + i + "]";
         String artistNameKey = "artistname[" + i + "]";
         String name = allRequestParams.get(nameKey);
         String desc = allRequestParams.get(descKey);
         String artistName = allRequestParams.get(artistNameKey);
         
         try {
             artphotoService.savePhoto(file, exhibition, name, desc, artistName);
         } catch (Exception e) {
             return ResponseEntity.status(500).body(Map.of(
                 "status", "error",
                 "message", "Error uploading file: " + e.getMessage()
             ));
         }
     }
 
     return ResponseEntity.ok(Map.of(
         "status", "success",
         "message", "Files uploaded and saved successfully."
     ));
 }
} 