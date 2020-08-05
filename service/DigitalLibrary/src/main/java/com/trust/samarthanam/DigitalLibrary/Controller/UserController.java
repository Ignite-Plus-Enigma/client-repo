package com.trust.samarthanam.DigitalLibrary.Controller;

import com.mongodb.client.result.UpdateResult;
import com.trust.samarthanam.DigitalLibrary.Model.Books;
import com.trust.samarthanam.DigitalLibrary.Model.Users;
import com.trust.samarthanam.DigitalLibrary.Service.UserService;
import com.trust.samarthanam.DigitalLibrary.dao.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class UserController {
    @Autowired
    private UserService userService;

    private MongoTemplate mongoTemplate;

    private UserRepo userRepo;

    @PostMapping("/saveUser")
    public String addUser(@RequestBody Users user) {
        userService.saveUser(user);
        return "User created";
    }
    @GetMapping("/User")
    public ResponseEntity<List<Users>> getBooks() {
        return ResponseEntity.ok().body(userService.listUsers());
        }

    @GetMapping("/UserId={id}/BooksId={bookId}")
    public String saveBooks( @PathVariable String id , @PathVariable String bookId){
        Users user=userService.getById(id);
        List<String> l=user.getSavedBooks();
        l.add(bookId);
        user.setSavedBooks(l);

//      Query q=new Query(Criteria.where("id").is(id));
//      Update u=new Update();
//      u.set("savedBooks",l);
//      mongoTemplate.findAndModify(q,u,Users.class);
        return "Book saved";

    }
    }


