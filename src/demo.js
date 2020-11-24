var Demo = function () {
  var store = {};

  function echo(x) {
    return x;
  }

  this.getValue = function (key) {
    return store[key] || "";
  };

  this.setValue = function (key, value) {
    store[key] = value;
  };

  this.__testOnly__ = {
    echo: echo,
  };
};

module.exports = Demo;
