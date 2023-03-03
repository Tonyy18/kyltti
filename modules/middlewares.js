const basePath = require("./utils/getBasePath")();
function serveStaticFiles(req, res, next) {
	res.sendFile(basePath + req.originalUrl)
}

module.exports.serveStaticFiles = serveStaticFiles;