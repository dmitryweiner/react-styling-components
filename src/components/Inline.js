import React from 'react';

const styles = {
    root: {
        backgroundColor: 'purple',
        color: 'yellow'
    },
    link: {
        textDecoration: 'underline'
    }
};

export default function Link({text}) {
    return <div style={styles.root}>
        <span style={styles.link}>{text}</span>
    </div>;
}