import axios from 'axios';
import * as types from '../Types';
const baseUrl = process.env.REACT_APP_BASE_URL;

export const getFilteredArticles = (filterText: string) => {
   return axios.get<types.articlesDataType>(`${baseUrl}/articles?title_contains=${filterText}`).then((response) => {
      let titleFiltedData = response.data;
      return axios.get<types.articlesDataType>(`${baseUrl}/articles?summary_contains=${filterText}`).then((response) => {
         const titleFilteredDataIds = titleFiltedData.map((article: types.articleType) => article.id);
         const filteredSummaryData = response.data.filter((article: types.articleType) => !titleFilteredDataIds.includes(article.id));
         //  setArticles([...titleFiltedData, ...filteredSummaryData]);
         return [...titleFiltedData, ...filteredSummaryData];
      });
   });
};
