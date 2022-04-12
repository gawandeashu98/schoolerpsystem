package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.INoticeDao;
import com.app.dto.ResourceNotFoundException;
import com.app.pojos.Notice;

@Service
@Transactional
public class NoticeServiceImpl implements INoticeService {
	@Autowired
	private INoticeDao noticedao;

	//Add notice
	@Override
	public Notice addOrUpdateNoticeDetails(Notice n) {
		return noticedao.save(n);
	}

	//getAll
	@Override
	public List<Notice> getAllNotices() {
		// Method of JpaRepository : super i/f dao layer i/f
		// Inherited API : public List<T> findAll();
		return noticedao.findAll();// tx over => sesison closed , rets List of detached entities to the caller
	}
	
	//delete
	@Override
	public String deleteNoticeDetails(int id) {
		noticedao.deleteById(id);
		return "Notice Details with ID " + id + " deleted successfuly... ";
	}

	@Override
	public Notice fetchNoticeDetails(int noticeId) {
		return noticedao.findById(noticeId)
				.orElseThrow(() -> new ResourceNotFoundException("Notice not found!!!!"));
	}
	
	
}
