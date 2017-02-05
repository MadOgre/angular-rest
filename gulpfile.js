"use strict";
let gulp = require("gulp");
let autoprefixer = require("gulp-autoprefixer");
let sass = require("gulp-sass");
let plumber = require("gulp-plumber");
let sourcemaps = require("gulp-sourcemaps");
let bs = require("browser-sync").create();
let nodemon = require("gulp-nodemon");

const BS_RELOAD_TIMEOUT = 400;

gulp.task("browsersync", () => {
	return bs.init({
		   	proxy: "localhost:3000",
			port: 4000
		   });
});

gulp.task("nodemon", () => {
	return nodemon({
			ignore: ["public/*"],
			ext: "js"
	}).on("restart", () => {
			setTimeout(() => {
				bs.reload();
			}, BS_RELOAD_TIMEOUT);
	});
});

gulp.task("css", () => {
	gulp.src("./public/scss/main.scss")
	.pipe(plumber(function(error) {
		bs.notify(`<pre style="text-align: left;">${error.message}</pre>`, 4000);
		this.emit("end");
	}))
	.pipe(sourcemaps.init())
	.pipe(sass())
	.pipe(autoprefixer())
	.pipe(sourcemaps.write("."))
	.pipe(gulp.dest("./public/css/"))
	.pipe(bs.stream());
});

gulp.task("default", ["nodemon", "browsersync"], () => {
	gulp.watch("./**/*.html", bs.reload);
	gulp.watch("./public/**/*.js", bs.reload);
	gulp.watch("./**/*.scss", ["css"]);
});