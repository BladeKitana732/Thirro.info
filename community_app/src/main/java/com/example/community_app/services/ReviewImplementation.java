package com.example.community_app.services;


import com.example.community_app.models.Review;
import com.example.community_app.repository.ReviewRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReviewImplementation implements ReviewService{
    @Autowired
    private ReviewRepo reviewRepo;


    @Override
    public Review createReview(Review review) {
        return reviewRepo.save(review);
    }

    @Override
    public Iterable<Review> getReview() {
        return reviewRepo.findAll();
    }
}
