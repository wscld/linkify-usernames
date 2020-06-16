"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
var create_html_element_1 = __importDefault(require("create-html-element"));
var regex = function () { return (/\B@([a-z0-9](?:-?[a-z0-9]){0,38})/gi); };
var linkifyUsername = function (match, link, attributes) {
    var username = match.replace(/^@/, '');
    var href = link + "/" + username;
    return create_html_element_1.default({
        name: "a",
        text: match,
        attributes: __assign(__assign({}, attributes), { href: href })
    });
};
exports.convert = function (input, link, attributes) {
    return input.replace(regex(), function (match) { return linkifyUsername(match, link, attributes); });
};
exports.default = { convert: exports.convert };
