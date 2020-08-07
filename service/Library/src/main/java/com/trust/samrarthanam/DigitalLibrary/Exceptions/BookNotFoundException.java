package com.trust.samrarthanam.DigitalLibrary.Exceptions;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

public class BookNotFoundException extends RuntimeException {

        public BookNotFoundException(String message){
            super(message);
        }

    }
