package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Admin;
import com.app.pojos.Student;

public interface IAdminDao extends JpaRepository<Admin, Integer> {
	Optional<Admin> findByUserNameAndPassword(String userName,String password);
	Optional<Admin> findByUserName(String userName);
	Optional<Admin> findById(int adminid);
}
