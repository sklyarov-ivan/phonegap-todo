define(['jquery','underscore','Backbone','models/TodoModel','localstorage'],function($,_,Backbone,TodoModel,localstorage){
     var TodoList = Backbone.Collection.extend({
        model: TodoModel,
        localStorage: new Backbone.LocalStorage("todos-backbone"),
        done: function() {
          return this.where({done: true});
        },
        remaining: function() {
          return this.where({done: false});
        },
        nextOrder: function() {
          if (!this.length) return 1;
          return this.last().get('order') + 1;
        },
        comparator: 'order'
      });
     return TodoList;
});