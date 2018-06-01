$(document).ready(function(){

	function getChildElem(acid) {
		var elements = document.querySelectorAll('[data-parent="'+acid+'"]');
		$(elements).show(300);
	//	console.log(elements);
		if((elements)&&(elements.length>0) ){
			$flag=1;
		}else{
			$flag=0;
		}
	}
	
	function showHint(hid) {
		var elem = document.getElementById(hid);
		var title = elem.dataset.titles;
		var styles = getComputedStyle(elem);
		var fromtop = parseInt(styles.top);
		var fromleft = parseInt(styles.left);
		fromtop = fromtop+5;
		fromleft = fromleft+66;
		$('#names').empty().append(title).css('top',fromtop).css('left',fromleft).show();
	}
	
    $('.lvl1').on('click', function(e) {
		e.preventDefault();
		if ($(".lvl2").is(":visible") == true) { 
			$('.lvl2, .lvl3, .lvl4').hide(300);
		}else{
			$('.lvl2').show(300);
		}
    });
	
	$('.lvl2').on('click', function(e) {
		$('.lvl3, .lvl4').hide(300);
		getChildElem(this.id);
//		console.log($flag);
		if ($flag === 1){
			return false;
		}
    });
	
	$('.lvl3').on('click', function() {
		$('.lvl4').hide(300);
		getChildElem(this.id);
		if ($flag === 1){
			return false;
		}
    });
	
	$('.gexa').hover(
	function(){
	    showHint(this.id);
	},
	function(){
		$('#names').hide();
	});

});

