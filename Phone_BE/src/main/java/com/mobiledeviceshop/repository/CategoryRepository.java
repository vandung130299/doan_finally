package com.mobiledeviceshop.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mobiledeviceshop.entity.Category;


public interface CategoryRepository extends JpaRepository<Category, Long> {
//	Optional<Category> findById(Long id);
	
//	Category findById(Long id);
}
