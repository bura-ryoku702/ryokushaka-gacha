const items = [
    { name: "Channel U ツアーTシャツM", price: 3800 },
    { name: "Channel U ツアーTシャツL", price: 3800 },
    { name: "Channel U ツアーTシャツXL", price: 3800 },
    { name: "Channel U ツアータオル", price: 2200 },
    { name: "Channel U ツアーアクリルキーホルダー", price: 800 },
    { name: "Channel U ジャケ写Tシャツ(ビッグシルエット)M", price: 4200 },
    { name: "Channel U ジャケ写Tシャツ(ビッグシルエット)XL", price: 4200 },
    { name: "Channel U ツアーラバーバンドオーロラ", price: 600 },
    { name: "Channel U ツアーラバーバンド黒", price: 600 },
    { name: "ChannelU ツアーマグネット", price: 4500 },
    { name: "PLAYER 1Tシャツ(ビッグシルエット)M", price: 4200 },
    { name: "PLAYER 1Tシャツ(ビッグシルエット)XL", price: 4200 },
    { name: "PLAYER 1ミトン", price: 2000 },
    { name: "PLAYER 1巾着ポーチ", price: 1500 },
    { name: "ブロッコリー＆カリフラワーTシャツM", price: 3800 },
    { name: "ブロッコリー＆カリフラワーTシャツL", price: 3800 },
    { name: "ブロッコリー＆カリフラワーTシャツXL", price: 3800 },
    { name: "ブロッコリー＆カリフラワーブランケット", price: 3500 },
    { name: "ブロッコリー＆カリフラワークッション", price: 3500 },
    { name: "PLAYER 1セットアップ(ナイロン)M", price: 12000 },
    { name: "PLAYER 1セットアップ(ナイロン)XL", price: 12000 },
    { name: "Channel U ツアーステッカーセット", price: 900 },
    { name: "メッシュバッグ", price: 1000 },
    { name: "ガチャ", price: 500 }
];

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
    
    document.getElementById("result").innerHTML = "ガチャ結果:<br>" + selectedItems.join("<br>");

    tweetResult(selectedItems);
});

function tweetResult(menuItems) {
    let text = "ツアーグッズ10000円ガチャの結果：\n";
    text += menuItems.join("\n");
    text += "\n#ツアーグッズ10000円ガチャ";

    let url = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(text);
    
    document.getElementById("tweet-button").href = url;
}
