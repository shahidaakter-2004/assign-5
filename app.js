let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

const heartCountEl = document.getElementById("heartCount");
const coinCountEl = document.getElementById("coinCount");
const copyCountEl = document.getElementById("copyCount");
const historyList = document.getElementById("historyList");
const clearHistoryBtn = document.getElementById("clearHistory");

// Heart click
document.querySelectorAll(".corner-icon").forEach(heart => {
  heart.addEventListener("click", () => {
    heartCount++;
    heartCountEl.textContent = `${heartCount}`;
  });
});

// Copy button
document.querySelectorAll(".copy-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const number = btn.closest(".card").querySelector(".number").textContent;
    navigator.clipboard.writeText(number);
    copyCount++;
    copyCountEl.textContent = `📋 ${copyCount}`;
    alert(`Number ${number} copied!`);
  });
});

// Call button
document.querySelectorAll(".call-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".card"); 
    const title = card.querySelector("h2").textContent;  
    const number = card.querySelector(".number").textContent; 

    if (coinCount < 20) {
      alert("Not enough coins to make a call!");
      return;
    }

    coinCount -= 20;
    coinCountEl.textContent = `${coinCount}`;

    alert(`Calling ${title} at ${number}`);

    // Time
    const time = new Date().toLocaleTimeString();

    // History item create
    const li = document.createElement("li");
    li.classList.add("history-item");

    const left = document.createElement("div");
    left.classList.add("history-left");
    left.innerHTML = `<strong>${title}</strong><br><span>${number}</span>`;

    const right = document.createElement("div");
    right.classList.add("history-right");
    right.textContent = time;

    li.appendChild(left);
    li.appendChild(right);

    historyList.appendChild(li);
  });
});

// Clear history item
clearHistoryBtn.addEventListener("click", () => {
  historyList.innerHTML = "";
});