package com.trust.samarthanam.DigitalLibrary.Model;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.List;
@Document(collection="Users")
public class Users {

        @Field("gid")
        private String id;
        @Field ("name")
        private String name;
        @Field ("saved_books")
        private List<String> savedBooks;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<String> getSavedBooks() {
        return savedBooks;
    }

    public Users(String id, String name, List<String> savedBooks) {
        this.id = id;
        this.name = name;
        this.savedBooks = savedBooks;
    }

    public void setSavedBooks(List<String> savedBooks) {
        this.savedBooks = savedBooks;

    }
}
