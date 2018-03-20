$(function(){
	//三级联动
	!function () {
        var $target = $('#city');

        $target.citySelect();

        $target.on('click', function (event) {
            event.stopPropagation();
            $target.citySelect('open');
        });

        $target.on('done.ydui.cityselect', function (ret) {
            $(this).val(ret.provance + ' ' + ret.city + ' ' + ret.area);
        });
    }();
    $('#city').on('click',function(){
    	$(this).blur();
    });
    
    $('.input select').change(function(){
		$(this).prev('p').html($(this).children('option:selected').val());
	});
	$("#clipArea").photoClip({
			width: 200,
			height: 200,
			file: "#file",
			view: ".view",
			ok: "#clipBtn",
			loadStart: function() {
				$('#clipArea').show();
				//开启加载页面
			},
			loadComplete: function() {
				console.log("照片读取完成");
				//关闭加载页面
			},
			clipFinish: function(dataURL) {
				$('.view').attr('src',dataURL);
				$('#clipArea').hide();

			}	
		});
});
