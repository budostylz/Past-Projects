function createStore(reducer) { // The Store
  // The store should have four parts
  // 1. The state
  // 2. Get the state.
  // 3. Listen to changes on the state
  // 4. Update the state
  var state; //hold state of entire application


  var listeners = [];

  var getState = function getState() {
    return state;
  }; //provide way to get access to state


  var subscribe = function subscribe(listener) {
    //push function being passed to subscibe when invoked
    listeners.push(listener);
    return function () {
      listeners = listeners.filter(function (l) {
        return l !== listener;
      }); //filter out original listener function once subscribed is invoked
    };
  };

  var dispatch = function dispatch(action) {
    //receive action to tell dispatch the specific event that occurs inside application
    state = reducer(state, action); //call app function

    listeners.forEach(function (listener) {
      return listener();
    });
  };

  return {
    //return state when createStore is invoked
    getState: getState,
    subscribe: subscribe,
    dispatch: dispatch
  };
}