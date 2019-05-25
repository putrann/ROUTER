import { ADD_ITEM, EDIT_ITEM } from '../Constant';

const myReducer = (state = [], action) => {
  console.log(state);
  switch (action.type) {
    case ADD_ITEM:
      console.log(action);
      const newItem = { id: action.id, name: action.name };
      console.log(newItem);
      state.unshift(newItem);
      console.log(state);
      return [...state];
      
    default:
      return state;
  }
};

export default myReducer;
