import { useReducer } from "react";

// IMPORT ACTIONS here once created
import {
    UPDATE_CATEGORIES,
    UPDATE_POST
} from './actions';

// incomplete reducer
export const reducer = (state, action) => {
    switch (action.type)