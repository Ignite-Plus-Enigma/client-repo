package com.trust.samarthanam.DigitalLibrary.Controller;

import com.trust.samarthanam.DigitalLibrary.Model.Books;
import com.trust.samarthanam.DigitalLibrary.Model.User;
import com.trust.samarthanam.DigitalLibrary.Service.HomeService;
import com.trust.samarthanam.DigitalLibrary.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class UserController {
    @Autowired
    private UserService userService;


    @GetMapping("/users")
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }

    @GetMapping("/user/{id}/books")
    public List<Books> getAllBooksOfUser(@PathVariable String id){
        Optional<User> user = userService.getUserById(id);
        if(user.isPresent()){
            System.out.println(user);;
        }
        return null;
    }
}
