
package com.suntel.library.service;

import org.springframework.stereotype.Service;
import lombok.RequiredArgsConstructor;
import com.suntel.library.repository.BookRepository;
import com.suntel.library.model.Book;
import java.util.*;

@Service
@RequiredArgsConstructor
public class BookService {

    private final BookRepository repo;

    public List<Book> all(){
        return repo.findAll();
    }

    public Book create(Book book){
        book.setStatus("available");
        return repo.save(book);
    }

    public Book update(UUID id, Book book){
        Book existing = repo.findById(id).orElseThrow();
        existing.setTitle(book.getTitle());
        existing.setAuthor(book.getAuthor());
        existing.setPublishedYear(book.getPublishedYear());
        return repo.save(existing);
    }

    public void delete(UUID id){
        repo.deleteById(id);
    }

    public Book updateStatus(UUID id, String status){
        Book book = repo.findById(id).orElseThrow();
        book.setStatus(status);
        return repo.save(book);
    }
}
