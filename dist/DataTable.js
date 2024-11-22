"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./DataTable.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// src/DataTable.jsx

var DataTable = function DataTable(_ref) {
  var data = _ref.data,
    columns = _ref.columns,
    pagination = _ref.pagination,
    onSort = _ref.onSort,
    onSearch = _ref.onSearch;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "datatable"
  }, /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    placeholder: "Rechercher...",
    onChange: function onChange(e) {
      return onSearch && onSearch(e.target.value);
    }
  }), /*#__PURE__*/_react["default"].createElement("table", null, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, columns.map(function (column) {
    return /*#__PURE__*/_react["default"].createElement("th", {
      key: column.key,
      onClick: function onClick() {
        return onSort && onSort(column.key);
      }
    }, column.label);
  }))), /*#__PURE__*/_react["default"].createElement("tbody", null, data.map(function (row, index) {
    return /*#__PURE__*/_react["default"].createElement("tr", {
      key: index
    }, columns.map(function (column) {
      return /*#__PURE__*/_react["default"].createElement("td", {
        key: column.key
      }, row[column.key]);
    }));
  }))), pagination && /*#__PURE__*/_react["default"].createElement("div", {
    className: "pagination"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    disabled: pagination.currentPage === 1
  }, "Pr\xE9c\xE9dent"), /*#__PURE__*/_react["default"].createElement("span", null, "Page ", pagination.currentPage), /*#__PURE__*/_react["default"].createElement("button", {
    disabled: pagination.currentPage === pagination.totalPages
  }, "Suivant")));
};
var _default = exports["default"] = DataTable;