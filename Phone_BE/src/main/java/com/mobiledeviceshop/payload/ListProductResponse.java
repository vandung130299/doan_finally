package com.mobiledeviceshop.payload;

import java.util.ArrayList;
import java.util.List;

public class ListProductResponse {
	private int page;
	private int totalPage;
	private List<ProductRequest> listResult = new ArrayList<>();

	public int getPage() {
		return page;
	}

	public void setPage(int page) {
		this.page = page;
	}

	public int getTotalPage() {
		return totalPage;
	}

	public void setTotalPage(int totalPage) {
		this.totalPage = totalPage;
	}

	public List<ProductRequest> getListResult() {
		return listResult;
	}

	public void setListResult(List<ProductRequest> listResult) {
		this.listResult = listResult;
	}
}
