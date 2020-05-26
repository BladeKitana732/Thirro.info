package com.example.community_app.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DevSpeakers {
    @GetMapping("/dev_speakers")
    public String getSpeakerInfo(){
        return "Hey! I am your last model/table. Yayy!";
    }
}
