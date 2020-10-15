import React from 'react';
import cat from './cat.jpg';
import './styles.css';

/**
 * Этот компонент стилизован с помощью подключаемых стилей из ./styles.css
 */
const Cat = () => {
    return <img src={cat} className="cat-picture" alt="cat"/>;
};

export default Cat;