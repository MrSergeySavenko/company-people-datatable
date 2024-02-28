import React, { useEffect } from 'react';
import styles from './RouterDetails.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../__data__/store/store';
import { useNavigate } from 'react-router-dom';
import { peopleDataSlice } from '../../__data__/store/reducers';
import moment from 'moment';

export const RouterDetails: React.FC = () => {
    const { detailsItem } = useSelector((state: RootState) => state.coPeopleData);

    const navigate = useNavigate();

    const handleRouteMain = () => {
        return navigate('/main');
    };

    const getAge = () => {
        if (detailsItem) {
            const date = new Date(detailsItem.birthday);
            return 2024 - date.getFullYear();
        }
    };

    useEffect(() => {
        if (!detailsItem) {
            handleRouteMain();
        }
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.topWrapper}>
                <div className={styles.backButtWrapper}>
                    <div className={styles.backButtImg} onClick={handleRouteMain} />
                </div>
                <div className={styles.imgWrapper}>
                    <img className={styles.image} src={detailsItem?.avatarUrl} />
                    <div className={styles.nameWrapper}>
                        <p className={styles.text}>{detailsItem?.firstName}</p>
                        <p className={styles.userTag}>{detailsItem?.userTag}</p>
                    </div>
                    <p className={styles.underText}>{detailsItem?.department}</p>
                </div>
            </div>
            <div className={styles.contentWrapper}>
                <div className={styles.bithdayWrapper}>
                    <div className={styles.dateWrapper}>
                        <div className={styles.starImg} />
                        <p className={styles.dateText}>{moment(detailsItem?.birthday).format('LL')}</p>
                    </div>
                    <p className={styles.ageText}>{`${getAge()} ${'лет'}`}</p>
                </div>
                <div className={styles.phoneWrapper}>
                    <div className={styles.phoneImg} />
                    <p className={styles.phoneText}>{detailsItem?.phone}</p>
                </div>
            </div>
        </div>
    );
};
