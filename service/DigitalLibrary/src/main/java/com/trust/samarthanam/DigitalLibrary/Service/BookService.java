package com.trust.samarthanam.DigitalLibrary.Service;

import com.trust.samarthanam.DigitalLibrary.Exceptions.BookNotFoundException;
import com.trust.samarthanam.DigitalLibrary.Model.Books;
import com.trust.samarthanam.DigitalLibrary.dao.BooksRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Component;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Component
public class BookService {
    @Autowired
    private BooksRepo booksRepo;


//---------------------------------------list all books-----------------------------------------------------------------
    public List<Books> listBooks() {
        return (List<Books>) booksRepo.findAll();

    }
//---------------------------------------get books by id----------------------------------------------------------------
    public Optional<Books> getById(String id)
    {
        Optional<Books> optionalBooks = booksRepo.findById(id);
        if(optionalBooks.isEmpty())
            throw new BookNotFoundException("Book Not Found!");
        return optionalBooks;

    }
//-------------------------------------get books by keywords------------------------------------------------------------
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

//----------------------------------------get books by subcategory/topic------------------------------------------------
    public Collection findBooksByTopics(String text) {
        Collection<Books> b = mongoTemplate.find(Query.query(new Criteria()
                .orOperator(Criteria.where("subCategory").regex(text, "i"))), Books.class);
        if(b.isEmpty())
            throw new BookNotFoundException("");
        else
            return b;
    }
}


