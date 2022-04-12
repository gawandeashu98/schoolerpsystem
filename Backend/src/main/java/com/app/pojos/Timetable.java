package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "timetable")
@NoArgsConstructor
@Data
public class Timetable extends BaseEntity{
	@NotNull(message = "Date can't be blank")
	private LocalDate date;
	@NotEmpty(message = "class can't be blank")
	@Column(name = "class", length = 5)
	private String cls;
	@NotEmpty(message = "Subject can't be blank")
	@Column(length = 15)
	private String subject;
	@NotEmpty(message = "Time can't be blank")
	@Column(length = 20)
	private String time;
	@ManyToOne()
	@JoinColumn(name = "faculty_id", nullable = false)
	private Faculty assignedFaculty;

	public Timetable(LocalDate date, String cls, String subject, String time) {
		super();
		this.date = date;
		this.cls = cls;
		this.subject = subject;
		this.time = time;
	}

}
