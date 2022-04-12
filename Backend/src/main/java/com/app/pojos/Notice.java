package com.app.pojos;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "notice")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Notice extends BaseEntity {
	@NotEmpty(message = "Description can't be blank")
	private String description;
}
