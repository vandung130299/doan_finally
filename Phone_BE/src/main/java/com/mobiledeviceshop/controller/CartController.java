package com.mobiledeviceshop.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mobiledeviceshop.converter.CartItemConverter;
import com.mobiledeviceshop.entity.Cart;
import com.mobiledeviceshop.entity.CartItem;
import com.mobiledeviceshop.entity.Product;
import com.mobiledeviceshop.entity.User;
import com.mobiledeviceshop.payload.ApiResponse;
import com.mobiledeviceshop.payload.CartRequest;
import com.mobiledeviceshop.payload.CartRequest.CartItemRequest;
import com.mobiledeviceshop.payload.CartResponse;
import com.mobiledeviceshop.payload.CartResponse.CartItemResponse;
import com.mobiledeviceshop.repository.CartItemRepository;
import com.mobiledeviceshop.repository.UserRepository;
import com.mobiledeviceshop.security.CurrentUser;
import com.mobiledeviceshop.security.UserPrincipal;
import com.mobiledeviceshop.service.CartItemService;
import com.mobiledeviceshop.service.CartService;
import com.mobiledeviceshop.service.ProductService;

@RestController
@RequestMapping("/api/cart")
public class CartController {

	@Autowired
	private UserRepository userRepository;

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

	@GetMapping
	public CartResponse getCartByUser(@CurrentUser UserPrincipal currentUser) {
		
		CartResponse cartResponse = new CartResponse();
		User u = userRepository.findById(currentUser.getId()).get();
		Cart c = cartService.getCartByUser(u);
		
		List<CartItem> qw = cartItemRepository.findByCart(c);
		List<CartItemResponse> cir = new ArrayList<>();
		
		for (int i = 0; i < qw.size(); i++) {
			cir.add(cartItemConverter.toDTO(qw.get(i)));
		}

		cartResponse.setCartItems(cir);
		return cartResponse;
	}

	@PostMapping
	public ResponseEntity<?> testUser(@RequestBody CartRequest cartRequest, @CurrentUser UserPrincipal currentUser) {

		if (currentUser != null) {
			User u = userRepository.findById(currentUser.getId()).get();
			Cart c = cartService.getCartByUser(u);
			if (c == null) {
				c = new Cart();
				c.setUser(u);
				c = cartService.save(c);
			} else {
				cartItemRepository.deleteByCart(c);
			}
			long total = 0;

			for (int i = 0; i < cartRequest.getCartItems().size(); i++) {
				Product p = productService.findById(cartRequest.getCartItems().get(i).getProductid());
				Integer q = cartRequest.getCartItems().get(i).getQuantity();
				total += p.getPrice() * q;
				CartItem item = cartItemService.getCartItemByProductAndCart(p, c);
				if (item == null) // tao moi
				{
					System.out.println(c.getId());
					item = new CartItem();
					item.setCart(c);
					item.setProduct(p);
					item.setQuantity(q);
				} else // Neu san pham da co trong database
				{
					item.setQuantity(q);
				}
				item = cartItemService.saveCartItem(item);
			}
			c.setTotalmoney(total);
			c = cartService.save(c);

			return new ResponseEntity(new ApiResponse(true, "Them gio hang thanh cong"), HttpStatus.OK);
		} else {
			return new ResponseEntity(new ApiResponse(false, "khong thanh cong"), HttpStatus.OK);
		}

	}

}
