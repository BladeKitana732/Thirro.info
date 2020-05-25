package com.example.community_app.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

//annotation
@RestController
public class Event {
    @GetMapping("/events")
    public String heyEvents(){
        return "Hey! this is your event endpoint.";
    }

}
