package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AddMarks;
import com.app.dto.GetMarks;
import com.app.dto.GetResult;
import com.app.dto.StudentMarks;
import com.app.service.IMarksService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/marks")
public class MarksController {
	@Autowired
	private IMarksService marksService;

	public MarksController() {
		System.out.println("in marks constructor " + getClass());
	}

	// add marks
	// cls,subject,date,obt_marks,total,remark,examId,rollNo
	@PostMapping("/addmarks")
	public ResponseEntity<?> ModifyMarks(@RequestBody AddMarks m) {
		System.out.println("add marks");
		System.out.println(m.getCls() + " " + m.getDate() + " " + m.getExamid() + " " + m.getMyrollno() + " "
				+ m.getObtmarks() + " " + m.getRemark() + " " + m.getSubject() + " " + m.getTotal());
		return new ResponseEntity<>(marksService.addOrUpdateMarksDetails(m), HttpStatus.OK);
	}

//	// update
	@PutMapping
	public ResponseEntity<?> UpdateMarks(@RequestBody  GetResult n) {
		System.out.println("update marks");
		return new ResponseEntity<>(marksService.updateMarksDetails(n), HttpStatus.OK);
	}

	// get particular
	// examId,rollNo,cls
	@PostMapping("/getparticular")
	public ResponseEntity<?> getOneStudentMarks(@RequestBody GetMarks m) {
		System.out.println("in get all marks");
		return new ResponseEntity<>(marksService.getStudentMarks(m), HttpStatus.OK);
	}

	// examId,class,subject
	@PostMapping("/getall")
	public ResponseEntity<?> getAllStudentMarks(@RequestBody StudentMarks m) {
		System.out.println("in get all marks");
		System.out.println(m.getCls()+" "+m.getExamid()+" "+m.getSubject());
		return new ResponseEntity<>(marksService.getClassMarks(m), HttpStatus.OK);
	}

	// get by resultid
	@GetMapping("/{resultid}")
	public ResponseEntity<?> getStudentMarks(@PathVariable int resultid) {
		System.out.println("in marks get pocess");
		return new ResponseEntity<>(marksService.getMarks(resultid), HttpStatus.OK);
	}
}
