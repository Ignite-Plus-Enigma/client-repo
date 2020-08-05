package com.trust.samarthanam.DigitalLibrary.Model;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.index.TextIndexed;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.data.mongodb.core.mapping.TextScore;

import java.util.List;
import java.util.Map;


@Document(collection = "Books")

public class Books {
    @Field("_id")
    private String id;
    @Field("name")
    private String name;
    @Field("isbn")
    private String isbn;
    @Field("author")
    private String author;
    @Field("format")
    private Map<String,Object> format;
    @Field("language")
    private String language;
    @Field("book_image")
    private String bookImage;
    @Field("description")
    private String description;
    @Field("views")
    private int views;
    @Field("category")
    private String category;
    @Field("sub_category")
    private List<String> subCategory;
    @Field("rating")
    private int rating;


    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public List<String> getSubCategory() {
        return subCategory;
    }

    public void setSubCategory(List<String> subCategory) {
        this.subCategory = subCategory;
    }

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

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public Map<String, Object> getFormat() {
        return format;
    }

    public void setFormat(Map<String, Object> format) {
        this.format = format;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public String getBookImage() {
        return bookImage;
    }

    public void setBookImage(String bookImage) {
        this.bookImage = bookImage;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getViews() {
        return views;
    }

    public void setViews(int views) {
        this.views = views;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    @Override
    public String toString() {
        return "Books{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", isbn='" + isbn + '\'' +
                ", author='" + author + '\'' +
                ", format=" + format +
                ", language='" + language + '\'' +
                ", bookImage='" + bookImage + '\'' +
                ", description='" + description + '\'' +
                ", views=" + views +
                ", category='" + category + '\'' +
                ", subCategory=" + subCategory +
                ", rating=" + rating +
                '}';
    }
}


