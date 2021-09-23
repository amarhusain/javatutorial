package com.example.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.entity.User;
import com.example.repository.UserRepository;

@Service
@Transactional
public class UserServiceIMPL implements UserServiceIF {
	
	@Autowired
	private UserRepository userRepository;

	@Override
	public User addUser(User user) {
		return userRepository.save(user);
	}

	@Override
	public List<User> users() {
		Iterable<User> users = userRepository.findAll();
		ArrayList<User> usersList = new ArrayList<User>();
		for (User user : users) {
			usersList.add(user);
		}
		return usersList;
	}

	@Override
	public List<User> delete(User user) {
		//Delete selected user
		userRepository.delete(user);
		//fetch latest users
		Iterable<User> users = userRepository.findAll();
		ArrayList<User> usersList = new ArrayList<User>();
		for (User userObj : users) {
			usersList.add(userObj);
		}
		return usersList;
	}
	
	@Override
	public void deleteUser(Long id) {
		userRepository.deleteById(id);
	}
	
	

	
}
