package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class AddAttendance {
	private String date;
	private String cls;
	private String subject;
	private String remark;
	private int myrollno;
}
