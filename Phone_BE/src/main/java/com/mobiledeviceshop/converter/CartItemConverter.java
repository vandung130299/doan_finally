package com.mobiledeviceshop.converter;

import org.springframework.stereotype.Component;

import com.mobiledeviceshop.entity.CartItem;
import com.mobiledeviceshop.payload.CartResponse.CartItemResponse;



@Component
public class CartItemConverter {
	// NewEntity -> NewDTO
	public CartItemResponse toDTO(CartItem entity) {
		CartItemResponse dto = new CartItemResponse();

		dto.setProductid(entity.getProduct().getId());
		dto.setProductname(entity.getProduct().getProductname());
		dto.setImageurl(entity.getProduct().getImageurl());
		dto.setPrice(entity.getProduct().getPrice());
		dto.setQuantity(entity.getQuantity());
		dto.setProductQuantity(entity.getProduct().getTotal());
		return dto;
	}
}
