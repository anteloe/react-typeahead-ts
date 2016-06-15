"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var TypeAhead = (function (_super) {
    __extends(TypeAhead, _super);
    function TypeAhead() {
        _super.apply(this, arguments);
    }
    TypeAhead.prototype.bindTypeAhead = function (input) {
        var typeahead = jQuery(input).typeahead(this.props.options, this.props.data);
        typeahead.bind('typeahead:selected', this.props.onSelected);
    };
    TypeAhead.prototype.render = function () {
        return React.createElement("input", {type: 'text', onChange: this.props.onChange, placeholder: this.props.placeholder, ref: this.bindTypeAhead.bind(this)});
    };
    return TypeAhead;
}(React.Component));
exports.TypeAhead = TypeAhead;
