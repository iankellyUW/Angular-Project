package com.springboot.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.backend.model.Customer;
import com.springboot.backend.repository.CustomerRepository;

@RestController
public class CustomerController {

	// Controller: (Entity) : FindAll, POST, FindById, DeleteById, Update 
	@Autowired
	private CustomerRepository customerRepository; 
	 
	@PostMapping("/customer")
	public Customer postCustomer(@RequestBody Customer customer) {
		return customerRepository.save(customer); 
	}
	
	@GetMapping("/customers")
	public List<Customer> getAllCustomers() {
		return customerRepository.findAll();
	}
}
