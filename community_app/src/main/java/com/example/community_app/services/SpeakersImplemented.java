package com.example.community_app.services;

import com.example.community_app.models.DevSpeaker;
import com.example.community_app.repository.SpeakerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SpeakersImplemented implements SpeakerService{
    @Autowired
    private SpeakerRepo speakerRepo;


    @Override
    public DevSpeaker createSpeaker(DevSpeaker devSpeaker) {
        return speakerRepo.save(devSpeaker);
    }

    @Override
    public Iterable<DevSpeaker> getSpeakerInfo() {
        return speakerRepo.findAll();
    }



}
