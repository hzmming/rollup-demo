'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _ = _interopDefault(require('lodash'));

var index = 42;

function main () {
  console.log("the answer is " + index);
  // 示例而已，查看 lodash 的版本号
  console.log(_.VERSION);
}

module.exports = main;
