package com.trust.samarthanam.DigitalLibrary.ServiceTests;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.trust.samarthanam.DigitalLibrary.DigitalLibraryApplicationTests;
import com.trust.samarthanam.DigitalLibrary.Model.Books;
import com.trust.samarthanam.DigitalLibrary.Service.HomeService;
import com.trust.samarthanam.DigitalLibrary.dao.BooksRepo;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;

import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.test.context.junit4.SpringRunner;


import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.concurrent.Callable;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;
import static org.springframework.data.mongodb.core.query.Query.query;

@RunWith(SpringRunner.class)
@SpringBootTest
 public class HomeServiceTests{
    @InjectMocks
    @Autowired
    private HomeService homeService;

    @Autowired
    @Mock
    private MongoTemplate mongoTemplate;
    //Not understanding how to mock mongotemplate

    //Not working throwing exceptions
    //org.mockito.exceptions.misusing.MissingMethodInvocationException:
    //when() requires an argument which has to be 'a method call on a mock'.
    //For example:
    //    when(mock.getArticles()).thenReturn(articles);
    //
    //Also, this error might show up because:
    //1. you stub either of: final/private/equals()/hashCode() methods.
    //   Those methods *cannot* be stubbed/verified.
    //   Mocking methods declared on non-public parent classes is not supported.
    //2. inside when() you don't call method on mock but on some other object.
    @Test
    public void FindBooksLanguageTest() {
        Books book = new Books();
        book.setId("1");
        book.setIsbn("4568567");
        book.setName("abc");
        book.setLanguage("English");
        book.setFormat("audio");
        book.setBookUrl("-");
        book.setBookImage("-");
        book.setCount(0);
        book.setAuthor("xyz");
        book.setDescription("abc");
        book.setSubCategory("xyz");
        Collection<Books> b = new ArrayList<>();
        b.add(book);

        String key = "English";
        System.out.println(b);

        when(mongoTemplate.find(query(new Criteria()
                .orOperator(Criteria.where("language").regex(key, "i"))).limit(6), Books.class)).thenReturn((List<Books>) b);
        assertThat(homeService.findBooksByLanguage(key)).isEqualTo(book);
    }
}

//Other method..this also not working
//    @Autowired
//    @MockBean
//    public BooksRepo booksRepo;
//
//
//    @Before
//    public void init() {
//        MockitoAnnotations.initMocks(this);
//        saveBooks();
//    }
//
//    public void saveBooks() {
//        String BooksList = "[{\n" +
//                "\t\"id\": \"10\",\n" +
//                "\t\"name\": \"Alice's Adventures in Wonderland\",\n" +
//                "\t\"isbn\":\"935-678-234-23\",\n" +
//                "\t\"author\":\"Lewis Carrol\",\n" +
//                "\t\"format\":\"Audio\",\n" +
//                "\t\"language\":\"English\",\n" +
//                "\t\"bookUrl\":\"https://drive.google.com/uc?export=view&id=1m7SqrxcbAxKyDUfYzcKP9Rbn1EMJl9QH\",\n" +
//                "\t\"bookImage\":\"https://drive.google.com/uc?export=download&id=1Sqc63-nx8nPnBGkOgpqs1uFLr1JcW60R\",\n" +
//                "\t\"description\":\"Alice's Adventures in Wonderland, widely beloved British children's book by Lewis Carroll.The story centres on Alice\",\n" +
//                "\t\"count\": 0,\n" +
//                "\t\"category\":\"Children\",\n" +
//                "\t\"subCategory\":\"Story books\"\n" +
//                "},{\n" +
//                "\t\"id\":\"11\",\n" +
//                "\t\"name\":\"A Child's Garden of Verses\",\n" +
//                "\t\"isbn\":\"789-862-827-87\",\n" +
//                "\t\"author\":\"Robert Louis Stevenson\",\n" +
//                "\t\"format\":\"Audio\",\n" +
//                "\t\"language\":\"Kannada\",\n" +
//                "\t\"bookUrl\":\"https://drive.google.com/uc?export=view&id=1J1LhIsALHlKK9kP3qPcWjl_-yEO1V3MB\",\n" +
//                "\t\"bookImage\":\"https://drive.google.com/uc?export=download&id=1uB585wpdMw7tq950nI6sD4QptPLEapRL\",\n" +
//                "\t\"description\":\"A Child's Garden of Verses is a collection of poetry for children by the Scottish author Robert Louis Stevenson\",\n" +
//                "\t\"count\": 0,\n" +
//                "\t\"category\":\"Children\",\n" +
//                "\t\"subCategory\":\"Poems\"\n" +
//                "}]";
//
//        try {
//
//            Books books[] = new ObjectMapper().readValue(BooksList, Books[].class);
//
//            for (Books book1 : books) {
//                System.out.println(book1);
//                booksRepo.save(book1);
//
//            }
//
//
//        } catch (JsonMappingException e) {
//            e.printStackTrace();
//        } catch (JsonProcessingException e) {
//            e.printStackTrace();
//        }
//
//
//    }
//
//
//    @Test
//    public void LanguageSearchTest() {
//        Collection<Books> b = homeService.findBooksByLanguage("English");
//        List<Books> book = new ArrayList<>(b);
//        Assert.assertTrue("English", equals(book.get(0).getLanguage()));
//    }
//}



