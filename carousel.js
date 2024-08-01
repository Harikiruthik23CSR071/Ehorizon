$(function(){
  $('.carousel-item').eq(0).addClass('active');
  var total = $('.carousel-item').length;
  var current = 0;
  var slideInterval = 3500; // Adjust the interval as needed (in milliseconds)
  var slideTimer;

  // Function to move to the next slide
  function moveToNextSlide() {
      var next = current;
      current = (current + 1) % total; // Increment current index, looping back to 0 if it exceeds total
      setSlide(next, current);
  }

  // Start the automatic sliding
  function startSlideTimer() {
      slideTimer = setInterval(moveToNextSlide, slideInterval);
  }

  // Stop the automatic sliding
  function stopSlideTimer() {
      clearInterval(slideTimer);
  }

  // Move to the previous slide
  $('#moveLeft').on('click', function(){
      var prev = current;
      current = (current - 1 + total) % total; // Decrement current index, looping to total-1 if it goes below 0
      setSlide(prev, current);
  });

  // Move to the next slide when the right button is clicked
  $('#moveRight').on('click', moveToNextSlide);

  // Function to set the active slide
  function setSlide(prev, next){
      var slide = current;
      $('.carousel-item').eq(prev).removeClass('active');
      $('.carousel-item').eq(slide).addClass('active');
      console.log('current ' + current);
      console.log('prev ' + prev);
  }

  // Start automatic sliding when the page loads
  startSlideTimer();

  // Pause automatic sliding when mouse enters the carousel area
  $('.carousel').on('mouseenter', function(){
      stopSlideTimer();
  });

  // Resume automatic sliding when mouse leaves the carousel area
  $('.carousel').on('mouseleave', function(){
      startSlideTimer();
  });
});
