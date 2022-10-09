package com.mobiledeviceshop.payload;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.mobiledeviceshop.entity.Product;

public class OrderResponse {
	private List<OrderItemResponse> orderItems= new ArrayList<>();;
	private long id;
	private String address;
	private String phone;
	private String fullname;
	
	@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm")
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm", timezone = "GMT+7")
	private Date orderDate;
	
	@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm")
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm", timezone = "GMT+7")
	private Date deliveryDate;
	
	private long totalmoney;
	private String status;
	private String note;
	public static class OrderItemResponse {
		
		private String productname;
		private String imageurl;
		private int quantity;
		private long pricecurrent;
		
		
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
		public int getQuantity() {
			return quantity;
		}
		public void setQuantity(int quantity) {
			this.quantity = quantity;
		}
		public long getPricecurrent() {
			return pricecurrent;
		}
		public void setPricecurrent(long pricecurrent) {
			this.pricecurrent = pricecurrent;
		}
		
		
	}
	public List<OrderItemResponse> getOrderItems() {
		return orderItems;
	}
	public void setOrderItems(List<OrderItemResponse> orderItems) {
		this.orderItems = orderItems;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getFullname() {
		return fullname;
	}
	public void setFullname(String fullname) {
		this.fullname = fullname;
	}
	public Date getOrderDate() {
		return orderDate;
	}
	public void setOrderDate(Date orderDate) {
		this.orderDate = orderDate;
	}
	public Date getDeliveryDate() {
		return deliveryDate;
	}
	public void setDeliveryDate(Date deliveryDate) {
		this.deliveryDate = deliveryDate;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getNote() {
		return note;
	}
	public void setNote(String note) {
		this.note = note;
	}
	public long getTotalmoney() {
		return totalmoney;
	}
	public void setTotalmoney(long totalmoney) {
		this.totalmoney = totalmoney;
	}
	
	
	
	
}
