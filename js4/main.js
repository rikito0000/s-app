const app = new Vue({
  el: '#app',
  data: {
    message: 'hello <span style="color:red;"> Vue.js </span>'
  },
  methods: {
    clickHandler: function (event) {
      this.message = this.message.split('').reverse().join('')
    }
  }
});

const pre = new Vue({
  el: '#pre',
  data: {
    message: 'hello <span style="color: red;"> Vue.js </span>'
  },
});

const sub = new Vue({
  el: '#sub',
  data: {
    message: 'hello'
  }
})

new Vue({
  el: '#monster',
  data: {
    message: 'hlo'
  }
})


