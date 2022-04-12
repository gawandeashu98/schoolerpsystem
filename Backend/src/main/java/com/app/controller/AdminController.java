package com.app.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AdminRequest;
import com.app.pojos.Admin;
import com.app.service.IAdminService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/admin")
public class AdminController {
	@Autowired
	private IAdminService adminService;
	
	public AdminController() {
		System.out.println("in ctor of " + getClass());
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> validateAdmin(@RequestBody AdminRequest request) {
		System.out.println("in validateAdmin " + request.getUserName());
		return new ResponseEntity<>(adminService.getUserNamenPw(request), HttpStatus.OK);
	}
	
	@PostMapping("/addadmin")
	public Admin addAdminDetails(@RequestBody @Valid   Admin a) 
	{
		System.out.println("in add admin " + a);
		return adminService.addOrUpdateAdminDetails(a);
	}
	
	@GetMapping("/{adminid}")
	public ResponseEntity<?> FindStudent(@PathVariable int adminid) {
		return new ResponseEntity<>(adminService.fetchAdminDetails(adminid), HttpStatus.OK);
	}
	
	@PutMapping
	public Admin updateAdminDetails(@RequestBody @Valid   Admin a) 
	{
		System.out.println("in add admin " + a);
		return adminService.addOrUpdateAdminDetails(a);
	}
	
	@DeleteMapping("/{adminid}")
	public ResponseEntity<?> deleteStudentDetails(@PathVariable int adminid) {
		System.out.println("in student delete pocess");
		return new ResponseEntity<>(adminService.deleteAdminDetails(adminid), HttpStatus.OK);
	}
	
	@GetMapping()
	public ResponseEntity<?> getAllAdminDetails() {
		System.out.println("in get all admins");
		return new ResponseEntity<>(adminService.getAllAdmins(), HttpStatus.OK);
	}
}
