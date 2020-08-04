package com.trust.samarthanam.DigitalLibrary.ServiceTests;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.trust.samarthanam.DigitalLibrary.DigitalLibraryApplicationTests;
import com.trust.samarthanam.DigitalLibrary.Model.Books;
import com.trust.samarthanam.DigitalLibrary.Service.BookService;
import com.trust.samarthanam.DigitalLibrary.dao.BooksRepo;
import org.junit.Assert;
import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@RunWith(SpringRunner.class)
@SpringBootTest
class BookServiceTest extends DigitalLibraryApplicationTests {

    @Autowired
    private BookService service;
    @Autowired
    @MockBean
    private BooksRepo repository;
    // Both the tests running
    @Test
    public void getBooksTest(){
        when(repository.findAll()).thenReturn(Stream.of(new Books("1","abc","23456","xyz","audio","english","..","....","A book",0,"category","SubCat"),
                new Books("2","xyz","23456","abc","PDF","english","..","....","A PDF book",0,"category","SubCat")).collect(Collectors.toList()));
        assertEquals(2, service.listBooks().size());
    }


    @Test
    void getBookByIdTest() {

        Books books = new Books();
        Books books1 = new Books();
        books1.setId("1");
        books1.setName("Organic Chemistry");
        books1.setIsbn("978-1-101-56918-4");
        books1.setAuthor("R D Sharma");
        books1.setFormat("Audio");
        books1.setLanguage("English");
        books1.setBookUrl("https://docs.google.com/uc?export=download&id=1qbxMkviO6ka-5es6wZIu9Y8wjbGF6eSY");
        books1.setBookImage("https://drive.google.com/uc?export=view&id=1Kiv5NAhaLSsdbMvr9ImhdI_s7-wAeTm2");
        books1.setDescription("textbook");
        books1.setCount(0);
        books1.setSubCategory("Chemistry");

        Books books2 = new Books();
        books2.setId("2");
        books2.setName("");
        books2.setIsbn("134-865-79-56");
        books2.setAuthor("R D Sharma");
        books2.setFormat("Audio");
        books2.setLanguage("English");
        books2.setBookUrl("https://docs.google.com/uc?export=download&id=1qbxMkviO6ka-5es6wZIu9Y8wjbGF6eSY");
        books2.setBookImage("https://drive.google.com/uc?export=view&id=1Kiv5NAhaLSsdbMvr9ImhdI_s7-wAeTm2");
        books2.setDescription("textbook");
        books2.setCount(0);
        books2.setSubCategory("Chemistry");

        when(repository.findById(anyString())).thenReturn(Optional.of(books2));
        assertNotNull(service.getById("2"));


    }
}



