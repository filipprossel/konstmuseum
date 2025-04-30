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
        return reviewService.setReviewAndScore(reviewData);
    }
    @GetMapping
    public List<ReviewDTO> getReviews(@RequestParam int user_id){
        return reviewService.getAllReviews(user_id);
    }
}
