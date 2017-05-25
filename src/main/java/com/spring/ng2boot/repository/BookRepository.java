package com.spring.ng2boot.repository;

import com.spring.ng2boot.domain.Book;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

/**
 * Created by Jester on 24/5/2560.
 */
@Repository
public class BookRepository {
    @PersistenceContext
    private EntityManager entityManager;

    public List<Book> Search(String Fname, String Lname){
        return  entityManager.createQuery("from Book where ").getResultList();
    }
}
