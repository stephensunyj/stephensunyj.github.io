// Typewriter
var char_idx = 0;
var is_deleting = false;
var words = ["Engineer.", "Developer.", "Hacker.", "Hiker.","Pilot."]; 
var colors = ["#f71e0a", "#f0ec0a", "#9d1cff","#05e317", "#3ea2fa"];
var word_idx = 0;

function type_writer() {
  word_idx = word_idx % words.length;
  var cur_word = words[word_idx];
  var typewriterElement = document.getElementById("typewriter");
  typewriterElement.style.textDecoration = "underline";
  typewriterElement.style.textDecorationThickness = "4px";
  typewriterElement.style.textDecorationColor = colors[word_idx]; 
  //document.getElementById("typewriter").style.color = colors[word_idx];
  var speed = 150; // speed in milliseconds

  if (is_deleting){
    speed /= 2;
    if(char_idx >= 0){
      document.getElementById("typewriter").innerHTML = cur_word.slice(0, char_idx);
      char_idx--;
      setTimeout(type_writer, speed);
    } else {
      is_deleting = false;
      word_idx++;
      setTimeout(type_writer, 1500);
    }
  } else {
    if (char_idx < cur_word.length) {
      document.getElementById("typewriter").innerHTML += cur_word.charAt(char_idx);
      char_idx++;
      setTimeout(type_writer, speed);
    } else {
      is_deleting = true;
      setTimeout(type_writer, 2000);
    }
  }
}

document.addEventListener('DOMContentLoaded', type_writer);