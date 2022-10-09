package com.mobiledeviceshop.entity;

import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "receipt")
public class Receipt {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY	)
	private long id;
	
	@OneToMany(mappedBy = "receipt")
	private List<ReceiptItem> receiptItems;

	private String company;
	private String address;
	private String phone;
	
	private long totalmoney;
 
	@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm")
	@JsonFormat(pattern = "yyyy-MM-dd HH:mm", timezone = "GMT+7")
	private Date receiptDate;

	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public List<ReceiptItem> getReceiptItems() {
		return receiptItems;
	}

	public void setReceiptItems(List<ReceiptItem> receiptItems) {
		this.receiptItems = receiptItems;
	}

	public String getCompany() {
		return company;
	}

	public void setCompany(String company) {
		this.company = company;
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

	public Date getReceiptDate() {
		return receiptDate;
	}

	public void setReceiptDate(Date receiptDate) {
		this.receiptDate = receiptDate;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public long getTotalmoney() {
		return totalmoney;
	}

	public void setTotalmoney(long totalmoney) {
		this.totalmoney = totalmoney;
	}


	
	
}
