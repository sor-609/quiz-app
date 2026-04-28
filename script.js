const quizzes = [
    {
        question: "日本で一番高い山は何？",
        choices: ["エベレスト", "北岳", "阿蘇山", "富士山"],
        correct: "富士山"
    },
    {
        question: "では、富士山がある都道府県はどことどこ？",
        choices: ["静岡県と愛知県", "山梨県と静岡県", "長野県と山梨県", "長野県と静岡県"],
        correct: "山梨県と静岡県"
    }
];

const container = document.getElementById("quiz-list");

quizzes.forEach((q, index) => {
    const div = document.createElement("div");

    // 問題文
    const p = document.createElement("p");
    p.textContent = `Q${index + 1}: ${q.question}`;
    div.appendChild(p);

    // 選択肢ボタン
    q.choices.forEach(choice => {
        const btn = document.createElement("button");
        btn.textContent = choice;

        btn.onclick = () => {
            if (choice === q.correct) {
                btn.style.backgroundColor = "lightgreen";
            } else {
                btn.style.backgroundColor = "salmon";
            }
        };

        div.appendChild(btn);
    });

    container.appendChild(div);
});