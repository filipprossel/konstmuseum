package com.example.khbe.Artist;

import jakarta.persistence.*;

@Entity
@Table (name = "artists")
public class Artist {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long artistId;

    private String artist_name;

    public String getArtist_name() {
        return artist_name;
    }
    public void setArtist_name(String artist_name) {
        this.artist_name = artist_name;
    }
}
