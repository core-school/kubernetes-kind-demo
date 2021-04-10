"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var lodash_1 = __importDefault(require("lodash"));
var app = express_1["default"]();
var random_name = lodash_1["default"].sample([
    "CORE",
    "CODE",
    "SCHOOL",
    "CODE",
    "ENJOY",
    "REPEAT",
]);
app.get("/", function (req, res) {
    res.json({
        random_name: random_name,
        running_on: process.env.RUNNING_ON || "local",
        secret: process.env.THE_SECRET || "no-secret"
    });
});
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () { return console.log("Ready on port " + PORT + " -> " + random_name); });
