const express = require("express");
const app = express();
const middlewares = require("./modules/middlewares");

app.get("/", (req, res) => {
	res.sendFile(__dirname + "\\static\\html\\index.html")
})

app.use("/static", middlewares.serveStaticFiles);

app.listen(3000, () => {
	console.log("Web server started");
})