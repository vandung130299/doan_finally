package com.mobiledeviceshop.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.mobiledeviceshop.entity.Brand;
import com.mobiledeviceshop.payload.ApiResponse;
import com.mobiledeviceshop.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.mobiledeviceshop.entity.Category;
import com.mobiledeviceshop.repository.CategoryRepository;
import com.mobiledeviceshop.payload.ProductRequest;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/category")
public class CategoryController {
	@Autowired
	private CategoryRepository categoryRepository;
	@Autowired
	private CategoryService categoryService;
	@GetMapping("/all")
	public ResponseEntity<Map<String, Object>> getAllCategory() {
		List<Category> cat =categoryRepository.findAll();
		Map<String, Object> response = new HashMap<>();
		response.put("categories", cat);
		return new ResponseEntity<>(response, HttpStatus.OK);
	}
	@GetMapping("/{id}")
	public Optional<Category> getCategoryByID(@PathVariable("id") Long id) {
		return categoryRepository.findById(id);
	}
	@PostMapping
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<?> createCategory(@Valid @RequestBody Category categoryRequest) {
		Category category = categoryService.createCategory(categoryRequest);
		return new ResponseEntity(new ApiResponse(true, "Category Created Successfully"), HttpStatus.OK);
	}
	@PutMapping("/{id}")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<?> updateBrand(@Valid @RequestBody Category categoryRequest, @PathVariable("id") Long id) {
		Category category = categoryService.updateCategory(categoryRequest);
		String mess = "Update Category id: " + id + " Successfully";
		return new ResponseEntity<>(new ApiResponse(true, mess), HttpStatus.OK);
	}

	@DeleteMapping(value = "/{id}")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<?> deleteBrand(@PathVariable("id") Long id) {
		String mess = " Delete Category id:  " + id;
		try {
			categoryRepository.deleteById(id);
			mess = mess + " Successfully";
			return new ResponseEntity(new ApiResponse(true, mess), HttpStatus.OK);
		}catch (Exception e) {
			mess = mess + " Failed";
			return new ResponseEntity<>(new ApiResponse(false, mess), HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
