package com.mobiledeviceshop.converter;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import com.mobiledeviceshop.entity.Order;
import com.mobiledeviceshop.entity.OrderItem;
import com.mobiledeviceshop.payload.OrderResponse;
import com.mobiledeviceshop.payload.OrderResponse.OrderItemResponse;

@Component
public class OrderConverter {

	// NewEntity -> NewDTO
	public OrderResponse toDTO(Order entity, List<OrderItem> listOrderItem) {
		OrderResponse dto = new OrderResponse();

		dto.setId(entity.getId());
		dto.setAddress(entity.getAddress());
		dto.setPhone(entity.getPhone());
		dto.setFullname(entity.getFullname());
		dto.setOrderDate(entity.getOrderDate());
		dto.setDeliveryDate(entity.getDeliveryDate());
		dto.setStatus(entity.getStatus());
		dto.setNote(entity.getNote());
		dto.setTotalmoney(entity.getTotalmoney());
		List<OrderItemResponse> listOrderItemResponse = new ArrayList<>();

		for (int i = 0; i < listOrderItem.size(); i++) {
			listOrderItemResponse.add(toDTOItem(listOrderItem.get(i)));
		}
		dto.setOrderItems(listOrderItemResponse);
		return dto;
	}

	// OrderItem -> OrderItemResponse
	public OrderItemResponse toDTOItem(OrderItem entity) {
		OrderItemResponse dto = new OrderItemResponse();
		dto.setProductname(entity.getProduct().getProductname());
		dto.setImageurl(entity.getProduct().getImageurl());
		dto.setQuantity(entity.getQuantity());
		dto.setPricecurrent(entity.getPricecurrent());
		return dto;
	}
}
