package com.app.service;

import java.util.List;

import com.app.dto.AddAttendance;
import com.app.dto.FetchStdAttendance;
import com.app.dto.StudentAttendance;
import com.app.pojos.Attendance;

public interface IAttendanceService {
	int addOrUpdateAttendanceDetails(AddAttendance s);

	List<Attendance> getAllAttendance(FetchStdAttendance std);

	List<Attendance> fetchStudentAttendance(StudentAttendance st);
}
