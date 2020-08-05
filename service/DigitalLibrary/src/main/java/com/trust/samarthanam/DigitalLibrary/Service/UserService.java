package com.trust.samarthanam.DigitalLibrary.Service;

import com.trust.samarthanam.DigitalLibrary.Model.User;
import com.trust.samarthanam.DigitalLibrary.dao.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class UserService {
//    @Autowired
//    private UserRepo userRepo;
//
//    @Autowired
//    MongoTemplate mongoTemplate;
//
//
//    public List<User> getAllUsers(){
//        return userRepo.findAll();
//    }
//
//    public User getUserById(String id){
//        List<User> users = userRepo.findAll();
//        for(User user: users){
//            if(user.getEmailId().equals(id)){
//                return user;
//            }
//        }
//        return null;
//    }
}