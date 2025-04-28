package com.example.khbe.artphotoArtist;

import org.springframework.beans.factory.annotation.Autowired;

public class ArtphotoArtistService {
    
    
    @Autowired
    private ArtphotoArtistRepository artphotoArtistRepository;

    public void saveArtphotoArtist(ArtphotoArtist artphotoArtist) {
        artphotoArtistRepository.save(artphotoArtist);
    }
}
