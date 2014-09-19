define(['jquery','underscore','Backbone'],function($,_,Backbone){
   var Todo = Backbone.Model.extend({
      defaults: function() {
        return {
          title: "empty todo...",
          done: false
        };
      },
      toggle: function() {
        this.save({done: !this.get("done")});
      }

    });
   return Todo;
});