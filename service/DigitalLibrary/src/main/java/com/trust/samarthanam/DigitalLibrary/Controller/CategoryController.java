package com.trust.samarthanam.DigitalLibrary.Controller;

import com.trust.samarthanam.DigitalLibrary.Model.Category;
import com.trust.samarthanam.DigitalLibrary.Service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    @GetMapping("/categories")
    public List<Category> getAll(){
        return categoryService.listAll();
    }

    //------------------------------------get all categories------------------------------------------------------------
    @GetMapping("/category")
    public List<String> findAllCategory(){
        return categoryService.listCategory();
    }

    //--------------------------------get all subcategory of a main category--------------------------------------------
    @GetMapping("/subcategory/{key}")
    public List<String> findAllSubCategory(@PathVariable String key){
        return categoryService.listSubCategory(key);
    }
}
