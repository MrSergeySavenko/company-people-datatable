import React from 'react';
import styles from './Main.module.scss';
import { TextAria } from '../../components/TextAria/TextArea';
import { SerchBlock } from '../../components/SerchBlock/SerchBlock';

export const Main: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <TextAria>Поиск</TextAria>
            <SerchBlock />
        </div>
    );
};
