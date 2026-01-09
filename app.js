const today = new Date().toISOString().slice(0, 10);
document.querySelector(".date").textContent = today;

const buttons = document.querySelectorAll(".segment button");
let selectedType = "トレ";

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    selectedType = btn.textContent;
  });
});

document.querySelector(".save").addEventListener("click", () => {
  const record = {
    date: today,
    type: selectedType,
    time: document.querySelector("select").value,
    condition: document.querySelectorAll("input[type=range]")[0].value,
    fatigue: document.querySelectorAll("input[type=range]")[1].value,
    satisfaction: document.querySelectorAll("input[type=range]")[2].value,
    memo: document.querySelector("textarea").value
  };

  const data = JSON.parse(localStorage.getItem("records") || "[]");

  const index = data.findIndex(d => d.date === today);
  if (index >= 0) data[index] = record;
  else data.push(record);

  localStorage.setItem("records", JSON.stringify(data));

  alert("保存しました");
});
