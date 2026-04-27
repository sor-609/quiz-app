const q = {
    text: "日本一高い山は何？",
    correct: 2
};

document.getElementById("question").textContent = q.text;

function answer(n) {
    if (n === q.correct) {
        alert("正解！");
    } else {
        alert("不正解");
    }
}