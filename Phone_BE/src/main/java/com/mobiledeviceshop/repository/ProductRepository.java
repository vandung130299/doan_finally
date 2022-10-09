package com.mobiledeviceshop.repository;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.mobiledeviceshop.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
//	List<Product> findAll();
	
	Page<Product> findByCategoryId(Long id,Pageable requestedPage);
	Page<Product> findByBrandId(Long id,Pageable pageRequest);
	
	Page<Product> findByBrandIdAndCategoryId(Long brandId,Long CategoryId,Pageable pageRequest);

	Optional<Product> findById(Long id);
	
}
