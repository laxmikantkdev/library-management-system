
package com.suntel.library.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.suntel.library.model.Book;
import java.util.UUID;

public interface BookRepository extends JpaRepository<Book, UUID> {}
