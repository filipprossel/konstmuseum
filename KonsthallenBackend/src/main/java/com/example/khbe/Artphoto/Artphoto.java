package com.example.khbe.Artphoto;
import jakarta.persistence.*;
import com.example.khbe.Exhibition.Exhibition;
import com.example.khbe.artphotoArtist.ArtphotoArtist;;

@Entity
@Table(name = "artphoto")
public class Artphoto {

    public Artphoto() {}

    public Artphoto(String art_link,Exhibition exhibition,ArtphotoArtist artphotoArtist,String art_desc) {
        this.art_link = art_link;
        this.exhibition = exhibition;
        this.artphotoArtist = artphotoArtist;
        this.art_desc = art_desc;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int art_id;
    private String art_link;
    private String art_desc;

    public String getArt_desc() {
        return art_desc;
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

    @ManyToOne
    @JoinColumn(name = "exhibition_id", nullable = false)
    private Exhibition exhibition;

    public void setExhibition(Exhibition exhibition) {
        this.exhibition = exhibition;
    }    

    @ManyToOne
    @JoinColumn(name = "artphotoartist_id", nullable = false)
    private ArtphotoArtist artphotoArtist; 

    public ArtphotoArtist getArtphotoartist() {
        return artphotoArtist;
    }

    public void setArtphotoArtist(ArtphotoArtist artphotoArtist) {
        this.artphotoArtist = artphotoArtist;
    }
}
