package com.example.ecommerce.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.ecommerce.model.Cart;
import com.example.ecommerce.service.CartService;

import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/api/cart")
public class CartController {

    @Autowired
    private CartService service;

    // Add to cart
    @PostMapping
    public Cart addToCart(@RequestBody Cart cart) {
        return service.addToCart(
            cart.getUserId(),
            cart.getProductId(),
            cart.getQuantity()
        );
    }

    // View cart
    @GetMapping("/{userId}")
    public List<Cart> getCart(@PathVariable Long userId) {
        return service.getUserCart(userId);
    }

    // Delete item
    @DeleteMapping("/{cartId}")
    public void remove(@PathVariable Long cartId) {
        service.removeFromCart(cartId);
    }
}

