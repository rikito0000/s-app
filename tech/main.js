//ドム操作を自動で行ってくれる点が楽
//どのような流れでドム操作していくかを考えなくて済む

/* const app = new Vue({
  el: '#example',
  data: {
    greeting: 'hello',
    url: 'https://techacademy.jp/',
    name: 'taro'
  },
});

const apps = new Vue({
  el: '#app',
  data: {
    members: ['太郎', '犬', 'さる', 'キジ'],
  },
});
 */
// Vue.jsの利点はドム操作が必要がない
// インスタンスを作る
// オブジェクトを生成するための特別な関数です。
// オブジェクトを複製するための特別な関数を、コンストラクタといいます。
// テンプレート内では機能が使える。
// 最初のelで指定したテンプレート内は管理下にあること把握す流こと
// dataオプションには文字列通り、データを設定します。
// テキストとデータを結びつける
// インスタンスのデータをテキストで使用する場合、マスタッシュ構文を使用する。

// インスタンスのデータオプションないのでデータとhtmlを結べつけることをデータバイディングという

// 属性とデータを結びつける場合はディレクティブを使用する
// イベントを処理する
/* 

const app = new Vue({
  el: '#example',
  data: {
    name: 'taro',
  },
}); */

// 双方向データバインディングという
// テンプレートからもデータを更新できることを双方向データバインディングという
Vue.filter('toUSD', function (jpy) {
  return jpy / 100
})

Vue.filter('numberFormat', function (value) {
  return value.toLocaleString()
});



// グローバルフィルターについて


const app = new Vue({
  el: '#app',
  data: {
    message: 'hello',
    number: 100,
    ok: true,
    jpyPrice: 298000
  },
  /*   filters: {
      numberFormat: function (value) {
        return value.toLocaleString()
      }
    }  */
});

// ローカルフィルターで表示させる

// フィルターの連結することができる
// パイプで繋げてあげるだけで可能
// v - bind: href = "url"を省略可能である点に中がt必要です
// もっとできる点に興味がありますのでもっとd系マイstart"
: href = "url"







