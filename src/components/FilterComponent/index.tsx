import React, { FC, memo } from 'react';
import { SearchIcon } from '../../assets/icons/SearchIcon';
import styles from './FilterComponent.module.scss';

interface Props {
   onChangeText: (event: React.ChangeEvent<HTMLInputElement>) => void;
   value: string;
}
const FilterComponent: FC<Props> = ({ onChangeText, value }) => {
   return (
      <div className={styles.container}>
         <label className={styles.filterLabel}>Filter by keywords</label>
         <div className={styles.inputWrapper}>
            <SearchIcon />
            <input value={value} className={styles.inputElement} type='text' onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChangeText(event)} />
         </div>
      </div>
   );
};
export default memo(FilterComponent);
