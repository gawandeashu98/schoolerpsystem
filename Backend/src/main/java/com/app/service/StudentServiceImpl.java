package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.IStudentDao;
import com.app.dto.PromoteStudent;
import com.app.dto.ResourceNotFoundException;
import com.app.dto.StudentRequest;
import com.app.pojos.Student;

@Service
@Transactional
public class StudentServiceImpl implements IStudentService {
	@Autowired
	private IStudentDao studentdao;

	@Override
	public Student addOrUpdateStudentDetails(Student s) {
		return studentdao.save(s);
	}

	@Override
	public Student getUserNamenPw(StudentRequest request) {
		return studentdao.findByUserNameAndPassword(request.getUserName(), request.getPassword())
				.orElseThrow(() -> new ResourceNotFoundException("Student not found!!!!"));
	}

	@Override
	public Student fetchStudentDetails(int studentid) {
		return studentdao.findById(studentid)
				.orElseThrow(() -> new ResourceNotFoundException("Student not found!!!!"));
	}

	@Override
	public String deleteStudentDetails(int id) {
		studentdao.deleteById(id);
		return "Student Details with ID " + id + " deleted successfuly... ";
	}
	
	@Override
	public List<Student> getAllStudents() {
		// Method of JpaRepository : super i/f dao layer i/f
		// Inherited API : public List<T> findAll();
		return studentdao.findAll();// tx over => sesison closed , rets List of detached entities to the caller
	}

	@Override
	public int updateStudent(PromoteStudent student) {
		int row=studentdao.pramoteStudentClass(student.getFromcls(),student.getTocls());
		return row;
	}



	

}
