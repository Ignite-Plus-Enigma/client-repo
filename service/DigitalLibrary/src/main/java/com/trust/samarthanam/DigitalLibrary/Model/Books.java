package com.trust.samarthanam.DigitalLibrary.Model;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.index.TextIndexed;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.data.mongodb.core.mapping.TextScore;
@Document(collection = "Books")
public class Books {
    @Field("id")
    private String id;
    @Field("name")
    private String name;
    @Field("isbn")
    private String isbn;
    @Field("author")
    private String author;
    @Field("format")
    private String format;
    @Field("language")
    private String language;
    @Field("book_url")
    private String bookUrl;
    @Field("book_image")
    private String bookImage;
    @Field("description")
    private String description;
    @Field("count")
    private int count;
    @Field("Category")
    private String category;
    @Field("subCategory")
    private String subCategory;

    public Books(){}

    public Books(String id, String name, String isbn, String author, String format, String language, String bookUrl, String bookImage, String description, int count, String category, String subCategory) {
        this.id = id;
        this.name = name;
        this.isbn = isbn;
        this.author = author;
        this.format = format;
        this.language = language;
        this.bookUrl = bookUrl;
        this.bookImage = bookImage;
        this.description = description;
        this.count = count;
        this.category = category;
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

    public String getFormat() {
        return format;
    }

    public void setFormat(String format) {
        this.format = format;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public String getBookUrl() {
        return bookUrl;
    }

    public void setBookUrl(String bookUrl) {
        this.bookUrl = bookUrl;
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

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getSubCategory() {
        return subCategory;
    }

    public void setSubCategory(String subCategory) {
        this.subCategory = subCategory;
    }


    @Override
    public String toString() {
        return "Books{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", isbn='" + isbn + '\'' +
                ", author='" + author + '\'' +
                ", format='" + format + '\'' +
                ", language='" + language + '\'' +
                ", bookUrl='" + bookUrl + '\'' +
                ", bookImage='" + bookImage + '\'' +
                ", description='" + description + '\'' +
                ", count=" + count +
                ", category='" + category + '\'' +
                ", subCategory='" + subCategory + '\'' +
                '}';
    }
}



