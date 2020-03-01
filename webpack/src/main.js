require('./a.js')
//导入jquery
const $ = require('jquery')
//导入css
require('./css/base.css')
require('./css/index.css')
//导入less
require('./less/common.less')

console.log('hello webpack')
$(function () {
  $('#app li:nth-child(odd)').css('color', '#f00')
  $('#app li:nth-child(even)').css('color', '#00f')
})