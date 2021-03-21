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

/* Vue.directive('some-test', {
  bind(el, binding) {
    setTimeout(() => {
      el.style.display = 'none';
    }, binding.value)
  },
});

// カスタ *

/* Vue.directive('name', {
  bind(el, binding) {
    setTimeout(() => {
      el.style.display = 'none';
    }, binding.value);
  },
}); */

// ディレクティブにはイベントハンドラを登録することができます

/* Vue.directive('changeーcolor', {
  bind(el, binding) {
    el.addEventListener('click', () => {
      el.style.color = binding.value;
    });
  },
}); */

/* Vue.directive('change-color', {
  bind(el, binding) {
    el.addEventListener('click', () => {
      el.style.color = binding.value;
    });
  },
}); */
//呼び出されたら色が変わる処理をしている
// ちゃんと文字列を入れるためにディレクティブの'red'文字列にすること
/* Vue.component('button-preference', {
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


Vue.component('component-examples', {
  template: `
 <div>
    <div v-for="example in examples">{{ example }}</div>
 </div>
  `,
});

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
//Vue コンポーネントについて

//グローバル登録


 */
/* 

Vue.component('button-s', {
  template: `<button>iine</button>`,
});

Vue.component('button-d', {
  template: `<button>dame</button>`,
});

Vue.component('button-sns', {
  template: `<div>
  <button-s></button-s>
  <button-d></button-d>
  </div>`
});

const buttonS = {
  template: `<button>iine</button>`,
};

const buttonD = {
  template: `<button>dame</button>`,
};

const buttonSns = {
  components: {
    'button-s': buttonS,
    'button-d': buttonD
  },
  template: `
   <div>
     <button-s></button-s>
     <button-d></button-d>
   </div>
  `
};


new Vue({
  el: '#example',
  components: {
    'button-sns': buttonSns
  },
});



const buttonPreference = {
  props: ['initialCount'],
  template: `
     <button>
       {{ initialCount }} いいね！
     </button>
   `,
};

new Vue({
  el: '#example',
  components: {
    'button-preference': buttonPreference,
  },
});



// propsにはキャメルケースで書き、テンプレートにはケバブケースで書く必要ある

const buttonPreference = {
  props: {
    initialCount: {
      type: Number,
      required: true,
    },
  },

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

const buttonPreference = {
  props: ['initialCount'],
  methods: {
    countUp() {
      this.initialCount += 1;
    },
  },
  template: `
    <button v-on:click="countUp">
      {{ initialCount }} いいね！
    </button>
  `,
};


new Vue({
  el: '#example',
  components: {
    'button-preference': buttonPreference,
  },
});

const buttonPreference = {
  props: ['initialCount'],
  data() {
    return { count: this.initialCount };
  },
  methods: {
    countUp() {
      this.count += 1;
    },
  },
  template: `
    <button v-on:click="countUp">
    {{ count }} いいね
    </button>
  `,
};

new Vue({
  el: '#example',
  components: {
    'button-preference': buttonPreference
  },
});



// スロットというものについて説明します。

// コンポーネントにコンテンツを渡す

*/


const buttonPreference = {
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
     {{ count }} <slot></slot>
   </button>
  `,
};


new Vue({
  el: '#example',
  components: {
    'button-preference': buttonPreference,
  },
});


