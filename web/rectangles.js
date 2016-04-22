 (function(){
   var Rectangle = Backbone.Model.extend({});
   var RectangleView = Backbone.View.extend({
     tagName: 'div',
     className: 'rectangle',
     events: {
        'click': 'move'
     },
     render: function() {
       this.setDimensions();
       this.setPosition();
       this.setColor();
       return this;
     },
     setDimensions: function() {
       this.$el.css({
         width: this.model.get('width') + 'px',
         height: this.model.get('height') + 'px',
       });
     },
     setColor: function() {
      this.$el.css(
         'background-color',  this.model.get('color')
      );
     },
       setPosition: function() {
         var position = this.model.get('position');
         this.$el.css({
           left: position.x,
           top: position.y
         });

      },
      move: function(){
         this.$el.css('left', this.$el.position().left + 10);
      }

   });

   var models = [
      new Rectangle({
         width: 100,
         height: 60,
         position: {
            x: 300,
            y: 150
         },
         color: "green"
      }),
      new Rectangle({
         width: 130,
         height: 90,
         position: {
            x: 5,
            y: 400
         },
         color: "blue"
      }),new Rectangle({
         width: 122,
         height: 32,
         position: {
            x: 180,
            y: 220
         },
         color: "black"
      }),new Rectangle({
         width: 300,
         height: 400,
         position: {
            x: 322,
            y: 554
         },
         color: "red"
      })
   ];

   _(models).each(function(model){
      $('div#canvas').append(new RectangleView({model: model}).render().el);

   });
   //var myView = new RectangleView({model: myRectangle});
 })();
