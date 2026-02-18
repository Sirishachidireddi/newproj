package com.example.ecommerce.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.ecommerce.model.Cart;

public interface CartRepository extends JpaRepository<Cart, Long> {

    List<Cart> findByUserId(Long userId);

    Cart findByUserIdAndProductId(Long userId, Long productId);
}

