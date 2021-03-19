const app = new Vue({
  el: '#app',
  data: {
    newItem: '',
    todos: []
  },
  methods: {
    addItem: function (e) {
      //もし押された時に未入力だったら何もしないという記述をてしています。
      if (this.newItem == '') return;

      const todo = {
        item: this.newItem,
        isDone: false
      };

      this.todos.push(todo);
      this.newItem = '';
    },
    deleteItem: function (index) {
      this.todos.splice(index, 1)
    }
  }
});
