package com.trust.samarthanam.DigitalLibrary.Controller;

import com.trust.samarthanam.DigitalLibrary.Model.Category;
import com.trust.samarthanam.DigitalLibrary.Service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/api/v1")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    @GetMapping("/categories")
    public Optional<List<Category>> getAll(){
        return categoryService.sortingCategories();
    }

    //------------------------------------get all categories------------------------------------------------------------
    @GetMapping("/category")
    public List<String> findAllCategory(){
        return categoryService.listCategory();
    }

    //--------------------------------get all subcategory of a main category--------------------------------------------
    @GetMapping("/category/{key}/subcategory")
    public List<String> findAllSubCategory(@PathVariable String key){
        return categoryService.listSubCategory(key);
    }
}
