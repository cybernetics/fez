var fez = require("../../src/main"),
    jshint = require("fez-jshint");

exports.lint = function(rule) {
  rule.each("src/*.js", jshint({
    curly: true,
    indent: 2
  }), { always: true });
};

exports.default = exports.lint;

fez(module);
