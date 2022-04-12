package com.app.dao;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Attendance;

public interface IAttendanceDao extends JpaRepository<Attendance, Integer> {
	@Modifying
	@Query(value = "insert into attendance(date,class,remark,subject,roll_no) values (:date,:cls,:remark,:subject,:rollno)", nativeQuery = true)
	int saveAttendance(@Param("date") String date, @Param("cls") String cls, @Param("remark") String remark,
			@Param("subject") String subject, @Param("rollno") int rollno);

	List<Attendance> findByDateAndClsAndSubject(LocalDate date, String cls, String subject);

	@Query(value = "select * from attendance where roll_no=:rollNo and date=:dt", nativeQuery = true)
	List<Attendance> getRollNoAndDate(@Param("rollNo") int rollNo, @Param("dt") String date);
}
