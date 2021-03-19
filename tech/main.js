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


/*const app = new Vue({
  el: '#app',
  data: {
    message: 'hello',
    number: 100,
    ok: true,
    jpyPrice: 298000
  },
     filters: {
      numberFormat: function (value) {
        return value.toLocaleString()
      }
    }
}); */

// ローカルフィルターで表示させる

// フィルターの連結することができる
// パイプで繋げてあげるだけで可能
// v - bind: href = "url"を省略可能である点に中がt必要です
// もっとできる点に興味がありますのでもっとd系マイstart"
// : href = "url"
// ディレクティブの省略可能な方法
// 可読性を上げるためにテンプレート側にできる限り処理を書かないようにして
// computedに処理まとめてその関数をテンプレート側で呼び出して戻り値で表示させるようにする

/* 
const app = new Vue({
  el: '#app',
  data: {
    message: 'hellohello',
    basePrice: 100,
    name: 'taro',
    weight: '',
    height: ''
  },
  computed: {
    reversedMessage: function () {
      return this.message.split('').reverse().join('')
    },
    computedNumber: function () {
      console.log('computed');
      return Math.random()
    },
    taxIncludePrice: {
      get: function () {
        return parseInt(this.basePrice * 1.08)
      },
      set: function (taxIncludePrice) {
        this.basePrice = Math.ceil(taxIncludePrice / 1.08)
      },
    },
    bmi() {
      if (this.height && this.weight) {
        const meterHeight = this.height / 100;
        const bmi = this.weight / (meterHeight * meterHeight);

        return bmi.toFixed(2);
      }

      return '';
    },
  },
  methods: {
    reverseMessageMethod: function () {
      return this.message.split('').reverse().join('')
    },
    methodsNumber: function () {
      console.log('methods');
      return Math.random()
    },

    getBmi() {
      if (this.height && this.weight) {
        const meterHeight = this.height / 100;
        const bmi = this.weight / (meterHeight * meterHeight);

        return bmi.toFixed(2);
      }

      return '';
    },
  },
});
 */
// computedキャッシュされる依存関係に基づき
// methodsキャッシュされない
// computeds算出プロパティと
// methodsメソッドの使い分け
// キャッシュされるということです
// データを一時的に保存しておくことです。

// 算出プロパティの場合、データが更新された時に再計算します。

/* const app = new Vue({
  el: '#app',
  data: {
    count: 0,
    activeTab: '',
  },
  computed: {
    date() {
      return new Date().toLocaleString();
    },
  },
  methods: {
    countUp() {
      this.count += 1;
    },
    getDate() {
      return new Date().toLocaleString();
    },
  },
}); */
// 算出プロパティを使用することで余分な処理を実行されることを防ぐことがきます。
// メソッドは呼ばれるたびに実行する必要のある処理で使用する
//　呼び出す側のメソッドは呼び出しの式で書く場合とメソッド名だけを書く場合があります。


const app = new Vue({
  el: '#app',
  data: {
    tabs: null,
    activeTab: null,
  },
  created() {
    setTimeout(() => {
      const fetchedData = [
        {
          id: 'tabs-1',
          title: 'tab1',
          content: 'tab1の内容が入ります。'
        },
        {
          id: 'tabs-2',
          title: 'tab1',
          content: 'tab1の内容が入ります。'
        },
        {
          id: 'tabs-3',
          title: 'tab1',
          content: 'tab1の内容が入ります。'
        },
        {
          id: 'tabs-4',
          title: 'tabs',
          content: 'tabsの内容が入ります。'
        },
      ];
      this.tabs = fetchedData;
      this.activeTab = fetchedData[0];
    }, 3000);
  },
});

// 実際の開発では、表示する情報事前にわからないこともあります。
// 例えばデータベースから配列やオブジェエクトとして取得した情報をもとにタブを作成する場合です。

// このような場合は繰り返し処理を用いて、配列やobject無いになるデータを一件ごとにタブと内容を設定することが望ましいです。

// createdオブションオブジェクトとはライプサイクルプッ苦のこと
// ライフサイクルフックは特定のタイミングで処理を行うことを目的に、
//   Vue側で用意されている関数
