// Select size input
// When size is submitted by the user, call makeGrid()
var row;
var column;
//action when submit is clicked
$('#sizePicker').submit(function(event){
	event.preventDefault();
	row = $('#inputHeight').val();
	column = $('#inputWidth').val();
	makeGrid(row, column);
});

//function to set table rows and columns
function makeGrid(r,c) {
	$('tr').remove();
	for ( var i = 1; i <= r; i++){
		$('#pixelCanvas').append('<tr id=tableRow' + i + '></tr>');
			for ( var j = 1; j <= c; j++){
			$('#tableRow' + i).append('<td></td>');
			}
  }
  
//fuction to reset	
	$('#reset').click(function(){
		$('td').remove();
	});
	
//function to add or remove color
	$('td').click(function addColor(){
		color = $('#colorPicker').val();
		if($(this).attr('style')){
			$(this).removeAttr('style');
		}
		else {
			$(this).attr('style', 'background-color:' + color);
		}
	});
}
