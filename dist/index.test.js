"use strict";
var linkify = require("./index");
test('test linkify to string', function () {
    var text = "hello world @wscld!!!";
    var attr = {
        class: "username"
    };
    var converted = linkify.convert(text, "https://github.com/", attr);
    expect(converted).toBe('hello world <a class="username" href="https://github.com/wscld">@wscld</a>!!!');
});
