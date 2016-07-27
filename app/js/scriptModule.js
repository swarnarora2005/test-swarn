// JavaScript Document
$(document).ready(function(){
var optionAttr = optionStr.split("|");
var num = 0;
var circleList = "";
var stList = "";
var gap = 100;
var _top = 10;
var _left = 0;
var indexZ = 230;
var bgcolorA = Circlebg.split("|");
var borderClrA = borderClr.split("|");
var circleHeight = circleWidth;
var outputArray = [];

	$(".mancontainer").append('<div class="leftBlock"><div class="leftIn"><ul id="startList"></ul></div></div><div class="rightBlock"></div><div class="clearAll"></div>').css({"height":(parseInt(circleHeight)+35)+"px","width":(parseInt(circleWidth)+355)+"px"});
	$(".rightBlock").css({"width":circleWidth+"px"});
	
	for(var i=0; i<bgcolorA.length; i++){
	var bdrRadis = 'border-radius:'+circleWidth+'px; -webkit-border-radius:'+circleWidth+'px; -moz-border-radius:'+circleWidth+'px; -o-border-radius:'+circleWidth+'px;';
	circleList +='<div class="circle cursor" id='+(bgcolorA.length-parseInt(i))+' style="width:'+circleWidth+'px; height:'+circleHeight+'px; top:'+_top+'px; left:'+_left+'px; background:'+bgcolorA[i]+'; border:dashed 2px '+borderClrA[i]+';'+bdrRadis+'">&nbsp;</div>'
	circleWidth -= gap, circleHeight -= gap, _top += gap/2; _left += gap/2;
	}
	for(var i=0; i<optionAttr.length; i++){
		stList += "<li class='l1' id='oplist"+i+"' style='top:"+35*i+"px; z-index:"+indexZ+";'>"+optionAttr[i]+"<span class='pinBlck pinAddded'></span></li>";
	}
	
	$("#startList").append(stList);
	$(".rightBlock").append(circleList);
	
	$(".circle").click( function(event) { 
		var _padding = 25;
		var lftMargin = 12;
		var tpMargin = 10;
		var $elm = $(".leftIn");
		var offst = $(".mancontainer").offset();
		var _lft = event.pageX - offst.left-$elm.find("ul > li").width()/2-_padding-lftMargin;
		var _top = event.pageY-99;
		$("#oplist"+num).find("span").removeClass("pinAddded");
		$("#oplist"+num++).animate({top:_top, left:_lft},200).addClass("transition");				
		if(num==optionAttr.length) $(".circle").off("click");
		outputArray.push(event.target.id);
		
		
		/*var _objWdth = $(this).width();
		var ofset = $(this).offset();
		var mseX = (event.pageX - ofset.left-_objWdth/2);
		var mseY = (event.pageY - ofset.top-_objWdth/2);
		//var mse = Math.floor(Math.sqrt(Math.pow(Math.abs(mseX),2)+Math.pow(Math.abs(mseY),2)));
		var mse = Math.floor(Math.sqrt(Math.pow((mseX),2)+Math.pow((mseY),2)));
		//var perct = ((_objWdth/2 - mse)/_objWdth/2)*100;
		//var perct = 100-(Math.floor(Math.abs((-_objWdth/2 + mse)/_objWdth/2*100)*4));
		//console.log(mse," DD ",event.pageX," :: ",ofset.left ,"    mseX:",Math.abs(mseX)," mseY:",Math.abs(mseY)," perct:",perct);*/
		
		outputValue(outputArray);
		
	});
});


