package com.mobiledeviceshop.payload;

import java.util.ArrayList;
import java.util.List;

import com.mobiledeviceshop.payload.CartRequest.CartItemRequest;

public class CartResponse {
	private List<CartItemResponse> cartItems= new ArrayList<>();;
	public static class CartItemResponse {
		private long productid;
		private int quantity;
		private int productQuantity;
		private String productname;
		private String imageurl;
		private long price;
		
		public long getProductid() {
			return productid;
		}
		public void setProductid(long productid) {
			this.productid = productid;
		}
		public String getProductname() {
			return productname;
		}
		public void setProductname(String productname) {
			this.productname = productname;
		}
		public String getImageurl() {
			return imageurl;
		}
		public void setImageurl(String imageurl) {
			this.imageurl = imageurl;
		}
		public long getPrice() {
			return price;
		}
		public void setPrice(long price) {
			this.price = price;
		}
		public int getQuantity() {
			return quantity;
		}
		public void setQuantity(int quantity) {
			this.quantity = quantity;
		}

		public int getProductQuantity() {
			return productQuantity;
		}
		public void setProductQuantity(int productQuantity) {
			this.productQuantity = productQuantity;
		}
		
	}
	public List<CartItemResponse> getCartItems() {
		return cartItems;
	}
	public void setCartItems(List<CartItemResponse> cartItems) {
		this.cartItems = cartItems;
	}
}
