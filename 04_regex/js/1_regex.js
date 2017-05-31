
'use strict';

/*
var str = 'Существует много языков программирования, например Java, JavaScript, PHP, C, C++.';
var reg = /html|php|css|java(script)?|c(\+{2})?/gi;
str.match(reg);
*/

/*
var str = ' .. "test me" .. "Скажи \\"Привет\\"!" .. "\\r\\n\\\\" .. ';
var reg = /"[^.]*"/g;
str.match(reg);
*/

/*
var str = '<style> <styler> <style test>';
var reg = /<style\b\s?[^>]*>/g;
str.match(reg);
*/

/*
var reg = /^[0-9A-F]{2}(:[0-9A-F]{2}){5}$/;
reg.test('01:32:54:67:89:AB');
*/

/*
// регэксп для пары атрибут=значение
var attr = /(\s*\w+=(\w+|"[^"]*")\s*)/

// используем его внутри регэкспа для тега
var reg = new RegExp('<\\w+(?=(' + attr.source + '*))\\1>', 'g');

var good = '...<a test="<>" href="#">... <b>...';

var bad = "<tag a=b  a=b  a=b  a=b  a=b  a=b  a=b  a=b\
  a=b  a=b  a=b  a=b  a=b  a=b  a=b  a=b  a=b  a=b  a=b  a=b  a=b";

alert( good.match(reg) ); // <a test="<>" href="#">, <b>
alert( bad.match(reg) ); // null (нет результатов, быстро)
 */
