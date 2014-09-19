define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){
  // console.log('router', Backbone);
window.BASE_URL = 'http://'+window.location.host;
Backbone.View.prototype.leave = function(){
  this.off();
  this.$el.remove();
  this.remove();
  this.unbind();
  if(this.onLeave){
    this.onLeave();
  }
};

  window.App = {};







  var AppRouter = Backbone.Router.extend({
    routes: {

      '*actions': 'defaultAction'
    },
    initialize: function(){

    },

    defaultAction: function(){
      console.log('backbone app');
    },
    swap: function(view){
      if (this.currentView){
        this.currentView.leave();
      }
      this.currentView = view;
    }
  });

  var initialize = function(){
    // window.App.Vent = _.clone(Backbone.Events);
    // var app_router = new AppRouter();
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});