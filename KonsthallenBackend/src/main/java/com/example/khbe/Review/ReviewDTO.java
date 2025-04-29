package com.example.khbe.Review;

public class ReviewDTO {

    private int review_id;
    private int art_id;
    private int grade;
    private String review;

    public void setReview_id(int review_id) {
        this.review_id = review_id;
    }

    public void setReview(String review) {
        this.review = review;
    }

    public void setGrade(int grade) {
        this.grade = grade;
    }

    public void setArt_id(int art_id) {
        this.art_id = art_id;
    }

    public String getReview() {
        return review;
    }

    public int getReview_id() {
        return review_id;
    }

    public int getGrade() {
        return grade;
    }

    public int getArt_id() {
        return art_id;
    }
}
