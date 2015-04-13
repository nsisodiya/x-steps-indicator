(function() {
  "use strict";
  pitana.registerElement(pitana.HTMLElement.extend({
    tagName: "pt-steps-indicator",
    accessors: {
      total: {
        type: "int",
        onChange: "render"
      },
      current: {
        type: "int",
        onChange: "render"
      }
    },
    initialize: function () {
      pitana.HTMLElement.apply(this, arguments);
    },
    attachedCallback: function () {
      this.render();
    },
    render: function () {
      var element = this;
      var str = "";
      for(var i=1; i<= this.$.total; i++){
        if(i === this.$.current){
          str = str + "<circle class='current'></circle>";
        }else{
          str = str + "<circle></circle>";
        }
        if(i !== this.$.total){
          str = str + "<rod></rod>";
        }
      }
      this.$.innerHTML = str;
    }
  }));
})();