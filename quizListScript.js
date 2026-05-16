const header = `
<header>
    <div class="logo">Quisori</div>

    <nav>
        <a href="index.html">ホーム</a>
        <a href="#">クイズ記事</a>
        <a href="#">お問い合わせ</a>
    </nav>
</header>
`;
document.getElementById("header").innerHTML = header;

const links = document.querySelectorAll("nav a");

links.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("currentPage");
    }
});


import { genreNameList } from './commonQuizData.js';
import { quizzes } from './schoolUnitQuizData.js';

const quizList = document.getElementById("quiz-list");

const params = new URLSearchParams(location.search);
const displayGenre = params.get("genre");

quizzes.forEach(index => {
    const indexGenre = index.genres;
    console.log(indexGenre,displayGenre);

    if (displayGenre === null || indexGenre.includes(displayGenre)) {
        const quizItem = document.createElement("div");

        const genresHtml = index.genres
            .map(genresItem => `<a class="genre" href="index.html?genre=${genresItem}">#${genreNameList[genresItem]}</a>`)
            .join(" , ");

        quizItem.innerHTML = `
            <h2 class="title">${index.title}</h2>
            <div class="genre-list">${genresHtml}</div>
            <p class="desc" style="display:none;">${index.description}</p>
            `;

        quizItem.onclick = () => {
            location.href = `quiz.html?id=${index.id}`;
        };

        quizList.appendChild(quizItem);
    }
});

// index.htmlにdiv追加で非学校単元用のリンクを作る。