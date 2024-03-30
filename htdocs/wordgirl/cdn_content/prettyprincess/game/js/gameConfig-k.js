ig.GameConfig = {
	
	locations: [
		{
			id: "village",
			realname: "Village",
			vocab: "quaint",
			chooseSound: "luteplayer_choosevillage",
			startSound: "luteplayer_welcomevillage",
			endSound: "luteplayer_donevillage",
			music: "game_music_village"
		},{
			id: "swamp",
			realname: "Swamp",
			vocab: "dreary",
			chooseSound: "luteplayer_chooseswamp",
			startSound: "luteplayer_welcomeswamp",
			endSound: "luteplayer_doneswamp",
			music: "game_music_swamp"
		},{
			id: "castle",
			realname: "Castle",
			vocab: "astounding",
			chooseSound: "luteplayer_choosecastle",
			startSound: "luteplayer_welcomecastle",
			endSound: "luteplayer_donecastle",
			music: "game_music_magic"
		},{
			id: "forest",
			realname: "Forest",
			vocab: "ominous",
			chooseSound: "luteplayer_chooseforest",
			startSound: "luteplayer_welcomeforest",
			endSound: "luteplayer_doneforest",
			music: "game_music_forest"
		},{
			id: "flowerfield",
			realname: "Field",
			vocab: "fragrant",
			chooseSound: "luteplayer_choosefield",
			startSound: "luteplayer_welcomefield",
			endSound: "luteplayer_donefield",
			music: "game_music_magic"
		}
	],

	/////////////////////////
	// Map Info
	// Willows: G (Ground), L (Low), M (Medium), H (High). These match the platform levels
	// Platfrom: L (Low), M (Medium), H (High)
	// Obstacles: See each level's codes object.

	levelData: {
		village: {
			scenery: [
				{id: "back", xFactor: -0.8, yPos: -1 },
				{id: "middle", xFactor: -0.7, yPos: 52 },
				{id: "front", xFactor: -0.3, yPos: 0 },
				{id: "ground", xFactor: 0, yPos: 466 }
			],
			codes: [
				{code: "-A-", name:"gnome"},
				{code: "-B-", name:"princesshat"},
				{code: "-C-", name:"sparklepony"},
				{code: "-D-", name:"tree"},
				{code: "-E-", name:"squirrel"},
				{code: "-F-", name:"barrel"},
				{code: "-G-", name:"spinner"},
				{code: "-H-", name:"vase"},
				{code: "-I-", name:"haystack"}
			],
			maps: [
				{
					willows:	"+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+G+,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+L+,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+M+,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+M+,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+M+,+++,+++,+++,+++",
					platforms:	"___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,_L_,___,_L_,___,_L_,___,___,___,_L_,_L_,___,_L_,_L_,___,___,___,___,___,___,___,___,___,___,___,_L_,___,_L_,___,___,___,_L_,_M_,___,___,___,___,___,___,___,___,_L_,___,_L_,___,___,___,___,___,_L_,___,___,___,___,___",
					obstacles:	"---,---,---,---,---,---,---,---,---,---,---,-E-,---,---,---,-F-,---,---,---,---,---,-A-,---,---,-A-,---,---,-A-,---,---,-A-,---,---,---,---,---,-C-,---,-G-,---,---,---,---,---,---,---,---,---,---,---,---,-B-,---,-H-,---,---,-I-,---,---,---,-D-,---,---,---,---,---,-E-,---,---,---,---,-B-,---,-F-,---,---,-D-,---,---,-I-,---,-C-,---,---,---,---,---,---,---"
				}
			],
			riddles: [
				{q: "What I am? Look and see.\nYou have a point\nwhen you wear me.", a:"princesshat", distractors: ["spinner","vase","rockinghorse"]},
				{q: "What I am? When I race,\nI always stay in the same place.", a:"rockinghorse", distractors: ["princesshat","squirrel","vase"]},
				{q: "What I am? Look for me\nscurrying 'round up a tree.", a:"squirrel", distractors: ["rockinghorse","princesshat","vase"]}
			]
		},
		swamp: {
			scenery: [
				{id: "back", xFactor: -0.8, yPos: 0 },
				{id: "middle", xFactor: -0.7, yPos: 99 },
				{id: "front", xFactor: -0.3, yPos: 56 },
				{id: "ground", xFactor: 0, yPos: 464 }
			],
			codes: [
				{code: "-A-", name:"trap"},
				{code: "-B-", name:"rock"},
				{code: "-C-", name:"dirtclump"},
				{code: "-D-", name:"tumbleweed"},
				{code: "-E-", name:"bush"},
				{code: "-F-", name:"fern"},
				{code: "-G-", name:"alligator"},
				{code: "-H-", name:"burntwood"},
				{code: "-I-", name:"hole"},
				{code: "-J-", name:"owlfence"},
				{code: "-K-", name:"spookytree1"},
				{code: "-L-", name:"spookytree2"}
			],
			maps: [
				{
					willows:	"+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+L+,+++,+++,+++,+++,+++,+++,+++,+++,+M+,+++,+++,+++,+++,+++,+G+,+++,+++,+++,+++,+++,+++,+++,+M+,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+M+,+++,+++,+++,+++,+++,+++,+++,+++,+++,+L+,+++,+++,+++,+++,+++,+M+,+++,+++,+++,+++,+++,+G+,+++,+++,+++,+++,+++,+++,+++,+++,+M+,+++,+++,+++,+++,+++,+G+,+++,+++",
					platforms:	"___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,_L_,___,___,_L_,___,___,___,_L_,___,_M_,_L_,___,_L_,___,_L_,___,_L_,___,_M_,_L_,___,_M_,___,_M_,___,_L_,___,___,___,___,___,_L_,_M_,___,_M_,_L_,___,___,___,___,_L_,___,_M_,___,_L_,___,_M_,___,_M_,___,_M_,___,_L_,___,___,___,___,___,___,_L_,___,_M_,___,_L_,___,_M_,_M_,___,_L_,___,___,___,___,___",
					obstacles:	"---,---,---,---,---,---,---,---,---,-A-,---,-C-,---,---,-F-,---,---,-D-,---,-G-,---,-J-,---,---,-E-,---,-B-,---,-I-,---,---,---,-H-,---,---,-A-,---,-L-,---,-G-,---,-F-,---,-B-,---,-D-,---,---,-K-,---,---,-E-,---,-G-,---,---,-A-,---,-D-,---,---,-E-,---,-I-,---,-B-,---,---,-A-,---,-C-,---,-D-,---,---,-J-,---,-B-,---,-A-,-F-,---,-K-,---,---,---,---,---,---"
				}
			],
			riddles: [
				{q: "What am I? Here's a clue.\nI have teeth, but I don't chew.", a:"trap", distractors: ["owlfence","bush","spookytree2"]},
				{q: "What am I? Do you know?\nI'm submerged, or mostly so.", a:"alligator", distractors: ["trap","bush","owlfence"]},
				{q: "What am I? Look around.\nI like to make a hooting sound.", a:"owlfence", distractors: ["trap","alligator","bush"]}
			]
		},
		castle: {
			scenery: [
				{id: "back", xFactor: -0.8, yPos: 0 },
				{id: "middle", xFactor: -0.7, yPos: 216 },
				{id: "front", xFactor: -0.3, yPos: -70 },
				{id: "ground", xFactor: 0, yPos: 440 }
			],
			codes: [
				{code: "-A-", name:"scepter"},
				{code: "-B-", name:"present"},
				{code: "-C-", name:"wands"},
				{code: "-D-", name:"jewels"},
				{code: "-E-", name:"dragon1"},
				{code: "-G-", name:"dragon2"},
				{code: "-H-", name:"unicorn"},
				{code: "-I-", name:"statue"},
				{code: "-J-", name:"mirror"}
			],
			maps: [
				{
					willows:	"+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+G+,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+M+,+++,+++,+++,+++,+G+,+++,+++,+M+,+++,+++,+++,+++,+++,+G+,+++,+++,+++,+++,+++,+M+,+++,+++,+++,+++,+++,+G+,+++,+++,+++,+++,+G+,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+G+,+++,+++,+++,+++,+++,+++,+++,+++,+G+,+++,+++,+G+,+++,+++",
					platforms:	"___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,_L_,_M_,___,___,_L_,___,___,_L_,_M_,___,_L_,___,___,___,___,_L_,_M_,___,_L_,___,___,___,_L_,___,_M_,___,_L_,___,___,___,___,___,___,___,___,_L_,_M_,___,_L_,___,___,___,___,_L_,___,_M_,_L_,_M_,___,_M_,_L_,___,___,___,_L_,_M_,_L_,___,___,___,___,___,_L_,___,_L_,___,___,___,___,___,___,___,___",
					obstacles:	"---,---,---,---,---,---,---,---,---,-A-,---,-D-,---,-B-,---,-D-,---,-A-,---,-C-,---,-J-,---,---,---,-H-,---,-D-,---,---,-B-,---,---,-G-,---,---,-B-,---,---,-C-,---,-I-,---,-A-,---,-E-,---,-D-,---,-C-,---,---,---,-G-,---,-A-,---,-B-,---,---,-H-,---,---,---,-I-,---,---,-D-,---,-C-,---,-D-,---,-D-,---,-E-,---,-A-,---,-H-,---,---,-B-,---,-B-,---,---,---,---"
				}
			],
			riddles: [
				{q: "What am I? Look here, wow!\nThere's something pointy\non my brow.", a:"unicorn", distractors: ["wands","present","dragon1"]},
				{q: "What in the world could I be?\nI am worn by royalty.", a:"crown", distractors: ["unicorn","present","wands"]},
				{q: "What am I? Can you tell?\nWave me round to cast a spell.", a:"wands", distractors: ["unicorn","crown","dragon1"]}
			]
		},
		forest: {
			scenery: [
				{id: "back", xFactor: -0.8, yPos: 0 },
				{id: "middle", xFactor: -0.7, yPos: 152 },
				{id: "front", xFactor: -0.3, yPos: -25 },
				{id: "ground", xFactor: 0, yPos: 506 }
			],
			codes: [
				{code: "-A-", name:"skull"},
				{code: "-B-", name:"jackolantern"},
				{code: "-C-", name:"ghosts"},
				{code: "-D-", name:"tombstone1"},
				{code: "-E-", name:"spider", hanging:true},
				{code: "-F-", name:"tombstone2"},
				{code: "-G-", name:"gargoyle"}
			],
			maps: [
				{
					willows:	"+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+L+,+++,+++,+++,+++,+++,+++,+++,+++,+G+,+++,+++,+++,+L+,+++,+++,+++,+++,+++,+++,+++,+++,+M+,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+G+,+++,+++,+++,+++,+++,+++,+++,+++,+L+,+++,+++,+++,+++,+++,+G+,+++,+++,+++,+++,+++,+++,+L+,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+G+,+++,+++",
					platforms:	"___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,_L_,___,___,___,___,___,_L_,___,_L_,___,___,_L_,___,_L_,___,_L_,___,___,___,___,_L_,___,_M_,___,_L_,___,___,_L_,___,___,___,___,___,___,___,___,_L_,___,_M_,___,_L_,___,_L_,___,_M_,___,_L_,___,___,___,___,___,_L_,___,___,_L_,___,___,_L_,___,_L_,___,_M_,___,_L_,___,___,___,___,___,___,___",
					obstacles:	"---,---,---,---,---,---,---,---,---,-C-,---,-D-,---,-A-,---,---,-E-,---,-F-,---,-C-,---,-A-,---,-G-,---,---,-D-,---,-B-,---,-A-,---,---,-F-,---,-E-,---,-G-,-D-,-B-,---,-D-,---,---,-C-,---,-A-,---,-D-,---,-G-,---,---,-F-,---,-B-,---,-E-,---,-D-,---,-A-,---,-D-,---,-C-,---,-E-,---,-F-,---,---,-B-,---,---,-C-,---,---,---,-G-,---,-A-,---,---,---,---,---,---"
				}
			],
			riddles: [
				{q: "What am I? Take a try.\nI like to dangle from up high.", a:"spider", distractors: ["ghosts","jackolantern","skull"]},
				{q: "What am I? Here's a clue.\nYou don't want me haunting you.", a:"ghosts", distractors: ["spider","skull","jackolantern"]},
				{q: "What am I? My toothy grin\nis illuminated from within.", a:"jackolantern", distractors: ["spider","ghosts","skull"]}
			]
		},
		flowerfield: {
			scenery: [
				{id: "back", xFactor: -0.8, yPos: 0 },
				{id: "middle", xFactor: -0.7, yPos: 42 },
				{id: "front", xFactor: -0.3, yPos: 235 },
				{id: "ground", xFactor: 0, yPos: 463 }
			],
			codes: [
				{code: "-A-", name:"snail"},
				{code: "-B-", name:"log"},
				{code: "-C-", name:"dirt"},
				{code: "-D-", name:"bush1"},
				{code: "-E-", name:"shrub"},
				{code: "-F-", name:"flowers"},
				{code: "-G-", name:"bonsaitree"},
				{code: "-H-", name:"bush2"},
				{code: "-I-", name:"birdbath"},
				{code: "-J-", name:"pottedplant"},
				{code: "-K-", name:"giraffe"}
			],
			maps: [
				{
					willows:	"+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+M+,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+G+,+++,+++,+++,+++,+++,+++,+++,+++,+G+,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+++,+M+,+++,+++,+++,+++,+++,+++,+G+,+++,+++,+++,+++,+++,+++,+++,+++,+++,+L+,+++,+++,+++,+++,+G+,+++,+++,+++,+M+,+++,+++,+++,+++,+++,+G+,+++,+++",
					platforms:	"___,___,___,___,___,___,___,___,___,___,___,___,___,___,___,_L_,_M_,___,_L_,___,___,___,___,___,_L_,___,_L_,___,_L_,___,___,_L_,_M_,___,_M_,_L_,___,___,___,___,___,___,___,_L_,_M_,_M_,_M_,_L_,___,_L_,___,_L_,_M_,_H_,_M_,_L_,___,_M_,___,_L_,___,___,___,_L_,___,_L_,___,_L_,_M_,___,_M_,_L_,___,_M_,_L_,___,___,___,___,_L_,_M_,___,_M_,_L_,___,___,___,___,___",
					obstacles:	"---,---,---,---,---,---,---,---,-A-,---,-C-,---,-D-,---,---,---,-E-,---,---,-I-,---,-H-,---,-F-,---,-J-,---,-B-,---,-G-,---,---,---,-K-,---,---,-A-,---,-C-,---,-H-,---,-B-,---,-F-,---,-F-,---,-G-,---,-A-,---,-A-,-J-,-A-,---,-B-,---,-K-,---,-B-,---,-D-,---,-C-,---,-H-,---,-E-,---,---,---,-J-,---,---,-B-,---,-A-,---,---,---,-I-,---,---,---,---,---,---,---"
				}
			],
			riddles: [
				{q: "What am I? All I'll say\nis in a bunch, I'm a bouquet.", a:"flowers", distractors: ["snail","log","birdbath"]},
				{q: "What am I? Listen well.\nI retreat into a shell.", a:"snail", distractors: ["log","birdbath","flowers"]},
				{q: "What am I? Can you see?\nI'm a fraction of a tree.", a:"log", distractors: ["snail","birdbath","flowers"]}
			]
		}
	},

	bossBattles: {
		questions: [
			"Which word describes the first place that you visited?",
			"Which word describes the second place that you visited?",
			"Which word describes the place where you are right now?"
		],
		locations: [
			{ id:"ice", vocab: "frigid", name: "Frigid Lake", thumb: "choice-boss-ice", chooseSound:"luteplayer_chooselake" },
			{ id:"tower", vocab: "sturdy", name: "Sturdy Tower", thumb: "choice-boss-tower", chooseSound:"luteplayer_choosetower" },
			{ id:"clouds", vocab: "gloomy", name: "Gloomy Cloud", thumb: "choice-boss-clouds", chooseSound:"luteplayer_choosecloud" }
		],
		distractors: {
			quaint: ["clumsy", "malicious"],
			astounding: ["furious", "rapid"],
			fragrant: ["diagonal", "pompous"],
			ominous: ["ridiculous", "brisk"],
			dreary: ["valuable", "scrumptious"],
			frigid: ["envious", "savvy"],
			sturdy: ["slapdash", "timid"],
			gloomy: ["nautical", "reliable"]
		}
	},

	obstacles: {
		village_spinner: { regX: 18, regY: 63, width: 130, height: 117 },
		village_barrel: { regX: 9, regY: 46, width: 107, height: 74 },
		village_haystack: { regX: 25, regY: 49, width: 149, height: 73 },
		village_sparklepony: { regX: 66, regY: 94, width: 138, height: 104 },
		village_squirrel: { regX: 20, regY: 48, width: 65, height: 37 },
		village_gnome: { regX: 13, regY: 48, width: 46, height: 113 },
		village_princesshat: { regX: 12, regY: 45, width: 41, height: 56 },
		village_tree: { regX: 48, regY: 51, width: 84, height: 237 },
		village_vase: { regX: 15, regY: 46, width: 52, height: 90 },
		swamp_tumbleweed: { regX: 25, regY: 47, width: 100, height: 68 },
		swamp_spookytree2: { regX: 60, regY: 45, width: 107, height: 223 },
		swamp_spookytree1: { regX: 77, regY: 46, width: 131, height: 184 },
		swamp_trap: { regX: 19, regY: 38, width: 81, height: 63 },
		swamp_owlfence: { regX: 30, regY: 62, width: 186, height: 86 },
		swamp_rock: { regX: 17, regY: 26, width: 107, height: 68 },
		swamp_fern: { regX: 9, regY: 46, width: 65, height: 127 },
		swamp_dirtclump: { regX: 22, regY: 46, width: 114, height: 63 },
		swamp_hole: { regX: 7, regY: 17, width: 201, height: 29 },
		swamp_bush: { regX: 18, regY: 47, width: 135, height: 71 },
		swamp_burntwood: { regX: 26, regY: 53, width: 127, height: 102 },
		swamp_alligator: { regX: 25, regY: 27, width: 202, height: 54 },
		forest_tombstone2: { regX: 14, regY: 56, width: 95, height: 107 },
		forest_tombstone1: { regX: 40, regY: 47, width: 96, height: 116 },
		forest_spider: { regX: 8, regY: 351, width: 104, height: 69 },
		forest_skull: { regX: 15, regY: 5, width: 64, height: 72 },
		forest_jackolantern: { regX: 16, regY: 46, width: 101, height: 91 },
		forest_ghosts: { regX: 30, regY: 42, width: 152, height: 89 },
		forest_gargoyle: { regX: 22, regY: 58, width: 98, height: 106 },
		flowerfield_pottedplant: { regX: 38, regY: 48, width: 101, height: 218 },
		flowerfield_shrub: { regX: 15, regY: 49, width: 56, height: 131 },
		flowerfield_giraffe: { regX: 65, regY: 64, width: 146, height: 176 },
		flowerfield_snail: { regX: 16, regY: 19, width: 66, height: 44 },
		flowerfield_flowers: { regX: 35, regY: 49, width: 164, height: 104 },
		flowerfield_log: { regX: 12, regY: 28, width: 121, height: 53 },
		flowerfield_dirt: { regX: 24, regY: 48, width: 130, height: 72 },
		flowerfield_bush2: { regX: 37, regY: 54, width: 170, height: 61 },
		flowerfield_bush1: { regX: 24, regY: 49, width: 137, height: 78 },
		flowerfield_bonsaitree: { regX: 64, regY: 61, width: 132, height: 118 },
		flowerfield_birdbath: { regX: 47, regY: 60, width: 137, height: 150 },
		castle_wands: { regX: 28, regY: 40, width: 59, height: 84 },
		castle_unicorn: { regX: 50, regY: 72, width: 135, height: 170 },
		castle_statue: { regX: 20, regY: 54, width: 107, height: 247 },
		castle_dragon2: { regX: 25, regY: 56, width: 120, height: 210 },
		castle_scepter: { regX: 17, regY: 46, width: 42, height: 61 },
		castle_present: { regX: 14, regY: 30, width: 93, height: 60 },
		castle_jewels: { regX: 14, regY: 58, width: 157, height: 59 },
		castle_dragon1: { regX: 0, regY: 52, width: 135, height: 81 },
		castle_mirror: { regX: 8, regY: 28, width: 51, height: 89 }
	}
};