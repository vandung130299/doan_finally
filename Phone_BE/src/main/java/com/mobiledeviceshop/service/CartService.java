package com.mobiledeviceshop.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mobiledeviceshop.entity.Cart;
import com.mobiledeviceshop.entity.User;
import com.mobiledeviceshop.repository.CartRepository;


@Service
public class CartService {

	@Autowired
	private CartRepository cartRepository;
	
	
	public Cart getCartByUser(User u)
	{
		return cartRepository.findByUser(u);
	}
	
	public Cart save(Cart cart)
	{
		return cartRepository.save(cart);
	}
	
}
