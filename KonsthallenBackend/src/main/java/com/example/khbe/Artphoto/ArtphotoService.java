package com.example.khbe.Artphoto;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import com.example.khbe.Exhibition.Exhibition;
import com.example.khbe.artphotoArtist.ArtphotoArtist;
import com.example.khbe.artphotoArtist.ArtphotoArtistRepository;

@Service
public class ArtphotoService {

    @Autowired
    private ArtphotoRepository artphotoRepository;

    @Autowired ArtphotoArtistRepository artphotoArtistRepository;

    private final String uploadDir = "C:/home/username/uploads/"; 

    public void savePhoto(MultipartFile photo, Exhibition exhibition, String artName, String artDesc, String artphotoArtistName) throws IOException {
        if (photo == null || photo.isEmpty()) return;
    
        String originalFilename = photo.getOriginalFilename();
        String extension = originalFilename != null && originalFilename.contains(".") ? originalFilename.substring(originalFilename.lastIndexOf(".")) : ".jpg";
        String filename = UUID.randomUUID().toString() + extension;
    
        File dir = new File(uploadDir);
        if (!dir.exists()) {
            if (dir.mkdirs()) {
                System.out.println("Directory created: " + dir.getAbsolutePath());
            } else {
                System.out.println("Failed to create directory at: " + dir.getAbsolutePath());
            }
        }
    
        File file = new File(uploadDir + filename);
        try (FileOutputStream fos = new FileOutputStream(file)) {
            fos.write(photo.getBytes());
            System.out.println("File saved: " + file.getAbsolutePath());
        } catch (IOException e) {
            System.out.println("Error saving file: " + e.getMessage());
            throw e;
        }
    
        ArtphotoArtist artphotoArtist = new ArtphotoArtist(artphotoArtistName);
        artphotoArtistRepository.save(artphotoArtist);
    
        Artphoto artphoto = new Artphoto("/uploads/" + filename, exhibition, artphotoArtist, artDesc, artName);
        artphotoRepository.save(artphoto);
    }    
}
