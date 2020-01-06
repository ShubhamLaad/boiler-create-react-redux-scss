const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SELECTED_IMAGE':
      return { ...state, contries: action.payload }
    default:
      return state;
  }
};