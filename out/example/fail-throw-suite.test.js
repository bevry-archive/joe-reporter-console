// Generated by CoffeeScript 1.3.3
(function() {
  var assert, joe;

  assert = (typeof require === "function" ? require('assert') : void 0) || this.assert;

  joe = (typeof require === "function" ? require(__dirname + '/../lib/joe') : void 0) || this.joe;

  joe.suite('deliberate throw suite', function() {
    throw new Error('I am the deliberate throw');
  });

}).call(this);
