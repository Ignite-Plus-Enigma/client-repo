package com.trust.samarthanam.DigitalLibrary.Service;

import com.trust.samarthanam.DigitalLibrary.Model.Books;
import com.trust.samarthanam.DigitalLibrary.Model.Category;
import com.trust.samarthanam.DigitalLibrary.dao.BooksRepo;
import com.trust.samarthanam.DigitalLibrary.dao.CategoryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class CategoryService {
    @Autowired
    private CategoryRepo categoryRepo;

    public List<Category> listBooks() {
        return categoryRepo.findAll();
    }

//    public List<String> listCategory() {
//        List<Category> l = categoryRepo.findAll();
//        List<String> categories = null;
//        for(Category category: l ){
//            categories.add(category.getCategory());
//        }
//        return categories;
//    }
}
