package com.app.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.IMarksDao;
import com.app.dto.AddMarks;
import com.app.dto.GetMarks;
import com.app.dto.GetResult;
import com.app.dto.ResourceNotFoundException;
import com.app.dto.StudentMarks;
import com.app.pojos.Marks;

@Service
@Transactional
public class MarksServiceImpl implements IMarksService {
	@Autowired
	private IMarksDao marksedao;

	@Override
	public int addOrUpdateMarksDetails(AddMarks n) {
		return marksedao.saveMarks(n.getCls(), n.getSubject(), n.getDate(), n.getObtmarks(), n.getTotal(),
				n.getRemark(), n.getExamid(), n.getMyrollno());
	}

	@Override
	public Collection<Marks> getStudentMarks(GetMarks m) {
		return marksedao.getExamIdAndRollNoAndCls(m.getExamid(), m.getMyrollno(), m.getCls());
	}

	@Override
	public Collection<Marks> getClassMarks(StudentMarks m) {
		return marksedao.getExamIdAndClsAndSub(m.getExamid(), m.getCls(), m.getSubject());
	}

	@Override
	public Marks getMarks(int resultid) {
		return marksedao.findById(resultid).orElseThrow(() -> new ResourceNotFoundException("MArks not found!!!!"));
	}

	@Override
	public int updateMarksDetails(GetResult n) {
		int row = marksedao.updateMarks(n.getCls(), n.getDate(), n.getObtmarks(), n.getRemark(), n.getSubject(),
				n.getTotal(), n.getFname(), n.getLname(),n.getId());
		return row;
	}

}
