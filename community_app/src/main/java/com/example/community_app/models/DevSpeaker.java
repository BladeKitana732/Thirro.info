package com.example.community_app.models;

import javax.persistence.*;

@Entity
@Table(name = "speaker")
public class DevSpeaker {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int speakerid;

    @Column
    private String speaker_name;

    @Column
    private String about_speaker;

    //constructor
    public DevSpeaker(){}

    //getters and setters


    public void setSpeakerid(int speakerid) {
        this.speakerid = speakerid;
    }

    public int getSpeakerid() {
        return speakerid;
    }

    public void setSpeaker_name(String speaker_name) {
        this.speaker_name = speaker_name;
    }

    public String getSpeaker_name() {
        return speaker_name;
    }

    public void setAbout_speaker(String about_speaker) {
        this.about_speaker = about_speaker;
    }

    public String getAbout_speaker() {
        return about_speaker;
    }

}

//resource of where i am getting info for api data on speakers: https://www.developerweek.com/conference/speakers/