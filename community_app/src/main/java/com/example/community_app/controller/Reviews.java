package com.example.community_app.controller;


import com.example.community_app.models.Review;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.community_app.services.ReviewService;

@RestController
@RequestMapping("/reviews")
public class Reviews {
    @Autowired
    ReviewService reviewService;

  @GetMapping
    public Iterable<Review> getReview(){
      return reviewService.getReview();
  }

  @PostMapping
   public Review createReview(@RequestBody Review review) {
      return reviewService.createReview(review);
  }
}

//object api should print following
//{
// messageid: int,
// username: String,
// message: String
//        }