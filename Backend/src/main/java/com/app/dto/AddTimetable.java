package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class AddTimetable {
	private int id;
	private String date;
	private String cls;
	private String subject;
	private String time;
	private String fname;
	private String lname;


}
