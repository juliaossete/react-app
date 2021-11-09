import React from 'react';

const Article = ({ title, title2, text }) => {

    const styles = {
        marginTop: 10
    }

    return (
        <article style={styles}>
            <h3 style={{
                marginBottom: 3,
                textTransform: "uppercase",
                textAlign: 'center'
            }}>{title}</h3>
            <span style={{
                display: "block",
                marginBottom: 10,
                fontSize: 16,
                textAlign: 'center'
            }}>{title2}</span>
            <p style={{ 
                fontSize: 18,
                marginLeft: 100,
                marginRight: 100
                }}>{text}</p>
        </article>
    );
}

export default Article
