package com.example.khbe.Exhibition;
import com.example.khbe.userExhibitionsVisited.UserExhibitionsVisited;
import jakarta.persistence.*;


import java.util.List;

import com.example.khbe.Artphoto.Artphoto;
import com.example.khbe.Artist.Artist;
import java.util.Set;

@Entity
@Table(name="exhibition")
public class Exhibition {
    
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int exhibitionId;

    private String exhibition_name;
    private String  exhibition_date_start;
    private String  exhibition_date_end;
    private String exhibition_desc;

    public Exhibition() {}

    public Exhibition(String exhibition_name, String exhibition_date_start, String exhibition_desc, Artist artist, String exhibition_date_end) {
        this.exhibition_name = exhibition_name;
        this.exhibition_date_start = exhibition_date_start;
        this.exhibition_desc = exhibition_desc;
        this.artist = artist;
        this.exhibition_date_end = exhibition_date_end;
    }
    
    @OneToMany(mappedBy = "exhibition")
    Set<UserExhibitionsVisited> exhibitionVisitedSet;

    public String getExhibition_desc() {
        return exhibition_desc;
    }

    public void setExhibition_desc(String exhibition_desc) {
        this.exhibition_desc = exhibition_desc;
    }
    
    public String  getExhibition_date_start() {
        return exhibition_date_start;
    }

    public String  getExhibition_date_end() {
        return exhibition_date_end;
    }

    public void setExhibition_date_start(String  exhibition_date_start) {
        this.exhibition_date_start = exhibition_date_start;
    }
    public void setExhibition_date_end(String  exhibition_date_end) {
        this.exhibition_date_end = exhibition_date_end;
    }

    @OneToMany(mappedBy = "exhibition", cascade = CascadeType.ALL)
    private List<Artphoto> photos;

    public List<Artphoto> getPhotos() {
        return photos;
    }

    public void setPhotos(List<Artphoto> photos) {
        this.photos = photos;
    }

    public int getExhibition_id() {
        return exhibitionId;
    }

    public void setExhibition_id(int exhibition_id) {
        this.exhibitionId = exhibition_id;
    }

    public String getExhibition_name() {
        return exhibition_name;
    }

    public void setExhibition_name(String exhibition_name) {
        this.exhibition_name = exhibition_name;
    }

    @ManyToOne
    @JoinColumn(name = "artist_id", referencedColumnName = "artistId")
    private Artist artist;

    public Artist getArtist() {
        return artist;
    }

    public void setArtist(Artist artist) {
        this.artist = artist;
    }
}
