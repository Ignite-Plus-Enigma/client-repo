package com.trust.samarthanam.DigitalLibrary.Service;

import com.trust.samarthanam.DigitalLibrary.Model.Books;
import com.trust.samarthanam.DigitalLibrary.Model.Category;
import com.trust.samarthanam.DigitalLibrary.Model.User;
import com.trust.samarthanam.DigitalLibrary.dao.BooksRepo;
import com.trust.samarthanam.DigitalLibrary.dao.CategoryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class UploadService {
//    @Autowired
//    NextSequenceService nextSequenceService;
    @Autowired
    BooksRepo booksRepo;
    @Autowired
    CategoryRepo categoryRepo;

    public Books addBook(Books newBook) {
//        newBook.setId(nextSequenceService.getNextSequence(Books.SEQUENCE_NAME));
        booksRepo.save(newBook);

        return newBook;

    }

    public Category addCategory(Category newCat) {
        categoryRepo.save(newCat);
        return newCat;

    }

    public Category addoldCatAndnewSubCat(Category newCat) {
//        String category = newCat.getCategory();
//        List<String> subCategory = newCat.getSubCategory();
//        List<String> subCat = new ArrayList<>();
//        List<Category> l = categoryRepo.findAll();
//        Category category1 = new Category();
//        for (Category cat : l) {
//            if (cat.getCategory().equals(category))
//                subCat = cat.getSubCategory();
//        }
//        for (String s : subCat) {
//            subCategory.add(s);
//        }
//        for (Category c : l) {
//            if (c.getCategory().equals(category)) {
//                c.setSubCategory(subCategory);
//                 categoryRepo.save(c);
//            }
//        }
//        return null;
        String Cat = newCat.getCategory();
        List<String> subcat = newCat.getSubCategory();
        List<Category> c = categoryRepo.findAll();
        List<String> y = new ArrayList<>();

        for (Category x : c) {
            if (x.getCategory().equals(Cat)) {
                y = x.getSubCategory();
            }
        }
        for (String s : subcat) {
            y.add(s);
        }
        for (Category x : c) {
            if (x.getCategory().equals(Cat)) {
                categoryRepo.save(x);
            }




        }
        return null;
    }
}
