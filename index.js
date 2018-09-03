require("@babel/register")({
    presets : ["@babel/preset-env"]
});

var process = require("process");
process.stdout.write("index.js ran\n");

require('./test.jsx');

