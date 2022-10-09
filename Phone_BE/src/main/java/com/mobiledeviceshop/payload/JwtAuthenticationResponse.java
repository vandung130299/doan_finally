package com.mobiledeviceshop.payload;

public class JwtAuthenticationResponse {
    private String accessToken;
    private String tokenType = "Bearer";
    private Long userId;
    private String role;
    private String name;
    
    
    

    public JwtAuthenticationResponse(String accessToken) {
        this.accessToken = accessToken;
    }

    
    public String getAccessToken() {
        return accessToken;
    }

    public JwtAuthenticationResponse(String accessToken, Long userId, String role, String name) {
		super();
		this.accessToken = accessToken;
		this.userId = userId;
		this.role = role;
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

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
    
    ////
    
}