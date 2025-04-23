package com.example.khbe.userExhibitionsVisited;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

import java.io.Serializable;

@Embeddable
public class UserExhibitionsVisitedKey implements Serializable {
    @Column(name = "user_id")
    int user_id;

    @Column(name = "exhibition_id")
    int exhibition_id;

    public int getExhibition_id() {
        return exhibition_id;
    }
    public int getUser_id() {
        return user_id;
    }
    public void setExhibition_id(int exhibition_id) {
        this.exhibition_id = exhibition_id;
    }
    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }
}
