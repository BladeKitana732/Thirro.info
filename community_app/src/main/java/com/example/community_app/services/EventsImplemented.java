package com.example.community_app.services;

import com.example.community_app.models.Events;
import com.example.community_app.repository.EventRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EventsImplemented implements EventService{
    @Autowired//to inject dependency
    private EventRepo eventRepo;


    @Override
    public Events createEvent(Events events) {
        return eventRepo.save(events);
    }

    @Override
    public Iterable<Events> getEvents() {
        return eventRepo.findAll();
    }
}

//why override? b.c when we implement an interface we have to give access to methods
