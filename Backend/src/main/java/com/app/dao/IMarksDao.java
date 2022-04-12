package com.app.dao;

import java.util.Collection;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Marks;

public interface IMarksDao extends JpaRepository<Marks, Integer> {

	// cls,subject,date,obt_marks,total,remark,examId,rollNo
	@Modifying
	@Query(value = "insert into marks(class,subject,date,obt_marks,total,remark,exam_id,roll_no) values"
			+ "(:cls,:subject,:date,:obt_marks,:total,:remark,:examId,:rollNo)", nativeQuery = true)
	// add or update attendance
	int saveMarks(@Param("cls") String cls, @Param("subject") String subject, @Param("date") String date,
			@Param("obt_marks") int obt_marks, @Param("total") int total, @Param("remark") String remark,
			@Param("examId") int examId, @Param("rollNo") int rollNo);

	@Query(value = "select * from marks where exam_id=:examId and roll_no=:rollNo and class=:cls", nativeQuery = true)
	Collection<Marks> getExamIdAndRollNoAndCls(@Param("examId") int examId, @Param("rollNo") int rollNo,
			@Param("cls") String cls);

	@Query(value = "select * from marks where exam_id=:examId and class=:cls and subject=:sub", nativeQuery = true)
	Collection<Marks> getExamIdAndClsAndSub(@Param("examId") int examId, @Param("cls") String cls,
			@Param("sub") String sub);

	Optional<Marks> findById(int resultid);

	@Modifying
	@Query(value = "update marks set class=:cls , date=:date , obt_marks=:obtmarks , remark=:remark , subject=:subject , total=:total , roll_no=(select id from student where fname=:fname and lname=:lname) where id=:markid", nativeQuery = true)
	int updateMarks(@Param("cls") String cls, @Param("date") String date, @Param("obtmarks") int obtmarks,
			@Param("remark") String remark, @Param("subject") String subject, @Param("total") int total,
			@Param("fname") String fname, @Param("lname") String lname, @Param("markid") int markid);
}
