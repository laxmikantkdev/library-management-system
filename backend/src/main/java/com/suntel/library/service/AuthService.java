
package com.suntel.library.service;

import org.springframework.stereotype.Service;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import com.suntel.library.repository.UserRepository;
import com.suntel.library.model.User;
import com.suntel.library.dto.*;
import com.suntel.library.security.JwtUtil;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository repo;
    private final BCryptPasswordEncoder encoder;
    private final JwtUtil jwt;

    public void register(AuthRequest req){
        User user = User.builder()
                .username(req.getUsername())
                .password(encoder.encode(req.getPassword()))
                .role("ROLE_USER")
                .build();
        repo.save(user);
    }

    public void registerAdmin(AuthRequest req){
        User user = User.builder()
                .username(req.getUsername())
                .password(encoder.encode(req.getPassword()))
                .role("ROLE_ADMIN")
                .build();
        repo.save(user);
    }

    public AuthResponse login(AuthRequest req){
        User user = repo.findByUsername(req.getUsername()).orElseThrow();
        if(!encoder.matches(req.getPassword(), user.getPassword())){
            throw new RuntimeException("Invalid credentials");
        }
        return new AuthResponse(jwt.generate(user.getUsername(), user.getRole()));
    }
}
