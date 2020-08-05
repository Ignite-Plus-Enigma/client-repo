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
    public Books getById(String id)
    {
//        Optional<Books> optionalBooks = booksRepo.findById(id);
//        if(optionalBooks.isEmpty())
//            throw new BookNotFoundException("Book Not Found!");
//        return optionalBooks;
        Collection<Books> books = booksRepo.findAll();
        for(Books book : books){
            if(book.getId().equals(id)){
                return book;
            }
        }
        return null;
    }
//-------------------------------------get books by keywords------------------------------------------------------------
    @Autowired
    MongoTemplate mongoTemplate;

    public Collection searchBooks(String text) {
        Collection<Books> b = mongoTemplate.find(Query.query(new Criteria()
                .orOperator(Criteria.where("isbn").regex(text, "i"),
                        Criteria.where("name").regex(text, "i"),
                        Criteria.where("author").regex(text, "i"),
                        Criteria.where("category").regex(text, "i"),
                        Criteria.where("subCategory").regex(text, "i"),
                        Criteria.where("language").regex(text, "i"),
                        Criteria.where("description").regex(text, "i"),
                        Criteria.where("format").regex(text, "i"))), Books.class);
        if(b.isEmpty())
            throw new BookNotFoundException("");
        else
            return b;
    }

//----------------------------------------get books by subcategory/topic------------------------------------------------
    public Collection findBooksByTopic(String text,String key) {
        Collection<Books> b = mongoTemplate.find(Query.query(new Criteria()
                .andOperator(Criteria.where("subCategory").regex(key, "i"),
                        Criteria.where("format").regex(text, "i")
                        )), Books.class);
        if(b.isEmpty())
            throw new BookNotFoundException("");
        else
            return b;
    }
}


