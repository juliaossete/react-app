import React from 'react';
import Article from '../components/Article';
import '../styles/HomePage.css';

const articles = [
    {
        id: 1,
        title: "Witaj!",
        title2: "Kim jestem?",
        text: "Nazywam się Julia Ossete. Stworzyłam ową stronę internetową, aby przybliżyć Ci moje umiejętności związane z programowaniem. Zajrzyj do menu i sprawdź moje przykładowe projekty."
    },
    {
        id: 2,
        title: "Jakie kursy ukończyłam?",
        title2: "Jestem samoukiem",
        text: "Uczę się sama. Dodatkowo ukończyłam 4 kursy: Web Developer Od Podstaw (HTML & CSS), Java Script Od Podstaw, React Od Podstaw oraz Wprowadzenie Do Git i Github."
    },
    ]

const HomePage = () => {

    const artList = articles.map(article => (
        <Article key={article.id} {...article} />
    ))
    return (
        <div className="home">
            {artList}
        </div>
    );
}
 
export default HomePage;