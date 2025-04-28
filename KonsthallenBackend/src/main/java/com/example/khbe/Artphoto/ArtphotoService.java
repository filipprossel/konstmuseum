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

    public void savePhotos(List<MultipartFile> photos, Exhibition exhibition) throws IOException {
        for (MultipartFile photo : photos) {
            System.out.println("HEJEEJJE");
            if (photo.isEmpty()) continue;

            String originalFilename = photo.getOriginalFilename();
            String extension = originalFilename != null && originalFilename.contains(".") ? 
                originalFilename.substring(originalFilename.lastIndexOf(".")) : ".jpg";
            String filename = UUID.randomUUID().toString() + extension;

            File dir = new File(uploadDir);
            System.out.println("Checking directory: " + dir.getAbsolutePath());
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

            ArtphotoArtist artphotoArtist = new ArtphotoArtist("test");
            artphotoArtistRepository.save(artphotoArtist);

            Artphoto artphoto = new Artphoto("/uploads/" + filename,exhibition,artphotoArtist);
            
            artphotoRepository.save(artphoto);
            /*Artphoto artphoto = new Artphoto();
            artphoto.setArt_link("/uploads/" + filename);
            artphoto.setExhibition(exhibition);
            artphotoRepository.save(artphoto);*/
        }
    }
}
