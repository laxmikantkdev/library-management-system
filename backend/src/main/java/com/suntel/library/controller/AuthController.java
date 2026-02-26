
package com.suntel.library.controller;

import org.springframework.web.bind.annotation.*;
import lombok.RequiredArgsConstructor;
import com.suntel.library.service.AuthService;
import com.suntel.library.dto.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService service;

    @PostMapping("/register")
    public void register(@RequestBody AuthRequest req){
        service.register(req);
    }

    @PostMapping("/register-admin")
    public void registerAdmin(@RequestBody AuthRequest req){
        service.registerAdmin(req);
    }

    @PostMapping("/login")
    public AuthResponse login(@RequestBody AuthRequest req){
        return service.login(req);
    }
}
