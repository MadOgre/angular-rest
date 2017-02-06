"use strict";

let express = require("express");
let bodyParser = require("body-parser");
let router = express.Router();
let models = require("../models");

router.use(bodyParser.json());

router.get("/articles", getAll);
router.get("/article/:slug", getOne);
router.post("/article", create);
router.put("/article/:slug", update);
router.delete("/article/:slug", destroy);

function getAll(req, res, next) {
	models.Article.find({})
	.then((data) => {
		res.json(data);
	})
	.catch((err) => {
		return next(err);
	});
}

function getOne(req, res, next) {
	models.Article.findOne({slug: req.params.slug})
	.then((data) => {
		res.json(data);
	})
	.catch((err) => {
		return next(err);
	});
}

function create(req, res, next) {
	let article = new models.Article(req.body);
	article.author = "Anonymous";
	article.created_at = new Date();
	article.save()
	.then((data) => {
		res.json(data);
	})
	.catch((err) => {
		return next(err);
	});
}

function update(req, res, next) {
	models.Article.findOne({slug: req.params.slug})
	.then((article) => {
		Object.assign(article, req.body);
		return article.save();
	})
	.then((data) => {
		res.json(data);
	})
	.catch((err) => {
		return next(err);
	});
}

function destroy(req, res, next) {
	models.Article.findOne({slug: req.params.slug})
	.then((article) => {
		return article.remove();
	})
	.then(() => {
		res.json(true);
	})
	.catch((err) => {
		return next(err);
	});
}

module.exports = router;