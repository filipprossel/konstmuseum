package com.example.khbe.Exhibition;
import com.example.khbe.userExhibitionsVisited.UserExhibitionsVisited;
import jakarta.persistence.*;

import java.sql.Date;
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
    private Date exhibition_date;
    private String exhibition_desc;

    public Exhibition() {
    }

    public Exhibition(String exhibition_name, String exhibition_desc, Date exhibition_date, Artist artist) {
        this.exhibition_name = exhibition_name;
        this.exhibition_desc = exhibition_desc;
        this.exhibition_date = exhibition_date;
        this.artist = artist;
    }

    @OneToMany(mappedBy = "exhibition")
    Set<UserExhibitionsVisited> exhibitionVisitedSet;

    public String getExhibition_desc() {
        return exhibition_desc;
    }

    public void setExhibition_desc(String exhibition_desc) {
        this.exhibition_desc = exhibition_desc;
    }
    
    public Date getExhibition_date() {
        return exhibition_date;
    }

    public void setExhibition_date(Date exhibition_date) {
        this.exhibition_date = exhibition_date;
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
