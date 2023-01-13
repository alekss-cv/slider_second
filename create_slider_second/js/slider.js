
class Slider {
 constructor(options) {
  this.sliderName = options.sliderName;
  this.slides = options.slides;
  this.arrowHorizontally = options.arrowHorizontally;
  this.arrowVertically = options.arrowVertically;
  this.numberOfSlides = options.numberOfSlides;
  this.scrollThroughTheNumberOfSlides = options.scrollThroughTheNumberOfSlides;
  this.showSlider();
 }

 showSlider() {
  let initSlider = this;
  const sliderName = document.querySelector(this.sliderName);
  const sliderSecondTrack = document.querySelector(".slider_second__track");
  // const slides = document.querySelector(this.slides);
  const sliderSecondBtnBack = document.querySelector(".slider_second__btn_back");
  const sliderSecondBtnNext = document.querySelector(".slider_second__btn_next");
  // const slides = document.querySelectorAll(".slider_second__slide" ) ;
  const slides = document.querySelectorAll(this.slides);
  let numberOfSlides = this.numberOfSlides
  slides.forEach(el => {
   let slides = document.querySelector(this.slides)
  })
  sliderInitialization(initSlider, sliderName, sliderSecondTrack, slides, sliderSecondBtnBack, sliderSecondBtnNext)
 }
}

function sliderInitialization(initSlider, sliderName, sliderSecondTrack, slides, sliderSecondBtnBack, sliderSecondBtnNext, slide) {
 let arrowHorizontally = initSlider.arrowHorizontally;
 let arrowVertically = initSlider.arrowVertically;
 initSlider.arrowVertically && showPrevAndNextBtnVertically(sliderSecondTrack, sliderSecondBtnBack, sliderSecondBtnNext)
 initSlider.arrowHorizontally && showPrevAndNextBtnHorizontally(sliderSecondTrack, sliderSecondBtnBack, sliderSecondBtnNext)
 initSlider.slides && showNumberOfSlides(sliderSecondTrack)
 let numberOfSlides = initSlider.numberOfSlides;
 initSlider.numberOfSlides && showNumberOfSlides(sliderSecondTrack, numberOfSlides, arrowHorizontally, arrowVertically);
 let scrollThroughTheNumberOfSlides = initSlider.scrollThroughTheNumberOfSlides;
 initSlider.scrollThroughTheNumberOfSlides && showThroughTheNumberOfSlides(scrollThroughTheNumberOfSlides, sliderSecondBtnBack, sliderSecondBtnNext, sliderSecondTrack, numberOfSlides, arrowHorizontally, arrowVertically, slides);
}

function showPrevAndNextBtnVertically(sliderSecondTrack, sliderSecondBtnBack, sliderSecondBtnNext) {
 sliderSecondBtnBack.innerHTML = "TOP";
 sliderSecondBtnNext.innerHTML = "BOTTOM"
 sliderSecondTrack.style.flexDirection = "column";
 let arrIndexShow = 0;
 sliderSecondBtnBack.addEventListener("click", () => {
  arrIndexShow = arrIndexShow + 260;
  sliderSecondTrack.style.transform = "translateY(" + arrIndexShow + "px)";
 })
 sliderSecondBtnNext.addEventListener("click", () => {
  arrIndexShow = arrIndexShow - 260;
  sliderSecondTrack.style.transform = "translateY(" + arrIndexShow + "px)";
 })
 console.log("vertically")
}

function showPrevAndNextBtnHorizontally(sliderSecondTrack, sliderSecondBtnBack, sliderSecondBtnNext) {
 sliderSecondBtnBack.innerHTML = "LEFT";
 sliderSecondBtnNext.innerHTML = "RIGHT"
 let translateNum = 0;
 sliderSecondBtnBack.addEventListener("click", () => {
  translateNum = translateNum + 460;
  sliderSecondTrack.style.transform = "translateX(" + translateNum + "px)"
  console.log("click_back")
 })
 sliderSecondBtnNext.addEventListener("click", () => {
  translateNum = translateNum - 460;
  sliderSecondTrack.style.transform = "translateX(" + translateNum + "px)"
  console.log("click_next")
 })
 console.log("Horizontally")
}

//деление слайдов по числу
function showNumberOfSlides(sliderSecondTrack, numberOfSlides, arrowHorizontally, arrowVertically) {
 if (arrowHorizontally === true) {
  let translateSlides = 450;
  translateSlides = translateSlides / numberOfSlides;
  sliderSecondTrack.style.width = translateSlides + "px"
 }
 if (arrowVertically === true) {
  let translateSlides = 250;
  translateSlides = translateSlides / numberOfSlides;
  sliderSecondTrack.style.height = translateSlides + "px"
 }
}


function showThroughTheNumberOfSlides(scrollThroughTheNumberOfSlides, sliderSecondBtnBack, sliderSecondBtnNext, sliderSecondTrack, numberOfSlides, arrowHorizontally, arrowVertically, slides) {
 slides = slides.length
 console.log(slides)
 if (arrowHorizontally === true) {
  let translateNumberOfSlides = 100 / slides;
  numberOfSlides = 100 / slides;
  numberOfSlides = numberOfSlides * scrollThroughTheNumberOfSlides;
  translateNumberOfSlides = translateNumberOfSlides * scrollThroughTheNumberOfSlides;
  sliderSecondBtnBack.addEventListener("click", () => {
   translateNumberOfSlides = translateNumberOfSlides + numberOfSlides;
   sliderSecondTrack.style.transform = "translateX(" + translateNumberOfSlides + "%)"
   console.log("click_back")
  })
  sliderSecondBtnNext.addEventListener("click", () => {
   translateNumberOfSlides = translateNumberOfSlides - numberOfSlides;
   sliderSecondTrack.style.transform = "translateX(" + translateNumberOfSlides + "%)"
   console.log("click_next")
  })
 }

 if (arrowVertically === true) {
  sliderSecondTrack.style.flexDirection = "column";
  let translateNumberOfSlides = 100 / slides;
  numberOfSlides = 100 / slides;
  numberOfSlides = numberOfSlides * scrollThroughTheNumberOfSlides;
  translateNumberOfSlides = translateNumberOfSlides * scrollThroughTheNumberOfSlides;
  sliderSecondBtnBack.addEventListener("click", () => {
   translateNumberOfSlides = translateNumberOfSlides + numberOfSlides;
   sliderSecondTrack.style.transform = "translateY(" + translateNumberOfSlides + "%)"
   console.log("click_back")
  })
  sliderSecondBtnNext.addEventListener("click", () => {
   translateNumberOfSlides = translateNumberOfSlides - numberOfSlides;
   sliderSecondTrack.style.transform = "translateY(" + translateNumberOfSlides + "%)"
   console.log("click_next")
  })
 }

}

let slider2 = new Slider({
 sliderName: ".slider_second",
 slides: ".slider_second__slide",
 arrowHorizontally: false,
 arrowVertically: true,
 numberOfSlides: 0,
 scrollThroughTheNumberOfSlides: 1,
})
console.log(slider2)
















// let slider1 = new Slider({
//  sliderName: ".slider_first",
//  slides: ".slider_first__slide",
//  arrowHorizontally: false,
//  arrowVertically: true,
//  numberOfSlides: 0.5,
//  scrollThroughTheNumberOfSlides: 1,
// })
// console.log(slider1)



