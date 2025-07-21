import styles from './styles.module.scss';
import type { ReactNode } from 'react';

type ContainerProps = {
    children: ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
    return <div className={styles.container}>{children}</div>;
};