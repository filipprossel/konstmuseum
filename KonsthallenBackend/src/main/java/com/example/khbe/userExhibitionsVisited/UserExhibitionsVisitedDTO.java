package com.example.khbe.userExhibitionsVisited;

import java.sql.Date;
import java.time.LocalDateTime;


public class UserExhibitionsVisitedDTO {

    private String exhibition_name;
    private LocalDateTime exhibition_start_date;
    private String exhibition_desc;
    private Date visited_date;
    private int exhibition_id;

    public Date getVisited_date() {
        return visited_date;
    }

    public LocalDateTime getExhibition_date() {
        return exhibition_start_date;
    }

    public String getExhibition_desc() {
        return exhibition_desc;
    }

    public String getExhibition_name() {
        return exhibition_name;
    }

    public void setVisited_date(Date visited_date) {
        this.visited_date = visited_date;
    }

    public void setExhibition_start_date(LocalDateTime exhibition_date) {
        this.exhibition_start_date = exhibition_date;
    }

    public void setExhibition_desc(String exhibition_desc) {
        this.exhibition_desc = exhibition_desc;
    }

    public void setExhibition_name(String exhibition_name) {
        this.exhibition_name = exhibition_name;
    }
    public void setExhibition_id(int exhibition_id) {
        this.exhibition_id = exhibition_id;
    }

    public int getExhibition_id() {
        return exhibition_id;
    }
}
