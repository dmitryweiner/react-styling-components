import React from 'react';

/**
 * Этот компонент стилизован с помощью статичных стилей в public/styles/
 * @returns {JSX.Element}
 * @constructor
 */
export default function Octopus() {
    return <div className="octopus">
        <img src="images/octopus.jpg" alt="octopus" />
    </div>;
}