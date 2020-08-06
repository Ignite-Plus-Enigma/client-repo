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

@Component
public class HomeService {
    @Autowired
    private BooksRepo booksRepo;

    @Autowired
    MongoTemplate mongoTemplate;

//------------------------------------books by language-----------------------------------------------------------------
    public Collection<Books> findBooksByLanguage(String key){
        Collection<Books> b = mongoTemplate.find(Query.query(new Criteria()
                .orOperator(Criteria.where("language").regex(key, "i"))), Books.class);
        if(b.isEmpty())
            throw new BookNotFoundException("");
        else
            return b;
    }

//---------------------------------------books by category--------------------------------------------------------------
    public Collection<Books> findBooksByCategory(String key){
        Collection<Books> b = mongoTemplate.find(Query.query(new Criteria()
                .orOperator(Criteria.where("category").regex(key, "i"))).limit(7), Books.class);
        if(b.isEmpty())
            throw new BookNotFoundException("");
        else
            return b;
    }
//----------------------------------------recently added books----------------------------------------------------------

    public Optional<List<Books>> findRecentlyAddedBooks(){
        Query query = new Query();
        query.limit(7);
        query.with(Sort.by(Sort.Direction.DESC,"_id"));
        return Optional.of(mongoTemplate.find(query, Books.class));
    }

//-----------------------------------most-viewed books------------------------------------------------------------------

    public Optional<List<Books>> getMostViewedBooks(){
        Query query = new Query();
        query.limit(7);
        query.with(Sort.by(Sort.Direction.DESC,"views"));
        return Optional.of(mongoTemplate.find(query, Books.class));
    }

}
