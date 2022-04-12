package com.app.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AddTimetable;
import com.app.dto.SearchTimetable;
import com.app.pojos.Student;
import com.app.pojos.Timetable;
import com.app.service.ITimetableService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/timetable")
public class TimetableController {
	@Autowired
	private ITimetableService timetableService;

	public TimetableController() {
		System.out.println("in timetable constructor " + getClass());
	}

	// add or update student details
	@PostMapping("/addtimetable")
	public ResponseEntity<?> TimetableDetails(@RequestBody AddTimetable t) {
		System.out.println("add or update timetable");
		return new ResponseEntity<>(timetableService.addOrUpdateTimetableDetails(t), HttpStatus.OK);
	}
	
	@RequestMapping(value="/findtimetable", method = RequestMethod.POST,produces="application/json")
	public ResponseEntity<?> FindTimetableDetails(@RequestBody SearchTimetable t) {
		System.out.println("find timetable");
		System.out.println(t.getDate()+" "+t.getCls());
		return new ResponseEntity<>(timetableService.fetchTimetableDetails(t), HttpStatus.OK);
	}
	
	@GetMapping("/{timetableid}")
	public ResponseEntity<?> FindTimetable(@PathVariable int timetableid) {
		return new ResponseEntity<>(timetableService.fetchTimetable(timetableid), HttpStatus.OK);
	}
	
	@PatchMapping
	public ResponseEntity<?> UpdateTimetable(@RequestBody AddTimetable t) {
		System.out.println(t.getId());
		return new ResponseEntity<>(timetableService.updateTimetableDetails(t), HttpStatus.OK);
	}
}
