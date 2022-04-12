package com.app.controller;

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

import com.app.dto.AddAttendance;
import com.app.dto.FetchStdAttendance;
import com.app.dto.StudentAttendance;
import com.app.service.IAttendanceService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/attendance")
public class AttendanceController {
	@Autowired
	private IAttendanceService attService;

	public AttendanceController() {
		System.out.println("in attendance constructor " + getClass());
	}

	// add Attendance date/class/remark/subject/roll
	@PostMapping("/addattendance")
	public ResponseEntity<?> AttendanceDetails(@RequestBody AddAttendance n) {
		System.out.println("add attendance");
		System.out.println(n.getCls()+" "+n.getDate()+" "+n.getRemark()+" "+n.getMyrollno()+" "+n.getSubject());
		return new ResponseEntity<>(attService.addOrUpdateAttendanceDetails(n), HttpStatus.OK);
	}

	// update student attendance date/class/remark/subject/roll
//	@PutMapping("/updateattendance")
//	public ResponseEntity<?> UpdateStudent(@RequestBody AddAttendance n) {
//		System.out.println("update Attendance");
//		return new ResponseEntity<>(attService.addOrUpdateAttendanceDetails(n), HttpStatus.OK);
//	}

	// getAll student attendance by date/class/subject
	@PostMapping("/getall")
	public ResponseEntity<?> getAllStudentAttendance(@RequestBody FetchStdAttendance std) {
		System.out.println("in get all students");
		System.out.println(std.getDate()+" "+std.getCls()+" "+std.getSubject());
		return new ResponseEntity<>(attService.getAllAttendance(std), HttpStatus.OK);
	}

	// fetch particular student attendance by roll/date
	@PostMapping("/fetchatt")
	public ResponseEntity<?> FindAttendance(@RequestBody StudentAttendance st) {
		System.out.println("find attendance");
		System.out.println(st.getMyrollno()+" "+st.getDate());
		return new ResponseEntity<>(attService.fetchStudentAttendance(st), HttpStatus.OK);
	}
}
