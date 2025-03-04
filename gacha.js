const menu = [
        { name: "Channel U ツアーTシャツM", price: 3800, upperlimit : 4},
        { name: "Channel U ツアーTシャツL", price: 3800, upperlimit : 4},
        { name: "Channel U ツアーTシャツXL", price: 3800, upperlimit : 4},
        { name: "Channel U ツアータオル", price: 2200, upperlimit : 4},
        { name: "Channel U ツアーアクリルキーホルダー", price: 800, upperlimit : 4},
        { name: "Channel U ジャケ写Tシャツ(ビッグシルエット)M", price: 4200, upperlimit : 4},
        { name: "Channel U ジャケ写Tシャツ(ビッグシルエット)XL", price: 4200, upperlimit : 4},
        { name: "Channel U ツアーラバーバンドオーロラ", price: 600, upperlimit :4},
        { name: "Channel U ツアーラバーバンド黒", price: 600, upperlimit : 4},
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
    let budget = parseInt(document.getElementById("budget").value); // 選択された予算
        console.log("選択された予算:", budget);
    let minBudget = budget - 1000; // 最低金額設定
        let items = [
        { name: "Channel U ツアーTシャツM", price: 3800, upperlimit : 4},
        { name: "Channel U ツアーTシャツL", price: 3800, upperlimit : 4},
        { name: "Channel U ツアーTシャツXL", price: 3800, upperlimit : 4},
        { name: "Channel U ツアータオル", price: 2200, upperlimit : 4},
        { name: "Channel U ツアーアクリルキーホルダー", price: 800, upperlimit : 4},
        { name: "Channel U ジャケ写Tシャツ(ビッグシルエット)M", price: 4200, upperlimit : 4},
        { name: "Channel U ジャケ写Tシャツ(ビッグシルエット)XL", price: 4200, upperlimit : 4},
        { name: "Channel U ツアーラバーバンドオーロラ", price: 600, upperlimit :4},
        { name: "Channel U ツアーラバーバンド黒", price: 600, upperlimit : 4},
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
        
    let selectedItems = [];
    let totalPrice = 0;

    while (items.length > 0 && totalPrice < budget) {
        let randomIndex = Math.floor(Math.random() * items.length);
        let selectedItem = items[randomIndex];

        if (totalPrice + selectedItem.price <= budget) {
            selectedItems.push(selectedItems.push(${selectedItem.name} (${selectedItem.price}円)););
            totalPrice += selectedItem.price;
        }

        items.splice(randomIndex, 1);
    }

    // 結果を表示
    document.getElementById("result").innerHTML = "ガチャ結果:<br>" + selectedItems.join("<br>");

    // ツイートボタンを更新
    tweetResult(selectedItems);
});
