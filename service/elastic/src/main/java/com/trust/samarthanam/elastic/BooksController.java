package com.trust.samarthanam.elastic;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
public class BooksController {
    @Autowired
    private BooksRepo repository;

    @PostMapping("/")
    public String hello(@RequestBody String name){
        return "hello" +name;
    }

    @PostMapping("/saveCustomer")
    public int saveCustomer(@RequestBody List<Books> books) {
        repository.saveAll(books);
        return books.size();
    }

    @GetMapping("/findAll")
    public Iterable<Books> findAllCustomers() {
        return repository.findAll();
    }

}
