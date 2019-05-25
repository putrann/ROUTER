import { ADD_ITEM } from '../Constant';

let nextId = 0;
export const addItem = name => {
  return {
    type: ADD_ITEM,
    id: nextId++,
    name,
  };
};

// export const editItem = (id, name) => {
//     type: EDIT_ITEM,
//     name,
//     id,
// };

// export const delItem = id => {
//   DEL_ITEM,
//   id
// };
