$('a').click(function() { 
    var thisA = $(this);
    $('.content').load(thisA.attr('href'));
  
    return false; 
 
}); 
  
