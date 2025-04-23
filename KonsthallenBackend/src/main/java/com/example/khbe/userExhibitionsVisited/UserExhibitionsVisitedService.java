package com.example.khbe.userExhibitionsVisited;

import com.example.khbe.Entity.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserExhibitionsVisitedService {
    @Autowired
    private UserExhibitionsVisitedRepository userExhibitionsVisitedRepository;
}
