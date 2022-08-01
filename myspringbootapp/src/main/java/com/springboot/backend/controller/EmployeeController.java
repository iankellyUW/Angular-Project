package com.springboot.backend.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.backend.model.Employee;
import com.springboot.backend.repository.EmployeeRepository;

@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
public class EmployeeController {
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	@PostMapping("/employee")
	public Employee postEmployee(@RequestBody Employee employee) {
		return employeeRepository.save(employee);
	}
	
	@GetMapping("/employee")
	public List<Employee> getAllEmployee(@RequestParam("page") Integer page,
								@RequestParam("size") Integer size) {
		Pageable pageable = PageRequest.of(page, size);
		
		return employeeRepository.findAll(pageable).getContent();
		
	}
}
