package com.trust.samarthanam.DigitalLibrary.Controller;


import com.trust.samarthanam.DigitalLibrary.Model.Books;
import com.trust.samarthanam.DigitalLibrary.Service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class BooksController {
    @Autowired
    private BookService bookService;

    @GetMapping("/books")
    public ResponseEntity<List<Books>> getBooks() {
        return ResponseEntity.ok().body((bookService.listBooks()));
    }

    @GetMapping("/books/{id}")
    public ResponseEntity<Optional<Books>> getBookbyid(@PathVariable String id) {
        return ResponseEntity.ok().body((bookService.getById(id)));
    }

    @GetMapping("/search={key}")
    public ResponseEntity<Collection<Books>> findBook(@PathVariable String key) {
        return ResponseEntity.ok().body((bookService.searchBooks(key)));
    }
}


