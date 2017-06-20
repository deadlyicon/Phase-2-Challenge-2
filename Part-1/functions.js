// ### Show a weekday
function weekday(year, month, day) {
  var date = new Date(year + ", " + month + ", " + day)
  var number = date.getDay();
  if (number === 1) {
    return "Monday";
  } else if (number === 2){
    return "Tuesday";
  } else if (number === 3){
    return "Wednesday";
  } else if (number === 4){
    return "Thursday";
  } else if (number === 5){
    return "Friday";
  } else if (number === 6){
    return "Saturday";
  } else if (number === 7){
    return "Sunday";
  }
}

// ### Get a snippet from text
function snippet(text, maxlength) {
  var arrayText = text.split("")
  var removeText = arrayText.splice(maxlength);
  var becomeText = arrayText.join("");
  return becomeText;
}

// ### Number of properties
function numProps(obj) {
  
}

// ### Filter between
function filterBetween(array, min, max) {

}

module.exports = {
  weekday,
  snippet,

}
