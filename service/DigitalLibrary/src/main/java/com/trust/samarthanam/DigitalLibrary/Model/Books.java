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
    @Field("genre")
    private String genre;
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
//    @Field("time-stamp")
//    private

    public Books() {
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

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getFormat() {
        return format;
    }

    public void setFormat(String format) {
        this.format = format;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
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

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    @Override
    public String toString() {
        return "Books{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", author='" + author + '\'' +
                ", isbn='" + isbn + '\'' +
                ", genre='" + genre + '\'' +
                ", format='" + format + '\'' +
                ", description='" + description + '\'' +
                ", language='" + language + '\'' +
                ", bookUrl='" + bookUrl + '\'' +
                ", bookImage='" + bookImage + '\'' +
                ", count=" + count +
                '}';
    }
}

