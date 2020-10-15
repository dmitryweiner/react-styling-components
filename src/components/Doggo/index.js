import React from 'react';
import doggo from './doggo.jpg';
import styles from './styles.module.css';

/**
 * Этот компонент стилизован с помощью инкапсулированных стилей
 * @see https://medium.com/@epilande/working-with-css-modules-a6b8aad37f3a
 */
export default function Doggo() {
    return <div className={styles.doggo}><img src={doggo} alt="doggo"/></div>;
}