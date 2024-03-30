(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.CorporalCup_Welcome = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{intro:0,intro_stop:16,action:17,action_stop:199,idle:200,idle_loop:455});

	// top
	this.instance = new lib.Cup_Intro("synched",0);
	this.instance.setTransform(175.2,201.3,1,1,0,0,0,-56.3,-133.1);

	this.instance_1 = new lib.cup34rarmr01("single",0);
	this.instance_1.setTransform(149.1,436.4,0.931,0.924,0,-6.9,-2.6,18.4,-30.7);

	this.instance_2 = new lib.cup34rarml01("single",3);
	this.instance_2.setTransform(299.2,412.7,0.82,0.877,0,-1.7,-3.9,-16.5,-36.4);

	this.instance_3 = new lib.Cup_Idle("synched",0);
	this.instance_3.setTransform(226.5,431,1,1,0,0,0,-5.4,96.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{scaleX:0.931,scaleY:0.924,skewX:-6.9,skewY:-2.6,x:149.1,y:436.4,startPosition:0,regX:18.4,regY:-30.7}}]},17).to({state:[{t:this.instance_1,p:{scaleX:0.918,scaleY:0.911,skewX:-7.7,skewY:-3.4,x:146.3,y:442,startPosition:4,regX:18.4,regY:-30.7}},{t:this.instance_2,p:{regX:-16.5,regY:-36.4,scaleX:0.82,scaleY:0.877,skewX:-1.7,skewY:-3.9,x:299.2,y:412.7,startPosition:3}}]},2).to({state:[{t:this.instance_1,p:{scaleX:0.901,scaleY:0.894,skewX:-23.5,skewY:-19.2,x:140.6,y:456.6,startPosition:3,regX:24.6,regY:-28.1}},{t:this.instance_2,p:{regX:-16.6,regY:-36.3,scaleX:0.806,scaleY:0.907,skewX:-11.4,skewY:-13.6,x:283.3,y:414.9,startPosition:4}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.892,scaleY:0.885,skewX:-29.3,skewY:-25,x:137,y:462.1,startPosition:3,regX:24.7,regY:-28.1}},{t:this.instance_2,p:{regX:-16.5,regY:-36.3,scaleX:0.798,scaleY:0.899,skewX:-7.9,skewY:-10.1,x:277.2,y:415.3,startPosition:4}}]},2).to({state:[{t:this.instance_1,p:{scaleX:0.919,scaleY:0.911,skewX:-12.2,skewY:-16,x:142.7,y:452.5,startPosition:5,regX:24.7,regY:-28.2}}]},2).to({state:[{t:this.instance_1,p:{scaleX:1.047,scaleY:1.039,skewX:-9.5,skewY:-5.2,x:160.2,y:410.4,startPosition:8,regX:24.7,regY:-28.1}}]},2).to({state:[{t:this.instance_1,p:{scaleX:1.076,scaleY:1.067,skewX:-5.8,skewY:-1.5,x:169.1,y:399.5,startPosition:9,regX:24.7,regY:-28.3}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1.062,scaleY:1.054,skewX:-9,skewY:-4.7,x:165.1,y:404.1,startPosition:9,regX:24.7,regY:-28.2}}]},2).to({state:[{t:this.instance_1,p:{scaleX:1.059,scaleY:1.05,skewX:-10.2,skewY:-5.9,x:163.5,y:405.7,startPosition:9,regX:24.7,regY:-28.2}}]},2).to({state:[{t:this.instance_1,p:{scaleX:1.059,scaleY:1.05,skewX:-10.8,skewY:-6.5,x:162.9,y:405.8,startPosition:9,regX:24.7,regY:-28.2}}]},2).to({state:[{t:this.instance_1,p:{scaleX:1.069,scaleY:1.061,skewX:-9.4,skewY:-5.1,x:166.3,y:411.2,startPosition:10,regX:24.6,regY:-28.3}}]},13).to({state:[{t:this.instance_1,p:{scaleX:1.105,scaleY:1.096,skewX:-1,skewY:3.2,x:177.1,y:424.3,startPosition:13,regX:24.7,regY:-28.1}},{t:this.instance_2,p:{regX:-16.6,regY:-36.3,scaleX:0.987,scaleY:1.112,skewX:9.5,skewY:7.3,x:370.6,y:452.6,startPosition:14}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1.119,scaleY:1.11,skewX:-4.7,skewY:-0.5,x:179,y:426.5,startPosition:13,regX:24.8,regY:-28.1}},{t:this.instance_2,p:{regX:-16.5,regY:-36.2,scaleX:1,scaleY:1.127,skewX:16.8,skewY:14.6,x:373.8,y:462.3,startPosition:14}}]},2).to({state:[{t:this.instance_1,p:{scaleX:1.119,scaleY:1.11,skewX:-5.8,skewY:-1.5,x:179,y:427.3,startPosition:13,regX:24.7,regY:-28.1}},{t:this.instance_2,p:{regX:-16.6,regY:-36.2,scaleX:1,scaleY:1.126,skewX:17.9,skewY:15.7,x:374,y:464.1,startPosition:14}}]},2).to({state:[{t:this.instance_1,p:{scaleX:1.103,scaleY:1.095,skewX:-7.3,skewY:-3,x:171.1,y:431,startPosition:14,regX:24.8,regY:-28.1}},{t:this.instance_2,p:{regX:-16.7,regY:-36.2,scaleX:0.986,scaleY:1.111,skewX:11.5,skewY:9.3,x:365.1,y:454.2,startPosition:15}}]},2).to({state:[{t:this.instance_1,p:{scaleX:0.959,scaleY:0.952,skewX:-6.5,skewY:-2.2,x:149.8,y:441.9,startPosition:16,regX:18.4,regY:-30.5}}]},2).to({state:[{t:this.instance_1,p:{scaleX:0.931,scaleY:0.923,skewX:-13.5,skewY:-9.2,x:137.1,y:443.9,startPosition:16,regX:18.4,regY:-30.5}}]},2).to({state:[{t:this.instance_1,p:{scaleX:0.931,scaleY:0.924,skewX:-18.1,skewY:-13.8,x:130.9,y:443,startPosition:16,regX:18.4,regY:-30.6}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.931,scaleY:0.923,skewX:-18.6,skewY:-14.3,x:130.3,y:442.9,startPosition:16,regX:18.3,regY:-30.6}}]},2).to({state:[{t:this.instance_1,p:{scaleX:0.931,scaleY:0.923,skewX:-18.9,skewY:-14.6,x:129.9,y:442.7,startPosition:16,regX:18.2,regY:-30.5}}]},2).to({state:[{t:this.instance_1,p:{scaleX:0.931,scaleY:0.923,skewX:-20.5,skewY:-16.2,x:127.1,y:446.2,startPosition:16,regX:18.2,regY:-30.5}}]},18).to({state:[{t:this.instance_1,p:{scaleX:0.931,scaleY:0.923,skewX:-20.8,skewY:-16.5,x:125.9,y:447.8,startPosition:16,regX:18.2,regY:-30.5}}]},2).to({state:[{t:this.instance_1,p:{scaleX:0.93,scaleY:0.923,skewX:-19.2,skewY:-14.9,x:127.4,y:446.1,startPosition:16,regX:18.2,regY:-30.3}}]},3).to({state:[{t:this.instance_1,p:{scaleX:0.93,scaleY:0.923,skewX:-14.6,skewY:-10.3,x:134.7,y:440.5,startPosition:17,regX:18.2,regY:-30.3}}]},2).to({state:[{t:this.instance_1,p:{scaleX:0.929,scaleY:0.922,skewX:0,skewY:4.2,x:156.1,y:424.9,startPosition:19,regX:18.2,regY:-30.6}},{t:this.instance_2,p:{regX:-15.9,regY:-30,scaleX:0.83,scaleY:0.935,skewX:-2.6,skewY:-4.7,x:314.2,y:421.7,startPosition:21}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.929,scaleY:0.922,skewX:4.5,skewY:8.8,x:169.6,y:423.3,startPosition:19,regX:18.2,regY:-30.5}},{t:this.instance_2,p:{regX:-2.4,regY:10.2,scaleX:0.83,scaleY:0.935,skewX:-0.6,skewY:-2.8,x:337.3,y:470.4,startPosition:26}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.929,scaleY:0.922,skewX:3.7,skewY:8,x:167.1,y:423,startPosition:19,regX:18.2,regY:-30.5}},{t:this.instance_2,p:{regX:-15.9,regY:-30,scaleX:0.83,scaleY:0.935,skewX:1.2,skewY:-0.9,x:325.1,y:430.3,startPosition:26}}]},2).to({state:[{t:this.instance_1,p:{scaleX:0.929,scaleY:0.922,skewX:3.2,skewY:7.5,x:165.8,y:423.2,startPosition:19,regX:18.2,regY:-30.5}},{t:this.instance_2,p:{regX:-3.8,regY:11.2,scaleX:0.83,scaleY:0.935,skewX:2.6,skewY:0.5,x:333.5,y:467.2,startPosition:26}}]},2).to({state:[{t:this.instance_1,p:{scaleX:0.929,scaleY:0.922,skewX:2.9,skewY:7.2,x:165.2,y:423.2,startPosition:19,regX:18.2,regY:-30.5}},{t:this.instance_2,p:{regX:-4.4,regY:10.3,scaleX:0.83,scaleY:0.935,skewX:2.9,skewY:0.7,x:332.6,y:465.7,startPosition:26}}]},2).to({state:[{t:this.instance_1,p:{scaleX:0.929,scaleY:0.922,skewX:4.8,skewY:9,x:173.7,y:427.7,startPosition:19,regX:18.2,regY:-30.3}},{t:this.instance_2,p:{regX:-4.4,regY:10.4,scaleX:0.83,scaleY:0.935,skewX:6.7,skewY:4.6,x:337.9,y:481.2,startPosition:26}}]},17).to({state:[{t:this.instance_1,p:{scaleX:0.929,scaleY:0.921,skewX:4.1,skewY:8.4,x:176.8,y:431.2,startPosition:19,regX:18.2,regY:-30.4}},{t:this.instance_2,p:{regX:-4.4,regY:10.5,scaleX:0.83,scaleY:0.935,skewX:8.3,skewY:6.1,x:339.4,y:489.1,startPosition:26}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.929,scaleY:0.921,skewX:4.2,skewY:8.5,x:177.7,y:431.4,startPosition:19,regX:18.2,regY:-30.3}},{t:this.instance_2,p:{regX:-4.4,regY:10.4,scaleX:0.83,scaleY:0.935,skewX:8.7,skewY:6.5,x:339.9,y:490.4,startPosition:26}}]},2).to({state:[{t:this.instance_1,p:{scaleX:0.929,scaleY:0.922,skewX:7.7,skewY:12,x:181.5,y:430.1,startPosition:20,regX:25,regY:-32.7}},{t:this.instance_2,p:{regX:-4.4,regY:10.3,scaleX:0.827,scaleY:0.94,skewX:5.8,skewY:0.8,x:342,y:483.2,startPosition:26}}]},2).to({state:[{t:this.instance_1,p:{scaleX:0.928,scaleY:0.921,skewX:-2.4,skewY:1.8,x:155.5,y:430.1,startPosition:21,regX:18.2,regY:-30.3}}]},2).to({state:[{t:this.instance_1,p:{scaleX:0.928,scaleY:0.921,skewX:-8,skewY:-3.8,x:146,y:428.8,startPosition:24,regX:18.2,regY:-30.3}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.928,scaleY:0.921,skewX:-7.5,skewY:-3.2,x:143.8,y:428.9,startPosition:24,regX:18.2,regY:-30.3}}]},2).to({state:[{t:this.instance_1,p:{scaleX:0.928,scaleY:0.921,skewX:-8.8,skewY:-4.5,x:145.1,y:428.9,startPosition:24,regX:18.2,regY:-30.3}}]},2).to({state:[{t:this.instance_1,p:{scaleX:0.928,scaleY:0.921,skewX:-9.1,skewY:-4.8,x:145.6,y:428.8,startPosition:24,regX:18.2,regY:-30.3}}]},2).to({state:[{t:this.instance_1,p:{scaleX:0.928,scaleY:0.923,skewX:-9.1,skewY:-2.9,x:149.4,y:428.4,startPosition:24,regX:18.2,regY:-30.3}}]},13).to({state:[{t:this.instance_1,p:{scaleX:0.929,scaleY:0.922,skewX:3.4,skewY:7.7,x:168,y:422,startPosition:25,regX:18.2,regY:-30.3}},{t:this.instance_2,p:{regX:-4.4,regY:10.4,scaleX:0.83,scaleY:0.935,skewX:5.4,skewY:3.2,x:333.3,y:471.7,startPosition:31}}]},2).to({state:[{t:this.instance_1,p:{scaleX:0.929,scaleY:0.921,skewX:3.9,skewY:8.2,x:174.3,y:424.8,startPosition:3,regX:18.3,regY:-30.3}},{t:this.instance_2,p:{regX:-4.4,regY:10.4,scaleX:0.83,scaleY:0.935,skewX:8,skewY:5.8,x:337.1,y:481.9,startPosition:4}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.928,scaleY:0.921,skewX:4.4,skewY:8.7,x:181.8,y:427.2,startPosition:3,regX:25,regY:-29.3}},{t:this.instance_2,p:{regX:-4.4,regY:10.4,scaleX:0.83,scaleY:0.935,skewX:8.4,skewY:6.2,x:338.1,y:483.7,startPosition:4}}]},2).to({state:[{t:this.instance_1,p:{scaleX:0.929,scaleY:0.921,skewX:2,skewY:6.3,x:177.1,y:428.1,startPosition:27,regX:25.2,regY:-27.6}},{t:this.instance_2,p:{regX:-4.5,regY:10.4,scaleX:0.829,scaleY:0.934,skewX:6.5,skewY:4.3,x:335,y:477.7,startPosition:32}}]},4).to({state:[{t:this.instance_2,p:{regX:-15.9,regY:-29.8,scaleX:0.828,scaleY:0.932,skewX:6.9,skewY:4.7,x:292.1,y:403.2,startPosition:33}}]},2).to({state:[{t:this.instance_2,p:{regX:-15.9,regY:-29.8,scaleX:0.825,scaleY:0.955,skewX:-15.4,skewY:-17.1,x:290,y:393.1,startPosition:35}},{t:this.instance_1,p:{scaleX:0.928,scaleY:0.92,skewX:-13.9,skewY:-9.6,x:137.2,y:431.1,startPosition:30,regX:18.1,regY:-30.2}}]},1).to({state:[{t:this.instance_2,p:{regX:-15.9,regY:-29.8,scaleX:0.828,scaleY:0.933,skewX:-13.8,skewY:-16,x:292.6,y:395.4,startPosition:35}},{t:this.instance_1,p:{scaleX:0.928,scaleY:0.92,skewX:-11.4,skewY:-7.1,x:138.8,y:430.7,startPosition:30,regX:18.2,regY:-30.3}}]},2).to({state:[{t:this.instance_2,p:{regX:-15.9,regY:-29.8,scaleX:0.83,scaleY:0.92,skewX:-12.9,skewY:-15.3,x:293.8,y:396.5,startPosition:35}},{t:this.instance_1,p:{scaleX:0.927,scaleY:0.92,skewX:-10.5,skewY:-6.3,x:139.6,y:430.4,startPosition:30,regX:18.2,regY:-30.3}}]},2).to({state:[{t:this.instance_1,p:{scaleX:0.927,scaleY:0.92,skewX:-10.1,skewY:-5.8,x:140.2,y:430.3,startPosition:30,regX:18.2,regY:-30.3}},{t:this.instance_2,p:{regX:-16,regY:-29.8,scaleX:0.829,scaleY:0.912,skewX:-12.5,skewY:-14.6,x:294.6,y:397.2,startPosition:35}}]},2).to({state:[{t:this.instance_1,p:{scaleX:0.924,scaleY:0.926,skewX:-14.7,skewY:-8.6,x:138.9,y:430.5,startPosition:30,regX:18.2,regY:-30.3}},{t:this.instance_2,p:{regX:-16,regY:-29.8,scaleX:0.828,scaleY:0.929,skewX:-13.6,skewY:-15.7,x:292.7,y:395.1,startPosition:35}}]},17).to({state:[{t:this.instance_1,p:{scaleX:0.922,scaleY:0.929,skewX:-17.9,skewY:-11.2,x:137.7,y:430.4,startPosition:30,regX:18.2,regY:-30.3}},{t:this.instance_2,p:{regX:-15.9,regY:-29.8,scaleX:0.825,scaleY:0.94,skewX:-14.9,skewY:-16.4,x:291,y:393.4,startPosition:35}}]},2).to({state:[{t:this.instance_1,p:{scaleX:0.938,scaleY:0.948,skewX:-10,skewY:-11.8,x:138,y:430.8,startPosition:30,regX:18.1,regY:-30.3}},{t:this.instance_2,p:{regX:-15.9,regY:-29.7,scaleX:0.793,scaleY:0.997,skewX:-13.5,skewY:-2,x:292.4,y:404.1,startPosition:35}}]},3).to({state:[{t:this.instance_2,p:{regX:-15.9,regY:-29.7,scaleX:0.825,scaleY:0.94,skewX:-10.9,skewY:-12.4,x:298.6,y:404.3,startPosition:36}},{t:this.instance_1,p:{scaleX:0.931,scaleY:0.928,skewX:-7.8,skewY:-0.8,x:143.5,y:428.9,startPosition:31,regX:18.4,regY:-30.7}}]},2).to({state:[{t:this.instance_1,p:{scaleX:0.931,scaleY:0.924,skewX:-5.1,skewY:-0.8,x:150.9,y:430.5,startPosition:0,regX:18.4,regY:-30.7}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.931,scaleY:0.924,skewX:-4.3,skewY:0,x:152.6,y:430.1,startPosition:0,regX:18.4,regY:-30.7}}]},2).to({state:[{t:this.instance_1,p:{scaleX:0.931,scaleY:0.924,skewX:-4.6,skewY:-0.3,x:151.9,y:430.2,startPosition:0,regX:18.4,regY:-30.7}}]},2).to({state:[{t:this.instance_1,p:{scaleX:0.931,scaleY:0.924,skewX:-4.9,skewY:-0.6,x:151,y:430.3,startPosition:0,regX:18.4,regY:-30.7}}]},2).to({state:[{t:this.instance_3}]},12).wait(256));

	// head
	this.instance_4 = new lib.CUPBODYNEST("synched",42);
	this.instance_4.setTransform(214.3,410.2,0.933,0.922,0,-6.3,-6.5);

	this.instance_5 = new lib.cup34rarmr01("single",28);
	this.instance_5.setTransform(143.1,428.8,0.928,0.92,0,-10.8,-6.5,18.2,-30.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4,p:{scaleX:0.933,scaleY:0.922,skewX:-6.3,skewY:-6.5,x:214.3,y:410.2,startPosition:42}}]},17).to({state:[{t:this.instance_4,p:{scaleX:0.92,scaleY:0.909,skewX:-7.1,skewY:-7.4,x:210.2,y:415.4,startPosition:49}}]},2).to({state:[{t:this.instance_4,p:{scaleX:0.903,scaleY:0.892,skewX:-12.3,skewY:-12.6,x:196.6,y:425.4,startPosition:50}}]},1).to({state:[{t:this.instance_4,p:{scaleX:0.895,scaleY:0.884,skewX:-14.4,skewY:-14.7,x:191.3,y:429.6,startPosition:52}}]},2).to({state:[{t:this.instance_4,p:{scaleX:0.921,scaleY:0.911,skewX:-10.9,skewY:-11.2,x:200.6,y:422.6,startPosition:54}}]},2).to({state:[{t:this.instance_4,p:{scaleX:1.05,scaleY:1.038,skewX:4.4,skewY:4.1,x:243.1,y:396.5,startPosition:56}}]},2).to({state:[{t:this.instance_4,p:{scaleX:1.079,scaleY:1.066,skewX:8.1,skewY:7.8,x:255,y:390.9,startPosition:57}}]},1).to({state:[{t:this.instance_4,p:{scaleX:1.065,scaleY:1.052,skewX:6.9,skewY:6.6,x:249.6,y:393.7,startPosition:59}}]},2).to({state:[{t:this.instance_4,p:{scaleX:1.062,scaleY:1.049,skewX:6.6,skewY:6.3,x:247.7,y:394.8,startPosition:61}}]},2).to({state:[{t:this.instance_4,p:{scaleX:1.061,scaleY:1.049,skewX:6.6,skewY:6.3,x:247.1,y:394.9,startPosition:63}}]},2).to({state:[{t:this.instance_4,p:{scaleX:1.072,scaleY:1.059,skewX:7.9,skewY:7.7,x:251.8,y:402.2,startPosition:76}}]},13).to({state:[{t:this.instance_4,p:{scaleX:1.108,scaleY:1.095,skewX:11.6,skewY:11.3,x:265.7,y:420.5,startPosition:77}}]},1).to({state:[{t:this.instance_4,p:{scaleX:1.122,scaleY:1.109,skewX:13.6,skewY:13.3,x:268.3,y:425.8,startPosition:79}}]},2).to({state:[{t:this.instance_4,p:{scaleX:1.122,scaleY:1.109,skewX:13.9,skewY:13.6,x:268.8,y:427,startPosition:81}}]},2).to({state:[{t:this.instance_4,p:{scaleX:1.106,scaleY:1.093,skewX:10,skewY:9.8,x:259.4,y:424.9,startPosition:83}}]},2).to({state:[{t:this.instance_4,p:{scaleX:0.961,scaleY:0.949,skewX:-5.9,skewY:-6.1,x:217.1,y:415.4,startPosition:85}}]},2).to({state:[{t:this.instance_4,p:{scaleX:0.932,scaleY:0.921,skewX:-12.9,skewY:-13.2,x:198.9,y:410.3,startPosition:87}}]},2).to({state:[{t:this.instance_4,p:{scaleX:0.932,scaleY:0.921,skewX:-17.6,skewY:-17.8,x:189.7,y:404.6,startPosition:88}}]},1).to({state:[{t:this.instance_4,p:{scaleX:0.932,scaleY:0.921,skewX:-18.1,skewY:-18.3,x:188.9,y:403.9,startPosition:90}}]},2).to({state:[{t:this.instance_4,p:{scaleX:0.932,scaleY:0.921,skewX:-18.3,skewY:-18.5,x:188.3,y:403.5,startPosition:92}}]},2).to({state:[{t:this.instance_4,p:{scaleX:0.932,scaleY:0.921,skewX:-19.9,skewY:-20.1,x:184.4,y:405.4,startPosition:110}}]},18).to({state:[{t:this.instance_4,p:{scaleX:0.932,scaleY:0.921,skewX:-20.2,skewY:-20.4,x:182.9,y:406.7,startPosition:112}}]},2).to({state:[{t:this.instance_4,p:{scaleX:0.932,scaleY:0.921,skewX:-18.6,skewY:-18.9,x:185.4,y:406.4,startPosition:115}}]},3).to({state:[{t:this.instance_4,p:{scaleX:0.932,scaleY:0.921,skewX:-14,skewY:-14.3,x:195.8,y:405.5,startPosition:117}}]},2).to({state:[{t:this.instance_4,p:{scaleX:0.931,scaleY:0.92,skewX:0.5,skewY:0.2,x:223.9,y:406.8,startPosition:118}}]},1).to({state:[{t:this.instance_4,p:{scaleX:0.931,scaleY:0.92,skewX:5.1,skewY:4.9,x:238.6,y:410.7,startPosition:119}}]},1).to({state:[{t:this.instance_4,p:{scaleX:0.931,scaleY:0.92,skewX:4.3,skewY:4,x:235.9,y:409.4,startPosition:121}}]},2).to({state:[{t:this.instance_4,p:{scaleX:0.931,scaleY:0.92,skewX:3.8,skewY:3.5,x:234.6,y:409,startPosition:123}}]},2).to({state:[{t:this.instance_4,p:{scaleX:0.931,scaleY:0.92,skewX:3.5,skewY:3.2,x:233.8,y:408.7,startPosition:125}}]},2).to({state:[{t:this.instance_4,p:{scaleX:0.931,scaleY:0.92,skewX:7.3,skewY:7.1,x:243.3,y:417.6,startPosition:142}}]},17).to({state:[{t:this.instance_4,p:{scaleX:0.93,scaleY:0.92,skewX:8.9,skewY:8.6,x:246.6,y:423,startPosition:143}}]},1).to({state:[{t:this.instance_4,p:{scaleX:0.93,scaleY:0.919,skewX:9.3,skewY:9,x:247.5,y:423.7,startPosition:145}}]},2).to({state:[{t:this.instance_4,p:{scaleX:0.93,scaleY:0.919,skewX:8.3,skewY:8,x:244.7,y:422.1,startPosition:147}}]},2).to({state:[{t:this.instance_4,p:{scaleX:0.93,scaleY:0.919,skewX:-1.8,skewY:-2,x:222.5,y:409.1,startPosition:149}}]},2).to({state:[{t:this.instance_4,p:{scaleX:0.929,scaleY:0.919,skewX:-7.5,skewY:-7.7,x:210.5,y:401.3,startPosition:150}}]},1).to({state:[{t:this.instance_4,p:{scaleX:0.929,scaleY:0.919,skewX:-8.7,skewY:-9,x:207.7,y:400.1,startPosition:152}}]},2).to({state:[{t:this.instance_4,p:{scaleX:0.929,scaleY:0.918,skewX:-8.2,skewY:-8.5,x:209.2,y:400.6,startPosition:154}}]},2).to({state:[{t:this.instance_4,p:{scaleX:0.929,scaleY:0.918,skewX:-7.9,skewY:-8.2,x:209.9,y:400.8,startPosition:156}}]},2).to({state:[{t:this.instance_4,p:{scaleX:0.929,scaleY:0.918,skewX:-6.1,skewY:-6.4,x:214,y:403,startPosition:169}}]},13).to({state:[{t:this.instance_4,p:{scaleX:0.93,scaleY:0.92,skewX:6,skewY:5.8,x:237.3,y:410.3,startPosition:171}}]},2).to({state:[{t:this.instance_4,p:{scaleX:0.93,scaleY:0.92,skewX:8.6,skewY:8.3,x:244,y:416.3,startPosition:172}}]},1).to({state:[{t:this.instance_4,p:{scaleX:0.93,scaleY:0.919,skewX:9,skewY:8.8,x:245.4,y:417.4,startPosition:174}}]},2).to({state:[{t:this.instance_4,p:{scaleX:0.93,scaleY:0.919,skewX:7.1,skewY:6.9,x:243,y:414.6,startPosition:178}}]},4).to({state:[{t:this.instance_4,p:{scaleX:0.929,scaleY:0.918,skewX:-9.7,skewY:-10,x:206.1,y:399.4,startPosition:180}},{t:this.instance_5}]},2).to({state:[{t:this.instance_4,p:{scaleX:0.929,scaleY:0.918,skewX:-12,skewY:-12.2,x:199.4,y:398.6,startPosition:181}}]},1).to({state:[{t:this.instance_4,p:{scaleX:0.929,scaleY:0.918,skewX:-11.2,skewY:-11.5,x:201.4,y:399.1,startPosition:183}}]},2).to({state:[{t:this.instance_4,p:{scaleX:0.929,scaleY:0.918,skewX:-10.7,skewY:-11,x:202.5,y:399.4,startPosition:185}}]},2).to({state:[{t:this.instance_4,p:{scaleX:0.929,scaleY:0.918,skewX:-10.4,skewY:-10.7,x:203.2,y:399.6,startPosition:187}}]},2).to({state:[{t:this.instance_4,p:{scaleX:0.929,scaleY:0.918,skewX:-11.3,skewY:-11.5,x:201.3,y:398.9,startPosition:204}}]},17).to({state:[{t:this.instance_4,p:{scaleX:0.929,scaleY:0.918,skewX:-11.8,skewY:-12,x:199.6,y:398.4,startPosition:206}}]},2).to({state:[{t:this.instance_4,p:{scaleX:0.929,scaleY:0.918,skewX:-11.2,skewY:-11.5,x:201,y:399,startPosition:209}}]},3).to({state:[{t:this.instance_4,p:{scaleX:0.929,scaleY:0.918,skewX:-7.7,skewY:-8,x:207.2,y:402.8,startPosition:211}}]},2).to({state:[{t:this.instance_4,p:{scaleX:0.933,scaleY:0.922,skewX:-4.5,skewY:-4.8,x:216.8,y:406.4,startPosition:212}}]},1).to({state:[{t:this.instance_4,p:{scaleX:0.933,scaleY:0.922,skewX:-3.7,skewY:-4,x:218.9,y:406.9,startPosition:214}}]},2).to({state:[{t:this.instance_4,p:{scaleX:0.933,scaleY:0.922,skewX:-4,skewY:-4.3,x:218,y:406.6,startPosition:216}}]},2).to({state:[{t:this.instance_4,p:{scaleX:0.933,scaleY:0.922,skewX:-4.3,skewY:-4.6,x:217.1,y:406.4,startPosition:218}}]},2).to({state:[]},12).wait(256));

	// back
	this.instance_6 = new lib.CUP_23_leg_l("single",14);
	this.instance_6.setTransform(262.2,469,0.939,0.932,0,-13.5,166.8,8.6,-19);

	this.instance_7 = new lib.CUP_FRONT_leg_r("single",14);
	this.instance_7.setTransform(200,486,0.938,0.932,0,-17.4,-16.9,-5.5,-20.1);

	this.instance_8 = new lib.cup34rarml01("single",0);
	this.instance_8.setTransform(304.6,408.9,0.832,0.938,0,-5.3,-7.5,-16.6,-36.3);

	this.instance_9 = new lib.cup34rarmr01("single",29);
	this.instance_9.setTransform(137.2,431.1,0.928,0.92,0,-13.9,-9.6,18.1,-30.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8,p:{scaleX:0.832,scaleY:0.938,skewX:-5.3,skewY:-7.5,x:304.6,y:408.9,startPosition:0,regX:-16.6,regY:-36.3}},{t:this.instance_7,p:{scaleX:0.938,scaleY:0.932,skewX:-17.4,skewY:-16.9,x:200,y:486,regX:-5.5,regY:-20.1,startPosition:14}},{t:this.instance_6,p:{regX:8.6,scaleX:0.939,scaleY:0.932,skewX:-13.5,skewY:166.8,x:262.2,y:469,regY:-19,startPosition:14}}]},17).to({state:[{t:this.instance_7,p:{scaleX:0.925,scaleY:0.919,skewX:-18.2,skewY:-17.8,x:197.2,y:490.2,regX:-5.5,regY:-20.1,startPosition:14}},{t:this.instance_6,p:{regX:8.5,scaleX:0.926,scaleY:0.919,skewX:-14.4,skewY:165.9,x:258.3,y:472.6,regY:-19,startPosition:14}}]},2).to({state:[{t:this.instance_8,p:{scaleX:0.806,scaleY:0.907,skewX:-11.4,skewY:-13.6,x:283.3,y:414.9,startPosition:5,regX:-16.6,regY:-36.3}},{t:this.instance_7,p:{scaleX:0.908,scaleY:0.902,skewX:-23.5,skewY:-23,x:190.6,y:499.7,regX:-5.6,regY:-20.1,startPosition:14}},{t:this.instance_6,p:{regX:8.4,scaleX:0.909,scaleY:0.902,skewX:-19.6,skewY:160.7,x:248.8,y:476.9,regY:-18.9,startPosition:14}}]},1).to({state:[{t:this.instance_8,p:{scaleX:0.798,scaleY:0.899,skewX:-7.9,skewY:-10.1,x:277.2,y:415.3,startPosition:5,regX:-16.5,regY:-36.3}},{t:this.instance_7,p:{scaleX:0.9,scaleY:0.894,skewX:-25.5,skewY:-25.1,x:188,y:503.5,regX:-5.7,regY:-20,startPosition:14}},{t:this.instance_6,p:{regX:8.4,scaleX:0.9,scaleY:0.894,skewX:-21.7,skewY:158.6,x:244.8,y:478.8,regY:-18.9,startPosition:14}}]},2).to({state:[{t:this.instance_8,p:{scaleX:0.806,scaleY:0.98,skewX:-17.6,skewY:-13.1,x:290.2,y:414.5,startPosition:6,regX:-16.5,regY:-36.1}},{t:this.instance_7,p:{scaleX:0.927,scaleY:0.921,skewX:-22,skewY:-21.6,x:192.6,y:498.2,regX:-5.7,regY:-20.1,startPosition:14}},{t:this.instance_6,p:{regX:8.4,scaleX:0.927,scaleY:0.921,skewX:-18.2,skewY:162.1,x:252.6,y:476.5,regY:-18.9,startPosition:14}}]},2).to({state:[{t:this.instance_8,p:{scaleX:0.936,scaleY:1.054,skewX:1.1,skewY:-1,x:345.8,y:414.4,startPosition:8,regX:-16.5,regY:-36.1}},{t:this.instance_7,p:{scaleX:1.054,scaleY:1.047,skewX:5.8,skewY:6.3,x:220,y:490,regX:11.8,regY:-22,startPosition:0}},{t:this.instance_6,p:{regX:8.5,scaleX:1.056,scaleY:1.049,skewX:2.1,skewY:-177.4,x:267.1,y:494.8,regY:-18.8,startPosition:0}}]},2).to({state:[{t:this.instance_8,p:{scaleX:0.961,scaleY:1.083,skewX:4.8,skewY:2.6,x:359,y:416,startPosition:9,regX:-16.5,regY:-36.2}},{t:this.instance_7,p:{scaleX:1.082,scaleY:1.075,skewX:9.5,skewY:10,x:225.1,y:485.3,regX:11.8,regY:-22,startPosition:0}},{t:this.instance_6,p:{regX:8.6,scaleX:1.085,scaleY:1.077,skewX:5.8,skewY:-173.7,x:273,y:493.2,regY:-18.9,startPosition:0}}]},1).to({state:[{t:this.instance_8,p:{scaleX:0.949,scaleY:1.069,skewX:7.1,skewY:4.9,x:352.7,y:416.2,startPosition:9,regX:-16.7,regY:-36.3}},{t:this.instance_7,p:{scaleX:1.068,scaleY:1.061,skewX:8.3,skewY:8.8,x:222.1,y:487.5,regX:11.8,regY:-22,startPosition:0}},{t:this.instance_6,p:{regX:8.6,scaleX:1.07,scaleY:1.063,skewX:4.6,skewY:-174.9,x:269.6,y:494.4,regY:-18.8,startPosition:0}}]},2).to({state:[{t:this.instance_8,p:{scaleX:0.946,scaleY:1.066,skewX:7.5,skewY:5.3,x:350.7,y:416.7,startPosition:9,regX:-16.6,regY:-36.4}},{t:this.instance_7,p:{scaleX:1.065,scaleY:1.058,skewX:8,skewY:8.5,x:220.8,y:488.4,regX:11.8,regY:-22.1,startPosition:0}},{t:this.instance_6,p:{regX:8.6,scaleX:1.067,scaleY:1.06,skewX:4.3,skewY:-175.2,x:268.1,y:495.2,regY:-18.8,startPosition:0}}]},2).to({state:[{t:this.instance_8,p:{scaleX:0.946,scaleY:1.066,skewX:8,skewY:5.8,x:350,y:416.8,startPosition:9,regX:-16.7,regY:-36.4}},{t:this.instance_7,p:{scaleX:1.065,scaleY:1.058,skewX:8,skewY:8.5,x:220.4,y:488.6,regX:12,regY:-22.1,startPosition:0}},{t:this.instance_6,p:{regX:8.4,scaleX:1.067,scaleY:1.06,skewX:4.2,skewY:-175.2,x:267.7,y:495.1,regY:-18.9,startPosition:0}}]},2).to({state:[{t:this.instance_8,p:{scaleX:0.955,scaleY:1.076,skewX:9.4,skewY:7.2,x:355.1,y:426.9,startPosition:10,regX:-16.7,regY:-36.4}},{t:this.instance_7,p:{scaleX:1.075,scaleY:1.068,skewX:9.4,skewY:9.8,x:222.4,y:496.1,regX:11.9,regY:-22.1,startPosition:0}},{t:this.instance_6,p:{regX:8.5,scaleX:1.078,scaleY:1.07,skewX:5.6,skewY:-173.9,x:270,y:504,regY:-18.8,startPosition:0}}]},13).to({state:[{t:this.instance_8,p:{scaleX:0.987,scaleY:1.112,skewX:9.5,skewY:7.3,x:370.6,y:452.6,startPosition:13,regX:-16.6,regY:-36.3}},{t:this.instance_7,p:{scaleX:1.112,scaleY:1.105,skewX:13,skewY:13.5,x:229.4,y:515.6,regX:12,regY:-22,startPosition:0}},{t:this.instance_6,p:{regX:8.3,scaleX:1.114,scaleY:1.107,skewX:9.3,skewY:-170.2,x:278.1,y:526.8,regY:-18.8,startPosition:0}}]},1).to({state:[{t:this.instance_8,p:{scaleX:1,scaleY:1.127,skewX:16.8,skewY:14.6,x:373.8,y:462.3,startPosition:13,regX:-16.5,regY:-36.2}},{t:this.instance_7,p:{scaleX:1.126,scaleY:1.119,skewX:15,skewY:15.5,x:228.1,y:520.6,regX:12,regY:-22.1,startPosition:0}},{t:this.instance_6,p:{regX:8.2,scaleX:1.128,scaleY:1.121,skewX:11.3,skewY:-168.2,x:277,y:533.7,regY:-18.8,startPosition:0}}]},2).to({state:[{t:this.instance_8,p:{scaleX:1,scaleY:1.126,skewX:17.9,skewY:15.7,x:374,y:464.1,startPosition:13,regX:-16.6,regY:-36.2}},{t:this.instance_7,p:{scaleX:1.126,scaleY:1.119,skewX:15.3,skewY:15.8,x:228.2,y:521.6,regX:12,regY:-22.1,startPosition:0}},{t:this.instance_6,p:{regX:8.2,scaleX:1.128,scaleY:1.121,skewX:11.6,skewY:-167.9,x:277,y:535,regY:-18.8,startPosition:0}}]},2).to({state:[{t:this.instance_7,p:{scaleX:1.11,scaleY:1.103,skewX:11.5,skewY:11.9,x:225.6,y:520.5,regX:11.9,regY:-22.1,startPosition:0}},{t:this.instance_6,p:{regX:8.2,scaleX:1.112,scaleY:1.105,skewX:7.7,skewY:-171.8,x:274.6,y:530.4,regY:-18.8,startPosition:0}}]},2).to({state:[{t:this.instance_8,p:{scaleX:0.857,scaleY:0.965,skewX:-4.9,skewY:-7.1,x:310,y:414.7,startPosition:17,regX:-16.5,regY:-36.3}},{t:this.instance_7,p:{scaleX:0.966,scaleY:0.96,skewX:-17,skewY:-16.5,x:201.7,y:493.4,regX:-5.7,regY:-20.1,startPosition:14}},{t:this.instance_6,p:{regX:8.5,scaleX:0.967,scaleY:0.96,skewX:-13.1,skewY:167.2,x:265.9,y:476.4,regY:-18.9,startPosition:14}}]},2).to({state:[{t:this.instance_8,p:{scaleX:0.831,scaleY:0.937,skewX:-12,skewY:-14.2,x:288.1,y:398.5,startPosition:18,regX:-16.7,regY:-36.4}},{t:this.instance_7,p:{scaleX:0.937,scaleY:0.931,skewX:-24,skewY:-23.6,x:193.5,y:487.1,regX:-5.5,regY:-20.2,startPosition:14}},{t:this.instance_6,p:{regX:8.6,scaleX:0.938,scaleY:0.931,skewX:-20.2,skewY:160.1,x:253,y:463.1,regY:-19,startPosition:14}}]},2).to({state:[{t:this.instance_8,p:{scaleX:0.832,scaleY:0.937,skewX:-16.6,skewY:-18.8,x:277.8,y:385.6,startPosition:19,regX:-16.6,regY:-36.4}},{t:this.instance_7,p:{scaleX:0.938,scaleY:0.932,skewX:-28.7,skewY:-28.2,x:190.5,y:481.7,regX:-5.5,regY:-20.1,startPosition:14}},{t:this.instance_6,p:{regX:8.5,scaleX:0.938,scaleY:0.932,skewX:-24.8,skewY:155.5,x:248.1,y:452.9,regY:-18.9,startPosition:14}}]},1).to({state:[{t:this.instance_8,p:{scaleX:0.832,scaleY:0.937,skewX:-19.5,skewY:-21.6,x:281.8,y:390.5,startPosition:19,regX:-13.4,regY:-27.8}},{t:this.instance_7,p:{scaleX:0.938,scaleY:0.932,skewX:-29.2,skewY:-28.7,x:190.4,y:480.9,regX:-5.4,regY:-20.1,startPosition:14}},{t:this.instance_6,p:{regX:8.4,scaleX:0.938,scaleY:0.932,skewX:-25.3,skewY:155,x:247.8,y:451.8,regY:-18.9,startPosition:14}}]},2).to({state:[{t:this.instance_8,p:{scaleX:0.831,scaleY:0.936,skewX:-20.9,skewY:-23,x:278.7,y:388.5,startPosition:19,regX:-15.8,regY:-29.8}},{t:this.instance_7,p:{scaleX:0.938,scaleY:0.931,skewX:-29.4,skewY:-28.9,x:190.1,y:480.5,regX:-5.4,regY:-20.1,startPosition:14}},{t:this.instance_6,p:{regX:8.5,scaleX:0.938,scaleY:0.932,skewX:-25.6,skewY:154.7,x:247.3,y:451.1,regY:-19,startPosition:14}}]},2).to({state:[{t:this.instance_8,p:{scaleX:0.831,scaleY:0.936,skewX:-21.4,skewY:-23.6,x:278.7,y:388.5,startPosition:19,regX:-15.8,regY:-29.9}},{t:this.instance_7,p:{scaleX:0.938,scaleY:0.931,skewX:-29.4,skewY:-28.9,x:190.1,y:480.5,regX:-5.4,regY:-20.1,startPosition:14}},{t:this.instance_6,p:{regX:8.5,scaleX:0.938,scaleY:0.932,skewX:-25.6,skewY:154.7,x:247.3,y:451.1,regY:-19,startPosition:14}}]},3).to({state:[{t:this.instance_8,p:{scaleX:0.844,scaleY:0.939,skewX:-20.1,skewY:-23.6,x:273.9,y:388.4,startPosition:19,regX:-15.9,regY:-29.8}},{t:this.instance_7,p:{scaleX:0.938,scaleY:0.931,skewX:-31,skewY:-30.5,x:188.3,y:482.2,regX:-5.5,regY:-20.1,startPosition:14}},{t:this.instance_6,p:{regX:8.4,scaleX:0.938,scaleY:0.932,skewX:-27.1,skewY:153.2,x:244.7,y:451.1,regY:-19,startPosition:14}}]},15).to({state:[{t:this.instance_8,p:{scaleX:0.857,scaleY:0.939,skewX:-20.4,skewY:-24.6,x:272.4,y:389.2,startPosition:19,regX:-15.9,regY:-29.8}},{t:this.instance_7,p:{scaleX:0.938,scaleY:0.931,skewX:-31.3,skewY:-30.8,x:187.2,y:483.5,regX:-5.5,regY:-20.2,startPosition:14}},{t:this.instance_6,p:{regX:8.4,scaleX:0.938,scaleY:0.932,skewX:-27.4,skewY:152.9,x:243.5,y:452.2,regY:-19,startPosition:14}}]},2).to({state:[{t:this.instance_8,p:{scaleX:0.859,scaleY:0.939,skewX:-19.9,skewY:-25.6,x:274,y:392.8,startPosition:19,regX:-15.7,regY:-29.8}},{t:this.instance_7,p:{scaleX:0.937,scaleY:0.931,skewX:-30.6,skewY:-30.1,x:187.7,y:483.6,regX:-5.4,regY:-20.2,startPosition:14}},{t:this.instance_6,p:{regX:8.4,scaleX:0.938,scaleY:0.931,skewX:-26.7,skewY:153.6,x:244.4,y:453.2,regY:-19,startPosition:14}}]},3).to({state:[{t:this.instance_8,p:{scaleX:0.858,scaleY:0.939,skewX:-15.3,skewY:-21,x:285.1,y:399,startPosition:20,regX:-15.7,regY:-29.8}},{t:this.instance_7,p:{scaleX:0.937,scaleY:0.931,skewX:-26,skewY:-25.5,x:191.8,y:482.7,regX:-5.4,regY:-20.3,startPosition:14}},{t:this.instance_6,p:{regX:8.5,scaleX:0.937,scaleY:0.931,skewX:-22.1,skewY:158.2,x:250.7,y:456.9,regY:-19,startPosition:14}}]},2).to({state:[{t:this.instance_7,p:{scaleX:0.934,scaleY:0.928,skewX:4.4,skewY:4.8,x:208.9,y:485.7,regX:8.3,regY:-27.1,startPosition:0}},{t:this.instance_6,p:{regX:8.4,scaleX:0.936,scaleY:0.929,skewX:3.2,skewY:-176.3,x:252.6,y:493.1,regY:-19.1,startPosition:0}}]},1).to({state:[{t:this.instance_7,p:{scaleX:0.935,scaleY:0.929,skewX:9.1,skewY:9.5,x:217.2,y:488.1,regX:8.4,regY:-27.1,startPosition:0}},{t:this.instance_6,p:{regX:8.4,scaleX:0.936,scaleY:0.93,skewX:7.8,skewY:-171.7,x:260.2,y:499,regY:-19.1,startPosition:0}},{t:this.instance_8,p:{scaleX:0.83,scaleY:0.935,skewX:2,skewY:-0.1,x:327.5,y:432.9,startPosition:25,regX:-15.9,regY:-30}}]},1).to({state:[{t:this.instance_7,p:{scaleX:0.935,scaleY:0.929,skewX:8.2,skewY:8.7,x:215.5,y:487,regX:8.3,regY:-27.1,startPosition:0}},{t:this.instance_6,p:{regX:8.4,scaleX:0.936,scaleY:0.929,skewX:7,skewY:-172.5,x:258.7,y:497.4,regY:-19,startPosition:0}},{t:this.instance_8,p:{scaleX:0.83,scaleY:0.935,skewX:1.2,skewY:-0.9,x:325.1,y:430.3,startPosition:25,regX:-15.9,regY:-30}}]},2).to({state:[{t:this.instance_7,p:{scaleX:0.935,scaleY:0.929,skewX:7.7,skewY:8.2,x:214.9,y:486.8,regX:8.3,regY:-27.1,startPosition:0}},{t:this.instance_6,p:{regX:8.4,scaleX:0.936,scaleY:0.929,skewX:6.5,skewY:-173,x:258.2,y:496.7,regY:-19,startPosition:0}},{t:this.instance_8,p:{scaleX:0.83,scaleY:0.935,skewX:0.7,skewY:-1.4,x:323.9,y:429.1,startPosition:25,regX:-15.9,regY:-29.9}}]},2).to({state:[{t:this.instance_7,p:{scaleX:0.935,scaleY:0.929,skewX:7.4,skewY:7.9,x:214.5,y:486.6,regX:8.3,regY:-27.1,startPosition:0}},{t:this.instance_6,p:{regX:8.3,scaleX:0.936,scaleY:0.929,skewX:6.2,skewY:-173.3,x:258,y:496.3,regY:-19,startPosition:0}},{t:this.instance_8,p:{scaleX:0.83,scaleY:0.935,skewX:0.4,skewY:-1.7,x:323.3,y:428.4,startPosition:25,regX:-15.9,regY:-29.9}}]},2).to({state:[{t:this.instance_7,p:{scaleX:0.934,scaleY:0.928,skewX:11.3,skewY:11.7,x:218.8,y:494.1,regX:8.4,regY:-27.1,startPosition:0}},{t:this.instance_6,p:{regX:8.4,scaleX:0.936,scaleY:0.929,skewX:10,skewY:-169.5,x:261.4,y:506.7,regY:-19,startPosition:0}},{t:this.instance_8,p:{scaleX:0.83,scaleY:0.935,skewX:4.2,skewY:2,x:331,y:443.4,startPosition:25,regX:-16,regY:-29.8}}]},17).to({state:[{t:this.instance_7,p:{scaleX:0.934,scaleY:0.928,skewX:12.8,skewY:13.2,x:220.1,y:498.8,regX:8.4,regY:-27.1,startPosition:0}},{t:this.instance_6,p:{regX:8.4,scaleX:0.935,scaleY:0.929,skewX:11.5,skewY:-167.9,x:262.3,y:512.5,regY:-19,startPosition:0}},{t:this.instance_8,p:{scaleX:0.83,scaleY:0.935,skewX:5.7,skewY:3.6,x:333.6,y:451.1,startPosition:25,regX:-16,regY:-29.8}}]},1).to({state:[{t:this.instance_7,p:{scaleX:0.934,scaleY:0.928,skewX:13.2,skewY:13.7,x:220.5,y:499.3,regX:8.4,regY:-27.1,startPosition:0}},{t:this.instance_6,p:{regX:8.4,scaleX:0.935,scaleY:0.929,skewX:12,skewY:-167.5,x:262.6,y:513.3,regY:-19,startPosition:0}},{t:this.instance_8,p:{scaleX:0.83,scaleY:0.935,skewX:6.2,skewY:4,x:334.3,y:452.4,startPosition:25,regX:-16,regY:-29.8}}]},2).to({state:[{t:this.instance_7,p:{scaleX:0.934,scaleY:0.928,skewX:12.2,skewY:12.7,x:219,y:498.1,regX:8.4,regY:-27.1,startPosition:0}},{t:this.instance_6,p:{regX:8.4,scaleX:0.935,scaleY:0.929,skewX:11,skewY:-168.5,x:261.4,y:511.3,regY:-19,startPosition:0}},{t:this.instance_8,p:{scaleX:0.829,scaleY:0.938,skewX:3.3,skewY:-1.7,x:334.6,y:445.8,startPosition:25,regX:-16,regY:-29.9}}]},2).to({state:[{t:this.instance_7,p:{scaleX:0.934,scaleY:0.928,skewX:2,skewY:2.5,x:210.7,y:488.3,regX:8.4,regY:-27.2,startPosition:0}},{t:this.instance_6,p:{regX:8.3,scaleX:0.935,scaleY:0.928,skewX:0.8,skewY:-178.7,x:254.7,y:493.9,regY:-19,startPosition:0}},{t:this.instance_8,p:{scaleX:0.829,scaleY:0.934,skewX:-2.4,skewY:-4.6,x:325.9,y:456.6,startPosition:27,regX:-4.6,regY:10.5}}]},2).to({state:[{t:this.instance_7,p:{scaleX:0.933,scaleY:0.927,skewX:-3.5,skewY:-3.1,x:206.6,y:481.3,regX:8.4,regY:-27.2,startPosition:0}},{t:this.instance_6,p:{regX:8.3,scaleX:0.934,scaleY:0.928,skewX:-4.8,skewY:175.5,x:250.9,y:482.6,regY:-19,startPosition:0}},{t:this.instance_8,p:{scaleX:0.828,scaleY:0.933,skewX:-17.1,skewY:-19.3,x:301.1,y:404,startPosition:29,regX:-16,regY:-29.9}}]},1).to({state:[{t:this.instance_7,p:{scaleX:0.933,scaleY:0.927,skewX:-4.8,skewY:-4.3,x:205.5,y:480.2,regX:8.4,regY:-27.1,startPosition:0}},{t:this.instance_6,p:{regX:8.4,scaleX:0.934,scaleY:0.928,skewX:-6,skewY:174.3,x:249.9,y:480.4,regY:-19,startPosition:0}},{t:this.instance_8,p:{scaleX:0.828,scaleY:0.932,skewX:-17.7,skewY:-19.9,x:297.5,y:398.9,startPosition:28,regX:-15.9,regY:-30}}]},2).to({state:[{t:this.instance_7,p:{scaleX:0.933,scaleY:0.927,skewX:-4.3,skewY:-3.8,x:206.3,y:480.6,regX:8.4,regY:-27.1,startPosition:0}},{t:this.instance_6,p:{regX:8.4,scaleX:0.934,scaleY:0.928,skewX:-5.5,skewY:174.8,x:250.6,y:481.2,regY:-19,startPosition:0}},{t:this.instance_8,p:{scaleX:0.828,scaleY:0.933,skewX:-15.4,skewY:-17.5,x:300.5,y:401.7,startPosition:29,regX:-15.9,regY:-29.8}}]},2).to({state:[{t:this.instance_7,p:{scaleX:0.933,scaleY:0.927,skewX:-4,skewY:-3.5,x:206.6,y:480.8,regX:8.4,regY:-27.2,startPosition:0}},{t:this.instance_6,p:{regX:8.4,scaleX:0.934,scaleY:0.928,skewX:-5.2,skewY:175.1,x:250.9,y:481.7,regY:-18.9,startPosition:0}},{t:this.instance_8,p:{scaleX:0.829,scaleY:0.934,skewX:-11,skewY:-13.2,x:301.2,y:402.3,startPosition:29,regX:-16,regY:-29.9}}]},2).to({state:[{t:this.instance_7,p:{scaleX:0.933,scaleY:0.927,skewX:-4,skewY:-3.5,x:206.6,y:480.8,regX:8.4,regY:-27.2,startPosition:0}},{t:this.instance_6,p:{regX:8.4,scaleX:0.934,scaleY:0.928,skewX:-5.2,skewY:175.1,x:250.9,y:481.7,regY:-18.9,startPosition:0}},{t:this.instance_8,p:{scaleX:0.829,scaleY:0.934,skewX:-9.7,skewY:-11.9,x:301.2,y:402.4,startPosition:29,regX:-15.9,regY:-29.8}}]},2).to({state:[{t:this.instance_7,p:{scaleX:0.933,scaleY:0.927,skewX:-4,skewY:-3.5,x:206.6,y:480.8,regX:8.4,regY:-27.2,startPosition:0}},{t:this.instance_6,p:{regX:8.4,scaleX:0.934,scaleY:0.928,skewX:-5.2,skewY:175.1,x:250.9,y:481.7,regY:-18.9,startPosition:0}},{t:this.instance_8,p:{scaleX:0.829,scaleY:0.934,skewX:-10.5,skewY:-12.7,x:301.2,y:402.4,startPosition:29,regX:-16,regY:-29.8}}]},3).to({state:[{t:this.instance_7,p:{scaleX:0.933,scaleY:0.927,skewX:-2.2,skewY:-1.7,x:208.1,y:482.7,regX:8.4,regY:-27.2,startPosition:0}},{t:this.instance_6,p:{regX:8.3,scaleX:0.934,scaleY:0.928,skewX:-3.4,skewY:176.9,x:252.3,y:485,regY:-19,startPosition:0}},{t:this.instance_8,p:{scaleX:0.829,scaleY:0.933,skewX:-8.7,skewY:-10.9,x:305.1,y:407.3,startPosition:30,regX:-15.9,regY:-29.9}}]},8).to({state:[{t:this.instance_7,p:{scaleX:0.934,scaleY:0.928,skewX:10,skewY:10.4,x:214.5,y:487.3,regX:8.4,regY:-27,startPosition:0}},{t:this.instance_6,p:{regX:8.3,scaleX:0.935,scaleY:0.929,skewX:8.7,skewY:-170.8,x:257.5,y:498.9,regY:-19,startPosition:0}}]},2).to({state:[{t:this.instance_7,p:{scaleX:0.934,scaleY:0.928,skewX:12.5,skewY:13,x:217.9,y:492.2,regX:8.4,regY:-27.1,startPosition:0}},{t:this.instance_6,p:{regX:8.4,scaleX:0.935,scaleY:0.929,skewX:11.3,skewY:-168.2,x:260.1,y:505.7,regY:-19,startPosition:0}},{t:this.instance_8,p:{scaleX:0.83,scaleY:0.935,skewX:5.5,skewY:3.3,x:331.1,y:443.9,startPosition:5,regX:-16,regY:-29.8}}]},1).to({state:[{t:this.instance_7,p:{scaleX:0.934,scaleY:0.928,skewX:12.9,skewY:13.4,x:218.7,y:493.1,regX:8.4,regY:-27.1,startPosition:0}},{t:this.instance_6,p:{regX:8.4,scaleX:0.935,scaleY:0.929,skewX:11.7,skewY:-167.8,x:260.9,y:506.9,regY:-19,startPosition:0}},{t:this.instance_8,p:{scaleX:0.83,scaleY:0.935,skewX:5.9,skewY:3.7,x:332.3,y:445.7,startPosition:5,regX:-16,regY:-29.8}}]},2).to({state:[{t:this.instance_7,p:{scaleX:0.934,scaleY:0.928,skewX:11.1,skewY:11.5,x:216.1,y:491,regX:8.4,regY:-27.2,startPosition:0}},{t:this.instance_6,p:{regX:8.4,scaleX:0.935,scaleY:0.929,skewX:9.8,skewY:-169.7,x:258.6,y:503.4,regY:-19,startPosition:0}}]},4).to({state:[{t:this.instance_7,p:{scaleX:0.933,scaleY:0.927,skewX:-5.8,skewY:-5.3,x:205.3,y:479.3,regX:8.4,regY:-27.3,startPosition:0}},{t:this.instance_6,p:{regX:8.4,scaleX:0.934,scaleY:0.928,skewX:-7,skewY:173.3,x:249.6,y:478.9,regY:-19,startPosition:0}}]},2).to({state:[{t:this.instance_7,p:{scaleX:0.933,scaleY:0.927,skewX:-8.1,skewY:-7.6,x:201.7,y:478.5,regX:8.4,regY:-27.3,startPosition:0}},{t:this.instance_6,p:{regX:8.4,scaleX:0.934,scaleY:0.928,skewX:-9.3,skewY:171,x:246.1,y:476.3,regY:-19,startPosition:0}},{t:this.instance_8,p:{scaleX:0.825,scaleY:0.955,skewX:-15.4,skewY:-17.1,x:290,y:393.1,startPosition:34,regX:-15.9,regY:-29.8}},{t:this.instance_9,p:{regX:18.1,regY:-30.2,skewX:-13.9,skewY:-9.6,x:137.2,y:431.1,scaleX:0.928,scaleY:0.92}}]},1).to({state:[{t:this.instance_7,p:{scaleX:0.933,scaleY:0.927,skewX:-7.3,skewY:-6.8,x:202.7,y:479,regX:8.4,regY:-27.3,startPosition:0}},{t:this.instance_6,p:{regX:8.4,scaleX:0.934,scaleY:0.928,skewX:-8.5,skewY:171.8,x:247,y:477.4,regY:-19,startPosition:0}},{t:this.instance_8,p:{scaleX:0.828,scaleY:0.933,skewX:-13.8,skewY:-16,x:292.6,y:395.4,startPosition:34,regX:-15.9,regY:-29.8}},{t:this.instance_9,p:{regX:18.2,regY:-30.3,skewX:-11.4,skewY:-7.1,x:138.8,y:430.7,scaleX:0.928,scaleY:0.92}}]},2).to({state:[{t:this.instance_7,p:{scaleX:0.933,scaleY:0.927,skewX:-6.8,skewY:-6.3,x:203.1,y:479.2,regX:8.4,regY:-27.3,startPosition:0}},{t:this.instance_6,p:{regX:8.4,scaleX:0.934,scaleY:0.928,skewX:-8,skewY:172.3,x:247.5,y:478,regY:-19,startPosition:0}},{t:this.instance_8,p:{scaleX:0.83,scaleY:0.92,skewX:-12.9,skewY:-15.3,x:293.8,y:396.5,startPosition:34,regX:-15.9,regY:-29.8}},{t:this.instance_9,p:{regX:18.2,regY:-30.3,skewX:-10.5,skewY:-6.3,x:139.6,y:430.4,scaleX:0.927,scaleY:0.92}}]},2).to({state:[{t:this.instance_7,p:{scaleX:0.933,scaleY:0.927,skewX:-6.5,skewY:-6.1,x:203.4,y:479.5,regX:8.4,regY:-27.2,startPosition:0}},{t:this.instance_6,p:{regX:8.4,scaleX:0.934,scaleY:0.928,skewX:-7.8,skewY:172.5,x:247.8,y:478.4,regY:-19,startPosition:0}},{t:this.instance_8,p:{scaleX:0.829,scaleY:0.912,skewX:-12.5,skewY:-14.6,x:294.6,y:397.2,startPosition:34,regX:-16,regY:-29.8}},{t:this.instance_9,p:{regX:18.2,regY:-30.3,skewX:-10.1,skewY:-5.8,x:140.2,y:430.3,scaleX:0.927,scaleY:0.92}}]},2).to({state:[{t:this.instance_7,p:{scaleX:0.933,scaleY:0.927,skewX:-7.3,skewY:-6.9,x:202.6,y:478.7,regX:8.4,regY:-27.2,startPosition:0}},{t:this.instance_6,p:{regX:8.5,scaleX:0.934,scaleY:0.928,skewX:-8.6,skewY:171.7,x:246.9,y:477.1,regY:-19,startPosition:0}},{t:this.instance_8,p:{scaleX:0.828,scaleY:0.929,skewX:-13.6,skewY:-15.7,x:292.7,y:395.1,startPosition:34,regX:-16,regY:-29.8}},{t:this.instance_9,p:{regX:18.2,regY:-30.3,skewX:-14.7,skewY:-8.6,x:138.9,y:430.5,scaleX:0.924,scaleY:0.926}}]},17).to({state:[{t:this.instance_7,p:{scaleX:0.933,scaleY:0.927,skewX:-7.9,skewY:-7.4,x:201.6,y:478.3,regX:8.4,regY:-27.2,startPosition:0}},{t:this.instance_6,p:{regX:8.4,scaleX:0.934,scaleY:0.928,skewX:-9.1,skewY:171.2,x:246,y:476.1,regY:-19,startPosition:0}},{t:this.instance_8,p:{scaleX:0.825,scaleY:0.94,skewX:-14.9,skewY:-16.4,x:291,y:393.4,startPosition:34,regX:-15.9,regY:-29.8}},{t:this.instance_9,p:{regX:18.2,regY:-30.3,skewX:-17.9,skewY:-11.2,x:137.7,y:430.4,scaleX:0.922,scaleY:0.929}}]},2).to({state:[{t:this.instance_7,p:{scaleX:0.933,scaleY:0.927,skewX:-7.3,skewY:-6.8,x:202.3,y:478.9,regX:8.4,regY:-27.2,startPosition:0}},{t:this.instance_6,p:{regX:8.4,scaleX:0.934,scaleY:0.928,skewX:-8.5,skewY:171.8,x:246.6,y:477.2,regY:-19,startPosition:0}},{t:this.instance_8,p:{scaleX:0.793,scaleY:0.997,skewX:-13.5,skewY:-2,x:292.4,y:404.1,startPosition:34,regX:-15.9,regY:-29.7}},{t:this.instance_9,p:{regX:18.1,regY:-30.3,skewX:-10,skewY:-11.8,x:138,y:430.8,scaleX:0.938,scaleY:0.948}}]},3).to({state:[{t:this.instance_7,p:{scaleX:0.933,scaleY:0.927,skewX:-3.8,skewY:-3.3,x:203.5,y:482.5,regX:8.4,regY:-27.3,startPosition:0}},{t:this.instance_6,p:{regX:8.4,scaleX:0.934,scaleY:0.927,skewX:-5,skewY:175.3,x:247.9,y:483.5,regY:-19,startPosition:0}}]},2).to({state:[{t:this.instance_7,p:{scaleX:0.938,scaleY:0.932,skewX:-15.6,skewY:-15.2,x:200.2,y:481.7,regX:-5.6,regY:-20.1,startPosition:14}},{t:this.instance_6,p:{regX:8.6,scaleX:0.939,scaleY:0.932,skewX:-11.8,skewY:168.5,x:262.9,y:466.7,regY:-18.9,startPosition:14}},{t:this.instance_8,p:{scaleX:0.832,scaleY:0.928,skewX:-3,skewY:-5.2,x:307,y:407.3,startPosition:0,regX:-16.7,regY:-36.2}}]},1).to({state:[{t:this.instance_8,p:{scaleX:0.832,scaleY:0.947,skewX:-2.8,skewY:-5,x:309,y:409.9,startPosition:0,regX:-16.7,regY:-36.3}},{t:this.instance_7,p:{scaleX:0.938,scaleY:0.932,skewX:-14.9,skewY:-14.4,x:201.1,y:482,regX:-5.7,regY:-20.1,startPosition:14}},{t:this.instance_6,p:{regX:8.6,scaleX:0.939,scaleY:0.932,skewX:-11,skewY:169.3,x:264.1,y:467.7,regY:-19,startPosition:14}}]},2).to({state:[{t:this.instance_8,p:{scaleX:0.832,scaleY:0.937,skewX:-3.1,skewY:-5.2,x:308.1,y:408.8,startPosition:0,regX:-16.7,regY:-36.3}},{t:this.instance_7,p:{scaleX:0.938,scaleY:0.932,skewX:-15.1,skewY:-14.7,x:200.7,y:481.9,regX:-5.6,regY:-20,startPosition:14}},{t:this.instance_6,p:{regX:8.6,scaleX:0.939,scaleY:0.932,skewX:-11.3,skewY:169,x:263.6,y:467.3,regY:-19,startPosition:14}}]},2).to({state:[{t:this.instance_8,p:{scaleX:0.832,scaleY:0.937,skewX:-3.4,skewY:-5.6,x:307.3,y:408.1,startPosition:0,regX:-16.6,regY:-36.3}},{t:this.instance_7,p:{scaleX:0.938,scaleY:0.932,skewX:-15.4,skewY:-15,x:200.2,y:481.6,regX:-5.6,regY:-20.1,startPosition:14}},{t:this.instance_6,p:{regX:8.5,scaleX:0.939,scaleY:0.932,skewX:-11.6,skewY:168.7,x:263.1,y:466.7,regY:-19,startPosition:14}}]},2).to({state:[]},12).wait(256));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13,-148.9,376.1,700.5);


// symbols:
(lib.CUP23LPUPILR001 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgQAWQgHgJAAgNQAAgLAHgKQAHgJAJAAQALAAAHAJQAHAKgBALQABANgHAJQgHAKgLAAQgJAAgHgKg");
	this.shape.setTransform(2,2.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.6,5,6.4);


(lib.CUP23LPUPILL001 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgQAWQgHgJAAgNQAAgLAHgKQAHgJAJAAQALAAAHAJQAHAKgBALQABANgHAJQgHAKgLAAQgJAAgHgKg");
	this.shape.setTransform(2,2.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.6,5,6.4);


(lib.CUP23LMOUTH001 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 9
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A83C47").s().p("AhbBLQgogRgGgYIgIgKQAUgBENgoQgTAmgnAgQgoAfgwAEIgRAAQgoAAgggNgAi2AAQBFhaCPADQAzABAxAMQApAKANAKQgrAShqATQhqARhVAAIgaAAg");
	this.shape.setTransform(31.5,15.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjtBWQgBgXgEgYQA0ABBpgXQCWggCthIQAgBCjDA5QioA0iBAAg");
	this.shape_1.setTransform(40.5,9.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#862D59").s().p("AggAeQgHgggKgjIBTgIQAQBHAAASIhEACQgKAAgEgQg");
	this.shape_2.setTransform(28.6,23.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#411415").s().p("AiCBhQgBgpgEgOQgGgPgFgWQCqgWB7hPQAAA8hpBGQhbA/hCAAIgPAAg");
	this.shape_3.setTransform(48.3,18.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A83C47").s().p("AgtCdQgcgRgQgSQBzgCAmgGQA/gLBPgrIgDAJQgIAcgtAkQg6AvhEAAQgfAAgmgXgAjNhLIAGgGQAwgvAmgUQA7gfBOAAQAsAABeAiQitA7gZAAQgJAAg0AHQg0AIgKgBQgNAAghgDg");
	this.shape_4.setTransform(33.3,18.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#862D59").s().p("AgZBMQADgJAAgIQAAgUgJgfQgHgagWg8IBUgKQAQA/ALA4QAIArACADIhcAMQADgDADgKg");
	this.shape_5.setTransform(32,25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A83C47").s().p("AA1DTQgqgBgZgLQgdgMgFgTIgCgCQAyAIBughQBugiAPgaQgkBRg0AZQgyAYgpAAIgDAAgAjqhsQAqg9BSgaQAzgPA7AAIAlACQAvAHAzAUIi6A1QgmAKg9AGQgsAEgTAAg");
	this.shape_6.setTransform(35.8,19.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AkBArQA+AJDDg0QDFg1AxgqQAMAoAAAJQAAAHgBABIgLAGQgKAGhvAuQhMAjhxAVQhYAPhjAFQgDg0gDgBgAkBArIAAAAIAAAAg");
	this.shape_7.setTransform(42,6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#411415").s().p("AiFCMQACgNgLhEQgKg7gGgUQBQgKBaglQBXgkA8gsQACB8g7A8Qg+A/ixAwg");
	this.shape_8.setTransform(52.2,18);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AkFBoQgBgwgEAAQB4ACDHhIQBzgrBLgnQAGgEAKAAIAIgDIgOAFIAMAxQABADgwAYIhAAfIg+AfIglAMQgmALgSAFIhYAPIiNAVg");
	this.shape_9.setTransform(43.2,2.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#862D59").s().p("AAABHQAAgcgIgjQgOhEgcgrIBIgNQAIAfAKBFQALBMAAAmIg2ATQADghAAgNg");
	this.shape_10.setTransform(38.2,23.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#411415").s().p("AhzBJQgKhHgMgsQAmACBsg1QBpgzARgWQAHAcAAANQAAB3g7BBQg2A+iCAuQgDgogHg2g");
	this.shape_11.setTransform(56,16.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A83C47").s().p("AAdDiQgfgJgRgSQAiAMB1gxQB1gwASgoQg4CEhpAWQgRAEgRAAQgWAAgVgGgAkKh6QBahJALgGQAygeBIAAQAnAAA3AOQAxAMAKAHQg8AliFAXQhkARg7AAg");
	this.shape_12.setTransform(38.3,18);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Aj1BjQgCgngEgOQBuACC+hBQB7grBPgoIAAAVQAFAigTATQgKALgOAFIhcAkQg+AZg7ARQhyAgh0ABg");
	this.shape_13.setTransform(40.6,4.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#862D59").s().p("AAhCBQgQgGgHgXQgEgOgDgsQgIhngihEIAjgCIAKBsQALBjAXA4g");
	this.shape_14.setTransform(30,29.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#411415").s().p("AiNBqQgSh4gMhBQBcgJCCg0QBdgkAcgRQgUC8hDBhQhFBmhyAAQgaAAgRhYg");
	this.shape_15.setTransform(47.6,23.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#A83C47").s().p("ABJEKQglAAgjgYQgHgXgVgUIAOAJQAOAGAMAIQAKAFAWAAQA4AAAygaQAxgZATglIAKgNIgBAMQgoBQgoAYQgnAYgkAAIAAAAgAiQjlQBAgkBVAAQAjAAAgAEQA5AIAMASQhWArhjARQg+ALh6AGQAngvAtgYg");
	this.shape_16.setTransform(34.3,23.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhVAOQALgOAagNQAXgLAOAAQAaAAASAJQAKAFAuAdQgvgEgnACIhbAIg");
	this.shape_17.setTransform(22.4,7.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#411415").s().p("AgjByQgEgGgHgNIgkhxQgXhJAAgbIABgIIABAAIBggFQA7AAASAPQAZAVALBUQgECPhgAAQgYAAgRgSg");
	this.shape_18.setTransform(25.5,24.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A83C47").s().p("AAgDcQgagJgRgRQgSgSgJglIAHAHQASANAuAJQASAAAZgJQAagJAOgNIAHgLQADAfgiAkQgaAcgXAAQgFAAgGgBgAh1iTQANgnAIgLQARgXAfAAQAQAAAYAMIAmAVIgFgBQhagbg5BQg");
	this.shape_19.setTransform(23.9,22.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#411415").s().p("AgmBUQgGgHAAgLQAAgJAGgSIAFgRIgPgcQgPgdAAgJQAAgZAUgOQATgNAYADQAaACASASQAUAUAAAhQAABAgbAdQgUAVgdAAQgSAAgIgKg");
	this.shape_20.setTransform(21.4,15.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A83C47").s().p("AgXCCIgIgnQAWAPAZAAQAcgGAJgEQgJAggNAMQgIAHgOABQgYgBgIgRgAg0hJIAAgHQAAgeALgSQALgTAVABQAgAFAPAUQgHgDgKAAQgWAAgQANQgPALgTAcIgBgBg");
	this.shape_21.setTransform(19.3,15.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Aj+AsIAaABQBVAACxgzQCxgzAigiQAJAiABAKQgBAHg8AdQg9Abg3ATQgZAJhgATQh5AXhVAHQgDgxgCAAg");
	this.shape_22.setTransform(42.2,5.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#862D59").s().p("AgcgIIA1gJIAEAKQgtAYgDABg");
	this.shape_23.setTransform(35.4,16.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D580AA").s().p("Ag2A9QgMgVAAgfQAAgiAegbQAdgZAdAAQAXAAANATQAJANAAALQAAAIgjAkQgJAKgBAEQgCAIABApQgoAFgPAAQgKAAgKgRg");
	this.shape_24.setTransform(38.7,25.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#411415").s().p("AhxCHQgDgHAAgDQAAgXAXgNQAXgNAAgZQAAgWgLgTQgOgWgdgFQgIABgFgFIgDgFIAJgBQBPgQBfgvQA2gbApgaQARByhhBbQgnAmgtAXQgsAVgiAAQgFAAgEgJg");
	this.shape_25.setTransform(54.1,17.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#A83C47").s().p("AAxDTQgngBgYgOQgRgIgagWQAzADBdgbQBlgcAoghQgQBHg+AeQg8AdgmAAIgDAAgAgHjSQArAAAnALQAXAGAeAMQimA0hNANQglAGhMABQA8hlChAAg");
	this.shape_26.setTransform(36.5,19.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AkCA8QBkAFCvg9QCmg3BAg3IABAHIAAgBQALAeAAATIgBAOQiABAhHAZQiOAxiqAGQgCgegDgRg");
	this.shape_27.setTransform(43,2.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D580AA").s().p("AhcgEQASgRAXAAIAJACQAMAFASADIgLAbIAGAHQAOgHAAgBQgKgNAYgZQAdgfAvAAQAHAAAMAFQAMAGAEAFQhAArgpAQQgwAUhaAOQAHgnAWgUg");
	this.shape_28.setTransform(47.1,32.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#862D59").s().p("AgyhEIAdgFIArgJQAGAgAEAbIATBUIgCAKIgQAAQgJAAgPAFQgKAFgBACQgJhKgnhNg");
	this.shape_29.setTransform(38.4,21);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#411415").s().p("AhqB0QAAgygdheQAcAAA6gXQBLgfBuhAQACBjgRA0QgSA2g5A7IgRgPQgLgKgSAAQgRAAgVAMQgVAMgjAeQgMgVAAgKg");
	this.shape_30.setTransform(56,15.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#A83C47").s().p("AAUDoQgfgKgLgKIgGgJQBggLBQghQBWgkAaguIgJAfQgMAegSAPQgoAogWARQglAdg9AAQgNAAgcgHgAkDiHIACgBQAUgUAbgVQA0gqAjgGQA5gRA6AFQAsADBEAUQjbBPh4AAg");
	this.shape_31.setTransform(38.2,19.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AkDA2QCegCCihCQBXgkBig3IAJAjIAFAXQgnAlhTAjQilBKjkAHQgDg0gBAAg");
	this.shape_32.setTransform(43.3,2.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D580AA").s().p("AgygOIAJACIAeAIQgBAtgmADIhAAGQAVhAArAAgABYgxQAJAAASAJQgOANg0AbQgvAVgLADQAkhJA9AAg");
	this.shape_33.setTransform(47.4,33.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#862D59").s().p("AgMAdQgJgmgPgmIgPgiIAegFIAqgJIAPBEQAEASAMBfQgTgCghAMg");
	this.shape_34.setTransform(38.7,22);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#411415").s().p("AhoCIQAAgYgCgYQgCgVgNg1QgKgqgFgNQApgGA7gZQBNgfBeg5QACAUAAAXQAABIgUA1QgYBAg0AwQgDAAgTgIIgTgJQgRADgUAIQgnARgRAeQgKgLgBgOg");
	this.shape_35.setTransform(56.3,16.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A83C47").s().p("ABWD+Qg3gCgTgIQgRgIgOgUQBjgJBTgrQBIgmAdgvQgKBHg5A1Qg3Azg0AAIgEAAgAkHiOQAkgxBGgiQBFgiAmAHQAmAGALgDQAUACBSAXQhBAkhsAZQhjAWhDAAg");
	this.shape_36.setTransform(38.5,20);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AjwBAIgFghQAkgBA3gIQAzgJAQAAQAKABAUgGIAagGIgRADQC6gqBsgyIgDArQgCANgIAGIhmAmQhkAphGAQQhPARhlABQgRAAgEgYg");
	this.shape_37.setTransform(39.7,11.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#862D59").s().p("AgVAAIABgDIAqgEIgqAPQgBgFAAgDg");
	this.shape_38.setTransform(26.5,21.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D580AA").s().p("AiLAjIADgFQAlg0BYgMQBagNA9AuQiJAnhYAAQgTAAgjgDg");
	this.shape_39.setTransform(34.6,24.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#411415").s().p("AghA9QgbgRg+gUQBlgXBBgcQApgSAmgaQglBSg3AnQgRAMgPAGQgLAEgDAAIgSgLg");
	this.shape_40.setTransform(50.9,16.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#A83C47").s().p("AgfCkQgqgNgNgdIgEgHIAWABQBNAABDgLQBQgOAugdQgPApg9AkQg5AggeADIgLABQgaAAghgLgAjJhEIBThBQA6gpBeAAQA5AAAvAQQAbAKAOAKIjIA3QhEAQhAAAg");
	this.shape_41.setTransform(32.2,18.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AjdCOQgSgCgVgFQABgRAIgvQC8AKCig/QBTgdA1gnQAEAFAVAQQASANAAAGQAAAdiPBQQh/AuiKAAQg8AAgfgDgAkRAxQAAgygEghQBFAKDHgqQDIgqA4gkQABAkABAUQAAADgKAGQgLAFAXgLQAXgLhGAmQhFAnh+AhQiFAmhkAAIgxgDg");
	this.shape_42.setTransform(37.7,14.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#411415").s().p("AgJAxQgLgNAAgEQAGgLAFgMQADgIgCgNIgDgYQgCgcAfgFIACAfIACAjQAAAMgGAbQgEAbgFAHIgQgVg");
	this.shape_43.setTransform(65.6,4.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#A83C47").s().p("AgvC1QgtgRgDghQBTABBMgHQBbgIAngRIgEAHQgRAgg1AcQg1AbgoAAQgnAAgjgNgAjBhaQAvg6BAgYQA1gVBFAAQAKAAAfADQAhAIAdADQATAEAWAQQhGAZhoAWQhtAWhHAAIgXAAg");
	this.shape_44.setTransform(30,18.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AkECgQgCACAAgKQAAgGAGgbQAFgcAAgMQChgCBfgcQBGgUCVhIIAWAYQAXAWAMAIQgtBQihArQhvAdhfAAgAkUA4QgBgygDgnQB8AEDNg/QCbgwAngWQgFAJAIAgQAGAZgVAOQhCAshaAmQiAA7iyAAQgZAAgUgDg");
	this.shape_45.setTransform(38.3,13.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#411415").s().p("AgSBHIgVgbIAQgXQADgGAAgYIgDgaQgCgTgDgLIAggSIAfgSQAFBDABATQAAAOgFAPQgGAWgXBCQgLgNgOgSg");
	this.shape_46.setTransform(67.2,3.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#A83C47").s().p("Ag+C2QgUgPgEgRQAlAEB4gTQBygQAQgIIgFAKQgpAtg5AYQgoASgUgBQhCAAgigZgAjIhgQBLhLAggKQARgGAvgJQAxgLAQAAQAXAAA2ANQAxAMAMAFQhIAiiAAaQhyAYgvgBQgGADgDAAQgEAAAAgFg");
	this.shape_47.setTransform(30.8,17.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).to({state:[]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},1).to({state:[]},1).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]},1).to({state:[]},1).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},1).wait(1));

	// Layer 8
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AhrBkQgNgFgVgOQgUgOgNgYIgMgTQgYgCg+gLIg9gTIgCgBIAJgHQAPAFBdAMQAQgWAkggQAkgfBMgNQBKgMAzAHQAzAHAiASIAiARQAMAAAngSIA0gYQATgHAOAAIAKAEQgYAdhaAhIgtARQgWAJgDAIQgCAIgFAIIgKARQgVAlg1AZQg0AYg3AAQgkAAgZgKg");
	this.shape_48.setTransform(32.9,15.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("Ag2CyQgigWgJgkQggAAgXgHQgQgEgIgGIABgJIAAgBQACgCAGAAQAKAABEAIQgIgMgDgVIgDgoQgCgSghAFQghAFgHgXQgHgYAFgUQg9gBgygQQgggLgKgIQABgGADgCQADgBAGAAQAKAAAoAHQAmAHALAAIAVgWQAZgbASgQQAUgSA0gRQA4gSAsAAQANAAAcADQAqAEAfAJQANAEAWAMQASAKAGAAQAGAAAggMIA3gUQAWgIALAAQAHAAAEAFQAEAFADAJQACAKAAAHQAABRgpA3IglAsQgXAegOAgQgZA5g3AgQg0AchDAAQgpAAghgVgAgXhFQAJAAAtgNQAvgMARgGg");
	this.shape_49.setTransform(33.1,18.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAKDjQgZgOgJgQQgLgTgbgDQgegDgHgJIADgBQAIgBAkAAIAAgdQgCgwgHgTIgbg6QgJgTgfAFQghAEgDgEQgGgJgEgcQgCgUAAgKQhqAKg1gRQgkgLgKgWIAHgBQBUASBJAAQAWgeApgdQBRg8BcAAQAeAABGATIBDATQCUhBALABQANAAAKAVQAOAgAABCQAABFgaAxQgRAdgwAyQgCACgHAZIAFgYQgOA3gqAwQgbAlg6AQQglALgmgBQgeABgfgRg");
	this.shape_50.setTransform(32.6,18);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("ABHD7QgHgEgYgTIgWgRIgRABQgIABgFgCQgJgCgGgJIAOgBQAiABANgRQAKgOAAgmQAAgjgbhBQgWg7gGAAIg8AEIg9AEQgaAAgCgJQgBgZgGgfQiUgGgpgLQgpgLgGgQIAHgCQAbAGBIAIQBBAHANAAQAGAAAPgUQAYgcAQgPQBGhABuAAQAvAABDAWQAhAKAaALQAYAABIgmQBIgmAFAFQAPABAAAJIALAzQAKAuAAAoIgGAwQgHAvgFAQIgdA6QgLAPgDAcQgBAPABgQQgaBXg3AoQg/AuhLAAQgmgIgPgHg");
	this.shape_51.setTransform(32.1,16.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAuEYQgWgQgOgoQgKgdgOhOQgWhugPg7QgdAEgQAAQggAAgLgIQgVgQAKgxQhfgDg+gMQgtgIgMgJQgJgGgFgIQCPAXAgAAQADAAAJgJIAigmQAdgiA6gWQA6gWA9AAQAxAABVAWQAKADAIAHIAHAGQASAAA4ggQA4ggARAAQATAAAEAZQABAHAAAiQAABCgSBXQgWBpgpBTQgIAQgOAtQgJAggbAlQgTAZgjAPQghAOgmAAQguAAgXgQg");
	this.shape_52.setTransform(29.6,21.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgiDIQgVgmgThhQgJgrgehGQgbg/AAgTQAAg6AZgbQAVgXAlAAQBHAAA+BYQBBBcAAB0QAABhgsAxQgfAjglAAQgnAAgYgng");
	this.shape_53.setTransform(24.8,22.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AguCTQgQgTAAgkQAAgQAIgZQAHgZAAgGIgfhFIgDgVIgDgWQAAgVAPgVQATgcAgAAQAXAAApA/QAnA6AAAVQAAAogkBGQglBJgaAAQgSAAgOgQg");
	this.shape_54.setTransform(21.2,15.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAMDoQgTgLgZgfQgIgJgZgDQgZgDgJgKQADgDAYAAIA/gCIgOhQQAFg6AQgDQAAgGgFgQIgGgPIhOAFIg2ADQgOAAgFgFQgLgNADgsIg1ABQhIgBgjgGQgmgJgLgSIADgIQB1ASAkAAQALAAARgSQAdgjAHgGQBAg8B0AAQAbAACNAnQAbAAA/ghQA/ggANAAQANAAAJAtQAHAfAAAkQAAAhgRA4QgPAzgKANQgHAHgRAbQgWAfgJARQhICHiaAAQgcgBgTgJg");
	this.shape_55.setTransform(32.6,17.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAfD2QgOgSgEgCQgJgGgeACQAGgCgHgFQAKgGATgLQADgCAMgUQAPgYAMgcQghicgTAAIiDAIQgOAAgGgMQgHgOACglQguAFgcAAQhWAAgqgNQglgMAAgUQAAgGABAAIACgCQAcARAnAFQAbAEA9AAQAZAAAZgUQAQgLAgggQBGg+BmAAQAKAAAcADQAfADAUAEQANADAcAMQAZAKAEAAQALAABSgpQBRgqACAAQAUAAAMAvQAMAsAABAQAAAygUBBQgQAxgOAWQgOAWgEAJQgEAKAAAKQgDAvg/A7QhGBDhLAAQg/AAgbglg");
	this.shape_56.setTransform(32.1,17.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AA2ESQgIgLgHgHQgOgPgbAAQgOAAgFgHIgDgHQAEgGANgDQAQgFAGgDQAfgRAAhCQAAgXgXhGQgXhHgJAAIhwAIQgjAAgEgOQABgagEgYIhLAFQhGAAgsgKQgtgKgGgQIBMADIBRAEQAeAAACgLQACgLA2gtQA3gtBFgIQBEgIAcADQAgADATAEQANADAbALQAYALAMABQANACBPgqQBPgqAJgEQAJgDAMAvQAOAzAABHQAABDgWA9QgPAngPAVQgOAWgFAhQgEAhgNAaQgMAagcAlQgYAhgvAPQgkAMgqAAQglAAgkgWg");
	this.shape_57.setTransform(32.3,17.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AhICsQgjgXgIghIg4gKQgCgDgBgFQAJgFADAAIAWACQABAAASgWQASgWAAgDIgCgUIg1ADQgVAAgEgEQgEgCAAgMQgCgNgBgsQgRAAgzgJQg9gLgOgMQACgGADgBQACgCAHAAQBVASAHAAQAJAAAUgTQAVgTAKgOQAKgOApgVQApgWAPgEIAsgKQAcgGAsAGQArAHAyAPQAyAQgFAIIB6gqQAIAIADAEQAHALAAARQAABKgxA7Qg7A6gWAjQgZAog4AiQg/Aog4AAQgpAAgjgWg");
	this.shape_58.setTransform(33,18.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AhuC8QgbgaAAgaQgaABgxgHQgwgIgOgEIgIgFIgGgFQATgBAMgDQAMgDAIABQAMg1AAgKIgIgKQgIgMgCgJIgCgiIgFgnQhvgNgJgCQgDgHgBgGQANgCAKAAIByAKIAgghQAhgjARgKQAsgbAigIQAcgHAVgCQAWgCAqAGQAtAHALADIBLAaIACADQADADAGAAICqg7QANAAAJAhQAFAZAAAXQAABOgqA6QgmAwhAAbQgmARgNASQgLAYgNARQgZAegzAVQgzAWgsAAQg7AAgkghg");
	this.shape_59.setTransform(32.9,18);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AhjDiIgtguQgFgFgYgEQgxgIg8gPIAAgRQAFgBALABQANAAAGACIAFgoIAEgjIgKgMQgKgNgBgXIgFg+IgWAAQhRAAgVgWIgCgFQAOgDAKAAQAKAABZAIQAEAAASgUQAagcAVgRQBPhABpAAQAaAAAsAHQAbAFBHAcQAQAABfgrIBfgqQALAAAKAkQAKAgAAAVQAAA6gRAvQgQAsgiAlQgVAZgwAeQg2AigHAGQgVAhgkAgQhJA+hWAAQgvAAgegXg");
	this.shape_60.setTransform(34.9,15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_55}]},1).to({state:[]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.CUP23LHANDLE001 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#91B9BB").s().p("AjcIeQAEgBAygWIBkgsQAugVA0hOQBciFAiiQQAbh0AAi+QAAiHg3hhQg6hihOAGIgMgCIAdgEQAXgEAMAAQANgBAiAMQAiAMAkA8QAkA8ALBGQALBGAABSQAAE2iDDQQh7DIizAAIgIAAg");
	this.shape.setTransform(7,-0.3);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B3E4E6").s().p("AjcIdQAAgZABgYQADgxAGAAQCVgCBdjBQBai2AAj/QAAh5gQgrQgchJg8AAQg6AAg/AOQg+AOgSAVIADhLQBLgzAfgOQA1gXBLAAQAgAAAkAoQAQARAwBDQAOAVALBDQAKBFAABSQAAE2iCDQQh8DIiyAAIgJAAg");
	this.shape_1.setTransform(6.9,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(15,16,18,0.2)").s().p("AgVADIAsgGQgNADgfAEg");
	this.shape_2.setTransform(-12.9,56.1);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AjmGsQCvgRBRjpQA+ivAAj3QAAh1gzgbQg6ggipA1IAAhtQAugoBCgaQBDgZA9AAQBAABA8BtQA5BoAAB9QAAFmiADUQh5DLjUAXg");
	this.shape_3.setTransform(7.9,-0.2);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.2,-57,46.4,113.6);


(lib.CUP23LEYER001 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CFCFCF").s().p("AAJCvQg1gKgkgpQgjgogFg3QgBgTACgQIAAAAQAGglAUgiQAagtArgaQAkgXAugEQAggBAfAJIgEAAQhfAAgtBVQgeA3AAAsQAAAbACAKIANAtQAIAaAcAdIAUAXIgJgCg");
	this.shape.setTransform(-9.9,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CFCFCF").s().p("AgiASQgegqAAg1IABgJIBEAKIgCAQQABAcACAJIANArQAHAaAcAdIALAMQhBgTgigyg");
	this.shape_1.setTransform(-17.5,6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7070FF").s().p("AingDQA1hTB2gOQBWgHA3A+IgFAGIgKAKQgmgagtgFQgygFgzAPQgwAPgnAiQgnAfgQAyIgGAWQAEg7AfgugADCAsIACgBIAHAZQgEgNgFgLgACYgLQAGgEAFgGIAKARIANAXIgFADQgMgTgRgOg");
	this.shape_2.setTransform(-3.8,-13.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AguCvIgJgCQg2gKgkgpQgkgogEg3QgBgTACgQIAAAAQAGglATgiQAagtArgaQAngXAugEQAdgBAfAJIAUAGQAVAHATALIAJAHIACAAIABAAQAVAOANATIgBABIAEAFQAIANAEAQQAKAeAAAeQAAATgDAVIAAACQgJAwggAnQgmAsg3AKQgaAFgYAAQgWAAgXgDg");
	this.shape_3.setTransform(-3.4,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CFCFCF").s().p("AABAGIgSgHIgOgOQAcATAjAMQgRgEgOgGg");
	this.shape_4.setTransform(-15.3,16.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7070FF").s().p("ADABpIgGAAQAJgEAIgIIADAJIgNAAIABAFgACNBpIAHgHIAGAHIgNAAgAiXBiQgYgBgQABIAAgDIAAAAIgUAAIgBACQABgfAxhKQA1hTB2gOQBvgJA6BpQASAfAKAfQgWAagjASQAGgJAGgNIAPgrQgBhCgTBFQgEAQgcAeIgXAYQhygCiKgFgADUBRIABADIgEABIADgEg");
	this.shape_5.setTransform(-4.3,-13.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AATBdIhKgJIgKgDQhCgTgjgyQgegpAAg1IABgKIBGAKIAsAHQApAECugBIA6AAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAABgBIABgCIAAADQAAARgEARQgFAcgOAZQgsBQhoAAIgHAAg");
	this.shape_6.setTransform(-4.3,7.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#80A4A8").s().p("AiMAuQhbgbAAgeIABgHQAFAMAhAPQAXANBEALQAKAJCyACQBNgUANgTQAcgQAZgzQgBgFgEgBQAHgEAAAPQAAAqgkAgQg4A1h8AAQhKAAhSgYg");
	this.shape_7.setTransform(-0.1,11.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7070FF").s().p("AgjCuQh3gbgagMQgLgDgFADIgIg7IgEgoQAAhDAkg3QA1hTB3gPQBugJA6BqQAnBGAABDQAAAIgBAJQgMAQgQAfQgSAbghAlQgGAAgDACQgMACgYACQAlgnAzhWQgBgJgLAAQgQABgrBHQgLAPgtAwQgggDgugIgADRBnIgBADQABAZgFAOIgIAIIgEABIgYANQAUgZAVgng");
	this.shape_8.setTransform(-3.3,-5.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).wait(1));

	// Layer 4
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ah1DhQg0gOgjgnQgRgUgMgZQgMgZgFgcQgIgqAJgoQAEg7AfgvQA1hTB4gPQBUgHA3A+QAXgaAEgOQAThHABBFIgPAqQgHAOgHAKIAKASIANAZQAagSARgWQARgWALgiQADAEACAHIACAJIgWA0QgVAmgZAJIAHAZIAEAOIAQgGQAigPAEgHIAUgaQALgPAJgIIABAAIAAADQAAASgVAgQgbAogqAEQAFAcgCAgQgCA2gjApQgMAPgOAOQgMANgPAKQgWAMgWAKIAAAAIgBAAQgXAJgYADQgQABgQAAQgkAAgjgJg");
	this.shape_9.setTransform(0.8,-2.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#759396").s().p("Ag3AGIgBAAQgbgMABgJIAAgGQAHgBAfANQAhALAcAAQAaAAAPgCQAJgBAKgEQAEABADACQgEADgGAFQgCADgFACQgVALgcAAQgpAAgggQg");
	this.shape_10.setTransform(-3.3,23.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ah4DJQgRgEgOgFIgUgJIgOgOQgbgTgSgcQgggwAAg+IAAgFIADgJIACgJQABgfAyhMQA1hTB4gOQBsgJA7BpQASAhAJAfIAHgIQARgWALghQADADACAIIACAIIgWA0QgGALgHAJIABADIAOgHQAigPAFgHIATgaQALgPAJgHIACAAIAAADQAAASgVAfQgbAogoAEQADANAAAOQAAA1gcA1QgvBZhsAAQhCAAgxgQg");
	this.shape_11.setTransform(0,-2.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#759396").s().p("Ag5AGIgBAAQgbgMgBgJIABgGQAIgBAfANQAjALAeAAQAaAAAPgCQAKgBAKgEQAEABACACQgDADgGAFQgDADgFACQgUALgeAAQgrAAghgQg");
	this.shape_12.setTransform(-3.8,23.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AiIC7QhagbAAggIABgHIgBgDQAAgGADgCIgIg8IgEgnQAAhEAjg3QA2hTB4gOQBsgJA7BpQAnBHAABCQAAAJgBAIQANgTAIABQAFABAAAEQgLAbgMAWIgBAEQAAAYgEAOQAygyAAACIACAAQAHgEAAAQQAAApgkAiQg4A1h8AAQhKAAhSgYg");
	this.shape_13.setTransform(-0.6,-2.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9}]}).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_13}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.7,-26.1,51.2,51.9);


(lib.CUP23LEYEL001 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CFCFCF").s().p("AgECLQAmgyABhXQAAhVg9g1QgRgOgbgNQgNgHgFgEIgEAAQAmABAlAOQATAGATALIAJAHIADAAIABAAQAUAOANATIgBABIAFAFQAHANAFAQQAJAeABAfQAAASgEAVIAAACQgJAwggAnQgjAqgwALQAMgLATgZg");
	this.shape.setTransform(5.9,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CFCFCF").s().p("AgmA5QAmgyAAhUIA3AAQAAAAABAAQAAgBABAAQAAgBABAAQAAAAABAAIABgDIAAAEQAAAtgXAqQggA7hAAPIAVgag");
	this.shape_1.setTransform(9.3,7.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CFCFCF").s().p("AAAAAQABgBAFABIgMABIAGgBg");
	this.shape_2.setTransform(-1.1,17.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7070FF").s().p("AingDQA1hTB2gOQBWgHA3A+IgGAGIgKAKQglgagtgFQgygFgzAPQgwAPgnAiQgoAfgPAyIgHAWQAFg7AfgugADBAsIACgBIAIAaQgEgNgGgMgACYgLQAFgEAGgGIAKARIAMAXIgEADQgMgTgRgOg");
	this.shape_3.setTransform(-3.8,-13.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AghCwIgCAAIgCAAIgFgBIgDAAIgCAAIgCgBIgCAAIgCAAIgCgBQg2gKgkgpQgcgggJgpIgDgWQgBgTACgQIAAAAQAGglATgiQAagtArgaQAngXAugEIAFAAQAmABAlANQAVAHATALIAJAHIACAAIABAAQAVAOANATIgBABIAEAFQAIANAEAQQAKAeAAAeQAAATgDAVIAAACQgJAwggAnQgjAqgzALIgGABIgBAAIgOADIgFAAQgFgCgCAAIgHADIgNABIgDAAQgRAAgQgCg");
	this.shape_4.setTransform(-3.4,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(15,16,18,0.2)").s().p("AAAABIAAgBIAAABIAAAAIAAAAg");
	this.shape_5.setTransform(14.5,-6.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7070FF").s().p("AiXBjQgYgBgQABIgUgGIAAgEQAGggArhAQA1hSB2gPQBvgJA6BpQASAfAKAfQgWAagjASQAGgJAGgNIAPgrQgBhCgTBFQgEAQgcAeIgXAYQhygCiKgFgAC8BBIABAAIgBgCIAAACgAjUBgIABAAIgBACIAAgCgADUBSIABADIgEABIADgEg");
	this.shape_6.setTransform(-4.3,-13.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AimAMQgPgUgHgYQgIgYAAgaIABgKIByARQApAECugBIA6AAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAABgBIABgCIAAADQAAAugXApQghA7hCAQQgWAFgbAAQiJAAg3hRg");
	this.shape_7.setTransform(-4.3,7.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#81A4A8").s().p("AilAMQgwgUgFgWQAIAKAaAOQAYALBEALQAJAJCyACQBOgUANgRQAQgLAQgXQACADgBAFQAAAVgkAXQg1AlhhAAQh9AAhJghg");
	this.shape_8.setTransform(-1,12.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7070FF").s().p("AgjCuQh3gbgagMIAAAAQgIgEgEADIgEABIgIg7IgEgoQAAhDAkg3QA1hTB3gPQBugJA6BqQAnBGAABDQAAAIgBAJQgMAQgQAfQgSAbghAlQgGAAgDACQgMACgYACQAlgnAzhWQgBgJgLAAQgQABgrBHQgLAPgtAwQgggDgugIgADRBnIgBADQABAZgFAOIgIAIIgEABIgYANQAUgZAVgng");
	this.shape_9.setTransform(-3.3,-5.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).wait(1));

	// Layer 4
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ah1DhQg0gOgjgnQgRgUgMgZQgMgZgFgcQgIgqAJgoQAEg7AfgvQA1hTB4gPQBUgHA3A+QAXgaAEgOQAThHABBFIgPAqQgHAOgHAKIAKASIANAZQAagSARgWQARgWALgiQADAEACAHIACAJIgWA0QgVAmgZAJIAIAaIADANIAQgGQAigPAEgHIAUgaQALgPAJgIIABAAIAAADQAAASgVAgQgbAogqAEQAFAcgCAgQgCA2gjApQgMAPgOAOQgMANgPAKQgWAMgWAKIAAAAIgBAAQgXAJgYADQgQABgQAAQgkAAgjgJg");
	this.shape_10.setTransform(0.8,-2.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#759396").s().p("Ag3AGIgBAAQgbgMABgJIAAgGQAHgBAfANQAhALAcAAQAaAAAPgCQAJgBAKgEQAEABADACQgEADgGAFQgCADgFACQgVALgcAAQgpAAgggQg");
	this.shape_11.setTransform(-3.3,23.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AjmB6QgggwAAg+IAAgFIADgJIACgJQABgfAyhMQA1hTB4gOQBsgJA7BpQASAhAJAfIAHgIQARgWALghQADADACAIIACAIIgWA0QgGALgHAJIABADIAOgHQAigPAFgHIATgaQALgPAJgHIACAAIAAADQAAASgVAfQgbAogoAEQADANAAAOQAAA1gcA1QgvBZhsAAQijAAg+hfg");
	this.shape_12.setTransform(0,-2.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#759396").s().p("Ag5AGIgBAAQgbgMgBgJIABgGQAIgBAfANQAjALAeAAQAaAAAPgCQAKgBAKgEQAEABACACQgDADgGAFQgDADgFACQgUALgeAAQgrAAghgQg");
	this.shape_13.setTransform(-3.8,23.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AioCuQgwgWgGgWQgDgFAAgDQAAgGADgCIgIg8IgEgnQAAhEAjg3QA2hTB4gOQBsgJA7BpQAnBHAABCQAAAJgBAIQANgTAIABQAFABAAAEQgLAbgMAWIgBAEQAAAYgEAOQAygyAAACQAGAAABAHQgKATgKAPQACADgBAFQAAAVgkAZQg1AlhhAAQh9AAhJghg");
	this.shape_14.setTransform(-0.7,-3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10}]}).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.7,-26.1,51.2,51.9);


(lib.CUP23LBROWR001 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#48675F").s().p("AgRABQgIgPgIgXQAigUATAcQAOAVAAAkQAAALgGACQgSABgZAFQABgigDgMg");
	this.shape.setTransform(10.7,-2);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#587D74").s().p("AiGAPQgHgYAAAEQAAgOAWgHQAmgNB4gLQAWgHATgDQAjgFAOAVQAMASABAlQAAAMgSADQghAEgeAFIi2AaQgFgLgIgjg");
	this.shape_1.setTransform(0,-0.2);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AiWAiQgLgpAAgQQAAgPAJgEQARgIBTgLQBwgRAdgCIAbAAQAMACAMANQAXAaAAAzQgBAWgGAFQgKAIgyAFQhdALhJAKIg5AIQgKAAgNgvg");
	this.shape_2.setTransform(-0.1,0);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.4,-8.1,32.6,16.4);


(lib.CUP23LBROWL001 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#48675F").s().p("AgdAjIARhTQAfARAGAFQAFADAAAHQgLAqgJAXg");
	this.shape.setTransform(12.1,1.1);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#587D74").s().p("AAWAhQgegDiEgEIgLhNQAEgCAIgCQAXgDBBAAQA4AABDANQBRARAAAXQgLAqgJAWQhBgUgugGg");
	this.shape_1.setTransform(-0.1,0.1);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABVBIQgQgJgbgFQgxgJiVACIgQhtQAHgJAhgFQAjgGAvAAQBxAAA7AVQA0ATgBAdQAAAJgNAmQgPApgJAAQgIAAgrgHg");
	this.shape_2.setTransform(0,0.1);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.4,-7.8,34.8,15.9);


(lib.CUP23LBODY001 = function() {
	this.initialize();

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7D313B").s().p("AhNEiIACgHQAEgCAPgBIAygDIgFAcIgZABQgaAAgPgQgAgQCxIgBgEQAPgKALAAIgDAZIgWgLgAgbAeIAEgGIAPgBQAMAAAaAEIgEAbQgigHgTgRgAAPhyIgFgJIACgGQAGgGALAAQAIAAARAEIgFAgQgagGgIgJgAgfknQAAgLAEADIALgCQAGAAAoAOIAwAPIgEAXQhpgiAAgIg");
	this.shape.setTransform(95.8,-29.3);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#59693F").s().p("ADuBfQgfgXgTgcQgkgyhghQIBIADIAyA8QA3BeANAZgAjFgMQAdglATgKQAegRASgNQAIgGAGAAIAwAEIgNAGQgdARgnAcQhCAugSAjIgRAeQgFAGgUACQALguAmgtg");
	this.shape_1.setTransform(-14.2,40.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#596841").s().p("AGBE6QAWixgBgHQA2gRAPgHQAagLAWgWQgBAggKA5QgKA5gBAnQgEAWgWANQgWAMhDAMgAoREgQgggFgSgYQASADBYAEQBZAFAYgBIAjAAQALABAYgUIABAJIgBAIQgKAXgEABQgHADhAAAQh3AAgjgHgAGYBpIAQhrQAFAdgEAwQgCAjgHAAQgEAAgEgFgAHBjvIBjg1IAggYQgBAdgOBZIgPBiQgBAYgLAJQgDACgUAIQg1AWgiALg");
	this.shape_2.setTransform(33.3,50.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#414B31").s().p("AhMAsQgEgPgMgOQAYgJBHgjQBFgjATgMIACAYQAAAaguAaQheA5gbAUQABgUgDgNg");
	this.shape_3.setTransform(86.9,15.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#97ADAF").s().p("AgJAWIhBgWQAHgFAMguIAYAIIgHgCQA7AVAUAKQAiAPAAARIgCAiQgagIg4gWg");
	this.shape_4.setTransform(98.4,-73.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#82A4A8").s().p("ANSgIQAVisAQiZQjCgxhhgUQifghlNgdQhaC/gOAdQgHAOg5BOQgDgGgYgTQgbgXgjgYQAlgyAqg/IBnicQDpATAwAFQBHAHDOAeQCOASCZAtQCWAsAOAZIhmKQQAAA1gbAUQgbAUhtAtQAcihAplVgAwVkZQDuhfATgFQBXgYCKgiQCvgrAYAAQAGAAAFAJIADAIQidAmh+AiQjwBAimBJg");
	this.shape_5.setTransform(0.4,-35.1);

	// Layer 3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#95BCBF").s().p("AAvBPIguhAQgvhFgZgtQANAGAWAYQASASAIAMQBSBwAAADQAAAFgBAEQgDAFgIAKg");
	this.shape_6.setTransform(-22.2,-81);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6D7F82").s().p("AAAAGQgEg+gHgRIAQAAIgBAEIgBAJQAAAJAJBsIAAAIIgGAHIgEACIgChEg");
	this.shape_7.setTransform(1.6,67.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#758A51").s().p("AizFnQiJgNhvgiQhGgVhDgXQgSgGi1hJQgEAAgIgpIgZh6QAUAMBTAmQBgAsA4ATQBNAbBUANQBHAMARAJQAlASBLAGQAqADBcAAQArAAAJgNQAKgOBKAAQAzAACwgbQBYgNBQgOQCWgiA5gTQBWgcA2grIgOBYQgLBKgBAWQgEAbgBABIgwAOQjsBKh+AWQiIAXjSAAQh/AAhdgIgACOCrIAAhkIAtAAIAABkgAnvB9QgRgHgGgHQgJhIgFgMIATACQAOACAAAGQAAAXAJAbQAKAcAAAbQgDgMgMgFgAGoCJIACgBIABAAIAAgEQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAAAIACgCIgEAAQgDgigEhCQAYgDANgDIAfgIIAAAIIgLBqQgmAFgKAAIgFAAgAK5gMQADgtAgAEQgEAXAFAuQgDApgoAPQACgIAFhMgAqgBCQgZACgMgmIgShSIAHAFQAuANACAUIAAAdQABAZAIAbgAAIA9QAAgkgKAAQguAAh7gHIgDh3QAAgRAHg7IAHg9QBFAEAEgBIAdgDQAZgCAcA5QAGARAjAxQAgAtAPAkQEPhRBUgfQEVhkCqh2IgNBiQgNBcgDANQgDAMAAAQQgBAMgQAJQgZANgRAGQgNAFgeAKQjRBCjLAnQi7AmhcAAQgYAAgcgCgAiPhDQgKAKAAAOQAAAOAKAJQAKAKAOAAQAOAAAJgKQAKgJAAgOQAAgOgKgKQgJgKgOAAQgOAAgKAKgAiPjEQgKAKAAAOQAAAOAKAJQAJAKAOAAQAOAAAKgKQAKgJAAgOQAAgOgKgKQgKgKgOAAQgOAAgJAKgAkyAvQgOAAhDgNQhOgQg6gRQg1gCh4g4Qh4g5gUgfQgUgdgciwQBcBoCrBfQCeBZAvgKQAKguAmgvQAdglAUgKQAegRASgNQAHgGAGAAQAIAABIAIQgCALgGA9QgHBGAAAgIACArIADAqIhqABQACAGgIAVIABAAIgHAAg");
	this.shape_8.setTransform(2.8,55.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(31,33,38,0.322)").s().p("AgBAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAIgCAAIAAABQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAg");
	this.shape_9.setTransform(79.1,23.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1D1F25").s().p("AgIg2IAegGQATgDAJgPIgSB6IhRAjQADh1AmgQg");
	this.shape_10.setTransform(82.3,52.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B3E4E6").s().p("An3H7QkphKhbhhQgGgHgJgyIgKg6QgHglgWhhIgxjZIgzjhQDuhfATgEQBXgYCKgjQCvgqAYAAQAGAAAmAyQAcAmAbAoIAaAqQANAVAIAJQAoAyAbAfQA0A6AcAAQAGAAABgFIAAgFQgDgGgYgTQgbgXgjgYQAlgyAqg+IBnidQDpATAwAFQBHAHDOAeQCOATCZAsQCWAsAOAZIhmKQQAFA2g7AkQgqAaidA6QkqBwoXAAQh5gBjwg8g");
	this.shape_11.setTransform(0.4,-27.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D2F0F0").s().p("AkAAjQhgh7gEAAQgXgBggAIQhOAShmAXQkFA3jABiIgOg1QAAgXEUhQQB0ggB+gYIDKgmIC2DlQDAj7ACAAQDtAAGGBRQGKBQAAA1IgDAhIiRg0QhDgWhPgPQiVgdpLhKQhTBlg6BiQgmBBgKAAgAh1AAIgFAHIgIAGg");
	this.shape_12.setTransform(0,-76.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1D1F26").s().p("ABaA2QBagEAYgEIgEBhIhoADQgBgigFg6gAlYBxQgmgFgCgBQgEgCgBgWQgDgfgPgrQAsANAcAGQAxAKBAAFQAAAMgDAcQgBAMAGAAQAGAAgBAOIgBARIgDAMQhIgSg1gHgAETAlQA4gGCdgeQgCBUACAaIhfAMQhIAJgmAAQgEhFgEgagAhxB4QgtgIgIAAQAAgagGguIABAAICiARQAJABADAEQACACADAIIhugJQgTAAgFADQgFAEAAANQAAANAjAIQAlAJBAACQgBAHgEADQgCACgJAAQg5AAgtgHgAJJACQgBgVAEgDQAGgDAmgGQA1gLBJgdQgEAkgBAoQgCAbgLAJQgKAKgmAKIhyAfQAJgzgCgngAoYA9QgigMgDgbQABgogHgjIBSAjQANAFANADIANBYIACAIIhQgZgAqwgSQgbgFgHgGQgGgFgOgpQgPguAAgYQBKAZAOAoQAEALACAbQACAaAGAQQgIgNgZgFg");
	this.shape_13.setTransform(-4.8,58.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#95AEB0").s().p("Ah1BDQAAgRgFgkIgFglIAChAQAAAEAjACQAdADC3AJIgCAAIAICZQguADgiAAQgjAAiCgUgAhog0QAABUAEAJQAFAEAHABQAZAHAyAGQAyAFAjAAQAmAAAAg4QAAghgNgNQgMgMgSADQheABhFgIgAgTAGQgFgBgCgFQgDgEgEgEIAiAHQAXACAgAAIAegBIgBATQhfgKgJgDg");
	this.shape_14.setTransform(-12.7,67.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#526139").s().p("AiRDdQgFgFAAgGQAAgHAFgFQAFgEAGAAQAHAAAEAEQAFAFAAAHQAAAGgFAFQgEAFgHAAQgGAAgFgFgABWCpIgSgeQgkg/hGhDIB1gEQEWgIDvhMQCyg5CQhZIinCaQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAABAAQAAAAAAABQAAAAAAAAQAAAAgBABIAAABIACgCIACgCQCohtgeAXQgUAPhTAzIg0AjQgkAYg0AaQhzA4jUBEQi7A9gdAAQgKAAgHgKgAnBCZQiCgrh6hKQi7hugdh1QBYA+CeA1QCoA4CzAUQhPBFgaAkQgRAYgBAZgAiRBcQgFgFAAgGQAAgHAFgFQAEgEAHAAQAGAAAFAEQAFAFAAAHQAAAGgFAFQgFAFgGAAQgHAAgEgFg");
	this.shape_15.setTransform(4.2,30.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("Aj+A2QgygGgZgGQgHgCgEgEQgFgJAAhTIAIgDQBFAJBggCQATgDALAMQANAOAAAgQAAA5gmAAQgiAAg1gGgAlIAYQAIAAAtAHQAtAHA5AAQAJAAAEgCQAEgCABgIQhCgBglgJQgigIAAgLQAAgOAEgDQAFgEATAAIBxAJQgEgIgCgCQgCgDgMgCIiigRIgBAAQAGAuAAAZgAkKgCQABACAGACQAIACBhALIABgRIgeAAQggAAgXgEIgkgHQAFAEADAHgAFWALIAEAAIgBACIgBAAQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAgBAAAAg");
	this.shape_16.setTransform(11.3,67.7);

	// Layer 1
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AksOPQiaglhogjQhogihkg3QgzjxgOg8Ig6j+QgWhph4oOQg8kIAAgLQAAgtFnhbQFahYB2AAQACAABNBoIAdAkIAfAmIANgQIgFAKICUi3QEnAQDsAnQCxAdCAAoQDdBDAAAYQAAATg6FdQg7FcAAApQAAADAMACQAKALABAtQAAAXgQAXQgUAdgJAkIgUB/QgFAmgTBbQgLA4gdD4QgFAogeAQQgQAIh0AjQixA2hrARQh3ATiuAAIgBAAQkJAAibgkg");
	this.shape_17.setTransform(-0.4,0.4);

	this.addChild(this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-109.3,-94.3,217.7,189.6);


(lib.CUP_FRONT_leg_r = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373D48").s().p("AgKBIQgJgOgDglIgOhhIA7gEQgCARAGAgIAIAzQAIA9gjAAQgMAAgGgJg");
	this.shape.setTransform(11.1,9.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1F26").s().p("AgiAKIAAgUIBFAAIAAAUg");
	this.shape_1.setTransform(10.2,-2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#758A51").s().p("AghBXQgKhmgEgXIgKgvIAAgBIB0AAIgGAuIgCAjIABBcg");
	this.shape_2.setTransform(9.1,-14.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1F26").s().p("AgJAIQgNgFgGgDIgKgKQATAIARAAQAFAAAIgDQAJgDAFgDIAOALQgSAMgNAAQgFAAgMgEg");
	this.shape_3.setTransform(-32.3,4.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#373D48").s().p("AgaAZIgtgtQAVABAQgKQARgKAHAAQAIAAAoAdQAqAagKAUQgPAEgQAAQgfAAgigPg");
	this.shape_4.setTransform(-25.3,9.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#758A51").s().p("AipAaQAAgYBcgWQCJggBfgcIAQAKIiMBGQhgAxgRAFQgDgKgLgLQgKAIACAMQABANARAMQgIADgJAAQhCAAAAg3g");
	this.shape_5.setTransform(-22.3,-5.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#758A51").s().p("AhgBeIgUAAQAAgBgGgEQAIgPAvgwQA4g5AtglQAfgYAcgBQAbgBADAXQgSAGgLAMIgRAcQgfAwhNAvQgJAIgLAGQgUAKgSAAIgHAAg");
	this.shape_6.setTransform(4.1,-23.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#373D48").s().p("AAKCAIhGgTQAFgpADgOQADgXAJgXQAjAJA/ASQAqAMALAAIADAAQgLA9gOAXQgHAKgHAAQgOAAgzgNgAhfB6IgNhAQgFgcAAgqQAAhTASgYQAGgGAogPQAAAagbAiQgbAkAAAsIABAZQAOgRANgrQAMgpAGgEIgEANQgJAcgMBIQgNBIABAXg");
	this.shape_7.setTransform(23.8,-10.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D1F26").s().p("Ag5CyQgRgVAAgXQAAgKACgMIA4ASQA2AQAegDQgHAagZARQgWAQgWAAQgeAAgTgYgAApABQg2gNAAgZQAAgdAZg0QAcg1ARAAQAQAAAUAdQAaAnAAA/QAAAVgGAlQgrgIgdgJgAglhkQAhhYBEgNIgGAGQgHALgMAGQgPAJgJAIQgcAfgqBlQAIgaAKgtgAh2iIQACgHARgVQASgWAJgGIAKgEQAFAIAAAKIgWAPQgYAQgFAFIgEAEIgFACIgBAAg");
	this.shape_8.setTransform(24.2,-9.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373D48").s().p("ABfB/QgrgLkIhVQAkgmAFgEQARgLAsABQAdAAA6AYQAXALBLAnIgCgDIgOgQIgSgRQAcghBQhuQADAFAbAPQAbAPAHAAQgkA3gcArQg2BbAAAdg");
	this.shape_9.setTransform(-34.7,17.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1D1F26").s().p("AAECSQhJgVivg8QADgLAFgDQAHgCADgIQA1AfCXAvQCOAsAFAEIAAAFQg+gJg7gRgACliKIAXggQAhAcAKAGIAOAHQgCAMgJAFQgGAFgIAAQgZAAgegfg");
	this.shape_10.setTransform(-35.3,16.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#758A51").s().p("AhdBIIBZh6QAWgjAMgXIBAAsIglAyIgtBGQghA1gMAAQgtgPgPgWg");
	this.shape_11.setTransform(-6,-9.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#373D48").s().p("AjEB8IgIgBQgGgaAmggQAogjAzAAQAdAAAsAGIAnAFIAAAAQgNgPgGgFQAUgIBeiIQATATAUAKQAZAMAQgIQhpCdAAABQAAARAHAJQAIAKAAAFQhVAEjGALg");
	this.shape_12.setTransform(-47.2,14.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1D1F26").s().p("AjqClIABgJQAMgQBkABQBDACBOgIQBUgHAYAAQAIAAADAFQADAJADAEIgGABIgwgBQgngBgnADQh0AHhBAJIg0AFQgJABgJgFgACahzQgOgKAAgRQAAgBAGgJQAGgIAHgJQAGAFAeANQAhAOAHAAQgHATgLAGQgJAGgUgBQgWABgMgJg");
	this.shape_13.setTransform(-47,13.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#758A51").s().p("AhcBDIB9iqIA8AaQhWCJgOASQgYAagUAAQgYAAgRglg");
	this.shape_14.setTransform(-19.6,-12.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},4).to({state:[]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},5).to({state:[]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},2).to({state:[]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},5).wait(1));

	// leg
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgDDEQgRgTgGgvIgMhLQggjLgGgzQAAgIAQgCIAAgBIB0AAIALAAIAGDCIAEC5QAAAXgMALQgLAIgXABQgWAAgMgQg");
	this.shape_15.setTransform(9.4,-2.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAqB7QgqALg2gWIACACIgDAGQgEADgGAAQgUAAgzg3Qg8hBAAguQAAgwCFgcIDbgvIAfAgIAKALIhTAtQh/BFglAMQAmATAeAZQA/AxAAA0QABAKgFAFIgHAEQgEgEgYgog");
	this.shape_16.setTransform(-22.6,1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAAABQAAgBgBAAQAAAAAAAAQAAAAAAAAQgBAAAAgBIAEADQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAAAg");
	this.shape_17.setTransform(-10.1,-12.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgLCDQgdhcAAhKIACg2QgtAyg+AYQglAPgWAAQgHAAgLgEQgKgDgCgEIgGgEQgKgPA/hFQA2g8AughQBQg5ALAAQAVAAAYAcQAZAdAAAeIgBASIAIgGIAZgbQAWgSAeAAQAtAAAWA6QASAxAABSQAAAygkBWQgxB4hLAAQg6AAgkh3g");
	this.shape_18.setTransform(13.7,-11.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AhjD2QgpgOiFgkQg9gRAAgSQAAgZA7goQA8gpAoAAQAtAAApAVIApAVQAKAABAhTQBahwB5i7QA5ApApAaIjUE7QhGBpAAAWQAAADAMAOQALAPAAAGQAAAKgCAMQgIACgGAAQgoAAh3gog");
	this.shape_19.setTransform(-28.3,7.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("Ak+EaQgEgFAAgGQAAgkAjg0QAzhOBaAAIAcAEIAcADQAIABB5inQCRjGAbgiIBwAvQh6DFiODZQAAAOAWAZQAVAZAAAGQAAAMgZADQgXADiBACQhlADhFAKIg9AJQgHAAgFgFg");
	this.shape_20.setTransform(-40.1,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15}]}).to({state:[]},1).to({state:[{t:this.shape_16}]},4).to({state:[]},1).to({state:[{t:this.shape_18},{t:this.shape_17}]},5).to({state:[]},1).to({state:[{t:this.shape_19}]},2).to({state:[]},1).to({state:[{t:this.shape_20}]},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,-23.3,15.6,42.4);


(lib.CUP_34_pupil_02 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgQAXQgHgKAAgNQAAgLAHgKQAHgKAJAAQAKAAAIAKQAGAKAAALQAAANgGAKQgIAIgKABQgJgBgHgIg");
	this.shape.setTransform(0.1,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.4,-3.1,5,6.4);


(lib.CUP_34_pupil_01 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOAVQgHgJABgMQgBgLAHgJQAGgKAIABQAJgBAGAKQAHAJgBALQABAMgHAJQgGAJgJAAQgIAAgGgJg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.1,-3,4.4,6.2);


(lib.CUP_34_handle = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#92B9BB").s().p("Aj5I2IgPgJQAJAEBKgMQBPgMA2gVQA1gUA/hTQA7hNAtiFQBDjEAAjpQAAijhIhZQg+hNhbAAQgOAAgrANIAAgEQBrgwBAAmQApAYA2BUQAqBBAADTQAAFeihDxQg5BWhpAoQhMAchVAAQgPAAgPgHg");
	this.shape.setTransform(2.8,0.2);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B3E4E6").s().p("AkEIuIgIhmIACAAIBBAQQCyAABai8QBYizAAlDQAAhogSgsQgfhIhcAAQgpAAg1AZIgJAEIgIhoQAYgQAigOQBUgjAWALQBiAAA5B3QAvBjAAB+QAAGEiHDUQh7DCjIAAQgqAAgdgNg");
	this.shape_1.setTransform(2.4,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(15,16,18,0.2)").s().p("AgDAAIAKAAIgNAAg");
	this.shape_2.setTransform(5.2,-59.4);

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AkOJJIgLiWIAbAEQAcAFAFAAQClAABRibQBeiwAAmBQAAg8gXgiQgdgshAAAQgoAAg+ATIgLiQQBMg9BDAAQBZAABHBPQBZBkAAC3QAAG6icDYQh8CtjBAAQgsAAgjgMg");
	this.shape_3.setTransform(3.5,0.1);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.6,-59.6,56.5,119.6);


(lib.CUP_34_eye_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CFCFCF").s().p("AAACMQAog7AAhOQAAhYhFgyQgfgVgmgRIAFAAQBIAAAsAaIARALQAJAHAIAJQAJAJAHALIACADIABABIAHANIAKAkIAEAQQACAMAAANQAAAVgEAVQgJAyggAlQggAlgvAOQAMgLANgXg");
	this.shape.setTransform(5.3,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CFCFCF").s().p("AgQAPQAQgpAAgqQAxgCAKgLQgBATgDASQgKA2giAjIgJAIQgYAVgkAIQAZgXARgsg");
	this.shape_1.setTransform(9.4,7.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(1));

	// Layer 7
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7070FF").s().p("AiPgXQA+hPBtAAQAzAAArAZQAUANAQAQIgSATQgughg/AAQhhAAhBA8QgyArgMA+QAFhGAtg4gACqgDIgJgJQAIgGAHgFQAKAQAGASIACAGIgEADQgJgNgLgKg");
	this.shape_2.setTransform(-4.8,-13.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiICEQgmgigJgxQgCgOAAgPIAAgCQAAg5Apg9IAHgKIACgCIAKgNIADgDIADgDIACgBIAHgHIAEgEIABgBIADgCIACgCIADgBIAJgGIAAgBIAEgCQAhgSAogBIABAAIAFAAQBFAAAuAaIARALQAJAHAIAJQAJAJAHALIACADIABABIAHANQALAXAEAdQABAMAAANQAAAVgEAVQgJAygfAlQggAlgyAOQgOAEgQACQgDgCgEAAQgEAAgIAEIgBAAIgLAAQhUAAgzgug");
	this.shape_3.setTransform(-3.4,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#759396").s().p("Ag1AGQgUgIgKgOIABgFIAlAMQAlAJAKABQAQABAcgDIAfgFQAKAAgEAEQgLAIgSAIQgUAIgQAAQgoAAgfgQg");
	this.shape_4.setTransform(-3.3,23.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(15,16,18,0.2)").s().p("AAAABIAAgBIAAAAIAAABg");
	this.shape_5.setTransform(14.5,-6.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7070FF").s().p("Ai9CKIgCgLIADALgAi+A/IgUAAQACgLAJgXQAOgkAYghQBHhhByAAQA0AAAqAZQA0AeATA8IAPAwQgQAOgmAaQAFgIALgcQALgeAAgFIgCgQQgBgIgCgCIgPAkQgNAggrAlIhlABIgHAAQhwAAhHgMgAC9AhIACAAIAAgDIgCAAgAC0BLIAIgEIAQgKQAFAAgDAGQAAAAAAABQAAABgBAAQAAABAAAAQABABAAAAQgLABABADIgQAAgADTA1IAAABIgBAAg");
	this.shape_6.setTransform(-4.4,-10.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#759396").s().p("Ag8AGQgOgGgMgPIABgGQAJAAAeAMQAfALAoAAQAFAAAWgCQAXgFAFAAQAKAAgEADQgLAIgTAIQgUAIgRAAQgyAAgdgQg");
	this.shape_7.setTransform(-3.8,23.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiZAdIgBgBIgCgBIgBgCIgbgrIgGgRIgDgLIgDgkIACgKQBwARBlAHQBLAGAsgBQAxgCAKgMQgBAUgDARQgKA3giAiIgKAIQgZAWgkAIQgYAGgcAAQh5AAg6hAg");
	this.shape_8.setTransform(-4.3,7.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(15,16,18,0.2)").s().p("AAAAAIgBAAIABAAIACABIgCgBg");
	this.shape_9.setTransform(-22.1,8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#92B9BB").s().p("AioANQgjgOgNgRQAaAYBhAMQBKAKBRAAQBDAAArgdQAXgQAUgcIAAABIACAEQgfBWicAAQh9AAhJghg");
	this.shape_10.setTransform(-0.7,12.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#7070FF").s().p("AhSCjQhLgSgZgKIgCgCIgDABIgHABIgCACQgLgcAAhJQAAhNAzhAQA+hPBsAAQBOAAA3A+QA8BHABB3IAAABQgQATgYAiQgoA6ghADIgLABQAJgHAagjQAdgqAYgpQgDgJgKAAQgDAAgzBEQgxBDgMAAQgjAAhbgWgADMB1QgFAcgLAOQgJAFgKADQASgUARgeg");
	this.shape_11.setTransform(-3.5,-5.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).wait(1));

	// Layer 6
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ai6C+QhEg1AAhnQAAgWAEgSQAFhGAtg6QA+hPBvAAQAxAAArAZQAVAMAPARQAQgTAHgRIAPgmQAVA/gpAkQAKAQAGAUIACAGQAkgZAIgLQADgEAag2QAHALAAAJQgKAfgQAbQgVAlgWAHQAJASAFAUQAWgHAZgXQAagXAJgRQAJgJACAAQgKAugWAXQgWAWgkAFQAEASAAAWQAABUhAA8Qg/A7hTAAQhYAAg5gsg");
	this.shape_12.setTransform(0.8,-2.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AjBCkQhFg3AAhkQAAgGACgDIAEgNIAAAAQADgMAIgWQAPgnAYggQBHhiB0AAQAxAAArAZQA0AfASA7IAPAyIAKgJQADgFAZg1QAHAKAAAKQgGAWgYAqIgIAKIAAABQAngLATgWQALgMASgYQAJgJACAAQgLAvgZAZQgVAUgdAEQgGB0gwA3QgsAzhUAAQh4AAhEg1gAjkBNIgGgRIAAAAIAGARg");
	this.shape_13.setTransform(0,-2.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AioCuQgjgQgNgQQgJgJAAgMQAAgEABgCQgKgcAAhJQAAhNAyhAQA+hPBvAAQBLAAA3A/QA9BGAAB3IAAABQAOgQAHgEIAFADQgOAmgQAbQgFAcgKAOQAQgHAQgOQAZgUAKgVQAGACABAFQgJASgLAPIAAAAIACAEQgfBYicAAQh9AAhJghg");
	this.shape_14.setTransform(-0.7,-3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12}]}).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.6,-26.1,51.1,51.9);


(lib.CUP_34_eye_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CFCFCF").s().p("AAjBOQAHgaAAgwQAAgUgKgjQgMgngOgMQgagYgTACQgPACgQgNQAQgEATADQAqAGAeApQAiAtAABDIAAAAQAABehAAVQAUghAIgbg");
	this.shape.setTransform(6.7,3.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CFCFCF").s().p("AgRgLIgCgoIAFgBIAfgIIAEgBQACAGAAAMQAAAOgCANQgGAogZAcIgMAKQAFgQAAg5g");
	this.shape_1.setTransform(14,6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[]},1).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#759396").s().p("AgmAUQAAgEgGgDIgGgHQADgCAKABIARACQARAAAZgMQAOgHAOgJIABAGIgXAXQgTAOgZAAQgKAAgMgCg");
	this.shape_2.setTransform(5.4,21.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7070FF").s().p("AB8BrQAAhKgggvQglg6hFAAQgmAAgaAYIgNgNIADgDQAjguA1ACQA0ACAmAuQApAxgBBLQAAAcgDAMIgDAFIAAgCgAiCBSIABgdIABAAIACAAQgCANAAANIAAAWQgCgHAAgMgAh/AmQACgSAEgQIAGADIABAAQgHAPgDARIgDgBgAh0gLQAGgTAJgQIANAJQgIAJgHAMIgFAKIgIgFg");
	this.shape_3.setTransform(3.3,-5.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhUBaQgRgfgFgqQgBgPAAgOQAAhDAigjQASgSAVgGQARgEARADQAsAGAeApQAiAtAABDIAAAAQAABehBAVQgSAGgXAAQg5AAgdgzg");
	this.shape_4.setTransform(3,3.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#759396").s().p("AgyAEIgDgEQACAAANABIAUADQANAAAagIIAggNIABADQgPAYghAGQgGACgIAAQgXAAgTgOg");
	this.shape_5.setTransform(4.4,21);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgIBNIgCAAIgCAAIgDAAIgBAAIgCAAQgpAAgdggQgZgbgIgrIgCgbIAAgBIAAABQB9gDATgBIACAAIAzgIIAGgBIAEgBIAigIIAEgBQACAGAAAMQAAAOgCANQgGAngbAcIgMAKIgCACIgFAEQgEgCgCACQgCABgCAFIgLAFIgUAHQgRAEgTACIgBAAg");
	this.shape_6.setTransform(4,8.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7070FF").s().p("AhcAqIgRglIgCgCQgCAEAAANQAAAGAGAUQAFASAEAJIAEAHQgPgFgVgbIgCgCQAJgzAagjQAigsAzAAQA/AAAvBIQAjA1AAAeIgBgCIgJAAIgsAEIhRAHIg+AFQgTgWgJgVg");
	this.shape_7.setTransform(4,-7.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhmAjQgegcgDgYQACgEADgBQACABAHAJIAWAZIAFAGIARAKQgFgEgMgZIgKgWIgPgkIAEgDQAEABAHALQAHAMALAXQAVAqAaAMIAMABIgVghQgTgfgQgfQADgFAEgDQAJAIAfAxQAdAuADAAQATgBA2gUIA/gXIACAAIABABIABAEQgBAehKASQg4ANg0AAQgZAAgegcg");
	this.shape_8.setTransform(0.5,9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_8}]},1).wait(1));

	// Layer 2
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AA2C/IgPAAQg9AAgkgqQgigogFhKQgCgGAAgNIABgbQgagEgRgWQgKgNgKgbIAAgCIAcAfQAPARAWAFQACgSAEgQQgbgQgag3QAAgIAEgIQAFAXAYAaQANAOAMAHQAGgTAJgQQgSgPgIgVQgGgOABgVQgBgKACADIACACQAMAYAGAMQAIANAMANIADgEQAjguA1ACQA0ACAmAuQApAxgBBNQAAAagDAMIgDAFQgBB3hKAYQgKAGgKAAQgFAAgBgBg");
	this.shape_9.setTransform(0.2,1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhFCIQgkgsgEhcQgOgBgSgQQgZgXAAggQAAgKABAJIAgAmQARATAMACIAAgCIgEgGIgVgzIABgHIADgIQAEAWAUAaQAJg1AagiQAigsAwAAQBCAAAuBIQAjA2AAAeQAEAPAAAPQAABbg8AnQgpAcg/gBQgrABgdglgABPCKIALgFIAAAAIgLAFgABkB/IAAAAIAFgEIgFAEg");
	this.shape_10.setTransform(1,0.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#7070FF").s().p("AhnCEQgegdgDgaQACgDADgCQACACAHAIIAWAbQgEgMgBgYIgPgkIAEgEQAEABAHALQAChkAjg3QAigzAwADQAxADAkAvQAlAzABBGQAAA4gDAXIABAGQgBAehKASQg4ANg0AAQgZAAgegbg");
	this.shape_11.setTransform(0.6,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9}]}).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.9,-18.1,32.4,42.2);


(lib.CUP_34_brow_02 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#455E5A").s().p("AgfAqIAIhdQA6ABgDAlQgBASgPAvg");
	this.shape.setTransform(14.1,0.1);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#587D74").s().p("AikAPQgFgTgEgdQAFgEA5gIQA+gKAkAAQCyAAAIAbQADAIgMAYQgMAdADAUQhjgNgSAAQgUAAigAQQgNAAgJgpg");
	this.shape_1.setTransform(0.2,0);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ai+gtQAAgUBFgHQAvgFBTgBQBRAAAgAFQBFAIAAAcQAAA/gMAeQgIAUgJAAQgSAAgwgIQgygHgHAAQgNAAgZACQguAHhsAJQglg/AAg9g");
	this.shape_2.setTransform(0,0.1);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.1,-7.7,38.4,15.8);


(lib.CUP_34_brow_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#455E5A").s().p("AgBAvQgMgDgJgFQAGgrAAgPQAAgLgJgRQAzgIAAApQAAAmgFAMQgFANgGAAQgFAAgGgCg");
	this.shape.setTransform(11.6,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#455E5A").s().p("AgJAyIgQgHIAJg9QAAgGgJgbIAAgEIAhAVQASARAAAsQAAAdgOAAQgGAAgPgGg");
	this.shape_1.setTransform(11.6,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#587D74").s().p("AAZAuQhlgMg+gDIgDg+QgBgKAFgHQAEgIAEAAQBIAABZAIQBRAJAKAEQAKAEAGAXQADAQAAANQAAAUgGAJQgGAHgGAAIhjgLg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#587D74").s().p("ABWAuIg8gUQgIgDgVgCIgdgCQgaAAhOAPQgGgrAAgKQAAgdAegHQASgEBcAAQBTAAAcAPQAiASAAA5QAAAdgOAAQgFAAgmgOg");
	this.shape_3.setTransform(-0.1,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).wait(1));

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ABBBCQgzgLhRgFQhUgFgGgIQgGgHACgVIAFg7QACgUALgFQAMgEBqAFQBnAFAsAMQArAMgCAmQgDAjgGAZQgGAZgVAAQgMAAgygMg");
	this.shape_4.setTransform(-0.1,0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ABFBDQhGgUgoAAQgoAAgbAGQgaAGgIAAQgIAAgFgPQgFgMAAgZQAAg3AegVQAVgQAyAAQBDAAAwAFQAwAGAYASQAXASAFAbQAFAZAAARQAAAHgFARQgHATgJAMIhHgTg");
	this.shape_5.setTransform(0,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.4,-7.5,32.6,15.7);


(lib.CUP_34_body = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7C323C").s().p("AhlEsQgGgDgHgHIADgIQAIgBA8gBQA0gCAUgHQAGAXgjAIQgSAEgmAAQgfAAgOgGgAgcCtQADgEALgDQALgCAGgBQARAAAdAEIgFAbQg3gIgRgNgAAEAwQgigIgMgKQACgCAGgFIAVAAQASAABCAHQADABgGAdQgegCgigKgAAYhuQgMgHAAgGQAAgJADADQAJgGAPAAQAUAAAfAHIgDAeIgDAAQgoAAgUgMgAAUkLQg2gNgNgPQAFgKARAAQAPAAB9AeIgGAYQg6gKgfgGg");
	this.shape.setTransform(91.2,-29.4);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1F25").s().p("AgvAAQAEgdAOgLQADgDAegMQAYgJAfgSIgVB8IhgAoQAGgpAFgpg");
	this.shape_1.setTransform(79.6,54.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#596743").s().p("AHuE8IACgCIgBgRIAVisQAygVAwgXIgdDGQgHAIgaAOQgfAQgVAAQgGAAAAgBgAkLgOQghgjgPgXIgRgYQgMgIgigoIgsgTQgUgJALgaQBLAZBDBKQA2A9ADAcQgEADAAABQgHABAEALQABABAAABQAAAAAAABQAAAAAAAAQgBABAAAAQgEAAgYgYgAIoirQgBgSABgQQACgeAQgLQBVgzAbgTQgSBvgZCKQgWAPhRAbIAQiSgAqRg9QgDgDgCAAIgRgDQgKgBBOhIQBNhHAZgBIA8AHIgIAPQgDgFAAgEQgEAHgqAbQgnAagLAFQgrAWgVAeQgPAYgMAAQgGAAgEgDg");
	this.shape_2.setTransform(21.9,51.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#414B32").s().p("AhVAJQBYgdBSg4QADAmgTASQgTATh2BNQAEgwgVgTg");
	this.shape_3.setTransform(86.2,15.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#98ADAF").s().p("AAJAaIhWgeQAIgHAEgJQAFgLAFgYQCFA2AAAJQAAAXgEALIgIAOQgPgNgqgRg");
	this.shape_4.setTransform(97.9,-72.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#83A4A8").s().p("AL/H3QASgmAjk0IA6nkQjDg4jcgoQkKgxirABQgfBcgkBNQhDCZglAPQAJgGAEgHQgXgGiVhBQAZgeBwimQAkgzAdgiQAJACAegDQBEgHCjANQCiAOCbAaQB/AWCZApICUAtQAqAOBRAgIACgNIgBAHQAAAMgWB1QgbCWgjDwQgRB4gTA8QgLAjgIAGQgTAQg1AaQgiARgZAKgAwNkTQEXhuBMgfQBvgtAUAAQADAAASARQi9BKiBA4QhfAphWAfg");
	this.shape_5.setTransform(0.7,-34.9);

	// Layer 3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AAAAAIABAAIgBABg");
	this.shape_6.setTransform(-11.2,63.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#95AEB0").s().p("ABBBZQhBgFgvgIQg2gJgGgJQgOgYgBgrQgChBgBgIQgDgJAkAFQAsAHANABIBcAIQAuAFAPAAQAAArAJBvgAhiAqQAOAABEAMQBCAMAWAAQARAAAFgIQAFgHAAgSQAFg6gHgGQgTgQg6gHQgggEhbgHIAFBrgABjgrIACgCIgDAAgAgngHIAEgDQAQAEArAGIAvAEQAHgBACAKIACAJQhtgOgMgPg");
	this.shape_7.setTransform(-21.1,67.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D1F26").s().p("ACcAyQABgFAYgBQBWgFBbgHIABBoQicAHgbAEQABACgOABQAAgggHhEgAhDCVIAAhgICbAAIAABggAjDCLIgwgJQg4gLgvABQAAgYgHgyIAAAAQBUALAtAIQAbAFAJADQAHADAGAKQgJACgwgIQg2gJgLAAQgKAAgEAEIgBALQABAUAqAMQAiALAoAAIASgBIAAALgAnHBwQgbgKgIgHQgKhSgEgNQArANAgAEIAaABIAJBqQghgEgcgIgAG3BwIADgsQACglACgOQAEgSAvgKQBbgWAegLQgKBKAAASQAAAEADAJQACAIAAABQgPAEihApgAqIAgQgNgIgCgPQAAgQgBgKIgKg4QBnAlAJAPQAJAOgDA+QAAAKACAKQg1gTgpgYgAKtgdQAEgaAIgJQAQgQAkgQIA7gaIgVB7IhyAwIAMhOgArxgWQgTgGgQgpQgKgcgJgzIANAJQAmAcAEAGQADAGgEAVIALA8g");
	this.shape_8.setTransform(4.8,58.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#526139").s().p("Aj/DZIAAgMQAAgDAKAAQAOAAAJAWQgJAGgJABQgMAAgDgOgAgpDDQgJg1g8g3QgdgbhSg6QHCgFDUgqQDUgrDwiOQAFAggYAVIh9BfQheBGknBpQkZBnhmAAIgSgBgAoOBtQgJgGhIglQhHgkhHg2QiLhsgFhOQC0BcBsArQBtArB1AQQgiARg/A9QgVAVgKAQQgHAMgHAAQgCAAgDgCgAkABWIABgNQAAgCAKAAQANAAAJAWQgIAHgJgBQgNAAgDgNg");
	this.shape_9.setTransform(5.4,31.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#758A51").s().p("AjYFbQh4gVjZhAQihgugThRQgMg1gLgkIgKgeIgBgDQBNAqAoAUQBFAiBNAVQBuAfAHAFQACACAAAHQAAAIAJAKIgDABQgBABAAAGQAAAYBAAUQBOAYCEAAQAnAAAMgGQAKgFAAgQQAAgIgDgSQgDgTgDgKQAgACA3ACIA8ACQC9AADMg2QCZgoCYhDIgdDGQhhA1jAAnQjWAsjWAAQiRAAh0gTgABsBMIArgFIAABlIgpACgAF8AmIA1gHIgDBkIgwASgAoLBkIgHgpIgJg7QAXAFAGAHQAHAGgEBbgAJ3AtQAAgeADgUQADgWArgGQgCANgBAkQgCA1gJgBQgKgCgdAVQAEgLAAgfgAhBAwIgDgJQgDgFgLgFQgHgCg6gCQhOgDgygFIgHhnQAAgfAciCQA9AYA0AuQAuAoASAkQANAYALAaQAGAOBcgJQBdgIEFhWQEFhXDHiKIgeCsIgNBNQgJAGgRAHQgXAKg7AUQg3ATgGADQhLAnjOAhQjPAkifAAQg8AAgFgJgAkDgiIAGASQAJAQATAAQAQAAAHgEQAJgHAAgSQAAgmglAAQgdAAAAAhgAkDikQADAiAfAAQATAAAIgKQAEgGAAgOQAAgmglAAQgfAAADAigArQgRIgFgkQgDgWgGgMIA1AcQgCAtAIAvQglgKgIgogAldAKIgcgBIACgBQgfgHhHgRIhogeQgcgJgrgUQgqgUgQgFQhNgYgdhIQgKgagLgxQgPhFgGgUIAIALQBHBWETCVQAIgCAIgNQAPgaAQgMQAagVA+gzQAbgWAKAAIA8AHQgTATgHBBQgFAvAABZQAAAKAJAkIg3gCg");
	this.shape_10.setTransform(4.2,56.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#95BCBF").s().p("AA0BEQAaAaizjBQAvgNA+BAIBeBvIgWAng");
	this.shape_11.setTransform(-39.1,-79);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D2F0F0").s().p("AliCAQgOgPg1hHIgXgeIgWgWQg0g5gYAAQmqCMhGAsQAAgBAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIgOg3QC+hYChgzQB9gnAzAAQAXAABdBuQBeBsAEAAQACAAAGgGQAIgIAHgLQA0hUAigrIAug5QAXgiAzgMQAtgLBfAAQBbAAB0AQQA+AID2ApQDMApB/AlQAGABA0AVQAhANA+AiQAAAXgFALIgHAOQgPgNgrgTQgogQgogLQkFhGiygeQkBgskQAAQgvAAgVAUQgQAOgzBQQgtBGgjAvQgdAogGADIgpgmgAkLAAIgFAIQgEAGgCABg");
	this.shape_12.setTransform(0.2,-76.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B3E4E6").s().p("AmeIaQjKgvjgiVQgngagRhdQgfiwgOgvIghiAQghiBgfhcIFliNQBvgsAUAAQALgBBEBLQA0A5AtA2QAQAXAPARIAdAiQAAABA+AeQA/AeAYADQAYADAKgMQgXgHiVhBQAYgeBximQA5hSAsAAQAbAEApADQBXAGBpABQCIACCbAbQB+AVCaAqICUAtQApANBRAhIADgOIgBAHQgBAMgVB1QgbCWgjDwQgSB5gSA8QgMAkgIAEIgTAOIg5AZQgvAVgGAIIhwApQiDAnhAANQj2AykBAAQjsAAiJghg");
	this.shape_13.setTransform(0.6,-27.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6F8083").s().p("AgOBNIABhAIgBgPQgNhOASAFIAEAAIANACIADgBIABADIgBAAIABABIgBAJQAAAKAJBsQAAALgEAEQgEACgOADIgMAAg");
	this.shape_14.setTransform(-5.6,68.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#596743").s().p("AhlARQhBgSAAgYQAAgHACAAIACgCQA3ATBYALQBBAFAvABQAjgBAKgFIARgkIADABQADAKADATQADAQAAAIQAAAQgJAFQgNAGgnAAQiCAAhNgYg");
	this.shape_15.setTransform(-17.2,79.1);

	// Layer 4
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AlMOMQjcg0ihhiQgri6hRlHIjuvBQAhgbDfhRQDfhQBXAAQA5AAAcAHQA8A5AOASQAbAlAtAkQAKgMAPgWQATgbAWgfIAsg6QARgXASgJQAdgPCagJQCfACDAAfQCCAVDrA2QBbATBrArQBwAqAAASIh5LuQAIALAGATQAEARAAAPQAAAsgOATQgVAbgMAvIgaCYIgtD8QghCzgEAMQj0BLhjAYQifAmjHAAQjuAAjTgwg");
	this.shape_16.setTransform(0.1,0);

	this.addChild(this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-107.5,-95.6,215.3,191.3);


(lib.CUP_34_arm_02copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B3E4E6").s().p("AACBRQgLgIAAgRQADgcAAgGQgPASAAAOIABAKIADAIQgNgDgFgCQgLgKgEgYQgFgbgGgGIgBARQAAATACAHIgEgGIgIgVIgDgMQAAgiAKgZQAOghAeAAQAVAAAVAYQAZAaABAiQgBASgLAYQgHAMgJAOQAJgFAKgKIAJgIQAHAAALAGQALAHAAAIQAAAHgFAHQgLANgcAAQgSAAgMgIg");
	this.shape.setTransform(-18.2,19.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#526139").s().p("AgXAFQgYgXgTgEIAQgIIA5gVQAZAGAOAQQAVAUgBAgQAAAJgPAIQgTAIggAEQAAgUgXgbg");
	this.shape_1.setTransform(-11.7,10.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#758A51").s().p("AABCwQgGgYgTggQBEgXAXgLQAQgIAEgKQgNACgJAAQgFAAhVhZIh3h8QAAAAAAAAQAAgBAAAAQAAAAAAAAQAAABgBAAQAKgMAFgeQAFgeAtAVQAXAcAtAsIBKBJQBUBUAAA1QAAAdgtAeQg+AigiAWQACgJgGgSg");
	this.shape_2.setTransform(-3.8,-7.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#758A51").s().p("Ag0BWQAMgCAWgMQAUgMAHgJIAIAQIALgBIABgJQgGgng/g9Qg/g+gDgOQgDgPANgYQANgYAFABQAFAAASgHQBDBEAYAcQBIBVAAAxQAAA3ggAgQgkAlhWAWQgigYAchOg");
	this.shape_3.setTransform(-5.3,-9.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3}]},1).wait(1));

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AimEMQgvgZAFhLQAFhKAxgZQAxgZBAgVQA9gVAogSQi2jNAAgBQAAgHALgJIALgJQAAgGAUgSQAXgWAXAAQALAABNBSQA8A9A/BHQAaAnAFATQAFAVgOAWQggA0hRApQhoA1gcAXQAMAQALAUIAJASQAAAOgMAPQgQAUgeAAQgvAAgvgag");
	this.shape_4.setTransform(-6.9,1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag3BSQAAgNASgPQAVgRAEgJIg8g7Qg1g1AAgJIAqhSQAAgFASgMQASgLAGAAQAIAAAXAZIAZAdQAhAcAkA3QAqBAAAAkQAAA7gtAvQgwAxhMAOg");
	this.shape_5.setTransform(-4.3,-8.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.9,-28.3,42,59.1);


(lib.CUP_34_arm_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#758A51").s().p("AhzDHIAKgyQAEgYAMgPQALgPAqgIQAngIANgUQABAQAKAAIAHAAIABgCIACgDQgCgUgigvQgng2hEg8QAHgwALgIQALgIgGgKQgGgKAcgEQBFA9AvA7QA9BMAAA1QAAA7gvApQg4AxhnABg");
	this.shape.setTransform(-6.1,-10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiFDRIAQhHQALgzACgGQAFgKAegDQAlgFAgglIiAiAIAJgLIAKgNQAxg6AGgJQADgHgGgBQAAgHAGAAIAOAAQALAAAUAXQASAWAtAuQAtAuAPAoQAQAmABAWQgBBehGArQg+AniEAEg");
	this.shape_1.setTransform(-5.8,-8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.CUP_34_arm_01copygg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B3E4E6").s().p("AiEB/QgkggAAgrQAAgkAkguQAhgrAxgjQAvgjAfgHQAlgIABAgQACAghZAyQhbAvABAhQACAgAWAYQAVAVAVAAQAGAAADgBIAEgFQghgXgSgXQgKgQAAgHQAAgFABgEIACgGQAIgCAGAAQAYAAAWAUQAXATAAAXQgBAPgiAbQgjAbgNAAQgPAAgbgZgAgUAfQgQgRgngOQBWgfAogeQAkgbAAgeQAAgKgEgQIALACQATgBAMANQAHAKABAKQAAAYhMAsQhQAugDAGIABABQASgKBFgXQBEgeAXgxQgBgHAFACQADACAFAHIADAEQABACAAAGQAAARgjAaQgJAHgjAUIg3AjQgjAXgDAAQgGAAgLgMg");
	this.shape.setTransform(9.7,-87);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#758A51").s().p("Ag7gKQAXg/A6hjIgCAOQAAALAYAtQAXAsAHAGQgRAUgUAbQgmA0gPAwIAagjIAKA1QAHAggyAcQhOhEAqhzg");
	this.shape_1.setTransform(-16.3,-57);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#526139").s().p("AgEBZIgegpQgXgfACgPQACgNAJgYQAHgVAVgmQAKA+AWAkQATAcAVAIIgwA0QgCADgDAAQgDAAgEgGg");
	this.shape_2.setTransform(-7.2,-73.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1F26").s().p("Ag8AMQABgUADgGQAFgPASgYIBeAwQgVAJgGALIgPAng");
	this.shape_3.setTransform(36,-8.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B3E4E6").s().p("AhWA/Qhbg3AAgcQAAgCAFgGQAEgHACgIQAEgNAKgRQAHgNARgRIAOgNIgBABQgIAEAIgGIAKgHQACgCAjAHQAkAIAQAAIAfgFIAfgEQAcAAAOALQAKAIAAAKQAAAIgNAGQgKAEgGAAQgKAAh3ggIgEADQASANAtAOIBOAYQBjAeAAAmQAAAlhdgkIh2g1QgCACgDAHQgDAIgBAGQAAABBPAnQBbAmAzgPIABAKQAAAVgOAFQgHACgdAAQg4AAgYgPIg3giIgtgZIgMARQAiAdAlATQAnASBAASIgcAKQhOgJhag2g");
	this.shape_4.setTransform(111.6,30.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#526139").s().p("AhAA5QgKgQAAgSQAAgRAMgYQAOgbAUgSQAzgwA0A2QgpAJgeA0QgaAyAHAhQgigJgPgVg");
	this.shape_5.setTransform(93.6,22.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#758A51").s().p("ACIB4Qjih4ADgEIAEgLQAKgRAYgZIHMDlIgcAoQgRAagCABQhzg7hxg8gAl1iWQglgeAAgQQAAgEAHgOQAHgRAHgHQAVAUAdAPICjBSIgMAiQgKAeAAAGQh6g7g1gog");
	this.shape_6.setTransform(48.4,-2.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#526139").s().p("AgsAhQgigbAAgcQAAgEANgYIAFgIQgCAIAAAKQAAAsAiATQAgATBLgFIgGAEQgYASgcAAQggAAghgag");
	this.shape_7.setTransform(-2.2,-70.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B3E4E6").s().p("AACA+QgygshLgYIgDAKIBNAwIgpALQgsAAgVgRQgPgMAAgVQAAgmAtgiQAvglA9ABQBzAAAvAzQAcAfgCAoIgBACIgDAHQgdhphfgCQgBgEAAAKQAPAGARAKQAjAUAMAPQAPARADAJQAGAQACAmQgjALgLgIQgKgHgIghQgHgfgogeQgqgjg8AAQgKAAgOAGIgHAFIgGAHQAIAAAMgDQAMgDAFAAQA8AAAqAwQAnApAAAsQAAASgOAAQgSABgpgjg");
	this.shape_8.setTransform(10.8,-75.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#758A51").s().p("AhRBzQgUgdAAgzQAAggAkhHQAmhOAwhBQABABAAAAQABAAAAABQABAAAAAAQABAAABAAQACgBADgCQAYAcAXAPIAYAOQgLAThFBdQg6BOAAAJQAAARAIACQAJgBAVAOQAOAIADAFIACgEQAgBCgmA+QgygiguhAg");
	this.shape_9.setTransform(-14.3,-46.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#526139").s().p("AglArQgogZAAgTQAAgTAOgTQALgPAMgHIAGgFQgBAcAhAgQAiAiAuADQgLATgKAIQgMAJgRAAQgcAAglgYg");
	this.shape_10.setTransform(-6.3,-70.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B3E4E6").s().p("AhTBzQgkgfABgSQAAgRAzhHQATgbATgkQAZglALAHQANAHACAEIAAAQQAAAUgOAXQgIAOgwBGIAAACIAGABQAKAAgFgBQArg4AIgKQAbgnAAgVQgBgZADgKQAHgaAVAAQAOAAAHAMQAFAIAAAGQAAAcguA+IgvA4QgBAFAFgDQAEgDAAAFQAAAJggAKQgkALABAaQAAAdArAAQARAAAMgHQAHgEAEgEQgaAvgeAAQgVAAgigggAghBgIgCgFQAFgQARgNQARgPAWAAQAHAAAJACQAJACAAABQADAYgSALIgEAIQgBgCABgDIgIADQgQAGggAAQgGAAgDgDgABGghQAog7ADgLIAEAGIACADIABAHQgBAPgUAaIhCBJIgJABQAHgFAng4g");
	this.shape_11.setTransform(3.8,-83.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},55).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[]},1).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},2).wait(1));

	// Layer 1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AkAEUQgRgcAAgXQAAgtAihZQAvh9Bbh4QBAhVBAgxQA3gqAdgBQBWAAAtAoQAgAcAAAZQAAAcglAfQgZAUgcANQhBAegFAEQgPAMgDAeQgBASgcAbQgOAPg/A1QhgBRgfApQgqA4gkBvQgdgkgMgUg");
	this.shape_12.setTransform(1.3,-71.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AGWFQQhFgahEguQgzgcgcgUQg0gmARgfIqdlaQhNgxgKgJQgdgaAAgrQAAgIACgJQAYAAAMgKQAGgFACgFQAKAAAIADIMdGMIAIgIQAJgIAGAAQAcAAAcAVIAlAdQAIAFAzAAQAKAABUgIQAWAAAOATQAOASAAAXQAAAOgKAMQA7AZAQAZQAQAXAAA7QAAAMgJAMQgNARgZAJIgSAPQgRAOgKAAQg9AAhIgcgAD/DSQAEgBgDgJg");
	this.shape_13.setTransform(68.3,8.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Aj9DkQgigqAAgzQAAgyBGh1QBGh4AAgQQABgHAVgzQAngpATgJIA7gbQAmgRBGABQBHAAA7AhQA6AhAABFQAAA5ghAEQgPAAgNABQgZACgOAHQgGAEgNALQgJAIgIAAQgJAAgagKIgWgMQgLgHgGAAQhbAAigDyQAfAHAUAgIgOgLQAFAJgHAGIgHAFIAEB4QABAbgBADQhQg2gggng");
	this.shape_14.setTransform(1.6,-54.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhtCnQg8gcAAgiQAAgOASgdQASgeAXgTQALgKAOgPIAtg8QAdgmAXgcQAYgdAJAGQAJAHAXgSQAWgSAJAAQAFAAAMALQAMAMAKAPQABACAJADQAGABAGATQAEAOgMAWQgLATg8BQQAMARAAAGQAAAcgYAcQgbAagHAJQgbAogNANQgQAQgYAAQgYAAgxgYg");
	this.shape_15.setTransform(0.5,-81.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12}]},55).to({state:[{t:this.shape_13}]},1).to({state:[]},1).to({state:[{t:this.shape_14}]},1).to({state:[]},1).to({state:[{t:this.shape_15}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.CUP_34_arm_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B3E4E6").s().p("AgnBgQgJgGAAgMIAFgmQACgTgOgMIgGADQgIAKgBAYIgHgFQgDgFgDgBIgCgBIgBgTQAAgWAGgSIAGgOQAAgGgCgBIgFgBIgNASIgGgRQAJgOAZgSQAhgXAbAAQAZAAAWAQQAVAQALAaQAFAMAXBcQAAAKgCANQgrgDgOgOIAKgBQANgDAGgEIgBgBQgPgFgQgBQghgDgNARQABAEADABQAOACANAFQgWALgLAJQgGAEgFAAQgMAAgHgGg");
	this.shape.setTransform(-4.3,43.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1F26").s().p("AgSAOIglgeQAUhAAcAOQACACAqAxQAFAHAHAOQAHAPAAADQAAADgoAqQgHgbgbgcg");
	this.shape_1.setTransform(11.9,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#526139").s().p("ABFAzQgHgWgJgJQgNgNgigOQgsgWgjAAQgEAAgEgCQgBgBAAAFQAAAJALgCIgZAHQAlg9AEAAQBJAAAtAnQAiAcAAAVQAAARgGANQgEAJgMAWQAAgHgGgRg");
	this.shape_2.setTransform(-1.6,34.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#758A51").s().p("AiHDIQgfgJgOABQADgcAwhoQArhcAMgTQAcAGAZAkQAUAdAAAQQgQAegSAmQgkBMgGAtIgBABQgXgPgigLgAAlhcQgdgmgSAAQBOhEAngbQA1BJAVAZQhRA/giAbQgCgUgbgjg");
	this.shape_3.setTransform(12.9,5.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#526139").s().p("AgIBTQgTgNgOgZQgOgZABgOQABgMAIgXQAIgWAVglQAJA+AXAjQATAdAVAHIggAkQgIAIgJAAQgHAAgIgGg");
	this.shape_4.setTransform(-7.1,-74);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B3E4E6").s().p("AiQBqQgYgnAAgPQAAgoAkguQAhgqAxgiQAughAggHQAlgGAEAgQAEAfhZA0QhbAxgBAcQgCAbAVAZQAVAYAXAAQAGAAADgBIAEgEQghgXgSgYQgKgPAAgHQAAgGABgEIACgFQAIgCAGAAQAYAAAWATQAXAUAAAXQAAAHgIALQgIANgOAHQgYAMgPAMQgIAHgGAAQgaAAgcgugAgUAeQgQgRgngOQBTgaArghQAkgdAAgeQAAgKgEgPIALABQATgBAMAOQAHAKABAJQAAAWhEAkQhLApgQAVIABABQASgJBFgXQBEgfAXgxQgBgHAFADQADACAFAGIADAFQABABAAAGQAAAQhUA6QhPA2gJAAQgGAAgLgMg");
	this.shape_5.setTransform(9.7,-86.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#758A51").s().p("ABiDjQAdgvgWglIAEACQAvAKAcA3QAbA4gNABgAiOBYQgvgpgKguQgJgrAYhCQAVg5A6hlIgCANQAAAMAYAtQAXArAHAGQgRATgTAbQgnA1gRAxIAcghQgLAgBCAwQBFA0AAADQgHA6gHAOQhcgygrglg");
	this.shape_6.setTransform(-3.4,-47.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1F26").s().p("AgpAWQAFgKAGgXQAHgagBgHIgEgLQA+AYAHAdQAEANgRAtg");
	this.shape_7.setTransform(2,-31.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B3E4E6").s().p("ABLBmIgkgEQgRgChBgfQhCgggagUQgMgJAAgFQAAgRAZgqQAZgqALAAIAkAGQAiAFAQgBQA0gEAOADQASAEAAAVQAAAQgYAAQgLAAgZgGIhGgUIATAHQAmAPBCAWQAvAPAGAFQAUAPgDAPQgCAQgYAAQgIAAgigMQgwgQg6gaIgCAPIACACQCCA1AqAAIACACIABAGQAAAOgOAEQgKAEgcAAQgfAAgkgSQgWgLgtggIgHAKQAGALAoATQAqAUA3ASIgHADIgQAFIAAgBg");
	this.shape_8.setTransform(108.3,28.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#526139").s().p("AhGgPQAOgdAbgYQAYgYAKAAQAEAAAVAIQAZAJAQAKIAGAIQgdAGgkAwQghAtAAAfQAAAOAJAFQhhgcAnhPgABGgyIAIgFIAEAHg");
	this.shape_9.setTransform(94.1,22.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#758A51").s().p("Ak5hVQg0ghgQgMQghgbAAgZQAAgLAMgTIAjg0QAgAqANAUIAAABQgFAAgVgIIgagJIgRgFQAyAuAiAJILSFoIgyBJg");
	this.shape_10.setTransform(48.5,-5.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1D1F26").s().p("AgtASIALgkIARAPQAIADALAAQAlAAAHgRQgBAIgCAIQgCAGgDACQgOAHgdAFg");
	this.shape_11.setTransform(-1.7,-0.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#758A51").s().p("AhFCVQg2gOgVgaQgVgagBg1QABguANglQAOgpAlg2IADAQIABADQAMBLACAFIAsAmIgxBTQAAAGACAKQAFgCAQgWIAfgpIAAA2IgBAQQgEARgMAngABHB5QACgJAAgFIAGACQAHACAFAAQAQAAASgGQATgGAIgJIAOANIhlAeQADgFADgHg");
	this.shape_12.setTransform(-2.8,-13.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#526139").s().p("AgTBoQgOgNgNgkQgLgfgBgOQAAg0AVghQAUghAgAAIAXABIAUADQgsgEgRAeQgRAcgBBEIANBSQAAAGgCACIgBABg");
	this.shape_13.setTransform(-4.7,-27.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B3E4E6").s().p("AhqCjQgLgMAAgjQAAgKAIhUIgBgVIgKhVQAAgoAYgYQAUgVAbAAQA9AAA3BfQA1BXAABUQABA4giAAQgYAAABgXIABgpQgHgegIgcQgQg0gOgIQAGAUAJAtQAHAvAAAOQABAbgGALQgKAUgfAAQgHAAgFgCIgKgFQACgHAKhCQAAgcgHgiQgIgigJgGIgCADQgCAJAAAPQAEBggDAdQgFAtgkAAQgRAAgHgHg");
	this.shape_14.setTransform(7.4,-19.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1D1F26").s().p("AgzAiQAHgHALgsQAJgoAAgNIBBAeQARAZgKAfQgQAlgFATg");
	this.shape_15.setTransform(2,-22.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#526139").s().p("AgSAfQgngSAAgcQAAgKAMgRIACAMQACAXAJALQARAYA5AAQAKAAAGgEIgCACIgSANQgGAEgIAAQgRAAgZgMg");
	this.shape_16.setTransform(-5.1,-70.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#758A51").s().p("AA9DoQAPgbAFgdQAFgegHgbIBxAiQgHgCgCgCIACAAQAEAAAUAMQAUAMAIAqQAIArAKAsQhMgYh2gugAjgA8QgegrAAg+QAAg/CBjAQAKAPAOAJQALAIAZAJQh1DCgCAeIgBAVIAGgDQAHgFAGAJQAHAJAZAQQAZASA0AdQAaAPAAAHQABAUgMAiQgJAfgIAKQh4gzgthBg");
	this.shape_17.setTransform(0.9,-38);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B3E4E6").s().p("AgiAWQgngYgIAAQgHAAgDACQgBAAgBAEQALAKAVALIAaAOIgIADQgTAGgLAAQgcAAgMgJQgLgIAAgRQAAgqAwgXQAhgPAbAAQAvAAApAPQA1AUAAAhIgBAOIgCAHIgIgTQgOghghgNQgUgIgTABQBPAeABA9IggABQgGAAgZgsQgigugvAAQgFAAgPAFQgQAFgFADIABABQAbgPAxAbQA3AbAAAwQAAAGgDAEIgRADQgWgMgvghg");
	this.shape_18.setTransform(4.3,-74.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1D1F26").s().p("Ag4gSQACggAOgcQANgZAKAAQAHAAAXALQAbANARACIgjBJQgKAUAAALQAAARADASQAFAVAGAJIAFAMQheghAHhZg");
	this.shape_19.setTransform(19.7,-11.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B3E4E6").s().p("AARGOQgMgIgGgJIgLgMQg/gyhHiJQhCiAAAgxQAAgMAIgPQAIgOAAgVQAAgUAMgIQAMgJAAgKQAAgyhKiWIAwAaIAHgJQAEgEAAgDQgBgLgTgiQgVgjgXgfQDYA5CKChQCVCqAADaQAABshJA2Qg6ArhdAAQgCAAgJgIg");
	this.shape_20.setTransform(80.4,-22.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#758A51").s().p("AgrBsQh3hEAAhSQAAgJARgnQATgsAOgMQB8AQAKAAIAwgCIBAgGIACACQgFAQAAAKQAABCBFB7QA9BvAhAbIAMAHQjngwh2hEgAkfhmQgVgpADgUQAEgVAVgnIAdAVIAdATQgSAhgFAMQgNAeAAAXQAAAGAGASIAFAPQgTgPgVgpg");
	this.shape_21.setTransform(38.5,-3.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#526139").s().p("AAJCvQgMgOgtg7QgngzgdhQQgchOAAgvQAAgKAFgHQALgLAegNQAhBaAnBMQBICTBFAgIAKAMIAUAbQggAFgQAAQgRAAgpg3QgzhIhEiFIgGgNQADAmA7BiQA9BrAwAfIglABQgSAAgVgVg");
	this.shape_22.setTransform(67.5,-0.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1D1F26").s().p("AgkAZQgQgRAAgGQAAgNAVgZQAUgYAKgCIA2A2QgYAIgRAVQgQAXAEATIgkgmg");
	this.shape_23.setTransform(25.3,-1.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B3E4E6").s().p("Ag9BDQhWgcAAgRQAAgIAGgSQAGgUAIgOQAHgNAbgPQAYgOAJAAQAfAAARgEIAngKQAOgCANACIAPAEIACAEQACADAAAGQAAAKgLAFIgMAFIhqgLIgBAAIgBABIACADQBZAXBPARQAgAIAAAPQAAAKgLAEQgIAEgVAAQgSAAgRgDQgcgHhJgWIgCAQIAAAAQAxASAuAIQA3AJAbgKIAEAEQABACABAHQAAANgKAFQgOAJgnAAIg6gUQg5gVgJAAQgHAAgCAGIAAAHQAHAAAtATQAuATAyAIQgJAMgXAAQguAAhUgdg");
	this.shape_24.setTransform(97.5,32.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#758A51").s().p("AArCjQhigxgtgiQhJg4gFgGQgDgDADgDQAEgEgBgFQABgDAQgYIAbgnQBBA/B3BCQCLBNB+AZIgOArQgNAoAAAEQh3gdiBg/gAkniJQgXghAAgcIADgaIAEgeIAGACQAEAEAlAsQAqAyARATQgUAMgPAWQgMASgCALIgphBg");
	this.shape_25.setTransform(44.4,4.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#526139").s().p("Ag0BJQgTgJABgNQAAgZAVg4QAVg6AAAJQABgMAlAEQAnAEAXAQQglAUgRAaQgcAoAEBGQgjgLgLgFg");
	this.shape_26.setTransform(82,28);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1D1F26").s().p("AgeAtQANgLADgpQACgpgLgLIgEgHQAggEAQArIAJArQABAlgNAOg");
	this.shape_27.setTransform(2.2,-28.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#758A51").s().p("ACTECQgjgNhNgiQAJgNAJgoQAAgMgEgTQgEgVgEgDQCEAwA3AEIAACCQg1gQgcgLgAgdC1Qhsg5gsguQgugyAAg+QAAgYASg0QAYhJAyhlIAFAyQBAgPAHgBIAGABQAAAJgHAPIgDAEQAFABAIAEQg8BTgXA0QgRAlgGArQAAAAAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAIAFAAQAHAAADgOIAeAcQAJAJAEACQATAKAYAQQAXAPAAAEQAAAPAGAXQAGAWAAAHQAAARgHAcg");
	this.shape_28.setTransform(1.4,-42.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},53).to({state:[]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).wait(1));

	// Layer 1
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AiiFtQgOgDgEgDQgGgEgFgWQgFgUACgFQgcgGgDgEQgCgDAAg5QAAgDgFgKIgJgTQgEgJAGgIIAVgaQAOgQABgCQgCgDAAgJQAAgMAUgcIAjgyQAIgMARgqQAUg1ALgZQAWg3Aog9QBPh3BlgsQAnA2A5BJQhjA1hPBzQhJBrAABNIAKASQAMAUAAANIgLA4QgBAFgRAgIAHATQAHAVAAAPQAAApgWAAQgEAAgtgJQgKgEgKAAQgKAAgVAQIgTAPQgIAAgNgEg");
	this.shape_29.setTransform(7.9,18.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("ACeGzQingwiFhjQiDhhAAhLQAAhJBYiqQBii/BghIQAyglAlgHQASgDA0ADQAOABATAKIAeASQAUALAKAKQAPAPAAAZQAAAZgrAdQgrAcguAaQgtAaAEAFQgJArgEAIQgEAJhzBnQh0BlAAAkQgBAjBGApIBOArQBJAoAQANQAQANgFAAQgEAAAcA6QAaA2AAAHIARAmg");
	this.shape_30.setTransform(1.3,-60.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AF2FBIhLgpQgxAAgSgQQgVgSgNgQQgKgMAAgDQAAgGADgLIACgKIpjlDQh+hOgUgPQgdgYAAggQAAgXAVgSIAogjQAjAqALAVIgNgBIL8F7QAPgQAIAAQATAAAuAlQAvAkAFAAQAuAAAxgFQAbAAAAAhQAAAHgEALQgDAKgDADQAVANAhAKQAXAMAAAuQAAAhgkAcIglAWQg8AAhXgog");
	this.shape_31.setTransform(64.9,4.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AiaDIQhDglgBhjQAAg8Ang9QAYgoAcgaQAFgFAggtQAjgrAYgDQBhgPBUB0QBMBpABBkQgBAZgTAaQgTAYgaALQgtAVg/APQg3ANghAAQhLAAgpgWg");
	this.shape_32.setTransform(-0.4,-18.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgEEcQkNh/AAh/QAAg6BEhyQBDhyAFglQAFglAsgYQAtgXBAgIQBBgIAsAWQAzAZAAA6QAAAWgMAKQgLAJggAEQgOABgQANIgOAMQgMAAgVgKIgUgLQgFAAgcAaQgMAAgFADQgFADgnA7QgnA7gYAmIggBFQBQA4BNAkQAgAOBuAqIAtATQALACAIAWIAaBEQAMAjAdBLQiRgpiFg/g");
	this.shape_33.setTransform(0.1,-43.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgEGDQh5glhzg+Qh1g+hHhCQhMhIAAg5QAAgnATgbQAKgOAPgRQA5A1A8ARQBHAXCKAAQBTAAAkgUQAggSAAguQAAgTgFgZQAHgDALAAIAOACQADhHhYiYQAEgEAIgBIA6AVQgqhBgYguQAIgDAAgCIAWAAQA3gFBVAuQBaAvBQBTQDKDSAAEIQAABIg4A5QhOBOibAAQheAAh+gog");
	this.shape_34.setTransform(56.9,-21.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("ADZEcQgFAAgFAEQgEAEgFAAQgNAAgEgDQgQgLgjgRQgGACgFgCQgHgFgBgeQlnhWirjMQhVhngOhdQAAgzALgQQAGgIAQAAQAHAAADADIAcAeQA7BpDRCPQDXCTB3AAQAFAAAAgMQgBgNAfAAIACABQAHAEApAKQAzANADAOIgBAIQAAADAFAAQA1AAAQgIQAQgIAPAAQAQAAAMAKQAPANAAAZQAAAGgBAEIgFAGQBNAIAAAzQAAAFADARQAEAQAAAFQguBBg6AAQgPAAi3g0g");
	this.shape_35.setTransform(62,9.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AhFCoQiphpAAheQAAgtAnhpQAphxAagBQAIADAAgCIAEAyQBBgPAGgBIAGABQABACgGAMIgHATIgCABQATgCAXgDIAEAAQgVAZgRAYQgeAtgtBgQAZAhBnAxQBiAuCIAuIAAChQihgkiShbg");
	this.shape_36.setTransform(0.4,-41.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_29}]},53).to({state:[]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.CUP_23_MOUTH_COMPcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 9
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A83C47").s().p("AhvA+QgYgSgGgSQDJgUBcgUQgMAYgsAiQg6Atg4AAQg4AAglgbgAi3ACQAvgpArgWQA5gbBAAAQAxAAAyALQAuALALALQgsAUhnATQhuAThWAAg");
	this.shape.setTransform(31.1,15.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjyAhQB4gBBZgaQA9gRDThMQAEAQAAAHQAAAyh0AlQh8AqjwAXIgFg3g");
	this.shape_1.setTransform(40.4,9.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#862D59").s().p("AgbArIAAABIgBgBIgDgDQgGgggMguQBAgFAXgEQgDASAHAdQAIAkABAEQgDADgPADQgOACgIAAQgcAAgKgFg");
	this.shape_2.setTransform(28.7,23.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#411415").s().p("Ah+BdIgDgBIgGgrQgEgagHgRQAdAEB9gtQBzgrAYgPQAGAshYBEQhdBLhZAAIgJgBg");
	this.shape_3.setTransform(48.4,18.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A83C47").s().p("AgqCdQgcgRgQgRQAoAQBwgaQBwgbAfgeIgEAKQgnBRgvAQQgvARgtAAQgfAAgmgXgAjQhJQA0g3A7gZQA5gaBDAAQAWAAA6APQAyAMAMAGQiJAsguAMQhGASheAAg");
	this.shape_4.setTransform(33,18.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AkBArQA+AJDDg0QDFg1AxgqQAMAoAAAJQAAAHgCABIgSALQgQALhhAkQhMAjhxAVQhYAPhjAFQgDg0gDgBgAkBArIAAAAIAAAAg");
	this.shape_5.setTransform(42,6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#862D59").s().p("AgZBMQADgJAAgIQAAgUgJgfQgHgagWg8IBUgKQAQA/ALA4QAIArACADIhcAMQADgDADgKg");
	this.shape_6.setTransform(32,25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#411415").s().p("AiFCMQACgNgLhEQgKg7gGgUQBQgKBaglQBXgkA8gsQACB8g7A8Qg+A/ixAwg");
	this.shape_7.setTransform(52.2,18);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A83C47").s().p("AA0DTQgogBgZgLQgegMgEgTIgDgCQAyAIBvghQBrghARgaQgsBHgxAdQgwAdgnAAIgDAAgAjqhsQAqg9BSgaQA0gPA6AAIAlACQAwAHAyAUIi6A1QglAKg+AGQgsAEgTAAg");
	this.shape_8.setTransform(35.8,19.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AkFAyQD4gHEEiOQAGAFAFARQAEARAAAMIhRApQhSAogFACQhXAbg2ANQhjAYhuABQgDgigCgQg");
	this.shape_9.setTransform(42.7,2.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#862D59").s().p("AgBBPQAAgugWg1QgahAgCgPQBJgHAAgHIAJAsIACASQAAAOAJAtQAKAuAAANQAAAkgGAEQgWABgeAGQAFgPAAgUg");
	this.shape_10.setTransform(38.3,23.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#411415").s().p("AhrCYQAAhKgHgXQgPg0gIgwQBfgSBXgzQAugZArgdQAEAaAAAVQAADXj3BLQACgGAAgLg");
	this.shape_11.setTransform(56,16.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A83C47").s().p("AAIDfQgYgKgDgPIAkgHQArgHAigJQB0ggA5hJIAAAAQgJA5g/A1QhAA1hCAAQggAAgZgKgAkKh6IArgmQAZgYAVgMQA6gjBbgBQAaABA8AOIAvAOIAGAEQhGAdhYAVQhwAbheAAIgNAAg");
	this.shape_12.setTransform(38.3,17.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AjwBdQgBgTgGgkIA8gDQAogEBsgYQAmgHCTg3QAmgOAzgXQAGAAACABIACACQADAOAAAKQAAAVgHAHIgIAEQAAAKgoARQg3AUgfANQgWAJh8AcQiEAdggAAg");
	this.shape_13.setTransform(40.3,5.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#862D59").s().p("AgCAKQgZh0gLgVIAkgEQACAMAFBoQAJBoAQAaIAJARQgVgRgUhpg");
	this.shape_14.setTransform(29.9,29.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#411415").s().p("AiKB3Qgei1gDgOQDkgjBzhUQgVDKhQBmQhEBXhiAAQgdAAgOhNg");
	this.shape_15.setTransform(47.8,23.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#A83C47").s().p("AAdD+QghgNgQgaIgHgQQAQATAyALQA/AABCgsQAqgdATgZQAEAggyAxQg2Azg1AAQgXAAgYgJgAjkicQAqguAdgSQBEgqBgAAIAnADQAwAGAyAVQinAygjAJQhMAShHABg");
	this.shape_16.setTransform(34.1,22.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhVAOQALgOAagNQAXgLAOAAQAaAAASAJQAKAFAuAdQgvgEgnACIhbAIg");
	this.shape_17.setTransform(22.4,7.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#411415").s().p("AgZByQgFgHgIgPQgMgpgdhGQgdhJgGgYQARgPBiAAQA9AAARAPQAZAVALBUQgECPhgAAQgYAAgQgSg");
	this.shape_18.setTransform(24.6,24.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A83C47").s().p("AAiDaQgXgDgSgQQgWgTgJgmIAHAIQASAMAuAJQASAAAZgIQAagKAOgNIAHgLQgHAcgdAgQgbAdgWAAIgEAAgAh1iQQANgmAIgLQARgYAfAAQAQAAAYANIAmAVIgFgBQhagbg5BQg");
	this.shape_19.setTransform(23.9,22.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#411415").s().p("AgmBUQgGgHAAgLQAAgJAGgSIAFgRIgPgcQgPgdAAgJQAAgZAUgOQATgNAYADQAaACASASQAUAUAAAhQAABAgbAdQgUAVgdAAQgSAAgIgKg");
	this.shape_20.setTransform(21.4,15.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A83C47").s().p("AAACUQgPgBgIgSIgIgmQAWAPAZAAQAcgHAJgEQgYAjgIAKQgHAIgNAAIgBAAgAg0hKIAAgGQAAgfALgSQALgSAVAAQAgAFAPAUQgHgDgKAAQgWAAgQANQgPALgTAcIgBgBg");
	this.shape_21.setTransform(19.3,15.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#411415").s().p("Ag7AFIACgBQAbgNAjgeQAIAAAXARIAYASIgjAYQgZAUgQAAQgYgHgTgcg");
	this.shape_22.setTransform(17.7,9.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A83C47").s().p("AgwAdIAEAIQANAMAGADQAGADAKAAQAcAAAPgUQAFgGABAAQADAAAGALQgGAZgRAPQgPAOgRAAQgrAAABhBgAgvgqQAAgQALgPQAPgUAZAAQASAAAFAJQARAZAGAGIglgKQgKADgVARQgZASgDACg");
	this.shape_23.setTransform(16.4,10.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B3E4E6").s().p("AhdDSQiBAAhJgiQhCgfABgtQgBgLAdgNQAQgJAMgEQAVgIABABIACADIAAADIgCADIgIAGQgjAZAAAoIAGAFQATghAMgRQAXggAjgMIAEAAIACADIAAADIgCAIQgDAPANASQAQAVAcAPQAPAHBIAAIAGAAIANgCIABAAQALgDApgPQAmgQA2g1QA3gzAIABQAKAAApADIADACIACADIAAAkIAAARIAAAAQABADAFAGIADgBIgCgiQAAguAhg7IAAAAQAlhEAtgkQAtglgEAFIgFAIIgFA8QgCBTgEApQgHBFggArQhSByk9AAIAAAAg");
	this.shape_24.setTransform(34.9,12.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhZBZQgjgIgcACQgdACgTADQgTAEgjALIgfAAIAAgEQAAgPgKg7IAjACQCHAACdgiQCpgnBfg5QgMAIgMAOQgXAcgoBaQgogEgKAAQgUAAgaADQg0AIgiATQgrAZgNAMQgFAEgEAAQgPgHgkgIg");
	this.shape_25.setTransform(33.6,6.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#A83C47").s().p("Ah2B9QgdgTgPgnIAOgCIAWgCIA3AGQA0AHALADIgnA7QgEAFgMAAQgeAAgZgSgAAsBAQATgLBTgeQhdBvhAABQAIgsAvgbgAi1gjQByhzBeAJQBhAIA6AaQhfAnhqATQhSAPg9AAg");
	this.shape_26.setTransform(29.8,10.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AkABqIgEg2QCZAECphHQBZgmBeg2QAGAUAKAsQAAAdjRBAQi0A6heAAQgTAAgPgCg");
	this.shape_27.setTransform(43.4,2.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D580AA").s().p("AgygOIAJACIAeAIQgBAtgmADQgugDgSAJQAVhAArAAgABYgxQAJAAASAJQgOANg0AbQgvAVgLADQAkhJA9AAg");
	this.shape_28.setTransform(47.4,33.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#862D59").s().p("AgMAdQgJgmgPgmIgPgiIAegFIAqgJIAPBEQAEASAMBfQgTgCghAMg");
	this.shape_29.setTransform(38.7,22);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#411415").s().p("AhoCIQAAgYgCgYQgCgVgNg1QgKgqgFgNQApgGA7gZQBNgfBeg5QACAUAAAXQAABIgUA1QgYBAg0AwQgDAAgTgIIgTgJQgRADgUAIQgnARgRAeQgKgLgBgOg");
	this.shape_30.setTransform(56.3,16.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#A83C47").s().p("AgTDVQBdgMBMgiQBRglAhg2IgBAKQAEAUgaAnQgcAogpAeQg3AmgwAAQgxAAgngogAkHiQQAWgdAmgbQBNg0BlAAQAwAAAaAHQAQAFAkANQghAShOAZQhGAVgbAEQhbAPgoAAg");
	this.shape_31.setTransform(38.5,20.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AjwBAIgGghQCJgIBcgWQBXgVCwhDQAEAwgVANQgzASg5AYQhTAmhMARQhQARhlAAQgSAAgDgYg");
	this.shape_32.setTransform(39.7,11.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#862D59").s().p("AgVAAIABgDIAqgEIgqAPQgBgFAAgDg");
	this.shape_33.setTransform(26.5,21.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D580AA").s().p("AiLAjIADgFQAlg0BYgMQBagNA9AuQiJAnhYAAQgTAAgjgDg");
	this.shape_34.setTransform(34.6,24.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#411415").s().p("AglA9QgegQgngRIgQgEQAXAFBmgqQBdgnAVgOIAGgFQg1BTgkAiQgcAagVAAIgWgLg");
	this.shape_35.setTransform(50.9,16.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A83C47").s().p("AgnCaQgkgSgPgTQAwAKB1gZQBrgXAUgPQgaAjgnAeQg6AsgzAAQgcAAgngTgAjJhCQAggQAzgxQA6gpBeAAQA5AAAvAQQAbAKAOAKIjIA3QhEAQhAAAg");
	this.shape_36.setTransform(32.2,18.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AkECGIAEg/IAyAAQA0AJCNgjQCCghA4gcQAKgEAWgVQAWgOARAMQAPAJAKAKQAJAJAAAEQAAAQgpAjQg4AwhYAZQgyANg9AKQhFAKg4AAQh1AAAAgMgAkHAjQgPgTABgzQANACANAAQBIAAB8gXQCjggCLg5QAGAXAAAUQAAAXgaAOQg4AVg6AZQhlAphLAQQhEAQhRgBQglAAgOgSg");
	this.shape_37.setTransform(37.6,15);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#411415").s().p("AgUAgIAGgPQAFgNgBgPQABgPAFgPQAGgVAQgHQADAaABAhQAAAigPAug");
	this.shape_38.setTransform(65.6,4.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#A83C47").s().p("Ag2CzQgkgRgFgfQCSgCA7gIQAagEA6gRQhHBHghAMQghALgZAAQg0AAgigPgAjBhaIABgBQALgjBFgbQA6goBeAAQA7AAArAOQARAGAZAOQg1AYhyAXQh0AXhKAAg");
	this.shape_39.setTransform(30,18.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AkECgQgCAAAAgJQAAgGAGgbQAFgcAAgMQDNgFCUg8QApgNAtgYQAigTAFAAQA0A0ACABQgxBEiHAsQh+AriHgBIhggEgAkUA3QgBgygDgnQB8AEDNhAQCbgvAngXQAGBIgHAKQgFAHhMAiQh+A4gZAHQhoAkiJgBQgZABgUgDg");
	this.shape_40.setTransform(38.3,13.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#411415").s().p("AAABpIgohAIASgZQACgFAAgZIgCgZQgCgTgEgLIAggSIAfgSQAGBDAAATQAAARgIAVQgEAOgbBJg");
	this.shape_41.setTransform(67.1,3.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#A83C47").s().p("AgnDHQgegOgZgiQAQAAB/gRQCBgRAegRQhFBSgqAOQgpANgiACIgGAAQgcAAgbgMgAhvixQBCgcAqgEQAogFA7AOQA6AOAMALQhMAskpAlQAWgzBKggg");
	this.shape_42.setTransform(31.5,17.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#A83C47").s().p("AhHBBQgjgOgZgZQB0gaBBAAIAqACIA1AGQgmAqhDARIg7AKQgXAAgdgMgAhMg6QAsgSAoAAQAjAAAfAJQA2AOA2ApQh/gbhVAQQgeAGgsANQg5ARgUAFQAqgzA/gZg");
	this.shape_43.setTransform(36.3,16.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).to({state:[]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[]},1).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[]},1).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},3).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},1).to({state:[]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},1).to({state:[]},1).to({state:[{t:this.shape_43}]},2).wait(1));

	// Layer 8
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AhaBkQgugOgRgUIgRgaQgLgPgRgBQg7gDgagFQglgIgNgNIgCgEIAJgHQAOAFAhAHQAlAFAOAAQAOAAAIgHQAeghALgKQAagZA4gRQAzgPAqAAQAfAAAlAIQAbAGAVAIQA4AVAEAAIAwgRQA1gUAngJIAKAEQgSAbhKAYQhPAagFAFQgLAKgVAjQgSAggXAOQg/AqhGAAQgVgDgXgHg");
	this.shape_44.setTransform(32.9,15.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgtC3QgigUgUglQgJgQgcACQgfACgHgIIgBgKIAAgCQACgBAGAAIAgADQAdAEAMABQgPhLgDgKQgoADgPgDQgWgGAKg6QgVAAg2gKQhAgNgPgNQABgFADgCQADgCAGAAQAaAAAcAKQAdAJANAAQAPgHANgSQAaglAqgZQA+gkBRAAQAMAABBAOQBMAQAWANIB9guQALAIAEAIQAEAJAAARQAABEgcAsQgpAugWAdIgVAqQgVAngUAXQgjAmg5ASQgnAMgfAAQgiAAgegSg");
	this.shape_45.setTransform(33.1,18.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgRDRQgPgSgHgGQgKgKgLgCQAEAAABgCQgVABgHgBQgNgCgDgGIACgBIAKAAIAjABIABg0QAAgogLgjQgMgkgRgDQgSgFgVABIgaACQgTgDgBhCQiJAAgcgOQgdgNgDgDIgIgKIAHgBQBtASAsAAQADAAAQgSQAWgZAUgQQBKg8BpAAQAyAAA+ATQAgALAYAJQAJAABLggIBKghQALAAAJAPQARAeAABKQAABKgrBFQgWAmgaAcQgdA1gnAmQhGBDhSgBQg6AAgegig");
	this.shape_46.setTransform(32.6,18);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("ABOEHIgPgJQgMgGgNgTQgMgQgCAAIgdABQgJgBgMgLQAJgJAAgDIA6gDIAEg3QgMg8gEgKQgkhYgDAAIiJAIQgMAAgGgSQgFgRACgeQhuAAhAgLQhBgKADgMQACgLADgCIAFAAIBVANQA/AIAgABIAignQAlgnALgIQA6gZAVgGQAigKAqAAIAgACQAaADAOACQATAEAnANQASAHANAHQAGACAFAAIBLglQBOglAOABQAPAAAMAfQAQArAABRQAAAkgPA3QgOAwgKALQgWAdAAALIgBAcQgJAlgsA2QgdAjg5AVQgrAQgcAAQglAAgSgGgAANgVIgCgIQAAAAAAAAQAAABAAAAQAAAAAAABQAAABAAABIACAEg");
	this.shape_47.setTransform(31.9,16.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AA1EaQgWgNgPgmQgLgegPhNIgpiwIg0ACQgjAAgHgMQgDgHgDgzQg9ADgogGIhQgNQgogHgGgTIgBgGQAAgCAGAAIBNANQBNAMAUAAQAEAAAKgOQAPgXALgNQADgEAegRQAggTAJgDQAQgFAhgOQAigMAsAAQBMAAAyAUQAZAKARAJQAOAAAqgVIA1gbIAlgRQATAAAEAdQABAHAAAyQAABggSBIQgTBLgyBbQgDAGABASQgDAXgZAkQgkAzgeASQgeATgzAAQgqAAgVgOg");
	this.shape_48.setTransform(29.5,21.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AhACFQgUhxgIgOQgwhXAAgyQAAhqBSAAQAdAAAoAeQAkAZAoAtQA2A8AAB7QAABrgsAyQgeAjgmAAQg/AAgehpg");
	this.shape_49.setTransform(24.8,22.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AguCTQgQgTAAgkQAAgQAIgZQAHgZAAgGIgfhFIgDgVIgDgWQAAgVAPgVQATgcAgAAQAXAAApA/QAnA6AAAVQAAAogkBGQglBJgaAAQgSAAgOgQg");
	this.shape_50.setTransform(21.2,15.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AhABPQgIgpgFgSQgWgBgJgDQgHgDAAgHQAAgIAQgBQATgCAHgVQAEgfAGgSQANgjAnAAQAOAAAOARIAYAkQAeAwArgOQACACAAAHQAAAHgJAEQgPAEgsACIACAVQAAAqgaAYQgXAVgfAAQgYAAgKggg");
	this.shape_51.setTransform(18.2,10.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AkXChQgdgZgBgvQAAACAAABQAAAAAAABQgBAAAAABQAAAAgBgBIgHgEQAZgOAIgIQAGgGAAgGQAAgLgFgcQgFgcAAgLQgYgBgdgIQgpgMgIgSQgBgEgBgCQgCgBA8AKQA8ALBBAAQAVgeAogdQBQg7BhAAQAkAAA9ATQA9ATAGAAQASAABHgoQBHgoAUAAQAHAAAKACIAFAQQgIAjgEBnQgDBVgVArQhCCFlYAAQiqAAg5gwgAkMgJIABgBIAAgMIgCAAg");
	this.shape_52.setTransform(30.9,11.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("ABfEjIgcgIQgQgDgPgUIgMgTQgmABgFgBIgFgMQAEgGAOgCQAPgFAHgDQAegSAAhDQAAgWgXhHQgXhGgJAAIhvAIQgjgBgFgOQABgZgFgYQh0AJhAgNQg7gLAAgbQAAgKADACQAJALA+AHQA0AGAtAAIAUgBQAWgeAJgMQAHgGATgPQAZgUALgEQAigUAfgIQAjgJA1AAQAMABAZACQAfADARAEQALADAZALQAWAJAFAAQAKAABKgrQBKgsAYgBQAOABANAuQANA0AABHQAABEgjBRQgfBMABAVQAGA1hJA+QhLBAhFgBQgJAAgYgGg");
	this.shape_53.setTransform(32.3,17.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AhfCQQgVgYgKgGQgSgMgbAEIgDgJQAIgFAIAAIASABQACAAARgWQASgWAAgDIgBgUIg1ADQgWAAgEgDQgEgDABgMQgCgNgCgrQgRgBgygIQg+gMgNgMQABgGADgBQADgBAGgBQBVASAHAAQAJAAAZgcIAcgeIAXgRQATgPAcgMQAbgMACACQAfgLAyAAQAXABBHARQBKASALAKIB6gqQAJAKACAEQAGAMABAQQgBBLgwAzIgqApQgZAcgOAdQgSAog8AkQg/Amg7AAQg6AAgpgwgAhkgyIgQABQAUAAAWgFIgaAEgAgug7IgEABQAbgDA0AAIAAgLIhLANg");
	this.shape_54.setTransform(33,18.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AhUDOQgfgUgVgrQgJgDg9gKIhCgLQAFgJAGgDQAJgFAUADIAJg9IgNgfQgNgjABgpQgNADgzgIQgzgIgIgGQgCgEAAgFIAXgBIB0ALQAOg1BRggQBRggBCAAQBDABBoAoQAiAABCgcIBYgmQADAWACApIACAuQAAAjgVAnQgSAhgdAcQgFAFgsAcIg4AjQgXAkgkAhQhIBChUAAQgqAAgcgSg");
	this.shape_55.setTransform(32.8,17.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AhiDgQgfgigcgRQgDgCg3gFQg3gGgXgQQAFgFACgEQADgFgDgCIAnAFQAHhGAAgKIgKgKQgJgLgBgMIgFhIIgVAAQhRAAgVgWIgCgFQAOgDAKAAQAKAABZAIQAcggApghQBShABmAAQAaAAAsAHQAbAFBHAcQAQAABfgrIBfgqQALAAAKAkQAKAgAAAVQAABfguBAQgpA5hcAyQgGAEgSAZQgWAegSASQhDBBhnAAQgvAAgdgZg");
	this.shape_56.setTransform(34.9,15.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AiABLQgFgEgVgUIgTgSQgKAAhwAwQAEgLAegUQAhgXAHgLQAkg1A9ggQA5gdA8AAQA6AAArAcIBeA+QApATAeALQAdAKAIAEQgHAGgbgFQgQgCgogKQg+gOgKAAQgNAWgcAWQg5AshRAAQhDgNgQgLg");
	this.shape_57.setTransform(38.7,16.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[]},1).to({state:[{t:this.shape_52}]},1).to({state:[]},1).to({state:[{t:this.shape_53}]},3).to({state:[{t:this.shape_54}]},1).to({state:[]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[]},1).to({state:[{t:this.shape_57}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.CUP_23_leg_l = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373D48").s().p("AgOA2QgNgZACgWIADAOIgMhgQAogBAQgBQAAAPANB1QAAAXgbAAQgJAAgNgYg");
	this.shape.setTransform(11.3,8.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1F26").s().p("AghALIAAgVIBDAAIAAAVg");
	this.shape_1.setTransform(10.3,-2.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#758A51").s().p("AgKCMQgRiIgJgwQAGAYgYh4ICCAAIACBuQABBMgCBfgAhNiMIAUAAIgLACQgFAAgEgCg");
	this.shape_2.setTransform(6.6,-19.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#758A51").s().p("AA9BUQgqgShBgzQgGgFgdglQgZgggQgFIgBACQABgJADgIQAJgPATAAQAsAABHBIQAWAWBOBZIgDAEQgDACgHAAQgYAAgagLg");
	this.shape_3.setTransform(-24.2,-19.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#373D48").s().p("AhTB8IgehMQAIAAApgLQApgKAFgEIA7gQQAQAeAFBGIhIAWQgrANgTAAQgEAAgHgSgABOgJQgMg3gLgRIAGAHQAVApAKAhQAJAVABACIACgXQAAgkgPgUQgYgkgTgxQAvAOALAVQAJAWABBNQAAAYgCAOQgDAkgOBCQgChLgPhDg");
	this.shape_4.setTransform(-43.6,-6.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1D1F26").s().p("AgSC7QgfgRgPgbQAegCAxgNQAvgMAOgHIAAAZQAAAagPAUQgRAVgcAAQgMAAgWgOgAh1gnQAAg/AZgnQASgdAQAAQAcAAAZA6QATAyAAAdQAAAWg6APQgfAJgjAGIgHg6gAAEiDQgmg1gfgQQAxgEAjA+QAfAzATBXIAAAEQgQhDgxhAgAB1iHIgBgCQgcgZgOgJQgIgFgLgEIAFgSQAZAEASAYQAPASAAAMIgBAFIAAAAg");
	this.shape_5.setTransform(-44.1,-4.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#373D48").s().p("AhVA0QBBgZAjAHQAkAIAhADQgzgHghg7Ig9h7IAJAAQA8gEAHgOQBTCBBJBwQg9AagdAIQhIATizAeQAVhVBAgZg");
	this.shape_6.setTransform(27,38.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1F26").s().p("Ai7C8IAGgSQAyAFCagiQCXgiAIABIAGAIQhBATk1BBgAhQidQgGgOgHgHQAKgBAXgJQAwgTAIAPQAGAPgKAJQgMAJgZABQgZACgCAGQAAAAAAABQgBAAAAAAQAAABAAAAQAAAAgBAAQgCAAgEgJg");
	this.shape_7.setTransform(27.7,38.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#758A51").s().p("AgBBCQhBh2g0hUQAOgdA+AyQA8AzBlDDQgMAIgUAEQgUAEgUAAQgEAAgshRg");
	this.shape_8.setTransform(12.2,2.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373D48").s().p("AidC/QAAg+A0gpQA7gtCIgeIgmgMQgGgBAAgGQAAgHgDgNQgHgggQiRQALAAAYADQArAAAHgTIAqC+QALAvAAALQAAAEg4AkQhYA6inBdQgEgTAAgKg");
	this.shape_9.setTransform(22.4,37);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1D1F26").s().p("Ai7EWQgCgEAAgGQAAgJFbjRIhFAwIA1ggQAXgNAUgEIAFAAQgZAbh5BMQhyBKhvA8IgGgIgAALjRQgIgCgDgJQgHgOgEgkIAeACIAPgCQASgEAPgLIAFAYQAFAYAAAGQAAARgzAHQgHAAgIgCg");
	this.shape_10.setTransform(24.8,35.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#758A51").s().p("AgRCSQgmkLgFgYIBPAAIAqEJQgHAGgXAJQgWAKgJABg");
	this.shape_11.setTransform(24.8,-8.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},10).to({state:[]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},2).to({state:[]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},6).wait(1));

	// leg
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AADDvIgnjcQgmi6gRhhICsAAIAFCyIgFCyQAAAOAFA1IAGA5QAAAZgHAJQgJAPgfAAQgeAAgMgag");
	this.shape_12.setTransform(8,-7.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AiAD0IgSgJQgWgZgLgUQgeg4gFgPQgbhHAAhZQAAgvAVgwQAZg5AjAAQAPAAAUAJQAdANAVAbQAQhpA5AAQAuAABVBLQBCA7AUAfQAcArgBAQQgBAQgBgMIgCAEQg8AIgjgRQgmgShEgwQAFAsAAAkQAAB0glBMQgZA2gYAKIAGAAIgGABQgGACgFAAQgGgBgEACQgRACgNAAQgWAAgLgGg");
	this.shape_13.setTransform(-33.5,-7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AilFHQALgvAegsQA7hYBhALQh2jMgagwQgqhWhdirIgEgJQAOAAA5AYQA5AYANAAIDKE2QCgD1ABAOQgBAVh9AYQh0AWhaAUIhDAPQgTAAAAghg");
	this.shape_14.setTransform(23.7,24.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AjWGZIAEgUQAEgWACgeQACgdAGgTQAGgTAjglQAigmA/gOIAjgHQAOgDAAgHIgFg3Qgvk0gPjwIAAgPIBpAAIAHAMQAcCFAWB7QAfCrAmC7IAKgGQAIgEAGAAQAHAAAOALQAPAMAAAGQAAAijJB3QhiA7hmA0QgcAAAAgug");
	this.shape_15.setTransform(25,21.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12}]}).to({state:[]},1).to({state:[{t:this.shape_13}]},10).to({state:[]},1).to({state:[{t:this.shape_14}]},2).to({state:[]},1).to({state:[{t:this.shape_15}]},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,-33.9,18.4,53.1);


(lib.cup34rarmr01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#758A51").s().p("Ah5B4QgbgUAAgIQAAgWAqg6QA/hWCAh0QAYgMARASQAQASAHAWIgDgBQg2AthQBcQg/BKgHAAQgMAAgKAFIAKAGQA3AbAvALQgMAGgLAgQgJAeABANQhUgvgmgdg");
	this.shape.setTransform(10.9,-12.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B3E4E6").s().p("AhEBSQgLgIAAgIQAAgFAHgHQAJgKAMAAQAGAAAEAFIAMAMIAIAGQgdhCAAgBQAAgkAegdQAUgVAMgDQANgDAGADQAZAQAOApQAKAcAAAOQAAAGgGAIIgRAWQACgIAAgRIgBgTIgFAAIgJAgQgIAZgJAJIgMAGIACgHIABgIQAAgHgDgKQgEgIgDgEIgFgFQALApgPAPQgKAKgbAAQgRAAgNgJg");
	this.shape_1.setTransform(26.7,13.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#526139").s().p("AgwAjQgRgGAAgHQAAgjAXgVQASgQASAAQADAAAZALIAsARQgeAFgRAZQgIAMgKAfIgxgQg");
	this.shape_2.setTransform(19.6,5.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B3E4E6").s().p("AgRCDQgPgGgigDQg4gFgFgBQgUgFAAgRQAAgOAFgHQAMgMAiABQAhAAAAAUQASgVAJgQIAkg5IASgYIABgDIgSACQgCg4AFgXQAGgSAPAAQANAAAKAnQAGAbANBfQAHgNAUgMQASgJAKAAQAMAAAIAHQAGAHABAFQAAAKgiAPQglAQgKAaQgNAjgQAMQgOAKgagBQgEAAgMgEgAh0gIQgVgTAAgfQAAgfA3AjQA2AiAAATQgBAEgGAGQgMAMgHAKQgogWgWgRg");
	this.shape_3.setTransform(-21.9,0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#526139").s().p("AgLgMQAQAKAHAFIgXAKg");
	this.shape_4.setTransform(-13.3,-1.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#758A51").s().p("AjDBUQCsiCBBgoQAbgQBaglQAxgUgRBYQg6AeiABfQg+Awg1AqQgIAAhNg8g");
	this.shape_5.setTransform(5.5,-14.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B3E4E6").s().p("AgxB4QgbgFABgMIADgMQALgJASAAIAUADIAEgBQgagagrgJQghgIAAgMQAAgwBXg4QBGguAVAAQAOAAAbAuQAYApAAALQAAAWgUAEIgIAEQAAgqgsgeQgJADgFAGQALAHAMAOQANAOALAeQAAAagCgDIgMATQgHAHgHAAQgGAAgXgeQgagegSgJQgBAAAAAKQAAAGAUAgQAVAhAAAGQAAAWgWAOQgPAKgTAAIgPgCg");
	this.shape_6.setTransform(12.2,-3.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#526139").s().p("AgSAvQACgDAAgEQgBgNAJgcQAKgpARgGQgWAZAAA3QAAAFAKAMIgSAAQgGAAgBgCg");
	this.shape_7.setTransform(-2.6,-2.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#758A51").s().p("Ai3CXQgJgMgBgcQAAgbAPgXQAPgWBPg9QBQhAAtgYQAPgHBTgzQAAAEAbgFQAQAGAIAiQAIAigLAUQhLAZhZAxQhKAogFAAIg1gLQgNALAAABQAAAEAFADQAGACAHgCQgOAYgIAQQgPAigDAuIABACIgEABQgZgEgLgPg");
	this.shape_8.setTransform(7.8,-14.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B3E4E6").s().p("Ag3BQQAOgEAKAAIARABIgEgLQgCgCgmgRQgigOAAgNQAAgpAzgtQArgoAaAAQAaAAAWAuQARAkAAANQAAACgEAGQgGAHgKAHQAAgKgOgcQgNgbgGgIIgPAJIAGAJQAUAZAGAcQADAPABARIgBgBIgCgKIgEAGQgEAEgGAAQgRAAgRgZQgNgagFgFIgFABIAAAAQgBgBAAAKIAPAgQAQAkAAALQAAAPgMAJQgKAKgTAAQglgBAGgag");
	this.shape_9.setTransform(25.5,5.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#526139").s().p("AgvAhQAAgdANgYQASggAbAAIAQABQALABAKgBIgrApIgBABIABgBIgRA/IgHAAQgTAAgJgUg");
	this.shape_10.setTransform(15.3,0.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#758A51").s().p("Ah5B+QgcgRAAgXQAAgrBGhFQAmgnB9hrQBSgRgUA4QhFAjhBBQQgdAjgKAJQgTATgSAAQgNAAgEAHQAsAPAcAIIAcAIQgcAOgIAfIgEAxQhYgrgMgIg");
	this.shape_11.setTransform(11,-14.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#526139").s().p("AgaguQAPgGAaACQAiADATAAQgZAGgJARQgHALADAOQhBgFggA4QABhTAogPg");
	this.shape_12.setTransform(-9.9,2.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B3E4E6").s().p("Ah3BcQhNgXAAgrQAAhMCDAAQANAABlgcQBngdAYAAQAaAAgJAVQgFANgKAKQgDADgYADQgUACgUAAQg3ADg5ATQg3AQgLAOQAxgJBNgMQBSgNAOAAQAqAAAAAUQgBANgKAKQgSAZgmAAQgEgDgIgDQgPgHgsABQgtgBgjALQgsAPgmAJIAWAFQA9gLBlgHQAPAAAKAMQAJALAAAIQAAALgNAKQgZAQg9AAQhMAAg7gQgAguhmQANAAAZAJIhTASQANgbAgAAg");
	this.shape_13.setTransform(4.7,9.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#758A51").s().p("AiPBwQgKAAggAJIgBgBQAZhRCGhbQB2hTApgGQApgHAKAfQAKAfgPAVQghAFhRBEQhaBPgIA4QhjgfgKAAg");
	this.shape_14.setTransform(5.6,-16.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B3E4E6").s().p("AAcCLQgTAAgLgKQgegVAAg7IACgUIADgVQAngIAHArIANBfIACABgAAoBQQgGgwgGgOQAUgEACgFQgGgIgYgDIgpgJIAGgGQAHgMAIgfQAHggAAgRQAAgKgBABIgGAGIgRAkQgSAigPANIgQgRQAIgzAWgYQARgRAMAAQArAAAaAcQAWAXAAAcQgLAVgYAiQAAAMAYAmQAYAmAAALQAAAKgFAHQgGAIgMAAQgZAAgJgogAhUBfQgEAHgHgaQgHgaAehFQAOADAJAIQAHAGAAADIgIAoQgKAqgbASIADgGg");
	this.shape_15.setTransform(-23.3,16);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#526139").s().p("AgSAHQg4gNAKgKIATgUQgCADAZgCQAXgDARAHQARAHASARQAQANgDACIgOAcQgBABgHAAQgdgEghgag");
	this.shape_16.setTransform(-16.7,0.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#758A51").s().p("AinBwQgpgXgWAGQAzg0A4gmQA3gkAugUIDFhZQAngQAMAdQALAegQALQgQALgBADQgCAEADADQhrA6hJAhIiSB5QgLgQgjgTg");
	this.shape_17.setTransform(3.8,-14.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B3E4E6").s().p("AhACjQABgVAWgwQAZg2AUAAIAQAKQAQAMAHADIgZBNQgSAngvAAQgQAAgBgSgABaCaQgIgQABgsQAAgVACAAQAHACALgFIhTgwIhCglQgBADAGAQQgLAFgbAEIgdAFQguAAAAgZQAAgXA3gPQBpgfAQgHQggACgJgyQgJgxAZAAQAOAAAUAfQASAiAEAFQADAFATALQARALALAFQAVAKAPARQAQAUAAAWQAAAJgHAlQgBAKAGBZQAAAkghAAQgWAAgIgSg");
	this.shape_18.setTransform(-46.3,7.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#526139").s().p("Ag2gsIAIgHQAQgKAKAAQAeAAAYAhQAVAcAAAXIgRAQQgUARgSAGQAGg/g8grg");
	this.shape_19.setTransform(-28.3,2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#758A51").s().p("AkJBLQELh7A1gcQA7giBqg4IABACQAcgHAMAYQAMAZgQAmQg2AigLAFIACgDIAAAAIhdAyQhlA4gWAMQiIBPgrASQgOhHgygVgAD8hBIABgDIAAADg");
	this.shape_20.setTransform(-0.1,-13.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B3E4E6").s().p("AgoCmQAEgNBCgwQBAguAAgTQAAgGgDgCIgEgBIgMAGQgnAggYAQQgwAigcAAQghAAgTgVQgNgNAAgKQAAgMArgHQBBgLArgVIgEAAIgxgCQgIAAhTAPIgdgFQgcgMAAgcQAAgiAxAAQBvAKAKAAQAxAAAXgHQAPgGAGAAQAKAAAJgQQAJgQAAgQIgDgaQgFgWAAgFQAAgKADgNQAVgJAPAQQARARgBAkQABAKgCAEQgCAKgFAOQgDALAAAFQAIAJAIANQAQAZAAAWQAAAwhDA3QhDA4g7AAQgKAAgRgHg");
	this.shape_21.setTransform(-29.2,7.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#526139").s().p("AAGAWQgIgkgbgIQAEgGAIgVIAIgYQAUADALAhQAIAXAAAXQAAAWgDAMIgMAZIgHAGQAHgUgJggg");
	this.shape_22.setTransform(-10.1,3.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#758A51").s().p("AiQB5QgGgOgmgiQAvg8A/gyQAggbBkhCQBlhCAWAbQAXAcgVAYQgUAZhHAnQhHAoggAgQg6A6ggAzIgYAxIgBABQgIgrgGgOg");
	this.shape_23.setTransform(8.6,-13.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B3E4E6").s().p("AgnB1QgJgGgDgJIgCgHQgFgRA3AIQgFgLgFgHQg5ABgLgDQgdgHAAggQAAgJAIgTQADgHAXgYIAKgKIgCABIApgoQANgVAbgLQAWgJAHACQAYANAXAeQAWAcAAAQQAAACgDAEIgSAVQgQgigPgQQgKgMgHAAQgHAAgCACQgFAGgIAIQAagBAPAdQAQAbgCAPQgJANgIAGQgIAFgfgSQgcgTgFgFQgFgHAAACIABABIAAAEQAJAZAXAUQAVARAAAJQAAAyg8AAQgHAAgHgEg");
	this.shape_24.setTransform(15.2,-2.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#526139").s().p("AgTAJQABgMASguIAAAjQACAWASAjQgJADgQAEQgOgjAAgGg");
	this.shape_25.setTransform(1.3,1.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#758A51").s().p("AieCeQgIgTABgQQAAgnA4hJQA4hHBShBQBVhBALAGQALAHASAPQASAPgJAiIAEAHQhTAcg0AzQgxAyggAXQggAYgfgOIAFAEQAEAEABAGQgPAuAAANQAAAMAFAnQgFAFgKAAQgUAAgLgbg");
	this.shape_26.setTransform(9.1,-11.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#758A51").s().p("AhPC2QgFgEgQgCQgSAAgIgDQghgNAAhBQAAgnBchVICriZQAfAXAOANQAOANgDAOIgEARIgBAAQgMgEgVAMQgTALgiAcQggAZgiAkQgXAdgEAAQgFAAgPgEQgPgGgFAAQgGABAAACQADADgBACQABAHAJABIgHABQgCABAAAGQAAAHABABIADACQAKgBAHgBIgGAEQgNAMgLAhQgKAdAAAMIACAJIAKAbg");
	this.shape_27.setTransform(8,-15.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#526139").s().p("AgZA1QgIgOAAgOQAAgdATgaQARgZAWgFIAJgDQgXAXgLAhQgFAVAAAQQAAAHAEALQACALACACQgFACgKAAQgFABgIgLg");
	this.shape_28.setTransform(4.4,-3.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B3E4E6").s().p("AgeBXQglgjgOAAQgHAAgFACIgJAHQglg8Azg+QAwg8A4AAQApAAAfAZQAfAYAAAeIgBAHIgBAAIgBABQgJgMgmgQQgigPgJAAQgGAAgUAKQgXAKgGAGQAGgBAOgFQALgFAVAAQAtAAAbAmQAUAYAAARQAAASgFAFQgDACgJAAQgRAAgZgPQgqgZgogPQgKAFgGAGQAkAGAZATQAhAYAAAfQAAAQgOAOQgOAOgTAAIgjgjg");
	this.shape_29.setTransform(17.7,-2.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B3E4E6").s().p("AAZB1QgSgYgsAAQgKAAgdAJIgbAJQgrAAAAg1QgBg1A7hIQA7hKAyACQA1ACAAAWQAAAJgOALIg1AhQgQAIgIAMQgGAPgEAGQADABAagLQAfgNAgAAQAmAAAaATQATAOAAAKQAAAOgKAFQgHADgVABQhBACgtASQAvAFAVARQAUAPAAAcQAAARgNAKQgKAGgGAAQgPAAgTgXg");
	this.shape_30.setTransform(39,-12.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#526139").s().p("AgMAxQgKgPgEgTQgMgzAtgaIgMAzQAAAUAOAYQALAQAKAHQgHACgCADIgCABQgJABgKAAQgDAAgJgOg");
	this.shape_31.setTransform(22.6,-6.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#758A51").s().p("AhBChQg7gXAAgsQAAgcAVgmQAXgmA9hPQAlgxAcgVQAXgRAPgDQAPgCAPALQAPAMgFAPQg9BIgXAfQgnAzABAZQgbgCgSAHIgIAEQAKAHAPAGQAYAKAUAAIAkgDQAegDAPgDQgBAHgGAIQgGAIACAXQAGBCAVAEQgwAFgJAAQhKAAgxgTg");
	this.shape_32.setTransform(8.5,-17);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B3E4E6").s().p("AA7BiQgUgagIAAQgCAAgdAXQgGAEgbAGIgbAGQgeAAgagbQgZgaAAgWQAAgiAng9QAng/AsgBQAqgBAUAIQAVAHAAAdQgXgKgmAPQgiAQgPAXIgBABIAGAAIAdgNQAjgOAmAAQAaAAATARQAUARAAAXQgHANgHAKQgMgMghgIQgdgIgPAAQgSABgGAKIACACQAcALA1AFQAnALAAA4QAAAmgZAAQgQAAgVgagABtg8QgWgQgEgYQAXgLASASQASASAAAPQAAALgJAIQgBgDgXgQg");
	this.shape_33.setTransform(39.5,-17.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#526139").s().p("AgzgGIASgzQgBAhAbAaQAZAdAiAAQgvAZgJABIgIABQgnAAAAhAg");
	this.shape_34.setTransform(26.7,-7.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#758A51").s().p("AhJCuQgxgSAAglQAAglAcgvQAMgUA8hPQA5hRAhggQAhggAHBKQhIBwgXAjQgSAjgHAAQghACgHADIgGALQAJAGAVAFQATAFAHAAQAJAAAmgJQAmgIAKgEQgGAgAAAHQAAAIAEANQAJAZAXAcIg+ALQgpAGgNAAQgqAAgmgOg");
	this.shape_35.setTransform(10.3,-17.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#B3E4E6").s().p("AhaBYQgLgbgQhEQgQgxAbglQAcgnA6AAQAkAAAQAKQAOAKAFAYQgxACgOAEQgqAKgIAeIgEAKIA0gSIAkgNQAQAAAQAKQAZAPgBAcQgKAGgJgCIgTgDQgfABhAA1IABAFQABADAJgEQAJgDAjgSQAkgTAMAGQALAHALANQAIAJAAAJQAAAggVAGQgDABg0ADIgCANIAAAMIAYABIALAAQgCADgSAEQgSAFgPAAQg1AAgTgtgABigBIgBgCIAAgBQAAgQgDgLQgGgegYgiQAcgZARAWQAPATAAAhQgHAugKAAQgGAAgDgBg");
	this.shape_36.setTransform(34.8,-19.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#526139").s().p("AgnANQgOg1AlgZQAHAXAVAiIAgArQgeAfgKAAQgcAAgPg1g");
	this.shape_37.setTransform(23.3,-8.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#758A51").s().p("AhFCwQgUgRgCgiQgDgiAWg1QAVgzBdioQAUgRAQAWQAQAWgBAGQgCAHgfBHQggBHgFAJQgKARgSASQgMAMgpAfIABAGQABABAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIAHABQAMAAAMgIQAggYAbgPQgIAeAXAlQATAcALAFQgWAMgjAMQgoAPgQAAQgUAAgPgNg");
	this.shape_38.setTransform(13.1,-15.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#758A51").s().p("AhsDdQgRgMgKgaQgJgVAAgSQABhLByiWQA3hNA7g/QAdgMAeA7QhRB9glAxQg8BTgwAAQgIAAgEgDIgOgJQgFAAgBACQgBACgBAGQAIAPAMALQgNAJgJARQgIARAAATQAAAaAJANQAGAIALAJg");
	this.shape_39.setTransform(6.6,-12.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#526139").s().p("AgkAwQgUgSAAgeQAVg7AdgCIAJBAQALAiArAIIgBABQg7AQgFAAQgOAAgOgOg");
	this.shape_40.setTransform(1.8,4.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B3E4E6").s().p("Ai6CnQgXgVAAghQAAgYA5g+QAhggBFhIIA7hCQAsgnAvAAQASAAAJAFQAKAHAAAPQgnAOhJAvQhiA/AAAkQAAAGADAAIADAAQAdgUAfgdIAtgtQAwgtAxABQAPAAAOAGQARAIAAANQAAAOhAApQhVA0g2BAQAAAAABABQAAAAAAABQAAAAABABQAAAAAAAAIACAAIAogZIBjhAQAIAGAGAJQAEAIAAAEQAAAchtBGQhwBJhCAAQgTAAgTgQgADGh1QgCgJgRgLQgQgMgKABIACgMQADgDAHgCQAJgDAHgBQAdAAAAAZQAAAHgIAcg");
	this.shape_41.setTransform(24.2,-11.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#526139").s().p("AgIAIIARgRIAAACIgIARg");
	this.shape_42.setTransform(-2.7,2.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#B3E4E6").s().p("Ai8BhQAAhHApg/QAjg4A3gmQAzgjAngEQApgFgBAhQAAAchPAqQhRAqAAAQQAAAGACABQAEAAACABQA1giATgJQAagNAyAAQAKAAAJAHQAMAKAAATQAAAYg2AhQgwAhgXAAIgygUQgBAAgOANQAOAEAYATQAXASAAAEQAAAcgbAUQgdAWgxAAQg3AAABhLgABDAuQAlgiALgNQARgZgVggIAagBQA0AAAAAZQAAAVgZAUQgiAdhJAUg");
	this.shape_43.setTransform(-9.5,11.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#758A51").s().p("Ag/CUQAFgUgRgOQgPgMgRAAQgHAAg2AOQA0g8Atg2QAEgCAAgCIAkgjQASgRApgjIAqgkQAagWAYgIQAXgHARAeQAMAUgEAaIhxBvQhYBZgeArg");
	this.shape_44.setTransform(6.7,-18.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#B3E4E6").s().p("AitCEQgBAAgGgKQgIgmBjgWQALAAArgSQgBgFgGgBIgPAFQgUAGggAAQhoAAAAgjQAAgUAjgSIAkgNQAbgBAfAZQAgAWApAAQAXAAARgJQARgKAMgFIgBgDIgCAAIgbAFIgZADQgsAAgjgYQgfgVAAgYQAAgVARgQQARgPAXgBQAiABAlAgQA9A0ARAKQAJAGA/ARQArALAAATQAAASgJALQgKAMgSAAQgOAAhCgaQgCAAgTAMQgRALggADQghADgFACIhIAqQgyAcgRABIgXgBg");
	this.shape_45.setTransform(-19.4,18.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#758A51").s().p("Ah/CeQgdgPgjgCQBJhcAvg1QAwg3CsiKQAsAJgBAiQgCAjgaAZQg3A1hZBuQhLBggVAhQgZgagagOg");
	this.shape_46.setTransform(4.4,-12.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#526139").s().p("AgSAFQgigXgJgTQAKgKAJAAQAvAAAfAVQAaASAAAUQAAAHgCAIIgIAVQgpgVgdgWg");
	this.shape_47.setTransform(-10.7,9.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#758A51").s().p("AiwBrQAIgqB+hpQB8hqBagcQgWAMAAABIAAADIABgBQAVADAEARQAFARABAcIAAAUIgCAIQhOAugtAkQgtApgRAQQgGgDgRgQQgPgQgDgBQgDABgBADQgDAGAGARQgaAPgFAAQgmANg0BEIgKAPQgHgaAJgqgACtguIAAABIgBAAg");
	this.shape_48.setTransform(5.2,-15.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#B3E4E6").s().p("AjICPQgLgLAAgHQAAgbAogcQAugcANgLIgIALQgFAKgGAQQgFAQgBAGQAHAkALAJQgMAHgyAMQgHAAgMgLgAhjB/QgRgLAAgZQAAgSAQgTQAIgJAygtQAJgHAdgqQAYgnAYgTQA/hCA4AcQAxAYAAA9QAAASgPASQgOARgQAAQgTAAgKggQgPgvgCgEQgJAWAAALQAAAYALASQAGAIAFAFQABAVgmAqQgqAugmAAQgHAAgPgFIAAgCQAAgTA/iFQg2BBgeBPQgKAZgIAHQgJAKgWAAQgNAAgLgHg");
	this.shape_49.setTransform(-5.8,11.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#526139").s().p("AhHA8IgFgJQAAgaAigtQAog3ArAAQALABAFABQAOADAGAMQgvAOgiAoQgUATgnA9QgCgHgGgJg");
	this.shape_50.setTransform(-3.6,0);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#B3E4E6").s().p("AgwB3QgKgHgJgKIALAAQAWAAALgGQAGgDAHgJQg9gEgRgJQgYgNAAgsQAEgiAVgjQAqhEBSAAQAcAAAUASQAcAZAAA1QAAAKgPARQgDgMgRgVQgSgZgMgDIgCAIQALASALAYQAMAZAAAHQAAASgKAOQgHAHgOAIQgBgOgMgYQgOgZgNgHIgBAEQAGAMAHASQAIAUAAAFQAAAPgVAYQgWAcgYAAQgCAAgIgFg");
	this.shape_51.setTransform(12.1,1.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#526139").s().p("AgZBMQgSgNgFgqQAAgiATgZQAWgcAmgJIASACQglAYgUAxQgSAqADAaQACAIgDAAIgBAAg");
	this.shape_52.setTransform(1.5,-2.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#758A51").s().p("AidCzIgMgnQAAhYCDh4QBAg9BCgrQBAgnAPBuQhcA5gwA3QgSAWgHAHQgHAJgNAAQgxgHgKAAQgrAAgWAvQgTAoACA2g");
	this.shape_53.setTransform(10.5,-17);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#B3E4E6").s().p("AAGhIIAVCRQhgg6BLhXg");
	this.shape_54.setTransform(20.6,6.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#758A51").s().p("AhJBuQgwgoAJgkQAJgiAwg4QAdgiBPhaQA7gBACAUQACATgjApQgkApgeAlQgdAjgUAtIAGAGQADgDAcgjQAIAJAmAjQAmAiAJAGIgWAfQgIAMgPAeQhMgggwgog");
	this.shape_55.setTransform(11.1,-14.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#758A51").s().p("AhCBxQg5goAAgpQAAgqAuhDQBAheAFgMIAIgNQAQgDAMALQANAMAGAcQAHAbgVAZQgUAZgdA4QgiA8gCAUQAJAGAGgIIAUghQAHAGA3AiQA5AjALAEQAbARglBHQh5gzgwghg");
	this.shape_56.setTransform(18.4,-15.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#758A51").s().p("Ag8B7QgbgjAAgoQAAgjAqg+QAPgXA5hOQAZgLAVAgQAVAfgIAQQgIAPg7BYIgiBNIAJAGIAYgpIARAPQgHA7gnAQIgCABQgWAAgZgfg");
	this.shape_57.setTransform(14.7,-18.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#758A51").s().p("AiACEQgZgZAAgOQAAgVAqg6QA/hWCAh1QBOAWgGAPIACgCQgJAOADACQgpAmhfBiQhEBFgHAAQgMAAgKAFQAbAQA+AVQgLAHgLAfQgKAeADANQhDgVgkglg");
	this.shape_58.setTransform(11.4,-12.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#B3E4E6").s().p("AhEBOQgLgIAAgHQAAgFAHgIQAJgJAMAAQAGAAAEAEIAMAMIAIAGQgdhAAAgCQAAgjAegcQAbgbAYAIQAEAFAUAHQAbAegCAbQgCAagEAMQgEAMgFAIQgBAAAAAAQgBAAAAAAQAAAAgBABQAAABAAAAIgCgOIgCgeIgFAAIgJAfQgIAYgJAJIgMAHIACgHIABgJQAAgHgDgJQgEgJgDgEIgFgEQALApgPAPQgKAKgbAAQgRAAgNgKg");
	this.shape_59.setTransform(22.5,12.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#526139").s().p("Ag4AgQABgwAagWQAPgNAPAAQADAAAUAIQAVAHAMAFQgfAFgRAaQgIANgKAng");
	this.shape_60.setTransform(16.4,5.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},1).to({state:[]},1).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]},1).to({state:[]},1).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},1).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]},1).to({state:[]},1).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58}]},1).wait(1));

	// Layer 1
	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AAbEMQgMgPAAgJQAAgKANgSQAQgVACgHQgVgPhJgsQhKgrgwgZQgwgZAIgrQAJgtBVhaQBVhZA8gzQANAAAjAdQAZAVAQASQguA1g3A8IhOBYIgCACIBqAgQBmAiALAFQAbAMATBBQANAvgEAOQgFAOgiAgQghAggwAGIgUABQgfAAgNgPg");
	this.shape_61.setTransform(14.9,-3.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AjyDcQhRgUAAgdQAAgjAYgHQAIgDBJgDIhBgpQgggWAAgnQAAgWAKgHQAIgHASAAQAlAAAkAjQAHAHAbAkIAHgSQgJgmAAgMQAAhEAlAAQAQAAAGAFQAJAJAQAkQCYhpBNgtQBOgtAvgPQA1BdAHgDQAGgDh7BcQh8BZgbAbIh+B9QgxAwgqAAIhRgPg");
	this.shape_62.setTransform(-6.2,-6.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgVDOQgOgOgFgnQghAFgWAAQhqABAAhQQAAgeAbglQAbgiAxgkQBGgzBIgyQBVg4AKAAQAfAAAZBsQAAAWgZALIghAKQAWAaAPATQAcAiAAAkQgFAZgIAKQgDADgNAFIgRAHQgRAggDAEQgLAOgTgDQAIAbgkAVQgiAUglAAQgRAAgLgKg");
	this.shape_63.setTransform(6.2,-10.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAmDkQgJgkgdgVQhAgchKgqQhKgpgCgbQgCgbAXgnQAWgoAdgiQAdgiA/g1QA8g2AXgCQAXgCAEAGQANAQAPAKIAOAMQAAAGAGADIAGABIi0CxIBWASQAtAHAUAAIAVgEIAZgGQAdAAAdAuQAaApAAAXQAAAMgLANQgTAXgOAaQgDAGgMAIQgMAIgFAKQgLAWgVALQgSAJgUAAQgYAAgHgYgABmjQIAAAAIAAAAg");
	this.shape_64.setTransform(15.1,-6.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AiwDsQg9gnAAhOQAAhNA1hIQAxhFB6hmQBNg1AzgQQAxgQAAAZQAAAFgGgCQgHgCAAAFQAAACAWAbQAVAbAAAVQAAALgmAcQg6AsgOAMQgQAOghArQgjApgEAPQAOAPAGAAQATAAA9gPQA+gQASAAQAtAAAAAZQAAACgKAVQgKAWgEAFQAYAAAKAQQAHAKAAAOQAAAMgcAZQgeAdgdADIAEAGQADAFAAAHQAAAYghARQgnAUhGAAQiBAAg/gpg");
	this.shape_65.setTransform(4.1,-5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AjOEnIgagjIgTASQgEADgCAAQgNAAgLgJQgSgPgBgjQAAgoAchNQAfhXBIhLQBIhOCFhKQCHhLBngiIgFAEIAMAHIgRAQQAQALAHAOQAFAJAAAIIACAPQAAAIgGAAQADAAAEALQAEAKABAIQilBEiHCHQguAyghAuQgcAoAAANIAXAvQAYAwAAAHQAAAPgKAOQgNAQgSAAIgNgCIgKgCQgDAAgLALQgLAKgKAAQgZAAgWgYg");
	this.shape_66.setTransform(-5,0.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AldEgQgJgMAAgcQAAgRAUghIAvhOIgBgFQgDgFgHAAQgJAAgZAMQgZAMggAAQgZAAgOgSQgMgRAAgaQAAgLAUgOQAmgaBdgOQAAgKgMgPQgMgQAAgOQABgZAMgSQALgSAPAAQApAAARArQAJAVADAIQAIANAKAAQAcAAEViKQCLhFCIhFQAOAAAIASQALAPAKAWQAMAcAAAQQAAAZggAYQgjAah6A/IADgCIiaBUQicBagrAWQAABkgPAhQgLAYgdAAQgiAAgFgUQgFgvgOg2IgBgCQgZBLgYAdQgZAegnAAQgUAAgIgMg");
	this.shape_67.setTransform(-19.2,-1.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AjXEeQgUgKAEgeIgRABQgjgOgSgUQgRgTABgkQgSgCgOgRQgSgSAAgZQAAgeAVgPQAWgPAuAAIB4AJQBKAAAFgSQAAgHgEgUQgGgZABgTQAAgXAJgOQAKgOASAAQATAAAQAIQAUAMADAbQAlg/BshRQBHg1AsgXQAqgWASgCQASgCAUANIgUAJQANASAKA8QAAASgSALQggAPgZARQhrBHh2DEQgYApgqAiQgpAjghATQghATgxAIQgUAEgNAAQgVAAgHgIg");
	this.shape_68.setTransform(-12.4,-3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AAHDOQgIgMgTgaQgNAIgWAIQgYAHgSAAQgrAAgagYQgXgWAAgfQAAhWCGh5QBehZBGgkIAZAjQAPAWANAdIAJAUIg+AqQA7A+AGAIQAQASABAPQAAATgRAQQgSASgCAMQgEASgOALQgKAIgJAAQABAIgDANQgHAagZAVQgKAIgSAFQgOAEgNAAQgIAAgNgOg");
	this.shape_69.setTransform(9.3,-9.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AAnDXQgRgegPgJQgVgOgUACQgvAHgGAAQg7AAgigeQgdgbAAglQAAgqAbgqQAjg4BThFQBCg4AagTQAlgcANAAIAHABIAAACIgEAGIgEAEQARAOAPARQAVAZAAAQQAAAFgPANQg5A0hNBJIANgFQAEgBAEAAIAZgRQAggQApAAQAqAAAiAdQAiAbAAAhQAAACgGAJQgFAIgBAPQABAFAEAKQADAKAAAFQAAAUgGALQgFAKgNAFIgggCQgWgBALAMQgBAXgIASQgQAhgiAAQgcAAgNgVg");
	this.shape_70.setTransform(10.7,-11.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("ACkCzQgbgYgtAAQgKAAgXANQgYANgGABQgdAGgZAEQgxAHg0AAQhrAAgygrQgigcAAglQAAg+BTheQBHhRBQg3QAJACAAAEQgCAGgLALQAQAHAWAOIANAJQACABAHgCQAIgBAGAIIh7CxQB3gIAagUQAUgLAagyQAigrAGgGQAZgTA2AAQBIAAAAA0QAAAcguATQAZgHArARQAyATAAAkQAAAVgYANQgbAOgngGQAMANAHALQAJARAAAVQABAegWAPQgPALgQgBQgNAAgbgWg");
	this.shape_71.setTransform(24.4,-16.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AjKDHQgYgDgagMIANgfIgPAeQgLgGgQgUQgVgaAAgUQAAg+BpiAQBVhqAXgOIAGADIADAGIgNAQQALADAVANQASAMAHAAQAFAAAAgFQgBgFAFAAQAKAAAAAMIhNCEQgVAhgFALIgCACIBLgSQAbgJAJgMQAEgGARgoQAVgpAQgTQApgvA2AGQAQAAAlAOQAlAOAPgBQAPgCAUAOQAVAOAAAfIgeBhQAAAKAJAVIAJAUQAAAagPAQQgNAPgSAAQgWAAgRgHQgagLgIgaQgJAThdApQhbAphOADQgxADgcAAIgagBg");
	this.shape_72.setTransform(24.9,-16.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AjcC5QgRgWAAg4QAAh7Cfi6QABAAAAABQAAAAABABQAAAAAAABQAAABAAAAQACAJATARQAXASADAFQAOgeAmgRQAbgLAUAAQARAAAXALQAGADATANQAPALAGAAQAFAAANgEQANgFAFAAQASAAAPAgQANAcAAAXQAAAagYAaIgYAVQAJA3gJATQgMAahbAbQgOAFgdASIg3AiQhQAuhHAAQgpAAgRgXgAg4gWQADgBAFgEIAHgGQAIgHgIgOg");
	this.shape_73.setTransform(25.3,-14.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AkEDXQgWgaAAg1QAAg6A7hbQAxhMCBibIAqAhQAjAcAPAFQgKAVgMASIgpA4IgJALQAbgaA0g5QAwgtAyAAQAkAAAPANQAHAGADAGQAEAAAIgEQAHgFAFAAQANAAANAHQAUALAAAYQAAARgGAJQgHAJhGBPQAOAMAEAYQAABDjHBcQhhAuhmAgQg3AAgZgeg");
	this.shape_74.setTransform(18.1,-11.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AkODyQAAhtA/hIQAigmAzgjQBpiGBxhsQByhtgFAmIAIAMQgFgBAAAIQAeAJASARQAlAgg1A8QgsAtgvAzQhbBjgSAtQA6gNAjATQAdARAAAdQAAArhMAtQhQAuhIgKQAJAyglAeQghAcg7AAQhUAAAAheg");
	this.shape_75.setTransform(-3.8,-2.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AkfFHQgLgHAAgKQAAgSAFgPQAHgVAOgEQgaAGgUgWQgRgUAAgUQAAgWAegaQAlghAvANQgCgCgCgFQgCgIgBgHQABgbASgXQAbgjA1AFIAqAOQBUiGB0hrQBXhRBcg1IAIABQgFAAgBAGQABAGgDAEQALALAGARIALAqQAFAQALAOQh8CGhLBlQhLBoAIAbQAhACATANQASALAAAUQAAAbgNAVQgRAbg0gOQgqgMgMgHQgDAEgMAGIgmAMQgIADgcADQgaADgKAJQgXASgcAQQgtAagdAAQgcAAgNgJg");
	this.shape_76.setTransform(-9.8,0);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AkDECQAAg+BTglIA5gWQAagKAAgIQAAgKgRggQgRggAAgdQAAhOCRiAQA6gxA4gjQA3giAWAAQAOAAABAFQACAQAGAKIAXAyQAFALAAADQAAAZgeAWQhNA4g9A5QA5AKAbAZQAbAZAAAwQAAA3gkAZQgSANgXAGQgWAWgsAwQgpAngpAAQgFAAgIgEQgIgFgFAAIgYARQgaAQgLAAQgFAAgKgEQgJgFgFAAQgHAAgRAQQgSAPgdAAQgyAAAAgzg");
	this.shape_77.setTransform(-2.5,-1.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("Ag2D4QgNgOgIgWQgGgTgTgMIgkgUQgvgYAAg6QAAhHBmhuQA1g6B1hpQgBAMAHAIIAGAJQAYATAWATQAsAogJAPQgCAEg6AwIhLBAQAsgBAiAdQAiAhAAAxQAAATgHAMQgCAFgOAOQgMAOgLAXQgIAVgGACIgjASQgHAFgGAFQgNAPgTANQgWARgMAAQgWAAgRgSg");
	this.shape_78.setTransform(9.7,-10.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("ABSDmQgSgQgKgfQgJgfgTgOQgTgOgZgRQgbgRg1gpQgcgZAAghQAAgsA6hEQAhgoBQheIgBAGQAFAGAcAXQAVASAAAJQAAAHgEANQgDALgDAFIANgCQgBAGgkAvQglAwgDALQgBABBIA/IAgDvQgcgMgRgOg");
	this.shape_79.setTransform(10.9,-9.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgtCPQhkg/AAg9QAAgtA8hZQA4hRALAAQARAAAQAYQATAZANAnQANgDAAABQgBAGgYAuQgZAvgJAMIBEAuQBEAuAJAIIgCACQgJACgQgCQAAAEgRBRQAKAFACACQgCACgiAAQgnAAhUg2g");
	this.shape_80.setTransform(17.8,-14.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AhQB1QgWgmAAggQAAgsA8hWQA2hRALAAQAXAAAVAqQAVAqAPACQAAAJgaAuQgYApgdA4IADgEQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAgBQADgBgFASQgjBAgCAOQgogBgcgvg");
	this.shape_81.setTransform(13.5,-17.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AAIECQgKgOAAgKQAAgLAJgTQAJgQALgKQAAgCgEgBIgBAAQhPgugwgcQhYg2AAgjQAAgQAhgwQAcgqAgglIBFhFQBShNABAAQAEAABDAtQAGAAACADIABAFIgBAAIAGAFQAEAEAAAGQAAAMhQBWQhKBTgbAWIBdAfIgHgDIArAPQAhALAkAYQAlAYgBBBQgCBCgvAZQgvAagzAAQgXAAgQgUg");
	this.shape_82.setTransform(12.6,-4.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_61}]}).to({state:[{t:this.shape_62}]},1).to({state:[]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.2,-32,42.5,56.8);


(lib.cup34rarml01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B3E4E6").s().p("AgHBRQgagLAAgDQAAgHAIgYIAJgZIgEgFQgEAFgMAUQgMATgDAGQgOgEAAgKQAAgQAEgNIANgdQgJAEgEAEQgFAGgLAPQAJg1AVgdQATgaAXADQAVACAQAbQAQAdAAAqQAAAIgIATQgHAPgFAIQAOgMAHAAQAGAAALAHQAMAIAAAHQAAARgWAGQgLADgOAAQgMAAgagNg");
	this.shape.setTransform(-19.2,10.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#526139").s().p("AgdADQgLgXgcgQIAlgLQAfgKAKAAQAmAAAOAlQAHASAAARQAAALgPAJIg5AXIgag3g");
	this.shape_1.setTransform(-11.5,3.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1F26").s().p("AhFAAQAIggAYgOQAOgJALAAQALAAAOALQAcATAdAqQgTgHgWAQQgRAPgGAPg");
	this.shape_2.setTransform(1.1,-16.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#758A51").s().p("AAECeQgKgigTgMIAFAAQAUgEAsgSIA/gXQgXAAgRgJQAIgTASgKQANgIAGAAQASAAAVATQAbAXAAAgQAAAMgJAKQgZAcg8AaQgfAOgoAOQABgNgKgcgAh7hoQgngegOgDQgFghASgYQALgGAPADQAcAFCHBxQgKAAgSAXQgVAWgCANQhEg8gegXg");
	this.shape_3.setTransform(-3.8,-15.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1F26").s().p("AgrAxIAGgHQAIgRAJgsQAAgKgCgKQgBgKBDABQAAA7gZAWQgTAQghAAIgKAAg");
	this.shape_4.setTransform(-7,-28.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#758A51").s().p("ACmA6QgmgKh9gFQAYgcADgQQAEgSgDgUQgDgUAJgEQAJgFBEAHQBDAGAcATQAcATgEAbQgFAdgKAPQgJAMgDAAQgIAAgggIgAjcA+QgigKA9gpQA8goBAgRQAHARAAAIQAAAhgRAUQgOAQgPAAQgNAAhgAPQgBgBAAAAQAAAAAAgBQgBAAAAAAQAAAAgBABg");
	this.shape_5.setTransform(-4.4,-27.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#526139").s().p("AghA1IgLgFQAKgJAIgSQAJgRgDgFQgDgGgCgSQgCgSgEgJQABAAABAAQABAAAAAAQABAAAAgBQAAAAAAgBQALgCAQAAQAOgBATAaQATAagKAPQgXAvghAAQgGAAgNgEg");
	this.shape_6.setTransform(22.5,-25.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B3E4E6").s().p("AgmB0QgkgWgUgIIAKgEQAcgDAQgfQALgVgGgUQgGgSgJgJQgKgJgegQQAPgLAYgmQAXgnANACQAMACAIANIgGADQgOAGgUAVQgTASAAADQAAAGACACIADABQAIAAAXgZQAdgZA1AAQADAhgdATQgmAbgHANIABAFQAEADADABQAPgDA4gWQAGAAAIAFQAJAFAAAHQAAAkg8ARIgoANQgTAIAAAHQAAAHAUAXQARAXgEAFIgEAFIgFABQgLAAgbgQg");
	this.shape_7.setTransform(32.3,-27.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B3E4E6").s().p("AATA3IgKhLIgQA4QgIAagYAAQgNgIgEgWQgDgVAJgpQgPAEAAABIgHAQQgHAMAIAxQgFACgKAAQgTAAgHgaQgGgUAAgmQAAgjAVgKQAIgFAfgDQBVgIAxASQArAQAAAcQAAAQghAVQghAYAAAKIAAAHIACACIAFAFQAGgBAPgLIARgLQAJABACAJIAAALQAAAKgVAMQgVALgUAAQgYAAgEggg");
	this.shape_8.setTransform(8.7,-15.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1D1F26").s().p("AgoAYQgEgNAAgHQAAgOALgNQAPgSAcAAIAjAAQgMAVgEAJQgGAMAAAKIACAWIg7AJIgGgSg");
	this.shape_9.setTransform(1,-29.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#758A51").s().p("ACYAFQgjgRAAgJQAAgGgDgCIgGgDQABAOgVAQQgVANhcgGQgBgqALgNQAMgNBAAAQBDAAAyAeQAyAeAAARQgBAUgZAfQgMgngmgVgAjGgwIBOgQQgRAfAIASQACATAFANIhmAdQgMgOAmhQg");
	this.shape_10.setTransform(8.2,-26.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#526139").s().p("AgCgPQgMgNgZgMQBOARAAAwQAAAGgPAGIgPAEQAKgkgVgUg");
	this.shape_11.setTransform(21.9,-21);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1D1F26").s().p("Ag1AHQACgVAPgNQANgLATAAIA6ApIgCACIgBAAIgfAIQgQALgRAPg");
	this.shape_12.setTransform(-0.2,-23.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B3E4E6").s().p("AArBcQgPgDgKgpQgKgqAAgZQgHAeAAA6IABABQgBABgFAAQgKAAgNgEIAAABQgJgJgJgQQgJgPgBgoIABgWIgHAXQgOAgAWAkQgXgDgQgjQgOgeAAglQAAgjBRgHQBQgHAYAYQAXAXAAAMQAAALgDAGIgGAJQgPAagPADQgJACAAAWQAAAHADADIAEAEQABgDAIgNQAJgNAOAEQANADABAPIAAAVQAAAGgbALQgRAGgNAAIgHAAg");
	this.shape_13.setTransform(-13.2,7.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#526139").s().p("AgLgKQgWgXgVgFIAEgBIAlgOQAbgNAdAwQAdAvgqAZIgIADQgBgeggglg");
	this.shape_14.setTransform(-3.1,-0.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#758A51").s().p("AgLB4QgQgogVgGQBggogIABQg5gqgXgTQgXgTBOgZQAEgHAWAUQAOAMAQARQAYAXAVAXQAWAagFARQgEASgjAgQgiAgg8AbQAAgTgLgfgAhyipIABAAIApAcQgXAKgPAMIgTAZQgNgmAcglg");
	this.shape_15.setTransform(4.1,-14.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B3E4E6").s().p("AACBnQgPgJAAgRQARgrANgnIgDgLIABAAIgHAAQgDAAgZAdQgbAfgKAAIgHAAIgDgDIgHgGIARgpIARgsIgGgEQgHgFgGgCQgKAJgHAOQgJASgKAlQgUABgFgKQgDgDABgGQgBgzAWgeQATgbAbAAQAmAABAAmQBMAuAAAuQAAAHglAPIg6AZIgBAAIABALIAogGIALAAQADAAAAAHQAAAUgNAGQgIAEgWAAQgXAAgOgHg");
	this.shape_16.setTransform(-12.9,-1.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#526139").s().p("AgfA3QgNgCgTgPQgTgOACgYQACgaADgLQADgMA7gFQA6gFAWAtQAWArgNAJQgMAJgqAFQgbAEgQAAIgKgBg");
	this.shape_17.setTransform(-3.1,-2.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#758A51").s().p("AAwCYQgFgXghgwQAugHAMgEQAbgJAAgVQAAgGgCABIgFABIgUALIgNAFQgKgDgUgMQgUgMALgUQAKgTAUgMQAUgLAXgDQAXgDArArQArAsgBAiQgvA7gwAOQgwAOgEAAIgCgNgAiqhdIgWgKQgNgoAdgKQAegJABgCQAPALArAVIAyAZIAIADQgMAFgUAWQgUAWgDALQhEgpgSgIg");
	this.shape_18.setTransform(1.7,-17.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1D1F26").s().p("AgyARQgRgMABgGQAAgJALgQQAKgRAhgEQAfgEAwAqQgaAAgtA5QgbgQgTgPg");
	this.shape_19.setTransform(1.8,-21.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#526139").s().p("AgGALQgVgYhKgYQAIguBhAVQBjAUgBAfQgBAcgXAUQgXAUgxANQgBgrgLgQg");
	this.shape_20.setTransform(21.2,1.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B3E4E6").s().p("ABKBtQg3AAgogbQghgVAAgNQAAgKAWgJQAXgJAZAAQAbAABCAOIAuAJIgMgLIgKgJIgCgBIgBgBIAAAAIgDAAQgTAAglgLQgkgKgJAAQhSAAgaAlQgagJgNgQQgSgTAAgPQAAgTANgIQAMgHAdAAQAxAAB7AtQB+ArAJAdQAIAegzAJQgzAJg2AAIAAAAgAi+gcQgggdAAgWQAAgZAagDQAagEAZAOQAaANAGAGIgJADQgNAEgNAQQgPARAAAPQACAKgFAAQgHAAgRgPgAgMhAIAMgIQALgGAJAAQAJAAAfARQAfARASAbg");
	this.shape_21.setTransform(-2.2,0.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#758A51").s().p("ADqCXQgagPgogKQgugMgaAAQgaAAgVAFQgNgigUgVQgKgLgogiQAIgEgIADQAigyAlgCQAlgCBiBPQBiBSgYAngAj6hbQAEggAIgWQAIgXAUAGIARAGQgogNA9AaIBLAjQgZAKggAwIhggpg");
	this.shape_22.setTransform(7.1,-18.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1D1F26").s().p("AgiAeIgrgZIARgaQASgZAagDIBeAvQgkALgVAZIgMAPIgBABQgIAAgigUg");
	this.shape_23.setTransform(1.5,-22.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1D1F26").s().p("AgyAPQAAgXAOgRQAHgKAPgPIBBAiIgTAcIgQAnIhCgkg");
	this.shape_24.setTransform(-4,-23.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B3E4E6").s().p("AgNCMIgPgEIgCgBIAPgzQACgcAFgPQAIgcAcgGQAIAWAAAOQAAAzgUAYQgRAWgKAAIgCAAgAhgB1QgJgJABgMQABgNAdgnQAcgogBgGIgRgSQgSgUAAgTQAAghAZgXQAagYAnAAQAZAAAPAfQAMAYAAAbQAAAWgPALQgQALgRgtQgOgtgCgQQgDAiAHAhQAJAfAOAJIgoAKQgZAEgGAGQAHAHAPACQgFAzgGAUQgLAfgUAEIgKABQgMAAgGgHgABQBnQgSgOgKguQgKgtAlgjQAeA/gFAiQgFAhgGAHQgEAFgEAAIgFgCg");
	this.shape_25.setTransform(27.2,10.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#526139").s().p("Ag2AwQgPgNgCggQgCgfA6gSQA5gSAeA1QgmgHgkAnQgcAegPAAQgFAAgEgDg");
	this.shape_26.setTransform(20.9,-4.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#758A51").s().p("AA+BZIhRhAQAAgNANgXQALgZAMgHQAJAEBcA8QBcA9AMAKQgfgFglAVQghASgHASIg0g3gAjUhEQgOgUAHgOQAGgSAGgJQAGgIASgGIBkAwQgIALgIAPQgOAbACAQIgBADg");
	this.shape_27.setTransform(0.9,-19.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B3E4E6").s().p("AiICCQgThBAAg8QAAgpAagVIAbgSQARgNANgPQARgVAVgnQAOgaAJAAQAWAAgBApQAAAqgnAUIAJADQAWAGBmARQA0AHAAASQAAASgPAJQgOAJgaAAQgRgBgogCQADgOgBgIQgZATgsAfIhIA1IALAFQAGgBAFAPQADAMAAALQAAAfgFANQgIAZgcAAQgJgBgQg7gAADCWQgSgVgUg9QAtg7ApBDQAOAWAKAgQAJAZAAAIQAAAMgSAAQgoAAgXgZg");
	this.shape_28.setTransform(53.1,9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#526139").s().p("Ag0AnQgKgHAAgBQAAgeAWgeQAYggAXAAQAFAAAZAOIAaAQQgRAEgXAcQgYAhAAAdQgigOgRgKg");
	this.shape_29.setTransform(35.4,1.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#596743").s().p("AAAACIAAgFIABAGg");
	this.shape_30.setTransform(-17.9,-22.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#758A51").s().p("AATBSQg5gjAAgGQAAgZAVgdQASgcAMAAQADAAArAYQBQAqB2A8QgeANgTAeQgJAPgNAiQhng3hAgogAj0hVQgGABgCADQgCAEgCABQAGg0ANgWQAHgMANgOQAuAdBNAuQgIAEgTAcQgVAegEAQIhig+g");
	this.shape_31.setTransform(7.5,-14.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#1D1F26").s().p("AhAASIAMghQAPgjAWgLIBQAuQgJAHgWAcQgYAggBAKg");
	this.shape_32.setTransform(1,-18.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B3E4E6").s().p("Ah7BVQhIg3AAgwQAAgVATgTIApgmIgCAPIAAAHIAEAAQANgkArgTQAegNAfAAQARAAADAMQgBALgsBEICWAEQA2AFAOAdIiFgPQglgEgtgBQgEABgCACQAkAPAvAJIBOAKQBPAMAAAuQAAAJgQADQgLACgbAAQhHAAglgHQgugJg1gdIgKgCQAhApA+AQQAvAMBXACQgLAZghAKQgbAIgwAAQhRAAhNg6g");
	this.shape_33.setTransform(21.6,4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#526139").s().p("Ag3AIQACgLAOgMQAcgYA3ABQAAABAMADQgmARgSANQgdARgQAaQgKgWAAgJg");
	this.shape_34.setTransform(6.7,-6.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#1D1F26").s().p("AgvAYQAAghARgVQAQgTAUAAQAEAAARAJQASAJADAEQgeAGgSAcQgGANgLAeQgegQAAgKg");
	this.shape_35.setTransform(-6.4,-23.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#758A51").s().p("AAABHIgVgbQAAghAbgXQAYgVAVAAQAKAAAoAoQArAsAWAmQgfgHguAWQgmATgJAPQgSgigYghgAilg2IA/hTIBLA1QgTADgsBFIhLgqg");
	this.shape_36.setTransform(-4.5,-21.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#B3E4E6").s().p("AgVBtQgLgLAAgRQgCgTASgZQAQgZAVgNIgBgEIgGgDQgfAUgSARQgJAIgMAAQgUAAgEgVQAAgVAGgRQANgjAjgBIgKgKQgDgCgFAAQgHAAgOAPQgRATgOAjQgMgHgGgLQgFgHgBgEQAAgSAggoQAfgoAQAAQAoAAA+BIQA8BBgBAbQAAAcgSADIhaAQIgDAJIAcAEQASAEAHAGQAAAMgHAFQgGAGgLAAQgpAAgSgUg");
	this.shape_37.setTransform(-29.4,-3.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#1D1F26").s().p("AgnATQgQgTgMgEQADgRAOgOQAPgPAQAAQAVAAAWAQQAUAPAYAgQgDgDgKAAQgXAAgXAPQgQAMgJAOQgJgQgOgQg");
	this.shape_38.setTransform(-8.1,-18.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#526139").s().p("AgKA1IAEgjIADgTQAAgGgKgRIgSgdQAfgGARAfQAPAZAAAYQAAASgEAGQgFAKgRAAQgIAAgIgCg");
	this.shape_39.setTransform(-13.4,-1.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#758A51").s().p("AAFC7QAIgXAAgSIgTg4QAIAEAKAAQAbAAAWgKQAPgHAJgJIgBgCQADAAgJAAQgGAAgKAEQgLADgFAAQgGAAgMgKQgRgOAAgTQAAgMAOgNQATgQAdAAQAeAAAdAtQAZAqAAAfQAAAigcAWQghAZg9AAIgegBgAhnhcQgngmgOgLQAHgJAQgLQAVgOARADIAAgPQAJALAjAfIAzAtQgNABg1ArIglgkgAhfi7IAAAAIAAAAg");
	this.shape_40.setTransform(-9.6,-15);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B3E4E6").s().p("AgVBtQgLgLAAgRQgEgSASgaQARgaAKgIQAMgGAAgCQAAgDgHAAIgHAAIgFADQgJADgXAfQgWAhgJgCQgKgDgKgKQgKgLAEgUQADgQAYgcQAZgcABgLIgCgBQgBgCgHAAQgHAAgOAPQgRATgOAjQgMgHgGgLQgFgHgBgEQAAgSAggoQAfgoAQAAQApANAbAbIBMBMQARAUAAAcQAAAcgSADIhaAQIgDAJIAcAEQASAEAHAGQAAAMgHAFQgGAGgLAAQgpAAgSgUg");
	this.shape_41.setTransform(-29.4,-3.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#758A51").s().p("AACgbQAaAAAVAKIAKAFQgTgFgmAOQglAOgXARQACg3A6AAg");
	this.shape_42.setTransform(-4.5,-48.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#526139").s().p("AA7AKQgegWgggBQgMABgVADQgXAEgKAFIgNADQAmgcAQgGQALgEAiAAQAhAAAUAgIANAfIgBAIIgXgag");
	this.shape_43.setTransform(-1.3,-43.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#B3E4E6").s().p("AieDUQgOgQAAgcQAAghArhIQAVgkAWgdIABgBIgGgBQhJBJgSAuIgDAKIgCgOQAAh1BthvQBShWAigEIgDgBQBdghAcAgQAcAfADAVQADAUgNAZQgPAagoA5Qg/BXg+BwQgPAZgIAGQgIAHgTAAQgTAAAAgtQAAgkAphAQANgWAggrIgCgFQhiBAgLBfIgGA1QgGAVgaAAQgNAAgKgOg");
	this.shape_44.setTransform(-13.7,-19.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#B3E4E6").s().p("AAGB1QgogXgmgrQgJALghAAQguAAgWgKQgVgKgEgdQgDgcAsADQArACAhAHQAgAFAGAAIAegLQAbAAAUANQAKAHAUAYQAkAuA3AAQADAAABAAQACAAAAAAQABAAgBAAQAAAAgBAAIABgBQgmgUgdgaQgcgZADgNQAEgOAQgNQAPgMApABQAoABAQAOQAQAPAAAaQAAA5grAkQgnAggnAAIgBAAQgoAAgogWgAhqglQgggaAAgfQAAgMARgPQAVgRAcAAQAQAAAQAIQAKAFAPAMQgTAKgHAJQgHAJAAATIAFARIAHAWQAAABgNAEQgOAFgHAAQgLAAgZgUgAgCgaQgVgKAAgMQAAgdAWgOQAPgMAWgDQAVgDAoALQAnALANAVQg/gIgcAbIgSAUQgKAJgNAAIgTgIg");
	this.shape_45.setTransform(43.7,-79.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#526139").s().p("AgxAaQgegZAAgSQAAgEAEgGIASgcQAOAYAyAVQAwAQAWgFQADgCAAAIQAAAIgKASQgKAUgFABQgKACgLAAQguAAglgeg");
	this.shape_46.setTransform(44.4,-63.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#758A51").s().p("AlKBmQAUgOAxgMIBfgXQAIgDANAcIAgBFQhNAohdAQIgvAIgAghgFQA+gbBKhCQBKhCAQguQAdArAiATQAjASASABQARAAAFgCQh9CEgsAXQhsBCgyAIQAAgRglhWg");
	this.shape_47.setTransform(15.7,-41.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#1D1F26").s().p("AgcA2QgOgUgPhDIBOgiQAYA1AJAfIAEAXIAAAAQgLAAgcAMIgkAQQgBgHgKgHg");
	this.shape_48.setTransform(8,-34.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#758A51").s().p("AmlD6QAAggAygqQA4gvBsgvQAiArAAAbQAAAfhTArQhRApgzAAQghAAAAgRgAg3BpQAKg9g1gZQA1gVDEiIQC6iAAHAAQAhAAAXAZQAWAYAAAgQAAANjBB1QiBBMieBcg");
	this.shape_49.setTransform(19.9,-46.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#526139").s().p("AgFgDQgUgbgigKQAPgJAAgFIAhgBIAQAJQAYAJARAbQANATAAAOQABANgQAFQgPAEgDALQgQgpgPgSg");
	this.shape_50.setTransform(61.9,-71.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#B3E4E6").s().p("AgzBYQgNgdgNgMQgRgRghgEQgbgDAAgHQAAgFACgCQABgBgOgEQgNgEgkgSQgkgSgLgJQgLgIgDgRQgCgSAVgQQAVgQAjAAQAjABAPATQAPATAGAjQAFAjAFAPQALgDAHgGQAGgJgBgKQAAgJgBgCIAFgDQAGgEA0gGQAdAAAYAQQAaAPAGARIgPAdQAAABAAAAQABABAAABQAAAAAAAAQABABAAAAIACAAIAjgdQArgYBBAAQAtAAAWAYQARAUAAAbQAAAXgUAHQgKAEgUAAQgSAAgvgIIhNgOIhzA6QgCgLgJgWgADkgiQgdgKgSAAQgmAAghAMIglARQgCgOgpgVQgkgTgRgBQAYgRAfgIQAagHAVAAQAKAAAVAFQgHABgaAQQgbARgGAIIAHAHQAGgIArgRQAqgRApAEQApAFAeATQAWAOAAAPQAAALgJAMQgJgNgegLg");
	this.shape_51.setTransform(74.4,-81.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#1D1F26").s().p("AgNA9QgJgagmg0IBMgsQAYACALAVQAKAUAAAmQAAAOgVALQgQAJghAIg");
	this.shape_52.setTransform(6.2,-37.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#1D1F26").s().p("AgOA+IABgBIgLggQgMgagWgQQAQgJAdgWQAWgSAHAAQAYAAAOAeQACALACAVQACAUgBACQgGAHgcAQQgaASgHAAQgGAAAAgBg");
	this.shape_53.setTransform(6.3,-40.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#526139").s().p("AgKgKQgcgagUgBQAUgfAwAbQAyAagBAmIgBAXQgNACgUAHQgFglgegcg");
	this.shape_54.setTransform(62.1,-75);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#758A51").s().p("AmgERIgBgEQgBgFgBgGQAAggAwgsQA3g0Bpg0QAeAYAAApQgBAkgVAOQhOA1gvASQgaAKgbAAgAhBAtQgKgWgegOICihmQCfhlAjgZQBJhOA2AjQATAMAMAYQALAUgBAOQAAAQniETQAIghgKgVg");
	this.shape_55.setTransform(20.5,-49.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#B3E4E6").s().p("ACLCkQhCg6gtgjQARgDAkgMQAEAAA8A2QA2AqADALQgFAKAEANQgNADgHAAQgOAAgcgZgAAQCNQgEgIgSgaQgWgcgIgFQArAMAhAUQAkAXAOAcQgIAJgOAIQgMAHgFAAQgRAAgSgogAC+BvQgngfg4gfQAJgFACgGQhfAQgVAAQgfAAgLgIQgFgEgHgRQgPgmhOgYQAQgbBKgUQBOAAAWAPIAkAVQAaAPAAAHQAAAGBUAIQBUASAABGQAAAcgPAPQgLAKgNAAQgMAAgWgSgAjkhwQgigaAAgUQAAgKANgJQAPgLAWAAQApAAATASQAQAQAAAiQAAAYgKAHQgQAJgMAJQgNgNgpgcg");
	this.shape_56.setTransform(76.5,-78.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#B3E4E6").s().p("Aj6C4QgugkAAhDQAAhEAkg0QAhgxAeAAQAfAAAAAmQAAAGgSAgQgXAlgMAwIAFACQAshVA8g+QBYhaBpgSQhEAYgrBBQggAxgBAZQAAANAIAHQAchHBghGQBlhKBXAAQAUAAAIAEQAKAEAAAKQAAAZgTAJQgJAEgsAJQhSAOg8BAQgtAwAAAVQAAAEABAAIAEgBQAGgBAXgTIAyguQBOhCBCAAQAGAAAAABIgBABQAAAyhSBEQhoBMguAnQg9A4gYAPQg5Akg9AAQgxAAglgdg");
	this.shape_57.setTransform(54.9,-63.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#526139").s().p("AgwAhQgpgUgFgYIAQgoQAyAsAyAHQAmAFAjgLQgXApgJAIQgJAJgUAAQgrAAgngTg");
	this.shape_58.setTransform(34.4,-39.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#1D1F26").s().p("AgdA3QgNgSAAg0QAAgXAKgMQARgSArABQgFgCAFgBIAEgBQgGALgIAcIgJAbQAAAEAOAgQAPAiAFAHIgVABQglgBgOgRg");
	this.shape_59.setTransform(6.5,-19.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#758A51").s().p("AgnBhQgQgiAAgTQAAguA1giQBBgtAXgvQAuA8BWAAQARABAPgFQhaBygxAnQg9AwhIAAQgDAAgOgggAjkAwQgVgZAAgTQAAgUAIgOIAVgcQAEAIALAIQAWARA2ARQghA/AdA2Qg/gXgggmg");
	this.shape_60.setTransform(14.9,-25.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#1D1F26").s().p("AgpAgIAcgfQAXgaAEgJIAcAiIhSAjg");
	this.shape_61.setTransform(2.6,-19.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#758A51").s().p("AgdAyQAIgWAAgcQAAgEgDgIIgFgPQAOAIAVgHQARgFAJgGIgEAAQgEgBgagJQgfgJgOgHQApgeAfAAQAMAAAOARQAUAXAAArQAAA5gnAZQggAThGADQAcgLANghg");
	this.shape_62.setTransform(5.1,-8.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#526139").s().p("AgeA9QgQgEgGgDQATgLAbgvQAVgpAFgVQAUAIAHAKQAGAJAAAUQAAAggSAaQgSAcgYAAQgFAAgSgGg");
	this.shape_63.setTransform(-5.1,-6.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#B3E4E6").s().p("AidDSQgpglAAhBQgBhKAWhCQAbhUArAMQgLAagaAsIgXAmIABAyQACgCAUgiIAfg3QAjhSBFhBQA2gyAagEIAHABQgtAhgRAPQghAdgTAdQhhCNAAA9IAAAgIACABQAKgDAcg3QAshXARgcQBeilBiAAQAnAAAAAfQAAAEgMAcQgPAfgGAAQgGAAgTgFIgUgGQhBAAg4BFQg1BCglBxIAGAFIADgBQAog1AzhlQAvhOBCAAQAQAAAJAJQAJAHAAANQAAAMgeAeQgyAzg0BLQgnA6ghBMQgSAngWAAQglAAghgdg");
	this.shape_64.setTransform(-4.3,-27.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#B3E4E6").s().p("AggB/QgfgKgHgGQAZAGAIgEQAFgDAAgIIgBgHIgBAAIg+gLQgFgDAAgnQAAgKAJgJQALgLATAAQARAAAYAOQAHADARASQARAOAFAAQAHAAACgCIABgDQgQgkgrgUQgkgPgWACIgBgDQANgVARgSQAQgPAFAAQAVAABMA1IACgCIABgLQgRgdgdgQQgWgMgngJIAHgFIAggXQAPgLARAAQAeAAAeAbQAiAdAAAoQAAAhgQAEQgQACAAAMQAAAagJATQgJAVgVAXQgSAegoAFIgdgJgAh2gjQgHgOAAgGQAAgfATgWQAOgQAGAAQAYALALAIIgdAoQgdAlgCAFg");
	this.shape_65.setTransform(-24.6,-18.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#526139").s().p("Ag7AgQAkgXAMgJQARgQAgglQAcAVgJAWQgCAJgbAaQgJAJgTAKQgVAKgQAAQgKAAgMgWg");
	this.shape_66.setTransform(-17.5,-5.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#758A51").s().p("AgfC1Qg4gdgggiIAKAAQBLgLAKhJQAmAmAfATQAgATAPgGIgBAAQgNgEgjglQgigkgEgPIAZgHQARgEAHAAQAfAAAIAXIAWA7QADAPACAUQABAUgCAGQgNAkgRAMQgRAOglAAQgUAAgugZgAgXiBQAGgdgqgiQAhAIgNgVIAtBJIAbAoQgMgHgYAHIgeAJIAKgug");
	this.shape_67.setTransform(-7.2,-9.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#1D1F26").s().p("AAjAcIgUgEQgFAAgOAFQgQAFgFAAIgLgMIgXgbQA7gjARAHQAUAGAXA+IgZgHg");
	this.shape_68.setTransform(-5.2,-14.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#B3E4E6").s().p("AgnB+QgdgLgIgFIAEAAQAdAHAHgHIACgJIgCgHIg+gLQgFgDAAgnQAAgKAJgJQALgLATAAQARAAAYAOQAHADARASQARAOAFAAQAHAAACgCIABgCQgQglgrgTQgkgQgWACIgBgCQANgVARgTQAQgPAFAAQAVAABMA2IACgDIABgLQgRgdgdgQQgUgMgpgJIAHgFIAigXQANgLARAAQAYAAAeAWQAoAcAAAtQAAAagQAJQgQAGAAALQAAAugPATQgIAMgWAQIAGgDQgDAHgVAQQgcANgFAAQgHAAgcgLgAhxhnQAKgQAPgGQAYALALAJIgdAnQgdAlgCAFQgVgvAVggg");
	this.shape_69.setTransform(-24.4,-18.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#758A51").s().p("AhdAAIAKAAQBMgLAIhKIAGAHQAYAZAVAMIAbAMQAPAIAABFIgBAkIggABQhpgzgxgig");
	this.shape_70.setTransform(-9.9,2.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#B3E4E6").s().p("AghCRQgYgTABgKQAAgZAagSQASgOBTgrIgIgGQgGgEgMAAQgXAAggANQgvAUgWAiQgdgwAAgYQAAgzBLgGQAkgDAuAGIABgBQABgBAAgHQAAgMgXgGQgOgDgPAAQggAAgjAJQgnAKgOAPQAHgXAmgeQATgPARgMQAAgGAGABIAOACQBhAAA4BUQAoA5AAArQAAAqgjATQgfAQgtgFQgLAAgJAFIAMAMIANALQgWAQgaAAQgZAAgbgXgAikhUQgIgOAAgKQAAgZAVgTQASgOARAAQAaAIATAQQgVAPgSAQQgkAeAAARQgJgHgJgNg");
	this.shape_71.setTransform(11.1,-25.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#1D1F26").s().p("Ag3ATQAIgeAcgaQATgTAGAAQAnAaALAFQgNAIgSARQgZAcgJAdg");
	this.shape_72.setTransform(-4.9,-10.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#758A51").s().p("AhFBXQALgjAggkIAAARIAAABQAAACAGgBQADAAAFgDQAHgHAFgKQAOAXAhAQQAeAPAYAAQAjAAATgKQAVgLgDgRIAWgDQgPA2ghAZQgfAYg3AAQhMAAg2gsgAiiAMQgBgBAAgGQAAgDgPgLQgQgTAAgpQAAgKAIgUQALgXALgIQAAAVBHA1QgNAHgOAMQgbAXgJAeIgGgEg");
	this.shape_73.setTransform(3,-12.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#B3E4E6").s().p("AgdBjQgngjgXg6QgPglgogGQgTgBgHgCQgKgDAAgKQAAgSAKgMQALgMAQAAQArAAAaAvQAMAXAGAJQALAOAMAAQAEAAAQAWQAPAZAEACQAOAKAhARQAfAQAEAAQAYAAAVgRQAVgRAAgTQAAgEgJgFQgPALgVATQgEAFgLAAQgJAAgJgFQgLgHAAgLQAAgeATgQQARgQAZAAQANAAAVAHQAZAIAAAJQAAA1glAnQgnAog2AAQgtAAglgjgAAUg8QASgQAbgNQAXgLAKgBQAKgBAbAcQAcAcgNABIgFAAQhngPgKBZQg/gpAzgwgAgngoQgGgHAAgMQAAghAtgbQAugcAXAeQgvAbgGAFQgaAVgMAlQgOgJgDgEg");
	this.shape_74.setTransform(34.4,-33.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#1D1F26").s().p("Ag8AFQAAgPAPgWQATgbAZgBQABABAVARIAoAeQgaAIgQARQgOAQgGAgQg7gtAAgLg");
	this.shape_75.setTransform(1.7,-14.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#758A51").s().p("AglB8QgbgWAdggQAagdATAAQAKAAAXASQgaAhgEAJQAFADAJAAQAPAAAkgiQAhggAigqIALAIQADgBAXAUQgGgIAMAIIAMAGQA2AWADAAQhiB1hFAAQhagPglgdgAj/hFQgBgQAIgyQAJgyAoAbIBtB8QgYANgvAyg");
	this.shape_76.setTransform(8.8,-18.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#526139").s().p("AgPAYQg6gcAGgRQAFgRAOgKIABACQgCAAAGAJQAGAJAGAAIAlAXQAqAWAUADIgEAGIACgBIgRARQgCgBgDAGQAAABAAAAQAAAAgBAAQAAAAAAABQgBAAgBAAQgKAAgugZg");
	this.shape_77.setTransform(31.7,-19.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#B3E4E6").s().p("AgmBjQgqghgNg7QgJgjgpgPIgagJQgMgFAAgIQABgTALgLQALgKAQAAQAlAAAQAWIAdA5QACAFATALQAKAFAHAPIAHASQAdAdBBAiQAiAAAUgTQARgPAAgTQAAgGgCAAIgHAAQgFACgYAQIgZAOQgJABgIgGQgKgHAAgLQAAgeAVgPQASgPAZAAQANAAAVAJQAYAKAAAIQgBAlgfApQglAwgzAAQg7AAgpgjgAAEAIQgGgIAAgCQAAgiAlghQAjgdAcAAQAJAAATAVQAUAWAEAOIgDAAQg0gHgZALQghAPgHAxQgQgHgKgMgAgfgjIgEgBQgIgLAAgKQABgiAfgWQAZgUAgAAQAQAAAEAFQADAGAFAGQglAJggAjQgYAbgCAOIgKgEg");
	this.shape_78.setTransform(35,-32.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#526139").s().p("AAxAqQgjACglgYQgmgWAAgYQAAgLAMgLIABACQADAIAGAGQAEAFACAAIAeATQAhAVAgAOIgPAWIACgHg");
	this.shape_79.setTransform(31.7,-18.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#1D1F26").s().p("AgyAYQgLgIABgFQAAgPATgbQAWgdATAAIA+AwQg0ANgMA8Igwglg");
	this.shape_80.setTransform(1.5,-14);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#758A51").s().p("Ag3BrQAAgVAPgTQAUgXAdAAQANAAAUANQgUAXgKATQAEADAKAAQARAAAjgnQA0g6APgKQACADAWAQIAVASQAAAGAGAAIAFAAIgEABIAcAHQAXAGAIAAQAAAEAGADQgnAkgbAVQhDAzgnAAQiRgkAAgYgAj/hKQgLgbAKglQAJglAyANIBrB9QgXANgxAyg");
	this.shape_81.setTransform(8.7,-17.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#526139").s().p("AgiATQgggTABgVIAGgQIABAHIABgNIAaAcQAJAJAsAOQAXAIAVAGQACANgJAGIgJADQgyAAgigZgAg5grIAAACIgBABg");
	this.shape_82.setTransform(21,-15.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#1D1F26").s().p("Ag+AOQAKgOAQghQASgaAcgBIA1AnQgOAEgaAeQgYAfgFARg");
	this.shape_83.setTransform(-2.6,-13.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#758A51").s().p("AAnCGQg8gVAAgiQAAgJAUgaQAUgcAUgKIASAKQgdAdgGAIQACAIAGACQAGACAOgPQAOgPAugmQApBDBHABQgmAwgZARQgZARggAAQgfgDgggKgAihgWQgighgSgcQgSgbAVgHQAAADAIgSQAIgRATADQATAEAZgDQACAEAlAnQAlAmAFAFQgfAPgOAMQgWATgIAZIgkgig");
	this.shape_84.setTransform(1.8,-14.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#B3E4E6").s().p("AgoB/QgrgggPhTQgJgugjgBQgQABgGgBQgJgCAAgNQAAgUAPgNQAQgPAbAAQANAAAKAKQAKALALAYQAKAXAQAQIAOAOQAAAWAFALQAGAQASAGIAOAFQAKAFAJAMQAHAKAHAFQAGAFACAAQAcAAAcgWQAcgWAAgVQAAgKgCAEIgFAAIgeAUQgdAVgDAAQgmAAAdgxQAdgvAiAAQAaAAAPALQALAIAAAIQAAAegsA3QgyBAgzAAQgrAAgagUgAgBARQgFgIAAgJQAAgVAoguQAtguAegBQAQAAAOAQQAPAQAAAPIgCAOQhMADggAfQgUASgEAhQgPgCgGgNgAgbggQgGgEgDAAIgBgQQAAghAkgeQAkgfAuAAQAKAAgGAJIAMgBQgiATgpAnQgkAkgHARIgGgFg");
	this.shape_85.setTransform(25.3,-30.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#758A51").s().p("AABAMQAHgPgBgGQgHgxgMgZQAPAQAHAMQANAVAAAqQAAANgKARIgVAkIgOAKIAXhIg");
	this.shape_86.setTransform(9.7,-10.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#526139").s().p("AgkBIIgPgCIAJgBQAfgHAdgtQAigvgHgrQARArgaAzQgZA1ggAAIgPgCg");
	this.shape_87.setTransform(3.4,-7.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#B3E4E6").s().p("AhCBeQAAgiALgWQANgZAogoIAKgNQgIAEgNADQgOAGgdAfQgKAMgMAcQgNAcgKAKQghgKAAggQAAgzBChHIALgMQgdgEgaAfQgbAggSBCQgGgEgEgGQgFgJAAgHQAAg8BBgtQBAgtBQAAQA/AAAoArQAhAjAAAnQAAAVgHAdQgNA0gbAPIgGgUQgEgNgCgEQgHgQgvAAQgHAAgMAPIACAKQAYgCAPAHQAMAGAAAIQAAAYgaAUQgbAWgjgBQhHAAgBgzg");
	this.shape_88.setTransform(-11.2,-14.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#1D1F26").s().p("AgoAsQARglAVg+IArAbQgPAagGALQgJAWgCAZg");
	this.shape_89.setTransform(1.5,-25.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#758A51").s().p("AhdB1IAhhPIBEApQAEgBACgDQgQgVg5guQA7gfAAg5QAAgSgJgcQAmARAiA7QAfAzAAAmQAAApgcAXQgdAYg0AAQgMAAhCgKg");
	this.shape_90.setTransform(13.4,-31.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#526139").s().p("AgsBMQARhHAGgRQAAgIgPhBQAqgDAWAnQARAagBAYQABAYgXAeQgTAbgMAFg");
	this.shape_91.setTransform(6.4,-40.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#B3E4E6").s().p("AgWDTQgGgJAAgMQAAgOBxjUQgcAGgvBFQguBIgQBCIABABIgCAEQgOgEgNgOQgQgQAAgTQAAgmATgpQALgYAwhSIANgPQgZgGguA/QgvA/AIAqIgEABIgNABQgDAAgJgMQgKgOAAgQQAAhKBMhiQAbghAXgVQAXgUAXgJQgSAOAYgQQAagMAnAAQAmAAARAeQALAVAAAhQgUBbgfBWQg+CwgyAAQgIAAgGgIg");
	this.shape_92.setTransform(-14.3,-28.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#758A51").s().p("ABeDWQgKgCgMgNIgVgVQgfgWgMgFQgKgGgygPIgYAxQAIgFAKgMIgPASIgOATIgCgCIgBgHIAEgWIAQgqQgmgBgTgFQAEAmgIAPIgCABIgEAAQgHAAgCgDQgGgIAAghQAAgaALgXQANgZAVAAIgQArQAlAFAUgBQAGAAAFgBIgjgRIgHgEQAiAJAGAAQAHAAACgBIACgCIAAgBIAFgIQABgBAOAHIgIAPIAAAAIAYAJIAgAPQAZALAtA4QAmAyAHARgABzCfIADAHIADANIg4g6IhPgzIhlghQANgJASgcQAJgQAGgPQARgTAMgWQAHgPABgFQABgDgHAIIgDACIgHAHQgWAfggAvQgXAhgEADIABgDIgqgRIgDAIQgCAIgGAEIgGACIADgJIAHgQIgJgCQgKgEgRgMQADgDAGgCIAWADIAKACIAEgCIABgCIgBgDIgIgCIgBgBIgngNQAAgKAGgHQAEgGAHgBIACAAIArgJIgFAAQgGgBgEgIIALgCQALAAAFgBQAIgCAEgJIgxgWQAAgEAEgDQAFgCAGgBIAbAHQAPAEAFAAQAHAAAIgOQAIgNAAgJIgLgMIgNgPIgEAJIgWgPIAGgIQAFgJAOAEQARAFALAGIATAJIAHgHIgmgNIAAAAIgBgDIATgFQAFACAVAPIAZATIgSgJIgGgDIgEAGQABAEAHAEIAMAIIAWALIAEgEQARAIAAAKQAAAGAJAHQAPAOAIAJQAYAdAgAzQAJANAeA7IAdA6IAAABQAGAPAHAxQAGAqAAAGQAAAHgDAGQgDAEgCABIg1hegAhXAOIANAEQARAGAdAOIgOgMQgWgNgMAAIgLABgAiigDIAZAEQAKACAGAAQAHAAABgBIABgCQgfgFgMAAQgGAAgBACgAATgkIgTgaQgKgNgSgIIAvAvgAgQg+IAQAMIgdggQgDAGAQAOgAiAhGIAmAQIAJgBIAGgFIgvgUgAhrhmIAwARIAKgNQgYgOgBgEQANAJAGACIAKABIgogdgAC6CWQgOgzgVgtQgWg2gdgrQgNgTgdgjIhNhQIAHAEQAJAFAGgBIAFgCIAZgcIAQgMIgrgtQAHAEAYASQAUAPACAAQAMAAAOgGIAZgMIACAAIABAGQAAAJgHAIQgKALgTADIA8BZIA4gVQANgFAJACIANADIgCABIhSAiQAQAnAOAqQATAyAHAeQAEARAAAKQAEAtAAAgQAAAIgCAIQgCAJgDACQgDgFgMgogABrhHQAdAnAMAZQASAhAPA3QAAgEgLg6QgHgcgMgdIgagvgAAYiXIAjAcIAoAqIABgHQgCgIgRgfQgTgjgNgRgAjMCOIgBgbQgQAAgGgEIAEgDIAJgBQAFAAAEgCQADgCAAgEQABgDACgPQAEgPAMgKIgKAsIAsgCQgGAUgHAAQgYAAgIgCIgBAAIgGAogAjIhzIgCgJQAHgEAJgBIAEAAIgOAHQgEACANAAQgHAGgEAAIgCgBgAiqi5IAAgCQADgGATgBIgHAOQgMgCgDgDg");
	this.shape_93.setTransform(-6.4,-75.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#B3E4E6").s().p("AiOE1QgEgJAAgGIABgVIgIAcIgDAEIAAAAQAZh4AoiKQAdhkAQgoIhxD7IgPAmQgBADgIAFIgCgFQAEgyAohYIgJAgIgbBcQB9kqAshRQAZgzArg7QgTAkg9CcIgVA0IgoBkIgHASIAQgbIAohYIAWg1IAihUIABgBIAdgDIAmAAIgXAlQgWAkACgFIgaAwQgoBVg2CBIgXBFQgPAzgTBJQgJgHgFgJgAABhXIgXA4IAGgJIASgyIACgEIgDAHgAhNEUQgCgBAAgGQAAgWAwg2QgLAhgPAcQgKASgFAFIgFgBgAguCsQAZg/A2h2QA0hvAKgPIANgOQhJB1g1CeQAUgmAfhFIAWgyIgfBTQgmBjgwA4QANgoADAFgAAkg5IAshYIgPAiIgIATIAAAAQAFgDAEgFQgpBPgjBOQAWhAAYgygABMh5IAJgWIADABIgNAZIABgEgAB/i+IAAAAIADABIgNAWQgCADgLAHgABpi1IAFgJIAJgCQgIARgIAJIgKAIgABFkTQAZgqANgHIADALQgBAFgKAVQgKAXgIALQADgBAIgIIAIgIQAXgfAHAAQAHABAMgRIAEADIABABQgBAfgbAkIgKAMIgCACIgGAFQgHAFgKAEIgIADIADgHIABgCIgDADQgCAGgPABQgRACgHAEIgRAIQAWgqAVghgACEjaQAKgRAjgrQADAAADAFQADAEAAAHQgEAFgWATQgXAVgIAJg");
	this.shape_94.setTransform(-35.3,-80);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#526139").s().p("AjvEQQAOgbALghQgIAcgHAQQgLAdgPALQAFgFALgTgAA1DAQAyAPAMAGQAMAFAfAWQgLgGhegqgAjDDjQgCgGAAgMIAHgMIANgUIgEASQgFAUgEAJIgEAEgAiYg+QAeg8AjgvIARgHIgWAkIAFgFIAMgRIgNAWIALgIQAIgJAHgQIAJACIgXAgQAKgGACgEIANgVQAIABAUAJQgoBMhACAQg2BvgEAGIAchaIAghUIgWAyQggBGgVAlQA3idBIh2IgNAPQgKAOg0BuQg4B3gYA/QgEgEgMAnQAkivA4hwgAiRgmQgYAwgXBBQAlhOAphOIAJgSIANgZIgEgBQgGAGgNAbIAPgiIgtBYgAhfg+IACAJQACADALgIQgNAAAEgCIAOgHIgEAAQgJABgHAEgAg/h9IAAACQADADAMACIAHgOQgTABgDAGgAheh/IADgHIgHAAgAiQDDQAPguAMgNIAIgHIgTAzIgPAagABfCqIgYgJQAGAAAYALIAdANIgjgPgADrB+Qgeg7gJgPQAhA0AJAPQAGANAUA0Igdg6gABPCSIABABIgJAOgAAEB2QApAOATAIIgFAIgAEZAsQgOgqgQglQAZAoALAhQALAhAJA3QgHgegTg0gADOAYQgLgSgegpQAdAjANARQAdAsAWA3Qgfg7gVghgAhqBHIgMgFQACgCgBgFQADgGARgDIgMgSIAnANIgBAAIgFABIgDACQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABIAEACIgWgDQgGACgDADQARAOAKAEIAJACIgGAQIADgJIgTARQgQAOgPACgAlDBQIACgGIgLAlgAAfBQIgNgEIALgBQAMAAAWANIAOAMQgdgOgRgGgAgoBeQgSgEgHgEIACgIIAqARIgBADIgSgEgAgeA/IgZgGIAmAHIgigIIgEABQACgGAwALIgBACQgBABgHAAQgGAAgKgCgAg3A5gAA7gEQAOgXAAgDQgBAGgHAOQgMAUgRATQAJgLAOgWgABNgVQASAIALANIAUAYIgxgtgABZAAQgQgOADgGIAeAegAhhAGIAZgyIAxAWQgEAJgIACQgFABgLAAIgLACQAEAIAGAAIAFAAIgrAIIgCAAIgFgCgAgVgIIAGgKIAtASIgGAFIgJABIgkgOgACmg9IATASIgXgbIAEAJIgjgcIAZgcQANARATAjQARAfACAIIgBAHgABDgZQAHgIgBADIgJAHIADgCgAAAgoIAUgfIAoAdIgKgBQgGgCgMgJQABAEAXAOIgKANgABJgeIAAAAIAAAAgAD7gjIBSgiQgVAKgfAMIgeAMIAAAAgAgegvIgbgHIALABIADAAIgVgIIAXgqIAaAGIAEgJIALAPIALAMQAAAJgIANQgGAOgHAAQgFAAgPgEgAiwhMIgCAEIgBADIADgHgAA/hXIgMgIQgHgEgBgEIAEgGIAGADIAhAeIgXgLgAiribQAFgKAJgLIgjBVQAOgzAHgNgAAbhvQgFgDgIAAQgLgGgPgFQgOgEgFAJIAIgOIAXANIACgEIAmANIgHAHQAAgEgGgCgABdhvIgvgeIgugdQgBgNAHgHQAEgEAEgBIApANQACAAASgKQAOgIgBAGQgJAJgGAJIAkAXIAfAQIgZAcIgFACIgDAAQgGAAgIgEgAgKiFIgLgDIAKgSIAfAVIgTAFIABADQgBgDgLgFgAgni5IgcgIQAPgSAcgmQAYgeAZgQIgEAGIgKANQgIAJgHAHQgiArgKASIgDAKQAIgJAWgVQAVgUADgEQAAABAJgFIAIgFIAIALIgpBAIgagIgAiNi0QAJgBAGACIgdACQAFgDAJAAgAiJi9QAHgFARgCIgVAIIgUAHIARgIgAhgjKIADgEIgBACIgEAHgAhDjWIADgBIgJAHgAhRj7IgHAIQgJAHgDACg");
	this.shape_95.setTransform(-17.1,-81.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#1D1F26").s().p("AgyAfQgDgQAAgPQAAgNAVgRQAbgWAqgCQgLARAIAWQANAYAHARIg4ATQgbAKgGgBQgKABgFgYg");
	this.shape_96.setTransform(9.8,-42.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#B3E4E6").s().p("AAzB7QgoghAAgJQAAgTAXgSQAbgUAlAAQAHAAAHAEQAIAFAAAGQAAAehOAnQAIAHASAAQAWAAAYgWQAbgaAAgjQAAgRgjgUQgSgLg7gdQhvg3AAgkQAAgSAnAAQA1AABfA/QBuBKAABLQAAAtgsAfQghAYgXAAQgVAAgrgjgAhQAAQhfgygng5QAHgNAFgEIAJgFQACAwBtAxIB1AqQgLgKhggzQhig0ABgQQABgPAMgLQATgQAgAGIgDAUQgEAdAoAdQAwAkB5ApQgrANgYAPQgSAMgFAAIhXgog");
	this.shape_97.setTransform(0.1,-98.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#526139").s().p("AhFAlQAZAFAjg4QAfg0ABgaQAVAQAOAhQAMAfAAAaQAAAcgMAQQgRAXgtAMg");
	this.shape_98.setTransform(21.6,-84.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#758A51").s().p("AkhC2IB9gaQAugMAGgDQgFAdACAEIAGAOIAPAjQgiAKgkAHIhJATQg6gLAGhCgAAYCLQgEgHAAgDQAAgRAOgMQAMgMArgWQAsgXAUgQQAVgQAGggIAkAkQgRgwgzg6QgagdgYgVQATADAegsQAegsgKgUIgCgMQAiA5AfA6QA9ByAAAaQAAAwg3AnQgyAjiSA+QgJgfgHgLg");
	this.shape_99.setTransform(13.8,-58.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#758A51").s().p("AgnBCQgSgTgQgPQASADAegpQAdgsgJgUIgBgMQAfA5AfA4IASAjQgTARgdAAQgbAAgmgRg");
	this.shape_100.setTransform(31.2,-76);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#1D1F26").s().p("AgkAhQgOgUAAgVQAAgKANgQQAOgQAKgCIBAArQgVAEgVAZQgQAXgCALQgNgDgOgSg");
	this.shape_101.setTransform(0.7,-24.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#758A51").s().p("AgrCAQALgDAPgoQAOgogNgbQAPAFAPgDQAmgGAGACQAGABAGgFQAHgFgGAAIgQgFQgZADg+gGQANgZASgQQAPgOANAAQAVAAAXApQAVAkgCAQQgOAhgiAUQgKAGhPAkgAhVhvIgEgUQABABAAAAQAAAAABABQAAAAABAAQABAAAAABIACAAIARAIIgHAEIgLAGg");
	this.shape_102.setTransform(4.7,-18.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#526139").s().p("AguA/QAZgWAMgnQAJgggCgiQBAAJgTA8QgIAYgSASQgRASgTAAQgKABgRgDg");
	this.shape_103.setTransform(-2.8,-10.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#B3E4E6").s().p("AgmCyQg+hYAAhIQAAhGARg5QARg6AOgTQAOgUATgGQgLAegLBAQgJA5AAAXQAAAwAPAeQAPAhAfARIABgBQgDgJgRgtQgRgsAAgVQAAhwAjhAQAcgxAbAAQAKAAAIALQAKAMAAAVQgKAGgMALQgYAVgMAfQgHASgHAnQgGAgAAAFQAAAuAMAWQANAaAgAIQgGgNgPgRQgMgUAAgdQAAhJAagxQAYgrAdAAQAJAAAHAPQAIAUAAAhIgJChQAAAtAHAmIAHAfQAAAagKAaQgTAygsAAQg6AAg2hNgAheCgQgWgKgPgWQgQgXABgPIACgaQAAgLAEgGQADgGAKgBQAEAFATAmQAWAsAPAlQgCACgEAAQgHAAgOgGg");
	this.shape_104.setTransform(-20.1,-30.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]},1).to({state:[]},1).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]},2).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42}]},1).to({state:[]},1).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},1).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]},1).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53}]},1).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57}]},1).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61}]},1).to({state:[]},1).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65}]},3).to({state:[{t:this.shape_70},{t:this.shape_66},{t:this.shape_69}]},1).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71}]},1).to({state:[{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82}]},1).to({state:[{t:this.shape_88},{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89}]},1).to({state:[{t:this.shape_95},{t:this.shape_94},{t:this.shape_93}]},1).to({state:[{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96}]},1).to({state:[{t:this.shape_100},{t:this.shape_98},{t:this.shape_97}]},1).to({state:[{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101}]},1).wait(1));

	// Layer 1
	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AhhEfQgqgFgugbQgugbAJhBQAIhBA7gdQA7gdBEgRQBCgRAggPQigiUgggbQgfgbAAgHQAAgcANgRQALgOAXgLQBkA4BlBZQBoBZAVAzQAWAxhaAvQhaAuh9A3QAQAJALAVQAFALADAJQAAAVgOANQgKALgZAAIgUgCg");
	this.shape_105.setTransform(-6.1,-7.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("ACqB6QgrgaAAgIQizgihMAAQgeAAhcAKIhqAMQACgEABgiQAKgkAxgbQAxgeA3gPQA4gPA+gCQA/gBBBASQBCARALAAQAKAAAIgPIAPghQAYgwAWAAQAXAAAKAIIAUAOQA6gHAAAeQAAARgKAQQgJANgNAHQAmgGAQANQAMAKAAAQQAAAlgcARQgVANhKASQANAJAOAWQANAWgEAPQgFAPgbAAQgWAAgugcg");
	this.shape_106.setTransform(8.5,-26.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AAUCbQgQgGgEgSQgNAIghgJIg2gOQghgPgDgUQgBgHAEheIhIAMQggAFAFgPQAHgiAchaIBugOQCTgFBWAjQBWAiABAjQACAjgXAZQgXAbg/AnIAHAJQADAFAAAHQAAAfgeATQgaARggAAQgUAAgIgCg");
	this.shape_107.setTransform(8.9,-20);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AhQD8IgGgMQgOgBgfACQgcAAgRgIQgvgYAAhyQAAgcASgIQAJgEA4gKQBmgoBrgmQhLg+gpgkQgEgEgMgSQAJgQAGglQAHgmAAgNQCPBkAwAsQAxAsATApQAUAmgyAsQgyAriDBDQAJARAEAUQAEAUgNAPQgTAPggAFIgUACQgPAAgFgGg");
	this.shape_108.setTransform(-3,-7.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("Ag/BPQhVg7AAgYQAAgfAYgvQAbg1AbAAQBAAABKAuQBSAygBAzQABALgXATQgXATAAAOQAAAggVAQQgRANgYAAQgYAAhRg5g");
	this.shape_109.setTransform(-12.5,-1.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgqC5QAAgDgGAAIgLgBQgOgCgPgKQgVgQAAgaQAAgIAKgTQAKgTAIgIQgOABgSgEQgSgFgHgFIABgFQADgCAbABIAhACQALAAAkgDQAvgFAAgDQgkgei7h7QABgBAEgNQAEgNALgMQALgIANgGIAHgCQAGgEAAgBIgEgDQgBgCAAgGQAAgPARAAQAOABBUAuIB4BEQB4BCAABOQAAAihPAvQhUAwhJABQgKgBAAgJg");
	this.shape_110.setTransform(2.3,-15.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AA2D0QhtgBh/hUQh+hUgBgcQABgWAQgPQAVgRAnAAQAdAAAkAZQAlAbAeAAQAQAAAOgKQANgKAOABQANACAdAOQAcAOAeAWIABgFIABgHQAAgZgWgaQgdggg+geQg2gZgtgZQgxgbgFgHQgFgLAAgWQAAgLAVghQAXghAAgCQAAgDAYAMICYBOQCDBCAvAfQB7BSAABZQAAAvhIArQhGAqhrAAIgGAAg");
	this.shape_111.setTransform(3.7,-11.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("ACNEyQgKgJgGgEQgLAEgKAAQgPAAgOgOQgOgOAAgRQAAgHAXgvIAXgwQhkifhQhDQhRhDhJgiQhJghACgPQABgPAHgVQAJgbARgIQgKgHgGgIIgBgBIAHgBQFQB0CRC2QBdByAAB0QAAAlgSAPQgKAJgPAAIgFgDIgUgSQgXAigPAMQgPANgUAAQgJAAgJgIg");
	this.shape_112.setTransform(9,-4.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AByEHIgKg5QgGgegGgIQgTgYg1geQjLhzh3hMQiMhaAAgUQAAgYATgmIASglQABgEgGgTQgGgXgHgEQGzD/BXArQAUAKARAFQAPAEAiATQAGgJAMgoQATgkAjAAQAvAAgCB0IgRAAQBhACAjATQAaAOAAAgQAAAigbALQgQAHgiAAQgJAAgRgDQgUgFgRgHIgKAMQA6BHAFAJQASAbAAAaQAAAagFAJQgIAMgYAAQglAAgdgcQgggdgchBQAEArAAAUQAAAlgJAPQgKARgZAAQgpAAgQhKg");
	this.shape_113.setTransform(26.2,-3.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgUDpQhIg3gRhWQgPhRgdgnQguhBiEhRIAtg9QANgRAdgkQBqA7BcBPQBbBQgEAdQAcgJALAAQAgABAKAPQAGAIAAATQAAAHgEAMQgHAYgVARQCLgIAqAZQAVAMAAAmIARAYQAQAYAAAGQAAAQgIAPQgJAPgLACQgPgCgGAMQACAdggAOQggAOhFAAQhjAAhIg4g");
	this.shape_114.setTransform(11,-8.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AisCWQgLgBgOgLQgPgMgFgPIgBgQIgRgIQgWgeAAgLQAAghAvguQArgrALAAQAOAAAsAcQAWAOA4AlQAKAHAXAGQAXAGA4AJQg7hRg/hDQgggigVgRQAAgVAjgQQASgIARgGQAAgOANAAQAKAAACgCQBbBXAqAhQAqAhAlAxQAlAwgDAvQgDAwgcAXQgcAWgxAEQgxADg/ACQgxAEgMAPIguA1QhdAAgKhWg");
	this.shape_115.setTransform(-17.8,-10.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgcCJQgdgWgGgtQgKABgLgGQgOgJgJgWQgCgHgVgaQgRgUAAgOQAAgvAtgpQAmghASAAQAVAAATAJQAcAQA+A1QAtAnAFAGQAOASAAAbQAAAwgeAYQgQAMgRAEQgDACgOAaQgQAZgNAAQgpAAgagSg");
	this.shape_116.setTransform(-28.8,-2.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AjDEEQgdgnAAhCQAAhIA1hUQAzhSBYhLIAggdQAEgGAGgXQAKgkALgNQAUgYAvAAQBBAAAhAsQAdAmAAA9QAAA7gQARQgTAIgFAFQhGBogNAQIhBBiQg5BYgQAMQgKAGgSACIgdABQgMAAgTALQgTAJgDAAQgaAAgXgeg");
	this.shape_117.setTransform(-12.3,-24.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AmgF4IAAijQEEg8CAhnQBVhFA1h8IgKAEQgdAIgHAAQg8AAgbgaQgWgSAAgYQAAgYARgUQAZgcAvAGQgFgMgFgUQgIgvAggTQAegRAeAAQAFAAAfAMQAhAOASADQAJABAsAAQAsADAXASQBNAcANBRQAMBQg8AtIgcAQIgcAPQgHAjgYAjQgKAQgsAwQgtAwg/A2Qg/A2jcBXQiuBEg4AAQgPAAgGgFg");
	this.shape_118.setTransform(24.8,-56.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("ApzGGQgTgJAAgdQAAg1A6gtQANgJB5hEIClhcQBCglAZgQIA/gqQBbg9DZibIAAgBQg4gEglgcQgjgcAAgjQAAgYAVgVQAcgbAwAAQArAAAdAfQAXAZAKAqQAKgDAggRQAfgSAdgRQAdgRAxABQAyABAXAGQAXAHAwAGQAfAEAYAcQAVAXAAARQAAAQgRAWQAMAoAAAKQAAAZgSAPQgTAPglAAQgJAAg6gPQg6gQgMAAQgMgBgOANQgPAOgiAQQgiAPgNAFIgLAFQABAAgPAMIgkAaIiCBSIh7BQQh7BNhVAyQhJArjZBoQhKARgIAAQgfAAgLgFg");
	this.shape_119.setTransform(39.5,-57.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("ApJGOIgGABIgNABQgWAAgMgNQgLgLAAgUQAAhHClhwQBVg6B0g+IG9kjQgZgMgbgYQgsgoAAgkQAAgUAPgOQAWgSAsAAQAtAAAaASQApAbgNBCIATgEQAQgDAHAAQBGAAA3AdQA/AiA/AGQA1AGAfAkQAbAgAAAsQAAAhgbAYQggAdgEALQgHASgKAHQgJAHgOAAQgOAAgVgGQgigKgRgSQgEASgKAHQgIAFgPAAQgtAAgag8QgOgigHgJQgOgUgVAAQgFAAkJClQlJDQjbB7Ig2AQQgEgGgGABgAHEjZIAJAAIAAgBg");
	this.shape_120.setTransform(40.7,-58.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AmiFWQhOgxAAg7QAAgSALgWQANgcATAAIANACIAKADQALACAbAOQAVALAjAAQBNgBBHhOQA8hDAAgiQAAgLgMgIQgLgVAAhBQAAhRA7g3QAsgpAZAAQAPABAIAIQAPAOgCAgQAUgfAugmQAwgmAugVQBCgdAWAHQAGACAHAGQAGAGAGgBQALABA0gVQAzgUAWAAQApgBATAUQAPANAAATQgaAmAAALQAAAFACACQACADgCAaQgBAahXBKIhOBEQgvAogvAlQhdBIgsAVIAPgHQhJCPhJBJQhfBbhwAAQhQgBhMgtg");
	this.shape_121.setTransform(37.6,-48.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AiWDfQhNg7ADhZQADhYAihFQAhhGApgPQApgPAGgEQANgIARgWQAMgQAkgXQAlgXANABQANABAlgCIANgBQAVgGAdgBQAdgBANATQAMASgHATIgUA1QgOAjgFAmQAAAHgjAsQghApgOANQAkAeAWAaQAqAxAAAvQAAA8ghAkQglAnhIAAQh9AAhUhAg");
	this.shape_122.setTransform(-4.6,-24.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AANDGQgggXg9gvIgeghQgbgegUgJQgUgIgQgaQgSgcAAggQAAgOAFgNIAHgMIgDgDIgMgPQgGgIgGgTQgIgSAAgFQABgiAagbQAVgXAPAAQAKAAANAIQAMAIAFAAQACAAAUgLQAVgMAhgCQAngCAbAdQAVAcACAAQAHAAAJgFQAIgGACgHQBQA9A0B0QAqBfAABGQAAAtgmAcQgiAZgnAAQgxAAg9gpg");
	this.shape_123.setTransform(-15.5,-9.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AAvDGQgigYg8guIgmgkQgkgigKgEQgVgKgKgOQgPgVAAgmQAAgZAEgLQADgGAEgEQgHgLgPgRQgMgRAAgZQAAgiAagbQAWgXAOAAQAGAAASAIIARAIQAWgKAUgHQAogPAPAMQAsAOASASQAaAZAAAyQgQA9gMAQICNCYIgQgCIgHgCQAEASAAAvQAAAiAHAAQgGAAABALIABAdIgjABQgqAAg9gpg");
	this.shape_124.setTransform(-18.8,-9.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("Ai4CUQhChKAAhBQAAgrAXgSQAOgMAWAAQALABAyAuQA2AyASAIIgBgEQgKglgcg3QgHgNgegrQgWgfAAgQQAAgUAPgZQAVglAlAAQALAAAgATQAfASANgDQAagEApAKQAtAJAbAVQA+ApAdBCQAPAhACAbQAAAhgXAeQgZAagGAKIABABIAFgHQgmCXiGAAQiCAAhVhdg");
	this.shape_125.setTransform(6.6,-20.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AjWCeQiKhkgIhCIAAgDQAAAAAAAAQABABAAAAQABAAAAAAQABAAABAAQAWhMAZgNQANgGAOAJQAFAAAAgEQgBgEAFAAIBaBTQBkBZAvAiQAsgtAbglQAZgfAAgPQAAgMgPgfQgRgigPgDQgqgLgHgDQgSgJAAgWQAAggAYgQQAUgOAfAAIAbAFQAeAIALAOQAJgWAcgVQAjgYAmAAQAgAAAuAqQAuAqAGASQAEANABALQAEgBAJAEQAJAFAFAnQAFAog0A6Qg9AtgQAOQhMBLgoAkQhIA/g9ADIgEAAQhAAAiGhgg");
	this.shape_126.setTransform(18.9,-24.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AiTDHQg/gjhBg1QhZhMgBgxQAAgGACgFIAFgNQAHgVATgTIAigfIgDADQAHAEAJAAQAFAAAAgDQgBgEAFAAIBmBdQBrBgAZATQA6g/ATgYQAVgYAAgPQAAgKgIgRQgHgSAAgFQAAgIgFgJQgFgJgFgDQgYgNgggLQgUgKAAgTQAAgWAQgQQATgUAiAAQAMAAAdANQAYALAKAGQACgVAhgUQAjgVAjABQAkAAA5A8QA4A9gOAGQAMAJAJAOQALAPAAANQgBAdgQAfQgPAbgXARQgoAfgIACQgJgDgVAIIgOAPQgbAehABBIg1AnQgOALgcAJQgcAIgVAAQgkAAhfgyg");
	this.shape_127.setTransform(19.3,-23.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AjJChQh9hbAAgyQAAgbAsgsQAXgVAXgRQAHAEAhAfQAnAmAdATQA/AwASALQAGADAKAAQATAAAMgpQAFgVACgUQgGg9gNgJQgGgEgggGQgWgEAAgRQAAgsAkgXQAagRAZAAQAvAFAPAWQAMgWAggZQAqgfAtAAQAUAAALAMQAOASAKAEQAWAMAGAQQAGAQAEAXIADAbIAMALQALAOAAASQAAA5g0AtQhCAxgbAgQg3BJgcAdQgxA0gtgBQhOAAiAhdg");
	this.shape_128.setTransform(12.5,-22.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("Ah7BwQABgNgKABQgLgBgJgEQgEgCgLgJIgOgNQgMgOgVgNQgNgMAAgcQAAhMBUgzQBKgtBXAAQAIAAAPAGIAPAHQAmAAA/A/QBHBIAABIQAAAkgVAYQgPARgMAKQgUARgSAAQgBAAgBAAQgBAAgBgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBAAAAAAQgBAAgBAAIglAIQgbAGgEAAQgKAAghgHIgYAFQgSAEgFAAQhPAAgVg5g");
	this.shape_129.setTransform(-8.3,-14);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AijDGQgbAOgXgfQgXgeAFgoQgRAJgUgWQgTgTAAgPQAAgRAMgqQAPg4A+hbQA+hcBQgGQBNgGBnA0QBnAzAWA2QA+BcglBBQgiA7iBgLQhtgIgCgLQgtBXgTAaQgXAfgZAAQgqAAgJgrg");
	this.shape_130.setTransform(-3.2,-28.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AkvGSQgFgLgBgUQAAgKAPh1QgBgHgRgaIACgTQgHAbgDAFIgCAAQACgHARhKQAWhYAhhSQAHgUAdhDIA2iBIA4hmIAgguQAUgagEAXIgJAVIgQAjIgDAEQAggYAkgoQAEADADAHIgaA4QBBhOALgGIghAnIAfgRQgCAHgcAcQAIAGABAMQAHgLAKAAQAFAAgBAGQgBAGAFAAQAEAAARgVQATgWAUgHIhKBgQAPAEAMAFQAIAEAHAAIATgKQAOgJgBAHQgKAIgFAKQADADAfASQAfASACAAQADAAANgMIgrgtIAdAVQAUAPAEABIAzgSQACAHgIANQgLAQgQABIA8BZIAtgQIAegKIAKABIAGAEQgaANgcALQgaAKgFAAQAmBVAFAUQAWBEAABdQAAAHgDAJQgCAIgCADIgGgLQANA6AEAgIgCAGIgnh4IAFBXIgIAGQgwhYgGgHQAtBaASApQAfBGgIAjQgJgQgWhBQgRgygVgZQgNgPgKgGIgOgIIg8gsQg9gogbAFIgYAxIAJgHIAJgLQgCAFgOAQIgOARIgCgDIAAgIQAAgIAGgPIAOgnQgngBgRgFQADAUAAAOQABANgHAHIgHAAQgIAAgGgsIgNAqIAKg2QgdAAgMgDIgFApQAEgtgJgCQgBAAgIACQgHADgFgDQAGgEAPABQANgHgBgqQgYAKgNAcQgMAggGANIgBgBIgBgIIAMg1QgjBCgTA4QgNAtgCAFIAFglIAFgtIgBgOQgCgKABgIIABgKQgPAQgRAlQgRAmgOAPIgHgJIAHgeQgkA1gMAnQgOAqgBBCIALA3IAAAEQgLgLgCgEgAkbDWQBBhqADgHQADgHgBgFIgCgRQAAgZgCgBIAqhyQhDCigpB4gABXA+IBKAfIhAgtgAAAA+QAcAEAXAAQAJAAAGgBQgWgKgTgMQAjALAPgDIABgCIgPgIIgugWgAgvA9QAJADAEAAQAKgBAMgwIgRgCIgUgDQgIAAgGAMQgJAPADAaQAIgDAHAAIAHABgADmhtQAcAoAQAcQANAcAOAnIAEASQgCgXgRg5QgUhIgRgOgAiAAdQAPgMANgTQALgSAAgGQAAgGgEgEIgDgEIAQgHQgFgJgHgIgAhOgMQgEADAAAFQAAAEAEADQADADAGAAQAFAAADgDQADgDAAgEQAAgFgDgDQgDgEgFAAQgGAAgDAEgAgvgFQAHAFAVAAIgegMQgBAFADACgAgmgoIAlAHQgYgHgJgBgAi7hwQAJgOAKgWQAKgXgBgFgACtjYIAkA3QAMAWADARQAJgGAJgHQgWgzghgqQgIAIgGAEgAgyibIALACIAMABIgBAAQgIgEgHAAQgEAAgDABgAhrisQADgCAIgOIARgkQgGAHgWAtgAgYjKIAYAGIgUgPgAAfjVIATAIQgDgDgGgDQgFgCgDAAIgCAAgAgGjpQAXAMACgDIAAgBQgKgGgMgCgAhMjvQADgBAGgJIAPgYIgBAAQgBAAgWAigAlfB1QAAgIANgnQAOgvAUguIgnB/QA0hwBBicQA1h3BFhmIhECiIhJCwIgEAOIA0itIhGCrQg2B+gbAgIgBABQgCAAAAgHg");
	this.shape_131.setTransform(-18.8,-71.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("Aj3EqQBsgYACgCIALgFQAWgKBygfQBRgWAyghQAsgdAAgXQAAgniUhzIibh9QgIgGABgQQAAgQAFABQAEABgZgQQgagPgkgTQgjgSgogaQgogagQgiQgQgjAsgcQAsgdBMAGQBMAFA8AgQA7AgBhBrQBiBsBFCCQBFB/gDA/QgDA/i1BSQiyBShyAbIhnAQg");
	this.shape_132.setTransform(11.1,-73.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("ACODtQgiggg1gpIibh9QgHgGAAgQQAAgQAFABQAFABgagOQgagPgkgTQgjgSgogaQgogZgQgjQgQgjAsgcQAsgdBMAGQBMAFA8AgQA7AgBhBrQBiBqBFCCQARAgANAcg");
	this.shape_133.setTransform(9.3,-93.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AhkDsQgfgYgTgXQgZAAgmgbQgwggAAgpQAAgoAMgTQANgUAXALIgDglQAAhnAwhKQAUgeAUgLQATgLALANQAKgNAhgUQAfgRAHAAQAbAAAIAhQAJApAVALQAMAGAFAQQALAjgCAbQgFAngCAnQBWAxAnAfQBGA2AAA+QAAAohEAoQhKAqhZAAQhDAAhAgvg");
	this.shape_134.setTransform(-10.7,-30.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_105}]}).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[]},1).to({state:[{t:this.shape_115}]},2).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[]},1).to({state:[{t:this.shape_123}]},3).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.6,-36.1,45.1,57.9);


(lib.CUP_34DOWN_mouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.CUP_23_MOUTH_COMPcopy("single",22);
	this.instance.setTransform(-0.3,-1.5,0.792,0.531,0,13,10.9,30.9,10.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.2,-7,48.4,19.2);


(lib.CUPBODYNEST_001 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// BROWS
	this.instance = new lib.CUP_34_brow_02("single",0);
	this.instance.setTransform(-37.6,-66.1,0.985,0.985,0,-16.6,163.3);

	this.instance_1 = new lib.CUP_34_brow_01("single",1);
	this.instance_1.setTransform(104.3,-61.5,1.052,0.786,0,33.1,-146.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{skewX:33.1,skewY:-146.8,y:-61.5,scaleX:1.052,scaleY:0.786}},{t:this.instance,p:{skewX:-16.6,skewY:163.3,x:-37.6,y:-66.1,scaleX:0.985,scaleY:0.985}}]}).to({state:[{t:this.instance_1,p:{skewX:29.9,skewY:-150,y:-59.4,scaleX:1.052,scaleY:0.786}},{t:this.instance,p:{skewX:-14.4,skewY:165.5,x:-37.3,y:-64.5,scaleX:0.985,scaleY:0.985}}]},32).to({state:[{t:this.instance_1,p:{skewX:18.4,skewY:-161.5,y:-54.3,scaleX:1.051,scaleY:0.786}},{t:this.instance,p:{skewX:-7.2,skewY:172.7,x:-37,y:-60.6,scaleX:0.985,scaleY:0.985}}]},2).to({state:[{t:this.instance_1,p:{skewX:12.7,skewY:-167.2,y:-51.3,scaleX:1.051,scaleY:0.785}},{t:this.instance,p:{skewX:-4.2,skewY:175.7,x:-37,y:-57.9,scaleX:0.985,scaleY:0.985}}]},2).to({state:[{t:this.instance_1,p:{skewX:11.7,skewY:-168.2,y:-50.7,scaleX:1.051,scaleY:0.785}},{t:this.instance,p:{skewX:-2.2,skewY:177.7,x:-37,y:-57.3,scaleX:0.985,scaleY:0.985}}]},2).to({state:[{t:this.instance_1,p:{skewX:14.7,skewY:-165.2,y:-51.6,scaleX:1.051,scaleY:0.785}},{t:this.instance,p:{skewX:-3.7,skewY:176.2,x:-37,y:-58.2,scaleX:0.984,scaleY:0.984}}]},3).to({state:[{t:this.instance_1,p:{skewX:18.4,skewY:-161.5,y:-54.3,scaleX:1.051,scaleY:0.786}},{t:this.instance,p:{skewX:-7.2,skewY:172.7,x:-37,y:-60.6,scaleX:0.985,scaleY:0.985}}]},2).to({state:[{t:this.instance_1,p:{skewX:31.4,skewY:-148.6,y:-60.6,scaleX:1.052,scaleY:0.786}},{t:this.instance,p:{skewX:-14.7,skewY:165.2,x:-37.6,y:-65.5,scaleX:0.985,scaleY:0.985}}]},2).to({state:[{t:this.instance_1,p:{skewX:33.1,skewY:-146.8,y:-61.5,scaleX:1.052,scaleY:0.786}},{t:this.instance,p:{skewX:-16.6,skewY:163.3,x:-37.6,y:-66.1,scaleX:0.985,scaleY:0.985}}]},2).wait(183));

	// PUPILS
	this.instance_2 = new lib.CUP_34_pupil_02("synched",0);
	this.instance_2.setTransform(-34.4,-32.5,1,1,0,0,180);

	this.instance_3 = new lib.CUP_34_pupil_01("synched",0);
	this.instance_3.setTransform(101.7,-32.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3,p:{y:-32.5}},{t:this.instance_2,p:{y:-32.5}}]}).to({state:[{t:this.instance_3,p:{y:-32.5}},{t:this.instance_2,p:{y:-32.5}}]},32).to({state:[{t:this.instance_3,p:{y:-30.7}},{t:this.instance_2,p:{y:-30.7}}]},2).to({state:[]},2).to({state:[{t:this.instance_3,p:{y:-30.7}},{t:this.instance_2,p:{y:-30.7}}]},7).to({state:[{t:this.instance_3,p:{y:-32.2}},{t:this.instance_2,p:{y:-32.2}}]},2).to({state:[{t:this.instance_3,p:{y:-32.5}},{t:this.instance_2,p:{y:-32.5}}]},2).wait(183));

	// EYED
	this.instance_4 = new lib.CUP_34_eye_02("single",0);
	this.instance_4.setTransform(-36.9,-33.9,0.924,1,0,0,180);

	this.instance_5 = new lib.CUP_34_eye_01("single",0);
	this.instance_5.setTransform(104.9,-36.8,1,0.958,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5,p:{y:-36.8,startPosition:0}},{t:this.instance_4,p:{y:-33.9,startPosition:0}}]}).to({state:[{t:this.instance_5,p:{y:-36.8,startPosition:0}},{t:this.instance_4,p:{y:-33.9,startPosition:0}}]},32).to({state:[{t:this.instance_5,p:{y:-35,startPosition:1}},{t:this.instance_4,p:{y:-32.7,startPosition:1}}]},2).to({state:[{t:this.instance_5,p:{y:-34.1,startPosition:2}},{t:this.instance_4,p:{y:-31.8,startPosition:2}}]},2).to({state:[{t:this.instance_5,p:{y:-33.8,startPosition:2}},{t:this.instance_4,p:{y:-31.5,startPosition:2}}]},2).to({state:[{t:this.instance_5,p:{y:-34.1,startPosition:2}},{t:this.instance_4,p:{y:-31.8,startPosition:2}}]},3).to({state:[{t:this.instance_5,p:{y:-35,startPosition:1}},{t:this.instance_4,p:{y:-32.7,startPosition:1}}]},2).to({state:[{t:this.instance_5,p:{y:-36.5,startPosition:0}},{t:this.instance_4,p:{y:-33.6,startPosition:0}}]},2).to({state:[{t:this.instance_5,p:{y:-36.8,startPosition:0}},{t:this.instance_4,p:{y:-33.9,startPosition:0}}]},2).wait(183));

	// MOUTH
	this.instance_6 = new lib.CUP_23_MOUTH_COMPcopy("single",1);
	this.instance_6.setTransform(51.8,-10,0.792,0.531,0,-10.7,171.3,31,10.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(32).to({startPosition:1},0).wait(2).to({y:-8.1},0).wait(2).to({y:-7.2},0).wait(2).to({y:-6.9},0).wait(3).to({y:-7.2},0).wait(2).to({y:-8.1},0).wait(2).to({y:-9.6},0).wait(2).to({y:-9.9},0).wait(183));

	// BODY
	this.instance_7 = new lib.CUP_34_body("single",0);
	this.instance_7.setTransform(19.9,81.5,1,1,0,0,180,-1.5,82.4);

	this.instance_8 = new lib.CUP_34_handle("single",0);
	this.instance_8.setTransform(-70.2,11.2,1,1,0,0,180,-17.5,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7}]}).to({state:[{t:this.instance_8},{t:this.instance_7}]},32).to({state:[{t:this.instance_8},{t:this.instance_7}]},2).to({state:[{t:this.instance_8},{t:this.instance_7}]},2).to({state:[{t:this.instance_8},{t:this.instance_7}]},2).to({state:[{t:this.instance_8},{t:this.instance_7}]},3).to({state:[{t:this.instance_8},{t:this.instance_7}]},2).to({state:[{t:this.instance_8},{t:this.instance_7}]},2).to({state:[{t:this.instance_8},{t:this.instance_7}]},2).wait(183));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.5,-96.5,245.5,191.3);


(lib.CUPBODYNEST = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// BROWS
	this.instance = new lib.CUP_34_brow_02("single",0);
	this.instance.setTransform(-28,-58,0.989,0.989,0,13.5,-166.4);

	this.instance_1 = new lib.CUP_34_brow_01("single",0);
	this.instance_1.setTransform(100.5,-52.3,1.056,0.789,0,-6.5,173.4);

	this.instance_2 = new lib.CUP23LBROWL001("single",0);
	this.instance_2.setTransform(-43.2,-75.7,0.999,0.999,0,-15.7,164.2);

	this.instance_3 = new lib.CUP23LBROWR001("single",0);
	this.instance_3.setTransform(92,-71.3,0.999,0.999,0,15.5,-164.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{x:100.5,y:-52.3,skewX:-6.5,skewY:173.4,scaleX:1.056,scaleY:0.789,startPosition:0}},{t:this.instance,p:{x:-28,y:-58,scaleX:0.989,scaleY:0.989,skewX:13.5,skewY:-166.4}}]}).to({state:[{t:this.instance_1,p:{x:100.5,y:-52.3,skewX:-6.5,skewY:173.4,scaleX:1.056,scaleY:0.789,startPosition:0}},{t:this.instance,p:{x:-28,y:-58,scaleX:0.989,scaleY:0.989,skewX:13.5,skewY:-166.4}}]},29).to({state:[{t:this.instance_1,p:{x:99.8,y:-37.9,skewX:-6.5,skewY:173.4,scaleX:1.056,scaleY:0.789,startPosition:0}},{t:this.instance,p:{x:-28.7,y:-43.7,scaleX:0.989,scaleY:0.989,skewX:13.5,skewY:-166.4}}]},5).to({state:[{t:this.instance_1,p:{x:99.6,y:-33.8,skewX:-6.5,skewY:173.4,scaleX:1.056,scaleY:0.789,startPosition:0}},{t:this.instance,p:{x:-28.9,y:-39.6,scaleX:0.989,scaleY:0.989,skewX:13.5,skewY:-166.4}}]},1).to({state:[{t:this.instance_1,p:{x:99.9,y:-40,skewX:-6.5,skewY:173.4,scaleX:1.056,scaleY:0.789,startPosition:0}},{t:this.instance,p:{x:-28.6,y:-45.7,scaleX:0.989,scaleY:0.989,skewX:13.5,skewY:-166.4}}]},2).to({state:[{t:this.instance_1,p:{x:101.7,y:-66.2,skewX:3.1,skewY:-176.8,scaleX:1.056,scaleY:0.789,startPosition:0}},{t:this.instance,p:{x:-26.9,y:-70.5,scaleX:0.988,scaleY:0.988,skewX:6.3,skewY:-173.6}}]},1).to({state:[{t:this.instance_1,p:{x:101.6,y:-64.1,skewX:3.1,skewY:-176.8,scaleX:1.056,scaleY:0.789,startPosition:0}},{t:this.instance,p:{x:-27,y:-68.5,scaleX:0.988,scaleY:0.988,skewX:6.3,skewY:-173.6}}]},2).to({state:[{t:this.instance_1,p:{x:101.5,y:-62.1,skewX:3.1,skewY:-176.8,scaleX:1.056,scaleY:0.789,startPosition:0}},{t:this.instance,p:{x:-27.1,y:-66.4,scaleX:0.988,scaleY:0.988,skewX:6.3,skewY:-173.6}}]},2).to({state:[{t:this.instance_1,p:{x:100.5,y:-55.3,skewX:-6.6,skewY:173.3,scaleX:1.06,scaleY:0.792,startPosition:0}},{t:this.instance,p:{x:-29.6,y:-59.4,scaleX:0.992,scaleY:0.992,skewX:6,skewY:-173.9}}]},7).to({state:[{t:this.instance_1,p:{x:99.9,y:-50,skewX:-6.6,skewY:173.3,scaleX:1.06,scaleY:0.792,startPosition:0}},{t:this.instance,p:{x:-30.2,y:-54.1,scaleX:0.992,scaleY:0.992,skewX:6.8,skewY:-173.1}}]},1).to({state:[{t:this.instance_1,p:{x:99.9,y:-48.2,skewX:-6.6,skewY:173.3,scaleX:1.06,scaleY:0.792,startPosition:0}},{t:this.instance,p:{x:-30.2,y:-52.6,scaleX:0.992,scaleY:0.992,skewX:6.8,skewY:-173.1}}]},2).to({state:[{t:this.instance_1,p:{x:100.5,y:-53,skewX:3.4,skewY:-176.5,scaleX:1.059,scaleY:0.792,startPosition:0}},{t:this.instance,p:{x:-29.6,y:-56.1,scaleX:0.992,scaleY:0.992,skewX:0,skewY:179.9}}]},2).to({state:[{t:this.instance_3,p:{skewX:15.5,skewY:-164.4,x:92,y:-71.3,scaleX:0.999,scaleY:0.999}},{t:this.instance_2,p:{skewX:-15.7,skewY:164.2,x:-43.2,y:-75.7,scaleX:0.999,scaleY:0.999}}]},2).to({state:[{t:this.instance_3,p:{skewX:21.4,skewY:-158.5,x:91,y:-77.4,scaleX:0.999,scaleY:0.999}},{t:this.instance_2,p:{skewX:-21.5,skewY:158.4,x:-44.3,y:-82.6,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_3,p:{skewX:21.4,skewY:-158.5,x:91.6,y:-74.1,scaleX:0.999,scaleY:0.999}},{t:this.instance_2,p:{skewX:-21.5,skewY:158.4,x:-43.8,y:-79.6,scaleX:0.999,scaleY:0.999}}]},2).to({state:[{t:this.instance_3,p:{skewX:21.4,skewY:-158.5,x:91.8,y:-72.7,scaleX:0.999,scaleY:0.999}},{t:this.instance_2,p:{skewX:-21.5,skewY:158.4,x:-43.6,y:-78.2,scaleX:0.999,scaleY:0.999}}]},2).to({state:[{t:this.instance_3,p:{skewX:21.4,skewY:-158.5,x:92.2,y:-72.2,scaleX:0.999,scaleY:0.999}},{t:this.instance_2,p:{skewX:-21.5,skewY:158.4,x:-43.5,y:-77.6,scaleX:0.999,scaleY:0.999}}]},2).to({state:[{t:this.instance_3,p:{skewX:10.3,skewY:-169.6,x:91.8,y:-62.4,scaleX:0.998,scaleY:0.998}},{t:this.instance_2,p:{skewX:-4.9,skewY:175,x:-42.7,y:-66.9,scaleX:0.998,scaleY:0.998}}]},13).to({state:[{t:this.instance_3,p:{skewX:-0.4,skewY:179.5,x:94.1,y:-53.3,scaleX:0.998,scaleY:0.998}},{t:this.instance_2,p:{skewX:7.5,skewY:-172.4,x:-38.8,y:-53.5,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.instance_3,p:{skewX:-3.5,skewY:176.4,x:94.5,y:-49.3,scaleX:0.997,scaleY:0.997}},{t:this.instance_2,p:{skewX:9.3,skewY:-170.6,x:-38.4,y:-50,scaleX:0.997,scaleY:0.997}}]},2).to({state:[{t:this.instance_3,p:{skewX:3.7,skewY:-176.2,x:93.7,y:-53.3,scaleX:0.997,scaleY:0.997}},{t:this.instance_2,p:{skewX:5.1,skewY:-174.8,x:-40.1,y:-52.3,scaleX:0.997,scaleY:0.997}}]},4).to({state:[{t:this.instance_1,p:{x:105.1,y:-61.4,skewX:34.7,skewY:-145.2,scaleX:1.053,scaleY:0.786,startPosition:1}},{t:this.instance,p:{x:-38.3,y:-61.7,scaleX:0.985,scaleY:0.985,skewX:-14.2,skewY:165.7}}]},2).to({state:[{t:this.instance_1,p:{x:105.9,y:-70.3,skewX:43.9,skewY:-136,scaleX:1.053,scaleY:0.787,startPosition:1}},{t:this.instance,p:{x:-37.6,y:-67.8,scaleX:0.985,scaleY:0.985,skewX:-20.5,skewY:159.4}}]},2).to({state:[{t:this.instance_1,p:{x:106.3,y:-75.9,skewX:47.2,skewY:-132.7,scaleX:1.053,scaleY:0.787,startPosition:1}},{t:this.instance,p:{x:-37.2,y:-70,scaleX:0.986,scaleY:0.986,skewX:-21.9,skewY:158}}]},1).to({state:[{t:this.instance_1,p:{x:106.9,y:-73.8,skewX:47.2,skewY:-132.7,scaleX:1.053,scaleY:0.787,startPosition:1}},{t:this.instance,p:{x:-36.1,y:-71.2,scaleX:0.985,scaleY:0.985,skewX:-23.7,skewY:156.2}}]},29).to({state:[{t:this.instance_1,p:{x:108.8,y:-70.2,skewX:40.2,skewY:-139.7,scaleX:1.053,scaleY:0.787,startPosition:1}},{t:this.instance,p:{x:-33.9,y:-73.9,scaleX:0.985,scaleY:0.985,skewX:-26.8,skewY:153.1}}]},1).to({state:[{t:this.instance_1,p:{x:110,y:-67.5,skewX:36.9,skewY:-143,scaleX:1.052,scaleY:0.786,startPosition:1}},{t:this.instance,p:{x:-32,y:-76.8,scaleX:0.984,scaleY:0.984,skewX:-28.5,skewY:151.4}}]},1).to({state:[{t:this.instance_1,p:{x:100.6,y:-54.4,skewX:-6.6,skewY:173.3,scaleX:1.06,scaleY:0.792,startPosition:0}},{t:this.instance,p:{x:-29.5,y:-58.5,scaleX:0.992,scaleY:0.992,skewX:6,skewY:-173.9}}]},23).to({state:[{t:this.instance_1,p:{x:100.1,y:-47.7,skewX:-6.6,skewY:173.3,scaleX:1.06,scaleY:0.792,startPosition:0}},{t:this.instance,p:{x:-29.9,y:-51.8,scaleX:0.992,scaleY:0.992,skewX:6.8,skewY:-173.1}}]},1).to({state:[{t:this.instance_1,p:{x:100.2,y:-45.5,skewX:-6.6,skewY:173.3,scaleX:1.06,scaleY:0.792,startPosition:0}},{t:this.instance,p:{x:-29.9,y:-49.9,scaleX:0.992,scaleY:0.992,skewX:6.8,skewY:-173.1}}]},2).to({state:[{t:this.instance_1,p:{x:99.9,y:-47.8,skewX:-6.6,skewY:173.3,scaleX:1.06,scaleY:0.792,startPosition:0}},{t:this.instance,p:{x:-30.2,y:-52.6,scaleX:0.992,scaleY:0.992,skewX:4,skewY:-175.9}}]},2).to({state:[{t:this.instance_1,p:{x:100.5,y:-52.6,skewX:3.4,skewY:-176.5,scaleX:1.059,scaleY:0.792,startPosition:0}},{t:this.instance,p:{x:-29.5,y:-55.7,scaleX:0.992,scaleY:0.992,skewX:0,skewY:179.9}}]},2).to({state:[{t:this.instance_1,p:{x:105.2,y:-70.5,skewX:43.9,skewY:-136,scaleX:1.053,scaleY:0.787,startPosition:1}},{t:this.instance,p:{x:-37.2,y:-70,scaleX:0.986,scaleY:0.986,skewX:-21.9,skewY:158}}]},1).to({state:[{t:this.instance_1,p:{x:105.4,y:-72.3,skewX:43.9,skewY:-136,scaleX:1.053,scaleY:0.787,startPosition:1}},{t:this.instance,p:{x:-37,y:-71.8,scaleX:0.986,scaleY:0.986,skewX:-21.9,skewY:158}}]},2).to({state:[{t:this.instance_1,p:{x:105.3,y:-70.9,skewX:43.9,skewY:-136,scaleX:1.053,scaleY:0.787,startPosition:1}},{t:this.instance,p:{x:-37.2,y:-70.5,scaleX:0.986,scaleY:0.986,skewX:-21.9,skewY:158}}]},2).to({state:[{t:this.instance_1,p:{x:105.2,y:-70,skewX:43.9,skewY:-136,scaleX:1.053,scaleY:0.787,startPosition:1}},{t:this.instance,p:{x:-37.3,y:-69.6,scaleX:0.986,scaleY:0.986,skewX:-21.9,skewY:158}}]},2).to({state:[{t:this.instance_1,p:{x:104.9,y:-66.8,skewX:38.5,skewY:-141.4,scaleX:1.053,scaleY:0.787,startPosition:1}},{t:this.instance,p:{x:-37.4,y:-68.3,scaleX:0.986,scaleY:0.986,skewX:-20.1,skewY:159.8}}]},13).to({state:[{t:this.instance_1,p:{x:100.6,y:-54.4,skewX:-6.6,skewY:173.3,scaleX:1.06,scaleY:0.792,startPosition:0}},{t:this.instance,p:{x:-29.5,y:-58.5,scaleX:0.992,scaleY:0.992,skewX:6,skewY:-173.9}}]},2).to({state:[{t:this.instance_1,p:{x:100.1,y:-47.7,skewX:-6.6,skewY:173.3,scaleX:1.06,scaleY:0.792,startPosition:0}},{t:this.instance,p:{x:-29.9,y:-51.8,scaleX:0.992,scaleY:0.992,skewX:6.8,skewY:-173.1}}]},1).to({state:[{t:this.instance_1,p:{x:100.2,y:-45.5,skewX:-6.6,skewY:173.3,scaleX:1.06,scaleY:0.792,startPosition:0}},{t:this.instance,p:{x:-29.9,y:-49.9,scaleX:0.992,scaleY:0.992,skewX:6.8,skewY:-173.1}}]},2).to({state:[{t:this.instance_1,p:{x:99.9,y:-47.8,skewX:-6.6,skewY:173.3,scaleX:1.06,scaleY:0.792,startPosition:0}},{t:this.instance,p:{x:-30.2,y:-52.6,scaleX:0.992,scaleY:0.992,skewX:4,skewY:-175.9}}]},4).to({state:[{t:this.instance_1,p:{x:101.7,y:-59,skewX:13.2,skewY:-166.7,scaleX:1.059,scaleY:0.791,startPosition:0}},{t:this.instance,p:{x:-31.8,y:-62.7,scaleX:0.991,scaleY:0.991,skewX:-10.8,skewY:169.1}}]},2).to({state:[{t:this.instance_1,p:{x:105.4,y:-72.3,skewX:43.9,skewY:-136,scaleX:1.053,scaleY:0.787,startPosition:1}},{t:this.instance,p:{x:-37,y:-71.8,scaleX:0.986,scaleY:0.986,skewX:-21.9,skewY:158}}]},1).to({state:[{t:this.instance_1,p:{x:105.3,y:-70.9,skewX:43.9,skewY:-136,scaleX:1.053,scaleY:0.787,startPosition:1}},{t:this.instance,p:{x:-37.2,y:-70.5,scaleX:0.986,scaleY:0.986,skewX:-21.9,skewY:158}}]},2).to({state:[{t:this.instance_1,p:{x:105.2,y:-70,skewX:43.9,skewY:-136,scaleX:1.053,scaleY:0.787,startPosition:1}},{t:this.instance,p:{x:-37.3,y:-69.6,scaleX:0.986,scaleY:0.986,skewX:-21.9,skewY:158}}]},2).to({state:[{t:this.instance_1,p:{x:105,y:-68.8,skewX:42.7,skewY:-137.2,scaleX:1.053,scaleY:0.787,startPosition:1}},{t:this.instance,p:{x:-37.4,y:-69,scaleX:0.986,scaleY:0.986,skewX:-21.4,skewY:158.5}}]},24).to({state:[{t:this.instance_1,p:{x:104.5,y:-62.7,skewX:34.9,skewY:-145,scaleX:1.052,scaleY:0.786,startPosition:1}},{t:this.instance,p:{x:-37.4,y:-67.3,scaleX:0.985,scaleY:0.985,skewX:-18.2,skewY:161.7}}]},2).to({state:[{t:this.instance_1,p:{x:104.3,y:-61.5,skewX:33.1,skewY:-146.8,scaleX:1.052,scaleY:0.786,startPosition:1}},{t:this.instance,p:{x:-37.6,y:-66.1,scaleX:0.985,scaleY:0.985,skewX:-16.6,skewY:163.3}}]},1).wait(18));

	// PUPILS
	this.instance_4 = new lib.CUP_34_pupil_02("synched",0);
	this.instance_4.setTransform(-28.3,-18.2,1,1,0,0,180);

	this.instance_5 = new lib.CUP_34_pupil_01("synched",0);
	this.instance_5.setTransform(104.5,-21.4,1,1,0,0,180);

	this.instance_6 = new lib.CUP23LPUPILR001("single",0);
	this.instance_6.setTransform(87.6,-31.4,0.98,0.98,0,0,180,1.9,2.5);

	this.instance_7 = new lib.CUP23LPUPILL001("single",0);
	this.instance_7.setTransform(-44.8,-31.4,1.03,1.03,0,0,180,2,2.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhKBNQgCgEAAgGQAAgSBNhQQAYgZAQgOIAGgBQAOgCAKgEIAGAJQgLAPg1A8QgkAsgSATQgLABgLAHIgLgBg");
	this.shape.setTransform(-29.2,-39.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag3A8QgDgFAAgGQAAgDAWgZIAJgLIAXgYQAYgcARgKIgBAGIAFgBIACADQABABAQgaQgWAmgFAGQgIAOgQAPIgPAbQgZAngIAAQgMAAgEgKg");
	this.shape_1.setTransform(106,-37.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5,p:{x:104.5,y:-21.4}},{t:this.instance_4,p:{x:-28.3,y:-18.2}}]}).to({state:[{t:this.instance_5,p:{x:104.5,y:-21.4}},{t:this.instance_4,p:{x:-28.3,y:-18.2}}]},29).to({state:[{t:this.instance_5,p:{x:103.8,y:-7.1}},{t:this.instance_4,p:{x:-29,y:-3.9}}]},5).to({state:[{t:this.instance_5,p:{x:103.6,y:-3}},{t:this.instance_4,p:{x:-29.2,y:0.2}}]},1).to({state:[{t:this.instance_5,p:{x:101.9,y:-16.3}},{t:this.instance_4,p:{x:-31.4,y:-13.7}}]},2).to({state:[{t:this.instance_5,p:{x:100.9,y:-40.2}},{t:this.instance_4,p:{x:-31.6,y:-40.9}}]},1).to({state:[{t:this.instance_5,p:{x:100.1,y:-37.3}},{t:this.instance_4,p:{x:-32.4,y:-38}}]},2).to({state:[{t:this.instance_5,p:{x:100.4,y:-34.7}},{t:this.instance_4,p:{x:-32.1,y:-35.4}}]},2).to({state:[{t:this.instance_5,p:{x:99.7,y:-31.7}},{t:this.instance_4,p:{x:-33.1,y:-31.1}}]},7).to({state:[]},1).to({state:[{t:this.instance_5,p:{x:99.3,y:-29.9}},{t:this.instance_4,p:{x:-33.5,y:-29}}]},4).to({state:[{t:this.instance_7,p:{x:-44.8,y:-31.4}},{t:this.instance_6,p:{x:87.6,y:-31.4}}]},2).to({state:[{t:this.instance_7,p:{x:-45.1,y:-33.5}},{t:this.instance_6,p:{x:87.3,y:-33.5}}]},1).to({state:[{t:this.instance_7,p:{x:-45,y:-32.8}},{t:this.instance_6,p:{x:87.4,y:-32.8}}]},2).to({state:[{t:this.instance_7,p:{x:-44.9,y:-32.1}},{t:this.instance_6,p:{x:87.5,y:-32.1}}]},2).to({state:[{t:this.instance_7,p:{x:-44.8,y:-31.8}},{t:this.instance_6,p:{x:87.6,y:-31.8}}]},2).to({state:[{t:this.instance_7,p:{x:-44.5,y:-28.3}},{t:this.instance_6,p:{x:87.9,y:-28.3}}]},13).to({state:[]},1).to({state:[{t:this.instance_5,p:{x:107.5,y:-29.2}},{t:this.instance_4,p:{x:-23.9,y:-30.4}}]},8).to({state:[{t:this.instance_5,p:{x:108.7,y:-43}},{t:this.instance_4,p:{x:-22.7,y:-44.2}}]},2).to({state:[{t:this.instance_5,p:{x:108.8,y:-44.4}},{t:this.instance_4,p:{x:-22.6,y:-45.6}}]},1).to({state:[{t:this.instance_5,p:{x:108.5,y:-42.6}},{t:this.instance_4,p:{x:-24.6,y:-43.9}}]},29).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_5,p:{x:101.8,y:-33}},{t:this.instance_4,p:{x:-34.4,y:-32.9}}]},1).to({state:[{t:this.instance_5,p:{x:99.8,y:-30.8}},{t:this.instance_4,p:{x:-33,y:-30.2}}]},23).to({state:[]},1).to({state:[{t:this.instance_5,p:{x:99.4,y:-29.5}},{t:this.instance_4,p:{x:-33.5,y:-28.5}}]},6).to({state:[{t:this.instance_5,p:{x:101.8,y:-33}},{t:this.instance_4,p:{x:-34.4,y:-32.9}}]},1).to({state:[{t:this.instance_5,p:{x:101.9,y:-33.9}},{t:this.instance_4,p:{x:-34.3,y:-33.8}}]},2).to({state:[{t:this.instance_5,p:{x:101.8,y:-33}},{t:this.instance_4,p:{x:-34.4,y:-32.9}}]},2).to({state:[{t:this.instance_5,p:{x:101.7,y:-32.5}},{t:this.instance_4,p:{x:-34.4,y:-32.5}}]},2).to({state:[{t:this.instance_5,p:{x:101.7,y:-32.5}},{t:this.instance_4,p:{x:-34.4,y:-32.5}}]},13).to({state:[{t:this.instance_5,p:{x:99.8,y:-30.8}},{t:this.instance_4,p:{x:-33,y:-30.2}}]},2).to({state:[]},1).to({state:[{t:this.instance_5,p:{x:99.4,y:-29.5}},{t:this.instance_4,p:{x:-33.5,y:-28.5}}]},8).to({state:[{t:this.instance_5,p:{x:101.9,y:-33.9}},{t:this.instance_4,p:{x:-34.3,y:-33.8}}]},1).to({state:[{t:this.instance_5,p:{x:101.8,y:-33}},{t:this.instance_4,p:{x:-34.4,y:-32.9}}]},2).to({state:[{t:this.instance_5,p:{x:101.7,y:-32.5}},{t:this.instance_4,p:{x:-34.4,y:-32.5}}]},2).to({state:[{t:this.instance_5,p:{x:101.7,y:-32.5}},{t:this.instance_4,p:{x:-34.4,y:-32.5}}]},24).to({state:[{t:this.instance_5,p:{x:101.7,y:-32.5}},{t:this.instance_4,p:{x:-34.4,y:-32.5}}]},2).to({state:[{t:this.instance_5,p:{x:101.7,y:-32.5}},{t:this.instance_4,p:{x:-34.4,y:-32.5}}]},1).wait(18));

	// EYED
	this.instance_8 = new lib.CUP_34_eye_02("single",0);
	this.instance_8.setTransform(-36.8,-34.3,0.924,1,0,0,180);

	this.instance_9 = new lib.CUP_34_eye_01("single",0);
	this.instance_9.setTransform(105,-37.2,1,0.958,0,0,180);

	this.instance_10 = new lib.CUP23LEYER001("single",0);
	this.instance_10.setTransform(88.9,-32.1,0.79,0.871,0,1.8,0);

	this.instance_11 = new lib.CUP23LEYEL001("single",0);
	this.instance_11.setTransform(-47.5,-31.4,0.945,0.945,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9,p:{x:105,y:-37.2,startPosition:0}},{t:this.instance_8,p:{x:-36.8,y:-34.3,startPosition:0}}]}).to({state:[{t:this.instance_9,p:{x:105,y:-37.2,startPosition:0}},{t:this.instance_8,p:{x:-36.8,y:-34.3,startPosition:0}}]},29).to({state:[{t:this.instance_9,p:{x:104.3,y:-22.9,startPosition:0}},{t:this.instance_8,p:{x:-37.5,y:-20,startPosition:0}}]},5).to({state:[{t:this.instance_9,p:{x:104.1,y:-18.8,startPosition:0}},{t:this.instance_8,p:{x:-37.7,y:-15.9,startPosition:0}}]},1).to({state:[{t:this.instance_9,p:{x:104.4,y:-24.9,startPosition:0}},{t:this.instance_8,p:{x:-37.4,y:-22,startPosition:0}}]},2).to({state:[{t:this.instance_9,p:{x:105.2,y:-41.3,startPosition:0}},{t:this.instance_8,p:{x:-36.6,y:-38.4,startPosition:0}}]},1).to({state:[{t:this.instance_9,p:{x:105.1,y:-39.3,startPosition:0}},{t:this.instance_8,p:{x:-36.7,y:-36.4,startPosition:0}}]},2).to({state:[{t:this.instance_9,p:{x:105,y:-37.2,startPosition:0}},{t:this.instance_8,p:{x:-36.8,y:-34.3,startPosition:0}}]},2).to({state:[{t:this.instance_9,p:{x:105,y:-35.2,startPosition:1}},{t:this.instance_8,p:{x:-36.8,y:-32.3,startPosition:1}}]},7).to({state:[{t:this.instance_9,p:{x:104.6,y:-32.5,startPosition:2}},{t:this.instance_8,p:{x:-37.2,y:-29.6,startPosition:2}}]},1).to({state:[{t:this.instance_9,p:{x:104.6,y:-31.8,startPosition:2}},{t:this.instance_8,p:{x:-37.2,y:-28.9,startPosition:2}}]},2).to({state:[{t:this.instance_9,p:{x:105,y:-32.7,startPosition:1}},{t:this.instance_8,p:{x:-36.8,y:-29.8,startPosition:1}}]},2).to({state:[{t:this.instance_11,p:{x:-47.5,y:-31.4,startPosition:0}},{t:this.instance_10,p:{x:88.9,y:-32.1,startPosition:0,regX:0}}]},2).to({state:[{t:this.instance_11,p:{x:-47.8,y:-33.5,startPosition:0}},{t:this.instance_10,p:{x:88.6,y:-34.2,startPosition:0,regX:0}}]},1).to({state:[{t:this.instance_11,p:{x:-47.7,y:-32.8,startPosition:0}},{t:this.instance_10,p:{x:88.7,y:-33.5,startPosition:0,regX:0}}]},2).to({state:[{t:this.instance_11,p:{x:-47.6,y:-32.1,startPosition:0}},{t:this.instance_10,p:{x:88.8,y:-32.8,startPosition:0,regX:0}}]},2).to({state:[{t:this.instance_11,p:{x:-47.6,y:-31.8,startPosition:0}},{t:this.instance_10,p:{x:88.9,y:-32.5,startPosition:0,regX:0}}]},2).to({state:[{t:this.instance_11,p:{x:-47.3,y:-29.3,startPosition:1}},{t:this.instance_10,p:{x:89.1,y:-30,startPosition:1,regX:0}}]},13).to({state:[{t:this.instance_11,p:{x:-46.2,y:-25,startPosition:2}},{t:this.instance_10,p:{x:90.7,y:-25.7,startPosition:2,regX:0.6}}]},1).to({state:[{t:this.instance_11,p:{x:-46,y:-23,startPosition:2}},{t:this.instance_10,p:{x:90.9,y:-23.7,startPosition:2,regX:0.6}}]},2).to({state:[{t:this.instance_11,p:{x:-46.3,y:-24.5,startPosition:2}},{t:this.instance_10,p:{x:90.6,y:-25.2,startPosition:2,regX:0.6}}]},4).to({state:[{t:this.instance_9,p:{x:104.7,y:-33,startPosition:1}},{t:this.instance_8,p:{x:-37.1,y:-30.1,startPosition:1}}]},2).to({state:[{t:this.instance_9,p:{x:104.9,y:-35.8,startPosition:0}},{t:this.instance_8,p:{x:-36.9,y:-32.9,startPosition:0}}]},2).to({state:[{t:this.instance_9,p:{x:105,y:-37.2,startPosition:0}},{t:this.instance_8,p:{x:-36.8,y:-34.3,startPosition:0}}]},1).to({state:[{t:this.instance_9,p:{x:105,y:-37.2,startPosition:0}},{t:this.instance_8,p:{x:-36.8,y:-34.3,startPosition:0}}]},29).to({state:[{t:this.instance_9,p:{x:105,y:-37.2,startPosition:0}},{t:this.instance_8,p:{x:-36.8,y:-34.3,startPosition:0}}]},1).to({state:[{t:this.instance_9,p:{x:105,y:-37.2,startPosition:0}},{t:this.instance_8,p:{x:-36.8,y:-34.3,startPosition:0}}]},1).to({state:[{t:this.instance_9,p:{x:105.1,y:-34.3,startPosition:1}},{t:this.instance_8,p:{x:-36.7,y:-31.4,startPosition:1}}]},23).to({state:[{t:this.instance_9,p:{x:104.8,y:-30.3,startPosition:2}},{t:this.instance_8,p:{x:-37,y:-27.4,startPosition:2}}]},1).to({state:[{t:this.instance_9,p:{x:104.9,y:-29.1,startPosition:2}},{t:this.instance_8,p:{x:-36.9,y:-26.2,startPosition:2}}]},2).to({state:[{t:this.instance_9,p:{x:104.8,y:-30,startPosition:2}},{t:this.instance_8,p:{x:-37,y:-27.1,startPosition:2}}]},2).to({state:[{t:this.instance_9,p:{x:105,y:-32.3,startPosition:1}},{t:this.instance_8,p:{x:-36.8,y:-29.4,startPosition:1}}]},2).to({state:[{t:this.instance_9,p:{x:105,y:-37.2,startPosition:0}},{t:this.instance_8,p:{x:-36.8,y:-34.3,startPosition:0}}]},1).to({state:[{t:this.instance_9,p:{x:105.1,y:-38.1,startPosition:0}},{t:this.instance_8,p:{x:-36.7,y:-35.2,startPosition:0}}]},2).to({state:[{t:this.instance_9,p:{x:105,y:-37.2,startPosition:0}},{t:this.instance_8,p:{x:-36.8,y:-34.3,startPosition:0}}]},2).to({state:[{t:this.instance_9,p:{x:104.9,y:-36.8,startPosition:0}},{t:this.instance_8,p:{x:-36.9,y:-33.9,startPosition:0}}]},2).to({state:[{t:this.instance_9,p:{x:104.9,y:-36.8,startPosition:0}},{t:this.instance_8,p:{x:-36.9,y:-33.9,startPosition:0}}]},13).to({state:[{t:this.instance_9,p:{x:105.1,y:-34.3,startPosition:1}},{t:this.instance_8,p:{x:-36.7,y:-31.4,startPosition:1}}]},2).to({state:[{t:this.instance_9,p:{x:104.8,y:-30.3,startPosition:2}},{t:this.instance_8,p:{x:-37,y:-27.4,startPosition:2}}]},1).to({state:[{t:this.instance_9,p:{x:104.9,y:-29.1,startPosition:2}},{t:this.instance_8,p:{x:-36.9,y:-26.2,startPosition:2}}]},2).to({state:[{t:this.instance_9,p:{x:104.8,y:-30,startPosition:2}},{t:this.instance_8,p:{x:-37,y:-27.1,startPosition:2}}]},4).to({state:[{t:this.instance_9,p:{x:105,y:-32.3,startPosition:1}},{t:this.instance_8,p:{x:-36.8,y:-29.4,startPosition:1}}]},2).to({state:[{t:this.instance_9,p:{x:105.1,y:-38.1,startPosition:0}},{t:this.instance_8,p:{x:-36.7,y:-35.2,startPosition:0}}]},1).to({state:[{t:this.instance_9,p:{x:105,y:-37.2,startPosition:0}},{t:this.instance_8,p:{x:-36.8,y:-34.3,startPosition:0}}]},2).to({state:[{t:this.instance_9,p:{x:104.9,y:-36.8,startPosition:0}},{t:this.instance_8,p:{x:-36.9,y:-33.9,startPosition:0}}]},2).to({state:[{t:this.instance_9,p:{x:104.9,y:-36.8,startPosition:0}},{t:this.instance_8,p:{x:-36.9,y:-33.9,startPosition:0}}]},24).to({state:[{t:this.instance_9,p:{x:104.9,y:-36.8,startPosition:0}},{t:this.instance_8,p:{x:-36.9,y:-33.9,startPosition:0}}]},2).to({state:[{t:this.instance_9,p:{x:104.9,y:-36.8,startPosition:0}},{t:this.instance_8,p:{x:-36.9,y:-33.9,startPosition:0}}]},1).wait(18));

	// MOUTH
	this.instance_12 = new lib.CUP_23_MOUTH_COMPcopy("single",1);
	this.instance_12.setTransform(51.9,-10.4,0.792,0.531,0,-10.7,171.3,31,10.3);

	this.instance_13 = new lib.CUP23LMOUTH001("single",5);
	this.instance_13.setTransform(26.7,-8.8,0.792,0.531,0,-9.7,172.4,30.9,10.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12,p:{startPosition:1,x:51.9,y:-10.4}}]}).to({state:[{t:this.instance_12,p:{startPosition:4,x:51.9,y:-10.4}}]},23).to({state:[{t:this.instance_12,p:{startPosition:3,x:51.2,y:3.8}}]},11).to({state:[{t:this.instance_12,p:{startPosition:2,x:51,y:7.9}}]},1).to({state:[{t:this.instance_12,p:{startPosition:18,x:51.3,y:1.8}}]},2).to({state:[{t:this.instance_12,p:{startPosition:18,x:52.1,y:-14.5}}]},1).to({state:[{t:this.instance_12,p:{startPosition:1,x:52,y:-12.5}}]},2).to({state:[{t:this.instance_12,p:{startPosition:1,x:51.9,y:-10.4}}]},2).to({state:[{t:this.instance_12,p:{startPosition:8,x:51.9,y:-8.4}}]},7).to({state:[{t:this.instance_12,p:{startPosition:9,x:51.5,y:-5.7}}]},1).to({state:[{t:this.instance_12,p:{startPosition:9,x:51.5,y:-5}}]},2).to({state:[{t:this.instance_12,p:{startPosition:8,x:51.9,y:-5.9}}]},2).to({state:[{t:this.instance_12,p:{startPosition:7,x:51.9,y:-5.9}}]},1).to({state:[{t:this.instance_13,p:{x:26.7,y:-8.8,startPosition:5}}]},1).to({state:[{t:this.instance_13,p:{x:26.4,y:-10.9,startPosition:3}}]},1).to({state:[{t:this.instance_13,p:{x:26.4,y:-10.9,startPosition:16}}]},1).to({state:[{t:this.instance_13,p:{x:26.5,y:-10.2,startPosition:18}}]},1).to({state:[{t:this.instance_13,p:{x:26.6,y:-9.5,startPosition:3}}]},2).to({state:[{t:this.instance_13,p:{x:26.6,y:-9.5,startPosition:2}}]},1).to({state:[{t:this.instance_13,p:{x:26.6,y:-9.2,startPosition:1}}]},1).to({state:[{t:this.instance_13,p:{x:26.6,y:-9.2,startPosition:18}}]},2).to({state:[{t:this.instance_13,p:{x:26.6,y:-9.2,startPosition:7}}]},1).to({state:[{t:this.instance_13,p:{x:26.6,y:-9.2,startPosition:8}}]},1).to({state:[{t:this.instance_13,p:{x:26.6,y:-9.2,startPosition:2}}]},1).to({state:[{t:this.instance_13,p:{x:26.6,y:-9.2,startPosition:18}}]},1).to({state:[{t:this.instance_13,p:{x:26.6,y:-9.2,startPosition:4}}]},1).to({state:[{t:this.instance_13,p:{x:26.6,y:-9.2,startPosition:3}}]},1).to({state:[{t:this.instance_13,p:{x:26.6,y:-9.2,startPosition:16}}]},1).to({state:[{t:this.instance_13,p:{x:26.6,y:-9.2,startPosition:12}}]},2).to({state:[{t:this.instance_13,p:{x:26.6,y:-9.2,startPosition:15}}]},1).to({state:[{t:this.instance_13,p:{x:26.9,y:-6.7,startPosition:15}}]},1).to({state:[{t:this.instance_13,p:{x:28,y:-2.4,startPosition:3}}]},1).to({state:[{t:this.instance_13,p:{x:28,y:-2.4,startPosition:18}}]},1).to({state:[{t:this.instance_13,p:{x:28.2,y:-0.4,startPosition:19}}]},1).to({state:[{t:this.instance_13,p:{x:28.2,y:-0.4,startPosition:16}}]},3).to({state:[{t:this.instance_13,p:{x:27.9,y:-1.9,startPosition:12}}]},1).to({state:[{t:this.instance_13,p:{x:27.9,y:-1.9,startPosition:14}}]},1).to({state:[{t:this.instance_12,p:{startPosition:15,x:51.6,y:-6.2}}]},1).to({state:[{t:this.instance_12,p:{startPosition:3,x:51.8,y:-9}}]},2).to({state:[{t:this.instance_12,p:{startPosition:1,x:51.9,y:-10.4}}]},1).to({state:[{t:this.instance_12,p:{startPosition:8,x:51.9,y:-10.4}}]},1).to({state:[{t:this.instance_12,p:{startPosition:9,x:51.9,y:-10.4}}]},1).to({state:[{t:this.instance_12,p:{startPosition:7,x:51.9,y:-10.4}}]},1).to({state:[{t:this.instance_12,p:{startPosition:5,x:51.9,y:-10.4}}]},1).to({state:[{t:this.instance_12,p:{startPosition:3,x:51.9,y:-10.4}}]},2).to({state:[{t:this.instance_12,p:{startPosition:2,x:51.9,y:-10.4}}]},1).to({state:[{t:this.instance_12,p:{startPosition:1,x:51.9,y:-10.4}}]},1).to({state:[{t:this.instance_12,p:{startPosition:18,x:51.9,y:-10.4}}]},1).to({state:[{t:this.instance_12,p:{startPosition:19,x:51.9,y:-10.4}}]},2).to({state:[{t:this.instance_12,p:{startPosition:3,x:51.9,y:-10.4}}]},2).to({state:[{t:this.instance_12,p:{startPosition:4,x:51.9,y:-10.4}}]},1).to({state:[{t:this.instance_12,p:{startPosition:3,x:51.9,y:-10.4}}]},4).to({state:[{t:this.instance_12,p:{startPosition:18,x:51.9,y:-10.4}}]},2).to({state:[{t:this.instance_12,p:{startPosition:19,x:51.9,y:-10.4}}]},1).to({state:[{t:this.instance_12,p:{startPosition:7,x:51.9,y:-10.4}}]},7).to({state:[{t:this.instance_12,p:{startPosition:8,x:51.9,y:-10.4}}]},1).to({state:[{t:this.instance_12,p:{startPosition:5,x:51.9,y:-10.4}}]},1).to({state:[{t:this.instance_12,p:{startPosition:4,x:51.9,y:-10.4}}]},1).to({state:[{t:this.instance_12,p:{startPosition:3,x:51.9,y:-10.4}}]},1).to({state:[{t:this.instance_12,p:{startPosition:18,x:51.9,y:-10.4}}]},2).to({state:[{t:this.instance_12,p:{startPosition:19,x:51.9,y:-10.4}}]},2).to({state:[{t:this.instance_12,p:{startPosition:3,x:51.9,y:-10.4}}]},2).to({state:[{t:this.instance_12,p:{startPosition:4,x:51.9,y:-10.4}}]},1).to({state:[{t:this.instance_12,p:{startPosition:2,x:51.9,y:-10.4}}]},1).to({state:[{t:this.instance_12,p:{startPosition:1,x:51.9,y:-10.4}}]},1).to({state:[{t:this.instance_12,p:{startPosition:11,x:51.9,y:-10.4}}]},2).to({state:[{t:this.instance_12,p:{startPosition:3,x:51.9,y:-10.4}}]},1).to({state:[{t:this.instance_12,p:{startPosition:4,x:51.9,y:-10.4}}]},1).to({state:[{t:this.instance_12,p:{startPosition:18,x:51.9,y:-10.4}}]},1).to({state:[{t:this.instance_12,p:{startPosition:3,x:51.9,y:-10.4}}]},1).to({state:[{t:this.instance_12,p:{startPosition:7,x:51.9,y:-10.4}}]},1).to({state:[{t:this.instance_12,p:{startPosition:8,x:51.9,y:-10.4}}]},2).to({state:[{t:this.instance_12,p:{startPosition:7,x:51.9,y:-10.4}}]},1).to({state:[{t:this.instance_12,p:{startPosition:18,x:51.9,y:-10.4}}]},1).to({state:[{t:this.instance_12,p:{startPosition:7,x:52,y:-7.5}}]},2).to({state:[{t:this.instance_12,p:{startPosition:8,x:51.7,y:-3.5}}]},1).to({state:[{t:this.instance_12,p:{startPosition:3,x:51.7,y:-3.5}}]},1).to({state:[{t:this.instance_12,p:{startPosition:18,x:51.8,y:-2.3}}]},1).to({state:[{t:this.instance_12,p:{startPosition:1,x:51.7,y:-3.2}}]},2).to({state:[{t:this.instance_12,p:{startPosition:3,x:51.7,y:-3.2}}]},1).to({state:[{t:this.instance_12,p:{startPosition:4,x:51.9,y:-5.5}}]},1).to({state:[{t:this.instance_12,p:{startPosition:4,x:51.9,y:-10.4}}]},1).to({state:[{t:this.instance_12,p:{startPosition:3,x:52,y:-11.3}}]},2).to({state:[{t:this.instance_12,p:{startPosition:2,x:51.9,y:-10.4}}]},2).to({state:[{t:this.instance_12,p:{startPosition:1,x:51.8,y:-10}}]},2).to({state:[{t:this.instance_12,p:{startPosition:2,x:51.8,y:-10}}]},8).to({state:[{t:this.instance_12,p:{startPosition:8,x:51.8,y:-10}}]},2).to({state:[{t:this.instance_12,p:{startPosition:9,x:51.8,y:-10}}]},1).to({state:[{t:this.instance_12,p:{startPosition:7,x:51.8,y:-10}}]},1).to({state:[{t:this.instance_12,p:{startPosition:2,x:51.8,y:-10}}]},1).to({state:[{t:this.instance_12,p:{startPosition:1,x:52,y:-7.5}}]},2).to({state:[{t:this.instance_12,p:{startPosition:1,x:51.7,y:-3.5}}]},1).to({state:[{t:this.instance_12,p:{startPosition:8,x:51.7,y:-3.5}}]},1).to({state:[{t:this.instance_12,p:{startPosition:4,x:51.8,y:-2.3}}]},1).to({state:[{t:this.instance_12,p:{startPosition:16,x:51.8,y:-2.3}}]},2).to({state:[{t:this.instance_12,p:{startPosition:2,x:51.7,y:-3.2}}]},2).to({state:[{t:this.instance_12,p:{startPosition:3,x:51.9,y:-5.5}}]},2).to({state:[{t:this.instance_12,p:{startPosition:4,x:52,y:-11.3}}]},1).to({state:[{t:this.instance_12,p:{startPosition:4,x:51.9,y:-10.4}}]},2).to({state:[{t:this.instance_12,p:{startPosition:2,x:51.8,y:-10}}]},2).to({state:[{t:this.instance_12,p:{startPosition:1,x:51.8,y:-10}}]},2).to({state:[{t:this.instance_12,p:{startPosition:1,x:51.8,y:-10}}]},22).to({state:[{t:this.instance_12,p:{startPosition:1,x:51.8,y:-10}}]},2).to({state:[{t:this.instance_12,p:{startPosition:1,x:51.8,y:-10}}]},1).wait(18));

	// BODY
	this.instance_14 = new lib.CUP_34_body("single",0);
	this.instance_14.setTransform(19.9,81.5,1,1,0,0,180,-1.5,82.4);

	this.instance_15 = new lib.CUP_34_handle("single",0);
	this.instance_15.setTransform(-70.2,11.2,1,1,0,0,180,-17.5,0.8);

	this.instance_16 = new lib.CUP23LBODY001("single",0);
	this.instance_16.setTransform(8,84.7,1,1,0,0,180,3,85);

	this.instance_17 = new lib.CUP23LHANDLE001("single",0);
	this.instance_17.setTransform(-69.5,9.1,1,1,0,0,180,-8.9,-1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14}]}).to({state:[{t:this.instance_15},{t:this.instance_14}]},29).to({state:[{t:this.instance_15},{t:this.instance_14}]},5).to({state:[{t:this.instance_15},{t:this.instance_14}]},1).to({state:[{t:this.instance_15},{t:this.instance_14}]},2).to({state:[{t:this.instance_15},{t:this.instance_14}]},1).to({state:[{t:this.instance_15},{t:this.instance_14}]},2).to({state:[{t:this.instance_15},{t:this.instance_14}]},2).to({state:[{t:this.instance_15},{t:this.instance_14}]},7).to({state:[{t:this.instance_15},{t:this.instance_14}]},1).to({state:[{t:this.instance_15},{t:this.instance_14}]},2).to({state:[{t:this.instance_15},{t:this.instance_14}]},2).to({state:[{t:this.instance_17},{t:this.instance_16}]},2).to({state:[{t:this.instance_17},{t:this.instance_16}]},1).to({state:[{t:this.instance_17},{t:this.instance_16}]},2).to({state:[{t:this.instance_17},{t:this.instance_16}]},2).to({state:[{t:this.instance_17},{t:this.instance_16}]},2).to({state:[{t:this.instance_17},{t:this.instance_16}]},13).to({state:[{t:this.instance_17},{t:this.instance_16}]},1).to({state:[{t:this.instance_17},{t:this.instance_16}]},2).to({state:[{t:this.instance_17},{t:this.instance_16}]},4).to({state:[{t:this.instance_15},{t:this.instance_14}]},2).to({state:[{t:this.instance_15},{t:this.instance_14}]},2).to({state:[{t:this.instance_15},{t:this.instance_14}]},1).to({state:[{t:this.instance_15},{t:this.instance_14}]},29).to({state:[{t:this.instance_15},{t:this.instance_14}]},1).to({state:[{t:this.instance_15},{t:this.instance_14}]},1).to({state:[{t:this.instance_15},{t:this.instance_14}]},23).to({state:[{t:this.instance_15},{t:this.instance_14}]},1).to({state:[{t:this.instance_15},{t:this.instance_14}]},2).to({state:[{t:this.instance_15},{t:this.instance_14}]},2).to({state:[{t:this.instance_15},{t:this.instance_14}]},2).to({state:[{t:this.instance_15},{t:this.instance_14}]},1).to({state:[{t:this.instance_15},{t:this.instance_14}]},2).to({state:[{t:this.instance_15},{t:this.instance_14}]},2).to({state:[{t:this.instance_15},{t:this.instance_14}]},2).to({state:[{t:this.instance_15},{t:this.instance_14}]},13).to({state:[{t:this.instance_15},{t:this.instance_14}]},2).to({state:[{t:this.instance_15},{t:this.instance_14}]},1).to({state:[{t:this.instance_15},{t:this.instance_14}]},2).to({state:[{t:this.instance_15},{t:this.instance_14}]},4).to({state:[{t:this.instance_15},{t:this.instance_14}]},2).to({state:[{t:this.instance_15},{t:this.instance_14}]},1).to({state:[{t:this.instance_15},{t:this.instance_14}]},2).to({state:[{t:this.instance_15},{t:this.instance_14}]},2).to({state:[{t:this.instance_15},{t:this.instance_14}]},24).to({state:[{t:this.instance_15},{t:this.instance_14}]},2).to({state:[{t:this.instance_15},{t:this.instance_14}]},1).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.5,-96.5,245.5,191.3);


(lib.Cup_Intro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// top
	this.instance = new lib.CUP_23_leg_l("single",11);
	this.instance.setTransform(-55.5,-286.7,0.953,1.04,0,-18,158.6,8.7,-18.8);

	this.instance_1 = new lib.CUP_FRONT_leg_r("single",11);
	this.instance_1.setTransform(-123.9,-259.3,0.958,1.036,0,-21.5,-25.4,-13.9,-23);

	this.instance_2 = new lib.cup34rarmr01("single",1);
	this.instance_2.setTransform(-167.5,-312.8,0.95,1.031,0,28.4,36.3,25.3,-27.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{regX:25.3,scaleX:0.95,scaleY:1.031,skewX:28.4,skewY:36.3,x:-167.5,y:-312.8,regY:-27.6,startPosition:1}},{t:this.instance_1,p:{regX:-13.9,scaleX:0.958,scaleY:1.036,skewX:-21.5,skewY:-25.4,x:-123.9,y:-259.3}},{t:this.instance,p:{regX:8.7,regY:-18.8,scaleX:0.953,scaleY:1.04,skewX:-18,skewY:158.6,x:-55.5,y:-286.7}}]}).to({state:[{t:this.instance_2,p:{regX:25.1,scaleX:1.176,scaleY:1.329,skewX:44.7,skewY:68.3,x:-95.7,y:-76.8,regY:-27.6,startPosition:1}},{t:this.instance_1,p:{regX:-14,scaleX:0.954,scaleY:1.342,skewX:-26.5,skewY:-44,x:-53.9,y:-5.3}},{t:this.instance,p:{regX:-18.5,regY:-4.8,scaleX:0.93,scaleY:1.358,skewX:-25.4,skewY:139.6,x:34.4,y:-40.5}}]},2).to({state:[{t:this.instance_2,p:{regX:25.2,scaleX:1.164,scaleY:1.136,skewX:43.5,skewY:69.3,x:-75.4,y:91.4,regY:-27.5,startPosition:1}},{t:this.instance_1,p:{regX:-14,scaleX:0.977,scaleY:1.133,skewX:-19.3,skewY:-27.4,x:-32.2,y:150.9}},{t:this.instance,p:{regX:8.7,regY:-18.8,scaleX:0.967,scaleY:1.142,skewX:-16.1,skewY:156.9,x:36.4,y:120.9}}]},1).to({state:[{t:this.instance_2,p:{regX:23.2,scaleX:1.004,scaleY:0.845,skewX:10.9,skewY:18.3,x:-84.7,y:122.4,regY:-22.4,startPosition:3}}]},1).to({state:[{t:this.instance_2,p:{regX:23.2,scaleX:1.05,scaleY:0.792,skewX:-11.5,skewY:-6.8,x:-90.2,y:130.8,regY:-22.7,startPosition:3}}]},1).to({state:[{t:this.instance_2,p:{regX:23.2,scaleX:1.037,scaleY:0.812,skewX:-15.6,skewY:-10,x:-89.5,y:126.8,regY:-22.6,startPosition:3}}]},2).to({state:[{t:this.instance_2,p:{regX:18.4,scaleX:0.947,scaleY:0.828,skewX:0.8,skewY:5.5,x:-84,y:106.9,regY:-30.8,startPosition:0}}]},1).to({state:[{t:this.instance_2,p:{regX:18.4,scaleX:0.932,scaleY:0.95,skewX:-6.7,skewY:-2.6,x:-82.7,y:97.9,regY:-30.8,startPosition:0}}]},1).to({state:[{t:this.instance_2,p:{regX:18.4,scaleX:0.931,scaleY:0.929,skewX:-6.8,skewY:-2.6,x:-82.7,y:100.8,regY:-30.7,startPosition:0}}]},2).to({state:[{t:this.instance_2,p:{regX:18.4,scaleX:0.931,scaleY:0.924,skewX:-6.9,skewY:-2.6,x:-82.7,y:102,regY:-30.7,startPosition:0}}]},2).wait(5));

	// head
	this.instance_3 = new lib.CUPBODYNEST("synched",29);
	this.instance_3.setTransform(-113,-352.7,0.943,1.031,0,-13.5,-16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({scaleX:0.89,scaleY:1.37,skewX:-12.4,skewY:-23.1,x:-50.4,y:-126.9,startPosition:31},0).wait(1).to({scaleX:0.95,scaleY:1.14,skewX:-11.9,skewY:-17.7,x:-20.6,y:47.5,startPosition:32},0).wait(1).to({scaleX:1,scaleY:0.84,skewX:-2.8,skewY:-0.3,x:-15.6,y:99.1,startPosition:33},0).wait(1).to({scaleX:1.06,scaleY:0.79,skewX:-0.6,skewY:1.6,x:-16.4,y:111.7,startPosition:34},0).wait(2).to({scaleX:1.04,scaleY:0.81,skewX:-1.8,skewY:0.4,x:-17.3,y:105.7,startPosition:36},0).wait(1).to({scaleX:0.95,scaleY:0.9,skewX:-5.4,skewY:-5.1,x:-17.1,y:82.6,startPosition:37},0).wait(1).to({scaleX:0.93,scaleY:0.95,skewX:-6,skewY:-6.6,x:-17.5,y:71,startPosition:38},0).wait(2).to({scaleY:0.93,skewX:-6.1,skewY:-6.5,y:74.5,startPosition:40},0).wait(2).to({scaleY:0.92,skewX:-6.2,skewY:-6.4,y:75.8,startPosition:42},0).wait(5));

	// back
	this.instance_4 = new lib.cup34rarml01("single",1);
	this.instance_4.setTransform(-21.3,-355.6,0.855,1.036,0,-33.7,-40.7,-19.8,-25.5);

	this.instance_5 = new lib.CUP_FRONT_leg_r("single",5);
	this.instance_5.setTransform(28.1,205.5,0.938,1.03,0,0.3,-179.8,-31.3,25);

	this.instance_6 = new lib.CUP_FRONT_leg_r("single",5);
	this.instance_6.setTransform(-42.2,210.1,0.938,1.03,0,-1.6,-1.7,-22.8,30.1);

	this.instance_7 = new lib.CUP_23_leg_l("single",14);
	this.instance_7.setTransform(27.5,139.6,0.929,0.888,0,-16.3,167.4,8.6,-19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4,p:{regX:-19.8,regY:-25.5,scaleX:0.855,scaleY:1.036,skewX:-33.7,skewY:-40.7,x:-21.3,y:-355.6,startPosition:1}}]}).to({state:[{t:this.instance_4,p:{regX:-16.3,regY:-36.1,scaleX:1.393,scaleY:1.303,skewX:-54.6,skewY:-76.7,x:26.8,y:-150.9,startPosition:1}}]},2).to({state:[{t:this.instance_4,p:{regX:-30.8,regY:-23,scaleX:1.002,scaleY:1.13,skewX:-45.9,skewY:-64.4,x:72.9,y:53,startPosition:1}}]},1).to({state:[{t:this.instance_4,p:{regX:-12.5,regY:-27.3,scaleX:0.893,scaleY:0.856,skewX:-10.9,skewY:-11.2,x:85,y:112.8,startPosition:2}},{t:this.instance_6,p:{scaleY:1.03,skewX:-1.6,skewY:-1.7,y:210.1,rotation:0}},{t:this.instance_5,p:{regY:25,scaleY:1.03,y:205.5,regX:-31.3,scaleX:0.938,skewX:0.3,skewY:-179.8,x:28.1,startPosition:5,rotation:0}}]},1).to({state:[{t:this.instance_4,p:{regX:-12.5,regY:-27.3,scaleX:0.939,scaleY:0.802,skewX:11.7,skewY:13.6,x:89.2,y:128.6,startPosition:2}},{t:this.instance_6,p:{scaleY:0.938,skewX:-1.8,skewY:-1.5,y:210.9,rotation:0}},{t:this.instance_5,p:{regY:25.1,scaleY:0.938,y:206.8,regX:-31.3,scaleX:0.938,skewX:0.3,skewY:-179.8,x:28.1,startPosition:5,rotation:0}}]},1).to({state:[{t:this.instance_4,p:{regX:-12.6,regY:-27.3,scaleX:0.925,scaleY:0.822,skewX:25.4,skewY:26.6,x:87,y:120.6,startPosition:2}},{t:this.instance_6,p:{scaleY:0.984,skewX:0,skewY:0,y:211.1,rotation:-1.7}},{t:this.instance_5,p:{regY:25.1,scaleY:0.984,y:206.8,regX:-31.3,scaleX:0.938,skewX:0.3,skewY:-179.8,x:28.1,startPosition:5,rotation:0}}]},2).to({state:[{t:this.instance_4,p:{regX:-16.5,regY:-36.3,scaleX:0.846,scaleY:0.878,skewX:-9.3,skewY:-11,x:74.5,y:83,startPosition:0}},{t:this.instance_5,p:{regY:-20,scaleY:0.891,y:155.7,regX:-5.6,scaleX:0.925,skewX:-20.2,skewY:-16.1,x:-34,startPosition:14,rotation:0}},{t:this.instance_7,p:{regY:-19,scaleX:0.929,scaleY:0.888,skewX:-16.3,skewY:167.4,x:27.5,y:139.6}}]},1).to({state:[{t:this.instance_4,p:{regX:-16.6,regY:-36.3,scaleX:0.833,scaleY:0.964,skewX:-5.2,skewY:-7.7,x:72.6,y:69.7,startPosition:0}},{t:this.instance_5,p:{regY:-20,scaleY:0.944,y:150.7,regX:-5.6,scaleX:0.94,skewX:0,skewY:0,x:-31.8,startPosition:14,rotation:-17.2}},{t:this.instance_7,p:{regY:-18.9,scaleX:0.94,scaleY:0.945,skewX:-13.4,skewY:166.6,x:30.3,y:133.5}}]},1).to({state:[{t:this.instance_4,p:{regX:-16.6,regY:-36.3,scaleX:0.832,scaleY:0.942,skewX:-5.3,skewY:-7.6,x:72.6,y:73.2,startPosition:0}},{t:this.instance_5,p:{regY:-20.1,scaleY:0.939,y:151.1,regX:-5.6,scaleX:0.939,skewX:-17.3,skewY:-17.1,x:-31.9,startPosition:14,rotation:0}},{t:this.instance_7,p:{regY:-19,scaleX:0.939,scaleY:0.939,skewX:-13.4,skewY:166.7,x:30.2,y:134}}]},2).to({state:[{t:this.instance_4,p:{regX:-16.6,regY:-36.3,scaleX:0.832,scaleY:0.938,skewX:-5.3,skewY:-7.5,x:72.6,y:74.5,startPosition:0}},{t:this.instance_5,p:{regY:-20.1,scaleY:0.932,y:151.6,regX:-5.5,scaleX:0.938,skewX:-17.4,skewY:-16.9,x:-31.8,startPosition:14,rotation:0}},{t:this.instance_7,p:{regY:-19,scaleX:0.939,scaleY:0.932,skewX:-13.5,skewY:166.8,x:30.2,y:134.6}}]},2).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-244.5,-483.9,272.5,258.3);


(lib.Cup_Idle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// top
	this.instance = new lib.cup34rarmr01("single",0);
	this.instance.setTransform(-80.8,95.9,0.931,0.924,0,-4.9,-0.6,18.4,-30.7);

	this.instance_1 = new lib.CUP_34_arm_01("single",57);
	this.instance_1.setTransform(74.3,83.6,0.921,0.921,0,-0.9,179,18.4,-24);

	this.instance_2 = new lib.CUP_34_arm_01copygg("single",58);
	this.instance_2.setTransform(71.3,69.5,0.921,0.921,0,-5.7,174.2,18.4,-24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{regX:18.4,regY:-30.7,scaleX:0.931,skewX:-4.9,skewY:-0.6,x:-80.8,y:95.9}}]}).to({state:[]},90).to({state:[{t:this.instance_1,p:{regY:-24,skewX:-0.9,skewY:179,x:74.3,y:83.6,startPosition:57,scaleX:0.921,scaleY:0.921}}]},7).to({state:[{t:this.instance_2,p:{regY:-24,skewX:-5.7,skewY:174.2,x:71.3,y:69.5,startPosition:58,scaleX:0.921,scaleY:0.921,regX:18.4}}]},1).to({state:[{t:this.instance_2,p:{regY:-24.1,skewX:-6.9,skewY:173,x:70.5,y:64.5,startPosition:55,scaleX:0.921,scaleY:0.921,regX:18.4}}]},1).to({state:[{t:this.instance_2,p:{regY:-24,skewX:-8.5,skewY:173,x:70.6,y:66.6,startPosition:55,scaleX:0.95,scaleY:0.902,regX:18.4}}]},2).to({state:[{t:this.instance_2,p:{regY:-24,skewX:-6.9,skewY:173,x:70.7,y:66.5,startPosition:55,scaleX:0.921,scaleY:0.921,regX:18.4}}]},1).to({state:[{t:this.instance_2,p:{regY:-24,skewX:-8.5,skewY:173,x:70.6,y:66.6,startPosition:55,scaleX:0.95,scaleY:0.902,regX:18.4}}]},1).to({state:[{t:this.instance_2,p:{regY:-24,skewX:-6.9,skewY:173,x:70.7,y:66.5,startPosition:55,scaleX:0.921,scaleY:0.921,regX:18.4}}]},1).to({state:[{t:this.instance_2,p:{regY:-24,skewX:-8.5,skewY:173,x:70.6,y:66.6,startPosition:55,scaleX:0.95,scaleY:0.902,regX:18.4}}]},1).to({state:[{t:this.instance_2,p:{regY:-24,skewX:-6.9,skewY:173,x:70.7,y:66.5,startPosition:55,scaleX:0.921,scaleY:0.921,regX:18.4}}]},1).to({state:[{t:this.instance_2,p:{regY:-24,skewX:-8.5,skewY:173,x:70.6,y:66.6,startPosition:55,scaleX:0.95,scaleY:0.902,regX:18.4}}]},1).to({state:[{t:this.instance_2,p:{regY:-24,skewX:-7.7,skewY:173,x:70.7,y:66.6,startPosition:55,scaleX:0.935,scaleY:0.911,regX:18.4}}]},1).to({state:[{t:this.instance_2,p:{regY:-24,skewX:-8.5,skewY:173,x:70.6,y:66.6,startPosition:55,scaleX:0.95,scaleY:0.902,regX:18.4}}]},1).to({state:[{t:this.instance_2,p:{regY:-24,skewX:-7.7,skewY:173,x:70.7,y:66.6,startPosition:55,scaleX:0.935,scaleY:0.911,regX:18.4}}]},1).to({state:[{t:this.instance_2,p:{regY:-24,skewX:-8.5,skewY:173,x:70.6,y:66.6,startPosition:55,scaleX:0.95,scaleY:0.902,regX:18.4}}]},1).to({state:[{t:this.instance_2,p:{regY:-24,skewX:-7.7,skewY:173,x:70.7,y:66.6,startPosition:55,scaleX:0.935,scaleY:0.911,regX:18.4}}]},1).to({state:[{t:this.instance_2,p:{regY:-24,skewX:-8,skewY:173,x:70.7,y:66.5,startPosition:55,scaleX:0.942,scaleY:0.906,regX:18.4}}]},1).to({state:[{t:this.instance_2,p:{regY:-24,skewX:-7.7,skewY:173,x:70.7,y:66.6,startPosition:55,scaleX:0.935,scaleY:0.911,regX:18.4}}]},1).to({state:[{t:this.instance_2,p:{regY:-66.5,skewX:-14.4,skewY:165.5,x:90.4,y:28.9,startPosition:61,scaleX:0.921,scaleY:0.921,regX:-9.1}}]},7).to({state:[{t:this.instance_1,p:{regY:-24.1,skewX:0.3,skewY:-179.6,x:77.9,y:89,startPosition:59,scaleX:0.921,scaleY:0.921}}]},2).to({state:[{t:this.instance_2,p:{regY:-24.1,skewX:2.9,skewY:-177,x:81.2,y:102,startPosition:56,scaleX:0.921,scaleY:0.921,regX:18.4}}]},1).to({state:[{t:this.instance_2,p:{regY:-24,skewX:0.6,skewY:-179.3,x:81.1,y:100.7,startPosition:56,scaleX:0.921,scaleY:0.921,regX:18.4}}]},2).to({state:[{t:this.instance_2,p:{regY:-24,skewX:2.6,skewY:-177.3,x:83.2,y:104.5,startPosition:56,scaleX:0.921,scaleY:0.921,regX:18.4}}]},6).to({state:[{t:this.instance_2,p:{regY:-24,skewX:3.2,skewY:-176.7,x:84.1,y:105.8,startPosition:56,scaleX:0.921,scaleY:0.921,regX:18.4}}]},2).to({state:[{t:this.instance_1,p:{regY:-24,skewX:3.1,skewY:-176.8,x:82.8,y:100.5,startPosition:60,scaleX:0.921,scaleY:0.921}}]},2).to({state:[{t:this.instance_1,p:{regY:-24.1,skewX:-41,skewY:157.5,x:75.4,y:88.5,startPosition:60,scaleX:0.847,scaleY:0.951}}]},2).to({state:[{t:this.instance,p:{regX:18.5,regY:-30.6,scaleX:0.894,skewX:-3.1,skewY:1.1,x:-78.7,y:98.3}}]},1).to({state:[{t:this.instance,p:{regX:18.4,regY:-30.7,scaleX:0.931,skewX:-4.3,skewY:0,x:-80.2,y:96.5}}]},1).to({state:[{t:this.instance,p:{regX:18.4,regY:-30.7,scaleX:0.931,skewX:-4.9,skewY:-0.6,x:-80.8,y:95.9}}]},2).wait(113));

	// head
	this.instance_3 = new lib.CUPBODYNEST_001("synched",0);
	this.instance_3.setTransform(-14.8,72,0.933,0.922,0,-4.3,-4.6);

	this.instance_4 = new lib.CUP_34DOWN_mouth("single",22);
	this.instance_4.setTransform(34.4,71.7,0.922,0.922,0,3.5,-176.4);

	this.instance_5 = new lib.CUP_34_pupil_02("synched",0);
	this.instance_5.setTransform(-43.5,47.8,0.922,0.922,0,1.3,-178.6);

	this.instance_6 = new lib.CUP_34_pupil_01("synched",0);
	this.instance_6.setTransform(79.8,50.6,0.922,0.922,0,1.3,-178.6);

	this.instance_7 = new lib.CUP_34_brow_02("synched",0);
	this.instance_7.setTransform(-38.7,22.3,0.922,0.922,0,1.3,-178.6);

	this.instance_8 = new lib.CUP_34_brow_01("single",0);
	this.instance_8.setTransform(81.6,29.2,0.922,0.922,0,1.3,-178.6);

	this.instance_9 = new lib.CUP_34_eye_02("single",1);
	this.instance_9.setTransform(-46.3,46.4,0.852,0.922,0,1.3,-178.6);

	this.instance_10 = new lib.CUP_34_eye_01("single",1);
	this.instance_10.setTransform(84.4,46.7,0.922,0.883,0,1.3,-178.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3,p:{skewX:-4.3,skewY:-4.6,x:-14.8,y:72,startPosition:0,loop:undefined}}]}).to({state:[{t:this.instance_10,p:{skewX:1.3,skewY:-178.6,x:84.4,y:46.7,startPosition:1,scaleX:0.922,scaleY:0.883}},{t:this.instance_9,p:{skewX:1.3,skewY:-178.6,x:-46.3,y:46.4,startPosition:1,scaleX:0.852,scaleY:0.922}},{t:this.instance_8,p:{scaleX:0.922,scaleY:0.922,skewX:1.3,skewY:-178.6,x:81.6,y:29.2,startPosition:0}},{t:this.instance_7,p:{scaleX:0.922,scaleY:0.922,skewX:1.3,skewY:-178.6,x:-38.7,y:22.3,mode:"synched"}},{t:this.instance_6,p:{skewX:1.3,skewY:-178.6,x:79.8,y:50.6,scaleX:0.922,scaleY:0.922}},{t:this.instance_5,p:{skewX:1.3,skewY:-178.6,x:-43.5,y:47.8,scaleX:0.922,scaleY:0.922}},{t:this.instance_4,p:{scaleX:0.922,scaleY:0.922,skewX:3.5,skewY:-176.4,x:34.4,y:71.7}}]},90).to({state:[{t:this.instance_10,p:{skewX:4.5,skewY:-175.4,x:88.3,y:56.4,startPosition:2,scaleX:0.922,scaleY:0.883}},{t:this.instance_9,p:{skewX:4.5,skewY:-175.4,x:-42.2,y:48.7,startPosition:2,scaleX:0.852,scaleY:0.922}},{t:this.instance_8,p:{scaleX:0.921,scaleY:0.921,skewX:-3.4,skewY:176.5,x:86.1,y:41.8,startPosition:0}},{t:this.instance_7,p:{scaleX:0.921,scaleY:0.921,skewX:11.3,skewY:-168.6,x:-33.6,y:30.6,mode:"synched"}},{t:this.instance_4,p:{scaleX:0.921,scaleY:0.921,skewX:6.7,skewY:-173.2,x:37,y:78.6}}]},2).to({state:[{t:this.instance_10,p:{skewX:5.8,skewY:-174.1,x:89.6,y:61.3,startPosition:2,scaleX:0.922,scaleY:0.883}},{t:this.instance_9,p:{skewX:5.8,skewY:-174.1,x:-40.7,y:50.7,startPosition:2,scaleX:0.852,scaleY:0.922}},{t:this.instance_8,p:{scaleX:0.921,scaleY:0.921,skewX:-2.1,skewY:177.8,x:87.5,y:48.3,startPosition:0}},{t:this.instance_7,p:{scaleX:0.921,scaleY:0.921,skewX:12.6,skewY:-167.3,x:-31.8,y:33.7,mode:"synched"}},{t:this.instance_4,p:{scaleX:0.921,scaleY:0.921,skewX:8,skewY:-171.9,x:37.8,y:82.4}}]},1).to({state:[{t:this.instance_10,p:{skewX:4.6,skewY:-175.3,x:88.8,y:57.3,startPosition:1,scaleX:0.922,scaleY:0.883}},{t:this.instance_9,p:{skewX:4.6,skewY:-175.3,x:-41.7,y:49.5,startPosition:1,scaleX:0.852,scaleY:0.922}},{t:this.instance_8,p:{scaleX:0.922,scaleY:0.922,skewX:4.6,skewY:-175.3,x:86.9,y:39.7,startPosition:0}},{t:this.instance_7,p:{scaleX:0.922,scaleY:0.922,skewX:4.6,skewY:-175.3,x:-32.7,y:25.9,mode:"synched"}},{t:this.instance_6,p:{skewX:4.6,skewY:-175.3,x:84,y:61,scaleX:0.922,scaleY:0.922}},{t:this.instance_5,p:{skewX:4.6,skewY:-175.3,x:-38.9,y:51.1,scaleX:0.922,scaleY:0.922}},{t:this.instance_4,p:{scaleX:0.921,scaleY:0.921,skewX:6.8,skewY:-173.1,x:37.5,y:79.4}}]},3).to({state:[{t:this.instance_10,p:{skewX:-0.9,skewY:179,x:80.1,y:36.9,startPosition:0,scaleX:0.921,scaleY:0.883}},{t:this.instance_9,p:{skewX:-0.9,skewY:179,x:-50.4,y:41.7,startPosition:0,scaleX:0.851,scaleY:0.921}},{t:this.instance_8,p:{scaleX:0.921,scaleY:0.921,skewX:0.5,skewY:-179.4,x:75.8,y:15.1,startPosition:0}},{t:this.instance_7,p:{scaleX:0.921,scaleY:0.921,skewX:2.8,skewY:-177.1,x:-44.5,y:12.9,mode:"synched"}},{t:this.instance_6,p:{skewX:-0.9,skewY:179,x:75.6,y:40,scaleX:0.921,scaleY:0.921}},{t:this.instance_5,p:{skewX:-0.9,skewY:179,x:-47.9,y:40.8,scaleX:0.921,scaleY:0.921}},{t:this.instance_4,p:{scaleX:0.921,scaleY:0.921,skewX:1.3,skewY:-178.6,x:31.2,y:63.8}}]},1).to({state:[{t:this.instance_10,p:{skewX:-5.7,skewY:174.2,x:73.1,y:21.5,startPosition:0,scaleX:0.921,scaleY:0.912}},{t:this.instance_9,p:{skewX:-5.7,skewY:174.2,x:-56.6,y:37.4,startPosition:0,scaleX:0.851,scaleY:0.952}},{t:this.instance_8,p:{scaleX:0.921,scaleY:0.921,skewX:-4.2,skewY:175.7,x:67,y:0,startPosition:0}},{t:this.instance_7,p:{scaleX:0.921,scaleY:0.921,skewX:-1.9,skewY:178,x:-53.2,y:7.8,mode:"synched"}},{t:this.instance_6,p:{skewX:-5.7,skewY:174.2,x:68.9,y:25.8,scaleX:0.921,scaleY:0.921}},{t:this.instance_5,p:{skewX:-5.7,skewY:174.2,x:-54.1,y:37,scaleX:0.921,scaleY:0.921}},{t:this.instance_4,p:{scaleX:0.921,scaleY:0.921,skewX:-3.4,skewY:176.5,x:26.7,y:53.4}}]},1).to({state:[{t:this.instance_10,p:{skewX:-6.9,skewY:173,x:71.3,y:16.7,startPosition:0,scaleX:0.921,scaleY:0.912}},{t:this.instance_9,p:{skewX:-6.9,skewY:173,x:-58,y:35.4,startPosition:0,scaleX:0.851,scaleY:0.952}},{t:this.instance_8,p:{scaleX:0.921,scaleY:0.921,skewX:-5.5,skewY:174.4,x:64.6,y:-4.7,startPosition:0}},{t:this.instance_7,p:{scaleX:0.921,scaleY:0.921,skewX:-3.1,skewY:176.8,x:-55.3,y:5.7,mode:"synched"}},{t:this.instance_6,p:{skewX:-6.9,skewY:173,x:67.2,y:21.1,scaleX:0.921,scaleY:0.921}},{t:this.instance_5,p:{skewX:-6.9,skewY:173,x:-55.5,y:35,scaleX:0.921,scaleY:0.921}},{t:this.instance_4,p:{scaleX:0.921,scaleY:0.921,skewX:-4.7,skewY:175.2,x:25.6,y:49.5}}]},1).to({state:[{t:this.instance_10,p:{skewX:-6.9,skewY:173,x:71.5,y:19.4,startPosition:0,scaleX:0.921,scaleY:0.883}},{t:this.instance_9,p:{skewX:-6.9,skewY:173,x:-57.8,y:38,startPosition:0,scaleX:0.851,scaleY:0.921}},{t:this.instance_8,p:{scaleX:0.921,scaleY:0.921,skewX:-5.5,skewY:174.4,x:64.9,y:-1.7,startPosition:0}},{t:this.instance_7,p:{scaleX:0.921,scaleY:0.921,skewX:-3.1,skewY:176.8,x:-55,y:8.7,mode:"single"}},{t:this.instance_6,p:{skewX:-6.9,skewY:173,x:67.3,y:23,scaleX:0.921,scaleY:0.921}},{t:this.instance_5,p:{skewX:-6.9,skewY:173,x:-55.4,y:36.9,scaleX:0.921,scaleY:0.921}},{t:this.instance_4,p:{scaleX:0.921,scaleY:0.921,skewX:-4.7,skewY:175.2,x:25.7,y:51.4}}]},2).to({state:[{t:this.instance_10,p:{skewX:-5.9,skewY:174,x:72.7,y:22.8,startPosition:0,scaleX:0.921,scaleY:0.883}},{t:this.instance_9,p:{skewX:-5.9,skewY:174,x:-56.9,y:39.1,startPosition:0,scaleX:0.851,scaleY:0.921}},{t:this.instance_8,p:{scaleX:0.921,scaleY:0.921,skewX:-4.4,skewY:175.5,x:66.5,y:1.6,startPosition:0}},{t:this.instance_7,p:{scaleX:0.921,scaleY:0.921,skewX:-2.1,skewY:177.8,x:-53.6,y:9.9,mode:"single"}},{t:this.instance_6,p:{skewX:-5.9,skewY:174,x:68.5,y:26.3,scaleX:0.921,scaleY:0.921}},{t:this.instance_5,p:{skewX:-5.9,skewY:174,x:-54.5,y:37.9,scaleX:0.921,scaleY:0.921}},{t:this.instance_4,p:{scaleX:0.921,scaleY:0.921,skewX:-3.7,skewY:176.2,x:26.3,y:54}}]},20).to({state:[{t:this.instance_10,p:{skewX:0.3,skewY:-179.6,x:84.8,y:42.6,startPosition:0,scaleX:0.921,scaleY:0.882}},{t:this.instance_9,p:{skewX:0.3,skewY:-179.6,x:-45.8,y:44.6,startPosition:0,scaleX:0.851,scaleY:0.921}},{t:this.instance_8,p:{scaleX:0.92,scaleY:0.92,skewX:1.7,skewY:-178.2,x:80.9,y:20.7,startPosition:0}},{t:this.instance_7,p:{scaleX:0.921,scaleY:0.921,skewX:4,skewY:-175.9,x:-39.4,y:15.9,mode:"single"}},{t:this.instance_6,p:{skewX:0.3,skewY:-179.6,x:80.1,y:45.5,scaleX:0.921,scaleY:0.921}},{t:this.instance_5,p:{skewX:0.3,skewY:-179.6,x:-43.3,y:43.7,scaleX:0.921,scaleY:0.921}},{t:this.instance_4,p:{scaleX:0.92,scaleY:0.92,skewX:2.5,skewY:-177.4,x:35.3,y:68.4}}]},2).to({state:[{t:this.instance_10,p:{skewX:2.9,skewY:-177,x:90.1,y:55.7,startPosition:0,scaleX:0.921,scaleY:0.883}},{t:this.instance_9,p:{skewX:2.9,skewY:-177,x:-40.4,y:51.9,startPosition:0,scaleX:0.851,scaleY:0.921}},{t:this.instance_8,p:{scaleX:0.92,scaleY:0.92,skewX:4.3,skewY:-175.6,x:87.2,y:33.8,startPosition:0}},{t:this.instance_7,p:{scaleX:0.921,scaleY:0.921,skewX:6.6,skewY:-173.3,x:-32.7,y:23.6,mode:"single"}},{t:this.instance_6,p:{skewX:2.9,skewY:-177,x:85.4,y:58.5,scaleX:0.921,scaleY:0.921}},{t:this.instance_5,p:{skewX:2.9,skewY:-177,x:-37.8,y:51.1,scaleX:0.921,scaleY:0.921}},{t:this.instance_4,p:{scaleX:0.921,scaleY:0.921,skewX:5.1,skewY:-174.8,x:39.5,y:79.4}}]},1).to({state:[{t:this.instance_10,p:{skewX:2.9,skewY:-177,x:90.1,y:54.4,startPosition:0,scaleX:0.921,scaleY:0.883}},{t:this.instance_9,p:{skewX:2.9,skewY:-177,x:-40.4,y:50.6,startPosition:0,scaleX:0.851,scaleY:0.921}},{t:this.instance_8,p:{scaleX:0.92,scaleY:0.92,skewX:4.3,skewY:-175.6,x:87.2,y:32.5,startPosition:0}},{t:this.instance_7,p:{scaleX:0.921,scaleY:0.921,skewX:6.6,skewY:-173.3,x:-32.7,y:22.3,mode:"single"}},{t:this.instance_6,p:{skewX:2.9,skewY:-177,x:85.4,y:57.2,scaleX:0.921,scaleY:0.921}},{t:this.instance_5,p:{skewX:2.9,skewY:-177,x:-37.8,y:49.8,scaleX:0.921,scaleY:0.921}},{t:this.instance_4,p:{scaleX:0.921,scaleY:0.921,skewX:5.1,skewY:-174.8,x:39.5,y:78.1}}]},2).to({state:[{t:this.instance_10,p:{skewX:3.6,skewY:-176.3,x:92.8,y:58.4,startPosition:0,scaleX:0.921,scaleY:0.882}},{t:this.instance_9,p:{skewX:3.6,skewY:-176.3,x:-37.7,y:52.8,startPosition:0,scaleX:0.851,scaleY:0.921}},{t:this.instance_8,p:{scaleX:0.92,scaleY:0.92,skewX:5.1,skewY:-174.8,x:90.2,y:36.4,startPosition:0}},{t:this.instance_7,p:{scaleX:0.921,scaleY:0.921,skewX:7.4,skewY:-172.5,x:-29.5,y:24.5,mode:"single"}},{t:this.instance_6,p:{skewX:3.6,skewY:-176.3,x:88,y:61.1,scaleX:0.921,scaleY:0.921}},{t:this.instance_5,p:{skewX:3.6,skewY:-176.3,x:-35.1,y:52,scaleX:0.921,scaleY:0.921}},{t:this.instance_4,p:{scaleX:0.921,scaleY:0.921,skewX:5.9,skewY:-174,x:41.9,y:81.3}}]},6).to({state:[{t:this.instance_10,p:{skewX:4,skewY:-175.9,x:93.9,y:59.7,startPosition:0,scaleX:0.921,scaleY:0.882}},{t:this.instance_9,p:{skewX:4,skewY:-175.9,x:-36.6,y:53.3,startPosition:0,scaleX:0.851,scaleY:0.921}},{t:this.instance_8,p:{scaleX:0.92,scaleY:0.92,skewX:5.4,skewY:-174.5,x:91.5,y:37.7,startPosition:0}},{t:this.instance_7,p:{scaleX:0.921,scaleY:0.921,skewX:7.7,skewY:-172.2,x:-28.2,y:25.2,mode:"single"}},{t:this.instance_6,p:{skewX:4,skewY:-175.9,x:89.1,y:62.4,scaleX:0.921,scaleY:0.921}},{t:this.instance_5,p:{skewX:4,skewY:-175.9,x:-34,y:52.6,scaleX:0.921,scaleY:0.921}},{t:this.instance_4,p:{scaleX:0.921,scaleY:0.921,skewX:6.2,skewY:-173.7,x:42.9,y:82.4}}]},2).to({state:[{t:this.instance_10,p:{skewX:3.1,skewY:-176.8,x:92.1,y:56.5,startPosition:0,scaleX:0.921,scaleY:0.882}},{t:this.instance_9,p:{skewX:3.1,skewY:-176.8,x:-38.5,y:52.2,startPosition:0,scaleX:0.851,scaleY:0.921}},{t:this.instance_8,p:{scaleX:0.92,scaleY:0.92,skewX:10.1,skewY:-169.8,x:89.7,y:34.2,startPosition:0}},{t:this.instance_7,p:{scaleX:0.92,scaleY:0.92,skewX:2.5,skewY:-177.4,x:-30.6,y:23.1,mode:"single"}},{t:this.instance_6,p:{skewX:3.1,skewY:-176.8,x:87.3,y:59.2,scaleX:0.921,scaleY:0.921}},{t:this.instance_5,p:{skewX:3.1,skewY:-176.8,x:-35.9,y:51.4,scaleX:0.921,scaleY:0.921}},{t:this.instance_4,p:{scaleX:0.92,scaleY:0.92,skewX:5.3,skewY:-174.6,x:41.3,y:80}}]},2).to({state:[{t:this.instance_10,p:{skewX:-1.7,skewY:178.2,x:82.7,y:42.6,startPosition:0,scaleX:0.921,scaleY:0.882}},{t:this.instance_9,p:{skewX:-1.7,skewY:178.2,x:-47.7,y:49.4,startPosition:0,scaleX:0.851,scaleY:0.921}},{t:this.instance_8,p:{scaleX:0.919,scaleY:0.919,skewX:22.1,skewY:-157.8,x:79.3,y:20.5,startPosition:1}},{t:this.instance_7,p:{scaleX:0.92,scaleY:0.92,skewX:-9.7,skewY:170.2,x:-43.9,y:18.9,mode:"single"}},{t:this.instance_6,p:{skewX:-1.7,skewY:178.2,x:78.2,y:45.7,scaleX:0.921,scaleY:0.921}},{t:this.instance_5,p:{skewX:-1.7,skewY:178.2,x:-45.1,y:48.4,scaleX:0.921,scaleY:0.921}},{t:this.instance_4,p:{scaleX:0.921,scaleY:0.921,skewX:0.4,skewY:-179.5,x:34.2,y:70.3}}]},2).to({state:[{t:this.instance_3,p:{skewX:-3.5,skewY:-3.8,x:-12.4,y:75.4,startPosition:222,loop:undefined}}]},1).to({state:[{t:this.instance_3,p:{skewX:-4.1,skewY:-4.3,x:-14,y:73,startPosition:223,loop:undefined}}]},1).to({state:[{t:this.instance_3,p:{skewX:-4.3,skewY:-4.6,x:-14.8,y:72,startPosition:0,loop:false}}]},2).wait(113));

	// back
	this.instance_11 = new lib.CUP_23_leg_l("single",14);
	this.instance_11.setTransform(31.1,132.3,0.939,0.932,0,-11.6,168.7,8.5,-19);

	this.instance_12 = new lib.CUP_FRONT_leg_r("single",14);
	this.instance_12.setTransform(-31.6,147.2,0.938,0.932,0,-15.4,-15,-5.6,-20.1);

	this.instance_13 = new lib.cup34rarml01("single",0);
	this.instance_13.setTransform(75.4,73.7,0.832,0.937,0,-3.4,-5.6,-16.6,-36.3);

	this.instance_14 = new lib.cup34rarmr01("single",1);
	this.instance_14.setTransform(-71.8,97.4,0.895,0.952,0,0,1.7,18.4,-30.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13,p:{regX:-16.6,regY:-36.3,scaleX:0.832,scaleY:0.937,skewX:-3.4,skewY:-5.6,x:75.4,y:73.7}},{t:this.instance_12,p:{regY:-20.1,skewX:-15.4,skewY:-15,x:-31.6,y:147.2}},{t:this.instance_11,p:{regX:8.5,regY:-19,skewX:-11.6,skewY:168.7,x:31.1,y:132.3}}]}).to({state:[]},90).to({state:[{t:this.instance_14,p:{regX:18.4,regY:-30.6,scaleX:0.895,scaleY:0.952,skewX:0,skewY:1.7,x:-71.8,y:97.4,startPosition:1}}]},46).to({state:[{t:this.instance_14,p:{regX:18.5,regY:-30.5,scaleX:0.794,scaleY:0.923,skewX:-2.9,skewY:1.3,x:-79.5,y:98.6,startPosition:0}}]},2).to({state:[{t:this.instance_13,p:{regX:-16.7,regY:-36.2,scaleX:0.819,scaleY:0.975,skewX:-0.4,skewY:-4.8,x:77.6,y:78.4}},{t:this.instance_12,p:{regY:-20,skewX:-14.6,skewY:-14.2,x:-30.3,y:150.3}},{t:this.instance_11,p:{regX:8.6,regY:-19.1,skewX:-10.8,skewY:169.5,x:32.5,y:136.2}}]},1).to({state:[{t:this.instance_13,p:{regX:-16.6,regY:-36.3,scaleX:0.832,scaleY:0.937,skewX:-3.1,skewY:-5.3,x:76.2,y:75.1}},{t:this.instance_12,p:{regY:-20.1,skewX:-15.2,skewY:-14.7,x:-31.2,y:148.1}},{t:this.instance_11,p:{regX:8.6,regY:-19,skewX:-11.3,skewY:169,x:31.6,y:133.5}}]},1).to({state:[{t:this.instance_13,p:{regX:-16.6,regY:-36.3,scaleX:0.832,scaleY:0.937,skewX:-3.4,skewY:-5.6,x:75.4,y:73.7}},{t:this.instance_12,p:{regY:-20.1,skewX:-15.4,skewY:-15,x:-31.6,y:147.2}},{t:this.instance_11,p:{regX:8.5,regY:-19,skewX:-11.6,skewY:168.7,x:31.1,y:132.3}}]},2).wait(113));

	// CUP_23_eye_02
	this.instance_15 = new lib.CUP_34_arm_02copy2("single",0);
	this.instance_15.setTransform(-77.5,99.9,0.922,0.922,0,1.3,-178.6,-13.1,-22.3);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(90).to({startPosition:0,_off:false},0).wait(2).to({skewX:4.5,skewY:-175.3,x:-76.1,y:100.4},0).wait(1).to({skewX:5.8,skewY:-174,x:-75.9,y:101.5},0).wait(3).to({skewX:4.6,skewY:-175.2,x:-75.7,y:101.1},0).wait(1).to({regY:-22.4,scaleX:0.79,skewX:1.8,skewY:-180.9,x:-79.4,y:96.2},0).wait(1).to({regY:-22.2,scaleX:0.92,scaleY:0.92,skewX:-3.5,skewY:-183.6,x:-80.8,y:95.1,startPosition:1},0).wait(1).to({skewX:-6.8,skewY:-186.9,y:93.6},0).wait(2).to({regX:-12.9,y:95.6},0).wait(20).to({regX:-13,skewX:-5.8,skewY:-185.9,x:-80.9,y:96.1},0).wait(2).to({regX:-12.9,regY:-22.3,skewX:0.3,skewY:-179.5,x:-75.9,y:98.6},0).wait(1).to({regX:-13,skewX:2.9,skewY:-176.9,x:-72.9,y:104.5},0).wait(2).to({regY:-22.2,y:103.2},0).wait(6).to({skewX:3.6,skewY:-176.2,x:-70.8,y:104.9},0).wait(2).to({skewX:4,skewY:-175.8,x:-70,y:105.4},0).to({_off:true},2).wait(119));

	// CUP_23_eye_01
	this.instance_16 = new lib.CUP_34_body("synched",0);
	this.instance_16.setTransform(3.6,154.7,0.922,0.922,0,1.3,-178.6,-1.5,82.5);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(90).to({startPosition:0,_off:false},0).wait(2).to({regX:-1.5,skewX:4.5,skewY:-175.3,x:1.6,y:159.5},0).wait(1).to({regX:-1.4,regY:82.4,skewX:5.8,skewY:-174,x:0.5,y:162.3},0).wait(3).to({regX:-1.5,regY:82.5,skewX:4.6,skewY:-175.2,x:2,y:160.2},0).wait(1).to({regX:-1.4,regY:82.4,scaleX:0.92,scaleY:0.92,skewX:-0.8,skewY:-180.9,x:3.6,y:147.7},0).wait(1).to({skewX:-5.6,skewY:-185.7,x:6.2,y:139.3},0).wait(1).to({regX:-1.5,regY:82.5,skewX:-6.8,skewY:-186.9,x:7.1,y:135.8},0).wait(2).to({x:7.3,y:137.7},0).wait(20).to({regX:-1.4,skewX:-5.8,skewY:-185.9,x:6.3,y:139.9},0).wait(2).to({regX:-1.5,skewX:0.3,skewY:-179.5,x:6.1,y:151.7},0).wait(1).to({regY:82.6,skewX:2.9,skewY:-176.9,x:6.5,y:161.3},0).wait(2).to({y:160},0).wait(6).to({regY:82.7,skewX:3.6,skewY:-176.2,x:7.8,y:163},0).wait(2).to({regY:82.6,skewX:4,skewY:-175.8,x:8.3,y:163.7},0).wait(2).to({regX:-1.4,regY:82.7,skewX:3.1,skewY:-176.7,x:8,y:161.9},0).wait(2).to({regY:82.6,skewX:-1.6,skewY:-181.7,x:8.2,y:154.6},0).to({_off:true},1).wait(116));

	// CUP_23_eye_02
	this.instance_17 = new lib.CUP_34_arm_02("single",1);
	this.instance_17.setTransform(-80.9,95.1,0.921,0.921,0,-3.6,176.3,-13.1,-22.3);

	this.instance_18 = new lib.cup34rarmr01("single",0);
	this.instance_18.setTransform(-71.8,97.4,0.895,0.952,0,0,1.7,18.4,-30.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_17,p:{skewX:-3.6,skewY:176.3,y:95.1,regX:-13.1,x:-80.9,regY:-22.3}}]},98).to({state:[{t:this.instance_17,p:{skewX:-6.9,skewY:173,y:93.6,regX:-13.1,x:-80.9,regY:-22.3}}]},1).to({state:[{t:this.instance_17,p:{skewX:-6.9,skewY:173,y:95.6,regX:-13,x:-80.9,regY:-22.3}}]},2).to({state:[{t:this.instance_17,p:{skewX:-5.9,skewY:174,y:96.1,regX:-13.1,x:-81,regY:-22.3}}]},20).to({state:[{t:this.instance_17,p:{skewX:0.3,skewY:-179.6,y:98.6,regX:-13,x:-76,regY:-22.4}}]},2).to({state:[{t:this.instance_17,p:{skewX:2.9,skewY:-177,y:104.5,regX:-13.1,x:-73,regY:-22.4}}]},1).to({state:[{t:this.instance_17,p:{skewX:2.9,skewY:-177,y:103.2,regX:-13.1,x:-73,regY:-22.3}}]},2).to({state:[{t:this.instance_17,p:{skewX:3.6,skewY:-176.3,y:104.9,regX:-13.1,x:-70.9,regY:-22.3}}]},6).to({state:[{t:this.instance_17,p:{skewX:4,skewY:-175.9,y:105.4,regX:-13.1,x:-70.1,regY:-22.3}}]},2).to({state:[{t:this.instance_18}]},2).to({state:[]},2).wait(117));

	// CUP_23_body
	this.instance_19 = new lib.CUP_34_handle("synched",0);
	this.instance_19.setTransform(-77.7,87.7,0.922,0.922,0,1.3,-178.6,-17.6,0.8);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(90).to({startPosition:0,_off:false},0).wait(2).to({regX:-17.4,regY:0.9,skewX:4.5,skewY:-175.3,x:-75.7,y:88.2},0).wait(1).to({skewX:5.8,skewY:-174,x:-75.3,y:89.4},0).wait(3).to({skewX:4.6,skewY:-175.2,y:89},0).wait(1).to({regY:0.8,scaleX:0.92,scaleY:0.92,skewX:-0.8,skewY:-180.9,x:-80.1,y:84.2},0).wait(1).to({regX:-17.5,skewX:-5.6,skewY:-185.7,x:-82.5,y:82.9},0).wait(1).to({skewX:-6.8,skewY:-186.9,x:-82.9,y:81.5},0).wait(2).to({x:-82.7,y:83.4},0).wait(20).to({skewX:-5.8,skewY:-185.9,x:-82.6,y:84},0).wait(2).to({regX:-17.3,skewX:0.3,skewY:-179.5,x:-76.4,y:86.4},0).wait(1).to({regX:-17.4,skewX:2.9,skewY:-176.9,x:-72.8,y:92.3},0).wait(2).to({y:91},0).wait(6).to({skewX:3.6,skewY:-176.2,x:-70.6,y:92.8},0).wait(2).to({skewX:4,skewY:-175.8,x:-69.7,y:93.2},0).wait(2).to({regX:-17.2,skewX:3.1,skewY:-176.7,x:-71.2,y:92.4},0).wait(2).to({regX:-17.4,regY:0.7,skewX:-1.6,skewY:-181.7,x:-76.6,y:92.3},0).to({_off:true},1).wait(116));

	// CUP_23_handle
	this.instance_20 = new lib.CUP_23_leg_l("single",21);
	this.instance_20.setTransform(35.6,142.9,0.939,0.932,0,-11.6,168.7,8.5,-19);

	this.instance_21 = new lib.CUP_FRONT_leg_r("single",20);
	this.instance_21.setTransform(-9.7,149.5,0.938,0.931,0,-29,-28.5,-5.6,-20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_21,p:{y:149.5,regY:-20,scaleY:0.931,skewX:-29,skewY:-28.5,x:-9.7,startPosition:20}},{t:this.instance_20,p:{y:142.9,x:35.6,startPosition:21}}]},101).to({state:[{t:this.instance_21,p:{y:150.4,regY:-20,scaleY:0.931,skewX:-29,skewY:-28.5,x:-9.7,startPosition:20}},{t:this.instance_20,p:{y:143.8,x:35.6,startPosition:21}}]},20).to({state:[{t:this.instance_21,p:{y:147.2,regY:-20.1,scaleY:0.932,skewX:-15.4,skewY:-15,x:-31.6,startPosition:14}},{t:this.instance_20,p:{y:132.3,x:31.1,startPosition:14}}]},2).to({state:[]},16).wait(116));

	// CUP_23_leg_COMP
	this.instance_22 = new lib.CUP_23_leg_l("single",14);
	this.instance_22.setTransform(31.1,132.3,0.939,0.932,0,-11.6,168.7,8.5,-19);

	this.instance_23 = new lib.CUP_FRONT_leg_r("single",14);
	this.instance_23.setTransform(-31.6,147.2,0.938,0.932,0,-15.4,-15,-5.6,-20.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_23,p:{regY:-20.1,scaleY:0.932,skewX:-15.4,skewY:-15,x:-31.6,y:147.2,startPosition:14}},{t:this.instance_22,p:{x:31.1,y:132.3,startPosition:14}}]},90).to({state:[{t:this.instance_23,p:{regY:-20,scaleY:0.931,skewX:-29,skewY:-28.5,x:-9.7,y:153.4,startPosition:20}},{t:this.instance_22,p:{x:35.6,y:146.8,startPosition:21}}]},7).to({state:[{t:this.instance_23,p:{regY:-20,scaleY:0.931,skewX:-29,skewY:-28.5,x:-9.7,y:150.4,startPosition:20}},{t:this.instance_22,p:{x:35.6,y:143.8,startPosition:21}}]},1).to({state:[{t:this.instance_23,p:{regY:-20,scaleY:0.931,skewX:-29,skewY:-28.5,x:-9.7,y:148,startPosition:20}},{t:this.instance_22,p:{x:35.6,y:141.4,startPosition:21}}]},1).to({state:[]},2).wait(154));

	// CUP_23_leg_COMP
	this.instance_24 = new lib.cup34rarml01("single",0);
	this.instance_24.setTransform(76.8,89,0.84,0.946,0,4.6,2.4,-16.6,-36.5);

	this.instance_25 = new lib.CUP_34_arm_01("single",53);
	this.instance_25.setTransform(75.3,96.7,0.92,0.924,0,3.4,178.2,18.4,-24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_24}]},90).to({state:[{t:this.instance_25,p:{regX:18.4,scaleY:0.924,skewX:3.4,skewY:178.2,x:75.3,y:96.7,scaleX:0.92,startPosition:53,regY:-24}}]},2).to({state:[{t:this.instance_25,p:{regX:18.5,scaleY:0.92,skewX:-6.1,skewY:173.8,x:76.1,y:105.3,scaleX:0.92,startPosition:53,regY:-24}}]},1).to({state:[{t:this.instance_25,p:{regX:18.4,scaleY:0.898,skewX:-10.3,skewY:152.9,x:75.5,y:95,scaleX:0.985,startPosition:53,regY:-24}}]},3).to({state:[{t:this.instance_25,p:{regX:18.4,scaleY:0.921,skewX:-0.9,skewY:179,x:74.3,y:83.6,scaleX:0.921,startPosition:57,regY:-24}}]},1).to({state:[{t:this.instance_25,p:{regX:18.4,scaleY:0.921,skewX:-5.7,skewY:174.2,x:71.3,y:69.5,scaleX:0.921,startPosition:58,regY:-24}}]},1).to({state:[{t:this.instance_25,p:{regX:18.4,scaleY:0.921,skewX:-6.9,skewY:173,x:70.5,y:64.5,scaleX:0.921,startPosition:55,regY:-24.1}}]},1).to({state:[{t:this.instance_25,p:{regX:18.4,scaleY:0.902,skewX:-8.5,skewY:173,x:70.6,y:66.6,scaleX:0.95,startPosition:55,regY:-24}}]},2).to({state:[{t:this.instance_25,p:{regX:18.4,scaleY:0.921,skewX:-6.9,skewY:173,x:70.7,y:66.5,scaleX:0.921,startPosition:55,regY:-24}}]},1).to({state:[{t:this.instance_25,p:{regX:18.4,scaleY:0.902,skewX:-8.5,skewY:173,x:70.6,y:66.6,scaleX:0.95,startPosition:55,regY:-24}}]},1).to({state:[{t:this.instance_25,p:{regX:18.4,scaleY:0.921,skewX:-6.9,skewY:173,x:70.7,y:66.5,scaleX:0.921,startPosition:55,regY:-24}}]},1).to({state:[{t:this.instance_25,p:{regX:18.4,scaleY:0.902,skewX:-8.5,skewY:173,x:70.6,y:66.6,scaleX:0.95,startPosition:55,regY:-24}}]},1).to({state:[{t:this.instance_25,p:{regX:18.4,scaleY:0.921,skewX:-6.9,skewY:173,x:70.7,y:66.5,scaleX:0.921,startPosition:55,regY:-24}}]},1).to({state:[{t:this.instance_25,p:{regX:18.4,scaleY:0.902,skewX:-8.5,skewY:173,x:70.6,y:66.6,scaleX:0.95,startPosition:55,regY:-24}}]},1).to({state:[{t:this.instance_25,p:{regX:18.4,scaleY:0.911,skewX:-7.7,skewY:173,x:70.7,y:66.6,scaleX:0.935,startPosition:55,regY:-24}}]},1).to({state:[{t:this.instance_25,p:{regX:18.4,scaleY:0.902,skewX:-8.5,skewY:173,x:70.6,y:66.6,scaleX:0.95,startPosition:55,regY:-24}}]},1).to({state:[{t:this.instance_25,p:{regX:18.4,scaleY:0.911,skewX:-7.7,skewY:173,x:70.7,y:66.6,scaleX:0.935,startPosition:55,regY:-24}}]},1).to({state:[{t:this.instance_25,p:{regX:18.4,scaleY:0.902,skewX:-8.5,skewY:173,x:70.6,y:66.6,scaleX:0.95,startPosition:55,regY:-24}}]},1).to({state:[{t:this.instance_25,p:{regX:18.4,scaleY:0.911,skewX:-7.7,skewY:173,x:70.7,y:66.6,scaleX:0.935,startPosition:55,regY:-24}}]},1).to({state:[{t:this.instance_25,p:{regX:18.4,scaleY:0.906,skewX:-8,skewY:173,x:70.7,y:66.5,scaleX:0.942,startPosition:55,regY:-24}}]},1).to({state:[{t:this.instance_25,p:{regX:18.4,scaleY:0.911,skewX:-7.7,skewY:173,x:70.7,y:66.6,scaleX:0.935,startPosition:55,regY:-24}}]},1).to({state:[{t:this.instance_25,p:{regX:18.6,scaleY:0.921,skewX:-5.9,skewY:174,x:69.8,y:70,scaleX:0.921,startPosition:61,regY:-24}}]},7).to({state:[{t:this.instance_25,p:{regX:18.4,scaleY:0.921,skewX:0.3,skewY:-179.6,x:77.9,y:89,scaleX:0.921,startPosition:59,regY:-24.1}}]},2).to({state:[{t:this.instance_25,p:{regX:18.4,scaleY:0.921,skewX:2.9,skewY:-177,x:81.2,y:102,scaleX:0.921,startPosition:56,regY:-24.1}}]},1).to({state:[{t:this.instance_25,p:{regX:18.4,scaleY:0.921,skewX:0.6,skewY:-179.3,x:81.1,y:100.7,scaleX:0.921,startPosition:56,regY:-24}}]},2).to({state:[{t:this.instance_25,p:{regX:18.4,scaleY:0.921,skewX:1.4,skewY:-178.5,x:83.2,y:104.5,scaleX:0.921,startPosition:56,regY:-24}}]},6).to({state:[{t:this.instance_25,p:{regX:18.4,scaleY:0.921,skewX:1.7,skewY:-178.2,x:84,y:105.8,scaleX:0.921,startPosition:56,regY:-23.9}}]},2).to({state:[{t:this.instance_25,p:{regX:18.4,scaleY:0.921,skewX:3.1,skewY:-176.8,x:82.8,y:100.5,scaleX:0.921,startPosition:60,regY:-24}}]},2).to({state:[{t:this.instance_25,p:{regX:18.4,scaleY:0.951,skewX:-41,skewY:157.5,x:75.4,y:88.5,scaleX:0.847,startPosition:60,regY:-24.1}}]},2).to({state:[]},1).wait(116));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-132.8,-26.3,241.9,238.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;