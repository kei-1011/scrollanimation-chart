
/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------
odometer
---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

$(function () {
	var controller = new ScrollMagic.Controller();

	var scene = new ScrollMagic.Scene({ triggerElement: '#odo01', triggerHook: .9 })
		.on('enter', function () {
			$('#odo01').html(603);
		})
		.addTo(controller);
	var scene = new ScrollMagic.Scene({ triggerElement: '#odo02', triggerHook: .9 })
		.on('enter', function () {
			$('#odo02').html(168);
		})
		.addTo(controller);
	var scene = new ScrollMagic.Scene({ triggerElement: '#odo03', triggerHook: .9 })
		.on('enter', function () {
			$('#odo03').html(32);
		})
		.addTo(controller);
	var scene = new ScrollMagic.Scene({ triggerElement: '#odo04', triggerHook: .9 })
		.on('enter', function () {
			$('#odo04').html(12.7);
		})
		.addTo(controller);
	var scene = new ScrollMagic.Scene({ triggerElement: '#odo05', triggerHook: .9 })
		.on('enter', function () {
			$('#odo05').html(40.8);
		})
		.addTo(controller);
	var scene = new ScrollMagic.Scene({ triggerElement: '#odo06', triggerHook: .9 })
		.on('enter', function () {
			$('#odo06').html(56);
		})
		.addTo(controller);
	var scene = new ScrollMagic.Scene({ triggerElement: '#odo06', triggerHook: .9 })
		.on('enter', function () {
			$('#odo07').html(35);
		})
		.addTo(controller);
	var scene = new ScrollMagic.Scene({ triggerElement: '#odo06', triggerHook: .9 })
		.on('enter', function () {
			$('#odo08').html(31);
		})
		.addTo(controller);
	var scene = new ScrollMagic.Scene({ triggerElement: '#odo06', triggerHook: .9 })
		.on('enter', function () {
			$('#odo09').html(30);
		})
		.addTo(controller);
	var scene = new ScrollMagic.Scene({ triggerElement: '#odo06', triggerHook: .9 })
		.on('enter', function () {
			$('#odo10').html(14);
		})
		.addTo(controller);

});



/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------
// scroll
---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

$(function () {
	var controller = new ScrollMagic.Controller();

	$('.js-scroll').each(function () {
		var obj = this;
		var $obj = $(this);
		var scene = new ScrollMagic.Scene({ triggerElement: this, triggerHook: .8, })
			.on('enter', function () {
				$obj.addClass('animated');
			})
			//        .addIndicators()
			.addTo(controller);
	});

	$('.js-scroll-fade').each(function () {
		var obj = this;
		var $obj = $(this);
		var scene = new ScrollMagic.Scene({ triggerElement: this, triggerHook: .8, })
			.on('enter', function () {
				$obj.addClass('animated');
			})
			//        .addIndicators()
			.addTo(controller);
	});

	$('.js-scroll-scale-in').each(function () {
		var obj = this;
		var $obj = $(this);
		var scene = new ScrollMagic.Scene({ triggerElement: this, triggerHook: .8, })
			.on('enter', function () {
				$obj.addClass('animated');
			})
			//        .addIndicators()
			.addTo(controller);
	});

	$('.js-scroll-scale-in-big').each(function () {
		var obj = this;
		var $obj = $(this);
		var scene = new ScrollMagic.Scene({ triggerElement: this, triggerHook: .8, })
			.on('enter', function () {
				$obj.addClass('animated');
			})
			//        .addIndicators()
			.addTo(controller);
	});

	$('.js-scroll-fade-up-in').each(function () {
		var obj = this;
		var $obj = $(this);
		var scene = new ScrollMagic.Scene({ triggerElement: this, triggerHook: .8, })
			.on('enter', function () {
				$obj.addClass('animated');
			})
			//        .addIndicators()
			.addTo(controller);
	});

	$('.js-scroll-r-to-l').each(function () {
		var obj = this;
		var $obj = $(this);
		var scene = new ScrollMagic.Scene({ triggerElement: this, triggerHook: .8, })
			.on('enter', function () {
				$obj.addClass('animated');
			})
			//        .addIndicators()
			.addTo(controller);
	});

});


/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------
// chart
---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
$(function () {

	var ctx = document.getElementById("myChart").getContext('2d');
	var myChart = new Chart(ctx, {
		type: 'doughnut',
		data: {
			datasets: [{
				data: [75.6, 24.4],
				backgroundColor: ['#F89174', '#329AF0'],
				borderWidth: [0, 0],
			}]
		},
		options: {
			responsive: true,
			cutoutPercentage: 35,
			tooltips: {
				enabled: false,
			},
			animation: {
				duration: 1500
			},
		}
	});
});
