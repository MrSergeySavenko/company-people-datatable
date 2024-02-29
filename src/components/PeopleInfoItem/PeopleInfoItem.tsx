import React from 'react';
import styles from './PeopleInfoItem.module.scss';
import { getMonth } from '../../__data__/utils/utils';
import { useSelector } from 'react-redux';
import { RootState } from '../../__data__/store/store';

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

    const realDate = new Date(date);

    return (
        <div className={styles.contentWrapper} onClick={onClick}>
            {activeDateLine ? (
                <div className={styles.dateLineWrapper}>
                    <div className={styles.dateLine} />
                    <p className={styles.dateText}>{realDate.getFullYear()}</p>
                    <div className={styles.dateLine} />
                </div>
            ) : (
                <></>
            )}
            <div className={styles.wrapper}>
                <img className={styles.image} src={url} />
                <div className={styles.textWrappper}>
                    <div className={styles.nameWrapper}>
                        <p className={styles.text}>{`${firstName} ${lastName}`}</p>
                        <p className={styles.userTag}>{userTag}</p>
                    </div>
                    <p className={styles.underText}>{position}</p>
                </div>
                {activeSorting === 'date' ? (
                    <p className={styles.dateWrapper}>{`${String(realDate.getDate())} ${String(
                        getMonth(realDate.getMonth())
                    )}`}</p>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};
