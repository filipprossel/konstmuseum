package com.example.khbe;

import com.example.khbe.Entity.User;
import com.example.khbe.Entity.UserRepository;
import com.example.khbe.Entity.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;


import java.time.LocalDate;
import java.time.OffsetTime;
import java.time.ZoneOffset;
import java.sql.Date;

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
        LocalDate birthDate = LocalDate.of(2004, 12, 12);
        LocalDate joinDate = LocalDate.of(2004, 12, 12); // ändra till dagens datum

        User user = new User("BOber", "kurva", Date.valueOf(birthDate), "filipprossel@hotmail.com", "passwrod", Date.valueOf(joinDate), "hello im bober", 1,     OffsetTime.parse("12:00:00+02:00"), "Bober png"    );
        userService.saveUser(user);
        System.out.println(user + "hejejejejej");
    }

}
