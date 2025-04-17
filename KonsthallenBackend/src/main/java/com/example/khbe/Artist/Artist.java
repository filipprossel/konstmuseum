package com.example.khbe.Artist;

import org.springframework.beans.factory.annotation.Autowired;

import jakarta.persistence.*;

@Entity
@Table (name = "artists")
public class Artist {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int artistId;

    @Column(name = "artist_name")
    private String artistName;

    public Artist() {

    }

    public Artist(String artist_name) {
        this.artistName = artist_name;
    }

    public int getArtist_id() {
        return artistId;
    }

    public void setArtist_id(int artist_id) {
        this.artistId = artist_id;
    }

    public String getArtist_name() {
        return artistName;
    }
    public void setArtist_name(String artist_name) {
        this.artistName = artist_name;
    }
}
