const app = new Vue({
  el: '#app',
  data: {
    km: 0,
    m: 0,
    mm: 0,
    firstName: '',
    lastName: '',
    colors: [
      { name: 'red' },
      { name: 'green' },
      { name: 'blue' }
    ]
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName;
    }
  },
  watch: {
    km: function (value) {
      // console.log(value);
      this.km = value
      this.m = value * 1000
      this.mm = value * 1000000
    },
    m: function (value) {
      // console.log(value);
      this.km = value / 1000
      this.m = value
      this.mm = value * 1000
    },
    mm: function (value) {
      // console.log(value);
      this.km = value / 1000000
      this.m = value / 1000
      this.mm = value
    },
    firstName: function (value) {
      this.fullName = value + ' ' + this.lastName
    },
    lastName: function (value) {
      this.fullName = this.firstName + ' ' + value
    },
    colors: {
      handler: function (newValue, oldValue) {
        console.log('Update');
      },
      deep: true,
      immediate: true,
      // 初期読み込みがフックするかどうか
      // 書かない場合とfalseの場合は一緒です
    },
  },
});


//算出プロパティと監視プロパティどちらでも表示できる場合は算出プロパティを使用すること　//算出プロパティで記述の方が簡単





