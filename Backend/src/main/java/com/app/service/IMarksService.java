package com.app.service;

import java.util.Collection;

import com.app.dto.AddMarks;
import com.app.dto.GetMarks;
import com.app.dto.GetResult;
import com.app.dto.StudentMarks;
import com.app.pojos.Marks;

public interface IMarksService {
	// add or update marks
	int addOrUpdateMarksDetails(AddMarks s);

	Collection<Marks> getStudentMarks(GetMarks m);

	Collection<Marks> getClassMarks(StudentMarks m);

	Marks getMarks(int resultid);

	int updateMarksDetails(GetResult n);
}
