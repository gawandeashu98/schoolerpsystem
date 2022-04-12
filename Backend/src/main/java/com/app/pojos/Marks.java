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
@Table(name = "marks")
@NoArgsConstructor
@Data
public class Marks extends BaseEntity {
	@NotEmpty(message = "class can't be blank")
	@Column(name = "class", length = 5)
	private String cls;
	@NotEmpty(message = "Subject can't be blank")
	@Column(length = 15)
	private String subject;
	@NotNull(message = "Date can't be blank")
	private LocalDate date;
	@NotNull(message = "Obtained marks can't be blank")
	private int obt_marks;
	@NotNull(message = "Total marks can't be blank")
	private int total;
	@NotEmpty(message = "Remark can't be blank")
	@Column(length = 15)
	private String remark;
	@ManyToOne()
	@JoinColumn(name = "exam_id", nullable = false)
	private Exam examId;
	@ManyToOne()
	@JoinColumn(name = "roll_no", nullable = false)
	private Student rollNo;
}
