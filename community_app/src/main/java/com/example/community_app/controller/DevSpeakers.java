package com.example.community_app.controller;

import com.example.community_app.models.DevSpeaker;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/dev_speakers")
public class DevSpeakers {
    @GetMapping
    public Iterable<DevSpeaker> getSpeakerInfo(){
        return speakerService.getSpeakerInfo();
    }
}



//{
// speaker_name: String,
// about_speaker: String
//        }