function logger(comment){
	if(console){
		console.log(comment);
	}
}

titleNames = [
{name:"greenGround",index:1},
{name:"greenGroundWater1",index:2},
{name:"greenGroundWater2",index:3},
{name:"greenGroundWater3",index:4},
{name:"greenGroundWater4",index:5},
{name:"door1a",index:6},
{name:"door1b",index:7},
{name:"woodBlock1a",index:8},
{name:"woodBlock1b",index:9},
{name:"arthurIdol1",index:10},
{name:"arthurIdol2",index:11},
{name:"arthurIdol3",index:12},
{name:"arthurIdol4",index:13},
{name:"ladderBottom",index:14},
{name:"ladderMiddle",index:15},
{name:"ladderTop",index:16},
{name:"ladderBottomGreen",index:17},
{name:"ladderMiddleGreen",index:18},
{name:"ladderTopGreen",index:19},
{name:"movingStone1",index:20},
{name:"movingStone2",index:21},
{name:"brickGround",index:22},
{name:"stoneGround1",index:23},
{name:"stoneGround2",index:24},
{name:"binkyIdol1",index:25},
{name:"binkyIdol2",index:26},
{name:"budIdol1",index:27},
{name:"budIdol2",index:28},
{name:"dwIdol1",index:29},
{name:"dwIdol2",index:30},
{name:"stoneWater1",index:31},
{name:"stoneWater2",index:32},
{name:"stoneWater3",index:33},
{name:"stoneWater4",index:34},
{name:"gate",index:35},
{name:"lever",index:36},
{name:"snake",index:37},
{name:"bat",index:38},
{name:"switch",index:39},
{name:"greenBreakable",index:40},
{name:"brickBreakable",index:41},
{name:"start",index:42},
{name:"greenDirtGround",index:43},
{name:"brickLadderBottom",index:44},
{name:"brickLadderTop",index:45},
{name:"vine1",index:46},
{name:"vine2",index:47},
{name:"vine3",index:48},
{name:"hitCollision_1",index:49},
{name:"hitCollision_2",index:50},
{name:"wall_sand",index:51},
{name:"stone_water_1",index:52},
{name:"stone_water_2",index:53},
{name:"green_water_1",index:54},
{name:"green_water_2",index:55},
{name:"green_divider_1",index:56},
{name:"green_divider_2",index:57},
]

var tilesToIgnore = [10,11,12,13,14,15,17,18,19,34,35,36,37,38,39,42,44,46,47,48,49,50]; //16,20,21,45,
var tileWidth = 55;
var tileHeight = 50;

/*
Note: Thought Bubble Index:
1 - Arthur Top Left - bubble_00
2 - Arthur Top Right - bubble_01
3 - Binky Top Left - bubble_03
4 - Binky Top Right - bubble_02
7 - Bud Top Left - bubble_05
8 - Bud Top Right - bubble_04
5 - DW Top Left - bubble_07
6 - DW Top Right - bubble_06
9 - Bottom Right - bubble_10
10 - Bottom Left - bubble_09
11 - Door - bubble_11
12 - Tent - bubble_12
*/