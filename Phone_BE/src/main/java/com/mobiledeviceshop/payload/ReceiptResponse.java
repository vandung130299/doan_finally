package com.mobiledeviceshop.payload;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

public class ReceiptResponse {
	private List<ReceiptItemResponse> receiptItems= new ArrayList<>();;
	private long id;
	private String address;
	private String phone;
	private String company;

	
	@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm")
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm", timezone = "GMT+7")
	private Date receiptDate;
	
	private long totalmoney;


	public static class ReceiptItemResponse {
		
		private String productname;
		private String imageurl;
		private int quantity;
		private long pricereceipt ;
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
		public long getPricereceipt() {
			return pricereceipt;
		}
		public void setPricereceipt(long pricereceipt) {
			this.pricereceipt = pricereceipt;
		}
		
	}
	public List<ReceiptItemResponse> getReceiptItems() {
		return receiptItems;
	}
	public void setReceiptItems(List<ReceiptItemResponse> receiptItems) {
		this.receiptItems = receiptItems;
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
	
	public String getCompany() {
		return company;
	}
	public void setCompany(String company) {
		this.company = company;
	}
	public Date getReceiptDate() {
		return receiptDate;
	}
	public void setReceiptDate(Date receiptDate) {
		this.receiptDate = receiptDate;
	}
	public long getTotalmoney() {
		return totalmoney;
	}
	public void setTotalmoney(long totalmoney) {
		this.totalmoney = totalmoney;
	}

	
}
