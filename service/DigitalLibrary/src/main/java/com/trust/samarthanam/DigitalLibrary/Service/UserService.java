package com.trust.samarthanam.DigitalLibrary.Service;

import com.trust.samarthanam.DigitalLibrary.Model.Books;
import com.trust.samarthanam.DigitalLibrary.Model.Users;
import com.trust.samarthanam.DigitalLibrary.dao.BooksRepo;
import com.trust.samarthanam.DigitalLibrary.dao.UserRepo;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
public class UserService {

    @Autowired
    private UserRepo userRepo;
    @Autowired
    private BooksRepo booksRepo;

    @Autowired
    private MongoTemplate mongoTemplate;

    public void saveUser(Users user) {
        userRepo.save(user);
    }

    public List<Users> listUsers() {
        return userRepo.findAll();

    }

    public Users getById(String id) {
        List<Users> users = userRepo.findAll();
        for (Users b : users) {
            if (b.getId().equals(id)) {
                return b;
            }
        }
        return null;

    }
}



















