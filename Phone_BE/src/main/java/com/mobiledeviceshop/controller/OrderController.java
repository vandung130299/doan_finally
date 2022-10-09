package com.mobiledeviceshop.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mobiledeviceshop.converter.OrderConverter;
import com.mobiledeviceshop.entity.Order;
import com.mobiledeviceshop.entity.OrderItem;
import com.mobiledeviceshop.entity.User;
import com.mobiledeviceshop.payload.ListOrderResponse;
import com.mobiledeviceshop.payload.OrderResponse;
import com.mobiledeviceshop.payload.StatusRequest;
import com.mobiledeviceshop.repository.OrderRepository;
import com.mobiledeviceshop.repository.UserRepository;
import com.mobiledeviceshop.security.CurrentUser;
import com.mobiledeviceshop.security.UserPrincipal;

@RestController
@RequestMapping("/api/order")
public class OrderController {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private OrderConverter orderConverter;

	@Autowired
	private OrderRepository orderRepository;

	// User
	@GetMapping
	public ListOrderResponse getListOrderResponseByUser(@CurrentUser UserPrincipal currentUser) {
		User u = userRepository.findById(currentUser.getId()).get();
		List<Order> listOrder = orderRepository.findAllByUser(u);
		List<OrderResponse> listOrderResponse = new ArrayList<>();

		for (int i = 0; i < listOrder.size(); i++) {

			List<OrderItem> listOrderItem = listOrder.get(i).getOrderItems();
			listOrderResponse.add(orderConverter.toDTO(listOrder.get(i), listOrderItem));
		}
		ListOrderResponse list = new ListOrderResponse();
		list.setListOrder(listOrderResponse);
		return list;
	}

	// Admin
	@GetMapping("/all")
	@PreAuthorize("hasRole('ADMIN')")
	public ListOrderResponse getAll() {

		List<Order> listOrder = orderRepository.findAll();
		List<OrderResponse> listOrderResponse = new ArrayList<>();

		for (int i = 0; i < listOrder.size(); i++) {

			List<OrderItem> listOrderItem = listOrder.get(i).getOrderItems();
			listOrderResponse.add(orderConverter.toDTO(listOrder.get(i), listOrderItem));
		}
		ListOrderResponse list = new ListOrderResponse();
		list.setListOrder(listOrderResponse);
		return list;
	}
	
	@GetMapping("/user")
	public ListOrderResponse getAll(@CurrentUser UserPrincipal currentUser) {

		
			User u = userRepository.findById(currentUser.getId()).get();
		
		List<Order> listOrder = orderRepository.findAllByUser(u);
		List<OrderResponse> listOrderResponse = new ArrayList<>();

		for (int i = 0; i < listOrder.size(); i++) {

			List<OrderItem> listOrderItem = listOrder.get(i).getOrderItems();
			listOrderResponse.add(orderConverter.toDTO(listOrder.get(i), listOrderItem));
		}
		ListOrderResponse list = new ListOrderResponse();
		list.setListOrder(listOrderResponse);
		return list;
	}

	// Admin
	@GetMapping("/{id}")
//	@PreAuthorize("hasRole('ADMIN')")
	public OrderResponse getOrderById(@PathVariable("id") Long id) {

		Order order = orderRepository.findById(id).get();
		OrderResponse orderResponse = new OrderResponse();

		List<OrderItem> listOrderItem = order.getOrderItems();
		orderResponse = orderConverter.toDTO(order, listOrderItem);

		return orderResponse;
	}

	// Admin ms dc confirm va delivery
	@PostMapping("/{id}")
//	@PreAuthorize("hasRole('ADMIN')")
	public OrderResponse statusOrder(@RequestBody StatusRequest statusRequest, @PathVariable("id") Long id) {

		Order order = orderRepository.findById(id).get();
		OrderResponse orderResponse = new OrderResponse();
		List<OrderItem> listOrderItem = order.getOrderItems();
		System.out.println(statusRequest.getStatus());
		if (order.getStatus().compareTo("pending") == 0) {
			if (statusRequest.getStatus().compareTo("confirm") == 0) {
				System.out.println("confirm");
				order.setStatus(statusRequest.getStatus());
				for (int i = 0; i < listOrderItem.size(); i++) {
					int qtt = listOrderItem.get(i).getQuantity();
					int soldOld = listOrderItem.get(i).getProduct().getSold();
					listOrderItem.get(i).getProduct().setSold(qtt + soldOld);
				}
			}
			if (statusRequest.getStatus().compareTo("cancel") == 0) {
				System.out.println("cancel");
				order.setStatus(statusRequest.getStatus());
			}
		}else if(order.getStatus().compareTo("confirm") == 0) {
			if (statusRequest.getStatus().compareTo("delivery") == 0) {
				System.out.println("delivery");
				order.setStatus(statusRequest.getStatus());
				/// ngay giao hang ???
				order.setDeliveryDate(statusRequest.getDeliveryDate());
			}
			if (statusRequest.getStatus().compareTo("cancel") == 0) {
				System.out.println("cancel");
				order.setStatus(statusRequest.getStatus());
				for (int i = 0; i < listOrderItem.size(); i++) {
					int qtt = listOrderItem.get(i).getQuantity();
					int soldOld = listOrderItem.get(i).getProduct().getSold();
					listOrderItem.get(i).getProduct().setSold( soldOld-qtt);
				}
			}
		}
		orderResponse = orderConverter.toDTO(order, listOrderItem);
		orderRepository.save(order);

		return orderResponse;
	}
}
