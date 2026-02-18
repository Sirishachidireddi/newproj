package com.example.ecommerce.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ecommerce.model.Cart;
import com.example.ecommerce.repository.CartRepository;

@Service
public class CartService {

    @Autowired
    private CartRepository repo;

    // Add product to cart
    public Cart addToCart(Long userId, Long productId, int quantity) {

        Cart existing = repo.findByUserIdAndProductId(userId, productId);

        if (existing != null) {
            existing.setQuantity(existing.getQuantity() + quantity);
            return repo.save(existing);
        }

        Cart cart = new Cart(userId, productId, quantity);
        return repo.save(cart);
    }

    // Get cart items for user
    public List<Cart> getUserCart(Long userId) {
        return repo.findByUserId(userId);
    }

    // Remove item from cart
    public void removeFromCart(Long cartId) {
        repo.deleteById(cartId);
    }
}
