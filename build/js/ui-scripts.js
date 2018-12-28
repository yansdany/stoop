$(document).ready(function() {

  function attachDropdown() {
    if ($.fn.select2) {
      $('.single-select').select2({
        minimumResultsForSearch: -1 //hiding search field,
      });

      $('.single-select').on('select2:open', function(e) {
        $(this).next().addClass('was-clicked');
      });
    }
  }

  //attachDropdown();

  function toggleDropdown() {
    var $toggler = $('[data-dropdown-toggler]');
    var $target = $('[data-dropdown-target]');
    var ARROW_HEIGHT = 14;

    $toggler.click(function(e) {
      e.stopPropagation();
      e.preventDefault();
      var attr = $(this).attr('data-dropdown-toggler');
      var target = $('[data-dropdown-target=' + attr + ']');
      var $togglers = $('[data-dropdown-toggler=' + attr + ']');
      var left = $(this).offset().left;
      var top = $(this).offset().top + $(this).outerHeight() + ARROW_HEIGHT;
      var width = $(this).outerWidth();
      var w = $(window).width();

      if (attr == 'accountMenu' && w > 640) {
        return false
      }

      target.toggleClass('active');
      target.css({
        'left': left,
        'top': top,
        'width': width
      });

      $togglers.toggleClass('active');
    });

    $target.click(function(e) {
      e.stopPropagation();
      $target.removeClass('active');
    });

    $('html').click(function() {
      if ($('[data-dropdown-target].active').length > 0) {
        $target.removeClass('active');
        $toggler.removeClass('active');
      }
    });
  }

  toggleDropdown();

  function toggleShow() {
    var $toggler = $('[data-hideshow-toggler]');
    var $target = $('[data-hideshow-target]');

    $toggler.click(function(e) {
      e.stopPropagation();
      e.preventDefault();
      var attr = $(this).attr('data-hideshow-toggler');
      var target = $('[data-hideshow-target=' + attr + ']');
      var $togglers = $('[data-hideshow-toggler=' + attr + ']');

      target.toggleClass('active');
      $togglers.toggleClass('active');
    });

    $target.click(function(e) {
      e.stopPropagation();
    });

    $('body').click(function() {
      if ($('[data-hideshow-target].active').length > 0) {
        $target.removeClass('active');
        $toggler.removeClass('active');
      }
    });
  }

  toggleShow();

  function navigationToggle() {
    var w = $(window).width();

    $('.menu-toggle').click(function(){
      $(this).toggleClass('active');
      $('.nav-links').fadeToggle(400);
    });

    if (w <= 992) {
      $('.nav-links a').click(function() {
        $('.nav-links').fadeOut(400);
        $('.menu-toggle').removeClass('active');
      });
    }
  }

  navigationToggle();

  function testimonials() {
    if ($.fn.slick) {
      $('#testimonial_slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: '<div class="slick-next sprite arrow-right-grey"></div>',
        prevArrow: '<div class="slick-prev sprite arrow-left-grey"></div>',
        responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1
          }
        }
        ]
      });
    }

    $('#testimonial_slider').on('setPosition', function () {
      $(this).find('.slick-slide').height('auto');
      var slickTrack = $(this).find('.slick-track');
      var slickTrackHeight = $(slickTrack).height();
      $(this).find('.slick-slide').css('height', slickTrackHeight + 'px');
    });
  }

  testimonials();

  function cityTours() {
    if ($.fn.slick) {
      $('#tour-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: '<div class="slick-next"><i class="sprite arrow-right-white"></i></div>',
        prevArrow: '<div class="slick-prev"><i class="sprite arrow-left-white"></i></div>',
        responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1
          }
        }
        ]
      });
    }
  }

  cityTours();

  function replaceTourButton() {
    var $slide = $('.tour-slide');

    $slide.hover(function() {
      var $btn = $(this).find('.action');
      var oldtxt = $btn.text();
      $btn.toggleClass('green');
      $btn.text() == 'Explore Tours' ? $btn.text(oldtxt) : 'Explore Tours';
      console.log('asd');
    });

    $(document).on('hover', '.tour-slide', function() {
      var $btn = $(this).find('.action')
      $btn.toggleClass('green');
      $btn.text('Explore Tours');
      console.log('asd');
    });
  }

  //replaceTourButton();

  function scrollToTarget() {
    var $toggler = $('[data-scroll-toggler]');
    var $target = $('[data-scroll-target]');

    $toggler.click(function(e) {
      e.preventDefault();
      var attr = $(this).attr('data-scroll-toggler');
      var target = $('[data-scroll-target=' + attr + ']');

      $('html, body').animate({
        scrollTop: target.offset().top - 20
      }, 400);
    });
  }

  scrollToTarget();

  function disableHover() {
    var body = document.body,
    timer;

    window.addEventListener('scroll', function() {
      clearTimeout(timer);
      if(!body.classList.contains('disable-hover')) {
        body.classList.add('disable-hover')
      }

      timer = setTimeout(function(){
        body.classList.remove('disable-hover')
      },100);
    }, false);
  }

  disableHover();

  function attachRangeSlider() {
    var range = document.getElementById('priceRange');

    noUiSlider.create(range, {
      start: [ 400, 4000 ],
    	connect: true,
      tooltips: true,
      step: 100,
    	range: {
    		'min': 0,
    		'max': 10000
    	},
      format: wNumb({
    		decimals: 0,
    		thousand: '',
    		postfix: '',
    	})
    })
  }

  attachRangeSlider();
});
