package com.Entity;

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



}
