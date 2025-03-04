const menu = [
        { name: "Channel U ツアーTシャツM", price: 3800, upperlimit : 4},
        { name: "Channel U ツアーTシャツL", price: 3800, upperlimit : 4},
        { name: "Channel U ツアーTシャツXL", price: 3800, upperlimit : 4},
        { name: "Channel U ツアータオル", price: 2200, upperlimit : 4},
        { name: "Channel  U ツアーアクリルキーホルダー", price: 800, upperlimit : 4},
        { name: "Channel U ジャケ写Tシャツ(ビッグシルエット)M", price: 4200, upperlimit : 4},
        { name: "Channel U ジャケ写Tシャツ(ビッグシルエット)XL", price: 4200, upperlimit : 4},
        { name: "Channel U ツアーラバーバンドオーロラ", price: 600, upperlimit :4},
        { name: "Channel U ツアーラバーバンドクロ", price: 600, upperlimit : 4},
        { name: "ChannelU ツアーマグネット", price: 4500, upperlimit : 4},
        { name: "PLAYER 1Tシャツ(ビッグシルエット)M", price: 4200, upperlimit : 4},
        { name: "PLAYER 1Tシャツ(ビッグシルエット)XL", price: 4200, upperlimit:4},
        { name: "PLAYER 1ミトン", price: 2000, upperlimit :4},
        { name: "PLAYER 1巾着ポーチ", price: 1500, upperlimit : 4},
        { name: "ブロッコリー＆カリフラワーTシャツM", price: 3800, upperlimit : 4},
        { name: "ブロッコリー＆カリフラワーTシャツL", price: 3800, upperlimit : 4},
        { name: "ブロッコリー＆カリフラワーTシャツXL", price: 3800, upperlimit : 4},
        { name: "ブロッコリー＆カリフラワーブランケット", price: 3500, upperlimit : 4},
        { name: "ブロッコリー＆カリフラワークッション", price: 3500, upperlimit : 4},
        { name: "PLAYER 1セットアップ(ナイロン)M", price: 12000, upperlimit : 4},
        { name: "PLAYER 1セットアップ(ナイロン)XL", price: 12000, upperlimit : 4},
        { name: "Channel U ツアーステッカーセット", price: 900,  upperlimit : 4},
        { name: "メッシュバッグ", price: 1000, upperlimit : 4 },
        { name: "ガチャ", price: 500, upperlimit : 10 }
];

document.getElementById("gacha-button").addEventListener("click", function() {
    let budget = 10000;
    let selectedItems = [];
    let totalPrice = 0;

    while (9500 < totalPrice < budget) {
        let item = menu[Math.floor(Math.random() * menu.length)];
        if (totalPrice + item.price > budget) break;
        selectedItems.push(item);
        totalPrice += item.price;
    }

    let resultText = selectedItems.map(item => `${item.name} (${item.price}円)`).join("<br>");
    resultText += `<br><strong>合計: ${totalPrice}円</strong>`;

    document.getElementById("result").innerHTML = resultText;
});
