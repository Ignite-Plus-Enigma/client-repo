package com.trust.samarthanam.elastic;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;

@Document(indexName="digital-library",type="books",shards=2)
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Books {
        @Id

        private String id;

        private String name;
//
//        private String isbn;

        private String author;

//        private String format;
//
//        private String language;
//
//        private String bookUrl;
//
//        private String bookImage;
//
//        private String description;
//
//        private int count;
//
//        private String subCategory;

//        public Books() {
//        }

//        public String getId() {
//            return id;
//        }
//
//        public void setId(String id) {
//            this.id = id;
//        }
//
//        public String getName() {
//            return name;
//        }
//
//        public void setName(String name) {
//            this.name = name;
//        }
//
//        public String getAuthor() {
//            return author;
//        }
//
//        public void setAuthor(String author) {
//            this.author = author;
//        }
//
//        public String getIsbn() {
//            return isbn;
//        }
//
//        public void setIsbn(String isbn) {
//            this.isbn = isbn;
//        }
//
//
//        public String getFormat() {
//            return format;
//        }
//
//        public void setFormat(String format) {
//            this.format = format;
//        }
//
//        public String getDescription() {
//            return description;
//        }
//
//        public void setDescription(String description) {
//            this.description = description;
//        }
//
//        public String getLanguage() {
//            return language;
//        }
//
//        public void setLanguage(String language) {
//            this.language = language;
//        }
//
//        public String getBookUrl() {
//            return bookUrl;
//        }
//
//        public void setBookUrl(String bookUrl) {
//            this.bookUrl = bookUrl;
//        }
//
//        public String getBookImage() {
//            return bookImage;
//        }
//
//        public void setBookImage(String bookImage) {
//            this.bookImage = bookImage;
//        }
//
//        public int getCount() {
//            return count;
//        }
//
//        public void setCount(int count) {
//            this.count = count;
//        }
//
//        public String getSubCategory() {
//            return subCategory;
//        }
//
//        public void setSubCategory(String subCategory) {
//            this.subCategory = subCategory;
//        }
//
//        @Override
//        public String toString() {
//            return "Books{" +
//                    "id='" + id + '\'' +
//                    ", name='" + name + '\'' +
//                    ", isbn='" + isbn + '\'' +
//                    ", author='" + author + '\'' +
//                    ", format='" + format + '\'' +
//                    ", language='" + language + '\'' +
//                    ", bookUrl='" + bookUrl + '\'' +
//                    ", bookImage='" + bookImage + '\'' +
//                    ", description='" + description + '\'' +
//                    ", count=" + count +
//                    ", subCategory='" + subCategory + '\'' +
//                    '}';
//        }

    }

