package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Student;

public interface IStudentDao extends JpaRepository<Student, Integer> {
	Optional<Student> findByUserNameAndPassword(String userName, String password);

//	@Query("select s from Student s join fetch s.attendance join fetch s.marks where s.userName=:userName and s.password=:password")
//	Optional<Student> findByUserNameAndPassword(@Param("userName") String userName, @Param("password") String password);
	Optional<Student> findById(int studentid);
	
	@Modifying
	@Query(value = "update student set class=:tocls where class=:fromcls and id=(select roll_no from marks where remark='Pass' group by roll_no having count(*)=12);", nativeQuery = true)
	int pramoteStudentClass( @Param("fromcls") String fromcls, @Param("tocls") String tocls);
}
