package com.app.service;

import java.util.List;

import com.app.dto.AddTimetable;
import com.app.dto.SearchTimetable;
import com.app.pojos.Timetable;

public interface ITimetableService {
	int addOrUpdateTimetableDetails(AddTimetable t);

//	List<FindTimetable> fetchTimetableDetails(String date, String cls);

	List<Timetable> fetchTimetableDetails(SearchTimetable t);
	
	Timetable fetchTimetable(int timetableid);
	
	int updateTimetableDetails(AddTimetable t);
}
