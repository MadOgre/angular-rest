"use strict";

let mongoose = require("mongoose");
let articleSchema = new mongoose.Schema({
	title: String,
	body: String,
	author: String,
	created_at: Date,
	updated_at: Date
});
let Article = mongoose.model("Article", articleSchema);
module.exports = Article;