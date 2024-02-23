import React from 'react';
import styles from './PeopleInfoItem.module.scss';

interface IProps {
    url: string;
    firstName: string;
    lastName: string;
    position: string;
    userTag: string;
}

export const PeopleInfoItem: React.FC<IProps> = ({ url, firstName, lastName, position, userTag }) => {
    return (
        <div className={styles.wrapper}>
            <img className={styles.image} src={url} />
            <div className={styles.textWrappper}>
                <div className={styles.nameWrapper}>
                    <p className={styles.text}>{`${firstName} ${lastName}`}</p>
                    <p className={styles.userTag}>{userTag}</p>
                </div>
                <p className={styles.underText}>{position}</p>
            </div>
        </div>
    );
};
