package com.example.community_app.services;

import com.example.community_app.models.Events;
//connected with model file to create event as it should be in model file
//this interface represents a collection of objects which is iterable - meaning which can be iterated
public interface EventService {
    public Events createEvent(Events events);

    public Iterable<Events> getEvents();
}
