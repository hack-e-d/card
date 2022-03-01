/* Testing jQuery Flip plugin: https://nnattawat.github.io/flip/
*/
 
/* Set Flip Parameters */
 $("#card").flip({
	axis: 'y',
	trigger: 'manual'   
}); 
  
$("#flip-link").click(function() {
	$("#card").flip(true);		
	$("#card-back").show();		
});

$("#contentContainer").click(function() {
	$("#card").flip(false);		
});

