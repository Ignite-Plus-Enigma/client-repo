package com.trust.samarthanam.DigitalLibrary.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.List;

@Document(collection = "User")

public class User {
    @Id
    @Field("_id")
    private String emailId;
    @Field("name")
    private String Name;
    @Field("saved_books")
    private List<String> savedBooks;


    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public List<String> getSavedBooks() {
        return savedBooks;
    }

    public void setSavedBooks(List<String> savedBooks) {
        this.savedBooks = savedBooks;
    }

    @Override
    public String toString() {
        return "{" +
                "emailId='" + emailId + '\'' +
                ", Name='" + Name + '\'' +
                ", savedBooks=" + savedBooks +
                '}';
    }
}
