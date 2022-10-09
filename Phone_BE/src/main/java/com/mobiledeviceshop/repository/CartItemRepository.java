package com.mobiledeviceshop.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mobiledeviceshop.entity.Cart;
import com.mobiledeviceshop.entity.CartItem;
import com.mobiledeviceshop.entity.Product;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {
	CartItem findByProductAndCart(Product p,Cart c);
	
	List<CartItem> findByCart(Cart c);
	
	Long countByCart(Cart c);
	
	@Transactional
	void  deleteByCart(Cart c);
}
