package com.example.khbe.Review;

import com.example.khbe.Artphoto.Artphoto;
import jakarta.persistence.*;
import com.example.khbe.Entity.User;

@Entity
@Table(name="reviews")
public class Review {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int review_id;

    @ManyToOne
    @JoinColumn(name = "art_id", referencedColumnName = "art_id")
    private Artphoto artphoto;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    private User user;
    private int grade;

    private String review;

    public Artphoto getArtphoto() {
        return artphoto;
    }

    public int getReview_id() {
        return review_id;
    }

    public String getReview() {
        return review;
    }

    public int getGrade() {
        return grade;
    }

    public User getUser() {
        return user;
    }

    public void setArtphoto(Artphoto artphoto) {
        this.artphoto = artphoto;
    }

    public void setReview(String review) {
        this.review = review;
    }

    public void setReview_id(int review_id) {
        this.review_id = review_id;
    }

    public void setGrade(int grade) {
        this.grade = grade;
    }

    public void setUser(User user) {
        this.user = user;
    }
}

