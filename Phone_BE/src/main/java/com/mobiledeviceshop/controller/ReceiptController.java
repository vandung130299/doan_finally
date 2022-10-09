package com.mobiledeviceshop.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mobiledeviceshop.converter.ReceiptConverter;
import com.mobiledeviceshop.entity.Product;
import com.mobiledeviceshop.entity.Receipt;
import com.mobiledeviceshop.entity.ReceiptItem;
import com.mobiledeviceshop.entity.User;
import com.mobiledeviceshop.payload.ApiResponse;
import com.mobiledeviceshop.payload.ListReceiptResponse;
import com.mobiledeviceshop.payload.ReceiptRequest;
import com.mobiledeviceshop.payload.ReceiptResponse;
import com.mobiledeviceshop.repository.ReceiptItemRepository;
import com.mobiledeviceshop.repository.ReceiptRepository;
import com.mobiledeviceshop.repository.UserRepository;
import com.mobiledeviceshop.security.CurrentUser;
import com.mobiledeviceshop.security.UserPrincipal;
import com.mobiledeviceshop.service.ProductService;

@RestController
@RequestMapping("/api/receipt")
public class ReceiptController {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private ProductService productService;

	@Autowired
	private ReceiptRepository receiptRepository;

	@Autowired
	private ReceiptItemRepository receiptItemRepository;

	@Autowired
	private ReceiptConverter receiptConverter;

	// Admin
	@GetMapping("/all")
	@PreAuthorize("hasRole('ADMIN')")
	public ListReceiptResponse getAll() {

		List<Receipt> listReceipt = receiptRepository.findAll();
		List<ReceiptResponse> listReceiptResponse = new ArrayList<>();

		for (int i = 0; i < listReceipt.size(); i++) {

			List<ReceiptItem> listReceiptItem = listReceipt.get(i).getReceiptItems();
			listReceiptResponse.add(receiptConverter.toDTO(listReceipt.get(i), listReceiptItem));
		}
		ListReceiptResponse list = new ListReceiptResponse();
		list.setListReceipt(listReceiptResponse);
		return list;
	}

	@PostMapping
	public ResponseEntity<?> createReceipt(@RequestBody ReceiptRequest receiptRequest,
			@CurrentUser UserPrincipal currentUser) {
		if (currentUser != null) {
			User u = userRepository.findById(currentUser.getId()).get();

			// tao don nhap hang tu request
			Receipt receipt = new Receipt();
			receipt.setUser(u);
			receipt.setAddress(receiptRequest.getAddress());
			receipt.setCompany(receiptRequest.getCompany());
			receipt.setPhone(receiptRequest.getPhone());
			receipt.setReceiptDate(receiptRequest.getReceiptDate());

			receiptRepository.save(receipt);

			long total = 0;

			for (int i = 0; i < receiptRequest.getReceiptItems().size(); i++) {
				Product p = productService.findById(receiptRequest.getReceiptItems().get(i).getProductid());
				Integer q = receiptRequest.getReceiptItems().get(i).getQuantity();
				ReceiptItem item = new ReceiptItem();

				item.setReceipt(receipt);
				item.setProduct(p);
				item.setQuantity(q);
				item.setPricereceipt(receiptRequest.getReceiptItems().get(i).getPricereceipt());

				total += item.getPricereceipt() * q;
				p.setTotal(p.getTotal()+q);
				
				receiptItemRepository.save(item);
			}
			receipt.setTotalmoney(total);
			receiptRepository.save(receipt);

			return new ResponseEntity(new ApiResponse(true, "Them don hang thanh cong"), HttpStatus.OK);
		} else {
			return new ResponseEntity(new ApiResponse(false, "Them don hang khong thanh cong"), HttpStatus.OK);
		}

	}
}
