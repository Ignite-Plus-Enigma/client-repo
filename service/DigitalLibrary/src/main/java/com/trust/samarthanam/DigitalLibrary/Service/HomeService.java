package com.trust.samarthanam.DigitalLibrary.Service;

import com.trust.samarthanam.DigitalLibrary.Exceptions.BookNotFoundException;
import com.trust.samarthanam.DigitalLibrary.Model.Books;
import com.trust.samarthanam.DigitalLibrary.dao.BooksRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

import static org.springframework.data.mongodb.core.query.Query.query;

@Component
public class HomeService {
    @Autowired
    private BooksRepo booksRepo;

    @Autowired
    private MongoTemplate mongoTemplate;
    private Books books;

    //------------------------------------books by language-----------------------------------------------------------------
    public Collection<Books> findBooksByLanguage(String key){
        Collection<Books> b = mongoTemplate.find(query(new Criteria()
                .orOperator(Criteria.where("language").regex(key, "i"))).limit(7), Books.class);
        if(b.isEmpty())
            throw new BookNotFoundException("");
        else
            return b;
    }
//--------------------------------------books by format-----------------------------------------------------------------

    public Collection<Books> findBooksByFormat(String key){
        Collection<Books> b = mongoTemplate.find(query(new Criteria()
                .orOperator(Criteria.where("format").regex(key, "i"))).limit(6), Books.class);
        if(b.isEmpty())
            throw new BookNotFoundException("");
        else
            return b;
    }
//---------------------------------------books by category--------------------------------------------------------------
    public Collection<Books> findBooksByCategory(String key){
        Criteria c =new Criteria();
        Collection<Books> b = mongoTemplate.find(query(c.orOperator(c.where("category").regex(key, "i"))).limit(6), Books.class);
        if(b.isEmpty())
            throw new BookNotFoundException("");
        else
            return b;
    }
//----------------------------------------recently added books----------------------------------------------------------

    public Optional<List<Books>> findRecentlyAddedBooks(){
        Query query = new Query();
        query.limit(6);
        query.with(Sort.by(Sort.Direction.DESC,"_id"));
        return Optional.of(mongoTemplate.find(query, Books.class));
    }



}
