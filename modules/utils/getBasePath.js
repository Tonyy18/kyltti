module.exports = function() {
	var path = __dirname
	var separator = "\\";
	if(path.split("\\").length == 0) {
		separator = "/";
	}
	var split = path.split(separator);
	split.pop()
	split.pop()
	return split.join(separator);
}