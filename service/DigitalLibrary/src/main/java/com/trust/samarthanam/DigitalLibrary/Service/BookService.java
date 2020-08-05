package com.trust.samarthanam.DigitalLibrary.Service;

import com.trust.samarthanam.DigitalLibrary.Exceptions.BookNotFoundException;
import com.trust.samarthanam.DigitalLibrary.Model.Books;
import com.trust.samarthanam.DigitalLibrary.dao.BooksRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Component;

import java.util.*;

@Component
public class BookService {
    @Autowired
    private BooksRepo booksRepo;


//---------------------------------------list all books-----------------------------------------------------------------
    public List<Books> listBooks() {
        ArrayList<Books> test = new ArrayList<>();
        test = (ArrayList<Books>) booksRepo.findAll();
        for (Books book : test){
            System.out.println(book.getFormat());
            Map<String, Object> list = book.getFormat();
            if(list.get("audio") != null){
                System.out.println("Book is audio");
            }
            else if(list.get("pdf") != null){
                System.out.println("Book is pdf");
            }
        }
         return (List<Books>) booksRepo.findAll();

    }

    public List<Books> getBookByFormat(String format){
        ArrayList<Books> test = new ArrayList<>();
        test = (ArrayList<Books>) booksRepo.findAll();
        ArrayList<Books> fbook = new ArrayList<>();
        for (Books book : test){
            Map<String, Object> list = book.getFormat();
            if(list.get(format) != null){
                fbook.add(book);
            }
        }
        return fbook;
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
////-------------------------------------get books by keywords------------------------------------------------------------
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

////----------------------------------------get books by subcategory/topic------------------------------------------------
    public Collection getBooksBySubCategory(String key) {
        Collection<Books> b = mongoTemplate.find(Query.query(new Criteria()
                .andOperator(Criteria.where("subCategory").regex(key, "i")
                        )), Books.class);
        if(b.isEmpty())
            throw new BookNotFoundException("");
        else
            return b;
    }
}


