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

import com.app.pojos.Faculty;
import com.app.service.IFacultyService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/faculty")
public class FacultyController {
	@Autowired
	private IFacultyService facultyService;

	public FacultyController() {
		System.out.println("in faculty constructor " + getClass());
	}

	// add notice
	@PostMapping("/addfaculty")
	public ResponseEntity<?> FacultyDetails(@RequestBody @Valid Faculty f) {
		System.out.println("add faculty");
		return new ResponseEntity<>(facultyService.addOrUpdateFacultyDetails(f), HttpStatus.OK);
	}

	// update
	@PutMapping
	public ResponseEntity<?> UpdateFaculty(@RequestBody @Valid Faculty f) {
		System.out.println("update faculty");
		return new ResponseEntity<>(facultyService.addOrUpdateFacultyDetails(f), HttpStatus.OK);
	}

	// getAll
	@GetMapping()
	public ResponseEntity<?> getAllFacultyDetails() {
		System.out.println("in get all faculties");
		return new ResponseEntity<>(facultyService.getAllFaculties(), HttpStatus.OK);
	}

	// delete
	@DeleteMapping("/{facultyid}")
	public ResponseEntity<?> deleteFacultyDetails(@PathVariable int facultyid) {
		System.out.println("in faculty delete pocess");
		return new ResponseEntity<>(facultyService.deleteFacultyDetails(facultyid), HttpStatus.OK);
	}
	
	@GetMapping("/{facultyid}")
	public ResponseEntity<?> FindNotice(@PathVariable int facultyid) {
		System.out.println("find faculty");
		return new ResponseEntity<>(facultyService.fetchFacultyDetails(facultyid), HttpStatus.OK);
	}

}
