package com.example.community_app.models;

import javax.persistence.*;

//this annotation specifies that the class is an entity and is mapped to a database table.
@Entity
@Table(name = "event_info")
public class Events {
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

}
