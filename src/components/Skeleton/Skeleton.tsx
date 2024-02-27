import styles from './Skeleton.module.scss';
import React from 'react';
import Skeleton from 'react-loading-skeleton';

export const ItemSkeleton: React.FC = () => {
    return (
        <div className={styles.skeletonWrapper}>
            <Skeleton circle width={72} height={72} style={{ marginRight: '16px' }} />
            <div className={styles.skeletonTextWrapper}>
                <Skeleton borderRadius={50} width={144} height={16} style={{ marginBottom: '6px' }} />
                <Skeleton borderRadius={50} width={80} height={12} />
            </div>
        </div>
    );
};
