package com.mobiledeviceshop.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "product")
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String productname;
	private long price;
	private int total;
	private int sold;
	private String infodesign;
	private String infomation;
	private String monitor;
	private String system;
	private String cpu;
	private String ram;
	private String thietKe;
	private String pin;
	
	private String imageurl;
//	private MultipartFile image;

	@ManyToOne
	@JoinColumn(name = "category_id")
	private Category category;

	@ManyToOne
	@JoinColumn(name = "brand_id")
	private Brand brand;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getProductname() {
		return productname;
	}

	public void setProductname(String productname) {
		this.productname = productname;
	}

	public long getPrice() {
		return price;
	}

	public void setPrice(long price) {
		this.price = price;
	}

	public int getTotal() {
		return total;
	}

	public void setTotal(int total) {
		this.total = total;
	}

	public int getSold() {
		return sold;
	}

	public void setSold(int sold) {
		this.sold = sold;
	}

	public String getInfodesign() {
		return infodesign;
	}

	public void setInfodesign(String infodesign) {
		this.infodesign = infodesign;
	}

	public String getInfomation() {
		return infomation;
	}

	public void setInfomation(String infomation) {
		this.infomation = infomation;
	}

	public String getMonitor() {
		return monitor;
	}

	public void setMonitor(String monitor) {
		this.monitor = monitor;
	}

	public String getSystem() {
		return system;
	}

	public void setSystem(String system) {
		this.system = system;
	}

	public String getCpu() {
		return cpu;
	}

	public void setCpu(String cpu) {
		this.cpu = cpu;
	}

	public String getRam() {
		return ram;
	}

	public void setRam(String ram) {
		this.ram = ram;
	}

	public String getThietKe() {
		return thietKe;
	}

	public void setThietKe(String thietKe) {
		this.thietKe = thietKe;
	}

	public String getPin() {
		return pin;
	}

	public void setPin(String pin) {
		this.pin = pin;
	}
	
	

	public String getImageurl() {
		return imageurl;
	}

	public void setImageurl(String imageurl) {
		this.imageurl = imageurl;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public Brand getBrand() {
		return brand;
	}

	public void setBrand(Brand brand) {
		this.brand = brand;
	}

	public Product(Long id, String productname, long price, int total, int sold, String infodesign, String infomation,
			String monitor, String system, String cpu, String ram, String thietKe, String pin, String imageurl,
			Category category, Brand brand) {
		super();
		this.id = id;
		this.productname = productname;
		this.price = price;
		this.total = total;
		this.sold = sold;
		this.infodesign = infodesign;
		this.infomation = infomation;
		this.monitor = monitor;
		this.system = system;
		this.cpu = cpu;
		this.ram = ram;
		this.thietKe = thietKe;
		this.pin = pin;
		this.imageurl = imageurl;
		this.category = category;
		this.brand = brand;
	}

	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}
	

//	public MultipartFile getImage() {
//		return image;
//	}

//	public void setImage(MultipartFile image) {
//		this.image = image;
//	}

	

}
