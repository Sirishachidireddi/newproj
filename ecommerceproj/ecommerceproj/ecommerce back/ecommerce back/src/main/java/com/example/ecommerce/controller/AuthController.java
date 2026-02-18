package com.example.ecommerce.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ecommerce.model.User;
import com.example.ecommerce.service.UserService;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService service;

    @PostMapping("/signup")
    public User signup(@RequestBody User user) {
        return service.signup(user);
    }

    @PostMapping("/login")
    public User login(@RequestBody User user) {
        return service.login(user.getEmail(), user.getPassword());
    }
}
