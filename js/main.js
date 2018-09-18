$(document).ready(function(){

	var text = $('#text1').text(),
		wordArray = [],
		splitWords = text.split(' '),
		counter = 400;

	$(splitWords).each(function(index){
		var markup = '<span style="position: relative; font-size:60px; right:' + counter + 'px"> ' + splitWords[index] + '</span>'
	wordArray.push(markup);
	counter = counter + 200;
	});

	var finallArray = wordArray. join(' ');
	$('#text1').html(finallArray);

	$('.wrapper').on('mouseenter', function(){
	var tl = new TimelineMax();
		
		tl.to(text, 1, {rotation: -180, left: -100, scale: 0.5, ease: Bounce.easeOut})
		.staggerTo($('#text1 span'), 0.5, {right: 0}, 1);
	});
});