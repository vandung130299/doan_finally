package com.mobiledeviceshop.controller;

import java.net.URI;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Set;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.mobiledeviceshop.entity.Role;
import com.mobiledeviceshop.entity.RoleName;
import com.mobiledeviceshop.entity.User;
import com.mobiledeviceshop.exception.AppException;
import com.mobiledeviceshop.payload.ApiResponse;
import com.mobiledeviceshop.payload.JwtAuthenticationResponse;
import com.mobiledeviceshop.payload.LoginRequest;
import com.mobiledeviceshop.payload.SignUpRequest;
import com.mobiledeviceshop.repository.RoleRepository;
import com.mobiledeviceshop.repository.UserRepository;
import com.mobiledeviceshop.security.JwtTokenProvider;
import com.mobiledeviceshop.security.UserPrincipal;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    JwtTokenProvider tokenProvider;

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsernameOrEmail(),
                        loginRequest.getPassword()
                )
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = tokenProvider.generateToken(authentication);
        
        
        /// hoi cui bap
        UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();
        Long userId= userPrincipal.getId();
        Set<Role> userRole= userRepository.findById(userId).get().getRoles();
        System.out.println(userRole);
        List<Role> listA = new ArrayList<Role>();
        listA.addAll(userRole);
        String role = listA.get(0).getName().toString();
        String name = userRepository.findById(userId).get().getName();
        ////
        return ResponseEntity.ok(new JwtAuthenticationResponse(jwt,userId,role,name));
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpRequest signUpRequest) {
        if(userRepository.existsByUsername(signUpRequest.getUsername())) {
            return new ResponseEntity(new ApiResponse(false, "Username is already taken!"),
                    HttpStatus.BAD_REQUEST);
        }

        if(userRepository.existsByEmail(signUpRequest.getEmail())) {
            return new ResponseEntity(new ApiResponse(false, "Email Address already in use!"),
                    HttpStatus.BAD_REQUEST);
        }

        // Creating user's account
        User user = new User(signUpRequest.getName(), signUpRequest.getUsername(),
                signUpRequest.getEmail(), signUpRequest.getPassword(), signUpRequest.getAddress(), signUpRequest.getPhone());

        user.setPassword(passwordEncoder.encode(user.getPassword()));

        Role userRole = roleRepository.findByName(RoleName.ROLE_USER)
                .orElseThrow(() -> new AppException("User Role not set."));

        user.setRoles(Collections.singleton(userRole));

        User result = userRepository.save(user);

        URI location = ServletUriComponentsBuilder
                .fromCurrentContextPath().path("/api/users/{username}")
                .buildAndExpand(result.getUsername()).toUri();

        return ResponseEntity.created(location).body(new ApiResponse(true, "Người dùng đã đăng ký thành công"));
    }
}