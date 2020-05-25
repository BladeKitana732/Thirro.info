package com.example.community_app.controller;

import com.example.community_app.models.Events;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.community_app.services.EventService;


//annotation
@RestController
//this annotation allows me to no longer need to specify endpoint in @GetMapping
@RequestMapping("/events")
public class Event {
    @Autowired
    EventService eventService;

    @GetMapping
    public Iterable<Events> getEvents() {
        return eventService.getEvents();
    }

    @PostMapping
    public Events createEvents(@RequestBody Events events) {
        return eventService.createEvent(events);
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

//now we go to insomnia to input api data to be used :D
//reran to ensure it is still working before starting :D test completed: Started DemoApplication in 14.704 seconds (JVM running for 16.586)