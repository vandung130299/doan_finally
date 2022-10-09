package com.mobiledeviceshop.payload;

import java.util.ArrayList;
import java.util.List;

public class CartRequest {
	private List<CartItemRequest> cartItems= new ArrayList<>();;
	public static class CartItemRequest {
		private long productid;
		private int quantity;
		
		public long getProductid() {
			return productid;
		}
		public void setProductid(long productid) {
			this.productid = productid;
		}
		public int getQuantity() {
			return quantity;
		}
		public void setQuantity(int quantity) {
			this.quantity = quantity;
		}
		
	}
	public List<CartItemRequest> getCartItems() {
		return cartItems;
	}
	public void setCartItems(List<CartItemRequest> cartItems) {
		this.cartItems = cartItems;
	}
	
	
	
}

