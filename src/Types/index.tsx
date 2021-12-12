// data types

export type articleType = {
   id: number;
   title: string;
   summary: string;
   imageUrl: string;
   publishedAt: string;
};

export type articlesDataType = Array<articleType>;

// action types

export enum actionTypes {
   SET_ARTICLES_TYPE = 'SET_ARTICLES_TYPE',
   SET_FILTER_TEXT_TYPE = 'SET_FILTER_TEXT_TYPE',
}

// initial state type

export type initialAppState = {
   articles: articlesDataType;
   filterText: string;
};
