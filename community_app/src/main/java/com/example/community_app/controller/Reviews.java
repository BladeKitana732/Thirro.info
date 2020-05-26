package com.example.community_app.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Reviews {
    @GetMapping("/reviews")
    public String reviewPost(){
        return "Hey! I am your review endpoint!";
    }
}
