package com.example.khbe.Review;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/reviews")
public class ReviewController {
    @Autowired
    private ReviewService reviewService;

    @PostMapping("/setScore")
    public HttpStatus ReviewAndScore (@RequestBody HashMap<String, String> reviewData){
        return reviewService.setReviewAndScore(reviewData);
    }
}
