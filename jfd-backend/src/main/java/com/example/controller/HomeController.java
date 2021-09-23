package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.User;
import com.example.service.UserServiceIF;

@RestController
public class HomeController {

	@Autowired
	private UserServiceIF userService;
	
	@GetMapping("/users")
	public List<User> users() {
		
		return this.userService.users();
	}
	
	@GetMapping("/user/delete")
	public List<User> delete(@RequestBody User user) {
		
		return this.userService.delete(user);
	}
	
}
