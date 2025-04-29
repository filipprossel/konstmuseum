package com.example.khbe.Review;

import com.example.khbe.Artphoto.Artphoto;
import com.example.khbe.Artphoto.ArtphotoRepository;
import com.example.khbe.Entity.User;
import com.example.khbe.Entity.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.util.HashMap;

@Service
public class ReviewService {
    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private ArtphotoRepository artphotoRepository;
    @Autowired
    private UserRepository userRepository;
    public HttpStatus setReviewAndScore(HashMap<String, String> reviewData/*int score, String reviewText, int userId, int artId*/){
        Review newReview = new Review();
        if(reviewData.get("user_id").isEmpty() || reviewData.get("art_id").isEmpty()){
            return HttpStatus.BAD_REQUEST;
        }

        try{
                newReview.setGrade(Integer.parseInt(reviewData.get("grade")));
            }
        catch (NumberFormatException NFE){
            newReview.setGrade(-1);
        }

        newReview.setUser(userRepository.getReferenceById(Integer.parseInt(reviewData.get("user_id"))));
        newReview.setArtphoto(artphotoRepository.getReferenceById(Integer.parseInt(reviewData.get("art_id"))));
        newReview.setReview(reviewData.get("review"));
        reviewRepository.save(newReview);
        return HttpStatus.CREATED;
    }
}
