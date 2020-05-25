package com.example.community_app.models;

import javax.persistence.*;

//this annotation specifies that the class is an entity and is mapped to a database table.
@Entity
@Table(name = "event_info")
public class Events {

    //explanation of annotations used below: https://stackoverflow.com/questions/20603638/what-is-the-use-of-annotations-id-and-generatedvaluestrategy-generationtype
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int eventid;

    @Column
    private String event_name;

    @Column
    private String event_location;

    @Column
    private String event_date;

    @Column
    private String event_summary;

    //constructor for object
    public Events(){ }

    //getters and setters


    public void setEventid(int eventid) {
        this.eventid = eventid;
    }

    public int getEventid() {
        return eventid;
    }

    public String getEvent_name() {
        return event_name;
    }

    public void setEvent_name(String event_name) {
        this.event_name = event_name;
    }

    public String getEvent_date() {
        return event_date;
    }

    public void setEvent_date(String event_date) {
        this.event_date = event_date;
    }

    public String getEvent_location() {
        return event_location;
    }

    public void setEvent_location(String event_location) {
        this.event_location = event_location;
    }

    public String getEvent_summary() {
        return event_summary;
    }

    public void setEvent_summary(String event_summary) {
        this.event_summary = event_summary;
    }

}

