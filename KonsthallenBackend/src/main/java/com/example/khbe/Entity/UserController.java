package com.example.khbe.Entity;
import java.util.HashMap;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
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

    @PostMapping("/login")
    public User loginUser(@RequestBody HashMap<String, String> loginData) {
        String email = loginData.get("email");
        String password = loginData.get("password");
        System.out.println("hej" + " " + email + " " + password);
        return userService.loginUser(email, password);
    }
    @CrossOrigin(origins = "*")
    @PostMapping("/edit")
    public User editUser(@RequestBody HashMap<String, String> userData) {
        System.out.println("Test");
        return userService.editUser(userData);
    }


}
