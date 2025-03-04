document.getElementById("gacha-button").addEventListener("click", function() {
    let budget = parseInt(document.getElementById("budget").value);
    let selectedItems = [];
    let totalPrice = 0;

    let availableItems = [...items]; // 元のリストを変更しないようコピー

    while (availableItems.length > 0 && totalPrice < budget) {
        let randomIndex = Math.floor(Math.random() * availableItems.length);
        let selectedItem = availableItems[randomIndex];

        if (totalPrice + selectedItem.price <= budget) {
            selectedItems.push(`${selectedItem.name} (${selectedItem.price}円)`);
            totalPrice += selectedItem.price;
        }

        availableItems.splice(randomIndex, 1);
    }

    // 結果を表示（合計金額も含む）
    document.getElementById("result").innerHTML = 
        "ガチャ結果:<br>" + selectedItems.join("<br>") + 
        "<br><br>合計金額: " + totalPrice + "円";

    tweetResult(selectedItems, totalPrice); // 合計金額も渡す
});

function tweetResult(menuItems, totalPrice) {
    let text = "ツアーグッズガチャの結果：\n";
    text += menuItems.join("\n");
    text += "\n合計金額: " + totalPrice + "円";  // 合計金額を追加
    text += "\n#ツアーグッズガチャ";

    let url = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(text);
    
    // tweet-buttonのhrefを更新してツイートリンクを作成
    document.getElementById("tweet-button").href = url;
}
