define(['jquery', 'underscore', 'Backbone', 'views/map/MapView', 'text!views/home/HomeView.tpl','views/app/AppView'],
    function ($, _, Backbone, MapView, HomeViewTemplate,AppView) {
        var HomeView = Backbone.View.extend({

            initialize: function() {
                //cordova android backbutton
                document.addEventListener('backbutton', this.onBackKey, false);
            },

            events: {
                'click #btnNextView':'btnNextView_clickHandler',
                'click #btnTodo':'btnTodo_clickHandler'

            },

            onBackKey: function() {
                alert('BACK');
            },

            render : function() {
                this.$el.html(_.template(HomeViewTemplate));
                return this;
            },
            btnTodo_clickHandler: function(e){
                e.preventDefault();
                App.StackNavigator.pushView(AppView);
            },
            btnNextView_clickHandler : function (e) {
                e.preventDefault();
                App.StackNavigator.pushView(MapView);
            }

        });
        return HomeView;
    });