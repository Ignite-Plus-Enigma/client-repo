package com.trust.samarthanam.DigitalLibrary.Exceptions;



import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ExceptionController {
    @ExceptionHandler(value = BookNotFoundException.class)
    public ResponseEntity<Object> exception(BookNotFoundException exception) {
        return new ResponseEntity<>("Sorry!! Book not available", HttpStatus.NOT_FOUND);
    }
}

