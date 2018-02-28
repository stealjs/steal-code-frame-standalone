var stealTools = require("steal-tools");

stealTools.export({
  steal: {
    config: __dirname + "/package.json!npm"
  },
  outputs: {
    "+standalone": {
      "exports": {
        "steal-code-frame-standalone": "BabelCodeFrame"
      }   
    }
  }
}).catch(function(e){
  setTimeout(function(){
    throw e;
  }, 1);
});
