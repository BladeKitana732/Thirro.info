package com.example.community_app.models;

import org.springframework.boot.autoconfigure.condition.ConditionalOnBean;

import javax.persistence.*;

@Entity
@Table(name = "reviews")
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int messageid;

    @Column
    private String username;

    @Column
    private String message;

    //constructor
    public Review() {}

    public void setMessageid(int messageid) {
        this.messageid = messageid;
    }

    public int getMessageid() {
        return messageid;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getUsername() {
        return username;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

}
