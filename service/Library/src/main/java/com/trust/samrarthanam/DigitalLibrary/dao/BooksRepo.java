package com.trust.samrarthanam.DigitalLibrary.dao;

import com.trust.samrarthanam.DigitalLibrary.Model.Books;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


@Repository
        public interface BooksRepo extends MongoRepository<Books, String> {


        }




