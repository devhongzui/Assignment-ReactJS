<?php

return [
    'exception_message' => 'Thông báo ngoại lệ: :message',
    'exception_trace' => 'Dấu vết ngoại lệ: :trace',
    'exception_message_title' => 'Thông báo ngoại lệ',
    'exception_trace_title' => 'Dấu vết ngoại lệ',

    'backup_failed_subject' => 'Sao lưu :application_name không thành công',
    'backup_failed_body' => 'Quan trọng: Đã xảy ra lỗi khi sao lưu :application_name',

    'backup_successful_subject' => 'Sao lưu mới thành công :application_name',
    'backup_successful_subject_title' => 'Sao lưu mới thành công!',
    'backup_successful_body' => 'Tin vui, bản sao lưu mới của :application_name đã được tạo thành công trên đĩa có tên :disk_name.',

    'cleanup_failed_subject' => 'Không thể dọn dẹp bản sao lưu của :application_name.',
    'cleanup_failed_body' => 'Đã xảy ra lỗi khi dọn dẹp bản sao lưu của :application_name',

    'cleanup_successful_subject' => 'Dọn dẹp các bản sao lưu :application_name thành công',
    'cleanup_successful_subject_title' => 'Dọn dẹp các bản sao lưu thành công!',
    'cleanup_successful_body' => 'Việc dọn dẹp các bản sao lưu :application_name trên đĩa có tên :disk_name đã thành công.',

    'healthy_backup_found_subject' => 'Các bản sao lưu cho :application_name trên đĩa :disk_name vẫn hoạt động bình thường',
    'healthy_backup_found_subject_title' => 'Các bản sao lưu cho :application_name vẫn hoạt động bình thường',
    'healthy_backup_found_body' => 'Các bản sao lưu cho :application_name được coi là tốt. Làm tốt lắm!',

    'unhealthy_backup_found_subject' => 'Quan trọng: Các bản sao lưu cho :application_name không tốt',
    'unhealthy_backup_found_subject_title' => 'Quan trọng: Các bản sao lưu cho :application_name không tốt. :vấn đề',
    'unhealthy_backup_found_body' => 'Các bản sao lưu cho :application_name trên đĩa :disk_name không tốt.',
    'unhealthy_backup_found_not_reachable' => 'Không thể truy cập được đích dự phòng. :lỗi',
    'unhealthy_backup_found_empty' => 'Không có bản sao lưu nào của ứng dụng này cả.',
    'unhealthy_backup_found_old' => 'Bản sao lưu mới nhất được thực hiện vào :date được coi là quá cũ.',
    'unhealthy_backup_found_unknown' => 'Xin lỗi, không thể xác định được lý do chính xác.',
    'unhealthy_backup_found_full' => 'Các bản sao lưu đang sử dụng quá nhiều dung lượng. Mức sử dụng hiện tại là :disk_usage cao hơn giới hạn cho phép của :disk_limit.',

    'no_backups_info' => 'Chưa có bản sao lưu nào được thực hiện',
    'application_name' => 'Tên ứng dụng',
    'backup_name' => 'Tên dự phòng',
    'disk' => 'Đĩa',
    'newest_backup_size' => 'Kích thước sao lưu mới nhất',
    'number_of_backups' => 'Số bản sao lưu',
    'total_storage_used' => 'Tổng dung lượng đã sử dụng',
    'newest_backup_date' => 'Ngày sao lưu mới nhất',
    'oldest_backup_date' => 'Ngày sao lưu cũ nhất',
];
