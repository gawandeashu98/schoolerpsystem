package com.app.service;

import java.util.List;

import com.app.dto.PromoteStudent;
import com.app.dto.StudentRequest;
import com.app.pojos.Student;

public interface IStudentService {
	Student addOrUpdateStudentDetails(Student s);

	Student getUserNamenPw(StudentRequest request);

	Student fetchStudentDetails(int studentid);

	String deleteStudentDetails(int id);
	
	List<Student> getAllStudents();
	
	int updateStudent(PromoteStudent student);
}
