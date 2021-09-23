package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.User;
import com.example.repository.UserRepository;

@RestController
public class SignupController {

	@Autowired
	private UserRepository userRepository;
	
	@PostMapping(path="/user/add")
	public User addUser (@RequestBody User user) {
		userRepository.save(user);
		return user;
	}
	
}
