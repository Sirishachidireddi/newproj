package com.example.ecommerce.model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Which user owns this cart item
    private Long userId;

    // Which product is added
    private Long productId;

    // How many items
    private int quantity;

    // Constructors
    public Cart() {}

    public Cart(Long userId, Long productId, int quantity) {
        this.userId = userId;
        this.productId = productId;
        this.quantity = quantity;
    }

    // Getters & Setters
    public Long getId() {
        return id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getProductId() {
        return productId;
    }

    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}
