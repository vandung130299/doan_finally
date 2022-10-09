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
@Table(name = "category")
public class Category {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@NotBlank(message="Tên danh mục không được trống")
	private String categoryname;
	
	@OneToMany(mappedBy = "category")
	@JsonIgnore
	private List<Product> products = new ArrayList<>();
	
	


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCategoryname() {
		return categoryname;
	}

	public void setCategoryname(String categoryname) {
		this.categoryname = categoryname;
	}

	public List<Product> getProducts() {
		return products;
	}

	public void setProducts(List<Product> products) {
		this.products = products;
	}

	@Override
	public int hashCode() {
		return Objects.hash(categoryname, id, products);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Category other = (Category) obj;
		return Objects.equals(categoryname, other.categoryname) && Objects.equals(id, other.id)
				&& Objects.equals(products, other.products);
	}

	public Category() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Category(Long id, @NotBlank(message = "Tên danh mục không được trống") String categoryname,
			List<Product> products) {
		super();
		this.id = id;
		this.categoryname = categoryname;
		this.products = products;
	}
	
	
	
}
