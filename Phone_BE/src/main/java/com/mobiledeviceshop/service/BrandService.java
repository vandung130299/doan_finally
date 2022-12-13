package com.mobiledeviceshop.service;
import com.mobiledeviceshop.entity.Brand;
import com.mobiledeviceshop.repository.BrandRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BrandService {
    @Autowired
    private BrandRepository brandRepository;

    public Brand createBrand(Brand brandRequest) {
        Brand newBrand = new Brand();
        newBrand.setBrandname(brandRequest.getBrandname());
        return  brandRepository.save(newBrand);
    }

    public Brand updateBrand(Brand brandRequest) {
        Brand oldBrand = brandRepository.findById(brandRequest.getId()).get();
        Brand newBrand = toEntity(brandRequest, oldBrand);
        return brandRepository.save(newBrand);
    }
    public Brand toEntity(Brand dto, Brand entity) {
        entity.setId(dto.getId());
        entity.setBrandname(dto.getBrandname());
        return entity;
    }
}

