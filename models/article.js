"use strict";

let mongoose = require("mongoose");
let URLSlugs = require("mongoose-url-slugs");
let articleSchema = new mongoose.Schema({
	title: String,
	body: String,
	author: String,
	created_at: Date,
	updated_at: Date
});
articleSchema.plugin(URLSlugs('title'));
let Article = mongoose.model("Article", articleSchema);
module.exports = Article;