/**
 * Created by Administrator on 2017/2/16.
 */
$(function() {
    $('.doc-form-file').on('change', function() {
        var fileNames = '';
        $.each(this.files, function() {
            fileNames += '<span class="am-badge">' + this.name + '</span> ';
        });
        $('.file-list').html(fileNames);
    });
});