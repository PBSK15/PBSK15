(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.Fizzy_Games = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{intro:0,intro_stop:18,action:19,action_stop:171,idle:172,idle_loop:258});

	// BODY
	this.instance = new lib.FIZZYENTER11509("synched",0,false);
	this.instance.setTransform(535.9,241.9);

	this.instance_1 = new lib.FIZ23RCOLLARFR001("single",0);
	this.instance_1.setTransform(225.9,388.1,0.747,0.765,0,-1.2,178.7,56.1,42.4);

	this.instance_2 = new lib.FIZ23RAPRON001("single",0);
	this.instance_2.setTransform(237,391,0.765,0.765,0,-3.7,176.2,41.6,9.1);

	this.instance_3 = new lib.FIZ23RTIE001("single",0);
	this.instance_3.setTransform(242.1,460.2,0.765,0.765,0,-3.7,176.2,32,6.5);

	this.instance_4 = new lib.FIZ23RTORSO001("synched",0);
	this.instance_4.setTransform(239.9,442.5,0.765,0.765,0,-3.7,176.2);

	this.instance_5 = new lib.FIZ23RARML001("single",0);
	this.instance_5.setTransform(251,389.3,0.765,0.765,0,-2,177.9,50.8,-51.9);

	this.instance_6 = new lib.FIZ23RBOW001("single",0);
	this.instance_6.setTransform(227.3,462.6,0.765,0.765,0,-3.7,176.2,-1.9,12.1);

	this.instance_7 = new lib.FIZ23RARMR001("single",0);
	this.instance_7.setTransform(219.6,392.6,0.765,0.765,0,-5.3,174.6,-52,-56.4);

	this.instance_8 = new lib.FIZ34RARMR001("single",4);
	this.instance_8.setTransform(192.3,440.4,0.765,0.765,0,-6.1,173.8);

	this.instance_9 = new lib.FIZ34RAPRON001("single",0);
	this.instance_9.setTransform(247.1,386.8,0.765,0.765,0,-6.1,173.8,43.8,10.3);

	this.instance_10 = new lib.FIZ34RTIE001("synched",0);
	this.instance_10.setTransform(256.8,461.2,0.765,0.765,0,-6.1,173.8);

	this.instance_11 = new lib.FIZ34RTORSO001("synched",0);
	this.instance_11.setTransform(253.7,438.8,0.765,0.765,0,-6.1,173.8);

	this.instance_12 = new lib.FIZ34RBOW001("single",0);
	this.instance_12.setTransform(237.3,464.9,0.765,0.765,0,-6.1,173.8,-2.9,18.2);

	this.instance_13 = new lib.FIZ34RAPRONBK001("single",0);
	this.instance_13.setTransform(257.6,442.6,0.765,0.765,0,-6.1,173.8,38,84.4);

	this.instance_14 = new lib.FIZ34RARML001("single",3);
	this.instance_14.setTransform(305.4,417.7,0.765,0.765,0,-6.1,173.8);

	this.instance_15 = new lib.FIZ34RCOLLARFR001("single",0);
	this.instance_15.setTransform(230.1,384.8,0.764,0.764,0,-16.9,163,13.5,27.9);

	this.instance_16 = new lib.FIZ34LAPRON002("single",1);
	this.instance_16.setTransform(284.2,390.6,0.76,0.781,0,2.7,-178.3,43.6,10.1);

	this.instance_17 = new lib.FIZ34LTIE001("synched",0);
	this.instance_17.setTransform(254.9,454.9,0.79,0.79,0,18.3,-161.6);

	this.instance_18 = new lib.FIZ34LTORSO002("synched",0);
	this.instance_18.setTransform(261,437.6,0.585,0.585,0,5.6,-174.3);

	this.instance_19 = new lib.FIZ34LCOLLARFR01("single",0);
	this.instance_19.setTransform(271.8,381.8,0.766,0.766,0,-2.1,177.8,13.6,28.1);

	this.instance_20 = new lib.FIZ34LBOW001("single",0);
	this.instance_20.setTransform(236.2,450.1,0.789,0.789,0,12.8,-167.1,-3.1,18.2);

	this.instance_21 = new lib.FIZZYIDLE11509("synched",0,false);
	this.instance_21.setTransform(244.7,319.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_7,p:{regX:-52,regY:-56.4,skewX:-5.3,skewY:174.6,x:219.6,y:392.6,scaleY:0.765,startPosition:0,scaleX:0.765}},{t:this.instance_6,p:{skewX:-3.7,skewY:176.2,x:227.3,y:462.6,regY:12.1,regX:-1.9}},{t:this.instance_5,p:{regX:50.8,regY:-51.9,skewX:-2,skewY:177.9,x:251,y:389.3,scaleY:0.765,startPosition:0,scaleX:0.765}},{t:this.instance_4,p:{skewX:-3.7,skewY:176.2,x:239.9,y:442.5}},{t:this.instance_3,p:{skewX:-3.7,skewY:176.2,x:242.1,y:460.2,regX:32,regY:6.5}},{t:this.instance_2,p:{regY:9.1,skewX:-3.7,skewY:176.2,x:237,y:391,regX:41.6}},{t:this.instance_1,p:{skewX:-1.2,skewY:178.7,x:225.9,y:388.1,regX:56.1,regY:42.4,scaleX:0.747,scaleY:0.765}}]},19).to({state:[{t:this.instance_7,p:{regX:-51.5,regY:-60.9,skewX:-7.6,skewY:172.3,x:215,y:391.6,scaleY:0.765,startPosition:0,scaleX:0.765}},{t:this.instance_6,p:{skewX:-4.6,skewY:175.3,x:224.3,y:464.9,regY:12.1,regX:-1.9}},{t:this.instance_5,p:{regX:54.2,regY:-55,skewX:-1.5,skewY:178.4,x:244.1,y:389.1,scaleY:0.765,startPosition:0,scaleX:0.765}},{t:this.instance_4,p:{skewX:-4.6,skewY:175.3,x:236.6,y:444.6}},{t:this.instance_3,p:{skewX:-4.6,skewY:175.3,x:239.1,y:462.3,regX:32,regY:6.5}},{t:this.instance_2,p:{regY:9.2,skewX:-4.6,skewY:175.3,x:233,y:393.2,regX:41.6}},{t:this.instance_1,p:{skewX:-1,skewY:178.9,x:221.9,y:390.2,regX:56.1,regY:42.4,scaleX:0.747,scaleY:0.765}}]},3).to({state:[{t:this.instance_7,p:{regX:-51.9,regY:-59.4,skewX:-7.1,skewY:174.1,x:217.9,y:391.9,scaleY:0.771,startPosition:1,scaleX:0.765}},{t:this.instance_6,p:{skewX:-4,skewY:175.9,x:226.1,y:464.3,regY:12.2,regX:-1.9}},{t:this.instance_5,p:{regX:48.3,regY:-50.4,skewX:-0.3,skewY:179.6,x:251.4,y:391.9,scaleY:0.776,startPosition:1,scaleX:0.765}},{t:this.instance_4,p:{skewX:-4,skewY:175.9,x:238.6,y:444}},{t:this.instance_3,p:{skewX:-4,skewY:175.9,x:240.9,y:461.7,regX:32,regY:6.5}},{t:this.instance_2,p:{regY:9.1,skewX:-4,skewY:175.9,x:235.5,y:392.5,regX:41.6}},{t:this.instance_1,p:{skewX:-1.2,skewY:178.7,x:224.4,y:389.6,regX:56.1,regY:42.4,scaleX:0.747,scaleY:0.765}}]},2).to({state:[{t:this.instance_7,p:{regX:0,regY:0,skewX:0.4,skewY:-179.5,x:196.3,y:430.7,scaleY:0.765,startPosition:2,scaleX:0.765}},{t:this.instance_6,p:{skewX:0.4,skewY:-179.5,x:238.9,y:458.4,regY:12.2,regX:-2}},{t:this.instance_5,p:{regX:0,regY:0,skewX:0.4,skewY:-179.5,x:306.5,y:427,scaleY:0.765,startPosition:2,scaleX:0.765}},{t:this.instance_4,p:{skewX:0.4,skewY:-179.5,x:252.9,y:439.2}},{t:this.instance_3,p:{skewX:0.4,skewY:-179.5,x:253.8,y:457.1,regX:31.9,regY:6.6}},{t:this.instance_2,p:{regY:9.2,skewX:0.4,skewY:-179.5,x:253.9,y:387.7,regX:41.5}},{t:this.instance_1,p:{skewX:-2.7,skewY:177.2,x:243.7,y:385.1,regX:56.1,regY:42.4,scaleX:0.747,scaleY:0.765}}]},2).to({state:[{t:this.instance_7,p:{regX:0,regY:0,skewX:6.4,skewY:-173.5,x:207.9,y:418.5,scaleY:0.765,startPosition:3,scaleX:0.765}},{t:this.instance_6,p:{skewX:6.4,skewY:-173.5,x:247.4,y:450.3,regY:12.1,regX:-2}},{t:this.instance_5,p:{regX:0,regY:0,skewX:6.4,skewY:-173.5,x:317.9,y:426.1,scaleY:0.765,startPosition:3,scaleX:0.765}},{t:this.instance_4,p:{skewX:6.4,skewY:-173.5,x:263.3,y:432.8}},{t:this.instance_3,p:{skewX:6.4,skewY:-173.5,x:262.4,y:450.6,regX:32,regY:6.6}},{t:this.instance_2,p:{regY:9,skewX:6.4,skewY:-173.5,x:269.6,y:381.6,regX:41.4}},{t:this.instance_1,p:{skewX:-2.2,skewY:177.7,x:258.8,y:379.2,regX:55.8,regY:42.5,scaleX:0.747,scaleY:0.765}}]},1).to({state:[{t:this.instance_7,p:{regX:0,regY:0,skewX:6.9,skewY:-173,x:211.2,y:416.4,scaleY:0.765,startPosition:4,scaleX:0.765}},{t:this.instance_6,p:{skewX:6.9,skewY:-173,x:250.4,y:448.7,regY:12.1,regX:-2}},{t:this.instance_5,p:{regX:0,regY:0,skewX:6.9,skewY:-173,x:321.2,y:425.2,scaleY:0.765,startPosition:4,scaleX:0.765}},{t:this.instance_4,p:{skewX:6.9,skewY:-173,x:266.5,y:431.2}},{t:this.instance_3,p:{skewX:6.9,skewY:-173,x:265.4,y:449.1,regX:32,regY:6.5}},{t:this.instance_2,p:{regY:9.1,skewX:6.9,skewY:-173,x:273.3,y:380.2,regX:41.4}},{t:this.instance_1,p:{skewX:-1.6,skewY:178.3,x:262.5,y:377.7,regX:55.8,regY:42.6,scaleX:0.747,scaleY:0.765}}]},1).to({state:[{t:this.instance_7,p:{regX:-49.4,regY:-57.8,skewX:5.9,skewY:-174,x:252.5,y:378.1,scaleY:0.765,startPosition:4,scaleX:0.765}},{t:this.instance_6,p:{skewX:6.7,skewY:-173.2,x:249.2,y:449.8,regY:12.1,regX:-2}},{t:this.instance_5,p:{regX:54.4,regY:-54.1,skewX:7.9,skewY:-172,x:283.4,y:379.9,scaleY:0.765,startPosition:4,scaleX:0.765}},{t:this.instance_4,p:{skewX:6.7,skewY:-173.2,x:265.2,y:432.2}},{t:this.instance_3,p:{skewX:6.7,skewY:-173.2,x:264.2,y:450,regX:32,regY:6.5}},{t:this.instance_2,p:{regY:9.1,skewX:6.7,skewY:-173.2,x:271.8,y:381.1,regX:41.4}},{t:this.instance_1,p:{skewX:-1.9,skewY:178,x:261,y:378.7,regX:55.8,regY:42.6,scaleX:0.747,scaleY:0.765}}]},2).to({state:[{t:this.instance_7,p:{regX:-50.5,regY:-57.7,skewX:5.1,skewY:-174.8,x:252.3,y:378.8,scaleY:0.765,startPosition:4,scaleX:0.765}},{t:this.instance_6,p:{skewX:6.6,skewY:-173.3,x:248.3,y:450.3,regY:12.1,regX:-2}},{t:this.instance_5,p:{regX:53.5,regY:-53.5,skewX:8.4,skewY:-171.5,x:282.9,y:381,scaleY:0.765,startPosition:4,scaleX:0.765}},{t:this.instance_4,p:{skewX:6.6,skewY:-173.3,x:264.2,y:432.7}},{t:this.instance_3,p:{skewX:6.6,skewY:-173.3,x:263.2,y:450.6,regX:32.1,regY:6.5}},{t:this.instance_2,p:{regY:9.1,skewX:6.6,skewY:-173.3,x:270.8,y:381.6,regX:41.3}},{t:this.instance_1,p:{skewX:-1.9,skewY:178,x:260,y:379.2,regX:55.8,regY:42.6,scaleX:0.747,scaleY:0.765}}]},2).to({state:[{t:this.instance_7,p:{regX:-50.5,regY:-57.7,skewX:5.1,skewY:-174.8,x:251.9,y:379.1,scaleY:0.765,startPosition:4,scaleX:0.765}},{t:this.instance_6,p:{skewX:6.6,skewY:-173.3,x:247.9,y:450.6,regY:12.2,regX:-1.9}},{t:this.instance_5,p:{regX:53.5,regY:-53.5,skewX:8.4,skewY:-171.5,x:282.5,y:381.3,scaleY:0.765,startPosition:4,scaleX:0.765}},{t:this.instance_4,p:{skewX:6.6,skewY:-173.3,x:263.9,y:433}},{t:this.instance_3,p:{skewX:6.6,skewY:-173.3,x:262.8,y:450.9,regX:32.1,regY:6.5}},{t:this.instance_2,p:{regY:9.2,skewX:6.6,skewY:-173.3,x:270.4,y:382,regX:41.4}},{t:this.instance_1,p:{skewX:-1.9,skewY:178,x:259.5,y:379.6,regX:55.9,regY:42.6,scaleX:0.747,scaleY:0.765}}]},2).to({state:[{t:this.instance_7,p:{regX:-50.5,regY:-57.8,skewX:6.7,skewY:-173.2,x:253.5,y:382.3,scaleY:0.765,startPosition:4,scaleX:0.761}},{t:this.instance_6,p:{skewX:6.9,skewY:-173,x:248.5,y:454.2,regY:12.2,regX:-1.9}},{t:this.instance_5,p:{regX:53.5,regY:-53.5,skewX:8.7,skewY:-171.2,x:283.5,y:385,scaleY:0.765,startPosition:4,scaleX:0.765}},{t:this.instance_4,p:{skewX:6.9,skewY:-173,x:264.6,y:436.6}},{t:this.instance_3,p:{skewX:6.9,skewY:-173,x:263.5,y:454.5,regX:32,regY:6.5}},{t:this.instance_2,p:{regY:9.1,skewX:6.9,skewY:-173,x:271.4,y:385.6,regX:41.4}},{t:this.instance_1,p:{skewX:-0.6,skewY:179.3,x:260.6,y:382.9,regX:55.8,regY:42.5,scaleX:0.747,scaleY:0.765}}]},17).to({state:[{t:this.instance_6,p:{skewX:8.9,skewY:-171,x:250.2,y:463.4,regY:12.1,regX:-1.9}},{t:this.instance_5,p:{regX:53.5,regY:-53.5,skewX:10.7,skewY:-169.2,x:287.6,y:395.6,scaleY:0.765,startPosition:4,scaleX:0.765}},{t:this.instance_4,p:{skewX:8.9,skewY:-171,x:267,y:446.5}},{t:this.instance_3,p:{skewX:8.9,skewY:-171,x:265.2,y:464.3,regX:32,regY:6.5}},{t:this.instance_7,p:{regX:-50.5,regY:-57.7,skewX:9.3,skewY:-170.6,x:257.2,y:392.2,scaleY:0.765,startPosition:5,scaleX:0.765}},{t:this.instance_2,p:{regY:9.2,skewX:8.9,skewY:-171,x:275.6,y:395.8,regX:41.3}},{t:this.instance_1,p:{skewX:7.7,skewY:-172.2,x:265,y:392.2,regX:55.9,regY:42.5,scaleX:0.746,scaleY:0.764}}]},1).to({state:[{t:this.instance_6,p:{skewX:9.7,skewY:-170.2,x:251.3,y:465.7,regY:12.1,regX:-1.9}},{t:this.instance_5,p:{regX:53.5,regY:-53.5,skewX:11.5,skewY:-168.4,x:289.6,y:398.5,scaleY:0.765,startPosition:7,scaleX:0.765}},{t:this.instance_4,p:{skewX:9.7,skewY:-170.2,x:268.3,y:449}},{t:this.instance_3,p:{skewX:9.7,skewY:-170.2,x:266.3,y:466.8,regX:32,regY:6.5}},{t:this.instance_7,p:{regX:-50.5,regY:-57.8,skewX:9.5,skewY:-170.4,x:259.3,y:394.6,scaleY:0.765,startPosition:7,scaleX:0.765}},{t:this.instance_2,p:{regY:9.2,skewX:9.7,skewY:-170.2,x:277.5,y:398.4,regX:41.3}},{t:this.instance_1,p:{skewX:12.1,skewY:-167.8,x:267.7,y:394.8,regX:55.9,regY:42.5,scaleX:0.746,scaleY:0.764}}]},1).to({state:[{t:this.instance_6,p:{skewX:9.8,skewY:-170.1,x:251.6,y:466,regY:12.1,regX:-1.9}},{t:this.instance_5,p:{regX:53.4,regY:-53.5,skewX:12.4,skewY:-167.5,x:290.1,y:398.8,scaleY:0.765,startPosition:7,scaleX:0.765}},{t:this.instance_4,p:{skewX:9.8,skewY:-170.1,x:268.7,y:449.4}},{t:this.instance_3,p:{skewX:9.8,skewY:-170.1,x:266.6,y:467.1,regX:32,regY:6.4}},{t:this.instance_7,p:{regX:-50.6,regY:-57.7,skewX:9.9,skewY:-170,x:259.8,y:394.5,scaleY:0.765,startPosition:7,scaleX:0.765}},{t:this.instance_2,p:{regY:9.2,skewX:9.8,skewY:-170.1,x:278,y:398.8,regX:41.3}},{t:this.instance_1,p:{skewX:12.4,skewY:-167.5,x:268.2,y:395.1,regX:55.8,regY:42.5,scaleX:0.746,scaleY:0.764}}]},2).to({state:[{t:this.instance_6,p:{skewX:8.7,skewY:-171.2,x:249.5,y:464.8,regY:12.1,regX:-1.9}},{t:this.instance_5,p:{regX:53.6,regY:-53.6,skewX:9.7,skewY:-175.3,x:286.4,y:396.9,scaleY:0.765,startPosition:7,scaleX:0.768}},{t:this.instance_4,p:{skewX:8.7,skewY:-171.2,x:266.2,y:447.9}},{t:this.instance_3,p:{skewX:8.7,skewY:-171.2,x:264.4,y:465.6,regX:32,regY:6.4}},{t:this.instance_7,p:{regX:-50.5,regY:-57.8,skewX:4.1,skewY:-175.8,x:256.2,y:393.5,scaleY:0.765,startPosition:7,scaleX:0.765}},{t:this.instance_2,p:{regY:9.2,skewX:8.7,skewY:-171.2,x:274.5,y:397.1,regX:41.2}},{t:this.instance_1,p:{skewX:9.9,skewY:-170,x:264.3,y:392.8,regX:55.8,regY:42.5,scaleX:0.746,scaleY:0.764}}]},2).to({state:[{t:this.instance_6,p:{skewX:5.1,skewY:-174.8,x:245,y:463.8,regY:12.1,regX:-1.9}},{t:this.instance_5,p:{regX:53.5,regY:-53.5,skewX:6.9,skewY:-173,x:277.8,y:393.8,scaleY:0.765,startPosition:9,scaleX:0.765}},{t:this.instance_4,p:{skewX:5.1,skewY:-174.8,x:260.6,y:445.9}},{t:this.instance_3,p:{skewX:5.1,skewY:-174.8,x:260,y:463.7,regX:32,regY:6.5}},{t:this.instance_2,p:{regY:9.1,skewX:5.1,skewY:-174.8,x:265.8,y:394.6,regX:41.2}},{t:this.instance_7,p:{regX:-50.5,regY:-57.8,skewX:13.5,skewY:-166.4,x:247.3,y:392.3,scaleY:0.764,startPosition:8,scaleX:0.764}},{t:this.instance_1,p:{skewX:1.1,skewY:-178.8,x:254,y:390.2,regX:55.8,regY:42.5,scaleX:0.746,scaleY:0.764}}]},2).to({state:[{t:this.instance_15,p:{regX:13.5,regY:27.9,skewX:-16.9,skewY:163,x:230.1,y:384.8,scaleX:0.764,scaleY:0.764}},{t:this.instance_14,p:{regX:0,regY:0,skewX:-6.1,skewY:173.8,x:305.4,y:417.7,startPosition:3,scaleX:0.765,scaleY:0.765}},{t:this.instance_13,p:{regY:84.4,skewX:-6.1,skewY:173.8,x:257.6,y:442.6,regX:38,scaleX:0.765,scaleY:0.765}},{t:this.instance_12,p:{skewX:-6.1,skewY:173.8,x:237.3,y:464.9,regX:-2.9,regY:18.2,scaleX:0.765,scaleY:0.765}},{t:this.instance_11,p:{skewX:-6.1,skewY:173.8,x:253.7,y:438.8,scaleX:0.765,scaleY:0.765}},{t:this.instance_10,p:{skewX:-6.1,skewY:173.8,x:256.8,y:461.2,scaleX:0.765,scaleY:0.765}},{t:this.instance_9,p:{regY:10.3,skewX:-6.1,skewY:173.8,x:247.1,y:386.8,regX:43.8,scaleX:0.765,scaleY:0.765}},{t:this.instance_8,p:{skewX:-6.1,skewY:173.8,x:192.3,y:440.4,startPosition:4,regX:0,regY:0,scaleX:0.765,scaleY:0.765}}]},1).to({state:[{t:this.instance_15,p:{regX:13.6,regY:28,skewX:-21.3,skewY:158.6,x:226.3,y:384.7,scaleX:0.764,scaleY:0.764}},{t:this.instance_14,p:{regX:55.5,regY:-44,skewX:-8.2,skewY:171.7,x:255.9,y:387,startPosition:4,scaleX:0.765,scaleY:0.765}},{t:this.instance_13,p:{regY:84.3,skewX:-7.4,skewY:172.5,x:255,y:440.9,regX:38,scaleX:0.765,scaleY:0.765}},{t:this.instance_12,p:{skewX:-7.4,skewY:172.5,x:235.2,y:463.7,regX:-2.9,regY:18.2,scaleX:0.765,scaleY:0.765}},{t:this.instance_11,p:{skewX:-7.4,skewY:172.5,x:251.1,y:437.1,scaleX:0.765,scaleY:0.765}},{t:this.instance_10,p:{skewX:-7.4,skewY:172.5,x:254.7,y:459.5,scaleX:0.765,scaleY:0.765}},{t:this.instance_9,p:{regY:10.4,skewX:-7.4,skewY:172.5,x:243.3,y:385.4,regX:43.8,scaleX:0.765,scaleY:0.765}},{t:this.instance_8,p:{skewX:-7.4,skewY:172.5,x:189.7,y:440.1,startPosition:5,regX:0,regY:0,scaleX:0.765,scaleY:0.765}}]},2).to({state:[{t:this.instance_15,p:{regX:13.5,regY:27.9,skewX:-23.1,skewY:156.8,x:225,y:384.6,scaleX:0.764,scaleY:0.764}},{t:this.instance_14,p:{regX:0,regY:0,skewX:-7.9,skewY:172,x:301.2,y:413.8,startPosition:5,scaleX:0.765,scaleY:0.765}},{t:this.instance_13,p:{regY:84.2,skewX:-7.9,skewY:172,x:254.2,y:440.2,regX:37.9,scaleX:0.765,scaleY:0.765}},{t:this.instance_12,p:{skewX:-7.9,skewY:172,x:234.6,y:463.2,regX:-3,regY:18.2,scaleX:0.765,scaleY:0.765}},{t:this.instance_11,p:{skewX:-7.9,skewY:172,x:250.2,y:436.5,scaleX:0.765,scaleY:0.765}},{t:this.instance_10,p:{skewX:-7.9,skewY:172,x:254,y:458.8,scaleX:0.765,scaleY:0.765}},{t:this.instance_9,p:{regY:10.3,skewX:-7.9,skewY:172,x:241.9,y:384.8,regX:43.8,scaleX:0.765,scaleY:0.765}},{t:this.instance_8,p:{skewX:-7.9,skewY:172,x:188.8,y:440.1,startPosition:6,regX:0,regY:0,scaleX:0.765,scaleY:0.765}}]},2).to({state:[{t:this.instance_15,p:{regX:13.6,regY:27.9,skewX:-22.5,skewY:157.4,x:226,y:384.8,scaleX:0.764,scaleY:0.764}},{t:this.instance_14,p:{regX:55.4,regY:-43.7,skewX:-8.7,skewY:171.2,x:255.7,y:387,startPosition:6,scaleX:0.765,scaleY:0.765}},{t:this.instance_13,p:{regY:84.3,skewX:-7.6,skewY:172.3,x:254.9,y:440.6,regX:37.9,scaleX:0.765,scaleY:0.765}},{t:this.instance_12,p:{skewX:-7.6,skewY:172.3,x:235.2,y:463.4,regX:-3,regY:18.2,scaleX:0.765,scaleY:0.765}},{t:this.instance_11,p:{skewX:-7.6,skewY:172.3,x:251,y:436.9,scaleX:0.765,scaleY:0.765}},{t:this.instance_10,p:{skewX:-7.6,skewY:172.3,x:254.6,y:459.2,scaleX:0.765,scaleY:0.765}},{t:this.instance_9,p:{regY:10.4,skewX:-7.6,skewY:172.3,x:242.9,y:385.2,regX:43.8,scaleX:0.765,scaleY:0.765}},{t:this.instance_8,p:{skewX:-7.6,skewY:172.3,x:189.6,y:440,startPosition:6,regX:0,regY:0,scaleX:0.765,scaleY:0.765}}]},2).to({state:[{t:this.instance_15,p:{regX:13.6,regY:27.9,skewX:-22.2,skewY:157.7,x:226.3,y:384.7,scaleX:0.764,scaleY:0.764}},{t:this.instance_14,p:{regX:58.5,regY:-43.3,skewX:-8.5,skewY:171.4,x:253.6,y:387.6,startPosition:7,scaleX:0.765,scaleY:0.765}},{t:this.instance_13,p:{regY:84.4,skewX:-7.5,skewY:172.4,x:255.1,y:440.7,regX:38,scaleX:0.765,scaleY:0.765}},{t:this.instance_12,p:{skewX:-7.5,skewY:172.4,x:235.3,y:463.4,regX:-3,regY:18.3,scaleX:0.765,scaleY:0.765}},{t:this.instance_11,p:{skewX:-7.5,skewY:172.4,x:251.1,y:436.9,scaleX:0.765,scaleY:0.765}},{t:this.instance_10,p:{skewX:-7.5,skewY:172.4,x:254.7,y:459.2,scaleX:0.765,scaleY:0.765}},{t:this.instance_9,p:{regY:10.5,skewX:-7.5,skewY:172.4,x:243.2,y:385.2,regX:43.8,scaleX:0.765,scaleY:0.765}},{t:this.instance_8,p:{skewX:-7.5,skewY:172.4,x:189.7,y:439.9,startPosition:6,regX:0,regY:0,scaleX:0.765,scaleY:0.765}}]},2).to({state:[{t:this.instance_15,p:{regX:13.6,regY:27.9,skewX:-20.8,skewY:159.1,x:228.1,y:384.6,scaleX:0.764,scaleY:0.764}},{t:this.instance_14,p:{regX:58.5,regY:-43.3,skewX:-8,skewY:171.9,x:255.5,y:388,startPosition:7,scaleX:0.765,scaleY:0.765}},{t:this.instance_13,p:{regY:84.3,skewX:-6.9,skewY:173,x:256.4,y:441,regX:38.1,scaleX:0.765,scaleY:0.765}},{t:this.instance_12,p:{skewX:-6.9,skewY:173,x:236.6,y:463.7,regX:-3,regY:18.3,scaleX:0.765,scaleY:0.765}},{t:this.instance_11,p:{skewX:-6.9,skewY:173,x:252.6,y:437.3,scaleX:0.765,scaleY:0.765}},{t:this.instance_10,p:{skewX:-6.9,skewY:173,x:256,y:459.6,scaleX:0.765,scaleY:0.765}},{t:this.instance_9,p:{regY:10.5,skewX:-6.9,skewY:173,x:245.1,y:385.5,regX:43.9,scaleX:0.765,scaleY:0.765}},{t:this.instance_8,p:{skewX:-6.9,skewY:173,x:191.1,y:439.7,startPosition:6,regX:0,regY:0,scaleX:0.765,scaleY:0.765}}]},10).to({state:[{t:this.instance_15,p:{regX:13.6,regY:28,skewX:-18.6,skewY:161.3,x:230.5,y:384.9,scaleX:0.764,scaleY:0.764}},{t:this.instance_14,p:{regX:58.5,regY:-43.3,skewX:-7.5,skewY:172.4,x:257.8,y:389,startPosition:7,scaleX:0.765,scaleY:0.765}},{t:this.instance_13,p:{regY:84.4,skewX:-6.4,skewY:173.5,x:258.3,y:441.9,regX:38.1,scaleX:0.765,scaleY:0.765}},{t:this.instance_12,p:{skewX:-6.4,skewY:173.5,x:238.3,y:464.4,regX:-3,regY:18.2,scaleX:0.765,scaleY:0.765}},{t:this.instance_11,p:{skewX:-6.4,skewY:173.5,x:254.5,y:438.1,scaleX:0.765,scaleY:0.765}},{t:this.instance_10,p:{skewX:-6.4,skewY:173.5,x:257.7,y:460.5,scaleX:0.765,scaleY:0.765}},{t:this.instance_9,p:{regY:10.5,skewX:-6.4,skewY:173.5,x:247.4,y:386.4,regX:43.9,scaleX:0.765,scaleY:0.765}},{t:this.instance_8,p:{skewX:-6.4,skewY:173.5,x:193,y:440,startPosition:6,regX:0,regY:0,scaleX:0.765,scaleY:0.765}}]},1).to({state:[{t:this.instance_15,p:{regX:13.7,regY:28.1,skewX:-17,skewY:162.9,x:231.6,y:384.9,scaleX:0.764,scaleY:0.764}},{t:this.instance_14,p:{regX:58.5,regY:-43.3,skewX:-7.2,skewY:172.7,x:258.9,y:389.4,startPosition:7,scaleX:0.765,scaleY:0.765}},{t:this.instance_13,p:{regY:84.4,skewX:-6.2,skewY:173.7,x:259.1,y:442.4,regX:38.1,scaleX:0.765,scaleY:0.765}},{t:this.instance_12,p:{skewX:-6.2,skewY:173.7,x:238.8,y:464.7,regX:-2.9,regY:18.2,scaleX:0.765,scaleY:0.765}},{t:this.instance_11,p:{skewX:-6.2,skewY:173.7,x:255.3,y:438.5,scaleX:0.765,scaleY:0.765}},{t:this.instance_10,p:{skewX:-6.2,skewY:173.7,x:258.4,y:461,scaleX:0.765,scaleY:0.765}},{t:this.instance_9,p:{regY:10.5,skewX:-6.2,skewY:173.7,x:248.5,y:386.7,regX:43.9,scaleX:0.765,scaleY:0.765}},{t:this.instance_8,p:{skewX:-6.2,skewY:173.7,x:193.8,y:440.1,startPosition:6,regX:0,regY:0,scaleX:0.765,scaleY:0.765}}]},2).to({state:[{t:this.instance_15,p:{regX:13.7,regY:28,skewX:-16.2,skewY:163.7,x:232.6,y:385,scaleX:0.764,scaleY:0.764}},{t:this.instance_14,p:{regX:58.4,regY:-43.3,skewX:-6.9,skewY:173,x:260,y:389.8,startPosition:7,scaleX:0.765,scaleY:0.765}},{t:this.instance_13,p:{regY:84.4,skewX:-5.9,skewY:174,x:259.8,y:442.8,regX:38.1,scaleX:0.765,scaleY:0.765}},{t:this.instance_12,p:{skewX:-5.9,skewY:174,x:239.6,y:465,regX:-3,regY:18.2,scaleX:0.765,scaleY:0.765}},{t:this.instance_11,p:{skewX:-5.9,skewY:174,x:256,y:438.9,scaleX:0.765,scaleY:0.765}},{t:this.instance_10,p:{skewX:-5.9,skewY:174,x:259,y:461.3,scaleX:0.765,scaleY:0.765}},{t:this.instance_9,p:{regY:10.4,skewX:-5.9,skewY:174,x:249.6,y:386.9,regX:43.8,scaleX:0.765,scaleY:0.765}},{t:this.instance_8,p:{skewX:-5.9,skewY:174,x:194.5,y:440.1,startPosition:6,regX:0,regY:0,scaleX:0.765,scaleY:0.765}}]},2).to({state:[{t:this.instance_15,p:{regX:13.8,regY:27.9,skewX:-17.9,skewY:162,x:229.8,y:384.2,scaleX:0.764,scaleY:0.764}},{t:this.instance_14,p:{regX:58.5,regY:-43.2,skewX:-7.5,skewY:173.3,x:257.7,y:389,startPosition:7,scaleX:0.773,scaleY:0.765}},{t:this.instance_13,p:{regY:84.5,skewX:-6.4,skewY:173.5,x:258.1,y:441.9,regX:38.1,scaleX:0.765,scaleY:0.765}},{t:this.instance_12,p:{skewX:-6.4,skewY:173.5,x:238.2,y:464.3,regX:-3,regY:18.2,scaleX:0.765,scaleY:0.765}},{t:this.instance_11,p:{skewX:-6.4,skewY:173.5,x:254.3,y:438,scaleX:0.765,scaleY:0.765}},{t:this.instance_10,p:{skewX:-6.4,skewY:173.5,x:257.6,y:460.4,scaleX:0.765,scaleY:0.765}},{t:this.instance_9,p:{regY:10.5,skewX:-6.4,skewY:173.5,x:247.3,y:386.3,regX:43.9,scaleX:0.765,scaleY:0.765}},{t:this.instance_8,p:{skewX:-7.3,skewY:172.6,x:229.2,y:391,startPosition:6,regX:-54.5,regY:-58,scaleX:0.765,scaleY:0.765}}]},11).to({state:[{t:this.instance_15,p:{regX:13.8,regY:27.8,skewX:-18.8,skewY:161.1,x:228.2,y:384,scaleX:0.764,scaleY:0.764}},{t:this.instance_14,p:{regX:58.4,regY:-43.3,skewX:-7.7,skewY:173.1,x:256.3,y:388.4,startPosition:7,scaleX:0.776,scaleY:0.764}},{t:this.instance_13,p:{regY:84.5,skewX:-6.7,skewY:173.2,x:256.9,y:441.4,regX:38.1,scaleX:0.765,scaleY:0.765}},{t:this.instance_12,p:{skewX:-6.7,skewY:173.2,x:237,y:463.9,regX:-3,regY:18.2,scaleX:0.765,scaleY:0.765}},{t:this.instance_11,p:{skewX:-6.7,skewY:173.2,x:253,y:437.6,scaleX:0.765,scaleY:0.765}},{t:this.instance_10,p:{skewX:-6.7,skewY:173.2,x:256.4,y:459.9,scaleX:0.765,scaleY:0.765}},{t:this.instance_9,p:{regY:10.5,skewX:-6.7,skewY:173.2,x:245.7,y:385.8,regX:43.9,scaleX:0.765,scaleY:0.765}},{t:this.instance_8,p:{skewX:-8.2,skewY:171.7,x:226.4,y:389.9,startPosition:6,regX:-52.9,regY:-59.2,scaleX:0.765,scaleY:0.765}}]},2).to({state:[{t:this.instance_15,p:{regX:13.7,regY:27.8,skewX:-16,skewY:163.9,x:229.8,y:384.6,scaleX:0.764,scaleY:0.764}},{t:this.instance_14,p:{regX:58.5,regY:-43.4,skewX:-7.2,skewY:172.7,x:257.7,y:389.3,startPosition:8,scaleX:0.764,scaleY:0.764}},{t:this.instance_13,p:{regY:84.5,skewX:-6.2,skewY:173.7,x:257.9,y:442.3,regX:38.1,scaleX:0.765,scaleY:0.765}},{t:this.instance_12,p:{skewX:-6.2,skewY:173.7,x:237.8,y:464.7,regX:-3,regY:18.2,scaleX:0.765,scaleY:0.765}},{t:this.instance_11,p:{skewX:-6.2,skewY:173.7,x:254.1,y:438.5,scaleX:0.765,scaleY:0.765}},{t:this.instance_10,p:{skewX:-6.2,skewY:173.7,x:257.2,y:460.8,scaleX:0.765,scaleY:0.765}},{t:this.instance_9,p:{regY:10.5,skewX:-6.2,skewY:173.7,x:247.3,y:386.6,regX:43.9,scaleX:0.765,scaleY:0.765}},{t:this.instance_8,p:{skewX:-6.2,skewY:172.2,x:228.5,y:389.7,startPosition:7,regX:-53.9,regY:-60.4,scaleX:0.765,scaleY:0.765}}]},3).to({state:[{t:this.instance_15,p:{regX:13.6,regY:27.7,skewX:-7.4,skewY:172.5,x:243.3,y:383.5,scaleX:0.763,scaleY:0.763}},{t:this.instance_14,p:{regX:58.4,regY:-43.4,skewX:-3.4,skewY:176.5,x:264.3,y:390.3,startPosition:9,scaleX:0.764,scaleY:0.764}},{t:this.instance_13,p:{regY:84.5,skewX:-2.4,skewY:177.5,x:261,y:443.1,regX:38.1,scaleX:0.764,scaleY:0.764}},{t:this.instance_12,p:{skewX:-2.4,skewY:177.5,x:239.4,y:463,regX:-3,regY:18.2,scaleX:0.764,scaleY:0.764}},{t:this.instance_11,p:{skewX:-2.4,skewY:177.5,x:257.4,y:439,scaleX:0.764,scaleY:0.764}},{t:this.instance_10,p:{skewX:-2.4,skewY:177.5,x:259.1,y:460.5,scaleX:0.764,scaleY:0.764}},{t:this.instance_9,p:{regY:10.5,skewX:-2.4,skewY:177.5,x:254,y:386.8,regX:44,scaleX:0.764,scaleY:0.764}},{t:this.instance_8,p:{skewX:-2.4,skewY:177.5,x:232.7,y:386.4,startPosition:8,regX:-50.8,regY:-63.5,scaleX:0.764,scaleY:0.764}}]},1).to({state:[{t:this.instance_20,p:{scaleX:0.789,scaleY:0.789,skewX:12.8,skewY:-167.1,x:236.2,y:450.1,regX:-3.1}},{t:this.instance_14,p:{regX:45.9,regY:-52,skewX:-11.4,skewY:165.6,x:296.9,y:392.7,startPosition:10,scaleX:0.765,scaleY:0.764}},{t:this.instance_19,p:{regX:13.6,regY:28.1,skewX:-2.1,skewY:177.8,x:271.8,y:381.8}},{t:this.instance_18,p:{skewX:5.6,skewY:-174.3,x:261,y:437.6}},{t:this.instance_17,p:{skewX:18.3,skewY:-161.6,x:254.9,y:454.9}},{t:this.instance_16,p:{scaleY:0.781,skewX:2.7,skewY:-178.3,x:284.2,y:390.6,regY:10.1,regX:43.6}},{t:this.instance_8,p:{skewX:0.3,skewY:-179.6,x:262.6,y:379.1,startPosition:11,regX:-57,regY:-66.1,scaleX:0.762,scaleY:0.762}}]},2).to({state:[{t:this.instance_20,p:{scaleX:0.79,scaleY:0.79,skewX:13.5,skewY:-166.4,x:239.1,y:447,regX:-3.1}},{t:this.instance_14,p:{regX:58.5,regY:-43.3,skewX:-7.2,skewY:172.7,x:292,y:402.2,startPosition:10,scaleX:0.765,scaleY:0.765}},{t:this.instance_19,p:{regX:13.7,regY:28.2,skewX:0.7,skewY:-179.2,x:275.8,y:383.5}},{t:this.instance_18,p:{skewX:6.3,skewY:-173.6,x:264.1,y:438.3}},{t:this.instance_17,p:{skewX:19,skewY:-160.9,x:257.8,y:452.1}},{t:this.instance_16,p:{scaleY:0.782,skewX:3.4,skewY:-177.6,x:287.8,y:391.7,regY:10.1,regX:43.6}},{t:this.instance_8,p:{skewX:3.8,skewY:-176.1,x:266.7,y:381.6,startPosition:11,regX:-57.7,regY:-64,scaleX:0.763,scaleY:0.763}}]},1).to({state:[{t:this.instance_20,p:{scaleX:0.789,scaleY:0.789,skewX:13.3,skewY:-166.6,x:238.5,y:446.6,regX:-3.1}},{t:this.instance_14,p:{regX:47,regY:-52.5,skewX:-8.6,skewY:171.3,x:298.9,y:393.5,startPosition:10,scaleX:0.764,scaleY:0.764}},{t:this.instance_19,p:{regX:13.6,regY:28.1,skewX:0,skewY:180,x:275.1,y:382.5}},{t:this.instance_18,p:{skewX:6.1,skewY:-173.8,x:263.4,y:437.8}},{t:this.instance_17,p:{skewX:18.8,skewY:-161.1,x:257.2,y:451.6}},{t:this.instance_16,p:{scaleY:0.782,skewX:3.2,skewY:-177.8,x:287,y:391.1,regY:10.2,regX:43.6}},{t:this.instance_8,p:{skewX:3.6,skewY:-176.3,x:266.9,y:379.2,startPosition:11,regX:-59,regY:-66.4,scaleX:0.763,scaleY:0.763}}]},2).to({state:[{t:this.instance_20,p:{scaleX:0.789,scaleY:0.789,skewX:13.1,skewY:-166.8,x:238.3,y:446.1,regX:-3.1}},{t:this.instance_14,p:{regX:49.2,regY:-50.4,skewX:-9,skewY:170.9,x:297.1,y:394.5,startPosition:10,scaleX:0.764,scaleY:0.764}},{t:this.instance_19,p:{regX:13.6,regY:28.2,skewX:-0.6,skewY:179.3,x:274.3,y:382.1}},{t:this.instance_18,p:{skewX:5.9,skewY:-174,x:263.2,y:437.2}},{t:this.instance_17,p:{skewX:18.6,skewY:-161.3,x:257,y:451.1}},{t:this.instance_16,p:{scaleY:0.781,skewX:3.1,skewY:-177.9,x:286.5,y:390.5,regY:10.2,regX:43.7}},{t:this.instance_8,p:{skewX:3.4,skewY:-176.5,x:267,y:379.1,startPosition:11,regX:-59.7,regY:-65.8,scaleX:0.762,scaleY:0.762}}]},2).to({state:[{t:this.instance_20,p:{scaleX:0.789,scaleY:0.789,skewX:13.1,skewY:-166.8,x:238,y:445.8,regX:-3.1}},{t:this.instance_14,p:{regX:50.2,regY:-49.1,skewX:-9.6,skewY:170.3,x:296.3,y:395.2,startPosition:10,scaleX:0.764,scaleY:0.764}},{t:this.instance_19,p:{regX:13.6,regY:28.2,skewX:-0.9,skewY:179,x:274,y:381.9}},{t:this.instance_18,p:{skewX:5.9,skewY:-174,x:262.9,y:437}},{t:this.instance_17,p:{skewX:18.6,skewY:-161.3,x:256.8,y:450.8}},{t:this.instance_16,p:{scaleY:0.781,skewX:3.1,skewY:-177.9,x:286.3,y:390.3,regY:10.2,regX:43.7}},{t:this.instance_8,p:{skewX:3.2,skewY:-176.7,x:266.7,y:378.8,startPosition:11,regX:-59.7,regY:-65.7,scaleX:0.762,scaleY:0.762}}]},2).to({state:[{t:this.instance_20,p:{scaleX:0.789,scaleY:0.789,skewX:14.1,skewY:-165.8,x:239.5,y:446.8,regX:-3}},{t:this.instance_14,p:{regX:50.2,regY:-49.1,skewX:-8.6,skewY:171.3,x:298.7,y:397.2,startPosition:10,scaleX:0.764,scaleY:0.764}},{t:this.instance_19,p:{regX:13.5,regY:28.2,skewX:1.1,skewY:-178.8,x:277.3,y:383.7}},{t:this.instance_18,p:{skewX:6.9,skewY:-173,x:264.7,y:438.4}},{t:this.instance_17,p:{skewX:19.7,skewY:-160.2,x:258.3,y:452.1}},{t:this.instance_16,p:{scaleY:0.781,skewX:4.1,skewY:-176.9,x:288.8,y:392.1,regY:10.2,regX:43.8}},{t:this.instance_8,p:{skewX:4.2,skewY:-175.7,x:269.5,y:380.3,startPosition:11,regX:-59.8,regY:-65.7,scaleX:0.762,scaleY:0.762}}]},23).to({state:[{t:this.instance_20,p:{scaleX:0.789,scaleY:0.789,skewX:14.4,skewY:-165.5,x:240.2,y:447.1,regX:-3}},{t:this.instance_14,p:{regX:50.2,regY:-49.1,skewX:-8.3,skewY:171.6,x:299.6,y:397.8,startPosition:10,scaleX:0.764,scaleY:0.764}},{t:this.instance_19,p:{regX:13.5,regY:28.2,skewX:2.1,skewY:-177.8,x:278.3,y:384}},{t:this.instance_18,p:{skewX:7.2,skewY:-172.7,x:265.4,y:438.8}},{t:this.instance_17,p:{skewX:19.9,skewY:-160,x:258.9,y:452.6}},{t:this.instance_16,p:{scaleY:0.781,skewX:4.4,skewY:-176.6,x:289.7,y:392.7,regY:10.2,regX:43.8}},{t:this.instance_8,p:{skewX:4.5,skewY:-175.4,x:270.5,y:380.7,startPosition:11,regX:-59.8,regY:-65.7,scaleX:0.762,scaleY:0.762}}]},2).to({state:[{t:this.instance_20,p:{scaleX:0.789,scaleY:0.789,skewX:13.9,skewY:-166,x:239.4,y:446.9,regX:-3}},{t:this.instance_14,p:{regX:50.2,regY:-49.1,skewX:-8.9,skewY:171,x:298.3,y:397.1,startPosition:15,scaleX:0.764,scaleY:0.764}},{t:this.instance_19,p:{regX:13.5,regY:28.2,skewX:0.8,skewY:-179.1,x:276.8,y:383.2}},{t:this.instance_18,p:{skewX:6.7,skewY:-173.2,x:264.5,y:438.4}},{t:this.instance_17,p:{skewX:19.4,skewY:-160.5,x:258.1,y:452.2}},{t:this.instance_16,p:{scaleY:0.781,skewX:3.8,skewY:-177.2,x:288.3,y:392,regY:10.2,regX:43.8}},{t:this.instance_8,p:{skewX:3.9,skewY:-176,x:269.1,y:380.3,startPosition:13,regX:-59.8,regY:-65.7,scaleX:0.762,scaleY:0.762}}]},3).to({state:[{t:this.instance_7,p:{regX:0,regY:0,skewX:1.5,skewY:-178.4,x:196.9,y:426.9,scaleY:0.765,startPosition:12,scaleX:0.765}},{t:this.instance_6,p:{skewX:1.5,skewY:-178.4,x:239.1,y:455.3,regY:12.2,regX:-2}},{t:this.instance_5,p:{regX:0,regY:0,skewX:1.5,skewY:-178.4,x:307.2,y:425,scaleY:0.765,startPosition:12,scaleX:0.765}},{t:this.instance_4,p:{skewX:1.5,skewY:-178.4,x:253.4,y:436.2}},{t:this.instance_3,p:{skewX:1.5,skewY:-178.4,x:254,y:454.1,regX:32,regY:6.5}},{t:this.instance_2,p:{regY:9.2,skewX:1.5,skewY:-178.4,x:255.3,y:384.9,regX:41.5}},{t:this.instance_1,p:{skewX:-3.9,skewY:176,x:243.4,y:381.4,regX:56.1,regY:42.4,scaleX:0.747,scaleY:0.764}}]},2).to({state:[{t:this.instance_7,p:{regX:0,regY:0,skewX:-1.2,skewY:178.7,x:190.7,y:429.1,scaleY:0.765,startPosition:13,scaleX:0.765}},{t:this.instance_6,p:{skewX:-1.2,skewY:178.7,x:234.2,y:455.4,regY:12.1,regX:-2}},{t:this.instance_5,p:{regX:0,regY:0,skewX:-1.2,skewY:178.7,x:300.8,y:422,scaleY:0.765,startPosition:13,scaleX:0.765}},{t:this.instance_4,p:{skewX:-1.2,skewY:178.7,x:247.5,y:435.8}},{t:this.instance_3,p:{skewX:-1.2,skewY:178.7,x:249,y:453.6,regX:32,regY:6.5}},{t:this.instance_2,p:{regY:9.2,skewX:-1.2,skewY:178.7,x:246.9,y:384.4,regX:41.6}},{t:this.instance_1,p:{skewX:-10.7,skewY:169.2,x:235.1,y:382.3,regX:56.1,regY:42.4,scaleX:0.747,scaleY:0.765}}]},1).to({state:[{t:this.instance_7,p:{regX:0,regY:0,skewX:-2,skewY:177.9,x:188.6,y:429.5,scaleY:0.765,startPosition:14,scaleX:0.765}},{t:this.instance_6,p:{skewX:-2,skewY:177.9,x:232.5,y:455.2,regY:12.1,regX:-2}},{t:this.instance_5,p:{regX:0,regY:0,skewX:-2,skewY:177.9,x:298.6,y:420.9,scaleY:0.765,startPosition:14,scaleX:0.765}},{t:this.instance_4,p:{skewX:-2,skewY:177.9,x:245.5,y:435.4}},{t:this.instance_3,p:{skewX:-2,skewY:177.9,x:247.2,y:453.3,regX:32,regY:6.5}},{t:this.instance_2,p:{regY:9.2,skewX:-2,skewY:177.9,x:244.3,y:384.1,regX:41.5}},{t:this.instance_1,p:{skewX:-13.5,skewY:166.4,x:232.5,y:382.5,regX:56,regY:42.4,scaleX:0.747,scaleY:0.765}}]},2).to({state:[{t:this.instance_7,p:{regX:0,regY:0,skewX:-2.5,skewY:177.4,x:188,y:429.7,scaleY:0.765,startPosition:15,scaleX:0.765}},{t:this.instance_6,p:{skewX:-2.5,skewY:177.4,x:232.1,y:455,regY:12.1,regX:-2}},{t:this.instance_5,p:{regX:53.4,regY:-52.5,skewX:-1.7,skewY:178.2,x:255.3,y:381.7,scaleY:0.765,startPosition:14,scaleX:0.765}},{t:this.instance_4,p:{skewX:-2.5,skewY:177.4,x:245,y:435}},{t:this.instance_3,p:{skewX:-2.5,skewY:177.4,x:246.9,y:452.9,regX:32,regY:6.6}},{t:this.instance_2,p:{regY:9.2,skewX:-2.5,skewY:177.4,x:243.2,y:383.7,regX:41.6}},{t:this.instance_1,p:{skewX:-14.6,skewY:165.3,x:231.5,y:382.3,regX:56,regY:42.4,scaleX:0.747,scaleY:0.765}}]},1).to({state:[{t:this.instance_7,p:{regX:0,regY:0,skewX:-2.2,skewY:177.7,x:188.8,y:429.8,scaleY:0.765,startPosition:16,scaleX:0.765}},{t:this.instance_6,p:{skewX:-2.2,skewY:177.7,x:232.8,y:455.3,regY:12.1,regX:-2}},{t:this.instance_5,p:{regX:0,regY:0,skewX:-2.2,skewY:177.7,x:298.7,y:420.7,scaleY:0.765,startPosition:15,scaleX:0.765}},{t:this.instance_4,p:{skewX:-2.2,skewY:177.7,x:245.7,y:435.4}},{t:this.instance_3,p:{skewX:-2.2,skewY:177.7,x:247.5,y:453.3,regX:32,regY:6.5}},{t:this.instance_2,p:{regY:9.2,skewX:-2.2,skewY:177.7,x:244.2,y:384.1,regX:41.5}},{t:this.instance_1,p:{skewX:-13.5,skewY:166.4,x:232.4,y:382.5,regX:56,regY:42.3,scaleX:0.747,scaleY:0.765}}]},2).to({state:[{t:this.instance_7,p:{regX:0,regY:0,skewX:-2.2,skewY:177.7,x:188.8,y:429.7,scaleY:0.765,startPosition:17,scaleX:0.765}},{t:this.instance_6,p:{skewX:-2.2,skewY:177.7,x:232.8,y:455.3,regY:12.1,regX:-2}},{t:this.instance_5,p:{regX:0,regY:0,skewX:-2.2,skewY:177.7,x:298.8,y:420.7,scaleY:0.765,startPosition:16,scaleX:0.765}},{t:this.instance_4,p:{skewX:-2.2,skewY:177.7,x:245.8,y:435.4}},{t:this.instance_3,p:{skewX:-2.2,skewY:177.7,x:247.6,y:453.3,regX:32,regY:6.5}},{t:this.instance_2,p:{regY:9.2,skewX:-2.2,skewY:177.7,x:244.3,y:384,regX:41.5}},{t:this.instance_1,p:{skewX:-12.9,skewY:167,x:232.5,y:382.3,regX:56,regY:42.2,scaleX:0.747,scaleY:0.765}}]},2).to({state:[{t:this.instance_7,p:{regX:0,regY:0,skewX:-2.2,skewY:177.7,x:188.8,y:429.7,scaleY:0.765,startPosition:17,scaleX:0.765}},{t:this.instance_6,p:{skewX:-2.2,skewY:177.7,x:232.8,y:455.3,regY:12.1,regX:-2}},{t:this.instance_5,p:{regX:0,regY:0,skewX:-2.2,skewY:177.7,x:298.8,y:420.7,scaleY:0.765,startPosition:16,scaleX:0.765}},{t:this.instance_4,p:{skewX:-2.2,skewY:177.7,x:245.8,y:435.4}},{t:this.instance_3,p:{skewX:-2.2,skewY:177.7,x:247.6,y:453.3,regX:32,regY:6.5}},{t:this.instance_2,p:{regY:9.2,skewX:-2.2,skewY:177.7,x:244.3,y:384,regX:41.5}},{t:this.instance_1,p:{skewX:-12.6,skewY:167.3,x:232.5,y:382.2,regX:56,regY:42.2,scaleX:0.747,scaleY:0.765}}]},2).to({state:[{t:this.instance_7,p:{regX:-51.7,regY:-58.5,skewX:-1.7,skewY:178.2,x:224.4,y:383.2,scaleY:0.765,startPosition:17,scaleX:0.765}},{t:this.instance_6,p:{skewX:-2.7,skewY:177.2,x:231.3,y:454.9,regY:12,regX:-2}},{t:this.instance_5,p:{regX:46.2,regY:-52.5,skewX:-3.8,skewY:176.1,x:259.6,y:381.5,scaleY:0.765,startPosition:16,scaleX:0.765}},{t:this.instance_4,p:{skewX:-2.7,skewY:177.2,x:244.1,y:435}},{t:this.instance_3,p:{skewX:-2.7,skewY:177.2,x:246,y:452.8,regX:32,regY:6.5}},{t:this.instance_2,p:{regY:9.2,skewX:-2.7,skewY:177.2,x:242.1,y:383.7,regX:41.6}},{t:this.instance_1,p:{skewX:-13.7,skewY:166.2,x:229.9,y:381.5,regX:55.9,regY:42.2,scaleX:0.747,scaleY:0.765}}]},16).to({state:[{t:this.instance_7,p:{regX:-51.7,regY:-58.5,skewX:-1.7,skewY:178.2,x:222.8,y:382.9,scaleY:0.765,startPosition:17,scaleX:0.765}},{t:this.instance_6,p:{skewX:-3.3,skewY:176.6,x:230.4,y:454.7,regY:12.1,regX:-2}},{t:this.instance_5,p:{regX:46.2,regY:-52.5,skewX:-5.1,skewY:174.8,x:258,y:381,scaleY:0.765,startPosition:16,scaleX:0.765}},{t:this.instance_4,p:{skewX:-3.3,skewY:176.6,x:243,y:434.6}},{t:this.instance_3,p:{skewX:-3.3,skewY:176.6,x:245.1,y:452.4,regX:32,regY:6.5}},{t:this.instance_2,p:{regY:9.2,skewX:-3.3,skewY:176.6,x:240.5,y:383.2,regX:41.6}},{t:this.instance_1,p:{skewX:-14.6,skewY:165.3,x:228.3,y:381.3,regX:56,regY:42.2,scaleX:0.747,scaleY:0.765}}]},2).to({state:[{t:this.instance_7,p:{regX:-51.8,regY:-58.5,skewX:-1.4,skewY:177.2,x:223.9,y:383.9,scaleY:0.765,startPosition:19,scaleX:0.765}},{t:this.instance_6,p:{skewX:-3,skewY:176.9,x:231.1,y:455.1,regY:12.1,regX:-2}},{t:this.instance_5,p:{regX:46.2,regY:-52.5,skewX:-4.8,skewY:176.4,x:259.1,y:382.2,scaleY:0.765,startPosition:17,scaleX:0.765}},{t:this.instance_4,p:{skewX:-3,skewY:176.9,x:243.8,y:435.2}},{t:this.instance_3,p:{skewX:-3,skewY:176.9,x:245.8,y:452.9,regX:32,regY:6.5}},{t:this.instance_2,p:{regY:9.2,skewX:-3,skewY:176.9,x:241.6,y:383.7,regX:41.6}},{t:this.instance_1,p:{skewX:-13.5,skewY:166.4,x:229.3,y:381.6,regX:56,regY:42.2,scaleX:0.747,scaleY:0.765}}]},2).to({state:[{t:this.instance_7,p:{regX:-51.7,regY:-58.7,skewX:0.5,skewY:179.2,x:229.7,y:383.1,scaleY:0.765,startPosition:20,scaleX:0.765}},{t:this.instance_6,p:{skewX:-1,skewY:178.9,x:232.7,y:454.5,regY:12.1,regX:-2}},{t:this.instance_5,p:{regX:46.2,regY:-52.5,skewX:-2.8,skewY:178.4,x:263.2,y:382.6,scaleY:0.765,startPosition:18,scaleX:0.765}},{t:this.instance_4,p:{skewX:-1,skewY:178.9,x:246.1,y:435}},{t:this.instance_3,p:{skewX:-1,skewY:178.9,x:247.6,y:452.9,regX:31.9,regY:6.5}},{t:this.instance_2,p:{regY:9.1,skewX:-1,skewY:178.9,x:245.8,y:383.5,regX:41.6}},{t:this.instance_1,p:{skewX:-8.2,skewY:171.7,x:233.4,y:380.4,regX:55.9,regY:42.2,scaleX:0.747,scaleY:0.764}}]},2).to({state:[{t:this.instance_21}]},1).wait(87));

	// HEAD
	this.instance_22 = new lib.FIZZHEADNEST001("synched",6,false);
	this.instance_22.setTransform(238,389.9,0.765,0.765,0,-1.4,-1.9,136,320.8);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(19).to({startPosition:6,_off:false},0).wait(3).to({regY:320.9,skewX:-1.1,skewY:-1.6,x:234.1,y:392.1,startPosition:8},0).wait(2).to({regX:136.1,skewX:-1.4,skewY:-1.9,x:236.7,y:391.5,startPosition:10},0).wait(2).to({skewX:-2.8,skewY:-3.3,x:256,y:386.6,startPosition:12},0).wait(1).to({skewX:-2.3,skewY:-2.8,x:272.2,y:380.8,startPosition:13},0).wait(1).to({regX:136,skewX:-1.8,skewY:-2.3,x:275.9,y:379.4,startPosition:14},0).wait(2).to({regX:136.1,skewX:-2,skewY:-2.5,x:274.4,y:380.3,startPosition:16},0).wait(2).to({skewX:-2.1,skewY:-2.6,x:273.4,y:380.8,startPosition:18},0).wait(2).to({x:273,y:381.1,startPosition:20},0).wait(17).to({skewX:-0.7,skewY:-1.2,x:273.9,y:384.7,startPosition:37},0).wait(1).to({regX:136,scaleX:0.76,scaleY:0.76,skewX:7.4,skewY:6.9,x:277.9,y:396,startPosition:38},0).wait(1).to({regX:136.1,regY:320.8,skewX:11.8,skewY:11.3,x:280.3,y:399.5,startPosition:39},0).wait(2).to({regY:320.7,skewX:12.2,skewY:11.7,x:280.8,y:399.8,startPosition:41},0).wait(2).to({regX:135.9,regY:320.8,skewX:9.7,skewY:9.2,x:276.9,y:396.9,startPosition:43},0).wait(2).to({regX:136,regY:320.9,scaleX:0.76,scaleY:0.76,skewX:0.8,skewY:0.3,x:267.1,y:392.5,startPosition:45},0).wait(1).to({regX:151.5,regY:23.8,scaleX:0.76,scaleY:0.76,skewX:-16.8,skewY:-17.3,x:190,y:169.5,startPosition:46},0).wait(2).to({scaleX:0.77,skewX:-21.2,skewY:-21.7,x:169.9,y:172.9,startPosition:48},0).wait(2).to({regX:151.3,regY:23.7,scaleX:0.76,skewX:-23,skewY:-23.5,x:161.8,y:174.8,startPosition:50},0).wait(2).to({regX:151.4,skewX:-22.4,skewY:-22.9,x:165,y:174.3,startPosition:52},0).wait(2).to({regX:151.5,regY:23.8,skewX:-22.1,skewY:-22.6,x:166.5,y:174,startPosition:54},0).wait(10).to({skewX:-20.7,skewY:-21.3,x:173.3,y:172.6,startPosition:64},0).wait(1).to({skewX:-18.5,skewY:-19,x:184.1,y:170.7,startPosition:65},0).wait(2).to({skewX:-16.9,skewY:-17.4,x:191,y:169.5,startPosition:67},0).wait(2).to({regY:23.7,skewX:-16.1,skewY:-16.6,x:195,y:169.1,startPosition:69},0).wait(11).to({skewX:-17.8,skewY:-18.3,x:186,y:169.5,startPosition:80},0).wait(2).to({regY:23.6,skewX:-18.7,skewY:-19.2,x:181.3,y:170,startPosition:82},0).wait(3).to({skewX:-15.9,skewY:-16.4,x:193.2,y:168.6,startPosition:85},0).wait(1).to({regX:151.4,regY:23.5,scaleX:0.76,scaleY:0.76,skewX:-7.3,skewY:-7.8,x:239.3,y:164.7,startPosition:86},0).wait(2).to({regX:128.1,regY:310.7,scaleX:0.76,scaleY:0.76,skewX:-2.9,skewY:-3.4,x:281.4,y:389.4,startPosition:88},0).wait(1).to({regX:128,regY:310.8,skewX:0,skewY:-0.5,x:285.1,y:391.5,startPosition:89},0).wait(2).to({regY:310.9,skewX:-0.7,skewY:-1.2,x:284.4,y:390.5,startPosition:91},0).wait(2).to({regX:128.1,regY:310.8,skewX:-1.4,skewY:-1.9,x:283.7,y:389.9,startPosition:93},0).wait(2).to({skewX:-1.7,skewY:-2.2,x:283.5,y:389.7,startPosition:95},0).wait(23).to({regY:310.9,skewX:0.2,skewY:-0.1,x:286.5,y:391.9,startPosition:118},0).wait(2).to({regY:310.8,skewX:1.2,skewY:0.7,x:287.3,y:392.4,startPosition:120},0).wait(3).to({regX:128.2,skewX:0,skewY:-0.4,x:286.1,y:391.3,startPosition:123},0).wait(2).to({regX:135.8,regY:320.7,scaleX:0.76,scaleY:0.76,skewX:-4.1,skewY:-4.6,x:255.6,y:382.6,startPosition:125},0).wait(1).to({regX:136.1,scaleX:0.77,scaleY:0.77,skewX:-10.8,skewY:-11.3,x:247.6,y:381.9,startPosition:126},0).wait(2).to({regX:135.9,skewX:-13.7,skewY:-14.2,x:244.7,y:381.6,startPosition:128},0).wait(1).to({skewX:-14.7,skewY:-15.2,x:243.8,y:381.2,startPosition:129},0).wait(2).to({skewX:-13.7,skewY:-14.2,x:244.7,y:381.6,startPosition:131},0).wait(2).to({regY:320.9,skewX:-13.1,skewY:-13.6,x:244.8,y:381.7,startPosition:133},0).wait(2).to({regX:136,skewX:-12.8,skewY:-13.3,x:244.9,y:381.6,startPosition:135},0).wait(16).to({regX:135.9,skewX:-13.9,skewY:-14.4,x:242.1,y:380.6,startPosition:151},0).wait(2).to({skewX:-14.7,skewY:-15.2,x:240.4,y:380.2,startPosition:153},0).wait(2).to({skewX:-13.7,skewY:-14.2,x:241.5,y:380.8,startPosition:155},0).wait(2).to({regY:320.8,scaleX:0.76,scaleY:0.76,skewX:-8.3,skewY:-8.8,x:245.7,y:380.6,startPosition:157},0).to({_off:true},1).wait(87));

	// COLLAR
	this.instance_23 = new lib.FIZ23RCOLLARBK001("single",0);
	this.instance_23.setTransform(236.7,388.7,0.747,0.765,0,-1.2,178.7,41.6,43.5);

	this.instance_24 = new lib.FIZ34RCOLLARBK001("single",0);
	this.instance_24.setTransform(244.3,387.2,0.764,0.764,0,-16.9,163,46.6,44.6);

	this.instance_25 = new lib.FIZ34LCOLLARBK01("single",0);
	this.instance_25.setTransform(285.1,387.8,0.766,0.766,0,-2.1,177.8,46.6,44.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_23,p:{skewX:-1.2,skewY:178.7,x:236.7,y:388.7,regX:41.6,regY:43.5,scaleX:0.747,scaleY:0.765}}]},19).to({state:[{t:this.instance_23,p:{skewX:-1,skewY:178.9,x:232.7,y:390.8,regX:41.6,regY:43.5,scaleX:0.747,scaleY:0.765}}]},3).to({state:[{t:this.instance_23,p:{skewX:-1.2,skewY:178.7,x:235.2,y:390.2,regX:41.6,regY:43.5,scaleX:0.747,scaleY:0.765}}]},2).to({state:[{t:this.instance_23,p:{skewX:-2.7,skewY:177.2,x:254.5,y:385.4,regX:41.6,regY:43.5,scaleX:0.747,scaleY:0.765}}]},2).to({state:[{t:this.instance_23,p:{skewX:-2.2,skewY:177.7,x:269.6,y:379.6,regX:41.4,regY:43.6,scaleX:0.747,scaleY:0.765}}]},1).to({state:[{t:this.instance_23,p:{skewX:-1.6,skewY:178.3,x:273.3,y:378.2,regX:41.4,regY:43.6,scaleX:0.747,scaleY:0.765}}]},1).to({state:[{t:this.instance_23,p:{skewX:-1.9,skewY:178,x:271.8,y:379.1,regX:41.4,regY:43.6,scaleX:0.747,scaleY:0.765}}]},2).to({state:[{t:this.instance_23,p:{skewX:-1.9,skewY:178,x:270.7,y:379.7,regX:41.5,regY:43.7,scaleX:0.747,scaleY:0.765}}]},2).to({state:[{t:this.instance_23,p:{skewX:-1.9,skewY:178,x:270.3,y:380,regX:41.5,regY:43.7,scaleX:0.747,scaleY:0.765}}]},2).to({state:[{t:this.instance_23,p:{skewX:-0.6,skewY:179.3,x:271.3,y:383.6,regX:41.5,regY:43.6,scaleX:0.747,scaleY:0.765}}]},17).to({state:[{t:this.instance_23,p:{skewX:7.7,skewY:-172.2,x:275.6,y:394.5,regX:41.5,regY:43.6,scaleX:0.746,scaleY:0.764}}]},1).to({state:[{t:this.instance_23,p:{skewX:12.1,skewY:-167.8,x:278,y:397.8,regX:41.6,regY:43.6,scaleX:0.746,scaleY:0.764}}]},1).to({state:[{t:this.instance_23,p:{skewX:12.4,skewY:-167.5,x:278.5,y:398.2,regX:41.5,regY:43.5,scaleX:0.746,scaleY:0.764}}]},2).to({state:[{t:this.instance_23,p:{skewX:9.9,skewY:-170,x:274.5,y:395.4,regX:41.6,regY:43.6,scaleX:0.746,scaleY:0.764}}]},2).to({state:[{t:this.instance_23,p:{skewX:1.1,skewY:-178.8,x:264.4,y:391.3,regX:41.8,regY:43.6,scaleX:0.746,scaleY:0.764}}]},2).to({state:[{t:this.instance_24,p:{regX:46.6,skewX:-16.9,skewY:163,x:244.3,y:387.2,regY:44.6,scaleX:0.764,scaleY:0.764}}]},1).to({state:[{t:this.instance_24,p:{regX:46.5,skewX:-21.3,skewY:158.6,x:240.7,y:385.9,regY:44.6,scaleX:0.764,scaleY:0.764}}]},2).to({state:[{t:this.instance_24,p:{regX:46.5,skewX:-23.1,skewY:156.8,x:239.4,y:385.6,regY:44.6,scaleX:0.764,scaleY:0.764}}]},2).to({state:[{t:this.instance_24,p:{regX:46.4,skewX:-22.5,skewY:157.4,x:240.5,y:385.8,regY:44.6,scaleX:0.764,scaleY:0.764}}]},2).to({state:[{t:this.instance_24,p:{regX:46.4,skewX:-22.2,skewY:157.7,x:240.8,y:385.8,regY:44.6,scaleX:0.764,scaleY:0.764}}]},2).to({state:[{t:this.instance_24,p:{regX:46.4,skewX:-20.8,skewY:159.1,x:242.6,y:386.1,regY:44.6,scaleX:0.764,scaleY:0.764}}]},10).to({state:[{t:this.instance_24,p:{regX:46.4,skewX:-18.6,skewY:161.3,x:244.9,y:386.9,regY:44.7,scaleX:0.764,scaleY:0.764}}]},1).to({state:[{t:this.instance_24,p:{regX:46.5,skewX:-17,skewY:162.9,x:245.9,y:387.2,regY:44.6,scaleX:0.764,scaleY:0.764}}]},2).to({state:[{t:this.instance_24,p:{regX:46.5,skewX:-16.2,skewY:163.7,x:246.9,y:387.5,regY:44.5,scaleX:0.764,scaleY:0.764}}]},2).to({state:[{t:this.instance_24,p:{regX:46.6,skewX:-17.9,skewY:162,x:244.3,y:386.4,regY:44.6,scaleX:0.764,scaleY:0.764}}]},11).to({state:[{t:this.instance_24,p:{regX:46.6,skewX:-18.8,skewY:161.1,x:242.7,y:386,regY:44.6,scaleX:0.764,scaleY:0.764}}]},2).to({state:[{t:this.instance_24,p:{regX:46.6,skewX:-16,skewY:163.9,x:244.1,y:387.3,regY:44.7,scaleX:0.764,scaleY:0.764}}]},3).to({state:[{t:this.instance_24,p:{regX:46.6,skewX:-7.4,skewY:172.5,x:257,y:388.4,regY:44.6,scaleX:0.763,scaleY:0.763}}]},1).to({state:[{t:this.instance_25,p:{regY:44.5,skewX:-2.1,skewY:177.8,x:285.1,y:387.8,regX:46.6}}]},2).to({state:[{t:this.instance_25,p:{regY:44.6,skewX:0.7,skewY:-179.2,x:288.8,y:390.1,regX:46.6}}]},1).to({state:[{t:this.instance_25,p:{regY:44.7,skewX:0,skewY:180,x:288,y:389,regX:46.6}}]},2).to({state:[{t:this.instance_25,p:{regY:44.6,skewX:-0.6,skewY:179.3,x:287.3,y:388.4,regX:46.6}}]},2).to({state:[{t:this.instance_25,p:{regY:44.6,skewX:-0.9,skewY:179,x:287.1,y:388.1,regX:46.6}}]},2).to({state:[{t:this.instance_25,p:{regY:44.7,skewX:1.1,skewY:-178.8,x:290,y:390.4,regX:46.8}}]},23).to({state:[{t:this.instance_25,p:{regY:44.6,skewX:2.1,skewY:-177.8,x:291,y:391,regX:46.8}}]},2).to({state:[{t:this.instance_25,p:{regY:44.7,skewX:0.8,skewY:-179.1,x:289.6,y:389.9,regX:46.8}}]},3).to({state:[{t:this.instance_23,p:{skewX:-3.9,skewY:176,x:254.4,y:381.4,regX:41.5,regY:43.4,scaleX:0.747,scaleY:0.764}}]},2).to({state:[{t:this.instance_23,p:{skewX:-10.7,skewY:169.2,x:246,y:381,regX:41.5,regY:43.4,scaleX:0.747,scaleY:0.765}}]},1).to({state:[{t:this.instance_23,p:{skewX:-13.5,skewY:166.4,x:243.3,y:380.7,regX:41.4,regY:43.4,scaleX:0.747,scaleY:0.765}}]},2).to({state:[{t:this.instance_23,p:{skewX:-14.6,skewY:165.3,x:242.3,y:380.3,regX:41.4,regY:43.4,scaleX:0.747,scaleY:0.765}}]},1).to({state:[{t:this.instance_23,p:{skewX:-13.5,skewY:166.4,x:243.2,y:380.7,regX:41.4,regY:43.4,scaleX:0.747,scaleY:0.765}}]},2).to({state:[{t:this.instance_23,p:{skewX:-12.9,skewY:167,x:243.3,y:380.8,regX:41.5,regY:43.4,scaleX:0.747,scaleY:0.765}}]},2).to({state:[{t:this.instance_23,p:{skewX:-12.6,skewY:167.3,x:243.3,y:380.8,regX:41.5,regY:43.4,scaleX:0.747,scaleY:0.765}}]},2).to({state:[{t:this.instance_23,p:{skewX:-13.7,skewY:166.2,x:240.5,y:379.7,regX:41.5,regY:43.3,scaleX:0.747,scaleY:0.765}}]},16).to({state:[{t:this.instance_23,p:{skewX:-14.6,skewY:165.3,x:238.9,y:379.3,regX:41.5,regY:43.2,scaleX:0.747,scaleY:0.765}}]},2).to({state:[{t:this.instance_23,p:{skewX:-13.5,skewY:166.4,x:240.1,y:379.9,regX:41.5,regY:43.3,scaleX:0.747,scaleY:0.765}}]},2).to({state:[{t:this.instance_23,p:{skewX:-8.2,skewY:171.7,x:244.2,y:379.5,regX:41.4,regY:43.1,scaleX:0.747,scaleY:0.764}}]},2).to({state:[]},1).wait(87));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(156.8,128.5,263.5,554.3);


// symbols:
(lib.FIZZYHEAD11509 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AMBCOQAQgVAAgTQgPgqgNAAQgaAAgYAVQgcAagJADQgEABgCgBIgBgHQAHgTA3giQAxggAQgDIAWAPIguASQASgBAJAQQAIANAAATQAAAqgOARQgMAPglAIIAfgjgAsFCHQgRgcAAgQQAAgMAEgNQAHgaATgFIgPgHQgDgBgTAAQgGAAgDgDIgFgHIAHgJQAEgGAHAAQAUAAAYAUQAVARAJATIgHAGQgOgOgDAAQgIAAgJAJQgLALAAASQAAANANAhQAJAZAHAMQgPgJgQgbgACmg+QAAgEhygQQhwgRgoAAQgoAAhPAGIihAUIgDAAIABgTQAfgFBUgLQB1gQCFAJQB+AIBFAcIgBARgABriEQhFgPhAgDIhUgCQiAAAhPAJQgoAEgOAEIgKAAIAAgSQAWgHAPgDQBDgNCCAAQDsAABZAuIABANIAAACQgDgBhFgQg");
	this.shape.setTransform(-0.2,34.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4D3232").s().p("AMQK9QANgOATgDIAIACIgcAcQgDADgaAGQAGgGALgQgAroJgQgFgJgRgWQgFgHgBgGIABgFIAAgCIAAAAIAAgBQALABAIAJQAHAJAAANIAQAggAMYJdQgCgUALgLIAUgUIAGAGQgJAdgFAGQgIAGgKAMgAtTIhQAAgKAHgCIAHAHQAYAqANALQABAFADACIgEACQgZgTgagmgAsfHVIACAOQgrgWgBgtIAHAGIAhArIgJgaIASAmIgBAIgAMIHbIgBgJQAAgGANgXQAOgZAMgJQAGADAGAFQghA7gNALIgEgGgAubGHQAAgGACgDIAGgDIAlBQIgDABQgMAAgehFgAN0G+QACgFAPgQQAQgQAHgCQgRAhgHAGIgKAJQgFgCgBgHgAr1GbQgEgTADgCQAFAAABgCQACABAPAqIgCAKgAMZE6QAEgMAgguQAJACABAGQgEAKgTAVQgTAUgGACgAr+E1QgIgGgFgSQgFgRAAgOQAAgKAKgRQAFALAEAhQAEAbAAANgAtWEDQgEgIgDgRQgCgNAAgKQAAgMAJgTIAFAKQAFAwAAARQAAAGgDAEIgEACgALLDhQAcgwABgBQAIANgMARQgKAPgQAJgAreCLQgMgJAAgeQAAgRADgOQAEgPAFAAIAHAAIgBAAQADAtgCAwgAh1iyQgIgXgGg+IACgQIADAEQAPAWAJASQATAhAAAlQAAAHgBABIgDABIABAAIgHABQgQAAgIgXgAkqkAQgPgLgMgNQgQgPgTghIgTgiIAIgDQAUAOAcArQAZAnAcAPQgBALgCABQgHAAgSgOgAgumGQAAgJADgGQAGAFAKAVQAIASAEALIAGApIgIAKIgDAEQgMgTgOhMgAknl4QgHgIg0hXQALAFAfAkIApAxQgEABgMAGIgDABQgDAAgCgDgAjFnnIAJADQAQAKANAWQALATAAALIgBATQgCALgCACQgcgQgQhRgAn7nKQgZgugBgRQAjApAZApQASAeABAAQgKAAAKAMQgYgIgdg1gAi1pmQAAgKAIgSQATAwAAAUQAAAHgEACIgGACQgNgMgEgngAlWo3QgPgEgUgdQgYgjADgmQAhAlAPAfQAKAVAAAMIAAAGgAhMp0IAFheQAIAGACAFQADAFAAALIABBDg");
	this.shape_1.setTransform(-1,-52.4);

	// shading
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8089DD").s().p("AqZAbICEgZIAAA5IhxANgAI3BBIAAg6IBjASIgKAnQgDAHgLAAgAA3giQiEgIh0APQhUALgfAFIABgrIAKABQAOgFAogEQBOgJCBAAIBSADQBCACBFAPQBEAQADACIgBAhQhFgah/gIg");
	this.shape_2.setTransform(-7.6,26.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C6A17D").s().p("AjORCQAAh7BBjXQBVkUCQjgQBXh9Apg/QA2hRAPgwIAegDIAkA8IgWgJQg3BsgcA0QghA9g/BrQhGB4grBZQgXAyg7CpQg9CqggB0IgOAzIAFAAIgHAHQgOAvAFgYIAFgUIgwAkgAGiAPQgIgLgHgsQAKgDAcgZQAYgVAaAAQANAAAPApQAAAUgQAUIgfAiQgMACgKAAQgXAAgJgNgAnZw9QgZgHgUgRQAmgRA4AIQA8ALAbAAQAXAAAogKQgUAPghAKQgpANgvAAQgkAAgWgGg");
	this.shape_3.setTransform(26.3,49.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#69494B").s().p("AKFNxIAlg9IgmABQgfAAgHgCQgGgDgBgMQAAgEAOgaIADAJQAKgMAIgGQAFgGAIgeQAHgLAFgOQAMgUAyhFQAHgFARgiIAOgYIAAgCQgVAGgiAIIghAHQgMAAgQgDQgUgEAAgHQgBgPAnhEIAphHQgfAQgbAFQgTAFgaAAQgNAAgKgCIgBgCQgCgCAAgGQAAgLAOgaQAQgzANiFIADgNIAUAXQAFARAABNQgKAfAAARQAAAGAPAGIACABQA+gtAXggIAqg6IABAEQABBRgrBoQgrBYAAACQAAAHAFAEQAFADAHAAIAxgVQAygcAIgnIAAAhQAAB1hGBkQgTAbgfAhQgVAYAAAEQAAAKAGgBIALADQAYAFBCg7QgbBXgqArQgNAOgNAHQgJAFgCAAIghgCgAnYA7QgWgJgcgQQAYgIAQgHIAKgGQAOAAAZAQQAcASAMADIg+APIAAAAIgRgGgAjCAMQANgbAAgwQABgMgIhBIgHgpQgHghgPh1QgMhhgIhIIgBgaIAVjPIAigvIgJCcIgDA0QgBBMAhDTQAgDGAAAFQABBzhoAWQAcgRAMgagArnnOQgHgKgVgnQgXgpgXgjIAKhAQAeBdA6BJQAvA7AcAJQhJgKgagjgApHoyQgvhEgQiRQAKgJAYgwQATC6A4BMQASAaAZAPQAZANAIAFQgCAJgKAAQhEAAgqg8gAliqnQgehXABglQAFgOARgkQASgkAJAJIgBBUQAABQALA/QALA9AQAWQgZgRgghcg");
	this.shape_4.setTransform(16.8,-69.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BBC767").s().p("AgNAmQgPgegJgHIArhFQAKAMAKAaQAIAVAEAQIgmA+QgBgGgMgZg");
	this.shape_5.setTransform(54.1,-80.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6870B0").s().p("AhcBFIAkg5QAOARALAXQAMAZAAAOQAAAOgZAggAAuhAIgXgfQADgBAWgoIAtA/IgfArQgIgVgIgNg");
	this.shape_6.setTransform(53.8,-79.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C6C7C9").s().p("AkeDxQAEgFAOgUQAPgTAGgMQARANATAiQARAdAAAJIgDAVQgDAAgEADIgFAEQhVg9AIAEgABhAtQgUgKgBgTQgQAGgSAAQgbABgNgVQAkgeAagdIATgUQAFABACgDIAAAEQAAAHAHABIAPABQAeAAAMgLQAHgFADgOIAHgCQAHgDAAgHQAAgGgFgJQgMgRgggWQASgVA8gXQAvgTAAgYQAAgigfgKIABgCIAIgCQAeAIANAdQAIATAEAYQAEAYgdAQIgwAZQABACAnAUQAWAMAAAlQAAAignAJIg7AFQAGAtgKASQgLAVgnAAQgOAAgNgGgAg7hBQADgCANgWQAOgXAGgNIgFgEQgcAGgSgMIghgaQgIgEgsgMQglgIgSgSQASgUAQADQAIACAMAHIASAAQARgCAPgDQANAnAaAMQAYAMAogMQgDAmARAVQASARAYgFIAEgBQAAAEgQAWQgVAcghAmg");
	this.shape_7.setTransform(67,-89.1);

	// fill
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4D3232").s().p("AgDgBQAEABAEACIgDAAQgCgBgDgCg");
	this.shape_8.setTransform(-28.2,-120.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCC99").s().p("AgqRcQgogMgvgtQgGhsiUk4QiUk4jhkjQAFgGgGAHIgEgFQgFgEgGAAQgWAAgRAaQgRAbgfAAQgKAAgJgCQglgTgPgZQgKgPgLgsQgRhFgChEQgDhDAeg2QATAIAvBMQA1BVAvBrQAHgEACgJIgfhEIAdADIgSg6IBJgKQAQgDAAgIIgBgzQgCgrgCAAIhuAYQgThGgHgxQgFgmAAgvQAAiIAkhtQAfhfBGhhQBGhgA0gqQAzgqCsg3QAlgRA4AIQA8ALAbAAQAXAAApgKQBhgPBwAsQBxAtBfBcQBmBhA5CBQBACNAACeQAABYgjBwIh0gZIgMANIAABPQARAMARADIBCAJIgVBGIAggDQArgDAugpQAKgIAyg4QAbgdAcgqQAWgbAiAAQAPAAALATQAQAcAAA7QAABzg3BFQgxA+hAAAQgRAAgegfQgigogQgQIgXgIQg3BsgcA0QghA9g/BrQhGB4grBZQgXAyg9CpQg9CqggB0IgOAzIAFAAIgHAGQgNAwAEgYIAFgUIgvAjIgbABQgpAAgVgGgArujMICDgZIAAA5IhwANgAHiilIAAg7IBiASIgKAnQgDAHgKAAg");
	this.shape_9.setTransform(0.9,49.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#825454").s().p("AJNPYIgBgCIAviBQAVhMgBiPQgCiPgjhbQgjhahNhsQhNhtiDhMQiYhXh4AJIABAAIAOglQAMgdAQAAQBLAABqAuQBpAuByBQQAZARAsA3QAmAvANAXQANAWAKAFQAGADAWAAQA2AAAjgeQAhgdAVg/IADgOIATAXQAGARAABNQgKAfAAARQAAAGAOAGIADACQA+guAXggIAqg6IABAEQAABRgrBoQgqBYAAACQAAAHAFAEQAFADAGAAIAygVQAygcAHgnIABAhQAAB1hHBkQgTAbgeAhQgWAYAAAEQAAAKAHgBIALADQAYAFBBg7QgbBXgpArQgNAOgNAHQgJAFgCAAIghgCQgxAphQBiQg3BCggAAIgHAAgArAPHQgHgLgDgHIARgCQAKAgAAAFIgBAAQgHgFgJgMgAsCMaQgOhKgDgwIADgwIAAAAIAPiSQgEgSADgDQAEABABgDQAXiVCDirQCHiuB5gaQAYgJAQgHIAKgGQAOAAAZAQQAcASALADIg9AQQjRA2hXB5QhYB5gkBUQglBUgDBEIgBALIgICTIAQAgIgQgMIAfC2IgZAGIAAAAQgGAAgNhGgAtcLrQgmgohEhoQAKAOAbAHIAaAFIANAAQACACAAgKQAAgCgRgfQgXgngRgnQgXg1gHgzQgEgegEhAIgBgVQAwBXAOAVQATAcAcgCIgFgxIgKgxQgIgrAAggIAQiLQAJAWAZAfQAZAeAMAHIAQiKQAJhDAQgsQAlBDAoAqQAsAwAagKQhEBZg6CJQg5CHAABCIABARIgHBzQABAGACABIgEADQACA2AFA/QgggRgWgXgAkFhhQhpg2hcheQhfhhgzhvQg5h6ALhxIAJhBQAeBdA7BJQAvA7AbAJIANAAIACgBQABgCAAgGQAAgKgVg4IgMgnQgDgGgBgWIgCgcQAAgWAHhAQAIhFAHggQAKgKAYgwQATC6A3BMQATAaAZAPQAZANAIAGIAHAAQAAgrAUhTQAUhTAfhUQAEgNASgkQASglAJAJIgBBUQAABQALA/QAKA9AQAWQADABACAEQABABAFAAQANAAAMgjIAsiFIAjgwIgJCcIgEA0QAABMAfDTQAgDGAAAFQAAB1hlAWIgKABQhTAAhlg1gAkXpfIACAAQgEgEgGgBQADAEAFABg");
	this.shape_10.setTransform(0.1,-59.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F0FF7A").s().p("ABcBbQgPgegJgHQgOgXhMgoQhUgsgnACQAQgTAYgaQAXgYABAAQAggBBEAiQBPAmAPAiQAKAMAKAYQAIAUAFATIgoA+QgBgGgNgZg");
	this.shape_11.setTransform(43.3,-85.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#8089DD").s().p("AB2B5IhwhUQhZgngUAHQALgFARgVIATgVQAcAABCAcQBUAhAgAtQAOARALAXQAMAZAAAOQAAAOgZAggAkHBWQgCg6gCgLIgljMIABgBQA7gEAOBrQAHCAAPAtgAECgMIgXgfQgfgjgcgSQgtgdhWgcIAfgiQAbgGBLAuQBEArAOAUIAtA/IgfApQgIgUgIgMg");
	this.shape_12.setTransform(32.6,-84.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AioFxQh5g9gLgDIhEgYQglgOAAgSQAAgNA2gkQAxAAA/AdQBHAhAnA0QARANATAiQARAdAAAIIgDAWQgDAAgEACIgFAFQhVg9AIADgADXCtQgUgJgBgUQgQAHgSAAQgbAAgNgUQAkggAagdIATgUQAFAAACgCIAAAEQAAAHAHABIAPABQAeAAAMgLQAHgFADgOIgEAAIgTAHQgVACgQgLQgPgLgCgQIgWACQgbAAgMgHQgJgHAAgRQAAgFAFgVQAGgUAAgEIgNgBQgxAQgKAAQgYAAgMgLQgMgMgFghIgIABIgIAFQgTAKgeAAQgWAAgKgdIgIgFIAIAEIgBgEIgDgEIgBgPQgCgNAAgOIACgIIgBgLQgBAAgCgGQgFAGgIAUQgJAUAAAHQAAALAKAhIggAlIgagLQgIgEAAgIIAGgQQAGgRAFgHIgGgDIgMAAQhNABgCgiQgNglAkgqQAjgqAEAEQADADgGgJQgGgIAAghQAAghAbgTQAcgUAgABQAfACANAKIAOAKQADAAAJgFIAUgLQAQgKAYgJQAYgKApAFQApAFASAnQASAngEAGQgDAGAJALIABgEQAIAEAZgKQAZgJAoASQApARAJAcQAKAdgzA6QAAAYAZgBQAOAAAggEQAeAJANAdQAIASAEAZQAEAYgdAQIgwAZQABACAnAUQAWAKAAAkQAAAjgnAJIg7AFQAGAvgKASQgLAVgnAAQgOAAgNgHgAA5A+QglgngmgVQgOgGhcglIAcghQASgVAQAEQAIACAMAHIASAAQARgCANgDQANAnAaAMQAYALAogLQgDAkATAUQASASAYgFIAEgBQAAAEgQAWQgVAcgjAmg");
	this.shape_13.setTransform(55.2,-102);

	// outline
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AghZMQgogLgvguIAAAEQgHgBgIABQgEgBgDgJQgPgvgdhRQgihehBiOIhKieQgbg6haiQQhaiQhhiBIg5ArQgQALgLAAQiIAAAAkoQAAgTAQgxQANgrAGgLQg+ghg3haQgvhNAAgmQAAgGACgJQAqAsAEADQAGABASAKQgSgcgUhBQghhoAAhkQAAgNAEgiQAEgoAGgQQAEAIAbA/QAbA+AbAvIAAgDQgLg2AAhCQAAijAngnIAfBKQAFALAQASIALiAQALg/AvhCQAqBmAiAtQAjAsAVAEQAWADAvgoQAwgpAhgZQAhgaAbgNQA0gcAqgPQjFiPhIh8QhIh8gFhpQgFhpAMg7QANg8ABAWQAiA1AtBSQAxBaAYATQgHghgMghQgIgjAAhaQAAhRAfhHQAfhHAjAAQAbBqAVBIQAqCLAlAQQALigA0h6QAthpAiAAIARACQANDaAEAyQADAMACAYIADgQQAXhOA1hLQAzhLAFAaQACgIAAAKIAAAHIgBgBIgKBLQgGAzAAARQAACEAHBhQALBLAAAKQAggHAGAAQApAAAPBIQANBzAOBTQAUgQBQhQQBfhgBFhNQgbgKgGgGQgKgJAAgXQABgKACgPQg4gEgUgaQgMgPAAgZQABgFAIgWQAKgdALgLQAWgVAEgOQAEgKADghQAKg3ArgZQAegRAkAAQAJAAAMAHQAMAHALAAQAVAAAigSQAjgSAjAFQAkAFAeAQQAfAPAXBDIAggGQAMgDAHAAQAgAAAfAZQAmAcAAAqQAAAegFAMQgCADgSATIANgBQAhgHAhAlQAiAkAAAtQAAAngTASQgJAKgbAKQAYAFAKASQAHANgBAWQABAggWAVQgZAXgrgCQgNgNgCAcIgFAqQgHAQgTAJQgQAHgRAAQgJAAgRgEQgDgBgVgOIgWgPQgGAAgJAEQgJAEgGAAQgSAAgQgGIgOgHQhTB0gzBbQgjBEgDADQBXBdAmA6QASAbAIAAQApAAAugyQA3g6AFhQQAbAUATA6QARA3ABA1IgBAXQAegPAXglQAHgMAwhaQAVAVAAAjQAABBgMBDQgPBPgcAnIADgBQALgMAggmQAcggAMAAQAKAAAAADQADAgAAAKQAABPgRA9QgXBRg4BCQA8ghABgGIAEAEIAGAOQAEAegmBBQgnA/gpAiQAYAiAFAOQAGARAAAjQAAB8gqBTQgwBghXAAQgrAAgTgMQgMgJgug0Ii+FNQhcChgMAmIgnBpQgkBcgYA/QgXBAgdBkQgYBIgdARIgHAGQgOAwAFgYIAEgUIgvAjIgaABQgpAAgVgHgAsBI/QgmgSgOgZQAQAiAkAJIAAAAg");
	this.shape_14.setTransform(0.1,0);

	this.addChild(this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-101.2,-161.9,202.7,323.9);


(lib.FIZ34RTORSO001 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F2F32").s().p("AgaCtQAAgIACgKIAThTQgIAJgUAEIgZAEQgDACgOARQgOASgQAIQgGgCgCgCQgCgCAAgIIAfhIQAihKAGgXQAJgZAHgbQAOg0ABgzIBAgEQAugCAPgDQAGBkgEBjQAAAQgRAyQgGASggA+QgcA1AAAOQAAAFADgBQABAAABAAQABAAAAAAQABAAAAAAQABAAAAAAQgdALgKAAQgaAAAAgpg");
	this.shape.setTransform(16.6,50);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6870B0").s().p("AhAHeQAAm1ADgdQAEAOAGhfQABgkAOhUQANhNAAgjQAAhOgIgcQgFgQgLgWQAbgJAOgDQAGgCAhgSQARBDAEAvIABApIgIITIASEBIg3AHQgxAFgVAAIgEAAg");
	this.shape_1.setTransform(21.2,-20.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5EB8BA").s().p("AglAeIgDgeQANAAA8geIAFAMQADAHAAAGQAAAKgnAOQgeAMgIAAIgBgBg");
	this.shape_2.setTransform(19.8,-70);

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(33,35,43,0.282)").s().p("AgDAAIAHgBIgFADg");
	this.shape_3.setTransform(20.8,70.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#363636").s().p("Ah0DqQhfgPgOgeQgPgigXiUQgXiRAAhBIAAgdQANAFAKABICEAJQADAJABAJQABAGAHAHIACgbQAoAABqADQBAAABVgHQBVgHASgHQAGBIAAAgQAABdgTA0QgwCHgOAcIACAEQgkAVhKATQhMATgtAAQgtgBgwgJgACdjzIAAABIhIAEg");
	this.shape_4.setTransform(-0.3,51.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F0FF7A").s().p("AhFBGIgFgFQAGgPAEgTQAaACAyABQAoABAGACQgBAQgaALQgXAKggAAQgVAAgYgEgAgpgmIAIgjQAfAEBNAFIgGAcg");
	this.shape_5.setTransform(-3.1,-51.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#72EBEB").s().p("AguAhQAEgSAQgFQAIgCAfgBQBTgEBJgnQAIARAAAIQgMALgeAMQg6AZhYAAQgKAAgZgEgAiQALQgSgGgOgGIAJgWIA6AWQAOAFASACIAUACIgHAWQg5gMgXgHg");
	this.shape_6.setTransform(6.2,-69.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8089DD").s().p("AhvHfQAHiSAKiGQAVkFAnikQASADAQABQAbAAALgPQAIgMADgcIAAgXQgqAAgagBIAHghQATADAMAAQA1AAAAg6QAAgPgRgEQgJgCgmgDIAHgNQALgMARAAIArAAIAngCQBOAAAygnQAJAaAHBCQAFAxAAAPIgIITQAIBcAKClIgFAAQgRAAgaAFIhLAHIAAgCIhIAGQgTABgVAAgAkaHTIgBg4QAAitA1kgQA5kyA9h9QAOAJAOAFQAZAJA7AQIgKAdIgRgEQgYAEgQAaQgPAfgFAKQAEAIA0AEIgIAhIgwgBQgKAAgJAVQgJATAAAKQgBARAJAGQAKAGAkgCIADgBQgGAHgFA4QgPCcgQBhQgKBIgJBsQgIBugCBdgAhhj2IgBgFIAEAGQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAAAg");
	this.shape_7.setTransform(-0.7,-20.2);

	// body
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AjeLnQgKABgKAJQgmhEgVipQgOh7AAh4QAAlNA2kDQA2kJBniQQATARApAKQAgAHAdAAQBrAABAgZQA5gVgBgdQAPANAQA4QAOAwACAjQAEAAAEAxQADAnACAtIAABBQAAAVgHChQgHChAABaQAAAuANCDQANCCAABOQAABSgNBEQgPBJgcArQgWAihcAiQhhAkhRAAQgvAAiPgag");
	this.shape_8.setTransform(0,-0.7);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-31.6,-77.7,63.3,154);


(lib.FIZ34RTIE001 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DADEE0").s().p("Ah9AnQh6gLgygcQADgNgDggQDrAiBGAHQBJAGBtgJQBtgMgBAUQgBAVg0AMQg0AMhvABQh/AAhQgIg");
	this.shape.setTransform(0,-0.1);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhzA5QhggJg8gUIgngMQgIgGAAgVIAAgjQAAgKAGgGIAGgDQAvAKCOASQCNATBTgCQBUgDBTgLQAZgBAKAJQAKAKAAAdQAAA1j9AAQhgAAhVgJg");
	this.shape_1.setTransform(0.1,0.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-31.7,-6.5,63.9,13.4);


(lib.FIZ34RPUPILR001 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgbAiIgFgQQgDgNAEgPQAGgdAXgFQAcgGAHAqQADAOgHARQgJASgPADIgJABQgQAAgHgLg");
	this.shape.setTransform(3.5,4.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,6.9,9.2);


(lib.FIZ34RPUPILL001 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAcIgEgPQgCgLAEgNQAHgYASgDQAYgEAEAlQACAMgHAOQgIAPgNACIgFABQgOAAgGgLg");
	this.shape.setTransform(2.9,4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,5.8,7.9);


(lib.FIZ34RNOSE001 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6A17D").s().p("AhzAkQgrgXAAgUQAAgGAEgCIAFgBQA3AUA5AAQAYAAANgCQAUgCAUgHIA9gdIA1gaIABABIADADQADB5ifAAQhDAAgygbg");
	this.shape.setTransform(15.6,36.4);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhZC4QgqgSgXgdQBBhHA1hkQAOgcAjiLQARA1goBmQgpBkhCBJQAIACAJAGQAOAFAiAAQA9AACRg7QgLBEgVAUQghAhhcAAQgsgBgqgRg");
	this.shape_1.setTransform(15.5,20.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.3,0.1,31.8,42.7);


(lib.FIZ34RMOUTH001 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 39429424
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAYA4QgigegEgCIgeAYQgPAKgTAAQhJAAgZgoQgNgmgKAAIgnAQQgkAAgLgVQgEgHgJgzQByA2C8AVQBfAKBJAAQAlAAArgJIAvgOQgEAigNAVQgOAXgVABQgLgBgSgPQgUgQgEgBQgMAUgMANQgWAagwAAQgjAAgpgcg");
	this.shape.setTransform(32.8,10.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#862D59").s().p("AgmAjIAAgUIAEgxIAdANQAPAHAKAAQAKAAAJAtIgBABIAAADg");
	this.shape_1.setTransform(39,23.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#40152B").s().p("AgvAfQhMgqgWg+IAJAGIALAEQAFABAGAAQAHAAAQgDQAQgDAEgCQAGAqAsATQAfAMArAAQAcAAATgIQAUgLACAAQAKAAAOALIgIBOIgXABQhZAAhJgrg");
	this.shape_2.setTransform(19.3,18.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAhA/IgugiQgHAig4gBQhCABgbgkQgSgkgLgHQgSAQgQAAQgmAAgKgQQgHgKgJg8QBmAyCpAXQBTAMBHABIBKgCQBGgCAZgDQgLAmgDAFQgMAagZAAQgGAAgWgOIgYgSQgHAegUAOQgUANgmAAQgiABgrgZg");
	this.shape_3.setTransform(32.6,8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#862D59").s().p("AgrBOQAHgOACgsQACg9AFglQAEAFAcANQAeANAJABQgNA5AAAbQAAAQAGAPQgNAEgUADQgQADgJAAg");
	this.shape_4.setTransform(35.9,24.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#40152B").s().p("AhPBRQhThEAAh0QAAgNAIg1IACAQQALA2AJAPQATAiAsAAQAjAAABABQAFAEAdAlQAOAMANAFQAYAJAwAAQAkAAAbgSQgIAogFArQgDAhAAAJQAAAHADAQQADAPADAHQiegbhNg+g");
	this.shape_5.setTransform(15.1,14.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA7BQIhGgvQgHASgRAIQgQAHgbAAQg4AAgZgfQgUgjgRgMQgQANgSAAQgmAAgLgPQgGgKgNhCQBhAxChAbQCBAVBugBIAsgDQAmgCASgCQgKAkgDAGQgMAZgZgBQgIAAgUgOIgYgSQgHAfgWANQgVAOgpAAQgdAAgSgLg");
	this.shape_6.setTransform(32.2,5.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#862D59").s().p("AgkBrQgGgHACgTIAAgXIgBgVQAAgOAIguIAKgxQAQgnAXABQAKAAAJAMQAFAGACAGQAAANgPA5QgPA2AAAGQAAAHADAWIAGAhQgWAGgPgBQgPAAgFgEg");
	this.shape_7.setTransform(29.5,23.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#40152B").s().p("AAnCsQgxgZgsguQhmhoAUhjIANhbIABACQAXAsANA1QANAgAzAAQAKAAAVgFQACAaAjAaQAqAcA0gHIgMBRQgCAkAHBGIgOABQglAAgrgWg");
	this.shape_8.setTransform(10.7,13.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgwBAQgigMgXgXQASg4ApgZQAfgTAvAAQAdAAAWAYQAXAYAAAfQAAAKgFAHIgTgNQgMAegMALQgRAQgdAAQgKADgJAAQgTAAgWgIg");
	this.shape_9.setTransform(44,10.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#40152B").s().p("AhCBDQgngsABhRQAAgGACgMIADgOIAtAaQAaALAcAAQApAAAagQQAPgJAYgTQgCAGgSAzQgSAvgBAFQgGAxgGAHQgQASgzAMQgbAAgbgfg");
	this.shape_10.setTransform(42.6,25.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#40152B").s().p("AgtAyQgQghgBgeQAAgkAUgVQARgTAZgDQAZgDASANQAUAOAAAYIgNAaQgNAZAAAMQAAADAIAVQAHAUABAFQAAAagqAAQgjAAgVgsg");
	this.shape_11.setTransform(45.9,13.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFCC99").s().p("AAfC6Qh8AAhNgYQhEgWgYglQg6hYgOg8IAAAAQgJgmgFgqIgEgrIAAgBIABgIIABgCIADgFIABgBIAiAYQAnAbAvBCQAwBCgNBDIAEAAIAMAAQABgRgGguIABgCIAEgBQA4gKALAAQA8AAA2ATQA8AVASAjIAIAKQgBACAOAfIAKAUQAEgCgGgeQgGgegOgOIgQgQIgBgCQAAAAABAAQAAgBAAAAQABAAAAAAQABgBAAAAQAMgCAjgLIABAAQAqgLAzAAQAeAAAjAQQAgAPAKATQgDgMgGgKQgHgNgGgEIAvALQACAQgCARQgBAOgjAbQgSARgjASQgpAWgmAMIABAAQgpAOhwAAIgBAAg");
	this.shape_12.setTransform(30.9,13.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AggAzQgsgTg4ABIhHALIgfg6IhChLQCDAuBoAVQBuAWB2AAQCIgDAAgEQAFAdgGAYQgGAYgwgHQgwgHgdAAQgdAAhbAiQg0gdgbgKg");
	this.shape_13.setTransform(33.1,6.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AiRBvQg7gSgsgaQg3gfAAgdIAXgfIAUAGIAOAFQAHAAAPgEQAOgCAFgDQAKAmAhASQAgARA7AAQAbABAPgIQAGgCANgLQAcA2BYgFQAlgCAagNQAbgOACgUQARAGAOAVQAPAYAAAcQAAAQi0AHQiRgDhAgTgAAeAsIgqgxQgSANgNAIQgRAKglAAQgkAAgggaIgfg0QgGACgJAJQgGAEgTAAQgkABgJgUQgFgIgLhEQDNAyAWAFQBwAWB6AAQAYAAA2gEQAzgFALgBQgOBbgnAAQgCAAgSgLQgWgLgMgIQgRAhgeAOQgUAIgYAFIgLABQgYAAgpgNg");
	this.shape_14.setTransform(32.6,14.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#40152B").s().p("AgNASQgKgvADgnQARAJAKA2QADAPAMAgQAAABgWAaQgFgLgIgog");
	this.shape_15.setTransform(1.1,6.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AiRB5Qhugig0g5QALgIAOgWQAMgSAEAAQAQAAATAEQAPABAQgIIASAdQALARAKAJQAcAZBDAAQAXAAATgLIAXgRQABAFAEAIQASAbA9AJQA+AKATgNQAUgNAKgMQAKgLADAAIAEAAQAQANAKAiQAFASADAUIgCAHIhqAMQg4AGgVAAQhoAAhlgegAAzA3QgXgLgjguQgOAUgHAGQgMAIgdAAQhCAAgcglQgSgrgLgGQgEARgnAAQgjAAgLgcQgFgOgIhHQBnAtCcAaQCDAXBnAAIA1gCQAvgDAJgCQgHA0gNAWQgMAWgMACQgMACgUgQIgegVQgIAfgVAPQgWAOgnADIgOAAQgdAAgSgIg");
	this.shape_16.setTransform(32.1,13.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#40152B").s().p("AgYAhQgLgtgFhbIAbAMQANAIAJAQQAHA7AGAPQAGAQAMAUIAAgBIAAAGQgQAwgOAJQgWgWgMgyg");
	this.shape_17.setTransform(-0.6,5.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[]},1).to({state:[{t:this.shape_10},{t:this.shape_9}]},2).to({state:[{t:this.shape_11}]},1).to({state:[]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},2).to({state:[]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},6).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).wait(1));

	// Layer 9
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AkNAqQhChGAAhUQAAgVAPgOQCmAxCFAYQBgARAwAAIAxgBQA4gDAggJIA1gPQASgGACABIACABQABABAAAGQAAAIgCABIgHABQgMAFgKAtQgLAqgSAPQgOALgZgBQghABgRgUQgOAegDACQgMALgoADQgEAsgBAEQAlACAjgPQAFAAABABQACACABAIQAAAGgdAJQguAOhaAAQjIAAhihpg");
	this.shape_18.setTransform(33.8,14.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AkeBpQhdhTAAiDQAAhWAhAAQAMAAApAQQA/AZAjALQCiA0C0AAQBKAACfgRQgIASgVAAQgZgBgXAbQgIAwgWASQgQAPgbgBQgJABgngSQgQAggHADQgHAEhBAGQAAAPgOA5QAAALAEAuIASgBIARgBQAKAAACABIAAABQgHAHgVAHQgiAJg7AAQi6AAhnhbg");
	this.shape_19.setTransform(34.1,15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AkyCBQhghYAAiMQAAg7AJgiQAJgiAQAAIBnAmQBuAnAfAIQB7AhCCAAQBFAABCgKQA7gJBQgVIAAAIQAAAZguAMQg2ANgDAEIgLAdQgKAcgHAIQgJANgUAGQgOADgGAAQgKAAgmgSQADAbgiAMQgYAIgwAAQgSAAgKgEIgkgNQgSAkgHA0QgEAaAAAUQAAApAUARQARAPAngGQgHAEACADIADAEQgBACg5AAQjDAAhqhig");
	this.shape_20.setTransform(34.6,14);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AhoCOQgegsAAheQABhPAxg3QAug0A5AAQAvAAAiAaQAZAUAHAaQAGAUgLAgQgUArgMAeQgQAsgKBJQgSAzhJAAQg3AAgbgpg");
	this.shape_21.setTransform(43.2,19.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("Ag5BEQgWgmAAgkQAAgWARgkQAXgyAjAAQAqAAAYAbQASAUAAAaQAAAogYAXIAQA3QABAmhBAAQgnAAgagvg");
	this.shape_22.setTransform(45.7,12.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AjaCpQhMgZgVgzIgnhNQgUgkgJhKIgFgwQgCgTACgIIgIgEIACgFQACgHABgFIAQgCQBqA2CJAfQCGAhB5AAQBFgBBCgJQA7gJBPgWQABgEAAAKQAAAUgUAJQgRAJg6AKQAAAZgGA+QAAAGAHgCQAFgBABAFQAAAvhFAwQhbBBigAAQiGAAhJgZg");
	this.shape_23.setTransform(35.3,11.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AkTBaQhkhIAAhuQAAgVAHgVQAHgVAJgHQFjBcChAAQArAABCgJIBngOIAAAFIgmASQggAOgFAPQgGATgFAoQgKAhgpAEIAMA4IAOgDQAQgFAGAAQAKAAAIALQgGAEgQAJQgWANgPAEQhYATinAAQijAAhnhJgAhoB+IgGgBIgjgGIApAHIAAAAg");
	this.shape_24.setTransform(34,13.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AkLBxQh9hQAAiDQAAhdAbAAQAEAAAiAMQAnAMAYALQDEA5BqAVQBMAOBCAAQAtAABIgJQBPgKARgBIgBAKQgiANgMAHQgWAKABAgQABAqgfAaQgVASgUABQAMAxACAOQAXgHALAGQAGAEAFAIQgcASgdAJQgzAQiWAAQjHAAh7hPgAgvCdIgbgFIgJgBg");
	this.shape_25.setTransform(31.8,11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_18}]},2).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[]},1).to({state:[{t:this.shape_21}]},2).to({state:[{t:this.shape_22}]},1).to({state:[]},1).to({state:[{t:this.shape_23}]},2).to({state:[]},1).to({state:[{t:this.shape_24}]},6).to({state:[{t:this.shape_25}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.FIZ34RHEAD001 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6A17D").s().p("AjKJ8QA3i3B0kXQCCk7AhhgQBJjVAAiTQAAhNgahVQgfhkg+hdQgzhMhFgzQhKgtgZgRIgKgFQChAjCICLQCICLAFC7QAEC7gMBIQgMBMghBPQgbBEhAB5IiVEYQgaA2g5CCQg5CDgnC9QgnC9gKBFQgJAygyBVIgKANQAMjvBRkQg");
	this.shape.setTransform(117.8,125.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C6A17D").s().p("Aj4NGQAXjsAshwIBMijQA/iHBHjIIADgCIgCAAIAAgEQBUjcAfhvQAkiCAAhjQAAhVg4iNQg5iQg3gwQgrgmgtgeIhTg0IgvgeQADgBgDgHQHgBYAAJXQAAB9g+CFQgjBKhLB/QgfBHhiC7QhfC+gxCgQgaBUgbD1QgBAYgPCVQAAAKAIAJIggAYIgLACQAOi7AMh+gABQgHIABAAIgCAAg");
	this.shape_1.setTransform(120.2,122.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C6A17D").s().p("AAEgNIgDAOIgCAKIgCADQAFgTACgIg");
	this.shape_2.setTransform(95,234.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC99").s().p("AgKSGQgfgdgehKQhBihgYhRQgYhRigkMQh1ivg5hcQhhifgwiFQg8itAAi4QAAifAVhZQAbh1BQhlQDUkMFdAAIBiAKQBmAMATAKQAPAEBcAiQBcAjBhAzQBhAzBKCYQBJCZgBCxQAACyhVC4QgrBdgvBHIhtDZQghBGg4B9Qg0B0glCZIgzDwQgZB5gZAyQgiBCg3AAQg0AAgegdg");
	this.shape_3.setTransform(75.3,122.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC99").s().p("ABKRiQg1gnhuiUIh+iuQgVgchgiZQhpimgdg6QhCh9gcg6QgxhigdhMQhIjHgPkbQAEAFAHhiQAGgxAKgvQAHgcAXhEQAJgaAnhBQAyhVAogfQCEhnBlgqQB3gyCTAAQAiAABqARQBhAPAlAJQHjBYAAJXQgBB9g9CEQgkBLhLB9QgfBJhkC7QhfC+gxCgQgZBUgcD1QAAAYgQCVQAAAKAIAJIgfAYIgMABIAAAAQggAAhEgxgAITAMIAAgBIgBAAg");
	this.shape_4.setTransform(75.2,120.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_4}]},1).wait(1));

	// Layer 4
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag5R5QgRgXgQgrQgQgxgLgaQgXg6hcjUQhIiogSgfQgnhHhwiYQgigsg1hZQhFhxgehFQgyh3gRhKQgch1AAikQAAh8Anh6QApiFBQhoQC/j4FSAAQC2AACgAyQBRAaAxAbQCgBbA5BJQA5BJASAoQAjBcAMB0QAJBJgBBKQABBxg4CZQg7Cjh3DDQhpCvgsBpQgNAfgeBiQgpCJggCYQgRBRgZB5QgSBWgXAhQgaAngwAAQhvAAgthAg");
	this.shape_5.setTransform(75.5,122.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("ABiSmIgKgJQhYhEgigjIALAJIACABQgWgTgxg/Qhfh9iVjrQjilnhTjLQhrkDAAkRQAAg8ACgeQAGg5AThaQAOg2AQg2IAQgaQAUgzBThYQBchiBTgvQBRguBpgZQBbgVBNAAQD1gBDYB0QCiBWA4BXQBBBkAdBvQAcBrgBCLQABCahQCzQgrBihPCHQiNEcglBUQh5EcAGCUIgFA7QAABvgPAoQgEAIgUAUIghAZQgIAEghAHIgfAHQgCgBgKgGgAIPAVIAAAAIgBAAg");
	this.shape_6.setTransform(75.6,119.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,1.2,151,242);


(lib.FIZ34RHAT001 = function() {
	this.initialize();

	// Layer 16
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BBC767").s().p("AAJBBQgNgZg6g5IAthLQApAhATAeQATAdABARQABASgPAYQgPAYgNAKQADgDgPgZg");
	this.shape.setTransform(74.8,67.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6870B0").s().p("AhwA5QARg3AQgHQAPgJAYAtQAXAcAKASQAIATAAARQAAAFgBAGQgFAKgSAdQgyhLgngfgAA5g7QgYgkglgdIAcgmQAnAQAqBDQALANgEAMQgFANgZAWQgCgFgXgjg");
	this.shape_1.setTransform(74.8,69.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C6C7C9").s().p("AkFFXQgxg4gLgHIBNigIA2BDQAfAnAAAOQAAAXgsCVIgCABQgGgNgyg5gACMgcQgfgSgPACIggAGQgRADgBgKQANgHA2hJIAPAHQAGACAHAAQAKAAAOgMQgQAAgJgLQgHgIAAgIIACgUQACgPgBgLQgoAEgRgIQgPgHAAgUIALgmQAAgHgBgCIgFgDQABgBAAAAQAAAAgBAAQAAAAgBAAQgCAAgBAAQgIAAAAACIgCAFQgBADgSAEQgRAFgUgBQgWgCgMgcQgLgdgCAAQgFAAgVAEIgaAEQghAAgLgSQgIgPAAgtQAAgGAJgHIAKgFQACAxAEAGQAEAGATADIA4gOQASAPAKAWQAHANAOAAIAbgGQAZgFAJAAQAKAAAJAfQALAiAMAHIAoATQAQAIAAALQAAAFgFAMQgFALAAAFQAAAKACAFIAMAAQAVAAAKgOQAEgHATgwQAGgOAegbQAegbABgEIgRgrIANAAQAtAkgCAiQgCAigiASQghASAAAJQAAAPAgAGQAgAGAAAfQAAAqg1AAQgFAAgJgEQgJgEgFAAQgUAAgBAyQAAAxgcAAQgQAAgfgTgAgih0IgnggQAOgMAvg3QAWgbAaABIgCARQAAATAKALQAOARAoAGQgCASgbAkIg1BAg");
	this.shape_2.setTransform(86.4,65.7);

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F0FF7A").s().p("AAtAcQhShKh1gLQAdgmAOgOQAGgGAKgGQAQgHAZAEQAXAEAWANQBbA2AlAlQAkAiAAAlQAAANgPAYQgPAYgNAKQgDgohAg6g");
	this.shape_3.setTransform(65.7,64.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("ADVCWQiFgJiah1Qg7gqgpgtQgmgpAAgQQAAgOAIgIQAJgIAQAAQAZAABBAhQBAAgBCAvQCsB1AABBIAAAHIAAgBg");
	this.shape_4.setTransform(42,96.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8089DD").s().p("ACXBBQheg+g8gIIAqgvQBpAFBVBGQBNBAAAA5QAAAFgDAGQgEAKgSAdQgkhDheg+gAk7ByQgrgsgghIQgdhFAIgsQAHglAaAAQAxAAAzBrQAKAWAcBDQAXA3ANAWIgdAOIgaANQgVAAgjgigAEdhkQhehDg5ARQANgNAKgRIAJgNQA8AABIAoQBLAqAiA5QAMAUgKAWQgIANgOAJQgOgvhYg/g");
	this.shape_5.setTransform(44.2,66.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AjOF0Qg9gti1hcQBohdAagSQARgLBlAvQAvAOAzBDIAsA5QAcAkAAALQABAYguCXQg6hdhJg3gAEJBHQgVgRgCAAQgFAAgVAEQgXAFgIAAQAAgCgGgJQAEgCAPgRQAUgYAWgeQAQAKAMAAQAGAAAEgCIAGgFIAIgGQgagMgDgGQgEgKAFgtIgeACQgXAAgLgIQgJgIAAgRQAAgGAHgTQAFgRgBgFQgDgEgKAAQgDAEgHAFQgOAIgjAAQggAAgIgdQgKgcgDAAQgFAAgVAEIgaADQgiAAgKgUQgGgOgBgwIgEgOQgFAMgJBGQgRBAgqAAQgNAAgFgKQgEgHAAgKQAAgOAHgKIAIgIQAAgNgPgDIgjgDQgzgEAAgpQgBgnAkgaQAkgbAAgDQAAgFgFgKQgEgLAAgFQAAgrAcgVQAWgQAfAAIA1ASQACAAAJgFIATgMQARgJAegJQAggLAOAAQAgAAAlA4QATAbAOAcIAagEIAbgEQAkAAAbAcQAXAYgBAYIgYBAIABAOQAtgDAmAXQApAaAAAoQAAAkghASQgiASAAAJQAAAPAhAGQAfAGAAAfQAAAog1AAQgEAAgJgDQgKgDgFAAQgPAAgEAMQgBAGAAAbQAAAugoAAQgSAAgWgRgABwAJQgNgUgKgJQgjgficg6QASgTAUgXQAZggAIgRQALAQAgADQAfACATgJQAQArASAKQAUAKAxgLIgCAQQAAAUAKALQAPAQAnAGQgCASgbAkIg1A+QgSgSgPgWg");
	this.shape_6.setTransform(73.5,55.2);

	// Symbol 18
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AiwH+QiPhShzikQhKgeg3hyQgtheAAg2QAAgZAQgVQATgaAhAAQA5AAAxBnQAOAeAcBDQAbA9AXAkQBxhUB2h6QBkhoAagwQgagIgEgDQgCgCgGgSQgCgGAAgLIAAgXQgdgKgMgCQgbgGgLgPQgMgQAAgiQAAgpAfgUIAVgMQAKgGAAgHQAAgFgEgNQgFgNAAgFQAAghAhgjQAkgoAzAAQAVAAAOAHQAHADADAEIAegUQAqgVA7AAQArAAAeAbQAcAaAXA7IAxgIQAigBAkAfQAkAfAAAdQAAAOgGATQgHAXgKALQAvgKAlAlQAkAlAAAzQAAAYgIALIgrAoQARASAYAVQACACAAAOQAAAlgVARQgYATg4gCQAFArgPAYQgRAagnAAQgRAAgcgRQgbgRgDAAQgFAAgKAFQgLAEgSgCQgSgBgIgHIgEgFQhoCggxBiQgeA/gMAuQgNA0gBA8QgGAkgsAAQhcAAhug/g");
	this.shape_7.setTransform(60.8,57.4);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.1,121.9,114.7);


(lib.FIZ34RHAIRBK001 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D3232").s().p("AgiD+QgcgRgHgKIAJABQALAEAXAPQAaARADAIQgIAAgdgSgAgqBfQgPgOAAgWQAAgHAGgCIAFgBIBFBDQgBACgDAAQgqgHgTgQgABMhQQgjgQgPgOQgMgLgGgQIASAGQAhACANAVQAGAMgBAMIAAAGIgBgCgAgchgQgjAAgNgpQAFgDADgEIAuAtIgCACIADABgAAAjnQgNgXgDgRQAOADAMAaQATAiAFAEIgEABQgPgDgPgZg");
	this.shape.setTransform(23.6,51.4);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#825454").s().p("AhKFGQglgkgSgZQgIgMgag3IgZg3QA+AwAcAMQAQAIASABQgXgSg7h3Qg4hugEgXIABgBQAMAGApAjQAdAWAOABQAHgBADgBQgYgmgWg2QgqhsAOhZQgFgNAUAZIAfAoQBHBSAQAFIAFgCIABgCQgDgcgMgxIgMgwIAEguIAFg6QAfBcAnAsQAnArAuAAQAPAAAVgKQATgJAIgJQApAFAAA5QAAA4g1DFQg2DIgpBBQgNAeglAAQgcAAg3g3g");
	this.shape_1.setTransform(24,45.3);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ah0E7QhQhpAAhTQAAgGAEAAIAEACQApAgAWAWQANALADACQg9h1gHgQQgjhPAAhMQAAgGAFgBQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAIAjAvQAdAnAPAPQgbg1gNhCQgIgrAAgbQAKiHAMAWIABACIA1BHQApA2AEAFQgDiLAJgxQAFgZAUggIADAPQAKBmA8A9QAuAuAlAAIArgIQAXAFAGAHQAHAIgCARQgPBAgOBOQglDHgyCEQgtBygcABQg8AAhQhqg");
	this.shape_2.setTransform(21.3,42.1);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,44.9,84.2);


(lib.FIZ34RHAIR001 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D3232").s().p("AJHKNIgCgBQAHgCBWguQACAWgcAOQgZANggAAIgIAAgAL1JDQAIgLAQgIQAHAKgGAHQgIAJgXACgAJkICIgCgEIAkgZQAigXAKAAQgBAWgXARQgXAPgXAAQgGAAgCgCgAJHGgIgFgDIAHgFQAJgGAEgIQAEgDAUAAQAGAAAEADIAHAEQgJAJgmAKQgHAAgCgBgAJ3E7IgCgCQAEgCAPgSQATgTATgKQAAAVgJANQgNASgaAAQgGAAgBgBgAIhEDIgNghQgNghgIgbQABgIAEACIAEADQATAaAHAZQADALAAAKIgBAQIgCAJgAk1kJIAGABIAwAOIAUAJIgFAEIgDABQgCABgGAAQggAAgagegAnOkEQgegLAAgRQAAgGACAAIAFABQAGACAgARQAhARAGAGIgHAAQgYAAgXgJgAqgksQgSgRAAgNQAAgHABgBIAEgCQAzAjAbAPIgCADQgGAFgOAAIgFABQgUAAgSgTgAkhlDQgYgQgKgKIAJACQAyAXAPATIgBABQgKAAgdgTgAohmJQgbgTgBgPQABgBAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAIACAAQANAKAXAWQAVAUAEAGQgNgCgYgRgAmamjQgRgUgDgJQAWAIAKAOQAHAJAPAcQgPgIgTgWgAq4nFQAAgGABgBIACgBQAOACAuA+IgHABQg4gPAAgqgArvmyQgNgIgKgQQgKgPAAgJQAAgFAFgUQAQAVAIAQQALAVAFAXgAlQnQQgKgMgIgVQgKgbAFgNQAOAaAHATIAPApgAoDnuQgEgEgNgaQgOgegEgQIAHAJQAGAGAaBAgAqTo/QgEgDgPgYQgQgZgBgGIAIgTQAEAIAEAEQAGALAVA6g");
	this.shape.setTransform(92.5,107.6);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#664548").s().p("AD/MfQAAgdDcipQgLAEgKAAQgMAAgPgRQgOgPAAgLQAAgHAaglIAigwIACgEQgYAIgHAAQgjAAgLgLQgGgGAAgPQAAgJAFgGIAQgUQAhgvAqiBIhVAcQgeAJgIAAQgeAAgHgQIgBgRIALgiQASg3Avg1IABAQQAAALgOAmQgPAsgMAMQAHAGAJAEQAHADAdgGQAcgGAygyQAzgxAWgSQADAIAAAZQABAZgyBzQgyBzgNAOQARAOAEAAQAlAAAkggQATgRAegiQgOBYggAyQgSAagcAmQAHAEAJAAQAFAAAigKQAkgLAOgHIAEgCQAEgBAAAGQgOAzhUBXQhVBWgmASQgnARgmAJQgfAHgfAUIgCAAQgEAAAAgIgAiQicQi5AAiaiHQg/g3gmg9Qgkg7AAgrQAEhFAAgWQAAhOAthDQAZgkAegZQgPASgOAsQgVBDAABIQAAC6CYB1QBYBDD/BfQg/gQgKAAg");
	this.shape_1.setTransform(117.7,106.1);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#825454").s().p("AH1LmQAtidAAg1QAAkLipi3QiEiPivgsQgKgFgTgIIgSgHIhDAHQg0AHh+AFQhnAEgmAAQhxAAhGgXQhTgbg3hDQhuiDgphgQgmhagJiKIAJg5QAUBhAtBFQAvBGAogOIADACQACAAAAgGQAAgagKhZQgKhaAIg0QAIg0AXg7QAXg7AJANIgDgBIgEBTQAACYAvBMQAjA5AvAAIAGAAIAAAAIAAAAIAAgHIgFgsQgGgnAFg0QAEgzAWg/QAVg/AegiQgaBDgLA7QgLA6AaB7QAVA5AUAeQAJAPAJAIIATAVQAQhVAwhaQAwhaArgYIADgCQgQASgPAuQgVBDAABHQAAC6CgB7QCBBlEMBQQB3AkBaB0IA3BLQAZAgATAAQAiAAAUgGQAhgJAMgbIAFgJIABAQQAAALgOAnQgPArgMAMQAHAGAJAEIAJAEQArAABCg8QAigfAjgnIACAAIABgBIAAAGQAAAugaBKQgfBYg3BZQARAPAEAAQAlAAAkggQATgSAeghQgkB+gQARQgJAGgGAHQgKAMgPAhQAHAEAJAAQAFAAAigKQAkgKAOgHIAIgHQhcDWi+A4Qg1AQgnAzQgjAsguACIgOADQAlgQAyisg");
	this.shape_2.setTransform(91.5,102);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#664548").s().p("ACsGdIBFgIIATAHQATAIAKAGgACsGdIAAAAIAAAAIAAAAgAkOhKQgZh6ALg7QAKg6AbhEIAngsQgFAYgfB6QgRBCAABHQAAAwAJAsQAJAnAOAWQgTgcgWg5g");
	this.shape_3.setTransform(69.7,48.8);

	// Layer 5
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AGYPcQgPAAgLgFQgJgEAAgLQAAgKAUgZQAUgZAth9QAuh9AAiHQAAhbglhiQgmhohDhUQiejGjjAAQjtAUgyAAQixAAhjgpQhqgshMhyQhRh4gph8QgchQAAghQAAhfAPgnQAGgQAegnQANA+AUA9QAoB3ApAUIgBgFQgCgIgIhHQgHhHANhRQANhRAigxQAigwARAAQARAAABA3QABA3gBAvIANBlQARBIA0AsIAAgCQgCgGgFgqQgGgoAFhYQAFhZBChQQBChQAigFQAKAAAAACQACANgdBqQggB1AABmQABAnAEAXQADAZANAfQABhLBbhhQBXhcA/gMIgEAMQgYARgdBqQgdBJgBBAQAABhAwBVQAsBQBHAtQBEAtBxAxQBzAxBYAbQBYAbBOBTQBPBWAgAwQA5ACAbgdQAagdATg7IAGAIIAEAHQABADAAAHQABBSgfBfQA7gZAjgtQAjguAaglQAZglAHgBQAGBkgPA5QgLArg0CVQAmgJAlguIAhgsQAFAAADABIACABIACACIAAAcQgEAsgcBJQgZBAgQAVQAPgEAigWIAhgUIAJABIABAMQABBWgyA+QhBBQi/BvQhIApgXAZQgYAagcALQgbALgfAAIAAAAg");
	this.shape_4.setTransform(91.9,98.8);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,183.8,197.7);


(lib.FIZ34RGLSSR001 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8089DD").s().p("AgfAoQhAAAgLgCQgEgBgDgFIAAhJIASgBQAGAAAAAEQAAAFABABQAFADAWAGQAVAIAGAAQBlASAuAHQgFAUgEAFQgFAIgNAAQg2gEg/ABg");
	this.shape.setTransform(12.4,4.6);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ah3AmQACgDAWgGQgXgHgCgCIgEgDIAAhEIAWgBIDjAoIgPAnQgMAagKAAQi3AAgYgPg");
	this.shape_1.setTransform(13.6,5.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1,0.2,25.1,10.7);


(lib.FIZ34RGLSSMID001 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8089DD").s().p("AC/APQhigMhYABQhVAAhIAIQhIAIgeAGIgPAEQgTAAgNgJIAAgtIAEgDQATgKANAEQgCABgJACQgIABgNAKIgBAAIAsgFQAqgFA4gIQA3gIBzADQB2AEBIARQBIASAaAIIAAAAIAAAnQgOgRhhgMg");
	this.shape.setTransform(31.8,5.6);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ADSAoQhtgShlAAQicAAg3ANIg5AOQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAgBgBAAQgHgCAAgHQAAgFAEACQAEABAAgFIgYgFIgIgEIAAgrIAEgCQAMgGAOgCIARgEQBbgSCLAAQCSAABlAWQAuAKAhAPIAAA8IhcgOg");
	this.shape_1.setTransform(31.8,5.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.5,0,60.6,11);


(lib.FIZ34REYER001 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A3C0C3").s().p("AgTCzQglhNgFhoQgFhrAihIQAghIAwgBIAEAAIAGABIAAAAIgDAEQgcApgOAwQgNArgCAuQgEAuAAAsQgBAzANA2QAQA2AKASIAQAgIAPAbIgBAAIgBAAQgvAAghhMg");
	this.shape.setTransform(15.6,28.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A3C0C3").s().p("AgUAmQgGgjgCgkQAcgJAagEIgBAkQgBAbAFAeQgbgDgWgGg");
	this.shape_1.setTransform(12.3,31.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4F9B9F").s().p("AAEDdIgDgEQgJgOgJgUIgBgCIgBgCIgIgRQgMgdgIghIACAAQASAEASACIALAAIAAABIAEARQAQA2AKASIAQAgIAPAbIgBAAIgBAAQgfAAgagigAggi1QAghIAwgBIAKABIgDAEQgcApgOAwQgNArgCAuIgCAdQgdAEgdAIQAAhYAeg/g");
	this.shape_2.setTransform(15.6,28.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4F9B9F").s().p("AAEDdIgDgEQgJgOgJgUIgBgCIgBgCIgIgRQgPglgJgsQAYAGAbABQABASAFASQAQA2AKASIAQAgIAPAbIgBAAIgBAAQgfAAgagigAg4AzQgEgagBgbQgFhrAihIQAghIAwgBIAKABIgDAEQgcApgOAwQgNArgCAuQgEAuAAAsQgBAVADAUQgbgCgZgHg");
	this.shape_3.setTransform(15.6,28.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8089DD").s().p("AAAAAIAAAAIAAAAIABABg");
	this.shape_4.setTransform(14.3,53.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6569AC").s().p("AAtDwIgigMIgBgBIgKgRIgSglQgKgWgNgyIgBgDQgHgZgDghQgDggABgnQABhUATguQATgvAHgKIAAAAQASgQAagIQgPAOgLAYQglBVAFBxQAFBuAqBZQAJATALAQIALAOIgCABIgJgDg");
	this.shape_5.setTransform(8.7,29);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D9FFFF").s().p("AhNCzQglhNgFhoQgFhrAihIQAihIAwgBIADAAIAFABIAAAAQAJADAJAEQAeAJAVAvIABABIABACIADAEIAGAMQArBRgCBiQgBBjgjBMQghBGgvACIgBAAIgBAAQgtAAgjhMg");
	this.shape_6.setTransform(21.4,28.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D9FFFF").s().p("Ag3A/IAAgBIAUABIgBAAIgTAAgAg9AiQgagCgZgGQgGghgCgnQAcgIAcgEQBZgNBfAdIABABIAAAHIAAACIAAACQgBAUgCASQhUAbhEAAIgbgBg");
	this.shape_7.setTransform(21.4,33);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#66CCCC").s().p("Ag0DdIgDgEQgLgOgJgUIgBgCIgBgCIgIgRQgMgdgHghIABAAQASAEATACIAMAAIAAABIAUAAQBDAABSgYQgIA2gWAuQggBGgwACIAAAAIgCAAQgdAAgagigAg+gqQgdAEgdAIQABhYAdg/QAjhIAvgBIAIABQArAKAmBIQAiBCAGBPQhegchZAMg");
	this.shape_8.setTransform(21.3,28.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#66CCCC").s().p("Ag0DdIgEgEQgKgOgKgUIAAgCIgBgCIgIgRQgQglgIgsQAYAGAbABQBNAGBjgeQgIBBgZA2QghBGgvACIgBAAIgBAAQgdAAgagigAg/A8QgbgCgYgHQgEgagBgbQgFhrAihIQAihIAwgBIAIABQArAKAlBIQArBRgCBiIgBAaIgBAAQhVAchDAAIgegCg");
	this.shape_9.setTransform(21.4,28.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).to({state:[]},1).to({state:[{t:this.shape_8},{t:this.shape_5},{t:this.shape_7},{t:this.shape_4}]},1).to({state:[{t:this.shape_9},{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

	// Layer 8
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAnEeIgMgBIgYgDIgQgDQgWgEgfgMQgfgMgHgEIAAAAQgzhdgMhDQgMhFABgfQAAghAJhCQAKhCAegrIARgNIAGgFIAGgDIAAAAQAngUAVgFIAegJIAIgCIAWgGIAGAAQA9ABAuBWQAsBSACByQAEBwgoBYQgoBXg+AAIgCAAgAAij8QAJACAJAEQgJgFgJgCg");
	this.shape_10.setTransform(18,28.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAnEeIgMgBIgYgDIgQgDQgWgEgfgMQgfgMgHgEIAAAAQgzhdgMhDQgMhFABgfQAAghAJhCQAKhCAegrIARgNIAGgFIAGgDIAAAAQAngUAVgFIAegJIAIgCIAWgGIAGAAQA9ABAuBWQAsBSACByQAEBwgoBYQgoBXg+AAIgCAAg");
	this.shape_11.setTransform(18,28.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36,57.2);


(lib.FIZ34REYEL001 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A3C0C3").s().p("AgcCtQgghLgChkQgChnAihGQAhhGAtgBQAIAAAHADQgcAngQAuQgOAqgFAuQgEAtgBArQgCAyAMA1QAOA1AKATIAPAfIALAWIgDABIgEAAIgBAAQgtAAgehKg");
	this.shape.setTransform(13.6,27.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A3C0C3").s().p("AgYAZQgDgZgBgZIACAAQAagJAcgFIgBAbQgBAYADAcQgbgGgagJg");
	this.shape_1.setTransform(10.2,31);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4F9B9F").s().p("AgcCtQgQgngJguQAZAHAXAFIAFACIAFATQAOA1AKATIAPAfIALAWIgHABIgBAAQgtAAgehKgAgeivQAhhGAtgBQAIAAAHADQgcAngQAuQgOAqgFAuIgCAjQgeAFgeAJQABhaAfhAg");
	this.shape_2.setTransform(13.6,27.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4F9B9F").s().p("AgcCtQgUgvgIg5QAcAIAbAGQABATAFATQAOA1AKATIAPAfIALAWIgHABIgBAAQgtAAgehKgAg8AnIgCgpQgChnAihGQAhhGAtgBQAIAAAHADQgcAngQAuQgOAqgFAuQgEAtgBArQgBASABASQgagGgdgJg");
	this.shape_3.setTransform(13.6,27.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D9FFFF").s().p("AhPCtQgghLgChkQgChnAihGQAjhGAtgBQAFAAAIADQAlANAfBAQAmBPgEBeQgEBggkBKIgCAFIgBABIAAACIgBABQgZA7gkAAIgFABIgEABIgBAAIgCAAQgsAAgghKg");
	this.shape_4.setTransform(18.7,27.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6569AC").s().p("AAgDkIgSgLQgOgVgKgaQgMgdgGgcQgPhWAAgwQAAheAhhNIAIgQQAPgOAUgKIAFgCIgEAEQgKAPgKAUQglBTACBtQABBrAlBWQAJATAKAQIAIAKIgMgHg");
	this.shape_5.setTransform(6.8,27.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D9FFFF").s().p("Ag2AmQgbgGgcgJQgDgXgBgbIACgBQAcgJAcgFQBVgPBUAVIAAAJIAAACQgCAigGAiQgeAGgjAAQgrAAg0gLg");
	this.shape_6.setTransform(18.8,31.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#66CCCC").s().p("AhPCtQgQgngJguQAZAHAXAFIAHACIAGABQArAIAmABIAQAAQAYgBAWgEQgKAlgQAhQgeA/goAGIgFABIgBAAQgtAAgghKgAhRivQAjhGAtgBQAGAAAHADQAlANAfBAQAfA/ADBKQhTgUhUAOQgeAFgeAJQABhaAfhAg");
	this.shape_7.setTransform(18.7,27.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D9FFFF").s().p("AAJAAIAAAAIgRABIARgBg");
	this.shape_8.setTransform(28.8,33.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#66CCCC").s().p("AhPCtQgUgvgIg5QAcAIAaAGQBXASBGgNQgKAwgUApQgeA/goAGIgFABIgCAAQgsAAgghKgAg4A2QgbgGgcgJIgCgpQgChnAihGQAjhGAtgBQAFAAAIADQAlANAfBAQAmBPgEBeQgBAbgEAZIgSADQgYAEgZAAQgtAAg1gMg");
	this.shape_9.setTransform(18.7,27.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).to({state:[]},1).to({state:[{t:this.shape_7},{t:this.shape_5},{t:this.shape_6}]},1).to({state:[{t:this.shape_5},{t:this.shape_9},{t:this.shape_8}]},1).wait(1));

	// Layer 9
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAWEVIgMgBQgRgCgIABQgIABgmgRQgmgSgBgCIAAAAIAAAAIAAAAIgUgoQgTgpgIglQgPhGAAhHQABhIATg/QAOgvAQgTIgCABIAEgFIADgCIAGgEIAGgDQAlgTAigJIAngMQAJgCABABQA6AAApBUQAnBQAABuQAABtgpBVQgoBUg6AAIgCAAg");
	this.shape_10.setTransform(16.2,27.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,0,32.7,55.5);


(lib.FIZ34REARR001 = function() {
	this.initialize();

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAJBQQAAgHAHgFIAOgMQAJgKAGgKQAEgGAEgOIAEgPQAAgNgJgMQgMgRgZAAQgFAAgkAeQglAdgMABIgBgCQAMgTAugnQA0gsAdAAIAWALIgXALQgVALAGAAQASAHAJASQAHANgBAOQABAfgTAVQgKANgfAUIgGABQgCgBAAgFg");
	this.shape.setTransform(17.5,23.2);

	// Layer 8
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C6A17D").s().p("AhCBTQgTgTAEgyIgEABQgDgBgBgDQAjg1AvgeQAigYAdAAQAiAAAABMQAAA+gkAfQgdAYgrAAQghAAgPgOg");
	this.shape_1.setTransform(18.4,23.3);

	// Layer 7
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("Ag6CrQgWgFgHgGIgbgTQgSgOgFgUIgHgWIgBgCQgKgLgRgQQAigEB1hxQBwhxAoAAQAQAAAMAWQAPAbAAAxQAABmgzBHQgyBHg4AEQgYADgSAAQgWAAgLgEg");
	this.shape_2.setTransform(16.4,20.2);

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhfDCQgegKgMgQQgKgNgMgsQgLgqgLgKIAfgWQgHAAgIgEQBdh0BchGQBDgyAYAAQAcAAARAVQAaAcAAA/QAAEnjSAAQgkAAgfgKg");
	this.shape_3.setTransform(18.3,20.5);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.9,0,37.5,40.9);


(lib.FIZ34RCOLLARFR001 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0FF7A").s().p("AgYCFQAMg9gRhIQgVhZg0gaIALABQAdABBBgEQBUgHAQgJQgGARgyBtQgyBvgSAeg");
	this.shape.setTransform(16.4,18.4);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgnA6QAAhIgbgpIhYhlQA5AFAjgBQAzAACcgoIAKgCQgyB/gYA0QhACHg+BLQAGhpAAggg");
	this.shape_1.setTransform(15.6,19.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,31.2,39.1);


(lib.FIZ34RCOLLARBK001 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B5C063").s().p("AhRADQgUgrAhgDQAigEAlADQAqAFAVAJQAYAKAAASQAAAPgjAOQgqASgkABIgDAAQgkAAgTgrg");
	this.shape.setTransform(69.4,7.5);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0FF7A").s().p("AgHDcQgogZgng1Iglg4QgNgUgQgLQgYgTi7hUQB6hNCjg2QC1g9CPAAQAyAAAgAKQAkALABAWQAAAYg7APQg8APhhAAIhGgGQBUBUAUAxQAMAaAABKQAAA3gUAkQgkBCheAAQgXAAgdgVgADZB/QAGhBgGgwQgLhZhDgtIALABQAcABBDgFQBVgGAQgJQgGAQgzBuQg0BugRAfg");
	this.shape_1.setTransform(42,27);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAAD3QglgXgjgoQhKhUg1gpQhVg/h3gkQB+hbC3hCQC8hFCNAAQB7AAAhAoQAfAngrBYQgbAsgqBUQgpBUgVAiQhMB4h1AAQgXAAgggUgADoCHIAAABQACgGgCgBIAAAGg");
	this.shape_2.setTransform(40.5,26.7);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80.9,53.5);


(lib.FIZ34RBROWR001 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#825454").s().p("Ah9AVQAAgFBXgqQBdguAmgBQAJAAAKAMQAIAKACAIQALApgbAJQgmAGgQAEQhAAQgrASIgyAWIgUg0g");
	this.shape.setTransform(14.9,9.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#825454").s().p("AhiA7QA3hUAkgiQAlglApAAQAMAAAIAUQAHATAAATQAAAKgPAJQgoAVggAXQgLAJgfAfIgiAgg");
	this.shape_1.setTransform(19.8,7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AiCBMQgQgYAAghQAAgHAugdQA1glAvgUQCTg9AACDQAAAWgVAIQgSAHhNAKQgTACg9AZIg7AZQgJAAgNgTg");
	this.shape_2.setTransform(15.3,9.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhhBvQgagVAAgjQAAgaA2hBQA6hIArgLQA0gOAXAgQARAXAAAuQAAAGgeATQgxAbguAqQgYAUgZAZQgRARgCAAQgOgDgOgKg");
	this.shape_3.setTransform(19.8,7.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,0.2,29.6,19.1);


(lib.FIZ34RBROWL001 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#825454").s().p("AgNAZQg1gbgVgGQAHgzAEgJQAFgNAQAAQAWAAA5AtQBAAuAAAiIgFAPQgFAPgGAIQgdgZg4ggg");
	this.shape.setTransform(10.7,7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},2).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AA8BbIhPg1QgkgWgjgOQgRgIAAgaQAAg+AigIQAcgHAtAeQAnAZAjAnQAiAkAAAPQAABFgbAAIgVgOg");
	this.shape_1.setTransform(10.7,7.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.FIZ34RBOW001 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DADEE0").s().p("AgdBsQgygcAFgTIgDgFQAZAUAiAMQAcAKAZAAQAVAAAAgUQAAgUghgPQgVgJgzgPQA7gBAuAZQArAWAAAaQAAAYgXAMQgOAHgNABQggAAgugbgAhFABIBFgjQAegUASghIgBgIQgQACgoAUQgtAWgiAaIgHgBQgDgBAAgHQAUgZAdgaQA4gwApAAQAQAAAGAGQAGAGAAAOQAAAYgVAaQghAshJAOg");
	this.shape.setTransform(10,15.2);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgrB3QgsgeAAgMQAAgMADgDQAHgFAEgIQANALAcALQAaAKAIAAQAHAAAKgDQAKgCABgCQgLgGgygVQgxgUgJgDIAAgEQAAgEANgKIgLgKQAagOAigXQAogcAKgMIgEABQgKAEgyAdIgzAdQgEAAgEgDQgHgEAAgJQAAgeA+gsQA8grAoAAQALAAAIAHQAKAIAAAPQAAAhgVAiQgcAsgxAOQA5AHAjAeQAeAZAAAaQAAAWgMAQQgRAWgmAAQgkAAgwghg");
	this.shape_1.setTransform(10.8,15.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21.7,30.6);


(lib.FIZ34RARMR001 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("AiYCNQgSgKAAgUQAAgxA5gnIAqgZQAWgPAGgMQgwAJgxAgQgmAag/AAQgxAAAAgZQAAgSAegRIBUgpIgGgIQgPgThMAfIANgLQAPgIAagHQAkgNAaAAIAyACIgPARQAjgHAMgEQANgEAogHQAmgHA1ARQA1ARAXASQgCgBACAOIACgBIAxhAQAfgnAKAAQAZAAAOAOQAPANAAAVQAAA3hfAlQgxAShFATQgDABghABQgZACgaAYIgtAxQgrApgjAAQgIAAgMgHg");
	this.shape.setTransform(-112.1,-14.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0FF7A").s().p("AleCjQgPgDgIgKIA0gQIA+gMIASgGQgLALgaARQgiAVgWAAQgIAAgIgCgAFvCZQgOgJgWgGQgTgFgQAAQgLAAgLACQgFgBAAgRQAAgPASgOQASgOAVgBQAvABAABCIgBAUgADuhVQgIgZAAgGQAcghAxgPQAUAzgBAGQgLACgbAOQghAQgIAOg");
	this.shape_1.setTransform(-72.6,-22.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#72EBEB").s().p("AgvAiQgKgpAEgXQAEgXASgRQATgQAUAAQAQAAAJAsQAMBAAKAtQgigNgEAAQgWAAgNANQgHAHgKANQgBgKgLgrg");
	this.shape_2.setTransform(-41.5,-23.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8089DD").s().p("AjDEoQibhBAUgBIAagJIAmgZQAYgYAWgSQAbgXAIAAQAOAAAhANQAqATAcAKQBsAqBrAAQAZAAAlgJQAkgIAHAAQAZAAAVAFQAkAIAAAWQAAAyhHAoQhGAnh2AAQhzAAibhCgACriKQgMgZgBAAQgFAAADAGQACAFgFAAQgGAAgBgLIgBgSQgShUABgOQAAgGAEAAQAHABAHgkQAIgjAMgEQALgFgGAJQAgA5AHAQQAHAQAvB5QgDAHgdAPIgsAWIgRglg");
	this.shape_3.setTransform(-69.2,-27.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC99").s().p("AiyBxQgMgMAAgRQAAgYAngmQAwgsA5gBIABgUQg1AAgeAQQgSAJgiAZQg5gBgagFQgkgGAAgWQAAgXAugVQArgVAjACIgDgDQgJgRgRAAIgYAFQgcAGgSAAIAPgGQARgGAZgHQAcgGALgBIBNALIgRAPQAJAFAVgHQAVgHAZgCQAagCASAFQAVAGA2ARQA1ASAQAkQAdgGAEgFQAFgOAKgVQAPgdAWgLIAVgFQASAAAOALQAQANAAAYQAAAZgPARQgQARgjANQgSAFhMASQhXAWgUgCQgrgEgwArQgzAsglAAQgUAAgMgMg");
	this.shape_4.setTransform(-116,-19.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#72EBEB").s().p("AguAcQgJgwAAgQQAXgyAtAAQAOAAAFAYQAJA9APBGIgWgFQgYgIgMAFQgOADgUAXQAAgJgKgyg");
	this.shape_5.setTransform(-43,-22.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8089DD").s().p("AAsFUQgegKhEgRQhFgQhPgfQinhFAnAFQAmAGAug4IAegoQAOgSAFAAQAOAKA4AaQA4AbBHAVQBHAWBHAFQBHAFAHAHQgHgIAKAAIAhgSQAbAAAaAKQAdALAAAQQAAAegeAhQg0A7hbAAIgFAAQhWAAgegKgAC0imQgEgHgDAAIgEABQACADgEAHQgFgQgKg6QAAgXAKgbQAOgnAbgYIAnBZQAOAkAYBIIhPAqQgMgpgJgPg");
	this.shape_6.setTransform(-71.5,-26.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F0FF7A").s().p("AFjCNQgQgFgOgBQgLAAgSAFIAAgtQAYgOAZgCQAxgEAAA4IgBAgQgPgPgXgHgAlWCMQgZgNgagcQAjgHCagUIg+AxQgkAagSAAQgHgBgPgGgAECh1QAGgNASgLQARgKAmgMIASA7QgVgCg9Atg");
	this.shape_7.setTransform(-76.4,-22.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCC99").s().p("AivB4QgTgKAAgcQAAgMAPgVQAPgUAQgLQAcgSAvgLQAcgIAAgSQgJgCAAgBQgdABgYAHQgIACgiAVQgcAQgNAAQgsAAgdgHQgkgLAAgVQAAgXAwgTQAtgTAhADIgIgKIgRgHIgLgEQgKAAg1AIQAWgVA3gBQAxgBAvAOIgRAPQBfgNAMAAQASAAAtAXQALAGAzAdIAUAKQAFADAGAOIgBAFIABABIA3g0QAmgjAOAAQAQAAAOAMQAQAOAAAVQAAAngsAWQgrAWhcAMIAogDQhMAIgRAAQgPAAggAEQgeAEhBAnQg/AmgIAAQgUAAgKgGg");
	this.shape_8.setTransform(-116.7,-21.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#72EBEB").s().p("Ag2gtQAAgIAVgPQAZgRAaAAQAKAAALAuQAKApAGBEIgqgPQgHABgMAHQgTAKgNANIgQiDg");
	this.shape_9.setTransform(-43.5,-22.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8089DD").s().p("AiCETIh0g0Qg+gbgdgIQA4gDArg0IAaglQALgQAHAAIBKAkQBWAnA2ASQAzARBCAHIA4AEQALAAATgEIAigOQAoAAAWANQATALAAAPQAAArg+AmQg+AmhCAAQh3AAifhCgACzi2IgFAJIgBgHQAAgOAFgYQAEgPgKgDIANgvQAEgUAPgjIADgCQAfArAEALQAOAtAdBSQgMABggASQgdAPgGAGg");
	this.shape_10.setTransform(-72.3,-25.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F0FF7A").s().p("AGBCgIgogQIgYgJQgKAAgOAEQgGgNAAgJQAAgOAQgMQAQgMAUgDQAzgGAAA6IAAAkgAlkB/QgkgPgBgcQAygJAmgCQAwgCA4gIQgWAhglAWQgiATgZAAIglgKgAEGh2QAlghAEgBQAbgGAMgFIARA7QgHABgiARQgiARgHAHg");
	this.shape_11.setTransform(-77.1,-22.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#72EBEB").s().p("AhZgdQgBgaApgVQApgVATAMQAMAHAcA3QAZA0AOArQgHgGgFgCQgNgFgWAAQgEAAgTAHIg+AZIgvh4g");
	this.shape_12.setTransform(-34.2,-30.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8089DD").s().p("AjUFYIAHgHQAQgNAHgdQAHgWAAgYQgBgWgEgOIgNgrQAMAHAuAKQAqAKAGAAQBJAABWgcIBLgdQAfAAAVAJQAPAGgBAEQAABohsAxQhVAniJAAQgiAAg9gHgAgmiVQgMgegZgrIgYgmQAAgYAPgfQAKgUALgPQAOALAoA0IBABVQgkADgPANIgqAmg");
	this.shape_13.setTransform(-44.1,-27.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F0FF7A").s().p("AkAEJQg3gTgfgaIAPAFQBQACApgnQAlgkAAhBQABgfgIgTQgEgJgEgFQAAgKAFgIQAmAeAWAXQAoArAAAzQAAAggWAmQgiA4g/AAQgSAAgogNgADAAAQALgOAcgNQAZgLAPAAQAfAAASASQATASADAgQgDAIAAAGQgBACgLgEQgKgEgYgEIgagDIgbAGQgdAGgIAEgABmjWQAjgvAfgIIAUgFIAEgDIAgAzQggADgfAWQgbATgHARg");
	this.shape_14.setTransform(-56.9,-18.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCC99").s().p("AghB2Qikg+hOg1QAFgCABgBIABgCQAVgCAKAAQApAAB4A1QBuA0AggKQhFg1ilg4QhAgWgYgOQgigVgBgaQAAgSBEAAQBhAABqA9IA/AoQAcARAIgCQgIgkgogYQg8gningpQAagmCSArQBmAfB3A3IABgRQAAgJgLgWQgMgWAAgQQABgNAPgMQANgMALAAQAdAAARA4QANAsgBAoQgBAPAKAwIAJA0QAAAcgcAdQgmAng/AAQgsAAiXg6g");
	this.shape_15.setTransform(-105.6,-16.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#72EBEB").s().p("AgFBcIgXgfQgdglgmgfQAsg9AZgQQAWgOAUAOQAXAPAfAjQAfAigHgEQgdARgcAOQgTAOgXAzg");
	this.shape_16.setTransform(-29.3,-36.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F0FF7A").s().p("Ai7EJQAUgQANglQAIgXAAgXQAAgzgjgpQgTgWgfgaIAjgGQBPAAArAzQAoAvAABKQAAAVgRAdQgaAsgxAAQgVAAgogVgABNghQAAgfArghQApggAfAAQAHAAANANQANANAHAOQgcABgjAZQgVAQgwAoQgXgRAAgJgAgrinQgggZAGgRQAGgSAJgMQAKgMARgPQAVgTAGAAQAJAAAqAoQgeANgYAeQgYAZgDAPQgGgBANAKIADADIgXgRg");
	this.shape_17.setTransform(-36.7,-22.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#8089DD").s().p("Ag9EvQAHgRAAgIQAAgggKgrQgJgogJgPQACABAQAoQgOgsgCgDIgOgRQAfgDBOgVQBPgUAOgBIACAAIgGgKQgGgIgDAAQAXgiAsgPQAWgHATgBQAVAAAWAyIAHBBQAABGhAAyQhTBAivASIAIgTgABrBUIAFgCIAAAAIgFACgAjOjQIgngiQgUgRAjgaQAGgpAlAGICABmQgbAZgYAcQgQASgFAJIhLhGg");
	this.shape_18.setTransform(-32.3,-30);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFCC99").s().p("AiLB5QgSgNAAgTQAAgYBPgZQBCgVAXAAQAbAAAQAFIAKAGQADAAAOgRIgSgKQgRgFgYAAQgGAAgdAEQgpAIgkAMQgrAOgXATIgRAPQgGAAAAgBIABgBQAMg9A9gcQAzgaBAACQgOgMgigKQhCAMgfASQgeASgPAdIAAgCQgFgHgDgWQgEgXBBguQBCgvBMACQBPABAzAvQAtApAABCQAAApgbAUQgZAUg3AGQhMAIgpAMQgjAJgIAAQgpAAgVgPg");
	this.shape_19.setTransform(-72.8,-7.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFCC99").s().p("AgnCNQgPgTgEgOQgDgPANgrQANgrAPgWQgFAFgaAkQgbAogDAIIgQgPQgDgQgCgYQgBgWAeg2IAXgVIgLAVIANgXIgKgCQgbAVgJAIQgSAUgFAXQgMgGgDgEQgJgMAAgbQAAg2A4geIA4gSQA2AAA7BKQA6BLAABFQAAAPgJAMQgJANgSAHQgFACgfADQgjAEgUAEQAFAJAIAGQAFAFANAIQgNAJgdAIQgaAAgRgVg");
	this.shape_20.setTransform(-30.7,-9.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#8089DD").s().p("AC0C4QgWgggtgiIBLgqQAQgLAKgZIgBgHQgHAKgUAMQgTALgIABIhVg0QAOgEAXgyQAXgzgBgQQAJAKApARQA/AZAUAKQBuA1AABQQAABrisBOQACgxgagpgAkZiEQgtgQgNgGQgOgIgNgbQgNgdAFgLIAPgtQB5ApAdAKIATAEQgkA7AEAtQgOgBgtgQg");
	this.shape_21.setTransform(-23.1,-37.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#72EBEB").s().p("AheAWQACgLATgrQASgqAFgIICRAyQgjBVgPAeg");
	this.shape_22.setTransform(-27.2,-47.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F0FF7A").s().p("ABiEYQAFgUAAgUQAAgxgPgiQgUgsg/hBQAwgQAFgBQAqABAnAhQA2AuAABUQAAAzgYAYQgWAVg7ANQAFgHAFgRgAAkhlIAvh4IAyASQgUAtgOAcIgbAvgAizjEQgOgHAAgKQAAgQAMgbQAMgcAOgTIA3ASIgSAuQgTAsgEARQgQgKgWgIg");
	this.shape_23.setTransform(-24.3,-28.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#72EBEB").s().p("AgnA5Qg6gYAAgSQAAgTAMgeQAOgjAQgKQAIgFAwAMIBhAaQgQAHgcA7QgcA8gEABIg9gYg");
	this.shape_24.setTransform(-26.1,-51.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFCC99").s().p("AidC8QAAg5A3hOQA/hVBRgcQgDgKgEgDIgKgCQhWAxgaAaQgzAwgwBzIgDgJIgLgLQgGgFAAgJQAAgjA0g7QA6g+B0hWIgCgJQgCgDgGAAQgYAAgyAoQhAA0hZBpIgEgDQgCgDAAgGQAAgTAlgtQAjgtA0gxQCBh7BIAAQA9AAAiApQAbAfAAAoQAABCg5AdQglAQgVAMQgmAVgcAdIhdBuQgoAwgfAAQgkAAAAgig");
	this.shape_25.setTransform(-18.9,-24.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F0FF7A").s().p("ACNDGIgVgMQAOgKAAgDIAngiQAngpAAgjQAAg2gfgdQgQgQgagWIgMgLQBEAIApAwQAlAqAAA6QAAA5grAfQgiAZgrAAQgIAAgEgCgAg5grQAIgdAQgcQAVgjASAAIAwAMIglAzIhMAmgAkIhaQgJgNACghQACggAPgSQAPgSgDAHIBBAMQgMAKgSAtQgQAogBAPIgCAAQgbAAgLgPg");
	this.shape_26.setTransform(-14.9,-41.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#8089DD").s().p("AFSDFQAQgUAMg9QAAgKgKglQgMgsgRgcQAjAcALAPQATAXAAAgQAAAsgPAbQgPAaghAOgACAhAQATgSACgEQAKAAAqAUQguAHglACgAlGhaQgagFgUgZQgVgaACgVIACgfQABgHAVgBIAPACICgAeQgVAIgHATQgHATgCARQgDAQAEALQAFAMADAFQg2gNg0gKg");
	this.shape_27.setTransform(-21.4,-44.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},4).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).to({state:[]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},2).to({state:[]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).wait(1));

	// Layer 1
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAxFUQhBgVg4gdQhcgjgrgdQgfgVgDAAQgDAAgpAuQgoAtgoAAQgbAAgUgRQgWgSgBggIAGgUIAJgaQhNAFgbgIQgjgKABgmIAfg5QgNgsAvgQQAbgKA4AAQBsgCAugDQAZgGAIAAQAYAAA7ARIA6ATQAGAAAHgMQAKgRAGgIQAagnAkABQAfgBATARQAXATgBAiQABADgMAcQgOAggHAHQAYAVBQAbQBiAiBYACIBFAAIAAglQAAgbgjiJQgiiLAAgiQAAg6AEgBQAKgEAFgPIAMgsQAIgWAAgEIgHgIQgFgJAAgBQAAgEACgDQACgFAKgGQBEA2A6C/QA2CvgBB7QAABnhDA7QhCA5huAAQiLAAiAgqg");
	this.shape_28.setTransform(-88.7,-26.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAhE9Qi8hEhxhhQgVAPgeAhQgeAagqAAQgeAAgSgSQgXgVAAglIAIgRIANgaQiGAEAAg+QAAgLASgdQARgbABgHQACgdAXgLQATgKArAAQAjAAAYAFQAiAHAcADQBDgNBbAkQBOAlACAAQASAAAcghQAcgjAWAAQAjAAAVARQAZAUAAAhQAAAUgOAYQgOAYgMAGQCgBUA+ALQA+AMBKgBIASgCIAEg0QAAgUgeiYIgfiYQAAgmAWgzQAUg0ABgEQAAgJgKgLIAQgSQApAwA3ChQBEDCAACaQAABQg3A3QhEBDiEAAQhzAAitg/g");
	this.shape_29.setTransform(-91.9,-26.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("ABfFEQhOgdi8hcQgZgMgUgFQgPgHgngxIAAABIguArQgkAZgxAAQgVAAgRgNQgagVgBgtIAXgqQhCgBgegMQgkgOAAgjIATgZQATgeACgMIAFgTQAEgOALgFQALgFAjgEIAogEQBOANBAADQAUABAqAIQAcAFAPAEQAPAEAjAaQAgAWAUAAQADAAAfggQAeggAXAAQAjAAAUARQAXATAAAlQAAAZgQARQgWAXgDAFQBWAvBhAfQBmAgBEAAQATAAAFgEQAEgFAAgbQAAgTgJhMQgCgVgYhuIgMg8IgCgcQAAgOAFgYQAGgYgBgUQAAgLAHgQIAAgBIABgDIABgBIgBgJQAIgaATgpIABgDIAQAPQAzBMAmB9QAxCfAABrQAACahOA8Qg5Ath5AAQhlAAh8gvg");
	this.shape_30.setTransform(-92.6,-25.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AhLFvQgtgPgYgcQgEgGgigaQgngfgQgFIi6g2QiUgzAAgwQAAgOAJgMQANgOAWAEQgLgGgagZQgbgaABgHQgBgUATgKQAIgEAwgOQAJgFARgQQASgPAMgDQAMgDAZAAQAZgBAFABIAYAFIA7AMQAZAFAbAHQAyAOBaAmIADgCQABgBAAgHQAAgEgEgMQgFgMABgFQAAgaAPgPQANgNAVAAQA5AAAUAvQAWBGASAyQAGASBhAyQAPAHAoALQAkAJAIAAQAmAAAtgJQAngGAUgIQgliOgYgwQhcilAAgJQAAgIAUgyIAmheQB4BhBbClQBXCcAABnQAACgisAyQgzAOhEAGIgyAEIAEAAIgIAAIAAAAIAAAAQglgBh2gLQgEAAgeAJQgcAKgMAAQgxAAgrgPg");
	this.shape_31.setTransform(-78.6,-26.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AmRFQQgsglAAglQAAgFAFgIQAFgJAAgFQgJgNgCgSQgFgjAlgtQAdgjA9gYQA4gWAYAAQAYAAA2AKIAZAFIAZgEQgYAEAEAAQAGAAAPgDIAXgGIAHgCQADgCAFAAQAqAAApAMQArAMAMAAQBjAAAfgQQAIgJgwg1Qgwg3gvgsQgvgrgzgpQg0goAEgKQAEgJAkg8QAig4AHgCQAHgBA1AoQA3AoCTB5QBqBbAjAkQA2A2AAA9QAABHgZAoQgZAohFAsQgYAPiMAoQiMAogVgCQgSgCgpgKQgKgRhFAAQgpAAg8ATQg9ATggAAQghAAgogigAh/A8IgGgBQAOADgIgCg");
	this.shape_32.setTransform(-48.9,-27.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AikFQQgPgWgNggQgEgFgEgHIgUgrQgJgSgVgcQgOgSAAgPQAAg4AxgqQAwgqAtgEQAsgDAqAfQArAAAzgQQAogNAMgHQAIgKhyg5QgvgciZhCIh0gyQhJgrAAg/QAAgIAJgZQAJgbAiAHQAjAHCCAlQCNA2AQAFQDeBIBWA9QBZA+AABaQAAAugrAqQgPAOh5BdQgJAIgLAXQgNAfgHALQgiAzhLAAQgFAAgGgEQgGgEgFAAIgpADIgVABIABALQgCAVgOAJQgLAHgXAAQg9AAgcgpg");
	this.shape_33.setTransform(-21.6,-28.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("Ah8FRQgMgBgSgTQgMgNgNgbQgBgDgRgTQgQgVgBgLQgGgjgHgMQgHgMAAgVQAAgVBDhWQBDhUAnghQh3g9hngXIg2gKQgTgDABgEIgXgvQgVguAAgcQAAgKAOgDIgWgEQAFgHAEgIQABgCAGAAQByAACMAdQCJAcB6AvQCBAyBLA5QBSA+AAA7QAABJhQAtQg9AjgzAAQgUAAgTgRQgTgQgKAAQgpAAhHBZQhUBrghAWQAAgBAAAAQAAAAAAAAQAAgBAAAAQABAAAAgBQAAgBAAAAQAAAAAAAAQgBABgBAAQgBABgBACQgGAFgLAAIgDAAIgUgBg");
	this.shape_34.setTransform(-20.3,-33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_28}]},4).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[]},1).to({state:[{t:this.shape_33}]},2).to({state:[]},1).to({state:[{t:this.shape_34}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.FIZ34RARML001 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#72EBEB").s().p("AhoAtQAAgiAPgmQASgvATAAIAoAJQAyANBDALQgNAPgFAKQgJAQAAAXQAAAIAEARQADARADAIIhBABIgcABQhjAAAAgeg");
	this.shape.setTransform(15.7,-47.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8089DD").s().p("AFfD0QgbgKADglQADglAQgNQAQgMBZAAQA8AAARADQBAALAAArQAAAUghASQgrAYhNAAIgBAAQg9AAgagKgAlGBhQiqhnhfhyQAygbAdgoQAYghAGghQA3A4BpBQQCsCACVA1QgZAXgPAeQgOAbAAAXQAAAUAHAfQhwgSimhng");
	this.shape_1.setTransform(1.4,-64.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0FF7A").s().p("AG8EXQgMgNAAgYQAAgzAngOQAYgIAYAHQgPAVgHANQgHANACAhIABAjIgOABQgXAAgMgNgACjEJQgSgIADgtQADgtAVgbQAegnA2AeQgmAdgLA+QACAhgFAKQgLAEgKAAQgLAAgJgEgAoGhoIAPAAQAfgBA3gyQA9g3AAguQAAgKgDgZQAmAhAAAgQABAXgVAeQghAzggAOQgVAKgyAAQgKAAgfgGg");
	this.shape_2.setTransform(-17.3,-68.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC99").s().p("Ag5C7QgXgNAAgSQAAgeAogsQAngsAAgNQAAgIgHgOQhOBPgqA/QgJANgGACQgDABgaAAQgbAAgIgMQgHgKgIgoQAbAIBBhGQA3g5AJgWQgBgCgIADQgbAQg5A3QgnAmgnAAQgOAAgEgUQgBgFAAgTQBCh8BkgsQBhgrARgEQASgFAiAAQBLAAA1AZQA1AZAAAkQAAArgoAcQgrAehGAAQgNAAgGgDQgIgEAAgLQAAgmAWgcQAbgjAyAAQAGAAANADIASAGIAEAAIgGgGQgOgLgmgMQgqAAgjArQggAnAAAiQAAAaAMAOQAMAOAQAAQAnAAAwgTQAlgNAPgMIgEALQgQAhgeAMQgeANgoADQgnAEgYAbQgXAbgcAzIgXAmQgMAAgRgKg");
	this.shape_3.setTransform(-81.1,-86.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#72EBEB").s().p("AhcAPQADgNAUgcQAOgYAOgSICGA6QgYAkgFAqQgvgIhtgtg");
	this.shape_4.setTransform(17.7,-60.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F0FF7A").s().p("AIHE6QgVgJgNAAQgNABAAgLQAAgKAHgRIAXg5IA0AVQghA1AFAhgADgDJQABgfAZgZQAUgUAQgBQAmAAADAOQgBgEAGAFQgXAFgPAeQgKAVgFAZQgHABgwgUgAoIg9QghgWAAgaQAAg9A1hKQA1hIArgBQAZABAUAOQAOAJAIALQgDAKgKAHIgkgQQg3AJggBKQgXA1AAAnQAAAHAHAKQAKASAUAHIgPAOIgIAFQgMAAgagQg");
	this.shape_5.setTransform(-21,-81.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8089DD").s().p("AHnEmQhsggAAgNQAAgDALgbQAMgdAIgNQCLAtAxAZQAsAXAAAXQAAALgKAKQgNAKgXABQg3gOg2gRgAqBi4QAThOAcgmQASgYANABQAEAAAXAPQA6AoBDAsQAhAVCIBIQB0A9AcANQCJBDBBAbQg9A5gEARIACAMQg8gbpukYg");
	this.shape_6.setTransform(-4.6,-74.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC99").s().p("ABzCqQgngKg+AAQgUABgtAIQgtAJhNAAQgVAAgNgJQgMgHAAgLQAAgzCzgLIAAgBQgFgPgNgHQgTgKgoAAIhjABQgZgDAAgdQAAgYArgKQAfgJAuAAIB/ARIACABQgFAUgJAdIgKAYQAAAHABABIABgBIADgBQASgXAQgdQARgcAAgKIgBgQIgQAKIgJAEQgNAAiEggQAKgEAngIIAmgIQBrAABJAaQA0AYAIgCQgBgBABgFQgNgFgNgRQgUgaAAghQAAgrATgSQAMgNATgBQAZABAKATQAHARAAAmQAABsgUAbQgqA5gdBbQgJAAgbgJg");
	this.shape_7.setTransform(-93.3,-113.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#72EBEB").s().p("AAfA9QgfgLhcgkQAGgHAUgiQATgjAIgHICEA8IgPAWIgFALIgHAfQgEAPgDAAQgLgDgRgGg");
	this.shape_8.setTransform(18.1,-60.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F0FF7A").s().p("AHYEwQgFgEAAgHQAAgDALgbQANgfAIgKIA0AWQgiA6AAAQQAAAHACADIABABQglgPgLgKgAEBDeQgTgHgRgIQAOgqAQgSQARgSAZAAIAPAGIAXALIgLABQgKAFgQAkIgSAoQgDAAgQgGgAoHhFQgfgXAAgeQAAhKA8hGQA1g+AlAAQAQAAAaARQAXAPAEAIIgCALIgCAEQgCACgGAAIgjgPQgWAAglAiQg4AyAABYQAAAJAIAJQAGAHAXASIgWAQQgEADgCAAQgLAAgYgRg");
	this.shape_9.setTransform(-20.3,-83.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8089DD").s().p("AHhEwIhqgwQAHgUAAgFIAdg0QA2AZCLA3QAWAJAGAGQAFAGAAANQAAATgEAIQgIAQgXAAQgtAAhMgggAk1gkQhtgyjahvQALhLAegfQAdgfALgBQAKAAAjAbQA1AnAZAPQCRBYBSAwQC1BnB9A3QgdATgQAUQgSAYABAUQi8hYighHg");
	this.shape_10.setTransform(-4.1,-75.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFCC99").s().p("ABqClQgkgMhYAAQiLAAgOgBQhAgFAAgbQAAgSAngTQAqgUAyAAQAFAAATAFQAUAEAFAAQAGAAgBgCIgBgFQgPgMgugKQgogKgSAAQgyAAgMgDQgQgFAAgWQAAgXASgJQAXgMBBAAQBgAAA1AeIgFgCIAAABIAFACIgiBFIADAHQAvg2AKgYQAFgNgCgLQgWALgDAAQgEAAgxgRQg7gTgfgIIAygJQAPgEAIAAQAuAABaAeQBeAfAWABQgpgnAAgmQAAghARgYQARgWAUAAQAqAAABAxQgGA+AAAYQABAXgLASQgEAGgYAbQgxA5gWBXQgJAAgTgMg");
	this.shape_11.setTransform(-90.4,-116.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#72EBEB").s().p("AAfA9Ih7guQADgGAKgnQAOgmAYAAICGA6QgNAKgIAcQgIAggDAJIgegIg");
	this.shape_12.setTransform(17.8,-60.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F0FF7A").s().p("AHdEvIgEgJQgBgEAAgGQAAgQAIgPIAVgmIA0AVIgXAfQgKAOAAATQAAAGACAIIACAHgAEDDZQgVgHgQgHQAIgLAJgeQAlgqAPADIATACIAWAQQgdAGgKASQgJANgGAtIgTgGgAoHg6QghgUAAgiQAAgjAghIQAthlBEAAQAZAAAVAJQAWAKAEAQQgDAIgJALQgLgLgEgCQgGgCgOAAQgyAAggA3QgfAzAABDQAAAMAIAMQAKAPASAEIgPAOQgFAGgEAAQgOAAgWgNg");
	this.shape_13.setTransform(-20.8,-81.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#8089DD").s().p("AIuFCIgxgTIhjglQgggNAAgDQAAgJAQgeQARghABgEQA6AbBkAlQBHAfAAAcQAAAIgNAKQgOAMgQABQgaAAgOgGgAqAi8QAShNAdgmQATgYANABIBlBBQBNAyBaArQBbArBcAyQBdAxAuAWQAwAUAdARQgfAYgIAJQgMALgPAuQjOhUnajjg");
	this.shape_14.setTransform(-4.5,-74.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCC99").s().p("ACLCzIiLgWIhGAGQhDAGgfAAQgcAAgNgGQgOgGAAgQQAAgaA0gPQAtgNBTgDQADgXgegHQgSgDg0AAQgyAAgVgEQgggIAAgYQAAgXAsgKQAjgIBFAAQAdAAAZAIQAhALAOADQgBAEgJAeIgPAnIADAHIAkg4QARgXACgRQAEgGgJAEQgPAFgEAAQgGAAgWgIQgmgMhQgQQgLgJApgGQAogHAmACQAjACBIAbQBIAbAngBIgBgBIABgDIgYgZQgUgZAAgYQAAgoAMgUQAMgWAXAAQAuAAAAA5QAAArgFAmQgFAtgKAOQgRAVgRAbQggA2gMA5IAAABIgHAAg");
	this.shape_15.setTransform(-92.5,-114);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#72EBEB").s().p("AAgA8QgcgJhggkQALgnAFgHQAFgHAegeICGA6QgFAHgNAhIgOAnIgdgJg");
	this.shape_16.setTransform(17.7,-60.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F0FF7A").s().p("AHfEsIgFgJQgBgEAAgGQAAgRAIgOIAVgnIA0AWQgLAIgJAKQgHAKgDAVQgDAVACAIIACAHgADfDJQAIghAQgXQARgWATABQAUABAEgBIAaAPQgWAHgPAgQgPAigEAJQgQgEgmgQgAoQg9QgZgUAAgeQAAgxArhHQAyhWA9AAQAkAAAQASQAKAKAAAKIgBAKIgKADQgFgCgDgHQgHgGgUAAQgeAAgnAwQgtA4AABGQAAAMAIANQAKATAVgBQgLANgHAEQgEACgHAAQgVAAgUgQg");
	this.shape_17.setTransform(-20.9,-81.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#8089DD").s().p("AF8D+QAHgjAHgMQAOgYAEgMQAQAIBvAmQBmAqABAkQAAAHgNAKQgOAMgQAAQgVAAjGhGgAnLhjQhwg0hGgjQAFg5AbgnQAbgoANgBQANgBBIAtQB5BMBTAxIF9C/QgSAFgRAYQgSAYgIAgQkTh1jghog");
	this.shape_18.setTransform(-4.6,-74.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFCC99").s().p("ABECqQgtgLgVAAQgGAAgQAIQgiAIhkAAQghAAgOgFQgUgGAAgRQAAgUAxgWQA7gaBHAJIAAgCQgJgkg4AEQiGAMAAghQAAgUASgNQAdgUBDAAIBWAGIgPgBQAaAKAVADQALACAEgBQgWBCgCAIIADAHIADgCQAQgXARgdQASgdAAgJIgBgPQgCAEgUAKIiTgjIAEgBQgFgEAVgGQAVgHAqgEQApgEBaAbQBcAbAJADQAJAEABgCIABgGIgXgVQgWgZAAgfQAAgqAOgWQANgTATACQATACANAUQAOAWAAAhIgCA2QgCAwgDANQgDAOgXAcQgYAfgEAMIgZBAQgJASgGAAQgcAAgtgKg");
	this.shape_19.setTransform(-92.9,-113.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F0FF7A").s().p("AHKDWQgRgFgHgTQgHgUAVg4IAtAHIgHAxQgBAUACAXIgRAEgADXC9QgFhDAHgcIAMgVQgCAAABgGIAGABIAAAAIAAAAIBFASQgIgBgIAZQgJAYABARQACARADALIAGATQg+gJgNAAgAngABQgMgTAAguQAAhGA8grQA0gnBHAAQAkAAAPAMQANALAFAbQhpgBg2BEQgbAjgFAkQAAAMAPAlIgWACQgdAAgNgWg");
	this.shape_20.setTransform(-7.8,-64.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#8089DD").s().p("AFoC2IAAhdIC4AFQAVAxgcAngAhyBzQiDgag4gWQg8gWhRglQhugxAAgOQAAgpA5gsQA0gpAmAAQAUAAAbASQAlAbAtASQAtATAoATQAoAUAWAJICEA0QA1AVAOADQgXAhACAkQAGAlAAAPQhNgMhcgTg");
	this.shape_21.setTransform(6.5,-60.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFCC99").s().p("AgKCkQhggogYgTQg4grhjhAQg/grAAgHQAAgTAQgJQAMgHARAAQAcAABTBGQBOBEACAAQAHAAABgDQABgBgBgFQAAgZhjhTQg9gzgjgNQgKgDgBgCQgBgCAAgQQAAgaAbAAQAcAABdA5QB4BMAkAQQglglgvglIiLhrIAIgDQALgHAIAAQA1AACoCAQBbBEAaASQA5AkATgDQgDgeg2gbQgcgOgkgNQgPgNAFgXQAEgXASAAQAfAAAxAfQBIAtBfBjQhNgWhJBJQgcAcgQAhQgQAgAFAUQg+gThcgng");
	this.shape_22.setTransform(-74,-93.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#72EBEB").s().p("AggAyQgfgKAHgLQgVgnAfguQBYARAXABQgIATgGATQgEANAAAGQAAAJAEAQQADAKACABIgjACQgfAAgWgHg");
	this.shape_23.setTransform(28.5,-49.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#8089DD").s().p("AiQDDQhNgZgvghQAbgCAhgeQAxgtgGhHQAzAiA9ARQAiAJA1AKQApAKARAWQAVAcAABCQgFAJgUAJQgnARhDABQgxAAhNgagAD0h9QgVgQgGgCIAYgtQAJgVAAgLIAFAHQAHAOADAMQAEARAAAaIgBApQgFgGgTgQg");
	this.shape_24.setTransform(29.5,-26.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#72EBEB").s().p("AAWA2QgFgHgcgUQgfgXgMgDIABAAIAVgcQAQgYAEgKIAtAdQAWAPAAAJQAAAIgOAeIgQAgg");
	this.shape_25.setTransform(47.6,-26.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F0FF7A").s().p("ADHCTQAShJhTgtQAOgHAXgQIATgMQANAAAWAQQATAQAIAMIANARQAHAJgBADQAAAahLBCgAlRA/IALADIAIABQAyASAygwQA0gvAAhOQAAgXgWgvQAwAhAFAFQAWAbAABCQAAA5goAlQglAhgzAAQgJAAhXglgAD8heIAegzQAWALASARQALAKAEAHIgSA3QghgegigTg");
	this.shape_26.setTransform(22,-24.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFCC99").s().p("AirCgQgZgLAAgcQAAgYARgJQALgHAegCQBTgIAjgXIgBgEQgEgEgKgDQgJgEgEAAQgJAAgtAKQgtAKgZAAQgdAAgOgDQgmgIAAgcQAAgSAOgPQAYgbA4AAQAcAAAQAMQAPALAgAAQALAAAFgGQhNgkgGgEQgXgQAAgjQAAguA8ABQA+ABBHA6IgSAdQgEAGgEAjQgEAiA+ASQBaAOA2AQIADgDQgPgbgWgKQgUgHgxgCQgxgDgSgUQgKgMAAgWQAAgJAOgLQAVgPAoAAQBJAAAmArQAlAqAABLQAAAkghAeQgmAig6AAQgmAAglgHQgngHgMgKIAFgCQAGgEAAgGQAAgGgDgDIgDgDIgKgBQgFAAgyAZQgzAZgdAAQgQAAgOgGg");
	this.shape_27.setTransform(-22.9,-37.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFCC99").s().p("Ah2CfQgogUgBguQABgFACgHIAEgMQBAAzAtAEQARACABABQAFACgBAQQABAKgHAHQgJAJgVABQgkAAgZgNgAgFCZIABgOQAAgNgIgQQAJgEARgNQAPAAAaALQAnAAAbgbQAYgXAAgdQABgKgIgJIgGgFQgGAZgPATQgXAggjAAQgOAAgMgIQgRgMAAgaQAAgpAagbQAcgdAyAAQAVABANAhQAMAcAAAlQAAAwglAmQgkAlg6AAQgRAAgRgDgAhzBEQgXgTgKgdQgJgcAJgUQALgXAfABQBlBPAAAgQAAAFgMAKQgQAPgYAAQgfAAgbgXgAhOg7QgPgYAAgOQAAgkAXgUQATgRAdgBQATAAAmAoQAjAhAKATQglAXgQAOQgcAYgIAXQgvgdgWgjg");
	this.shape_28.setTransform(17.5,-8.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F0FF7A").s().p("AjlDtIgYgOQA/AXBEg5QBBg4AAhBQAAgKgIgYIAKAIQA3BIglBEQgmBEhhAAQgeAAgbgNgACRgHQgTgLAEgWIANABIBngLIAIAeQgRAMgfAHIgeABQgRABgOgIgABJjpQAFABAhgJQAhgIAKAAQAiAAAEAkIhsAXQgLglAAgGg");
	this.shape_29.setTransform(42.5,-12.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#8089DD").s().p("AhiDHQAAgKgHgeQB0gBAygMQAkgJAJgTIgBgDQAEgBgKAAQgGAAgXAGIgWAGQAAgMgEgUQAoAKAcgJQAQgEAggNQAIBDAAASQAABRhPAmQhQAmiwACQBFhDAAg4gAg3kfIAAgiQArgBAaAoQArA1APAwQgMgFgeAEQghAGgZAPQgdhYACgmg");
	this.shape_30.setTransform(52.3,-20.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#72EBEB").s().p("AhKgwIArgNQAogLAKADIAXgBQALAhAKArIAMAzIhwAOQgCgUgjhjg");
	this.shape_31.setTransform(59,-25.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#72EBEB").s().p("AgRA8IgkACQABg5gEhRQAfgHAFAAQA1AAALAuQAEBGAJAzQgYgYgyAAg");
	this.shape_32.setTransform(54.5,-28);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#8089DD").s().p("AiAEPIg5gdQAPAAAJgQQAIgRgCgWQAUAJAQgQQAOgQAAgYIgLg1QANAFA5AMQA3AMALAAIAdgHQAdgIAKAAQAJAAArAVQAuAVAAAJQAAArgnAqQgzA3hZAAQhNAAg6gVgAB8jEQgWgJgOAAQgGAAgHACIgHABIgGgtIgDgXQAAgKALgHQANgIAPAGQArAPAeBpQgYgRgXgKg");
	this.shape_33.setTransform(40.8,-25.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFCC99").s().p("AARCTQhNhQgRgPQgXgSgagIQgOgEgYgEQgigJAAg1QABhgA9giQA1geBTAUQBLARA+AsQA9AtAAAnQAAASgFAbQhLhLg5glQg8glgwgBQgGAFgCAEIgBAFQCDAuA+BLQAsA1AAA3QAAAHgEAFQgDAEgPAMQgBggg/g9QhOhJhkgkQBRA5AvAlQBdBKABA4QAAARgMANQgNAOgWAAQgdAAgugug");
	this.shape_34.setTransform(8.9,-21.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F0FF7A").s().p("AkYCjQgXgIgqg6IBIATQAbANAhAtQgigJghgCgAELBsQgYgLgTgBIgBgTQAAgCAEgFQAEgHAIAAQApAAAfAPQAjAQAAAcQAAAGgCAGIgFAJQg6gdgOgGgAElhnQgagLgLAAQgLAAgSAHIgGg+IAegFIAnANQAlAQAAAZIgDAfIgfgOg");
	this.shape_35.setTransform(26,-26.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},1).to({state:[]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},4).wait(1));

	// Layer 4
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AGoFmIgCAAQjQADjUh2Qhgg4hphUQgZgUhAg9Qg6gygLABQgMABgYgEQgXgEgKgHQgKgIgcAAQgWAAgOAWQgGAKgNAjQgYBFgvAAQgTAAgVgRQgagWACgaQgJARgeAJQgQAEgPABQgoABgRgVQgLgOgJglQgDgPgRgaQgQgVAAgLQAAhdB+haQB/hbCFAAQBBAAA8AoQApAcBBBHQBXBeAiAfQBQBLBYAuQFDCwEUAFICDACQAnAGAAAvQAABCgjAWQgiAVhuABIjrgIg");
	this.shape_36.setTransform(-26,-73.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AJiGVQjOhLi9hQQkSh1izhYQhzg2gCAAQgHAAgTARQgUASgNAAQgiAAgYgoIgZgqIgjgNQgjgNgaAAQgaAAg9AMQhGAMgwAAQgvAAgWgPQgVgQgBghQAAgOAGgNQAGgOAKgDIAGgIQgWgBgOgTQgNgSAAgYQABgnAjgLIAcgIQAQgFAcgXQAcgYAUgDIA6gIIAhgFIBBAMQBHANANABQgIgfAAgMQAAgkAVgaQAZgeAuAAQAqAAAKAkQALAmgIB8IAXgLIAUgJQAzAAAaAaQAQAQABAPQgBAFgEAFQgLALgIAMQBhA9A6AhQCzBjGEC4QDBBdA0ARQCjA6AUALQAQAKAEALQACAHAAAXQABAngYAQQgWANgvAAQgWAAi6hDg");
	this.shape_37.setTransform(-29,-86.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("ALEHJIjChMQieg8kOh4Qg0gXmHjFQgRAAgMASQgMAQgMAAQgUAAgggUQgogeADgnIg7gSQg5gSgYAAIgrAGQgyAGgkAAQhHAAgcgVQgTgQAAgeIAKgVQANgWAJgNQgQgEgNgOQgQgRAAgXQAAgsAkgLIAfgGQARgDAIgHIAcgcQAdgUA2AAQAYAABCARQBbAXASADIABAAQgGgUAAgUQAAgsAigaQAagTAZAAQBHAAAABEIgHA9IgIBCQAcgNAFAAQAiAAAcASQAdATAAAaQABAMgLAIIgNAIQApAeDGBzQDzCLC2BWQCDA+B+A1ICXA/QA1AYASAPQARAPAAAZQAAAogdARQgWAMgqAAQgYAAhLgcg");
	this.shape_38.setTransform(-27.9,-87.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AH4FyQjdhYj1hrQhagpikhRQiFhBgKAAQgKAAACAMQADANgdAFQgcAFgNgHQgOgHgRgJQgQgMgGgWQgFgWgCgCQgCgDgIAAQgWAAgvgOIgtgPIhPAKQhRAKgPAAQgtAAgWgNQgbgRAAglQAAgDAMgUQAMgWAFgHQgZAAgMgUQgLgQAAgaQAAgWAggSQAQgKAYgKQAWgVATgOQAmgcAsAAQAyAABQAQIBJAQQgHghAAgKQAAgqAcgZQAYgXAjAAQAmAAASAaQAKAQAAAUQAAAhgIBnQAegSAKAAQArAAAbAWQAXASAAATQAAASgXAMQC1BvCkBSQDxBxDmB0QBmAzBaAlQAxAUA5AWQAjAOAJANQAJAMAAAiQAAAfgXANQgVANgxAAQgrAAkLhqg");
	this.shape_39.setTransform(-28.7,-86.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("ALMG+Qg6gUh3guQikg/ishNIkQh7QhmguhVgpQhVgngOAAQgFAAgQANIgRAQQgLAGgIAAQgOAAgYgUQgfgYgMgpIgHABQgFAAgsgOQgxgNgdAAIgvALQgtALg9AAQg+AAgYgSQgVgPAAggQAAgLAHgNQAGgNAJgIIAHgHQgWAAgOgUQgMgSAAgYQAAgbAXgNQAfgMASgKIA4goQAigYAtAAQAqAABHAOIBRAQIgHgXIgGgUQAAgmAYgaQAZgbAlAAQAmAAAOAaQAZAsgRCAIAogSQA2AAAZAeIAPAfQAAACgFAIQgHAKgLAIQDyCOBPAqQBSAoEsCNQEsCMCBAvIAfAlQAEAGABAaQABAagRANQgVAQgyAAQgZAAhPgbg");
	this.shape_40.setTransform(-29,-86.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AFhFkQgugHg/gQQhQgTgugJIi5g7QiOhEgGgGIgTAHQgZAIgiABQgiACgSgoQgSgpgdgKIhSgdQg0gUhTgyQhSgyhbg7Qhag7AAgdQAAgRAQgSQATgXACgHQADgIgCgbQgCgbAUgQQAUgPAVgBQAUAAAGgCQAHgCAPgRQAJgLAeAAQAvAABiA8QBiA8ACAAQAOAAATgHQATgIAFAAQAMAAA4AaQBAAfAqAgQATAUAaAgQAaAfAXAPIAjATQALAHASAjQASAiANAHQANAJBAAfQBDAgBMAnQBNAnDRA2QDQA3C2gHQgjAdgBAhQAABEgCABQlcgMiGgVg");
	this.shape_41.setTransform(-24.2,-79);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AA4DiQgagMgsgYQgngSgdgGQgIgChVgwQhQgugmAAIgkATQgsAUgogHQgogHgPgMQgQgNACguIAHgcIgRACQgSAAgRgSQgTgVAAgfQAAgXAVgYQAfglA5ABQgJgqAAgLQAAgcAQgQQAUgVAoABQAgAAA6AZQBJAeBDAOQARAEBBAhQA2AcAoAZQAQAKAQAbQAQAZAJAdQAsAWA1AcQAlATAxgBQA8AAA1hRQAggzBMiYIAdAXQAIAIAGAaQAHAdAAAfQAADDh0BwQhaBXhfABQhfgBhfgvg");
	this.shape_42.setTransform(3.8,-29);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AijFVQgQgFgZgQQgGgEgbgEQgggDgJgDQgngLgUgbQgVgbAAgpIAQgwQAAgEgFgTQgFgTAAgFQAAgeAcgQQAfgTABgDIAGggQAHgeAIgNQAGgLARgJQASgLARABQAngBAeAWQAYARAeAnQAKAOAoAQQAYAMAgAqQAnAlBFAAIBGgCIAAgMQAAgVgYhRIgvicQg5jQA4AAQAfAAAfAbQAsAmAlBYQA+CXASBDQAOA2AABBQAABYgbAfQgZAchfAgQgyAQhrAJQhPAGhEAAQgsAAgbgJg");
	this.shape_43.setTransform(35.3,-20.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAXEkQgtgQhsg8QgGgDgGgKQgHgLgEgEQgVgShFAAQg7AAgohAQgjg2AAg0QAAhJAqgyQAxg6BWAAQBFAABXA1QBkA+AHBNQAGBJB4AAIAggBIAFhOQAAgvgJhqQgKhrAAgOQAAgcATgJQAKgFAWAAQBCAAAfCdQAXBuAACNQAABrhFA5Qg8AzhhAAQhJAAg4gUg");
	this.shape_44.setTransform(24.5,-24.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_36}]},3).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[]},1).to({state:[{t:this.shape_44}]},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.FIZ34RAPRONBK001 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAOBUIAAAAIAAAAIABgCIAPgtQAMggAOgaIAAgBIgBgBIgBAAQgYAIgQAkIAAABIgIAWIgHAaIgEAOIg6AAQANgmAMghQAMghAKgTIAAAAIAYguQANAEAnAXQAEAJAAAOQAAAYgLAlIgMAnIAAABIAAABQgMATgKAAQgDAAgCgCg");
	this.shape.setTransform(67.4,10.5);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAQBeIAAgBIhjAAQAahLAag3QAag6AIABIALABQAQACAYAMQAZAMACAPIAAABIgCACQADAKABAXQACAUgIAZQgJAYgKAPQgFAIgDACQgBAAAAAAQgBAAAAABQgBAAAAgBQAAAAgBAAIgCgCQgNATgJAAQgDAAgDgBgAATBXIgBAEIAPgsIgOAog");
	this.shape_1.setTransform(67.1,9.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(58.7,0,16.8,19.2);


(lib.FIZ34RAPRON001 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6C7C9").s().p("AgwMNQgHgdgIgxQgJg+gOitQgOi2AAhHQAAhTAclzQALiJAmixQAjixA4hRQAWAKAEAIQACAFAFAaQhLAigoFZQgrFYAADLQAAEXAgDNQAQBoAQA2QgYAGgQAAQgGAAgJgfg");
	this.shape.setTransform(63.7,84.4);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8089DD").s().p("AgJCXQg0gCgXgEIgCgaQAuASA3ADQAsADAcgHIgBASIhfgDgAgNhlQgFgGAAgRQAAgNAIgJQAIgHAKAAQAeAAAAAdQABAegjAAQgMAAgFgHg");
	this.shape_1.setTransform(31.7,84.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF7C66").s().p("AgmEFQgbgCgEgFQAFgKAOggQAJgSADAAIBOAGQAAADAOA/IhcgFgAB2DDQgNgLAAgGQAEhQgBgWQAPAMAQArQASAvAAAoIgEAUQgFAUgDAHQgKgxgRgVgAicDJQAAgbAWgtIAjhCQgBBBgCAPQgBAOgLAKQgcAdgNAfgAg4BzQgegGAAgEQAAhMAYhzQAbh8AWAAQAhAAALADQANACAEALQAHAQATBXQAEALANDTQhjgGgwgKgAgRiKQgKAOgDARQgGAuAyAAQANAAAMgLQAQgNgBgWQABgtgyAAQgLAAgLAOgAgEjjIAEgIQAFgKANgUIABACIAQAlIgFAAIgigBg");
	this.shape_2.setTransform(31.5,83.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(40,42,51,0.263)").s().p("AAEgPIABAAIADABQADAMgJAIIgKAKg");
	this.shape_3.setTransform(72.5,10);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgwMzQhcgFgXgCQgYgDgzgKQhEgNgsgTQAphfAQi9QARkGARi5QACgQAMhRQAOhZAIhfIAwjqQAWh9AQhEIAahaIAIgYQAAgBAoAGQgjB5gMAyQgYBmAABCQAAAPBEAQQBCAQAzAAQAxAAAmgHQAZgEAGgLQAtjMAUg3QA6itAcAjIAfA3IgEgBQABAAAAAAQABAAAAAAQAAAAgBAAQgBgBgBAAQhPA0gqGRQgdEOAADLQAAEXAfDNQAQBnASA3QgJABhpAFQhbAEAiABQgiADgpAAQgcAAgjgCgAA7DfQANAjgBAVIAIgGQALgLAJgZQAHgXAAgOQAAg0glhHQgnhJgEhbQgBgdgZhSQgchSgQgUQgwA5ghBpQgYBKgKBDQgEAdgoA8QgmA4AAAzIADAZQAFAZAMAEQAdhWAbgHQgCANANADQAIADAaADIgmBCQAAALAWAIQAfAKA/AAQAfAAALgEQAKgDAAgKQAAgDgFgLQgFgSgKgmIAEgBIAUgDIAQgBQAPAAAOAmg");
	this.shape_4.setTransform(38.2,84.4);

	// apron
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ai0NAQhXgMhsgjQA0hmATjQQATkbARi/QANiOA1kSQAqjWAXhYQAEgVAMgkQANgjAKABIAhAEQAXADACADIAFAKQADAHgeBjQghBqgDAUQgEAagDAiIgCAmQAAAeBdAIQAtAEAwgCQAvAAAUgLIAGgEQABgMARg6QAjh5ArhtQArhuAHAAQAZAAAaASQAWAQAFAPQgCgBgFgBIgLgBQgBAvgCAGQABACgHADQgTAKgkCQQhDEVgBH4QAADJAYC0QAWCzAhBBQg/AXjeAAQh6AAhOgMg");
	this.shape_5.setTransform(37.6,84.4);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,75.2,168.9);


(lib.FIZ34LTORSO002 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F2F32").s().p("AhiEcQgJgIAAgKQAAgKAVhSQAdhuAci9QAHguAKgxQALgxABgCQAagPAogDIApgEQAICIgeCSQglCxhQBsIASAAIABAAQgFAEgTAHQgWAJgMAAQgRAAgKgKg");
	this.shape.setTransform(34.6,51.7);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#72EBEB").s().p("AjIBiQgdgLACgaIgDgEQA8AIASAAQAxANB4g1QCBg3A+hJQAPAHAHAYQAABDicA5QiIA0hlAAQgTAAgSgGg");
	this.shape_1.setTransform(-22.7,-92);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#363636").s().p("AgNFLQg/gJh9gHIhKgQQgmgKgGgNQgRgpgIhMQgHhYgFgoQgMhdAAiHIAEiGIAAAOIFDAUQA7AEAyAAQBoAABJgJIB7gOIABA0QAABtgVB2QglDGhUBaIARAAQhPAihGAXQhLAYgeAAIgDgBg");
	this.shape_2.setTransform(8.5,54);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8089DD").s().p("AhVI+IiHgMQARishAlEQhElVheiTQBNADBPgIIAVAzQg2AEgcALQgWAIAAAKQAAAtAVAYQAQARATAAQAjAAAUgFIAagHQAOAyACAJIhHAZQgOAFAAAFQAAAnAIAUQAKAbAZAAIAngDIAtgFQAAALAVCEIAqEPIAGgOQACgEACgOIABgVQAAhggWhpQgNg7gahnQBBgKAGgCQAXgKAAglQAAglgKgQQgHgOgYgMIhaAWIgIgYIgNgjQAlgEAegOQAggPAAgRIgKgpQgNgpgSAAQgMAAgRAHQgcALggAIIgJgfIgJgUQB9glA8gkQAsgbAngzQBjCBBoDRQBYCwAZBZQAxCZAYB1QAcCIAABxIAAAqIkfABQhtAAh3gJg");
	this.shape_3.setTransform(0.6,-37.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F0FF7A").s().p("Ag1CDIgEg1IBbgUIBRgWQALAqgCAPQgCAQgRAEQhFADhIAPgAh3g1IgEggQAlgHA7gOQBGgRAIgHIAYA4QglAQg1ANQg3ANgcAAQgPAAgGgVg");
	this.shape_4.setTransform(-19.9,-62.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AggAFQgwgMgNgLQB7AHBAAJQgLAVgmAAQgdAAgwgOg");
	this.shape_5.setTransform(-2.2,87.5);

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhsO2QhDggg4AAQgNAAgPAIQgMhIgPg9QgOg5gDgbQgOhZAAlpIAyAFQADgqAAgtQAAjchBkZQhEkkhki1IBwAEQByAACJhdIBWhBQAngdAJgBQAMABAdA3IA3BmQAZApALAUQAYAuBKCBQA0BcAmBiQAeBQAwCgQAsCUAXB/IAIBRQAJBFALAAQAGAAgCAYIgDAeQAABogJBYQgKBkgVA7QgrB6gdAuQgWAhgeAKQgxAPj+BSQhEABhDggg");
	this.shape_6.setTransform(0,-8.6);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-49.8,-106.8,99.7,196.4);


(lib.FIZ34LTIE001 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DADEE0").s().p("AidAbQiCgSgJgIIgBgmQDRASBmALQAnAFAdAAIAugCQAogCAOAAQAOAAAogJQAngJAKAAQAKAAACAFIAAANQABAtjeAAQixAAg4gLg");
	this.shape.setTransform(0.3,0.7);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiJAzQgugDgugLQhSgTgCgBQgEgDABgIQACgMgBgKIgBgdIAAgJQAAgBAHAAQAUAACmAQQCjAQA9ACQA8ABAkgEIBLgKQAngGADAEQADAFAAAQQAAArgqANQgvAPijAAQiKAAhAgFg");
	this.shape_1.setTransform(0.1,0.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-31.6,-5.2,63.6,11.4);


(lib.FIZ34LCOLLARFR01 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0FF7A").s().p("AgVBxIACgbQAAg6gPgvQgVhFgvgbQAOACAJAAQCYAAAegUQhnDjgPAgIgGAIQgCgBACgUg");
	this.shape.setTransform(16.4,18.4);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AguB0IAHhHQAAhIgggnIhThgIBvAIQBOgBA4gQQAjgKAdgTQgiBQgpBpQgpBXhgCBQADgNAIhIg");
	this.shape_1.setTransform(15.6,20.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,31.2,40.3);


(lib.FIZ34LCOLLARBK01 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B5C15D").s().p("AhNARQgUgdADgfQBlgEAuALQAqAJAAAXQgDAMgUAMQgoAZhPAAQgNAAgRgcg");
	this.shape.setTransform(68.9,7.5);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0FF7A").s().p("AgpDHQgsg5gcgeQg3g8gvgcQgQgKiEg/QBGgiBZgvQBDgiA+gQQBdgZBngTQBYgQAYAAQCEAAAAApQAAAXg4APQg7ARhkAAQglAAgigEQBCAxAaA4QAYAwAABLQAAA/gZAoQgmA6hXAAQgvAAgngqgADRgOQgZhjgtgIQAlADBSgIQBLgHANgGQhnDjgSAgIgFAIQAMg4gXhWg");
	this.shape_1.setTransform(42,27);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgaDlQgQgNhHhMQiFiMiegoQCahmC1g/QCug9CBAAQBeAAApAXQAkAUAAApQAAAkg0BmQgcA1gzBbQgqBPgtAoQg3AwhGAAQgsAAgsgmg");
	this.shape_2.setTransform(40.5,26.7);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,81,53.5);


(lib.FIZ34LBOW001 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DADEE0").s().p("AgkB1QgtgUAAgQIgBgEIgFABIgBgHQAAgGACgCIACgBQALAPAiANQAcAKAJAAQAXAAAJgEQAMgGAAgOQAAgNgOgJQgJgHgsgWIANgBQAsgFAhAhQAYAZAAAPQAAAQgRANQgTAPgaAAQgXAAgogTgAhUBLQgGACAIAAQAAgBAAAAQAAAAAAAAQgBgBAAAAQAAAAgBAAIAAAAgAgEgoQASgMAUghIgBgIQgEgCgKAAQgRAAggAQQghAQgPAOIgKAIIAHgQIAGgOQAggXAlgUQBEgnAAAiQAAAtghAgQggAfg/ALIgSACQArgWAlgUg");
	this.shape.setTransform(11.4,15.1);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag/B1QgfgcAAgQQAAgLAIgOQAOALAbAMQAaAKALAAQAHAAAIgDQAJgCABgCQhegsgRgDIAAgkIBMgtQANgJAPgSIgFABQgLAFgbANQgmATgXARQgCgsAtgpQArgoAuAAQAMAAAJAGQAOAIAAAUQAAAlgaAcQgQASg5AmIANACQAvAEAhAeQAcAbAAAZQAAAWgMAPQgRAXglAAQg0AAgogjg");
	this.shape_1.setTransform(12.1,15.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.5,0,19.2,30.5);


(lib.FIZ34LAPRON002 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6C7C9").s().p("AhSIfQgRjMAAh8QAAhSARjkQAPjNAEgWQAPhoAXhlQArjHA5hVQAZAJgBAMIgBAdIgPgBQgPAAguCWQgtCWgNC7QgJCUgGCNQgEBqAAAsQAAEIAfDSQATB9ANArQgaAGgKAAQgfAAgXkNg");
	this.shape.setTransform(63.5,84.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C6C7C9").s().p("AB+NLQAFgsgDhUQgBgbgJhkQgIhgAAgaQAAgygZi0QgTiDgMhJIgbiXIgVhbQgOhGhWj5QhNjaAAgqQAAgZAOgQQAGgGASgLIABgBIAAABIgUAdQgMARAHAAQgGAABODJQBPDJBFEbQBGEZAUDqQATDpAABeIgDA4IgEBDQgDgCgkgEgAihsZIABgBQgBgFgEgKIAEAQg");
	this.shape_1.setTransform(83.8,80.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8089DD").s().p("AAFCbQg2gDgigJIgEgfQAkAFAlAIQAkAIA/AAQAAABAAAAQAAAAABAAQAAAAABAAQAAAAABAAIgBAUQgNACgWAAIgvgBgAgQh+QABgdAYAAQATAAAGAKQAEAHAAAOQAAAcgiAAQgXAAADgeg");
	this.shape_2.setTransform(31.6,85.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF7C66").s().p("AhAEAQAAgDgFgCIAPgfQANgdADAAIAkADQAeADAMAAQACAgAMAoIh2gNgACTD/QgBgggTgVQgTgVgCADQgBABAAgKQADhNAAgYIAFAAQANAMAQAqQAPAsAAAoIgFAWIgFAVIAAAAgAicDHQAAgVALgaQALgfAjg9IgCBDQAAAFABAEQABADABAFIgVAaQgXAbgGAMIgHAQgABUCAQiqgQAAgKQAAhAANhJQAUhxAohAIAUADIAfACQAOASARBAQAHAhACAaIANDDgAgXiCQgIARAAAMQAAATALAJQALAJAXAAQAUAAAMgUQAIgOAAgLQABgugyAAQgRAAgLAZgAgEjlIAGgOQAIgNAIgMQACACAFAOIAJAXIgDABg");
	this.shape_3.setTransform(31.5,83.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(40,42,51,0.263)").s().p("AAFgPIAEABQgBASgHAIQgBACgIACg");
	this.shape_4.setTransform(72.4,10);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AjMMpQhGgKhMgcQA0i4AFhcQAXlaALhuQAKhpAii/IAeipQAqjlAPg1QAOgiAOgmIANgCIATgBQAFAGgDAFQgkBwgUB0QgMBMAAAeQAAABAvATQATAJA3AHQA1AHA9gGIBEgFQAZhkAYhyQAWhTA7h1QAlASAJAJQAGAGAAALIgBAVIgDgBIAAgCQggATgMAcIgaBTQgoCFgLBWQgHAygDBQQgPCqgFEVQgBEfAgDHQAPBlATA3QgOAEggACQg9AFiGAAQiNAAhTgMgAAzDPQATAcABAwQAjgYAAg4QAAgngUgwQgRgqgXgaQgGgIgIhEQgJhUgHgdQgKgogWg7QgXg1gFgDQgnAoglBmQgVA8gQA+QABAQgIAZIgIAjQgBAGgSAWQgSAWgQAuQgQAtAAARQAAAOAOAnIAFABIAihEQANgaAKABQgCANAJADQAGACAfAFQglA/gBADQABAOAoAIQAhAGAxAAQAtAAgBgJQgBgIgHgTQgHgSgDghIATgCIAVgDIAVATg");
	this.shape_5.setTransform(38.3,84);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8089DD").s().p("AhSCYIgFgZQAfACAwAAQAzABApgDIADgBIABASQhpAKgKAAgAguhiQgGgFAAgMQAAgnAcABQAaACgBAbQAAAQgFAHQgIAIgSAAQgLAAgFgFg");
	this.shape_6.setTransform(68.3,87.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF7C66").s().p("Ag/EDQAFgHACgQQABgRAEgGQANgWBNAEQAFAfASAhIhaAGQgHAAgcgGgACIDZQgLgZgHgIQgYgegCgkQACglgFgPIAFAAQANAMAYAwQAcA6gBAbIgGAmIgQgggAidDMQABgZAFgcQALg4AVgVQAEAiAFARQAEAMAAAUIgSASQgSAWgEAdIgGAQQgFgcAAgKgAhmBOIgEguQAAhEAHgzQAIhAAWg2QAHABAWgBIAbgCQAHAAAhBbQAFANAIAnQAFAZAUBHQAQBDgIAXIiqAEQgCgJgDgngAhJhhQAAASAKAJQAKAKARAAQAaAAALgOQALgMAAgSQAAgVgMgOQgMgNgRgBIgCAAQgqAAAAA4gAg/jfIAHgOIALgaQACABAHAOIANAWIgDAAIgfADg");
	this.shape_7.setTransform(68.9,86.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(40,42,51,0.263)").s().p("AgBgGQACAIABAFIgBABIgCgOg");
	this.shape_8.setTransform(67.3,0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AiVNYQhsgQgogLQA7i0AWiSQAXiSgDh6QgDh6gHh/QgHiCgPhBIg0j5IgtieQgFgPgQglQgNggAAgFQAAgIAJgHQAJgHANgDQAVA6AtBxIAxB8QAKAbAFAYQAJAKBCAAQAjAAA6gTQBAgWAhgcQAOgMADgFQAHgLAAgVQAAgKgbhJQgjhegJgcIgWhDQgOgrAAgbQAAgTANgLQAJgJARAAQALAAAJAGIAKAJIAAAAIAAABIgTAdQgMARAGAAQgFAABODJQBODJBHEbQBHEZATDpQAUDpAABfIgDA4IgEBCQgDgBgkgEIgugDQgjAAhuAXQhuAVgPAAQgfABh0gTgAg9DxIAtAEIgcBFQAAAFAJAFQASAKAwAAQAzAAAagJQARgGAAgEQAAgVggg1IAVgFQAPgEAGAAQAJAAAWApQATAlADAMIABABQAZgZAAgoQAAgmgYg3QgdhBglgPQgLhfgwhtQgphcgdgeIgKAQQgJARgPAlQgRApgIAiQgLAqgDA0QgHBZgCAJQgBAFgXAnQgNAYgGAXQgGAVAAAcQAAAaAIAbQAHAcAJAHIAIAAQAAgZALgeQANgiARgIQAGAHgEAHgAAZsjIAAgBQAAgFgEgKIAEAQg");
	this.shape_9.setTransform(65,81.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

	// apron
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AjpM3QgWgEh6gkQAohrAQhTQAHglAFg9QATjcAMiuIALiSQATiQAciiQA5lCA0iDIABgBIABAAIAHAFQANgIANgBIAZAAQANAAABAEQACADAAAEIgNAoQgcBRgQBLQgVBeADA3QAeARAcAHQAmAJA6AAIBBAAQApgDAEgRIAJgpQAvirAVgzQAVgyASguQASgtAOADQANAEAiAMQAiANgFAKQgGAKgBgFIgBAAQgCACgGAAQgGAAgBgCQACApgJAOQgVAmgOApQgvCQgWDbQgUDNAAEhQAACzARCpQAWDPAnBHQgQAHgwAGQhQAJiLAAQidAAhfgTgAg9sPIADgGIgGAAg");
	this.shape_10.setTransform(37.9,84.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ah9NyQhWgVhjgOQgKgHgEgTQAzhhAciuQAaidAAinQAAl5hRkxQgYhZgghVQgahEAAgDQABgUAPgPQAPgQAVAAQAXAAAAALQAAALBICuQBDCjgHAFIAmAAQBEgFBEglQAhgSAWgRQACAAAFgIQAIgJgBgGIg0iTIgRg/IgTg9QAAgLgFgVIgDgIQgGg4ANgUQAOgTAYAAQAaAAAUAOQASAMABAOQAAAXgQAOQgQAPAAAEQAAAVA0CHQBHC5AsCLQClITAAIOIgBA3QgCApgJApIgcgHQgvgMgcgBQgcgBhkAUQhkAUg7AAQg0AAg1gNg");
	this.shape_11.setTransform(64.9,81.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_11}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.4,75.8,168.5);


(lib.FIZ23RTORSO001 = function() {
	this.initialize();

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#313234").s().p("AhbCgQgFgGAAgIQAbhFALggIALgfQAMgaAJgiQARhBgHgzQBVACAQgEQAFAuAEAeQADARAAAMQAAAcgSBjQgCAOgLARQgOAXgVAFQgLADgyABQgBAAgYARIgXARQgIAAgFgFg");
	this.shape.setTransform(18.8,45.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5EB8BA").s().p("AgcAEIAMgGQAQgMAYgNQAFARAAAHQAAAEgHAEQgWAJgZANg");
	this.shape_1.setTransform(16,-70.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6870B0").s().p("AgfHdQgBjZgIj9QgBgxgOhkQAAhggGhHQgHhGAAhJQAAgDARgGQAagKAQgIQAXDHAaExQAZEzAECUg");
	this.shape_2.setTransform(20.3,-20.8);

	// Layer 5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAGANQg0gJgagQIBNAEQA1ADAOAFIgIAFQgTAIglAAIgCAAg");
	this.shape_3.setTransform(-0.5,76);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#363636").s().p("Ai7DmQhEghAFhcQgKg1gJg/QgSiBAEhqQAgABBFAGQBGAGBmgBQDvgKAsgFQADAKAEAnQAFAnAAALQAAAXgMA7QgNBEgYBYQgSBEgFAHQgLAQhBAiQgUAKgZAIQgUAGgOACIAJgGQgPgHg0gCIhNgEQAZASA0AIQgKACgcABIgjABQhKAAgogUg");
	this.shape_4.setTransform(0,52.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F0FF7A").s().p("AhCBJIAAgtICFAAIAAAtgAg0geIAAgqIByAAIAAAqg");
	this.shape_5.setTransform(-2.6,-52.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8089DD").s().p("AgtDSQAAiiAIhkQAMiUABgZIBUAAIAAhIIhNAAIADghIBDAAIAAhFIg9AAQABgDABghIAdABQAtAAA3gPQAzgOAWgRQAeEdAKB8QAQC5AOFqIk2AFQAAiKgBiFgAkGHUQgCgBAAg+QAAmJBTlOQAShNAIgUQAJgdANgFQALgFAcAHQAuAKAbADIgFAnIhBAAIAABFIA5AAIgDAhIhFAAIAABIIA+AAQgPDpgFA5IgDGfIjDgMg");
	this.shape_6.setTransform(-0.3,-20.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#72EBEB").s().p("AgeAkIACgaQBVgEAdgGQAdgGAsgeIAFANIACANQgLALgaAMQgzAYhIAAgAhlAbQg1gJgKgDIALgfQAbAKAgAHQApALALgDIgCAbIg5gJg");
	this.shape_7.setTransform(2.5,-69.8);

	// body
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhmMFQgcgDgMgEQglgMgdgNIgWgJQgjAAgVi1QgPiGAAhtIAAg4IALAAQAMjcAJh5QAIhoALhnQAIhJAqiqQAvi9AUAAQAGAAAoAKIAsAMQANACAMAAQBLAAAygPQA6gQAggnQAhDPAHAzQAKBOASDeQASDcADBEQACBEAFBOQAGBPADCWQAECWhaBbQhWBXjHAAIghgCg");
	this.shape_8.setTransform(0,0.1);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.3,-77.4,60.6,155.2);


(lib.FIZ23RTIE001 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DADEE0").s().p("AiSAeQh5gPgigSQADgKABgdIDsAWQCfAPAqACQA+gBAcgEIA2gIIAMACIACACQAFAAgBAZQgBAcilABIgnABQiKAAhpgNg");
	this.shape.setTransform(32.4,6.8);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgJBCQhMgDg+gKQg+gJhagWQgNAAgFgMQgFgKAAgcIABgRQABgMAGgGQAEgCACgBQAyALCcARQCcARA9AAQA7AABAgGIA1gHQAOAAAJAOQAJANAAAPQAAAcgmAMQg3ASifAAIgvABIghgBg");
	this.shape_1.setTransform(32.4,6.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64.7,13.5);


(lib.FIZ23RPUPILR001 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgbAiIgFgQQgDgNAEgPQAGgdAXgFQAcgGAHAqQADAOgHARQgJASgPADIgJABQgQAAgHgLg");
	this.shape.setTransform(3.5,4.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,6.9,9.2);


(lib.FIZ23RPUPILL001 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAcIgEgPQgCgLAEgNQAHgYASgDQAYgEAEAlQACAMgHAOQgIAPgNACIgFABQgOAAgGgLg");
	this.shape.setTransform(2.9,4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,5.8,7.9);


(lib.FIZ23RNOSE001 = function() {
	this.initialize();

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6A17D").s().p("AhjA5QgcgUgGgUIARAKQAQAHAWAAQBLAAAtgdQApgXAsg+QAHAbAAAUQAAAhgnAlQgvAshBAAQguAAgkgYg");
	this.shape.setTransform(12.4,40.2);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhQDjQgngMgIgeQAmhHAfhaQArh7AAhfQAAgKgFgeQAFABAKALQAJALgVCIQgXCGg4BtIAVAFQBRADAmgcQAmgcAZgdQAZgcgGAMQACALAAAHQAACOiKAAQgsAAgagIg");
	this.shape_1.setTransform(12.3,23.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,0,27,48.4);


(lib.FIZ23RMOUTH001 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 10
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAeA8QgrghgOgIQgKATgIAEQgPALgiAAQg2AAgjgoQgZgmgDAAQgEAEgHAEQgMAHgQABQgpAAAAg2IABgKIABgEQCNApAXAGQB+AdByAAQA6ABA+gMQApgIAQgHQgLAngLARQgOAYgWgBQgLABgSgQQgTgPgEgBQgEACgEALQgEANgEAGQgSAZhCAAQgbAAgZgSg");
	this.shape.setTransform(34.3,14.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAYA4QgigegEgCIgeAYQgPAKgTAAQhJAAgZgoQgNgmgKAAIgnAQQgkAAgLgVQgEgHgJgzQByA2C8AVQBfAKBJAAQAlAAArgJIAvgOQgEAigNAVQgOAXgVABQgLgBgSgPQgUgQgEgBQgMAUgMANQgWAagwAAQgjAAgpgcg");
	this.shape_1.setTransform(32.8,10.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#862D59").s().p("AgmAjIAAgUIAEgxIAdANQAPAHAKAAQAKAAAJAtIgBABIAAADg");
	this.shape_2.setTransform(39,23.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#40152B").s().p("AgvAfQhMgqgWg+IAJAGIALAEQAFABAGAAQAHAAAQgDQAQgDAEgCQAGAqAsATQAfAMArAAQAcAAATgIQAUgLACAAQAKAAAOALIgIBOIgXABQhZAAhJgrg");
	this.shape_3.setTransform(19.3,18.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAfA+IgsghQABAPgQAJQgRAJgfAAQgzAAgagTQgHgFgRgaQgSgYgDgEQgKAHgMAFQgLAEgGAAQgjAAgKgUIgOhCQD8BTCeADQAsAAA9gEQA2gEAZABQgNAqgDAHQgLAUgUAAIgWgLQgVgMgNgJQgOAmgWALQgPAIgmAAQghAAgqgZg");
	this.shape_4.setTransform(32.6,8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#862D59").s().p("AgrBOQAIgZAFg5IADhKQAEADAbANQAeAOAKACQgDAUgIAmQgEAjAIAWQglAKgSAAg");
	this.shape_5.setTransform(35.9,24.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#40152B").s().p("AhMBOQhnhSAShjIAJhCQAHA9ARAXQAZAiA+ABQANAAAJALIARAYQAbAhBNAAQAQAAAJgDIAlgPQgIBIgFAdQgDAQAAAIQAAAKAJAjQiIgLhhhRg");
	this.shape_6.setTransform(14.9,14.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAmBFQgjgagOgKQgEAhg/AAQguAAgbgbQgagkgTgPQgKAGgMAEQgLADgGAAQgfAAgKgOQgIgNgOhAQCnBECWATQCCAQCWgOQgJBCgmAAIgVgLQgVgMgNgJQgJAigWANQgTALgkAAQglAAgkgWg");
	this.shape_7.setTransform(32.2,5.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#862D59").s().p("AgkBfQgFgPAAgrQAAgrALgrQARg9AdAAQAlAAgQA6IgPAzQgKAdAAAQQAAAOAJAwQgTAGgQgBQgQAAgGgQg");
	this.shape_8.setTransform(29.4,23.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#40152B").s().p("ABJC4QgugSgsgjQh6hdAAh0IAQh0IAQAyQAKAgAKAPQAcAvBEgSQAHAmAvAYQAtAVAggKQgNBLAAAeQABAVAFA9QgFADgJAAQgRAAgdgLg");
	this.shape_9.setTransform(10.7,13.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgdAzIhGgmQgNATgfAMIgNADQAFgZBCgqQBKgzA5AAQA0AAAeAbQAeAZAAAkQAAAOgDARQgIgEglgeQgUAkgeANQgTAJgcAAQgIAAgigVg");
	this.shape_10.setTransform(41.1,9.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#40152B").s().p("AhuBqQg+g4AAhwQAAg7AqgIQAMgDAWgCQATgCAHgIQAPAUAfAQQAcAPAUAAQA7AAAggVQAYgPgCgPQACACAPAJIATAKQgEATgsAuQgsAtgNAyQgPBAgTAWQgTAWgjAAQgwAAgqgng");
	this.shape_11.setTransform(38.5,29);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhAA5QgpgPAAgNQAAgiAoggQArgiA2AAQAkAAAVAeQARAYAAAZQAAALgFAGIgTgNQgWAggMALQgSARglAAQgTAAgmgPg");
	this.shape_12.setTransform(44,10.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#40152B").s().p("AhUAkQgcg2AIgoIAFgfIAAgBQAFAGAUAKQAaANAbAFQBOAOAxg3QgbBBgWBQQgTAygxAAQgrAAgeg+g");
	this.shape_13.setTransform(42.5,25.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#40152B").s().p("AgtAyQgQghgBgeQAAgkAUgVQARgTAZgDQAZgDASANQAUAOAAAYIgNAaQgNAZAAAMQAAADAIAVQAHAUABAFQAAAagqAAQgjAAgVgsg");
	this.shape_14.setTransform(45.9,13.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCC99").s().p("AAfC6Qh8AAhNgYQhEgWgYglQg6hYgOg8IAAAAQgJgmgFgqIgEgrIAAgBIABgIIABgCIADgFIABgBIAiAYQAnAbAvBCQAwBCgNBDIAEAAIAMAAQABgRgGguIABgCIAEgBQA4gKALAAQA8AAA2ATQA8AVASAjIAIAKQgBACAOAfIAKAUQAEgCgGgeQgGgegOgOIgQgQIgBgCQAAAAABAAQAAgBAAAAQABAAAAAAQABgBAAAAQAMgCAjgLIABAAQAqgLAzAAQAeAAAjAQQAgAPAKATQgDgMgGgKQgHgNgGgEIAvALQACAQgCARQgBAOgjAbQgSARgjASQgpAWgmAMIABAAQgpAOhwAAIgBAAg");
	this.shape_15.setTransform(30.9,13.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AggAzQgsgTg4ABIhHALIgfg6IhChLQCDAuBoAVQBuAWB2AAQCIgDAAgEQAFAdgGAYQgGAYgwgHQgwgHgdAAQgdAAhbAiQg0gdgbgKg");
	this.shape_16.setTransform(33.1,6.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AA1BKQgpgagZgPQgGAMgIAIQgRANgmAAQg9AAgagoIgPgaQgHgMgHAAQgEAEgGAEQgMAGgUAAQggAAgLgQQgLgSgFg7QBfAuCRAXQB0ATB6AAQB4gFABgDQgEAggNAVQgOAYgWAAQgLAAgSgPQgTgQgEgBQgEACgDALQgEANgFAGQgSAahCAAQgLAAgfgSgAEsgLIAAAAIAAAAg");
	this.shape_17.setTransform(32.6,8.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D580AA").s().p("AgPBIQACgJAAgKQAAgYgagcQgagaAAgCQAAgUANgOQAMgNAPAAQAvAAAZAgQATAZAAAiQAAAQgJAWQgIAUgDAAg");
	this.shape_18.setTransform(30,24.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#40152B").s().p("AAgCKQhMgggdglQgfgpgNgbQgUgrAAg6QAAhjARA1IAdBeQAKANAkgBQAWAAASgEQgEAVAnAbQAoAdAYgGIgFAYQgDARAAAHQAAARAaAaQAaAaAAABIgBAOQgCAGgHAAQgeAAhCgbg");
	this.shape_19.setTransform(12.6,14.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgLAgQgKAWgRAHQgMAGgbAAQg1AAgagkIgRgdQgKgNgMgGQgEAQgkAAQgfAAgMgSQgKgQgIg5QB/BCCxAcQBwAUBRAAQAqAAA2gKQgKAhgNANQgJAKgPAAQgHAAgVgQIgYgSQgJAegVAPQgVAPgpAAQgkgBhRg9g");
	this.shape_20.setTransform(31.8,4.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D580AA").s().p("AAsAgQgdgHgEgdIAmgOQAaAAAPAOQANAKAPAjQg4gEgSgFgAgnAHQgdgKgxgcQAZgMAOADQAdAIA9A4QgcgHgXgKg");
	this.shape_21.setTransform(21.7,33.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#862D59").s().p("AgDBcQgLgEgIAAQgLAAgJADQAFhrAEgXQALg5AkAAQANAAAQAbIgMAxQgOA2gGA/IgOgFg");
	this.shape_22.setTransform(29.3,21.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#40152B").s().p("AA/CeQgegMgRABIgmAUQgnAAgnhdQglhXAAhSQAAgJADggQAFgkAFgYIAEAHQASAmAKA0QAMAjA1gBIAUgBQAKgCADgBQAHAsAzAXQAqASAggHQgEA3gDBIQgDAwgOANQgJgZgqgOg");
	this.shape_23.setTransform(10.7,12.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgPAWQgJAFgPASQgHAKghAAQg8AAgfgmQgUgkgJAAQglAPgMAAQgTAAgKgJQgPgPgDgoIgDgJQBfAqCqAWQByAOBSAAQAyAAArgJQAWgFAVgJQgGAmgNASQgNATgVgBQghgUgTgKQgGAdgqAQQgdALgZAAQgeAAhNg4g");
	this.shape_24.setTransform(33,11.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D580AA").s().p("Ah9ARQAAgCgPgDQASgHAhgVQAjgTAyAAQAWAAAyATQA3ATAQAVIACACIh3AKQgUAAh/gTg");
	this.shape_25.setTransform(33.9,23.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#40152B").s().p("AgjAcQg3ghgNgyIATAHIAMADQAKAAAhgIQAJAaAiAYQAgATAVAAIAlgBIAAABQgRARgJAHQgWAQgUAAQgcAAgrgcg");
	this.shape_26.setTransform(15.2,18);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AiRBvQg7gSgsgaQg3gfAAgdIAXgfIAUAGIAOAFQAHAAAPgEQAOgCAFgDQAKAmAhASQAgARA7AAQAbABAPgIQAGgCANgLQAcA2BYgFQAlgCAagNQAbgOACgUQARAGAOAVQAPAYAAAcQAAAQi0AHQiRgDhAgTgAAeAfQgfgfgLgFQgSANgNAIQgRAKgPAAQg2AAgdgeQgYgmgOgKQgGACgJAJQgGAEgTAAQgkABgJgUQgFgIgLhEQDNAyAWAFQBwAWB6AAQAYAAA2gEQAzgFALgBQgOBbgnAAQgCAAgSgLQgWgLgMgIQgRAhgeAOQgUAJgmAEIgKABQgfAAgVgag");
	this.shape_27.setTransform(32.6,14.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#40152B").s().p("AgNASQgKgvADgnQARAJAKA2QADAPAMAgQAAABgWAaQgFgLgIgog");
	this.shape_28.setTransform(1.1,6.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AiRB5Qhugig0g5QALgIAOgWQAMgSAEAAQAQAAATAEQAPABAQgIIASAdQALARAKAJQAcAZBDAAQAXAAATgLIATgLIAmAbQAnAaAgAAQAtAAAagKQAfgMgCgXQAAgBAAgBQAAgBABAAQAAgBABAAQAAAAABAAIAEAAQAQANAKAiQAFASADAUIgCAHIhqAMQg4AGgVAAQhoAAhlgegABNAxQghgZgzgaQgOAUgHAGQgMAIgdAAQhCAAgcglQgSgrgLgGQgEARgnAAQgjAAgLgcQgFgOgIhHQBnAtCcAaQCDAXBnAAIA1gCQAvgDAJgCQgHA0gNAWQgMAWgTAAIgVgNIgigUQgIAfgVAPQgWAOgrAAQgQAAgPgLg");
	this.shape_29.setTransform(32.1,13.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#40152B").s().p("AgYAhQgLgtgFhbIAbAMQANAIAJAQQAHA7AGAPQAGAQAMAUIAAgBIAAAGQgQAwgOAJQgWgWgMgyg");
	this.shape_30.setTransform(-0.6,5.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_14}]},1).to({state:[]},1).to({state:[{t:this.shape_16},{t:this.shape_15}]},2).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},2).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_30},{t:this.shape_29}]},1).wait(1));

	// Layer 5
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAHBUQgZgXgLgEQgOALgHADQgRAHgeAAQgrAAghgOQgtgUgGgpQgEACgNAEQgOADgIAAQgeAAgQgYQgOgXAAgoQgBgRAHgGQAGgGAQAAQARAAAgAMIBIAbQB4AmCkAAQBQAAArgIIBTgYQAEABAFAFIgTASQgEADAAADQAAArgTAeQgUAgghAAQgJAAgRgGQgQgGgJgHQgKAbgTAKQgWALg3AAQgjAAgfgVg");
	this.shape_31.setTransform(34.8,14.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AkNAqQhChGAAhUQAAgVAPgOQCmAxCFAYQBgARAwAAIAxgBQA4gDAggJIA1gPQASgGACABIACABQABABAAAGQAAAIgCABIgHABQgMAFgKAtQgLAqgSAPQgOALgZgBQghABgRgUQgOAegDACQgMALgoADQgEAsgBAEQAlACAjgPQAFAAABABQACACABAIQAAAGgdAJQguAOhaAAQjIAAhihpg");
	this.shape_32.setTransform(33.8,14.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AjlCRQiWhOAAiwQAAhWAhAAQATAAAnAQQBDAcAWAIQCUA0DQAAQASAABUgHQBTgGAmgEIgFAJIgGAHQgpAFgSASQgLAMgIAZQgHAbgIAGQgNAPgiAAIgSgGQgSgHgLgEQgWAmgKACQgZgDgmAIQAAAIgHAbQgHAbAAAKIAEA5QAqgBAFABQgbAXhXAAQiMAAhjgzg");
	this.shape_33.setTransform(34.1,15);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgdDjQh9gChlg7QiThWAAizQAAg7AJgiQAJgiAQAAQAFAADvBVQA1ATBZAJQA8AFAzAAQBJAABQgLQBNgMAsgRQgBAaguAQIg2ATIgaA2QgRAigjAAQgDAAgRgFQgRgGgMgHQAPAvh0AAIgcgGIgmgLQgSApgHAyQgEAZAAASQAABFA6AAQAKAAAHgCQgBABgBAFIAAAGIgDABg");
	this.shape_34.setTransform(34.6,14);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AicCdQgwhCAAhCQAAhPBOhTQBYhcByAAQA5AAAmAlQAiAiAAApQAAAbgKAPQgqA/gTAeIgpBIQgEAIgHAkQgQA7gbAUQgXARgtAAQhIAAg3hJg");
	this.shape_35.setTransform(38.8,23);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AhmCOQgdgsAAheQAAhPAxg3QAug0A5AAQBAAAAcAkQATAYAAAeQAAALgWA6QgbBDgKA0QgKA0gVASQgTARgrAAQg2AAgcgpg");
	this.shape_36.setTransform(42.9,19.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("Ag5BEQgWgmAAgkQAAgWARgkQAXgyAjAAQAqAAAYAbQASAUAAAaQAAAogYAXIAQA3QABAmhBAAQgnAAgagvg");
	this.shape_37.setTransform(45.7,12.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AjaCpQhMgZgVgzIgnhNQgUgkgJhKIgFgwQgCgTACgIIgIgEIACgFQACgHABgFIAQgCQBqA2CJAfQCGAhB5AAQBFgBBCgJQA7gJBPgWQABgEAAAKQAAAUgUAJQgRAJg6AKQAAAZgGA+QAAAGAHgCQAFgBABAFQAAAvhFAwQhbBBigAAQiGAAhJgZg");
	this.shape_38.setTransform(35.3,11.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AhvC8QiGgchEhMQhEhLAAh1QAAhMAOgLQAMgIA3AZQDJBZDsAAQA1AAC4gjQAGAAABACQAAABABAAQAAABAAAAQAAABAAAAQAAABAAABQgFAXgRAFIgXACQgeADgGAaIgLArQgbApgfAAQgJAAgRgHQgQgGgJgHQgGAbgPAJQgWANg+AAQgNAAgWgHQgSgGgIgEQAPASANA0QAAAugLAWIAfAAQA7gFABAEQgTAXhnAAIhwgKg");
	this.shape_39.setTransform(34.2,14.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AkxCRQhghjAAidQAAhFAKglQAKgkAOgCQAPgCAYAQQAZAPBkApQCKBEDJAAQAwAAAjgEQAXgDgDADQAOgCCPgkQATAegpAQQgMAEgwAIQgMADgIANQgEAGgOAiQgGAQgSAJQgOAHgQAAQgJAAgNgGIgagPQgFAgghAJQgWAIgvAAQgngHgSgIQgYBNgFAiIgDAfQAAAZALAWQALAXARAPQAJAHAOACIAPADIAAAJIgBgCQgKAFgSADQgQACgJAAQjGAAhshvg");
	this.shape_40.setTransform(34.3,15);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AjdBOQhyhDAAh0QAAgDAFgKQAFgMAGgIQCJA0CeAUQBNALA1ABIBQgEQBagIA3gWQAJAQgHACQgPAEgHAWQgUA5gEAGQgPAXgpAAQgDAAgTgJIgXgKQgBAVgWANQgTALgTgCQAHAFAOASIANARQALAAAKgEQADgBAJAHQgGAPgvAIQgrAIg5gBQidABhng9g");
	this.shape_41.setTransform(33.9,15.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AkTBaQhkhIAAhuQAAgVAHgVQAHgVAJgHQFjBcChAAQArAABCgJIBngOIAAAFIgmASQggAOgFAPQgGATgFAoQgKAhgpAEIAMA4IAOgDQAQgFAGAAQAKAAAIALQgGAEgQAJQgWANgPAEQhYATinAAQijAAhnhJgAhoB+IgGgBIgjgGIApAHIAAAAg");
	this.shape_42.setTransform(34,13.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AkLBxQh9hQAAiDQAAhdAbAAQAEAAAiAMQAnAMAYALQDEA5BqAVQBMAOBCAAQAtAABIgJQBPgKARgBIgBAKQgiANgMAHQgWAKABAgQABAqgfAaQgVASgUABQAMAxACAOQAXgHALAGQAGAEAFAIQgcASgdAJQgzAQiWAAQjHAAh7hPgAgvCdIgbgFIgJgBg");
	this.shape_43.setTransform(31.8,11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31}]}).to({state:[]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[]},1).to({state:[{t:this.shape_38}]},2).to({state:[{t:this.shape_39}]},1).to({state:[]},1).to({state:[{t:this.shape_40}]},2).to({state:[{t:this.shape_41}]},1).to({state:[]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,4.1,65,21.2);


(lib.FIZ23RHEAD001 = function() {
	this.initialize();

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6A17D").s().p("AkJKGQgGgJAAgiQAAiqBYjSQAXg2CxlhQBdi6AuhfQAvhjAihSQAAAfgrBoQANAABBgNQg6B0g3BjIhXCgQgMAVgqBEQgqBLgkBcQhHCwgiBZIgoBrIggCcQgTAMgGAAIgDgBgAjtJ7IgBAFIgCADIADgIgAjtJ7IAAAAg");
	this.shape.setTransform(116.9,170.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#69494B").s().p("AgXADQANgjACgNIAxAQQgJAzgVAKQgdAEgWAKQADgFAOgmg");
	this.shape_1.setTransform(144.3,111.5);

	// Layer 7
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AgXRPQgkgagFggQgDgVgPgxQgWhIgihPQhzkOh2jDQiajwh6jPQATAFAUACIABgBQgmhugOgzQgXhUAAhsQAAiOApiAQAviQBYhPQB8hxBqguQBjgqB/AAQCzAAB8AqQCAArBQBcQB9B0AzCDQAuB4ABCxQAAA+giB5QgTBAgeBhQANAABBgNQg6Bxg2BkIhYCgQgLAVgrBEQgsBNgkBcQhHCwgiBZIgoBrQgpBvAAAaQAAABAAABQAAAAAAABQABAAAAABQAAAAABABQADAFAJAEQADAQgXATQgXASg6AAQg6AAglgbg");
	this.shape_2.setTransform(76.2,126);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#825454").s().p("AKxDNQAAjLg9hpQgbgvg0g4Ihwh1QhOhJhYglQiCg4i0AAQknAAjCDGQjFDIAAE1QAABvAjB5QARA+AVAxQgvAHgfiIQgZhpAAhPQAAkaCMjRQC+kcGRgfQBtgSCwA7QDRBGBuCaQBvCbAhB0QAiBzgCBwQgDBvguCbQgPAzgQAQQgQARgsAJQBJiCAAjlg");
	this.shape_3.setTransform(78.4,59.7);

	// Layer 8
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgpSMQgigagNgJQgRgKgHgQQgLgVgjhfQgjhchKifQg3h1gSghQg2hghHhtIhNhxQhNh4hFiSQhhjLAAhtQAAlRCljtQDSkuGbAAQCKAAB0AkQBYAcBbA4QA8AlBeBnQBfBnAmBqQAiA8ARBzQAOBeAABqQAABmhJCuQhJCrh6DJQh6DJgyB4QgzB4ADAIQADAIgoBmQgnBmgSAzQgSAzAAACQABACgVA5QgUA5hTAAQhAAAgogXg");
	this.shape_4.setTransform(78.8,119.8);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.2,1,157.3,238.1);


(lib.FIZ23RHAT001 = function() {
	this.initialize();

	// Layer 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BBC767").s().p("AgVASQgLgSgGgBIAvhCIAeA5QACAKgpBEQgKgegLgUg");
	this.shape.setTransform(62.7,68.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6870B0").s().p("AhKBbIgRgVQAAgJAMgPQAQgTAHgMIAAgEQANAOAIASQAHAQAJAfIgaAtQgLgTgSgZgAAzg/QgIgNgPgMQgOgMApgiIAlAuIgeA2QgDgQgIgNg");
	this.shape_1.setTransform(62.8,69.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C6C7C9").s().p("AkNFtIgUgiQAAgLAQgYQAigzANgYQA4AqgVA8QgFAPgTAkQgRAhgFATQgJgZgXgkgABpA4IgcgRQgFAAgMAEQgNAEgFAAQgHAAgKgCQgKgDgDgCIA5hCIAaALQAGACAEAAQAMAAAJgQIAbg+QAMgZAfgjQAcgfAAgCQAAgZgigWQgrgYgTgQQARgXANgiIAOgkQACgHgEgVQgDgVgXgMIAKABQAPACAQANQAQAOgDAiQgDAhgHALQgGALgNAbIAIgLQApAKAjAWQAlAZAAAnQAAAogjASIgYALQgLAHABAJQAAASAeAGQAeAFAAAXQAAAvgzAAQgGAAgJgEQgKgEgEAAQgRAAgEAPQgBADAAAbQAAAugpAAQgFAAgcgRgAgsgfQANgKATgUQASgVACgIQANANAKAEQAKAEAVABQgCAGgbAgIgqA0QgCgHghgug");
	this.shape_2.setTransform(75,56.8);

	// Layer 6
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F0FF7A").s().p("ABsBwQgBgdg8gyQhMg9hzgXIBAhFQBpAABHBQQAkAoANAoQAAADgMAbQgOAfgMAUIABgJg");
	this.shape_3.setTransform(52.1,62.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AgxA2Qh8hbAAhMQAAgeAkgBQBvAABqB1QApAqAcAwQAZAtAAAWIgBAJIgCAEQgJABgKAAQhTAAh2hag");
	this.shape_4.setTransform(31.1,90.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8089DD").s().p("ABlBeQhhhUhYgEQAmg1AhAIQAgAIAkASQAlAQAdARQA3ApAGANQAHAMAZA6IgaAtQgPgihIg9gAk3ARQgPg2AAgrQAAhaAzgPQAVgGARAOQASAPAEAeIALBjQAIBLAJAtQgPgEgUAEQgXAFgXATQgZgggSg+gADghNQhJg9hUgQQAdgiABAAQBKAABTBIQBJA/AAAgQAAABgKAOIgUAYQgJgohAg3g");
	this.shape_5.setTransform(39.3,64);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiYGeQgZglg4guQhShEg8ghQgTgKgDgDQgFgEAAgMQAAgKAbgUQAYgSADAAQBbAABeBJQBbBGAAA4QAAAKgzB0IgBACQgHgkgVgegAC/BdQgFAAgNAEQgNAEgFAAQgPAAgPgHIA5hEIAhANQAGAAAEgCIAHgEIAIgGQgQgDgLgRQgPgTAJgcQgSAAgRgFQghgJAAgUIALgzQgDgBgKAAQgkAQgTAAQg6AAABg5QgtAOgKAAQggAAgIgZQgGgPABg3QgDAAgEgHQgWAaAAAbQAAAKAKAiIggAmQgNAAgKgIQgMgJAAgNIASgiQAAgMgPgEIgigEQgxgEAAgnQAAgcAlgiIAlghQAAgFgDgKQgEgLAAgFQAAgqAdgVQAWgQAfAAQAYAAAPAJQAIAFADAEQADAAAJgFIAVgLQARgKAWgHQAggMAUAAQArAAASAgQABABAEAcQAFAeAKALQAJAJAQAAIBAgDQA2AAAEA2QADAwgeAiQAFADAUAFQAbAHATAIQAZAKAOAeQAKAUAAAMQAAAogjASIgXALQgLAHAAAJQAAASAeAGQAeAFAAAWQAAAXgOAMQgOALgdAAQgFAAgHgEQgGgEgFAAQgQAAgEAPQgCAFAAAbQAAAugpAAgADVgYIgBAAQAAAFABgFgAAsgEQgxgrhzgqQAMgLANgYQAPgSAkAFQAjAFATgEQAEAfAcAPQAeAQApgKQgEAmAWAUQATARAZgFQgCAGgaAeIgsA2Qgbg2gggag");
	this.shape_6.setTransform(63.7,51.4);

	// Layer 5
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AivIUQg2gShGg2QhDgyguhKQghg0gEgcIgihdQgfhhAAgnQAAhJAXgpQAagrA0AAQApAAAQBOQALAwAOCPQBRhOBhhiQBPhSAIgKIghgQQgJgJAAgXIABgZQgzgEgVgUQgPgQAAgeQAAgWASgbQAKgOAPgTQAQgYABgOQABgTAFgNQAUgzAdgVQAagSApAAQACAAARAGQASAIADgBIArgUQApgVAoAAQAjAAAmAWQA0AfABA0QgCAKAagGIALgDIANgBQBMAAARBFQAHAagFAbQgGAZgLAMQA4AJAdAgQAaAdAAAoQABAjgWAWQgPAPgTAGIAKADQASACAHARQAHAOAAAWQAAAggYATQgbAXgygCQgFAsgJARQgQAcgnAAQgLABgVgSQgVgRgTAAQgFAAgMAEQgNAEgFAAQgTAAgHgDQgHgFgJgFQiuDjgmCaQgOA3gDAEQgKANgrAAQgqAAgigLg");
	this.shape_7.setTransform(55.8,54.4);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4.2,0,103.2,108.7);


(lib.FIZ23RHAIRTOP001 = function() {
	this.initialize();

	// Layer 12
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D3232").s().p("ACZEAQgOgjABg9IAiBHQANAbAAAMQAAAJgCADQABABgKAAQgNAAgKgbgAg6CaQgjghgOgsIABgBIAJgCQALAJArAwQArAwAAAGQAAAKgCACQgqgdgOgOgAD4CPQgRgYgDgeQABgkgBgUQAFAIAPAqQANAoABAIIgCALIgIACgAghAuIgxhNIAJgBQAPAMAMAQIAuA9QgEAJgNgBQgEAAgMgTgABdATQgQgdAAgdQAAgGACgDIABgCIAIAGQANAMAMAgQAJAXAAAKQAAAMgJAFQgIgGgMgZgAjhgRQghg1gDgLQAQADAjBDIATAdQAIAMABAAQALAAgLALQgJgGgig0gABeiXQgFgRAAgGQAAgGAFgLIADgLQAUAlgBAbQAAAHgDAEQgCACgFACQgIgGgEgWgAhhiPQgVgagLg3IABgIQAcAdASAiQAMAZADARIABAAIgHABQgKgBgOgQgADKjGQgHgVAEg/QALASAEBPQgJAAgDgNg");
	this.shape.setTransform(39,65.3);

	// Layer 13
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#69494B").s().p("AB1HRIAKgCIAHgFQArgyAEgHQAFgLAAgzQAAgQgdjKQgdjIAAhGQAAgeAVg/QANglArhuIgOBaIgFAAIgCB9QAABKAhDPQAhDRAAAUQAAAygaAmQgdArgwAAgAjojtQgRg7ABg2QABg2ARgQQAFBwAxBqQAzBuA0gFIAGgKIgCARQgLACgMAAQhhAAgriVgAAziqQgXgXgJgxQgSheABgfQABg9AqgmIgBBVQAAA7AKBBQALBQAUAWIgGABQgOAAgOgQg");
	this.shape_1.setTransform(45.9,51.2);

	// Layer 14
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#825454").s().p("AApGcQhkg1hXhcQhZhfgzhxQg4h4AAh2QAAgGAFgcIAFgZQAbBfAxBHQAxBIAngBQAGABAFgGQADgDAAgCQAAgFgMgpQgOgwgEgTQgJgrgBg6IACAFIABAMQABhWAJggQAEgOAohPQAFBwAxBqQAzBuAygFQAOh3APg1QAahdBDhqQgHC0ASBPQAOA6AagBQAFAAAehWQAjhkAmgpIABAIQgLAegGA8QgFA5AABFQAACCAgCTQAhCUAAA9QAAA3gaAmQgcArgxAAQheAAhpg4g");
	this.shape_2.setTransform(36.6,51.1);

	// Layer 15
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAWHCQhlg0hXhYQhchfg0hwQg5h6AAiAQAAghAghqQARAtA8BmQA1BaAPATQgPgvgFgbQgIgwAAhCQAAhaAphRQAeg5AUgOQAPBOAWBOQAtCeAvAdQgBgLAFguQAGg1AGgVQAghpAeg7QAlhKAogPQAXEXADAZQAThNAwhFQArg+AdgJQgWBWAAB6QAACJAiCmQAiCqAABCQAABUgcAmQgjAvhXAAQhcAAhog0g");
	this.shape_3.setTransform(36.7,50.3);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.1,0,73.8,100.5);


(lib.FIZ23RHAIRR001 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D3232").s().p("AgvERIABgBIAAAAQAFgGAWgSIATgSQAHAAABACIAAADQgMAMgPAQQgKAKgMAAgAgWCaIABgOQACgMAGAAIAGgKQAHgKAFgEQADABADAFQAAAOgJANQgDAIgQASQgFAAAAgJgAgnAQQAAgaARgTQARgTAPALQgEAIgSAdQgUAdgCABQgFgEAAgKgABEgCQABgEALgQQANgRAIgFQAIAOgPASQgIAKgMAHgAgXiEIgBgDIAlg6IAHAEQAAARgPAUQgMATgMADgAhljbIgCgGQABgDAMgSQANgTAHgHQAIAMgKARQgJARgTAIg");
	this.shape.setTransform(25.8,51.3);

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#69494B").s().p("AjDG+QgBgBAAgGQAAgaBJhEQBphiAvg+QgLgBgOgNQgOgOAAgNQAAgRAig/QAuhMAQgpQgWAKgOAAQgPAAgKgGQgPgJAAgWQAAgJAZhGQAZhIABgIIgKAGIgZAMQgMAGgHAAQgXAAgIgMQgGgKAAgZQAAgKAJgkIAJgkQAAgFgEgTQgEgTAAgFQARgzABgGIAEALQAIAOAGAiQAFAfAAAWQAAALgFAUIgFAXQAAAKAFADIAHABQATgFAYgTQAygnAmhLQACAdgJAqIgPA/QgLApgIARIgZAxQgRAlAAACQAAAEACAEQAFAHAKAAQAUgGAXgNQAtgcASgpQAOA9gwBvQgiBMgXAdQgYAegSARQgIAIAAAEQAAAEAEADQAFAEAJAAQAFAAAcgOQAggSAVgTIABADQgIAMgLAaQgNAbgWAcQhCBWjRCmIgWAGIgCgEg");
	this.shape_1.setTransform(24.4,52.7);

	// Layer 5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(40,42,51,0.263)").s().p("AADgEQAGABgNAIg");
	this.shape_2.setTransform(37.6,61);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#825454").s().p("Ah/EvQAih5AAhlQAAhhgmh0Qgjhrg3hXIA1AAIgCgCIAMAIQANAHAWAAQA8AAAlgiQAkgkAKhCIAGALQAJAOAGAiQAFAeAAAXQAAALgFAUIgGAXQAAAKAGADIAHABQASgFAZgTQAxgoAnhKQABAcgJArIgPA/QgLApgIAQIgYAyQgSAlAAACQAAAEADADQAEAIALAAQAUgGAXgNQAtgcASgqQAOA+gwBvQgjBMgWAcQgYAfgSARQgIAHAAAFQAAAEAEADQAFAEAIAAQAMAAAZgLQAjgRASgaIgBACQgGAKgLAZQgNAcgXAeQhHBei9CVQgkASgKABQAdhSAThBg");
	this.shape_3.setTransform(22,52.7);

	// Layer 6
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AjqH7IAwiUQAchYAGgGQAJAIABAKQABAHgEAcQAjgiAQggQAUglAAgvQAAhGgWhjQgniyhYh9QApgFgDgDQARAABCgSQA0gKAWhMIAOg5QAHgcAEgFQAeAfAVBHQAUBGgLAfIABAGQAhgVAbg1QAfg+ARgSQAMAJACAFQAHAPAAArQAAAtgQBIQgPBEgQAhIgHAQQAdgVAYgdQAYgcAGgPQAcAhgOBlQgQB0hGBSIA7gdIABgBQACgDABAMQABAMgNAlQgNAkgRAeQgRAfglAmIhzBzQhXBTgmAYQgnAYg5AEg");
	this.shape_4.setTransform(23.5,51.1);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.2,0.3,47.3,101.5);


(lib.FIZ23RHAIRL001 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D3232").s().p("ABHEJQgOgMgFgXIACgIQAfARAJAqIgXgQgAgGDmIgPghIAEAEQAFADAoA7QAAADgFABQgPgGgOgfgAAaCTQgRgHgLgTQgNgTAAgRQAAgGAEgGIAEgGIACADQAJAMAMAUQARAcAEAVgAhWBRQgMgVAAgEQABgHADgDIAFgCQAFAFAOAeQAPAfACAMIgBADQgRgRgPgbgABNBVQgKgQgDgIIACgIIAHAAIATA1QgFgDgKgSgAA8gZQgHgGgHgUQgGgUAAgJQAAgGAEgKIAGgKIAFAhIAHAzgAgkh5IAEgVIAFgMQADAQADAbQADAYAAAIQAAAHgBACQgBACgFABgABei/QgQgNAAgdQAIglAEgKIAIAHIgBAAQgBAyABAkg");
	this.shape.setTransform(17.7,51.9);

	// Layer 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#825454").s().p("Ah2GPQgkgjhuiRQANAPAZAHQANAEAMABIAMAAQACACAAgKQgYgkgYgzQgyhmAAhiIADgpQA9B3AUAQQAHAGAHgEQALgFADAAQgOgLgGg+QgFgqAAg0IAGhGQAHhFACgGIABgCQACACAaAsQAdAsAPAEQAMhyADgZQAJhBARgvQAfBPAsAhQAjAYAvAAQAZAAAQgHQAVgJAAgTQAAgGAHAAIAOABQApAAAlA6QAlA5AAA8QAAAegUA/QgOAngvB8IghBtQgVBFgLAOQhPBbgvAdQgdAUgpAAQgeAAgggfg");
	this.shape_1.setTransform(31.4,49.9);

	// Layer 6
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AiNGjQg+hAhUikIADgPIA0AsIAOAMQgkhagQhGQgQhGAAg/QAJhZAEgMIABgCIAkBSQAjBNAKANIAFAGQgMhsAAgNQAAg8AHg0QAKhPAWgLQAHAMATAuQAPAkALALQAFgIAAgaQAAguACgMQAHhbA3hMQAVBEAiAxQAuBBAzAAQAFAAAjgJQAjgIAFAAQA/AAAXBVQAZBbg2BoQguCXhBB/QhoDMheAAQgnAAgsgtg");
	this.shape_2.setTransform(28.9,46.5);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,60,93);


(lib.FIZ23RGLSSR001 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8089DD").s().p("AhagdIC+AJIgsArIiQAHIgBAAQgUAAATg7g");
	this.shape.setTransform(10.3,4.2);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ah9ApIAAhNIALgPIDYATIAYACIhFBPIirADQgGgFgFgGg");
	this.shape_1.setTransform(11.6,3.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1.4,25.3,10.5);


(lib.FIZ23RGLSSMID001 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8089DD").s().p("AEFAcQiGggiEAAQiLAAhUAOQgqAIgYAIQgXAGgIgJQgHgJAEgNQAFgKAsgLQBIgRCrAAQB6AABeANQAwAGAfAHQASACAZAMQAYAPgCgHQgDgIAFACQAEADAAAGQAAAWgPACIgCAAQgMAAgogKg");
	this.shape.setTransform(32.3,6);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ADDArQhJgNgRgBIhLgEIg5gCQg9ABhjAIQhTAIgWADIgCgDIADgLQgQAGgLgMQgIgJAAgIIAOgOQAOgPAAgCQAAgNBNgJQBIgJBoAAQBHAABfAJQBzALAbAPIAwAVQAQAFAAAMQAAAPgzAZQgKAAhHgOg");
	this.shape_1.setTransform(32.6,5.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.7,0,66.2,11.4);


(lib.FIZ23RGLSSL001 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8089DD").s().p("AhWgbICtAJIgbAsIiSACg");
	this.shape.setTransform(9.9,4);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhwAvIAAgpQAAgIAFgnIAGgFIDWASQABADgiBEIgBAEg");
	this.shape_1.setTransform(10.3,3.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1.4,22.7,9.5);


(lib.FIZ23REYER001 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A3C0C3").s().p("AgXC4QgjhPgIhrQgDhvAkhJIAAgBQAehMAwABQAIAAAIADQgNASgLASIgXBAQggBjAABOQAAASADAUIAAACIANA2QAJAhASAlQAVAqAVAmIgIABQgxAAghhPg");
	this.shape.setTransform(15.2,29.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A3C0C3").s().p("AgOBvQgOg1gEg/QgCg3AJguQAcgHAegDQgUBIAAA8QAAASADAUIABABIANA3IACAHQgZgBgVgFg");
	this.shape_1.setTransform(11.9,29.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4F9B9F").s().p("AgQDSIgGgLIgHgPQgJgUgHgVQAYAEAXABIAQAiQAVAqAVAmIgHABQgoAAgdg1gAgoi6IAAgBQAehMAwABQAIAAAIADQgNASgKASIgYBAIgFARQgeACgfAHQAHgdAMgYg");
	this.shape_2.setTransform(15.9,29.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A3C0C3").s().p("AgSAnQgEgdgDgdIAAgDIAAgDIAAgKQAZgGAXgEQgDAWAAAUQAAARADATIABACIACALQgXgCgVgFg");
	this.shape_3.setTransform(11.2,31.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4F9B9F").s().p("AA2EHIgFgBIgBAAQgjgHgZgxIgDgGIgIgQQgSgqgLgzQAUAEAVACIAGAAIADAPQAJAhASAlQAVAqAVAmIgIABIgFAAgAhCgpQAEhVAdg8IAAgBQAehMAwABQAIAAAIADQgNASgLASIgXBAQgSA5gIA0QgbADgaAGg");
	this.shape_4.setTransform(15.2,29.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4F9B9F").s().p("AA2EHIgFgBIgBAAQgjgHgZgxIgDgGIgIgQQgWgygLg9QAWAEAYACIAIAhQAJAhASAlQAVAqAVAmIgIABIgFAAgAg9ArQgDgXgCgWQgDhvAkhJIAAgBQAehMAwABQAIAAAIADQgNASgLASIgXBAQggBjAABOQAAAQACARQgXgDgWgFg");
	this.shape_5.setTransform(15.2,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6569AC").s().p("AANDpIgKgSIgQgmQgKgWgPg0QgQg0AAhTQAEhXAXgwQAVgyAFgIQAJgLAOgHIADABIACgEIAAAAIAKgEQgOANgKAbIAAgBQgnBYACBzQAIByAoBcIATAjIAAABQAIAIAEAJQgngPgDgDg");
	this.shape_6.setTransform(8.4,29.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8089DD").s().p("AgBAAIADgBIAAABIgBACIgCgCg");
	this.shape_7.setTransform(10.9,5.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D9FFFF").s().p("AhTC4QgkhPgHhrQgDhvAjhJIAAgBQAehMAyABQAIAAAGADQAsAMAmBHQAvBTgCBmQgBBlgqBQQggBBguAHIgGABQgwAAgjhPg");
	this.shape_8.setTransform(21.3,29.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D9FFFF").s().p("Ag8B2QgZgBgXgFQgOg1gEg/QgCg3AJguQAegHAegDQBUgJBYAWIABACQAMArABAvIAAAEIAAANQAAAvgJApQhWAYhFAAIgXgBg");
	this.shape_9.setTransform(21.3,29.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#66CCCC").s().p("AhEDaIgGgLIgHgQQgJgTgHgVQAYADAaABQBHACBYgWQgHAUgIAUIgLAWQgOAdgRARQgVAWgaAFIgHAAQgmAAgfg0gAgwiHQggACgfAHQAIgdALgYIAAgBQAehMAyABQAIABAGACQAsAMAmBHQAMAWAJAXQhOgRhLAGgAAqkNIACAAIAGACIADAFIgLgHg");
	this.shape_10.setTransform(21.1,28.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D9FFFF").s().p("AhJAwQgXgDgXgEQgEgdgDgdIAAgDIAAgEIAAgJQAZgHAZgDQBjgPBoAdIAAAHIAAALIgBAjQhaAZhJAAQgSAAgSgBg");
	this.shape_11.setTransform(21.3,31.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#66CCCC").s().p("AgEEHIgFgBIgBAAQgigHgbgxIgEgGIgHgQQgTgqgLgzQAUAEAVACIAGAAQBBAEBKgPIADgBIAEAAIAqgKQgKA+gcA1QggBBguAHIgHABIgEAAgAhIgyQgaADgbAGIAAAAQADhVAdg8IAAgBQAehMAyABQAIAAAGADQAsAMAmBHQAkA/AHBNQhlgbhhANg");
	this.shape_12.setTransform(21.2,29.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#66CCCC").s().p("AgEEHIgGgBIgBAAQgigHgbgxIgDgGIgIgQQgWgygMg9QAXAEAYACQBVAGBugdQgJBJggA9QggBBguAHIgGABIgEAAgAhMAzQgYgDgVgFQgDgXgCgWQgDhvAjhJIAAgBQAehMAyABQAIAAAGADQAsAMAmBHQAvBTgCBmIAAASQhbAZhJAAQgUAAgTgBg");
	this.shape_13.setTransform(21.3,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_12},{t:this.shape_6},{t:this.shape_7},{t:this.shape_11}]},1).to({state:[{t:this.shape_13},{t:this.shape_6},{t:this.shape_7}]},1).wait(1));

	// Layer 2
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAdEmIgBAAQgEgBgHABIgBAAIgWgDIAAAAQgIgDgKgBIAAAAQgUgEgbgNIghgRIgBAAQgvhfgThGQgLg1AAgmQAAgpALhIQAQhFAdgrIAPgOQAEgFACAAIAGgDQAhgWARgFIAcgIIAIgCIAXgGIAEgBIACABQBDAAAxBZIgBAAQAwBVADB1QADB0gvBbQgqBahCAAIgBgBg");
	this.shape_14.setTransform(18.3,29.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAdEmIgBAAQgEgBgHABIgBAAIgWgDIAAAAQgIgDgKgBIAAAAQgUgEgbgNIghgRIgBAAQgvhfgThGQgLg1AAgmQAAgpALhIQAQhFAdgrIAPgOQAEgFACAAIAGgDQAhgWARgFIAcgIIAIgCIAXgGIAEgBIACABQAdAAAZAQIACAAIAFADIADAFQAcAWAYArIgBAAQAwBVADB1QADB0gvBbQgqBahCAAIgBgBg");
	this.shape_15.setTransform(18.3,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14}]}).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36.6,59);


(lib.FIZ23REYEL001 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A3C0C3").s().p("AgbCzIgDgIIgCgEIgBgCIAAgCIgBgBQgUg5gGhIIAAgVIgCAAIgBgOQAAhsAfhGQAehJAsAAQALAAALAEQgUASgTAbQguBEAABVQAABhAmBmQAUA0AUAvIAAAGIgKABIgBAAQguAAgbhLg");
	this.shape.setTransform(13.3,28.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A3C0C3").s().p("AgVBiQgHgjgEgnIAAgWIgCAAIgBgOIAAgOIAAgDIAFhCIABgGQAVgGASgDQgFAYAAAZQAABUAfBYQgdgFgcgIg");
	this.shape_1.setTransform(10.5,29.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4F9B9F").s().p("AghCzQgIgTgGgVIAJACIAeAGIAVAEIAmBgIAAAGIgKABIgBAAQgsAAgdhLgAgmi0QAehJAtAAQAKAAALAEQgUASgTAbQgXAjgLAoQgVADgVAFQAHggAMgbg");
	this.shape_2.setTransform(13.9,28.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A3C0C3").s().p("AgWAbIgDgWIAAgUIgBAAIgBgOQAWgGAUgEQADAnAKAoQgZgFgZgIg");
	this.shape_3.setTransform(9.8,31.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4F9B9F").s().p("AgbCzQgRgqgJgzQAcAIAZAFQAHAYAKAZQAUA0AUAvIgBAGIgJABIgCAAQgtAAgbhLgAggi0QAehJAsAAQALAAALAEQgUASgTAbQguBEAABVIAAANQgVAEgVAGQAEhaAbg+g");
	this.shape_4.setTransform(13.3,28.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4F9B9F").s().p("AgbCzQgUgygJg+QAbAIAaAFQAHAiANAiQAUA0AUAvIAAAGIgKABIgBAAQguAAgbhLgAg8AmIAAAAIAAgEIAAgWIgCAAIgBgOQAAhsAfhGQAehJAsAAQALAAALAEQgUASgTAbQguBEAABVQAAAzALAyQgYgFgagHg");
	this.shape_5.setTransform(13.3,28.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D9FFFF").s().p("AhUCzIgDgIIgCgEIAAgCIgBgCIgBgBQgTg5gHhIIAAgCIgCgTIAAgOQgBhsAghGQAehJAuAAQALAAAIAEQAoAPAjA/QArBQgFBjQgCBigqBNQggA+gsAIIgIABIgBAAQguAAgdhLg");
	this.shape_6.setTransform(19,28.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6569AC").s().p("AAfDrQgIgHgHgDQgNgWgKgbQgLgfgHgcQgRhZABgxQAEhiAehOIAHgRQAPgPATgMQgKAQgLAZQgiBVgBBwQAFBtAjBaQAMAbAMATIgLgHg");
	this.shape_7.setTransform(6.8,28.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D9FFFF").s().p("AgvBvQgcgFgegIQgIgjgEgnIgCgXIAAgOIAAgOIAAgCIAFhCIABgHQAUgFAUgEQBcgQBcAWIACAJIAHBEIAAAUIAAAHQgCA8gQA1QghAHgjAAQglAAgsgIg");
	this.shape_8.setTransform(19,29.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#66CCCC").s().p("AAFEMQARgCAQgIIgGAKIgMADIgPgDgAhQCjQgIgTgGgWIAJACIAeAHIAWAEQAwAHAsgCIANgBIAOgBIAIgBQgGAPgIAOQghA/grAIIgIABIgBAAQgvAAgchLgAhVjEQAehKAuAAQAJABALAEQAoAPAiA/QAMAWAIAYQhUgShUANQgUAEgVAFQAHghAMgag");
	this.shape_9.setTransform(18.6,30.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D9FFFF").s().p("Ag+AnQgagFgagIIgDgWIgCgVIAAgNQAWgGAWgEQBigTBhAaIAAAMIAAADIAAACQgBAWgDAXIgCALQgmAJgrAAQgrAAg0gKg");
	this.shape_10.setTransform(19,31.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#66CCCC").s().p("AhUCzQgRgqgJgzQAdAIAbAFQBZAQBJgPQgLAsgVAnQggA+gsAIIgIABIgBAAQguAAgdhLgAhYi0QAehJAuAAQALAAAIAEQAoAPAjA/QAiBAAEBMQhigYhjARQgVAEgVAGQADhaAcg+g");
	this.shape_11.setTransform(19,28.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#66CCCC").s().p("AhUCzQgUgygJg+QAbAIAaAFQBfASBNgRQgLA3gZAvQggA+gsAIIgIABIgBAAQguAAgdhLgAhDAyQgYgFgZgHIgBAAIAAgEIgCgWIAAgOQgBhsAghGQAehJAuAAQALAAAIAEQAoAPAjA/QArBQgFBjQgBAWgCAWIgCAAIgCAAIgCABIgGABIgCABIgCAAIgCABIgEAAIgDABIgFABIgDAAIgEABIgGAAIgFABQgRACgSAAQguAAg3gMg");
	this.shape_12.setTransform(19,28.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_11},{t:this.shape_7},{t:this.shape_10}]},1).to({state:[{t:this.shape_12},{t:this.shape_7}]},1).wait(1));

	// Layer 2
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAMEdQgEgBgHAAIAAAAQgSgDgHACQgHAAgjgRQghgSgBgCIAAAAIgTgqQgSgqgLgmQgRhHgBhKQAEhLAVhAQAOgvANgTIAAAAIgBAAIgBAAIAAgBIAAAAQAFgFAEgCQACgEADAAIAFgDQAegUAdgJQAggLAHgBQAJgDACABQBEAAAuBXQArBSgCByQABBwgsBXQgsBXhDAAgAhBi0QggBGABBsIAAAOIACATIAAACQAHBHATA6IABABIABACIAAACIACAEIADAIQAdBMAtgBIAKgBQAsgIAgg+QAqhNAChiQAFhjgrhQQgjg/gogPQgKgEgLAAQgsAAgeBJgAg3DyQgMgTgMgbQglhagFhtQABhwAkhVQALgZAKgQQgTAMgRAPIgHARQgeBOgEBiQgBAxARBZQAHAcALAfQAMAbANAWQAHADAIAHIALAHIAAAAg");
	this.shape_13.setTransform(16.7,28.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAZEcIgMAAIgBAAQgEgBgHAAIAAAAQgSgDgHACQgHAAgjgRQghgSgBgCIAAAAIgTgqQgSgqgLgmQgRhHgBhKQAEhLAVhAQAOguANgUIAAAAIgBAAIgBAAIAAgBIAAAAQAFgFAEgCQACgEADAAIAFgDQAegUAdgJQAggLAHgBQAJgDACABQBEAAAuBXQArBSgCByQABBwgsBXQgcA5gnAUIgFAJIgMADIgPgCg");
	this.shape_14.setTransform(16.7,28.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAMEdQgEgBgHAAIAAAAQgSgDgHACQgHAAgjgRQghgSgBgCIAAAAIgTgqQgSgqgLgmQgRhHgBhKQAEhLAVhAQAOgvANgTIAAAAIgBAAIgBAAIAAgBIAAAAQAFgFAEgCQACgEADAAIAFgDQAegUAdgJQAggLAHgBQAJgDACABQBEAAAuBXQArBSgCByQABBwgsBXQgsBXhDAAg");
	this.shape_15.setTransform(16.7,28.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13}]}).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_15}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33.5,57.2);


(lib.FIZ23REARR001 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAABOIAhg1QAOgVAAgEQAAgPgOgNQgPgNgRADQgMADgVAZQgTAVgNAAQgGAAgCgCIgBgFIBIg8QAbgZANAAQALABAYANIguASQAVgBAJAWQAGAOgBAPQAAAfgPAZQgQAYgSAAQgJAAgFgDg");
	this.shape.setTransform(13.3,26);

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C6A17D").s().p("AAABRQgcgHgYgYQgYgZAAgZQARgRAXgWQArgrAeAAQAUAAAJAQQALASAAApQAAA1gYAXQgPAOgWAAQgIAAgIgCg");
	this.shape_1.setTransform(13.1,26.5);

	// Layer 5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AhGCSIgkgxQgDgDgXgPQgOgJAAgXQAVgMAegYQA8gtAog8QA3hOAqgCQAtgDAABZQAACJg5BGQgtA5g/AAQgbAAgZgeg");
	this.shape_2.setTransform(13.1,21.4);

	// Layer 6
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhHDFQgYgKgJgLQgxg4AFgcIADgIIgGgBIAAABIAAgBIgHAAQAEgBADgBIgFgMQgFgLAAgFQAAgKAWgYIAcgbQAzg4BPhrQALgOAfgMQAPgHALgCQAwgBARAyQAQAxgKBoQgJBagyA7Qg1A/hJAAQgTAAgZgLg");
	this.shape_3.setTransform(14.5,20.9);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.7,0.1,32.5,41.6);


(lib.FIZ23REARL001 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNAuQgLgYAAgTQAAgUAHgPQAJgSAMgCQgWgOgLADIgIAFQgHgHAAgHQABgLAWAAQAYAAAWAWQAQARAEAQIgHAGIgRgOQgLACgHAIQgIAKAAAQQAAAYALAdQAEAJAMAVIgEABQgSgJgNgdg");
	this.shape.setTransform(11.5,24.8);

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C6A17D").s().p("AghBAQgVgaABglQAAgoAHgYQAJgZAPAAQARAAAZAYQAiAhABAuQAAAlgMASQgMATgbAAQgTAAgSgZg");
	this.shape_1.setTransform(12.3,25.3);

	// Layer 5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AhoA5QgMg7gDg0QgCg0AGgcQAHgdARgQQAnAGAzBoQAwBmAwA7QANgIAIAWQAKAagNgCQgMgCALAXIAEAHQADAFghgTQgigTgTAcQgUAbgbAAQhBAAgZh7g");
	this.shape_2.setTransform(14.1,21.1);

	// Layer 6
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhZCQQgmhLAAiZQAAhIATgfQANgWATAAQAnAAAjBJQATAoAeBLIA3BmQAKAVAAANQABAMgIAPQAMAAAFAJQADAGADAUQgIgDgPgKIgPgIIgHAHQgKAMgXASQgLAKgFADQgLAEgTAAQg7AAgihCg");
	this.shape_3.setTransform(12.9,21.1);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,26.2,42.1);


(lib.FIZ23RCOLLARFR001 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0FF7A").s().p("Ag4BBQADgZAAgMQAAg+gagiQAUgDA7gUQBAgXAQgMQiJD2gGAHIAHg+g");
	this.shape.setTransform(63.8,27.5);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhUCpQgFgKABgQQAHhFABgKQAAg6gLgfQgLghgbgWIBBgOQA9gQAxgTQA0gTAJgXQAJgWANAOQgEAWgxBeQhBB3hUCBIgLgQg");
	this.shape_1.setTransform(64.1,26.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(51.1,8,26,37.2);


(lib.FIZ23RCOLLARBK001 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BBC767").s().p("AgdAjQgGgVgQhIQAfADAeAOQAiAPAIARQgKASggAVQgeAWgfAHQAZgNgDgLg");
	this.shape.setTransform(68.8,9);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0FF7A").s().p("AglDUQghgWgRgdQgmg0gVgjQgVgihSgyQhDgsgbgKQBbhFBCgfQBCgeBXgSQBVgSANgBQAUgDCbAAQAeADAgAOQAiAPAIARQhPBFhGATQg5AHgUAHIAKATQAeA+ACAVQACAUAAAeQAABOgoAtQgmArg6AAQgcAAgjgXgAByhRIADAFIgCgGIAAAAgAC5BJIADgnQAAgTgGgUQgGghgPgWIBFgPQA+gRAfgaQgFAMg6BmQg7BogYAjQAEgbAEgjg");
	this.shape_1.setTransform(39.6,26.6);

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgVD5IgogiQgtgogOgaQgshThng7QgagNgugWQgkgSgIgHQBRhHBvg0QCyhUDFAAQBpAAA1AaQAqAVAAAfQAAAigZAvIh1DEQgjA9gfAhQhEBIhRAAQgcAAgUgMg");
	this.shape_2.setTransform(38.5,26.2);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,77,52.4);


(lib.FIZ23RBROWR001 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#825454").s().p("AhiA/QgVgQACgeQBxg6AVgMQAogTAUAAQARAAAJARQAFAKAKAZQi9BdgDAAQgLAAgNgKg");
	this.shape.setTransform(13.6,9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#825454").s().p("AhOBLIgMgTQAcg6A1guQAvgqAiAAQAFAFAHAdQAHAZAAAFIgwAcQgwAegCACIgfAjIgXAWQgIgCgJgOg");
	this.shape_1.setTransform(17.8,6.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.shape_1}]},3).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhxBNQgYgTAAggQAAgYBXguQBUgvAtAAQARAAAVAbQAVAcAAAVQAAALgQAEIhMAeQgpASgpAaQgeASgIAAQgTAAgUgPg");
	this.shape_2.setTransform(13.8,8.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhkBVIgNgfQAAgaAkgsQAkguApgdQAwggAeAMQAkAOAABNQAAAJgWAKQgnAQgiAZQgnAdgYAbQgQATgCAAQgVAAgRgeg");
	this.shape_3.setTransform(17.8,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[]},1).to({state:[{t:this.shape_3}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.4,27.7,18.6);


(lib.FIZ23RBROWL001 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#825454").s().p("AhqgaQAAgUAJgPQALgPAPAAQAaAAA4AeQBDAhAdAlQgQAegKAMQgJALgGAAQgCAAiqhng");
	this.shape.setTransform(12.7,9.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#825454").s().p("AAaArQgwgjg8gPQACgZADgQQAHgfAMAAQAPAAA5ApQBFAuAAAoQAAAGgCAGIgKATQgTgSgagSg");
	this.shape_1.setTransform(10.9,7.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.shape_1}]},2).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAmBRQgfgSgXgQQgngbgxgVQgUgKAAgQQAAgNARgaQAUgcAPAAQAmABBPAuQBQAvAAASQAAAsgXAUQgPANgUgBQgCABgbgOg");
	this.shape_2.setTransform(12.6,9.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AA0BUQgfgagXgPQgygegkgNQgSgGAAgFQAAhFAigPQAcgNAsAbQAoAXAhApQAiAmAAAYQAAAdgLAQQgIALgGAAQgKAAgUgRg");
	this.shape_3.setTransform(10.7,8.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[]},1).to({state:[{t:this.shape_3}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25.2,19);


(lib.FIZ23RBOW001 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DADEE0").s().p("Ag6BqQgTgIgNgIIAAgpQAKAHAKALQAfAhAtAAQATAAALgGQAMgGAAgMQAAgRgXgOQgKgGghgOIANgBQAsANAdAYQAYAUgBALQAAARgOANQgQAOgYAAQgYAAhHgegAhaAcIABAAQAEAFgFAAgAhaAAQArgJAkgRQAlgTAPgoIgCgIIgVgDQgjADgqAiQgSAOgNAOIAAgRQBDhLAxgKQATgEAOAGQAKAFAAAHQAAAugoAfQghAchWAfg");
	this.shape.setTransform(13.5,15.1);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AATgXQAAAOgHAJQgHAJgXAOQATgSASgcg");
	this.shape_1.setTransform(13.6,9.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag6B5IgpgjIAAgpQALADAHAAIAXARQAbAQAcAAQAFAAAJgDQAJgCACgCQgOgQgggNQglgNgmAAIAAgbQAEgFAAgEQgTgEBYgaQAZgPAFgKQAHgKAAgNQgWAJhYA2IAAg1QAUgaAggVQAvggAjAAQArAAAAAiQAAAqgdAaQgsAggaAVQAyADAlAeQAiAbAAAcQAAAdgXARQgSAOgaAAQgxAAgqgfg");
	this.shape_2.setTransform(14.4,15.2);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4.3,0,20.1,30.5);


(lib.FIZ23RARMR001 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("AgvCNQgMgMAAgIQAAgYATgfQAbgmANgXIAAgEQgIAIggAVQgeAYgGAjQgYgOgHgbQAAgWAagjQAaglAAgCIAAgEQgXAIgJAGQgVANgGAVIgGgJQgBgDAAgHQAAg5BGgjIA4glQARAAAFgDQAQAJAhAnQAuA2AAAoQAAAPgeAbQgbAYhAAqQAngEALAAQARgBAAAXQAAALgfAQQgeAQgSAAQgVAAgPgPg");
	this.shape.setTransform(-43.6,15.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#72EBEB").s().p("AhEgDQAAgVAWgSQAMgKAdgSQBEBAAEAGIACABQgNABgdAZQgcAagEASIg/hKg");
	this.shape_1.setTransform(-24.8,-32);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0FF7A").s().p("AgeFCQATgFAJgTQADgMAAgRQAAg2gvg8Qgug4giAAQgiADgLAVIgDgJQgHgYAfgaQAdgYASAAQAkAAA5BEQA9BMAABKQAAAcgYAcQgXAbgWAAQgOAAACgTgABBhYIgKgTQAAgYAXgXQAWgYAYAAQALAAAMASQASAcAMALIgMgDQghgBgVARQgSAPgMAhQgGgJgKgTgAgqjcQgIgMgYgSQgSgNAAgJQAAgOAUgaQAQgUALgJIA9A3QgsATgNAvg");
	this.shape_2.setTransform(-29,-12.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8089DD").s().p("AAxEwQgNgagzg+IAhgeIA1gzQAOgMAMgVIATggQAWghApAAQAVAAASAdQAUAhAAAxQAAAUhLBPQhLBPgcAKQgFgMgGgUgAiIikQgjgeg+gtQgFhaABgGQA9AmAvAhQA2AmALAOQgNAJgNAXQgKATgGARQABABAAAAQAAABAAAAQAAAAAAAAQgBABAAAAQgEAAgagXg");
	this.shape_3.setTransform(-29,-26.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC99").s().p("AhxDQQAAgTAuhhQAyhpA0hWIgOAGQhlCFghB1IgQA5QgHARgQAAQgIAAgHgHQgKgKAAgVQAAgeAbhFQAnhjBOiBQgHgFgQAQQgIAIgHAJQgbApgNAVQgRAggcA2QgIAPgPAmQgPAnAAACIgCgRQAFiYBGhuQBGhvBeAAQBCAAAtAmQArAmAAAyQAAAbgGARQgGASgRAWQgQAVgoASIgrAPQgLAKgsB4QgxBzg0AAQgaAAAAgvg");
	this.shape_4.setTransform(-31.9,3.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#72EBEB").s().p("AhQgLQABgKAWgZQAagfAQAAQAOAAAbAhQAvAzAIAIQgKgCgbAcIgfAlQhJhQgUgJg");
	this.shape_5.setTransform(-20.7,-30.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F0FF7A").s().p("AAGD2IAKgDQAcgDAdgnQAfgqAAgvQAAgMgJgbQgKgbgIgMIANAHQAeAYAKAUQAMAWAAAmQAAAqgSAbQgYAigxAAQgaAAgTgCgABLAKQgdgNgWgJQAIgeAdgTQAPgJANgDQAMAAA7BRQgLgCgKAAQgKAAgPAJIgNAIIgagNgAiRifQgOgGAAgIQAAgOASgYQARgZASgLIBEAzQgQAIgYAcQgTAXgEAJQgVgVgXgKg");
	this.shape_6.setTransform(-20,-20);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8089DD").s().p("ADmD4QAAgdgSgmQgRgjgTgPIA0gOQAXAyACAHIgBALQAAAqgLAaQgCAEgSAbQAJgVAAgPgAjoixQgUgXABgcQAAgMAIgUQAFgOAFgJQACAEAdAWIAuAgQAdAWBDArQgPgCgWAfQgUAcgBANQhWg2gcghg");
	this.shape_7.setTransform(-26.2,-29.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#72EBEB").s().p("AhJAdQgBgmAegUQAWgPAWAFQAZAFAeAYQAeAXgRACQgogNgmAPIg1AYg");
	this.shape_8.setTransform(-29.2,-40.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8089DD").s().p("ACkEbIgIgCQAzAJAygnQArgiACgZIABAGIABgYQAEAVAAAUQAAAlgUAZQgXAegsAAQgWAAgjgYgAErCwIABgLIABAQIgCgFgAkIi6QgrgkAAgfQAAgfARgNQAEgDARgGICEBbQgTADgWAZQgWAZgCAWQgNgLgxgjg");
	this.shape_9.setTransform(-22.9,-29.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F0FF7A").s().p("AB1DsQgWgBgJgGQgJgGgLgEQgLgDgfgnIgBgHQBHAdAfgEQAfgEAcgXQAUgRAYgsQAIASAAANQAAAqgkAbQgfAXgPAEQgLADgPAAIgLgBgAjrigQAAgOAYgaQAXgYAUgMIAxAlQgRgHghAeQggAdAAARQgigWAAgIg");
	this.shape_10.setTransform(-18.3,-26);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFCC99").s().p("Ai9CoQgCgRADgRQAEgRA0gsQA3gwAIgjQAoAKAQAAQApAAAWgPQAJgGAKgSQgFgCgPAFQgSAIgSAAQg5AAgdgPQgWgLAAgRQAAgqAugdQAqgcAyAAIATABQAAACALADQgKAFgHAGQgMALAAASQAAASAaAlQAjAyAyAEQANgBAFgIQhfg2AAgfQgIggAfgJIAAABIAigCQAXgBAoAiIAMAbIABAIQACASAAAeQAAAfgBAAQgFAZgPAbQgdA2hHAAQgkAAgVgSQgdgZgMgFQgTARgsA0QgrArglAJQgNADgJAAQgQAAgCgKgAjRgdQgIgNALgdQAMgdAmgsQAngtBYARQgXABgiAtQghAtAEAZQgMAUgIACQgJACgKAHQgLAGgSACIgDAAQgPAAgIgMg");
	this.shape_11.setTransform(-17.6,-19.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFCC99").s().p("AggDjQgkgFgggQQgQgIgJgJQgKAAhKAKQgdAAAAgVQAAgZAUgRQAZgWA0AAIAjACQAAgFgNhhQgPhlAAg5QAAgpAIgVQAIgUANAAQAOAAARAXQAZAjAABAIgCAnQgCAigDAOQgUgIgUAQQAIASAKgHIAsAGQAxAMA4AXIAuAVQAHAAACgCIACgEIgIgGIgRgJIAHgEQAdgXAmgvQAdgkAMAAQATAAACAYQACAcgfAgQggAjgvAsQgkAjgCAEIAEAAIAEACIABgDIAAAEQgLAggsAeQgnAbgeAAIgKAAgAAyAOIgWgEQgLgCgSgIQABgDgBgBQAbgjAfhTQAWg9AXAAQA0AAgjBlQgPAugZAfQgSAUgKAAIgBgBg");
	this.shape_12.setTransform(-11.6,-30.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#72EBEB").s().p("ABdBJIADgYIAIAHQAIAIABAEIgIAIgAhwgGQAEgdAFgMQAKgUAXgIIAlAbQACAkAFAjIAFAfg");
	this.shape_13.setTransform(-24.2,-39.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F0FF7A").s().p("AAnDnQgNgIgLgNIgIgJQAbAHARAAQAnAAAbgTQALgJAigkQADgDAMgiQASglAlgVQAFAOgJAeQgKAigVAeQg3BThRAAQgJAAgNgJgAjpirQAEgDAQgdQAPgaAOgKIAmAaQgLADgSAVQgXAaAHASg");
	this.shape_14.setTransform(-18,-26.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8089DD").s().p("ADdElIhEgZQAygaAngqQAjgkAGgYIADgLQAWAbATBKQAAAogkATQgVALgWAAQgJAAgSgHgAk1joQgQgigBgQQAAgRAaAAQAWAAAyAeQAVAMAqAcQgNAFgOATQgRAVAAAUQhUghgQgjg");
	this.shape_15.setTransform(-21.7,-28.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFCC99").s().p("Ag6DZQgggKgTgLQgJgEgTgBQgoAAgsADQgYgBAAgVQAAgYAVgRQAYgTAvAAIApAEIACgZIgIhbQgIhTAAgbQAAhzAhAAQAUgBAQAhQAPAgAAAqIgEAtIgHA7QgVgDgFABQgHABgIAIQAHAIAAACQAtgCBNAkIBQAmIAJABQACAAAAgGQAAgKgCAFIgMgGIgKgFQA2gqAigmQAVgYALAAQAxAAg1BGQgyBEhPA3QABABAEgCQADgBAAAFQhDBRgvAAQgLAAgegJgAAAAEQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAAAQASgeAxheQAagxATAAQAeAAgEA0QgDAqgMAVQgXAkgaAZQgUAVgEAAQgFAAgtgUg");
	this.shape_16.setTransform(-10.3,-31.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#72EBEB").s().p("ABoBKIABgDQABgEABgIIAJAGQgLAJgBAAIAAAAgAhzgEQATg3AXgOIA5ApIAIBjQhrhEAAgDg");
	this.shape_17.setTransform(-23.8,-39.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F0FF7A").s().p("AArDnQgMgIgYgXIAWAFQAPADAHAAQAjAAAVgKQAXgLAggiQAGgHAZgsQARgdAbgJQAFAog4BBQg9BGg/AAQgIAAgLgIgAjsipIAQgjQARggAOgCIAnAaQgRANgMANQgXAZAIASg");
	this.shape_18.setTransform(-17.5,-26.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#8089DD").s().p("ACcEJQA5gVAng2QAMgRAYgwQAYAbARBJQAAApgjATQgWALgYAAQhFgIgXgXgAk1jxQgmg1AkgBQAkgBAgAUQApAdAjASQgNAHgNASQgQAVgCAUQg8gZgmg1g");
	this.shape_19.setTransform(-21.4,-28.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFCC99").s().p("AAEB8QgvgzgsgMQgzgEgagRQgWgPAEgVQAFgSAagPQAegPApAAQAtAAAXAUQARAXAJAFIAGgBIACgDQgMgZgYgTQgggYgoAAQgHAAgaAGQgaAFgLADQgIgTgJgLQgCgPAPgKQARgLAZAAQAhAAArAQQAOAGAaANQAGADAMAMQAMALACABIADgBIACgFQgIgUgsgdQg3gigvAFIACgBQALgHAXgIQAcgJAVAAQBGAABFA+QBPBFAABeQAAAlgSAdQgbAsg6AAQghAAgsgsg");
	this.shape_20.setTransform(-23.3,-21.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#72EBEB").s().p("AAPApQgIgCgUgCQgWgCgmgOQglgNAAgNQAAgOAIgWQAJgdAKAAQAKAABeA0QBhAygIABQgLAMgFAJIgMARQgwgYgTgGg");
	this.shape_21.setTransform(-24,-44.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F0FF7A").s().p("AB/D4IAOgJQAdgnADgKQAGgQAAgxQAAgsgFgSQgLgkgtgwQAcAAAPALQAnAaAABTQAABWgdAmQgTAZgYAAIgBAAgAjHivQAFgHAKguQARglAvAhQgbAWgHAOQgFAHgDAQIAEARg");
	this.shape_22.setTransform(-20.9,-29);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#8089DD").s().p("ADRD4QANg8AAgVIgCggIgDgeQAzAQACgCQACgCAEgJQgGgPgegMQgggMgCgCIgegpQgOgOgbAAIgcgBQgNgDgMgRIAZgrQBLAgBJA3QBIA5gBAxQgCAxgPATQgPASgWAOQgOAJgXAAQgMAAgOgCgAk3jMQgigtAzAAQAMAAAUAFIASAGQACgDBHAkQgGAGgPAdQgOAdgBAIIABAFQhIgeghgug");
	this.shape_23.setTransform(-21.4,-34.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFCC99").s().p("Ag4CSQgQgSAAgVQAAgTAWgxIAag3QgPADgVAaQgMARgYAmQgKAOgFg0QAAgRALgZQATgsAmgaIgKgDQgWAEgUAdQgVAdgIADQgEgHgFgTIgFgSQAHgZARgZQAjgxA2gBQAvABA8BBQA9BBgEA/QgEBBglAOQgmAOg4gFIgHACQAJANAKAIQAGAGAAADIgLAKQgIAEgRABQgYgBgSgSg");
	this.shape_24.setTransform(-25.1,-14.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#72EBEB").s().p("AhIASQgLgIAAgOQAAhDAbAAQAHAAAdANIBoAxQgfAVgEAJIgOAzQhZgqgSgMg");
	this.shape_25.setTransform(-17.1,-42.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F0FF7A").s().p("AAwD6QANgbAIgNQAOgXgBgvQAAhAgjgtQgTgZgegZQA7gXAnBSQAdBAAAA+QABAagHAUQgEAQgIAIQgLAOgmAAIgKAAgAA2hPQgDgDAAgHQAAgSANgXQARgbAXgFIAkAVQghASgIAHQgLALgLAoIgXgOgAiEiuQgHgOAAgUQAAgPAIgMQAIgOAQAAQAGAAAKACIAIACIgNAYQgLAWAAAVQAAAHADAOIgFAAQgPAAgIgRg");
	this.shape_26.setTransform(-17,-26.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#8089DD").s().p("AC/DyQgVhogZgpQARgPAUgMIAngXQgUADgdgFQgcgEABgXQACgVAVgbQAVgbAHADQAIADBFAxIAeAbQALAKAMAWQAPAZACAPQgDAygnAnQgnAnhIAYIABgHgAkXifQg/gcABgUQAAgVANgLQAKgJANAAQAUAAA4AQQA9ASBQAfQghAlALAuQh2glgzgWg");
	this.shape_27.setTransform(-21.7,-34.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFCC99").s().p("AhfBZQhxhHAAgcQAAgDAFgHQAIgJANgIQBVBoAdAAIAKAAQACgOg3g0Qg5g1AAg0QAAg0ApAHQAMATAAAKQAAA3AlBBQAqBMA2AAQAGAAAAgCIACgFIAEgGQhRgigghfQgMgnAEgcQAEgcAUAAQAPAAAeAqQAbAqATAUQASAUAlAWQAlAVAKACQAFgCACgCQABgCAAgFQAAgMgXggQgXgggGgfQgGgfAQgMQAPgLAIAAQAdAAAVAoQARAhAAAaQAAAHAFASIAFASIgBgLIgCgJQAUBBAAAWQAAA7gUAcQgZAhg9AAQhPAAh3hMg");
	this.shape_28.setTransform(-83.8,-14.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F0FF7A").s().p("AjQDsQgUgFgJgDIgRgLQA5AKAbgzQAbgzABgcQAAgdgIgiQgIgigJgVQAigFAQAYQAMAPAAAbQAABTgVA5QgWA8giAAQgGAAgUgEgACWAGQgDgEgBgIQABgIAQgNQAUgQAtgSIAMADIAPAbQg+AAglAuIgGgJgAA4iZQgHgOAAgJQAAgQAYgYQAZgXAPAAQAFAAAFADQAIAGgBANQgJAEgbAdQgbAcgFALg");
	this.shape_29.setTransform(-46.4,-16.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#72EBEB").s().p("AhJgTQAAgIAZgbQAagfAOAAQAHAAABADIAAABIBKBwQgLgBgmAZQgfAWgHAIQgohJgUgfg");
	this.shape_30.setTransform(-31.2,-27.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#8089DD").s().p("AATFSQhNgFgqgIQgqgJhKgcQALgNARgzQAWhAgGgpQBxAkArAFIBBAIQAYACAagFIAggGQgEgFglgIQgJgKAAgUQAAgTAsgeIAzgHQATApAIAVQAOAkAAAwQAABAg8AkQg1AhhDAAIgSgBgAhoi5QgngwgFgZQgEgZAEgUQAEgUAWgPQAXARAoAvIBKBaQgOAHgSARQgcAXgGASIg1hCg");
	this.shape_31.setTransform(-37.9,-23.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFCC99").s().p("AAuCpIgDgBIACAAIgJgIIgHgFQABAAgMgMQgXgZAAgIIABgFIAAAAIgDgBIgCAAIhwgMQhxgLA1g3QA1g2AdgGQAdgHAJAAQAoAAAdAXQAeAZAOAJIAHgEQAEgDAAgFQAAgEgVgTQgOgOgpgPQgogOgWAAQgmAIgGACQgGACgzAeQgPAAgUgXQgTgXACgTQABgTAYgSQAXgRAeAAQA/AAAZAGQAvAKBDArQAlAXAKAPIALAQIALgMQgWhSjQgrQALgYAXgIQASgFAsAAQBYAABLBRQBQBYAAB2QAAAngrAnQgWAVgRAIQgMAHgQAAQgnAAgjgggAgEBoIABAAIAAgBIAAgBIgEgDIADAFg");
	this.shape_32.setTransform(13,-58.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#72EBEB").s().p("AhOAKQgMgKAAgLQAAgaAggeQAcgbAPAAQABAAAkAeQAsAkAZARQgUAIgcAeQggAkgFAgQgrgxgpgkg");
	this.shape_33.setTransform(-33.3,-34.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F0FF7A").s().p("Aj8BsQAkhSAVgSQAbgXAoAiQgdAagRAUQgdAmgEAjgACnAMQg4glAAgoQAAgJAIgkIAcgBQARAAAGAIIAWAlQAQAZAtAQQAhALATAAQAzAAAYgYQANgNAWgbQgfBCgVAZQgfAogkAAQhGAAg7gpgAmOgnQgTgcAEgIIAPgWQACgFAPgMQASgNAUgKIAhAdQgUAIgXAcQgaAgAAAbg");
	this.shape_34.setTransform(-5.4,-34.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#8089DD").s().p("AgUDMQgXgHg3gYQBDhyAcAAIAmAFQAnAFAPgDQAPgCAtgMQAsgLAMgIQBOAzAxAPQAgAKAhgEQhuBvjMAAQhFAAgigMgAlohXQgphIAGgjQAFgjAlAXIAsApIAyAsIAHAGQgcAFgUATQgPAOgQAeg");
	this.shape_35.setTransform(-15.3,-37.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgDABIgBgPQABgOAEgDIADAIIAAA0IgEADQgDgHAAgYg");
	this.shape_36.setTransform(37.3,-46.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFCC99").s().p("Ah5CwQhphCAAheQAAgSAdgoIAzhCQADgFAbhFQASgwAaAAQASAAAPAMQATAOAAAWQAAArgpA4IgrA0QABAHACAAIABgBQAAgHAPABIAeAUQAeATAHACIAvAPQA0APAJABIBSAKQArgHgEA5IgBABQgygChBgYQg/gXgPgBQgGAAgGAFIgEADIANAHQAOAGCHAxQBAAXAAAaQAAAZgNAJQgJAHgRAAIgrgEQAGgsgxgYQgngTh1gUIAGAHQANAWBJAXQBIAYAHARQgNASgTAJQgUAKgXAAQhMAAhXg3g");
	this.shape_37.setTransform(54.5,-65.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#72EBEB").s().p("AgtApQgzgiAAgMQAAgOARgeQAVgkAWAAQAEAAAXARQAbAXBPAsQglAEgPATQgNARgHAvIhGgtg");
	this.shape_38.setTransform(-29.1,-38.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#8089DD").s().p("AgOC5QgbgMgwgZQAQgsAUgeQATgcALAAQALAAAKAEIAXAPQgZALgBADQAEAEAAAEQAjAJCEhPQCDhNAyg8QArBgA9AXQg6BIhYA6Qh5BQhxAAQglAAgwgYgAm/idQgOgzAyAAQAJAAAfAYIBNA8QgVAEgTAhQgKASgHAWQhRg4gPg2g");
	this.shape_39.setTransform(-10.1,-39.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F0FF7A").s().p("AjiDDIguggIATgxQAXgpAfAAQAHAAARALIAQALQg7A8gHAogAEyAKQhHg7AAhNQAAgUAHgJIAcgnIADAHIACAUQgMAjAqA2QAxA/BpA2QgbAYgPAAQgyAAg9g1gAnKAVIASglQASghAagDIAnAdQgcAIgTAaQgPAXABASg");
	this.shape_40.setTransform(1.9,-45.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFCC99").s().p("AAKDtQhDgGhPhQQhPhRAAhLQAAgtAegaIAjgdQAFgEA3hHQAgg6AgAAQAWAAAIASQAIANAAAOQAAAlgfAfQgyAvgTAhIACAAQAagEAZAXQAjAfAFAEQAyAYBnAZQAdAHALAJQAOALAAAVIgBAKIgBAEQgPAAhRgiIhbgmIgSAHIAJAFQBKApBTAmQAqALACAbQADAbgJAMQgIAMgRAAQgrgKgJgBQAJgwgygcQgVgLh7gqIAGAJQAgAaA8AXQA+AYgBAeQgCACABAJQACAIgOAMQgJAIghAAQgRAAgYgCg");
	this.shape_41.setTransform(54.4,-59.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#72EBEB").s().p("AhggIQAAgQARgcQAWgiAXAAIAKAGIARAMQAdAaBLAqQgoAAgUAhQgLATgEAjg");
	this.shape_42.setTransform(-29.3,-37.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#8089DD").s().p("AgVDMQgbgOgmgZQAJgPAXgvQAVgnAPAAQALAAANAJQAPAJAFACQgZAMgBAEQABADgBACIAGAAQB6ggBWg1QA4ghBWhPQANAQACAJQAKARAXAgQAYAdAeASQhWBMgvAgQiJBdhrAAQg2AAgwgagAnJipQACgcAIgbQAHgcCcCMQgMAEgWAdQgWAdgDANQh0hpACgbg");
	this.shape_43.setTransform(-10.9,-40.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F0FF7A").s().p("AkLCiQAPgwAZgWQAQgPAOAAQALAAAPAHQAPAHADAHQgUANgQAXQgPAWgRAogAErAIQg0hAAAg5QAAgUAQgVIAhgpIgDAJIgDALIgBAcQAAA9AjAxQAmAzBYA6QgPAJgMAAQhCAAg6hJgAnBAQQADgVAWgaQAXgZAQAAIAmAeQgfAJgSAZQgRAXADARg");
	this.shape_44.setTransform(0.9,-44.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFCC99").s().p("AiGCdQhShQAAhUQAAgqA2gnQA9gsAKgcQANg8AwgNQATgGALALQAPAMAAAcQAAAngkAnQgvArgUAVQAagBAbAZQAjAeAHAEQBZArBOARQAXAGAFADQAHAFAAAQQAAARgDAGQAFABgKAAQgJAAgagMIgsgSIg2gcQgkgTgLAAQgGAAgGAEIgGADQBYAxA1AaQA0AbAKANQAJANACARQACARgLAIQgLAHgMAAQgMAAgXgFIgZgGQAXgmg5glQgugdhmgfIAKAKQALAJBKAlQBNAkgBASQgCARgMALQgNALhGAAIgBAAQhEAAhShPg");
	this.shape_45.setTransform(54.6,-58.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#72EBEB").s().p("AhOAIQgSgLAAgFQAAgWAbgdQAYgbAMAAQADAAANAHQAOAHAYAVQAbAWAxAdQgmALgOAQQgPAPgIAtQgugmg2gpg");
	this.shape_46.setTransform(-29.4,-37.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#8089DD").s().p("AgEDFIhcgvQARgsAVgaQAWgbARAGIAWAJQAHAEADAAQgVAKgCADQADADgCADIACABQB4gjBLgpQBOgpBPhNQgBAGAUAcQAZAkAZAWIAiAbQgtA3hqBBQiDBQhgAAQgnAAgjgUgAmghsQggguAAgZQAAg/BHAtQAHAFBNBAQgbAKgOAUQgOARgEAdQgfgGghgyg");
	this.shape_47.setTransform(-10.1,-38.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F0FF7A").s().p("AkKCjQAQgtAZgYQAVgTAUAAQAJAAAKAJQANAOACABQgaAPgTAiQgIANgQAkgAEpAFQgug8AAg7QAAgNAQgYQAPgaAXgTIgJAeQgCAIAAAaQAAA5AsAzQBBA8AsAsIgKAFQhTgEg5hMgAm+AQQADgVAWgaQAXgaAQABIAnAeQgeAFgTAaQgQAYABATg");
	this.shape_48.setTransform(0.6,-44.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFCC99").s().p("AAEDqQg9gChUhRQhOhLAAhKQAAgZAcgdQAIgIA7gyQAJgHAQg9QAVg4AqAAQAVAAALASQAHANAAARQAAAbgiAvIg9BJQAJgGAGADQADACAMALQAfAdA3AXQA7AYBbARQAWAFAHAGQAIAIAAAVQAAAMgDACQgVAAhUgiQhQghgCAAQgGAAgHAEIgFADIAEACQA9AiBbAoQA9AeAAAZQAAATgOAKQgKAIgOAAQgGAAgSgDIgYgGQAGgugkgWQgggUh/gkIAGAJQAUAYBDAbQA+AXAIAUQgKAXgQAJQgMAHgpAAIgZgBg");
	this.shape_49.setTransform(54.7,-61.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#72EBEB").s().p("AhggHQAEgDAUgrQAQggAVAAQAEAAAXARQAdAZBMArQg/AAgKBWQgKgFhuhYg");
	this.shape_50.setTransform(-29,-37.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#8089DD").s().p("AgbC7Qg9gbgEgOQARgsAVgeQASgbALAAIAsATQgTAQgFAFQgCAAAAAAQgBAAAAAAQABAAABAAQACAAACAAQA8gOB2g9QB2g7A1hEQAUAqAKAOQAaAkAvAcQhTBhh4A6QhoAzg4ADIgJAAQgzAAg2gZgAmrh+QgWgcAAgcQAAggAaAEQAZADAJAIQAIAIBXA/QgSAJgTAbQgSAZgDAQQg4gxgTgag");
	this.shape_51.setTransform(-9.8,-38.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F0FF7A").s().p("AkMCnQAIgeAOgZQATghAUAAIALAAQANAFAdAQQgVAOgPAXQgQAWgPApgAGCA/QgggPgcgWQg3gngSgyQgMgeAFgfQABgKAEgJQAEgKAIgKQAJgJAGgLIAMgQIgCAJIgDAHQgRAfAlBKQAtBYBhA5IgIAEQgMAFgIAAQgHAAgagNgAm7AZQgDgFAAgJQAAgLAQgVQATgcAWgBIAnAdQgZAFgUAaQgRAYAAAUQgYgUgHgJg");
	this.shape_52.setTransform(1.4,-45.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFCC99").s().p("Ah9CpQhhhHAAhfQAAgWAegbQAwgqAVgeQALgOANg1QASguAmAAQAyAAgVBUQgUAhghAnIgeAkIABALQAJgKAIAAQADAAATARIAZAUIAUALQAMAGAzARQAsAOBEAIQAwALAAAqQAAAGgBAAIgDgCQgRAGhSghQhVgigEAAQgFAAgHAEIgFAEIC2BWQAnATAAASQAAAWgOAKQgMAJgRgCIgqgHQAXghg6giQg4gihlgRIAFAIQAGAOArATQAiAPAWAFQAvAJAOAiQgEAIgRAJQgRAKgQACQgNADgJAAQhRAAhVg/g");
	this.shape_53.setTransform(54.8,-62.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#72EBEB").s().p("Ag1AeQgpgbAAgJQABgJAQgfQAWgnAWAAIAIADIBiBBIAMAIIAJAIQglACgRAfQgIARgFAlQgQgMhAgsg");
	this.shape_54.setTransform(-29,-38);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#8089DD").s().p("AgHDCQglgRgugfQARguATgeQATgaALAAQANAAAMAIIASALQgVAOgBAGIADACQBDgEBog/QBkg6BLhQQAKAVASAaQAiAyAqAXQhPBfh6A9QhpA0g6ABIgJAAQg0AAgggPgAmqh6QgYgeAAgbQAAggAbADQAbACARATQARASBDArQgMAFgWAdQgUAdgDAOQg4gygSgXg");
	this.shape_55.setTransform(-9.7,-38.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F0FF7A").s().p("AkLCoQANgrATgWQATgWAWAAIARAIQAQAGAHAFQgFAGgbApIgiA1gAEqACQg5hAAAhAQAAgOAPgTIAdgoIgCAIQgVA1A3BNQA0BHBTAvIgPAJQgIAEgLAAQg+AAg6hEgAnDAZQAIgiAYgXQAQgOANgDIAnAeQgZAFgUAcQgRAYAAASg");
	this.shape_56.setTransform(1.6,-45.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#72EBEB").s().p("AhhgXQAHgZAdgQQAYgOAXAAQAJAAAqApQAtAoAQAJQgcgKgnAsIgXAiQgKgKhfhdg");
	this.shape_57.setTransform(-36.2,-35.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#8089DD").s().p("AAKDWQgYgMgBgJQAAgGAHgRIAIgbQAMgiAdgOQAGAAgDgEQgDgDARACQARACAwgMQAwgMABgEQAAgBAAAAQABgBAAgBQgBAAAAAAQAAAAAAAAIAVgHIAKgJQAzBWBZAPQhBApgiAQQg+AegwAAQhSAAgqgTgAkfgwQgNgLgKgMQAGAOgDAGQgEAFgEAAQgbAAAAgSQAAgtALguQAOg8AYgOIALgDQgCANAAAKIATAWQAbAiAxA3QgXgHgbAYQgcAZgEAWIgQgOg");
	this.shape_58.setTransform(-23.8,-40.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#F0FF7A").s().p("AjdBgQA0hEAgAAQADAAAZAOQgcAagLAhQgJAXACAQIhCgsgACFAfQgpgfAAhAQAAgDASgbQAVggAQgNIgBAOQgKA0A8AwQA9AvBRAAIAjAAQgfAbgOAHQgTAKgtAAQhXAAgsgjgAlzgtQgCgBADgWQACgVAlgUQAkgUgFAJIAaAiQgPgFgeAYQgcAXgFAOQgKgKgJgFg");
	this.shape_59.setTransform(-11.6,-36);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFCC99").s().p("AjgCYQg3gfAAg4IALgvQAMgvAPgiQAPgjA0grQA0grARAGQASAGAGALQAGAKgiAzQgiAygmAuIAIADQAIACAEAAQADAAAigYQAjgbAUgDQAUgDA4gXQA8gYAxACIApABIALAEQhAAMhHAiQgtAWgZAPIABAJIABACIABABIAHAAQAMAAApgXQAsgWCAghIgNAHQAlgQAdACQAdABAAAaQAAAah/AlQh+AmAAANQAAAHABABIADACIgBAAIAFABIA1gUQA8gUAkAAQAkAAAUAGQAUAGgKAKQhNAtiLAwIh7AnQhUAAgzgcg");
	this.shape_60.setTransform(34.4,-55.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F0FF7A").s().p("ABxEJQAHgFAKgVQAJgYAJgJIASgVQAGgIAAAHQgHAugPAUQgOASgkANgAiEiVQgOgLgOgQQgMgOABgCQAAgLASggQASghAPgMIAyArIgQAUQgnAjgDAkg");
	this.shape_61.setTransform(-22.8,-17.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#72EBEB").s().p("AhQAJQAAgEANgPQAYggAYglIBkBZIhhBGQhAhFAAgCg");
	this.shape_62.setTransform(-26.9,-32.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#8089DD").s().p("Ag0AZQgogrAAgkQAAgxAgAAIAKAFIARAKQAWASAuAsIA6AzQgeAJgTAdQgPAZAEAQQg6gwgbgfg");
	this.shape_63.setTransform(-44.9,-48.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFCC99").s().p("AiNDFQgVgiAAgqQAAg2AWhJQAUhFAWgiQAOgWA6gnQAtgfAUgJQg0AtgaAhQhDBTAABXQAAAKAFADQADgCADgEQAKhkBZhdQBThUA3gCQA3gDAKAcQAJAbgSATQgSATgzAkQgyAjgHAHQg4A/gUAqQgPAeAAAbQAAAKABAAIAGAAQgCgcA8hRQA/hUAkgHQAkgGAJAFQALAGAAAMQAAAagpA1QgpA3ATgbQg1A+gUAdIglA3QgiA7hKAAQgmAAgXgmgAjMB7QgIAAAEgUQADgUAGgUQAFgVAPgcIACAJQgIAjgDAgIgEAnQgEgHgIABg");
	this.shape_64.setTransform(-17.6,-9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},1).to({state:[]},1).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},3).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]},1).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},1).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]},1).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53}]},1).to({state:[]},1).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57}]},1).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61}]},1).wait(1));

	// Layer 1
	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AjHG6QgSgWgXgfQgKgLgNgnQgOgqAAgaQAAgVARgUQAGgHA7g4QAWgUgCgFQgIgTAAgNQAAgVAlgbQAjgZAWAAQAEAAAXARQAXARAPAAQAXAAApgpQAmgkAAgGQAAgNgUgaIhEhWQgOgRhshmQhfhbAAgIIABgVQABgPgCgJIAAhRQCTBJCsCiQC6CuAABUQAABOjCCgQAAAQAEApQAAAagnAdQggAYgJgBQgVABgFgHQgDgEgGgSIgLAGQgLAHAAAGIAGAKQAGANAAASQAAAOghAYQglAbgjgBQgYABghgog");
	this.shape_65.setTransform(-30.5,-14.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AisHKQgQgJABgSIgLAGQgDABgHAAQgiAAgLgkIgHgrIgLgfQgHgUAAgNQAAiSBXiCQBfiNByAfQhPhQgmgdQgXgSgxgiQgQgNgvgbQgmgfAAg5QAAgNAOgbIAYgrIB2BOQBlBDBGA5QDgCwAABqQAABrg8AyQguAnhIAAIgcgHQgbgIgEAAQgMAAgSApIgjBaQg6CDg/AAQgRAAgLgGgADaCJIACgEQABgBAAAAQABgBAAAAQAAgBAAAAQAAAAgBAAg");
	this.shape_66.setTransform(-26.2,-14.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AB7EbQhOgxAAgtQAAgKgIgGQgaAugtAjQgvAjgiAAQgUAAgLgGQgRgLAAgbQAAgwA+g5IAqgnQATgTAAgNIgMgTQgTAYggALQgUAHgSAAQgSAAgPgSQgMgRAEgdQAFgcAPgVQAPgXAMgLIiBhxQgtgngDgGQgPgeAAgPQAAgTARgXQARgXASgEIAVAFQAmAVBDAtQBeA/BBA1QAwAnAEABQAWgBA3AJQBAAKAFACQA4AUANA5IATBhQAMAcATA9QABBKgbAmQgXAhgqAAQgqAAhHgtg");
	this.shape_67.setTransform(-22.6,-28.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("ADvFDQglgEghgWQghgVgBADQgBAEgYAEQgYAEgXgKQgYgJgZgpQgXgogVAAQgVABgVAEQgWAFgfAAQgfABgJgFQgJgFAAgtQAAgsA0gVQA0gVAbALQgEg+gMgWIgEgJQgKgDhEgyQhYg/gWgOQgzgfgWgcQgcgjAAguQAAgNATgKQATgKANACQAMABBYAuQBYAuArAmQABgoAPgWQAMgSASAAQAgAAAZAjQAVAcADBYIABAQIAFAFIAWASIAIADIACgDIAEgJIAchFQAjhHAeAAQBGAAgcBpQgRBAgjA6IAGADQAKgMAlgnQAjglAMgJQAWgQACAAQAuAAABAdQABAdgJAYQgKAYg/BDQAZArAWAyQAZA5AAAWQAAAoghAbQgfAYggAAIgJAAgAA8g9IgBgCQABANAAgLgABDhcIAAgCIgDgDIADAFg");
	this.shape_68.setTransform(-20.7,-28.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("ACjEtQgrgXgGgBIgFAAIgTAEQgsgFgigsQgggtgrAAQgsABgfgDQglgLAAgbQAAgoAegVQAigXBHAEIABgcQAAgnghgTQgggWg7grQg7gshYg4QgxgqAAg9QAAgGAMgOQANgRAOAAQAgAMAxAYQBgAxBZA/QgFgoAQgdQAPgdAYAAQAVAAATASQAbAZAJAoQAIAogEAtQgDAmAUgCIgBAAIAKAAIABgCIgDAAIADgBQALgSAlhMQASgmARgJQAfgRAUATQAVATAAAwQAAAqgPAgQgQAkgnAlIAHAGQAigeA0g2QAYgZANAAQATAAAMAMQALAMAAAYQAAAXgrAwQgqAyAAADQAAATAiAzQAiAzAAAqQAAArgtAbQgjAVgkAAQgVAAgrgYg");
	this.shape_69.setTransform(-20,-28.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AAYEbQghgSgzgvQgcgbgkgLIgsgOQgggLgPgLQgPgMgDgVQgDgWAIgLQAJgPAUgJQgMgKgEgPQgFgPACgOQACgMAWgPQAVgPAAgDQAAgEAGgHQAKgMARgKQiVhagZgVQgggbAAgtQAAgQAPgNIgDAEQAMgLAGgCIAyAKQAuAIDcByQDbBzBOBLQBOBNgsBMQgQAcgeATQgbASgVAAQgcAAgNAJQgFAEgLAQQgTAehBAAQgnAAghgRg");
	this.shape_70.setTransform(-20.9,-31.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("Ah9EiQgGgLgGgXQgGgUgGgHQgLgPgEgLIgFgfQgEgcgPgZQgQgZABgbQABgcA2gwQA2gyA1AAQAQAAATATQASATAQAAQAtAAAJACQAPACALAGQhNg3gxgYQglgShtgsQgzgXhggeQg4gWAAgmQAAgeANgOQAQgUAqAAQAbAABmAfQB2AkBqAuQE3CHAAB6QAAAggjAvQgkAygzAbIgkAVQgbARgDAMQgCANgRAOQgQAOgZAAQgaAAgHgBQgIgBgOAAQgNAAgqAWQgnAWgKAAQhBAAgVgogACBAPIAJgGIgSgMQAIAGABAMg");
	this.shape_71.setTransform(-21.5,-28.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("ABpFgQgQgDgmgLIgngNIgLgDQABADgZAFQglAGgfgHQgkgJgLgIQgRgOghgJIgqgMQg4gYhbg/Qhbg/ADgYQAEgYADgLQADgLALgLQAKgMAYAIQgXgzAMgaQARgkAkAAQAFAAAIAEQAJAEAEAHQAHgKALgFQAMgGAOAAQAOAAAMAQQANAQAPAfQAOAdBOAsIgEgIQgXgzAAgMQAAgeANgVQAOgXAZAAQAiAAAeAqQAcAnAAAlQAIAAAWAGQAVAGAHAFQAGADAMAYQALAVByAuIgXgLQAgAMA0AGIAyAFIAEAEIgCgEQACAAACAAQABAAAAAAQABgBAAAAQgBAAgBAAIgFgDIglhXQgjhPgYgeQgvg8gigvQgfgqAAgEQAAg9AOglQAUg1ABgGQgHgEAFgHQCZCABvC6QBjCiAABWQAAA9g0AyQhAA8htAAQg0AAhUgPg");
	this.shape_72.setTransform(-59.9,-24.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgJFSQgkgEg2gMQgtgMghgTQgxgdgQgMQgQgNgtgoQgsgogfgpQgfgogZgpQgZgpAAgHQAAgFABgFIAQATIACADIgCgmQAAgMAEgcIAEgOQAFgPAAgGQAAgJgIgNIAKAFIAFABQAFABABgBIgOgRQCTCSB1BMQBeA/AqAAQA0AAAcgIQAQgEATgKQAUgKAGgaIAOhFIhZgMQglgPAAg0IAMgqQgcgTgXgqQAAhQA0gUQAcgJAkAAIAIgLQAMgOAXgRQARgMBFgGQAuAAAeAOQAUAJAmAhQCABrgJClIACARQgHBagZAkQgMAThPBPQhEBGhNAZQg3ARhdAAQgcAAgZgDgAHFgIQADAdABgCQABgbgFAAIAAAAgADKgCIACACIANgKg");
	this.shape_73.setTransform(-8,-47.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AkfFGQhVguhfhFQhehHg9g/QhBhFAAghQAAgXAVgZQAUgYASABQALAAAJADQAPAFAVAQQAgAYAhAYICUBeIBgA8QBKAsAMAAQASgEAbgLQA2gVAzgjQBfhDAiggQAWgSAAgKIgLgZIAFAKQAFALgGgWQgGgWAeglQAegmALgGQAKgGAXgZQAXgZATglQALgWASgoQAghCA3ABQAfAAATATQARARgBAfQgBAegXAsQgYArgZAVQArA0B4APIBSAJQAnAIAKANQAIAMgBAcIgCAdIAMATQALAUAAAMQAAAagUAUQgWAWgcAAQgIAAgegIQgEgEgKAAQgFAAgXARQgXASgnAAQgUAAgkgIIghgIIgdAWQgdAVgHAAQgGAAgIgDIgtgSQgbBEiEBOQiJBThwgBQgxAAhdgwg");
	this.shape_74.setTransform(11.3,-53.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AktEtQhng5hnhfQg4g0g3hCQg6hDAAgSQAAgZAbgYQAOgMANgJQAAgVBpBJQBmBMAvApQAwApCXBIQA0AAB/hWQB9hRAAgXQAAgFgFgHQgFgIAAgLQAAgLAcgrQAcgsAPgHQAPgGAbgTQAggXAGgGQAPgTAqg5QAngxAYgIQAhgLAbATQAbAUAAAmQAAAigUAcQgRAYg2AyQAkAmA3AVQAdALA/AOQA0ALATAMQAdASAAAiQAAAFgEAPQgEAOAAAFQAAAKAFAQQAFAPAAAMQgBAMgNAUQgOAVgWABQgWACgWgFIgYgGIgZAPQgXAOhGgLQg4gVgJAAIgRAMQgRAMgYgDQgYgDgPgKIgNgIQACACglAjQglAjh0BWQgkAVg0ATQhAAWgqAAQhOAAhrg7g");
	this.shape_75.setTransform(10.4,-49.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AnfCpQhShHg8hGQg6hBAAgYQAAgbAPgSQASgXAYABQAXACDECOQDECRAVgDQAVgEAdgMQBcgmAggWIA6gqIBUhIQgGgcAHgcQAJgiAWgQQAWgPAXgNIAcgRQAXgQAYgWQAVgUAEgGIAqhBQAegnAhAAQAgAAATAQQAWASAAAkQAAAugoAmQgsAkgKANQBPBDB4AdQAuAMAOAJQAVAOAAAeQAAAUgFALQgFAJAAADQAAAOAJALQAKAKAAAIQAAAigVAVQgSASgbAAQg4gUgHAAQgLAGggAEQghAFgcgCQgcgBgQgKQgQgJgGAAQgFAAgPADQgPADgmgBIgqgJQhsBihcA2QhZA3h3AEIgFAAQh3AAjVi3g");
	this.shape_76.setTransform(10.7,-49.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("Ah6FpQhXgCg9gjQg+gjgtgiQgsghhOg/QhOg+g1gzQg1gxAAgnQAAgbAPgTQASgZAUACQAVADDLCJQDLCLAfgDQAegCB2hJQBYg4AugmIAQgPQgEg1ATgjIALgVQAMgTARgPIABgBQAOgKATgIQAQgHAQgNQAUgQASgfIAcg0QAig8A1AAQAbAAASAOQAYARAAAjQAAApgbAnQgXAhglAZQAhAmA2ATQAdALBBALQA4AKAUALQAfASAAAmQAAADgEANQgEANAAAFQAWAhAAAJQAAAqgdAVQgTANgPAAQgOAAgWgIQgWgJgGAAQgEAAgOAKQgPALgHABQgYAFgNAAQgZAAgpgMIgqgNQgGAAgNAMQgMANgPAAQgHAAgRgIQgXgKgNgEQgyA2h/BUQh6BThVAAIgEAAgAB/gRIAAADIAAgGg");
	this.shape_77.setTransform(11.1,-50.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AiAFuQg0gDgzgSQgzgRgXgQIhWhAQg/gug2gwQg2gwgogdQgngcgGgLIgYgpQgOgaAAgEQAAgZAPgUQATgaAeAJQAfAJDDCEQDCCHAtgOQBygjBVhNQBWhLgCgDIgBgFQAAgDgKgXQAAgKACgKQACgJAbglQAbglADADQACADALgIIAYgQQANgHASgSQARgSAMgYQANgYAOgkQAeg/A/AAQAfAAARAXQAPASAAAXQAAAhgQAoQgXA3grANQA7AsBlAaQAzAMAwAIQAUAHAJAXQAHARAAATQAAAEgEAHQgEAHAAAFQAAAFAMARQAMARAAANQAAAWgSAVQgVAZgdAAQgSAAgPgHQgOgIgKAAQhGAZgcgEIhXgNQgXAWgHADIgJAEQgFACgngKQgYgFgIgEQgEAIgPAUQgWAegqAdQgrAdg3AhQg3AggyAWQgtATguAAIgMAAg");
	this.shape_78.setTransform(11.4,-51.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AinE2Qh0gChLhBQhMhCgwgwQgvgxgVggQgYgigagOIgMgEQgGgEAAgHIAEhVQANhTArAAQABAACRCUQCQCSAmAAQAlAAAVgGQAUgGAfgMQAggNAFgIQgLgyAzg4QANgQAZgZQARgUACgLQAUhnBPg3QA6gnA0AAQAMAAAKAKQAKALAAAPQAAANgHAVQgMAkgcAiQBWgfBBgPQBCgPAmAMIAnANQABABAAAAQABAAAAAAQABAAAAgBQAAAAABAAQACgCAVgFIAcgEQAjAAAOALQAOAKAAAVQAAATgIAOQgOAZgnAVQALAGAJAMQAIAJAAAEQAAAtiAAtQiJAqgUALQgSAJgeAeQgeAdgFADQgUAQgsAUQgyAYghAUIAUgJQiLBZhxAAIgGAAgAItg0QgBgIgEgFIgCgBg");
	this.shape_79.setTransform(3.8,-45.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AhBF1QgWgQgPghQgEgIgGgdQgMAAgMgIQgGgDgGgQQgIgTAMgtQAMgtAcgnIAZg0QAYgvAMgIIililQhohXAAgvQAAgxANgbQAMgXAQAAIAVAAQAJAEAUAPQBVBKCDBvIBMBFQAeAaACAAIAigIQAjgKAKgFQAFgCAegEQAegDAOABQAPACASAMQATANAAAbQAAAegQAVQgSASgGAGQARALAJAVQAHAPAAAKQAAAfgvA7QgXAdgXAbIAMAbQAABZhcArQg8AchCAAQgsAAgcgVg");
	this.shape_80.setTransform(-25.5,-22.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_65}]}).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[]},1).to({state:[{t:this.shape_73}]},3).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.4,-62.5,55.8,96.4);


(lib.FIZ23RARML001 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("AgoCKQgqgRAAgPQAEgOALgJQAOAJATABQAPACAKgDIhBg0Qg4gpAAgRQABgkArgwQAsgyAiAAQAsAAAyA4QAsAxABAcQgBAHgDADIgEAFQAAgMgDgFQgCgFgHgDIgKAIQAEAGADARQADARAAAJQAAAxgfAIQADgfgIgCQgLACgIgHIAEAFQABAAACAHIACAPQAAAhgSAWQgRAYgcAAQgUgGgWgJg");
	this.shape.setTransform(36.5,23.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#72EBEB").s().p("AAAA/QgEgJgcgbQgfgbgPgBIBYhFQARAPAeATQAUAMABAIQADANhRBKg");
	this.shape_1.setTransform(20,-25.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0FF7A").s().p("AgxE3QgagcAAgSQAAg/A9hOQA8hQA7AAQASAAAeAWQAdAVAAALQgBAKgCAMIgHAKQgGgMgUgIQgPgGgFAAQgjAAg3A0Qg7A6AAA6QgBAaANAMQAHAGAKAEIgDALQgDAJgHAAQgRAAgZgdgAhVhKQgHgWgRgQQgWgWghAAIgLABIgGABQAzg2ALAAQAKAAASAMQAWAMAMAQQAkAug/AjgAA9jbQgBgUgagZQgUgUgMgEIBIgzQAdATADAFQADAEAJArIg5Axg");
	this.shape_2.setTransform(23,-5.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8089DD").s().p("Ai+D+QhOhJAAg2QADgaAIgYQAPgxAXAAQBIAAAPAeQAIAVAHAOQAMAZAXAWQAeAbArAsQggAZgfAqQgcAmAAAKQgygjgoglgABLjUIACgCQAlgYBAglQA1gfAlgTIABAFQAAAGgFAiQgGAiAAAOIgIAFIg8AhQgOAIgZARQgYARgNALQgDgxgkgWg");
	this.shape_3.setTransform(25.1,-19.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC99").s().p("AgdB9IgaheQgMgpgIAAQgjAAgkgtQgigrAAggQAAgtAKgUQASggA6gVQBZgaApAcQBfA7AiCRQAQBDAABWIAAAeQgBAJgEAIQgEgqgahNQgjhlgxhOIgMAIQA1BkAfB3QAQA9AFAqQAAA4gdAAQgWAAgGgvQgLhUgMglQgOgtgTgsQgmhcgagFQALAWAxCGQAzCLAAAKQAAAcgHASQgIASgMAAQg1AAgmiIg");
	this.shape_4.setTransform(24.8,6.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#72EBEB").s().p("AgXBIQADgKgRgXQgTgZgZgLQAMgHApglQAlghARAAQALAAAWAcQAXAdAAARQAAAPgSAHQgoAQguAlg");
	this.shape_5.setTransform(17.8,-29.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F0FF7A").s().p("Ag8DpQhFgRgMgIQgbgUAAg+QAAgzAjgjQAagbARAAQgSAbgHANQgLAWAAAXQAAAvAXAnQAXApAjAJgAiAgKQgRgMgNAAIgLABIA/g/QAFAAADgFQADgGAFAAQAOAAAXAYQAaAagEAVQgDAAhOAYIgQgKgABZieQgSgbgTgNQBHg5AeAmQARAWAAAkQAAAGgZANIgmASQgBgMgRgYg");
	this.shape_6.setTransform(16.9,-18.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8089DD").s().p("AkPDUQgGgYAAgIQAAgkAJgTIAYgqIAyAVQghASgSAoQgQAhAAAfQAAAKAEAOIgEAAQgEgIgGgegABxh4QgSgbgSgFIAIgCIBegyQBKglALgJIAOAwQAABUiZAsQAGgSgSgcg");
	this.shape_7.setTransform(23.6,-28.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCC99").s().p("AAzBzIgzhBIghASQgmARgRAAQgbAAgegLQgigOgOgVQgDgEgLgoIgCgaIgEABQgFAAAGgWQAGgYAMgZQAkhHAxAAQAHAAAKADIALADIgCgEQALAIAEAEQAHAIAAAVQAAAXgmAZQghAWgkAJIgBABIAKAGQAJAEALAAQAxAAAlgwQASgYAJgaQAAgDgEgJQgFgOgJgJIgHgFIAFgBIAMgBQAwAAAvAoQAsAlAAAhQAAAWgVAJQgPAGgkAAQgfAAgOgDQgigFgPgRIgCAMQAfAeAPAGQAaAJBCgIIgDAPQAKAhAsAwQAnAqAAAaQAAAIgOAJQgNAHgNAAQgVAAg1hBgACpgNQgZgUgWgMQAHgOAAgLQAAgVgMgXQgRggghgQIgPgJQBDgKA1A9QAsAzAAAlQAAALgHAJQgHAJgIAAQgLAAgOgKg");
	this.shape_8.setTransform(13.6,-18.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F0FF7A").s().p("AjWC/QgmgYAAgxQAAgGAEgPIAGgTQACACATAjQARAhAMAHQAJAHAhAIQAgAIAIAAQAmAAAagLIgMAMIgCgBQgVALgYASQgGAFgdAAQgrAAgfgVgACuhIIAAAAIgIAHgAC6igQgUgSgXgDIA1gdQAXAHAQAYQASAYAAAcIgmAaQgFgkgYgXg");
	this.shape_9.setTransform(15.3,-25.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#72EBEB").s().p("AAxAwQgmgkgYgMQgVgIgjgBIANgHIAfgTQATgNAFAAQA1AAAOAlQAAADAEAqIgUAPg");
	this.shape_10.setTransform(27.8,-37.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8089DD").s().p("Ak6D3QgWgbAAgrQAAgFAEgRIAGgZIgCAYIAHggIAAAWQAOA4AfAaQAYAUAyAKQgNALguAGQgfAAgWgagADIioQgVgegRAAIBKgrQA1gfAQAAQAOAAAKASQAIARAAASQAAAegfAVQgyAcgnAYQAGgVgXgfg");
	this.shape_11.setTransform(20.3,-27.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFCC99").s().p("AgPDRQgpgKgOgOQgTgUgIgUIgGgVQgMAGgTgHQgRgHgggWQgQgLgWgVQgdgdAAgOQAAgYAcAAQASAAAcARIBBAxQgHAKADACQARAAA5geQA4gdAKAAQAKAAARgHIABgFIgDgGQgBgBgVACIAAgFQACgQgJgoQgLgvAAgtQAAgTAGgPQALgaAdAAQAxAAACB9QgGB7AHAAQgBAQACAWQADAsAOAYIAFgBQAGgMALgFQAQgJAmAAQAdAAAKALQAKALAAAgQAAAKgHAIQgJAMgRAAQgHAAgogJQgngJgMAAQgMAAgmAUQgnAUgIAAQgTgCgTgGgAiIg1QgUgdAAgsQAAgXAHgPQAHgRAOAAQAUAAAaBIQAgBXAaAbIgyAZQgcgqgigpg");
	this.shape_12.setTransform(9.3,-31.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#72EBEB").s().p("AhCAyIAChDIBAglQAagRAGAAQAUAAAJAdQAGAUAAAaQAAAGggAOQgjAPgLAFIg2Acg");
	this.shape_13.setTransform(28.8,-39);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F0FF7A").s().p("AieC8QhCgpgSg7QAVAJAaAFIARAdQASAfAOALQAGAFAVAHQAbAKAUAAIAXgCQAQgDALgDIAQgJQgOAPgLAJQgVATgXAAQgfAAg0ghgADMiRQAAgKgMgTQgOgWgQgJQAugdAQAbQALAqAIARIgrAUg");
	this.shape_14.setTransform(17.3,-26.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8089DD").s().p("AlHDgQgSgXAAgVQAAgEAMghQAOgkAIgLIAIAFQAHAfALATQATAkBSA3QgUAGgWAEQgTAEgKAAQguAAgagggAjPAPIgDgDIAHAFIgBAAIgDgCgAiAgkIAQgJIAMATIgVAFgADfiLQAAgGgPgcQgPgdgHgFQBNglABACIATgHQAUgGAOAAQAOAAAJALQAHAGAAAGQAAAXgqAdQg3AhgcATg");
	this.shape_15.setTransform(20.9,-29.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFCC99").s().p("AhPCsQgGgLgIgVQgGgOgEAAQgXAAg2gaQhHgjAAgqQAAgZAbAAQARAAAfATQAoAdAZARQgHALADABQANAAA5geQA4gfANAAQACAAACAAQABAAABAAQAAAAAAAAQgBgBgCAAIAXgHQAAgBAAAAQABAAAAgBQAAAAAAgBQABAAAAgBQAAgEgBgBIgCgBQgBgBgWACIABgFQADgQgLgoQgMgvAAgsQAAgUAFgOQALgbAdAAQAuAAAGB9QgCB6AFAAQgCALAAASQABAmAVAnIAFgBQAJgUAbgFQAJgCAeAAQAZAAAJALQALAMgBAeQABANgLAJQgKAJgMAAQhYgQgJAAQgQAAghAUQghAUgUAAQhFAAgegtgAh+geQgghAgBgdQAAgXAHgQQAHgRANAAQAaAAAaBGQAjBcAUAXIgxAaQgSAAgig+g");
	this.shape_16.setTransform(8.7,-32.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#72EBEB").s().p("AhGApQAAgxAPgPQAMgMBQgmQAWARAGANQAGANAAAhQAAAGghAOIgvAUIg6Afg");
	this.shape_17.setTransform(28.3,-39);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F0FF7A").s().p("AiTDHQglgWgegjQgcghgBgUQAJAEAPAEQAPAEAFAAQAkBbBXAAQAHAAAWgFQAagGALgGIAKgIQgcA3gwAAQggAAgngXgADLiBQACgGAAgGQAAgOgGgOQgKgYgagIIApgUQAgAeACASQADAYADAGIgsATg");
	this.shape_18.setTransform(17.2,-26.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#8089DD").s().p("AlJDdQgTgWABgXQgBgDANghQAOgiAIgMQAJANAEANQAEASADAEQAPAfBbBDQgTAGgXAEQgTADgJAAQgwAAgYgggAiEgjIAUgLIAIAOIgYAGgADhiJQgBgHgOgbQgQgdgHgGIBOgjIABABQAEgFAWgEQAQgDALAAQAPAAAJAKQAFAHAAAGQAAAXgqAcQg4AhgcATg");
	this.shape_19.setTransform(20.8,-29.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFCC99").s().p("AgBCWQgNgDABgCQAEgJAHgIQAGgIADgIIggAFIgiAEQgWAAgRgMQgWgQAAgjQAAhGAqhGQAqhHArAAQAjAAAlAYQAqAcAAAiQAAARgGAKIgJAKQgHgCgWghQgRgYgdALQA0AkAWA6IgBABQgHAAABANQABARgKAJQgSgbgLgNQgTgVgWgJIAAACIAcApQAbAsAAAUQgBAPgIAQQgPAeggAAQgHAAgMgEg");
	this.shape_20.setTransform(16.2,-19);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#72EBEB").s().p("AAAAeIg0gcIBAguQAZAPAJAOQALAPgGAOQgFAPgYAQQgFgGgRgJg");
	this.shape_21.setTransform(26.6,-36.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F0FF7A").s().p("Ah3DDQgtgkgCgBQgQAAgOgyQgIgagEgaQAAgMAVgWQAVgUAPgEQgCAPgEAbIgEAbQAABBAsAVQBFAWAwAdIAJAAIgXARQgRAMgDgBQgpAAgsglgACpiNIABgNIgJgUQgOgVgYgKIAPgOQASgMAGAAQATAAAOAdQAKAhAEAGIgqAag");
	this.shape_22.setTransform(17,-21.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#8089DD").s().p("Ak2EOQgRgUAAgTQAAgkAdg0QAcgyAfgVIADAMIACAQIgTALQgVAOgJAXQgDABAKAAQACAAALgGQAPgJATgPQAHAlAlAsQAnAvAggDQhSA1g2AAQglAAgXgbgADViiQgBgIgRgaQgRgZgJgHQBKgwACACIATgMQATgKAWAAQAIAAAIAHQAHAHAAAFQAAAagxAuQguArgTAAIgBAAg");
	this.shape_23.setTransform(18,-23);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFCC99").s().p("AA1DYQgTgHgagcQgVgXgNAAQgEAAghgbQgngggjglQhqhvAAhXQAAgvAdgcQAYgWAbAAQAmAAAhAgQAhAoAQAPIBKBFQAeAXBUBDQA3AxAsBAQAAAZgaAAQg1AAhThHQgWgSgoglQgegagSgJQBUBsA8AjQAVANAfALIA5AVQgFALgKAIQgKAGgIAAQg+AAhXhAQhQg8g+hRIAHAPQAwBaBWA/QAuAgBAAbIgBABQgFAIgLAAQgwgDgigPgAADiOQg2g7gIgKIgIgJQBWAdAiAsQATAZAAAbIAAAGIgCADIAAADQgBACgGAAQgCAAg6g9g");
	this.shape_24.setTransform(-9.2,-45.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F0FF7A").s().p("ABOCGIAAhwIBBAAIAABwgAE5CAIAAhhIA4AAIAABhgAlogNQgGAAgBgDQgBgEgBgJQAAg9AegZQAVgRAnAAQA2AMAaAXQgYgNgkgHQgqAAgaAdQgcAfgFA5g");
	this.shape_25.setTransform(0.2,-59.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#72EBEB").s().p("AhHA0QAIgOAHgoQAGglgEgNQA2AAA5ADQAQAGgCArQgBArgIAFQgIAFhDAAgAgEgyIAQAAIgQAAg");
	this.shape_26.setTransform(22.5,-51.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#8089DD").s().p("ACIA3QAJgVAAgJQAAgOgGgXQgFgVgDgHQBigBAdgCQAJAegdAnQgZAjgoAAQgRAAgUgGgAjdAeIgmgdIAPgLQAKgRgKghIAhAHIAeAEIAFBkQgBAAAAAAQgBAAAAABQgBAAAAAAQAAABAAAAIgCAFQgkgcgEAAg");
	this.shape_27.setTransform(24.7,-52.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgHAAIAPAAIgPAAg");
	this.shape_28.setTransform(22.9,-56.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFCC99").s().p("AhVDBQhFgKAAgSIg2hCQg1hFAAgTQAAgHAVgMIAUgOIAAgCQARAFAnAlQA4A4AbAQIACgFIg1hFQg5g9gmAAQgFgBgFAFQgFAEgFAAQgOAAgMgNQgQgRgBgdQAAgRAKgTQAMgXARAAQAOAAAeAgIA8BIQBWBnArAAQAGAAAAgCIgBgEQgPgShRhDQhJhDAAgjQAAgPAHgTQAJgYAOAAQAQAAArA1IBcBzQARAWAwAkQApAiAHACIADAAQgJgeAmgZQAjgVAqAAQAjAAAUAQQAOAMABAHQgBARgbAUQgdAVgZAAQgNAAgRATQgUAagQAPQg8A8hjAAIhFgHg");
	this.shape_29.setTransform(-31.5,-74.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F0FF7A").s().p("AC3DFQAAgTgJgjQgPg1gbgcIAZgIQALgFAFABQAWAAASAuQAQAmAAAUQAAAIgDAHQAAACgTAIQgQAHAAAGQAAAHgEgBgAF5AVQgUgigWgFIBDgkQAmAAAHBXIgzAjQgDgTgQgcgAm+iVQBhArBggVQBVgRAtg2IAHAnQgJAUgzArQg/A0gpAAQhxAAg1hpg");
	this.shape_30.setTransform(-1.4,-40.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#72EBEB").s().p("AgxAXQgUglgVgQIBUgjQAhgPAPgHQAcAfAUBAQAAAPgyAcIhLAlQAKgVgYgsg");
	this.shape_31.setTransform(27.2,-32.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#8089DD").s().p("AhoCqQgygHgJgFIhBggQg5gbgfgcQgfgcgyg6QgZgdgUgcIANACQAsADAlgJQAXgGAhgSIAngUQgdAOBhBGIA1AkQBRAqAYAAQAHAAAFgDQAFgDAAgDIAAgEQgFgDgKgFQAqAGAUApQANAaAJA9Qg4AVg0AAQgLAAgsgGgAFUhDQgOgdgZgJQBVhDAkgDQAdgCgLAnQgJAjgeAoQgfApgVADQACgXgLgZg");
	this.shape_32.setTransform(9.7,-35.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFCC99").s().p("AhPDZQgogIAAgOQABgFACgIQAAgGgFAAIgFgBQACgWA8gKQBRgOAkgaQhpAEgyAPQg9ATAGApQAAAFgjAAQgqAAAAgmQAAggBEgRQCSgjAWgIIgDgEQgFgEgGgDIhSAQQhAANgsAAQgGAAgBgBIAAgDQgDgcASgMQAMgJARAAIAmADQAoACAmgDQAUgCAUgEIAqgLQAegHASgNQAPgMAEAAQAFAAABAEQACAEAEAAQAHAAAAgBIAAgFQgHgSggguQgcgwAAgqQABgLAHgOQAMgUAUAAQA/AAACB2QAEAbAmAnQAkAlAAAfQAABChQA+QhVBBheAAQgaAAgdgGg");
	this.shape_33.setTransform(-53.5,-77.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#72EBEB").s().p("AgsATQgMgtgnAEQAUgHBCgbQAwgVAOAAQASAAAOAoQALAeAAASQAAAJg8AZIhOAhQAGgagIghg");
	this.shape_34.setTransform(25.2,-36.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#8089DD").s().p("AksBdQhshbgzhgQA5gVAighQATgSARgYQAXAjAYAiQAwBCAdAWQCYBzAUABQAGgBAAgBIgBgFIgUgTIADABQAGgBAUgIQAWgEALAWQALASAJAeQAHAcABATQgWAHgtALQgyALgTAAQhWAAh1higAFGgYQgPgigPgFQALgEA0gdQAxgbAMAAQAeAAAIAYQAEANgDAOQgLAuhwAxQAFgQgPgfg");
	this.shape_35.setTransform(8.6,-41.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F0FF7A").s().p("ACpC/QgLgdgVgXQA+gTARAZQAHALALBIIg1AXQgDgigJgagAFjA9IAtgUQAfAZAIAXQACAZADANIgsAXQAHg5g0gggAmmgHQgNgEgIgMQCfhGAhg6QAVgigChBQAOAaAKAbQAIAUAAAEQAAAqgxA2QhABHhgAAQgHAAgGgBg");
	this.shape_36.setTransform(-3.8,-50.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFCC99").s().p("AhgDNQgOgKgHgLIgEgBQACgYBNgRQBUgTAMgWIgKABQhzALgsAWQglATAAAlQABADgQACQgNACgKAAQgPAAgHgDQgTgIAAgcQAAgdBAgTICng1IgDgFQgEgDgHgCQgKABhKAVQg+ARgrAAQgGABgBgCIAAgCQgLgsAxgHIA4ACICAgXQAQgGAigRIAfgSQAFAAACADQABAEAFAAIAGAAIAAgDQgEgNglg1QgiguAAgqQAAgKAHgOQALgXAUAAQApABAPArIAQBMQAjA5AjAiQAPAOAAAfQAAA6hPBDQhVBHhcABQgrgBgdgVg");
	this.shape_37.setTransform(-53.8,-73.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#72EBEB").s().p("AgsAUQgNgsgmAEICSg6QAUAAAOAnQALAeAAASQAAAKg6AaIhOAiQAFgZgJgig");
	this.shape_38.setTransform(25.4,-35.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F0FF7A").s().p("ACGCLIAqgOQAeAOAMAXQAKATAEAuIg0AYQghhkgNgMgAF/BhQgRgggQgIIAsgUQASAHAMATQAFAJAHAQQAJAZgPAOQgEADgeAPQAEgPgRghgAm2AAQBxglAzhVQAfgyAAgnQAAgMgGgaIAEAEQASAdAKAbQAHASAAAFQAAAogvA5Qg+BIhcAAQgKAAgRgDg");
	this.shape_39.setTransform(-3.2,-50.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#8089DD").s().p("AjJCgQg8gigtgiQgsgigog3IhFhfQAngIAtgsQAXgXASgXQAdAqAhApQBABQAtAaQA1AnA0AaQAyAZgTgTIgVgSIADABQARgDAcgIQAMAAAQAyQALAiAFAdQgnASgtAIQgjAGghAEIgGAAQgfAAg4gfgAFHglQgQghgOgFQAsgUAogbQAYgPAOAAQAeAAAIARQAIAQgNAaQgeA7hTAdQAFgNgRgig");
	this.shape_40.setTransform(8.5,-39.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFCC99").s().p("AhoDOQgIgFgFgFIACgCQgJgFADgNIgEABQABgRAVgIQAOgGAlgFQAmgFAYgIQAWgHANgKIAJgIIgOABIgOAAQhlAFgpARQgoARAAAnIAAAFQgRgDgMACQgNACgPgEQgQgEgFgeQgEggA+gPQA9gQAdgFQAzgKAlgPQgFgLgJAAQgGgBgVAGQhIARhNAEIgOAEQgHgBAAgDQAAgxAsAAQAwAFAHgBQBBAAAugOQAdgBApgUQATgKAKgIIAKAIIAGAAQACgBAAgFQAAgFgIgOIgEgIIgVgdQgigsAAg1QAAgLAIgOQAMgVAUABQAsgBAOA8QAGA/AFAIQASAfAnApQAGAHAEAIQAIAPAAAZQAAAFgCAIQgDAMgIAQIgIAQIgVAkQgRAOgVAQIgVAOQgwAfgvANIgXAFQgQACgQABQg7gBgdgRg");
	this.shape_41.setTransform(-53.8,-75.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#72EBEB").s().p("AgmA5QAAgggOgVQgPgVgcgEQA9gVAxgUIAlgPQAXAQAKAXQAEALAHAlIgzAaIhWAqQADgPAAgGg");
	this.shape_42.setTransform(25.3,-36);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F0FF7A").s().p("AC1D4QAAgagRgqQgMgfgPgLIALgDIAfgLQAoASAIAkQADAeAEATIgpASIgLAFIgBgCgAGRCJQAAgggSgXQgLgQgSgIIAsgUQAdASAKAbQADAIAEAhIgtAXIACgKgAmygHIgJgIQAugQAxgfQBQgzAHgdIAMgaQACgCAGgWQAGgYAAgEQAAgPgDgOIADAEIARAjIABABQAOAhgBAHIgBABIgCAMQgDAMgJAUIgDAHQgOAfgfAYQggAegzASIgKAEIgCAAIgOAEQgRAEgOAAQgPAAgMgFg");
	this.shape_43.setTransform(-3.6,-50.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#8089DD").s().p("AkIB4QhNg2gXgcQgSgXg6hTIgTgYQA1gUAjghQATgRARgaIAAAAIACgBIAcAnQArBAArApQAsAqBZA4IAAAAQAaAPAaAMIAEgBQABgBAAgEQAAgCgUgQQAMAAAkgKQAPAMANAlQANAmACAaQhQAehAABQg7AAhnhGgAFSALQAAgWgPgbQgLgVgPgJIBFghQAjgRATgLIAHABQAWAEAHALQADAGABANIAAASQAAAKgWATQgXASgJAMIhEAiIAAgGg");
	this.shape_44.setTransform(8.5,-40.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFCC99").s().p("AhGDZQgTgEgRgKQgNgIAAgDQgBgFADgIQABgGgGAAIgFgBQADgYBQgLQBXgLAKgXIgPABQhrACguASQgvASAEApIgjAAQgTAEgMgOQgLgNAAgQQAAgeBGgSQBngVBAgTIgDgEQgEgEgGgEQgSADhAAMQhAAMgsAAQgHAAgBgBIAAgDQgHgsAxgDIA4AFQASABAlgEQAlgFAWgFQAggIAkgOIAfgPQAFAAABAEQABAEAFAAIAGAAIAAgBIAAgHQAAgGgggtQggguAAg3QAAgLAJgOQALgTAUAAQAgAAASAhQAPAegDAvQACAIAmA6QAmA2AAAXQAABChTA+QhUA+hfAAQgWAAgWgFg");
	this.shape_45.setTransform(-53.6,-76.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F0FF7A").s().p("AC1D6QgFgtgKgXQgIgXgVgVIArgOQAfAQAKAWQALATADAuIg1AXgAGKBfQgLgVgcgPQBMg3ANB5IgsAWQAFgegLgWgAmogIQgMgFgIgHQB1geA6hRQAmgzAAgmQAAgLgCgSQAPAaAJAbQAIAUgBAEQABApgxA3Qg/BHhcAAQgJAAgKgDg");
	this.shape_46.setTransform(-3.7,-50.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#72EBEB").s().p("AgsAUQgMgsgnACQATgGBDgcQAvgVAPAAQATAAANAnQALAfAAARQAAAKg7AZIhOAhQAFgagIggg");
	this.shape_47.setTransform(25.3,-36.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#8089DD").s().p("Ak3BRQhzhighhMQBEgZAjglQARgTAHgPQAcArAUAZQAwBBAdAWQCYBzAVAAQAFAAABABIgBgFQAAgDAAgBQAAgCAAAAQgBgBAAABQAAAAAAACIgUgRQAEAAAUgEQAUgFAFAAQALAAAQAyQALAlAEAaQgjARgyAIQghAGgagBQhSABh+hugAFHgbQgPgigPgFQBuhAAjAIQASAEAAAhQAAAWgRASQgbAbhPAlQAGgPgQgfg");
	this.shape_48.setTransform(8.5,-40.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFCC99").s().p("AAMCYIgugfQglgXgqgUQhDgggqgjQgZgTgJgPIAKgMQA1gNBJAoQBBApAHAAQAHAAACgEQABgCAAgCQgWgnhsgsQgxgUgSgMQgdgUAAgZQAAgEAJgHQAMgJAOABQAVAAAOAKQASAMAJACIAAgBIgNgJQBOArBQAzQApAaAJAAQAHgBACgCIABgGQgKgIgOgPQgfgah2hHQAGgIAMgBQANABAxAXQA9AcAzAkIA0AkQARALACAEQAYAaADAAIAYgDQgOghgghDQgTgnAAgZQAAgPAOAAQAwAAAvBUQAoBJAAAoQACAWAAAQQAAAegIAVQgbBBhtAAQhDAAgqgYgAD/BYIABgHQAAgLgDgKgAgmADIgBgCIgGgBg");
	this.shape_49.setTransform(-36.7,-59.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F0FF7A").s().p("AB9CVQAAgbgKgbQgIgVgLgNQAPgIAPAAQARAAAaAlQAVAdAGAQQglATgmAMQAEgFAAgMgAFGgKQgVgSgWgFQAhgUAMABQAEAAAXAQQATANAAAnQAAAFgGADIgTALQADgZgagUgAlYgMQgVgRgIgUQARADAfAEIAlADQA1AAAUgNQA8gnABAAQAHAAAMgVQAQgZgCgcIAGAIIAiBMQAAAqgmAfQgnAcg2AAQhbAAgpggg");
	this.shape_50.setTransform(5,-34.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#72EBEB").s().p("AgpAbQgTgRgngKIAKgCIB8hJQA0AgAGAMQAWAegyAeQhBAhgSAOQgEgfgTgSg");
	this.shape_51.setTransform(28.3,-29.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#8089DD").s().p("AlsA8QAgAGAzgXQA1gYAVgeQAMAJAJAJIAHAKQAAgJAPALQAeASALAEQASAHAZAGQAPADAAADQAAAGAFABIAMAAIgKABIAAACQAOADAMAfQAMAeAAAfQAAAchAAAQiuAAhqiFgAD/gmQgUgZgRgGIBUhYQAQgPAEgUQARAGALAPQAPATAAAdQgPBLAAAYQAAANgHAFQgIAFgTgCQgGgGgCgJQgXAIgLAKQAAgNgTgZg");
	this.shape_52.setTransform(17.4,-34.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("ACUARQADAKAAALIgBAHgAiWgrIAFADIACACg");
	this.shape_53.setTransform(-26.2,-55.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFCC99").s().p("AgVDJQg0g0gWheIAAAAIAAAAIgCgGIgBADQgWgXgXgdQgyg7AAggQAAgLAOgJQALgHAHAAQARAAAuA6QA2BDAsBkIgBAAIAEAAQAKAAgDgCQABgBAAgKQAAhthghVQgZgVgrgiQgfgcAAgYQAAgtA/AOQBAAOAsA6QA9BRAcBOQAPAlAFAfIAFgFIABgRQAAhYgyhIQgMgQgdghQgVgbgIgPIAOAHQAYAGAxA2QAvA0AKAaQAEAMAMBMQALBKAAAKQAAAjgGAWQgHAdgfAnQgNAMglAAQgoAAgogpgAC0CCQABgigHg3IAJAQQAFALADARQADAQAAAIQAAALgDAGQgCAIgKANIABgRg");
	this.shape_54.setTransform(13.2,-6.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#72EBEB").s().p("AggAoQglgggLgHQAEgDBphMQAdApAKATQANAUAAANQAAAPgTAKQgeAPgWAYQgHgHgjggg");
	this.shape_55.setTransform(24.5,-28.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F0FF7A").s().p("AiKEEQgcgWgMgUQgKgSgCgWIAEgYIAvBSIgHgBQAJARAMARgACNisQgDgFgsg1IA2gmQAXASAMAgQALAbgDAQIgvApQAHgWgKgQg");
	this.shape_56.setTransform(18.9,-13.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#8089DD").s().p("Ag6ArQgMgQgbgMQAMgIBAg1QA/g0AaAAQAXAAAEAaQABAJgCAcQgDAjgUASIADgBQA1gVhBAhIhCAnIgoAfQAEgigSgWg");
	this.shape_57.setTransform(44.3,-42.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).to({state:[]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},2).to({state:[]},1).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[]},1).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]},2).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]},1).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]},1).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},1).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]},1).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54}]},1).wait(1));

	// Layer 2
	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AAlHCQgfgaAAgNQAAgMAFgMQAFgLAFgFQgLgJgKgMQgCAQgJAGQgHAEgLAAQgQAAgHgDQgFgCgbgfQgdgggDgIQgCgIADgYIAFgfQAAgOg8gwQg8gvgigvQgigvAEhDQAEhEC3iIQC0iHBkg4QBagzAQAAQAJAAAFACIACAGQgIAFAAAHIABAJQAAAMgEAbQgFAcgDAAQgBAAAAAAQgBAAgBAAQAAgBAAAAQgBAAAAgBIgCAGQgDAOgBAHQABgGAEACIALADQhhBLhMA9QiPB1gyBUQAQARArAjQAoAjADAAQACAAAjgPIAjgPQAiAAAgAiQAbAcAAAMQAAAFgEAOQgEANAAAFIAjAgQAlAiAHAJQAIAMAKAuQAAADgNAaQgNAZAAAFQAAAMgJASQgJAVgLAIQgEADgpAzQgZAdgjAAQgmAAglgeg");
	this.shape_58.setTransform(24.9,-7.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgdE3IgdhjQgNgtgLAAQgFAAgKAFQgKAEgFAAQgwABgvgVQhfgpAAhsQAAhKA7hGQBGhTCkhXIDsiAQAkgSAMAAQAIgCAGAIQAOARAAA4QAAAzgwAjIg1AbQhIAkgjAUQg9AkgoAmIgQALQCQAbA6CAQAsBhABCtQAAAPgOAVQgPAXgBAFQgIAngLAOQgLANgXAAQgMAAgNgJQgIAQgOAIQgIAEgGAAQhEAAgqiPgAj+BHIAGAHIgDgHg");
	this.shape_59.setTransform(23,-10.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("Ag+CjIgKAHQgBAkhGAsQhFAqgyAAQglAAgYgXQgfgdAAg5QAAgkAEgQQAGgWAWgmQASgfAfhVQAjhHA6AAIATADIATADQAGAAAagLIA+AMIAqgbQA6gmBfguQCfhNAPgCIgJAGQArACAABKQAAAigwAeQiLBageAXQAXAcALAfQAFATAAAOQAAAYgRAQQgOAPgQAAQgQAAgbgNQgigQgKgZIgLAJQgFAGAAAHQAAARAQASIAjAgQAzAvgBA5QAAAUgGANQgKAVgXAAQhHAAhQiJg");
	this.shape_60.setTransform(20.1,-26.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AkzEJQg3ggAAg8QAAgnAOgUQAIgMAUgWQgigcgNgWQgKgSAAgVQAAgWAPgNQANgLAUAAIATAIIAWALQANANANAIQAZAPANgJQgggXgOgvQgKghAAgoQAAgdAOgVQAPgXAYAAQAgAAAWAwQAXBEAQAoQAQgJAJgGQABgBAIgCIgCgJIgFACIAFgCIgGgkQgEgaAAgHQAAgsARgcQATgbAbAAQATAAAYAWQAgAggDA2IC1hUQCKg8AAAVQAAgDASANQASANAAAIQAAAhgGANQgIAUgfAWQgoAekLCQIACA+QAZgRAsAAQAmAAATAVQAUAVAAAuQAAAWgTAPQgSAQgZAAQgFAAgsgIQgvgJgSgGQACAxgtAaQgYANgaAEQgHAAgPgGQgPgGgJAAQgFAAgUAIQgVAKgJADQgdAHgUAAQgcAAgigUg");
	this.shape_61.setTransform(19.8,-29);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("Ak0EFQg2ggAAg8QAAgLALgbQANgeARgXQgjgdgOgWQgLgTAAgTQAAgXAOgNQAOgMATAAIAUAJIAXALQAOAMANAJQAcASAMgKQg9gtAAhlQAAgdANgVQAOgXAYAAQAhAAAVAvQAaBFASAsQAXgOAEgEIAEgBQAAgFgHgUQgGgbAAgrQAAgjAQgZQASgcAcAAQAdAAAXAnQAUAkACArQDRhoBQgTQBLgSAAAxQAAAigOAXQgTAdgwAZIieBVQh4A/AAABIADA1QAagSAqAAQAmAAATAUQAVAWAAAuQAAAVgSAQQgTAQgcAAQgRAAgjgIQgqgJgTgCQAGA0grAbQgXANgZADQgGAAgHgGQgIgHgdAAQgGAAgTAJIgfAMQgeAHgTAAQgbAAgjgVg");
	this.shape_62.setTransform(19.4,-29.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AkyEtQgsgbAAgqQAAhZB1hxQA8g3BHg2IgZAPIAzgxQATgUAfgJQAbgJBLgtIBVg1QAcgQAwgeQAogXAagCQATgDAIABQAVAEAAAaQAAAmgKAWQgPAfgsAaQgiAVg8AwQg6AuAAAFQAAAFAEANQAEANAAAFQAAAMgIAQIgJAVQgIAWAAANQACAKgBACQgCAHgIAMIgIALQgLALABALIABATQgEARgwAxQg0A2gdAAQgFAAgIgGQgIgHgTAAQgcARggARQg/AigXAAQgmAAgkgWg");
	this.shape_63.setTransform(17.6,-22.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AiaDhQhFgpg+hFQg/gvgohPQgGgLgRgnQgJgTgDgBQgHAAgMgjQgNglAAgZQAAgbAegeQAjgjAzAAQA0AAAWAUQAOAVADAAQAWAABLAqQBTAwAVAGIgMgFQAZACC+AKQDSAKBQABIAKAPIAAACQAAAQgSAtIgTArQAAAIgpAKQhAARh1ABIicgGQBFA9AAAzQAAAhgcALQAKANAAAKQAAAQgJAKQgKALgTAAIgSgDQgQgEgLAHQgbATgBAAQg8AAhLgugABpAXIADAAQAFAAABgBg");
	this.shape_64.setTransform(6.3,-47.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AA9GTQgFACg5gLQg7gLgOgMQgTgLgkgPQg2gZh0h8QgJgKgZgoQgUgggRgKQgZgQgYgcQgTgYgBgIQgEgWgJgJQgHgLgUgNQgDgCgWgcQgUgdgHgNIAHAQIAAABQgJgPgfhIIAHAPQgBgFADgRIACgXIgMgMQgOgNgEgLQgJgaAAgVQAAgdATgZQATgbAZAAQAlALAPAJQAGgcAPgRQAOgRAQAAQAYAABUBeQBuB6AhAdQgDgaArgSQAmgPAwAAQA2AAAVAaQAJALAAARQAAA7guAOIgoAKQgXAIgKARIALAIQAFAFAAAGQAAAOgOAqIgPArQAAAtBWA2QAqAbArASQBWAADJhnQBlg0Bag1QAbADAIAJQAGAHAAATQAABghUBGQgcAXgvAdIhGArQhmBGheAfQgcAJgiAAQgVAAgYgDg");
	this.shape_65.setTransform(-3.8,-55.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AiKEoQhOhLhFhzQgkAJgUAAQgUAAgJgSQgIgSgKAAIgiAEIgjAEQgWAAgfgLQgdgJgLgJIgNgLQgHgFgHABQgRADgRAAQgYAAgTgPQgagTAAghQAAgZAPgTIAPgPQgFgQABgFIAHgXQAKgkA5gGIA7ACQAzAAAzgLQA8gNAXgWQgUgPgRggQgVgpAAgwQAAgkAXgTQASgOATAAQA6AAAYA4QASBEANAXQAXAqAcAbIAdAYIAFAEQAKANAMAmIAMAzIACAFQACADAAAGQAAAFgHAHQgIAGAAAFQAOAcAZAiQAxBGA2AoQA9AtAfAcQALAKAIAAQAGAACVg4QDKhLB1gqIAXgBIAHgBQgBACAAAFIAOAIQAPAIACAGQADAGADAQQABAOAAAJQABAMgVAXQgVAVAAACQAAAGg4AlQg/AphLAnQjWBxh3AAQh/AAh8h4g");
	this.shape_66.setTransform(-11.7,-60.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AigEHQhehegghCQgiAKgVAAQgQAAgLgLQgKgLgBAAQgaAAg1AMQgMAAgRgBQgbgEgLgGIgngdQgEAAgSAEQgTAEgFAAQghABgVgZQgQgWgBgZQABgXAOgQQAOgNgBgBQgDgQABgPQADgTAOgTQAUgcAeAEQA5AIBOgSQBNgSAdgaIgmgtQgcgpAAguQAAgmAVgTQASgQAgAAQAvAAAaAuQANAaAKAsQABAHAiAsQAjAtAGAAIAaAOQALAAATBHQANAoAAAGQAAAGgIAGQgHAGAAAFQAAAmB0BrQBzBqAbAAQAIAACSg6IE8h8IAbgBIAEgBQgBACgBAEIAQAJQAPAKAFAMQAEAMABAgQAAAEgpAuQAAAEg4AnQg/ArhIApQjUB4h4AAQiHAAiPiPg");
	this.shape_67.setTransform(-11.6,-58.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("ABmGcQhwgGhnheQhohegfguQgegvgGgTIgYAGIgXACIAAABQgRABgMgHQgDABgDgFQgDAAgDgFIgNgRQghAIgfABQhCAAgjgcQgLgJgGgJQgVAGgaAAQggAAgUgbQgVgaAGgcQAFgbAVgMIAFgEIgBgCQgEgGAAgKIAJglQAQgkAxAAIA2AFQAggBAmgEQANgFAYgFQAogIAIgGIAigSQgbgagOgcQgRgjgBguQAAglAXgTQAWgSAdAEQAfADAXAXQAaAaAFArQAFA2AqAnQAPAPAJASIABAAIABABIAIADIAMAGIABABQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAABAAIAAAAIACABIABADIAAgBIABAAIABACIABAAIAAAAIABABIABABQAHAPANAhQALApABANIABABIgDgCIAHAMQgKALgFAMIARAaQAgAvArAwQAqAwBRA2QAdAUAMAKQAagKA8gTQCMgtD2hvIANAHQAYgEgIAJQAWACAJAUQAIAOAAAnQgWAegTAQQAIAZjIBoQjiB0hxAAIgJAAg");
	this.shape_68.setTransform(-11.8,-59.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AiJEnQhThPhAhvQgkAKgUgBIgagKIgFgCIgEgLQgFgMgHAAIgcAFIgcADQgYAAgggIQgfgHgMgIQgLgHgPgSQgTAGgPgBQgdABgTgMQgggRAAgoQAAgQANgSIAPgTQACgDAAgGIgBgNQAAgLAJgaQAKgeA1gCIA/AEQAyAABBgTQAvgOAWgLQgWgPgPggQgUgoAAgxQAAglAYgSQARgOAVAAQA6AAAYA6QARBFALAVQAXAsAaAYQAZAQADAEQAEAFABgCIABgDIAVA3QADAJAFAWIAFAUIACAFQACADAAAHQAAAEgHAHQgIAGAAAFQAOAdAZAhQAyBHA2AnQA7ApAhAZIAUAQQA0gPBVgdQCpg8CnhPQAIAGAGAAIAMABIAFAAQgCABAAAFIAPAIQAQALADAMQAFAQAAAcQAAADgpAvQAAAFg4AlQhAAqhJAoQjWBzh4AAQh+AAh+h3g");
	this.shape_69.setTransform(-11.7,-60);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgnEpQg8gihMhOIAUAQIgQgRQgYgbgYgHQgPgEgPgNIgXgaQgJgMgGgSQgFgQgHgFIgTgOIgUgQQgDgDg+gkQhDgpgkgUQglgTgYgdQgWgbAAgSQAAgHAFgHQAJgMAVgEQgWgQgNgaQgMgWAAgTQAAgPALgMQAMgNAUAAQARAAAZALQAXAKAPAAQAmgUADAAQAUAABNAjQBXAnAyAlIAHAFQgIgYgKgkQgKgkAAgGQABgTALgLQALgJARAAQAkAAAuAtQAiAiAbAtQAYAnAABLQAAALAKARQAJASANANQAMAMAKATQAOAXAAAXQAAAHgFAXIgDAXQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAIAHgSIgGAQIAuAeIAoAZQApATAPAEQAGACAOAAQAeAAFAjoQARAGALAPQAPATABAdQgQBJAAAYQABANgIAFQgIAFgTgCQgGAPhzBWQhwBTgKAAQgEAAgbANQggAPgTAGQgrALgiAAQhrAAhSgwgAouihIgDAGIAKgMQgEABgDAFg");
	this.shape_70.setTransform(-6.1,-46.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AhMF2IgtgPQg8gPgEgDQgTgKgYghQgigsAAglQAAgFAPgiQAAgRgMgOIgbgYQgngkAAg5QAAgdALgPQAMgQAPABQgJgMgLgUQgNgaAAgLQAAgVAOgVIAPgTQAAgGAJACQALACAGAAQARAAAhAIQAPAHAKABQACAAAbAMIAeANQADAACJhYIERivIgyAiIAagQQARgIAOAAQAWAAAJAZQAGARAAAkQAAAigQAaQgPAXgkAeQh4BYhrBdIgBgEQgBAFgGAEIAIgEQAbBUAlA6QAYAkAAAvQgBAtgTAOQgOAKgSgGQACAlgfAcQghAfgvAAQgGAAgdgKg");
	this.shape_71.setTransform(23.8,-17.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_58}]}).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[]},1).to({state:[{t:this.shape_63}]},2).to({state:[]},1).to({state:[{t:this.shape_64}]},1).to({state:[]},1).to({state:[{t:this.shape_65}]},2).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.6,-55.2,59.2,96.2);


(lib.FIZ23RAPRON001 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6C7C9").s().p("AgUKKQgIhagIgIIgTjoIgHlZQAAkGANjWQALjKAThhIAXABQgIAHgJEFQgJEQAKD5QAKD3AACZQgBCYBCD+Ig5AEQgSgwgIhmg");
	this.shape.setTransform(65,82.9);

	// apron
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8089DD").s().p("Ag5CXIgbgEIgCgaIAzAIQA7AHA8gBIADgBIgBASIhtACIgigDgAgVh7QAGgeARAAQARAAAIAKQAEAHAAAOQAAATgNAGQgHADgOAAQgXAAAFgdg");
	this.shape_1.setTransform(34,83.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF7C66").s().p("Ag/EGQgFAEAAgKQAAgFAFgHQADgHAAgFQAAgFAKgQQAKgQABAAQBOAFAAgBQAAAGAHAcIAJAhQgiAAhUgEgACFDcQgFgOgNgPQgLgNAAgCIACgtQABgogCgQIAFAAQAWAMAOA9QALAsAAAUIgCAlIgDACQgDADgDAJIgNgrgAicDNQAAgVAJgaQAMghAgg7QAAA+ADAWIgUAYQgWAcgJAWIgEAHIgBgagABYCCIgGAAIgKgBQiggMAAgJQgBhHALhDQAQhyAohBQAMADAhABQAOAAAIAWQAFANAIAkQAKAlADAVIASDOIgBAAgAgfh+QgHARAAAMQAAAlAmAAQASAAALgIQASgMAAgbQABgsgxAAQgUAAgKAZgAgOjiQAEgCAEgLQAGgOAIgMQABABAGAPIAKAXIgEAAg");
	this.shape_2.setTransform(34,81.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhNMaQitgNh0gbQAYgpAZhqQAZhrAIhrIAHhmQADgqAHi3IAMieQAjjmAki7QAki8AphiQAlAHAKACQgUAsgZBfQgkCCAABMQAAAjA2AZQA2AYA3AEQA4AEA2gOQA1gOATgJQASgJgCgfIgCgfIAJiBQALiIARhNQAEgDALAAIAjAAQAAAXgMBwQgOBzgBAWQgEBxgBC7QAAA1AHC1QAHC5AACIQAADPBQEFQg5AFhVAEIhYABQhkAAhygJgACGEOIAAABQAigXgBg7QABg0gjgzQgjg0gBgFQgMiOgkhiQgEgOgphRQgQAVgmBTQgyBvgFBVQgCAZgVAgIggAsQgTAlgBBAQAAAFAEANQAEATAHAQIAGABIASgxQAJgcAPgMIANgFQAFAHgJAGIAoAHIAJABQglA/AAAEQAAALAfAIQAfAHApAAQBCAAAAgRQAAgKgDgIIgVg1IAVgDQAQgDAFAAQAPAAAcBeg");
	this.shape_3.setTransform(34.6,83.2);

	// Layer 5
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AA3M9QhdgFgzgEQgPgBkogvQBKi9ANi+QAKkBAZjiQAIhdA+k9QA8k9AdADIAxAFQAVACAPAHQgyCIgTBGQgYBbAABKQAAAMAiANQAOAFAkAKQAHACAgAEQAgAFAQAAQCRgPAAgUQAAhkAIhSQACgYAJhIQAShZAHg0IBcAGQgJB3gLBCQgHBBAADvQAABoAJE7QAKE+AKBTQAKBSAMBMQALBEAoBsQgdAEhpAGQhiAGgTAAIhegEg");
	this.shape_4.setTransform(35,83.1);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5,-0.2,80.2,166.8);


(lib.FIZ_23_part_03211509 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgyJEQgXiQAAi2QAAkCAaloQAAgJAFgWQAEgWAGijIAGiFQACgEAOhTIADJQQgCA1ADD8QADDvAGBhQARDPA2CcIg7AFQgphBgYicg");
	this.shape.setTransform(51,83.4);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#363636").s().p("AjqEVIgCgaIAdAEIA4AAIAEBZIhTAEIgEhHgAgYEGIBMAAIACAnIACAfIhMAEIgEhKgADllbQAIA5AAASIgDAyQgHA7gQA0g");
	this.shape_1.setTransform(33.5,140.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DADEE0").s().p("AgfBmIgBgKQAHACARADQAQADAHAAQAmAAAAgZQABgQgagPIgbgNIgPgGQAjgEAgAUQAMAHAOAOQASARAAALQgBAWgPAMQgNAMgWAAQg3AAgWgigAhegIQgBAAgBgGIADgmIA4AAQABAigVAGQgaABgJADIgBABIgBgBgAAQgrQAagaADgOQgNgOgJAAIg7ASIgJACIgCAAQAtgwAmgIQAmgIgBAcQAAAZgRAVQgQAUgoAdIgPAGQASgSANgNg");
	this.shape_2.setTransform(62.6,105.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF7C66").s().p("AhED/QAHgHAMgXQANgXAVgDQASgDAVAFQAVAFADAhIAHAaIhfABQgMABgQgMgACODxQgPgigOgRIgJgPQAChLgBgaQAiBIAJAaQAJAZAAARQAAAGgCAFIgJAlgAicDNQAAgdAUgzQATgzAOgJIAEBSQAAAGgMAQIgmAzIgFAKIgCgZgAgxB4QgogEAAgeQAAgmAThyQAXiPAZgBQAlAAATAOQATANAJAlQAIAeAFBKIAOCrQhtgGgdgDgAgmhiQAAATALAJQALAJAQAAQATAAAMgKQARgNgBgYQAAgSgNgNQgNgLgRAAQgqgBAAA1gAAHkIIABgCIARAlQgBACgmAAQALgMAKgZg");
	this.shape_3.setTransform(21.1,82.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#72EBEB").s().p("AgGAYIABgZQBsgIAVgIQAMASgQAMQgQALhiAAIgMAAgAiAAFIALgcQAQADAUAIQAVAHArABIAAAcIhvgTg");
	this.shape_4.setTransform(29.3,8.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiGMZQiXgYhtgOQAqh8AajPQAKhNAck/QAXkBAaigQAnjmA1i0IA0AJQgeBygnCQQgPA1AAAnQAAAlAsAYQAsAYA9AEQA8AEA3gHQA4gIAOgFQAZgLACgrQgCg9AEhhQAEhgAThFQAEg3AHgBIAZgBIADJQQgCA1ADD8QADDuAIBiQARDOA2CcIg7AFQhfADhQAAQiKAAhbgJgABKDJQAMAXAKAwQARgDAJgfQAHgYAAgXQAAgggOgiQgPgiggguQgJgOgCgQQgGg3gShlQgGgcgSgxQgUg6gVgdQgxA4gZA+QgZA/gHBJQgIBGgGAOQgHARgfAqQgcAtAAA3QAAAUAIAQQAEAKAJANQAXg5AQgXQAFgGAKgIQAEAWApAAQgRAqgMANQgHAIAAAEQAAANAiAHQAeAGAoAAQApAAAOgGQAJgEAAgIQAAgGgYhAIAVgEQAQgCAHAAQAIAAAMAXgAFdCVQAkgPAKgCIgBACIgLAQIgMAPIgSAIg");
	this.shape_5.setTransform(25.5,83.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8089DD").s().p("AjCHEIgCgaQATAFBDAFQBFAGAUgDIgBASIh1ACIg3gHgADIDDIAFqNIAXOGIgTADQgEh/gFh9gAiGC/QAAgpAdgBQAcgCAAAfQAAAVgLAHQgHAGgRAAQgWAAAAgVgAhChHIAAh2IBUABQAGAAAEgJQADgJAAgNIgEgTQgEgQgDgGIhEgDIAAgeIBHgBIABgpQAAgUgKgEQgGgCgugEIAAgkIAmABQAtAAAWgEQAYgEAVgNQgaC0AIB6QgCAcgVAHQgLAEhIAJgAi8hfQgngMAAgRQAAgWANg8QANg3ApilIBAAOQAnAJAFAAIgCAmIhDADIgDBAIA7AAIAAAhIgYAAQgdAAgJAGQgMAKAAAlQAAANALAEQANAFAngBIgGB1QhJgKghgLg");
	this.shape_6.setTransform(32.1,53.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F0FF7A").s().p("AjNEeIAIgtQAvAEBTABIAAAsgAi9C3IAAgqIB0AAIAAAqgAA1heQgNhJgNgXQATgIgDADQASgICRhWQiGD8gSAdIgGAIIgFAFQAKhUAAgPg");
	this.shape_7.setTransform(40.3,3.5);

	// Layer 4
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AjFP3IgBgYIgCgaIgCgbIgBgMQgEgBgBgBIgCgEQhigNiUgZQAghQAOg+QAOg9AGgsQAHgrAVj/QAVj/AQiMQAPiOAzj6QAYh1AXhHQAYhKAQAAIBDAQQAQAEgIAPQAYAVBPAAQBOAAAcgMQAhgNABgoQAEhNgCgQQgEgegag0QAUgGBig2QBig3ASgRQgQBZg8BxQggA4giAyQAzARgGAiQAXCPAHExIAHG4QAigZAOgJQAXgNAdAAQAqABAAAhQABAlgaAcQgSAVg6AlQAoADApAaQArAcAAAdQAAAagSARQgTATgeAAQgHAAgfgJQgjgKgJgGQgFAsgRBEQgRA9ABAQQgBAnAWBRIAwCmQiIAMhLADIAAAFIABAaIADAlIh6AHIgBglIgBgaIgBgNQgrgCgvgEIABAYIABAZIACAmIh2AGIAAgNgAE1GVIAlAAQAegCADgEQgHgFgcgOIgkgSg");
	this.shape_8.setTransform(28.3,72.7);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.4,-30.1,91.4,205.8);


(lib.FIZ_23_part_02811509 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 9
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("AAQCBQgggRghgOQgdgMgUgjQgRgfAAgXQgBgfAegqQAagkAZgQQAcgVA9AgQA/AgAAAhQAAAWgWAeIg0BNIAMgDIAXgQQAIgGAFAAIAIAFIAMALIgsA5QgLAMgRAAQgHAAgQgIgAhWgdIAAADQAHAVAeAMQAcANAWgEQgHgQgcgOQgbgPgXgDQAAAAAAAAQAAAAgBABQAAAAAAABQAAAAgBABg");
	this.shape.setTransform(40.4,65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8089DD").s().p("AC6DRQgXgThFghIAwhTQAMgYAGgyQAEgeATgTQASgRAaAAQAXAAA5BHQAAAkgbBEQggBRgoApQgJgMgNgKgAjEiGIgkgFQgggFgGgHQgGgJgNgdQgMgagDgMIgCgDIBiATQBgATAKADQgFARgJANQgGAMAGAgQgPgEhBgPg");
	this.shape_1.setTransform(36.4,26.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0FF7A").s().p("ABqESQALgGACgCQAEgEAAgVQAAghglgmQgzg0hVAAQgMAAggAmQgTgbAAgCQAAgaAhgXQAbgTAQAAQBKAABFA9QA8A2AAArQAAAqgqAbQgDAAgPgMgAAlhzQgJgKAAgRQAAgvA3gWQAHAAATALIAhATIgMAFQgbANgMAMQgRAQAAAZIAAARQgbgJgKgNgAiTjHQgSgPAAgjQAAgFAEgJQAHgNALgJIBPAXQgTAJgIAQQgHAOAAAWQAAAOACAEQgkgDgPgNg");
	this.shape_2.setTransform(42.8,36.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#72EBEB").s().p("Ag6ASQgKgJAAgUQAAgWANgIQANgJAJgKIBmAiQgOAGgTAgQgQAegBALIABAIQg5gZgVgSg");
	this.shape_3.setTransform(41.5,17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer 6
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAgF8IgngWQgggKgIgIQgFgFgGgPQgFgPgDgCQgEgCgPgUQgPgTAAgfQAAggAZgjQAZgjAAgHQAAgEgLgLQgLgKAAgUQAAgKAdgjQAfgkATAAIA2AHQANgHAagkQAagnACgRQACgNgUgNQgNgIhHglQg1gjhEgWQiJgrg7gXQAFAAAHABQAAAAABAAQAAAAAAAAQAAAAABABQAAAAAAAAIABgFIgTgeIADAIQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQgNgYgKgWQgGgPgMgQIAPgGQAMgEAGAAQDcArBUAeQDCBDBNAvQA/AmAAAjQAAAigLAhQgXA+hKB9QAIAaAJAHQAGAEAAAQQAAAVgXAmQgXAlgKAAQgMAAgCgBIgTgPIgOAZQAHAGAIAKQAMAPAAAGQAAATgeAhQgiAmggAAQgMAAgjgUg");
	this.shape_4.setTransform(36.4,40.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.FIZ_23_part_02711509 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAcIgEgPQgCgLAEgNQAHgYASgDQAYgEAEAlQACAMgHAOQgIAPgNACIgFABQgOAAgGgLg");
	this.shape.setTransform(2.9,4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,5.8,7.9);


(lib.FIZ_23_part_02411509 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#825454").s().p("AhYA3IgSgfQBag9AegSQAkgVAXABQAHAAALAOQALAPAFAUQgpAZhPAyQgqAbgJABQgKAAgOgWg");
	this.shape.setTransform(12.5,9.4);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhrBIQgSgVAAgUQAAgXBCgvQBIg2A8AAQAaAAAaA9QgBAJABAGQAAADgNAIQgaAOgPAHQhEAfgoAeQgbASgHAAQgSAAgSgWg");
	this.shape_1.setTransform(12.6,9.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,25.2,19);


(lib.FIZ_23_part_02311509 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#825454").s().p("ABMBJIjBhdQgBgYARgQQANgMAGAAQAyAAA+AiQAZAOA/ApQgBAXgOARQgPAQgMAAIAAAAg");
	this.shape.setTransform(14,9);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAfBJQgngehAgaQhAgYAAgOQAAgNARgaQASgZAJgCIAJgCIACAAQAlAAAeAMQAMAEA8AhQA/AhAJAJQAKAKgEAZQgEAYgeAVQgMAIgPAAQgUAAgYgRg");
	this.shape_1.setTransform(13.8,9.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,27.5,18.2);


(lib.FIZ_23_part_02211509 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhnDWQgQgDgDgCQgHgQAKgBQABAAAMgcIAdhHQAPghAPg5QAQg9AEguQADgoACgrQABgdABAAIAEABQAGA9AAAYQAAAxgMA+QgGAbg5CvQAAAKACgIQBKAAAjgVIBdhHIAHABIAAABQgCAJgQAWQgUAbgeAaQgYATgpALQgkAIglAAQgIAAgPgDg");
	this.shape.setTransform(12.4,21.8);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C09B79").s().p("AhRBEQgsgMAAgWIACgRIACgJQAmADAeAAQA2AAAWgNQAbgTAoghQAagVAEAAQAGAAAAACIAAAFQgDAKgFAdQgHAdgLASQgjA6hcAAQgZAAgdgIg");
	this.shape_1.setTransform(12.6,39.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.2,0,25.6,47.1);


(lib.FIZ_23_part_02111509 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgbAiIgFgQQgDgNAEgPQAGgdAXgFQAcgGAHAqQADAOgHARQgJASgPADIgJABQgQAAgHgLg");
	this.shape.setTransform(3.5,4.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,6.9,9.2);


(lib.FIZ_23_part_02011509 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 10
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A4C0C3").s().p("Ag6EHIgBAAIgHgBQAVgmAVgqQASglAJghIANg2IAAgCQADgUAAgSQAAhOgghjIgXhAQgLgSgNgSQAIgDAIAAQAwgBAeBMIAAAAQAjBKgCBvQgIBqgjBQQgiBPgwAAIAAAAg");
	this.shape.setTransform(21.4,29.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#529B9E").s().p("Ag0EHIgHgBQAVgmAVgqIAPgiQAYgBAYgEQgHAVgJAUIgHAOIgBACIgCAFIgFAJQgcAxgmAAIgBAAgAgBiOIgFgRIgYhAQgKgSgNgSQAIgDAIAAQAwgBAeBMIAAAAQAMAZAHAdQgfgHgegCg");
	this.shape_1.setTransform(20.7,29.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A4C0C3").s().p("AgdBuIANg3IABgBQADgUAAgSQAAg8gUhIQAeADAcAHQAJAugCA3QgEA/gOA1QgVAFgZABIACgHg");
	this.shape_2.setTransform(24.7,29.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A4C0C3").s().p("AgXAjIABgCQADgTAAgRQAAgUgDgWQAXAEAZAGIAAAKIAAADIAAAEIgBAGQgCAZgEAaQgVAFgXACIACgLg");
	this.shape_3.setTransform(25.4,31.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#529B9E").s().p("Ag6EHIgIgBQAVgmAVgqQASglAJghIADgPQAZgBAWgFQgLAzgSAqIgKAUIgGAKQgWAogeAHIgHACIgFAAIgCAAgABCgpQgagGgbgDQgIg0gSg5IgXhAQgLgSgNgSQAIgDAIAAQAwgBAeBMIAAAAQAdA9AEBVg");
	this.shape_4.setTransform(21.4,29.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#529B9E").s().p("Ag6EHIgIgBQAVgmAVgqQASglAJghIAIghQAYgCAWgEQgLA9gWAyIgKAUIgGAKQgWAogeAHIgHACIgFAAIgCAAgAATASQAAhOgghjIgXhAQgLgSgNgSQAIgDAIAAQAwgBAeBMIAAAAQAjBKgCBvQgCAWgDAXQgWAFgXADQACgRAAgQg");
	this.shape_5.setTransform(21.4,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

	// Layer 9
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D9FFFF").s().p("AAAEHIAAAAIgFgBQgugHgghCQgqhPgBhlQgChmAuhTIABAAQAmhHArgMQAHgDAIAAQAygBAeBMIAAAAQAjBKgDBvQgHBqgkBQQgjBPgxAAIAAAAg");
	this.shape_6.setTransform(15.3,29.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#656BAA").s().p("AgqDqIAAgBIATgjQAohbAIhzQAChzgnhYIAAABQgKgbgOgNIAKAEIAAAAIACAFIADgCQAOAHAJALIAAAAQAGAIAUAyQAXAwAEBXQAABTgQA0QgPA0gKAWIgQAmQgIAQgCACQgDADgnAPQAEgIAIgJg");
	this.shape_7.setTransform(28.2,29.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8089DD").s().p("AgBAAIAAgBIADABIgCACIgBgCg");
	this.shape_8.setTransform(25.7,5.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D9FFFF").s().p("Ah1BfIAAgBIgJhNIAAgDIAAgDIAAgCIAAgCIAAgJIAAgFIALhWIADgJQBYgWBUAJQAeADAeAHQAJAugCA3QgEA/gOA1QgXAFgZABIgXABQhFAAhWgYg");
	this.shape_9.setTransform(15.3,29.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#66CCCC").s().p("AAAEHIgHgBQgJgBgJgEQgPgHgOgOIgJgKIgWglIgLgVIgDgHQgGgRgGgRQBYAWBHgBQAagBAYgEQgHAVgJAUIgHAOIgBACIgCAFIgFAJQgeAxglAAIAAAAgAhUiwIAAAAQAnhHArgMQAGgDAIAAQAygBAeBMIAAAAQAMAZAIAdQgfgHgggCQhLgHhPARQAJgXAMgVg");
	this.shape_10.setTransform(15.6,29.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D9FFFF").s().p("Ah9AYIgBgjIAAgSQBogdBjAPQAaADAYAHIAAAJIAAAEIAAADIgBAHQgCAZgEAaQgXAEgXADQgSABgSAAQhJAAhagZg");
	this.shape_11.setTransform(15.3,31.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#66CCCC").s().p("AAAEHIgGgBQgugHgghCQgcg0gKg+IAhAIICYAPIADgBQAYgBAXgFQgLAzgTAqIgJAUIgGAKQgYAogeAHIgHACIgFAAIgCAAgAhSiwIAAAAQAmhHAsgMQAGgDAIAAQAygBAeBMIAAAAQAdA9ADBVIAAAAQgagGgbgDQgagEgbAAQgkgBgoAFIgCABIgDAAIgoAHIgDABIgEAAIgDABIgEABIgDABIgEABIgDABQAHhNAkg/g");
	this.shape_12.setTransform(15.4,29.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#66CCCC").s().p("AAAEHIgFgBQgugHgghCQggg8gIhJQBtAdBVgGQAYgCAXgEQgMA9gWAyIgJAUIgGAKQgZAogeAHIgGACIgFAAIgDAAgAh+AbIAAgSQgChmAuhTIABAAQAmhHArgMQAHgDAIAAQAygBAeBMIAAAAQAjBKgDBvQgCAWgDAXQgVAFgYADQgTABgUAAQhJAAhbgZg");
	this.shape_13.setTransform(15.3,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).to({state:[{t:this.shape_10},{t:this.shape_8},{t:this.shape_7},{t:this.shape_9}]},1).to({state:[{t:this.shape_12},{t:this.shape_8},{t:this.shape_7},{t:this.shape_11}]},1).to({state:[{t:this.shape_13},{t:this.shape_8},{t:this.shape_7}]},1).wait(1));

	// Layer 8
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AiJDNQgvhbADhzQADh2AvhVIAAAAQAxhYBCgBIADAAIAEAAIAWAGIAIACIAcAJQASAFAhAVIAAAAIAFADQADABADAEIAQAOIAAAAQAcArARBGQALBHAAApQgBAngKA1QgTBGgvBeIgBABIghARQgcAMgTAEIAAAAQgKABgIADIAAAAIgXADIAAAAQgHgBgFABIAAAAIgCAAQhBAAgqhZg");
	this.shape_14.setTransform(18.3,29.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AiJDNQgvhbADhzQADh2AvhVIAAAAQAYgrAcgWIADgFIAFgCIACgBQAZgQAcAAIADAAIAEAAIAWAGIAIACIAcAJQASAFAhAVIAAAAIAFADQADABADAEIAQAOIAAAAQAcArARBGQALBHAAApQgBAngKA1QgTBGgvBeIgBABIghARQgcAMgTAEIAAAAQgKABgIADIAAAAIgXADIAAAAQgHgBgFABIAAAAIgCAAQhBAAgqhZg");
	this.shape_15.setTransform(18.3,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14}]}).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36.6,59);


(lib.FIZ_23_part_01811509 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A4C0C3").s().p("AguD+IgJgBIgBgGQAUgvAUg0QAmhmAAhhQAAhVguhEQgTgbgUgSIAOgEIAHAAIABAAQAsAAAeBJQAfBHAABrIgBAOIgCAAIAAAVQgHBTgaA/QgcBLgsAAIgCAAg");
	this.shape.setTransform(20.1,28.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A4C0C3").s().p("AgEg9QAAgZgFgYQASADAVAGQAGAoAAAxIgBAOIgCAAIAAAWQgEAngHAjQgcAIgdAFQAfhYAAhUg");
	this.shape_1.setTransform(22.9,29.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#529B9E").s().p("AgoD+IgKgBIAAgGIAmhgQAcgEAggIQgGAVgIATQgdBLgsAAIgBAAgAAhh+IgQgDQgMgogXgjQgTgbgUgSQALgEALAAQArAAAfBJQAMAbAHAgIgZgFg");
	this.shape_2.setTransform(19.5,28.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A4C0C3").s().p("AgOgnQAUAEAWAGIgBAOIgCAAIAAAUIgCAWQgZAIgZAFQAKgoADgng");
	this.shape_3.setTransform(23.7,31.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#529B9E").s().p("AgtD+IgKgBIgBgGQAUgvAUg0QAKgYAGgZIAAAAIANgDIAqgKQgKAzgRAqQgcBLgsAAIgBAAgAAWglIAAgOQAAhVguhEQgTgbgUgSQALgEALAAQAsAAAeBJQAcA+ADBaQgVgGgVgDg");
	this.shape_4.setTransform(20.1,28.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#529B9E").s().p("AguD+IgJgBIgBgGQAUgvAUg0QANgiAHgiQAagFAbgHQgJA9gUAyQgcBLgsAAIgCAAgAAWgzQAAhVguhEQgTgbgUgSQALgEALAAQAsAAAeBJQAfBHAABrIgBAOIgCAAIAAAWIAAAEIAAAAQgaAHgYAFQALgyAAgzg");
	this.shape_5.setTransform(20.1,28.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

	// Layer 6
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D9FFFF").s().p("AAJD+IgJgBQgrgIggg+QgqhNgChiQgFhiArhRQAjg/AogPIALgEIAHAAIABAAQAuAAAeBJQAgBHgBBrIgBAOIgBAAIAAAVQgIBTgZA/QgdBLguAAIgBAAg");
	this.shape_6.setTransform(14.4,28.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#656BAA").s().p("AgRDEQAjhaAFhtQgBhwgihVQgLgZgKgQQATAMAOAPIAAAAQAEAHAEAKQAeBOAEBiQABAxgRBZQgHAcgLAfIAAAAQgKAbgNAWQgHADgJAHIABAAIgLAHQAMgTAMgbg");
	this.shape_7.setTransform(26.6,28.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#66CCCC").s().p("AAFD+IgIgBQgrgIghg+QgIgPgGgPQA7AJBDgLQAegEAggIQgGAVgIATQgdBLguAAIgBAAgABQh+IgQgDQhUgNhUARQAIgYAMgWQAig/AogPQAKgEAKAAQAuAAAeBJQAMAbAHAgIgZgFg");
	this.shape_8.setTransform(14.8,28.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D9FFFF").s().p("AhlBwQgRg1gBg8IAAgCQgBgWACgWIACgZIAAgCIABgBIAAgEIAFgXIAAgDQBcgWBcAQQAUAEAUAFQAGApAAAwIgBAOIgBAAIAAAXQgEAngIAjQgeAIgcAFQgsAIglAAQgkAAgggHg");
	this.shape_9.setTransform(14.4,29.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D9FFFF").s().p("AA3A5IAAAAIgWADIAWgDgAhxAcIgCgOIgEgpIAAgCIAAgDIAAgNQBhgZBiASQAWAEAWAGIgBAOIgBAWIgDAVQgaAHgZAFQg1ALgrAAQgrAAgmgKg");
	this.shape_10.setTransform(14.4,32.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#66CCCC").s().p("AAJD+IgJgBQgrgIggg+QgVgngLgsICMACIAWgDIAAAAIAOgDIAqgKQgJAzgRAqQgdBLguAAIgBAAgABOglQhjgShiAYQAEhMAihAQAjg/AngPQAJgEALAAQAuAAAeBJQAcA+ADBaQgVgGgVgDg");
	this.shape_11.setTransform(14.4,28.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#66CCCC").s().p("AAJD+IgJgBQgrgIggg+QgZgvgLg2QBNAQBfgSQAagFAbgHQgJA9gUAyQgdBLguAAIgBAAgAh0A0QgCgWgBgWQgFhiArhRQAjg/AogPQAIgEALAAQAuAAAeBJQAgBHgBBrIgBAOIgBAWIAAAEIgBAAQgZAHgZAFQg2AMguAAQgsAAgngKg");
	this.shape_12.setTransform(14.4,28.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).to({state:[{t:this.shape_7},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_7},{t:this.shape_10}]},1).to({state:[{t:this.shape_7},{t:this.shape_12}]},1).wait(1));

	// Layer 5
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ah7DGQgshXABhwQgChyArhTQAuhWBEAAQACgBAJADQAHABAgAKQAdAKAeATIAFAEIAAgBQADABACAEQAEACAFAEIAAABIAAABIgBAAIgBAAIgBgBQANAUAPAvQAVBAAEBLQgBBKgRBHQgLAmgSAqIgTAqIAAAAQgBACghASIAAAAQgjARgHAAIAAAAQgHgCgSADIAAAAQgHAAgEABIgBAAIAAAAQhDAAgshXg");
	this.shape_13.setTransform(16.7,28.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgYEcQgRgCgPgIQgngTgcg5QgshXABhwQgChyArhTQAuhWBEAAQACgBAJADQAHABAgAKQAdAKAeATIAFAEIAAgBQADABACAEQAEACAFAEIAAABIAAABIgBAAIgBAAIgBgBQANAUAPAvQAVBAAEBLQgBBKgRBHQgLAmgSAqIgTAqIAAAAQgBACghASIAAAAQgjARgHAAIAAAAQgHgCgSADIAAAAQgHAAgEABIgBAAIAAAAIgMgBg");
	this.shape_14.setTransform(16.7,28.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13}]}).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33.5,57.2);


(lib.FIZ_23_part_01011509 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 12
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("AhYB4QgggeAAgNQAAgDAHgHQAIgJAIAAIASALQAVANANADQgBgDgpg7QgMgNgNgbQgNgbAAgNQArg5AbgQQAIgGAYgGQAXgHAGABQAggBAqAwQAuAzAAA1QAAAIgRAhQgTAlgTAQQgIAHgXAIIgWAHIggAVQgQAJgLABQgPAAgggegAAvgMQgkAUgMAJQAoAAAVgGQAdgKAEgWQAGgDgRgIIgjAUg");
	this.shape.setTransform(44.7,68.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#72EBEB").s().p("AgTA5QABgNgKgQQgMgSghgmIBogkQATAGAMAXQANAVAAAQQgBAchdAjIAAgIg");
	this.shape_1.setTransform(43.4,16.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0FF7A").s().p("AilENQgNgeAAgKQAJgiAXgjQAuhIBHgPQAkgIAcgCQAZgBAGAFQAPAGATAVQAWAXAAARQAAAGgUAaQgHgLgVgQIgTgOQg2AAg8AjQhIAoAAAyQAAAPAFAMQAFANAIADIgJALQgDACgGAAQgSAAgQglgAhjisQgXgigVAJIgJABQAOgMAYgLQAUgKAFAAQAMAAASAPQASAQAJAUQAXA2hHAWQAFgkgYgigABbj1QgPghgGgGQBkgeAEANQAFANAAAVQAAAZgCAGQgEAKgKACIgjAJIgXAHQgBgGgNgfg");
	this.shape_2.setTransform(42.1,38);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8089DD").s().p("AkOB7QgnhaAAgeQAAgXAhgaQAcgWASAAQAgAAAZAUQAcAVgFAcQAQBEAOAbIAoBGQhLAkgZAUQgNALgKAMQgbgdgohdgACWiZQAAgMgDgNQgFgSgLgLQAcgIBEgPQBHgPAMABIAABQQgUAFhFAPIhLARQAFgPgBgLg");
	this.shape_3.setTransform(47,27.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer 10
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhmGVQgygfABgtQAAgBAKgOIASgXIgPgaQgRANgEADQgDABgLAAQgPAAgNgbQgRgsgPghIAZg5QgBgDg7hlQg5hfAAg4QAAhmEKheQC9hEDEgdIAAB9Qg2AVguAMQguAJgYAHQhRAYiyBxIA1BbQARAZADAAQAFABAXgDQAUgFAGAAQASAAAdAbQAiAiAAAnQAAAXgXAOQAqA2AKAUQALAVgBAhQABADgLARIgYAnIgSAgQgLAVgGACQgTAIgRAFIgNAFQgaAUgPAIQgTAKgRAAQgagHgZgQg");
	this.shape_4.setTransform(45.4,42.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.FIZ_23_part_00911509 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BBC767").s().p("AgdAmQgGgUgQhIQAfADAdAOQAjAPAIARIglAdQglAfgCAAIgFgRg");
	this.shape.setTransform(68.9,8.7);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0FF7A").s().p("AglDTQghgWgRgdQgjg3gYggQgSgWhYg5QhOg1gNgGQBVhBBKggQAogSBigcQBfgdCGAFQCOAEATAqQhPBFhGATQg/AIgRAHIgBABIAEAIQAEAHAHAAQAKAAAOAvQAFARACAVQACAUAAAeQAABAgQAiQgeBEhaAAQgcAAgjgXgAC5BIIADgnQAAgTgGgUQgGghgPgWIBFgPQA+gRAfgaQgFAMg6BmQg7BogYAjQAEgbAEgjg");
	this.shape_1.setTransform(39.6,26.7);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgVD5IgogiQgtgogOgaQgshThmg7QgagNgugWQglgSgIgHQBRhHBvg0QCzhUDFAAQC2AAAPBIQALAxhMBxQg+BzgtA9QhQBvhmAAQgdAAgUgMg");
	this.shape_2.setTransform(38.5,26.2);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,76.9,52.4);


(lib.FIZ_23_MOUTH_COMP11509 = function() {
	this.initialize();

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah8BaQgUgEgGgFQgHgGgIgNIgLgTQgUAZgRAIQgIADgKAAQgfAAgbhNIAJAFQAPAEAhADIAmADQCSAAB9ggQBZgXB4g2QAEAPAAAHQAAAegQALQgLAIgUgBQgDAAgOgGIgOgGQgIAAgFAOIgLAdQgWAthRAAQgUAAgRgOIgQgPQgrAegdAaQgQAMgmAAQgOAAgQgDg");
	this.shape.setTransform(33,12);

	// Layer 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiKBxQgMgPgSgTIgJAPQgMAJgjAAQggAAgSgpQgcg+gUgTQgCgGAKAAQBiATASAAQDIAADKhRQBMgeAPgBQAcgDAAAnQAABohegbQgVBThvAAIgYgHQgYgIgKAAQgnAfgfAPQgWALgrAAQgiAAgIgHg");
	this.shape_1.setTransform(32.4,12);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.1,64.8,24);


(lib.FIZZYIDLEEYES11509 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.FIZ_23_part_02111509("single",0);
	this.instance.setTransform(-30.6,11.8,0.768,0.768,0,-1,178.9,3.5,4.6);

	this.instance_1 = new lib.FIZ_23_part_02711509("single",0);
	this.instance_1.setTransform(33.7,11,0.768,0.924,0,-1,178.9,2.9,4);

	this.instance_2 = new lib.FIZ_23_part_02311509("single",0);
	this.instance_2.setTransform(-36.4,-27,0.768,0.768,0,-1,178.9,13.8,9.1);

	this.instance_3 = new lib.FIZ_23_part_02411509("single",0);
	this.instance_3.setTransform(35,-28.2,0.768,0.768,0,-1,178.9,12.6,9.5);

	this.instance_4 = new lib.FIZ_23_part_02011509("single",0);
	this.instance_4.setTransform(-32.1,12.9,0.768,0.768,0,-1,178.9,18.3,29.5);

	this.instance_5 = new lib.FIZ_23_part_01811509("single",0);
	this.instance_5.setTransform(34.3,11.6,0.768,0.768,0,-1,178.9,16.6,28.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5,p:{startPosition:0}},{t:this.instance_4,p:{startPosition:0}},{t:this.instance_3,p:{y:-28.2,regX:12.6,skewX:-1,skewY:178.9,x:35}},{t:this.instance_2,p:{y:-27,skewX:-1,skewY:178.9}},{t:this.instance_1,p:{y:11}},{t:this.instance,p:{y:11.8}}]}).to({state:[{t:this.instance_5,p:{startPosition:1}},{t:this.instance_4,p:{startPosition:1}},{t:this.instance_3,p:{y:-27.4,regX:12.6,skewX:-1,skewY:178.9,x:35}},{t:this.instance_2,p:{y:-26.3,skewX:-1,skewY:178.9}},{t:this.instance_1,p:{y:11}},{t:this.instance,p:{y:11.8}}]},42).to({state:[{t:this.instance_5,p:{startPosition:2}},{t:this.instance_4,p:{startPosition:2}},{t:this.instance_3,p:{y:-24.2,regX:12.5,skewX:-5.5,skewY:174.4,x:35.1}},{t:this.instance_2,p:{y:-23,skewX:6,skewY:-173.9}},{t:this.instance_1,p:{y:12.3}},{t:this.instance,p:{y:12.6}}]},1).to({state:[{t:this.instance_5,p:{startPosition:3}},{t:this.instance_4,p:{startPosition:3}},{t:this.instance_3,p:{y:-18.2,regX:12.6,skewX:-16.8,skewY:163.1,x:35}},{t:this.instance_2,p:{y:-17.1,skewX:12.5,skewY:-167.4}}]},1).to({state:[{t:this.instance_5,p:{startPosition:2}},{t:this.instance_4,p:{startPosition:2}},{t:this.instance_3,p:{y:-24.2,regX:12.5,skewX:-5.5,skewY:174.4,x:35.1}},{t:this.instance_2,p:{y:-23,skewX:6,skewY:-173.9}},{t:this.instance_1,p:{y:12.3}},{t:this.instance,p:{y:12.6}}]},2).to({state:[{t:this.instance_5,p:{startPosition:1}},{t:this.instance_4,p:{startPosition:1}},{t:this.instance_3,p:{y:-27.4,regX:12.6,skewX:-1,skewY:178.9,x:35}},{t:this.instance_2,p:{y:-26.3,skewX:-1,skewY:178.9}},{t:this.instance_1,p:{y:11}},{t:this.instance,p:{y:11.8}}]},1).to({state:[{t:this.instance_5,p:{startPosition:0}},{t:this.instance_4,p:{startPosition:0}},{t:this.instance_3,p:{y:-28.2,regX:12.6,skewX:-1,skewY:178.9,x:35}},{t:this.instance_2,p:{y:-27,skewX:-1,skewY:178.9}},{t:this.instance_1,p:{y:11}},{t:this.instance,p:{y:11.8}}]},1).wait(59));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.1,-35.7,94.6,71.6);


(lib.FIZZYENTER11509 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// BODY
	this.instance = new lib.FIZ_23_part_03211509("single",0);
	this.instance.setTransform(-275.1,386.5,0.768,0.768,0,10.6,-169.3,23.4,111.2);

	this.instance_1 = new lib.FIZ_23_part_02811509("single",1);
	this.instance_1.setTransform(-280.2,302.3,0.776,0.823,0,-10.9,166.8,4.5,1.9);

	this.instance_2 = new lib.FIZ_23_part_01011509("single",1);
	this.instance_2.setTransform(-252.2,309.9,0.767,0.767,0,28.6,-151.3,83,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2,p:{skewX:28.6,skewY:-151.3,x:-252.2,y:309.9,regX:83}},{t:this.instance_1,p:{regX:4.5,skewX:-10.9,skewY:166.8,x:-280.2,y:302.3,regY:1.9,scaleY:0.823}},{t:this.instance,p:{regX:23.4,skewX:10.6,skewY:-169.3,x:-275.1,y:386.5,regY:111.2}}]},1).to({state:[{t:this.instance_2,p:{skewX:25.3,skewY:-154.6,x:-253.3,y:190.5,regX:83}},{t:this.instance_1,p:{regX:4.4,skewX:-14.2,skewY:163.5,x:-281.6,y:184.6,regY:1.9,scaleY:0.823}},{t:this.instance,p:{regX:23.3,skewX:7.3,skewY:-172.6,x:-271.8,y:268.4,regY:111.2}}]},2).to({state:[{t:this.instance_2,p:{skewX:19.6,skewY:-160.3,x:-271.8,y:143.5,regX:83}},{t:this.instance_1,p:{regX:4.5,skewX:-19.9,skewY:157.8,x:-300.6,y:140.4,regY:2,scaleY:0.824}},{t:this.instance,p:{regX:23.4,skewX:1.5,skewY:-178.4,x:-282.3,y:222.9,regY:111.4}}]},2).to({state:[{t:this.instance_2,p:{skewX:17.5,skewY:-162.4,x:-277.4,y:136.9,regX:83}},{t:this.instance_1,p:{regX:4.5,skewX:-22,skewY:155.7,x:-306.4,y:134.9,regY:2,scaleY:0.824}},{t:this.instance,p:{regX:23.4,skewX:-0.5,skewY:179.4,x:-285.1,y:216.7,regY:111.4}}]},2).to({state:[{t:this.instance_2,p:{skewX:17.8,skewY:-162.1,x:-276.3,y:137.5,regX:82.9}},{t:this.instance_1,p:{regX:4.5,skewX:-21.7,skewY:156,x:-305.2,y:135.3,regY:2,scaleY:0.824}},{t:this.instance,p:{regX:23.4,skewX:-0.1,skewY:179.8,x:-284.5,y:217.2,regY:111.4}}]},2).to({state:[{t:this.instance_2,p:{skewX:18.1,skewY:-161.8,x:-276.1,y:138.5,regX:83}},{t:this.instance_1,p:{regX:4.5,skewX:-21.5,skewY:156.3,x:-304.9,y:136.2,regY:1.9,scaleY:0.824}},{t:this.instance,p:{regX:23.4,skewX:0,skewY:180,x:-284.5,y:218.2,regY:111.3}}]},2).wait(3));

	// HEAD
	this.instance_3 = new lib.FIZ_23_part_02111509("single",0);
	this.instance_3.setTransform(-256.2,203.8,0.767,0.767,0,18.3,-161.6,3.5,4.5);

	this.instance_4 = new lib.FIZ_23_part_02711509("single",0);
	this.instance_4.setTransform(-195.2,224.5,0.767,0.923,0,18.3,-161.6,2.9,4);

	this.instance_5 = new lib.FIZ_23_part_02311509("single",0);
	this.instance_5.setTransform(-248.8,165.3,0.767,0.767,0,18.3,-161.6,13.8,9.1);

	this.instance_6 = new lib.FIZ_23_part_02411509("single",0);
	this.instance_6.setTransform(-181,187.8,0.767,0.767,0,18.3,-161.6,12.6,9.5);

	this.instance_7 = new lib.FIZ_23_MOUTH_COMP11509("single",0);
	this.instance_7.setTransform(-244,251.9,0.767,0.767,0,18.3,-161.6,31.2,10.2);

	this.instance_8 = new lib.FIZ_23_part_02211509("single",0);
	this.instance_8.setTransform(-216.7,216.9,0.767,0.767,0,9.8,-170.1,11.8,2.7);

	this.instance_9 = new lib.FIZ_23_part_02011509("single",0);
	this.instance_9.setTransform(-258,204.5,0.767,0.767,0,18.3,-161.6,18.4,29.6);

	this.instance_10 = new lib.FIZ_23_part_01811509("single",0);
	this.instance_10.setTransform(-194.9,225.2,0.767,0.767,0,18.3,-161.6,16.6,28.6);

	this.instance_11 = new lib.FIZZYHEAD11509("synched",0);
	this.instance_11.setTransform(-228.4,192.1,0.767,0.767,0,18.3,-161.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11,p:{skewX:18.3,skewY:-161.6,x:-228.4,y:192.1,scaleX:0.767,scaleY:0.767}},{t:this.instance_10,p:{regX:16.6,skewX:18.3,skewY:-161.6,x:-194.9,y:225.2,regY:28.6,scaleX:0.767,scaleY:0.767}},{t:this.instance_9,p:{skewX:18.3,skewY:-161.6,x:-258,y:204.5,scaleX:0.767,scaleY:0.767,regY:29.6,regX:18.4}},{t:this.instance_8,p:{regY:2.7,skewX:9.8,skewY:-170.1,x:-216.7,y:216.9,scaleX:0.767,scaleY:0.767}},{t:this.instance_7,p:{skewX:18.3,skewY:-161.6,x:-244,y:251.9,regX:31.2,scaleX:0.767,scaleY:0.767}},{t:this.instance_6,p:{regY:9.5,skewX:18.3,skewY:-161.6,x:-181,y:187.8,scaleX:0.767,scaleY:0.767,regX:12.6}},{t:this.instance_5,p:{regY:9.1,skewX:18.3,skewY:-161.6,x:-248.8,y:165.3,scaleX:0.767,scaleY:0.767}},{t:this.instance_4,p:{skewX:18.3,skewY:-161.6,x:-195.2,y:224.5,regY:4,scaleX:0.767,scaleY:0.923,regX:2.9}},{t:this.instance_3,p:{regX:3.5,regY:4.5,skewX:18.3,skewY:-161.6,x:-256.2,y:203.8,scaleX:0.767,scaleY:0.767}}]},1).to({state:[{t:this.instance_11,p:{skewX:11.2,skewY:-168.7,x:-244.8,y:70.5,scaleX:0.767,scaleY:0.767}},{t:this.instance_10,p:{regX:16.7,skewX:11.2,skewY:-168.7,x:-207.5,y:99.2,regY:28.6,scaleX:0.767,scaleY:0.767}},{t:this.instance_9,p:{skewX:11.2,skewY:-168.7,x:-272.7,y:86.4,scaleX:0.767,scaleY:0.767,regY:29.6,regX:18.4}},{t:this.instance_8,p:{regY:2.6,skewX:2.7,skewY:-177.2,x:-230.2,y:93.5,scaleX:0.767,scaleY:0.767}},{t:this.instance_7,p:{skewX:11.2,skewY:-168.7,x:-253,y:131.7,regX:31.2,scaleX:0.767,scaleY:0.767}},{t:this.instance_6,p:{regY:9.4,skewX:11.2,skewY:-168.7,x:-198.3,y:60.3,scaleX:0.767,scaleY:0.767,regX:12.6}},{t:this.instance_5,p:{regY:9,skewX:11.2,skewY:-168.7,x:-268.4,y:46.3,scaleX:0.767,scaleY:0.767}},{t:this.instance_4,p:{skewX:11.2,skewY:-168.7,x:-207.9,y:98.5,regY:4,scaleX:0.767,scaleY:0.923,regX:2.9}},{t:this.instance_3,p:{regX:3.4,regY:4.6,skewX:11.2,skewY:-168.7,x:-270.9,y:85.6,scaleX:0.767,scaleY:0.767}}]},2).to({state:[{t:this.instance_11,p:{skewX:1.5,skewY:-178.4,x:-282.3,y:22,scaleX:0.768,scaleY:0.768}},{t:this.instance_10,p:{regX:16.7,skewX:1.5,skewY:-178.4,x:-240.8,y:44.1,regY:28.5,scaleX:0.768,scaleY:0.768}},{t:this.instance_9,p:{skewX:1.5,skewY:-178.4,x:-307.2,y:42.4,scaleX:0.768,scaleY:0.768,regY:29.6,regX:18.4}},{t:this.instance_8,p:{regY:2.6,skewX:-6.9,skewY:173,x:-264,y:42.4,scaleX:0.768,scaleY:0.768}},{t:this.instance_7,p:{skewX:1.5,skewY:-178.4,x:-280.1,y:83.8,regX:31.1,scaleX:0.768,scaleY:0.768}},{t:this.instance_6,p:{regY:9.5,skewX:1.5,skewY:-178.4,x:-238.2,y:4.3,scaleX:0.768,scaleY:0.768,regX:12.6}},{t:this.instance_5,p:{regY:9.1,skewX:1.5,skewY:-178.4,x:-309.7,y:2.2,scaleX:0.768,scaleY:0.768}},{t:this.instance_4,p:{skewX:1.5,skewY:-178.4,x:-241.3,y:43.4,regY:3.9,scaleX:0.768,scaleY:0.924,regX:2.9}},{t:this.instance_3,p:{regX:3.5,regY:4.6,skewX:1.5,skewY:-178.4,x:-305.6,y:41.4,scaleX:0.768,scaleY:0.768}}]},2).to({state:[{t:this.instance_11,p:{skewX:-2.3,skewY:177.6,x:-296.2,y:14.1,scaleX:0.768,scaleY:0.768}},{t:this.instance_10,p:{regX:16.7,skewX:-2.3,skewY:177.6,x:-253.2,y:33.3,regY:28.5,scaleX:0.768,scaleY:0.768}},{t:this.instance_9,p:{skewX:-2.3,skewY:177.6,x:-319.5,y:36.1,scaleX:0.768,scaleY:0.768,regY:29.5,regX:18.4}},{t:this.instance_8,p:{regY:2.6,skewX:-10.8,skewY:169.1,x:-276.5,y:33.1,scaleX:0.768,scaleY:0.768}},{t:this.instance_7,p:{skewX:-2.3,skewY:177.6,x:-289.7,y:75.6,regX:31,scaleX:0.768,scaleY:0.768}},{t:this.instance_6,p:{regY:9.5,skewX:-2.3,skewY:177.6,x:-253.4,y:-6.5,scaleX:0.768,scaleY:0.768,regX:12.7}},{t:this.instance_5,p:{regY:9.1,skewX:-2.3,skewY:177.6,x:-324.8,y:-3.7,scaleX:0.768,scaleY:0.768}},{t:this.instance_4,p:{skewX:-2.3,skewY:177.6,x:-253.7,y:32.8,regY:4,scaleX:0.768,scaleY:0.924,regX:3}},{t:this.instance_3,p:{regX:3.5,regY:4.6,skewX:-2.3,skewY:177.6,x:-318.1,y:34.9,scaleX:0.768,scaleY:0.768}}]},2).to({state:[{t:this.instance_11,p:{skewX:-1.5,skewY:178.4,x:-293.5,y:16.4,scaleX:0.768,scaleY:0.768}},{t:this.instance_10,p:{regX:16.8,skewX:-1.5,skewY:178.4,x:-250.8,y:36.2,regY:28.6,scaleX:0.768,scaleY:0.768}},{t:this.instance_9,p:{skewX:-1.5,skewY:178.4,x:-317.1,y:38.1,scaleX:0.768,scaleY:0.768,regY:29.5,regX:18.2}},{t:this.instance_8,p:{regY:2.6,skewX:-10,skewY:169.9,x:-274.1,y:35.7,scaleX:0.768,scaleY:0.768}},{t:this.instance_7,p:{skewX:-1.5,skewY:178.4,x:-287.9,y:78,regX:31.1,scaleX:0.768,scaleY:0.768}},{t:this.instance_6,p:{regY:9.5,skewX:-1.5,skewY:178.4,x:-250.3,y:-3.6,scaleX:0.768,scaleY:0.768,regX:12.6}},{t:this.instance_5,p:{regY:9.1,skewX:-1.5,skewY:178.4,x:-321.9,y:-1.8,scaleX:0.768,scaleY:0.768}},{t:this.instance_4,p:{skewX:-1.5,skewY:178.4,x:-251.3,y:35.6,regY:4,scaleX:0.768,scaleY:0.924,regX:2.9}},{t:this.instance_3,p:{regX:3.5,regY:4.6,skewX:-1.5,skewY:178.4,x:-315.7,y:37,scaleX:0.768,scaleY:0.768}}]},2).to({state:[{t:this.instance_11,p:{skewX:-1,skewY:178.9,x:-292.1,y:17.5,scaleX:0.768,scaleY:0.768}},{t:this.instance_10,p:{regX:16.6,skewX:-1,skewY:178.9,x:-249.5,y:37.6,regY:28.6,scaleX:0.768,scaleY:0.768}},{t:this.instance_9,p:{skewX:-1,skewY:178.9,x:-316,y:38.9,scaleX:0.768,scaleY:0.768,regY:29.5,regX:18.3}},{t:this.instance_8,p:{regY:2.7,skewX:-9.5,skewY:170.4,x:-272.9,y:37,scaleX:0.768,scaleY:0.768}},{t:this.instance_7,p:{skewX:-1,skewY:178.9,x:-287.1,y:79.1,regX:31.1,scaleX:0.768,scaleY:0.768}},{t:this.instance_6,p:{regY:9.5,skewX:-1,skewY:178.9,x:-248.8,y:-2.2,scaleX:0.768,scaleY:0.768,regX:12.6}},{t:this.instance_5,p:{regY:9.1,skewX:-1,skewY:178.9,x:-320.3,y:-1,scaleX:0.768,scaleY:0.768}},{t:this.instance_4,p:{skewX:-1,skewY:178.9,x:-250.1,y:37,regY:4,scaleX:0.768,scaleY:0.924,regX:2.9}},{t:this.instance_3,p:{regX:3.5,regY:4.6,skewX:-1,skewY:178.9,x:-314.5,y:37.8,scaleX:0.768,scaleY:0.768}}]},2).wait(3));

	// COLLAR
	this.instance_12 = new lib.FIZ_23_part_00911509("single",0);
	this.instance_12.setTransform(-264.5,307.1,0.75,0.768,0,10.6,-169.3,41.6,43.4);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({startPosition:0,_off:false},0).wait(2).to({skewX:7.3,skewY:-172.5,x:-265.7,y:188.5},0).wait(2).to({skewX:1.5,skewY:-178.3,x:-284.2,y:142.7},0).wait(2).to({regY:43.5,skewX:-0.4,skewY:-180.5,x:-289.9,y:134.6},0).wait(2).to({skewX:0,skewY:-180.1,x:-288.8,y:137.1},0).wait(2).to({skewX:0,skewY:-179.9,x:-288.5,y:138.1},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.FIZZHEADNEST001 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PUPILS
	this.instance = new lib.FIZ23RPUPILL001("single",0);
	this.instance.setTransform(186.3,188.4,1,1.203,0,0,0,2.9,4);

	this.instance_1 = new lib.FIZ23RPUPILR001("single",0);
	this.instance_1.setTransform(102.4,188.5,1,1,0,0,0,3.5,4.6);

	this.instance_2 = new lib.FIZ34RPUPILR001("single",0);
	this.instance_2.setTransform(123.3,168.9,1,1,0,0,0,3.5,4.6);

	this.instance_3 = new lib.FIZ34RPUPILL001("single",0);
	this.instance_3.setTransform(208.7,168.7,1,1,0,0,0,2.9,4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AGaBJIgGgDIgEgEQgCgDAAgJQAAgKAfgvQAkg5AagEIACAAQABACAAAKQAAAVgXAwQgbA5gVAAQgKAAgDgBgAnoBJIgCgHQgDgFAAgJQAhg0AhgjQBBhLAABJQAAAPgtAvQguAxgRAAg");
	this.shape.setTransform(160.9,177.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{y:188.5}},{t:this.instance,p:{y:188.4}}]}).to({state:[{t:this.instance_1,p:{y:190.2}},{t:this.instance,p:{y:190.1}}]},6).to({state:[]},2).to({state:[]},4).to({state:[{t:this.instance_1,p:{y:190.2}},{t:this.instance,p:{y:190.1}}]},1).to({state:[{t:this.instance_1,p:{y:188.5}},{t:this.instance,p:{y:188.4}}]},1).to({state:[{t:this.instance_1,p:{y:188.5}},{t:this.instance,p:{y:188.4}}]},2).to({state:[{t:this.instance_1,p:{y:188.5}},{t:this.instance,p:{y:188.4}}]},2).to({state:[{t:this.instance_1,p:{y:190.2}},{t:this.instance,p:{y:190.1}}]},19).to({state:[]},2).to({state:[]},2).to({state:[]},2).to({state:[{t:this.instance_1,p:{y:190.2}},{t:this.instance,p:{y:190.1}}]},2).to({state:[{t:this.instance_3,p:{x:208.7,y:168.7}},{t:this.instance_2,p:{x:123.3,y:168.9}}]},1).to({state:[{t:this.instance_3,p:{x:207.9,y:173.6}},{t:this.instance_2,p:{x:122.6,y:171.9}}]},17).to({state:[{t:this.shape}]},1).to({state:[{t:this.instance_3,p:{x:202.3,y:183.6}},{t:this.instance_2,p:{x:114.4,y:181.7}}]},1).to({state:[{t:this.instance_3,p:{x:201.3,y:184}},{t:this.instance_2,p:{x:113.3,y:182.1}}]},2).to({state:[{t:this.instance_3,p:{x:201.3,y:184}},{t:this.instance_2,p:{x:113.3,y:182.1}}]},21).to({state:[{t:this.instance_3,p:{x:201.3,y:184}},{t:this.instance_2,p:{x:113.3,y:182.1}}]},29).to({state:[{t:this.instance_3,p:{x:201.3,y:185.6}},{t:this.instance_2,p:{x:113.3,y:184.5}}]},1).to({state:[]},2).to({state:[{t:this.instance_1,p:{y:190.2}},{t:this.instance,p:{y:190.1}}]},5).to({state:[{t:this.instance_1,p:{y:188.5}},{t:this.instance,p:{y:188.4}}]},1).to({state:[{t:this.instance_1,p:{y:188.5}},{t:this.instance,p:{y:188.4}}]},2).to({state:[{t:this.instance_1,p:{y:188.5}},{t:this.instance,p:{y:188.4}}]},2).to({state:[{t:this.instance_1,p:{y:188.5}},{t:this.instance,p:{y:188.4}}]},27).to({state:[{t:this.instance_1,p:{y:188.5}},{t:this.instance,p:{y:188.4}}]},1).wait(16));

	// BROWS
	this.instance_4 = new lib.FIZ23RBROWL001("single",0);
	this.instance_4.setTransform(188.7,137.1,1,1,0,0,0,12.6,9.5);

	this.instance_5 = new lib.FIZ23RBROWR001("single",0);
	this.instance_5.setTransform(95.5,136.9,1,1,0,0,0,13.8,9.1);

	this.instance_6 = new lib.FIZ34RBROWR001("single",2);
	this.instance_6.setTransform(103.5,124.5,0.999,0.999,-10,0,0,15.5,9.5);

	this.instance_7 = new lib.FIZ34RBROWL001("single",2);
	this.instance_7.setTransform(198.6,126.9,0.999,0.999,12.8,0,0,11.3,8.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5,p:{scaleX:1,scaleY:1,rotation:0,x:95.5,y:136.9,regY:9.1,startPosition:0,regX:13.8}},{t:this.instance_4,p:{scaleX:1,scaleY:1,rotation:0,x:188.7,y:137.1,regY:9.5,startPosition:0}}]}).to({state:[{t:this.instance_5,p:{scaleX:0.999,scaleY:0.999,rotation:9,x:100.1,y:150.6,regY:9.1,startPosition:0,regX:13.8}},{t:this.instance_4,p:{scaleX:0.999,scaleY:0.999,rotation:-12.9,x:188.8,y:149,regY:9.5,startPosition:0}}]},6).to({state:[{t:this.instance_5,p:{scaleX:0.999,scaleY:0.999,rotation:24.1,x:100.1,y:154.9,regY:9.2,startPosition:0,regX:13.8}},{t:this.instance_4,p:{scaleX:0.998,scaleY:0.998,rotation:-27.9,x:188.5,y:154.9,regY:9.4,startPosition:0}}]},2).to({state:[{t:this.instance_5,p:{scaleX:0.999,scaleY:0.999,rotation:25.1,x:100.1,y:155.7,regY:9.1,startPosition:0,regX:13.8}},{t:this.instance_4,p:{scaleX:0.998,scaleY:0.998,rotation:-27.9,x:188.5,y:155.8,regY:9.4,startPosition:0}}]},2).to({state:[{t:this.instance_5,p:{scaleX:0.998,scaleY:0.998,rotation:20.6,x:100.2,y:154,regY:9.2,startPosition:0,regX:13.8}},{t:this.instance_4,p:{scaleX:0.998,scaleY:0.998,rotation:-22.7,x:188.6,y:154.1,regY:9.5,startPosition:0}}]},2).to({state:[{t:this.instance_5,p:{scaleX:0.999,scaleY:0.999,rotation:4,x:100.4,y:146.3,regY:9.1,startPosition:0,regX:13.8}},{t:this.instance_4,p:{scaleX:0.999,scaleY:0.999,rotation:-18.2,x:188.7,y:149.9,regY:9.5,startPosition:0}}]},1).to({state:[{t:this.instance_5,p:{scaleX:1,scaleY:1,rotation:-0.2,x:95.9,y:134,regY:9,startPosition:4,regX:13.8}},{t:this.instance_4,p:{scaleX:0.998,scaleY:0.998,rotation:-3.9,x:192,y:147.3,regY:9.4,startPosition:3}}]},1).to({state:[{t:this.instance_5,p:{scaleX:1,scaleY:1,rotation:-0.2,x:95.9,y:135.7,regY:9,startPosition:4,regX:13.8}},{t:this.instance_4,p:{scaleX:0.998,scaleY:0.998,rotation:-3.9,x:192,y:149,regY:9.4,startPosition:3}}]},2).to({state:[{t:this.instance_5,p:{scaleX:1,scaleY:1,rotation:-0.2,x:95.9,y:136.5,regY:9,startPosition:4,regX:13.8}},{t:this.instance_4,p:{scaleX:0.998,scaleY:0.998,rotation:-3.9,x:192,y:149.8,regY:9.4,startPosition:3}}]},2).to({state:[{t:this.instance_5,p:{scaleX:0.999,scaleY:0.999,rotation:-3.7,x:100,y:143.4,regY:9.2,startPosition:0,regX:13.8}},{t:this.instance_4,p:{scaleX:0.999,scaleY:0.999,rotation:-16.7,x:188.9,y:153.4,regY:9.5,startPosition:0}}]},19).to({state:[{t:this.instance_5,p:{scaleX:0.999,scaleY:0.999,rotation:24.1,x:100.1,y:154.9,regY:9.2,startPosition:0,regX:13.8}},{t:this.instance_4,p:{scaleX:0.998,scaleY:0.998,rotation:-27.9,x:188.5,y:156.3,regY:9.4,startPosition:0}}]},2).to({state:[{t:this.instance_5,p:{scaleX:0.999,scaleY:0.999,rotation:24.4,x:100.1,y:155.6,regY:9.2,startPosition:0,regX:13.9}},{t:this.instance_4,p:{scaleX:0.998,scaleY:0.998,rotation:-30.7,x:188.5,y:157,regY:9.4,startPosition:0}}]},2).to({state:[{t:this.instance_5,p:{scaleX:0.998,scaleY:0.998,rotation:19.6,x:100.1,y:153.4,regY:9.2,startPosition:0,regX:13.9}},{t:this.instance_4,p:{scaleX:0.998,scaleY:0.998,rotation:-21.7,x:188.5,y:155,regY:9.5,startPosition:0}}]},2).to({state:[{t:this.instance_5,p:{scaleX:0.998,scaleY:0.998,rotation:3.3,x:100,y:145.5,regY:9.2,startPosition:0,regX:13.8}},{t:this.instance_4,p:{scaleX:0.999,scaleY:0.999,rotation:-9.2,x:188.7,y:146.2,regY:9.5,startPosition:0}}]},2).to({state:[{t:this.instance_7,p:{rotation:12.8,x:198.6,y:126.9,regY:8.8,scaleX:0.999,scaleY:0.999}},{t:this.instance_6,p:{rotation:-10,x:103.5,y:124.5,scaleX:0.999,scaleY:0.999,startPosition:2,regX:15.5,regY:9.5}}]},1).to({state:[{t:this.instance_7,p:{rotation:9.5,x:198.4,y:129.3,regY:8.8,scaleX:0.999,scaleY:0.999}},{t:this.instance_6,p:{rotation:-6,x:104.4,y:126.5,scaleX:0.999,scaleY:0.999,startPosition:2,regX:15.5,regY:9.5}}]},17).to({state:[{t:this.instance_7,p:{rotation:4.3,x:199.2,y:133.7,regY:8.8,scaleX:0.999,scaleY:0.999}},{t:this.instance_6,p:{rotation:8.5,x:105.1,y:135.3,scaleX:0.998,scaleY:0.998,startPosition:2,regX:15.5,regY:9.5}}]},1).to({state:[{t:this.instance_7,p:{rotation:-0.4,x:198.7,y:138.6,regY:8.7,scaleX:0.999,scaleY:0.999}},{t:this.instance_6,p:{rotation:-9,x:110.2,y:142.5,scaleX:0.997,scaleY:0.997,startPosition:0,regX:15.5,regY:9.5}}]},1).to({state:[{t:this.instance_7,p:{rotation:-0.4,x:198.4,y:139.3,regY:8.7,scaleX:0.999,scaleY:0.999}},{t:this.instance_6,p:{rotation:-6,x:110.8,y:145.1,scaleX:0.997,scaleY:0.997,startPosition:0,regX:15.5,regY:9.5}}]},2).to({state:[{t:this.instance_7,p:{rotation:17.8,x:200.4,y:132.4,regY:8.8,scaleX:0.998,scaleY:0.998}},{t:this.instance_6,p:{rotation:-12.5,x:106.4,y:132,scaleX:0.997,scaleY:0.997,startPosition:2,regX:15.5,regY:9.5}}]},21).to({state:[{t:this.instance_7,p:{rotation:14.5,x:200.4,y:135.5,regY:8.7,scaleX:0.997,scaleY:0.997}},{t:this.instance_6,p:{rotation:-6.2,x:106.4,y:135.2,scaleX:0.996,scaleY:0.996,startPosition:2,regX:15.6,regY:9.5}}]},29).to({state:[{t:this.instance_7,p:{rotation:-4.7,x:200.4,y:141.9,regY:8.8,scaleX:0.996,scaleY:0.996}},{t:this.instance_6,p:{rotation:0.8,x:106.4,y:139.9,scaleX:0.996,scaleY:0.996,startPosition:2,regX:15.5,regY:9.5}}]},1).to({state:[{t:this.instance_7,p:{rotation:-20,x:200.4,y:151.4,regY:8.8,scaleX:0.996,scaleY:0.996}},{t:this.instance_6,p:{rotation:21.4,x:106.5,y:151,scaleX:0.995,scaleY:0.995,startPosition:2,regX:15.5,regY:9.6}}]},2).to({state:[{t:this.instance_7,p:{rotation:-23.8,x:200.5,y:153.7,regY:8.8,scaleX:0.995,scaleY:0.995}},{t:this.instance_6,p:{rotation:25.4,x:106.5,y:151.8,scaleX:0.995,scaleY:0.995,startPosition:2,regX:15.4,regY:9.6}}]},2).to({state:[{t:this.instance_5,p:{scaleX:0.999,scaleY:0.999,rotation:4,x:100.4,y:146.3,regY:9.1,startPosition:0,regX:13.8}},{t:this.instance_4,p:{scaleX:0.999,scaleY:0.999,rotation:-18.2,x:188.7,y:149.9,regY:9.5,startPosition:0}}]},3).to({state:[{t:this.instance_5,p:{scaleX:1,scaleY:1,rotation:-0.2,x:95.9,y:134,regY:9,startPosition:4,regX:13.8}},{t:this.instance_4,p:{scaleX:0.998,scaleY:0.998,rotation:-3.9,x:192,y:147.3,regY:9.4,startPosition:3}}]},1).to({state:[{t:this.instance_5,p:{scaleX:1,scaleY:1,rotation:-0.2,x:95.9,y:135.7,regY:9,startPosition:4,regX:13.8}},{t:this.instance_4,p:{scaleX:0.998,scaleY:0.998,rotation:-3.9,x:192,y:149,regY:9.4,startPosition:3}}]},2).to({state:[{t:this.instance_5,p:{scaleX:1,scaleY:1,rotation:-0.2,x:95.9,y:136.5,regY:9,startPosition:4,regX:13.8}},{t:this.instance_4,p:{scaleX:0.998,scaleY:0.998,rotation:-3.9,x:192,y:149.8,regY:9.4,startPosition:3}}]},2).to({state:[{t:this.instance_5,p:{scaleX:1,scaleY:1,rotation:-3.4,x:96.6,y:136.1,regY:9,startPosition:0,regX:13.8}},{t:this.instance_4,p:{scaleX:1,scaleY:1,rotation:0,x:189.1,y:141.1,regY:9.5,startPosition:0}}]},27).to({state:[{t:this.instance_5,p:{scaleX:1,scaleY:1,rotation:0,x:95.5,y:136.9,regY:9.1,startPosition:0,regX:13.8}},{t:this.instance_4,p:{scaleX:1,scaleY:1,rotation:0,x:188.7,y:137.1,regY:9.5,startPosition:0}}]},1).wait(16));

	// EYES
	this.instance_8 = new lib.FIZ23REYER001("single",0);
	this.instance_8.setTransform(100.3,189.1,1,1,0,0,0,18.3,29.5);

	this.instance_9 = new lib.FIZ23REYEL001("single",0);
	this.instance_9.setTransform(186.7,189.1,1,1,0,0,0,16.7,28.6);

	this.instance_10 = new lib.FIZ34REYER001("single",0);
	this.instance_10.setTransform(111.7,183.9,1,1,0,0,0,18,28.6);

	this.instance_11 = new lib.FIZ34REYEL001("single",0);
	this.instance_11.setTransform(199.7,183.8,1,1,0,0,0,16.3,27.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9,p:{startPosition:0}},{t:this.instance_8,p:{startPosition:0}}]}).to({state:[{t:this.instance_9,p:{startPosition:2}},{t:this.instance_8,p:{startPosition:2}}]},6).to({state:[{t:this.instance_9,p:{startPosition:3}},{t:this.instance_8,p:{startPosition:3}}]},2).to({state:[{t:this.instance_9,p:{startPosition:3}},{t:this.instance_8,p:{startPosition:3}}]},2).to({state:[{t:this.instance_9,p:{startPosition:3}},{t:this.instance_8,p:{startPosition:3}}]},2).to({state:[{t:this.instance_9,p:{startPosition:1}},{t:this.instance_8,p:{startPosition:1}}]},1).to({state:[{t:this.instance_9,p:{startPosition:0}},{t:this.instance_8,p:{startPosition:0}}]},1).to({state:[{t:this.instance_9,p:{startPosition:0}},{t:this.instance_8,p:{startPosition:0}}]},2).to({state:[{t:this.instance_9,p:{startPosition:0}},{t:this.instance_8,p:{startPosition:0}}]},2).to({state:[{t:this.instance_9,p:{startPosition:2}},{t:this.instance_8,p:{startPosition:2}}]},19).to({state:[{t:this.instance_9,p:{startPosition:3}},{t:this.instance_8,p:{startPosition:3}}]},2).to({state:[{t:this.instance_9,p:{startPosition:3}},{t:this.instance_8,p:{startPosition:3}}]},2).to({state:[{t:this.instance_9,p:{startPosition:3}},{t:this.instance_8,p:{startPosition:3}}]},2).to({state:[{t:this.instance_9,p:{startPosition:1}},{t:this.instance_8,p:{startPosition:1}}]},2).to({state:[{t:this.instance_11,p:{startPosition:0}},{t:this.instance_10,p:{startPosition:0}}]},1).to({state:[{t:this.instance_11,p:{startPosition:0}},{t:this.instance_10,p:{startPosition:0}}]},17).to({state:[{t:this.instance_11,p:{startPosition:0}},{t:this.instance_10,p:{startPosition:0}}]},1).to({state:[{t:this.instance_11,p:{startPosition:0}},{t:this.instance_10,p:{startPosition:0}}]},1).to({state:[{t:this.instance_11,p:{startPosition:0}},{t:this.instance_10,p:{startPosition:0}}]},2).to({state:[{t:this.instance_11,p:{startPosition:0}},{t:this.instance_10,p:{startPosition:0}}]},21).to({state:[{t:this.instance_11,p:{startPosition:0}},{t:this.instance_10,p:{startPosition:0}}]},29).to({state:[{t:this.instance_11,p:{startPosition:2}},{t:this.instance_10,p:{startPosition:2}}]},1).to({state:[{t:this.instance_11,p:{startPosition:3}},{t:this.instance_10,p:{startPosition:3}}]},2).to({state:[{t:this.instance_11,p:{startPosition:3}},{t:this.instance_10,p:{startPosition:3}}]},2).to({state:[{t:this.instance_9,p:{startPosition:1}},{t:this.instance_8,p:{startPosition:1}}]},3).to({state:[{t:this.instance_9,p:{startPosition:0}},{t:this.instance_8,p:{startPosition:0}}]},1).to({state:[{t:this.instance_9,p:{startPosition:0}},{t:this.instance_8,p:{startPosition:0}}]},2).to({state:[{t:this.instance_9,p:{startPosition:0}},{t:this.instance_8,p:{startPosition:0}}]},2).to({state:[{t:this.instance_9,p:{startPosition:0}},{t:this.instance_8,p:{startPosition:0}}]},27).to({state:[{t:this.instance_9,p:{startPosition:0}},{t:this.instance_8,p:{startPosition:0}}]},1).wait(16));

	// MOUTH
	this.instance_12 = new lib.FIZ23RMOUTH001("single",0);
	this.instance_12.setTransform(136.1,241.1,1,1,0,0,0,31.1,10.2);

	this.instance_13 = new lib.FIZ34RMOUTH001("single",3);
	this.instance_13.setTransform(141.7,240.9,1,1,0,0,0,32.4,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12,p:{startPosition:0}}]}).to({state:[{t:this.instance_12,p:{startPosition:0}}]},6).to({state:[{t:this.instance_12,p:{startPosition:2}}]},2).to({state:[{t:this.instance_12,p:{startPosition:3}}]},2).to({state:[{t:this.instance_12,p:{startPosition:3}}]},2).to({state:[{t:this.instance_12,p:{startPosition:2}}]},1).to({state:[{t:this.instance_12,p:{startPosition:18}}]},1).to({state:[{t:this.instance_12,p:{startPosition:19}}]},2).to({state:[{t:this.instance_12,p:{startPosition:19}}]},2).to({state:[{t:this.instance_12,p:{startPosition:3}}]},2).to({state:[{t:this.instance_12,p:{startPosition:4}}]},1).to({state:[{t:this.instance_12,p:{startPosition:3}}]},2).to({state:[{t:this.instance_12,p:{startPosition:6}}]},1).to({state:[{t:this.instance_12,p:{startPosition:8}}]},1).to({state:[{t:this.instance_12,p:{startPosition:7}}]},2).to({state:[{t:this.instance_12,p:{startPosition:18}}]},1).to({state:[{t:this.instance_12,p:{startPosition:2}}]},2).to({state:[{t:this.instance_12,p:{startPosition:3}}]},1).to({state:[{t:this.instance_12,p:{startPosition:2}}]},2).to({state:[{t:this.instance_12,p:{startPosition:18}}]},1).to({state:[{t:this.instance_12,p:{startPosition:3}}]},1).to({state:[{t:this.instance_12,p:{startPosition:7}}]},2).to({state:[{t:this.instance_12,p:{startPosition:8}}]},1).to({state:[{t:this.instance_12,p:{startPosition:2}}]},1).to({state:[{t:this.instance_12,p:{startPosition:18}}]},1).to({state:[{t:this.instance_12,p:{startPosition:2}}]},1).to({state:[{t:this.instance_12,p:{startPosition:3}}]},1).to({state:[{t:this.instance_12,p:{startPosition:2}}]},1).to({state:[{t:this.instance_12,p:{startPosition:3}}]},2).to({state:[{t:this.instance_13,p:{startPosition:3,x:141.7,y:240.9}}]},1).to({state:[{t:this.instance_13,p:{startPosition:2,x:141.7,y:240.9}}]},2).to({state:[{t:this.instance_13,p:{startPosition:1,x:141.7,y:240.9}}]},2).to({state:[{t:this.instance_13,p:{startPosition:18,x:141.7,y:240.9}}]},2).to({state:[{t:this.instance_13,p:{startPosition:19,x:141.7,y:240.9}}]},1).to({state:[{t:this.instance_13,p:{startPosition:3,x:141.7,y:240.9}}]},2).to({state:[{t:this.instance_13,p:{startPosition:4,x:141.7,y:240.9}}]},1).to({state:[{t:this.instance_13,p:{startPosition:3,x:141.7,y:240.9}}]},2).to({state:[{t:this.instance_13,p:{startPosition:18,x:141.7,y:240.9}}]},2).to({state:[{t:this.instance_13,p:{startPosition:19,x:141.7,y:240.9}}]},1).to({state:[{t:this.instance_13,p:{startPosition:2,x:141.7,y:240.9}}]},1).to({state:[{t:this.instance_13,p:{startPosition:3,x:141.7,y:240.9}}]},1).to({state:[{t:this.instance_13,p:{startPosition:18,x:141.7,y:240.9}}]},1).to({state:[{t:this.instance_13,p:{startPosition:19,x:141.7,y:240.9}}]},1).to({state:[{t:this.instance_13,p:{startPosition:2,x:141.7,y:240.9}}]},1).to({state:[{t:this.instance_13,p:{startPosition:2,x:141.7,y:240.9}}]},1).to({state:[{t:this.instance_13,p:{startPosition:3,x:141.7,y:240.9}}]},1).to({state:[{t:this.instance_13,p:{startPosition:3,x:141.7,y:240.9}}]},1).to({state:[{t:this.instance_13,p:{startPosition:2,x:141.7,y:240.9}}]},2).to({state:[{t:this.instance_13,p:{startPosition:18,x:141.7,y:240.9}}]},1).to({state:[{t:this.instance_13,p:{startPosition:19,x:141.7,y:240.9}}]},2).to({state:[{t:this.instance_13,p:{startPosition:2,x:141.7,y:240.9}}]},7).to({state:[{t:this.instance_13,p:{startPosition:7,x:141.7,y:240.9}}]},2).to({state:[{t:this.instance_13,p:{startPosition:8,x:141.7,y:240.9}}]},2).to({state:[{t:this.instance_13,p:{startPosition:7,x:148.9,y:239.3}}]},3).to({state:[{t:this.instance_13,p:{startPosition:3,x:148.9,y:239.3}}]},2).to({state:[{t:this.instance_13,p:{startPosition:4,x:148.9,y:239.3}}]},1).to({state:[{t:this.instance_13,p:{startPosition:3,x:148.9,y:239.3}}]},3).to({state:[{t:this.instance_13,p:{startPosition:18,x:148.9,y:239.3}}]},1).to({state:[{t:this.instance_13,p:{startPosition:19,x:148.9,y:239.3}}]},2).to({state:[{t:this.instance_13,p:{startPosition:2,x:148.9,y:239.3}}]},2).to({state:[{t:this.instance_13,p:{startPosition:3,x:148.9,y:239.3}}]},1).to({state:[{t:this.instance_13,p:{startPosition:2,x:148.9,y:239.3}}]},2).to({state:[{t:this.instance_13,p:{startPosition:11,x:148.9,y:239.3}}]},1).to({state:[{t:this.instance_13,p:{startPosition:3,x:148.9,y:239.3}}]},1).to({state:[{t:this.instance_13,p:{startPosition:18,x:148.9,y:239.3}}]},1).to({state:[{t:this.instance_13,p:{startPosition:3,x:148.9,y:239.3}}]},1).to({state:[{t:this.instance_13,p:{startPosition:2,x:148.9,y:239.3}}]},1).to({state:[{t:this.instance_13,p:{startPosition:18,x:148.9,y:239.3}}]},1).to({state:[{t:this.instance_13,p:{startPosition:19,x:148.9,y:239.3}}]},2).to({state:[{t:this.instance_13,p:{startPosition:2,x:148.9,y:239.3}}]},2).to({state:[{t:this.instance_13,p:{startPosition:3,x:148.9,y:239.3}}]},1).to({state:[{t:this.instance_13,p:{startPosition:4,x:148.9,y:239.3}}]},1).to({state:[{t:this.instance_13,p:{startPosition:3,x:148.9,y:239.3}}]},3).to({state:[{t:this.instance_13,p:{startPosition:2,x:148.9,y:239.3}}]},1).to({state:[{t:this.instance_13,p:{startPosition:18,x:148.9,y:239.3}}]},2).to({state:[{t:this.instance_13,p:{startPosition:18,x:148.9,y:239.3}}]},2).to({state:[{t:this.instance_13,p:{startPosition:2,x:148.9,y:239.3}}]},2).to({state:[{t:this.instance_12,p:{startPosition:3}}]},1).to({state:[{t:this.instance_12,p:{startPosition:3}}]},1).to({state:[{t:this.instance_12,p:{startPosition:2}}]},1).to({state:[{t:this.instance_12,p:{startPosition:7}}]},1).to({state:[{t:this.instance_12,p:{startPosition:8}}]},2).to({state:[{t:this.instance_12,p:{startPosition:7}}]},1).to({state:[{t:this.instance_12,p:{startPosition:3}}]},1).to({state:[{t:this.instance_12,p:{startPosition:4}}]},1).to({state:[{t:this.instance_12,p:{startPosition:3}}]},2).to({state:[{t:this.instance_12,p:{startPosition:16}}]},1).to({state:[{t:this.instance_12,p:{startPosition:12}}]},1).to({state:[{t:this.instance_12,p:{startPosition:15}}]},1).to({state:[{t:this.instance_12,p:{startPosition:3}}]},1).to({state:[{t:this.instance_12,p:{startPosition:2}}]},1).to({state:[{t:this.instance_12,p:{startPosition:11}}]},1).to({state:[{t:this.instance_12,p:{startPosition:3}}]},2).to({state:[{t:this.instance_12,p:{startPosition:4}}]},1).to({state:[{t:this.instance_12,p:{startPosition:3}}]},3).to({state:[{t:this.instance_12,p:{startPosition:18}}]},2).to({state:[{t:this.instance_12,p:{startPosition:19}}]},2).to({state:[{t:this.instance_12,p:{startPosition:18}}]},6).to({state:[{t:this.instance_12,p:{startPosition:0}}]},1).wait(16));

	// HEAD
	this.instance_14 = new lib.FIZ23REARR001("single",0);
	this.instance_14.setTransform(73,207.9,1,1,0,0,180,-1.3,27.7);

	this.instance_15 = new lib.FIZ23RHAIRTOP001("single",0);
	this.instance_15.setTransform(143.5,90.5,1,1,0,0,180,55.8,90.5);

	this.instance_16 = new lib.FIZ23RNOSE001("single",0);
	this.instance_16.setTransform(156.4,187.6,1,1,0,0,180,11.8,2.6);

	this.instance_17 = new lib.FIZ23RGLSSR001("single",0);
	this.instance_17.setTransform(85.3,191.6,1.112,1,0,0,172.2,-1.2,4.2);

	this.instance_18 = new lib.FIZ23RHAIRR001("single",0);
	this.instance_18.setTransform(53.9,154.1,1,1,0,0,180,23.3,50.8);

	this.instance_19 = new lib.FIZ23RGLSSL001("single",0);
	this.instance_19.setTransform(194.4,191.9,0.919,1,0,0,7.5,2.6,4.5);

	this.instance_20 = new lib.FIZ23RGLSSMID001("single",0);
	this.instance_20.setTransform(142.5,184.2,1,1,0,0,180,32.5,5.7);

	this.instance_21 = new lib.FIZ23RHEAD001("single",0);
	this.instance_21.setTransform(131.9,309,1,1,0,0,180,81.6,223.8);

	this.instance_22 = new lib.FIZ23REARL001("single",0);
	this.instance_22.setTransform(202,202.7,1,1,0,0,180,18.3,22.4);

	this.instance_23 = new lib.FIZ23RHAIRL001("single",0);
	this.instance_23.setTransform(209.9,137.5,1,1,0,0,180,23.4,46.5);

	this.instance_24 = new lib.FIZ23RHAT001("single",0);
	this.instance_24.setTransform(106.6,95.8,1,1,0,0,180,34.5,82.1);

	this.instance_25 = new lib.FIZ34RNOSE001("single",0);
	this.instance_25.setTransform(176.3,184.5,1,1,0,0,180,17,1.6);

	this.instance_26 = new lib.FIZ34REARR001("single",0);
	this.instance_26.setTransform(80.2,195.5,1,1,0,0,180,3.1,23.4);

	this.instance_27 = new lib.FIZ34RGLSSR001("single",0);
	this.instance_27.setTransform(84.4,186.7,1,1,0,0,180,13.7,5.7);

	this.instance_28 = new lib.FIZ34RGLSSMID001("single",0);
	this.instance_28.setTransform(157.3,178.9,1,1,0,0,180,32.1,6);

	this.instance_29 = new lib.FIZ34RHAIR001("single",0);
	this.instance_29.setTransform(128.6,145.7,1,1,0,0,180,90.4,145.8);

	this.instance_30 = new lib.FIZ34RHEAD001("single",0);
	this.instance_30.setTransform(133.5,310.2,1,1,0,0,180,81.5,228.2);

	this.instance_31 = new lib.FIZ34RHAIRBK001("single",0);
	this.instance_31.setTransform(208.7,146.3,1,1,0,0,180,27.6,58.8);

	this.instance_32 = new lib.FIZ34RHAT001("single",0);
	this.instance_32.setTransform(102.3,105.8,1,1,0,0,180,44.8,97.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).to({state:[{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]},6).to({state:[{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]},2).to({state:[{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]},2).to({state:[{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]},2).to({state:[{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]},1).to({state:[{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]},1).to({state:[{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]},2).to({state:[{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]},2).to({state:[{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]},19).to({state:[{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]},2).to({state:[{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]},2).to({state:[{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]},2).to({state:[{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]},2).to({state:[{t:this.instance_32},{t:this.instance_31},{t:this.instance_30,p:{startPosition:0}},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25}]},1).to({state:[{t:this.instance_32},{t:this.instance_31},{t:this.instance_30,p:{startPosition:0}},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25}]},17).to({state:[{t:this.instance_32},{t:this.instance_31},{t:this.instance_30,p:{startPosition:0}},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25}]},1).to({state:[{t:this.instance_32},{t:this.instance_31},{t:this.instance_30,p:{startPosition:0}},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25}]},1).to({state:[{t:this.instance_32},{t:this.instance_31},{t:this.instance_30,p:{startPosition:0}},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25}]},2).to({state:[{t:this.instance_32},{t:this.instance_31},{t:this.instance_30,p:{startPosition:1}},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25}]},21).to({state:[{t:this.instance_32},{t:this.instance_31},{t:this.instance_30,p:{startPosition:1}},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25}]},29).to({state:[{t:this.instance_32},{t:this.instance_31},{t:this.instance_30,p:{startPosition:1}},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25}]},1).to({state:[{t:this.instance_32},{t:this.instance_31},{t:this.instance_30,p:{startPosition:1}},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25}]},2).to({state:[{t:this.instance_32},{t:this.instance_31},{t:this.instance_30,p:{startPosition:1}},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25}]},2).to({state:[{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]},3).to({state:[{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]},1).to({state:[{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]},2).to({state:[{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]},2).to({state:[{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]},27).to({state:[{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]},1).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(30.2,0,203,324.3);


(lib.FIZZYIDLE11509 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.FIZZYIDLEEYES11509("synched",0);
	this.instance.setTransform(8.3,-50.2);

	this.instance_1 = new lib.FIZ_23_part_03211509("single",0);
	this.instance_1.setTransform(7.5,141.9,0.768,0.768,0,0,180,23.4,111.3);

	this.instance_2 = new lib.FIZ_23_part_02811509("single",1);
	this.instance_2.setTransform(-12.8,59.9,0.776,0.824,0,-21.5,156.3,4.5,1.9);

	this.instance_3 = new lib.FIZ_23_part_01011509("single",1);
	this.instance_3.setTransform(16,62.2,0.767,0.767,0,18.1,-161.8,83,1.4);

	this.instance_4 = new lib.FIZ_23_MOUTH_COMP11509("single",0);
	this.instance_4.setTransform(5,2.8,0.768,0.768,0,-1,178.9,31.1,10.2);

	this.instance_5 = new lib.FIZ_23_part_02211509("single",0);
	this.instance_5.setTransform(19.2,-39.2,0.768,0.768,0,-9.5,170.4,11.8,2.7);

	this.instance_6 = new lib.FIZZYHEAD11509("synched",0);
	this.instance_6.setTransform(0,-58.8,0.768,0.768,0,-1,178.9);

	this.instance_7 = new lib.FIZ_23_part_00911509("single",0);
	this.instance_7.setTransform(3.4,61.8,0.75,0.768,0,0,180,41.6,43.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(86));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.1,-184.6,160.3,376);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;