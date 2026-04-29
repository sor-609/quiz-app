// 上から問題文、選択肢、答え。 追加する際は同じフォーマットで下に書く。
const quizzes = [
    {
        question: "日本で一番高い山は何？",
        choices: ["エベレスト", "北岳", "阿蘇山", "富士山"],
        correct: "富士山"
    },
    {
        question: "では、富士山がまたがっている都道府県はどことどこ？",
        choices: ["静岡県と愛知県", "山梨県と静岡県", "長野県と山梨県", "長野県と静岡県"],
        correct: "山梨県と静岡県"
    },
    {
        question: "標高約8850mのエベレスト。主にネパールでは何と呼ばれている？",
        choices: ["サガルマータ","チョモランマ","エヴレステ"],
        correct: "サガルマータ"
    }
];

const container = document.getElementById("quiz-list");

let score = 0;
let total = quizzes.length; // 問題数

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
            const buttons = div.querySelectorAll("button");

            buttons.forEach(b => {
                b.disabled = true; // 他のボタンを押せなくする

                // 押したボタンを緑or赤にする
                if (b === btn) {
                    if (choice === q.correct) {
                        b.classList.add("correct");
                    } else {
                        b.classList.add("wrong");
                    }
                }

                // 正解のボタンを緑にする
                if (b.textContent === q.correct) {
                    b.classList.add("correct");
                }
            });
        };

        div.appendChild(btn);
    });

    container.appendChild(div);
});