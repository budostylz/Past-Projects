

var GET_FIRSTNAME = 'GET_FIRSTNAME'
function getFirstNames(fn) {
  return {
    type: GET_FIRSTNAME,
    fn: fn
  };
} 


var GET_LASTNAME = 'GET_LASTNAME';
function getLastNames(ln) {
  return {
    type: GET_LASTNAME,
    ln: ln
  };
} 



