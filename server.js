"use strict";
let express = require("express");
let app = express();

const PORT = process.env.NODE_PORT || 3000;

app.use(express.static("public"));

app.get("*", (req, res) => {
	res.sendFile(__dirname + "/public/index.html");
});

app.use((err, req, res, next) => {
	if (app.get("env") === "development") {
		return res.status(500).json({error: err.message});
	} else {
		return res.status(500).json({
			code: 500,
			message: "Internal Server Error"
		});
	}
	next();
});

app.listen(PORT, () => {
	console.log(`server active on port ${PORT}`);
});