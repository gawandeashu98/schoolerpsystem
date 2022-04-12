package com.app.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.ITimetableDao;
import com.app.dto.AddTimetable;
import com.app.dto.ResourceNotFoundException;
import com.app.dto.SearchTimetable;
import com.app.pojos.Timetable;

@Service
@Transactional
public class TimetableServiceImpl implements ITimetableService {
	@Autowired
	private ITimetableDao timetabledao;
//	@Autowired
//	private IFindTimetableDao findtimetabledao;

	@Override
	public int addOrUpdateTimetableDetails(AddTimetable t) {
		// TODO Auto-generated method stub
		int row = timetabledao.addTimetable(t.getDate(), t.getCls(), t.getSubject(), t.getTime(), t.getFname(),
				t.getLname());
		return row;
	}

//	@Override
//	public List<FindTimetable> fetchTimetableDetails(String date, String cls) {
//		// TODO Auto-generated method stub
//		List<FindTimetable> t=timetabledao.findTimetable(date,cls);
//		System.out.println("Printing timetable data");
//		t.forEach(s-> System.out.println(s));
//		return t;
//	}
	
	@Override
	public List<Timetable> fetchTimetableDetails(SearchTimetable t) {
		// TODO Auto-generated method stub
		System.out.println("in findtimetable service");
		return timetabledao.findByDateAndCls(LocalDate.parse(t.getDate()),t.getCls());
	}

	@Override
	public Timetable fetchTimetable(int timetableid) {
		return timetabledao.findById(timetableid)
				.orElseThrow(() -> new ResourceNotFoundException("Timetable not found!!!!"));
	}

	@Override
	public int updateTimetableDetails(AddTimetable t) {
		// TODO Auto-generated method stub
		int row = timetabledao.updateTimetable(t.getId(),t.getDate(), t.getCls(), t.getSubject(), t.getTime(), t.getFname(),
				t.getLname());
		return row;
	}

	
}
