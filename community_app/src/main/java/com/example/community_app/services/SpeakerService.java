package com.example.community_app.services;


import com.example.community_app.models.DevSpeaker;

public interface SpeakerService {
    public DevSpeaker createSpeaker(DevSpeaker devSpeaker);

    public Iterable<DevSpeaker> getSpeakerInfo();

}
