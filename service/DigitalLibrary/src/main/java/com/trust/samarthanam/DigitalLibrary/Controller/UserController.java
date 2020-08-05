package com.trust.samarthanam.DigitalLibrary.Controller;

import com.trust.samarthanam.DigitalLibrary.Model.Books;
import com.trust.samarthanam.DigitalLibrary.Model.User;
import com.trust.samarthanam.DigitalLibrary.Service.BookService;
import com.trust.samarthanam.DigitalLibrary.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private BookService bookService;


    @GetMapping("/users")
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }

    @GetMapping("/user/{id}/books")
    public List<Books> getAllBooksOfUser(@PathVariable String id){


       ArrayList<Books> saved = new ArrayList<>();
        User user = userService.getUserById(id);
        if(user != null){
            System.out.println(user.getSavedBooks());
            List<String> booksId = user.getSavedBooks();
            for(String bookid: booksId){
                if(bookService.getById(bookid)!=null){
                    saved.add(bookService.getById(bookid));
                }
            }
        }
       else{
            System.out.println("User not found!");
        }
       return saved;
    }
}
