package com.example.khbe.Review;

import com.example.khbe.Artphoto.Artphoto;
import com.example.khbe.Artphoto.ArtphotoRepository;
import com.example.khbe.Entity.User;
import com.example.khbe.Entity.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

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
    public List<ReviewDTO> getAllReviews(int userId){
        User user = userRepository.getReferenceById(userId);
        List<Review> reviewList = reviewRepository.findAllByUser(user);
        List<ReviewDTO> reviewDTOList = new ArrayList<>();
        for(Review review : reviewList){
            ReviewDTO reviewDTO = new ReviewDTO();
            reviewDTO.setReview_id(review.getReview_id());
            reviewDTO.setArt_id(review.getArtphoto().getArt_id());
            reviewDTO.setGrade(review.getGrade());
            reviewDTO.setReview(review.getReview());
            reviewDTOList.add(reviewDTO);
        }

        return reviewDTOList;
    }
}
