const app = new Vue({
  el: '#app',
  /*  data: {
     message: ''
   }, */
  data: {
    message: ''
  },
  //メソッドイベントハンドラー
  methods: {
    clickHandler: function () {
      alert('click');
    }
    /*  clear: function () {
       this.message = ''
     },
     clickH: function () {
       this.message = new Date().toLocaleTimeString()
     },
     //イベントオブジェクトの参照について
     // $eventはvue.jsが定義している
     clickHandler: function ($event, message) {
       console.log($event);
       this.message = message
       // console.log(e.target.tagName);
       /*  console.log(e.target.innerHTML)
        console.log(e.target.type) */
    /* this.counter++ */
  }
})



