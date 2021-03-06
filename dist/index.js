"use strict";

var _express = _interopRequireDefault(require("express"));

var _http = _interopRequireDefault(require("http"));

var _socket = _interopRequireDefault(require("socket.io"));

var _userRoutes = _interopRequireDefault(require("./routes/userRoutes.js"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let app = (0, _express.default)();

let server = _http.default.createServer(app);

let io = _socket.default.listen(server);

app.use(_bodyParser.default.json());
app.use('/users', _userRoutes.default);
app.listen(3000, () => {
  console.log("its works");
});