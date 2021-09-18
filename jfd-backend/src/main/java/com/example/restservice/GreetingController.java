package com.example.restservice;

import java.util.concurrent.atomic.AtomicLong;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.User;
import com.example.repository.UserRepository;

@RestController
public class GreetingController {

	private static final String template = "Hello, %s!";
	private final AtomicLong counter = new AtomicLong();
	@Autowired
	private UserRepository userRepository;
	
	  @GetMapping("/greeting") 
	  public Greeting greeting(@RequestParam(value =
	  "name", defaultValue = "World") String name) { 
		  return new Greeting(counter.incrementAndGet(), String.format(template, name)); 
		  }
	 
	  @PostMapping(path="/user/add")
		public User addNewUser (
				@RequestParam String fname, @RequestParam String lname, 
				@RequestParam String email) {

			User user = new User();
			user.setFname(fname);
			user.setLname(lname);
			user.setGender("Male");
			user.setMobile("1111111111");
			user.setEmail(email);
			userRepository.save(user);
			return user;
		}
	
}
