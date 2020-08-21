package com.trust.samarthanam.DigitalLibrary.Controller;

import com.trust.samarthanam.DigitalLibrary.Model.Books;
import com.trust.samarthanam.DigitalLibrary.Model.Category;
import com.trust.samarthanam.DigitalLibrary.Model.User;
import com.trust.samarthanam.DigitalLibrary.Service.BookService;
import com.trust.samarthanam.DigitalLibrary.Service.UploadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins="http://localhost:3002")
@RequestMapping("/api/v1")
public class UploadController {

    @Autowired
    UploadService uploadService;
    @PostMapping("/book/add")
    public Books addNewBook(@RequestBody Books newBook){

        return uploadService.addBook(newBook);
    }
    @PostMapping("/newCatAndSubcat/add")
    public Category addNewCategory(@RequestBody Category newCat){
        return uploadService.addCategory(newCat);
    }
    @PutMapping("/oldCatAndNewsubCat/add")
    public Category addNewCategoryOldsubCat(@RequestBody Category newCat) {
        return uploadService.addoldCatAndnewSubCat(newCat);
    }


}