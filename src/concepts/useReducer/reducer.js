// reducer function
export const reducer = (state, action) => {
  // NOTE: IMPORTANT!!!!  always have a return statement
  // state-> old state
  // action-> in this case from dispatch {type:"somevaluehere"}
  console.log(state, action);
  if (action.type === 'ADD_ITEM') {
    const newFruit = [...state.fruit, action.payload];
    return {
      ...state,
      fruit: newFruit,
      isModalOpen: true,
      modalContent: 'Item added',
    };
  }
  if (action.type === 'NO_VALUE') {
    return {
      ...state,
      isModalOpen: true,
      modalContent: 'Please Enter Value',
    };
  }
  if (action.type === 'CLOSE_MODAL') {
    return {
      ...state,
      isModalOpen: false,
    };
  }

  if (action.type === 'REMOVE_ITEM') {
    const updatedFruit = state.fruit.filter((val) => val.id !== action.payload);
    return { ...state, fruit: updatedFruit, isModalOpen: true, modalContent: 'Item Removed' };
  }

  throw new Error('No matching Action type');
};
