import React, { FC, memo, useContext } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CalendarIcon } from '../../assets/icons/CalendarIcon';
import dayjs from 'dayjs';
import styles from './CustomCard.module.scss';
import * as types from '../../Types';
import { GlobalContext } from '../../context/GlobalState';
import { useNavigate } from 'react-router-dom';
import * as helperFunctions from '../../helpers';
var localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat);

interface Props {
   article: types.articleType;
}

const CustomCard: FC<Props> = ({ article }) => {
   const { filterText } = useContext(GlobalContext);
   let navigate = useNavigate();
   return (
      <Card className={styles.container}>
         <CardMedia component='img' height='217' image={article.imageUrl} alt='article image' />
         <CardContent className={styles.content}>
            <Typography component='div' className={styles.dateWrapper}>
               <CalendarIcon />
               <Typography component='span' className={styles.date}>
                  {dayjs(article.publishedAt).format('LL')}
               </Typography>
            </Typography>
            <Typography className={styles.title} gutterBottom variant='h5'>
               {helperFunctions.getHighlightedText(article.title.length > 40 ? `${article.title.substring(0, 40)}...` : article.title, filterText.trim().split(' '))}
            </Typography>
            <Typography className={styles.summary} variant='body2' gutterBottom>
               {helperFunctions.getHighlightedText(article.summary.length > 100 ? `${article.summary.substring(0, 100)}...` : article.summary, filterText.trim().split(' '))}
            </Typography>
         </CardContent>
         <CardActions className={styles.actions}>
            <Button
               onClick={() => {
                  navigate(`articles/${article.id}`);
               }}
               className={styles.actionBtn}
               size='small'
            >
               Read more
            </Button>
         </CardActions>
      </Card>
   );
};
export default memo(CustomCard);
