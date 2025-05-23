package com.example.khbe.Entity;

import jakarta.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.NoSuchElementException;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;


    public User saveUser(User user){
        try{
            return userRepository.save(user);
        }
        catch (DataIntegrityViolationException DIVE){
            System.err.println(DIVE);
            return null;
        }
    }
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User loginUser(String email, String password) {
        return userRepository.findByEmailAndPassword(email, password);
    }

    public User editUser(HashMap<String, String> newData){//Metod för att ändra information gällande en användare.
        //Metoden undersöker vilken nyckel som har ett värde för att bestämma vad för information som ska ändras.

            User oldUser = userRepository.findByEmailAndPassword(newData.get("email"), newData.get("password"));

            if(!newData.get("first_name").isEmpty()){
                oldUser.setFirst_name(newData.get("first_name"));
            }
            else if(!newData.get("last_name").isEmpty()){
                oldUser.setLast_name(newData.get("last_name"));
            }
            else if(!newData.get("user_description").isEmpty()){
                oldUser.setUser_description(newData.get("user_description"));
            }
            else if(!newData.get("email").isEmpty()){
                oldUser.setEmail(newData.get("email"));
            }
            return userRepository.save(oldUser);
    }
}

