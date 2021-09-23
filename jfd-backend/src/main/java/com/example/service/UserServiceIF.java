package com.example.service;

import java.util.List;

import com.example.entity.User;

public interface UserServiceIF {
	User addUser(User user);
	List<User> users();
	List<User> delete(User user);
}
