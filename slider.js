var first = $('.slide').eq(0);
var count = $('.slide').length;
var last = $('.slide').eq(count -1);
var width = $('.slide').width();
first.addClass('prvi');
last.addClass("zadnji");
var translateX = 0;

$('#prev').click(function() 
{
  var slide = function() 
  {
    target = 0;
    console.log($('.prvi').index());		
    nextSlide(target);
		console.log(target)
  }

  var nextSlide = function(target) 
  {
    $('.slide').removeClass('prvi').eq(target + 1).addClass('prvi');
   	element_clone = $('.slide').eq(target).clone();
    $('.slide').eq(target).remove();
    $('#top').append(element_clone);
  }
  slide();

});

$('#next').click(function() 
{
  var slide = function() 
  {
    target = 8;
    console.log($('.zadnji').index());
    nextSlide(target);
		console.log(target)
  }

  var nextSlide = function(target) 
  {    
    $('.slide').removeClass('zadnji').eq(target - 1).addClass('zadnji');
   	element_clone = $('.slide').eq(target).clone();
    $('.slide').eq(target).remove();
    $('#top').prepend(element_clone);
  }
  slide();
});


