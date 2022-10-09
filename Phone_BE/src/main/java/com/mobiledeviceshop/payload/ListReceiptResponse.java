package com.mobiledeviceshop.payload;

import java.util.ArrayList;
import java.util.List;

public class ListReceiptResponse {
	private List<ReceiptResponse> listReceipt= new ArrayList<>();

	public List<ReceiptResponse> getListReceipt() {
		return listReceipt;
	}

	public void setListReceipt(List<ReceiptResponse> listReceipt) {
		this.listReceipt = listReceipt;
	}

	
}
