$(function(){
  $('#console-box').append('Reworked the Cohort Reg. Instrunctions into accordian style using js for my old high school. http://bjhs.madisoncity.k12.al.us/ Unfortantly, I could not get the Js Tabs to work or the console. ');
  
  $('li').click(function(){
    $('#console-box').append('<br>class:'+$(this).attr("class")+'|value:'+$(this).text()+'.');
    $(this).toggleClass('selected').siblings().removeClass('selected');
; 
  });
  
});

///$(function(){
  /// $('#Cohort').tabs();
 ///});

///$('#Cohort').tabs({
                    ///activate: function(event ,ui){
                        //console.log(event);
                        //console.log(ui.newTab.index());
                    }
//});

$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})