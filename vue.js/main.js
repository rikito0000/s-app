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
*/


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
