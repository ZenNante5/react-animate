'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pick = require('lodash/pick');

var _pick2 = _interopRequireDefault(_pick);

var _isEqual = require('lodash/isEqual');

var _isEqual2 = _interopRequireDefault(_isEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getDisplayName = function getDisplayName(c) {
  return c.displayName || c.name || 'Component';
};

exports.default = function (ComposedComponent, config) {
  var _class, _temp2;

  var _ref = config || {};

  var _ref$watchedProps = _ref.watchedProps;
  var watchedProps = _ref$watchedProps === undefined ? [] : _ref$watchedProps;
  var _ref$timeout = _ref.timeout;
  var timeout = _ref$timeout === undefined ? 1000 : _ref$timeout;
  var _ref$className = _ref.className;
  var className = _ref$className === undefined ? 'animate' : _ref$className;
  var _ref$atMount = _ref.atMount;
  var atMount = _ref$atMount === undefined ? false : _ref$atMount;


  return _temp2 = _class = function (_Component) {
    _inherits(_class, _Component);

    function _class() {
      var _Object$getPrototypeO;

      var _temp, _this, _ret;

      _classCallCheck(this, _class);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(_class)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
        props: {}
      }, _this.applyClassName = function (shouldAnimate, props) {
        if (shouldAnimate) {
          var composedClassName = className;
          if (_this.props.className) composedClassName = composedClassName + ' ' + _this.props.className;

          _this.setState({
            props: props,
            className: composedClassName
          });

          _this.timer = setTimeout(function () {
            return _this.applyClassName(false, (0, _pick2.default)(_this.props, watchedProps));
          }, timeout);
        } else {
          _this.setState({
            props: props,
            className: _this.props.className
          });
        }
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(_class, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.applyClassName(atMount, (0, _pick2.default)(this.props, watchedProps));
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var pickedProps = (0, _pick2.default)(nextProps, watchedProps);
        this.applyClassName(!(0, _isEqual2.default)(pickedProps, this.state.props), pickedProps);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        clearTimeout(this.timer);
      }
    }, {
      key: 'render',
      value: function render() {
        var newProps = {};
        if (this.state.className) newProps.className = this.state.className;

        return _react2.default.createElement(ComposedComponent, _extends({}, this.props, newProps));
      }
    }]);

    return _class;
  }(_react.Component), _class.displayName = 'Animate(' + getDisplayName(ComposedComponent) + ')', _class.propTypes = {
    className: _react.PropTypes.string
  }, _temp2;
};