const MarkdownIt = require("markdown-it");
const bySport = require("./src/util/bySport");
const mdRender = new MarkdownIt();

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/.htaccess");
    eleventyConfig.addPassthroughCopy("src/files");
    eleventyConfig.addPassthroughCopy("src/static");
    eleventyConfig.addPassthroughCopy("src/css/*.css");

    eleventyConfig.addWatchTarget("src/files");
    eleventyConfig.addWatchTarget("src/static");
    eleventyConfig.addWatchTarget("src/css");
    eleventyConfig.setUseGitIgnore(false);

    eleventyConfig.addFilter("renderUsingMarkdown", function(rawString) {
         return mdRender.renderInline(rawString);
    });

    eleventyConfig.addShortcode("sportTitle", function (sport) {
        if (!sport) {
            return "ZenGM";
        }

        return bySport({
            basketball: "Basketball GM",
            football: "Football GM",
            hockey: "ZenGM Hockey",
        }, sport);
    });

    eleventyConfig.addShortcode("sportPicker", function (sport) {
        if (!sport) {
            return "";
        }

        const prefix = `/${sport}/`;
        if (!this.page.url.startsWith(`/${sport}/`)) {
            throw new Error(`URL not starting with ${prefix}: ${this.page.url}`);
        }
        const afterPrefix = this.page.url.replace(prefix, "");
        const urls = {
            basketball: `https://basketball-gm.com/${afterPrefix}`,
            football: `https://football-gm.com/${afterPrefix}`,
            hockey: `https://zengm.com/hockey/${afterPrefix}`,
        };

        // No gap between div and button matters for whitespace, at least in dev mode
        return `<div class="dropdown top-nav-item"><button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
        ${bySport({
            basketball: '<img src="https://play.basketball-gm.com/ico/logo.png" width="18" height="18"><span class="d-none d-sm-inline"> Basketball GM</span>',
            football: '<img src="https://play.football-gm.com/ico/logo.png" width="18" height="18"><span class="d-none d-sm-inline"> Football GM</span>',
            hockey: '<img src="https://hockey.zengm.com/ico/logo.png" width="18" height="18"><span class="d-none d-sm-inline"> Hockey</span>',
        }, sport)}
    </button>
    <div class="dropdown-menu">
    <a class="dropdown-item" href="${urls.basketball}"><img src="https://play.basketball-gm.com/ico/logo.png" width="18" height="18"> Basketball GM</a>
    <a class="dropdown-item" href="${urls.football}"><img src="https://play.football-gm.com/ico/logo.png" width="18" height="18"> Football GM</a>
    <a class="dropdown-item" href="${urls.hockey}"><img src="https://hockey.zengm.com/ico/logo.png" width="18" height="18"> Hockey</a>
    </div>
</div>`;
    });

    return {
        dir: {
            input: "src"
        }
    };
};
