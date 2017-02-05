"use strict";
let mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhot/angular-rest");

mongoose.connection.on("connected", () => {
	console.log("Successfully connected to database");
});

mongoose.connection.on("error", (error) => {
	console.error(error.message);
	process.exit();
})