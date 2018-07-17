$(document).ready(function() {
	var swiper = new Swiper('.swiper-container', {
    // direction: 'vertical',
    // slidesPerView: 1,
    slidesPerView: 'auto',
    // spaceBetween: 30,
    mousewheel: false,
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
	});

	$('#fullpage').fullpage({
		anchors: ['hero', 'Expertise', 'Work', 'Skills'],
		menu: '#menu',
		scrollingSpeed: 900
	});

	// loop animation
	function animate() {
		var animate_text = $('.hero-section .typewrite-block b');
	
		animate_text.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
			var elem = $('.hero-section .typewrite-block b');
			$(elem).each(function(i, obj) {
				if($(obj).hasClass('is-visible')) {
					$(obj).addClass('end');
					$(obj).next().addClass('is-visible');
				}
			});
		});
	}
	animate();

});