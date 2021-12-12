import React, { useEffect, useContext, FC, memo, useState } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import CustomCard from '../../components/CustomCard';
import styles from './ArticleStyles.module.scss';
import FilterComponent from '../../components/FilterComponent';
import Box from '@mui/material/Box';
import * as types from '../../Types';
import { getFilteredArticles } from '../../api';
import CircularProgress from '@mui/material/CircularProgress';

const ArticlesPage: FC = () => {
   //    const baseUrl = process.env.REACT_APP_BASE_URL;
   const { articles, setArticles, filterText, setFilterText } = useContext(GlobalContext);
   const [showLoader, setShowLoader] = useState(false);
   useEffect(() => {
      setShowLoader(true);
      getFilteredArticles(filterText).then((res: types.articlesDataType) => {
         setArticles(res);
         setShowLoader(false);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [filterText]);
   const onChangeFilterHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
      const filterText = event.target.value;
      setFilterText(filterText);
   };
   return (
      <div className={styles.container}>
         <Box className={styles.filterWrapper}>
            <FilterComponent value={filterText} onChangeText={onChangeFilterHandler} />
         </Box>
         <Box className={styles.resultWrapper}>
            <span>Results: {articles.length}</span>
         </Box>
         {showLoader ? (
            <CircularProgress size={80} thickness={6} className={styles.loader} />
         ) : (
            <>
               <div className={styles.content}>
                  {articles.map((article: types.articleType) => (
                     <div key={article.id} className={styles.cardWrapper}>
                        <CustomCard article={article} />
                     </div>
                  ))}
               </div>
            </>
         )}
      </div>
   );
};
export default memo(ArticlesPage);
