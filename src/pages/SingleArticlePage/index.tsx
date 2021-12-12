import React, { FC, memo, useEffect, useState } from 'react';
import styles from './SingleArticlePageStyles.module.scss';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import * as types from '../../Types';
import CircularProgress from '@mui/material/CircularProgress';

const SingleArticlePage: FC = () => {
   const baseUrl = process.env.REACT_APP_BASE_URL;
   const [article, setArticle] = useState<types.articleType | undefined>(undefined);
   const [showLoader, setShowLoader] = useState(false);
   let navigate = useNavigate();
   const params = useParams();

   useEffect(() => {
      setShowLoader(true);
      axios.get<types.articleType>(`${baseUrl}/articles/${params.id}`).then((response) => {
         setArticle(response.data);
         setShowLoader(false);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <div className={styles.container}>
         <div className={styles.banner}></div>
         {showLoader ? (
            <CircularProgress size={80} thickness={6} className={styles.loader} />
         ) : (
            <div className={styles.content}>
               <div className={styles.textContent}>
                  <h2 className={styles.title}>{article && article.title}</h2>
                  <p className={styles.summary}>{article && article.summary}</p>
               </div>

               <div className={styles.backBtn}>
                  <Button className={styles.actionBtn} onClick={() => navigate(-1)} size='small'>
                     <span className={styles.backArrow}>
                        <ArrowBackIcon />
                     </span>
                     <span className={styles.backText}>Back to homepage</span>
                  </Button>
               </div>
            </div>
         )}
      </div>
   );
};

export default memo(SingleArticlePage);
