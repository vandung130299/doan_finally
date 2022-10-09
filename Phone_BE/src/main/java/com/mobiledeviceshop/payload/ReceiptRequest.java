package com.mobiledeviceshop.payload;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.mobiledeviceshop.payload.CartRequest.CartItemRequest;

public class ReceiptRequest {
	
	private String address;
	private String company;
	private String phone;
	
	@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm")
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm", timezone = "GMT+7")
	private Date receiptDate;
	

	private List<ReceiptItemRequest> receiptItems= new ArrayList<>();;
	public static class ReceiptItemRequest {
		private long productid;
		private int quantity;
		private long pricereceipt;
		
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
		public long getPricereceipt() {
			return pricereceipt;
		}
		public void setPricereceipt(long pricereceipt) {
			this.pricereceipt = pricereceipt;
		}
		
		
		
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getCompany() {
		return company;
	}
	public void setCompany(String company) {
		this.company = company;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public Date getReceiptDate() {
		return receiptDate;
	}
	public void setReceiptDate(Date receiptDate) {
		this.receiptDate = receiptDate;
	}
	public List<ReceiptItemRequest> getReceiptItems() {
		return receiptItems;
	}
	public void setReceiptItems(List<ReceiptItemRequest> receiptItems) {
		this.receiptItems = receiptItems;
	}
	
	
}
