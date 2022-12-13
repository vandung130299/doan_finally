package com.mobiledeviceshop.payload;

public class JwtAuthenticationResponse {
    private String accessToken;
    private String tokenType = "Bearer";
    private Long userId;
    private String role;
	private String username;
	private String email;
	private String address;
	private String phone;
	private String name;
    
    
    

    public JwtAuthenticationResponse(String accessToken) {
        this.accessToken = accessToken;
    }

    
    public String getAccessToken() {
        return accessToken;
    }

    public JwtAuthenticationResponse(String accessToken, Long userId, String role, String username, String email, String address, String phone, String name) {
		super();
		this.accessToken = accessToken;
		this.userId = userId;
		this.role = role;
		this.username = username;
		this.email = email;
		this.address = address;
		this.phone = phone;
		this.name = name;
	}

	public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    public String getTokenType() {
        return tokenType;
    }

    public void setTokenType(String tokenType) {
        this.tokenType = tokenType;
    }

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}


	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}
	////
    
}