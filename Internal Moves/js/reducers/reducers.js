
//FY DATA
function personnelActions() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  //FY DATA 
  switch (action.type) {
    case GET_PERSONNEL_INFO:
      return state.concat([action.pi]);

    default:
      return state;
  }
}