/* new Vue({
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
        },
      ];
      this.tabs = fetchedData;
      this.activeTab = fetchedData[0];
    }, 2000);
  },
});
 */

//事前にある情報（配列やオブジェクト）もとにデータを作る場合
//v-forディレクティブを用いて、配列やobjectないにあるデータを一件ごとに設定していく場合のことを言います

Vue.directive('some-test', {
  bind(el, binding) {
    setTimeout(() => {
      el.style.display = 'none';
    }, binding.value)
  },
});

// カスタムディレクティブを登録するにはvue.directiveというメソッドが必要です

Vue.directive('name', {
  bind(el, binding) {
    setTimeout(() => {
      el.style.display = 'none';
    }, binding.value);
  },
});

// ディレクティブにはイベントハンドラを登録することができます

/* Vue.directive('changeーcolor', {
  bind(el, binding) {
    el.addEventListener('click', () => {
      el.style.color = binding.value;
    });
  },
}); */

Vue.directive('change-color', {
  bind(el, binding) {
    el.addEventListener('click', () => {
      el.style.color = binding.value;
    });
  },
});
//呼び出されたら色が変わる処理をしている
// ちゃんと文字列を入れるためにディレクティブの'red'文字列にすること
Vue.component('button-preference', {
  data() {
    return { count: 0 };
  },
  methods: {
    countUp() {
      this.count += 1;
    },
  },
  template: `<button v-on:click="countUp">{{count}}</button>`
});


Vue.component('button-pre', {
  data() {
    return { count: 0 };
  },
  methods: {
    countUp() {
      this.count += 2;
    },
  },
  template: `<button v-on:click="countUp">soudane{{ count }}</button>`
})




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
          title: 'タブ１',
          content: 'タブ１の内容が入ります。'
        },
        {
          id: 'tabs-2',
          title: 'タブ2',
          content: 'タブ2の内容が入ります。'
        },
        {
          id: 'tabs-3',
          title: 'タブ3',
          content: 'タブ3の内容が入ります。'
        },
      ];
      this.tabs = fetchedData;
      this.activeTab = fetchedData[0];
    }, 2000);
  }
})


// ディレクティブでドム操作を自動化している

