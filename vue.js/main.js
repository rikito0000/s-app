/* const app = new Vue({
  el: '#example2',
  data: {
    characters: {
      hero: '桃太郎',
      friend: '犬',dd
      enemy: '鬼'
    },
  });

  const app = new Vue({
  el: "#example",
  data: {
    name: '桃太郎',
  },
});

// 双方向ディレクティブである
// またディレクティブの省略方法がある

const app = new Vue({
  el: '#example',
  data: {
    height: '',
    weight: '',
  },

  computed: {
    bmi() {
      if (this.height && this.weight) {
        const meterHeight = this.height / 100;

        const bmi = this.weight / (meterHeight * meterHeight);

        return bmi.toFixed(2);
      }
      return '';
    },
  },
});

const app = new Vue({
  el: '#example',
  data: {
    height: '',
    weight: '',
  },
  methods: {
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

// 算出プロパティもオブションオブジェクトのプロパティとして描きます。
// オブジェクトを定義してその中に関数を書きます。
// データオプションのデータと同じようなにアクセスできます。
// 注意点として、算出プロパティには関数として書きますが、呼び出す際はプロパティとして書きます。なので（）は不要です。

// 算出プロパティとメソッドの使い分け
// 算出プロパティばキャッシュされる


const app = new Vue({
  el: '#example',
  data: {
    count: 0,
  },
  computed: {
    date() {
      return new Date().toLocaleDateString();
    },
  },
  methods: {
    countUp() {
      this.count += 1;
    },
    getDate() {
      return new Date().toLocaleDateString();
    },
  },
});


const app = new Vue({
  el: '#example',
  data: {
    activeTab: '',
  },
});
// v-showとv-ifの使い分けについて
// 頻繁に切り替える場合はvshow一度表示したらほとんど切り替えることがない場合はvifを使うといいでしょう。

new Vue({
  el: '#example',
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
          content: 'tab1の内容が入ります'
        },
        {
          id: 'tabs-2',
          title: 'tab2',
          content: 'tab2の内容が入ります'
        },

        {
          id: 'tabs-3',
          title: 'tab3',
          content: 'tab3の内容が入ります'
        }
      ];
      this.tabs = fetchedData;
      this.activeTab = fetchedData[0];
    }, 2000);
  },
});

// 2秒後に非表示にする
Vue.directive('hide-async', {
  bind(el, binding) {
    setTimeout(() => {
      el.style.display = 'none';
    }, binding.value);
  },
});

new Vue({
  el: '#example',
});

// イベントハンドラを登録する

Vue.directive('change-color', {
  bind(el, binding) {
    el.addEventListener('click', () => {
      el.style.color = binding.value;
    });
  },
});

// イベントハンドラをしかける
// イベントの種類、イベントリスナー

new Vue({
  el: '#example',
});


//コンポーネントについて
// 繰り返し使えるようにしたインスタンスのことです。
// コンポーネントにデータを持たせる

Vue.component('button-preference', {
  data() {
    return { count: 0 };
  },
  methods: {
    countUp() {
      this.count += 1;
    },
  },

  template: `
    <button v-on:click="countUp">
      {{ count }} いいね！
    </button>
  `,
});


new Vue({
  el: '#example',
});

// コンポネンとでデータを定義する場合は関数で定義する必要がある。
// ルート要素は一つにする必要がある。

Vue.component('buttons-preference', {
  template: `
  <div>
     <button>いいね</button>
     <button>そうだね</button>
  </div>
  `
});
Vue.component('component-examples', {
  template: `
   <div>
   <div v-for="example in examples">
   {{ example }}
    </div>
   </div>
  `,
})
new Vue({
  el: '#example'
});


// 全てがグローバル登録のコンポーネント

Vue.component('button-preference', {
  template: `
    <button>いいね</button>
  `,
});

Vue.component('button-empathy', {
  template: `
    <button>そだね</button>
  `,
});

Vue.component('buttons-sns', {
  template: `
    <div>
      <button-preference></button-preference>
      <button-empathy></button-empathy>
    </div>
  `,
});

new Vue({
  el: '#example'
});

// index.htmlで直接使っているのはbuttons-snsコンポーネントのみで
// 後の二つはコンポーネントのなかで使用しています。
// グローバル登録なのでインスタンス内のどこでも使えるということです。

// ローカル登録
const buttonPreference = {
  template: `
    <button>いいね！</button>
  `,
};

const buttonEmpathy = {
  template: `
    <button>そだね</button>
  `,
};

const buttonSns = {
  components: {
    'button-preference': buttonPreference,
    'button-empathy': buttonEmpathy,
  },
  template: `
    <div>
      <button-preference></button-preference>
      <button-empathy></button-empathy>
    </div>
  `,
};

new Vue({
  el: '#example',
  components: {
    'buttons-sns': buttonSns,
  },
});

// 親からデータを渡す方法

const buttonPreference = {
  props: ['initialCount'],
  template: `
    <button>
     {{ initialCount }}　いいね！
    </button>
  `,
};

new Vue({
  el: '#example',
  components: {
    'button-preference': buttonPreference,
  },
});
// ルートのテンプレートについて
const app = new Vue({
  el: '#app',
  data: {
    message: 'hello, vue.js',
    count: 10,
    user: {
      lastName: 'yamada',
      firstName: 'taro',
      prefecture: 'tokyo'
    },
    colors: ['red', 'green', 'blue']
  },
  // dataオプションに配列やオブジェクトを設定してバインディングする方法やりました。
});
//  データバインディングについて
// データと同期することについて
// 双方向バイディング
// 単方向バインディング
// ワンタイムバイディングについて
// テンプレートについて
// エラーを自力で解決する方法について

//ディレクディブとはなにかついて
// v-で始まる特別な属性のこと

//属性のテキストバインディングする方法

const app = new Vue({
  el: '#app',
  data: {
    message: 'hello'
  }
}
);

// 条件分岐をディレクティブで行う

const app = new Vue({
  el: '#app',
  data: {
    toggle: false,
  }
});


// 条件分岐v-show
// 要素の表示非表示を行うことができる
//　cssでdisplayをon/offしていることに注意が必要です。
// 非表示にした場合は特にドムレベルで消えるわけではないこと注意が必要です。
// v-ifではドムレベルで削除されるので頻繁に削除する場合は向いていない
// v-forオブジェクトのくりかえし


const app = new Vue({
  el: '#app',

  data: {
    user: {
      firstName: 'taro',
      lastName: 'yamada',
      age: 22
    }
  },
});


const app = new Vue({
  el: '#app',
  data: {
    now: ''
  },
  methods: {
    onclick: function () {
      this.now = new Date().toLocaleString();
    },
  },
});
//　イベントハンドラをしかける
// インスタンスのオブジェクトにアクセスするためにはthis.を使うこと

// 双方向データバインディングについて
//テンプレーとの値とデータの値を簡単に双方向でバインディングできるようにすることが必要です。

const ap = new Vue({
  el: '#ap',
  data: {
    message: 'helloa'
  }
});

// コンポーネントについて
// ページを構成する部品のことをいいます。再利用性が高くなる点とコードの見通しが良くなる

Vue.component('hello-component', {
  template: '<p>hello</p>'
})

const a = new Vue({
  el: '#a'
})

Vue.component('take-action', {
  template: '<p>action</p>'
});

const act = new Vue({
  el: '#act'
});
*/

const app = new Vue({
  el: '#app',
  data: {
    message: 'hello, world!',
    url: 'https://jp.vuejs.org/index.html',
    toggle: false,
    languages: ['javascript', 'ruby', 'python']
  },
  methods: {
    clickHandler: function () {
      this.message = 'clicked'
    }
  }
});










