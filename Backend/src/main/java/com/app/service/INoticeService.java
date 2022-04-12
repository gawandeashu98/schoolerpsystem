package com.app.service;

import java.util.List;

import com.app.pojos.Notice;

public interface INoticeService {
	Notice addOrUpdateNoticeDetails(Notice s);
	
	List<Notice> getAllNotices();
	
	String deleteNoticeDetails(int id);
	
	Notice fetchNoticeDetails(int noticeId);
}
