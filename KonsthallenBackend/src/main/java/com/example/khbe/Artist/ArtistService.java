package com.example.khbe.Artist;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ArtistService {

    @Autowired
    private ArtistRepository artistRepository;

    public Artist createArtist(String name) {
        if (artistRepository.findByArtistName(name) != null) {
            Artist existingArtist = artistRepository.findByArtistName(name);

            return existingArtist;
        }

        Artist artist = new Artist(name);

        return artistRepository.save(artist);
    }
}
