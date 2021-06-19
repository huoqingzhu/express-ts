"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuery = void 0;
const querystring = require('querystring');
const url = require('url');
exports.getQuery = (URL) => {
    return url.parse(URL, true).query;
};
