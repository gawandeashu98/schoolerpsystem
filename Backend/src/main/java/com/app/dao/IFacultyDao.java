package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Faculty;

public interface IFacultyDao extends JpaRepository<Faculty, Integer>{
	Optional<Faculty> findById(int facultyid);
}
