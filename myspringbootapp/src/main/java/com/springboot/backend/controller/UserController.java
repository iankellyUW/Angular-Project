package com.springboot.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.backend.model.UserInfo;
import com.springboot.backend.repository.UserRepository;

@RestController
public class UserController {

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder; 
	
	@PostMapping("/user")
	public UserInfo postUser(@RequestBody UserInfo user) {
		UserInfo info = userRepository.getByUsername(user.getUsername());
		if(info != null)
			throw new RuntimeException("Username Invalid!!!");
		
		String password = user.getPassword();
		password = passwordEncoder.encode(password);
		user.setPassword(password);
		return userRepository.save(user);
	}
}
