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
        System.out.println("Test");
        //Förslag på felhantering?
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

    public User editUser(HashMap<String, String> newData){
            User oldUser = userRepository.findByEmailAndPassword(newData.get("email"), newData.get("password"));

            if(!newData.get("first_name").isEmpty()){
                oldUser.setFirst_name(newData.get("first_name"));
            }
            if(!newData.get("last_name").isEmpty()){
                oldUser.setLast_name(newData.get("last_name"));
            }
            if(!newData.get("email").isEmpty()){
                oldUser.setEmail(newData.get("email"));
            }
            if(!newData.get("user_description").isEmpty()){
                oldUser.setUser_description(newData.get("user_description"));
            }
            return userRepository.save(oldUser);
    }
}

