import { ADD_ITEM } from '../actions/catalog-actions';

export const initialState = () => ({
  catalogItems: []
});

export default (state = initialState(), action = { type: undefined }) => {
  switch (action.type) {
    case ADD_ITEM: {
      return {
        ...state,
        catalogItems: [
          ...state.catalogItems,
          {
            name: action.catalogItem.name,
            price: action.catalogItem.price
          }
        ]
      };
    }
    default:
      return state;
  }
};
