package com.example.khbe.Artphoto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/photos")
@CrossOrigin(origins = "*")
public class ArtphotoController {

    @Autowired
    private ArtphotoRepository artphotoRepository;

    @GetMapping("/{id}")
    public List<Artphoto> getPhotosByExhibition(@PathVariable int id) {
        return artphotoRepository.findByExhibition_ExhibitionId(id);
    }
}
