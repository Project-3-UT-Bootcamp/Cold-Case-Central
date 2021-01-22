import { useReducer } from "react";

// IMPORT ACTIONS here once created
import { UPDATE_CATEGORIES, UPDATE_POST } from "./actions";

// Reducers
export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_POST:
      return {
        ...state,
        products: [...action.post],
      };

    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories],
      };
  }
};
