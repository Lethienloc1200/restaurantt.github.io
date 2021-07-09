 $(function(){
 	var  khoimonan = $('.nhieumon').isotope({
	  itemSelector: '.motmon',
	  layoutMode: 'masonry',
	  
	});
		khoimonan.imagesLoaded().progress( function() {
	  	khoimonan.isotope('layout');
	});

	$('.tieudechitiet a').click(function(){
		dulieu =$(this).data('monan');
		console.log(dulieu);
		khoimonan.isotope({filter: dulieu})
		return false;
	});




	// Xu ly risponssive  phan bi tran man hinh
			soluongmon = $('.motmon').length;
			docao = soluongmon * $('.motmon').height();
			console.log(docao);

			$('.noidungchitiet').css({'height':docao})
	// het xu lys risponssive  phan bi tran man hinh








	// =================wow==================
	wow = new WOW(
	  {
		animateClass: 'animated',
		offset:       100,
		callback:     function(box) {
		  console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
		}
	  }
	);
	wow.init();

})  
 