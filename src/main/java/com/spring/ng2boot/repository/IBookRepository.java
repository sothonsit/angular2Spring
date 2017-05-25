package com.spring.ng2boot.repository;

import com.spring.ng2boot.domain.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IBookRepository extends JpaRepository<Book,Integer> {

    @Query("select u from Book u where u.firstName like %?1% and u.lastName like %?2%")
    List<Book> findByName(String firstName, String lastName);
}
