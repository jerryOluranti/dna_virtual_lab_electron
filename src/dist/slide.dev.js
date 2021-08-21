"use strict";

var data = [{
  desc: "Sterilize the work station",
  path: "ep 1.jpg"
}, {
  desc: "Assemble the Materials needed and bacteria culture",
  path: "ep 2.jpg"
}, {
  desc: "Transfer 600 µl of extraction buffer into an Eppendorf tube",
  path: "ep 4.jpg"
}, {
  desc: "nto an Eppendorf tube, scoop some colonies of bacteria cell into extraction buffer of pH 8",
  path: "ep 5.jpg"
}, {
  desc: "Vortex the mixture using a vortex mixer for 1 minute",
  path: "ep 6.jpg"
}, {
  desc: "Add 50 µl of 1% SDS solution to the mixture",
  path: "ep 7.jpg"
}, {
  desc: "Vortex and Leave it at room temperature for five minutes",
  path: "ep 7b.jpg"
}, {
  desc: "Add 200 µl of Potassium acetate to precipitate the detergent and the cell debris out of the solution",
  path: "ep 8.jpg"
}, {
  desc: "Centrifuge the mixture at 10,000 rpm for 10 minutes, to separate the precipitate from the solution",
  path: "ep 9.jpg"
}, {
  desc: "Collect the supernatant containing the DNA into a new Eppendorf tube",
  path: "ep 10.jpg"
}, {
  desc: "Add 3 µl of RNase to the solution in the new Eppendorf tube",
  path: "ep 11.jpg"
}, {
  desc: "Incubate at 370C for 30 minutes. This is to digest the RNA present in the solution",
  path: "ep 11b.jpg"
}, {
  desc: "Then add Ice cold ethanol",
  path: "ep 12.jpg"
}, {
  desc: "Incubate at -400C for 30 minutes. This is to precipitate the DNA out of the solution",
  path: "ep 1b.jpg"
}, {
  desc: "The Eppendorf tube is centrifuge at 10,000 rpm for ten minutes. This makes the DNA precipitate to attach to the bottom of the Eppendorf tube",
  path: "ep 13.jpg"
}, {
  desc: "The supernatant is gently decanted leaving the DNA pellet",
  path: "ep 14.jpg"
}, {
  desc: "Wash the DNA pellet using 70% ethanol",
  path: "ep 15.jpg"
}, {
  desc: "Centrifuge for 10 minutes. Decant the supernatant gently and leave the DNA pellet to dry at room temperature",
  path: "ep 15b.jpg"
}, {
  desc: "Elute the dry DNA pellet using low salt or molecular grade DNase free water\nElute the dry DNA pellet using low salt or molecular grade DNase free water",
  path: "ep 16.jpg"
}];
var counter = -1;
var labSlide = document.querySelector('.slide-image-frame');
var labSlideImage = document.getElementById('slide-image');
var sideBtns = document.querySelectorAll('.sidebar-btns');

function slide(index, marker) {
  if (index < 0 || index > data.length - 1) index = 0;
  var last = marker ? index - 1 : index + 1;
  labSlide.classList.remove("scale-in");
  sideBtns[last].classList.remove("active");
  labSlide.classList.add("scale-out");
  setTimeout(function () {
    labSlide.classList.remove("scale-out");
    labSlideImage.src = "../files/".concat(data[index].path);
    labSlide.classList.add("scale-in");
    sideBtns[index].classList.add("active");
    counter = index;
  }, 1000);
}

window.onload = slide();