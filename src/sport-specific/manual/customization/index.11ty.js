const base = require("../../base");

module.exports = class {
	data() {
		return {
			...base("js"),
			title: "Customization",
			parent: "manual",
		};
	}

	render({ gameName, subredditName, sport, websitePlay }) {
		return `<p>
	${gameName} is a highly customizable game. Most of this is done through
	God Mode, where a ton of customization settings are available. However it is possible to go even further by making custom
	<b>League Files</b>, which contain the data of a ${gameName} league - teams,
	players, stats, etc. League Files have two main purposes:
</p>
<ol>
	<li>
		They allow you to use League Files created by others, or create your own to share. You might find some of
		these
		<a
			href="http://www.reddit.com/r/${subredditName}/search?q=roster&amp;restrict_sr=on"
			>on Reddit</a
		>.
	</li>
	<li>
		They allow you to make a copy of a league you are playing. This allows you
		to have a backup of a league or to share a league across two computers.
		Within any league, go to "Tools > Export League" to create a League File.
	</li>
</ol>
<p>
	To use a League File, <a href="${websitePlay}new_league">create a new leauge</a> and select "Upload league file" under "Customize".
</p>
<p>
	It is also possible to import only a draft class or only team info (cities,
	names, etc) from a League File. For draft classes this is done at Players >
	Draft > Draft Scouting, and also
	<a href="/${sport}/manual/customization/draft-class/">read this for more information</a
	>. For team info, go to Tools > Edit Team Info (only available after enabling
	God Mode).
</p>
<h2>Editing League Files</h2>
<p>
	League Files are text files in
	<a href="https://en.wikipedia.org/wiki/JSON">JSON</a> format. You can
	add/remove/edit nearly any part of it.
</p>
<p>
	The easiest way to see what a League File looks like is to create one for one
	of your leagues. Within a league, go to Tools > Export League. That will bring
	you to a page that allows you to select which components you want to export.
	Note that you don't have to export everything, and that default values will be
	filled in for components that are not included in the League File.
</p>
<p>
	What components should you include in your League File? It depends on your
	goal. If you want an exact copy of a specific league, you should select
	everything (except possibly Box Scores, since they take up a lot of space). If
	you want to create some customized rosters for others to use, you probably
	should just define the teams and the players, and then leave out most of the
	rest so their default values are used.
</p>
<p>
	What is the best way to edit a League File? I'm not exactly sure. You can open
	a file in any text editor and edit it by hand. But if you're making one from
	scratch, you might be better off writing some code to generate it.
</p>
<p>
	League Files are divided into multiple sections, which are the root elements
	of the JSON data structure. These sections are described below. Most are
	relatively simple and self-explanatory if you just look at an exported League
	File. Some are a bit more complicated and have links to more comprehensive
	information. The most important ones are <code>players</code> and
	<code>teams</code>.
</p>
<ul>
	<li>
		<code>players</code> - Player attributes, ratings, and stats.
		<a href="/${sport}/manual/customization/players/">More information.</a>
	</li>
	<li>
		<code>teams</code> - Team attributes and stats.
		<a href="/${sport}/manual/customization/teams/">More information.</a>
	</li>
</ul>
<p>
	There are also a number of other sections, most of which you would leave
	completely out of a League File you plan on sharing with others. They mainly
	define the internal state of your current specific league.
</p>
<ul>
	<li>
		<code>version</code> - an integer specifying the version of the league file.
		Currently the latest version is 43.${
			sport === "basketball"
				? ` If you use anything less
		than 24 or don't specify a version, then
		<a href="/blog/2017/09/more-extreme-heights/"
			>player heights will be rescaled on load</a
		>. If you use anything less than 27 or don't specify a version, then
		<a href="/blog/2018/02/player-ratings-and-development-beta/"
			>player ratings will be rescaled on load</a
		>.`
				: ""
		}
	</li>
	<li>
		<code>gameAttributes</code> - Mostly internal variables that should be left
		alone, but some might be interesting to tweak.
		<a href="/${sport}/manual/customization/game-attributes/">More information.</a>
	</li>
	<li>
		<code>releasedPlayers</code> - List of players who have been released from
		their contracts but still count against the salary cap.
	</li>
	<li><code>awards</code> - Offseason awards, such as MVP.</li>
	<li>
		<code>schedule</code> - Remaining scheduled games for the current season.
	</li>
	<li>
		<code>playoffSeries</code> - Playoff matchups and results for each prior
		season.
	</li>
	<li>
		<code>draftPicks</code> - Future draft picks for the next 4 seasons. You
		need to include this if you want to include traded draft picks in your
		League File.
	</li>
	<li>
		<code>draftOrder</code> - The order of picks in the current draft, including
		the results of the draft lottery.
	</li>
	<li><code>trade</code> - State of the current trade negotiation.</li>
	<li>
		<code>negotiations</code> - State of the current contract negotiations.
		There can only be one entry here at a time, except when re-signing your own
		players in the offseason.
	</li>
	<li><code>messages</code> - Messages from the owner.</li>
	<li><code>events</code> - Past events viewable from Tools > Event Log.</li>
	<li>
		<code>games</code> - Box score data from past games. This can get quite
		large, so it often makes sense to leave it off.
	</li>
</ul>
<h2>Debugging League Files</h2>
<p>
	Debugging can be tricky. Ultimately, the only way to be sure is to try it out.
	However there is
	<a href="${websitePlay}files/league-schema.json"
		>a JSON Schema file</a
	>
	you can use to catch some errors.
	<a href="/${sport}/manual/customization/json-schema/"
		>Here is some documentation on how to use it.</a
	>
</p>`;
	}
};
