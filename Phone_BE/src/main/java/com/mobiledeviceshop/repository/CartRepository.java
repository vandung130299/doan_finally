package com.mobiledeviceshop.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mobiledeviceshop.entity.Cart;
import com.mobiledeviceshop.entity.User;

public interface CartRepository extends JpaRepository<Cart, Long> {

	Cart findByUser(User u);

	Cart findByUserId(Long id);
}
