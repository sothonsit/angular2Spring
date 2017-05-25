package com.spring.ng2boot.service;

import com.spring.ng2boot.domain.Book;
import com.spring.ng2boot.domain.BookInput;
import com.spring.ng2boot.repository.IBookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    @Autowired
    private IBookRepository iBookRepository;

    public List<Book> findByName(BookInput bookInput){
        if(bookInput.getFirstName().isEmpty() || bookInput.getLastName().isEmpty()){
            return iBookRepository.findAll();
        }else {
            return iBookRepository.findByName(bookInput.getFirstName(),bookInput.getLastName());
        }
    }
}
