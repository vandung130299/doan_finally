package com.mobiledeviceshop.service;

import com.mobiledeviceshop.entity.Category;
import com.mobiledeviceshop.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;

    public Category createCategory(Category categoryRequest) {
        Category newBrand = new Category();
        newBrand.setCategoryname(categoryRequest.getCategoryname());
        return  categoryRepository.save(newBrand);
    }

    public Category updateCategory(Category categoryRequest) {
        Category oldBrand = categoryRepository.findById(categoryRequest.getId()).get();
        Category newBrand = toEntity(categoryRequest, oldBrand);
        return categoryRepository.save(newBrand);
    }
    public Category toEntity(Category dto, Category entity) {
        entity.setId(dto.getId());
        entity.setCategoryname(dto.getCategoryname());
        return entity;
    }
}
