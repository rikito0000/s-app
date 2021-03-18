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

*/

const app = new Vue({
  el: '#example',
  data: {
    activeTab: 'tabs-1'
  },
});



