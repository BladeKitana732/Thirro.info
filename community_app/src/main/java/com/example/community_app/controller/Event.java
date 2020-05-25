package com.example.community_app.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//annotation
@RestController
//this annotation allows me to no longer need to specify endpoint in @GetMapping
@RequestMapping("/events")
public class Event {
    @GetMapping
    public String getEvents() {
        return "Hey! this is your event endpoint.";
    }

}
