package com.app.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.IAttendanceDao;
import com.app.dto.AddAttendance;
import com.app.dto.FetchStdAttendance;
import com.app.dto.StudentAttendance;
import com.app.pojos.Attendance;

@Service
@Transactional
public class AttendanceServiceImpl implements IAttendanceService {
	@Autowired
	private IAttendanceDao attdao;

	//Add notice
		@Override
		public int addOrUpdateAttendanceDetails(AddAttendance n) {
			return attdao.saveAttendance(n.getDate(),n.getCls(),n.getRemark(),n.getSubject(),n.getMyrollno());	 
		}

		//getAll
		@Override
		public List<Attendance> getAllAttendance(FetchStdAttendance std) {
			// Method of JpaRepository : super i/f dao layer i/f
			// Inherited API : public List<T> findAll();
			return attdao.findByDateAndClsAndSubject(LocalDate.parse(std.getDate()),std.getCls(),std.getSubject());
		}

	@Override
	public List<Attendance> fetchStudentAttendance(StudentAttendance st) {
		return attdao.getRollNoAndDate( st.getMyrollno(), st.getDate());
	}

}
