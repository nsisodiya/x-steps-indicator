(function() {
  "use strict";

  var mix = function(obj, proto) {
    for (var prop in proto) {
      if (proto.hasOwnProperty(prop)) {
        obj[prop] = proto[prop];
      }
    }
  };
  var XStepsIndicatorPrototype = Object.create(HTMLDivElement.prototype);
  mix(XStepsIndicatorPrototype, {
    createdCallback: function() {
      var element = this;
      var total = window.parseInt(this.getAttribute("total"), 10);
      var current = window.parseInt(this.getAttribute("current"), 10);
      var str = "";
      for(var i=1; i<= total;i++){
      	if(i === current){
      	      	str = str + "<circle class='current'></circle>";
      	}else{
      	      	str = str + "<circle></circle>";
      	}
      	if(i !== total){
      		str = str + "<rod></rod>";
      	}
      }
      this.innerHTML = str;
    },
    attachedCallback: function() {},
    detachedCallback: function() {
    },
    attributeChangedCallback: function(attr, oldVal, newVal) {
    },
    render: function() {
    }
  });
  window.XStepsIndicator = document.registerElement('x-steps-indicator', {
    prototype: XStepsIndicatorPrototype
  });
})();

