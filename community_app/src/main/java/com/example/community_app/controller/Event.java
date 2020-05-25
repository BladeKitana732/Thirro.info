package com.example.community_app.controller;

import com.example.community_app.models.Events;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//annotation
@RestController
//this annotation allows me to no longer need to specify endpoint in @GetMapping
@RequestMapping("/events")
public class Event {

//    @GetMapping
//    public String getEvents() {
//        return "Hey! this is your event endpoint.";
//    }

    @GetMapping
    public Iterable<Events> getEvents() {
        return eventService.getEvents();
    }








}


//object api should print something like this
//{
//  eventid: int,
//  event_name: String,
//  event_location: String,
//  event_date: Srting,
//  event_summary: String
//}
