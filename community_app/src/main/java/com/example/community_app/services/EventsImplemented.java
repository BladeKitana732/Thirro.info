package com.example.community_app.services;

import com.example.community_app.models.Events;
import com.example.community_app.repository.EventRepo;
import org.springframework.beans.factory.annotation.Autowired;

public class EventsImplemented implements EventService{
    @Autowired
    private EventRepo eventRepo;


    @Override
    public Events createEvent(Events events) {
        return null;
    }

    @Override
    public Iterable<Events> getEvents() {
        return null;
    }
}
