module.exports = [
    {
        date: "2021-03-03",
        text: "In BBGM, added support for changing the rate of steals, blocks, turnovers, and offensive rebounds. In historical leagues, they automatically change over time. This was done in part because I recently (2021-02-20) changed the default steal rate to be 10% lower than it was before, which some people did not like. [[1]](https://old.reddit.com/r/BasketballGM/comments/lwm2eg/version_202103030313_added_support_for_changing/)",
    }, {
        date: "2021-03-02",
        text: "ZenGM Hockey is here! [[1]](https://hockey.zengm.com/) [[2]](https://old.reddit.com/r/ZenGMHockey/comments/lw79il/oh_shit_new_zengm_hockey_out_now_the_past_6_years/)",
        big: true,
    }, {
        date: "2021-02-21",
        text: "Following up on yesterday's jersey styles option, @ClevelandFan went through all the default teams in BBGM and gave them jersey styles that look good. This will only affect new leagues and expansion teams.",
    }, {
        date: "2021-02-20",
        text: "At Tools > Manage Teams, it is now possible to change the team jersey styles used for cartoon players. [[1]](https://old.reddit.com/r/BasketballGM/comments/loggnj/shot_locations_tables_are_now_shot_locations_and/)",
    }, {
        date: "2021-02-20",
        text: "In BBGM, \"Shot Locations\" tables are now \"Shot Locations and Feats\" and they also show double doubles, triple doubles, quadruple doubles, and five by fives. [[1]](https://old.reddit.com/r/BasketballGM/comments/loggnj/shot_locations_tables_are_now_shot_locations_and/)",
    }, {
        date: "2021-02-20",
        text: "In BBGM, decreased the steal rate to be a bit more realistic.",
    }, {
        date: "2021-02-20",
        text: "On the roster page in past seasons, players still on the current team are highlighted.",
    }, {
        date: "2021-02-20",
        text: "The \"worried he'll be traded away\" mood component is based on how many players you've traded away recently. Now that factors in how good the player is too. Basically, below average players will not count much there, but above average players still will. This is based on their current ovr, not their pot, so a contending team can trade away prospects without much penalty.",
    }, {
        date: "2021-02-16",
        text: "New option to switch between ordering teams by winning percentage (default) or a points formula like the NHL uses. [[1]](https://old.reddit.com/r/BasketballGM/comments/lkwj7o/new_option_to_switch_between_ordering_teams_by/)",
    }, {
        date: "2021-02-15",
        text: "Non-random tiebreakers, based on things like head-to-head results, strength of schedule, etc. Also it's customizable in God Mode. [[1]](https://basketball-gm.com/blog/2021/02/customizable-tiebreakers/) [[2]](https://old.reddit.com/r/BasketballGM/comments/lkigp1/version_202102151049_nonrandom_tiebreakers_based/) [[3]](https://old.reddit.com/r/Football_GM/comments/lkij5s/version_202102151052_nonrandom_tiebreakers_based/)",
        big: true,
    }, {
        date: "2021-02-12",
        text: "New challenge mode \"Thanos Mode\": at the end of the playoffs, there's a 20% chance of half the league either dying (if random player) or retiring (if real player). After each event, it can't happen again until three years later. Thanks @domini7! [[1]](https://github.com/dumbmatter/gm-games/pull/360) [[2]](https://old.reddit.com/r/BasketballGM/comments/lifm6h/new_challenge_mode_thanos_mode_at_the_end_of_the/)",
    }, {
        date: "2021-02-11",
        text: "In custom league files, there is a new simpler format for writing \"gameAttributes\". Don't worry, the old format will continue to work, you don't need to change anything! But now you can write it as an object rather than an array, which is generally a lot simpler. See [the manual](https://basketball-gm.com/manual/customization/game-attributes/) for more info.",
    }, {
        date: "2021-02-09",
        text: "Head-to-head team results are now viewable at League > History > Head-to-Head and Team > History > Head-to-Head. [[1]](https://basketball-gm.com/blog/2021/02/head-to-head/) [[2]](https://old.reddit.com/r/BasketballGM/comments/lgj82n/headtohead_team_results_new_in_version/) [[3]](https://old.reddit.com/r/BasketballGM/comments/lis1x8/how_to_add_headtohead_results_for_leagues_from/)",
        big: true,
    }, {
        date: "2021-02-09",
        text: "Added a new option in League Settings to track overtime losses (OTL) separately from regulation losses, as is common in hockey. Currently it's just cosmetic, they count the same as losses.",
    }, {
        date: "2021-02-09",
        text: "Added new skill label \"V\" for \"Volume Scorer\" to BBGM. Thanks @nicidob! [[1]](https://github.com/dumbmatter/gm-games/pull/357)",
    }, {
        date: "2021-02-09",
        text: "Updated the \"desired contract length\" formula based to feel more realistic. Thanks @nicidob! [[1]](https://github.com/dumbmatter/gm-games/pull/356)",
    }, {
        date: "2021-02-07",
        text: "In BBGM, added a new league setting available in God Mode to control the number of fouls in a period before the bonus. Thanks @domini7! This setting automatically changes in historical leagues in 1955 and 1967. [[1]](https://github.com/dumbmatter/gm-games/pull/351) [[2]](https://old.reddit.com/r/BasketballGM/comments/legy0a/udominila_added_a_new_league_setting_available_in/)",
    }, {
        date: "2021-02-04",
        text: "In the Retired Jersey Numbers of the Team History page, it now shows how many championships each player won with this team. [[1]](https://old.reddit.com/r/BasketballGM/comments/lc88pn/number_of_championships_are_shown_for_players/)",
    }, {
        date: "2021-02-03",
        text: "Several new facial features in the cartoon face generator from @TravisJB89. [[1]](https://github.com/dumbmatter/facesjs/pull/14)",
    }, {
        date: "2021-01-19",
        text: "In the play-by-play during live sims, players can get dunked on.",
    }, {
        date: "2021-01-18",
        text: "The \"Keep auto sorted\" roster option is now per-team rather than global, which may be useful in multi-team mode. This option will also be enabled by default in new leagues.",
    }, {
        date: "2021-01-16",
        text: "A few little improvements to FBGM game simulation. Teams will not punt when they're on the verge of losing, and teams will pass more when they're down late. Also fixed a bug where a turnover during a two point conversion resulted in the wrong team kicking off. [[1]](https://old.reddit.com/r/Football_GM/comments/kyvwwa/a_few_little_improvements_to_fbgm_game_simulation/)",
    }, {
        date: "2021-01-14",
        text: "Added a new league setting \"Number of Periods Per Game\" to let you change from the default of 4 quarters to whatever you want. In FBGM, if the number of periods is odd, there is no halftime. In BBGM, I also fixed the logic for which team gets possession at the start of a period (it was actually implemented like football previously which doesn't make any sense, I have no idea what I was thinking when I did that). [[1]](https://old.reddit.com/r/BasketballGM/comments/kxeuym/added_a_new_league_setting_number_of_periods_per/) [[2]](https://old.reddit.com/r/Football_GM/comments/kxev9g/added_a_new_league_setting_number_of_periods_per/)",
    }, {
        date: "2021-01-11",
        text: "If you live sim the last game of the playoffs, confetti drops after the game ends. [[1]](https://old.reddit.com/r/BasketballGM/comments/kviwek/if_you_live_sim_the_last_game_of_the_playoffs/)",
    }, {
        date: "2021-01-09",
        text: "When creating a new Real Players league, there is now a \"Real draft prospect ratings\" option which allows you to change how draft prospect ratings are defined. The default remains unchanged (ratings are based on rookie season stats), but there is now another option to base ratings purely on draft position. That will result in simulated drafts being much more similar to real drafts. [[1]](https://basketball-gm.com/blog/2021/01/real-draft-prosect-ratings/) [[2]](https://old.reddit.com/r/BasketballGM/comments/ktu8r9/when_creating_a_new_real_players_league_there_is/)",
    }, {
        date: "2021-01-04",
        text: "Added \"Clear\" button to the Draft Scouting page in God Mode to allow you to easily delete all players in a draft class.",
    }, {
        date: "2021-01-04",
        text: "Projected cap space is shown on the Upcoming Free Agents page. [[1]](https://old.reddit.com/r/BasketballGM/comments/k49xi4/monthly_suggestions_thread/ggyrl00/)",
    }, {
        date: "2021-01-04",
        text: "In expansion drafts, now there is a limit to the number of players that can be selected from each existing team. This number is customizable in expansion draft setup, and defaults to the minimum number required to allow the expansion draft to complete (like if there are 20 existing teams and 4 expansion teams, you need at least 2 players per team for a 10 round expansion draft). [[1]](https://old.reddit.com/r/BasketballGM/comments/kqernl/in_expansion_drafts_now_version_202101041112/)",
    }, {
        date: "2021-01-03",
        text: "The number of times a player has won an award is shown in the League History table. [[1]](https://old.reddit.com/r/BasketballGM/comments/kpfnul/a_couple_minor_ui_improvements_on_the_league/)",
    }, {
        date: "2021-01-03",
        text: "Team logos are shown in the League History table for the league champion and runner up. [[1]](https://old.reddit.com/r/BasketballGM/comments/kpfnul/a_couple_minor_ui_improvements_on_the_league/)",
    }, {
        date: "2020-12-26",
        text: "Added a button to delete all players on a team to the roster page.",
    }, {
        date: "2020-12-26",
        text: "Added buttons to randomize college and country to the player editor.",
    }, {
        date: "2020-12-25",
        text: "A ton of new facial features were added by @TravisJB89 and @domini7. Like 100+ new facial features. [[1]](https://github.com/dumbmatter/facesjs/pull/12) [[2]](https://github.com/dumbmatter/facesjs/pull/11) [[3]](https://old.reddit.com/r/BasketballGM/comments/kk0vfz/bbgm_christmas_update_version_202012250934/)",
    }, {
        date: "2020-12-25",
        text: "The concept of \"race\" was added to the face generator by @icedjuro. Each country in the game is now annotated with a distribution of races so generated faces feel more realistic. Like it's still possible to get a black player from China, but it is much less common. [[1]](https://github.com/dumbmatter/facesjs/pull/10) [[2]](https://old.reddit.com/r/BasketballGM/comments/kk0vfz/bbgm_christmas_update_version_202012250934/)",
    }, {
        date: "2020-12-22",
        text: "You can now add/edit/delete teams in a new Random Players league before creating it, by clicking the \"Customize\" button under \"Pick your team\". [[1]](https://old.reddit.com/r/BasketballGM/comments/kiclrx/you_can_now_addeditdelete_teams_in_a_new_random/)",
        big: true,
    }, {
        date: "2020-12-16",
        text: "Added button to change the schedule of the All-Star Game to Tools > Danger Zone. [[1]](https://old.reddit.com/r/BasketballGM/comments/kepbrj/a_few_little_customization_options_for_the/)",
    }, {
        date: "2020-12-16",
        text: "Added button to toggle the current state of the trade deadline to Tools > Danger Zone. [[1]](https://old.reddit.com/r/BasketballGM/comments/kepbrj/a_few_little_customization_options_for_the/)",
    }, {
        date: "2020-12-16",
        text: "The time at which the All-Star Game occurs can now be edited at Tools > League Settings. By default it is 70% of the way through the season. [[1]](https://old.reddit.com/r/BasketballGM/comments/kepbrj/a_few_little_customization_options_for_the/)",
    }, {
        date: "2020-12-12",
        text: "New \"Edit Awards\" page available in God Mode, which allows you to edit all the end-of-season award winners. Thanks @luso97! [[1]](https://github.com/dumbmatter/gm-games/pull/331) [[2]](https://old.reddit.com/r/BasketballGM/comments/kbl3m7/new_edit_awards_page_available_in_god_mode_which/)",
        big: true,
    }, {
        date: "2020-12-09",
        text: "Added \"Randomize Name\" button to the Create/Edit Player page, which picks a random name from the currently selected country. [[1]](https://old.reddit.com/r/BasketballGM/comments/k9mugr/just_a_tiny_fun_new_feature_i_added_a_randomize/)",
    }, {
        date: "2020-12-06",
        text: "Added next/prev buttons to the season and team top menus, and to the team menu on the trade page. [[1]](https://old.reddit.com/r/BasketballGM/comments/k7pi11/not_totally_sure_if_this_is_a_good_idea_but_i/)",
    }, {
        date: "2020-12-03",
        text: "Added ability to view playoff stats on the roster page. [[1]](https://old.reddit.com/r/BasketballGM/comments/k6ctkt/some_improvements_from_last_months_suggestions/)",
    }, {
        date: "2020-12-03",
        text: "New \"Keep auto sorted\" option on the roster page, to let the AI manage sorting your roster (no more clicking \"auto sort\" periodically). [[1]](https://old.reddit.com/r/BasketballGM/comments/k6ctkt/some_improvements_from_last_months_suggestions/)",
    }, {
        date: "2020-12-03",
        text: "You can start historical real players leagues at the draft lottery phase. [[1]](https://old.reddit.com/r/BasketballGM/comments/k6ctkt/some_improvements_from_last_months_suggestions/)",
    }, {
        date: "2020-12-02",
        text: "Icons for All-Stars, MVPs, and championships are displayed on the Draft History and Draft Team History pages. Peak ovr and pot values are also shown there. [[1]](https://old.reddit.com/r/BasketballGM/comments/k5od0c/icons_for_allstars_mvps_and_championships_are_now/)",
    }, {
        date: "2020-11-28",
        text: "An early version of the 2021 rosters is available when creating a new real players league. Also, you can start a 2020 league after the draft if you want to re-play free agency. [[1]](https://old.reddit.com/r/BasketballGM/comments/k30nhc/an_early_version_of_the_2021_rosters_is_available/)",
        big: true,
    }, {
        date: "2020-11-27",
        text: "Added a \"player note\" that you can write on player profile pages, if you want to remind yourself of anything about a player in the future. They are also viewable on the Watch List page. [[1]](https://old.reddit.com/r/BasketballGM/comments/k293hf/added_a_player_note_that_you_can_write_on_player/) [[2]](https://old.reddit.com/r/BasketballGM/comments/k2t8rh/minor_addition_to_yesterdays_player_notes_update/)",
    }, {
        date: "2020-11-19",
        text: "New setting \"AI Teams Retire Jersey Numbers\" to control whether AI teams should automatically retire/unretire jersey numbers.",
    }, {
        date: "2020-11-19",
        text: "Two new trade frivolities: Biggest Trades (trades involving the best players and prospects) and Most Lopsided Trades (trades where one team's assets produced a lot more value than the other). [[1]](https://basketball-gm.com/blog/2020/11/trade-frivolities/) [[2]](https://old.reddit.com/r/BasketballGM/comments/jxfy8b/two_new_trade_frivolities_biggest_trades_trades/)",
    }, {
        date: "2020-11-17",
        text: "Added some charts to the Trade Summary page. [[1]](https://www.reddit.com/r/BasketballGM/comments/jvn292/since_its_now_trading_season_i_added_some_charts/)",
    }, {
        date: "2020-11-15",
        text: "Transaction logs for trades are now dynamically updated to include the players selected by traded draft picks, and they link to a new Trade Summary page showing more details about completed trades. [[1]](https://basketball-gm.com/blog/2020/11/trade-details/) [[2]](https://old.reddit.com/r/BasketballGM/comments/juzose/transaction_logs_for_trades_are_now_dynamically/)",
        big: true,
    }, {
        date: "2020-11-12",
        text: "Fixed bug in FBGM where \"half the distance to the goal\" penalties were being assessed wrong, leading to the line of scrimmage being in the endzone. [[1]](https://old.reddit.com/r/Football_GM/comments/jtar0p/will_they_score_a_touchdown_you_have_to_wait_and/)",
    }, {
        date: "2020-11-12",
        text: "In FBGM live sims, no more spoilers where scoring plays appeared in the scoring summary before being shown in the play-by-play. [[1]](https://old.reddit.com/r/Football_GM/comments/jtar0p/will_they_score_a_touchdown_you_have_to_wait_and/)",
    }, {
        date: "2020-11-10",
        text: "Added a button to easily retire a player's jersey number, next to each player on the Team History page. [[1]](https://old.reddit.com/r/BasketballGM/comments/jryt79/added_a_button_to_easily_retire_a_players_jersey/)",
    }, {
        date: "2020-11-08",
        text: "Redesigned league settings page, including more settings available outside of God Mode. [[1]](https://basketball-gm.com/blog/2020/11/settings-redesign/) [[2]](https://old.reddit.com/r/BasketballGM/comments/jqeogt/redesigned_league_settings_page_including_more/)",
    }, {
        date: "2020-11-02",
        text: "Added a summary of a player's awards at the top of the player profile page. [[1]](https://old.reddit.com/r/BasketballGM/comments/jn1zc6/added_a_summary_of_a_players_awards_at_the_top_of/)",
    }, {
        date: "2020-11-01",
        text: "In God Mode, you can now clone a player by clicking the \"Clone\" button on their player profile page. [[1]](https://old.reddit.com/r/BasketballGM/comments/jm5jj7/in_god_mode_you_can_now_clone_a_player_by/)",
    }, {
        date: "2020-11-01",
        text: "Added icons in tables on player profile pages showing which seasons a player was an All-Star (or All-League in FBGM) or MVP. For playoff stats, it shows if the player won a championship. [[1]](https://old.reddit.com/r/BasketballGM/comments/jlwaro/new_in_version_202011010239_icons_in_tables_on/)",
    }, {
        date: "2020-10-29",
        text: "Two new challenge modes: \"You're fired if you pay the luxury tax\" and \"You're fired if you miss the playoffs\". For an even bigger challenge, try them both at the same time! [[1]](https://old.reddit.com/r/BasketballGM/comments/jknpft/two_new_challenge_modes_in_version_202010300096/)",
    }, {
        date: "2020-10-26",
        text: "AI teams are a bit more skeptical when trading draft picks with the user. [[1]](https://old.reddit.com/r/BasketballGM/comments/jit3yx/a_few_small_updates_in_version_202010270158/)",
    }, {
        date: "2020-10-26",
        text: "Contracts are rounded to the nearest $10k rather than the nearest $50k. [[1]](https://old.reddit.com/r/BasketballGM/comments/jit3yx/a_few_small_updates_in_version_202010270158/)",
    }, {
        date: "2020-10-26",
        text: "Previously, AI teams who were under the salary cap and had no roster spots open would never sign free agents, as if they'd rather miss out on a good free agent than cut a guy at the end of the bench. Now they are willing do that, which can help the AI a lot with roster building. [[1]](https://old.reddit.com/r/BasketballGM/comments/jit3yx/a_few_small_updates_in_version_202010270158/)",
    }, {
        date: "2020-10-26",
        text: "Fixed bug in FBGM where it was almost impossible to have any attendance less than a sell out. [[1]](https://old.reddit.com/r/BasketballGM/comments/jit3yx/a_few_small_updates_in_version_202010270158/)",
    }, {
        date: "2020-10-25",
        text: "AI teams are affected by player mood when re-signing players, and you can see a player's mood toward his current team. [[1]](https://basketball-gm.com/blog/2020/10/player-mood-ai-re-signings/) [[2]](https://old.reddit.com/r/BasketballGM/comments/jhn2vu/new_in_version_202010250240_ai_teams_are_affected/)",
        big: true,
    }, {
        date: "2020-10-18",
        text: "New feature in God Mode to select the winner of a game before it's played. [[1]](https://basketball-gm.com/blog/2020/10/force-win/) [[2]](https://old.reddit.com/r/BasketballGM/comments/jd9vyg/new_feature_in_god_mode_to_select_the_winner_of_a/)",
    }, {
        date: "2020-10-17",
        text: "Start current or historical real players leagues at different times during the season: preseason, playoffs, draft, or after draft. [[1]](https://basketball-gm.com/blog/2020/10/start-any-time/) [[2]](https://old.reddit.com/r/BasketballGM/comments/jcwq87/new_feature_start_real_players_leagues_at/)",
        big: true,
    }, {
        date: "2020-10-17",
        text: "Updates to the 2020 BBGM rosters, including roster moves, ratings tweaks, and new draft prospects.",
    }, {
        date: "2020-10-17",
        text: "Added \"Won Championship\" entries to player awards for past seasons in real players leagues.",
    }, {
        date: "2020-10-17",
        text: "Some improvements to the trade AI, particularly related to how it values draft picks. [[1]](https://old.reddit.com/r/BasketballGM/comments/ja6095/want_to_test_some_improvements_to_the_trade_ai/) [[2]](https://old.reddit.com/r/Football_GM/comments/ja60au/want_to_test_some_improvements_to_the_trade_ai/)",
    }, {
        date: "2020-10-05",
        text: "Added a trade deadline, which is customizable in the God Mode options. [[1]](https://basketball-gm.com/blog/2020/10/trade-deadline/) [[2]](https://old.reddit.com/r/BasketballGM/comments/j5tgfk/added_a_trade_deadline_which_is_customizable_in/)",
    }, {
        date: "2020-10-03",
        text: "New option in God Mode to change the number of draft rounds. This does not change the talent pool - if you add more draft rounds, the additional draft prospects will not be very good. If you remove draft rounds, there will be more good undrafted free agents. [[1]](https://old.reddit.com/r/BasketballGM/comments/j4peh5/new_option_in_god_mode_to_change_the_number_of/)",
    }, {
        date: "2020-10-01",
        text: "In honor of our glorious upcoming election, I am introducing the most American option ever added to Basketball GM: a new draft type \"No lottery, best to worst\" in which the best teams get the best picks in the draft. [[1]](https://old.reddit.com/r/BasketballGM/comments/j3k1g9/in_honor_of_our_glorious_upcoming_election_i_am/)",
    }, {
        date: "2020-09-22",
        text: "A few new contract options in God Mode. Set the minimum and maximum length of allowable contracts, and set whether players should be allowed to refuse to negotiate after their rookie contract expires. [[1]](https://old.reddit.com/r/BasketballGM/comments/iy2qo5/a_few_new_contract_options_in_god_mode_set_the/)",
    }, {
        date: "2020-09-21",
        text: "Added keyboard shortcuts to the live game sim controls.",
    }, {
        date: "2020-09-20",
        text: "Below team logos in playoff box scores, playoff series results are shown rather than regular season records. And yeah, when you're watching a live game, the win total updates when the game finishes :) [[1]](https://old.reddit.com/r/BasketballGM/comments/iw8dv0/below_team_logos_in_playoff_box_scores_playoff/)",
    }, {
        date: "2020-09-19",
        text: "In BBGM, new God Mode option to set the number of players on the court. By default it's 5-on-5, but now it can be anything. Extreme values may do weird things. [[1]](https://old.reddit.com/r/BasketballGM/comments/ivlhui/new_god_mode_option_to_set_the_number_of_players/)",
    }, {
        date: "2020-09-17",
        text: "New player mood system! Most notable improvements are that it's viewable at any time (not just during free agency) and it's much more transparent about what players think about your team. If your star is not happy and doesn't want to re-sign, you'll know ahead of time. [[1]](https://basketball-gm.com/blog/2020/09/player-mood/) [[2]](https://old.reddit.com/r/BasketballGM/comments/iuluuj/the_new_player_mood_system_is_now_live_in_version/)",
        big: true,
    }, {
        date: "2020-09-07",
        text: "New challenge mode \"Lose best player every season\", where at the end of the playoffs every season, the best player on your team will either retire (if he's a real player) or die a tragic death (if he's a random player). Thanks @luso97! [[1]](https://github.com/dumbmatter/gm-games/pull/311/files) [[2]](https://old.reddit.com/r/BasketballGM/comments/iod22d/new_challenge_mode_lose_best_player_every_season/)",
    }, {
        date: "2020-09-07",
        text: "Added eFG% to stat tables in BBGM. Thanks @domini7! [[1]](https://github.com/dumbmatter/gm-games/pull/310)",
    }, {
        date: "2020-09-03",
        text: "Fixed team/player stat distributions pages for FBGM, and added additional stats in BBGM. Thanks @luso97! [[1]](https://github.com/dumbmatter/gm-games/pull/306)",
    }, {
        date: "2020-09-01",
        text: "Added a stats summary to the top of each player page, similar to Basketball Reference. Thanks @luso97! [[1]](https://github.com/dumbmatter/gm-games/pull/307) [[2]](https://old.reddit.com/r/BasketballGM/comments/ikx5nk/version_202009020058_stats_summary_at_the_top_of/)",
    }, {
        date: "2020-09-01",
        text: "Clutch plays in the playoffs now contain some info about the series in the text. Thanks @kevbauer! [[1]](https://github.com/dumbmatter/gm-games/pull/308)",
    }, {
        date: "2020-08-31",
        text: "Added BPM, DBPM, OBPM, and VORP to the advanced stats in BBGM. Thanks @nicidob! [[1]](https://github.com/dumbmatter/gm-games/pull/297) [[2]](https://old.reddit.com/r/BasketballGM/comments/ijszx5/added_bpm_dbpm_obpm_and_vorp_to_the_advanced/)",
    }, {
        date: "2020-08-30",
        text: "Frivolity to show which jersey numbers had the most/best players, and the top players who wore each jersey number. Also added similar lists of top players from each country and college, which you can access from those frivolities. They are all also linked from player profiles and the Player Bios table. [[1]](https://old.reddit.com/r/BasketballGM/comments/ij7fq5/frivolity_to_show_which_jersey_numbers_had_the/)",
    }, {
        date: "2020-08-29",
        text: "Single game highs for players are now tracked for all stats in BBGM - points, rebounds, assists, etc. View them on player profile pages or in the main Player Stats table by switching the stat type to \"Game Highs\". [[1]](https://basketball-gm.com/blog/2020/08/game-highs/) [[2]](https://old.reddit.com/r/BasketballGM/comments/iiluf2/single_game_highs_for_players_are_now_tracked_for/)",
        big: true,
    }, {
        date: "2020-08-26",
        text: "Added the Elam Ending as an option for game simulation in BBGM. [[1]](https://basketball-gm.com/blog/2020/08/elam-ending/) [[2]](https://old.reddit.com/r/BasketballGM/comments/ih19y1/new_in_version_202008260936_the_elam_ending_comes/)",
        big: true,
    }, {
        date: "2020-08-26",
        text: "Tweaks to game simulation in the playoffs, most notably resulting in fewer upsets. Also injuries in the playoffs are shorter, to work around the fact that currently there is no way to have players play through minor injuries. [[1]](https://github.com/dumbmatter/gm-games/pull/293)",
    }, {
        date: "2020-08-24",
        text: "The Draft Team History page can now use the \"GM history\" data to show all the draft picks you made, across all teams you managed. Find it at Team > GM History > Your Draft History. [[1]](https://old.reddit.com/r/BasketballGM/comments/ifipp8/the_draft_team_history_page_can_now_use_the_gm/)",
    }, {
        date: "2020-08-22",
        text: "The Team Records page can now use the \"GM history\" data to show a table of only your teams. Find it at Team > GM History > Your Team Records. [[1]](https://old.reddit.com/r/BasketballGM/comments/iepzdt/the_team_records_page_can_now_use_the_gm_history/)",
    }, {
        date: "2020-08-22",
        text: "New God Mode option: Spectator Mode, where the AI controls all teams and you just watch. It's like auto play, but you can proceed at your own pace. [[1]](https://basketball-gm.com/blog/2020/08/spectator-mode/) [[2]](https://old.reddit.com/r/BasketballGM/comments/ieln8n/new_god_mode_option_spectator_mode_where_the_ai/)",
    }, {
        date: "2020-08-20",
        text: "Added a new \"GM History\" page in the Team menu, where you can see your performance across all the different franchises you managed in the past. [[1]](https://basketball-gm.com/blog/2020/08/gm-history/) [[2]](https://old.reddit.com/r/BasketballGM/comments/idfn77/added_a_new_gm_history_page_in_the_team_menu/)",
        big: true,
    }, {
        date: "2020-08-18",
        text: "If you are successful (high score in the owner's annual performance review) then sometimes other teams will try to hire you. This happens between the playoffs and draft. Previously, the only way to change teams was to get fired or use God Mode. [[1]](https://old.reddit.com/r/BasketballGM/comments/iccozz/if_you_are_successful_high_score_in_the_owners/)",
    }, {
        date: "2020-08-18",
        text: "Purely cosmetic player attributes that don't affect gameplay or achievements (name, height (inches), weight (lbs), jersey number, college) are editable outside of God Mode by going to a player's page and clicking Edit Player. [[1]](https://old.reddit.com/r/BasketballGM/comments/iccp0h/purely_cosmetic_player_attributes_that_dont/)",
    }, {
        date: "2020-08-17",
        text: "Added TS%, 3PAr, and FTr to the player info popup. [[1]](https://old.reddit.com/r/BasketballGM/comments/ibqgvt/there_have_been_some_requests_for_fg3pft_on_the/)",
    }, {
        date: "2020-08-17",
        text: "If you do enough to win an achievement but miss out on it because you used God Mode or easy difficulty, it gives you a notification saying this rather than nothing. [[1]](https://old.reddit.com/r/BasketballGM/comments/ib84ki/a_minor_improvement_from_me_and_more_important/)",
    }, {
        date: "2020-08-17",
        text: "Added \"Finals Appearances\" and total winning percentage to the Team History page. [[1]](https://old.reddit.com/r/BasketballGM/comments/ib84ki/a_minor_improvement_from_me_and_more_important/)",
    }, {
        date: "2020-08-14",
        text: "New draft type option in God Mode to eliminate the draft and instead have rookies become free agents. [[1]](https://old.reddit.com/r/BasketballGM/comments/i9zhto/version_202008150142_new_draft_type_option_in_god/)",
    }, {
        date: "2020-08-13",
        text: "You can watch multiple live games in a single day! Now when you watch a live game, only that one game is simulated. When it's over, the other games from that day will still be waiting to be played. [[1]](https://old.reddit.com/r/BasketballGM/comments/i9a6gm/new_in_version_202008131365_you_can_watch/)",
    }, {
        date: "2020-08-12",
        text: "New frivolities: Best Teams, Worst Teams, Best Non-Playoff Teams, Worst Playoff Teams, Worst Finals Teams, and Worst Championship Teams. [[1]](https://old.reddit.com/r/BasketballGM/comments/i884cb/4_new_frivolities_in_version_202008120334_best/) [[2]](https://old.reddit.com/r/BasketballGM/comments/i8r0zo/a_couple_more_building_on_yesterdays_frivolities/)",
    }, {
        date: "2020-08-11",
        text: "New frivolity: Draft Class Rankings. [[1]](https://old.reddit.com/r/BasketballGM/comments/i7kyx2/tools_frivolities_draft_class_rankings_new_in/)",
    }, {
        date: "2020-08-10",
        text: "The contract generation algorithm has been rewritten. It should be both more realistic and harder to take advantage of. Most noticeably, you should no longer see players ask for too much money and go unsigned. [[1]](https://basketball-gm.com/blog/2020/08/smarter-contract-generation/) [[2]](https://old.reddit.com/r/BasketballGM/comments/i5qoj3/new_beta_feature_smarter_contracts_no_more_good/) [[3]](https://old.reddit.com/r/BasketballGM/comments/i77k9w/smarter_contract_generation_is_live_in_version/)",
    }, {
        date: "2020-08-10",
        text: "In BBGM, box scores show players who didn't play as DNP (either \"Injury\" or \"Coach's decision\") rather than showing a row of all 0s.",
    }, {
        date: "2020-08-08",
        text: "Copying the trend in most other basketball sites, the default standings in BBGM are now conference standings, not division standings. FBGM is not changed.",
    }, {
        date: "2020-08-08",
        text: "Team records are shown below logos in box scores. And yeah, when you're watching a live game, the records update when the game finishes :) [[1]](https://old.reddit.com/r/BasketballGM/comments/i6792d/in_the_live_game_playbyplay_fouls_show_how_many/)",
    }, {
        date: "2020-08-08",
        text: "In BBGM, in the live game play-by-play, fouls show how many free throws will be upcoming. Like \"Shooting foul on Dane Wishnowsky, two FTs for Stephen Lees\". Additionally, shot attempts appear on their own line before saying if they are made or missed. [[1]](https://old.reddit.com/r/BasketballGM/comments/i6792d/in_the_live_game_playbyplay_fouls_show_how_many/)",
    }, {
        date: "2020-08-02",
        text: "Added a \"Delete Player\" button to player profile pages.",
    }, {
        date: "2020-08-01",
        text: "Players now have jersey numbers, and teams can retire jersey numbers of former players. [[1]](https://basketball-gm.com/blog/2020/08/jersey-numbers/) [[2]](https://old.reddit.com/r/BasketballGM/comments/i1trop/new_feature_official_release_players_now_have/) [[3]](https://old.reddit.com/r/Football_GM/comments/i1trys/players_now_have_jersey_numbers_and_teams_can/)",
        big: true,
    }, {
        date: "2020-07-28",
        text: "Injuries that occur during live games show up in the box score.",
    }, {
        date: "2020-07-28",
        text: "When a player retires while (1) still an active player (not a free agent) and (2) still being paid by a team who had previously released him, the remaining amount of his previous contract will no longer be paid.",
    }, {
        date: "2020-07-27",
        text: "On the trade page, the trade summary and controls are \"sticky\" as you scroll so they're always on the screen. This is especially important for FBGM where rosters are huge and much scrolling is required. [[1]](https://old.reddit.com/r/BasketballGM/comments/hz68ru/this_is_more_important_for_fbgm_than_bbgm_but_on/) [[2]](https://old.reddit.com/r/Football_GM/comments/hz69o2/on_the_trade_page_the_trade_summary_and_controls/)",
    }, {
        date: "2020-07-27",
        text: "Better support for customization of player names, countries, and colleges. And improvements to the built-in names database. [[1]](https://basketball-gm.com/blog/2020/07/better-customization-player-names-countries-colleges/) [[2]](https://old.reddit.com/r/BasketballGM/comments/hyz51u/new_in_version_202007271168_better_support_for/)",
    }, {
        date: "2020-07-27",
        text: "On the Draft Scouting page, added a button to regenerate a draft class if you're in God Mode. [[1]](https://old.reddit.com/r/BasketballGM/comments/hyz5ex/also_on_the_draft_scouting_page_i_added_a_button/)",
    }, {
        date: "2020-07-23",
        text: "Improvements to game simulation realism: more realistic shooting percentages based on player positions and shot locations; teams change how they play if they are winning or losing; and the distribution of playing time is now more realistic. [[1]](https://basketball-gm.com/blog/2020/07/game-sim-realism/) [[2]](https://old.reddit.com/r/BasketballGM/comments/hwr0eu/three_improvements_to_game_simulation_realism/)",
    }, {
        date: "2020-07-20",
        text: "The ratings summary at the top of individual player pages now shows the difference between last year's ratings and this year's ratings. Thanks @icedjuro! [[1]](https://github.com/dumbmatter/gm-games/pull/280) [[2]](https://old.reddit.com/r/BasketballGM/comments/hv8arf/some_recent_minor_ui_updates/)",
    }, {
        date: "2020-07-20",
        text: "On the roster page and individual player pages, players on your team have a button to quickly add them to the trading block, in the same place as the \"Trade For\" button for players who are on other teams.",
    }, {
        date: "2020-07-20",
        text: "In Tools > Delete All Leagues, added an option to delete only unstarred leagues.",
    }, {
        date: "2020-07-19",
        text: "Added another \"fast forward\" option during live game sim - \"Until last 2 minutes\".",
    }, {
        date: "2020-07-17",
        text: "If you navigate away from a live game sim, it will pop up a warning dialog explaining that the play-by-play results will be lost if you proceed. [[1]](https://old.reddit.com/r/BasketballGM/comments/hsqaky/have_you_ever_accidentally_clicked_on_a_link/)",
    }, {
        date: "2020-07-16",
        text: "In FBGM, added the Roster Composition table to the re-signing players screen.",
    }, {
        date: "2020-07-11",
        text: "God Mode option to enable/disable ties. So for BBGM ties are now possible, and for FBGM you can turn off ties. Ties only can happen in regular season games, and occur after one overtime period. [[1]](https://old.reddit.com/r/BasketballGM/comments/hpn011/god_mode_option_to_enable_ties_version/) [[2]](https://old.reddit.com/r/Football_GM/comments/hpmzz9/god_mode_option_to_disable_ties_version/)",
    }, {
        date: "2020-07-10",
        text: "For FBGM, improved AV formula for OL and defensive players, resulting in higher AV for top players at those positions. I also updated the MVP and DPOY formulas to account for this, hopefully retaining good position balance.",
    }, {
        date: "2020-07-09",
        text: "A bunch of small FBGM improvements. [[1]](https://football-gm.com/blog/2020/07/recent-development-av-kickers-punters-future/) [[2]](https://old.reddit.com/r/Football_GM/comments/hogban/recent_development_some_small_improvements/)",
    }, {
        date: "2020-07-08",
        text: "Tools > Auto Play now lets you specify a phase (playoffs, draft, etc) to sim to, rather than only allowing auto sim to the preseason. [[1]](https://old.reddit.com/r/BasketballGM/comments/hnsxf0/tools_auto_play_now_lets_you_specify_a_phase/)",
    }, {
        date: "2020-07-07",
        text: "On the Playoffs page, the series score links to the most recent box score from that series.",
    }, {
        date: "2020-07-07",
        text: "Groundhog Day can be enabled and disabled in the God Mode settings. So you can turn it on and off for different seasons within the same league.",
    }, {
        date: "2020-07-06",
        text: "The Customize Player form includes the ability to change a player's Hall of Fame induction status. [[1]](https://old.reddit.com/r/BasketballGM/comments/hmiq0p/another_minor_new_feature_that_has_been_requested/)",
    }, {
        date: "2020-07-02",
        text: "Added buttons to trade screen to allow you to bulk select players/picks as excluded from trade negotiations. [[1]](https://old.reddit.com/r/BasketballGM/comments/hjqvlr/added_buttons_to_trade_screen_to_allow_you_to/)",
    }, {
        date: "2020-07-01",
        text: "The Power Rankings page now shows team rankings broken down by position (in FBGM) or rating (in BBGM). [[1]](https://old.reddit.com/r/BasketballGM/comments/hjj3d5/the_power_rankings_page_now_shows_team_rankings/) [[2]](https://old.reddit.com/r/Football_GM/comments/hjj8en/the_power_rankings_page_now_shows_team_rankings/)",
    }, {
        date: "2020-06-29",
        text: "Logos for all the new teams! [[1]](https://basketball-gm.com/blog/2020/06/logos-for-the-new-teams/) [[2]](https://old.reddit.com/r/BasketballGM/comments/hid1tg/logos_for_all_the_new_teams/)",
    }, {
        date: "2020-06-27",
        text: "Random debuts mode now works how you probably wanted it to work in the first place. The pool of players to be randomized is not just current and future players (relative to your starting season), but past players too. So if you start in 2020, you'll get many future draft classes of randomized real players. [[1]](https://old.reddit.com/r/BasketballGM/comments/hh71an/random_debuts_mode_now_works_how_you_probably/)",
    }, {
        date: "2020-06-27",
        text: "Menu on the Standings page to switch between League/Conference/Division standings, which is important on mobile where previously only the division standings were visible. [[1]](https://old.reddit.com/r/BasketballGM/comments/hgxh7p/menu_on_the_standings_page_to_switch_between/)",
    }, {
        date: "2020-06-26",
        text: "Added \"Fast Forward\" button to live game sim, allowing you to jump ahead by some number of minutes or until the end of the quarter. [[1]](https://old.reddit.com/r/BasketballGM/comments/hglnsz/another_minor_usability_improvement_a_fast/)",
    }, {
        date: "2020-06-26",
        text: "+/- buttons for adjusting multiple ratings on the Customize Player page. For BBGM it's all ratings except height. For FBGM it's position-specific and athleticism ratings.",
    }, {
        date: "2020-06-26",
        text: "Logos are shown in box scores if the window is big enough.",
    }, {
        date: "2020-06-26",
        text: "Support for exporting/importing individual players or groups of players, at Tools > Import/Export Players. [[1]](https://old.reddit.com/r/BasketballGM/comments/hgakyd/import_and_export_individual_players_from_leagues/)",
    }, {
        date: "2020-06-21",
        text: "Added a new page at Tools > Scheduled Events to let you view and (to some extent) delete scheduled events in historical leagues. [[1]](https://old.reddit.com/r/BasketballGM/comments/hdhdte/new_in_version_202006211434_some_support_for/)",
    }, {
        date: "2020-06-19",
        text: "Added an \"Export draft class\" button to the Draft History page so you can export and re-use historical draft classes.",
    }, {
        date: "2020-06-18",
        text: "Awards, All-Star selections, and league leaders are now determined based on total season stats for traded players, rather than just stats from their latest team. [[1]](https://old.reddit.com/r/BasketballGM/comments/hbqod0/awards_allstar_selections_and_league_leaders_are/)",
    }, {
        date: "2020-06-16",
        text: "You can customize the order and visibility of columns in most tables by pressing the \"...\" button to the top right of the table and clicking \"Customize Columns\". [[1]](https://old.reddit.com/r/BasketballGM/comments/hahhm5/customizable_columns_on_most_tables_in_version/)",
    }, {
        date: "2020-06-15",
        text: "More intelligent end-of-game substitution patterns in BBGM, both for blowouts and close games.",
    }, {
        date: "2020-06-14",
        text: "In BBGM, 2 point stats (attempted, made, %) are now viewable on the player stats, team stats, and individual player stats pages.",
    }, {
        date: "2020-06-13",
        text: "A bunch of new options for league creation: challenge modes (no draft picks, no free agents, no trades, no visible ratings), player development realism, and more. [[1]](https://basketball-gm.com/blog/2020/06/league-creation-options/) [[2]](https://old.reddit.com/r/BasketballGM/comments/h8dq90/a_bunch_of_new_options_for_league_creation/) [[3]](https://old.reddit.com/r/Football_GM/comments/h8dr1y/a_bunch_of_new_options_for_league_creation/)",
        big: true,
    }, {
        date: "2020-06-08",
        text: "Standings now show when teams clinch the playoffs, a first round bye, or the #1 overall seed. [[1]](https://old.reddit.com/r/BasketballGM/comments/gzd6qm/standings_now_show_when_teams_clinch_the_playoffs/) [[2]](https://old.reddit.com/r/Football_GM/comments/gzd8q6/standings_now_show_when_teams_clinch_the_playoffs/)",
    }, {
        date: "2020-06-08",
        text: "Sortable table rows (roster, fantasy draft, football depth chart) can be reordered by clicking two rows to swap them, in addition to dragging like normal. This is sometimes easier on mobile.",
    }, {
        date: "2020-06-07",
        text: "Added the News Feed page, available in the League menu. This incorporates a score for each event that happens, allowing you to filter events by importance. This replaces the old Transactions and Event Log pages. [[1]](https://basketball-gm.com/blog/2020/06/news-feed/) [[2]](https://old.reddit.com/r/BasketballGM/comments/gyc615/news_feed_changes_are_live_in_version_202006070785/)",
        big: true,
    }, {
        date: "2020-06-03",
        text: "If you use God Mode to retire a player, it checks for Hall of Fame eligibility and notifies you if he makes it. And when you edit a player's contract, it also updates the \"Salaries\" table on player pages and the \"Career Earnings\" frivolity. [[1]](https://basketball-gm.com/blog/2020/06/real-rosters-back-to-1947-contraction/) [[2]](https://old.reddit.com/r/BasketballGM/comments/gvtw5o/new_features_in_version_202006030801_real_rosters/)",
    }, {
        date: "2020-06-03",
        text: "Realistic rosters back to 1947, including contraction of teams occuring automaticaly at appropriate times. [[1]](https://basketball-gm.com/blog/2020/06/real-rosters-back-to-1947-contraction/) [[2]](https://old.reddit.com/r/BasketballGM/comments/gvtw5o/new_features_in_version_202006030801_real_rosters/)",
        big: true,
    }, {
        date: "2020-06-03",
        text: "Revamped Team Records page, including team relocations, renames, and contraction. [[1]](https://basketball-gm.com/blog/2020/06/real-rosters-back-to-1947-contraction/) [[2]](https://old.reddit.com/r/BasketballGM/comments/gvtw5o/new_features_in_version_202006030801_real_rosters/)",
    }, {
        date: "2020-06-03",
        text: "Support for disabling teams in Tools > Manage Teams. History of disabled teams is preserved and they can come back at a future date, either by re-enabling on Manage Teams or going to Tools > Expansion Draft, where you will see disabled teams as possible expansion teams. [[1]](https://basketball-gm.com/blog/2020/06/real-rosters-back-to-1947-contraction/) [[2]](https://old.reddit.com/r/BasketballGM/comments/gvtw5o/new_features_in_version_202006030801_real_rosters/)",
        big: true,
    }, {
        date: "2020-05-26",
        text: "Added a ton of new frivolities and redesigned the frivolities page. [[1]](https://basketball-gm.com/blog/2020/05/new-frivolities/) [[2]](https://old.reddit.com/r/BasketballGM/comments/gr57hl/i_just_added_12_new_frivolities_available_within/)",
    }, {
        date: "2020-05-24",
        text: "New option \"random debuts\" when creating a real players league, which randomizes every player's draft year so different players will appear at different times. [[1]](https://old.reddit.com/r/BasketballGM/comments/gq13b4/new_option_random_debuts_when_creating_a_real/)",
    }, {
        date: "2020-05-22",
        text: "Button on the Create/Edit Player page to randomize player ratings, which works by generating a random player of the same age and copying his ratings over. In FBGM it also matches by position.",
    }, {
        date: "2020-05-21",
        text: "When using historical rosters with pre-scheduled expansion drafts, you now are given the option of taking control of expansion teams. [[1]](https://old.reddit.com/r/BasketballGM/comments/goaypl/when_using_historical_rosters_with_prescheduled/)",
    }, {
        date: "2020-05-20",
        text: "New hair styles! [[1]](https://old.reddit.com/r/BasketballGM/comments/gnowab/thanks_to_usmileyoaks_there_are_some_new_hair/)",
    }, {
        date: "2020-05-20",
        text: "AI teams draft smarter. Previously the probability they would pick a player depended only on that player's rank, but now it depends on how good the players are. So the AI will almost always take the clear #1 pick, but there will be more randomness if the top available prospects have similar talents.",
    }, {
        date: "2020-05-19",
        text: "You can now create a \"legends\" league filled with the best players in each franchise's history. [[1]](https://basketball-gm.com/blog/2020/05/legends-leagues/) [[2]](https://old.reddit.com/r/BasketballGM/comments/gmznsx/new_in_version_202005191391_you_can_now_create_a/)",
    }, {
        date: "2020-05-18",
        text: "Added ability to supply real team info and player photos on the Options page, which overrides the defaults in any new league with real players. [[1]](https://basketball-gm.com/manual/customization/real-team-info-player-photos/)",
    }, {
        date: "2020-05-16",
        text: "Added \"Auto adjust for inflation\" option to the Team Finances page, which will keep revenue and expense settings in sync with salary cap changes. This setting is enabled by default.",
    }, {
        date: "2020-05-14",
        text: "Shows the team a player was selected from in the \"Drafted\" table of expansion drafts.",
    }, {
        date: "2020-05-14",
        text: "Historical rosters in BBGM include team abbreviations that change when a team moves, without breaking links to team pages from past seasons. Some parts of the UI still incorrectly display the current abbreviation rather than the historical one.",
    }, {
        date: "2020-05-14",
        text: "\"Team History\" page shows team region and name from past seasons. [[1]](https://old.reddit.com/r/BasketballGM/comments/gjy01l/version_202005141399_team_history_page_shows_team/)",
    }, {
        date: "2020-05-13",
        text: "\"Sim to game\" button on the schedule page, which now also includes the All-Star game.",
    }, {
        date: "2020-05-13",
        text: "Made AI trade rate proportional to the number of teams, so there aren't too many trades in very small leagues.",
    }, {
        date: "2020-05-12",
        text: "Added 4 new draft lottery types, to improve the accuracy of historical leagues in BBGM. [[1]](https://basketball-gm.com/blog/2020/05/more-draft-lottery-types/) [[2]](https://old.reddit.com/r/BasketballGM/comments/gildrw/new_in_version_202005121314_four_new_types_of/)",
    }, {
        date: "2020-05-12",
        text: "Playoff seeds and W/L are shown in score boxes (schedule page, dashboard, live game sim, etc.).",
    }, {
        date: "2020-05-11",
        text: "Revamped the UI for selecting a live game to watch. [[1]](https://old.reddit.com/r/BasketballGM/comments/gi1gpu/i_also_snuck_this_update_into_todays_release_the/)",
    }, {
        date: "2020-05-10",
        text: "Schedules for leagues with non-standard teams and divisions now have balanced home/away games when possible. Or at least close to that - it's not a deterministic algorithm, but it works pretty well.",
    }, {
        date: "2020-05-10",
        text: "New League Stats page which lets you see team stats for all seasons in one table.",
    }, {
        date: "2020-05-09",
        text: "Added real historical rosters back to 1956 in BBGM. [[1]](https://basketball-gm.com/blog/2020/05/beta-real-rosters-back-to-1956/) [[2]](https://old.reddit.com/r/BasketballGM/comments/gghq04/real_rosters_back_to_1956_is_officially_in_beta/) [[3]](https://old.reddit.com/r/BasketballGM/comments/ghw91z/official_release_real_rosters_back_to_1956/)",
        big: true,
    }, {
        date: "2020-05-07",
        text: "Expansion drafts can be predefined in a league file to trigger at a certain time.",
    }, {
        date: "2020-05-05",
        text: "Expansion draft, including configurable player protections from existing teams and the ability to control an expansion team. Tools > Expansion Draft.",
        big: true,
    }, {
        date: "2020-05-03",
        text: "Added a new page Tools > Manage Confs that allows you to create, edit, and delete divisions and conferences.",
    }, {
        date: "2020-05-03",
        text: "Added tracking of changes to some league settings (conferences, divisions, and number of playoff rounds) so that historical screens don't show incorrect values.",
    }, {
        date: "2020-05-03",
        text: "Added support for team info changes (name, region, logo, etc.) to be predefined in a league file and trigger only at a certain year.",
    }, {
        date: "2020-05-03",
        text: "In BBGM, added game simulation settings to God Mode to allow for more realistic simulation of different eras of basketball, when things like pace and 3 point shooting were very different.",
        big: true,
    }, {
        date: "2020-05-02",
        text: "Added the ability to change what division/conference a team belongs to from Tools > Manage Teams.",
    }, {
        date: "2020-05-02",
        text: "Added tracking of changes to team info (name, region, logo, etc.) so they can be displayed correctly when viewing historical data. Previously, updating a team's name (for example) would update it when viewing data from past seasons too.",
    }, {
        date: "2020-05-01",
        text: "Added a way to temporarily disable auto save to the Danger Zone screen.",
    }, {
        date: "2020-05-01",
        text: "Added \"Acquired\" column to the re-signing players table.",
    }, {
        date: "2020-04-30",
        text: "Added real historical rosters back to 2005 in BBGM. [[1]](https://basketball-gm.com/blog/2020/04/real-rosters-back-to-2005/) [[2]](https://old.reddit.com/r/BasketballGM/comments/gb3etv/new_in_version_202004301213_builtin_rosters_with/)",
        big: true,
    }, {
        date: "2020-04-25",
        text: "Added an option in BBGM to create a new league based on real players. [[1]](https://basketball-gm.com/blog/2020/04/real-players/) [[2]](https://old.reddit.com/r/BasketballGM/comments/g7vg6w/new_in_versions_202004250934_built_in_support_for/)",
        big: true,
    }, {
        date: "2020-04-19",
        text: "Added new God Mode option \"Trades Between AI Teams Factor\" to control the rate of trades between AI teams. [[1]](https://old.reddit.com/r/BasketballGM/comments/g4kvht/new_in_version_202004200168_god_mode_option_to/) [[2]](https://old.reddit.com/r/Football_GM/comments/g4kvsf/new_in_version_202004200170_god_mode_option_to/)",
    }, {
        date: "2020-04-16",
        text: "In FBGM, defensive linemen now get fewer tackles.",
    }, {
        date: "2020-04-16",
        text: "Added a new Award Races page, available under the Stats menu. [[1]](https://old.reddit.com/r/BasketballGM/comments/g2sgwf/new_in_version_202004170093_award_races/) [[2]](https://old.reddit.com/r/Football_GM/comments/g2sgxa/new_in_version_202004170094_award_races/)",
        big: true,
    }, {
        date: "2020-04-16",
        text: "Added \"Auto sort roster\" and \"Reset playing time\" buttons to the Multi Team Mode page, to allow you to easily apply those actions to all teams you control.",
    }, {
        date: "2020-04-12",
        text: "Scores of your team's games are shown at the top of the screen on all pages. [[1]](https://www.youtube.com/watch?v=r65xhONYbTc) [[2]](https://old.reddit.com/r/BasketballGM/comments/fz6n1z/basketball_gm_beta_feature_scores_at_the_top_of/)",
    }, {
        date: "2020-03-12",
        text: "Changes to player salaries in God Mode will now show up in the Player Salaries table on player pages.",
    }, {
        date: "2020-03-12",
        text: "Added seeds of the league champion and runner up to the League History table. Also, for leagues where the length of the playoffs is changed in God Mode, the champion is now shown correctly in this table.",
    }, {
        date: "2020-03-12",
        text: "Added an option in God Mode to lock an individual player's ratings, so they don't change from season to season.",
    }, {
        date: "2020-03-07",
        text: "Added \"Reset Table\" in the \"...\" menu for tables, which resets the search text, page, sorting, and filters to their default values.",
    }, {
        date: "2020-03-03",
        text: "New God Mode option to set rookie contract lengths. [[1]](https://old.reddit.com/r/BasketballGM/comments/fd1qi3/new_in_version_202003031279_god_mode_option_to/)",
    }, {
        date: "2020-03-03",
        text: "Added new Countries frivolity to show which countries have the best players, similar to the existing Colleges frivolity. [[1]](https://old.reddit.com/r/BasketballGM/comments/fczv7r/tools_frivolities_countries_in_version/)",
    }, {
        date: "2020-03-02",
        text: "Added jump balls to BBGM game sim at the beginning of each game and overtime period, based on height and jumping ratings. [[1]](https://old.reddit.com/r/BasketballGM/comments/fcoq8i/big_news_jump_balls_are_based_on_height_and/)",
    }, {
        date: "2020-02-28",
        text: "Added \"Acquired\" column to the roster, showing how the team acquired each of its players. [[1]](https://basketball-gm.com/blog/2020/02/acquired-column-roster/) [[2]](https://old.reddit.com/r/BasketballGM/comments/fbe13e/new_in_version_202002290926_acquired_column_on/) [[3]](https://old.reddit.com/r/Football_GM/comments/fbe2du/new_in_version_202002290927_acquired_column_on/)",
    }, {
        date: "2020-02-26",
        text: "Upcoming Free Agents contracts factor in player mood, and the \"Current Contract\" column is not shown during the re-signing phase.",
    }, {
        date: "2020-02-17",
        text: "New retirement formula in BBGM will allow rare old and good players to have longer careers.",
    }, {
        date: "2020-02-13",
        text: "Redesigned schedule listings to include team logos, team records, team overall ratings, and the predicted point spread. [[1]](https://old.reddit.com/r/BasketballGM/comments/f3izh4/new_in_version_202002131405_redesigned_schedule/) [[2]](https://old.reddit.com/r/Football_GM/comments/f3j0in/new_in_version_202002131406_redesigned_schedule/)",
    }, {
        date: "2020-02-10",
        text: "Added play/pause/next controls to the draft lottery reveal. [[1]](https://old.reddit.com/r/BasketballGM/comments/f201yh/new_in_version_202002110036_playpausenext_buttons/)",
    }, {
        date: "2020-02-08",
        text: "Added option to set units for height and weight to metric. [[1]](https://old.reddit.com/r/BasketballGM/comments/f0ulhj/new_in_version_202002081042_an_option_to_switch/) [[2]](https://old.reddit.com/r/Football_GM/comments/f0ulhy/new_in_version_202002081043_an_option_to_switch/)",
    }, {
        date: "2020-02-07",
        text: "Added Player Bios page and removed country and college info from Player Ratings. [[1]](https://old.reddit.com/r/BasketballGM/comments/f0h9yv/new_in_v202002071284_player_bios_table_also_the/) [[2]](https://old.reddit.com/r/Football_GM/comments/f0h8wf/new_in_v202002071286_player_bios_table_also_the/)",
    }, {
        date: "2020-02-03",
        text: "For users who have an OS-level dark mode enabled, the default color scheme is now dark.",
    }, {
        date: "2020-02-02",
        text: "Players are assigned a college when they are generated. [[1]](https://basketball-gm.com/blog/2020/02/colleges/) [[2]](https://old.reddit.com/r/BasketballGM/comments/ey1zqg/new_in_v202002030317_colleges/) [[3]](https://old.reddit.com/r/Football_GM/comments/ey20vo/new_in_v202002030318_colleges/)",
    }, {
        date: "2020-02-01",
        text: "In FBGM, touchbacks on punts put the ball at the 20 yard line, not 25.",
    }, {
        date: "2020-02-01",
        text: "Added sacks to the league leaders page.",
    }, {
        date: "2020-01-30",
        text: "Added average margin of victory to the roster page.",
    }, {
        date: "2020-01-05",
        text: "Revamped the UI for page titles, dropdown options, and shortcut links between pages.",
    }, {
        date: "2020-01-03",
        text: "Added support for boolean \"or\" operations in table column filters, like \"C|PF\" to display centers and power forwards. [[1]](https://old.reddit.com/r/BasketballGM/comments/eji5hf/new_in_version_202001031015_boolean_or_operations/) [[2]](https://old.reddit.com/r/Football_GM/comments/eji5i9/new_in_version_202001031016_boolean_or_operations/)",
    }, {
        date: "2020-01-02",
        text: "Fixed bug where loading a league file during a fantasy draft created extra draft prospects.",
    }, {
        date: "2019-12-29",
        text: "Decreased pace in FBGM, to make it more similar to the NFL (~1000 plays/year per team, rather than ~1200).",
    }, {
        date: "2019-12-29",
        text: "Fixed bugs in AV calculation. [[1]](https://old.reddit.com/r/Football_GM/comments/eg68ot/av_calculation_is_broken_for_qbs/fchi9ld/)",
    }, {
        date: "2019-12-27",
        text: "New God Mode options to set the number of fouls needed to foul out and the foul rate. [[1]](https://old.reddit.com/r/BasketballGM/comments/egi54x/new_god_mode_options_to_set_the_number_of_fouls/)",
    }, {
        date: "2019-12-16",
        text: "New God Mode option to set the number of seasons in the future that you can trade draft picks. [[1]](https://old.reddit.com/r/BasketballGM/comments/ebq59y/version_201912170204_new_god_mode_option_to_set/) [[2]](https://old.reddit.com/r/Football_GM/comments/ebq5at/version_201912170206_new_god_mode_option_to_set/)",
    }, {
        date: "2019-12-14",
        text: "Fewer fumbles recovered by the offense will result in large yardage gains after recovery. [[1]](https://old.reddit.com/r/Football_GM/comments/eaosau/a_couple_game_simulation_improvements_in_version/)",
    }, {
        date: "2019-12-14",
        text: "Smarter end of half/game clock management in FBGM, most importantly resulting in more field goals as the clock runs out. [[1]](https://old.reddit.com/r/Football_GM/comments/eaosau/a_couple_game_simulation_improvements_in_version/)",
    }, {
        date: "2019-12-11",
        text: "Added a \"Budget\" option to God Mode, which lets you equalize all the team spending effects (scouting, coaching, facilities, health) and ignore whether your team is making a profit or loss. [[1]](https://old.reddit.com/r/BasketballGM/comments/e5qq7l/thoughts_on_a_potential_no_finances_mode/) [[2]](https://old.reddit.com/r/BasketballGM/comments/e9d9xs/new_in_version_201912111267_a_budget_option_in/) [[3]](https://old.reddit.com/r/Football_GM/comments/e9dakv/new_in_version_201912111268_a_budget_option_in/)",
    }, {
        date: "2019-12-07",
        text: "Change team ovr ratings to be unbounded rather than 0-100, because some multiplayer leagues and custom roster files people use have very inflated ratings and half the league ends up at 100.",
    }, {
        date: "2019-12-01",
        text: "Show region population on league finances page.",
    }, {
        date: "2019-11-25",
        text: "Player names and countries are now more realistic in FBGM, rather than just being copied from BBGM. [[1]](https://old.reddit.com/r/Football_GM/comments/e1hocb/new_in_version_201911250934_player_names_and/)",
    }, {
        date: "2019-11-24",
        text: "Box score shows home team at the bottom, not the top. This matches how every other website does it.",
    }, {
        date: "2019-11-23",
        text: "Fixed several penalties in FBGM to awarwd automatic first downs.",
    }, {
        date: "2019-11-23",
        text: "Added JSON Schema validation when loading a league file in FBGM.",
    }, {
        date: "2019-11-23",
        text: "Fixed sack safeties - should always be credited to the same player.",
    }, {
        date: "2019-11-23",
        text: "Fixed bug where a turnover during a two-point conversion try would result in the wrong team kicking off.",
    }, {
        date: "2019-11-23",
        text: "Fixed glitch in box score where safeties and two-point conversions would be confused.",
    }, {
        date: "2019-11-22",
        text: "On player page, link the draft year to the draft history page even for undrafted players.",
    }, {
        date: "2019-11-21",
        text: "Integrated shot locations into the normal stats table.",
    }, {
        date: "2019-11-20",
        text: "Added team overall rating for FBGM and improved power rankings. [[1]](https://old.reddit.com/r/Football_GM/comments/dz84f8/new_in_version_201911201248_team_ratings_and/)",
        big: true,
    }, {
        date: "2019-11-18",
        text: "Added option to enable persistent storage, and request it by default if no prompt is needed.",
    }, {
        date: "2019-11-17",
        text: "Fix updating of ovr and pot after editing a player's position in FBGM.",
    }, {
        date: "2019-11-16",
        text: "Added team overall rating for BBGM and improved power rankings. [[1]](https://old.reddit.com/r/BasketballGM/comments/dz84fr/new_in_version_201911201247_team_ratings_and/)",
        big: true,
    }, {
        date: "2019-11-15",
        text: "When importing a league file with partially defined stats objects (like for manually added historical data), fill in any missing stats with 0.",
    }, {
        date: "2019-11-15",
        text: "Fewer really short (less than 4 seconds) possessions in BBGM.",
    }, {
        date: "2019-11-14",
        text: "Improve rookie salary extrapolation for leagues with more teams than default.",
    }, {
        date: "2019-11-13",
        text: "Option to minify JSON when exporting a league.",
    }, {
        date: "2019-11-13",
        text: "Worked around bug in mobile Safari that was breaking scrolling of sortable tables.",
    }, {
        date: "2019-11-10",
        text: "Better calculation of days remaining, like if you play a month when only 20 days are left, it'll start the countdown at 20.",
    }, {
        date: "2019-11-09",
        text: "Fix importing of players with only historical stats.",
    }, {
        date: "2019-11-08",
        text: "New ovr formula for BBGM. [[1]](https://basketball-gm.com/blog/2019/11/game-simulation-ovr-beta/) [[2]](https://old.reddit.com/r/BasketballGM/comments/dtyef8/game_simulation_improvements_and_tweaks_to_ovr/)",
    }, {
        date: "2019-11-03",
        text: "Switch key binding for \"one day\" from alt+d to alt+y, because browsers already use alt+d.",
    }, {
        date: "2019-11-03",
        text: "When importing over a starred league, retain the star after import.",
    }, {
        date: "2019-11-03",
        text: "Fix errors that happened when editing a player's relatives.",
    }, {
        date: "2019-11-02",
        text: "Fix team history pages for players with no ratings for a team, only stats (like for custom rosters with historical stats)",
    }, {
        date: "2019-11-02",
        text: "Multiple improvements to BBGM game simulation, mostly related to more realistic behavior in the play-by-play. [[1]](https://old.reddit.com/r/BasketballGM/comments/dqoc8u/game_simulation_improvements_beta/) [[2]](https://basketball-gm.com/blog/2019/11/game-simulation-ovr-beta/) [[3]](https://old.reddit.com/r/BasketballGM/comments/dtyef8/game_simulation_improvements_and_tweaks_to_ovr/)",
        big: true,
    }, {
        date: "2019-10-27",
        text: "Made long-term effects of injuries viewable on player pages, along with a log of all player injuries. [[1]](https://basketball-gm.com/blog/2019/10/improvements-injury-system/) [[2]](https://old.reddit.com/r/BasketballGM/comments/do0jtz/new_in_bbgm_201910271376_more_injury_info_and/) [[3]](https://old.reddit.com/r/Football_GM/comments/do0jss/new_in_version_201910271377_more_injury_info_and/)",
        big: true,
    }, {
        date: "2019-10-22",
        text: "New UI for the dashboard. [[1]](https://basketball-gm.com/blog/2019/10/new-dashboard-ui/) [[2]](https://old.reddit.com/r/BasketballGM/comments/dlpkdr/new_dashboard_ui_in_version_201910221337/) [[3]](https://old.reddit.com/r/Football_GM/comments/dlpkqu/new_dashboard_ui_in_version_201910221338/)",
    }, {
        date: "2019-10-19",
        text: "Added more keyboard shortcuts to the items in the Play menu. [[1]](https://old.reddit.com/r/BasketballGM/comments/djyy10/more_keyboard_shortcuts_in_version_201910190261/) [[2]](https://old.reddit.com/r/Football_GM/comments/djyyl1/more_keyboard_shortcuts_in_version_201910190263/)",
    }, {
        date: "2019-10-13",
        text: "Added special gold basketball/football logos for Gold subscribers.",
    }, {
        date: "2019-10-13",
        text: "Added \"Type\" column to statistical feats table, allowing the display of regular season, playoff, and All-Star feats all in one table.",
    }, {
        date: "2019-10-13",
        text: "Fixed a rare bug in draft lottery odds.",
    }, {
        date: "2019-10-13",
        text: "Added an \"Export\" button for each draft class on the Draft Scouting page.",
    }, {
        date: "2019-10-11",
        text: "Revamped the Manage Teams page. Some features are available outside of God Mode, and team colors are editable. [[1]](https://old.reddit.com/r/BasketballGM/comments/dgk9d1/some_minor_updates_in_version_201910111184/)",
    }, {
        date: "2019-10-11",
        text: "Fixed bug where All-Star starters were incorrect. [[1]](https://old.reddit.com/r/BasketballGM/comments/dgk9d1/some_minor_updates_in_version_201910111184/)",
    }, {
        date: "2019-10-11",
        text: "New frivolities: Most Teams and Oldest Former Players. [[1]](https://old.reddit.com/r/BasketballGM/comments/dgk9d1/some_minor_updates_in_version_201910111184/)",
    }, {
        date: "2019-10-10",
        text: "New player faces! [[1]](https://old.reddit.com/r/BasketballGM/comments/dg1jrp/new_player_faces_in_version_201910101057/) [[2]](https://old.reddit.com/r/Football_GM/comments/dg1jqt/new_player_faces_in_version_201910101058/) [[3]](https://old.reddit.com/r/BasketballGM/comments/dfp99h/thoughts_on_changing_the_default_cartoon_faces_to/)",
        big: true,
    }, {
        date: "2019-10-07",
        text: "In honor of Daryl Morey, there is a new social media feature at Tools > Social Media. [[1]](https://old.reddit.com/r/BasketballGM/comments/derav9/new_feature_in_version_201910071369_social_media/)",
    }, {
        date: "2019-10-04",
        text: "Fixed a big bug in FBGM game simulation, where the effect of OL was reversed for passing plays. [[1]](https://football-gm.com/blog/2019/10/i-fucked-up-and-the-importance-of-sanity-checks/) [[1]](https://old.reddit.com/r/Football_GM/comments/dd9w6u/i_fucked_up_and_the_importance_of_sanity_checks/)",
    }, {
        date: "2019-09-30",
        text: "New feature for BBGM: the All-Star Game! [[1]](https://basketball-gm.com/blog/2019/09/all-star-game/) [[2]](https://old.reddit.com/r/BasketballGM/comments/dbj8zt/new_in_version_201909301331_the_allstar_game/) [[3]](https://old.reddit.com/r/BasketballGM/comments/d9d7f9/new_feature_for_beta_testing_the_allstar_game_ill/)",
        big: true,
    }, {
        date: "2019-09-15",
        text: "Clutch plays are shown at the bottom of box scores. [[1]](https://old.reddit.com/r/BasketballGM/comments/d4o3r6/new_in_version_201909151087_clutch_plays_are/)",
    }, {
        date: "2019-09-15",
        text: "New draft type \"Random Order\" available in God Mode. [[1]](https://old.reddit.com/r/BasketballGM/comments/d4o3sb/new_in_version_201909151087_new_draft_type_random/)",
    }, {
        date: "2019-09-15",
        text: "Free agents in leagues with few games per season (such as the FBGM default) will lower their demands faster during the regular season.",
    }, {
        date: "2020-09-14",
        text: "Fixed rare bug where injured or fouled out players would sometimes play even when someone else was available.",
    }, {
        date: "2019-09-07",
        text: "Fixed hard cap trading logic - team under the cap cannot go over the cap, and team over the cap must reduce salary.",
    }, {
        date: "2019-09-07",
        text: "If two teams in the finals are tied in winp, break the tie with seed before defaulting to random.",
    }, {
        date: "2019-09-03",
        text: "Revamped owner messages. [[1]](https://basketball-gm.com/blog/2019/09/owner-messages-revamp/) [[2]](https://old.reddit.com/r/BasketballGM/comments/czeyvb/new_in_version_201909040161_revamped_owner/) [[3]](https://old.reddit.com/r/Football_GM/comments/czfdup/this_applies_to_football_gm_too/)",
        big: true,
    }, {
        date: "2019-08-31",
        text: "Improvements to schedule and playoff seeding in FBGM: regular season schedule is more balanced, and division winners are guaranteed a top 4 seed. [[1]](https://football-gm.com/blog/2019/08/schedule-playoffs-improvements/) [[2]](https://old.reddit.com/r/Football_GM/comments/cxwupd/schedule_and_playoff_seeding_improvements/)",
    }, {
        date: "2019-08-27",
        text: "Fix table sorting after the year 10000.",
    }, {
        date: "2019-08-27",
        text: "Finals home court advantage is based on winning percentage, not seed. Also fixed some bracket generation errors for non-standard playoff formats. [[1]](https://old.reddit.com/r/BasketballGM/comments/cwculw/a_couple_minor_playoff_bug_fixes/)",
    }, {
        date: "2019-08-17",
        text: "Many more tables (such as Draft Summary) are searchable, filterable, and downloadable. [[1]](https://basketball-gm.com/blog/2019/08/a-few-small-improvements/) [[2]](https://old.reddit.com/r/BasketballGM/comments/crv3tj/a_few_small_improvements/) ",
    }, {
        date: "2019-08-17",
        text: "The AI resets their finance settings after firing you. [[1]](https://basketball-gm.com/blog/2019/08/a-few-small-improvements/) [[2]](https://old.reddit.com/r/BasketballGM/comments/crv3tj/a_few_small_improvements/) ",
    }, {
        date: "2019-08-17",
        text: "The Hall of Fame cutoff adjusts based on the number of games in a season and the length of a quarter. Previously, short leagues would have empty HoFs and long leagues would have tons of HoFers. [[1]](https://basketball-gm.com/blog/2019/08/a-few-small-improvements/) [[2]](https://old.reddit.com/r/BasketballGM/comments/crv3tj/a_few_small_improvements/)",
    }, {
        date: "2019-08-14",
        text: "Added achievements to FBGM. [[1]](https://football-gm.com/blog/2019/07/achievements/) [[2]](https://old.reddit.com/r/Football_GM/comments/cqfe6y/finally_some_achievements/)",
    }, {
        date: "2019-08-03",
        text: "Added years with team to the re-sign players page.",
    }, {
        date: "2019-07-28",
        text: "New God Mode option to edit the strength of the home court advantage. [[1]](https://old.reddit.com/r/BasketballGM/comments/cj0sqc/new_in_version_201907281213_edit_the_strength_of/)",
    }, {
        date: "2019-07-28",
        text: "Added a bunch of new achievements to BBGM. [[1]](https://basketball-gm.com/blog/2019/07/new-achievements/) [[2]](https://old.reddit.com/r/BasketballGM/comments/ciwyek/new_achievements_in_version_201907280910/)",
    }, {
        date: "2019-07-27",
        text: "Made HoF requirements a bit stricter for BBGM.",
    }, {
        date: "2019-07-21",
        text: "Added support for far future draft classes in custom league files. Previously the limit was 3 seasons, now there is no limit. [[1]](https://basketball-gm.com/blog/2019/07/far-future-draft-classes/) [[2]](https://old.reddit.com/r/BasketballGM/comments/cg4ne3/far_future_draft_classes/)",
    }, {
        date: "2019-07-15",
        text: "Renamed Macedonia to North Macedonia.",
    }, {
        date: "2019-07-07",
        text: "The Edit Team Info page has been renamed to Manage Teams and it now includes (very rudimentary) support for adding and removing teams. [[1]](https://old.reddit.com/r/BasketballGM/comments/cafqfp/in_god_mode_the_edit_team_info_page_has_been/)",
        big: true,
    }, {
        date: "2019-06-27",
        text: "Added support for creating a league file from a URL to a JSON file (with the apporpriate Access-Control-Allow-Origin header) rather than just uploading a file.",
    }, {
        date: "2019-06-25",
        text: "Highlight HoF players on historical roster pages.",
    }, {
        date: "2019-06-06",
        text: "New God Mode option to disable players refusing to negotiate. [[1]](https://old.reddit.com/r/BasketballGM/comments/bxcca8/new_in_v201906060088_a_god_mode_option_to_disable/)",
    }, {
        date: "2019-05-27",
        text: "Added ability to edit relatives of players in God Mode. [[1]](https://old.reddit.com/r/BasketballGM/comments/btqh8w/more_minor_new_stuff_edit_relatives_when/)",
    }, {
        date: "2019-05-27",
        text: "Frivolities! View family trees, tragic deaths, roster continuity, and the best players who never made the playoffs. [[1]](https://basketball-gm.com/blog/2019/05/frivolities/) [[2]](https://old.reddit.com/r/BasketballGM/comments/btmrj5/frivolities_view_family_trees_tragic_deaths/)",
        big: true,
    }, {
        date: "2019-05-25",
        text: "In FBGM, illegal contact is an automatic first down.",
    }, {
        date: "2019-05-25",
        text: "Play/Pause/Next Play buttons in live game sim. [[1]](https://old.reddit.com/r/BasketballGM/comments/bsv4zv/playpausenext_play_in_live_game_sim_new_in/) [[2]](https://old.reddit.com/r/Football_GM/comments/bsv4ro/playpausenext_play_in_live_game_sim_new_in/)",
    }, {
        date: "2019-05-22",
        text: "Fixed FBGM bug where the wrong team would kick off after a missed XP.",
    }, {
        date: "2019-05-18",
        text: "Fewer QB runs in FBGM.",
    }, {
        date: "2019-05-12",
        text: "In FBGM, added timeouts, the two minute warning, and fixed a bug where sometimes overtime would end in a tie prematurely. [[1]](https://old.reddit.com/r/Football_GM/comments/bnxqjg/v201905130153_added_timeouts_the_two_minute/)",
    }, {
        date: "2019-05-12",
        text: "In FBGM, fixed some bugs and improves coaching decisions (field goals, extra points, onside kicks). [[1]](https://old.reddit.com/r/Football_GM/comments/bnl2qd/v201905120251_fixes_some_bugs_and_improves/)",
    }, {
        date: "2019-05-12",
        text: "Show total of unsigned players contracts on the re-signing page.",
    }, {
        date: "2019-05-04",
        text: "In FBGM, added roster composition table to the free agents page.",
    }, {
        date: "2019-05-04",
        text: "FBGM game sim tweaks.",
    }, {
        date: "2019-05-03",
        text: "The order of teams (for draft or playoff seeding) now has random tiebreakers rather than alphabetical.",
    }, {
        date: "2019-05-03",
        text: "Ability to specify the complete order of a fantasy draft. [[1]](https://old.reddit.com/r/BasketballGM/comments/bkh989/minor_new_feature_specify_the_complete_order_of_a/)",
    }, {
        date: "2019-05-01",
        text: "Changed the default draft lottery to the NBA's new 4 team lottery, and added an option to switch to the old lottery or disable the lottery entirely. Also improved the lottery for non-standard leagues. [[1]](https://basketball-gm.com/blog/2019/05/draft-lottery-updates/) [[2]](https://old.reddit.com/r/BasketballGM/comments/bjivni/draft_lottery_updates/)",
    }, {
        date: "2019-04-27",
        text: "New playoff bracket UI. [[1]](https://old.reddit.com/r/BasketballGM/comments/bi54wx/new_playoffs_ui/)",
    }, {
        date: "2019-04-21",
        text: "Football GM is here! [[1]](https://football-gm.com/blog/2019/04/welcome/) [[2]](https://old.reddit.com/r/BasketballGM/comments/bfxjl0/early_beta_of_the_new_football_gm/) [[3]](https://old.reddit.com/r/Football_GM/comments/bfx1dp/football_gm_has_been_created/)",
        big: true,
    }, {
        date: "2019-01-04",
        text: "Added a better way to filter tables by position, but then had to remove it due to strange browser compatibility issues. [[1]](https://old.reddit.com/r/BasketballGM/comments/acpbkj/todays_very_minor_new_feature/)",
    }, {
        date: "2018-11-11",
        text: "New God Mode options: hard/soft cap and playoff byes. [[1]](https://basketball-gm.com/blog/2018/11/new-options-hard-soft-cap-and-playoff-byes/) [[2]](https://old.reddit.com/r/BasketballGM/comments/9w61h5/new_god_mode_options_hardsoft_cap_and_playoff_byes/)",
    }, {
        date: "2018-11-03",
        text: "More realistic contracts and draft history in new leagues. [[1]](https://basketball-gm.com/blog/2018/11/more-realistic-new-leagues/) [[2]](https://old.reddit.com/r/BasketballGM/comments/9u04ov/more_realistic_contracts_and_draft_history_in_new/)",
    }, {
        date: "2018-11-03",
        text: "Added SMOY and MIP to league history table.",
    }, {
        date: "2018-11-03",
        text: "Added MIP to team records.",
    }, {
        date: "2018-11-03",
        text: "Non-guaranteed rookie contracts now remain non-guaranteed even if they are traded.",
    }, {
        date: "2018-10-28",
        text: "Added \"Download Spreadsheet\" button to nearly every table. [[1]](https://old.reddit.com/r/BasketballGM/comments/9s8r8p/download_spreadsheet_button_on_nearly_every_table/)",
    }, {
        date: "2018-10-27",
        text: "Player contract tweaks - old player value is higher, young player value is more based on ovr (so, lower), and bumped up player contracts at the end of free agency, especially for players who improve.",
    }, {
        date: "2018-10-21",
        text: "Added ability to show playoff stats on the League Leaders page.",
    }, {
        date: "2018-10-20",
        text: "Changed the number of games a new signing is untradeable to 14 rather than 15, so simming 2 weeks will be enough.",
    }, {
        date: "2018-10-15",
        text: "\"Untouchable\" players and picks in trades. [[1]](https://basketball-gm.com/blog/2018/10/untouchable-players-and-picks-in-trades/) [[2]](https://old.reddit.com/r/BasketballGM/comments/9o9v7g/untouchable_players_and_picks_in_trades/)",
    }, {
        date: "2018-10-07",
        text: "Lots of small UI improvements, including dark mode and a much nicer menu on mobile. [[1]](https://basketball-gm.com/blog/2018/10/lots-of-small-ui-improvements/) [[2]](https://old.reddit.com/r/BasketballGM/comments/9m5oyj/lots_of_small_ui_improvements_please_let_me_know/)",
        big: true,
    }, {
        date: "2018-09-22",
        text: "Playoff series length is now customizable in league files. [[1]](https://old.reddit.com/r/BasketballGM/comments/9i47ul/playoff_series_length_is_now_customizable/)",
    }, {
        date: "2018-09-17",
        text: "Better offline support by using a Service Worker.",
    }, {
        date: "2018-09-07",
        text: "\"Play > Until end of round\" in the playoffs. [[1]](https://old.reddit.com/r/BasketballGM/comments/9e17bb/minor_new_feature_play_until_end_of_round_in_the/)",
    }, {
        date: "2018-09-02",
        text: "Fixed bug where potential was calculated wrong for draft prospects, leading to inflated values. [[1]](https://basketball-gm.com/blog/2018/09/a-few-recent-minor-improvements/) [[2]](https://old.reddit.com/r/BasketballGM/comments/9ch43o/a_few_recent_minor_improvements/)",
    }, {
        date: "2018-09-02",
        text: "Fixed simulation beyond the year 9999. [[1]](https://basketball-gm.com/blog/2018/09/a-few-recent-minor-improvements/) [[2]](https://old.reddit.com/r/BasketballGM/comments/9ch43o/a_few_recent_minor_improvements/)",
    }, {
        date: "2018-09-02",
        text: "Finals MVP is actually the finals MVP, not the playoffs MVP. [[1]](https://basketball-gm.com/blog/2018/09/a-few-recent-minor-improvements/) [[2]](https://old.reddit.com/r/BasketballGM/comments/9ch43o/a_few_recent_minor_improvements/)",
    }, {
        date: "2018-09-02",
        text: "Altered attendance formula so you can no longer make tons of money from a small number of incredibly expensive tickets. [[1]](https://basketball-gm.com/blog/2018/09/a-few-recent-minor-improvements/) [[2]](https://old.reddit.com/r/BasketballGM/comments/9ch43o/a_few_recent_minor_improvements/)",
    }, {
        date: "2018-07-22",
        text: "Made free agents less willing to sign with you at hard and insane difficulties. [[1]](https://old.reddit.com/r/BasketballGM/comments/90zkgn/hardinsane_difficulty_was_too_easy/)",
    }, {
        date: "2018-07-07",
        text: "\"Reset playing time\" button on the Roster page.",
    }, {
        date: "2018-06-24",
        text: "New feature: difficulty levels. [[1]](https://basketball-gm.com/blog/2018/06/difficulty-levels/) [[2]](https://old.reddit.com/r/BasketballGM/comments/8tjivq/new_feature_difficulty_levels/)",
        big: true,
    }, {
        date: "2018-06-19",
        text: "Better schedule generation for non-standard (not 30 teams or not 82 games) leagues. [[1]](https://old.reddit.com/r/BasketballGM/comments/8seu1d/better_schedule_generation_for_nonstandard_not_30/)",
    }, {
        date: "2018-06-18",
        text: "Show roster size and salary cap info on the re-signing page, same as on the free agents page.",
    }, {
        date: "2018-05-26",
        text: "In God Mode, no players are untradeable.",
    }, {
        date: "2018-05-21",
        text: "Better error checking for custom league files. [[1]](https://basketball-gm.com/manual/customization/json-schema/) [[2]](https://old.reddit.com/r/BasketballGM/comments/8l4qm3/better_error_checking_for_custom_league_files/)",
    }, {
        date: "2018-05-19",
        text: "Dead players cannot have children.",
    }, {
        date: "2018-05-11",
        text: "Draft day trades. [[1]](https://basketball-gm.com/blog/2018/05/draft-day-trades/) [[2]](https://old.reddit.com/r/BasketballGM/comments/8ir6fc/new_feature_released_draft_day_trades/)",
        big: true,
    }, {
        date: "2018-05-08",
        text: "After the draft lottery, show draft pick positions when trading picks.",
    }, {
        date: "2018-05-03",
        text: "Relatives! Players can be the father, son, or brother of other players. [[1]](https://basketball-gm.com/blog/2018/05/relatives-fathers-sons-and-brothers/) [[2]](https://old.reddit.com/r/BasketballGM/comments/8guvko/relatives_fathers_sons_and_brothers/)",
        big: true,
    }, {
        date: "2018-04-11",
        text: "Performance improvements in large leagues. [[1]](https://basketball-gm.com/blog/2018/04/performance-improvements-in-large-leagues/) [[2]](https://old.reddit.com/r/BasketballGM/comments/8blmn3/performance_improvements_in_large_leagues/)",
    }, {
        date: "2018-04-07",
        text: "Customizable stadium capacities. [[1]](https://basketball-gm.com/blog/2018/04/customizable-stadium-capacities/) [[2]](https://old.reddit.com/r/BasketballGM/comments/8amnw6/customizable_stadium_capacities/)",
    }, {
        date: "2018-03-17",
        text: "Fix overflowing tables showing content on top of each other, especially on the Draft Scouting page. [[1]](https://old.reddit.com/r/BasketballGM/comments/8568yo/no_more_of_this_as_of_version_201803171194/)",
    }, {
        date: "2018-03-07",
        text: "Big changes to player ratings and development. [[1]](https://basketball-gm.com/blog/2018/02/player-ratings-and-development-beta/) [[2]](https://old.reddit.com/r/BasketballGM/comments/7vzzqt/new_beta_released_today_please_help_me_test_it/) [[3]](https://old.reddit.com/r/BasketballGM/comments/7wn1sb/updated_beta_just_released/) [[4]](https://old.reddit.com/r/BasketballGM/comments/7ya1yu/any_more_thoughts_on_the_beta/) [[5]](https://basketball-gm.com/blog/2018/03/player-ratings-and-development-changes-are-live/) [[6]](https://old.reddit.com/r/BasketballGM/comments/82tj9s/player_ratings_and_development_changes_are_live_i/)",
        big: true,
    }, {
        date: "2018-02-18",
        text: "Improve performance of Export Stats feature.",
    }, {
        date: "2018-02-11",
        text: "Use average of WS and EWA for the HoF formula.",
    }, {
        date: "2018-02-11",
        text: "Add opponent and playoff filters to Team Shot Locations page, bringing it closer to feature parity with Team Stats.",
    }, {
        date: "2018-01-08",
        text: "Better draft prospect generation - players \"leave school\" when they are a top draft prospect, after 1/2/3/4 years.",
    }, {
        date: "2017-12-22",
        text: "Added a new Draft Team History page. [[1]](https://old.reddit.com/r/BasketballGM/comments/7lm733/santa_came_early_this_year_draft_team_history/)",
    }, {
        date: "2017-12-11",
        text: "New God Mode option to set the injury rate. [[1]](https://old.reddit.com/r/BasketballGM/comments/7j7hnv/new_feature_god_mode_option_to_change_injury_rate/)",
    }, {
        date: "2017-12-09",
        text: "Tweaks to MVP formula. [[1]](https://old.reddit.com/r/BasketballGM/comments/7iof9a/can_we_compromise/)",
    }, {
        date: "2017-12-04",
        text: "Most Improved Player award. [[1]](https://basketball-gm.com/blog/2017/12/most-improved-player-award/) [[2]](https://old.reddit.com/r/BasketballGM/comments/7hlxvj/most_improved_player_award/)",
    }, {
        date: "2017-12-03",
        text: "Tweaks to HoF formula.",
    }, {
        date: "2017-12-03",
        text: "Make the Upcoming Free Agents accessible even when Free Agents page is not (playoffs, draft).",
    }, {
        date: "2017-12-02",
        text: "Tweaks to award formulas.",
    }, {
        date: "2017-11-29",
        text: "New God Mode option to set the tragic death rate. [[1]](https://old.reddit.com/r/BasketballGM/comments/7giky9/new_feature_for_horrible_people/)",
    }, {
        date: "2017-11-26",
        text: "On the Free Agents page, added a  button to show only free agents that are cheap enough to sign with available cap space. [[1]](https://old.reddit.com/r/BasketballGM/comments/7fsh37/minor_new_feature_easily_filter_the_free_agent/)",
    }, {
        date: "2017-11-21",
        text: "Added \"Share\" links after taking a screenshot.",
    }, {
        date: "2017-10-06",
        text: "New advanced stats: offensive rating, defensive rating, win shares, and various team advanced stats. [[1]](https://basketball-gm.com/blog/2017/10/even-more-advanced-stats/) [[2]](https://old.reddit.com/r/BasketballGM/comments/74ozwx/even_more_advanced_stats/)",
        big: true,
    }, {
        date: "2017-10-02",
        text: "New stats: team opponent stats, team playoff stats, and various player advanced stats. [[1]](https://basketball-gm.com/blog/2017/10/you-guys-like-stats-right/) [[2]](https://old.reddit.com/r/BasketballGM/comments/73whjb/you_guys_like_stats_right/) [[3]](https://old.reddit.com/r/BasketballGM/comments/73jgbq/coming_soon/)",
        big: true,
    }, {
        date: "2017-09-29",
        text: "Added advanced stats to the Player Stats page. [[1]](https://old.reddit.com/r/BasketballGM/comments/739gnl/advanced_stats_in_the_player_stats_table/)",
    }, {
        date: "2017-09-26",
        text: "Added some new advanced stats to player profile pages. [[1]](https://old.reddit.com/r/BasketballGM/comments/72ok8r/a_few_more_advanced_stats_on_player_pages/)",
    }, {
        date: "2017-09-23",
        text: "New God Mode option to set max roster size. [[1]](https://old.reddit.com/r/BasketballGM/comments/71z5rr/very_unexciting_new_feature_you_can_change_the/)",
    }, {
        date: "2017-09-09",
        text: "More realistic player height distribution, including extreme outliers. [[1]](https://basketball-gm.com/blog/2017/09/more-extreme-heights/) [[2]](https://old.reddit.com/r/BasketballGM/comments/6z3ql1/more_extreme_heights/) [[3]](https://old.reddit.com/r/BasketballGM/comments/6ptd6g/beta_testers_wanted_more_extreme_heights/)",
    }, {
        date: "2017-08-06",
        text: "Added little colored W/L icons next to game result notifications.",
    }, {
        date: "2017-08-06",
        text: "Improved draft lottery UI for a non-standard number of teams.",
    }, {
        date: "2017-08-06",
        text: "Improved AI drafting logic (more likely to take the best player available).",
    }, {
        date: "2017-07-08",
        text: "New feature - view the draft lottery live! [[1]](https://basketball-gm.com/blog/2017/07/live-draft-lottery/) [[2]](https://old.reddit.com/r/BasketballGM/comments/6m2sf1/new_feature_view_the_draft_lottery_live/)",
        big: true,
    }, {
        date: "2017-06-30",
        text: "New feature - sometimes young players will fake their ages. Be careful who you draft! [[1]](https://old.reddit.com/r/BasketballGM/comments/6kh28o/new_feature_sometimes_young_players_particularly/)",
    }, {
        date: "2017-06-10",
        text: "New feature in Tools > Options - stop game sim if an injury longer than N days occurs. [[1]](https://old.reddit.com/r/BasketballGM/comments/6gi07j/new_feature_in_tools_options_stop_game_sim_if_an/)",
    }, {
        date: "2017-06-10",
        text: "New feature in Tools > Options - auto delete old box scores, to save space. Enabled by default.",
    }, {
        date: "2017-06-02",
        text: "Tweaks to the distribution of players generated in new leagues.",
    }, {
        date: "2017-05-22",
        text: "God Mode option to disable AI trades.",
    }, {
        date: "2017-05-21",
        text: "After many long years, Baskteball GM finally runs in Safari, which means it finally runs on iPhones and iPads! [[1]](https://old.reddit.com/r/BasketballGM/comments/6ckd4y/basketball_gm_might_finally_work_on_ios/)",
    }, {
        date: "2017-04-21",
        text: "AI-to-AI trades.",
        big: true,
    }, {
        date: "2017-04-08",
        text: "Added icon to open a little popup window with ratings and stats next to each player's name. [[1]](https://old.reddit.com/r/BasketballGM/comments/6438ke/if_there_was_a_little_summary_of_ratingsstats/)",
        big: true,
    }, {
        date: "2017-04-01",
        text: "You can apply filters to one or more columns of most tables. [[1]](https://basketball-gm.com/blog/2017/04/basketball-gm-4-0-is-here/) [[2]](https://old.reddit.com/r/BasketballGM/comments/61h6gy/people_were_talking_about_table_filtering/)",
    }, {
        date: "2017-04-01",
        text: "Basketball GM 4.0 brings some absolutely massive performance improvements. [[1]](https://basketball-gm.com/blog/2017/04/basketball-gm-4-0-is-here/) [[2]](https://basketball-gm.com/blog/2017/03/basketball-gm-4-0-beta/) [[3]](https://basketball-gm.com/blog/2017/03/basketball-gm-4-0-beta-2/) [[4]](https://basketball-gm.com/blog/2017/04/basketball-gm-4-0-technical-details/) [[5]](https://old.reddit.com/r/BasketballGM/comments/62txdy/basketball_gm_40_is_here_this_is_not_a_joke/) [[6]](https://old.reddit.com/r/BasketballGM/comments/5zgrv9/basketball_gm_40_beta/) [[7]](https://old.reddit.com/r/BasketballGM/comments/61bwl9/basketball_gm_40_beta_2/) [[8]](https://old.reddit.com/r/BasketballGM/comments/6332dz/basketball_gm_40_technical_details_caching_shared/) [[9]](https://old.reddit.com/r/BasketballGM/comments/5xb9v9/holy_shit_you_guys_have_no_idea_what_i_just/)",
        big: true,
    }, {
        date: "2017-03-30",
        text: "Fix finals home/away teams when seeds are the same.",
    }, {
        date: "2017-03-25",
        text: "Home/away teams in playoff series are set by seed, not winning percentage.",
    }, {
        date: "2016-10-28",
        text: "Allow editing a player's college and year of death in God Mode.",
    }, {
        date: "2016-09-11",
        text: "Various UI improvements resulting from rewriting the UI code from Knockout.js to React. [[1]](https://old.reddit.com/r/BasketballGM/comments/52a1hf/requesting_a_little_more_beta_testing/) [[2]](https://old.reddit.com/r/BasketballGM/comments/4wg3dh/help_me_with_a_little_beta_testing/) [[3]](https://old.reddit.com/r/BasketballGM/comments/4ve88g/some_behindthescenes_ui_changes_let_me_know_if/)",
    }, {
        date: "2016-08-30",
        text: "Added footers to the player salaries table on the Team Finances page showing the total salary owed and the free cap space each season.",
    }, {
        date: "2016-08-13",
        text: "Add highlighting to team stats page based on rank.",
    }, {
        date: "2016-08-13",
        text: "Show team records on the Schedule page.",
    }, {
        date: "2016-08-12",
        text: "Display team payrolls by their offers on the Trading Block page.",
    }, {
        date: "2016-08-08",
        text: "On League Dashboard, show games remaining and percentage of season completed.",
    }, {
        date: "2016-07-27",
        text: "Fix display of custom conference names on Playoffs page.",
    }, {
        date: "2016-07-23",
        text: "Fix Negotiation page on small screens.",
    }, {
        date: "2016-07-09",
        text: "Fix attendance formula to be responsive to salary cap.",
    }, {
        date: "2016-07-09",
        text: "Default salary cap is now $90M, max salary is now $30M. [[1]](https://basketball-gm.com/blog/2016/07/default-salary-cap-is-now-90m-max-salary-is-now-30m/) [[2]](https://old.reddit.com/r/BasketballGM/comments/4s1z6c/default_salary_cap_is_now_90m/)",
    }, {
        date: "2016-07-05",
        text: "Fix setting ages and seasons for draft prospects in league files that start after the draft.",
    }, {
        date: "2016-06-19",
        text: "Fix draft lottery in leagues with small number of teams.",
    }, {
        date: "2016-06-18",
        text: "More customization options: conferences, divisions, and playoff length. [[1]](https://basketball-gm.com/blog/2016/06/more-customization-options-conferences-divisions-and-playoff-length/) [[2]](https://old.reddit.com/r/BasketballGM/comments/4oqxhm/more_customization_options_conferences_divisions/)",
    }, {
        date: "2016-06-14",
        text: "Fixed tragic deaths, which actually had been broken for a little while. Also added a bunch of new deaths. [[1]](https://old.reddit.com/r/BasketballGM/comments/4o4vp8/random_deaths_were_actually_broken_for_a_while/)",
    }, {
        date: "2016-06-13",
        text: "More realistic player names, including international players! [[1]](https://basketball-gm.com/blog/2016/06/more-realistic-player-names-including-international-players/) [[2]](https://old.reddit.com/r/BasketballGM/comments/4ny7n8/more_realistic_player_names_including/)",
        big: true,
    }, {
        date: "2016-06-04",
        text: "Logos for default teams. [[1]](https://basketball-gm.com/blog/2016/06/logos-for-default-teams/) [[2]](https://old.reddit.com/r/BasketballGM/comments/4ml7n2/logos_are_done_and_live/)",
    }, {
        date: "2016-05-28",
        text: "Improved \"Shuffle Rosters\" for new leagues. [[1]](https://basketball-gm.com/blog/2016/05/improved-shuffle-rosters-for-new-leagues/) [[2]](https://old.reddit.com/r/BasketballGM/comments/4lgmfd/improved_shuffle_rosters_for_new_leagues/)",
    }, {
        date: "2016-05-19",
        text: "If a player wins an award for >2 years, it's shown as like 2015-2020 rather than 2015,2016,2017,2018,2019,2020. [[1]](https://old.reddit.com/r/BasketballGM/comments/4k5kkl/a_couple_minor_improvements/)",
    }, {
        date: "2016-05-19",
        text: "League leaders for scoring, rebounding, assists, steals, and blocks are tracked like awards. [[1]](https://old.reddit.com/r/BasketballGM/comments/4k5kkl/a_couple_minor_improvements/)",
    }, {
        date: "2016-04-15",
        text: "Added best record and worst record to Team History page.",
    }, {
        date: "2016-04-12",
        text: "Game simulation performance improvements. [[1]](https://basketball-gm.com/blog/2016/04/game-simulation-performance-improvements/) [[2]](https://old.reddit.com/r/BasketballGM/comments/4ejbby/game_simulation_performance_improvements/)",
    }, {
        date: "2016-03-03",
        text: "Add draft pick to Hall of Fame table.",
    }, {
        date: "2016-02-06",
        text: "Ten new options in God Mode. [[1]](https://basketball-gm.com/blog/2016/02/new-options-in-god-mode/) [[2]](https://old.reddit.com/r/BasketballGM/comments/44hdzs/new_options_in_god_mode/)",
    }, {
        date: "2016-01-31",
        text: "Left and right arrows move between games in Game Log.",
    }, {
        date: "2016-01-31",
        text: "Serious injuries can lead to a decrease in athleticism ratings. [[1]](https://basketball-gm.com/blog/2016/01/injuries-can-have-long-term-effects/) [[2]](https://old.reddit.com/r/BasketballGM/comments/43jj76/injuries_can_have_longterm_effects/)",
    }, {
        date: "2016-01-30",
        text: "Tweak the C/FC assignment algorithm. [[1]](https://old.reddit.com/r/BasketballGM/comments/4361vz/does_anyone_else_notice_that_there_are_no_good/czfrl2b)",
    }, {
        date: "2016-01-27",
        text: "Game-winning and OT-forcing shots are now tracked in player feats.",
    }, {
        date: "2016-01-26",
        text: "Round all contracts to the nearest $50k.",
    }, {
        date: "2016-01-12",
        text: "New contract negotiation system, with predefined options rather than an actual negotiation. [[1]](https://old.reddit.com/r/BasketballGM/comments/40q8rc/help_beta_test_new_contract_negotiation_feature/)",
    }, {
        date: "2015-12-12",
        text: "Fixed ordering of matchups in playoff preview during the regular season. [[1]](https://old.reddit.com/r/BasketballGM/comments/3wkn89/longawaited_new_feature/)",
    }, {
        date: "2015-09-16",
        text: "New pages: Transactions, Team Records, and Award Records! [[1]](https://old.reddit.com/r/BasketballGM/comments/3l8jme/new_pages_transactions_team_records_awards_records/)",
    }, {
        date: "2015-08-31",
        text: "Added new tragic deaths.",
    }, {
        date: "2015-08-12",
        text: "Luxury tax proceeds are distributed to teams under the limit. [[1]](https://old.reddit.com/r/BasketballGM/comments/3grvsm/a_few_minor_improvements/)",
    }, {
        date: "2015-08-12",
        text: "There are now notifications about the draft lottery (I still eventually want a dedicated page for this, but it's better than nothing). [[1]](https://old.reddit.com/r/BasketballGM/comments/3grvsm/a_few_minor_improvements/)",
    }, {
        date: "2015-08-12",
        text: "Notification bubbles are on the right, so they don't overlap with the browser's URL tooltip. [[1]](https://old.reddit.com/r/BasketballGM/comments/3grvsm/a_few_minor_improvements/)",
    }, {
        date: "2015-05-30",
        text: "Players who qualify for PG and C are assigned to F, not GF.",
    }, {
        date: "2015-05-21",
        text: "Fixes to player positions, heights, and weights. [[1]](https://basketball-gm.com/blog/2015/05/fixes-to-player-positions-heights-and-weights/) [[2]](https://old.reddit.com/r/BasketballGM/comments/36tvpo/fixes_to_player_positions_heights_and_weights/)",
    }, {
        date: "2015-05-06",
        text: "New stats: plus/minus and blocks against. [[1]](https://old.reddit.com/r/BasketballGM/comments/354mub/new_feature_plusminus_also_blocks_against/)",
    }, {
        date: "2015-05-05",
        text: "Game simulation is based on a clock, not a predefined number of possessions.",
    }, {
        date: "2015-04-25",
        text: "Improve trading block performance. [[1]](https://old.reddit.com/r/BasketballGM/comments/33vgh0/hows_the_trading_block_working_on_leagues_with/)",
    }, {
        date: "2015-04-22",
        text: "Make a player's injury editable in God Mode.",
    }, {
        date: "2015-04-22",
        text: "Fix ticket revenue share computation for away teams.",
    }, {
        date: "2015-04-17",
        text: "All-Rookie Teams.",
    }, {
        date: "2015-04-12",
        text: "Each player has a small chance of dying a tragic death.",
        big: true,
    }, {
        date: "2015-03-29",
        text: "Customize generated player names in a league file. [[1]](https://basketball-gm.com/blog/2015/03/customize-random-names/) [[2]](https://old.reddit.com/r/BasketballGM/comments/30p852/customize_random_names/)",
    }, {
        date: "2015-03-21",
        text: "New feature, Multi Team Mode, that allows you to control more than one team in a league. [[1]](https://basketball-gm.com/blog/2015/03/new-feature-multi-team-mode/) [[2]](https://old.reddit.com/r/BasketballGM/comments/2zvg4q/new_feature_multi_team_mode/)",
    }, {
        date: "2015-03-18",
        text: "Fix YWT calculation when drafting your own player in fantasy draft by not adding an extra stats row in that situation (should also help cutting and re-signing a player in the same season)",
    }, {
        date: "2015-03-15",
        text: "Go to Tools > Screenshot and it will save a screenshot of your current page to Imgur. [[1]](https://basketball-gm.com/blog/2015/03/screenshots/) [[2]](https://old.reddit.com/r/BasketballGM/comments/2z66rh/new_feature_screenshots/)",
    }, {
        date: "2015-02-07",
        text: "Simulate through multiple seasons in one click at Tools > Auto Play Seasons. [[1]](https://basketball-gm.com/blog/2015/02/simulate-through-multiple-seasons-in-one-click/) [[2]](https://old.reddit.com/r/BasketballGM/comments/2v4o5q/simulate_through_multiple_seasons_in_one_click/)",
        big: true,
    }, {
        date: "2015-02-06",
        text: "Fixed a trade AI bug that applied a penalty in the wrong direction for \"4 quarters for a dollar\" trades.",
    }, {
        date: "2015-02-04",
        text: "New feature: Statistical Feats. Triple doubles, 5x5s, 50 point games, etc.  [[1]](https://basketball-gm.com/blog/2015/02/new-feature-statistical-feats/) [[2]](https://old.reddit.com/r/BasketballGM/comments/2upz55/new_feature_statistical_feats/)",
        big: true,
    }, {
        date: "2015-01-31",
        text: "Easy spreadsheet stats export from Tools > Export Stats. [[1]](https://basketball-gm.com/blog/2015/01/easy-stats-export/) [[2]](https://old.reddit.com/r/BasketballGM/comments/2ub9zh/new_feature_easy_stats_export_from_tools_export/)",
    }, {
        date: "2015-01-18",
        text: "Add Game Score to box scores.",
    }, {
        date: "2015-01-14",
        text: "Highlights user's picks in the \"Draft Results\" list during the draft.",
    }, {
        date: "2015-01-12",
        text: "Added Last Season to Team History table.",
    }, {
        date: "2015-01-11",
        text: "Transaction history is shown on player profile pages. [[1]](https://old.reddit.com/r/BasketballGM/comments/2s4hph/new_feature_player_transaction_logs/)",
    }, {
        date: "2015-01-10",
        text: "Added \"four factors\" to box scores. [[1]](https://old.reddit.com/r/BasketballGM/comments/2s0qbb/four_factors_shown_in_all_box_scores/)",
    }, {
        date: "2015-01-10",
        text: "Fix bugs related to unreliable transition between game phases/seasons. [[1]](https://old.reddit.com/r/BasketballGM/comments/2rz4v6/there_should_be_less_glitches_when_switching/)",
    }, {
        date: "2015-01-08",
        text: "Fix bug where contending/rebuilding strategies were accidentally assigned randomly in new leagues. [[1]](https://old.reddit.com/r/BasketballGM/comments/2rt5bq/first_contribution_to_basketball_gm_since_i/)",
    }, {
        date: "2015-01-04",
        text: "Fix bug where salary was not updated for user's team in trade.",
    }, {
        date: "2014-12-05",
        text: "20% faster game simulation performance. [[1]](https://basketball-gm.com/blog/2014/12/basketball-gm-3-4-released-20-faster-game-simulations-beta-is-over/) [[2]](https://basketball-gm.com/blog/2014/11/20-faster-game-simulation-try-the-beta-now/) [[3]](https://old.reddit.com/r/BasketballGM/comments/2of8ll/basketball_gm_34_released_20_faster_game/) [[4]](https://old.reddit.com/r/BasketballGM/comments/2l03b5/20_faster_game_simulation_try_the_beta_now/)",
        big: true,
    }, {
        date: "2014-11-04",
        text: "Show injured players at the bottom of the box score.",
    }, {
        date: "2014-09-28",
        text: "Revamped player development algorithm. [[1]](https://basketball-gm.com/blog/2014/09/revamped-player-development-algorithm/) [[2]](https://old.reddit.com/r/BasketballGM/comments/2hqitc/revamped_player_development_algorithm_finally/) [[3]](https://old.reddit.com/r/BasketballGM/comments/2he7vv/another_update_to_the_player_development_beta/) [[4]](https://old.reddit.com/r/BasketballGM/comments/2e1jqv/improved_player_development_beta_updated_please/) [[5]](https://old.reddit.com/r/BasketballGM/comments/2dhwxy/beta_testers_needed_help_improve_player/)",
        big: true,
    }, {
        date: "2014-09-08",
        text: "Slightly decrease contracts.",
    }, {
        date: "2014-08-05",
        text: "More 3 point shooting.",
    }, {
        date: "2014-08-05",
        text: "After lottery, draft order is by record, not playoff performance.",
    }, {
        date: "2014-08-04",
        text: "Awards are now calculated before players retire, so retiring players are still eligible.",
    }, {
        date: "2014-07-30",
        text: "Default to selecting the same new team as last time when starting a new league.",
    }, {
        date: "2014-07-30",
        text: "Allow you to view any team's schedule on the Schedule page, not just your team.",
    }, {
        date: "2014-07-30",
        text: "Performance and stability improvements. [[1]](https://old.reddit.com/r/BasketballGM/comments/2c7hme/performance_and_stability/)",
    }, {
        date: "2014-07-19",
        text: "Contracts are editable in create/edit player.",
    }, {
        date: "2014-07-12",
        text: "New feature: Power Rankings. [[1]](https://old.reddit.com/r/BasketballGM/comments/2aijfj/new_feature_power_rankings_and_some_other_minor/)",
    }, {
        date: "2014-07-05",
        text: "New feature: God Mode, which allows you to have more control over your league. [[1]](https://basketball-gm.com/blog/2014/07/new-feature-god-mode/) [[2]](https://old.reddit.com/r/BasketballGM/comments/29xjb5/new_feature_god_mode/)",
        big: true,
    }, {
        date: "2014-06-15",
        text: "Custom draft class import. [[1]](https://basketball-gm.com/blog/2014/06/new-customization-features-full-league-importexport-and-draft-class-import/) [[2]](https://old.reddit.com/r/BasketballGM/comments/2893s0/new_feature_custom_draft_classes/)",
    }, {
        date: "2014-06-02",
        text: "Full league import/export. [[1]](https://basketball-gm.com/blog/2014/06/new-customization-features-full-league-importexport-and-draft-class-import/) [[2]](https://old.reddit.com/r/BasketballGM/comments/275zwp/fairly_major_new_feature_needs_testing_export/)",
        big: true,
    }, {
        date: "2014-05-24",
        text: "Redesigned dashboard. [[1]](https://old.reddit.com/r/BasketballGM/comments/26dlwo/dashboard_redesign/)",
    }, {
        date: "2014-05-04",
        text: "Slight change to game simulation - your best players will score more. [[1]](https://old.reddit.com/r/BasketballGM/comments/24qtog/slight_change_to_game_simulation_your_best/)",
    }, {
        date: "2014-05-01",
        text: "Fun new Donald Sterling-inspired owner message. [[1]](https://old.reddit.com/r/BasketballGM/comments/24ikkt/fun_new_donald_sterlinginspired_owner_message/)",
    }, {
        date: "2014-04-27",
        text: "Filter by team in Player Stats and Player Ratings pages.",
    }, {
        date: "2014-04-26",
        text: "Redesigned Schedule page.",
    }, {
        date: "2014-04-25",
        text: "Make healthRank a little less impactful in determining injury duration.",
    }, {
        date: "2014-03-18",
        text: "Show conference ranks in division standings, which is particularly important for mobile where conference standings are not shown.",
    }, {
        date: "2014-03-09",
        text: "Decrease the recently-added trade fudge factor by 50%.",
    }, {
        date: "2014-03-09",
        text: "In trades, AI teams value their assets more, and they value combinations of players less.",
    }, {
        date: "2014-03-08",
        text: "Add support for leagues with more than 30 teams.",
    }, {
        date: "2014-03-08",
        text: "Players should very rarely refuse to re-sign after winning the title.",
    }, {
        date: "2014-03-05",
        text: "New \"Upcoming Free Agents\" page. [[1]](https://old.reddit.com/r/BasketballGM/comments/1zp11c/minor_new_feature_upcoming_free_agents_page/)",
    }, {
        date: "2014-03-04",
        text: "Warning when proceeding to free agency while some players remaining un-re-signed.",
    }, {
        date: "2014-03-03",
        text: "Achievements! Also, an account system to store achievements. [[1]](https://basketball-gm.com/blog/2014/03/new-feature-achievements/) [[2]](https://old.reddit.com/r/BasketballGM/comments/1zggeq/new_feature_achievements/)",
    }, {
        date: "2014-02-24",
        text: "Add point differential to team stats.",
    }, {
        date: "2014-02-24",
        text: "Remove double counting of rebounding synergy bonus.",
    }, {
        date: "2014-02-22",
        text: "New league history summary page, showing all seasons at once. [[1]](https://old.reddit.com/r/BasketballGM/comments/1ynj2c/minor_new_feature_league_history_overview/)",
    }, {
        date: "2014-02-19",
        text: "Synergy depends on player rating values, not on skill labels. So a player who barely gets a skill label and a player who barely misses it will be almost identical. [[1]](https://basketball-gm.com/blog/2014/02/what-do-skills-mean/) [[2]](https://old.reddit.com/r/BasketballGM/comments/1ye471/what_do_skills_mean/)",
    }, {
        date: "2014-02-17",
        text: "Rookie of the Year should not depend on wins, otherwise weird stuff can happen like a player who got 0 minutes on a great team winning.",
    }, {
        date: "2014-02-17",
        text: "Improve trading block performance.",
    }, {
        date: "2014-02-15",
        text: "New improved trade AI. [[1]](https://basketball-gm.com/blog/2014/02/new-improved-trade-ai/) [[2]](https://old.reddit.com/r/BasketballGM/comments/1xztme/new_improved_trade_ai_tons_of_loopholes_fixed_but/)",
    }, {
        date: "2014-01-31",
        text: "Injuries heal even if the player's team doesn't play that day.",
    }, {
        date: "2014-01-26",
        text: "New Feature: Create A Player. [[1]](https://old.reddit.com/r/BasketballGM/comments/1w7u8o/new_feature_create_a_player_please_help_test_it/)",
    }, {
        date: "2014-01-21",
        text: "New team regions and names. [[1]](https://basketball-gm.com/blog/2014/01/new-team-regions-and-names/) [[2]](https://old.reddit.com/r/BasketballGM/comments/1vsg92/new_team_regions_and_names_final/)",
    }, {
        date: "2014-01-21",
        text: "New feature: Watch List. [[1]](https://old.reddit.com/r/BasketballGM/comments/1vscy1/new_feature_watch_list/)",
    }, {
        date: "2014-01-15",
        text: " Tweak steal and turnover distributions.",
    }, {
        date: "2014-01-14",
        text: "Team abbreviations are customizable at Tools > Edit Team Info. [[1]](https://old.reddit.com/r/BasketballGM/comments/1v8x1p/very_minor_new_feature_you_can_customize_team/)",
    }, {
        date: "2014-01-13",
        text: "Three years of future draft prospects are generated ahead-of-time, and are viewable on the new Draft Scouting page. [[1]](http://basketball-gm.com/blog/2014/01/anyone-want-to-beta-test-new-draft-scouting-features/) [[2]](https://old.reddit.com/r/BasketballGM/comments/1uzyzy/anyone_want_to_beta_test_new_draft_scouting/) [[3]](https://old.reddit.com/r/BasketballGM/comments/1v56z4/new_draft_scouting_features_are_live_in_all/)",
        big: true,
    }, {
        date: "2014-01-06",
        text: "Add option to delete old data and improve performance. [[1]](https://basketball-gm.com/blog/2014/01/performance-issues-in-old-leagues/) [[2]](https://old.reddit.com/r/BasketballGM/comments/1ul7dd/performance_issues_in_old_leagues/)",
    }, {
        date: "2014-01-05",
        text: "Progress bar while waiting for trading block offers.",
    }, {
        date: "2014-01-03",
        text: "New options on the player stats page: view career totals, career averages, season totals, per 36 minute stats. [[1]](https://old.reddit.com/r/BasketballGM/comments/1ud5qp/new_options_on_the_player_stats_page_view_career/)",
    }, {
        date: "2013-12-22",
        text: "Quick access menu on the left on large screens. [[1]](https://old.reddit.com/r/BasketballGM/comments/1thxau/quick_access_menu_on_large_screens/)",
    }, {
        date: "2013-12-21",
        text: "Added Finals MVP award.",
    }, {
        date: "2013-12-21",
        text: "Base roster sorting on player value (no potential, just ovr and stats) rather than just ovr.",
    }, {
        date: "2013-12-14",
        text: "Show attendance in box score.",
    }, {
        date: "2013-12-11",
        text: "Show player moods in the Free Agents table.",
    }, {
        date: "2013-12-10",
        text: "Display change in ovr and pot in the Roster table.",
    }, {
        date: "2013-12-08",
        text: "Spread out the foul distribution a little bit more. Fewer players foul out, fewer players get 0 fouls.",
    }, {
        date: "2013-12-08",
        text: " GMs get fired after playoffs, not before regular season. And you get a new intro message after you start with a new team.",
    }, {
        date: "2013-12-07",
        text: "Tweak contracts formula to fix issue wtih too many free agents going unsigned.",
    }, {
        date: "2013-12-03",
        text: "Keyboard shortcut: alt+p -> click first item of play menu.",
    }, {
        date: "2013-11-27",
        text: "Add support for custom rosters to define the URL to a logo for each team.",
    }, {
        date: "2013-11-26",
        text: "Highlight players on court in live play-by-play.",
    }, {
        date: "2013-11-26",
        text: "Better awards formulas, based on EWA and wins. [[1]](https://old.reddit.com/r/BasketballGM/comments/1rh71z/minor_new_feature_better_awards_formula/)",
    }, {
        date: "2013-11-24",
        text: "Notification bubbles. [[1]](https://old.reddit.com/r/BasketballGM/comments/1re3ea/new_feature_notification_bubbles/)",
    }, {
        date: "2013-11-20",
        text: "Smarter substitution patterns, based on stats too, not just ratings. [[1]](https://old.reddit.com/r/BasketballGM/comments/1r3oyl/very_minor_update_smarter_substitutions/)",
    }, {
        date: "2013-11-18",
        text: "Show EWA in Team History and Hall of Fame pages.",
    }, {
        date: "2013-11-10",
        text: "Allow trades that go over the roster size limit, and check roster size  limit before starting game simulation.",
    }, {
        date: "2013-11-03",
        text: "Live play-by-play simulation. [[1]](https://old.reddit.com/r/BasketballGM/comments/1pu92x/new_feature_live_playbyplay_simulation/)",
    }, {
        date: "2013-11-01",
        text: "Fixed a bug that allowed AI teams to go over the cap to sign free agents.",
    }, {
        date: "2013-11-25",
        text: "Fixed various bugs introduced with the recent free agency changes. [[1]](https://old.reddit.com/r/BasketballGM/comments/1p8ovm/free_agency_fixes/)",
    }, {
        date: "2013-11-22",
        text: "Revamped free agency, which now gradually happens over 30 days rather than all at once. [[1]](https://old.reddit.com/r/BasketballGM/comments/1p0sa8/new_feature_extended_free_agency/)",
        big: true,
    }, {
        date: "2013-10-15",
        text: "New \"Fantasy Draft\" feature. [[1]](https://old.reddit.com/r/BasketballGM/comments/1ojn4u/new_experimental_feature_fantasy_draft/)",
    }, {
        date: "2013-10-11",
        text: "Once you've loaded the game in your browser, it should be cached so that it loads in the future even if you're offline. [[1]](https://old.reddit.com/r/BasketballGM/comments/1o9boe/offline_play/)",
    }, {
        date: "2013-10-06",
        text: "Changes in player development (7 footers with perimeter skills are much less common). [[1]](https://old.reddit.com/r/BasketballGM/comments/1nvwcp/changes_in_player_development_7_footers_with/)",
    }, {
        date: "2013-10-01",
        text: "New UI - prettier, less glitchy, and mobile-friendly. [[1]](https://old.reddit.com/r/BasketballGM/comments/1nk34h/new_ui_prettier_less_glitchy_and_mobilefriendly/)",
        big: true,
    }, {
        date: "2013-09-21",
        text: "New features: \"Trading Block\" and a better \"What would make this deal work?\" button. [[1]](https://old.reddit.com/r/BasketballGM/comments/1mves9/new_features_trading_block_and_a_better_what/)",
        big: true,
    }, {
        date: "2013-09-02",
        text: " Releasing a just-drafted player before the regular season starts incurs no penalty - basically the contract is not guaranteed until the regular season.",
    }, {
        date: "2013-09-02",
        text: "Increase luxury tax from 50% to 150%.",
    }, {
        date: "2013-09-01",
        text: "Allow user to randomize teams when importing custom rosters.",
    }, {
        date: "2013-09-01",
        text: "Get rid of the ability to \"Buy Out\" contracts because it made tanking too easy.",
    }, {
        date: "2013-08-31",
        text: "New formula for overall ratings. [[1]](https://old.reddit.com/r/BasketballGM/comments/1lhojx/new_formula_for_overall_ratings/)",
    }, {
        date: "2013-08-29",
        text: "New \"Edit Team Info\" page.",
    }, {
        date: "2013-08-29",
        text: "Steeper declines in player value for aging players.",
    }, {
        date: "2013-08-28",
        text: "A little lower contracts across the board.",
    }, {
        date: "2013-08-27",
        text: "After being fired, the user has the option of being hired by a bad team, rather than just having the league be over.",
    }, {
        date: "2013-08-25",
        text: "Added EWA calculation, based on PER. Displayed in leaders, player stats, and player pages. This will eventually be used for awards.",
    }, {
        date: "2013-08-24",
        text: "Player valuation changes. [[1]](https://old.reddit.com/r/BasketballGM/comments/1l0v45/player_valuation_changes/)",
    }, {
        date: "2013-08-24",
        text: "Grouped awards by type in player page, which makes long awards lists more readable.",
    }, {
        date: "2013-08-11",
        text: "Fixed a couple things about exported rosters for past seasons: rosters reflect past not current players, and startingSeason is correct.",
    }, {
        date: "2013-08-11",
        text: "Increase min height by 1 inch.",
    }, {
        date: "2013-08-11",
        text: "Fix floor on 3 point percentage.",
    }, {
        date: "2013-08-10",
        text: "Tweak game simulation to encourage more balanced rosters.",
    }, {
        date: "2013-08-10",
        text: "Teams draft based on \"value\" which incorporates age, not just ratings.",
    }, {
        date: "2013-08-08",
        text: "Allow teams to be defined in custom roster files.",
    }, {
        date: "2013-08-07",
        text: "Make counter-offer button faster by only testing up to 5 assets.",
    }, {
        date: "2013-08-05",
        text: "AI teams will not trade away more than two draft picks in a single trade. [[1]](https://old.reddit.com/r/BasketballGM/comments/1jr5zr/closing_some_loopholes/)",
    }, {
        date: "2013-08-05",
        text: "Default ratings for bigs lowered by 5 across the board. [[1]](https://old.reddit.com/r/BasketballGM/comments/1jr5zr/closing_some_loopholes/)",
    }, {
        date: "2013-08-02",
        text: "Optionally allow real images to be used for players in custom roster files, rather than always using randomly-generated faces.",
    }, {
        date: "2013-08-01",
        text: "Reduce importance of interior defense and rebounding skills.",
    }, {
        date: "2013-08-01",
        text: "Reset playing time modifier when a player leaves the user's team.",
    }, {
        date: "2013-08-01",
        text: "Taller bigs.",
    }, {
        date: "2013-08-01",
        text: "Fewer players demanding contracts slightly above the minimum.",
    }, {
        date: "2013-08-01",
        text: "No fuzz for height rating.",
    }, {
        date: "2013-08-01",
        text: "League championships show up in Awards section on player pages.",
    }, {
        date: "2013-08-01",
        text: "Add a three season grace period in new leagues where you cannot be fired.",
    }, {
        date: "2013-07-30",
        text: "Fixed bug where coaching spending had the opposite of its intended effect for improving players.",
    }, {
        date: "2013-07-28",
        text: "Fixed bug where playing time would be set to 0 if you view an old roster before viewing the current one.",
    }, {
        date: "2013-07-27",
        text: "Fixed contract lengths for exported rosters.",
    }, {
        date: "2013-07-26",
        text: " Automatically add minimum contract players to the AI teams before the season starts if they are below the minimum roster limit.",
    }, {
        date: "2013-07-19",
        text: "Make free agents a bit more adversarial.",
    }, {
        date: "2013-07-17",
        text: "Player contract demands are based on ratings and stats, not just ratings. [[1]](https://old.reddit.com/r/BasketballGM/comments/1igs9u/new_version_310/)",
    }, {
        date: "2013-07-17",
        text: "Future draft picks can be traded. [[1]](https://old.reddit.com/r/BasketballGM/comments/1igs9u/new_version_310/)",
        big: true,
    }, {
        date: "2013-07-17",
        text: "\"What would make you agree to this deal?\" button to get counter-offers in trade negotiations. [[1]](https://old.reddit.com/r/BasketballGM/comments/1igs9u/new_version_310/)",
        big: true,
    }, {
        date: "2013-07-17",
        text: "GMs of other teams pursue different strategies depending on if they are contending or rebuilding. [[1]](https://old.reddit.com/r/BasketballGM/comments/1igs9u/new_version_310/)",
        big: true,
    }, {
        date: "2013-07-14",
        text: "Strongly discourage AI teams from trading draft picks early in the game, since there is too much uncertainty then.",
    }, {
        date: "2013-07-05",
        text: "New method of calculating salaries based on player value.",
    }, {
        date: "2013-06-16",
        text: "Hall of Fame.",
        big: true,
    }, {
        date: "2013-06-14",
        text: "Fewer extreme tall/short players.",
    }, {
        date: "2013-06-07",
        text: "Support for starting a league with custom rosters and exporting the rosters from a current league. [[1]](https://old.reddit.com/r/BasketballGM/comments/1fw4il/custom_rosters_exporting_rosters/)",
    }, {
        date: "2013-05-26",
        text: "Immediately sub off a player with 6 fouls. Otherwise, more than 6 fouls could happen.",
    }, {
        date: "2013-05-20",
        text: "Faster UI, particularly in the game log.",
    }, {
        date: "2013-05-15",
        text: "Change playing time for your players from the Roster page.",
    }, {
        date: "2013-05-14",
        text: "Show record and playoffs results in the Roster page.",
    }, {
        date: "2013-05-13",
        text: "Added all players in team history to the Team History page and you can switch to other teams besides your own.",
    }, {
        date: "2013-05-05",
        text: "Player value is logarithmic when making trades, so it is harder to steal top players from AI teams.",
    }, {
        date: "2013-04-08",
        text: "Added NBA-like draft lottery.",
        big: true,
    }, {
        date: "2013-04-06",
        text: "Players foul out with 6 fouls.",
    }, {
        date: "2013-03-23",
        text: "More refined financial data, such as different classes of revenue and expenses, and a new Team Finances page to view it.",
        big: true,
    }, {
        date: "2013-03-23",
        text: "Injuries.",
        big: true,
    }, {
        date: "2013-03-23",
        text: "Home court advantage in game simulation",
    }, {
        date: "2013-03-23",
        text: "\"Hype\" for a team governs things like attendance and revenue.",
    }, {
        date: "2013-03-23",
        text: "Different population sizes for different regions, which influences revenue and thus game difficulty.",
    }, {
        date: "2013-03-23",
        text: "Awards and salaries from previous seasons displayed in player view.",
    }, {
        date: "2013-03-23",
        text: "More sane and less adversarial contract negotiations, with more direct feedback about what the player is thinking.",
    }, {
        date: "2013-03-23",
        text: "Settings to control various budget items, such as ticket price, scouting budget, etc.",
    }, {
        date: "2013-03-23",
        text: "\"Fuzz\" in displayed player ratings: the more spent on scouting, the more accurate the displayed ratings.",
    }, {
        date: "2013-03-23",
        text: "More historical information in player view: previous contracts and awards won.",
    }, {
        date: "2013-03-23",
        text: "Annual interactions with the owner: if you do poorly, you might get fired.",
    }, {
        date: "2013-03-23",
        text: "Free agents refuse to sign with your team if they don't like you.",
    }, {
        date: "2013-03-02",
        text: "First beta of the web-based version Basketball GM, replacing [the old downloadable version](https://basketball-gm.com/old/).",
    }
];
