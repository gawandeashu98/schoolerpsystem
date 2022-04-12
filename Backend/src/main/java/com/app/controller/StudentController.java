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
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.PromoteStudent;
import com.app.dto.StudentRequest;
import com.app.pojos.Student;
import com.app.service.IStudentService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/student")
public class StudentController {
	@Autowired
	private IStudentService studentService;

	public StudentController() {
		System.out.println("in student constructor " + getClass());
	}

	@PostMapping("/studentlogin")
	public ResponseEntity<?> validateStudent(@RequestBody StudentRequest request) {
		System.out.println("in validateStudent " + request.getUserName());
		return new ResponseEntity<>(studentService.getUserNamenPw(request), HttpStatus.OK);
	}

	// add or update student details
	@PostMapping("/addstudent")
	public ResponseEntity<?> StudentsDetails(@RequestBody @Valid Student s) {
		System.out.println("add or update student");
		return new ResponseEntity<>(studentService.addOrUpdateStudentDetails(s), HttpStatus.OK);
	}

	@GetMapping("/{studentid}")
	public ResponseEntity<?> FindStudent(@PathVariable int studentid) {
		return new ResponseEntity<>(studentService.fetchStudentDetails(studentid), HttpStatus.OK);
	}

	@PutMapping
	public ResponseEntity<?> UpdateStudent(@RequestBody @Valid Student student) {
		return new ResponseEntity<>(studentService.addOrUpdateStudentDetails(student), HttpStatus.OK);
	}
	
	@DeleteMapping("/{studentid}")
	public ResponseEntity<?> deleteStudentDetails(@PathVariable int studentid) {
		System.out.println("in student delete pocess");
		return new ResponseEntity<>(studentService.deleteStudentDetails(studentid), HttpStatus.OK);
	}
	
	@GetMapping()
	public ResponseEntity<?> getAllStudentDetails() {
		System.out.println("in get all students");
		return new ResponseEntity<>(studentService.getAllStudents(), HttpStatus.OK);
	}
	
	@RequestMapping(value="/promotestudent", method = RequestMethod.POST,produces="application/json")
	public ResponseEntity<?> promoteStudent(@RequestBody  PromoteStudent student) {
		System.out.println(student.getFromcls()+" "+student.getTocls());
		return new ResponseEntity<>(studentService.updateStudent(student), HttpStatus.OK);
	}
}
