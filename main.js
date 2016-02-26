

$(document).ready(init);
function init() {
	console.log('ready!')
    $('.cup').on('click', clickCup);
	$('#holder').on('click', '.cup', clickCup);
	$('#table').on('click', '.cup', clickCup);
	$('#three').on('click', '.cup', clickCup);
	$('#num').on('click', addMore);
	$('#name').on('click', addItem);
	$itemName = $('#text');
    $itemValue = $('#num');
	//$('#name').on('click', addName);

	//$('#addCup').on('click', addCup);
}

function clickHolder(event) {
	console.log('event:', event);
	event.stopPropogation();
}
/*
	//if( $('.cup').hasClass('selected'));
	if( $('.selected').length){
	  $('.selected').appendTo($(this));
	  $('.selected').removeClass('selected');
	} 
*/

function clickCup() {
    var $detached = $(this).detach();
 	$('#table').append($detached);
 	console.log('click cup');

 	}
    $( "#table" ).click(function( event ) {
    var target = $( event.target );
    if ( target.hasClass( "cup" ) ) {
      target.detach();
      $('#three').append(target); 

    }
  });
 	$( "#three" ).click(function( event ) {
    var target = $( event.target );
    if ( target.hasClass( "cup" ) ) {
      target.detach();
      $('#holder').append(target); 

    }

  });
    
    $( "#table" ).dblclick(function( event ) {
    var target = $( event.target );
    if ( target.is( ".cup" ) ) {
      target.detach();
      $('#holder').append(target); 

    }
  });
  /*	
 	$( "#table" ).dblclick(function( event ) {
    var target = $(".cup");
    if ( target.is( "#table" ) ) {
      target.detach();
      $('#holder').append(target); 

    }
});
 /*	
 	function clickSection() {
 		var $detached = $(this).detach();
 		$('.section').append($detached);
 	}
*/ 
/*
function addItem(){
	var name = $('#text').val();
	var value = $('#num').val();
	$itemName.val('');
	$itemValue.val(0);
	$('#holder').append();
	var $cup = $('<div>').addClass('cup');
	var $name = $('<div>').addClass('.name').text(name);
	var $value = $('<div>').addClass('.value').text(value);

	$cup.append($name, $value);
}
*/
 function addMore() {
 	var colorArray = ['#E70EFF', '#FF0D11', '#282786', '#12FF0D', '#63FF30', '#3C0785', '#EB0009', '#042DFF', '#FCD5E6', '#8AFBFF', '#FF5AC3', '#FF4111', '#0C0D86', '#FFCD0C'];
 	console.log('add cup');
 	var numCups = $('#num').val();
 	for(var i = 0; i < numCups; i++){
 		var $cup = $('<div>');
 		$cup.addClass('cup');
 		$cup.on('click', clickCup);
 		$('#holder').append($cup);
 	    var randomColor = colorArray[Math.floor(Math.random() * colorArray.length)]
 		$cup.css({'background': '' + randomColor });
 	}
//});
}
function addName(){
var name = $('#name').val();
 	$(function(){
    $(".cup").each(function(){
        if (!$(this).attr('id')){
            $(this).append(name); 
        }
    });
});
}
/*
var $span = $('<span>')
var $joe = $('#joe').val(30).attr(Joe);
 console.log($joe + typeof + '$joe');
 var $jim = $('#jim').val(15).attr(Jim);
 console.log($jim + typeof + '$joe');
 var $john = $('#john').val(20);
 console.log($john + '$joe');
 var $bob = $('#bob').val(10);
 var $ann = $('#ann').val(25);
 var $lou = $('#lou').val(35);

 $('.section').each(function(){
    var totalAge = 0;
    $(this).find('.cups').each(function(i, n){
    	totalAge += parseInt($(n).val(), 10);
    });
    var $displayNum = totalAge;
    $('<h3>').append($displayNum); 
 })	
 	$cup.click(function(event) {
 		var target = $(event.target);
 		if (!$(target.hasClass("cup"))

 	});
}
	
$('#submit').on('click', function(){
  	var age = $('#num').val();
	$('<tr>').hasClass('.age').append('<td>' + age + '</td>');
	var name = $('#text').val();
	$('<tr>').hasClass('.name').append('<td>' + name + '</td>');
  	});


/*
function dblClick() {
 		$('#table').on('dblclick', '.cup', dblClick);
 		var $retached = $(this).detach();
 		$('#holder').append($retached);
}




 		$('#holder').on('dblclick', '.cup', dblClick);
 		var $retached = $(this).detach();
 		$('#three').append($retached);

 	}
 	
$('#joe').dblclick, function(){
var $joe = $('#joe').val(30);
$('#joe').append($joe);	
}
 /*
 var $joe = $('#joe').val(30).attr(Joe);
 console.log($joe + typeof + '$joe');
 var $jim = $('#jim').val(15).attr(Jim);
 console.log($jim + typeof + '$joe');
 var $john = $('#john').val(20);
 console.log($john + '$joe');
 var $bob = $('#bob').val(10);
 var $ann = $('#ann').val(25);
 var $lou = $('#lou').val(35);

 $('.section').each(function(){
    var totalAge = 0;
    $(this).find('.cups').each(function(i, n){
    	totalAge += parseInt($(n).val(), 10);
    });
    var $displayNum = totalAge;
    $('<h3>').append($displayNum); 
 })	
 	


*/