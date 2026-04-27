const quizzes = [
    { question: "日本で一番高い山は何？", answer: "富士山"},
    { question: "では、富士山がある都道府県はどことどこ？", answer: "山梨県と静岡県"}
];

const container = document.getElementById("quiz-list");

quizzes.forEach((q, index) => {
    const div = document.createElement("div");

    const p = document.createElement("p");
    p.textContent = `Q${index + 1}: ${q.question}`;

    const btn = document.createElement("button");
    btn.textContent = "答えを見る";
    btn.onclick = () => alert(q.answer);

    div.appendChild(p);
    div.appendChild(btn);
    container.appendChild(p);
});