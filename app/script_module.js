// JavaScript Document
	$(document).ready(function(e) {
		
	//var _boxsize = boxwidth.split("|");
	//var QtextWidth =parseInt(_boxsize[0])+parseInt(_boxsize[1]);	
		
	var ouputvar,rept=0; 
	var ftLoop = parseInt(FTLoop,10), _count = 0, _FTIntro = FTIntro.split("|"), _message = message.split("|"), _option = option.split("|");
	var _FTLoop = ftLoop/2;
	
	
	var _shuffle = function (input,indxArr) {
	  for (var i = input.length - 1; i > 0; i--) {
		var randomIndex = Math.floor(Math.random() * (i + 1));
		var itemAtIndex = input[randomIndex];
		var o = indxArr[randomIndex];
		input[randomIndex] = input[i];
		indxArr[randomIndex] = indxArr[i];
		input[i] = itemAtIndex;
		indxArr[i] = o;
	  }
	  return {
		  'A':input,
		  'B':indxArr
	  }
	}
	function createArr(arr,_val){ 
		  var arrs = new Array();
		  for(var o=0;o<arr;o++){
		   if(_val=='zero')
		   arrs.push(0);
		   else
		   arrs.push(o+1);
		  }
		  return arrs;
	}
	  
	var indexArr = createArr(_FTIntro.length,"Nozero");
	ouputvar = createArr(_FTIntro.length,"zero");
	var newArr = _shuffle(_FTIntro,indexArr);
	
	/*$(".ansBlck").html('<p>'+qtxt+'</p><div class="btnCl01 tabBG" id="msgblck1" data-info="1" style=" margin-right:5%;"><div class="tabTextarea"><p>'+msg[0]+'</p></div></div><div class="btnCl01 tabBG" id="msgblck2" data-info="2" style=""><div class="tabTextarea"><p>'+msg[1]+'</p></div></div><div class="clearAll"></div><div class="timeBlock"><span><b id="show-time"></b></span></div>'); */
	
	
	
	function questionAnswerTxt(qtxt,msg){
		$(".ansBlck").html('<p>'+qtxt+'</p><div class="btnCl01 tabBG" id="msgblck1" data-info="1" style=" margin-right:5%;"><div class="tabTextarea"><p>'+msg[0]+'</p></div></div><div class="btnCl01 tabBG" id="msgblck2" data-info="2" style=""><div class="tabTextarea"><p>'+msg[1]+'</p></div></div><div class="clearAll"></div><div class="timeBlock"><span><b id="show-time"></b></span></div>');
		$("#fwdBttn").hide();
		callsetTimer();
	}
	
	questionAnswerTxt(newArr.A[_count],_message);
	function showMessage(){ 
		$("#msgblck"+rept).html("<div class='tabTextarea'><h1>"+_option[rept-1]+"</h1></div>");
		//$(".timeBlock").hide();
		$("#msgblck2").css("visibility","visible");
		if(rept<=1){
			callsetTimer();
		}
		else{	
			$("#msgblck1").css("visibility","visible");
			$(".btnCl01").click(function(){
				var getcurrentAttr=$(this).attr("data-info");
				//$("#nextBtnId").html('<input type="button" class="fwdBttn" id="fwdBttn" value=">>>" />');
				$(".seleted").remove();
				$(this).append("<div class='seleted'></div>");
				ouputvar[newArr.B[_count]-1] = getcurrentAttr;
				outputValues(ouputvar);
				$("#fwdBttn").show();
			});
			$('.btnCl01').css( 'cursor', 'pointer' );
		}
	}
	$("#fwdBttn").click(function(){
		++_count;
		if(_count<_FTIntro.length)
		questionAnswerTxt(newArr.A[_count],_message);
	})	
	function callsetTimer(){
		++rept;
		$("b[id=show-time]").html(_FTLoop);
			var tiId = setInterval(function() {
				var timeCounter = $("b[id=show-time]").html();
				var updateTime = eval(timeCounter)- eval(1);
				$("b[id=show-time]").html(updateTime);
				if(updateTime <= 0 ){
					clearInterval(tiId);
					$("#msgblck1").css("visibility","hidden");
					showMessage();
				}
			}, 1000);
	};

});