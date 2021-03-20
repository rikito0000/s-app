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
        },
      ];
      this.tabs = fetchedData;
      this.activeTab = fetchedData[0];
    }, 2000);
  },
});


//事前にある情報（配列やオブジェクト）もとにデータを作る場合
//v-forディレクティブを用いて、配列やobjectないにあるデータを一件ごとに設定していく場合のことを言います
