$(function(){
	waterFall()
})

function waterFall(){
	//求出列数
	var box = $(".box");
	var boxWidth = box.outerWidth(); //图片宽度 outerWidth() innerWidth()
	var screenWidth = $(window).width(); //整个屏幕的宽度

	var cols = parseInt(screenWidth/boxWidth);
	//创建数组
	var heightArr = [];

	//图片遍历，除第一排不需要定位，取高度值 其他排定位处理
	$.each(box,function(index,item){
		//取出对应图片的高速
		var boxHeight = $(item).outerHeight();
		if (index < cols) {//是不是第一排
			heightArr[index] = boxHeight;
		}else{
			//最小图片的高度，数组中最小的值
			var minBoxHeight = Math.min(...heightArr);
			//最小的索引 $.inArray 用于查找数组中指定值的索引，未找到则返回-1
			var minBoxIndex = $.inArray(minBoxHeight,heightArr);
			$(item).css({
				position:'absolute',
				left:minBoxIndex*boxWidth+'px',
				top:minBoxHeight+'px'
			})
			//高度追加
			heightArr[minBoxIndex] += boxHeight;
		}
	})
}