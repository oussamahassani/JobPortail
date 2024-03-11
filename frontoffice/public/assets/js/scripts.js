setTimeout(function () {
	window.onscroll = function () {
		scrollFunction();
		scrollFunctionBTT(); // back to top button
	};

	window.onload = function () {
		scrollFunction();
	};

	function scrollFunction() {
		if (document.documentElement.scrollTop > 30) {
			document.getElementById("navbarExample").classList.add("top-nav-collapse");
		} else if (document.documentElement.scrollTop < 30) {
			document.getElementById("navbarExample").classList.remove("top-nav-collapse");
		}
	}

	// Navbar on mobile
	let elements = document.querySelectorAll(".nav-link:not(.dropdown-toggle)");









	/* Card Slider - Swiper */
	var cardSlider = new Swiper('.card-slider', {
		autoplay: {
			delay: 4000,
			disableOnInteraction: false
		},
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		}
	});


	/* Image Slider - Swiper */
	var imageSlider = new Swiper('.image-slider', {
		autoplay: {
			delay: 3000,
			disableOnInteraction: false
		},
		loop: true,
		spaceBetween: 50,
		slidesPerView: 5,
		breakpoints: {
			// when window is <= 575px
			575: {
				slidesPerView: 1,
				spaceBetween: 10
			},
			// when window is <= 767px
			767: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			// when window is <= 991px
			991: {
				slidesPerView: 3,
				spaceBetween: 20
			},
			// when window is <= 1199px
			1199: {
				slidesPerView: 4,
				spaceBetween: 20
			},

		}
	});



}, 500);