package com.example.khbe.artphotoArtist;

import jakarta.persistence.*;

@Entity
@Table (name="artphoto_artist")
public class ArtphotoArtist {

    public ArtphotoArtist() {}

    public ArtphotoArtist(String artphotoartist_name) {
        this.artphotoartist_name = artphotoartist_name;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int artphotoartist_id;

    private String artphotoartist_name;

    
    public int getArtphotoartist_id() {
        return artphotoartist_id;
    }

    public String getArtphotoartist_name() {
        return artphotoartist_name;
    }
}
