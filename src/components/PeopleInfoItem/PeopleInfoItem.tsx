import React from 'react';
import styles from './PeopleInfoItem.module.scss';

interface IProps {
    url: string;
    firstName: string;
    lastName: string;
    position: string;
}

export const PepleInfoItem: React.FC<IProps> = ({ url, firstName, lastName, position }) => {
    return (
        <div className={styles.wrapper}>
            <img className={styles.image} src={url} />
            <div className={styles.textWrappper}>
                <p className={styles.text}>{`${firstName} ${lastName}`}</p>
                <p className={styles.underText}>{position}</p>
            </div>
        </div>
    );
};
