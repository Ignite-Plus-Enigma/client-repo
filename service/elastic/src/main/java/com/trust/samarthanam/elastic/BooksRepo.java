package com.trust.samarthanam.elastic;

import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface BooksRepo extends ElasticsearchRepository<Books, String> {

}