package com.example.khbe;

import com.example.khbe.Entity.User;
import com.example.khbe.Entity.UserRepository;
import com.example.khbe.Entity.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class KhbeApplication implements CommandLineRunner {
    @Autowired
    private UserService userService;
    public static void main(String[] args) {
        SpringApplication.run(KhbeApplication.class, args);
    }
    //Test för att se att en användare kan sparas
    @Override
    public void run(String...args) throws Exception{
        User user = new User("Test2");
        userService.saveUser(user);
        System.out.println(user);
    }

}
