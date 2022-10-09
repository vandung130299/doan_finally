package com.mobiledeviceshop.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mobiledeviceshop.entity.Cart;
import com.mobiledeviceshop.entity.CartItem;
import com.mobiledeviceshop.entity.Product;
import com.mobiledeviceshop.repository.CartItemRepository;

@Service
public class CartItemService {

	@Autowired
	private CartItemRepository cartItemRepository;
	
	public CartItem getCartItemByProductAndCart(Product p,Cart c)
	{
		return cartItemRepository.findByProductAndCart(p,c);
	}
	
	public CartItem saveCartItem(CartItem item)
	{
		return cartItemRepository.save(item);
	}
}
	