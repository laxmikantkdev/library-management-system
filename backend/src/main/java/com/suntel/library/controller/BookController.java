
package com.suntel.library.controller;

import org.springframework.web.bind.annotation.*;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import com.suntel.library.service.BookService;
import com.suntel.library.model.Book;
import jakarta.validation.Valid;
import java.util.*;

@RestController
@RequestMapping("/books")
@RequiredArgsConstructor
public class BookController {

    private final BookService service;

    @GetMapping
    public List<Book> all(){
        return service.all();
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public Book create(@Valid @RequestBody Book book){
        return service.create(book);
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public Book update(@PathVariable UUID id, @Valid @RequestBody Book book){
        return service.update(id, book);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public void delete(@PathVariable UUID id){
        service.delete(id);
    }

    @PatchMapping("/{id}/status")
    @PreAuthorize("hasRole('ADMIN')")
    public Book updateStatus(@PathVariable UUID id, @RequestParam String status){
        return service.updateStatus(id, status);
    }
}
