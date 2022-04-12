package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class GetResult {
	private int id;
	private String cls;
	private String subject;
	private String date;
	private int obtmarks;
	private int total;
	private String remark;
	private String fname;
	private String lname;
}
