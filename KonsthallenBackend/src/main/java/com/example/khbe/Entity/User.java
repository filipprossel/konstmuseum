package com.example.khbe.Entity;

import java.lang.reflect.Field;
import java.sql.Date;
import java.time.OffsetDateTime;
import java.time.OffsetTime;

import jakarta.persistence.*;


@Entity
@Table(name="users")
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
    public String getFirst_name(){return first_name;}
    public String getLast_name(){return last_name;}
    public Date getDate_of_birth(){return date_of_birth;}
    public String getEmail(){return email;}
    public String getPassword(){return password;}
    public Date getJoin_date(){return join_date;}
    public String getUser_description(){return user_description;}
    public Integer getRole_id(){return role_id;}
    public OffsetTime getLast_online(){return last_online;}
    public String getUser_pfp(){return user_pfp;}

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public void setDate_of_birth(Date date_of_birth) {
        this.date_of_birth = date_of_birth;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setJoin_date(Date join_date) {
        this.join_date = join_date;
    }

    public void setLast_online(OffsetTime last_online) {
        this.last_online = last_online;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setRole_id(int role_id) {
        this.role_id = role_id;
    }

    public void setUser_description(String user_description) {
        this.user_description = user_description;
    }

    public void setUser_pfp(String user_pfp) {
        this.user_pfp = user_pfp;
    }
}
