package com.example.khbe.Exhibition;
import jakarta.persistence.*;

import java.util.List;

import com.example.khbe.Artphoto.Artphoto;

@Entity
@Table(name="exhibition")
public class Exhibition {
    
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int exhibitionId;
    private String exhibition_name;

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
}
