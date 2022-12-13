package com.mobiledeviceshop.repository;

import com.mobiledeviceshop.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import com.mobiledeviceshop.entity.Brand;

import java.util.Optional;

public interface BrandRepository extends JpaRepository<Brand, Long> {
    Optional<Brand> findById(Long id);

}
