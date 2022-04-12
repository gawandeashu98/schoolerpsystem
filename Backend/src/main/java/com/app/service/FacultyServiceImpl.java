package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.IFacultyDao;
import com.app.dto.ResourceNotFoundException;
import com.app.pojos.Faculty;

@Service
@Transactional
public class FacultyServiceImpl implements IFacultyService {
	@Autowired
	private IFacultyDao facultydao;

	@Override
	public Faculty addOrUpdateFacultyDetails(Faculty f) {
		return facultydao.save(f);
	}

	@Override
	public List<Faculty> getAllFaculties() {
		return facultydao.findAll();
	}

	@Override
	public String deleteFacultyDetails(int id) {
		facultydao.deleteById(id);
		return "Faculty Details with ID " + id + " deleted successfuly... ";
	}

	@Override
	public Faculty fetchFacultyDetails(int facultyid) {
		return facultydao.findById(facultyid)
				.orElseThrow(() -> new ResourceNotFoundException("Faculty not found!!!!"));
	}

}
