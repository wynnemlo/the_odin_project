/*
 * Once document is ready
 */
$(document).ready(function() {
	// retrieve sketchboard total size from CSS
	var sizeString = $('.gridtable').css("width");
	var size = parseInt(sizeString);
	// instantiate sketchboard
	createDiv(16, 16, size);
	
	/*
	 * Events
	 */

	// when new grid requested
	$('#newgrid').submit(function(event) {
		$('.gridtable').html("");
		$('.error').hide();
		var newSize = +$('#gridsize').val();
		if (newSize >= 10 && newSize <= 100) {
			createDiv(newSize, newSize, size);
			return;
		} else {
			$('.error').slideDown();
		}
	});

	// when mouse enters block, highlight block
	$('.gridtable').on('mouseenter', '.gridblock', function() {
		$(this).addClass('highlight');
	})

});

/*
 * Creates the specified number of div given row and column number
 */
function createDiv (row, col, size) {
	var html = "";
	// define a grid block
	var block = '<div class="gridblock"></div>';
	
	// create i * j grid blocks
	for (var i = 0; i < row; i++) {
		html+= '<div class="gridrow">';
		for (var j = 0; j < col; j++) {
				html+= block;
		}
		html+= '</div>';
	}
	// add blocks to gridtable
	$('.gridtable').html(html);
	// define block's dimensions
	$('.gridblock').css({width : (size / row),
					 height: (size / col)});
}