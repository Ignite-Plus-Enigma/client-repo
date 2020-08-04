package com.trust.samarthanam.DigitalLibrary.Service;

import com.trust.samarthanam.DigitalLibrary.Model.User;
import com.trust.samarthanam.DigitalLibrary.dao.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class UserService {
    @Autowired
    private UserRepo userRepo;

    @Autowired
    MongoTemplate mongoTemplate;


    public List<User> getAllUsers(){
        return userRepo.findAll();
    }

    public Optional<User> getUserById(String id){
        return userRepo.findById(id);
    }
}