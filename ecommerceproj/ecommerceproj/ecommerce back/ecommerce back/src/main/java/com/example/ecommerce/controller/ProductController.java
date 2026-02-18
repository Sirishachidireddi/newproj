package com.example.ecommerce.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;
import com.example.ecommerce.model.Product;
import com.example.ecommerce.service.ProductService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService service;
    @GetMapping
    public List<Product> getProducts() {
        return service.getAllProducts();
    }
    @PostMapping
    public Product addProduct(@RequestBody Product product) {
        return service.save(product);
    }
}
