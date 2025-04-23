package com.example.khbe.userExhibitionsVisited;

import com.example.khbe.Entity.User;
import com.example.khbe.Exhibition.Exhibition;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/users/exhibitions")
public class UserExhibitionsVisitedController {
    @Autowired
    private UserExhibitionsVisitedService userExhibitionsVisitedService;
    @GetMapping
    public List<Exhibition> getAllExhibitionsVisited(List<Exhibition> exhibitionList){
        return exhibitionList;
    }
}
