// ### Show a weekday
function weekday(date) {
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
  var arrayText = text.split("");
  var removeText = arrayText.splice(maxlength);
  var becomeText = arrayText.join("");
  if (arrayText.length < maxlength) {
    return becomeText;
  } else {
    return becomeText + "...";
}
}

// ### Number of properties
function numProps(obj) {
  return Object.keys(obj).length;
}

// ### Filter between
function filterBetween(array, min, max) {
  var filtered = array.filter(function(number){
    return number >= min && number <= max;
  })
  return filtered;
}

module.exports = {
  weekday,
  snippet,
  numProps,
  filterBetween
}
