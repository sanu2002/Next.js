// index.js
//This is importatnt file to register the babel 
require("@babel/register")({
  extensions: [".js", ".jsx"]
});

require("./server.js");
