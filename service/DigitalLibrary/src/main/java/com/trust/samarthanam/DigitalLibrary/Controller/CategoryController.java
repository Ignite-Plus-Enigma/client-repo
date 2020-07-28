package com.trust.samarthanam.DigitalLibrary.Controller;

import com.trust.samarthanam.DigitalLibrary.Model.Category;
import com.trust.samarthanam.DigitalLibrary.Service.BookService;
import com.trust.samarthanam.DigitalLibrary.Service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;
    @GetMapping("/")
    public List<Category> findAll(){
       return categoryService.listBooks();
    }
    @GetMapping("/category")
    public List<String> findAllCategory(){
        return categoryService.listCategory();
    }
}
