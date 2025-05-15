package com.example.khbe.Review;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/reviews")
public class ReviewController {
    @Autowired
    private ReviewService reviewService;

    @PostMapping("/createReview")
    public HttpStatus ReviewAndScore (@RequestBody HashMap<String, String> reviewData){
        System.out.println(reviewData.get("grade"));
        return reviewService.setReviewAndScore(reviewData);
    }

    @GetMapping
    public List<ReviewDTO> getAllReviewsByUser(@RequestParam int user_id) {
        return reviewService.getAllReviews(user_id);
    }

    @GetMapping("/exhibition")
    public List<Review> getReviewsByUserAndExhibition(@RequestParam int user_id, @RequestParam int exhibition_id) {
        List<Review> reviews = reviewService.getReviewsByUserAndExhibition(user_id, exhibition_id);
        return reviews;
    }
}
