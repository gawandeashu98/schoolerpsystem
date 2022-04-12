package com.app.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
public class SearchTimetable {
	private String date;
	private String cls;
	
	public SearchTimetable(String date, String cls) {
		this.date = date;
		this.cls = cls;
	}
}
