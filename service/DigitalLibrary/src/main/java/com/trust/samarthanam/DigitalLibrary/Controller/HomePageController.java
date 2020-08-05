package com.trust.samarthanam.DigitalLibrary.Controller;

import com.trust.samarthanam.DigitalLibrary.Model.Books;
import com.trust.samarthanam.DigitalLibrary.Service.HomeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/api/v1")
public class HomePageController {
    @Autowired
    private HomeService homeService;

//-------------------------------------get books by language-----------------------------------------------------------
    @GetMapping("books/language/{key}")
    public Collection<Books> findBooksByLanguage(@PathVariable String key){
        return homeService.findBooksByLanguage(key);
    }

////----------------------------------get books by category---------------------------------------------------------------
    @GetMapping("/books/category/{key}")
    public Collection<Books> findBooksByCategory(@PathVariable String key){
        return homeService.findBooksByCategory(key);
    }

    @GetMapping("/books/recentlyadded")
    public Optional<List<Books>> findRecentlyAddedBooks(){
        return homeService.findRecentlyAddedBooks();
    }
}
