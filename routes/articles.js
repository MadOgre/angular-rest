"use strict";

let express = require("express");
let bodyParser = require("body-parser");
let router = express.Router();
let models = require("../models");

router.use(bodyParser.json());

router.get("/articles", getAll);
router.get("/article/:id", getOne);
router.post("/article", create);
router.put("/article/:id", update);
router.delete("/article/:id", destroy);

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
	models.Article.findById(req.params.id)
	.then((data) => {
		res.json(data);
	})
	.catch((err) => {
		return next(err);
	});
}

function create(req, res, next) {
	let article = new models.Article(req.body);
	article.save()
	.then((data) => {
		res.json(data);
	})
	.catch((err) => {
		return next(err);
	});
}

function update(req, res, next) {
	models.Article.findById(req.params.id)
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
	models.Article.findById(req.params.id)
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