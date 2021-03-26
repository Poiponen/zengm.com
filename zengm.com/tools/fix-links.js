const glob = require("glob");
const fs = require("fs/promises");
const path = require("path");
const posthtml = require("posthtml");
const urls = require("posthtml-urls");
const util = require("util");

const globAsync = util.promisify(glob);

const fixLinks = async () => {
	let fileSite;

	const rootFolder = path.join(__dirname, "..", "dist", "zengm.com");

	const search = path.join(rootFolder, "**", "*.html");
	const filenames = await globAsync(search);

	const options = {
		eachURL: url => {
			// We only care about relative links
			if (url.startsWith("http://") || url.startsWith("https://")) {
				// console.log("Leave alone", url);
				return url;
			}

			// Leave URL alone if it's a link to the same domain as the current file. Otherwise, prefix with domain.
			let urlSite;
			let prefix;
			if (url.startsWith("/basketball/")) {
				urlSite = "https://basketball-gm.com";
				prefix = "/basketball";
			} else if (url.startsWith("/football/")) {
				urlSite = "https://football-gm.com";
				prefix = "/football";
			} else {
				urlSite = "https://zengm.com";
				prefix = "";
			}

			if (fileSite === urlSite) {
				// console.log("Remove prefix", url, url.replace(prefix, ""));
				return url.replace(prefix, "");
			}

			// console.log("Rewrite", url, "=>", `${urlSite}${url.replace(prefix, "")}`);
			return `${urlSite}${url.replace(prefix, "")}`;
		},
	};

	const processor = posthtml().use(urls(options));

	for (const filename of filenames) {
		// console.log("\n\n===\n\nProcessing", filename);
		if (filename.startsWith(`${rootFolder}/basketball/`)) {
			fileSite = "https://basketball-gm.com";
		} else if (filename.startsWith(`${rootFolder}/football/`)) {
			fileSite = "https://football-gm.com";
		} else {
			fileSite = "https://zengm.com";
		}

		const contents = await fs.readFile(filename, "utf8");

		const result = await processor.process(contents);
		await fs.writeFile(filename, result.html);
	}
};

fixLinks();
