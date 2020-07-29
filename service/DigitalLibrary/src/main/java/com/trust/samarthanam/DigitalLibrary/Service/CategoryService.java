package com.trust.samarthanam.DigitalLibrary.Service;

import com.trust.samarthanam.DigitalLibrary.Model.Books;
import com.trust.samarthanam.DigitalLibrary.Model.Category;
import com.trust.samarthanam.DigitalLibrary.dao.BooksRepo;
import com.trust.samarthanam.DigitalLibrary.dao.CategoryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class CategoryService {
    ArrayList<String> categories=new ArrayList<String>();
    ArrayList<String> subCategories=new ArrayList<String>();
    @Autowired
    private CategoryRepo categoryRepo;

    public List<Category> listAll() {
        return categoryRepo.findAll();
    }

    public ArrayList<String> listCategory() {
        List<Category> l = categoryRepo.findAll();
        System.out.println(l);
        for(Category category: l ){
            categories.add(category.getCategory());
        };
        return categories;
    }
    public List<String> listSubCategory(String key) {
        List<Category> l = categoryRepo.findAll();


        for(Category category: l ){
            if(category.getCategory().equals(key)){
                subCategories.add(category.getSubCategory());
            }
        }
        return subCategories;
    }
}
