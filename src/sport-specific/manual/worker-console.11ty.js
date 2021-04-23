const bySport = require("../../util/bySport");
const base = require("../base");

module.exports = class {
	data() {
		return {
			...base("md"),
			title: "Advanced League Customization in the Worker Console",
			parent: "manual",
		};
	}

	render({ gameAcronym, gameName, ratingKeys, sport, websitePlay }) {
		return `## What is the worker console?

Since ${gameName} runs inside your web browser, you can edit pretty much any part of the game from within your web browser. You do this by using the JavaScript console in your browser to access the core of the game. There, you will find an API that you can use to run little scripts that edit your league.

This page explains how to access the console and shows examples of what you can do there.

## How do I access the worker console?

You can easily access a simple version of the worker console at <span class="text-highlight">Tools > Danger Zone > Worker Console</span> within any league. However, if you're doing a lot there, you may find it preferable to use your browser's built-in console. It's a little harder to access, but has a lot more functionality. How to access it depends on your browser:

**Chrome:**

1. Open your league in ${gameAcronym}.
2. Open a new tab, copy chrome://inspect/#workers into the address bar and hit enter.
3. Click "Inspect" under the URL similar to ${websitePlay}gen/worker-2020.08.02.0001.js and it will pop up another window where you can run the code snippets below.

**Firefox:**

1. Open your league in ${gameAcronym}.
2. Open a new tab, copy about:debugging#/runtime/this-firefox into the address bar and hit enter.
3. Scroll down (maybe way down) until you see the "Shared Workers" section. There should be an entry there similar to /gen/worker-2020.08.02.0001.js.
4. Click "Inspect" next to it. That will open a new tab where you can run the code snippets below.
5. **IMPORTANT!** If your code uses the keyword \`await\` (which is almost always true), you need to wrap it in an async function. That means you need to put \`(async () => {\` at the beginning of the code and \`})();\` at the end.

## Code snippets

---

### Buff/nerf draft prospect ratings

\`\`\`
var players = await bbgm.idb.cache.players.indexGetAll("playersByTid", bbgm.PLAYER.UNDRAFTED);
for (const p of players) {
    const ratings = p.ratings[p.ratings.length - 1];

    ratings.spd *= 1.2;

    // Recompute ovr and pot
    await bbgm.player.develop(p, 0);

    // Recompute player value
    await bbgm.player.updateValues(p);

    await bbgm.idb.cache.players.put(p);
}
\`\`\`

That will increase the speed rating by 20% for all draft prospects.

You can do other stuff to player ratings. These are the names of all the rating variables:

\`\`\`
${ratingKeys.join("\n")}
\`\`\`

For example...

---

### Buff/nerf all ratings for a subset of players

Towards the bottom, change \`158, 207, 14\` to a list of player ID numbers you want nerfed/buffed. And change 0.8 to the amount you want each rating multiplied by. Edit the list of ratings in \`keys\` if you don't want it to apply to all ratings

\`\`\`
async function nerf(pid, fraction) {
    const p = await bbgm.idb.cache.players.get(pid);
    const ratings = p.ratings[p.ratings.length - 1];
    const keys = ${JSON.stringify(ratingKeys)};
    for (const key of keys) {
        ratings[key] = Math.round(fraction * ratings[key]);
    }
    await bbgm.player.develop(p, 0);
    await bbgm.player.updateValues(p);
    await bbgm.idb.cache.players.put(p);
}

var pids = [158, 207, 14];
for (const pid of pids) {
    await nerf(pid, 0.8);
}
\`\`\`

---

### "Lock ratings" for all active players

\`\`\`
var players = await bbgm.idb.cache.players.getAll();
for (const p of players) {
    p.ratings[p.ratings.length - 1].locked = true;
    await bbgm.idb.cache.players.put(p);
}
\`\`\`

---

### List all the players who have died

\`\`\`
var bbgm.iterate(
    bbgm.idb.league.transaction("players").store,
    undefined,
    undefined,
    player => {
        if (typeof player.diedYear === "number") {
            console.log(player.firstName + " " + player.lastName + " (" + player.born.year + " - " + player.diedYear + ")");
        }
    },
);
\`\`\`

---

### Change GM History teams

[On August 20, 2020](/blog/2020/08/gm-history/), a feature was added to view your overall performance as a GM across multiple different past teams. But prior to this update, it did not track which teams you controlled in the past. If you remember, you may want to manually specify your past teams.

The numbers in the \`value\` part are team ID numbers, which you can see in URLs when you click on a team.

The numbers in the \`start\` part are the season when you took control of that team. The first one must be \`-Infinity\`, representing the team you started with in this league.

The last entry must be your current team. If you just took control of the team after controlling another team for the season and playoffs this year, then use next season for \`start\`.

\`\`\`
var history = [
    { start: -Infinity, value: 5 },
    { start: 2025, value: 7 },
    { start: 2028, value: 9 },
];

bbgm.g.userTid = history;
await bbgm.idb.cache.gameAttributes.put({
    key: "userTid",
    value: history,
});
\`\`\`

---

### Delete all players at a certain position

\`\`\`
var players = await bbgm.idb.cache.players.getAll();
var pids = []
for (const p of players) {
    if (p.ratings[p.ratings.length - 1].pos === "${bySport(
			{
				basketball: "PG",
				football: "WR",
				hockey: "C",
			},
			sport,
		)}") {
        pids.push(p.pid);
    }
}
await bbgm.player.remove(pids);
\`\`\`

---

### Kill a player with a custom tragic death

Replace 155 with the player ID number of the player you want to kill.

\`\`\`
async function customTragedy(pid, reason) {
    const p = await bbgm.idb.cache.players.get(pid);
    const tid = p.tid;
    await bbgm.player.retire(p, undefined, {
        logRetiredEvent: false,
    });
    p.diedYear = bbgm.g.get("season");
    await bbgm.idb.cache.players.put(p);
    bbgm.logEvent(
        {
            type: "tragedy",
            text: \`<a href="\${bbgm.helpers.leagueUrl(["player", p.pid])}">\${p.firstName} \${
                p.lastName
            }</a> \${reason}.\`,
            showNotification: true,
            pids: [p.pid],
            tids: [tid],
            persistent: true,
            score: 20,
        },
    );
}

customTragedy(155, "died with whatever text you want");
\`\`\`

---

### Change the jersey number of a player

\`\`\`
var player_id_number = 150;
var new_jeresy_number = "45";

var p = await bbgm.idb.cache.players.get(player_id_number);
if (p.stats.length > 0) {
    p.stats[p.stats.length - 1].jerseyNumber = new_jeresy_number;
} else {
    p.jerseyNumber = new_jeresy_number;
}
await bbgm.idb.cache.players.put(p);
\`\`\``;
	}
};
