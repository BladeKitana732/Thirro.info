package com.example.community_app.controller;

import com.example.community_app.models.DevSpeaker;
import com.example.community_app.services.SpeakerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/dev_speakers")
public class DevSpeakers {
    @Autowired
    SpeakerService speakerService;

    @GetMapping
    public Iterable<DevSpeaker> getSpeakerInfo(){
        return speakerService.getSpeakerInfo();
    }

    @PostMapping
    public DevSpeaker createSpeaker(@RequestBody DevSpeaker devSpeaker){
        return speakerService.createSpeaker(devSpeaker);
    }

}



//{
// speaker_name: String,
// about_speaker: String
//        }