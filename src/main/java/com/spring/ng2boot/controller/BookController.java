package com.spring.ng2boot.controller;

import com.spring.ng2boot.domain.Book;
import com.spring.ng2boot.domain.BookInput;
import com.spring.ng2boot.repository.IBookRepository;
import com.spring.ng2boot.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class BookController {

    @Autowired
    private IBookRepository iBookRepository;
    @Autowired
    private BookService bookService;

    @PostMapping("/search_book")
    public List<Book> searchBook(@RequestBody BookInput bookInput){
        return bookService.findByName(bookInput);
    }

    @GetMapping("/get_book")
    public List<Book> getBookList(){
        return  iBookRepository.findAll();
    }

    @PostMapping("/post_book")
    public Book createBook(@RequestBody Book book){
        return  iBookRepository.save(book);
    }

    @PutMapping("/put_book/{id}")
    public Book updateBook(@PathVariable Integer id, @RequestBody Book book){
        return iBookRepository.save(book);
    }

    @DeleteMapping("/del_book/{id}")
    public void deleteBook(@PathVariable Integer id){
        iBookRepository.delete(id);
    }

}
