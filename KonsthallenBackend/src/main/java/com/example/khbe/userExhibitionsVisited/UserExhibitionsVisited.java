package com.example.khbe.userExhibitionsVisited;

import com.example.khbe.Entity.User;
import com.example.khbe.Exhibition.Exhibition;
import jakarta.persistence.*;

import java.sql.Date;

@Entity
@Table(name="user_exhibitions_visited")
public class UserExhibitionsVisited {
    @EmbeddedId
    UserExhibitionsVisitedKey id;

    @ManyToOne
    @MapsId("user_id")
    @JoinColumn(name = "user_id")
    User user;

    @ManyToOne
    @MapsId("exhibition_id")
    @JoinColumn(name = "exhibition_id")
    Exhibition exhibition;

    Date visited_date;

    public Date getVisited_date() {
        return visited_date;
    }

    public void setVisited_date(Date visited_date) {
        this.visited_date = visited_date;
    }

}
