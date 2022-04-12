package com.app.pojos;

import java.util.ArrayList;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "faculty")
@NoArgsConstructor
@Data
public class Faculty extends BaseEntity {
	@NotEmpty(message = "First Name can't be blank")
	@Length(message = "Invalid First Name length!!!!")
	@Column(name = "fname", length = 30)
	private String fname;
	@NotEmpty(message = "Last Name can't be blank")
	@Length(message = "Invalid Last Name length!!!!")
	@Column(name = "lname", length = 30, unique = true)
	private String lname;
	@NotEmpty(message = "gender can't be blank")
	@Column(length = 15)
	private String gender;
	@NotEmpty(message = "Email can't be blank")
	@Column(length = 30)
	private String email;
	@Length(max = 13, message = "contact number must be of 10 characters")
	@Length(min = 10, message = "contact number must be of 10 characters")
	private String contact;
	@NotEmpty(message = "Expertise can't be blank")
	@Column(length = 30)
	private String expertise;
	@NotEmpty(message = "Experience can't be blank")
	@Column(length = 30)
	private String experience;
	@NotEmpty(message = "address must be provided")
	@Column(length = 100)
	private String address;
	@JsonIgnore
	@OneToMany(mappedBy = "assignedFaculty", cascade = CascadeType.ALL,orphanRemoval = true)
	private java.util.List<Timetable> timetable = new ArrayList<>();

	public Faculty(String fname,String lname, String gender, String email,String contact,String expertise,String experience,String address) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.gender = gender;
		this.email = email;
		this.contact = contact;
		this.expertise = expertise;
		this.experience = experience;
		this.address = address;
	}
}
