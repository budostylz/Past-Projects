
/*INTERNAL MOVES ENTITIES





*/
function app() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return {
    PersonnelInfo: personnelActions(state.PersonnelInfo, action)

  };
}

var store = createStore(app); //user invokes to return store