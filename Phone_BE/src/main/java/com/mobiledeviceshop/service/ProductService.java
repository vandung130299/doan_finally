package com.mobiledeviceshop.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mobiledeviceshop.converter.ProductConverter;
import com.mobiledeviceshop.entity.Product;
import com.mobiledeviceshop.payload.ProductRequest;
import com.mobiledeviceshop.repository.ProductRepository;

@Service
public class ProductService {

	@Autowired
	private ProductRepository productRepository;


	@Autowired
	private ProductConverter productConverter;

	public Product createProduct(ProductRequest productRequest) {

		Product product = productConverter.toEntity(productRequest);

		return productRepository.save(product);
	}
	
	public Product updateProduct(ProductRequest productRequest) {

		Product	oldProduct = productRepository.findById(productRequest.getId()).get();
		Product newProduct = productConverter.toEntity(productRequest,oldProduct);

		return productRepository.save(newProduct);
	}
	
	public Product findById(Long id) {
		return productRepository.findById(id).get();
	}
}
