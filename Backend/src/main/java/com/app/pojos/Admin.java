package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

import org.hibernate.validator.constraints.Length;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "admin")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Admin extends BaseEntity {
	@NotEmpty(message = "First Name can't be blank")
	@Length(message = "Invalid First Name length!!!!")
	@Column(name = "fname", length = 30)
	private String fname;
	@NotEmpty(message = "Last Name can't be blank")
	@Length(message = "Invalid Last Name length!!!!")
	@Column(name = "lname", length = 30, unique = true)
	private String lname;
	@NotEmpty(message = "user name can't be blank")
	@Column(unique = true, length = 20)
	private String userName;
	@NotEmpty(message = "password  can't be blank")
	@Column(length = 20)
	private String password;
	@NotEmpty(message = "address can't be blank")
	@Column(length = 100)
	private String address;
	@Length(max = 13, message = "contact number must be of 10 characters")
	@Length(min = 10, message = "contact number must be of 10 characters")
	private String contact;
}
