import React from 'react';
import styles from './BrandsBar.module.scss';

const BrandsBar = () => {
    const brandBar = [
        {id: 1, title: 'Apple'},
        {id: 2, title: 'Samsung'},
        {id: 3, title: 'Lenovo'},
        // {id: 4, title: 'filter'},
        // {id: 5, title: 'filter'},
        {id: 6, title: 'HP'},
        {id: 7, title: 'Philips!'},
        {id: 8, title: 'Siemens!'},
        {id: 9, title: 'Bosch'}];
    return (
        <>
            {brandBar.map(item =>
            <div key={item.id} className={styles.brandBar__Item}>
                <span>{item.title}</span>
            </div>)}
        </>

    );
};

export default BrandsBar;