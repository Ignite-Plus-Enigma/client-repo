package com.trust.samarthanam.DigitalLibrary.Model;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.List;

@Document(collection = "Category")
public class Category {
    @Field("category")
    private String category;
    @Field ("sub_category")
    private List<String> subCategory;

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

    @Override
    public String toString() {
        return "Category{" +
                "category='" + category + '\'' +
                ", subCategory=" + subCategory +
                '}';
    }
}
