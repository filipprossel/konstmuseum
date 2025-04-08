package com.example.khbe.Entity;

import java.sql.Date;
import java.time.OffsetDateTime;
import java.time.OffsetTime;

import jakarta.persistence.*;


@Entity
@Table(name="Users")
public class User {


    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int user_id;
    private String first_name;
    private String last_name;
    private Date date_of_birth;
    private String email;
    private String password;
    private Date join_date;
    private String user_description;
    private OffsetTime last_online;
    @JoinColumn
    private int role_id;
    private String user_pfp;

    protected User(){}
    public User(
        String first_name, 
        String lastname, 
        Date date_of_birth, 
        String email, 
        String password, 
        Date join_date, 
        String user_description, 
        int role_id, 
        OffsetTime last_online,
        String user_pfp
    ){
        this.first_name = first_name;
        this.last_name = lastname;
        this.date_of_birth = date_of_birth;
        this.email = email;
        this.password = password;
        this.join_date = join_date;
        this.user_description = user_description;
        this.role_id = role_id;
        this.last_online = last_online;
        this.user_pfp = user_pfp;
    }

    public Integer getId(){
        return user_id;
    }



}
