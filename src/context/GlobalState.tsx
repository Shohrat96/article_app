import React, { createContext, useReducer, FC } from 'react';
import { AppReducer } from './AppReducer';
import * as types from '../Types';

// initial state

const initialState: any = {
   articles: [],
   filterText: '',
};
type Props = {
   children: React.ReactChild | React.ReactChildren;
};
// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider: FC<Props> = ({ children }) => {
   const [state, dispatch] = useReducer(AppReducer, initialState);

   //actions
   const setArticles = (articles: types.articlesDataType) => {
      dispatch({
         type: 'SET_ARTICLES',
         payload: articles,
      });
   };
   const setFilterText = (text: string) => {
      dispatch({
         type: 'SET_FILTER_TEXT',
         payload: text,
      });
   };
   return (
      <GlobalContext.Provider
         value={{
            articles: state.articles,
            setArticles,
            filterText: state.filterText,
            setFilterText,
         }}
      >
         {children}
      </GlobalContext.Provider>
   );
};
