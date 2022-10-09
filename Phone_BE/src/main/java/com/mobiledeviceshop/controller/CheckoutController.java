package com.mobiledeviceshop.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mobiledeviceshop.converter.CartItemConverter;
import com.mobiledeviceshop.entity.Cart;
import com.mobiledeviceshop.entity.CartItem;
import com.mobiledeviceshop.entity.Order;
import com.mobiledeviceshop.entity.OrderItem;
import com.mobiledeviceshop.entity.User;
import com.mobiledeviceshop.payload.ApiResponse;
import com.mobiledeviceshop.payload.OrderRequest;
import com.mobiledeviceshop.repository.CartItemRepository;
import com.mobiledeviceshop.repository.CartRepository;
import com.mobiledeviceshop.repository.OrderItemRepository;
import com.mobiledeviceshop.repository.OrderRepository;
import com.mobiledeviceshop.repository.UserRepository;
import com.mobiledeviceshop.security.CurrentUser;
import com.mobiledeviceshop.security.UserPrincipal;
import com.mobiledeviceshop.service.CartItemService;
import com.mobiledeviceshop.service.CartService;
import com.mobiledeviceshop.service.ProductService;

@RestController
@RequestMapping("/api/checkout")
public class CheckoutController {

	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private CartRepository cartRepository;

	@Autowired
	private CartItemRepository cartItemRepository;

	@Autowired
	private CartService cartService;

	@Autowired
	private CartItemService cartItemService;

	@Autowired
	private ProductService productService;

	@Autowired
	private CartItemConverter cartItemConverter;
	
	@Autowired
	private OrderRepository orderRepository;
	
	@Autowired
	private OrderItemRepository orderItemRepository;


	//Luu thong tin don hang va xoa gio hang
	@PostMapping
	public ResponseEntity<?> checkOut(@RequestBody OrderRequest orderRequest, @CurrentUser UserPrincipal currentUser) {
		//kiem tra user
		if (currentUser != null) {
			User u = userRepository.findById(currentUser.getId()).get();
			Cart c = cartService.getCartByUser(u);
			if (c == null) {
				return new ResponseEntity(new ApiResponse(false, "Gio hang khong ton tai"), HttpStatus.OK);
			} else {
				//tao don hang tu request
				Order order = new Order();
				order.setUser(u);
				order.setAddress(orderRequest.getAddress());
				order.setPhone(orderRequest.getPhone());
				order.setFullname(orderRequest.getFullname());
				order.setOrderDate(orderRequest.getOrderDate());
				order.setStatus("pending");
				order.setNote(orderRequest.getNote());
				order.setTotalmoney(c.getTotalmoney());
				orderRepository.save(order);
				
				//tao don hang chi tiet tu cartItem
				List<CartItem> listcart =cartItemRepository.findByCart(c);
				
				for (int i = 0; i < listcart.size(); i++) {
					OrderItem orderItem = new OrderItem();
					orderItem.setProduct(listcart.get(i).getProduct());
					orderItem.setQuantity(listcart.get(i).getQuantity());
					orderItem.setPricecurrent(listcart.get(i).getProduct().getPrice());
					orderItem.setOrder(order);
					orderItemRepository.save(orderItem);
				}
			}
			// xoa cart, cartItem sau khi luu order,orderItem
			cartItemRepository.deleteByCart(c);
			cartRepository.delete(c);

			return new ResponseEntity(new ApiResponse(true, "Them gio hang thanh cong"), HttpStatus.OK);
		} else {
			return new ResponseEntity(new ApiResponse(false, "khong co user "), HttpStatus.OK);
		}
	}
	
}
