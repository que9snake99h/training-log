const container = document.getElementById("history");
const data = JSON.parse(localStorage.getItem("records") || "[]");

// 新しい順に並び替え
data.reverse();

if (data.length === 0) {
  container.innerHTML = "<p>まだ記録がありません</p>";
}

data.forEach(d => {
  const item = document.createElement("div");
  item.className = "history-item";

  item.innerHTML = `
    <div class="history-head">
      <span class="type ${d.type}">${d.type}</span>
      <span class="date">${d.date}</span>
    </div>
    <div class="history-body">
      時間：${d.time}<br>
      体調：${d.condition}　
      疲労：${d.fatigue}　
      満足：${d.satisfaction}
      ${d.memo ? `<p class="memo">${d.memo}</p>` : ""}
    </div>
  `;

  container.appendChild(item);
});
