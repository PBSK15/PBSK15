
var GameLevels = [

	{
		hint: "Level 1",
		audioStart: "CB_Strategy_01, CB_Strategy_03, CB_Strategy_04",
		audioGeneral: "CB_General_01, CB_General_02, CB_General_04",
		audioSpecific: "CB_Lv1_Specific",
		mapInfo: {x:333, y:523, m:0},
		sol: [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
		puz: [[1, 2],
			  [2, 1],
			  [1, 2],
			  [2, 1]],
		blankIndex: [4, 5, 6, 7, 8, 9, 10, 11],
		givenIndex: [4, 5, 6, 7, 8, 9, 10, 11],
		startTile: {row:4, col:0},
		juice: [{id:"A", row:2, col:1}, {id:"B", row:1, col:0}, {id:"C", row:0, col:1}],
		endIndex: 7,
		showall: true
	},

	{
		hint: "Level 2",
		audioStart: "CB_Strategy_01, CB_Strategy_02, CB_General_04",
		audioGeneral: "CB_General_09, CB_General_10",
		audioSpecific: "CB_Lv2_Specific",
		mapInfo: {x:164, y:348, m:0},
		sol: [2, 4, 2, 4, 2, 4, 2, 4, 2, 4, 2, 4, 2, 4],
		puz: [[2, 4, 4, 2],
			  [4, 2, 2, 4],
			  [2, 4, 4, 2]],
		blankIndex: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
		givenIndex: [2, 3],
		startTile: {row:3, col:2},
		juice: [{id:"A", row:0, col:3}, {id:"B", row:0, col:0}, {id:"C", row:2, col:0}],
		endIndex: 4
	},

	{
		hint: "Level 3",
		audioStart: "CB_Strategy_01, CB_Strategy_02, CB_Strategy_04",
		audioGeneral: "CB_General_01, CB_General_08, CB_General_05",
		audioSpecific: "CB_Lv3_Specific",
		mapInfo: {x:327, y:185, m:0},
		sol: [4, 4, 0, 0, 4, 4, 0, 0, 4, 4, 0, 0, 4, 4, 0, 0],
		puz: [[9, 0, 0, 0, 9],
			  [4, 1, 1, 1, 4],
			  [4, 0, 4, 0, 4],
			  [6, 0, 4, 0, 6]],
		blankIndex: [4, 5, 6, 7, 8, 9, 10, 11],
		givenIndex: [4, 5],
		startTile: {row:4, col:2},
		juice: [{id:"A", row:3, col:2}, {id:"B", row:2, col:2}, {id:"C", row:0, col:2}],
		endIndex: 10
	},

	{
		hint: "Level 4",
		audioStart: "CB_Strategy_01, CB_Strategy_02, CB_Strategy_04",
		audioGeneral: "CB_General_05, CB_General_10",
		audioSpecific: "CB_Lv4_Specific",
		mapInfo: {x:546, y:184, m:0},
		sol: [3, 3, 1, 3, 3, 1, 3, 3, 1, 3, 3, 1, 3, 3, 1, 3, 3],
		puz: [[2, 0, 3, 3, 0, 2],
			  [2, 1, 5, 5, 1, 2],
			  [3, 3, 3, 3, 3, 3]],
		blankIndex: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
		startTile: {row:3, col:2},
		juice: [{id:"A", row:1, col:1}, {id:"B", row:1, col:4}, {id:"C", row:0, col:2}],
		endIndex: 7
	},

	{
		hint: "Level 5",
		audioStart: "CB_Strategy_01, CB_Strategy_02, CB_Strategy_04",
		audioGeneral: "CB_General_01, CB_General_03, CB_General_04",
		audioSpecific: "CB_Lv5_Specific",
		mapInfo: {x:770, y:186, m:0},
		sol: [2, 2, 5, 6, 2, 2, 5, 6, 2, 2, 5, 6],
		puz: [[1, 1, 6, 1, 1],
			  [3, 5, 6, 5, 3],
			  [2, 2, 9, 2, 2]],
		blankIndex: [4, 5, 6, 7, 8, 9, 10, 11],
		givenIndex: [4, 5],
		startTile: {row:3, col:2},
		juice: [{id:"A", row:1, col:1}, {id:"B", row:1, col:2}, {id:"C", row:1, col:3}],
		endIndex: 7
	},

	{
		hint: "Level 6",
		audioStart: "CB_Strategy_01, CB_Strategy_02, CB_Strategy_04",
		audioGeneral: "CB_General_02, CB_General_03, CB_General_08",
		audioSpecific: "CB_Lv6_Specific",
		mapInfo: {x:770, y:394, m:0},
		sol: [50, 30, 50, 30, 50, 30, 50, 30, 50, 30, 50, 30],
		puz: [[64, 30, 10, 30, 46],
			  [50, 12, 50, 12, 50],
			  [80, 30, 40, 30, 80],
			  [10, 60, 50, 60, 10]],
		blankIndex: [4, 5, 6, 7, 8, 9, 10, 11],
		givenIndex: [4],
		startTile: {row:4, col:2},
		juice: [{id:"A", row:1, col:0}, {id:"B", row:1, col:2}, {id:"C", row:1, col:4}],
		endIndex: 7
	},

	{
		hint: "Level 7",
		audioStart: "CB_LaserWarning_04",
		audioGeneral: "CB_General_01, CB_LaserWarning_02",
		audioSpecific: "CB_Lv7_Specific",
		mapInfo: {x:546, y:394, m:0},
		sol: [1, 1, 2, 2, 1, 1, 2, 2, 1, 1, 2, 2, 1],
		puz: [[2, 1, 2],
			  [2, 2, 2],
			  [1, 1, 1],
			  [0, 1, 0]],
		blankIndex: [4, 5, 6, 7, 8, 9, 10, 11, 12],
		givenIndex: [4, 5],
		startTile: {row:4, col:1},
		juice: [{id:"A", row:0, col:1}, {id:"B", row:1, col:0}, {id:"C", row:1, col:2}],
		endIndex: 8,
		lasers: [
			{row:2, on:2000, off:3000, kill: true},
		]
	},

	{
		hint: "Level 8",
		audioStart: "CB_LaserWarning_05, CB_Strategy_01, CB_Strategy_02, CB_Strategy_04",
		audioGeneral: "CB_General_01, CB_General_02, CB_LaserWarning_04",
		audioSpecific: "CB_Lv8_Specific",
		mapInfo: {x:546, y:622, m:0},
		sol: [4, 8, 4, 8, 4, 8, 4, 8, 4, 8, 4, 8, 4, 8],
		puz: [[4, 4, 4],
			  [8, 8, 8],
			  [4, 4, 4]],
		blankIndex: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
		givenIndex: [4],
		startTile: {row:3, col:1},
		juice: [{id:"A", row:1, col:0}, {id:"B", row:1, col:1}, {id:"C", row:1, col:2}],
		endIndex: 6,
		lasers: [
			{row:1, on:2000, off:3000, kill: true}
		]
	},

	{
		hint: "Level 9",
		audioStart: "CB_LaserWarning_01, CB_Strategy_01, CB_Strategy_02, CB_Strategy_04",
		audioGeneral: "CB_General_01, CB_General_02, CB_LaserWarning_03",
		audioSpecific: "CB_Lv9_Specific",
		mapInfo: {x:772, y:620, m:0},
		sol: [9, 6, 3, 9, 6, 3, 9, 6, 3, 9, 6, 3],
		puz: [[6, 3, 6],
			  [4, 9, 2],
			  [6, 3, 6],
			  [2, 9, 4]],
		blankIndex: [6, 7, 8, 9, 10, 11],
		startTile: {row:4, col:1},
		juice: [{id:"A", row:0, col:1}, {id:"B", row:1, col:1}, {id:"C", row:2, col:1}],
		lasers: [
			{row:1, on:1000, off:5000, delay:0000, kill: true},
			{row:2, on:1000, off:5000, delay:3000, kill: true},
		]
	},








	{
		hint: "Level 10",
		audioStart: "CB_Strategy_05, CB_Strategy_06, CB_Strategy_07",
		audioGeneral: "CB_General_03, CB_General_04, CB_General_05",
		audioSpecific: "CB_Lv10-11-12-16-18_Specific",
		mapInfo: {x:770, y:158, m:1},
		sol: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
		puz: [[11, 12],
			  [9, 10],
			  [7, 8],
			  [5, 6]],
		blankIndex: [4, 5, 6, 7, 8, 9, 10, 11],
		givenIndex: [4, 5, 6, 7, 8, 9, 10, 11],
		difference: ["+1", "+1", "+1", "+1"],
		startTile: {row:4, col:0},
		juice: [{id:"A", row:2, col:1}, {id:"B", row:1, col:1}, {id:"C", row:0, col:1}],
		showall: true
	},

	{
		hint: "Level 11",
		audioStart: "CB_Strategy_05, CB_Strategy_06, CB_Strategy_01",
		audioGeneral: "CB_General_03, CB_General_04, CB_General_05",
		audioSpecific: "CB_Lv10-11-12-16-18_Specific",
		mapInfo: {x:316, y:158, m:1},
		sol: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
		puz: [[20, 14, 18, 16],
			  [13, 19, 15, 17]],
		blankIndex: [3, 4, 5, 6, 7, 8, 9, 10],
		givenIndex: [5, 7],
		difference: ["+1", "+1", "+1", "+1"],
		startTile: {row:2, col:1},
		juice: [{id:"A", row:1, col:1}, {id:"B", row:0, col:3}, {id:"C", row:0, col:0}],
		endIndex: 4
	},

	{
		hint: "Level 12",
		audioStart: "CB_Strategy_05, CB_Strategy_06, CB_Strategy_08",
		audioGeneral: "CB_General_03, CB_General_04, CB_General_05",
		audioSpecific: "CB_Lv10-11-12-16-18_Specific",
		mapInfo: {x:161, y:334, m:1},
		sol: [20, 21, 22, 23, 24, 25, 26, 27, 28],
		puz: [[12, 28, 13, 28, 12],
			  [27, 24, 27, 24, 27],
			  [25, 26, 23, 26, 25]],
		blankIndex: [3, 4, 5, 6, 7, 8],
		givenIndex: [3, 5],
		difference: ["+1", "+1", "+1"],
		startTile: {row:3, col:2},
		juice: [{id:"A", row:2, col:1}, {id:"B", row:1, col:2}, {id:"C", row:0, col:3}]
	},

	{
		hint: "Level 13",
		audioStart: "CB_Strategy_05, CB_Strategy_02",
		audioGeneral: "CB_General_03, CB_General_04, CB_General_05",
		audioSpecific: "CB_Lv13-14-15-17_Specific",
		mapInfo: {x:424, y:476, m:1},
		sol: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
		puz: [[9, 3, 4, 1],
			  [4, 5, 2, 5],
			  [8, 6, 9, 6]],
		blankIndex: [3, 4, 5, 6, 7, 8, 9],
		difference: ["-1", "-1", "-1"],
		startTile: {row:3, col:2},
		juice: [{id:"A", row:0, col:1}, {id:"B", row:0, col:2}, {id:"C", row:0, col:3}],
		endIndex: 5
	},

	{
		hint: "Level 14",
		audioStart: "CB_Strategy_05, CB_Strategy_08",
		audioGeneral: "CB_General_03, CB_General_04, CB_General_05",
		audioSpecific: "CB_Lv13-14-15-17_Specific",
		mapInfo: {x:546, y:300, m:1},
		sol: [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4],
		puz: [[4, 10, 4],
			  [11, 5, 9],
			  [12, 6, 8],
			  [13, 10, 7]],
		blankIndex: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
		givenIndex: [2, 6],
		difference: ["-1", "-1"],
		startTile: {row:4, col:1},
		juice: [{id:"A", row:2, col:1}, {id:"B", row:1, col:1}, {id:"C", row:0, col:1}],
		endIndex: 5
	},

	{
		hint: "Level 15",
		audioStart: "CB_Strategy_02, CB_Strategy_05",
		audioGeneral: "CB_General_03, CB_General_04, CB_General_05",
		audioSpecific: "CB_Lv13-14-15-17_Specific",
		mapInfo: {x:698, y:442, m:1},
		sol: [23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12],
		puz: [[12, 12, 12, 12, 12],
			  [16, 13, 14, 15, 13],
			  [18, 16, 15, 14, 16],
			  [17, 18, 19, 18, 17]],
		blankIndex: [4, 5, 6, 7, 8, 9, 10, 11],
		givenIndex: [5],
		difference: ["-1", "-1", "-1"],
		startTile: {row:4, col:2},
		juice: [{id:"A", row:1, col:3}, {id:"B", row:1, col:2}, {id:"C", row:1, col:1}],
		endIndex: 11
	},

	{
		hint: "Level 16",
		audioStart: "CB_LaserWarning_01, CB_Strategy_05, CB_Strategy_06, CB_Strategy_07",
		audioGeneral: "CB_General_03, CB_General_04, CB_LaserWarning_02",
		audioSpecific: "CB_Lv10-11-12-16-18_Specific",
		mapInfo: {x:827, y:656, m:1},
		sol: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		puz: [[0, 10, 0],
			  [2, 9, 5],
			  [8, 4, 6],
			  [3, 7, 1]],
		blankIndex: [3, 4, 5, 6, 7, 8, 9, 10],
		givenIndex: [3],
		difference: ["+1", "+1", "+1"],
		startTile: {row:4, col:1},
		juice: [{id:"A", row:2, col:2}, {id:"B", row:2, col:1}, {id:"C", row:2, col:0}],
		endIndex: 10,
		lasers: [
			{row:1, on:1000, off:4000, delay:0000, kill: true},
		]
	},

	{
		hint: "Level 17",
		audioStart: "CB_LaserWarning_02, CB_Strategy_05, CB_Strategy_03",
		audioGeneral: "CB_General_04, CB_General_05, CB_LaserWarning_04",
		audioSpecific: "CB_Lv13-14-15-17_Specific",
		mapInfo: {x:578, y:656, m:1},
		sol: [19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7],
		puz: [[7, 9, 16, 9, 16],
			  [8, 15, 10, 13, 17],
			  [16, 9, 14, 11, 12]],
		blankIndex: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
		givenIndex: [3],
		difference: ["-1", "-1", "-1"],
		startTile: {row:3, col:1},
		juice: [{id:"A", row:0, col:0}, {id:"B", row:1, col:2}, {id:"C", row:2, col:4}],
		endIndex: 10,
		lasers: [
			{row:1, on:1000, off:4000, delay:0000, kill: true},
		]
	},

	{
		hint: "Level 18",
		audioStart: "CB_LaserWarning_03, CB_Strategy_05, CB_Strategy_03",
		audioGeneral: "CB_General_03, CB_General_05, CB_LaserWarning_03",
		audioSpecific: "CB_Lv10-11-12-16-18_Specific",
		mapInfo: {x:316, y:656, m:1},
		sol: [71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81],
		puz: [[99, 80, 81, 80, 99],
			  [79, 76, 77, 76, 79],
			  [11, 78, 75, 78, 11]],
		blankIndex: [4, 5, 6, 7, 8, 9, 10],
		givenIndex: [7],
		difference: ["+1", "+1", "+1"],
		startTile: {row:3, col:2},
		juice: [{id:"A", row:2, col:2}, {id:"B", row:1, col:2}, {id:"C", row:0, col:2}],
		endIndex: 9,
		lasers: [
			{col:1, on:1000, off:3000, delay:0000, kill: true},
			{col:3, on:1000, off:3000, delay:2000, kill: true},
		]
	},






	{
		hint: "Level 19",
		audioStart: "CB_Strategy_02, CB_Strategy_05, CB_Strategy_08",
		audioGeneral: "CB_General_06, CB_General_07, CB_General_08",
		audioSpecific: "CB_Lv19-20-21-25-26_Specific",
		mapInfo: {x:315, y:168, m:2},
		sol: [2, 4, 6, 8, 10, 12, 14, 16],
		puz: [[14, 16, 14, 16, 14],
			  [10, 12, 10, 12, 10],
			  [10, 8, 8, 8, 10]],
		blankIndex: [3, 4, 5, 6, 7, 8, 9],
		givenIndex: [3, 4, 5],
		difference: ["+2", "+2", "+2"],
		startTile: {row:3, col:2},
		juice: [{id:"A", row:2, col:1}, {id:"B", row:1, col:2}, {id:"C", row:0, col:3}],
		showall: true,
		endIndex: 6,
	},

	{
		hint: "Level 20",
		audioStart: "CB_Strategy_05, CB_Strategy_08",
		audioGeneral: "CB_General_06, CB_General_07, CB_General_10",
		audioSpecific: "CB_Lv19-20-21-25-26_Specific",
		mapInfo: {x:140, y:330, m:2},
		sol: [20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40],
		puz: [[36, 9, 32, 5, 28, 1],
			  [11, 34, 7, 30, 3, 26]],
		blankIndex: [3, 4, 5, 6, 7, 8, 9, 10],
		givenIndex: [3, 4, 5],
		difference: ["+2", "+2", "+2"],
		startTile: {row:2, col:4},
		juice: [{id:"A", row:0, col:4}, {id:"B", row:0, col:2}, {id:"C", row:0, col:0}],
		endIndex: 4
	},

	{
		hint: "Level 21",
		audioStart: "CB_Strategy_05, CB_Strategy_06, CB_Strategy_02",
		audioGeneral: "CB_General_03, CB_General_06, CB_General_07",
		audioSpecific: "CB_Lv19-20-21-25-26_Specific",
		mapInfo: {x:322, y:480, m:2},
		sol: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25],
		puz: [[29, 27, 25, 0, 21, 20],
			  [10, 11, 14, 15, 18, 19],
			  [9, 12, 13, 16, 17, 20]],
		blankIndex: [4, 5, 6, 7, 8, 9, 10, 11, 12],
		difference: ["+2", "+2", "+2"],
		startTile: {row:3, col:1},
		juice: [{id:"A", row:2, col:4}, {id:"B", row:1, col:5}, {id:"C", row:0, col:4}],
		endIndex: 7
	},

	{
		hint: "Level 22",
		audioStart: "CB_Strategy_05, CB_Strategy_08",
		audioGeneral: "CB_General_04, CB_General_06, CB_General_07",
		audioSpecific: "CB_Lv22-23-24-27_Specific",
		mapInfo: {x:320, y:660, m:2},
		sol: [18, 16, 14, 12, 10, 8, 6, 4, 2, 0],
		puz: [[1, 0, 1],
			  [2, 8, 2],
			  [10, 4, 6],
			  [14, 12, 14]],
		blankIndex: [3, 4, 5, 6, 7, 8, 9],
		givenIndex: [3],
		difference: ["-2", "-2", "-2"],
		startTile: {row:4, col:1},
		juice: [{id:"A", row:2, col:1}, {id:"B", row:1, col:1}, {id:"C", row:0, col:1}],
		showall: true
	},

	{
		hint: "Level 23",
		audioStart: "CB_Strategy_05, CB_Strategy_08",
		audioGeneral: "CB_General_05, CB_General_06, CB_General_07",
		audioSpecific: "CB_Lv22-23-24-27_Specific",
		mapInfo: {x:480, y:326, m:2},
		sol: [21, 19, 17, 15, 13, 11, 9, 7, 5, 3, 1],
		puz: [[4, 3, 1, 3, 4],
			  [7, 5, 3, 5, 7],
			  [11, 9, 13, 9, 11],
			  [13, 15, 11, 15, 13]],
		blankIndex: [3, 4, 5, 6, 7, 8, 9, 10],
		givenIndex: [3],
		difference: ["-2", "-2", "-2"],
		startTile: {row:4, col:2},
		juice: [{id:"A", row:2, col:2}, {id:"B", row:1, col:2}, {id:"C", row:0, col:2}],
		endIndex: 9
	},

	{
		hint: "Level 24",
		audioStart: "CB_Strategy_05, CB_Strategy_08, CB_General_08",
		audioGeneral: "CB_General_03, CB_General_06, CB_General_07",
		audioSpecific: "CB_Lv22-23-24-27_Specific",
		mapInfo: {x:660, y:158, m:2},
		sol: [55, 53, 51, 49, 47, 45, 43, 41, 39, 37, 35],
		puz: [[28, 45, 35, 37, 28],
			  [47, 22, 43, 26, 39],
			  [20, 49, 48, 41, 28]],
		blankIndex: [3, 4, 5, 6, 7, 8, 9, 10],
		difference: ["-2", "-2"],
		startTile: {row:3, col:2},
		juice: [{id:"A", row:0, col:1}, {id:"B", row:0, col:3}, {id:"C", row:0, col:2}],
		endIndex: 5
	},

	{
		hint: "Level 25",
		audioStart: "CB_LaserWarning_04",
		audioGeneral: "CB_LaserWarning_04, CB_General_06, CB_General_10",
		audioSpecific: "CB_Lv25-26-27_Specific",
		mapInfo: {x:798, y:398, m:2},
		sol: [0, 2, 4, 6, 8, 10, 12, 14, 16],
		puz: [[12, 14, 16],
			  [10, 12, 10],
			  [8, 10, 8],
			  [6, 8, 6]],
		blankIndex: [3, 4, 5, 6, 7, 8],
		givenIndex: [3],
		difference: ["+2", "+2", "+2"],
		startTile: {row:4, col:1},
		juice: [{id:"A", row:0, col:1}, {id:"B", row:0, col:0}, {id:"C", row:0, col:2}],
		endIndex: 7,
		lasers: [
			{col:1, on:1000, off:3000, delay:0000, kill: true},
		]
	},

	{
		hint: "Level 26",
		audioStart: "CB_LaserWarning_02, CB_Strategy_05, CB_Strategy_06, CB_Strategy_02",
		audioGeneral: "CB_General_03, CB_General_06, CB_LaserWarning_04",
		audioSpecific: "CB_Lv25-26-27_Specific",
		mapInfo: {x:600, y:598, m:2},
		sol: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21],
		puz: [[2, 4, 19, 4, 2],
			  [21, 11, 17, 15, 21],
			  [9, 15, 13, 13, 9],
			  [15, 7, 5, 7, 11]],
		blankIndex: [3, 4, 5, 6, 7, 8, 9, 10],
		givenIndex: [3, 6],
		difference: ["+2", "+2", "+2"],
		startTile: {row:4, col:2},
		juice: [{id:"A", row:1, col:1}, {id:"B", row:1, col:3}, {id:"C", row:1, col:2}],
		endIndex: 9,
		lasers: [
			{row:2, on:1000, off:3000, delay:0000, kill: true},
		]
	},

	{
		hint: "Level 27",
		audioStart: "CB_LaserWarning_03, CB_Strategy_05, CB_Strategy_08",
		audioGeneral: "CB_General_03, CB_General_06, CB_LaserWarning_03",
		audioSpecific: "CB_Lv25-26-27_Specific",
		mapInfo: {x:796, y:596, m:2},
		sol: [24, 22, 20, 18, 16, 14, 12, 10, 8, 6, 4, 2, 0],
		puz: [[10, 14, 10, 14, 10],
			  [12, 12, 16, 12, 12],
			  [4, 18, 14, 18, 4]],
		blankIndex: [3, 4, 5, 6, 7, 8, 9, 10],
		difference: ["-2", "-2"],
		startTile: {row:3, col:2},
		juice: [{id:"A", row:2, col:2}, {id:"B", row:1, col:2}, {id:"C", row:0, col:2}],
		endIndex: 5,
		lasers: [
			{row:0, on:1000, off:3000, delay:0000, kill: true},
			{row:1, on:1000, off:3000, delay:2000, kill: true},
		]
	},





	{
		hint: "Level 28",
		audioStart: "CB_Strategy_01, CB_Strategy_02, CB_Strategy_05",
		audioGeneral: "CB_General_05, CB_General_06, CB_General_07",
		audioSpecific: "CB_Lv28_Specific",
		mapInfo: {x:798, y:168, m:3},
		sol: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
		puz: [[5, 60, 25, 60, 15],
			  [10, 20, 55, 30, 90],
			  [15, 50, 45, 40, 35]],
		blankIndex: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
		givenIndex: [3, 6],
		difference: ["+5", "+5", "+5"],
		startTile: {row:3, col:1},
		juice: [{id:"A", row:1, col:1}, {id:"B", row:1, col:2}, {id:"C", row:1, col:3}],
		endIndex: 5
	},

	{
		hint: "Level 29",
		audioStart: "CB_Strategy_01, CB_Strategy_02, CB_Strategy_05",
		audioGeneral: "CB_General_05, CB_General_06, CB_General_07",
		audioSpecific: "CB_Lv29_Specific",
		mapInfo: {x:660, y:326, m:3},
		sol: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90],
		puz: [[15, 90, 10, 90, 15],
			  [80, 70, 60, 50, 80],
			  [40, 50, 10, 70, 40],
			  [20, 30, 90, 30, 20]],
		blankIndex: [3, 4, 5, 6, 7, 8, 9],
		givenIndex: [3, 4],
		difference: ["+10", "+10", "+10"],
		startTile: {row:4, col:2},
		juice: [{id:"A", row:2, col:1}, {id:"B", row:1, col:2}, {id:"C", row:2, col:3}]
	},

	{
		hint: "Level 30",
		audioStart: "CB_Strategy_01, CB_Strategy_02, CB_Strategy_05",
		audioGeneral: "CB_General_06, CB_General_07, CB_General_08",
		audioSpecific: "CB_Lv30_Specific",
		mapInfo: {x:800, y:495, m:3},
		sol: [00, 11, 22, 33, 44, 55, 66, 77, 88, 99],
		puz: [[99, 77, 66, 88, 99],
			  [22, 88, 44, 55, 77],
			  [77, 66, 55, 33, 66]],
		blankIndex: [3, 4, 5, 6, 7, 8, 9, 10, 11],
		difference: ["+11", "+11"],
		startTile: {row:3, col:2},
		juice: [{id:"A", row:1, col:2}, {id:"B", row:1, col:3}, {id:"C", row:1, col:1}],
		endIndex: 6
	},

	{
		hint: "Level 31",
		audioStart: "CB_Strategy_01, CB_Strategy_02, CB_Strategy_05",
		audioGeneral: "CB_General_04, CB_General_06, CB_General_07",
		audioSpecific: "CB_Lv31_Specific",
		mapInfo: {x:640, y:660, m:3},
		sol: [2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42],
		puz: [[16, 22, 24, 30, 32, 38],
			  [18, 20, 26, 28, 34, 36]],
		blankIndex: [4, 5, 6, 7, 8, 9, 10],
		difference: ["+4", "+4", "+4"],
		startTile: {row:2, col:1},
		juice: [{id:"A", row:0, col:1}, {id:"B", row:0, col:3}, {id:"C", row:0, col:5}],
		endIndex: 5
	},

	{
		hint: "Level 32",
		audioStart: "CB_Strategy_01, CB_Strategy_02, CB_Strategy_05",
		audioGeneral: "CB_General_06, CB_General_07, CB_General_05",
		audioSpecific: "CB_Lv32_Specific",
		mapInfo: {x:500, y:496, m:3},
		sol: [70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5],
		puz: [[5, 60, 25, 60, 15],
			  [10, 20, 55, 30, 90],
			  [15, 50, 45, 40, 35]],
		blankIndex: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
		givenIndex: [4, 5, 6],
		difference: ["-5", "-5", "-5", "-5"],
		startTile: {row:3, col:2},
		juice: [{id:"A", row:1, col:1}, {id:"B", row:0, col:2}, {id:"C", row:1, col:3}],
		endIndex: 7
	},

	{
		hint: "Level 33",
		audioStart: "CB_Strategy_01, CB_Strategy_02, CB_Strategy_05",
		audioGeneral: "CB_General_06, CB_General_07, CB_General_08",
		audioSpecific: "CB_Lv33_Specific",
		mapInfo: {x:500, y:204, m:3},
		sol: [30, 27, 24, 21, 18, 15, 12, 9, 6, 3, 0],
		puz: [[12, 6, 0, 6, 3],
			  [6, 15, 3, 9, 6],
			  [18, 0, 12, 15, 12],
			  [15, 21, 18, 21, 18]],
		blankIndex: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
		givenIndex: [3, 4],
		difference: ["-3", "-3", "-3"],
		startTile: {row:4, col:2},
		juice: [{id:"A", row:1, col:1}, {id:"B", row:1, col:3}, {id:"C", row:1, col:2}],
		endIndex: 6
	},

	{
		hint: "Level 34",
		audioStart: "CB_LaserWarning_01, CB_Strategy_02, CB_Strategy_05",
		audioGeneral: "CB_LaserWarning_04, CB_LaserWarning_02, CB_General_07",
		audioSpecific: "CB_Lv34_Specific",
		mapInfo: {x:175, y:210, m:3},
		sol: [0, 3, 6, 9, 12, 15, 18, 21, 24],
		puz: [[24, 0, 21],
			  [21, 12, 18],
			  [9, 18, 15]],
		blankIndex: [3, 4, 5, 6, 7, 8, 9, 10],
		difference: ["+3", "+3"],
		startTile: {row:3, col:1},
		juice: [{id:"A", row:2, col:2}, {id:"B", row:1, col:1}, {id:"C", row:0, col:0}],
		endIndex: 7,
		lasers: [
			{col:1, on:1000, off:3000, delay:0000, kill: true},
			{row:1, on:1000, off:3000, delay:0000, kill: true},
		]
	},

	{
		hint: "Level 35",
		audioStart: "CB_LaserWarning_02, CB_Strategy_01, CB_Strategy_02, CB_Strategy_05",
		audioGeneral: "CB_LaserWarning_03, CB_General_04, CB_General_07",
		audioSpecific: "CB_Lv35_Specific",
		mapInfo: {x:330, y:406, m:3},
		sol: [90, 80, 70, 60, 50, 40, 30, 20, 10],
		puz: [[30, 20, 10, 20, 30],
			  [90, 40, 60, 40, 90],
			  [50, 70, 50, 70, 50],
			  [60, 14, 80, 14, 60]],
		blankIndex: [1, 2, 3, 4, 5, 6, 7, 8],
		givenIndex: [1, 2, 3],
		difference: ["-10"],
		startTile: {row:4, col:2},
		juice: [{id:"A", row:2, col:2}, {id:"B", row:1, col:2}, {id:"C", row:0, col:2}],
		endIndex: 6,
		lasers: [
			{row:1, on:1000, off:3000, delay:2000, kill: true},
			{row:2, on:1000, off:3000, delay:0000, kill: true},
		]
	},

	{
		hint: "Level 36",
		audioStart: "CB_LaserWarning_03, CB_Strategy_01, CB_Strategy_02, CB_Strategy_05",
		audioGeneral: "CB_LaserWarning_03, CB_General_04, CB_General_07",
		audioSpecific: "CB_Lv36_Specific",
		mapInfo: {x:330, y:655, m:3},
		sol: [99, 88, 77, 66, 55, 44, 33, 22, 11],
		puz: [[11, 33, 11, 33, 11],
			  [22, 55, 44, 55, 22],
			  [66, 44, 66, 44, 66],
			  [00, 77, 00, 77, 00]],
		blankIndex: [2, 3, 4, 5, 6, 7, 8],
		givenIndex: [2],
		difference: ["-11", "-11"],
		startTile: {row:4, col:2},
		juice: [{id:"A", row:2, col:0}, {id:"B", row:1, col:2}, {id:"C", row:0, col:4}],
		lasers: [
			{col:1, on:1000, off:3000, delay:0000, kill: true},
			{col:3, on:1000, off:3000, delay:0000, kill: true},
			{row:2, on:1000, off:3000, delay:2000, kill: true},
		]
	},





	{
		hint: "Level 37",
		audioStart: "CB_Strategy_04, CB_General_11, CB_General_13",
		audioGeneral: "CB_General_07, CB_General_11, CB_General_13",
		audioSpecific: "CB_Lv37_Specific",
		mapInfo: {x:330, y:188, m:4},
		sol: [1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1],
		puz: [[2, 1, 2],
			  [3, 1, 3],
			  [2, 1, 2]],
		blankIndex: [5, 6, 7, 8, 9, 10, 11, 12],
		difference: ["+1", "+1", "-1", "-1"],
		startTile: {row:3, col:1},
		endIndex: 7,
		juice: [{id:"A", row:1, col:0}, {id:"B", row:1, col:1}, {id:"C", row:1, col:2}]
	},

	{
		hint: "Level 38",
		audioStart: "CB_Strategy_03, CB_Strategy_04, CB_Strategy_05",
		audioGeneral: "CB_General_06, CB_General_11, CB_General_13",
		audioSpecific: "CB_Lv38-39_Specific",
		mapInfo: {x:144, y:352, m:4},
		sol: [1, 2, 3, 2, 3, 4, 3, 4, 5, 4, 5, 6],
		puz: [[1, 0, 4, 5, 6],
			  [0, 3, 4, 5, 0],
			  [2, 3, 4, 0, 1]],
		blankIndex: [3, 4, 5, 6, 7, 8, 9, 10, 11],
		difference: ["+1", "+1", "-1"],
		startTile: {row:3, col:1},
		givenIndex: [3, 4, 5],
		juice: [{id:"A", row:2, col:2}, {id:"B", row:1, col:3}, {id:"C", row:0, col:4}],
		endIndex: 5
	},

	{
		hint: "Level 39",
		audioStart: "CB_Strategy_03, CB_Strategy_05",
		audioGeneral: "CB_General_05, CB_General_11, CB_General_13",
		audioSpecific: "CB_Lv38-39_Specific",
		mapInfo: {x:330, y:506, m:4},
		sol: [2, 3, 4, 3, 4, 5, 4, 5, 6, 5, 6, 7, 6, 7],
		puz: [[7, 7, 7],
			  [6, 6, 6],
			  [5, 5, 5],
			  [4, 0, 4]],
		blankIndex: [6, 7, 8, 9, 10, 11, 12, 13],
		difference: ["+1", "+1", "-1", "+1", "+1"],
		startTile: {row:4, col:1},
		juice: [{id:"A", row:1, col:0}, {id:"B", row:1, col:1}, {id:"C", row:1, col:2}],
		endIndex: 11
	},

	{
		hint: "Level 40",
		audioStart: "CB_Strategy_03, CB_Strategy_04, CB_Strategy_05",
		audioGeneral: "CB_General_04, CB_General_11, CB_General_13",
		audioSpecific: "CB_Lv40_Specific",
		mapInfo: {x:544, y:670, m:4},
		sol: [0, 2, 4, 2, 0, 2, 4, 2, 0, 2, 4, 2, 0],
		puz: [[0, 0, 0, 0, 0],
			  [2, 4, 2, 4, 2],
			  [0, 0, 2, 0, 0]],
		blankIndex: [4, 5, 6, 7, 8, 9, 10, 11, 12],
		difference: ["+2", "-2", "+2"],
		startTile: {row:3, col:2},
		juice: [{id:"A", row:1, col:0}, {id:"B", row:1, col:2}, {id:"C", row:1, col:4}],
		endIndex: 8
	},

	{
		hint: "Level 41",
		audioStart: "CB_Strategy_03, CB_Strategy_05",
		audioGeneral: "CB_General_10, CB_General_11, CB_General_13",
		audioSpecific: "CB_Lv41_Specific",
		mapInfo: {x:544, y:426, m:4},
		sol: [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5],
		puz: [[5, 1, 5, 1, 5],
			  [4, 4, 4, 4, 4],
			  [8, 4, 8, 4, 8],
			  [0, 3, 3, 3, 0]],
		blankIndex: [3, 4, 5, 6, 7, 8, 9, 10],
		givenIndex: [3, 4, 5],
		startTile: {row:4, col:2},
		juice: [{id:"A", row:1, col:1}, {id:"B", row:1, col:2}, {id:"C", row:1, col:3}],
		showall: true
	},

	{
		hint: "Level 42",
		audioStart: "CB_Strategy_03, CB_Strategy_04, CB_Strategy_05",
		audioGeneral: "CB_General_07, CB_General_11, CB_General_13",
		audioSpecific: "CB_Lv42-44_Specific",
		mapInfo: {x:544, y:186, m:4},
		sol: [1, 2, 4, 8, 16, 32, 64],
		puz: [[16, 64, 32],
			  [32, 8, 32],
			  [4, 2, 16]],
		blankIndex: [2, 3, 4, 5, 6],
		givenIndex: [2],
		difference: ["+1", "+2"],
		startTile: {row:3, col:1},
		juice: [{id:"A", row:2, col:0}, {id:"B", row:1, col:1}, {id:"C", row:0, col:1}],
		endIndex: 4
	},

	{
		hint: "Level 43",
		audioStart: "CB_Strategy_03, CB_Strategy_04, CB_Strategy_05",
		audioGeneral: "CB_LaserWarning_01, CB_General_11, CB_General_13",
		audioSpecific: "CB_Lv43_Specific",
		mapInfo: {x:764, y:186, m:4},
		sol: [9, 8, 7, 8, 9, 8, 7, 8, 9, 8, 7, 8, 9],
		puz: [[7, 0, 9, 0, 7],
			  [0, 8, 9, 8, 0],
			  [7, 8, 9, 8, 7]],
		blankIndex: [4, 5, 6, 7, 8, 9, 10, 11, 12],
		givenIndex: [4],
		difference: ["-1", "-1", "+1", "+1"],
		startTile: {row:3, col:2},
		juice: [{id:"A", row:2, col:2}, {id:"B", row:1, col:2}, {id:"C", row:0, col:2}],
		lasers: [
			{col:1, on:1000, off:2000, kill: true},
			{col:3, on:1000, off:2000, kill: true},
		],
		endIndex: 6
	},

	{
		hint: "Level 44",
		audioStart: "CB_General_03, CB_Strategy_04",
		audioGeneral: "CB_General_11, CB_General_13",
		audioSpecific: "CB_Lv42-44_Specific",
		mapInfo: {x:764, y:426, m:4},
		sol: [3, 6, 12, 24, 48, 96],
		puz: [[24, 24, 24, 24, 96, 96],
			  [12, 12, 48, 48, 48, 48],
			  [6, 0, 8, 8, 8, 8]],
		blankIndex: [1, 2, 3, 4, 5],
		givenIndex: [1, 2],
		difference: ["+3"],
		startTile: {row:3, col:1},
		juice: [{id:"A", row:0, col:2}, {id:"B", row:1, col:3}, {id:"C", row:0, col:4}],
		lasers: [
			{row:1, on:1000, off:2000, kill:true},
		],
		endIndex: 3
	},

	{
		hint: "Level 45",
		audioStart: "CB_General_03, CB_Strategy_04",
		audioGeneral: "CB_General_11, CB_General_13",
		audioSpecific: "CB_Lv45_Specific",
		mapInfo: {x:764, y:670, m:4},
		sol: [1, 2, 3, 5, 8, 13, 21, 34, 55, 89],
		puz: [[21, 89, 21, 34, 21],
			  [55, 13, 55, 31, 21],
			  [34, 21, 8, 13, 5]],
		blankIndex: [4, 5, 6, 7, 8, 9],
		givenIndex: [4],
		difference: ["+", "+", "+"],
		endIndex: 6,
		startTile: {row:3, col:2},
		juice: [{id:"A", row:0, col:1}, {id:"B", row:1, col:2}, {id:"C", row:2, col:3}],
		lasers: [
			{row:1, on:3000, off:1500, kill: true},
		]
	}
]


/*
var GameLevels = {
,


	{
		hint: "Level X",
		audioStart: "Code_3_1",
		mapInfo: {x:200, y:200, m:5},
		sol: [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8],
		puz: [[0, 0, 0, 0, 8, 5, 3],
			  [0, 5, 0, 2, 0, 5, 0],
			  [1, 0, 9, 0, 6, 0, 0]],
		blankIndex: [3, 4, 5, 6, 7, 8, 9, 10, 11],
		givenIndex: [3],
		endIndex: 9,
		startTile: {row:3, col:0},
		juice: [{id:"A", row:0, col:4}, {id:"B", row:0, col:5}, {id:"C", row:0, col:6}],
		lasers: [
			{col:0, on:1000, off:1000, delay:100},
			{col:1, on:1000, off:1000, delay:200},
			{col:2, on:1000, off:1000, delay:300},
			{col:3, on:1000, off:1000, delay:400},
			{col:4, on:1000, off:1000, delay:500},
			{col:5, on:1000, off:1000, delay:600},
			{col:6, on:1000, off:1000, delay:700},
		]
	},

	{
		hint: "Level X2",
		audioStart: "Code_3_1",
		mapInfo: {x:400, y:200, m:5},
		sol: [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 2],
		puz: [[2, 2, 2, 2, 2, 2, 2],
			  [0, 1, 0, 1, 0, 1, 0],
			  [1, 1, 1, 1, 1, 1, 1],
			  [0, 1, 0, 1, 0, 1, 0]],
		blankIndex: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
		givenIndex: [3],
		startTile: {row:4, col:3},
		juice: [{id:"A", row:1, col:0}, {id:"B", row:1, col:6}, {id:"C", row:2, col:3}],
		showall: true,
		lasers: [
			{col:0, on:1000, off:4000, delay:0, kill:true},
			{col:1, on:1000, off:4000, delay:2500, kill:true},
			{col:2, on:1000, off:4000, delay:0, kill:true},
			{col:4, on:1000, off:4000, delay:2500, kill:true},
			{col:5, on:1000, off:4000, delay:0, kill:true},
			{col:6, on:1000, off:4000, delay:2500, kill:true},

			{row:0, on:200, off:5000, delay: 1000},
			{row:1, on:200, off:5000, delay: 2000},
			{row:2, on:200, off:5000, delay: 3000},
			{row:3, on:200, off:5000, delay: 4000}
		]
	}


	"lvl_0_1": {
		sol: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
		puz: [[2, 9, 12, 11],
			  [7, 8, 9, 10],
			  [6, 7, 8, 9],
			  [3, 5, 6, 2]],
		blankIndex: [4, 5, 6, 7, 8, 9, 10, 11],
		startTile: {row:4, col:1}
	},

	"lvl_0_2": {
		sol: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
		puz: [[0, 2, 1],
			  [4, 3, 5],
			  [5, 6, 4],
			  [7, 2, 5]],
		blankIndex: [3, 4, 5, 6, 7, 8, 9, 10],
		startTile: {row:4, col:1}
	},

	"lvl_0_3": {
		sol: [1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
		puz: [[3, 2, 1],
			  [4, 1, 6],
			  [2, 7, 3],
			  [5, 1, 2]],
		blankIndex: [4, 5, 6, 7, 8],
		startTile: {row:4, col:1}
	},

	"lvl_0_4": {
		sol: [2, 4, 6, 8, 10, 12, 14],
		puz: [[15, 14],
			  [12, 13],
			  [11, 10],
			  [8, 9]],
		blankIndex: [3, 4, 5, 6],
		startTile: {row:4, col:1}
	},

	"lvl_0_5": {
		sol: [1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1],
		puz: [[1, 2, 0, 1, 3],
			  [2, 3, 6, 2, 2],
			  [3, 7, 2, 3, 1],
			  [5, 2, 1, 9, 0]],
		blankIndex: [4, 5, 6, 7, 8, 9, 10],
		startTile: {row:4, col:2},
		juice: [{id:"A", row:2, col:4}],
		showall: true
	},

	"lvl_0_6": {
		sol: [1, 2, 3, 5, 8, 13, 21, 34],
		puz: [[31, 24, 34],
			  [8, 13, 21],
			  [5, 11, 12]],
		blankIndex: [3, 4, 5, 6, 7],
		givenIndex: [4, 6],
		startTile: {row:3, col:1},
		showall: true
	},

	"lvl_0_7": {
		sol: [3, 5, 7, 9, 11, 13, 15, 17, 19],
		puz: [[1, 11, 6, 15, 4, 19],
			  [9, 3, 13, 2, 17, 5]],
		blankIndex: [3, 4, 5, 6, 7, 8],
		startTile: {row:2, col:0},
		juice: [{id:"A", row:0, col:5}]
	},

	"lvl_0_8": {
		sol: [2, 3, 5, 6, 8, 9, 11, 12, 14, 15, 17, 18, 20, 21],
		puz: [[17, 18, 34],
			  [10, 15, 14],
			  [11, 12, 8],
			  [10, 9, 4]],
		blankIndex: [5, 6, 7, 8, 9, 10, 11],
		givenIndex: [6, 8, 10],
		startTile: {row:4, col:1}
	}


}
*/