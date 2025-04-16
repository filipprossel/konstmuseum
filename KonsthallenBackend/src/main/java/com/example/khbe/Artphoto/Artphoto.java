package com.example.khbe.Artphoto;
import jakarta.persistence.*;
import com.example.khbe.Exhibition.Exhibition;

@Entity
@Table(name = "artphoto")
public class Artphoto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int art_id;
    private String art_link;

    @ManyToOne
    @JoinColumn(name = "exhibition_id", nullable = false)
    private Exhibition exhibition;

    public void setExhibition(Exhibition exhibition) {
        this.exhibition = exhibition;
    }    

    public int getArt_id() {
        return art_id;
    }

    public void setArt_id(int art_id) {
        this.art_id = art_id;
    }

    public String getArt_link() {
        return art_link;
    }

    public void setArt_link(String art_link) {
        this.art_link = art_link;
    }
}
