package com.trust.samrarthanam.DigitalLibrary.Service;

import com.trust.samrarthanam.DigitalLibrary.Exceptions.BookNotFoundException;
import com.trust.samrarthanam.DigitalLibrary.Model.Books;
import com.trust.samrarthanam.DigitalLibrary.dao.BooksRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.TextCriteria;
import org.springframework.stereotype.Component;
import com.trust.samrarthanam.DigitalLibrary.Exceptions.BookNotFoundException;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Component
public class BookService {
    @Autowired
    private BooksRepo booksRepo;



    public List<Books> listBooks() {
        return (List<Books>) booksRepo.findAll();

    }
    public Optional<Books> getById(String id)
    {
        Optional<Books> optionalBooks = booksRepo.findById(id);
        if(optionalBooks.isEmpty())
            throw new BookNotFoundException("");

        return optionalBooks;

    }

    @Autowired
    MongoTemplate mongoTemplate;

    public Collection searchBooks(String text) {
        Collection<Books> b = mongoTemplate.find(Query.query(new Criteria()
                .orOperator(Criteria.where("isbn").regex(text, "i"),
                        Criteria.where("name").regex(text, "i"),
                        Criteria.where("author").regex(text, "i"),
                        Criteria.where("genre").regex(text, "i") )), Books.class);
                if(b.isEmpty())
                    throw new BookNotFoundException("");
                else
                    return b;

    }
    }

