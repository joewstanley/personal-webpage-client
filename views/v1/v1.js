$(document).ready(() => {
  setCurrentTab($(window).scrollTop());

  $('.nav-toggle').click(() => {
    if ($('.nav').hasClass('show')) {
      $('.nav').removeClass('show');
    } else {
      $('.nav').addClass('show');
    }
  });

  $('.nav-link').click(event => {
    event.preventDefault();
    changeActive(event.target.id, true);
  });

  $(window).scroll(() => {
    setCurrentTab($(window).scrollTop());
  });

  $('.projects img').hover(event => {
    $('#' + event.target.id).fadeTo(500, 0.5);
  }, event => {
    $('#' + event.target.id).fadeTo(500, 1);
  });

  $('.email').click(event => {
    event.preventDefault();
    $('.form').toggle();
    if ($('.form').is(':visible')) {
      $('.indicator').html('-');
    } else {
      $('.indicator').html('+');
    }
  });
});

function setCurrentTab(scrollTop) {
  if (scrollTop < ($('.skills').offset().top - 48)) {
    changeActive('about', false);
  } else if (scrollTop < ($('.work').offset().top - 48)) {
    changeActive('skills', false);
  } else if (scrollTop < ($('.projects').offset().top - 48)) {
    changeActive('work', false);
  } else if (scrollTop < ($('.contact').offset().top - 48)) {
    changeActive('projects', false);
  } else {
    changeActive('contact', false);
  }
}

function changeActive(id, move) {
  $('.active').removeClass('active');
  $('#' + id).addClass('active');
  if (move) {
    $('html, body').animate({
      scrollTop: $('.' + id).offset().top - 48
    }, 1000);
  }
}
