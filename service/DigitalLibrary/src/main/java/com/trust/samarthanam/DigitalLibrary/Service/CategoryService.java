package com.trust.samarthanam.DigitalLibrary.Service;

import com.trust.samarthanam.DigitalLibrary.Model.Books;
import com.trust.samarthanam.DigitalLibrary.Model.Category;
import com.trust.samarthanam.DigitalLibrary.dao.BooksRepo;
import com.trust.samarthanam.DigitalLibrary.dao.CategoryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Component;

import java.util.*;

@Component
public class CategoryService {


    @Autowired
    private CategoryRepo categoryRepo;
    @Autowired
    MongoTemplate mongoTemplate;
    @Autowired
    private BooksRepo booksRepo;
//--------------------------------------- list all categories-----------------------------------------------------------

    public List<Category> listAll() {
        return categoryRepo.findAll();
    }

//----------------------------------------list all categories ----------------------------------------------------------
    public ArrayList<String> listCategory() {
        ArrayList<String> categories=new ArrayList<String>();
        List<Category> l = categoryRepo.findAll();
        for(Category category: l ){
            categories.add(category.getCategory());
        };
        return categories;
    }


////---------------------------------------list all subcategories of a main category--------------------------------------
    public List<String> listSubCategory(String key) {
        List<Category> l = categoryRepo.findAll();
        ArrayList<String> subcategories = new ArrayList<>();
        for(Category c : l){
            if(c.getCategory().equals(key)){
                subcategories = (ArrayList<String>) c.getSubCategory();
                Collections.sort(subcategories);
            }
        }
        return subcategories;
    }

    public Optional<List<Category>> sortingCategories(){
        Query query = new Query();
        query.with(Sort.by(Sort.Direction.ASC,"category"));
        return Optional.of(mongoTemplate.find(query, Category.class));
    }
    public List<Books> listFormatBooks(String format, String subName) {

        List<Books> test =booksRepo.findAll();
        List<Books> formatBook = new ArrayList<>();
        List<Books> books = new ArrayList<>();
        for (Books book : test){
            List<String> subCategory=book.getSubCategory();
            Map<String, Object> list = book.getFormat();
            if(list.get(format) != null && subCategory.contains(subName)){
                formatBook.add(book);
            }
        }
        return formatBook;
    }

}
