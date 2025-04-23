package com.example.khbe.userExhibitionsVisited;

import com.example.khbe.Entity.User;
import com.example.khbe.Exhibition.Exhibition;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/users/exhibitions")
public class UserExhibitionsVisitedController {
    @Autowired
    private UserExhibitionsVisitedService userExhibitionsVisitedService;
    @GetMapping
    public List<UserExhibitionsVisitedDTO> getAllExhibitionsVisited(@RequestParam int user_id){
        return userExhibitionsVisitedService.getAllExhibitionsVisited(user_id);

    }
}
