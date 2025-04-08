package com.example.khbe.Entity;

import jakarta.persistence.*;


@Entity
@Table(name="Users")
public class User {


    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int user_id;
    private String first_name;
    private String last_name;
    private String date_of_birth;
    private String email;
    private String password;
    private String join_date;
    private String user_description;
    private String last_online;
    @JoinColumn
    private int role_id;
    private String user_pfp;

    protected User(){}
    public User(String first_name){
        this.first_name = first_name;
    }
    public User(String first_name, String last_name, String date_of_birth, String email, String password, String join_date, String user_description, String last_online, int role_id, String user_pfp){
        this.first_name = first_name;
        this.last_name = last_name;
        this.date_of_birth = date_of_birth;
        this.email = email;
        this.password = password;
        this.join_date = join_date;
        this.user_description = user_description;
        this.last_online = last_online;
        this.role_id = role_id;
        this.user_pfp = user_pfp;
    }
    public Integer getId(){
        return user_id;
    }


}
