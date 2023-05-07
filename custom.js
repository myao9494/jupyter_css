// console.log("custom.js is loaded");

// カスタマイズ用の関数を作成
function move_maintoolbar_to_container_fluid() {
    // 'container-fluid' クラスを持つ要素を取得
    let containers = document.getElementsByClassName('navbar-collapse collapse');

    // 'maintoolbar' の要素を取得
    let maintoolbar = document.getElementById('maintoolbar-container');

    console.log("custom.js is loaded");

    // 'maintoolbar' を 'container-fluid' の中に追加
    if (containers.length > 0 && maintoolbar) {
        let containerFluid = containers[0];
        containerFluid.appendChild(maintoolbar);
    } else {
        // 要素がまだ生成されていない場合、少し待ってから再度関数を実行
        setTimeout(move_maintoolbar_to_container_fluid, 100);
    }
}

// Jupyter Notebookのリソースが読み込まれた後に関数を実行
require(['base/js/namespace', 'base/js/events', 'jquery'], function (Jupyter, events, $) {
    events.on("kernel_ready.Kernel", move_maintoolbar_to_container_fluid);
});
