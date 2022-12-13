package com.mobiledeviceshop.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.mobiledeviceshop.entity.Product;
import com.mobiledeviceshop.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.mobiledeviceshop.entity.Brand;
import com.mobiledeviceshop.repository.BrandRepository;
import com.mobiledeviceshop.repository.ProductRepository;
import com.mobiledeviceshop.payload.ApiResponse;
import com.mobiledeviceshop.service.BrandService;
import javax.validation.Valid;


@RestController
@RequestMapping("/api/brand")
public class BrandController {

	@Autowired
	private BrandRepository brandRepository;

	@Autowired
	private ProductRepository productRepository;
	@Autowired
	private BrandService brandService;


	
	@GetMapping("/all")
	public ResponseEntity<Map<String, Object>> getAllBrand() {
		List<Brand> brands =brandRepository.findAll();
		Map<String, Object> response = new HashMap<>();
		response.put("brands", brands);
		return new ResponseEntity<>(response, HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public Optional<Brand> getBrandByID(@PathVariable("id") Long id) {
		return brandRepository.findById(id);
	}
	@PostMapping
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<?> createBrand(@Valid @RequestBody Brand brandRequest) {
		Brand brand = brandService.createBrand(brandRequest);
		return new ResponseEntity(new ApiResponse(true, "Brand Created Successfully"), HttpStatus.OK);
	}
	@PutMapping("/{id}")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<?> updateBrand(@Valid @RequestBody Brand brandRequest, @PathVariable("id") Long id) {
		Brand brand = brandService.updateBrand(brandRequest);
		String mess = "Update Brand id: " + id + " Successfully";
		return new ResponseEntity<>(new ApiResponse(true, mess), HttpStatus.OK);
	}

	@DeleteMapping(value = "/{id}")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<?> deleteBrand(@PathVariable("id") Long id) {
		String mess = " Delete Brand id:  " + id;
		try {
			brandRepository.deleteById(id);
			mess = mess + " Successfully";
			return new ResponseEntity(new ApiResponse(true, mess), HttpStatus.OK);
		}catch (Exception e) {
			mess = mess + " Failed";
			return new ResponseEntity<>(new ApiResponse(false, mess), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
