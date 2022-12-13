package com.mobiledeviceshop.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mobiledeviceshop.entity.Product;
import com.mobiledeviceshop.payload.ApiResponse;
import com.mobiledeviceshop.payload.ProductRequest;
import com.mobiledeviceshop.repository.ProductRepository;
import com.mobiledeviceshop.service.ProductService;

@RestController
@RequestMapping("/api/product")
public class ProductController {

	@Autowired
	private ProductRepository productRepository;

	@Autowired
	private ProductService productService;

	@GetMapping
	public List<Product> getListSP() {
		return productRepository.findAll();
	}

	@GetMapping("/pageable")
	public Page<Product> testPage(@Param(value = "page") int page, @Param(value = "size") int size) {
		Pageable requestedPage = PageRequest.of(page, size);
		Page<Product> products = productRepository.findAll(requestedPage);
		return products;
	}
	@GetMapping("/all")
	public ResponseEntity<Map<String, Object>> getProductbyFilter(
			@RequestParam(value = "page", defaultValue = "1") Integer page,
			@RequestParam(value = "size", defaultValue = "50") Integer size,
			@RequestParam(value = "categoryId", required = false) Long categoryId,
			@RequestParam(value = "brandId", required = false) Long brandId,
			@RequestParam(value = "price", required = false) String price,
			@RequestParam(value = "key", required = false) String key) {
		Pageable requestedPage = PageRequest.of(page - 1, size);

		Page<Product> products = productRepository.findAll(requestedPage);

		// lọc theo điều kiện
		if (categoryId != null && brandId == null) {
			products = productRepository.findByCategoryId(categoryId, requestedPage);
		} else if (categoryId == null && brandId != null) {
			products = productRepository.findByBrandId(brandId, requestedPage);
		} else if (categoryId != null && brandId != null) {
			products = productRepository.findByBrandIdAndCategoryId(brandId, categoryId, requestedPage);
		} else if (key != null) {
			products = productRepository.findByProductnameContaining(key, requestedPage);
		}

		List<Product> productRes = new ArrayList<Product>(products.getContent());
		System.out.println("categoryId " + categoryId);
		System.out.println("brandId " + brandId);
		System.out.println("key " + key);

		Map<String, Object> response = new HashMap<>();
		response.put("products", productRes);
		response.put("currentPage", products.getNumber());
		response.put("totalItems", products.getTotalElements());
		response.put("totalPages", products.getTotalPages());
		return new ResponseEntity<>(response, HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public Optional<Product> getSPByID(@PathVariable("id") Long id) {
		return productRepository.findById(id);
	}

	@PostMapping
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<?> createProduct(@Valid @RequestBody ProductRequest productRequest) {
		Product product = productService.createProduct(productRequest);

//		   URI location = ServletUriComponentsBuilder
//	                .fromCurrentRequest().path("/{productId}")
//	                .buildAndExpand(product.getId()).toUri();
//
//	        return ResponseEntity.created(location)
//	                .body(new ApiResponse(true, "Product Created Successfully"));

		return new ResponseEntity(new ApiResponse(true, "Product Created Successfully"), HttpStatus.OK);
	}

	@PutMapping("/{id}")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<?> updateProduct(@Valid @RequestBody ProductRequest productRequest,
			@PathVariable("id") long id) {
		Product product = productService.updateProduct(productRequest);

		String mess = "Product " + id + " Update Successfully";

		return new ResponseEntity(new ApiResponse(true, mess), HttpStatus.OK);
	}

	@DeleteMapping(value = "/{id}")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<?> deleteNew(@PathVariable("id") Long id) {
		productRepository.deleteById(id);
		String mess = " Delete Product id:  " + id + " Successfully";
		return new ResponseEntity(new ApiResponse(true, mess), HttpStatus.OK);
	}

	/* SEARCH PRODUCT */

}
