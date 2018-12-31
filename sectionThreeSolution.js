var $ = require('jquery');
module.exports = function (baseCurrency, callback) {
  // api.fixer.io 액세스 키를 요구함 버전이 바뀌어서 고쳐야함 액세스 키를 얻으려면 계정을 만들어야 한다. 귀찮음
  // $.getJSON('http://api.fixer.io/latest?base=' + baseCurrency, function(fxRate) {
  //     callback(fxRate);
  // });
  $.getJSON('http://example.com/articles/1', function (fxRates) {
    callback(fxRates);
  });
};