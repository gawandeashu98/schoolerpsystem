package com.app.service;

import java.util.List;

import com.app.pojos.Faculty;

public interface IFacultyService {
	Faculty addOrUpdateFacultyDetails(Faculty f);

	List<Faculty> getAllFaculties();

	String deleteFacultyDetails(int id);

	Faculty fetchFacultyDetails(int facultyid);
}
