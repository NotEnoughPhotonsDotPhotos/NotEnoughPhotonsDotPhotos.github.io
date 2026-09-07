const markdownIt = require("markdown-it");
const markdownItContainer = require("markdown-it-container");

module.exports = function(eleventyConfig) {
	let md = markdownIt({ html: true })
		.use(markdownItContainer,"details-box");

	eleventyConfig.setLibrary("md", md);

	eleventyConfig.addPassthroughCopy("../css");

	return {
		dir: {
			input: "..",
			output: "_site"
		}
	}
};
