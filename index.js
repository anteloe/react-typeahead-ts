"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="./typings/index.d.ts" />
var React = require('react');
var TypeAhead = (function (_super) {
    __extends(TypeAhead, _super);
    function TypeAhead() {
        _super.apply(this, arguments);
    }
    TypeAhead.prototype.componentWillMount = function () {
        this.setState({
            options: ['Voltastrasse 31, 4012 Basel', 'Untere Hardegg 27, 4600 Olten', 'Bahnhofquai 2, 4600 Olten'],
            selected: ''
        });
    };
    TypeAhead.prototype.bindTypeAhead = function (input) {
        var _this = this;
        var options = {
            classNames: {
                input: this.props.className,
            },
            hint: false,
            highlight: false
        };
        var data = {
            source: function (q, cb) {
                cb(_this.state.options.filter(function (i, idx) {
                    return i.indexOf(q) > -1;
                }));
            },
            display: function (address) { return address; },
        };
        var typeahead = jQuery(input).typeahead(options, data);
        typeahead.bind('typeahead:selected', this.props.onSelected);
    };
    TypeAhead.prototype.render = function () {
        return React.createElement("input", {type: 'text', onChange: this.props.onChange, placeholder: this.props.placeholder, ref: this.bindTypeAhead.bind(this)});
    };
    return TypeAhead;
}(React.Component));
exports.TypeAhead = TypeAhead;
