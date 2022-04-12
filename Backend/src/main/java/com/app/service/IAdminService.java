package com.app.service;

import java.util.List;

import com.app.dto.AdminRequest;
import com.app.pojos.Admin;
import com.app.pojos.Student;

public interface IAdminService {
	Admin addOrUpdateAdminDetails(Admin a);

	Admin getUserNamenPw(AdminRequest request);
	
	Admin fetchAdminDetails(int adminid);
	
	String deleteAdminDetails(int id);
	
	List<Admin> getAllAdmins();
}
