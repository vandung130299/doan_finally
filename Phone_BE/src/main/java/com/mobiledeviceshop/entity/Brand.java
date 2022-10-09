package com.mobiledeviceshop.entity;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "brand")
public class Brand {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank(message="Tên nhaxn hang không được trống")
	private String brandname;
	
	@OneToMany(mappedBy = "brand")
	@JsonIgnore
	private List<Product> products = new ArrayList<>();

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getBrandname() {
		return brandname;
	}

	public void setBrandname(String brandname) {
		this.brandname = brandname;
	}

	public List<Product> getProducts() {
		return products;
	}

	public void setProducts(List<Product> products) {
		this.products = products;
	}

	@Override
	public int hashCode() {
		return Objects.hash(brandname, id, products);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Brand other = (Brand) obj;
		return Objects.equals(brandname, other.brandname) && Objects.equals(id, other.id)
				&& Objects.equals(products, other.products);
	}

	public Brand(Long id, @NotBlank(message = "Tên nhaxn hang không được trống") String brandname,
			List<Product> products) {
		super();
		this.id = id;
		this.brandname = brandname;
		this.products = products;
	}

	public Brand() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
