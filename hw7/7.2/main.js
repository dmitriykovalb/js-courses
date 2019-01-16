// let images = ['1.jpg', '11.jpg', '111.jpg'];
// let colors = ['red', 'silver', 'black'];
// let currentSlide = 0;
// let $sliderImage = $('.slider__image');
// let $sliderControls = $('.slider__controls');
// let sliderDotClass = 'slider__control';
// let sliderDotAcitveClass = 'slider__control--isActive';
// let sliderColor = '.slider__Control-Color';

// for (let i = 0; i < colors.length; i++) {
//   $sliderControls.append(`
//     <div
//       data-slide="${i}"
//       class="${sliderDotClass}"
//     >
//   `);
// }

// $(`.${sliderDotClass}[data-slide="${i}"]`).css("background-color", function(){

//   switch($(this).data("slide")) {
//     case 0:  
//     return "red";
//     break;
  
//     case 1:  
//     return "silver";
//     break;

//     case 2:
//     return "black";
//     break;
//   }
// });



// let changeSlide = function() {
//   $sliderImage.css('background-image', 'url(../img/' + images[currentSlide] + ')');
//   // .slider__control[data-slide="1"]
//   $(`.${sliderDotClass}`).removeClass(sliderDotAcitveClass);
//   $(`.${sliderDotClass}[data-slide="${currentSlide}"]`).addClass(sliderDotAcitveClass);
// }

// changeSlide();

// $(`.${sliderDotClass}`).click(function() {
//   currentSlide = $(this).attr('data-slide');
//   changeSlide();
// })

let images = ['black.png', 'gold.png', 'silver.png'];
let currentSlide = 0;
let $sliderImage = $('.slider__image');
let $sliderControls = $('.slider__controls');
let sliderDotClass = 'slider__control';
let sliderDotAcitveClass = 'slider__control--isActive';
let sliderColor = '.slider__Control-Color';

for (let i = 0; i < images.length; i++) {
  $sliderControls.append(`
    <div
      data-slide="${i}"
      class="${sliderDotClass}"
    >
  `);

  $(`.${sliderDotClass}[data-slide="${i}"]`).css("background-color", function(){

    switch($(this).data("slide")) {
      case 0:  
      return "#34353A";
      break;
    
      case 1:  
      return "#FDE3CC";
      break;

      case 2:
      return "#E3E3E1";
      break;
    }
      });
}

let changeSlide = function() {
  $sliderImage.css('background-image', 'url(img/' + images[currentSlide] + ')');

  $(`.${sliderDotClass}`).removeClass(sliderDotAcitveClass);
  $(`.${sliderDotClass}[data-slide="${currentSlide}"]`).addClass(sliderDotAcitveClass);
}

changeSlide();

$(`.${sliderDotClass}`).click(function() {
  currentSlide = $(this).attr('data-slide');
  changeSlide();
})