import React, { useEffect } from 'react';
import styles from './RouterDetails.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../__data__/store/store';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { IItemsData } from '../../__data__/models/coPeopleDataModels';

const getAge = (detailsItem: IItemsData | null) => {
    if (detailsItem) {
        return moment().year() - moment(detailsItem.birthday).year() + ' лет';
    }
};

export const RouterDetails: React.FC = () => {
    const { detailsItem } = useSelector((state: RootState) => state.coPeopleData);

    const navigate = useNavigate();

    useEffect(() => {
        if (!detailsItem) {
            handleRouteMain();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleRouteMain = () => {
        return navigate('/main');
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.topWrapper}>
                <div className={styles.backButtWrapper}>
                    <div db-test='back-butt-test' className={styles.backButtImg} onClick={handleRouteMain} />
                </div>
                <div className={styles.imgWrapper}>
                    <img className={styles.image} src={detailsItem?.avatarUrl} alt='Картинка' />
                    <div className={styles.nameWrapper}>
                        <p
                            db-test='details-name-test'
                            className={styles.text}
                        >{`${detailsItem?.firstName} ${detailsItem?.lastName}`}</p>
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
                    <p className={styles.ageText}>{getAge(detailsItem)}</p>
                </div>
                <div className={styles.phoneWrapper}>
                    <div className={styles.phoneImg} />
                    <p className={styles.phoneText}>{detailsItem?.phone}</p>
                </div>
            </div>
        </div>
    );
};
