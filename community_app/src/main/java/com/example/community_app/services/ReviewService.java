package com.example.community_app.services;


import com.example.community_app.models.Review;

public interface ReviewService {
    public Review createReview(Review review);

    public Iterable<Review> getReview();
}
