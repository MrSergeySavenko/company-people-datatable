import React from 'react';
import styles from './PeopleInfoItem.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../__data__/store/store';
import moment from 'moment';

interface IProps {
    url: string;
    firstName: string;
    lastName: string;
    position: string;
    userTag: string;
    date: string;
    activeDateLine?: boolean;
    onClick: () => void;
}

export const PeopleInfoItem: React.FC<IProps> = ({
    url,
    firstName,
    lastName,
    position,
    userTag,
    date,
    activeDateLine,
    onClick,
}) => {
    const { activeSorting } = useSelector((state: RootState) => state.coPeopleData);

    return (
        <div className={styles.contentWrapper} onClick={onClick}>
            {activeDateLine ? (
                <div db-test='date-line-test' className={styles.dateLineWrapper}>
                    <div className={styles.dateLine} />
                    <p className={styles.dateText}>{moment(date).year()}</p>
                    <div className={styles.dateLine} />
                </div>
            ) : (
                <></>
            )}
            <div className={styles.wrapper}>
                <img className={styles.image} src={url} />
                <div className={styles.textWrappper}>
                    <div className={styles.nameWrapper}>
                        <p db-test='text' className={styles.text}>{`${firstName} ${lastName}`}</p>
                        <p className={styles.userTag}>{userTag}</p>
                    </div>
                    <p className={styles.underText}>{position}</p>
                </div>
                {activeSorting === 'date' ? (
                    <p className={styles.dateWrapper}>{`${String(moment(date).format('D'))} ${String(
                        moment(date).format('MMM').slice(0, -1)
                    )}`}</p>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};
