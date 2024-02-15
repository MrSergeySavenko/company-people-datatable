import React from 'react';
import styles from './Main.module.scss';
import { TextAria } from '../../components/TextAria/TextArea';
import { SerchBlock } from '../../components/SerchBlock/SerchBlock';
import { SortingBlock } from '../../components/SortingBlock/SortingBlock';

export const Main: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <TextAria>Поиск</TextAria>
            <SerchBlock />
            <SortingBlock />
        </div>
    );
};
