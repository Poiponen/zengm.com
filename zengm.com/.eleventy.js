const CleanCSS = require("clean-css");
const htmlmin = require("html-minifier");
const { minify } = require("terser");
const MarkdownIt = require("markdown-it");
const mdRender = new MarkdownIt();

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/files");
    eleventyConfig.addPassthroughCopy("src/css/*.css");

    eleventyConfig.addWatchTarget("src/files");
    eleventyConfig.addWatchTarget("src/css");
    eleventyConfig.setUseGitIgnore(false);

    eleventyConfig.addFilter("cssmin", function(code) {
        return new CleanCSS({}).minify(code).styles;
    });

    eleventyConfig.addNunjucksAsyncFilter("jsmin", async function (
        code,
        callback
    ) {
        const minified = await minify(code);
        callback(null, minified.code);
    });
    eleventyConfig.addJavaScriptFunction("jsmin", async function (
        code
    ) {
        const minified = await minify(code);
        return minified.code;
    });

    eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
        // Eleventy 1.0+: use this.inputPath and this.outputPath instead
        if(outputPath.endsWith(".html")) {
            let minified = htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true
            });
            return minified;
        }

        return content;
    });

    eleventyConfig.addFilter("renderUsingMarkdown", function(rawString) {
         return mdRender.renderInline(rawString);
    });

    return {
        dir: {
            input: "src"
        }
    };
};
