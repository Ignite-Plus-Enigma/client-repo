package com.trust.samarthanam.DigitalLibrary.Controller;

import com.trust.samarthanam.DigitalLibrary.Model.Books;
import com.trust.samarthanam.DigitalLibrary.Service.HomeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class HomePageController {
    @Autowired
    private HomeService homeService;

//-------------------------------------get books by language-----------------------------------------------------------
    @GetMapping("/language/{key}")
    public Collection<Books> findBooksByLanguage(@PathVariable String key){
        return homeService.findBooksByLanguage(key);
    }
//--------------------------------------get books by format-------------------------------------------------------------
    @GetMapping("/format/{key}")
    public Collection<Books> findBooksByFormat(@PathVariable String key){
        return homeService.findBooksByFormat(key);
    }


//----------------------------------get books by category---------------------------------------------------------------
    @GetMapping("/books/category/{key}")
    public Collection<Books> findBooksByCategory(@PathVariable String key){
        return homeService.findBooksByCategory(key);
    }

    @GetMapping("/books/recentlyadded")
    public Optional<List<Books>> findRecentlyAddedBooks(){
        return homeService.findRecentlyAddedBooks();
    }
}
