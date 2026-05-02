const container = document.getElementById("quiz-list");
const nextBtn = document.getElementById("next-btn");

let currentIndex = 0;
let score = 0;

const params = new URLSearchParams(window.location.search);
const quizId = params.get("id");

import {quizzes} from "./quizData.js"
const quiz = quizzes[quizId]
const titleData = quiz.title
const questionsData = quiz.questions
// quizId:URLの最後のid（クイズid） quiz:そのクイズの情報すべて titleData:そのクイズのタイトル quizData:そのクイズの問題情報すべて

showQuiz();

// 1問分の処理
// currentIndex:何問目（-1された値） q:（currentIndex）問目の問題情報 p:問題文（Q：～）
function showQuiz() {
    container.innerHTML = "";
    nextBtn.style.display = "none";

    const q = quizzes.questions[currentIndex];

    // 問題文
    const p = document.createElement("p");
    p.textContent = `Q${currentIndex + 1}: ${q.question}`;
    container.appendChild(p);

    // 選択肢ボタン
    q.choices.forEach(choice => {
        const btn = document.createElement("button");
        btn.textContent = choice;

        btn.onclick = () => {
            const buttons = container.querySelectorAll("button");

            buttons.forEach(b => {
                b.disabled = true; // 他のボタンを押せなくする

                // 押したボタンを緑or赤にする
                if (b === btn) {
                    if (choice === q.correct) {
                        b.classList.add("correct");
                        score++; // 正解数カウント+1
                    } else {
                        b.classList.add("wrong");
                    }
                }

                // 正解のボタンを緑にする
                if (b.textContent === q.correct) {
                    b.classList.add("correct");
                }
            });

            explanation.textContent = q.explanation;
            explanation.classList.add("show");

            nextBtn.style.display = "block";
        };

        container.appendChild(btn);
    });

    const explanation = document.createElement("p");
    explanation.classList.add("explanation");
    container.appendChild(explanation);
}

// 「次へ」ボタン
nextBtn.onclick = () => {
    currentIndex++;

    if (currentIndex < quizzes.length) {
        showQuiz();
    } else {
        showResult();
    }
};

// 結果表示
function showResult() {
    nextBtn.style.display = "none";

    container.innerHTML = `
        <div class="result-box">
            <h2>結果</h2>
            <p class="score">${score} / ${quizzes.length}</p>
            <p class="message">${getMessage()}</p>
            <button onclick="location.reload()">もう一回</button>
        </div>
    `;
}

// 結果メッセージ
function getMessage() {
    if (score === quizzes.length) return "満点！　評価：エベレスト級"
    if (score === quizzes.length - 1) return "もう一息！　評価：Ｋ２級"
    if (score >= quizzes.length / 2) return "いい感じ！　評価：富士山級"
    if (score >= quizzes.length + 1) return "ギリＯＫ！　評価：ウィチプルーフ山級"
    return "残念！もう一度挑戦しよう！　評価：マリアナ海溝級"
}