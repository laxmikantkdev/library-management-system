
package com.suntel.library.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.suntel.library.model.User;
import java.util.*;

public interface UserRepository extends JpaRepository<User, UUID> {
    Optional<User> findByUsername(String username);
}
