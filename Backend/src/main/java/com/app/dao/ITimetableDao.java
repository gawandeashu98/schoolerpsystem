package com.app.dao;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Timetable;

public interface ITimetableDao extends JpaRepository<Timetable, Integer> {
	@Modifying
	@Query(value = "insert into timetable (date,class,subject,time,faculty_id) values (:date,:cls,:subject,:time,(select id from faculty where fname=:fname and lname=:lname))", nativeQuery = true)
	int addTimetable(@Param("date") String date, @Param("cls") String cls, @Param("subject") String subject,
			@Param("time") String time, @Param("fname") String fname, @Param("lname") String lname);

	List<Timetable> findByDateAndCls(LocalDate date, String cls);

	Optional<Timetable> findById(int timetableid);
	
	@Modifying
	@Query(value = "update timetable set date=:date,class=:cls,subject=:subject,time=:time,faculty_id=(select id from faculty where fname=:fname and lname=:lname) where id=:tid", nativeQuery = true)
	int updateTimetable(@Param("tid") int id,@Param("date") String date, @Param("cls") String cls, @Param("subject") String subject,
			@Param("time") String time, @Param("fname") String fname, @Param("lname") String lname);

}
