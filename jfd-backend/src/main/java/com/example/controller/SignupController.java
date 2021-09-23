package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.User;
import com.example.service.UserServiceIF;

@RestController
public class SignupController {
	
	@Autowired
	private UserServiceIF userService;
	
	@PostMapping(path="/user/add")
	public User addUser(@RequestBody User user) {
		return userService.addUser(user);
	}
	
}
