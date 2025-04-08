package com.example.khbe.Entity;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
//@RequestMapping("KonsthallenBackend/src/main/java/com/example/khbe/Entity/Users")
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;
    @PostMapping("/create")
    public User createUser(@RequestBody User user) {
        return userService.saveUser(user); // Calls the service to save the user
    }
    @GetMapping
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }
}
