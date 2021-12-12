import * as types from '../Types';

export const AppReducer = (state: types.initialAppState, action: any) => {
   switch (action.type) {
      case 'SET_ARTICLES':
         return {
            ...state,
            articles: action.payload,
         };
      case 'SET_FILTER_TEXT':
         return {
            ...state,
            filterText: action.payload,
         };
      default:
         return state;
   }
};
