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

import com.app.pojos.Notice;
import com.app.service.INoticeService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/notice")
public class NoticeController {
	@Autowired
	private INoticeService noticeService;

	public NoticeController() {
		System.out.println("in notice constructor " + getClass());
	}

	// add notice
	@PostMapping("/addnotice")
	public ResponseEntity<?> NoticeDetails(@RequestBody @Valid Notice n) {
		System.out.println("add notice");
		return new ResponseEntity<>(noticeService.addOrUpdateNoticeDetails(n), HttpStatus.OK);
	}

	// update
	@PutMapping
	public ResponseEntity<?> UpdateStudent(@RequestBody @Valid Notice n) {
		System.out.println("update notice");
		return new ResponseEntity<>(noticeService.addOrUpdateNoticeDetails(n), HttpStatus.OK);
	}

	// getAll
	@GetMapping()
	public ResponseEntity<?> getAllNoticeDetails() {
		System.out.println("in get all notices");
		return new ResponseEntity<>(noticeService.getAllNotices(), HttpStatus.OK);
	}

	// delete
	@DeleteMapping("/{noticeid}")
	public ResponseEntity<?> deleteStudentDetails(@PathVariable int noticeid) {
		System.out.println("in student delete pocess");
		return new ResponseEntity<>(noticeService.deleteNoticeDetails(noticeid), HttpStatus.OK);
	}
	
	@GetMapping("/{noticeid}")
	public ResponseEntity<?> FindNotice(@PathVariable int noticeid) {
		System.out.println("find notice");
		return new ResponseEntity<>(noticeService.fetchNoticeDetails(noticeid), HttpStatus.OK);
	}
}
