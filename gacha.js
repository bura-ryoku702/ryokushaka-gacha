const menu = [
    { name: "ミラノ風ドリア", price: 300 },
    { name: "ペペロンチーノ", price: 400 },
    { name: "マルゲリータピザ", price: 500 },
    { name: "シーフードパスタ", price: 600 },
    { name: "ティラミス", price: 400 },
    { name: "エスカルゴのオーブン焼き", price: 400 },
    { name: "プロシュート", price: 500 },
    { name: "ラムの串焼き", price: 600 },
    { name: "ドリンクバー", price: 200 }
];

document.getElementById("gacha-button").addEventListener("click", function() {
    let budget = 1000;
    let selectedItems = [];
    let totalPrice = 0;

    while (totalPrice < budget) {
        let item = menu[Math.floor(Math.random() * menu.length)];
        if (totalPrice + item.price > budget) break;
        selectedItems.push(item);
        totalPrice += item.price;
    }

    let resultText = selectedItems.map(item => `${item.name} (${item.price}円)`).join("<br>");
    resultText += `<br><strong>合計: ${totalPrice}円</strong>`;

    document.getElementById("result").innerHTML = resultText;
});
