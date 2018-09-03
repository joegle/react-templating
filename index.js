require("@babel/register")({

    // I think order matters here
    presets : [ "@babel/preset-react", "@babel/preset-env"]
});

var process = require("process");
process.stdout.write("index.js ran\n");

require('./test.jsx');

