define([
  'jquery',
  'underscore',
  'Backbone',
  'collections/TodoCollection',
  'text!views/app/AppView.tpl',
  'views/todo/TodoView',
  'text!views/app/appFullTemplate.tpl'
  ],function($,_,Backbone,TodoCollection,AppViewTemplate,TodoView,appFullTemplate){

 var AppView = Backbone.View.extend({
    el: $("#container"),
    statsTemplate: _.template(AppViewTemplate),
    appFullTemplate: _.template(appFullTemplate),
    events: {
      "keypress #new-todo":  "createOnEnter",
      "click #clear-completed": "clearCompleted",
      "click #toggle-all": "toggleAllComplete",
      "click .prevPage":"movePrevPage"
    },
    initialize: function() {
      this.Todos = new TodoCollection();
      this.setElement(this.appFullTemplate({}));
      this.input = this.$("#new-todo");
      this.allCheckbox = this.$("#toggle-all")[0];
      this.listenTo(this.Todos, 'add', this.addOne);
      this.listenTo(this.Todos, 'reset', this.addAll);
      this.listenTo(this.Todos, 'all', this.render);

      this.footer = this.$('footer');
      this.main = this.$('#main');

      this.Todos.fetch();
    },
    render: function() {
      this.done = this.Todos.done().length;
      this.remaining = this.Todos.remaining().length;
      var self = this;
      if (this.Todos.length) {
        this.main.show();
        this.footer.show();
        this.footer.html(this.statsTemplate({done: self.done, remaining: self.remaining}));
      } else {
        this.main.hide();
        this.footer.hide();
      }

      this.allCheckbox.checked = !this.remaining;
    },
    addOne: function(todo) {
      var view = new TodoView({model: todo});
      this.$("#todo-list").append(view.render().el);
    },
    addAll: function() {
      this.Todos.each(this.addOne, this);
    },
    createOnEnter: function(e) {
      if (e.keyCode != 13) return;
      if (!this.input.val()) return;

      this.Todos.create({title: this.input.val()});
      this.input.val('');
    },
    clearCompleted: function() {
      var self = this;
      _.invoke(self.Todos.done(), 'destroy');
      return false;
    },

    toggleAllComplete: function () {
      var done = this.allCheckbox.checked;
      this.Todos.each(function (todo) { todo.save({'done': done}); });
    },
    movePrevPage: function() {
       App.StackNavigator.popView();
    }

  });
  return AppView;
});

