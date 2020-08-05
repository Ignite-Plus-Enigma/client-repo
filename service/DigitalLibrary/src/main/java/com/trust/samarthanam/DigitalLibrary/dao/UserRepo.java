package com.trust.samarthanam.DigitalLibrary.dao;


import com.trust.samarthanam.DigitalLibrary.Model.Users;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends MongoRepository<Users,String> {


}
