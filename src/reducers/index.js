const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'COUNT':
      return Object.assign({}, state, {
        count: state.count + 10
      });
    default:
      return state;
  }
};

export default reducer;
