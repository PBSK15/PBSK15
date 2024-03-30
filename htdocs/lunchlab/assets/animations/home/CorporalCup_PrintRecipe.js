(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.CorporalCup_PrintRecipe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{intro:0,intro_stop:17,action:18,action_stop:215,idle:216,idle_loop:471});

	// top
	this.instance = new lib.Cup_Intro("synched",0);
	this.instance.setTransform(175.2,201.3,1,1,0,0,0,-56.3,-133.1);

	this.instance_1 = new lib.cup34rarmr02("single",0);
	this.instance_1.setTransform(154,433.4,0.931,0.877,0,1.7,4.2,18.4,-30.5);

	this.instance_2 = new lib.cup34rarml02("single",5);
	this.instance_2.setTransform(317.7,425.4,0.827,0.932,0,4.4,2.2,-16.2,-36.3);

	this.instance_3 = new lib.CUP_23_leg_l02("single",23);
	this.instance_3.setTransform(259,521.5,0.936,0.947,0,-10.9,169,38.6,86.4);

	this.instance_4 = new lib.CUP_FRONT_leg_r02("single",23);
	this.instance_4.setTransform(214,513,0.938,0.944,0,-25.1,-25.5,-19.7,59.8);

	this.instance_5 = new lib.Cup_Idle("synched",0);
	this.instance_5.setTransform(226.5,431,1,1,0,0,0,-5.4,96.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{regY:-30.5,scaleY:0.877,skewX:1.7,skewY:4.2,x:154,y:433.4,startPosition:0,scaleX:0.931,regX:18.4}}]},18).to({state:[{t:this.instance_1,p:{regY:-30.7,scaleY:0.923,skewX:4.8,skewY:9.1,x:165.8,y:433.5,startPosition:2,scaleX:0.931,regX:18.4}}]},1).to({state:[{t:this.instance_1,p:{regY:-30.7,scaleY:0.923,skewX:12.8,skewY:17.1,x:170.8,y:434.2,startPosition:2,scaleX:0.93,regX:18.4}}]},2).to({state:[{t:this.instance_1,p:{regY:-30.8,scaleY:0.923,skewX:14.4,skewY:18.7,x:172.6,y:434.7,startPosition:2,scaleX:0.93,regX:18.6}}]},2).to({state:[{t:this.instance_1,p:{regY:-30.8,scaleY:0.921,skewX:3.1,skewY:7.3,x:166.5,y:434.5,startPosition:2,scaleX:0.929,regX:18.6}}]},2).to({state:[{t:this.instance_1,p:{regY:-30.8,scaleY:0.921,skewX:-3.5,skewY:0.6,x:151.3,y:435.1,startPosition:5,scaleX:0.928,regX:18.7}}]},3).to({state:[{t:this.instance_1,p:{regY:-30.8,scaleY:0.92,skewX:-17.3,skewY:-13,x:138,y:438.5,startPosition:5,scaleX:0.928,regX:18.8}}]},1).to({state:[{t:this.instance_1,p:{regY:-30.8,scaleY:0.92,skewX:-14,skewY:-9.7,x:140.5,y:438.9,startPosition:5,scaleX:0.927,regX:18.8}}]},2).to({state:[{t:this.instance_1,p:{regY:-30.8,scaleY:0.92,skewX:-12.9,skewY:-8.6,x:141.5,y:439.3,startPosition:5,scaleX:0.928,regX:18.8}}]},3).to({state:[{t:this.instance_1,p:{regY:-30.8,scaleY:0.92,skewX:-14.7,skewY:-10.4,x:137.5,y:438.9,startPosition:5,scaleX:0.927,regX:18.9}}]},13).to({state:[{t:this.instance_1,p:{regY:-30.8,scaleY:0.92,skewX:-16,skewY:-11.7,x:135.2,y:438.7,startPosition:5,scaleX:0.927,regX:18.9}}]},2).to({state:[{t:this.instance_1,p:{regY:-30.8,scaleY:0.92,skewX:-14,skewY:-9.7,x:137.9,y:437.2,startPosition:5,scaleX:0.927,regX:18.9}}]},2).to({state:[{t:this.instance_1,p:{regY:-30.8,scaleY:0.919,skewX:-5.2,skewY:-0.9,x:149.3,y:425.6,startPosition:5,scaleX:0.927,regX:19}}]},2).to({state:[{t:this.instance_1,p:{regY:-31,scaleY:0.918,skewX:1.7,skewY:6,x:161.2,y:418,startPosition:5,scaleX:0.925,regX:19.1}}]},1).to({state:[{t:this.instance_1,p:{regY:-30.9,scaleY:0.918,skewX:3,skewY:7.3,x:164,y:417.4,startPosition:5,scaleX:0.926,regX:18.9}}]},1).to({state:[{t:this.instance_1,p:{regY:-30.8,scaleY:0.918,skewX:1.5,skewY:5.8,x:161,y:418.6,startPosition:5,scaleX:0.926,regX:18.9}}]},2).to({state:[{t:this.instance_1,p:{regY:-30.8,scaleY:0.918,skewX:0.6,skewY:4.9,x:159.8,y:419.7,startPosition:5,scaleX:0.925,regX:18.9}}]},2).to({state:[{t:this.instance_1,p:{regY:-30.8,scaleY:0.918,skewX:0.4,skewY:4.7,x:159.5,y:420.1,startPosition:5,scaleX:0.925,regX:18.9}}]},2).to({state:[{t:this.instance_1,p:{regY:-30.8,scaleY:0.918,skewX:2.1,skewY:6.4,x:163.6,y:419.8,startPosition:5,scaleX:0.925,regX:18.9}}]},10).to({state:[{t:this.instance_1,p:{regY:-30.8,scaleY:0.918,skewX:3,skewY:7.3,x:166,y:420,startPosition:5,scaleX:0.925,regX:18.9}}]},2).to({state:[{t:this.instance_1,p:{regY:-30.7,scaleY:0.918,skewX:0.2,skewY:4.5,x:160.4,y:422.9,startPosition:7,scaleX:0.925,regX:19}},{t:this.instance_2,p:{regX:-16.2,regY:-36.3,scaleX:0.827,scaleY:0.932,skewX:4.4,skewY:2.2,x:317.7,y:425.4,startPosition:5}}]},2).to({state:[{t:this.instance_1,p:{regY:-30.6,scaleY:0.918,skewX:-4.7,skewY:-0.4,x:151.6,y:428.3,startPosition:8,scaleX:0.925,regX:19}}]},2).to({state:[{t:this.instance_1,p:{regY:-30.8,scaleY:0.918,skewX:-12.6,skewY:-8.3,x:139.5,y:439.9,startPosition:9,scaleX:0.925,regX:18.9}}]},1).to({state:[{t:this.instance_1,p:{regY:-32.2,scaleY:0.917,skewX:-14.6,skewY:-10.3,x:138.7,y:440.5,startPosition:9,scaleX:0.924,regX:20.9}}]},2).to({state:[{t:this.instance_1,p:{regY:-30.9,scaleY:0.917,skewX:-13.6,skewY:-9.3,x:137.9,y:441.1,startPosition:9,scaleX:0.925,regX:18.8}}]},2).to({state:[{t:this.instance_1,p:{regY:-30.9,scaleY:0.917,skewX:-12.5,skewY:-8.2,x:138.2,y:440.7,startPosition:9,scaleX:0.925,regX:18.8}}]},2).to({state:[{t:this.instance_1,p:{regY:-30.3,scaleY:0.923,skewX:-9.1,skewY:-2.9,x:145.7,y:438.9,startPosition:10,scaleX:0.928,regX:18.2}}]},14).to({state:[{t:this.instance_1,p:{regY:-30.3,scaleY:0.922,skewX:3.4,skewY:7.7,x:167,y:428,startPosition:11,scaleX:0.929,regX:18.2}},{t:this.instance_2,p:{regX:-4.4,regY:10.4,scaleX:0.83,scaleY:0.935,skewX:5.4,skewY:3.2,x:332.3,y:477.8,startPosition:9}}]},2).to({state:[{t:this.instance_1,p:{regY:-30.3,scaleY:0.921,skewX:3.9,skewY:8.2,x:173.4,y:430.9,startPosition:12,scaleX:0.929,regX:18.3}},{t:this.instance_2,p:{regX:-4.4,regY:10.4,scaleX:0.83,scaleY:0.935,skewX:8,skewY:5.8,x:336.2,y:487.9,startPosition:10}}]},1).to({state:[{t:this.instance_1,p:{regY:-29.3,scaleY:0.921,skewX:4.4,skewY:8.7,x:180.9,y:433.2,startPosition:13,scaleX:0.928,regX:25}},{t:this.instance_2,p:{regX:-4.4,regY:10.4,scaleX:0.83,scaleY:0.935,skewX:8.4,skewY:6.2,x:337.1,y:489.7,startPosition:10}}]},2).to({state:[{t:this.instance_1,p:{regY:-27.6,scaleY:0.921,skewX:2,skewY:6.3,x:178.9,y:433.5,startPosition:14,scaleX:0.929,regX:25.2}},{t:this.instance_2,p:{regX:-4.4,regY:10.3,scaleX:0.841,scaleY:0.992,skewX:-2.6,skewY:2.2,x:340.1,y:488.9,startPosition:10}}]},4).to({state:[]},2).to({state:[{t:this.instance_1,p:{regY:-12.9,scaleY:0.944,skewX:-11.6,skewY:-7.3,x:140.2,y:452.4,startPosition:19,scaleX:0.927,regX:18.8}}]},1).to({state:[{t:this.instance_1,p:{regY:-30.3,scaleY:0.92,skewX:-11.4,skewY:-7.1,x:137.8,y:436.8,startPosition:19,scaleX:0.928,regX:18.2}}]},2).to({state:[{t:this.instance_1,p:{regY:-30.2,scaleY:0.906,skewX:-11.4,skewY:-7.5,x:138.6,y:436.6,startPosition:19,scaleX:0.927,regX:18.3}}]},2).to({state:[{t:this.instance_1,p:{regY:-30.2,scaleY:0.901,skewX:-11.4,skewY:-6.8,x:139.2,y:436.5,startPosition:19,scaleX:0.927,regX:18.2}}]},2).to({state:[{t:this.instance_1,p:{regY:-30.2,scaleY:0.901,skewX:-12,skewY:-7.4,x:138.5,y:434.9,startPosition:21,scaleX:0.927,regX:18.2}}]},13).to({state:[{t:this.instance_1,p:{regY:-30.1,scaleY:0.901,skewX:-14.2,skewY:-9.6,x:135.6,y:434.4,startPosition:22,scaleX:0.927,regX:18.1}}]},1).to({state:[{t:this.instance_1,p:{regY:-18.8,scaleY:0.909,skewX:-14.3,skewY:-10.2,x:144.7,y:442.4,startPosition:22,scaleX:0.927,regX:25.9}}]},2).to({state:[{t:this.instance_1,p:{regY:-18.8,scaleY:0.913,skewX:-14.2,skewY:-9.9,x:144.6,y:442.5,startPosition:22,scaleX:0.927,regX:25.9}}]},2).to({state:[{t:this.instance_1,p:{regY:-30.2,scaleY:0.901,skewX:-13.7,skewY:-9.1,x:136,y:434.5,startPosition:23,scaleX:0.927,regX:18.2}}]},3).to({state:[{t:this.instance_1,p:{regY:-30.8,scaleY:0.918,skewX:-2.2,skewY:2,x:156,y:435.1,startPosition:25,scaleX:0.925,regX:18.9}}]},2).to({state:[{t:this.instance_1,p:{regY:-30.8,scaleY:0.918,skewX:-0.5,skewY:3.7,x:158.9,y:436.1,startPosition:26,scaleX:0.925,regX:18.9}}]},1).to({state:[{t:this.instance_1,p:{regY:-30.8,scaleY:0.918,skewX:-1,skewY:3.2,x:158.2,y:433.7,startPosition:26,scaleX:0.925,regX:18.9}}]},2).to({state:[{t:this.instance_1,p:{regY:-30.8,scaleY:0.918,skewX:-2,skewY:1,x:157.5,y:429.8,startPosition:28,scaleX:0.924,regX:19}}]},1).to({state:[{t:this.instance_1,p:{regY:-30.8,scaleY:0.918,skewX:-3.3,skewY:0.9,x:154.9,y:428,startPosition:29,scaleX:0.925,regX:18.9}}]},2).to({state:[{t:this.instance_1,p:{regY:-30.8,scaleY:0.918,skewX:-3.5,skewY:0.6,x:154.3,y:427.6,startPosition:29,scaleX:0.925,regX:18.9}}]},2).to({state:[{t:this.instance_1,p:{regY:-30.8,scaleY:0.918,skewX:-6.6,skewY:-2.3,x:150,y:430.9,startPosition:30,scaleX:0.925,regX:18.9}}]},10).to({state:[{t:this.instance_1,p:{regY:-30.8,scaleY:0.917,skewX:-10.3,skewY:-6,x:144.9,y:436.7,startPosition:31,scaleX:0.925,regX:18.9}}]},2).to({state:[{t:this.instance_1,p:{regY:-30.8,scaleY:0.898,skewX:-9.8,skewY:-6.9,x:141.8,y:439.3,startPosition:0,scaleX:0.929,regX:18.6}}]},1).to({state:[{t:this.instance_1,p:{regY:-30.7,scaleY:0.924,skewX:-10.6,skewY:-6.3,x:139.8,y:441.3,startPosition:0,scaleX:0.931,regX:18.5}}]},2).to({state:[{t:this.instance_1,p:{regY:-30.6,scaleY:0.924,skewX:-10.8,skewY:-6.5,x:139.4,y:441.8,startPosition:0,scaleX:0.931,regX:18.5}}]},2).to({state:[{t:this.instance_1,p:{regY:-30.5,scaleY:0.861,skewX:-5.5,skewY:-2.6,x:145.9,y:437.6,startPosition:0,scaleX:0.929,regX:18.5}}]},12).to({state:[{t:this.instance_1,p:{regY:-30.3,scaleY:0.922,skewX:3.4,skewY:7.7,x:166,y:426.7,startPosition:32,scaleX:0.929,regX:18.2}},{t:this.instance_2,p:{regX:-4.4,regY:10.4,scaleX:0.83,scaleY:0.935,skewX:5.4,skewY:3.2,x:331.3,y:476.5,startPosition:18}}]},2).to({state:[{t:this.instance_1,p:{regY:-30.3,scaleY:0.921,skewX:3.9,skewY:8.2,x:172.3,y:427.4,startPosition:3,scaleX:0.929,regX:18.3}},{t:this.instance_2,p:{regX:-4.4,regY:10.4,scaleX:0.83,scaleY:0.935,skewX:8,skewY:5.8,x:335.1,y:484.4,startPosition:10}}]},1).to({state:[{t:this.instance_1,p:{regY:-29.3,scaleY:0.921,skewX:4.4,skewY:8.7,x:179.8,y:429.7,startPosition:3,scaleX:0.928,regX:25}},{t:this.instance_2,p:{regX:-4.4,regY:10.4,scaleX:0.83,scaleY:0.935,skewX:8.4,skewY:6.2,x:336.1,y:486.2,startPosition:10}}]},2).to({state:[{t:this.instance_1,p:{regY:-27.7,scaleY:0.921,skewX:6.3,skewY:10.6,x:173.8,y:429.9,startPosition:27,scaleX:0.928,regX:25.2}},{t:this.instance_2,p:{regX:-4.5,regY:10.4,scaleX:0.829,scaleY:0.934,skewX:6.5,skewY:4.3,x:331.7,y:479.6,startPosition:38}}]},4).to({state:[{t:this.instance_1,p:{regY:-30.6,scaleY:0.941,skewX:-18.9,skewY:-15,x:145.3,y:394.9,startPosition:34,scaleX:0.931,regX:18.5}},{t:this.instance_4,p:{scaleX:0.938,scaleY:0.944,skewX:-25.1,skewY:-25.5,x:214,y:513,regX:-19.7,regY:59.8}},{t:this.instance_3,p:{scaleX:0.936,scaleY:0.947,skewX:-10.9,skewY:169,x:259,y:521.5,regY:86.4,regX:38.6}}]},2).to({state:[{t:this.instance_1,p:{regY:-30.6,scaleY:0.923,skewX:-11.6,skewY:-7.4,x:143.4,y:386.4,startPosition:34,scaleX:0.931,regX:18.6}},{t:this.instance_4,p:{scaleX:0.934,scaleY:0.928,skewX:-26.1,skewY:-25.6,x:213.1,y:501.4,regX:-19.7,regY:59.8}},{t:this.instance_3,p:{scaleX:0.935,scaleY:0.929,skewX:-11.7,skewY:168.6,x:258.2,y:509.3,regY:86.4,regX:38.6}}]},2).to({state:[{t:this.instance_1,p:{regY:-30.6,scaleY:0.923,skewX:-11.6,skewY:-7.4,x:143.4,y:386.4,startPosition:34,scaleX:0.931,regX:18.6}},{t:this.instance_4,p:{scaleX:0.934,scaleY:0.928,skewX:-26.1,skewY:-25.6,x:213.1,y:501.4,regX:-19.7,regY:59.8}},{t:this.instance_3,p:{scaleX:0.935,scaleY:0.929,skewX:-11.7,skewY:168.6,x:258.2,y:509.3,regY:86.4,regX:38.6}}]},1).to({state:[{t:this.instance_1,p:{regY:-30.6,scaleY:0.923,skewX:-10.7,skewY:-6.4,x:143.3,y:385.5,startPosition:34,scaleX:0.931,regX:18.6}},{t:this.instance_4,p:{scaleX:0.934,scaleY:0.928,skewX:-26.1,skewY:-25.7,x:213.3,y:500.3,regX:-19.6,regY:59.8}},{t:this.instance_3,p:{scaleX:0.935,scaleY:0.928,skewX:-11.7,skewY:168.6,x:258.4,y:508.1,regY:86.3,regX:38.6}}]},1).to({state:[{t:this.instance_1,p:{regY:-30.6,scaleY:0.923,skewX:-11.2,skewY:-6.9,x:144.9,y:387.3,startPosition:34,scaleX:0.931,regX:18.6}},{t:this.instance_4,p:{scaleX:0.934,scaleY:0.928,skewX:-25.6,skewY:-25.1,x:213.7,y:502.7,regX:-19.6,regY:59.8}},{t:this.instance_3,p:{scaleX:0.935,scaleY:0.928,skewX:-11.2,skewY:169.1,x:258.7,y:510.9,regY:86.2,regX:38.6}}]},7).to({state:[{t:this.instance_1,p:{regY:-30.6,scaleY:0.985,skewX:-9.2,skewY:-6.1,x:150.3,y:403.3,startPosition:34,scaleX:0.932,regX:18.6}},{t:this.instance_4,p:{scaleX:0.946,scaleY:0.981,skewX:-22.8,skewY:-25.4,x:216.4,y:528.2,regX:-19.6,regY:59.7}},{t:this.instance_3,p:{scaleX:0.937,scaleY:0.991,skewX:-9.2,skewY:169.6,x:261.2,y:538,regY:86.2,regX:38.5}}]},2).to({state:[{t:this.instance_1,p:{regY:-30.7,scaleY:0.923,skewX:5.1,skewY:9.4,x:166,y:433.1,startPosition:2,scaleX:0.93,regX:18.5}},{t:this.instance_2,p:{regX:-16.5,regY:-36.4,scaleX:0.831,scaleY:0.936,skewX:0.9,skewY:-1.2,x:324.5,y:436,startPosition:9}}]},1).to({state:[{t:this.instance_1,p:{regY:-30.8,scaleY:0.922,skewX:6.7,skewY:11,x:171,y:434.2,startPosition:2,scaleX:0.93,regX:18.6}}]},1).to({state:[{t:this.instance_1,p:{regY:-30.8,scaleY:0.922,skewX:4.3,skewY:8.6,x:172.5,y:434.7,startPosition:2,scaleX:0.929,regX:18.5}}]},2).to({state:[{t:this.instance_1,p:{regY:-30.8,scaleY:0.922,skewX:0,skewY:4.3,x:170.8,y:435,startPosition:2,scaleX:0.929,regX:18.6}}]},3).to({state:[{t:this.instance_1,p:{regY:-30.9,scaleY:0.921,skewX:-5.1,skewY:-0.8,x:167.2,y:434.4,startPosition:2,scaleX:0.928,regX:18.6}}]},2).to({state:[{t:this.instance_1,p:{regY:-30.7,scaleY:0.924,skewX:-3.4,skewY:0.8,x:151.8,y:432.3,startPosition:0,scaleX:0.931,regX:18.3}}]},1).to({state:[{t:this.instance_1,p:{regY:-30.6,scaleY:0.924,skewX:-6.5,skewY:-2.2,x:146.7,y:433.9,startPosition:0,scaleX:0.931,regX:18.4}}]},1).to({state:[{t:this.instance_1,p:{regY:-30.7,scaleY:0.924,skewX:-5.4,skewY:-1.1,x:148.2,y:433.6,startPosition:0,scaleX:0.931,regX:18.4}}]},2).to({state:[{t:this.instance_1,p:{regY:-30.7,scaleY:0.924,skewX:-4.9,skewY:-0.6,x:149,y:432.8,startPosition:0,scaleX:0.931,regX:18.4}}]},2).to({state:[{t:this.instance_5}]},1).wait(256));

	// head
	this.instance_6 = new lib.CUPBODYNEST002copy("synched",4);
	this.instance_6.setTransform(221.2,412.8,0.933,0.922,0,-1.4,-1.7);

	this.instance_7 = new lib.cup34rarmr02("single",17);
	this.instance_7.setTransform(142.2,434.9,0.928,0.92,0,-10.8,-6.5,18.2,-30.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6,p:{scaleX:0.933,scaleY:0.922,skewX:-1.4,skewY:-1.7,x:221.2,y:412.8,startPosition:4,regX:0,regY:0}}]},18).to({state:[{t:this.instance_6,p:{scaleX:0.932,scaleY:0.921,skewX:5.4,skewY:5.2,x:235,y:421.3,startPosition:5,regX:0,regY:0}}]},1).to({state:[{t:this.instance_6,p:{scaleX:0.932,scaleY:0.921,skewX:8.1,skewY:7.8,x:240.6,y:425.2,startPosition:7,regX:0,regY:0}}]},2).to({state:[{t:this.instance_6,p:{scaleX:0.932,scaleY:0.921,skewX:8.6,skewY:8.3,x:242.2,y:426.3,startPosition:9,regX:0,regY:0}}]},2).to({state:[{t:this.instance_6,p:{scaleX:0.932,scaleY:0.921,skewX:6.1,skewY:5.8,x:235.4,y:422.6,startPosition:11,regX:0,regY:0}}]},2).to({state:[{t:this.instance_6,p:{scaleX:0.931,scaleY:0.92,skewX:-5.3,skewY:-5.6,x:217.8,y:409.8,startPosition:14,regX:0,regY:0}}]},3).to({state:[{t:this.instance_6,p:{scaleX:0.931,scaleY:0.92,skewX:-11.7,skewY:-12,x:200.7,y:405.9,startPosition:15,regX:0,regY:0}}]},1).to({state:[{t:this.instance_6,p:{scaleX:0.93,scaleY:0.92,skewX:-10.2,skewY:-10.4,x:204.7,y:407.8,startPosition:17,regX:0,regY:0}}]},2).to({state:[{t:this.instance_6,p:{scaleX:0.93,scaleY:0.92,skewX:-9.9,skewY:-10.1,x:205.9,y:408.5,startPosition:20,regX:0,regY:0}}]},3).to({state:[{t:this.instance_6,p:{scaleX:0.93,scaleY:0.919,skewX:-11.7,skewY:-12,x:200.8,y:406.1,startPosition:33,regX:0,regY:0}}]},13).to({state:[{t:this.instance_6,p:{scaleX:0.93,scaleY:0.919,skewX:-13,skewY:-13.3,x:197.8,y:404.5,startPosition:35,regX:0,regY:0}}]},2).to({state:[{t:this.instance_6,p:{scaleX:0.93,scaleY:0.919,skewX:-11,skewY:-11.2,x:201.7,y:405.2,startPosition:37,regX:0,regY:0}}]},2).to({state:[{t:this.instance_6,p:{scaleX:0.93,scaleY:0.919,skewX:-2.2,skewY:-2.5,x:230.2,y:488.3,startPosition:39,regX:10.5,regY:92.7}}]},2).to({state:[{t:this.instance_6,p:{scaleX:0.928,scaleY:0.917,skewX:4.7,skewY:4.4,x:231,y:404.5,startPosition:40,regX:0,regY:0}}]},1).to({state:[{t:this.instance_6,p:{scaleX:0.929,scaleY:0.918,skewX:6,skewY:5.8,x:234.2,y:405.6,startPosition:41,regX:0,regY:0}}]},1).to({state:[{t:this.instance_6,p:{scaleX:0.928,scaleY:0.918,skewX:4.5,skewY:4.2,x:231,y:404.9,startPosition:43,regX:0,regY:0}}]},2).to({state:[{t:this.instance_6,p:{scaleX:0.928,scaleY:0.917,skewX:3.7,skewY:3.4,x:229.5,y:405,startPosition:45,regX:0,regY:0}}]},2).to({state:[{t:this.instance_6,p:{scaleX:0.928,scaleY:0.917,skewX:3.4,skewY:3.1,x:229.1,y:405.1,startPosition:47,regX:0,regY:0}}]},2).to({state:[{t:this.instance_6,p:{scaleX:0.928,scaleY:0.917,skewX:5.2,skewY:4.9,x:233.7,y:406.9,startPosition:57,regX:0,regY:0}}]},10).to({state:[{t:this.instance_6,p:{scaleX:0.928,scaleY:0.917,skewX:6,skewY:5.8,x:236.2,y:408.3,startPosition:59,regX:0,regY:0}}]},2).to({state:[{t:this.instance_6,p:{scaleX:0.928,scaleY:0.917,skewX:3.2,skewY:3,x:229.9,y:407.7,startPosition:61,regX:0,regY:0}}]},2).to({state:[{t:this.instance_6,p:{scaleX:0.928,scaleY:0.917,skewX:-1.7,skewY:-2,x:219.5,y:407,startPosition:63,regX:0,regY:0}}]},2).to({state:[{t:this.instance_6,p:{scaleX:0.928,scaleY:0.917,skewX:-9.6,skewY:-9.8,x:203.9,y:409.4,startPosition:64,regX:0,regY:0}}]},1).to({state:[{t:this.instance_6,p:{scaleX:0.927,scaleY:0.917,skewX:-11.1,skewY:-11.4,x:200.8,y:409.8,startPosition:66,regX:0,regY:0}}]},2).to({state:[{t:this.instance_6,p:{scaleX:0.927,scaleY:0.917,skewX:-10.6,skewY:-10.8,x:201.8,y:409.6,startPosition:68,regX:0,regY:0}}]},2).to({state:[{t:this.instance_6,p:{scaleX:0.927,scaleY:0.917,skewX:-10.3,skewY:-10.5,x:202.3,y:409.5,startPosition:70,regX:0,regY:0}}]},2).to({state:[{t:this.instance_6,p:{scaleX:0.929,scaleY:0.918,skewX:-6.1,skewY:-6.4,x:213,y:412.6,startPosition:84,regX:0,regY:0}}]},14).to({state:[{t:this.instance_6,p:{scaleX:0.93,scaleY:0.92,skewX:6,skewY:5.8,x:236.3,y:416.3,startPosition:86,regX:0,regY:0}}]},2).to({state:[{t:this.instance_6,p:{scaleX:0.93,scaleY:0.92,skewX:8.6,skewY:8.3,x:243,y:422.3,startPosition:87,regX:0,regY:0}}]},1).to({state:[{t:this.instance_6,p:{scaleX:0.93,scaleY:0.919,skewX:9,skewY:8.8,x:244.4,y:423.5,startPosition:89,regX:0,regY:0}}]},2).to({state:[{t:this.instance_6,p:{scaleX:0.93,scaleY:0.919,skewX:7.1,skewY:6.9,x:242.1,y:420.7,startPosition:93,regX:0,regY:0}}]},4).to({state:[{t:this.instance_6,p:{scaleX:0.929,scaleY:0.918,skewX:-9.7,skewY:-10,x:205.2,y:405.5,startPosition:95,regX:0,regY:0}},{t:this.instance_7}]},2).to({state:[{t:this.instance_6,p:{scaleX:0.929,scaleY:0.918,skewX:-12,skewY:-12.2,x:198.5,y:404.7,startPosition:96,regX:0,regY:0}}]},1).to({state:[{t:this.instance_6,p:{scaleX:0.929,scaleY:0.918,skewX:-11.2,skewY:-11.5,x:200.4,y:405.2,startPosition:98,regX:0,regY:0}}]},2).to({state:[{t:this.instance_6,p:{scaleX:0.929,scaleY:0.918,skewX:-10.7,skewY:-11,x:201.6,y:405.4,startPosition:100,regX:0,regY:0}}]},2).to({state:[{t:this.instance_6,p:{scaleX:0.929,scaleY:0.918,skewX:-10.4,skewY:-10.7,x:202.3,y:405.6,startPosition:102,regX:0,regY:0}}]},2).to({state:[{t:this.instance_6,p:{scaleX:0.929,scaleY:0.918,skewX:-11.1,skewY:-11.3,x:201.2,y:403.3,startPosition:115,regX:0,regY:0}}]},13).to({state:[{t:this.instance_6,p:{scaleX:0.929,scaleY:0.918,skewX:-13.2,skewY:-13.5,x:197.2,y:400.5,startPosition:116,regX:0,regY:0}}]},1).to({state:[{t:this.instance_6,p:{scaleX:0.929,scaleY:0.918,skewX:-13.8,skewY:-14.1,x:196.2,y:399.3,startPosition:118,regX:0,regY:0}}]},2).to({state:[{t:this.instance_6,p:{scaleX:0.929,scaleY:0.918,skewX:-13.8,skewY:-14.1,x:196.2,y:399.3,startPosition:120,regX:0,regY:0}}]},2).to({state:[{t:this.instance_6,p:{scaleX:0.929,scaleY:0.918,skewX:-12.7,skewY:-13,x:197.9,y:401.2,startPosition:123,regX:0,regY:0}}]},3).to({state:[{t:this.instance_6,p:{scaleX:0.928,scaleY:0.917,skewX:0.7,skewY:0.5,x:225,y:416.9,startPosition:125,regX:0,regY:0}}]},2).to({state:[{t:this.instance_6,p:{scaleX:0.928,scaleY:0.917,skewX:2.5,skewY:2.2,x:228.3,y:419.9,startPosition:126,regX:0,regY:0}}]},1).to({state:[{t:this.instance_6,p:{scaleX:0.928,scaleY:0.917,skewX:1.9,skewY:1.7,x:227.4,y:416.9,startPosition:128,regX:0,regY:0}}]},2).to({state:[{t:this.instance_6,p:{scaleX:0.928,scaleY:0.917,skewX:0.9,skewY:0.7,x:226.1,y:411.3,startPosition:129,regX:0,regY:0}}]},1).to({state:[{t:this.instance_6,p:{scaleX:0.928,scaleY:0.917,skewX:-0.3,skewY:-0.5,x:223.4,y:408.4,startPosition:131,regX:0,regY:0}}]},2).to({state:[{t:this.instance_6,p:{scaleX:0.928,scaleY:0.917,skewX:-0.5,skewY:-0.8,x:222.7,y:407.6,startPosition:133,regX:0,regY:0}}]},2).to({state:[{t:this.instance_6,p:{scaleX:0.928,scaleY:0.917,skewX:-3.6,skewY:-3.8,x:217.3,y:407.4,startPosition:143,regX:0,regY:0}}]},10).to({state:[{t:this.instance_6,p:{scaleX:0.927,scaleY:0.917,skewX:-7.3,skewY:-7.6,x:210.5,y:408.8,startPosition:145,regX:0,regY:0}}]},2).to({state:[{t:this.instance_6,p:{scaleX:0.932,scaleY:0.921,skewX:-9.2,skewY:-9.4,x:205.6,y:410.4,startPosition:146,regX:0,regY:0}}]},1).to({state:[{t:this.instance_6,p:{scaleX:0.932,scaleY:0.922,skewX:-10,skewY:-10.2,x:203.2,y:411,startPosition:148,regX:0,regY:0}}]},2).to({state:[{t:this.instance_6,p:{scaleX:0.932,scaleY:0.922,skewX:-10.3,skewY:-10.5,x:202.6,y:411.2,startPosition:150,regX:0,regY:0}}]},2).to({state:[{t:this.instance_6,p:{scaleX:0.932,scaleY:0.921,skewX:-4.9,skewY:-5.2,x:211.7,y:412.9,startPosition:162,regX:0,regY:0}}]},12).to({state:[{t:this.instance_6,p:{scaleX:0.93,scaleY:0.92,skewX:6,skewY:5.8,x:235.3,y:415,startPosition:164,regX:0,regY:0}}]},2).to({state:[{t:this.instance_6,p:{scaleX:0.93,scaleY:0.92,skewX:8.6,skewY:8.3,x:242,y:418.8,startPosition:165,regX:0,regY:0}}]},1).to({state:[{t:this.instance_6,p:{scaleX:0.93,scaleY:0.919,skewX:9,skewY:8.8,x:243.4,y:420,startPosition:167,regX:0,regY:0}}]},2).to({state:[{t:this.instance_6,p:{scaleX:0.93,scaleY:0.919,skewX:7.1,skewY:6.9,x:239.7,y:416.5,startPosition:171,regX:0,regY:0}}]},4).to({state:[{t:this.instance_6,p:{scaleX:0.933,scaleY:0.939,skewX:-10.3,skewY:-11,x:208.4,y:363.5,startPosition:173,regX:0,regY:0}}]},2).to({state:[{t:this.instance_6,p:{scaleX:0.932,scaleY:0.921,skewX:-11.1,skewY:-11.3,x:206.2,y:354.9,startPosition:175,regX:0,regY:0}}]},2).to({state:[{t:this.instance_6,p:{scaleX:0.932,scaleY:0.921,skewX:-11.1,skewY:-11.3,x:206.2,y:354.9,startPosition:176,regX:0,regY:0}}]},1).to({state:[{t:this.instance_6,p:{scaleX:0.932,scaleY:0.921,skewX:-11.1,skewY:-11.4,x:206.1,y:353.9,startPosition:177,regX:0,regY:0}}]},1).to({state:[{t:this.instance_6,p:{scaleX:0.932,scaleY:0.921,skewX:-10.6,skewY:-10.9,x:207.9,y:356.3,startPosition:184,regX:0,regY:0}}]},7).to({state:[{t:this.instance_6,p:{scaleX:0.934,scaleY:0.983,skewX:-8.6,skewY:-10.3,x:214,y:371.6,startPosition:186,regX:0,regY:0}}]},2).to({state:[{t:this.instance_6,p:{scaleX:0.932,scaleY:0.921,skewX:5.7,skewY:5.4,x:235.2,y:421.1,startPosition:187,regX:0,regY:0}}]},1).to({state:[{t:this.instance_6,p:{scaleX:0.932,scaleY:0.921,skewX:8.1,skewY:7.8,x:240.6,y:425.2,startPosition:188,regX:0,regY:0}}]},1).to({state:[{t:this.instance_6,p:{scaleX:0.932,scaleY:0.921,skewX:8.6,skewY:8.3,x:242.2,y:426.3,startPosition:190,regX:0,regY:0}}]},2).to({state:[{t:this.instance_6,p:{scaleX:0.932,scaleY:0.921,skewX:7.8,skewY:7.6,x:240.3,y:425.7,startPosition:193,regX:0,regY:0}}]},3).to({state:[{t:this.instance_6,p:{scaleX:0.932,scaleY:0.921,skewX:6.1,skewY:5.8,x:236.1,y:422.6,startPosition:195,regX:0,regY:0}}]},2).to({state:[{t:this.instance_6,p:{scaleX:0.933,scaleY:0.922,skewX:-2.8,skewY:-3.1,x:218.5,y:410.2,startPosition:196,regX:0,regY:0}}]},1).to({state:[{t:this.instance_6,p:{scaleX:0.933,scaleY:0.922,skewX:-5.9,skewY:-6.1,x:212.1,y:408.3,startPosition:197,regX:0,regY:0}}]},1).to({state:[{t:this.instance_6,p:{scaleX:0.933,scaleY:0.922,skewX:-4.8,skewY:-5.1,x:214.1,y:409.2,startPosition:199,regX:0,regY:0}}]},2).to({state:[{t:this.instance_6,p:{scaleX:0.933,scaleY:0.922,skewX:-4.3,skewY:-4.6,x:215.1,y:409,startPosition:201,regX:0,regY:0}}]},2).to({state:[]},1).wait(256));

	// back
	this.instance_8 = new lib.CUP_23_leg_l02("single",14);
	this.instance_8.setTransform(264,475.3,0.938,0.932,0,-8.7,171.6,8.6,-19);

	this.instance_9 = new lib.CUP_FRONT_leg_r02("single",14);
	this.instance_9.setTransform(200.5,487,0.938,0.932,0,-12.6,-12.1,-5.6,-20.1);

	this.instance_10 = new lib.cup34rarml02("single",0);
	this.instance_10.setTransform(311.1,418.9,0.833,0.937,0,-4.8,-7.2,-16.7,-36.4);

	this.instance_11 = new lib.cup34rarmr02("single",4);
	this.instance_11.setTransform(151.3,435.1,0.928,0.921,0,-3.5,0.6,18.7,-30.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10,p:{regX:-16.7,regY:-36.4,scaleX:0.833,skewX:-4.8,skewY:-7.2,x:311.1,y:418.9,startPosition:0,scaleY:0.937}},{t:this.instance_9,p:{scaleX:0.938,scaleY:0.932,skewX:-12.6,skewY:-12.1,x:200.5,y:487,regX:-5.6,regY:-20.1,startPosition:14}},{t:this.instance_8,p:{scaleY:0.932,skewX:-8.7,skewY:171.6,x:264,y:475.3,regX:8.6,regY:-19,scaleX:0.938,startPosition:14}}]},18).to({state:[{t:this.instance_10,p:{regX:-16.6,regY:-36.5,scaleX:0.831,skewX:7.4,skewY:5.2,x:323.4,y:438.3,startPosition:2,scaleY:0.937}},{t:this.instance_9,p:{scaleX:0.937,scaleY:0.931,skewX:-5.6,skewY:-5.1,x:205.5,y:492.5,regX:-5.6,regY:-20.1,startPosition:14}},{t:this.instance_8,p:{scaleY:0.931,skewX:-1.8,skewY:178.5,x:269.9,y:488.5,regX:8.6,regY:-19,scaleX:0.938,startPosition:14}}]},1).to({state:[{t:this.instance_10,p:{regX:-16.5,regY:-36.5,scaleX:0.831,skewX:5.2,skewY:3,x:328.1,y:446.2,startPosition:2,scaleY:0.936}},{t:this.instance_9,p:{scaleX:0.937,scaleY:0.931,skewX:-3,skewY:-2.5,x:207.7,y:494.9,regX:-5.7,regY:-20.1,startPosition:14}},{t:this.instance_8,p:{scaleY:0.931,skewX:0.8,skewY:-178.7,x:272.2,y:493.8,regX:8.7,regY:-19.1,scaleX:0.938,startPosition:14}}]},2).to({state:[{t:this.instance_10,p:{regX:-16.5,regY:-36.4,scaleX:0.831,skewX:4.2,skewY:2,x:329.5,y:448.2,startPosition:2,scaleY:0.936}},{t:this.instance_9,p:{scaleX:0.937,scaleY:0.931,skewX:-2.4,skewY:-2,x:208.7,y:495.7,regX:-5.7,regY:-20.1,startPosition:14}},{t:this.instance_8,p:{scaleY:0.931,skewX:1.3,skewY:-178.2,x:273.2,y:495.2,regX:8.7,regY:-19.1,scaleX:0.938,startPosition:14}}]},2).to({state:[{t:this.instance_10,p:{regX:-16.5,regY:-36.5,scaleX:0.83,skewX:7.2,skewY:5,x:323.5,y:442.6,startPosition:2,scaleY:0.935}},{t:this.instance_9,p:{scaleX:0.937,scaleY:0.931,skewX:-4.9,skewY:-4.5,x:205,y:493.4,regX:-5.7,regY:-20.2,startPosition:14}},{t:this.instance_8,p:{scaleY:0.931,skewX:-1.1,skewY:179.2,x:269.5,y:490.1,regX:8.6,regY:-19.1,scaleX:0.937,startPosition:14}}]},2).to({state:[{t:this.instance_10,p:{regX:-16.4,regY:-36.5,scaleX:0.83,skewX:-8.6,skewY:-8.9,x:308.1,y:411.7,startPosition:4,scaleY:0.934}},{t:this.instance_9,p:{scaleX:0.936,scaleY:0.93,skewX:-16.5,skewY:-16,x:198,y:484.9,regX:-5.7,regY:-20.3,startPosition:1}},{t:this.instance_8,p:{scaleY:0.93,skewX:-12.6,skewY:167.7,x:260.5,y:469,regX:8.6,regY:-19.1,scaleX:0.937,startPosition:1}},{t:this.instance_11,p:{regX:18.7,scaleY:0.921,skewX:-3.5,skewY:0.6,x:151.3,y:435.1,scaleX:0.928,regY:-30.8}}]},3).to({state:[{t:this.instance_10,p:{regX:-16.3,regY:-36.5,scaleX:0.829,skewX:-10.1,skewY:-12.2,x:290.5,y:397.8,startPosition:4,scaleY:0.934}},{t:this.instance_9,p:{scaleX:0.936,scaleY:0.93,skewX:-22.8,skewY:-22.4,x:193.3,y:482.3,regX:-5.8,regY:-20.3,startPosition:1}},{t:this.instance_8,p:{scaleY:0.93,skewX:-19,skewY:161.3,x:253.6,y:459.5,regX:8.5,regY:-19.2,scaleX:0.936,startPosition:1}},{t:this.instance_11,p:{regX:18.8,scaleY:0.92,skewX:-17.3,skewY:-13,x:138,y:438.5,scaleX:0.928,regY:-30.8}}]},1).to({state:[{t:this.instance_10,p:{regX:-16.3,regY:-36.5,scaleX:0.829,skewX:-8,skewY:-10.2,x:294.8,y:402.2,startPosition:4,scaleY:0.934}},{t:this.instance_9,p:{scaleX:0.936,scaleY:0.93,skewX:-21.3,skewY:-20.8,x:195.3,y:484,regX:-5.7,regY:-20.2,startPosition:1}},{t:this.instance_8,p:{scaleY:0.93,skewX:-17.4,skewY:162.9,x:256.3,y:462.8,regX:8.4,regY:-19.2,scaleX:0.936,startPosition:1}},{t:this.instance_11,p:{regX:18.8,scaleY:0.92,skewX:-14,skewY:-9.7,x:140.5,y:438.9,scaleX:0.927,regY:-30.8}}]},2).to({state:[{t:this.instance_10,p:{regX:-16.3,regY:-36.5,scaleX:0.829,skewX:-8.8,skewY:-11,x:295.9,y:403.3,startPosition:4,scaleY:0.934}},{t:this.instance_9,p:{scaleX:0.936,scaleY:0.93,skewX:-21,skewY:-20.5,x:196.1,y:484.6,regX:-5.7,regY:-20.3,startPosition:1}},{t:this.instance_8,p:{scaleY:0.93,skewX:-17.2,skewY:163.1,x:257.1,y:463.7,regX:8.4,regY:-19.3,scaleX:0.936,startPosition:1}},{t:this.instance_11,p:{regX:18.8,scaleY:0.92,skewX:-12.9,skewY:-8.6,x:141.5,y:439.3,scaleX:0.928,regY:-30.8}}]},3).to({state:[{t:this.instance_10,p:{regX:-16.3,regY:-36.5,scaleX:0.829,skewX:-10.6,skewY:-12.8,x:290.5,y:398,startPosition:4,scaleY:0.934}},{t:this.instance_9,p:{scaleX:0.936,scaleY:0.93,skewX:-21.3,skewY:-20.8,x:194,y:482.1,regX:-5.7,regY:-20.3,startPosition:1}},{t:this.instance_8,p:{scaleY:0.93,skewX:-17.5,skewY:162.9,x:255,y:460.8,regX:8.4,regY:-19.3,scaleX:0.936,startPosition:1}},{t:this.instance_11,p:{regX:18.9,scaleY:0.92,skewX:-14.7,skewY:-10.4,x:137.5,y:438.9,scaleX:0.927,regY:-30.8}}]},13).to({state:[{t:this.instance_10,p:{regX:-16.2,regY:-36.5,scaleX:0.829,skewX:-11.9,skewY:-14.1,x:287.4,y:394.3,startPosition:4,scaleY:0.934}},{t:this.instance_9,p:{scaleX:0.936,scaleY:0.93,skewX:-21.6,skewY:-21.1,x:193.4,y:481.3,regX:-5.7,regY:-20.3,startPosition:1}},{t:this.instance_8,p:{scaleY:0.93,skewX:-17.7,skewY:162.6,x:254.2,y:459.8,regX:8.4,regY:-19.3,scaleX:0.936,startPosition:1}},{t:this.instance_11,p:{regX:18.9,scaleY:0.92,skewX:-16,skewY:-11.7,x:135.2,y:438.7,scaleX:0.927,regY:-30.8}}]},2).to({state:[{t:this.instance_10,p:{regX:-16.3,regY:-36.5,scaleX:0.829,skewX:-9.9,skewY:-12,x:291.5,y:398.2,startPosition:4,scaleY:0.934}},{t:this.instance_9,p:{scaleX:0.936,scaleY:0.93,skewX:-20.8,skewY:-20.3,x:194.3,y:481.8,regX:-5.8,regY:-20.3,startPosition:1}},{t:this.instance_8,p:{scaleY:0.93,skewX:-17,skewY:163.3,x:255.5,y:461.1,regX:8.5,regY:-19.3,scaleX:0.936,startPosition:1}},{t:this.instance_11,p:{regX:18.9,scaleY:0.92,skewX:-14,skewY:-9.7,x:137.9,y:437.2,scaleX:0.927,regY:-30.8}}]},2).to({state:[{t:this.instance_10,p:{regX:-16.3,regY:-36.5,scaleX:0.829,skewX:-1.1,skewY:-3.3,x:306.9,y:410.5,startPosition:4,scaleY:0.933}},{t:this.instance_9,p:{scaleX:0.936,scaleY:0.93,skewX:-17.2,skewY:-16.8,x:197.8,y:480,regX:-5.8,regY:-20.3,startPosition:1}},{t:this.instance_8,p:{scaleY:0.93,skewX:-13.4,skewY:166.9,x:260.1,y:463.1,regX:8.5,regY:-19.3,scaleX:0.936,startPosition:1}},{t:this.instance_11,p:{regX:19,scaleY:0.919,skewX:-5.2,skewY:-0.9,x:149.3,y:425.6,scaleX:0.927,regY:-30.8}}]},2).to({state:[{t:this.instance_10,p:{regX:-16.2,regY:-36.3,scaleX:0.827,skewX:5.8,skewY:3.6,x:319.1,y:422.4,startPosition:4,scaleY:0.932}},{t:this.instance_9,p:{scaleX:0.935,scaleY:0.929,skewX:-14.1,skewY:-13.6,x:202.3,y:476.5,regX:-5.8,regY:-20.1,startPosition:1}},{t:this.instance_8,p:{scaleY:0.929,skewX:-10.2,skewY:170.1,x:265.3,y:462.9,regX:8.5,regY:-19.3,scaleX:0.936,startPosition:1}},{t:this.instance_11,p:{regX:19.1,scaleY:0.918,skewX:1.7,skewY:6,x:161.2,y:418,scaleX:0.925,regY:-31}}]},1).to({state:[{t:this.instance_10,p:{regX:-16.1,regY:-36.3,scaleX:0.828,skewX:7.1,skewY:4.9,x:322,y:425.5,startPosition:4,scaleY:0.932}},{t:this.instance_9,p:{scaleX:0.935,scaleY:0.929,skewX:-13,skewY:-12.6,x:203.9,y:477.2,regX:-5.8,regY:-20.2,startPosition:1}},{t:this.instance_8,p:{scaleY:0.929,skewX:-9.2,skewY:171.1,x:267.2,y:465,regX:8.5,regY:-19.3,scaleX:0.936,startPosition:1}},{t:this.instance_11,p:{regX:18.9,scaleY:0.918,skewX:3,skewY:7.3,x:164,y:417.4,scaleX:0.926,regY:-30.9}}]},1).to({state:[{t:this.instance_10,p:{regX:-16.1,regY:-36.4,scaleX:0.828,skewX:5.6,skewY:3.4,x:319.2,y:422.4,startPosition:4,scaleY:0.932}},{t:this.instance_9,p:{scaleX:0.935,scaleY:0.929,skewX:-13.5,skewY:-13.1,x:202.8,y:477.2,regX:-5.8,regY:-20.1,startPosition:1}},{t:this.instance_8,p:{scaleY:0.929,skewX:-9.7,skewY:170.6,x:266,y:464.4,regX:8.5,regY:-19.1,scaleX:0.936,startPosition:1}},{t:this.instance_11,p:{regX:18.9,scaleY:0.918,skewX:1.5,skewY:5.8,x:161,y:418.6,scaleX:0.926,regY:-30.8}}]},2).to({state:[{t:this.instance_10,p:{regX:-16,regY:-36.3,scaleX:0.828,skewX:4.8,skewY:2.6,x:318,y:421.2,startPosition:4,scaleY:0.932}},{t:this.instance_9,p:{scaleX:0.935,scaleY:0.929,skewX:-13.8,skewY:-13.4,x:202.5,y:477.3,regX:-5.8,regY:-20.1,startPosition:1}},{t:this.instance_8,p:{scaleY:0.929,skewX:-10,skewY:170.3,x:265.6,y:464.2,regX:8.5,regY:-19.1,scaleX:0.936,startPosition:1}},{t:this.instance_11,p:{regX:18.9,scaleY:0.918,skewX:0.6,skewY:4.9,x:159.8,y:419.7,scaleX:0.925,regY:-30.8}}]},2).to({state:[{t:this.instance_10,p:{regX:-16.1,regY:-36.3,scaleX:0.828,skewX:4.5,skewY:2.3,x:317.7,y:420.8,startPosition:4,scaleY:0.932}},{t:this.instance_9,p:{scaleX:0.935,scaleY:0.929,skewX:-13.8,skewY:-13.4,x:202.5,y:477.3,regX:-5.8,regY:-20.1,startPosition:1}},{t:this.instance_8,p:{scaleY:0.929,skewX:-10,skewY:170.3,x:265.6,y:464.2,regX:8.5,regY:-19.1,scaleX:0.936,startPosition:1}},{t:this.instance_11,p:{regX:18.9,scaleY:0.918,skewX:0.4,skewY:4.7,x:159.5,y:420.1,scaleX:0.925,regY:-30.8}}]},2).to({state:[{t:this.instance_10,p:{regX:-16.2,regY:-36.3,scaleX:0.827,skewX:8.5,skewY:6.3,x:321.7,y:425.5,startPosition:4,scaleY:0.932}},{t:this.instance_9,p:{scaleX:0.935,scaleY:0.929,skewX:-13.1,skewY:-12.6,x:204,y:477.8,regX:-5.8,regY:-20.2,startPosition:1}},{t:this.instance_8,p:{scaleY:0.929,skewX:-9.2,skewY:171.1,x:267.4,y:465.6,regX:8.4,regY:-19.1,scaleX:0.936,startPosition:1}},{t:this.instance_11,p:{regX:18.9,scaleY:0.918,skewX:2.1,skewY:6.4,x:163.6,y:419.8,scaleX:0.925,regY:-30.8}}]},10).to({state:[{t:this.instance_10,p:{regX:-16.1,regY:-36.4,scaleX:0.827,skewX:11.4,skewY:9.2,x:324,y:428.1,startPosition:4,scaleY:0.932}},{t:this.instance_9,p:{scaleX:0.935,scaleY:0.929,skewX:-12.8,skewY:-12.3,x:204.9,y:478.4,regX:-5.8,regY:-20.2,startPosition:1}},{t:this.instance_8,p:{scaleY:0.929,skewX:-8.9,skewY:171.4,x:268.4,y:466.5,regX:8.4,regY:-19.1,scaleX:0.936,startPosition:1}},{t:this.instance_11,p:{regX:18.9,scaleY:0.918,skewX:3,skewY:7.3,x:166,y:420,scaleX:0.925,regY:-30.8}}]},2).to({state:[{t:this.instance_9,p:{scaleX:0.935,scaleY:0.929,skewX:-14.3,skewY:-13.8,x:203.1,y:478.8,regX:-5.8,regY:-20.2,startPosition:1}},{t:this.instance_8,p:{scaleY:0.929,skewX:-10.4,skewY:169.9,x:266.2,y:465.2,regX:8.4,regY:-19.1,scaleX:0.936,startPosition:1}}]},2).to({state:[{t:this.instance_10,p:{regX:-16.1,regY:-36.3,scaleX:0.827,skewX:-0.6,skewY:-2.8,x:309.1,y:414.7,startPosition:6,scaleY:0.932}},{t:this.instance_9,p:{scaleX:0.935,scaleY:0.929,skewX:-15.8,skewY:-15.4,x:200.4,y:478.2,regX:-5.7,regY:-20.2,startPosition:1}},{t:this.instance_8,p:{scaleY:0.929,skewX:-12,skewY:168.3,x:263,y:463,regX:8.4,regY:-19.1,scaleX:0.936,startPosition:1}}]},2).to({state:[{t:this.instance_10,p:{regX:-16.1,regY:-36.3,scaleX:0.827,skewX:-8.5,skewY:-10.7,x:293.7,y:404.9,startPosition:15,scaleY:0.931}},{t:this.instance_9,p:{scaleX:0.935,scaleY:0.929,skewX:-19.6,skewY:-19.1,x:195.1,y:482.2,regX:-5.8,regY:-20.2,startPosition:1}},{t:this.instance_8,p:{scaleY:0.929,skewX:-15.7,skewY:164.6,x:256.7,y:462.8,regX:8.4,regY:-19.1,scaleX:0.935,startPosition:1}}]},1).to({state:[{t:this.instance_10,p:{regX:-16.2,regY:-36.3,scaleX:0.827,skewX:-10,skewY:-12.2,x:290.3,y:402.9,startPosition:16,scaleY:0.931}},{t:this.instance_9,p:{scaleX:0.935,scaleY:0.929,skewX:-20.1,skewY:-19.6,x:194.4,y:482.1,regX:-5.8,regY:-20.2,startPosition:1}},{t:this.instance_8,p:{scaleY:0.929,skewX:-16.3,skewY:164,x:255.7,y:462.3,regX:8.5,regY:-19.1,scaleX:0.935,startPosition:1}}]},2).to({state:[{t:this.instance_10,p:{regX:-16.1,regY:-36.3,scaleX:0.827,skewX:-10.7,skewY:-12.9,x:291.5,y:403.5,startPosition:16,scaleY:0.931}},{t:this.instance_9,p:{scaleX:0.935,scaleY:0.929,skewX:-19.5,skewY:-19.1,x:194.8,y:481.8,regX:-5.8,regY:-20.2,startPosition:1}},{t:this.instance_8,p:{scaleY:0.929,skewX:-15.7,skewY:164.6,x:256.3,y:462.6,regX:8.4,regY:-19.1,scaleX:0.935,startPosition:1}}]},2).to({state:[{t:this.instance_10,p:{regX:-16.3,regY:-36.3,scaleX:0.826,skewX:-10.9,skewY:-13.1,x:292,y:403.8,startPosition:16,scaleY:0.931}},{t:this.instance_9,p:{scaleX:0.935,scaleY:0.929,skewX:-19.3,skewY:-18.8,x:194.9,y:481.5,regX:-5.8,regY:-20.3,startPosition:1}},{t:this.instance_8,p:{scaleY:0.929,skewX:-15.4,skewY:164.9,x:256.5,y:462.7,regX:8.5,regY:-19.1,scaleX:0.935,startPosition:1}}]},2).to({state:[{t:this.instance_9,p:{scaleX:0.933,scaleY:0.927,skewX:-2.2,skewY:-1.7,x:207.1,y:492.3,regX:8.4,regY:-27.2,startPosition:0}},{t:this.instance_8,p:{scaleY:0.928,skewX:-3.4,skewY:176.9,x:251.4,y:494.5,regX:8.3,regY:-19,scaleX:0.934,startPosition:0}},{t:this.instance_10,p:{regX:-15.9,regY:-29.9,scaleX:0.829,skewX:-8.7,skewY:-10.9,x:304.2,y:416.9,startPosition:8,scaleY:0.933}}]},14).to({state:[{t:this.instance_9,p:{scaleX:0.934,scaleY:0.928,skewX:10,skewY:10.4,x:213.6,y:493.3,regX:8.4,regY:-27,startPosition:0}},{t:this.instance_8,p:{scaleY:0.929,skewX:8.7,skewY:-170.8,x:256.5,y:504.9,regX:8.3,regY:-19,scaleX:0.935,startPosition:0}}]},2).to({state:[{t:this.instance_9,p:{scaleX:0.934,scaleY:0.928,skewX:12.5,skewY:13,x:216.9,y:498.2,regX:8.4,regY:-27.1,startPosition:0}},{t:this.instance_8,p:{scaleY:0.929,skewX:11.3,skewY:-168.2,x:259.2,y:511.8,regX:8.4,regY:-19,scaleX:0.935,startPosition:0}},{t:this.instance_10,p:{regX:-16,regY:-29.8,scaleX:0.83,skewX:5.5,skewY:3.3,x:330.1,y:450,startPosition:11,scaleY:0.935}}]},1).to({state:[{t:this.instance_9,p:{scaleX:0.934,scaleY:0.928,skewX:12.9,skewY:13.4,x:217.8,y:499.2,regX:8.4,regY:-27.1,startPosition:0}},{t:this.instance_8,p:{scaleY:0.929,skewX:11.7,skewY:-167.8,x:259.9,y:513,regX:8.4,regY:-19,scaleX:0.935,startPosition:0}},{t:this.instance_10,p:{regX:-16,regY:-29.8,scaleX:0.83,skewX:5.9,skewY:3.7,x:331.3,y:451.8,startPosition:11,scaleY:0.935}}]},2).to({state:[{t:this.instance_9,p:{scaleX:0.934,scaleY:0.928,skewX:11.1,skewY:11.5,x:215.1,y:497.1,regX:8.4,regY:-27.2,startPosition:0}},{t:this.instance_8,p:{scaleY:0.929,skewX:9.8,skewY:-169.7,x:257.7,y:509.5,regX:8.4,regY:-19,scaleX:0.935,startPosition:0}},{t:this.instance_10,p:{regX:-16,regY:-29.8,scaleX:0.836,skewX:-4.9,skewY:-0.3,x:326.9,y:449.1,startPosition:11,scaleY:0.997}}]},4).to({state:[{t:this.instance_9,p:{scaleX:0.933,scaleY:0.927,skewX:-5.8,skewY:-5.3,x:204.3,y:485.4,regX:8.4,regY:-27.3,startPosition:0}},{t:this.instance_8,p:{scaleY:0.928,skewX:-7,skewY:173.3,x:248.7,y:485,regX:8.4,regY:-19,scaleX:0.934,startPosition:0}},{t:this.instance_10,p:{regX:-16,regY:-29.8,scaleX:0.827,skewX:-6.8,skewY:-9,x:296.4,y:413.8,startPosition:12,scaleY:0.932}}]},2).to({state:[{t:this.instance_9,p:{scaleX:0.933,scaleY:0.927,skewX:-8.1,skewY:-7.6,x:200.8,y:484.6,regX:8.4,regY:-27.3,startPosition:0}},{t:this.instance_8,p:{scaleY:0.928,skewX:-9.3,skewY:171,x:245.1,y:482.4,regX:8.4,regY:-19,scaleX:0.934,startPosition:0}},{t:this.instance_10,p:{regX:-15.8,regY:-29.9,scaleX:0.825,skewX:-13.2,skewY:-13.3,x:289.5,y:399.5,startPosition:14,scaleY:0.995}}]},1).to({state:[{t:this.instance_9,p:{scaleX:0.933,scaleY:0.927,skewX:-7.3,skewY:-6.8,x:201.7,y:485.1,regX:8.4,regY:-27.3,startPosition:0}},{t:this.instance_8,p:{scaleY:0.928,skewX:-8.5,skewY:171.8,x:246.1,y:483.4,regX:8.4,regY:-19,scaleX:0.934,startPosition:0}},{t:this.instance_10,p:{regX:-15.9,regY:-29.8,scaleX:0.828,skewX:-10.7,skewY:-12.9,x:291.6,y:401.4,startPosition:14,scaleY:0.933}}]},2).to({state:[{t:this.instance_9,p:{scaleX:0.933,scaleY:0.927,skewX:-6.8,skewY:-6.3,x:202.1,y:485.3,regX:8.4,regY:-27.3,startPosition:0}},{t:this.instance_8,p:{scaleY:0.928,skewX:-8,skewY:172.3,x:246.5,y:484.1,regX:8.4,regY:-19,scaleX:0.934,startPosition:0}},{t:this.instance_10,p:{regX:-15.9,regY:-29.9,scaleX:0.829,skewX:-9.2,skewY:-11.5,x:292.8,y:402.5,startPosition:14,scaleY:0.899}}]},2).to({state:[{t:this.instance_9,p:{scaleX:0.933,scaleY:0.927,skewX:-6.5,skewY:-6.1,x:202.5,y:485.5,regX:8.4,regY:-27.2,startPosition:0}},{t:this.instance_8,p:{scaleY:0.928,skewX:-7.8,skewY:172.5,x:246.8,y:484.5,regX:8.4,regY:-19,scaleX:0.934,startPosition:0}},{t:this.instance_10,p:{regX:-16,regY:-29.8,scaleX:0.829,skewX:-9,skewY:-11,x:293.3,y:403.4,startPosition:14,scaleY:0.883}}]},2).to({state:[{t:this.instance_9,p:{scaleX:0.933,scaleY:0.927,skewX:-6.8,skewY:-6.4,x:202.2,y:485.1,regX:8.4,regY:-27.3,startPosition:0}},{t:this.instance_8,p:{scaleY:0.928,skewX:-8.1,skewY:172.2,x:246.6,y:483.9,regX:8.4,regY:-19,scaleX:0.934,startPosition:0}},{t:this.instance_10,p:{regX:-16,regY:-29.8,scaleX:0.829,skewX:-9.6,skewY:-11.7,x:292.1,y:400.2,startPosition:29,scaleY:0.883}}]},13).to({state:[{t:this.instance_9,p:{scaleX:0.931,scaleY:1.026,skewX:-8.4,skewY:-8.2,x:201.9,y:481.3,regX:8.4,regY:-27.2,startPosition:0}},{t:this.instance_8,p:{scaleY:1.027,skewX:-9.5,skewY:170.2,x:245.7,y:481.6,regX:8.5,regY:-19,scaleX:0.932,startPosition:0}},{t:this.instance_10,p:{regX:-16,regY:-29.8,scaleX:0.829,skewX:-12,skewY:-14.1,x:287.7,y:394.6,startPosition:30,scaleY:0.883}}]},1).to({state:[{t:this.instance_9,p:{scaleX:0.931,scaleY:1.026,skewX:-8.7,skewY:-8.5,x:201.6,y:481,regX:8.4,regY:-27.2,startPosition:0}},{t:this.instance_8,p:{scaleY:1.027,skewX:-9.8,skewY:169.9,x:245.5,y:481.1,regX:8.5,regY:-19,scaleX:0.932,startPosition:0}},{t:this.instance_10,p:{regX:-16,regY:-29.8,scaleX:0.829,skewX:-12.6,skewY:-14.7,x:286.6,y:391.5,startPosition:31,scaleY:0.883}}]},2).to({state:[{t:this.instance_9,p:{scaleX:0.931,scaleY:1.026,skewX:-8.7,skewY:-8.5,x:201.6,y:481,regX:8.4,regY:-27.2,startPosition:0}},{t:this.instance_8,p:{scaleY:1.027,skewX:-9.8,skewY:169.9,x:245.5,y:481.1,regX:8.5,regY:-19,scaleX:0.932,startPosition:0}},{t:this.instance_10,p:{regX:-16,regY:-29.8,scaleX:0.829,skewX:-12.6,skewY:-14.7,x:286.6,y:391.5,startPosition:31,scaleY:0.883}}]},2).to({state:[{t:this.instance_9,p:{scaleX:0.931,scaleY:1.026,skewX:-8.4,skewY:-8.2,x:202,y:482.3,regX:8.4,regY:-27.2,startPosition:0}},{t:this.instance_8,p:{scaleY:1.027,skewX:-9.5,skewY:170.2,x:245.8,y:482.6,regX:8.5,regY:-19,scaleX:0.932,startPosition:0}},{t:this.instance_10,p:{regX:-16.1,regY:-29.8,scaleX:0.829,skewX:-11.5,skewY:-13.6,x:288.3,y:395,startPosition:31,scaleY:0.883}}]},3).to({state:[{t:this.instance_10,p:{regX:-16,regY:-36.2,scaleX:0.827,skewX:1.8,skewY:-0.2,x:314,y:428.7,startPosition:4,scaleY:0.931}},{t:this.instance_9,p:{scaleX:0.935,scaleY:0.928,skewX:-21.1,skewY:-20.6,x:209.4,y:562.1,regX:-19.7,regY:59.9,startPosition:1}},{t:this.instance_8,p:{scaleY:0.929,skewX:-6.7,skewY:173.7,x:254.6,y:573.9,regX:38.5,regY:86.5,scaleX:0.935,startPosition:1}}]},2).to({state:[{t:this.instance_10,p:{regX:-16,regY:-36.3,scaleX:0.827,skewX:3.6,skewY:1.4,x:317.2,y:434.3,startPosition:4,scaleY:0.931}},{t:this.instance_9,p:{scaleX:0.935,scaleY:0.929,skewX:-20.3,skewY:-19.9,x:209.5,y:564.6,regX:-19.7,regY:59.8,startPosition:1}},{t:this.instance_8,p:{scaleY:0.929,skewX:-5.9,skewY:174.4,x:254.6,y:577,regX:38.5,regY:86.5,scaleX:0.935,startPosition:1}}]},1).to({state:[{t:this.instance_10,p:{regX:-16,regY:-36.3,scaleX:0.827,skewX:3.1,skewY:0.9,x:316.4,y:430.5,startPosition:4,scaleY:0.931}},{t:this.instance_9,p:{scaleX:0.935,scaleY:0.929,skewX:-20.9,skewY:-20.4,x:209.9,y:562.8,regX:-19.7,regY:59.7,startPosition:1}},{t:this.instance_8,p:{scaleY:0.929,skewX:-6.5,skewY:173.8,x:255.2,y:574.8,regX:38.5,regY:86.5,scaleX:0.935,startPosition:1}}]},2).to({state:[{t:this.instance_10,p:{regX:-16.1,regY:-36.3,scaleX:0.827,skewX:2,skewY:-0.1,x:315.2,y:423.3,startPosition:4,scaleY:0.932}},{t:this.instance_9,p:{scaleX:0.935,scaleY:0.929,skewX:-21.1,skewY:-20.7,x:210.4,y:557.5,regX:-19.8,regY:59.9,startPosition:1}},{t:this.instance_8,p:{scaleY:0.929,skewX:-6.7,skewY:173.6,x:255.6,y:569.2,regX:38.6,regY:86.5,scaleX:0.935,startPosition:1}}]},1).to({state:[{t:this.instance_10,p:{regX:-16.1,regY:-36.3,scaleX:0.827,skewX:0.7,skewY:-1.4,x:312.8,y:418.4,startPosition:4,scaleY:0.932}},{t:this.instance_9,p:{scaleX:0.935,scaleY:0.929,skewX:-21.9,skewY:-21.4,x:210.5,y:556.3,regX:-19.8,regY:59.9,startPosition:1}},{t:this.instance_8,p:{scaleY:0.929,skewX:-7.5,skewY:172.8,x:255.9,y:567.3,regX:38.6,regY:86.5,scaleX:0.935,startPosition:1}}]},2).to({state:[{t:this.instance_10,p:{regX:-16.1,regY:-36.3,scaleX:0.827,skewX:0.5,skewY:-1.6,x:312.2,y:417.2,startPosition:4,scaleY:0.932}},{t:this.instance_9,p:{scaleX:0.935,scaleY:0.929,skewX:-22.1,skewY:-21.7,x:210.5,y:555.5,regX:-19.7,regY:59.9,startPosition:1}},{t:this.instance_8,p:{scaleY:0.929,skewX:-7.7,skewY:172.6,x:255.9,y:566.4,regX:38.6,regY:86.5,scaleX:0.935,startPosition:1}}]},2).to({state:[{t:this.instance_10,p:{regX:-16.1,regY:-36.3,scaleX:0.83,skewX:-7.4,skewY:-9.8,x:307.6,y:411.4,startPosition:4,scaleY:0.929}},{t:this.instance_9,p:{scaleX:0.935,scaleY:0.929,skewX:-23.4,skewY:-23,x:210.9,y:554.8,regX:-19.7,regY:59.8,startPosition:1}},{t:this.instance_8,p:{scaleY:0.929,skewX:-9,skewY:171.3,x:256.6,y:564.8,regX:38.5,regY:86.4,scaleX:0.935,startPosition:1}}]},10).to({state:[{t:this.instance_10,p:{regX:-8.3,regY:-29.7,scaleX:0.788,skewX:-3.9,skewY:-13.4,x:307.4,y:412.9,startPosition:0,scaleY:0.931}},{t:this.instance_9,p:{scaleX:0.935,scaleY:0.929,skewX:-25.2,skewY:-24.7,x:211.5,y:555.6,regX:-19.6,regY:59.8,startPosition:1}},{t:this.instance_8,p:{scaleY:0.929,skewX:-10.8,skewY:169.5,x:257.4,y:564.1,regX:38.5,regY:86.4,scaleX:0.935,startPosition:1}}]},2).to({state:[{t:this.instance_10,p:{regX:-16.7,regY:-36.3,scaleX:0.832,skewX:-8.2,skewY:-10.4,x:295.5,y:404.4,startPosition:0,scaleY:0.937}},{t:this.instance_9,p:{scaleX:0.935,scaleY:0.929,skewX:-24.5,skewY:-24,x:207.7,y:557.5,regX:-19.7,regY:59.8,startPosition:1}},{t:this.instance_8,p:{scaleY:0.929,skewX:-10.1,skewY:170.2,x:253.6,y:566.6,regX:38.6,regY:86.4,scaleX:0.935,startPosition:1}}]},1).to({state:[{t:this.instance_10,p:{regX:-16.7,regY:-36.3,scaleX:0.832,skewX:-9,skewY:-11.2,x:293.1,y:403.7,startPosition:0,scaleY:0.937}},{t:this.instance_9,p:{scaleX:0.935,scaleY:0.929,skewX:-25,skewY:-24.5,x:207.4,y:557.6,regX:-19.7,regY:59.8,startPosition:1}},{t:this.instance_8,p:{scaleY:0.929,skewX:-10.6,skewY:169.7,x:253.4,y:566.4,regX:38.6,regY:86.4,scaleX:0.935,startPosition:1}}]},2).to({state:[{t:this.instance_10,p:{regX:-16.7,regY:-36.3,scaleX:0.832,skewX:-9.3,skewY:-11.5,x:292.5,y:403.4,startPosition:0,scaleY:0.937}},{t:this.instance_9,p:{scaleX:0.935,scaleY:0.929,skewX:-25.3,skewY:-24.8,x:207.6,y:557.8,regX:-19.7,regY:59.8,startPosition:1}},{t:this.instance_8,p:{scaleY:0.929,skewX:-10.9,skewY:169.5,x:253.5,y:566.3,regX:38.6,regY:86.4,scaleX:0.935,startPosition:1}}]},2).to({state:[{t:this.instance_10,p:{regX:-16.7,regY:-36.3,scaleX:0.832,skewX:-4,skewY:-6.2,x:301.8,y:413.5,startPosition:0,scaleY:0.937}},{t:this.instance_9,p:{scaleX:0.935,scaleY:0.929,skewX:-23.2,skewY:-22.7,x:206.7,y:559.2,regX:-19.7,regY:59.9,startPosition:1}},{t:this.instance_8,p:{scaleY:0.929,skewX:-8.8,skewY:171.5,x:252.3,y:569.2,regX:38.6,regY:86.4,scaleX:0.935,startPosition:1}}]},12).to({state:[{t:this.instance_9,p:{scaleX:0.934,scaleY:0.928,skewX:10,skewY:10.4,x:212.5,y:492,regX:8.4,regY:-27,startPosition:0}},{t:this.instance_8,p:{scaleY:0.929,skewX:8.7,skewY:-170.8,x:255.5,y:503.6,regX:8.3,regY:-19,scaleX:0.935,startPosition:0}}]},2).to({state:[{t:this.instance_9,p:{scaleX:0.934,scaleY:0.928,skewX:12.5,skewY:13,x:215.9,y:494.7,regX:8.4,regY:-27.1,startPosition:0}},{t:this.instance_8,p:{scaleY:0.929,skewX:11.3,skewY:-168.2,x:258.1,y:508.3,regX:8.4,regY:-19,scaleX:0.935,startPosition:0}},{t:this.instance_10,p:{regX:-4.4,regY:10.4,scaleX:0.83,skewX:8,skewY:5.8,x:335.1,y:484.4,startPosition:11,scaleY:0.935}}]},1).to({state:[{t:this.instance_9,p:{scaleX:0.934,scaleY:0.928,skewX:12.9,skewY:13.4,x:216.7,y:495.7,regX:8.4,regY:-27.1,startPosition:0}},{t:this.instance_8,p:{scaleY:0.929,skewX:11.7,skewY:-167.8,x:258.9,y:509.5,regX:8.4,regY:-19,scaleX:0.935,startPosition:0}},{t:this.instance_10,p:{regX:-4.4,regY:10.4,scaleX:0.83,skewX:8.4,skewY:6.2,x:336.1,y:486.2,startPosition:11,scaleY:0.935}}]},2).to({state:[{t:this.instance_9,p:{scaleX:0.934,scaleY:0.928,skewX:11.1,skewY:11.5,x:212.8,y:492.9,regX:8.4,regY:-27.2,startPosition:0}},{t:this.instance_8,p:{scaleY:0.929,skewX:9.8,skewY:-169.7,x:255.3,y:505.3,regX:8.4,regY:-19,scaleX:0.935,startPosition:0}}]},4).to({state:[{t:this.instance_10,p:{regX:-16.8,regY:-36.3,scaleX:0.832,skewX:-6.3,skewY:-8.8,x:298.2,y:355.2,startPosition:39,scaleY:0.955}}]},2).to({state:[{t:this.instance_10,p:{regX:-16.7,regY:-36.3,scaleX:0.832,skewX:-10.1,skewY:-12.3,x:295.9,y:346,startPosition:39,scaleY:0.937}}]},2).to({state:[{t:this.instance_10,p:{regX:-18.2,regY:-30.8,scaleX:0.831,skewX:-12.6,skewY:-14.8,x:295.4,y:351.2,startPosition:39,scaleY:0.936}}]},1).to({state:[{t:this.instance_10,p:{regX:-18.1,regY:-30.9,scaleX:0.831,skewX:-10.4,skewY:-12.6,x:295.3,y:350,startPosition:39,scaleY:0.936}}]},1).to({state:[{t:this.instance_10,p:{regX:-18,regY:-30.8,scaleX:0.831,skewX:-8.8,skewY:-11,x:295.2,y:350.1,startPosition:39,scaleY:0.936}}]},1).to({state:[{t:this.instance_10,p:{regX:-18.1,regY:-30.9,scaleX:0.831,skewX:-10.4,skewY:-12.6,x:295.3,y:350,startPosition:39,scaleY:0.936}}]},1).to({state:[{t:this.instance_10,p:{regX:-18,regY:-30.8,scaleX:0.831,skewX:-9.8,skewY:-12,x:295.3,y:350.1,startPosition:39,scaleY:0.936}}]},1).to({state:[{t:this.instance_10,p:{regX:-18.1,regY:-30.9,scaleX:0.831,skewX:-10.4,skewY:-12.6,x:295.3,y:350,startPosition:39,scaleY:0.936}}]},1).to({state:[{t:this.instance_10,p:{regX:-18,regY:-30.8,scaleX:0.831,skewX:-9.8,skewY:-12,x:295.3,y:350.1,startPosition:39,scaleY:0.936}}]},1).to({state:[{t:this.instance_10,p:{regX:-18.1,regY:-30.9,scaleX:0.831,skewX:-10.4,skewY:-12.6,x:295.3,y:350,startPosition:39,scaleY:0.936}}]},1).to({state:[{t:this.instance_10,p:{regX:-18.1,regY:-30.8,scaleX:0.831,skewX:-11.8,skewY:-14,x:297.1,y:353.3,startPosition:39,scaleY:0.936}}]},1).to({state:[{t:this.instance_10,p:{regX:-17.9,regY:-30.8,scaleX:0.833,skewX:0.2,skewY:-21,x:303.4,y:370.2,startPosition:40,scaleY:1.071}}]},2).to({state:[{t:this.instance_9,p:{scaleX:0.937,scaleY:0.931,skewX:-5.4,skewY:-4.9,x:205.3,y:492.1,regX:-5.6,regY:-20.1,startPosition:14}},{t:this.instance_8,p:{scaleY:0.931,skewX:-1.5,skewY:178.8,x:269.6,y:488.4,regX:8.6,regY:-19,scaleX:0.937,startPosition:14}}]},1).to({state:[{t:this.instance_10,p:{regX:-16.6,regY:-36.5,scaleX:0.831,skewX:3.5,skewY:1.3,x:328.1,y:446.2,startPosition:2,scaleY:0.894}},{t:this.instance_9,p:{scaleX:0.937,scaleY:0.931,skewX:-3,skewY:-2.5,x:207.7,y:494.9,regX:-5.7,regY:-20.1,startPosition:14}},{t:this.instance_8,p:{scaleY:0.931,skewX:0.8,skewY:-178.7,x:272.2,y:493.8,regX:8.7,regY:-19.1,scaleX:0.938,startPosition:14}}]},1).to({state:[{t:this.instance_10,p:{regX:-16.5,regY:-36.4,scaleX:0.831,skewX:4.2,skewY:2,x:329.5,y:448.2,startPosition:2,scaleY:0.936}},{t:this.instance_9,p:{scaleX:0.937,scaleY:0.931,skewX:-2.4,skewY:-2,x:208.7,y:495.7,regX:-5.7,regY:-20.1,startPosition:14}},{t:this.instance_8,p:{scaleY:0.931,skewX:1.3,skewY:-178.2,x:273.2,y:495.2,regX:8.7,regY:-19.1,scaleX:0.938,startPosition:14}}]},2).to({state:[{t:this.instance_10,p:{regX:-16.5,regY:-36.4,scaleX:0.831,skewX:3.5,skewY:1.3,x:327.9,y:446.5,startPosition:2,scaleY:0.936}},{t:this.instance_9,p:{scaleX:0.937,scaleY:0.931,skewX:-3.2,skewY:-2.7,x:207.6,y:495.5,regX:-5.8,regY:-20.2,startPosition:14}},{t:this.instance_8,p:{scaleY:0.931,skewX:0.6,skewY:-178.9,x:272.2,y:494.3,regX:8.7,regY:-19.1,scaleX:0.938,startPosition:14}}]},3).to({state:[{t:this.instance_10,p:{regX:-16.5,regY:-36.5,scaleX:0.83,skewX:7.2,skewY:5,x:324.2,y:442.6,startPosition:2,scaleY:0.935}},{t:this.instance_9,p:{scaleX:0.937,scaleY:0.931,skewX:-4.9,skewY:-4.5,x:205.7,y:493.4,regX:-5.7,regY:-20.2,startPosition:14}},{t:this.instance_8,p:{scaleY:0.931,skewX:-1.1,skewY:179.2,x:270.2,y:490.1,regX:8.6,regY:-19.1,scaleX:0.937,startPosition:14}}]},2).to({state:[{t:this.instance_10,p:{regX:-16.5,regY:-36.3,scaleX:0.832,skewX:-1.9,skewY:-4.1,x:308.7,y:414.2,startPosition:0,scaleY:0.937}},{t:this.instance_9,p:{scaleX:0.938,scaleY:0.932,skewX:-15,skewY:-14.5,x:199.1,y:484.2,regX:-5.6,regY:-20.1,startPosition:14}},{t:this.instance_8,p:{scaleY:0.932,skewX:-11.1,skewY:169.2,x:262,y:469.8,regX:8.5,regY:-19,scaleX:0.939,startPosition:14}}]},1).to({state:[{t:this.instance_10,p:{regX:-16.5,regY:-36.3,scaleX:0.832,skewX:-4.9,skewY:-7.1,x:302.4,y:407.5,startPosition:0,scaleY:0.937}},{t:this.instance_9,p:{scaleX:0.938,scaleY:0.932,skewX:-16.4,skewY:-16,x:197.4,y:484.1,regX:-5.5,regY:-20.1,startPosition:14}},{t:this.instance_8,p:{scaleY:0.932,skewX:-12.6,skewY:167.7,x:259.9,y:468.1,regX:8.5,regY:-19,scaleX:0.939,startPosition:14}}]},1).to({state:[{t:this.instance_10,p:{regX:-16.6,regY:-36.3,scaleX:0.832,skewX:-3.9,skewY:-6.1,x:304.3,y:410.1,startPosition:0,scaleY:0.937}},{t:this.instance_9,p:{scaleX:0.938,scaleY:0.932,skewX:-16,skewY:-15.5,x:197.8,y:484.5,regX:-5.6,regY:-20.1,startPosition:14}},{t:this.instance_8,p:{scaleY:0.932,skewX:-12.1,skewY:168.2,x:260.5,y:469.1,regX:8.6,regY:-19,scaleX:0.939,startPosition:14}}]},2).to({state:[{t:this.instance_10,p:{regX:-16.6,regY:-36.3,scaleX:0.832,skewX:-3.4,skewY:-5.6,x:305.3,y:410.7,startPosition:0,scaleY:0.937}},{t:this.instance_9,p:{scaleX:0.938,scaleY:0.932,skewX:-15.4,skewY:-15,x:198.2,y:484.2,regX:-5.6,regY:-20.1,startPosition:14}},{t:this.instance_8,p:{scaleY:0.932,skewX:-11.6,skewY:168.7,x:261.1,y:469.3,regX:8.5,regY:-19,scaleX:0.939,startPosition:14}}]},2).to({state:[]},1).wait(256));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13,-148.9,376.3,700.5);


// symbols:
(lib.CUP_FRONT_leg_r02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// foot
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373D48").s().p("AgIBEQgMghgChwIgOAAIA7gDIAAAJQgBAWAHAlQAIAjAAASQAAAWgIAJQgHAJgOgBQgLABgFgNg");
	this.shape.setTransform(11.1,9.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1F26").s().p("AgiAKIAAgUIBFAAIAAAUg");
	this.shape_1.setTransform(10.2,-2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#758A51").s().p("AghBXIgMhpQgCgagKgpIAAgBIB0AAQgHBGAABng");
	this.shape_2.setTransform(9.1,-14.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#373D48").s().p("Ai5B5IgCgBQADgbAVgYQAfghA1AAQAlAAAjAIQAhAIASAAIAGgBIgOgOIgNgJQAKgNAOgZQASgjAlhVQAWAUAVAJQAYALATgJIg1CjQgRA2ADANIkygKgAB/CBIABgBQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBABAAg");
	this.shape_3.setTransform(-20.9,31.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1F26").s().p("ABSCrQhZgHhnAAIhlABQABAAAAgJIAFgEQADgEABgFQAIACAYADIAfADQDNADA0ADQAdAAAIACQANACACAQIhZgGgACAh7QgLgKAAgNQAAgHAMgXQAgAgAzgBQgIAXgEAFQgIAHgbAAQgXAAgOgNg");
	this.shape_4.setTransform(-21.3,30.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#758A51").s().p("AhKBJQAAgFAWgvQAfhDAWg9IBKAVQggBZgYBMQgNAdgYAAQg4AAAAgjg");
	this.shape_5.setTransform(0.5,2.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1F26").s().p("AAECSQhJgVivg8QADgLAFgDQAHgCADgIQBYAsCPAkQBxAcAHASIAAAFQg+gJg7gRgACliKIAXggQAhAcAKAGIAOAHQgCAMgJAFQgGAFgIAAQgZAAgegfg");
	this.shape_6.setTransform(-35.3,16.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#373D48").s().p("ABfB/QgrgLkIhVQAGgaAfgPQAagOAbAAQAoAAA8AcQBWAtALAEIgCgDIgOgQIgSgRQAcghBQhuQADAFAbAPQAbAPAHAAQgkA3gcArQg2BbAAAdg");
	this.shape_7.setTransform(-34.7,17.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#758A51").s().p("AhMBaIgTgSIBaiFQAZgoAGgHQAOALA4AcQhTBmgxBMQghgOgHgFg");
	this.shape_8.setTransform(-5.7,-9.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373D48").s().p("Ah3BtQBggsAWgXQAVAmAKAUQhAAVgaAOIgRALgABdBEQALg3gigzIgYgjQgMgRAAgHIADgYQAGgYAOAAQAaAAARASQAUAUAAAkIAAAEIgBAAIgFA5QgHA/gGAggABCAVIgHgNQgRgYgwg6Qgwg3gMgIIgJgFQA2AQAtA7QAqA0AAAfIAAAGIAAgBg");
	this.shape_9.setTransform(-15.6,-1.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1D1F26").s().p("AAxC8IhHg7IAygRQAKgDAsgWIAYA0QANAdAAATQAAAZgMAAQgaAAgggYgAAShCQhNhfgwgBQAvgCAIAEQAPAIA3BCQA0A8AlBSQAcBAABAUQgjhthThhgAiYgCQgRgngLgoQgBgfALgQQAKgPASAAQAwAAAvAmQAvAmAdBAQhmBMgNAAQghAAghhLgACriKQgEgPgUgQQgSgPgMAAIgSABIAGgPQAYgXAaASQAaARAAAjQABAGgDAGIgFALg");
	this.shape_10.setTransform(-20.2,1.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#758A51").s().p("AAnB2QAAgHgJgMIgeg7QgYgtAAgGIAGgWQAFgSAAgGQAAgOgFgCIgPAYQgHgOgHgKQgKgNgOgHIgUgJQAHgFATgGQATgGAIAAQAgAEAXAcQAZAdAbBdIAXBNQgHAGgHACIgOABQgXAAgCgDg");
	this.shape_11.setTransform(2.1,-10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},12).to({state:[]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},8).wait(1));

	// leg
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgNC0QgGgNgJgzQgKg2gRhoQgViFAAgYQAAgGAFgCIALgCIAAgBIB/AAIAACVQAABsAKB6QAAAXgMALQgLAIgXABQgfAAgNggg");
	this.shape_12.setTransform(9.4,-2.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AA9ElQhJgIhxAAIiGAJQgHAAgFgHQgEgGAAgFQAAg3ArguQAxg1BNAAIA0ABIDKmlQAZAHACACQAAgBAzAOIAyAOQh+FhgxCXQAQgHAPAMQAQAMAAAaQAAAHgLAEQgJADgGAAQgXgDgmgDg");
	this.shape_13.setTransform(-16.8,20.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhmD1QgogOiFgkQg9gRgBgSQABgEANgRQAOgVAKgFQAOgHAQgUQAQgTALgIQALgIAQgBQAQgCAQAAQAVAAA2AYQA3AYAEAAIAHAAIgBAAQAZgnAmg1IBIhfQCHi2AHgLQAZASBOAnQhYCQh8C0QhKBvgBAPQAAAFANAFQALAFAAAXIgBAWIgFACIgLAAQgnAAh4gog");
	this.shape_14.setTransform(-28.1,7.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AASDyQgmgRgzgpQhthYgtg6Qgug7AAg5QAAgxAwgdQAtgcBCAAQAQAAAnAPQAtARAQAVQAmh4BQAAQBEAAAwCCQAYBBAKBDQAAAUgyAAQgxAAgmh4QgPA6gOCyQgEA2gJAWQgLAdgaAAQgPAAgXgKg");
	this.shape_15.setTransform(-14.3,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12}]}).to({state:[{t:this.shape_13}]},1).to({state:[]},1).to({state:[{t:this.shape_14}]},12).to({state:[]},1).to({state:[{t:this.shape_15}]},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,-23.3,15.6,42.4);


(lib.CUP_FRONT_leg_r = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#758A51").s().p("AgVgYQBYhIAUgFQAUgEAJAJIAKAQQgTAGgKAMIgRAcQggAwhNAvQgIAIgMAGQgXAMgWgCIgUAAIgLASQAPg5BZhGg");
	this.shape.setTransform(3.9,-22.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373D48").s().p("Ag8BpIAGgrQABgPANgqIB8AiQAVAFAJgBQgKA4gOAXQgIAQgJAAQhngYgegJgAhqBMQgHggAAg8QAAhLARgbQAPgWAgADQgCAMgbA4QgZAyAAARIABAXQANgKANgnIATg3QgIAQgPBeQgOBXAAAKIgMgwg");
	this.shape_1.setTransform(23.8,-10.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1F26").s().p("Ag0C4QgXgUAAgeQAAgKACgMQATAGA1ANQA3ANANgBQADAVgdATQgbATgXAAQgWAAgVgSgAAPgFQgdgNAAgTQAAgdAZg0QAcg1ARAAQAlAAASBPQASBKgSAkQhEgNgcgKgAggh8QAlhNApACIARgCQgdAXgXAZQgqAxgmBoQADg4AihEgAhfinQAYgaAIgDIADANQgGAWgPAJIgmAQQACgHAWgYg");
	this.shape_2.setTransform(24.3,-9.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#373D48").s().p("ABfB/QgrgLkIhVQAkgmAFgEQARgLAsABQAdAAA6AYQAXALBLAnIgCgDIgOgQIgSgRQAcghBQhuQADAFAbAPQAbAPAHAAQgkA3gcArQg2BbAAAdg");
	this.shape_3.setTransform(-34.7,17.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1F26").s().p("AAECSQhJgVivg8QADgLAFgDQAHgCADgIQAuAcCXAqQCJAlARATIAAAFQg+gJg7gRgACliKIAXggQAhAcAKAGIAOAHQgCAMgJAFQgGAFgIAAQgZAAgegfg");
	this.shape_4.setTransform(-35.3,16.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#758A51").s().p("AhdBIIBZh6QAWgjAMgXIBAAsIglAyIgtBGQghA1gMAAQgtgPgPgWg");
	this.shape_5.setTransform(-6,-9.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#373D48").s().p("AjEB8IgIgBQgGgaAmggQAogjAzAAQAdAAAsAGIAnAFIAAAAQgNgPgGgFQAUgIBeiIQATATAUAKQAZAMAQgIQhpCdAAABQAAARAHAJQAIAKAAAFQhVAEjGALg");
	this.shape_6.setTransform(-47.2,14.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1F26").s().p("AjqClIABgJQAMgQBkABQBDACBOgIQBUgHAYAAQAIAAADAFQADAJADAEIgGABIgwgBQgngBgnADQh0AHhBAJIg0AFQgJABgJgFgACahzQgOgKAAgRQAAgBAGgJQAGgIAHgJQAGAFAeANQAhAOAHAAQgHATgLAGQgJAGgUgBQgWABgMgJg");
	this.shape_7.setTransform(-47,13.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#758A51").s().p("AhgBNICEi3IA9AaQhUCIgZAkQgLAPgQAAQgXAAgigeg");
	this.shape_8.setTransform(-20,-12.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},11).to({state:[]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},2).to({state:[]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},5).wait(1));

	// layer 1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AA5COQgKgLgnAAQgLAAgZgGQgYgGAAgCIAAAAIAAAAQgDAJgKAAQgUAAgzg3Qg8hAAAg5QAAgZBEgaQBTggC8gkQAlAeARATQgiAUhnA1QhjAygLAEQA7AeAlAmQAmAogDAkIgCAPQgCAAgHAEQgIgVgFgHg");
	this.shape_9.setTransform(-22.6,0.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AACACIgCgBQAAgBgBAAQAAAAAAAAQAAAAAAAAQgBAAAAgBIAEADIAAAAg");
	this.shape_10.setTransform(-10.1,-12.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgFCQQgkhjACiOQglAkgoAYQgyAdgmAAQgZAAgHgKIABAAIgGgFIADgCQgDgdBThOQAvgsAtgjQAtgjAJAJQAegPAdAhQAdAigDAhQAGgFAWgYQAagVAeAAQAuAAAWA6QARAuAABLQAABng2BUQg0BPg2AAQg2AAghhjg");
	this.shape_11.setTransform(13.8,-10.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhjD2QgpgOiFgkQg9gRAAgSQAAgZA7goQA8gpAoAAQAtAAApAVIApAVQAKAABAhTQBahwB5i7QA5ApApAaIjUE7QhGBpAAAWQAAADAMAOQALAPAAAGQAAAKgCAMQgIACgGAAQgoAAh3gog");
	this.shape_12.setTransform(-28.3,7.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ak+EaQgEgFAAgGQAAgkAjg0QAzhOBaAAIAcAEIAcADQAIABB5inQCRjGAbgiIBwAvQh6DFiODZQAAAOAWAZQAVAZAAAGQAAAMgZADQgXADiBACQhlADhFAKIg9AJQgHAAgFgFg");
	this.shape_13.setTransform(-40.1,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},1).to({state:[{t:this.shape_9}]},4).to({state:[]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},5).to({state:[]},1).to({state:[{t:this.shape_12}]},2).to({state:[]},1).to({state:[{t:this.shape_13}]},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


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
	this.shape.graphics.f("#92B9BB").s().p("AkOIqQBUAJBVggQBVggBVhWQA5g4AziVQBCjBACjmQABi1hShfQg8hEhEgBIgcABQApgHANAAQBeABA4BZQA8BegCCjQgDGDiIDQQh9C/jMAAQgGAAhCgNg");
	this.shape.setTransform(2.9,0.5);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B3E4E6").s().p("AkFIgQgdgWAAgaQAAgQAOgNQANgMATAAIBBAPQCyAABai7QBYizAAlDQAAhpgSgrQgfhIhcAAQgpAAg1AYQg1AZgVAAQgEAAgEgDIAAg6QAGgLAKgKQAkgoBSghQAcgMASgFQAagHAXAAQBFAABWB3QAZAjAJAjQANAzAABoQAAGEiHDUQh7DDjIAAQg8AAgigag");
	this.shape_1.setTransform(0.2,0.3);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AkAI/Qg7geAAhBQAAgWASgNQARgMAbAAIAhAFQAcAFAFAAQClAABRicQBeivAAmCQAAg7gXgjQgdgrhAAAQgrAAhGAWQgjALgaALIgCAAIAAh2IASgRQAhgaBDgmQAZgNAXgHQAYgGA1gDQA1gDBGBQQBZBkAAC3QAAG5ibDZQh9CtjAAAQg6AAgqgVg");
	this.shape_2.setTransform(0.1,0.2);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-31.5,-59.3,63.4,119.3);


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
	this.shape_3.graphics.f("#FFFFFF").s().p("AADCyIgEAAQhUAAgzguQgmgigJgxQgCgOAAgPIAAgDQAAg5Apg8IAHgLIACgBIAKgNIADgDIADgDIACgCIAHgGIAEgEIABgBIADgCIACgCIADgBIAJgGIAAgBIAEgCQAhgSAogBIABAAIAFAAQBFAAAuAaIARALQAJAHAIAIQAJAKAHAKIACAEIABABIAHANQALAXAEAcQABANAAANQAAAVgEAVQgJAygfAlQggAlgyAOQgMADglAEIAAABIgBAAIgEAAIgGAAIADAAg");
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
	this.shape_1.graphics.f("#587D74").s().p("AikAPQgFgTgEgdQAVgQAigEQATgCBWAAQCyAAAIAbQADAIgMAYQgMAdADAUQhjgNgSAAQgUAAigAQQgNAAgJgpg");
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
	this.shape.graphics.f("#455E5A").s().p("AAKAxQgGAAgGgCQgLgDgOAAQALgwAAgPQAAgLgJgRQA3gGgCAmQgBAlgGAOQgFANgGAAIAAAAg");
	this.shape.setTransform(11.6,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#455E5A").s().p("AgJAyIgQgHIAJg9QAAgGgJgbIAAgEIAhAVQASARAAAsQAAAdgOAAQgGAAgPgGg");
	this.shape_1.setTransform(11.6,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#587D74").s().p("AAYAuQhlgMg9gDIgEg+QAAgKAEgHQAFgIADAAQDQAAAtAVQASAJACAQQABAKgCAVQAAAUgHAJQgFAHgHAAIhjgLg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#587D74").s().p("ABUAuQgugQgZgFQgWgFgSAAQgSABgSAFQgSAEg4AEQgHgrAFgWQAFgWATgDQATgDBZAAQBWAAAcAPQAjASAAA5QAAAdgOAAQgGAAgmgOg");
	this.shape_3.setTransform(0,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).wait(1));

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AA/BGQg0gKg8gDQhOgCgWgPQgNgJAAgbQAAgoADgMQAKgfAlAAQCrAAA7AYQAtASAAAtQAAAYgHAUQgLAcgVAAQgMAAgxgKg");
	this.shape_4.setTransform(0.1,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ABFBDQhHgUgGAAIg5AGQg0AGgUAAQgNAAgFgOQgFgMAAgZQAAg3ANgPQAMgPA4gFQA4gGA/AHQBAAIAVAPQAWAPAHAeQAHAbAAARQAAAHgFARQgHAUgJALIhHgTg");
	this.shape_5.setTransform(-0.1,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.2,-7.8,32.8,16.1);


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
	this.shape_2.graphics.f("#596743").s().p("AHoE8IABgCIgBgRIAWisQAygVAwgXIgeDGQgGAIgaAOQgfAQgVAAQgGAAAAgBgAkfgcQgXgYgTgeIgJgOQgMgIgggeQgagMgOgJQgagPALgcQBLAZBCBKQA3A9ADAcQgEADAAABIgSABQgHAAgUgXgAIiirQgBgSABgQQACgeAQgLQBVgzAagTQgRBvgZCKQgXAPhQAbIAQiSgAqXg9QgEgDgBAAQgHgIABgKQAAgIBDg8QBHg+AVAAIA7AHIgHAPQgDgFAAgEQgEAHgqAbQgnAagMAFQgrAWgUAeQgPAYgNAAQgFAAgEgDg");
	this.shape_2.setTransform(22.5,51.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#414B32").s().p("AhVAJICqhVQADAvgTAOQgTAOh2BNQAEgwgVgTg");
	this.shape_3.setTransform(86.2,15.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#98ADAF").s().p("AAJAaIhWgeQAIgHAEgJQAFgLAFgYQCFA2AAAJQAAAXgEALIgIAOQgPgNgqgRg");
	this.shape_4.setTransform(97.9,-72.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#83A4A8").s().p("AM0CgIA6nlQjDg3jcgoQkKgxirABQgfBbgkBOQhDCYglAPQAJgFAEgHQgXgGiVhCQAZgdBwimQA5hTAsAAQAagEA+gCQBAgDB6ANQB6AMCbAbQB/AVCZAqICUAtQAqAOBRAgIACgNIgBAHQAAALgWB1QgbCWgjDwQgRB5gTA8QgLAigIAHQgTAPg1AbQgYALghAMQARgvAikngAwNkTQEXhsBMgfQBvgsAUAAQADAAASAQQi9BLiBA3QhfAphWAgg");
	this.shape_5.setTransform(0.7,-35.1);

	// Layer 3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AAAAAIABAAIgBABg");
	this.shape_6.setTransform(-11.2,63.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#95AEB0").s().p("ABBBZQhBgFgvgIQg2gJgGgJQgOgYgBgrQgChBgBgIQgDgJAkAFQAsAHANABIBcAIQAuAFAPAAQAAArAJBvgAhiAqQAOAABEAMQBCAMAWAAQARAAAFgIQAFgHAAgSQAFg6gHgGQgTgQg6gHQgggEhbgHIAFBrgABjgrIACgCIgDAAgAgngHIAEgDQAQAEArAGIAvAEQAHgBACAKIACAJQhtgOgMgPg");
	this.shape_7.setTransform(-21.1,67.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D1F26").s().p("ACcAyQABgFAYgBQBWgFBbgHIABBoQicAHgbAEQABACgOABQAAgggHhEgAhDCVIAAhgICbAAIAABggAjDCLIgwgJQg4gLgvABQAAgYgHgyIAAAAQBUALAtAIQAbAFAJADQAHADAGAKQgJACgwgIQg2gJgLAAQgKAAgEAEIgBALQABAUAqAMQAiALAoAAIASgBIAAALgAnHBwQgbgKgIgHQgKhSgEgNQArANAgAEIAaABIAJBqQghgEgcgIgAG3BwIADgsQACglACgOQAEgSAvgKQBbgWAegLQgKBKAAASQAAAEADAJQACAIAAABQgPAEihApgAqIAgQgNgIgCgPQAAgQgBgKIgKg4QBpApAOAYQAJAPgKAwQAAAKACAKQg1gTgpgYgAKtgdQAEgaAIgJQAQgQAkgQIA7gaIgVB7IhyAwIAMhOgArxgWQgTgGgQgpQgKgcgJgzIANAJQAmAcAEAGQADAGgEAVIALA8g");
	this.shape_8.setTransform(4.8,58.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#526139").s().p("Aj/DZIAAgMQAAgDAKAAQAOAAAJAWQgJAGgJABQgMAAgDgOgAgpDDQgJg1g8g3QgdgbhSg6QG/gCDEgrQDEgrETiQQAFAggYAVIh9BfQheBGknBpQkZBnhmAAIgSgBgAosBsQgNgHgXgUQhWg0hHg1QiLhsgFhOQBUA7CHA3QCGA4ChAYQgiARg/A9QgVAVgWAYQgHAIgKAAQgJAAgLgHgAkABWIABgNQAAgCAKAAQANAAAJAWQgIAHgJgBQgNAAgDgNg");
	this.shape_9.setTransform(5.4,31.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#758A51").s().p("AjYFbQh4gVjZhAQihgugThRQgMg1gLgkIgKgeIgBgDQBOApAoATQBEAhBNAYQBlAfAGAEQAIADABAGIAEAQIgCAEQAGAMAcAQQAbARAbAHQAyAPCNAIQAwAAAHgNQAEgJgHg8QAgACA4ACIA8ACQC9AADMg2QCZgoCYhDIgdDGQhhA1jAAnQjWAsjWAAQiRAAh0gTgABsCsIAAhlIArAAIAABlgAF+CNIAAhuIAzAAIAABugAoJBqIgDgeQgCgagNgyQAXAIAGAGQAHAGAEBZgAJ2AyIgBg8QgCgbA4gGIgBAFQgIAjAAAhQAAAjgKAEIglASQAEgLgBgagAhBAwIgDgJQgDgFgLgFQgHgCg6gCQhOgDgygFIgHhnQAAgfAciCQA9AYA0AuQAuAoASAkQANAYALAaQAGAOAKAAQCfAADehOQD1hWEOikIgeCsIgNBNQgJAGgRAHQgXAKg7AUQg3ATgGADQhLAnjOAhQjPAkifAAQg8AAgFgJgAkDgiIAGASQAJAQATAAQAQAAAHgEQAJgHAAgSQAAgmglAAQgdAAAAAhgAkDikQADAiAfAAQATAAAIgKQAEgGAAgOQAAgmglAAQgfAAADAigArQgRIgFgkQgDgWgGgMIA1AcQgCAtAIAvQglgKgIgogAlbAIIgDAAIAKgCQhCgFgpgDQgogGgxgRQgwgRgIgBQgHAAhagnQhagmgYgzQgXgzgLgxQgPhFgGgUIAIALQBHBWEVCfIAOgZQAPgaAQgMQAagVA+gzQAbgWAKAAIA8AHQgTATgHBBQgFAvAABZQAAAKAJAkIg1gEg");
	this.shape_10.setTransform(4.2,56.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#95BCBF").s().p("AA0BEQAaAaizjBQAvgNA+BAIBeBvIgWAng");
	this.shape_11.setTransform(-39.1,-79);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D2F0F0").s().p("AliCAQgOgPg1hHIgXgeIgWgWQg0g5gYAAQmqCMhGAsQAAgBAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIgOg3QC+hYChgzQB9gnAzAAQAXAABdBuQBeBsAEAAQACAAAGgGQAIgIAHgLQA0hUAigrIAug5QAXgiAzgMQAtgLBfAAQBbAAB0AQQA+AID2ApQDMApB/AlQAGABA0AVQAhANA+AiQAAAXgFALIgHAOQgPgNgrgTQgogQgogLQkFhGiygeQkBgskQAAQgvAAgVAUQgQAOgzBQQgtBGgjAvQgdAogGADIgpgmgAkLAAIgFAIQgEAGgCABg");
	this.shape_12.setTransform(0.2,-76.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B3E4E6").s().p("AmeIaQjKgvjgiVQgngagRhdQgfiwgOgvIghiAQghiBgfhcIFliNQBvgsAUAAQALgBBEBLQA0A5AtA2QAQAXAPARQAdAhATAMQA4AjAfALQAcAKAiAAQAFAAAKgMQgXgHiVhBQAYgeBximQA5hSAsAAQAbAEApADQBXAGBpABQCIACCbAbQB+AVCaAqICUAtQApANBRAhIADgOIgBAHQgBAMgVB1QgbCWgjDwQgSB5gSA8QgMAkgIAEIgTAOIg5AZQglARgMAIIh0AtQiDAnhAANQj2AykBAAQjsAAiJghg");
	this.shape_13.setTransform(0.6,-27.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6F8083").s().p("AgKBMIgFhOQgHg+AKgMIAGABIANACIADgBIABADIgBAAIABABIgBAJQAAAKAJBsQAAALgEAEQgEACgOACIgHAAg");
	this.shape_14.setTransform(-5.5,68.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#596743").s().p("AhPASQgagIgcgOQgbgRgGgLIABgFQA2AWBbAMQBHAIAzAAQAgAAALgFQANgIADgcIAAgDIACAAQAHA6gFAIQgGANgwABQiLgIgzgPg");
	this.shape_15.setTransform(-17.7,79.1);

	// Layer 4
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AlMOMQjcg0iVhiQg3i6hRlHIjuvBQAYgkDjhMQDkhMBXAAQA+AAAbAIQAFACABgCQA1A7ALAPQAbAlAtAkQAKgMAPgWQATgbAWgfIAsg6QARgXASgJQAdgPCTgJQCmACDAAfQCCAVDrA2QBbATBrArQBwAqAAASIh5LuQAIALAGATQAEARAAAPQAAAsgOATQgVAbgMAvIgaCYIgtD8QghCzgEAMQiJA0i2ArQi3AqjHAAQjuAAjTgwg");
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
	this.shape_2.graphics.f("#758A51").s().p("AABC2QgGgYgTggQBEgXAXgLQAQgIAEgKQgNACgJAAQgCAAhMhXQhThhgwgdQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAgBAAQAIgMgBgTQgBgUAzgTQAfAwAtAsIBKBJQBUBTAAA1QAAAegtAeQg+AigiAWQACgJgGgSg");
	this.shape_2.setTransform(-3.8,-8.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#758A51").s().p("Ag4BVQAUAGArgnIAIAQIALgBIACgJQgHgng+g9QhAg+AAgEQAAgOAPgUQAPgUAAgIQAAgKASgHQBDBEAYAcQBIBVAAAxQAAA3gfAgQglAjhVAWg");
	this.shape_3.setTransform(-5.2,-9.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3}]},1).wait(1));

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AigEOQgygcAAgoQAAhzBTglQAUgJBDgUQA+gTApgSQi2jNAAgBQAAgHALgJIALgJQAAgGATgSQAYgWAWAAQAMAABNBSQA8A9A+BHQAaAnAFATQAFAVgNAWQggA0hSApQhoA1gbAXQALAQALAUIAKASQAAAOgMAPQgRAUgdAAQgvAAgsgYg");
	this.shape_4.setTransform(-7.1,1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag3BNQAAgIATgQQAVgRADgIIg8g7Qg1g1AAgJIAqhSQAAgFASgMQASgLAGAAQAMAAAsA2QArAqAYAeQAsA5AAA2QAAA7gtAvQgwAxhMAOg");
	this.shape_5.setTransform(-4.3,-8.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.3,-29.4,42.4,60.2);


(lib.CUP_34_arm_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#758A51").s().p("AhzCWQAAgSAGgQQAFgQA7gMQA5gLANgUQABAQAKAAIAHgBIABgBIACgDQgCgUgigwQgog1hPhHQAageAJgNQAJgNAFAEQAEADgEgZQBNA6AvA7QA8BLAAA2QAAA7guApQg5AxhnAAIgpACQAHgeABgTg");
	this.shape.setTransform(-7,-9.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiGDRIAPhHQALgzADgGQAFgKAegDQAkgFAiglIiBiAIAJgLIAKgNQAxg6AFgJQAEgHgGgBQAAgHAGAAQAIAAAkAXQAiAWA3BLQA3BLgCBFQgBBGhHApQhHAqh7AAg");
	this.shape_1.setTransform(-5.6,-8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.CUP_34_arm_01copygg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B3E4E6").s().p("AiEB9QgkggAAgrQAAgvAxg4QAZgeAbgWQA5gpAngDQAkgDAJAZQAJAYhcA4QheA1gDAYQgDAYANAYQASAhAhAAQAGAAADgBIAEgFQghgXgSgXQgKgQAAgHQAAgGABgDIADgGIAEgBIAJgBQAQAAAUAMQAhARAAAhQgBAPgiAbQgjAbgNAAQgPAAgbgZgAgaAVQgSgVgfgCQBTgaArgiQAkgcAAgeQAAgKgEgQIALACQATgBAMANQAHAKABAKQAAAVhEAkQhLApgQAWIABABQASgJBFgYQBEgeAXgxQgBgHAFACQADACAFAHIADAEQABACAAAGQAAAVhXA4QhRAzgGAAQgFAAgQgUg");
	this.shape.setTransform(9.7,-86.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#758A51").s().p("AgXCtQgggkgLgaQgNgdAGgjQAIgyBYisIgCANQAJBGAuAlQgSATgUAbQgmA0gPAxIAagjIAPAwIgaA2QgDARgKAAQgFAAgFgDg");
	this.shape_1.setTransform(-16.4,-56.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#526139").s().p("AgdBOQgZgVAAgtQAAgWAIgXQAIgWAVglQAKA+AWAjQATAdAVAHIglAtQgHAHgHAAQgQAAgRgPg");
	this.shape_2.setTransform(-7.1,-73.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1F26").s().p("Ag8AMQABgUADgGQAFgPASgYIBeAwQgVAJgGALIgPAng");
	this.shape_3.setTransform(36,-8.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B3E4E6").s().p("AAQBvQgYgJhFgiQgogUgjghQgggdAJAAIANgXQAMgYAJgVIAGgPIAJgOQALgOAGAAQAKAAAeAIQAfAIAXAAIAegFIAggEQAbAAAOALQAKAIAAAKQAAAIgNAGQgKAEgGAAQgKAAh2ggIgFADQASANAtAOIBOAYQBjAeAAAmQAAAlhcgkQh7gqADgKIgEAIQgDAIAAAGQAAABBOAnQBbAmAzgPIABAKQAAAVgOAFQgHACgdAAQg4AAgYgLIhMgmQgWgKgIgGIgGAIQAjAdAkATQAnASBBASQgQAGAAABIgCABQgnAAgmgPg");
	this.shape_4.setTransform(111.6,30.2);

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
	this.shape_8.graphics.f("#B3E4E6").s().p("AACA+QgygshLgYIgDAKIBNAwIgpALQgsAAgVgRQgPgMAAgVQAAgmAtgiQAvglA9ABQBzAAAvAzQAcAfgCAoIgBACIgDAHQgdhphfgCQgBgEAAAKQAPAGARAKQAjAUAMAPQAPARADAJQAGAQACAmQgfgCgKgCQgOgDgFgTQgLgqgogeQgqgjg8AAQgKAAgOAGIgHAFIgGAHQAIAAAMgDQAMgDAFAAQA8AAAqAwQAnApAAAsQAAASgOAAQgSABgpgjg");
	this.shape_8.setTransform(10.8,-75.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#758A51").s().p("AhUB1QgYgcAAgyQAAggAkhHQAkhJA9hSQANATgLgXQATAdAOAKQANAKAjANQgXAchGBeQg5BOAAAJQAAARAIACQAJgBAZAQQAYARACAIQACAIgGgNQAHBHgNAzQgxgigzhJg");
	this.shape_9.setTransform(-13.7,-46.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#526139").s().p("AglArQgogZAAgTQAAgTAOgTQALgPAMgHIAGgFQgBAcAhAgQAiAiAuADQgLATgKAIQgMAJgRAAQgcAAglgYg");
	this.shape_10.setTransform(-6.3,-70.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B3E4E6").s().p("AhTBzQgkgfABgSQAAgRAzhHQATgbATgkQAPgWAYAAQAKAAACADIAAAQQAAAUgOAXQgIAOgwBGIAAACIAGABQAKAAgFgBQArg4AIgKQAbgnAAgVQgBgZADgKQAHgaAVAAQAOAAAHAMQAFAIAAAGQAAAcguA+IgvA4QgBAFAFgDQAEgDAAAFQAAAJggAKQgkALABAaQAAAdArAAQARAAAMgHQAHgEAEgEQgaAvgeAAQgVAAgigggAghBgIgCgFQAFgQARgNQARgPAWAAQAHAAAJACQAJACAAABQADAYgSALIgEAIQgBgCABgDIgIADQgQAGggAAQgGAAgDgDgABGghQAog7ADgLIAEAGIACADIABAHQgBAPgUAaIhCBJIgJABQAHgFAng4g");
	this.shape_11.setTransform(3.8,-83.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},55).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[]},1).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},2).wait(1));

	// Layer 1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AkHEHQgIgXgCgTQAAhBArhiQAohZA/hcQBAhcA/g2QA/g3BCgDQBCgDAnAgQAoAfAAAZQAAAdgmAeQgaAVgkARQhAAdgIAIQgGAFAAAeQAAAVhSBGQh4BrgNAPQgzA8gtCAQghgVgPgsg");
	this.shape_12.setTransform(1.3,-71.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AGWFQQhFgahEguQgzgcgcgUQg0gmARgfIqdlaQhNgxgKgJQgdgaAAgrQAAgIACgJQAYAAAMgKQAGgFACgFQAKAAAIADIMdGMIAIgIQAJgIAGAAQASAAATAMIAcASIAKAKQALAIAHACQAHACAWACIAeABQAKAABUgIQAWAAAOATQAOASAAAXQAAAOgKAMQA7AZAQAZQAQAXAAA7QAAAMgJAMQgNARgZAJIgSAPQgRAOgKAAQg9AAhIgcgAD/DSQAEgBgDgJg");
	this.shape_13.setTransform(68.3,8.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Aj7DeQgggpgDgvQgDgwA/hpQA+hsAGgNQAFgNAVhBQAWgcATgPQAUgQAzgVQAwgVA9gCQA8gBBFAjQBFAjAABFQAAA5ghAEIgvACQgfABACAGQACAFgNALQgJAIgIAAQgJAAgagKIgVgMQgMgHgGAAQhbAAidDyQAPgCAOAQIALAQQAAAHgHAGIgHAFIAEB4QABAbgCADQhMg6gggqg");
	this.shape_14.setTransform(1.7,-54.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhtCmQg8gdAAghQAAgOASgdQASgeAXgUQALgJAOgQIAtg7IAvhCQAJgJAdgDQAEAAARgSQARgTAKgBQALAAAQAKQARALAKAPQABACAJACQAGACAGATQAEAOgMAWQgLATg8BQQAMARAAAGQAAAcgYAcQgbAagHAJQgbAogNAMQgQARgYAAQgYAAgxgYg");
	this.shape_15.setTransform(0.5,-81.3);

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
	this.shape_4.graphics.f("#526139").s().p("AgqA7QgMgYAAgXQAAgWAIgXQAIgWAVglQAKA+AWAjQATAdAVAHIggAkQgOAQgGAAQgcAAgRgig");
	this.shape_4.setTransform(-7.1,-73.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B3E4E6").s().p("AiQBqQgYgnAAgPQAAgoAlguQAggqAxgiQAvghAggHQAkgGAFAdQAFAdhZA2QhaA1gDAbQgCAbAUAZQAVAYAXAAQAHAAACgBIAEgEQghgXgRgYQgLgPAAgHQAAgGACgEIABgFQAIgCAGAAQAZAAAWATQAWAUAAAXQAAAHgHALQgJANgOAHQgXAMgPAMQgJAHgGAAQgaAAgcgugAgUAeQgQgRgngOQBUgaAqghQAkgdAAgeQAAgKgDgPIAKABQAUgBALAOQAIAKgDAVQgCAUhJAmQhGAngLALIABABQASgJBFgXQBEgfAXgxQAAgHAEADQAEACAEAGIADAFQABABgBALQAAAKhTA4QhTA2gEACIgCAAQgGAAgKgLg");
	this.shape_5.setTransform(9.7,-86.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#758A51").s().p("ABaDfQAdgugWgmIBCAaQAJAPATAtIATAugAiWBUQgvgpgKgsQgJgtAYhCQAVg5A6hlIgCANQAIBGAuAlQgRASgTAbQgnA1gRAzIAcgjQgGAlBRBBQAnAfANAIQgKA2gHANQhcgygrgmg");
	this.shape_6.setTransform(-2.6,-47.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1F26").s().p("AgpAWQAFgKAGgXQAHgagBgHIgEgLQA+AYAHAdQAEANgRAtg");
	this.shape_7.setTransform(2,-31.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B3E4E6").s().p("AApBoQgWgDgwgbQhQgrgagUQgMgJAAgFQAAgRAZgqQAZgqALAAIAkAGQAiAFAQgBQA0gEAOADQASAEAAAVQAAAQgYAAQgLAAgZgGIhGgUIATAHQAmAPBCAWQAvAPAGAFQAUAQgDAOQgCAQgYAAQgIAAgigMQgwgQg6gaIgCAPIACACQCCA1AqAAIACACIABAGQAAAOgOAEQgKAEgcAAQgfAAgkgSQgWgLgtggIgHAKQAGALAoATQAqAUA3ASIgHADQgVAGgKAAQgEADgHAAIgIgBg");
	this.shape_8.setTransform(108.3,29.1);

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
	this.shape_17.graphics.f("#758A51").s().p("AA9DoQAPgbAFgdQAFgegHgbIBxAiQgHgCgCgCIACAAQARAAAJAYIAGAbQAeBPAIAXQhMgYh2gugAjgA8QgegrAAg+QAAg/CBjAQAKAPAOAJQALAIAZAJQh7CZAABGIABAOIABAJQgBABAKAAIAFgDQACAAAQAMIASANIAKAIQAVAPAwAbQAaAOAAAHQABAUgMAiQgJAfgIAKQh4gzgthBg");
	this.shape_17.setTransform(0.9,-38);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B3E4E6").s().p("AgiAXQgngYgIAAQgHAAgDABQgBAAgBAFQALAKAVAMIAaANIgIADQgTAGgLAAQgcAAgMgJQgLgIAAgRQAAgpAwgXQAhgQAbAAQAvAAApAQQA1ATAAAhIgBAPIgCAGIgIgTQgOggghgOQgUgIgTABQBPAeABA9IggACQgGAAgZgtQgigugvAAQgFABgPAFQgQAEgFAEIABAAQAbgPAxAbQA3AbAAAwQAAAHgDAEIgUAAQgTgKgvghg");
	this.shape_18.setTransform(4.3,-74.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1D1F26").s().p("Ag4gSQACggAOgcQANgZAKAAQAHAAAXALQAbANARACIgjBJQgKAUAAALQAAARADASQAFAVAGAJIAFAMQheghAHhZg");
	this.shape_19.setTransform(19.7,-11.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B3E4E6").s().p("AARGOQgMgIgGgJIgLgMQg/gyhHiJQhCiAAAgxQAAgMAIgPQAIgOAAgVQAAgUAMgIQAMgJAAgKQAAgyhKiWIAwAaIAHgJQAEgEAAgDQgBgLgTgiQgVgjgXgfQDYA5CKChQCVCqAADaQAABshJA2Qg6ArhdAAQgCAAgJgIg");
	this.shape_20.setTransform(80.4,-22.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#758A51").s().p("AgtBsQh3hEAAhSQAAgJARgnQATgsAOgMQB8AQAKAAIAwgCIBAgGIACACQgFAQAAAKQAABCBFB7QA9BvAhAbIAMAHQjngwh2hEgAkchtQgTgrAAgQQAAgQAVgnIAdAVIAdATQgSAhgFAMQgNAeAAAXQAAAGAGASIAFAPQgQgUgTgrg");
	this.shape_21.setTransform(38.7,-3.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#526139").s().p("AAJCvQgMgOgtg7QgngzgdhQQgchOAAgvQAAgKAFgHQALgLAegNQAXAsAKA+QAcBNCACbQALACANAFIAKAMIAUAbQggAFgQAAQgRAAgpg3QgzhIhEiFIgGgNQADAmA7BiQA9BrAwAfIglABQgSAAgVgVg");
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
	this.shape_28.graphics.f("#758A51").s().p("ACTECQgjgNhNgiQAJgNAJgoQAAgMgEgTQgEgVgEgDQCEAwA3AEIAACCQg1gQgcgLgAgdC1Qhsg5gsguQgugyAAg+QAAgYASg0QAYhJAyhlIAFAyQBAgPAHgBIAGABQAAAJgHAPIgDAEQAFABAIAEQg8BTgXA0QgRAlgGArQAAAAAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAIAFAAQAHAAADgOQAPAOA0AhQAqAbACALIAGAjQAFAXAAANQgBAMgHAcg");
	this.shape_28.setTransform(1.4,-42.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},53).to({state:[]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).wait(1));

	// Layer 1
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AigFtQgOgDgFgDQgFgEgFgWQgFgUABgFQgbgGgDgEQgCgDAAg5QAAgDgKgTIgKgUIAEgFIAZgcQAOgQAAgCQgBgDAAgJQAAgMAUgcIAjgyQAHgMARgqQAUg1AMgZQAWg3Aog9QBOh3BmgsQAmA2A6BJQhjA1hPBzQhJBrAABNIAKASQALAUAAANIgKA4QgBAFgRAgIAHATQAFAVAAAPQAAApgUAAQgFAAgtgJQgJgEgKAAQgLAAgUAQIgTAPQgIAAgNgEg");
	this.shape_29.setTransform(7.8,18.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("ACeG0Qikg+iFhbQiGhbAAhMQACg3AlhIIBSimQAshkBdhVQBShLAsAAIBHAGQAJACAhAXQAYAMAKAKQAQAQAAAZQgBAYg8ApQg8AoghAMQghAMAJAIQAKAigUARQgVAQhrBkQhuBiACAkQACAlA0AkQAzAkBBAfQBDAfABgEQAAgEAFAOQADAJAcA7QAaA1AAAHIARAmg");
	this.shape_30.setTransform(1.3,-60.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AF2E/IhLgoQgxAAgSgRQgVgSgNgQQgKgMAAgCQAAgGADgMIACgKIpjlCQh+hOgUgQQgdgXAAghQAAgXAVgSIAogjQAjArALAVIgNgCIL8F7QAPgPAIAAQATAAAuAkQAvAlAFAAQAuAAAxgGQAbABAAAhQAAAHgEAKQgDAKgDAEQAVANAhAJQAXAMAAAuQAAAigkAcQghAYgdAAIgBABQgdgBhcgrg");
	this.shape_31.setTransform(64.9,4.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AiaDIQhDglgBhjQAAg8Ang9QAYgoAcgaQAFgFAggtQAjgrAYgDQBhgPBUB0QBMBpABBkQgBAZgTAaQgTAYgaALQgtAVg/APQg3ANghAAQhLAAgpgWg");
	this.shape_32.setTransform(-0.4,-18.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgEEcQkNh/AAh/QAAgpAMgYQAYgyAHgTQACgIBGh2QATgfACgKQABgHgCgJQAAgcArgeQA5gmBhgEQA1AGAkAYQAlAYAAAtQAAAWgMAKQgLAJgWADQgWAEgQAJQgQAJgGACQgHACgQgIQgPgHgJgFQgFAAgcAaQgMAAgGABQgJACgfAmQg0BCgOAjQgxBgARgHQBeBDA+AfQA+AfAgAMQAfAMBQAbQgCACAEAJIAaBEQAMAjAdBLQiRgpiFg/g");
	this.shape_33.setTransform(0.1,-43.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgEGDQh5glhzg+Qh1g/hHhCQhMhHAAg5QAAgnATgbQAKgPAPgQQA5A1A8ARQBHAXCKAAQBTAAAkgVQAggSAAgtQAAgUgFgYQAHgDALAAIAOACQAHgggjhIIg5h3QAEgEAIgBIA6AVQgqhBgYguQAIgEAAgCIAWAAQAjABBMAkQBdAsBQBGQDkDFAAEqQAABIg4A4QhOBPibAAQheAAh+gog");
	this.shape_34.setTransform(56.9,-21.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("ADhEhQgNgFgDADQgDAEgvgPQgvgQAAgCIgBggQlnhWirjMQhVhngOhdQAAgzALgQQAGgIAQAAQAHAAADADIAcAeQA7BpDRCPQDXCTB3AAQAFAAAAgMQgBgNAfAAIACABQAHAEApAKQAzANADAOIgBAIQAAADAFAAQA1AAAQgIQAQgIAPAAQAQAAAMAKQAPANAAAZQAAAGgBAEIgFAGQBNAIAAAzQAAAFADARQAEAQAAAFQguBBg6AAQgPAAivgvg");
	this.shape_35.setTransform(62,9.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AhFCoQiphpAAheQAAgtAnhpQAphxAagBQAIADAAgCIAEAyQBBgPAGgBIAGABQABACgGAMIgHATIgCABQATgCAXgDIAEAAIgoA0IgaAqQguBWgBAKQAAAWCdBHQCWBGA3ALIAAChQihgkiShbg");
	this.shape_36.setTransform(0.4,-41.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_29}]},53).to({state:[]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.CUP_23_MOUTH_COMP02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
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
	this.shape_4.graphics.f("#A83C47").s().p("AAhC0QgmAAglgXQgcgRgQgSQAoARBwgbQBwgaAfgeIgEAKQgmBIgvAVQguAVgnAAIgCAAgAjQhJQA0g3A7gaQA5gZBDAAQAWAAA6AOQAyANAMAGQiJAsguAMQhGASheAAg");
	this.shape_4.setTransform(33,18.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Aj7BgQgEg0gDgBQA+AJDEg0QDEg1AygqQADAUAKAYQACAOgYAFIhiArQhYAogyALQjKAigwAAIgCAAgAkCArIAAAAIAAAAg");
	this.shape_5.setTransform(42,6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#862D59").s().p("AgZBMQADgJAAgIQAAgUgJgfQgHgagWg8IBUgKQAQA/ALA4QAIArACADIhcAMQADgDADgKg");
	this.shape_6.setTransform(32,25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#411415").s().p("AiFCMQACgNgLhEQgKg7gGgUQBFAGD4iFQgJBRgIAfQgMAqgaAcQgsAtjFBEg");
	this.shape_7.setTransform(52.2,18);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A83C47").s().p("AgODIQgdgMgFgTIgCgDQAyAJBugiQBughAPgbQgWAxg7AoQg7AogqABIgCAAQgoAAgZgLgAjqhsQAqg9BSgZQAzgQA7AAIAlADQAvAGAzAVIi6A1QgmAKg9AGQgsAEgTAAg");
	this.shape_8.setTransform(35.8,19.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AkFAyQD4gHEEiOQAGAFAFARQAEARAAAMQAAAJhNAkQhIAggTAGQhXAcg2ANQhiAXhvABQgDgigCgQg");
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
	this.shape_13.graphics.f("#FFFFFF").s().p("AjwBdQgBgTgGgkIA8gDQAogEBsgYQAmgHCTg3QAmgOAzgXQAGAAACABIACACQADAOAAAKQAAAVgHAHIgIAEQgvAhhPAeQibA/ibAAg");
	this.shape_13.setTransform(40.3,5.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#862D59").s().p("AgCAKQgZh0gLgVIAkgEQACAMAFBoQAJBoAQAaIAJARQgVgRgUhpg");
	this.shape_14.setTransform(29.9,29.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#411415").s().p("AiKB3Qgei1gDgOQDkgjBzhUQgVDKhQBmQhEBXhiAAQgdAAgOhNg");
	this.shape_15.setTransform(47.8,23.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#A83C47").s().p("AAdD+QghgNgPgaIgIgQQAQATAyALQA/AABCgsQArgdASgZQAAAggyAyQgyAygmAAQgmAAgYgJgAjkicQAqguAdgSQBEgqBgAAIAnADQAwAGAyAVQh0AlgyAPQhaAahdAAg");
	this.shape_16.setTransform(34.1,22.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhVAPQALgPAagNQAXgLAWAAQAUAAAWAEQAXAFAbAiQgvgEgnACIhbAIg");
	this.shape_17.setTransform(22.4,7.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#411415").s().p("AgZByQgFgHgIgPQgOgxgfhLQgdhMgCgIQARgPBiAAQA9AAARAPQAZAVALBUQgECPhgAAQgYAAgQgSg");
	this.shape_18.setTransform(24.6,24.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A83C47").s().p("AAkDaQgZgEgSgQQgWgTgJgmIAHAIQASAMAuAJQASAAAZgIQAagKAOgNIAHgLQgFAdgdAhQgZAdgWAAIgGgBgAh1iRQANgmAIgLQARgYAfAAQAQAAAYANIAmAVIgFgBQhagbg5BQg");
	this.shape_19.setTransform(23.9,22.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#411415").s().p("AgsBCQAAgHAGgSIAFgSIgPgdQgPgfAAgHQAAgRAMgOQAQgSAeAAQAeAAATAUQAUAVAAAoQAAAogPAcQgUAmgpAAQggAAAAgcg");
	this.shape_20.setTransform(21.4,15.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A83C47").s().p("AgWCGQgJgNAAgeQAOAHAhAIQADAAAigKIgUApQgHALgRAAQgVAAgKgOgAg0hJQgCgfALgUQAMgWAWAAQAZgBAJAJQAGAFAHAMIgHgCQgbgCgQAKQgTAMgUAfg");
	this.shape_21.setTransform(19.2,15.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#411415").s().p("Ag7ACIACAAQAbgOAbgWQAQgHAXARIAYARIgjAZQgZATgQAAQgYgHgTgcg");
	this.shape_22.setTransform(17.7,9.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A83C47").s().p("AgwAdIAEAIQANAMAGADQAGADAKAAQAcAAAPgUQAFgGABAAQADAAAGALQgGAZgRAPQgPAOgRAAQgrAAABhBgAgvgqQAAgQALgPQAPgUAZAAQASAAAFAJQARAZAGAGIgjgFQgMgCgVARQgZASgDACg");
	this.shape_23.setTransform(16.4,10.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AitCSQhXAAAAgNIAEg+IAyAAQA0AJB7ghQB5ggAjgQQAigRBCgeQACgHARAMQAPAJAKAKQAJAJAAAEQAAAPgpAkQg4Awg5AYQg6AYhLAFQhHAFhQAAIgNAAgAkHAjQgPgUABgyQANACANAAQBIAAB8gYQCjgfCLg5QAGAXAAATQAAAYgaANQg4AWg6AZQhlAphLAQQhEAPhRAAQglAAgOgSg");
	this.shape_24.setTransform(37.6,15);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#411415").s().p("AgUAgIAGgPQAFgNgBgPQABgPAFgPQAGgVAQgHQADAaABAhQAAAigPAug");
	this.shape_25.setTransform(65.6,4.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#A83C47").s().p("Ag2CzQgkgRgFgfQCSgCA7gIQAagEA6gRQgkAfgcAWQg3ApgrAAQg0AAgigPgAjBhaIABgBQAMgfA/gnQA/ggBeAAQA7AAArAOQARAGAZAOQg1AYhyAXQh0AXhKAAg");
	this.shape_26.setTransform(30,18.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AkECgQgCAAAAgJQAAgGAGgbQAFgcAAgMQDNgFCUg8QApgNAtgYQAigTAFAAQA0A0ACABQgxBEiHAsQh+AriHgBIhggEgAjnA5QgZABgUgDQgBgygDgnQB8AEDNhAQCbgvAngXQAGBIgCAJQgCAKhjAuQhjAshFAUQhIAUiJAAIAAAAg");
	this.shape_27.setTransform(38.3,13.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#411415").s().p("AAABpIgohAIASgZQACgFAAgZIgCgZQgCgTgEgLIAggSIAfgSQAGBDAAATQAAARgIAVQgEAOgbBJg");
	this.shape_28.setTransform(67.1,3.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#A83C47").s().p("AgiDCQgigTgVgcQAMAEB+gQQCAgQAagXQgLAlg3AkQg3AjgqAFIgQABQgfAAgbgQgAhqi1QBCgcBJAAIA8AMQA+ANAQAFQhMAskpAlQAWgzBKggg");
	this.shape_29.setTransform(31,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).to({state:[]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[]},1).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},8).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},1).wait(1));

	// Layer bajillion
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AhaBkQgugOgRgUIgRgaQgLgPgRgBQg7gDgagFQglgIgNgNIgCgEIAJgHQAOAFAhAHQAlAFAOAAQAEAAATgPQAagYATgNQBNg3BdAAQAfAAAlAIQAbAGAVAIQA4AVAEAAIAwgRQA1gUAngJIAKAEQgSAbhKAYQhPAagFAFQgLAKgVAjQgSAggXAOQg/AqhGAAQgVgDgXgHg");
	this.shape_30.setTransform(32.9,15.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgtC3QgigUgUglQgJgQgcACQgfACgHgIIgBgKIAAgCQACgBAGAAIAgADQAdAEAMABQgPhLgDgKQgoADgPgDQgWgGAKg6QgVAAg2gKQhAgNgPgNQABgFADgCQADgCAcAFQAdAEAUAFQAUAGAEgEIAegfQAZgcAqgZQA+gkBRAAQAMAABBAOQBMAQAWANIB9guQALAIAEAIQAEAJAAARQAABEgcAsQgpAugWAdIgVAqQgVAngUAXQgjAmg5ASQgnAMgfAAQgiAAgegSg");
	this.shape_31.setTransform(33.1,18.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgRDRQgPgSgHgGQgKgKgLgCQAEAAABgCQgVABgHgBQgNgCgDgGIACgBIAKAAIAjABIABg0QAAgogLgjQgMgkgRgDQgSgFgVABIgaACQgTgDgBhCQiGgIgagGQgbgFgGgHIgMgOIAHgBQBtASAsAAQADAAAQgSQAWgZAUgQQBKg8BpAAQAyAAA+ATQAgALAYAJQAJAABLggIBKghQALAAAJAPQARAeAABKQAABKgrBFQgWAmgaAcQgdA1gnAmQhGBDhSgBQg6AAgegig");
	this.shape_32.setTransform(32.6,18);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAyDxQgXgcgEAAIgdABQgJgBgMgLQAIgJAAgDIA7gDIAEg3QgNg8gDgKQglhYgCAAIiJAIQgNAAgFgSQgFgRACgeQhmAChBgKQhBgKgBgNQgBgNADgCIAEAAIBWANQA7AIAfABQgCgEAgggQAqgoAZgOQAvgVAWgGQAhgKAqAAIAhACQAaADANACQAUAEAnANQASAHAMAHQAGACAFAAIBMglQBOglANABQAPAAAMAfQARArAABRQAAAkgQA3QgOAwgJALQgXAdAAALIAAAcQgJApg8A3QhHBDhHAAQgwAAghgcgAALgVIgBgIQgBAAAAAAQAAABAAAAQAAAAAAABQAAABABABIABAEg");
	this.shape_33.setTransform(32.1,16.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AB0EoQgqAAgVgOQgWgNgPgmQgLgegPhNIgpiwIg0ACQgjAAgHgMQgDgHgDgzQg9ADgkgEQgkgEgrgJQgsgJgHgTIgBgGQAAgCAGAAIBNANQBNAMAUAAQADAAAegjQAjgoAugSIAwgUQAigLAtAAQBMAAAyAUQAZAKARAJICShBQATAAAEAdQABAHAAAyQAABQgaBUQgmBngaBQQgbBQguAnQgvAng2AAIAAAAg");
	this.shape_34.setTransform(29.5,21.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AhACFQgUhxgIgOQgwhXAAgyQAAhqBSAAQAdAAAoAeQAkAZAoAtQA2A8AAB7QAABrgsAyQgeAjgmAAQg/AAgehpg");
	this.shape_35.setTransform(24.8,22.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("Ag1CJQgJgTAAgaIAPhHQglhhAAgQQAAghAagVQAUgQAUAAQAaAAAlAyQAlAxADArQgFA4giA/QgiBAgaAAQgaAAgNgag");
	this.shape_36.setTransform(21.2,15.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AhABPQgIgpgFgSQgWgBgJgDQgHgDAAgHQAAgIAQgBQATgCAHgVQAEgfAGgSQANgjAnAAQAOAAAOARIAYAkQAeAwArgOQACACAAAHQAAAHgJAEQgPAEgsACIACAVQAAAqgaAYQgXAVgfAAQgYAAgKggg");
	this.shape_37.setTransform(18.2,10.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AhUDOQgfgUgVgrQgJgDg9gKIhCgLQAFgJAGgDQAJgFAUADIAJg9IgNgfQgNgjABgpQgNADgzgIQgzgIgIgGQgCgEAAgFIAXgBIB0ALQAOg1BNghQBNghBKAAQBMAABfArIB+gsIA+gWQADAWACApIACAuQAAAjgVAnQgSAhgdAcQgFAFgsAcIg4AjQgXAkgkAhQhIBChUAAQgqAAgcgSg");
	this.shape_38.setTransform(32.8,17.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AhiDgQgfgigcgRQgDgCg3gFQg3gGgXgQQAFgFACgEQADgFgDgCIAnAFQAHhGAAgKIgKgKQgJgLgBgMIgFhIIgVAAIhmgWIgCgFQAOgDAKAAQAKAABZAIQAcggApghQBShABmAAQAaAAAsAHQAbAFBHAcQAQAABfgrIBfgqQALAAAKAkQAKAgAAAVQAABeguBAQgpA4hcA0QgKAHgVAZQgcAigPAOQhCA+heAAQgvAAgdgZgABPB3IgPAFIApgKg");
	this.shape_39.setTransform(34.9,15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[]},1).to({state:[{t:this.shape_38}]},8).to({state:[{t:this.shape_39}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.CUP_23_MOUTH_COMPcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 9
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A83C47").s().p("AhvA+QgYgSgGgSQDJgUBcgUQgMAYgsAiQg6Atg4AAQg4AAglgbgAi3ACQAcgvBNgZQA4gSAyAAQAxAAAyALQAuALALALQgsAUhnATQhuAThWAAg");
	this.shape.setTransform(31.1,15.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjyAhQB4gBBZgaQA9gRDThMQAEAQAAAHQAAAjgmAWQgWAKhLAWQh6Ang0AKQhFANhmABIgFg3g");
	this.shape_1.setTransform(40.4,9.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#862D59").s().p("AgbArIAAABIgBgBIgDgDQgGgggMguQBAgFAXgEQgDASAHAdQAIAkABAEQgDADgPADQgOACgIAAQgcAAgKgFg");
	this.shape_2.setTransform(28.7,23.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#411415").s().p("Ah+BdIgDgBIgGgrQgEgagHgRQAdAEB9gtQBzgrAYgPQAGAshYBEQhdBLhZAAIgJgBg");
	this.shape_3.setTransform(48.4,18.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A83C47").s().p("AgqCdQgcgRgQgRQAoAQBwgaQBwgbAfgeIgEAKQgrBIgtAVQgtAVgtAAQgfAAgmgXgAjQhJQA0g3A7gZQA5gaBDAAQAWAAA6APQAyAMAMAGQiJAsguAMQhGASheAAg");
	this.shape_4.setTransform(33,18.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AkBArQA+AJDDg0QDFg1AxgqQAMAoAAAJQABAHgCAAIgJACQgHACh0A3QhMAjhxAVQhYAPhjAFQgDg0gDgBgAkBArIAAAAIAAAAg");
	this.shape_5.setTransform(42,6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#862D59").s().p("AgcBRIABgZQACgVgHgpQgGgrgWgdIBUgKQAQA/ALA4QAIArACADIhcAMQADgDAAgFg");
	this.shape_6.setTransform(32,25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#411415").s().p("AiFCMQACgNgLhEQgKg7gGgUQBQgKBoguQBqguAbgZQACB8g7A8Qg+A/ixAwg");
	this.shape_7.setTransform(52.2,18);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A83C47").s().p("AAuDTQgjAAgZgLQgdgMgFgTIgCgDQAyAJBugiQBughAPgbQgMAlg/AuQg+Avg0AAIAAAAgAjqhsQAqg9BSgZQAzgQA7AAIAlADQAvAGAzAVIi6A1QgmAKg9AGQgsAEgTAAg");
	this.shape_8.setTransform(35.8,19.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AkFAyQD4gHEEiOQAGAFAFARQAEARAAAMQAAAJhNAkQhIAggTAGQhXAcg2ANQhiAXhvABQgDgigCgQg");
	this.shape_9.setTransform(42.7,2.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#862D59").s().p("AgCBPQAAgugWg1QgahAgCgPQBJgHAAgHIAJAsIAFAeIALA7QAJAsgCAUQgCATgGAEQgWABgeAGQAFgPAAgUg");
	this.shape_10.setTransform(38.4,23.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#411415").s().p("AhrCYQAAhKgHgXQgPg0gIgwQBfgSBXgzQAugZArgdQAEAaAAAVQAADXj3BLQACgGAAgLg");
	this.shape_11.setTransform(56,16.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A83C47").s().p("AAIDfQgYgKgDgPIAkgHQArgHAigJQB0ggA5hJIAAAAQgJA5g/A1QhAA1hCAAQggAAgZgKgAkKh6IArgmQAZgYAVgMQA6gjBbgBQAaABA8AOIAvAOIAGAEQhGAdhYAVQhwAbheAAIgNAAg");
	this.shape_12.setTransform(38.3,17.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AkECGIAEg/IAyAAQA0AJCCgkQCAglArgUQArgWAmgQQgBgEARAMQAPAJAKAKQAJAJAAAEQAAAQgpAjQg4AwhYAZQgyANg9AKQhFAKg4AAQh1AAAAgMgAkHAjQgPgTABgzQANACANAAQBIAAB8gXQCjggCLg5QAGAXAAAUQAAAXgaAOQgcAQhcAlQhdAihIAPQhJAQhRAAQglAAgOgSg");
	this.shape_13.setTransform(37.6,15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#411415").s().p("AgUAgIAGgPQAFgNgBgPQABgPAFgPQAGgVAQgHQADAaABAhQAAAigPAug");
	this.shape_14.setTransform(65.6,4.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A83C47").s().p("Ag2CzQgkgRgFgfQCSgCA7gIQAagEA6gRQgkAfgcAWQg3ApgrAAQg0AAgigPgAjBhaIABgBQATgdAxgmQBGgjBeAAQA7AAArAOQARAGAZAOQg1AYhyAXQh0AXhKAAg");
	this.shape_15.setTransform(30,18.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#A83C47").s().p("AhHBBQgjgOgZgZQB0gaBBAAIAqACIA1AGQgmAqhDARIg7AKQgXAAgdgMgAhMg6QAsgSAoAAQAjAAAfAJQA2AOA2ApQh/gbhVAQQgeAGgsANQg5ARgUAFQAqgzA/gZg");
	this.shape_16.setTransform(36.3,16.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},13).to({state:[]},1).to({state:[{t:this.shape_16}]},3).wait(1));

	// Layer 8
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhaBkQgugOgRgUIgRgaQgLgPgRgBQg7gDgagFQglgIgNgNIgCgEIAJgHQAOAFAhAHQAlAFAOAAQAEAAATgPQAagYATgNQBNg3BdAAQAfAAAlAIQAbAGAVAIQA4AVAEAAIAwgRQA1gUAngJIAKAEQgSAbhKAYQhPAagFAFQgLAKgVAjQgSAggXAOQg/AqhGAAQgVgDgXgHg");
	this.shape_17.setTransform(32.9,15.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgtC3QgigUgUglQgJgQgcACQgfACgHgIIgBgKIAAgCQACgBAGAAIAgADQAdAEAMABQgPhLgDgKQgoADgPgDQgWgGAKg6QgVAAg2gKQhAgNgPgNQABgFADgCQADgCAJAFQAJAFAjAEQAiAFAOAAQgCgBAZgdQAcgeA2ggQA2gfBRAAQAMAABBAOQBMAQAWANIB9guQALAIAEAIQAEAJAAARQAABEgcAsQgpAugWAdIgVAqQgVAngUAXQgjAmg5ASQgnAMgfAAQgiAAgegSg");
	this.shape_18.setTransform(33.1,18.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AARDnQgVgMgKgNQgTgcgNgEQgMAAgHgCIAFABQAEAAABgCQgVABgHgBQgNgCgDgGIACgBIAKAAIAjABIABg0QAAgogLgjQgMgkgRgDQgSgFgVABIgaACQgTgDgBhCQiJADgfgOQgfgOgBgEQAAgEgFgHIAHgBQBtASAsAAQADAAAQgSQAWgZAUgQQBKg8BpAAQAyAAA+ATQAgALAYAJQAJAABLggIBKghQALAAAJAPQARAeAABKQAABKgrBFQgWAmgaAcQgdA1gnAmQhGBDhSgBQgbAAgbgMg");
	this.shape_19.setTransform(32.6,18);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AA0DxQgXgcgEAAIgdABQgJgBgMgLQAIgJAAgDIA7gDIAEg3QgNg8gDgKQglhYgCAAIiJAIQgNAAgFgSQgFgRACgeQhsADhCgOQhDgNADgKQAEgLADgBIAEAAIBWANQA/AIAfABIAjgnQAkgnAsgWQAZgLAWgGQAhgKAqAAIAhACQAaADANACQAUAEAnANQASAHAMAHQAGACAFAAIBMglQBOglANABQAPAAAMAfQARArAABRQAAAkgQA3QgOAwgJALQgXAdAAALIAAAcQgJApg8A3QhHBDhHAAQgwAAghgcgAANgVIgBgIQAAAAgBAAQAAABAAAAQAAAAAAABQABABAAABIABAEg");
	this.shape_20.setTransform(31.9,16.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AhUDOQgfgUgVgrQgJgDg9gKIhCgLQAFgJAGgDQAJgFAUADIAJg9IgNgfQgNgjABgpQgNADgzgIQgzgIgIgGQgCgEAAgFIAXgBIB0ALQAOg1BNgjQBDgfBaACQBcACBJAnIB+gsIA+gWQADAWACApIACAuQAAAjgVAnQgSAhgdAcQgFAFgsAcIg4AjQgXAkgkAhQhIBChUAAQgqAAgcgSg");
	this.shape_21.setTransform(32.8,17.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AiABLQgFgEgVgUIgTgSQgKAAhwAwQAEgLAegUQAhgXAHgLQAkg1A9ggQA5gdA8AAQA6AAArAcIBeA+QApATAeALQAdAKAIAEQgHAGgbgFQgQgCgogKQg+gOgKAAQgNAWgcAWQg5AshRAAQhDgNgQgLg");
	this.shape_22.setTransform(38.7,16.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[]},1).to({state:[{t:this.shape_21}]},13).to({state:[]},1).to({state:[{t:this.shape_22}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.CUP_23_leg_l02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373D48").s().p("AglhLQAsgBASgBQgBAMANBcQAHAzghAAQgdAAgTiZg");
	this.shape.setTransform(11,8.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1F26").s().p("AgiAKIAAgUIBFAAIAAAUg");
	this.shape_1.setTransform(10.2,-2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#758A51").s().p("AgJCOIgZiHQgWh1AAgbQgRADgBgIICUAAIABEdg");
	this.shape_2.setTransform(6.8,-20.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#373D48").s().p("AijDLIgHgXQAAg6BFgwQBBguBqgYQgNgEgSgCIgOgCQgDgkgKgoIgbiCIAHAFQANACAcgIQAcgIAFgKIArCFQAfBeAAAQQgBAChuBTIhTA/QgkAaghAWQgbARgFACQAAgCgIgYgACpATIgCgBIACgDIACADIAAABIAAAAIgCAAg");
	this.shape_3.setTransform(30.6,53.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1F26").s().p("AiyEhQgDgFFFj5IAHgFIACABIACAAIAAAAQALgEANABQgyAzktDYIgGgGgAgkjbIgLg4QAXAHAbgLQAVgIAGgHIAHAZIAEASQAAAog3AAQgJAAgNgIg");
	this.shape_4.setTransform(32.2,52.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#758A51").s().p("AgUA2QgfiIgVg+IBSAAIA/EDIgfAXQgNAHgRAAQgMAAgUhbg");
	this.shape_5.setTransform(27.1,8.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#373D48").s().p("AilCdIgBgZQAAgnBBgbQAygUAqAAQArAAA6AMQhGgbgVgmQgXhCgrhCIAJAAQA7gFAHgNQBUCABJBxQgdAMh0AdQiCAhg2AAIgDgBg");
	this.shape_6.setTransform(27.5,38.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1F26").s().p("Ai7DCIAGgSQAyAFCagiQCXgiAIABIAGAIQhBATk1BBgAhji9QALABAjgQQAhgHAUArQgHAEgYAHIgXAHQgvAAACgng");
	this.shape_7.setTransform(27.7,37.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#758A51").s().p("AALBTQhFh0g8hsQAEADAWACQAWADAUAOQBCAvBnDGQgMAHgUAFQgUAEgUAAIgkg7g");
	this.shape_8.setTransform(12.2,3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373D48").s().p("AhDBvQAZgHAWgVQATgRAJAAQAcAAAjAjIgbAWQgXATgBABgAADgUQh+hBg+ACQAFgEATgFQASgEAHAAQA/AABPAkQBQAkAeAnQgBgNgegpQgegrgGgzQASgCAXgHQAFgCAQAIQARANAdBhQAaBXADAgIAAAYQgBAAgDANQgihQiRhGg");
	this.shape_9.setTransform(-33.7,11);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1D1F26").s().p("ACOC8IhBgQIAwglQA+AwAIAEIgHADQgIACgHAAQgOAAgRgEgAByBgQg1ghg9gdQhpgvg+AAQgGAAgPADQgRADgIAFIAHgTIAQgMQAUgOADAAQAOAABbAiQBCAYAjAPQA2AWAuAhQA6ArASAsQgBAEgDADQg9g5gkgWgAg+B6QgNgGgBACQhAgbgrgmQgzgtBEAAQAhAAA0AVQBFAfAtATQgUALgaAVQgWARgHAAQgFAAgPgGgAjWgMQACgDAGgGQgFAMgCAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAgBgABIi5IAhgGQANAFASASQAUAVADAUIgIgCQgJgDgHAAIgUAFQgVAEgIADIgOhBg");
	this.shape_10.setTransform(-37.7,8.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#758A51").s().p("AAdA4QgxgbgngvQgFAEAAAXIgBAFIgdgNQgIgCgGAAQgGAAgIABIgMAGIgGgYQgGgbAAgGQABgfAxAAQAnAABOAxQBbA2AiA+IgGAAQg6AAg1gbg");
	this.shape_11.setTransform(-17.3,-12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},12).to({state:[]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},8).wait(1));

	// leg
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgDDmQgQgpgRiMIg0k7ICmAAIACA9IgBErQAAAPAFA0IAFA6QAAAZgGAJQgKAOgfAAQggAAgNglgAgODgIABgWIADAWg");
	this.shape_12.setTransform(8.2,-7.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AjCGsQgIgRAAgEQAAgGAEgJIAEgNIgKgoQgMgnBAhLQBEhPBBABQgFgbgDgYIhwolIBkAAQANABAIAHQADAEABADIA8DWQAlCBA+DwIAMgIQAGgDAGAAQAGAAAPAIQARAKAAAHQAAAVhPA8QgtAij+C0QgMgGgLgUg");
	this.shape_13.setTransform(32.1,39);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AilFHQAAg3A/g7QBDg/BDAJQhvi/glhIQhTifg1hgQAUgBA8AYIA+AZQDyFUBUCUQArBKgHAHQAAALgXAJQgVAIhAANIjgAxQg5AMgJAAQgTAAAAghg");
	this.shape_14.setTransform(23.7,24.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAbD8QhWgYhNgjIhbgnQhRgrAAgzQABgfAygmQAxgmAmAAQAqAABFAaQAxARAdAQQgRgWgSheQgRhTAAgYQgBgcANgPQAOgQAWAAQA2AAA4AdQA1AdBKBDQA5A1AAAcQAAAKgMAFIgNACIAAADQg8AAh7hKQAYBZAmCFQARA8AAAQQAAAugPAVQgQAYgqAAQgPAAhBgTgAEZgpQgFgCAIgBQAAABgBABQAAAAAAABQAAAAgBAAQAAAAAAAAIgBAAg");
	this.shape_15.setTransform(-30.8,3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12}]}).to({state:[{t:this.shape_13}]},1).to({state:[]},1).to({state:[{t:this.shape_14}]},12).to({state:[]},1).to({state:[{t:this.shape_15}]},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,-34.4,18,53.6);


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
	this.shape_2.graphics.f("#758A51").s().p("AgagNQgEgHgYh5ICCAAIACBuQABBMgCBfIhPACQgZiMABgPgAhNiNIAUAAIgLACQgFAAgEgCg");
	this.shape_2.setTransform(6.6,-19.7);

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
	this.shape_6.graphics.f("#373D48").s().p("AheBCQA5gZBPABQAKgBAlAEQhBgTgYgyIg9h4IAKAAQA7gEAHgOQBUCBBIBwQg9AagdAIQhIATizAeQgChBBOgfg");
	this.shape_6.setTransform(27,38.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1F26").s().p("Ai7DAIAGgSQANABCugkQCogiAIAHIAGAIQhBATk1BBgAhji/QARACAlgNQAggFANAlQgHAEgYAHIgXAHQgvAAACgng");
	this.shape_7.setTransform(27.7,37.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#758A51").s().p("AgBA8QhBh2g0hTQAPABARAEQAiAJAUATQATARCEDZQgMAHgUAFQgUAEgUAAQgEAAgshSg");
	this.shape_8.setTransform(12.2,3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373D48").s().p("AidC/QAAg+A0gpQA7gtCIgeIgsgNIAAgGQAAgHgDgNQgHgggQiRQALAAAYADQArAAAHgTIAqC+QALAvAAALQAAAEg4AkQhYA6inBdQgEgTAAgKg");
	this.shape_9.setTransform(22.4,37);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1D1F26").s().p("Ai7EWQgCgEAAgGQAAgJFbjRIhFAwIA1ggQAXgNAUgEIAFAAQgZAbh5BMQhyBKhvA8IgGgIgAgEjXIgHg3IAeACIAPgCQASgEAPgLIAKA2QgIALgHAFQgMAIgYAAQgNAAgRgIg");
	this.shape_10.setTransform(24.8,35.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#758A51").s().p("AgRCSQgmkLgFgYIBPAAIAqEJQgHAGgXAJQgWAKgJABg");
	this.shape_11.setTransform(24.8,-8.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},10).to({state:[]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},2).to({state:[]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},6).wait(1));

	// leg
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AACDtQgFgPgBgcIgBABIgGATQgVirgEgYQgmi6gRhhICsAAIAHDaIgHCKQAAAOAFA1IAGA5QAAAZgHAJQgJAPgfAAQggAAgLgcg");
	this.shape_12.setTransform(8,-7.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhwD5QgggGghg3Qggg4gFgPQgbhHAAhYQAAgvAVgxQAZg5AjAAQAPAAAUAJQAdANAVAbQAQhpA5AAQAuAABVBLQBCA7AUAfQAcAsgBAPQgBARgBgNIgCAFQg8AIgjgSQgmgShEgvQAFAsAAAjQAAB1glBMQggBDgbAEQgLACgMAAQgRAAgSgDg");
	this.shape_13.setTransform(-33.5,-6.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AilFHQALgvAegsQA7hYBhALQh2jMgagwQgqhWhdirIgEgJQATgBA9AYIA9AZIDKE2QCgD1ABAOQgBAVh9AYQh0AWhaAUIhDAPQgTAAAAghg");
	this.shape_14.setTransform(23.7,24.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AjWGjIAFgaIAFgfIAIgxQAFgiAXgZQAvgyA/gOIAjgGQAOgEAAgHIgFg3QgwlygUiDQgUiCCKBRQAcCEAWB7QAfCrAmC7IAKgGQAIgEAGAAQAHAAAOALQAPAMAAAGQAAAjjJB2QhiA7hmA0QgcAAAAgtg");
	this.shape_15.setTransform(25,20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12}]}).to({state:[]},1).to({state:[{t:this.shape_13}]},10).to({state:[]},1).to({state:[{t:this.shape_14}]},2).to({state:[]},1).to({state:[{t:this.shape_15}]},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,-33.9,18.4,53.1);


(lib.cup34rarmr02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#526139").s().p("AgwAjQgRgGAAgHQAAgjAXgVQASgQASAAQADAAAZALIAsARQgeAFgRAZQgIAMgKAfIgxgQg");
	this.shape.setTransform(19.6,5.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B3E4E6").s().p("AhCBOQgKgIAAgHQAAgFAHgIQAJgJAMAAQAGAAAEAEIALAMIAIAGQgdhAAAgCQAAgYARgbQAXglAnAFQAFABADAEQAPAJANAeQANAegDARQgEATgBAAQgCAAgFAPIAAgDIgFAHQACgIAAgRIgBgSIgFAAIgJAfQgJAYgJAJIgMAHIADgHIABgJQAAgHgEgJQgDgJgDgEIgFgEQAKApgQAPQgJAKgbAAQgRAAgNgKg");
	this.shape_1.setTransform(26.4,14.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#758A51").s().p("Ah6B/QgbgTAAgJQAAgVA0hNQA0hLCDiBQBCBCgDAAQgzA3gwAxIhyByIBuArQgUAJgNAdQgNAeABAMQhUgwgngdg");
	this.shape_2.setTransform(11,-12.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B3E4E6").s().p("Ag3BiQgbgEgPgiQgIgSAgAAQAPAPAKAAIAIgBIgBgLQAAgCgegVQgfgVgEgUQgEgXAdgYQAcgXAogHQA+gGAIADIAdANQAWAJAABBQAAAlgFAIIgUALQgJgDgFglQgGgkgNgIQAIA+gFAXQgFAXgYAAQgEAAgJgOQgGgKgEgjQgBgZgNgGIgDADQgCADAAAGQAAAFAFAbQAFAdAAAGQAAAPgDAMQgCAMgIADQgDACgHAAQgJAAgPgDg");
	this.shape_3.setTransform(10.6,9.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#526139").s().p("AhLAPQABgIAggYQAggaAcAAQARAAAIAEQAPAFASAXQgbgHgrARQgrAPgSAeQgWgVACgIg");
	this.shape_4.setTransform(4.2,-0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#758A51").s().p("AieBBQgVgtATgXQBPhBBpgyQA7gbAtgOQAoAjACAbQhBAThRAnQhGAjgTAPQABAGATAeQASAdAbAZQgGgDgcAIQggAKgiAlIgFAHQgfgxgWgug");
	this.shape_5.setTransform(6,-17.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B3E4E6").s().p("Ag+BzQgFgFgEgQQALgMARADIAXADIACgBQgKgcgxgJQgtgJAAgQQAAgZAdgcQATgTASgLIBGgrIATgKQARgHAJAAQAPAAAZAtQAYAqAAAOQABARgcAKQAFgWgUgaQgSgYgLAAQgGAAgFAEIgJAJQAcAiAOA1QAAAGgGAHIgLAIIgHABQgHAAgUgcQgXghgKgJQABACgHAAQgBgBAAAJQAAAEATAgQAUAgAAAMQAAAng6AAQgUAAgGgEg");
	this.shape_6.setTransform(10.2,-4.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#526139").s().p("AgTAUQAAgRALgXQAJgZALgEIAIACQgKASgKAMQgDALAAAnQAAAKAJAHIgSAAQgHgUAAgKg");
	this.shape_7.setTransform(-4.3,-4.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#758A51").s().p("AiyCWQgKgJAAgeQAAgoAygvQBHhBDOh8QAcAdAIAMQALATADAgQgSADh4AyQgUAJgmAbQgiAYgNAAIg1gMQgEAFgFAEQgEADAAACQAAAFAEAAQAEABAAAFQgNAQgKAQQgVAgANAxQgfgNgEgDg");
	this.shape_8.setTransform(5.8,-15.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#758A51").s().p("AhDBtQg6gqAAgxQAAgbAlg9QAOgYApg5IAigwIgBADIAAgCIACgCIAGgHQABABgFAFIgCABQAWgHAPAfQARAhADAPQhPBKgkBuIAIAHIAcgqQAXAXAwAeQAxAdAaASIgcBXQiAhJglgag");
	this.shape_9.setTransform(19,-14.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#758A51").s().p("AhMBfQgKgWAAgUQAAgYAYgsQAig/BAhJQAUABATAPQATAPgKAsQhDA6giBtIAIAIIAagqIALAMIguBTQgpgWgRgjg");
	this.shape_10.setTransform(15.1,-18.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#526139").s().p("AgwA3QgTgXgGgeQgFgcAUgzQAIBBAmAXQAVAPBAAcIACACQgmAWgcAAQgmAAgTgXg");
	this.shape_11.setTransform(5.8,-6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B3E4E6").s().p("AAcB5Qgsg3glgcQgkgRgVgOQgngXAAgqQAAgnAlgiQAhgdAZAAQA1AABOBKQBJBEAAAYIAAAIIgCACIgEAEQhHhCglgaQgogegUAIQCpBoAABRIgBARIgBACQgBABgGAAQgIAAgMgVIgbguQgqg/gsgCIgEABQBAAqARAqQAVAgAAAqQAAAXgXAAQgRAAghgog");
	this.shape_12.setTransform(17.3,-7.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#758A51").s().p("AABA0QgpgRgWAHIgcAJIBfhyQABACAEgHQAEgGAHADQAGADAcAfIAkAoQgQAOgnA4QABgHgkgOg");
	this.shape_13.setTransform(17.8,-29);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#758A51").s().p("AhiCtQgggLgMgOIgIgFQAzgYALgZQAMgYACgKIAYANQAOAHACAAQAGAAgBgCIABgHIgVgZQA4hDAXgkQAUghAphaIAtAVQARAIgCAkQgCAlgWA1QgVA0glA3QglA3gaATQgXASgYAFQgHACgJAAQgSAAgXgIg");
	this.shape_14.setTransform(8.3,-17.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#526139").s().p("AgcA4IgagdIAFABQAXAAAagiQAOgTAUgfQAVANgBAfQAAAbgjAZQgXARgQAAIgIgBg");
	this.shape_15.setTransform(-6.1,-10.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B3E4E6").s().p("Ah0BxQgOgRgBgmQAAgaAlgTQAegNAZAAQAZAAAOAMQANAOgCARQgIAthYAEIAFAEQABAAAAABQABAAAAABQABAAAAABQAAAAAAABIARAAQATABAlgKQgcAugVAAQguAAgRgYgAAiATQgQgKACgKQACgMAPgNQAOgMAYgBQAXAAARALQAQAKAAAOQAAANgQAKQgRAKgXAAQgYAAgRgKgAgVgOQgOgDgFAAIgdADQgaADgKAAQADgaAZgVQAcgWApAAQAJAAAMAMQAMAMAAAJQAAASgOAMQgLAHgDAAQgFAAgNgEgAAtg0IABgKQAAgLgRgOQgUgPgZgBQgoAAgeAhQATggAKgJQAagZAlAAQAgAAATAOQAQALAAAMQAAAHgDALQgHAWgTAOIABgHg");
	this.shape_16.setTransform(-4.7,-24);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B3E4E6").s().p("AhBCUQgIgMAAgOQAAgTAZgPQAMgGAtgSQgEgHgHgIQgeAKgsAVQgYALgdAAQgMAAgLgNQgLgNAAgNQAAgOAcgKIBngcQAMAXATANQALAIALACQgKgEgvhFQgUAXgZAAQgXAAgXgQQgXgPAAgOQAAgGAGgGQAGgGAJAAQANAAA4AKIA7AKQBBAAAcg4IARgnQAJgSANAAQAPAAAKALQAIAJAAAKQAAAbgRAMQgQAMAAALQAAAGAGARIAHAWIABATQAAAagZAUQhVBDgRAPIgVAYQgQANgWAAQgPAAgJgNg");
	this.shape_17.setTransform(-27.9,-19.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#526139").s().p("AgZA7IgGgFIgGgGQAbgHARgVQAWgZACgpIgCgOQAJASAAALQAAAogVAcQgRAYgQAAQgGAAgDgCg");
	this.shape_18.setTransform(-14.9,-14.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#758A51").s().p("AiLCWQhHgqgLgFQAZgGAQgpQAOgkgDgaQAvAnAiAaQAbAVADAAIADAAIApgrIAogpQAhgmBriHIA4AiQiMDigkAoQguA3gzAAQgnAAgxgcg");
	this.shape_19.setTransform(7.7,-17.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#526139").s().p("AgjBAQgCABgBAAQgBAAgBABQAAAAAAgBQAAAAABAAIAEgCQgSgfgGgTQAwgOALgIQAagRARgoQARAcAAAPQABAQgJAKQgIALgYATIACgBQgNAQgbAKIgOAFIgBAEIgCgDg");
	this.shape_20.setTransform(-6.2,-23.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B3E4E6").s().p("AiICkQgCgDAAgHQAAgKAIgXIAIgaQAAgDAxgtQAxgtAAALQALAKAIACIgCgDIg0hIIg4A4Qg6A8gRAZIgBgGQgDgcAugtQA8g4B+hCIAAABIAAgGQAAgLgGAJQgKgBgfANQgZALgWALIgIgIQgDgEAAgHQAAgRAZgUQAjgcA/AAQBEAAAfAWQAlAZAAA8QAAAcgxAZQgbAMg5AYQgUAMhFBGQg4A4gpABQgHgCgCgCgAixCWQgKgDgBgBQAAgQAiguQAjguA6g8IAVAbQhIAygbAnQgUAcgCAhIgQgFg");
	this.shape_21.setTransform(-23.1,-25.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#758A51").s().p("AhnB0IhLhqQAqAGA5hPQA0BjAKAXQAKAYAHgBIABgBQAAgJgHgQQgJgPAAgRIAZgZQAegfAMgPQAUgZAdgpQAhguACgIQASADAKAaIAPArQAFAPhDBfIhFBjQgsA2gtAAQgZAAglg0g");
	this.shape_22.setTransform(8.7,-16.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B3E4E6").s().p("Ag7BtQgXgOAGgWQAHgDA0ALIAWgFQAYgGAGgCQgJAbgFAKQgIAQgQAAQgjAAgVgMgAAuBzQAPgHAAgeQAAgKgBgBQASAIAKAFIAGADQAGAAADgCIAGgFQgogRgTgkQgLgWAAgMQAAgIALgHQALgHAOAAQAdAAAQARQAWAVAFA1QAJgcABgSIAGAOQAGAmgbAbQgaAbgsAAQgHAAgTgDgAg/AkQgRgSAEgRIAtgQQATgIAbADQASAxAAAEQAAAJgIAGQgNAJgaAAQgeAAgTgVgACQgVQgxgigXADQgeAMgkAAQgFAAgCgEQgFgEgFAAQgJAAgqARQgrASgKAAQgwAAAAgdQAAglA2gVQAygUBMAAQApAAAhAVQAsAcAQA7g");
	this.shape_23.setTransform(-14.5,-35);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#526139").s().p("Ag5AeQgHgIgDgWIAHABIAQAEQAJACAGAAQAYAAAQgHQAbgKAcgiQAEAygHAKQgMAFgJAGQgYASggAAQggAAgLgPg");
	this.shape_24.setTransform(-4.3,-21.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#758A51").s().p("AhrB2QgagbgnhRQAWAPAwgTQAtgRAPgXIACAJQAbBIANAWQAIAMAMAHIADgEQAAgDgLgbQgMgaAAgCIAxhKQAyhRAJgbIAmAXQAQALALANQgEAlgWA8IgYA6QgRAxgoAgQgmAegnAAQg7AAglgng");
	this.shape_25.setTransform(7.9,-16.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#526139").s().p("AgsAZQgJgOgDgsQAlAIAKAAIA2gKIAMA1QgDADgJADIgPAGIgjAGIgNAAQgTAAgHgLgAA0ATIAAAAIABAAgAA3ASIAAAAIAAAAg");
	this.shape_26.setTransform(-0.4,-26.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B3E4E6").s().p("AguCuQgWgWgKgtQAVACAGgHQAEgFAHgNIAoAOQAVAIALACQALACAKABQALABASgJIABgCQgLgHgsgEQgfgEAAgTQAAgdAcAAQA/gBARAUQALALAAAnQAAAmgKARQgMAUgeAFIgBAAIgBAAIgPADQgUAGgMAAQgmAAgXgWgAhrBAQgIgQAAgUQAAgRAMgKQALgIATgCIAKBCIAEASIgBAJIgDABQgDACgGgBQgYABgLgXgAgtAiQgGgPAAgHQAAgaAMgRQAPgWAZAHQABARAAARQAAAagDAMIgcAnQgJgLgHgUgAAWAVIgBhDQAAhgAHgcQAHgZATAAQAiAAAABRIgFCHg");
	this.shape_27.setTransform(-2.5,-51.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#758A51").s().p("AhcBqQgigzgQhZIAEABQAvAEAWgHQAQgFAIgNQAKAyAXAmQAUAoAHgBIAVANIACgCIgkg3QBDibgBgbQAAAAAAABQABAAAAABQABAAAAAAQABAAAAAAIAFgEQAlAWASAcQAIgCAEAqQADApguBZQgvBag2ABIgCAAQg3AAgigyg");
	this.shape_28.setTransform(10,-18.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAg");
	this.shape_29.setTransform(4.8,-24.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B3E4E6").s().p("AAUC9QgUgFgUgKQg9gcAAgmQAAgOAJgCQAMABAGgEQAEgCAFgHIAEgGQAMAAAXATQAWATATABQATAAAEACQADABASgMQgOgEgmgEQgegIAAgbQAAgIAGgJQAJgJANAAQAGAAALACIAxAMIAQAZQADAGAAAZQAAAMgFAUQgFAXgHAIQgGAHgYAKIgYAEQAAABAAAAQAAAAgBAAQAAABgBAAQgBAAgBAAQgFAAgKgCgAhhA9QgNgOAAgUQAAgeAPgNQAMgKASADIgBAmQAAAFAEATIADAYQAAAHgEACQgDABgJAAQgLAAgLgMgAgpAdQgDgIAAgHQAAgjAPgQQAOgOAcgBQABgCAAAKQAAAwgIAMQgPAQgTAYIgNgbgAAfANQAHg/AHhXQAJg1AbAAQAIAAAJAJQANANAAAXQAAA2gKA6QgIAugHALg");
	this.shape_30.setTransform(0.5,-49.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#526139").s().p("AgmAXQgKgNgHgrIABgBQAGAGAfAFQAYAFAMAAQARAAAMgIIAGAgIACAMIgTAJQgSAIgTAAQgcAAgKgMgAA4ASIgCgMIACAMg");
	this.shape_31.setTransform(0.9,-26);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#758A51").s().p("AheBwQgigzgOhbQAbAEAGAAIBCgMQAMBEAXAfQAJAPAKABQAGAAAFAGQAHAIAFACIACgBQgGgOgUgYQgMgXAPgXQAWgyArh4QBEAtgDAtQgnB7gZAvQgQAggPANQgYAUgpAAQgtAAgggzgAgug9IgBgMIACAMg");
	this.shape_32.setTransform(11.2,-17.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B3E4E6").s().p("AghCpQgxgcAAg3QAAgCApgWQAGAAAZASQAWASAPADIAfAFQAQABAFgCQgOgGgngJQgdgKAAgbQAAgCADgFQAEgIALgHIBMAWQATAhAAAYQAAAogSAWQgPATgXAAQg0AAgjgWgAhhArQgNgOAAgXQAAgVAFgHQAGgIAKgJQAKgKAbAAIADgDQgDACgFAWQgGAaAIAVQAJAXgFAGQgEAFgEABQgEACgGABQgQAAgMgOgAglAaQgIgKAAgOQAAgiAQgQQAQgRAbAKQgCA3gFAJQgNAMgSAYQgBgEgMgPgAAfAKQAPiSAEgQQAIgmAZAAQAcAAAAA0QAAAagGAjIgTBog");
	this.shape_33.setTransform(0,-55.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#526139").s().p("AgJAmQgiAAgGgZQgGgXACgbIgDAAIAEAAIAaAIQAcAJAjAEQAHAAAFAVQAFAXAEAEQgRAFgJABIgYAAIgRAAg");
	this.shape_34.setTransform(0.1,-32.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#758A51").s().p("AhOBZQgegvgihyIA3AGIAWAAQALAAAMgEIAVBCQASArAXAZIAAgBIgJgKIANAMQADABAIAGIABgBIgig9IAZguQAWguAPg1QBGAeAJAiQgcBOgiA4QgsBJgsAAQgoAAgfgvg");
	this.shape_35.setTransform(10.6,-20.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#758A51").s().p("ABpEeQhxgygvg3QgdghgKg0QgOhIgRhxIgaiuIADAHIACAAQABAFAKAAQAJAAAqgNQAsgNAPgJQAABpAKB5QAJBxAHAbQAOAvBEA5QBBA2ADAKQADALgKAQQgIAMgSAAIgNgBg");
	this.shape_36.setTransform(10,-50.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#526139").s().p("AhEAtQgCgJgCgzQBDAAAkgRQASgIASgLQAGArAAAKQAAAYg3AQQgaAHgdADQgcAAgDgHg");
	this.shape_37.setTransform(1.4,-84.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#B3E4E6").s().p("AgsDGQgQgWgRgfQAHgFASgSQARgQAOAAQAIAAAOAMQAQANAEAAQAGAAASgJQAagMAUgTQAEAAgKAAQgFAAgZAGQgZAGgEAAQgPAAgKgJQgFgHAAgHQAAgVAZgOQAbgPAmAAQAVAAALAsIAGAsQAAAxgyAaQgrAWg/AAQgBAAgLgRgAhvBrQgMgOAAgYQAAgSALgNQAGgGAWgRIAYBZQAAAHgGAFQgFAFgKAAQgRAAgNgOgAg8ASQAAgSAJgSQALgaAZABQAJAMACAJQAEAQAAAhIgfA5QgQgUgNgugAAAhcQgDgNAAgcIgBgXQABgaADgPQADgMALgEQAJgDAKADQAWACALA8QAKA1AABYQAAAVgKABQgWAAgaAFQgKhTgIgag");
	this.shape_38.setTransform(-1.9,-109.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#526139").s().p("AgyAkIgYgyIA+gFQAvgFAYgVQAnArg8AbIhCAVQgQAAgGgKg");
	this.shape_39.setTransform(-3.1,-111.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#758A51").s().p("ABnG8IkctXQAOAGAxgRQAsgQAJgIQA9DlBkFHQBWEUAAANQAAANgbAVQgRAOgSAAQgJAAgIgDg");
	this.shape_40.setTransform(11.1,-63.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B3E2E6").s().p("AhWCoQgmgtgBgpQgCgpAOgTQAOgSARAAQARAAAYASQAdAXAAAaQAAALgOAPQgOAQgJAAQgNAAgOgVIgVgjIgCgBQgJABAAAKQAAAhAYAVQAbAYAlgQQADAJAPAGQANAGATAAQArAAARghIgaAGQgYAFgFAAQgRAAgKgEQgLgGAAgKQAAgXAdgRQAcgQAaAAQAXAAALARQAMASAAAsQAAApgfAYQgeAWgwAAQg8AAgrgygAgZATQgdgfAAgDQAAgKAIgJQAJgLANAAQAMAAALAKQAQASAfA0QgIASgaAAQgJAAgcgigABLAaQgBABgYgmQgFgKgegZQgegagKgPQgvhEABgjQAAgbAcAAQAgAAAtBKQA1BUABBZIAAACQgIgJgFADg");
	this.shape_41.setTransform(-8.9,-137);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#758A51").s().p("AAjFKQhAhrgXhKQgKghgag/QgchBgOgrQgyiZgLjhQAaAHAvgOQAmgLAigSIAFBwQAEBFAGAqIASBuQANBWAUBFQAKAlAYA+QAVA5AQAnIAzBmQAvBcADAYQADAZgkAEQglAEgLAGQgMgmhAhng");
	this.shape_42.setTransform(11.1,-65.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#526139").s().p("AhFBCIAGhiQAPACApgHQAzgJAZgUIABADIgCBcQgNAIgsAOQgsAPgQABIgUgBg");
	this.shape_43.setTransform(-0.6,-119.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#B3E4E6").s().p("AhmCCQgNgYAAhEQAAg7AigaQAUgPATAAQAqAAAcArQAVAgAAAXQABAmgjAAQgOAAgPgeQgWgngKgHIgIACQgEADACAHQACAHAHAJQAHAKARA2IgWAMQADAJAOAEQARAEAdgJQAJAYAGAKQgFAEgbAHQgXAHgEAAQg6AAgSgggAA2B0QgHgJAAgSIAPgaQAOgcAAgQQAAgGgBgEIgGgLIATAGQAcARAAAaQAAAqgRAVQgMAPgPAAQgLAAgHgJgAAahAIAAAEQgHgDgSgKQgRgJgVAAQgKAAgOADQANgJAUgGQASgHAHAAQAeAAARAPQARAOAAAZQAAALgFAKgAAqhtQgigTgdAJIAFgIQAlgVAPgGQASgHARAAQASAAALAIQAQAKABAVQAAARgeAiQgHgRgmgVg");
	this.shape_44.setTransform(-0.5,-141.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#758A51").s().p("ABrH0IhLhrIgpg/QgFgIgmhUQgmhUgKgZQgohjgTicQgOhzAAhzIADibQAVgHAQAAQAkAAAZAIQAlANAVAjIgMDTIgCAbQAAEFBjDdQAzBvAzA7QAEAjgVAgQgLARgYAHIgOgTg");
	this.shape_45.setTransform(10.9,-69.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#526139").s().p("AAKAkQgkgHgNgCQgOgBgcABQAIgpAEgkQAEgOAiAAQAnAAAjASQAZAOAOASIgOBPQgVgWglgHg");
	this.shape_46.setTransform(3,-126);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#B3E4E6").s().p("AAIBxQgMgLgNgFQgZgIgMgCQgVgFgZAAQgJAAgWADQgFgXgHg1QAAgpAagpQAegxAvAAQAKAAAPAGIgCACQgHAHgNAOQgLAMAAACQAAAGACADIAHABQAwgnAJAAQARAAAMANQALAOAEAEQgfATgHAGQgLAJAAAIQAAAGACABIAEABQAMgFAggPQAegNAOAAQAQAAAKAOQALAPAAAZQAAATgMAcQgOAggSAEIACgEQAHgiAAgRQAAgHgDgKQgDgIgCgDIgEAEQgGAggMAfQgXA+giAAQgCAAgMgKg");
	this.shape_47.setTransform(10.4,-144);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#526139").s().p("AhDgPQAGgQAdgPQAZgIAYgDQAvgFASATIgLBFQgngEgZAFQgcAGg8AaIAOhKg");
	this.shape_48.setTransform(2,-109.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#758A51").s().p("AhbCqQhRi4AAjxIACgzQACgygBgdQAAgYAjgSQAigSAuAAQAjAAAFAFQgIAhABAoIgDBFQgDBfAAAoQAAAzARBFQAQBDAdBSQAdBTApA+QApA+AbAhQgMBBgyAjQiBhshJiog");
	this.shape_49.setTransform(10.1,-60.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#B3E4E6").s().p("AhzByQgMhKAAgWQAAgqARhFQAYhcAhAAQAOAAASANQgFAJgMAXIgKAYQAAAGABAFIACAEQAFgCAXgeQAUgdAHAAQARAAAIAGQAPAKAAAcIgSAVQgTAYgEAXIABAGIAHAAQAJgJAMgYQAQgTArAAQAJAAAJASQANAZAAAwQAAAngLAiQgLAfgMAIIACgPQADgwgDgdQgCgPgFgQIgDAGQgEApgGAoQgOBQgPAAIhCAAQgkAFgwAeIgMhIg");
	this.shape_50.setTransform(5.8,-134.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#526139").s().p("AgTAtQgegBgEgRQgEgSgGgrQARAEAFAAQAGAAANAEQANAEAIgCIAKgCQAWgBAVgKIAIgHQAAAVACAZIACAdQAAAHgfAFQgUACgUAAIgMAAg");
	this.shape_51.setTransform(-6.1,-35.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#758A51").s().p("AiVA1QgQg5gLhNQAIAEAOAEQANADAMgCIAlgIQAZgEALgLQAAAfAMA2QANA0AZAfIADgBQABgCAAgHQgBgGgHgIQgNgdABgRQABgQA2g2QAsg7AjgnQArAaAWApQhjCbgRAWQhDBXg7AAQg1AAgfhxg");
	this.shape_52.setTransform(7,-21.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#B3E4E6").s().p("AhXBqQgZgbAAhDQAAhDAdghQASgUARAAQAGAAADADIAFAGIAFAGIgLAOQgKANgBAEIABAUIAagWIAXgSQARAAAFABQAKADAAAMIgMASQgMAUgBANQAAADADAEQACAEACABQAYglAkgFQAkgFADAtQADArgIADIgIAEIgBAAIAAgGIgMgjIgFgHQgJAPABAkQABAjgGALQgOAYgSAIQgPAGgdAAQg4AAgXgagAA7hLQgBgFgagLIg7gdQAXgGAagFQAcgEAVATQAVATgCAXQgEAAgRACIgEABQgGAAAAgEg");
	this.shape_53.setTransform(-5.6,-53.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#526139").s().p("AgsAkQgRgPgBgmQAlAKAHAAQANAAAVgNIAugbIABAtQAAAYgEAHQgHAJgYAFQgSAFgLAAQgdAAgOgMg");
	this.shape_54.setTransform(-5.6,-26.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#758A51").s().p("Ah1CFQgmg2gWh0QAIALAvgLQAtgMANgMQAJAxAHAVQAMAnAfAfIgBgOQgOgoAAgSQAAgHAXgaQAigoALgPQAHgKAVgrQARgjARgCQARgCAcANQAcANgGAeQgvBLgxBHQheCPguAAQgeAAgcgng");
	this.shape_55.setTransform(7.8,-15.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#B3E4E6").s().p("AhfBgQgNgVAAgwQAAhFAdghQATgVATABQAGAAAEADIAEAGIACACQgXAUAAANIABAMIABAFIAfgdQAQgSARAAQAJAHAIAFQgBAEgOAVQgNASACAIQACAJAFACQAKgJAVgdQAOgTALAAQAPAAALARQALASAAAcQAAAJgGAPIgBABQgFgYgNgTQgFANgDAnQgEAogBADQgSAcgUAJQgVALgpAAQgwAAgSgcgAAzheQgXgMgcAHQAAgEgGgKQATgKAOAAQAdAAATAMQASAKABAQIgHAAQgRAAgTgJg");
	this.shape_56.setTransform(-5.3,-42.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#B3E4E6").s().p("AhABxQgIgHAAgMQAAgGADgCQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAIASgBIASABQAKACACgBQgRgYgugJQgngJAAgNQAAgxBXg3QBGguAVAAQAPAAAaAtQAYAqAAAMQAAAFgGAIQgHAIgPAIQACgSgUgdQgSgZgIAAIgTANQADADAVAmQAVAjAAAEQAAAKgHgBIgPADQgagEgPgaQgNgXgMAAQgFAAAAABQAAAAABAAQAAABgBAAQAAAAAAAAQAAAAgBAAQgBgBAAAJQAAAEAUAkQAVAkAAAEQAAAVgTAJQgQAJgjAAQgJAAgHgGg");
	this.shape_57.setTransform(12.2,-3.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#526139").s().p("AgQAnIAAgTQAPgzAQgSQACgDAAAKQAAAHgHAZQgIAXgBAbQAEAGAEAEIgSABQgGAAgBgMg");
	this.shape_58.setTransform(-2.8,-2.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#758A51").s().p("AivCWQgNgGAAggQAAg4BphMQAngdC3h0QAsAWACASQACATACAgIh7AwQgjAPgpAZQglAZgFABIg3gLIgNAMQABACAEACQADACAAAFQAAAGgOAUQgQAVgBAEQgFANAAAQQAAAOAFAUQgNgLgTgFg");
	this.shape_59.setTransform(7.6,-14.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#526139").s().p("AgrAgQgUgQAAgWQAAgKABgJQAjAOATgBQAggBAnggIABAsQAAAagIAIQgNANgtAAQgXAAgSgOg");
	this.shape_60.setTransform(-9.7,-34);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#758A51").s().p("AiKBsQgig6gSh0QAZAIARAAQARAAAYgIQAbgIAFgIIAKA9QAEAZAbArIANARQAAgHgFgXQgEgYAAgFIA/g7QBGhDAZgiQASAEAZAVQAaAVgIAVQhFBrhPBHQhIBCgtAAQgiAAgcgwg");
	this.shape_61.setTransform(4.6,-21);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#B3E4E6").s().p("AhbBpQgTgTAAguQAAgyAOgkQASgvApgGIAMACQAEACAAAHQgXAjgCAKIAAAFQAFgCAWgYQAOgQAUAAQAIAAAOANQgQAUgFAJQgGALAAAKQAAAIACABQAAACAFAAIAZgbQAZgbAGAAQASAAALAXQAJATAAAWQAAAOgKAPQgJgngGgHQgJANgEAjIgCAnQgCAXgbAOQgZAOgjAAQg0AAgVgUgAAphfQgbgJgPgMQAPgHAOgBQAOAAAWACQAXADALAmQgegEgbgKg");
	this.shape_62.setTransform(-8.7,-50.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#526139").s().p("Ag5AkQgDgJABg1QBAATA3gkQgCANABAVQABATgBAHQgHAbg9AAQgvAAgBgIg");
	this.shape_63.setTransform(-9.8,-35.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#758A51").s().p("AiRBkQgfg8gPh1IAYAGIATAEQAPABAagIQAZgHAHgHQAIA+AFATQAGAWAdAvIgDgfIgDgdIBJhDQBPhIALgNQAZAJAVAZQAVAYgHAMIgcAfQgjAmgcAiQgsA4g2AlQgyAjgjAAQgiAAgbgzg");
	this.shape_64.setTransform(4,-22);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#B3E4E6").s().p("AhWBqQgZgUAAg0QAAgnANgjQAUg6AugDQAIAFAHAHIgQARQgFAFgFAWQAJAAAQgRQARgRAOgBIAVAEQAAAEAHAHQgNALgGAHQgKAMAAAUIAAAHQABgBAAAAQAAAAAAABQABAAAAAAQAAAAAAABQgGACALAAIAbgaQAcgZADAAQARAAAKAYQAHATAAAXQgCAXgIAEIgEgWQgGgUgEgEQgKAKgEAlIgDAnQgEAUgZAOQgXANgbAAQg3AAgWgSgAAyhZIgwgbQAPgGAPgBQAQgBAWAGQAWAGAPAXIgFANIgFAAQgWAAgZgNg");
	this.shape_65.setTransform(-8.7,-52.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#526139").s().p("AgkAcQgagMAAgQIACgUQABgOgBgDQAHAHAcAIQAcAHAaAAQAWAAAMgHQgDAhAAAUQgxAGgLABQgPAAgVgKg");
	this.shape_66.setTransform(-4.8,-31.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#758A51").s().p("Ah3B8Qgjg3gNh4IgCgEIAfAIQAbAFAHAAQAIAAAJgCIAigLQgEAgAPAxQAMAnAJAPIAGAGQABgbgDg7QAAgFAjgpQAwg1Ajg+QAmAPAQAUQAQAUgBAcQgCAbhrBrQhmBpgcAAQgaABgYgmg");
	this.shape_67.setTransform(6.7,-21.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#B3E4E6").s().p("AhwBYQgWgTAAgpQAAg9AqgrQAgghAWAAQANAAAIAFIAJAKIACADQglgBAAAqQAKgRAagHQAXgHAGADIARAJQAMAHAGAJQgpAZgBAUIACAHIAEABQAogrAQACIAXAEQAHAAAJAQQAKAPAAAVQgKAhgHAOIABgWQAAgJgDgJIgHgLQgKALgPA4QgLApgeAAQhtAAglgfgABcg7IgJgJIgUgRIgkgOIgGgOQALgEAVgBQAVgBAkAWQAlAVgSAaIAAABIglgKg");
	this.shape_68.setTransform(0.9,-47.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#B3E4E6").s().p("AgnBrQgCgQgDgIQAdAJAPAAIAQgLQhEgYgcggQgVgXAAgcQAAgtAjgbQAagUAbAAQB1AAgCBWIgNgLQgSgOgegJQgZgJgLAAIgIAFIgSANIADACIAKABQAlgFATAHQAYALALAmIgGAWIgHgIQgLgKgXgIQgSgGgFAAQgGAAgCADIgCAEQAqAGATAdQAJAQACANQAAASgUAUQgXAXggAAQghAAgGgMg");
	this.shape_69.setTransform(21.6,-3.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#526139").s().p("AgfAxQgPgJAAgVQgBgOANgbQAMgaAHgIIgCANQgEARAbAjQAbAjAPAFIgHAEQgOAEgKAAQghAAgPgIg");
	this.shape_70.setTransform(10.2,-1.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#758A51").s().p("Ah8CoQgigdAGgkQAFgjBUhYICainIAAADQABADALgFQAMgGAWAbQAXAbgIASQgCAFgHAGQgQALgWAXQgrAugmAuQgZAhgIAGQgLAIgVAAQgmgDgkAAQgGAAAAABIAAADQANALAQAIQAYALAVgGQgEAIgIAmQgIAlAAAGIABAHQgHADgIAAQgTAAgYgUg");
	this.shape_71.setTransform(10.1,-16);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#B3E4E6").s().p("AhKCBQgYgQAAgPQAAgWAYAAQAJAAAdAEIAFgKIAHgQQgsgKgWgVQgXgVAAgbQAAgeAbglQAmgzA6AAQAjAAAgAeQAkAlABA6QAAAJgKAXIgCgJQgEgIgSgeQgVgkgMgIQgBAQAUAkQAWAjAAAdQgBAUgJAOQgJAMgXAQIACgOQgBhNgcgeQgQgSgTAAQgCABgBAGQAIAPAWAaQAUAeAAAiQAAAfgRATQgRAUglAAQgNAAgVgPg");
	this.shape_72.setTransform(15.3,6.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#526139").s().p("AgyBAQgIgEAAgZQAAgTAKgSQAIgRATgaQAUgbALgBQAWAFAbADQhcAkAQBnIghgKg");
	this.shape_73.setTransform(4.1,-1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#758A51").s().p("AiaCUQgSgaAAgjQAAgeBWhRQBghfByg6QA1AlgFAZQgFAZgfANQgwAVgwAmQgcAagMAKQgYASgcgHQAAACgIAEIARAMQgeAWgaAsQgaAuAJATQgWgHgQgXg");
	this.shape_74.setTransform(6.9,-13.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#758A51").s().p("AiGgkQA8gcBXAAQBXAAAjAHQAkAIASAUQASAUAGAdQgJAUAAACQiFgJgRAAQgVAAglALQgdAIgZAJQgFgFgGgsIgDgCIgMAfQgEABgRgGQgSgFgGAAQgNAAgJACQgSAEgeARIgMALQAGhCBHgjg");
	this.shape_75.setTransform(1.1,-29);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#526139").s().p("AhDAfQABgEgDgNQgCgMAagRQAagTAgAAQAbAAAMAGQANAHAFAQQhWAQgaAPQgRAJgCAAQgGAAAAgEg");
	this.shape_76.setTransform(-13.6,-20);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#B3E4E6").s().p("AgXBeQAKgFAngNQAhgLAAgGIAAgBIAGACQAHAYgUAOQgUAPgjAAQgKgBgKgSgAhKBKIgMgFQgJgFAAgFQAAgKACgJIAHAEQAAACANABQANACAGgCIgNgJQgcgXgSgqQAAgnAygYQArgWA0ABQAQAAAVAOQAUAPAUArQAUAog8AgIAFgGIgGACIgCgDIAAgIQAAgrgCgKQgHgngegGQgDACgBAGQATA4AAAOQAAAegKAQQgJAOgNAAQgKAAADgCQALgrgngpQgEAEgBAHQAPAbAAAiQAAAMgLAJQgOALgaAAQgKAAACgCg");
	this.shape_77.setTransform(-7.9,-7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[]},1).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},1).to({state:[]},1).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39}]},1).to({state:[]},1).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},1).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]},1).to({state:[]},1).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51}]},1).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57}]},1).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_63}]},1).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69}]},1).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_72}]},1).to({state:[]},1).to({state:[{t:this.shape_77},{t:this.shape_76},{t:this.shape_75}]},1).wait(1));

	// Layer 1
	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AAcETQgMgPAAgJQABgMAbgTQAbgTgZgVQiCg2g6gqQg6gqgHgaQgHgZB0iQQBziQAPAGQAPAHAOASQAPARAUAQIAIADQAFADACAEIgCABQAKAEAAAGQABAFhOBSQhLBRgdAnQAhALBFAYQBIAXAqAZQArAYAKA+QAJA9gqAgQgqAggsADIgKAAQgkAAgOgRg");
	this.shape_78.setTransform(14.8,-4.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgZELQglgRAAgcQAAgMAFgFQAEgEAOgFQiPjWAAgzQAAgoASgTQATgUB+hAQB7hAAMgCQAMgCAYAfQAVAcAIAdQgEADgrARQgsARh0BCQARAnAsAsQAuAqAbAFQAvAIAQAcQAMAUAAAuQAAApgFAPQgFAOgPAHIgRACQgMAAgHAKQgJAPgEADQgFAFgJAAQgMAAgSgJIgJAXQgIAKggAAQgQAAgZgMg");
	this.shape_79.setTransform(5.1,-6.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgbDEQgDgFgKgkIgbAHQgNADgFAAQgrAAgggSQgpgXAAgqQAAg7BbhMQBZhKCghVIAIACQAEADABAGQAcAdAIANQAMASACAgQgFAagWAJQgbAHgKAFQATAUAUAiQAZAnAAAXQAAALgFAJQgDAHgLALQgJAJgSACQAAANgCADQgQAWgOAIQgLAGgIgFQADAegeASQgZAPggAAQgjABgNgSg");
	this.shape_80.setTransform(4.5,-12.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("ABbDNIgUgCQhFgchIg2QhKg2ABgpQABgnA/hcQA/hbAMgGQAKgFAEAGQALAFARAiQARAgABAPQAMgDABADQAAAHgWAlIgrBFIBIA2QA4AsAMAMQgDACgHAAIgMgBIgFgBIgWBYIAMAIQgCABgIAAIgGAAg");
	this.shape_81.setTransform(17.8,-14.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AhSB3QgXgoAAgmQAAgeAqg/QAmg5BAhCQADAIAEAJIgBAEQAUAAAOAWQAOAVAAAfQAMgDABACQAAAHgWAlIgrBDIANAMIgVAUQgZAcgYA4IgKAeQghgSgXgng");
	this.shape_82.setTransform(14.1,-17.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AAyDKIgzhAQgIARgoAJQgVADgTABQgzAAgagpQgSgfAAgkQAAhnDGjCIAPAQIAAABQgBAEAGAAQAMAAAkAdQAjAbAFAKQgLANgMAWQgLAUgKAKQAHAFAnAqQAoApAMAfQAMAegOAVQAHAOACAVQADAVgDAJQgCAKgNAKQgNAKgIAMQgNAYgHAJQgNANgcAAQgGAAgegkg");
	this.shape_83.setTransform(15.1,-12.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AiNCAQhMhOAAgjQAAghASgzQASg0AMgXQAMgYAlgVQAlgVAmAGQAnAHAPARQARARAAAJQAAAIgFAQQgFAPgFAIQAIgDARADQAYAEATAZIA7hoQA0AeASAkIAKAYIgFAaQguClhLBEQgsAngsAAQhFAAhMhOgAgZACIAXAiQAHgNgDADIAggkIg7AMg");
	this.shape_84.setTransform(2.2,-18.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("ABlDEQhFgBifhpQgyAsgaAQQgHAEgNAFQgOAGgGAAQgWAAgPgOQgQgPgBgXIADgTQheAQAAhLQAAgVAIgOQALgQAVADQgNgOgKgdQAAgZAMgJQAKgIAaAAIAkAEQAcADAEACIgDAAIBAADQA5AAAUg2QALggAEgGQALgRAWAAQAcAAAPAMQAPAMAAAWQAAAKgTAaQgTAaAAAFQAAASBAA6QBDA4AOAEQBchoAUgbIBYhjIBdAxIhWCEQggAxgzBHQgyBHhEAAIgBAAg");
	this.shape_85.setTransform(-7.7,-17.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AAyCmQhBhOgihaQhBArgzAwQgzAxgYAAQgZAAgfgHQgfgIgIgIQgHgHABgKIABgLIgIgQQgFgKAAgDQAAg+CHhtQgJgJAAgLQAAgmAzgfQA3giA9ADQA8AEAWAPQAZAQAOARQAOAQBYDQQA1gtBHhsQAUgeAHgBQAKgBAFAjQAJAVAHAXQAJAcAAALQAAAZgYAoIhBBkQgeAwguAaQghATgXAAQgZAAg6hEg");
	this.shape_86.setTransform(-9.8,-21.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AghCqQgLgTgVg1QgSgtgOgUQgRAIgIABQgaAAgcgPQgogUAGghIAMglQgMgegugHQgmgGAAgsQAAgqAzgeQA2ggBWABQBQAAAwA1QArAtADA6QAEBcALAgQAPAcAIAcQAvgxAziFQAkAtAqAZQAUAUgVBOQgaBmgxAtQgqAmg9AAQhfAAgshUg");
	this.shape_87.setTransform(-3.6,-24.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgvE8QghgwgmieQgMgygIgXIgJgbQgEgLgXgjQgYgjgEgyQgEgxA6gIQAHgBAUgRQATgRAigFQgEiSA2AAQAWABAQAVQATAXAAAqQAAAOgGApQgFAqgBAWQAAAWARAgQARAfACAiQADAhgWAmIgZAnIgDgJIAKAzIAWBLQAUgkAXhAQAXg+ADgFQACAEABAHQAAADAGAAQAZAAAbAvQAZArAAATQAABag4BGQgxA8gtABQhEAAgggxg");
	this.shape_88.setTransform(4.5,-36.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AAmFpQg9gDgpg8Qgpg8gWh1QgKg0gfhgQgbhVAAgMQAAggAQgOQAMgKAmgJQADAAAigRQAdgOAUAAQAGiMAzAAQA9AAgJBnQgVB2AAAdQAAAGAMAZIAHAUQAFA8gYAeQgTAYgTgEQABANAOA3IAOA+QAPgYAXhFIAahMIAHAFQAIAGAAADQARANARAQQAiAgAAAZQAAAFAFgHQAGgGACAbQABAbgvBnQgvBkg+AAIgDAAg");
	this.shape_89.setTransform(6.9,-35.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("Ag8EkQgfg2gmiTIghh5QgchngBgTQgBgTAdgXQAcgXAogCQAogBAKgGQADg8ALggQAPgpAbAAQAgAAAQAiQAKAYAAAaQAAAKgYCgQAAAFAUAsQAEAygKAXQgPAogkgCQACAnAMAtIAOAsIAhhFQAIgSAMguQAmAkAgAYQAUAOADAHIgBAIQAAAFAGACQAGABgBAMQgCANgtBdQguBeg9ABIgCAAQg6AAgmhEgAAACFQAAABAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBIAAAAIAAABg");
	this.shape_90.setTransform(6.3,-40.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AA/IRIhGgsQgcgSgfhBQgPgvgPhNQgMg8gDgXIgIhZQgHhQgFgkQgFgsABggQgBgVgfg1QgGgLgigyQgMgRAAgWQAAgcAbgYIApglQASgYAYgMQASgIAAgGQAAgJgIhVQAAgrAXgTQAOgLAOAAQAgAAAOAlQALAjAJBnQAHBTAXAWQANALACAFQAGAMAAAdQAAAkgJAlQgIAjABAtQABAngCAiIgDAgIAFDJIAAAAQABAAADAfQACApAIAiQACAHASAcQASAbAEAFQALAKAxAoQAsAjAFAJQACABgKAAIgKgBIgJgDQADAYgYARQgKAGgEAFQgHAGAAAKIgGAEQgDABgGAAQgJAAg/gmgAASgYQAEAKgBgEIAAgJg");
	this.shape_91.setTransform(5.5,-77);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("ACPLIIkwuSQgTgkgngrQg7grAJhvQATgzAmgSQAmgTABgJQAAgIgbgzQgag2AAgVQAAgPAKgPQAOgXAdAAQAlAAAsA3QA1BEATBtQAKAwATAWQAOAPAAAyIgFAfQgFAbAAAFQAAAfAxCnICcI0QAtCTAIAkIAAAAQgHgNgDAAQgRAigsAXQgMAGgoAOg");
	this.shape_92.setTransform(3.9,-89.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AhtD0QhUj4AAjPIAIiKQAAgCgRgWQgKgOgIgXQgLgcAAgYQAAhDATgkQAKgWAhgeQALgKAogtQAvgoBBAAQAgAAANAQQAMAOAAAhQAAAZgzBKIAAABQAVACAPAUQAPASAAAaQAAAdgYA1QgYA0AABdQAAFZBzEnQAfBSAvBcQAkBGAAAHQAAAHglAWQgpAagZgJIgEAgQiSjQhYkFg");
	this.shape_93.setTransform(8.3,-89);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("Ah9E3Qg8i7gFiBQgFiDAHifQAGigAJgLIAKgOIgKhKQABgyATglQAWgqAogTQAvgVAbAJQAPAFAUALQARAEAVAVIAYAYQAsgFAUARQASAQAAAnQAAA2gLAcQgLAdgZAJQgTAGgJAFQgQAHgTARQgVATAAAGQAAAmgDAOQgNBMgFAyQgIBIAABHQAAD6BPDaQApBxBHBzIgUgIQABAigeAcQgpAmgGALQiijcg8i7g");
	this.shape_94.setTransform(10.9,-87.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AiUFKQgpiLAAjgQAAhsAOhTQAHgpAGgWQAAgagLgvQgMgvAAhDQAAhkAbhAQAfhNBAAAQAGAAABACIAEAGQAHAJAGAJIAJgBIARgBQAMAAAJAJQANAKADAQIAKAgQAVAAAMACQAbAGAKAdQAJAbAABFQAABXgUAjQgRAdgZgLQgJAYgMBOQgTB8AACFQAAC7A0CIQAVA1BpC+IhWCOQi6ijhBjfg");
	this.shape_95.setTransform(9.3,-84.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("Ag0E/QgPgHgQgOQgRgNgTg5QgTg4gDgXIgShgQgOhHgMgcQgCgGgTgXQgRgeAAgsQAAg/APgkQAQgnAygQQAygRAngCQAogDAQATQARATAAAwIANAaQANAdAAAQQgBARgDAKIgIAeQgGAUgUAOQgOALAAALQAAAxAIAwQAMAvACARIAAACQAXgOBah1QBPBWAQgDQgGAFgSAiQgTAigtBCQgtBCgdAXQgdAXgVAEIgRAHIgUACQgRAAgKgFgAgSE1IABgBIgBAAg");
	this.shape_96.setTransform(3,-35.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AhrDxQghg9gah9QgIgkgEgaIgDgUIgVgcQgTgfAAgdQAAg3ALgfQASgyAxgXQAfgPAlgKQAbgIAKABQAXAAARANQAUAPAEAUIASAqQAFANAAAaQAAAugUAdIghApIAFBNIAMA8IBDhWQA/hVAIgIIADACQACABAAAHQAAAKgDAFQgFAHgGAJQAOAAAgATQAhATAAAIQAAAFgEgBQgFgBABAFQAAAFAEADQAFADAAAFQAAANgLAWQgLAWgoBGQgnBEgwAwQgzA0gjAAQAKAAgJgRIgEAQQgCAFgIAAQguAAgjhCg");
	this.shape_97.setTransform(3.5,-26.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgpCZQghAJgKABQg1gBgggXQgggXAAglQAAgcAcgsQAegrAhgTIBrhNICOhTQAXAAAVAuQATAoAAAZQAAASgVAIQgcAHgRAHQAIAPAjAtQAWAaAAAdQAAAUgNAPQgNAQgTgBQgGAPgHALQgOAWgSAAIgGgBQAHAUgfAXQgiAZguAAQgfAAgLg/g");
	this.shape_98.setTransform(6.3,-10.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("Ah3EOQgggrgXhhQgFgXgGhKQgFg2gJgOQgJgNgIgQQgIgRgEhIQgFhJA+g0QAtglA2AEQA3AFANAOQAMAPADAVQADAVAHAKIALAQQAGARAAATQAAAegNAVQgIAOglAtIACAeQACAdABAAQAAAcAMBRQBLhGAkgjQAbgcAXgfQAQAFAAAKQAAAFgHADQgGAEAAAFQAAAIARAJQAXAKARAcIAJANQADAFAAAHQAAAig7BEQhLBWgwAjQgwAkgrAAQgtAAgfgqg");
	this.shape_99.setTransform(1.3,-33.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AiXDjQgbhBgEhPIgBgtQgEgugKgiIgMgZQgLgUgFgtQgEgtAYg0QAZg0AegIQATgFAggMQATgHARAAQAggBAbAMQAbANADAQQABAFgCAeQgBAOAKAQQALARAAAJQAAAngLAUQgHALgrA1IAAAeQABAdABAAQABAiAHBMQAtglAxgtQA3gwASgZQAPAFAAAKQAAAFgGADQgHADAAAFQAuAsAFAHIAHAMQAFALAAAGQAAAVggAnQgLAOhSBaQgfAigvAZQgsAagfAAQg+AAglhYg");
	this.shape_100.setTransform(0.7,-35.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AiBD4QgcgygPh0QgHg1gBhcIgKgRQgIgTAAgcQAAg0Ang0QAigtAegIQAMgDAnACQASACAFgGQAGgGAKAAQAnAAAkARQAxAWAAAoQAAAFgEAHQgFAGAAAFIARAnQAABDhBAlQglAWgIAHQgSASAAAYIABAjQAIgKAwg4QAzg8ALgRQARADAAAKQAAAFgFAEQgGAEAAAFQAAADAVANQAaAQASAZQAKARAAADQAAAMgNAXIg2BcQgqBGg3AoQgyAmgtAAQgrAAgagwg");
	this.shape_101.setTransform(4.4,-31.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AAIDOQgIgDgpgEIgzgHQhCgPgbglQgVgbAAgvQAAgjBdhgICdinIAWAWQASAAARAiQAOAbAAAIQgBAFAFABQAFAAAAAEQAAAHgaAbIhEBDQA3gMAHAAQA5gBAiAlQAYAXAAAXQAAAOgIAKQgIAJAAAJQAAAMgIAsQgFAcgUAaQgfApgzAAIhEgbg");
	this.shape_102.setTransform(13.3,-13.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgPEGQgcgUAAgRQAAgHAJgTQAJgUAIgFIgVgZQgJgJggABQg5ACgng4QgfgsAAgmQAAhHDbifQBDg1AQgDQAGgBAEAGIAIALQAXAVAMAbQAIASAAANQAAATgwAkQhCAwgmAgIAEABQBHgOA3AcQBIAkAABhQAAApglAyQgcAmgSAKIgpAeQgYAQgfAAQgSAAgZgUg");
	this.shape_103.setTransform(7.9,-5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AhnDRQgSgKAEgTQgQAGgLgBQgpAAgLgrQgFgXgBghQgIgdgIgrQgHglAAgJQAAhmBOgvQA5ghBZAAQDIgBAAAuQAAAFAIAWQAKAXACAKIAHAgIAAAFQAAABAAAAQgBAAAAAAQAAgBAAgBQAAgBAAgCIiigCQgegBgZAGQgcAHgOALQATAFAgAdQAoAhAAAbQAAAhgPAdQgUAogFAVQgEAQgOAOQgcAYgvAAQgPgBgMgGg");
	this.shape_104.setTransform(-0.6,-15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_78}]}).to({state:[]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_91}]},1).to({state:[]},1).to({state:[{t:this.shape_92}]},1).to({state:[]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[]},1).to({state:[{t:this.shape_104}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-33.5,41.9,58.5);


(lib.cup34rarmr01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#758A51").s().p("Ah/CGQghgbAEgUQAFgVAjgvIA7hMQAZggB2huQAAAHAkALQAkAMgBAMQgBAMhoBsQhnBpgMABQgLABgKAFIAKAHQA3AaAvALQgNAHgLAfQgIAeADANQhcgogigag");
	this.shape.setTransform(11.4,-12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B3E4E6").s().p("AhEBSQgLgIAAgIQAAgFAHgHQAJgKAMAAQAGAAAEAFIAMAMIAIAGQgdhCAAgBQAAgkAegdQAUgVAMgDQANgDAGADQAZAQAOApQAKAcAAAOQAAAGgGAIIgRAWQACgIAAgRIgBgTIgFAAIgJAgQgIAZgJAJIgMAGIACgHIABgIQAAgHgDgKQgEgIgDgEIgFgFQALApgPAPQgKAKgbAAQgRAAgNgJg");
	this.shape_1.setTransform(26.7,13.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#526139").s().p("AgwAjQgRgGAAgHQAAgjAXgVQASgQASAAQADAAAZALIAsARQgeAFgRAZQgIAMgKAfIgxgQg");
	this.shape_2.setTransform(19.6,5.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B3E4E6").s().p("AhWB4Qg9gPAAgLQAAgOAFgHQAMgMAiABQAaAAAHAUQASgVAJgQIAjg3IAFgHQAOgRABgFIgSACIgBgwQAAgyAZABQANAAAKAnQAGAbANBfQAHgNAUgMQASgJAKAAQAMAAAIAHQAGAHABAFQAAAKgiAPQglAQgKAaQgNAjgQAMQgOAKgagBQgaAAg7gPgAhyAAQgXgXABgbQAAgHAFgFQAHgHAKAAQAnANAZAdQAWAWAAAEQgBAEgGAGQgMAMgHAKQgkgGgYgZg");
	this.shape_3.setTransform(-21.9,0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#526139").s().p("AgLgMQAQAKAHAFIgXAKg");
	this.shape_4.setTransform(-13.3,-1.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#758A51").s().p("AjIBTQB1hhBNgrQBKgqBjgvQAbAcAHAqQhEAliABfQg+Axg1AqQgIgBhSg/g");
	this.shape_5.setTransform(5.6,-14.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B3E4E6").s().p("AhMBwQgIgOACgKQACgLAUACQAUACAPADIADAAQgagbgrgJQgggHAAgMQAAgxBWg3QBGguAUgCQAUgBAbApQAcAqgEATQgFAUgUAFIgHAEQAAgqgsgeIgLAEIgEAEIAcAYQATAYAAAlQAAAQgNAJQgIAFgHAAQgNAAg1hGIgGABQgBgBAAAJQAAAHAVAdQAWAdAAAUQABATgUAKQgRAKgbACIgIABQgUAAgHgMg");
	this.shape_6.setTransform(12.4,-3.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#526139").s().p("AgdA0QgBAAgBgIQgBgIANglQANgmAmgMQgWAPgIAlQgGAnAFAKIgWACIgFAAIgDAAg");
	this.shape_7.setTransform(-1.6,-3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#758A51").s().p("Ai1CaQgKgNAAgaQAAgdAigmQAdgfBYhGQAlgeBFgoQA0gdApgRIAJgDIACAHIAOAwIAIAfIgEAOQhLAZhYAvQhLAqgEAAIg2gMQgJACgCAFQgBAFgBABIAHAHQAEADAPADQgTAPgNAmQgOAmgBAYIAAABIgEABQgZgEgKgPg");
	this.shape_8.setTransform(7.7,-14.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

	// Layer 1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAeENQgMgPAAgJQAAgMALgSQAJgQALgLQgVgOgxgZIhXgqQhpg3AAgvQAAgOAggwQAfgvAeggIBNhUQA6g+ARAAQALAABGA1IgCABQAKAEAAAKQAAAMhQBWQhKBTgbAWQA1AUA+AUQA/AVAuAdQAtAdAEBbQADAUgdAbQgeAag3AIQgRADgNAAQgeAAgMgOg");
	this.shape_9.setTransform(14.6,-3.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AjyDeQhRgUAAgeQAAgiAYgHQAHgCBCgEQgLgDgagTQgogcgGgmQgGglAKgHQAIgGASAAQAlAAAkAjQAHAHAbAkIAHgSQgJgmAAgMQAAhEAlAAQAQAAAGAFQAJAJAQAkQBhhXCChEQBLgmA0gSQA1BeAHAAQAGgBh7BaQh8BZgiAgQgiAhg6A8Qg8A9gdAFQgIACgLAAQggAAg7gLg");
	this.shape_10.setTransform(-6.2,-7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgVDOQgPgOgFgnQggAGgWAAQhqAAAAhQQAAgeAbgkQAagiAxgmQAwgnBTg5QBUg5AagDQAZgDARAqQASArAAASIAAASIhCAiQAXAZAOATQAcAiAAAlQgEAZgJAJQgCADgNAGIgRAGQgRAggDAEQgLAOgUgDQAJAbglAWQghATglAAQgSAAgKgKg");
	this.shape_11.setTransform(6.3,-10.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9}]}).to({state:[{t:this.shape_10}]},1).to({state:[]},1).to({state:[{t:this.shape_11}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.7,-32.6,42.9,57.3);


(lib.cup34rarml02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B3E4E6").s().p("AgFBPQgagLAAgDQAAgHAIgYIAJgZIgEgFQgFAFgMAUQgLATgDAGQgPgEAAgKQAAgQAFgNIAMgdQABgFgHAFQgIAFgHANIgHALQgKgcATgdQATgeAegLQAcgKASATQAWAWAAA4QAAANgCALQgEAQgIAKQAJgGAFAAQAGAAALAHQAMAIAAAHQAAARgWAGQgLADgOAAQgMAAgagNg");
	this.shape.setTransform(-19.3,10.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#526139").s().p("AgSgCQgPgegjgFIAlgMQAfgJAKAAQAmAAAOAkQAHATAAARQAAALgPAIIg2AaQgKgvgIgOg");
	this.shape_1.setTransform(-11.5,3.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1F26").s().p("AhFAAQAcg2AgAAQAJAAAYAQQAjAWALAgQgTgHgWAQQgRAPgGAPg");
	this.shape_2.setTransform(1.1,-16.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#758A51").s().p("AANCZQgLgigIgIQAxgNBBgZIAIgIQgXAAgRgJQAGgNAGgGQAEgFAPgIQARgJAHAAQARAAASAVQAWAYAAAiQAAAMgJAKQgaAcg7AaQgfANgpAOQACgLgLghgAhvheIhMg2QAUg6AxAMQA0AMBlBmQgJAAgVAWQgSAWgDANIhfhHg");
	this.shape_3.setTransform(-4.7,-15.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1F26").s().p("AgkAYQgWgPAAgIQAAgPAJgTQAKgTAJAAIBZAnQgNAEgNAcQgLAYgBAKQgjgPgWgOg");
	this.shape_4.setTransform(-1.4,-24.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B3E4E6").s().p("AAbBgQgOgCgEgMQgDgMAAgMIAJhHQgEgGgDgCIgEAAQgCAigOAcQgMAXgGAAQgOAAgIgLQgJgMAAgXQAAgdAGgQIAGgLIgJgCQgLALgEAJQgEAIAAANQAAAKgLAiQgGgCgGgEQgKgIAAgLQAAhMAOgXQAKgQAhAAQBOAAArATQArATAAAjQAAAOgjAYQgkAaAAAEQAAAGACAEIACAEQAQgEAXgQIAFABIgBgBIADABIAAAAQAFACAEAPQADAPgeAMQgcALgOAAIgDAAg");
	this.shape_5.setTransform(-2.6,10.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#526139").s().p("AARAIQgXgIg9gEQAIgbAoAAQApgBAuAgIgQAhQgJgRgagIg");
	this.shape_6.setTransform(4,-0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#758A51").s().p("ABMB8QgTgJghACIgJACQA2hBARgxIgHAHQgIAHgGAAQgCAAgMgIIgUgLQAZglAGgVQAFgVAnAXQAnAXAOATQAPARADAYQADAYgOAiQgNAhgdAnQgggbgQgGgAhthAQgMgFg3gJIAghOIBfAjQgjASgFATIgGAZQgEAAgKgFg");
	this.shape_7.setTransform(-0.3,-17.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D1F26").s().p("AgtgEQAAgRAEgIQAIgTAbgPIAjA2QAPAUACABIhDAzQgYgyAAgRg");
	this.shape_8.setTransform(-5.5,-19.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#758A51").s().p("AiFC4QgJgWAAgVQAAgUAYgQIAAgBIA6gfIgmAWQBFgaAcgQIA8glQBJgiAFASIAGAfQAAAMgIAMQgHALAAAFQhuBliUAsQAGgJgJgXgAg+iMIgBgGQgIgrA8gaIAxBHQgPACgQAhIgLAiQgTgYgngpg");
	this.shape_9.setTransform(-11.2,-12);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1D1F26").s().p("AAAgOIAbAXIg1AGg");
	this.shape_10.setTransform(-2.1,-27.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#758A51").s().p("AgICNIADAAQAWAFAcgDQArgDAWgUIgCAJQgSAWgzAMQgVAAgagWgAhjhhIAVhBIAgAbIgfAmQgGAIgaAMQADgDAHgRg");
	this.shape_11.setTransform(1.3,-16.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#526139").s().p("AgtBCIgIgCQAkgIAbguQAZglAAgXQAAgKgCgFIAVA6QgNArgdASQgTAMghAAQgKAAAFAAg");
	this.shape_12.setTransform(8.2,-10.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B3E4E6").s().p("Ag/CeQgKgKAAgVQAAgkAVgiQAggtAUglQAAgDgEgBQgdARggAxQgfAxAAAZIABALIgMACQgGAAgFgGQgHgHAAgMQAAgkAdgwQAkg6BGg/IgBgDIgGgBQgZAEgmApQgmAoglA9IgHgJIgCgLQAFggAzhBQBAhSBBAAQBRAAASApQAQAmgoA7QgLARgsAjQglAhgNAdQgTAwgMAOQgLANgVAAQgFAAgGgGg");
	this.shape_13.setTransform(-4.9,-8.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1D1F26").s().p("Ag+ABQAAgHAMgSQAOgUARgLQAvgfAjBBQghAYgVAZQgUAaADAMQg2g7AAgGg");
	this.shape_14.setTransform(-3.7,-14.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#758A51").s().p("AAFCgQgFgCgagSQgdgSAAgCQAAgKAbgvIAQgVQAGgFAJgHQALgEABAAQAHAAAQAQIgNAiQAJAAAGgCQAWgJAJggQA0BGAwAAQAJAAAGgCQgrAxgOAJQgVAOgqAAQgxgIgMgFgAivgJQgKgIAAgRIALg9QATg6AYgUIASAuQATAuAgAiQgXAJgbAUQgdATgFAMQgEgFgZgRg");
	this.shape_15.setTransform(2.9,-18.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#526139").s().p("AgjAZQgcgaAEgoQACgNAHAEQAmBeBJgXIgDAIQgIAKgMAHQgJAFgDAAQgjAAgagag");
	this.shape_16.setTransform(17.8,-15.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B3E4E6").s().p("AAyCEQgPgJgLgMIgIgKQAgAEATAAQANAAAQgJIAGgIIhLgKQgWgEgJgKQgNgNANgZQAMgdA0AAQAxAAAXAdQAPAVAAAZQAABFhMAAQgHAAgOgJgAh/AgQgTgHAAgPQAAgIAMgJQAQgPAYAAQAHAAA5AXQgKANAAAQIACAQQhAgEgZgKgAgZgQQgNgLAAgOQAAgOAMgOQAQgRAWAAQAXABAiAVQAiAVgRAWQgZgFgZAGIgkAKIgHABQgJAAgJgHgAhSg7QgLgMAAgNQAAgRAQgRQAXgWArAAQAVAAAUAJQAiAOAKAiQgMgJgZgJQgZgJgNAAQgXAAgVAQQgYAUAHAcIAEAJIgYgWg");
	this.shape_17.setTransform(13.8,-29.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B3E4E6").s().p("Ai/B8QgYgTAAgTQAAhOAegmQAWgfAaAAQAKAAAHAHQAIAHAAAOQAAAEgPAbQgOAXgDADIADAEQAOgFAfgcIA4g4QAYgZAfgWQA4gmAsAAQAdgBAMAYIg7AXQgyAbAEABQgCAAgJAFIgpAcQg2AkgHATIABAHQARgDA/hBQB8hJBCAHIAHAYQgUAOgOAHIg3ATQhHAZgpAjQgXAWgFAPIABAIIABABIAIAAQADAABGg1QBPg0AgAAQARABAJAGQAFADABADQAAAliRBJQiJBHgyAAQgrAAgdgYg");
	this.shape_18.setTransform(23.5,-15.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#1D1F26").s().p("AgSAtQgTgSgZgeIAogiQAZgVAQAAQATAAAVAdIgMAJQgHAEARAUIAGgBIgEACIABACIgDgBQgNAJgUARQgXAUgCAHQgCgCgPgMg");
	this.shape_19.setTransform(-7.1,-10.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#758A51").s().p("AA7COQAPgKAIgLIANAtgAhehiQBlhDAXAAIAJABIACABQgPAhA8B6QgLgFABAEQgZAGghARQgcARgNARgAApijIAAAAIAAAAg");
	this.shape_20.setTransform(-12.1,-17.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#526139").s().p("AgmAdQghgWAAgeQAAgOAHgGIAIgGQARAZARAdQAVAVBJANQgHAEgMAEQgKADgEAAQgtAAgggVg");
	this.shape_21.setTransform(5.3,-2.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B3E4E6").s().p("AhkBDQgZgsAAgxQAAgtArgcQAXgOAXgFQAGAAACABIAAABIAFACQhIA5ABA3QgBAIADAQQAEAAAFAIIAHAHQgSguAng0QAngyAuAAQAZAAALATIAEAVQAAAGglAfQgkAgAAASIACAOIACAXIAMABQAOhHAggYQAQgMAdAAQAWAAAAASQAAAVgmAhQgmAkgBAKQgCATgOAPQgTAUgjAAQgxAAgeg0g");
	this.shape_22.setTransform(-6.3,-5.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#526139").s().p("AgSATQABgSACgEQADgRAOgFQASAPAAAKQAAAEgOAIQgKAJgPAFg");
	this.shape_23.setTransform(5.5,-1.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1D1F26").s().p("AgRAlIg2gQQAJgKAWgiQANgVAKAAQArAAAuAvQgGADgzAnIgggIg");
	this.shape_24.setTransform(0.2,-21.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#758A51").s().p("ABICGQgDgEgUgRIAPgaIACgHQAAgzg0ALQAKhjA4AkQAVANARAZQAQAbABATQAAAhgMATQgMASgjAUQgBgNgDgEgAh4gkQgMgKgBgGIAbhiIBPAvQgdACgZAiQgRAXgFASQgEgBgNgJg");
	this.shape_25.setTransform(1.9,-16.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B3E4E6").s().p("AgCBoQgMgHAAgRQAAgRAbhEIgBgKQgBgBgHAAQgEAAgTAbIgWAjIgCAHQgBADgGAAQgQAAgHgLQgFgGAAgIIAGgaIAShCQgMAAgKAVQgNAigKAXIgUgHQgHgEAAgOQAAgyAdgdQAWgWATAAQAsAABCAlQBJAoAAAhQAAAYgVALQgmANghAOIgKAFIAvAEIADARQgGANgEADQgIAFgXAAQgbAAgJgGg");
	this.shape_26.setTransform(-12.5,-1.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#526139").s().p("Ag8AoIgQgrQgKgeAYgLQAZgMAsACQAuADAOARQANAQAAASQgDA1hCACIgMAAQg1AAgGgPg");
	this.shape_27.setTransform(-3.3,-3.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#758A51").s().p("AAfCyQABgBAGglQAGglghgUQAugIALgEQAbgJAAgUQAAgGgBAAIgFACIgVAKIgMAGQgLgDgKgGQgVgMAAgPQAAgaAXgQQAUgOAeAAQAjAAAhAnQAhAqAEAaQAEAag6AmQg6AlgZAEIgYAEIAAAAgAi/hmQABgjAZgUQAUgQgCgEIB2BLQgLAEgUAWQgUAWgEALg");
	this.shape_28.setTransform(1.7,-17.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#1D1F26").s().p("AgyATQgQgMAAgCQAAgOAGgOQAMgaAcAAQAnAAAxAqQgaAAguA5QgagQgUgPg");
	this.shape_29.setTransform(1.8,-21.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#526139").s().p("AgrAMIgWgIIgDgBQAlgPAkgFQAygGAOAWIhRAUQgLAAgUgHg");
	this.shape_30.setTransform(18.9,5.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B3E4E6").s().p("AAYBMIgggMQAagrAjgQQAVgHA5gVQgJgIgOAAQgoAFg+ArQgcAXgYAWQgeAAgZgSQgWgQAAgSQAAgWBMgOICIgXIgigGIhMAKIAEgIQAKgIAegGQAcgGATAAIAMACQALACAJAFIgBABQgIgEgBACQAMAKAGgEQAGgFAdgLQAegLAVADQAWACAAAiQAAAkghAnQgvA5hSAAQgGAAgagJgAiyAaQgVgKgLgQQgLgQAJgMQALgOAjAAQAZAAAKAFQAIAGAGABIgRAcQgLAXAKANIgKABQgQAAgRgJg");
	this.shape_31.setTransform(6.6,16.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#758A51").s().p("AAFBbIgyg/QAAgWAZgQQAUgPAPAAQAQAAA1AsQBEA8AuBUQgUgGgKAAQhOATgVANQgKghg2hBgAi0hdQgTgWACgPQACgPAfgrQA3AqAMAMQANAPgOAKQgRAdgSAbQgcgSgTgWg");
	this.shape_32.setTransform(4.6,-14.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#1D1F26").s().p("Ag7ACIAZghQASgbANAGQAMAGAzAxQgIAEgaAWIgbAZg");
	this.shape_33.setTransform(-1.2,-18.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#1D1F26").s().p("AgugMQAAgNAYgLIAcgNIApAyQg0AZgHAYQgigsAAgSg");
	this.shape_34.setTransform(-7.1,-10.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#758A51").s().p("AgNBLQghgsAAgQQAEgPAJgLQASgbAZAAQAJAAA5BBQBXBnARATQgUAAgaAOQgmAVgKAoQgshHg3hOgAifh7QgUgPAAgDQAAgeAOgYQAPgZAXgEIBIBjQgKADgXAVQgWATgIALQgOgggbgUg");
	this.shape_35.setTransform(-2,-4.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#526139").s().p("AghA1QgYgGgBgMQgBgMARgaQARgcAegNQATgIALAAQAIAAAIAMQAIALAAAIQAAAGggAhQgfAjgXAAIgGAAg");
	this.shape_36.setTransform(13.7,16.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#B3E4E6").s().p("Ai2BeQgKgIAAgMQAAgTAvgQQAXgIAogLIgCAAIAugoIAyg1QAbgdAIAAQAXAAAAAWQAAAOgQAWQgQAYgrAuIADACQACACAEAAQARAAA9gsQA9gvAJAAQAVAAAAAaQAAAegsAXIhMAjQACADAIACQAIADAHAAQATAAAjgMQAagJAQgHQAFAAAHAGQAHAIAAAJQAAAWgoAHQgMADhcAHIgCAAQAGgKgCgKIgBgEQgSANgRAFQgSAGgiAAQgTAAgVgHQgVgGgLAAIgLAKQgMALgNAAQgZAAgMgJg");
	this.shape_37.setTransform(22.5,21.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#B3E4E6").s().p("AATCJQgygkgOgIQg5gfgPgOQgcgaAAgmQAAgFAEgQQAEgQAAgFIgUggQgUggAAgDQAAgYAYAAQAdAAALAOQAFAGAHAaQANAtBIAAQAwAAAugOQAugOAKAAIAQABIACAEQABACAAAGQAAAMgPAQQgXAZgrAAQgQAAgJgHQgHgFgCgGIAAACIg0BOIAAABIAGAAQAMAAANgPQAOgOAHgXQAKADBXAJQArAGAAAXQAAAVgPAJQgNAJgfAAQgPAAgrgPQgsgOgFAAIgMAPQAhAPAnAOQAVAKAAANQAAAYgLALQgHAGgGAAQgfAAgTgNg");
	this.shape_38.setTransform(39,-24.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#758A51").s().p("AAMCeQg/gfAAgSQAAgRASgWQAXgcAdAAQALAAAcAdIggAnIAFADQACACAHAAQAPAAAagaIBOhSQAMAhAmAUQAbAPAQAAQhDBLgqAYQgWANgcAAQgUAAg9gdgAj7h1QAFgQAjgaQAegXAOgEQA2BnAoAoQgsAFgjA+g");
	this.shape_39.setTransform(5.3,-17.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#1D1F26").s().p("Ag1AZQgMgOAAgFQAAgUAQgXQASgbAZAAQAYAAAOAPQASAYAQAQQgjALgGAGQgEADgaA2QgfgVgRgTg");
	this.shape_40.setTransform(-1.1,-13.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#526139").s().p("AgYAPQgagVAAgSQAAgKAGgGQAKAfAlATQAUALAcAJIgHAGIgEAEIgPAAQgYAAgZgZg");
	this.shape_41.setTransform(28.4,-16);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#B3E4E6").s().p("AATCZQgIgEgOgJQgQgJgQgRQgOgOAAgCQAAgHgQgHQgVgHgMgFQgygYAAg3QAAgKACgMQACgKAFgLQADgIAAgGQAAgFgDgDIgCgCQgTgngHgHQgDgDAAgEQAAgOAOgIQAMgGAKgBQATAJALAQQACADAHAZQAHAWAIAGQASAOAIADQAVAHAwAAQAfAAAmgHIAygKIASACIACAFIABAIQAAAPgZAQQgZAQgXAAIgrgFQABgLgCgGIgBADQg4BEgBAFIADABQAUgGARgWQAKgLAFgKQALAAAbAIQAeAKANABQA3AIAAAUQAAAOgHAMQgKAOgTAAQgJABg9gUIg9gTQgEAAgDAHIgBAFQA3AZAOAJQAQALAAARQAAAPgGAIQgIALgWgBQgPAAgLgDg");
	this.shape_42.setTransform(39.3,-22.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#758A51").s().p("AAJCbQhCgkAAgWQAAgOAagSQAagTATAAIASADQASAHAHARIghAmIAFADQAigGAVgUQAQgPA6g+QAKASAgAbQAiAeAQgGQgrAwgvAiQgoAcgOAAQgggBhBgigAj5h5QAAgQAhgYQAegUAWgHQA2BqAlAmQgSgDgcAaQgWAVgMAVQhgh3AAgXg");
	this.shape_43.setTransform(5,-16.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#1D1F26").s().p("AgyAbQgPgOAAgCQAAgdAWgXQAVgYAZAAQAwAtAPANQgfAJgIAGQgLAHgWAzQgagVgSgSg");
	this.shape_44.setTransform(-1.6,-12.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#526139").s().p("AgSALQgZgYgBgYQAHATAWARQASAOAqAVQgHAEgKAAQgXAAgXgbg");
	this.shape_45.setTransform(27.7,-14.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#526139").s().p("AgEA2IACgHQAFgKgHgiQgJglgWgTQAMAAAAgBIAXgBQAKAAALAUQALATADAVQAHAzgiAAQgGAAgGgCg");
	this.shape_46.setTransform(-0.2,-2.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#1D1F26").s().p("Ag/ALQAIgeASgUQALgLANgFIBNAxQgJABgZAZQgZAbgDAJQghgagggTg");
	this.shape_47.setTransform(0.4,-20);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#758A51").s().p("AAVBmQgNgggJgLIAdgNQAIgFACgHQgegKgQgKQAhgnAOgKQAdgTAWAWQAZAZAQAVQARAYAAAKQAAANgZAeQgkArg4ASQAEgOgOgkgAiThEIAQgmQAPgnAAgFIBBAjQgRAMgkA2g");
	this.shape_48.setTransform(2.5,-15);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#B3E4E6").s().p("AgNB0QgIgLAAgOQAAglASgeQAQgcAAgMQAAgKgCAGQgmAZgNAlQgGATAAAjIgHgFQgSgRgNgyQAAgLAIgNQAMgWAug+QAAgFgDgDQgWgDggAjQgkAnAAArQAAAKAEAdQgVgLgGgbQAAhAAzguQAwgrA5AAQA0AAAeAZQAfAbAAAyQAAAKgjAhQgkAjAAAJIARAoQAAAFgWAMQgZAPgVAAQgQAAgKgPg");
	this.shape_49.setTransform(-16.8,3.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#B3E4E6").s().p("AhzBfQg2g3AAhKQAAgXARgUQAPgQAkgYIALgHQgIAOgCAJIABAGIACAAQACgCAKgNQALgNARgOQAIgHAbgHQAZgHASAAQAVAAAJAIQAGAFAAAFQAAANgfAcQgRAPgbAZIBxAfQBEAVAHAXQgBAHgDAAQgSgJhMgYQhMgbgSgDQgGAAgBACQAJANAgAOIBCAXQBXAiAAAoQAAAPgJAFQgHAFgQAAQgeAAg3gYQg6gbhFgtQAMAbA5AoQBCAvA0AAQgQAegjAAQhtAAg/hAg");
	this.shape_50.setTransform(9.2,17.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#526139").s().p("Ag+AIQAPgWAbgIQAUgHAqAAQAHABAFADIAJAFQhoAfgUASg");
	this.shape_51.setTransform(-0.2,3.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#1D1F26").s().p("AguAjQgIgLAAgJQAAgfAvgWQAugWALAnIAFAHQgSABgkAZQgcAXgJAMIgKgMg");
	this.shape_52.setTransform(-6.6,-15.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#758A51").s().p("AgbA0QAAgPAjgaQAigVARAAQASgBAeA+QAeA+gFAXQhDgUhCAqQgPgugLg8gAiEhoQgDgeAigLQAhgLAiAAQgCAMAYAbQAXAdADAOQgOAAgYAOQgeARgPAaQg8g4gDgfg");
	this.shape_53.setTransform(-6.6,-14.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#B3E4E6").s().p("AhVBiQhEg/AAg0QAAguAngkQAiggA0gPQAvgOAkAIQAnAIAAAeQAAAVheAJQAWAUBYBDQAsAiAAAXQAAAGgEADIgGADQgGgHhFhBIhHhBIgHAFQAEAcBAA2QA/A2AAAfQAAAOgGALQgGAOgMAAQgRAAgSgOIgVgTQhnh1gMgXIgBAGQADAVAnA/QAsBLAkAGIgJAHIgIADQgHACgGAAQgoAAg/g6g");
	this.shape_54.setTransform(-23.5,6.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#1D1F26").s().p("AgeAjQgSgeAAgJIADgVQAHgYAVgQIBCBKQgOAKgSARIgdAeIgSgfg");
	this.shape_55.setTransform(-3.2,-18.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#758A51").s().p("AgzCVQgUgRgpgdQAIgCA4glQBCguA7hEQAVAZAJAeQAFAPABAMQAAAagUAeQgbAshHBBQgGgNgogjgAhBjEIAuAkQgKAMgFAJQgIAQgGAuQgugYAdhfg");
	this.shape_56.setTransform(-4.6,-10.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#1D1F26").s().p("AgiAqQgNgTAAgOQAAgaALgQQAHgIATgTIA6BGQgNAGg1AsIgQgSg");
	this.shape_57.setTransform(-4,-19.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#758A51").s().p("AiABrQAtgiA0ghQAugfAXgYQAggjAUgOQAKgIAFgCQARAgAFARQAEANAAAVQAAAcgGAOQgIAQgXAQQhgBKiABGgAgih4QgKgOAAgLQAAgNADgNIALg3IApAmQgRAagEAOIgJAqQgHgCgIgMg");
	this.shape_58.setTransform(-8,-7.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#1D1F26").s().p("AgzAVQgBgCAAgQQAAgUBRgrQgDAkAHARQAEAHAQAOIgyAeQgbARgKAAQgJgZgIgPg");
	this.shape_59.setTransform(7.8,-41);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#758A51").s().p("AkSB6QgDg5AeghQAQgRATgJQAFAXALAXQAJAUAAACQgJADgbASIg2AkgAhLAIQgBgDAAgFQAAgEgFgMQgFgLAAgFQAAgdAygbQAugbBCgKQBHgMA1ANQA9AQARAtIgLgGIgggLIgdgKQgdAAgYAIQgUAGAAAEQAAAMhbAfQhlAhgNAJIgDgFg");
	this.shape_60.setTransform(21.5,-41.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#526139").s().p("AgDACQgrgdgiAMIAIgDQBFgdALAAQAuAAASAOQAJAHAAAIQAAAOgLAQQgMAUgTAQQgJgVghgZg");
	this.shape_61.setTransform(41.2,-44);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#B3E4E6").s().p("AjTCOQgHgLAAgTQAAgYAogtQAmgrA6gsQCKhsBZAAQASAAAYAOQAgARAAAXQAAAigcAQQhBAkgLAIIAHAIIgCABIAGAAIAegHQAggOAOgaQAGAHAIAkQAAAJgLALQgOAPgaABQgHAAgtgNQgygNAAgIQAAgMAJgPIAagpIgFABQgcABgRAgQgMAXAAAMQAAAbAFADIAdAGQgGADgDADIgBACQgMADgKgBQgXAAgPgOQgNgNAAgMQAAgOAdgrIAfgoIgHgGQgvAVhNB1QgiA2gUAVQgeAggbAAQgJAAgHgLg");
	this.shape_62.setTransform(21.9,-27.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#526139").s().p("AgmAdQgJgSgCgOQgDgQAZgXQAbgYAXAIQgHAQAMAuQALAvALAGIhCAEQgNgOgJgSg");
	this.shape_63.setTransform(65.5,-30.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#1D1F26").s().p("AgxAoIgEgpIAGgpIBkgCQgMAaAAAJQAAAJgCACQgDAEAGAQQAGARADAGg");
	this.shape_64.setTransform(8.9,-28.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#758A51").s().p("AhXA2QgEgNgHgkQAHg8AGASIAaAAIB8gHIEkgNQgJACgGASQgFASABAHIAJAeQAGAZAIAIIj7AHQhKAAh7gEgAlmAqIgChKQAogCADAAIBZAAQgDAzAGAdQgwgEhVAAg");
	this.shape_65.setTransform(24.4,-29.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#B3E4E6").s().p("AhBBmQgTgLgIgTQgBgLAFADIAIAHQAKAFASAEQASAFAIAAQAOgBAMgFIAOgFQACABAAAJQgHAOgOAHQgNAGgQAAQgPAAgQgJgAivAlQgZgdAAglQAAhRB3AAQAFAAAIAGQAJAFAFAAQAHAAAFATQAFARAAAZQAAAYgLALQgLAJgXAAQgKAAgJgMQgIgNAAgKQAAgKAHgLIAGgPQADgGgCgLQgPAOgMAPQgMARAAAKQAAARAQAPIAPAQQAAAIgDATQgCAUgCACQgngFgagdgAg/A3QgQgHAAgLQAAgKAVgFQAQgFANgLIAKgJQAGAAAIADIAHACQgCgHgJgFQgJgGAAgCQAAgKACAAQAQgKATAQQAUARAAAdQAAAKgPALQgVAPgjAAQgSAAgNgFgAAGg0QgPgTgLgIIAAABIgFgTIBlgFIBQgEQAYAAANALQAMAKgFAOQgOAihUAAQhHAAgZgPg");
	this.shape_66.setTransform(89.8,-29.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#526139").s().p("AgnArQgKgRABgZQABg7AwgEQALAKABAMQABAXAGARQAJAaAEAJQAGANALAKIgNADIguABQgSAAgMgTg");
	this.shape_67.setTransform(59.5,-17.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#1D1F26").s().p("AgrAYQgFgNgKgoQAAgHAKgeIBkAfQgOAggBALQgBASAYApg");
	this.shape_68.setTransform(3.8,-20.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#758A51").s().p("ABjBqQglgGgagHIhWgXQgVgHgDgJIgGgVQgLgfAKgoICLAbQAjAGA3AAQAbAAA7gGQBIgHArgJQgEALgFAUQgFAXACAJIAKAgQAIAYgBABQgRAVigAAQgdAAgxgIgAkAgDIhhgnIAIgiQAKgeATgFQgGgFAaAHQAbAIAQAIQAQAIAHAHIAGAGIAAARQACAbAKAkQABAAAAABQAAAAgBAAQAAABAAAAQgBAAgBAAQgHAAgjgNg");
	this.shape_69.setTransform(18.5,-19.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#B3E4E6").s().p("AgzCOQgNgHgJgLQAYADAqgLQAwgMAFgSQACADABADQABgCAAAJQAAAOgSARQgXAVghAAQgLAAgQgJgAitBiQgTgwAAghQAAgaAdgUQAbgRAdAAQA7ADAABGQAAALgOAPQgPAPgMAAQgUAAgMgMQgKgMAAgPQAAgNAIgSIgKgHQgNAOgFAMQgGAOAAARQAAAOANAMQAKAJAPAFQAQAGACAHQAHAaADAGQgSAHgPgEIgJACQgYAAgQgogAhFBmIgCgOQACgEAOgMQAQgOAHgLQAKgOAMgEIAQgEIgGgFQgGgDgOABQgIABADgIIABgHQAagLAbAKQAaAKAAAUQAAATgcAYQgfAcgrAAIgWgCgAgigSQgEgBgGgKQgIgOgIgKQAfgLCfhHQAngPADAAQALAAAFAGQAFAHAAANQAAAcg3AaQgbANhCATQg/AUgNAAIgDAAg");
	this.shape_70.setTransform(82.1,-23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).to({state:[]},1).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]},1).to({state:[]},1).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42}]},1).to({state:[]},1).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46}]},1).to({state:[]},1).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50}]},10).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_58},{t:this.shape_57}]},1).to({state:[]},1).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59}]},6).to({state:[{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63}]},1).to({state:[{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67}]},1).wait(1));

	// Layer 1
	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("Ai6EGQgxgeAAgaQAAiACDgvQAlgNBCgMQA6gIAOgHQjOirgagaQgHgHACgBQABgBgEgLIARAHQACgRATgcQAUgdAPAAQALAABzBcQBoBRAnAiQAbAYARAdQAPAYABAKQAKAVgbAdQgXAaglASQhbAshAAcIg5AZQAGAMANAUQAKAOAAAFQAAASgKANQgPAUglAAQgvAAgyggg");
	this.shape_71.setTransform(-6.2,-7.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AglEXQgMgIAAgRQgPAIgPgJQgYgRgEgBQgLgEgQAAQgNAAgEgEQgOgNAAgkQAAhCAOgbQAPgcAQgCQAWACATgEQAZgFArg4QAfgsAKgWQgMgEg7gcIiLhDQAmg6gEg1QAzATAgALQAgAKBpA3QBrA2AAA5QABA4glBJQgtBUgRArQgEAKACAWQADAagCAKQgHAnhNAAQgYAAgLgGg");
	this.shape_72.setTransform(1.1,-6.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AiEBaQAEgVAMgFIAfgNIBagsQhpi4ATgFQAUgEANgXQANgWAVgBQBABLApBKQApBKAHAdQAIAfg+A1Qg+A1iiBLQAAhsAHgig");
	this.shape_73.setTransform(-9,-11.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AhjDaQgOgZgEgDQgKgHgZgFQgUgIAAgeQAAgEAEgSQAEgTAAgFQAAgBgLgHQgLgGAAgHQAAgVAohBQAfg0AfgqQAGgHAPgrQAOgpAIgeIAAgCQAiATAuApQAvApAYANQAeAKAYA6QAXA1AAA1QAAAxgrAaQgdARgZAAQgTAAgNgGQgKgEgggUQgWBHgVAXQgPARgaAAQgXAAgIgNg");
	this.shape_74.setTransform(-2.6,-12.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AiRCdQhNhLAAg3QAAgFgEgHIgBgDIASgWQAWgfAVggIAQgYQAIAGAPATQAkAtBdBXIALgdQACgJAEgeQgTAIgKAAQgrAAgdgXQgYgUAAgTQAAgOAPgTQATgZAcAHIAKACQgCgGgMgHQgKgMAAgfQAAgcAUgSQAcgYA8gCQA+gBAlBEIA6BwQAXAtgCASQgDAVgOAfQgPAfgJAYQgJAYgLASQgLASgKAKQgmAlgKAGQgbARgsAAQhXAAhVhTg");
	this.shape_75.setTransform(7.3,-22.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AiDCzQgggUgcgPQgtgXg5hnQg2heAAgoQAAgKACgBQA1gPAlgbQAggXAJAAQAJAAACAEQADACAGAUQAaBDA5BmQAHgGAUgsQAXgpAiAAQAOAAAMAKQACAEALANQAZgPBEg2QBFguAogCQAngCBJAoQAaAjgJARQgJARAHAQIAHARQAAAUggAXQglAdhvA+QhLAqg8AmQghARg0AAQgyAAgdgOg");
	this.shape_76.setTransform(12.5,-14.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AiUCzQgtgnAAhIIAAgfQAdg3AWgJQAWgIgBgJQAAgIAKgzQALgzAYg6QBxBLA4ApQBmBLgBA7QABA2guAkQgWATgXAJIiZA5Qg6AAgpgig");
	this.shape_77.setTransform(-1.2,-13.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgZBvIgOgRQgGgIgHAAQgCAAgKgLQgPgQgQgOIgWgIQgUgIgFgPQgWgyAmgzQAjgxArAAQAoAABIAsQBXAzAAAyQAAAQgMATQgRAagfgBIAKARIAEALQAAAZgVAJQgNAFgbABQgtAAgYgag");
	this.shape_78.setTransform(-12.7,-1.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgnC+QgBgGgTgDQgOgBgPgLQgVgQAAgaQAAgIAKgTQAKgTAIgIQgOABgSgEQgSgFgHgFIABgFQADgCAbABIAhACQALAAAkgDQAvgFAAgDQgkgei7h7QANghAWgOQARgLAAgNQAAgPARAAQAOABBUAuIB4BEQB4BCAABOQAAAihPAvQhUAwhJABQgHAAAAgFg");
	this.shape_79.setTransform(2.3,-15.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AjxDSQAAgZAQgSQARgTAaAAQAaAAAjAMQAjAMAGAAQAXAAAEgCQACAAABgHQAGgSBGgdQAAg6hphlQg6g4gRgUQghgoAAgcQACgYAAhpQDOCNB7CTQBiB0AAA6QAAA1gqA0Qg1BChVAAQkvg4AAgzg");
	this.shape_80.setTransform(6.7,-4.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AhkEuQgRgLAAgYQAAgQAKgOQAPgVAogTIhmiUQisj7AAgIQAAg0AcgXQAQgNAcgMIAJgBQAMAEA7BOQBYB1AsA0QAcAjA6A5QAjAqAMATQAIgMAGgGQASgTATAAQAXAAARASQAPAPAAANQAAAHgDAGIgEALIgEAJQAGgDAWgRQAWgOANAAQAdAAANAWQAIAOAAAOQAAAOgBAGQgCAHgLAPQAPAHAOAPQANAOAAAIQAAArhVAPQg0AJh2AAQgSAAgWgDQgZgJgIAAQgJAAgWAKQgVAKgKAAQgXAAgOgKg");
	this.shape_81.setTransform(12.3,3.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AkLBPQg2g3gpg0QgngzAAgPQAAgTAPALQAOgeAjgRQAfgPABgPIACgJQACgEAHAAQAIAAAPAVIAWAjQAfAvBLBQQBKBMAMAAQAdAAAeg6QAVgjALghIACgLQAEgNABgLQACgRgigfQgJgPAAgRQAAgzA0AAQAWAAAOAPQAHAHANAZQAYAwAuAAQAxAABwggQAPAAAKAMQAJAKgBAOQAAAGgFAKQgMATgcATIA4AFQATAGAAAbQAAAigTARQgWASgxACQAFAGAAAKQAAAagPASQgPASgUAAQgcAAgUgMQgYgRgTgLQg/BPg0AlQg0AjgtAAQhWAAiRiTg");
	this.shape_82.setTransform(18.9,-18.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgaDeQgrgDhFglQhFglg/g5Qg/g5ghg4Qghg7AAgRQAAgLAFAAIAJADIAdgcQAdgcAJgFQAKgFAHgBQABAAgCgJIACgJQADgDALAEQAKAEAmA6QAlA6AVAWQAUAVA2AzIAvAtQA8g0Aeg8QARgmAAgWQAAgDgSgVQgRgVgBgWQABggAagMQAggPArApQAGAHADAQQAEASADAGQAOAcA3AAIA7gKQBBgKAZAAQANAAAJAJQAKALAAASQgBADgHAMQgJAQgLALIgJAHQAagCAPAMQAQAMAAAZQAAAigZARQgYARgtgFQADAJAAAKQAAAegXAOQgPAJgSAAQgQAAgLgFQgTgJgpghIhzBqQghAeglAAIgHAAg");
	this.shape_83.setTransform(18.6,-17.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AhqEAQgVgHgJgIQgGgFgTgIIgagMQgsgZgPgWQgKgQAAgaQAAhJA2gyQA3gyBYAAQAuAPARAAIA5gBIAOgDQgngXgcgVQgogegpgbQAHgXARgnQAPghAAgDQAAgFgHABQgGAAAAgFQAAgKAGgJQDbBXA8BgQAWAlgDAhQgEAZgSARQgaAhgsAXQgXAMg7AWQgXAIguANQgWAcAJAhQAAAMgRAVQgWAZgYAAQgVAAgXgHg");
	this.shape_84.setTransform(-6.5,-7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AhJERQhEg6AAhaQgBgVAIgOQAGgOAAggQAAhog+hiQgQgZgagiQgTgYAAgEQgBgcAlgUQAcgQAPAAQArAAABgWIAAgCIAfAtQB2CSAjB7QAtgDARANQALAJgBAVQAAAKgPAUQgSAYgWAIQBWATAuAWQAtAVgGAfQgGAOAAADIAPAiQAAAigTANIguAVQgSAIgVAPQgUAOhCACIgDAAQg+AAhHg9g");
	this.shape_85.setTransform(3.8,1.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AidDuQhdhEAAhbQAAhAA4gnQA8gsBmAAQAwAAAWAcQANARgBATIgCAEQAggOATgRQATgSgBgEQhChLgKgPQgRgaAAgmQAAgjALgZQAKgYAOAAQAEAAAzAzQAyA0AOARIAeAnQAMANALAUQAUAnAAAxQAAA0gvA2QgcAghHA+QgHAHgFAQIgIAeQgMAlgqAAQgFAAgKgEQgLgFgFAAIgNALQgQALgLAAQgsAAhJg2g");
	this.shape_86.setTransform(-16.8,-4.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("Ah7CtQAAhLABgDIADgBQABgBAAAAQgBAAAAAAQgBgBgBAAQgBAAgBAAQgJAAABgFICDhkQgkgrgjgqQgOgVAAgnQAAgiAKgbQALgcAOAAQAKAAAcAZQAoAmA3BOIAgA7QAMAfAFAoQAFAqg1AqQg1AqiaBiIAAhLg");
	this.shape_87.setTransform(-5.9,-8.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AjcDcQgWgTAAghQAAgoArgsQAgghB+hmQhrA+gsAYQgjAUhHArIgIgBQgDgCAAgGQABgYAjhnQAJgcAmgZQAPgKB8hCIBwgyQBIgTA7ACQA6ACAyAeQAuAbAAAkQAABQhZA7QAEAEAIAUQAJAWAAAIQAAAfgbAPQgVAMgbAAIgfgLQhdAfgMAAQgLAAgOgFQgSgIgOgRQhCBMglAfQggAagUAAQgXAAgQgPg");
	this.shape_88.setTransform(21.1,-33.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AEdBwQgOgNgCgPQgFAEgKAAIgigEQghgDgaAAQg+gBiTACIiOACQiLgFiKgCQhWgCgtgDIAAh+IAHgBQAIAAAgADQAfADBEgIIBVgEQCUgFDIgNQCAgKAvgGQAKgCAhgTQAcgQAyAAIAfAHQAdAHARgBQAugDCQgCQAbAAANAFQAPAIAAARQAAAxgoASQgsAThdgNQAIAJAGARQAFAPAAAEQAAANgNAPQgOAQgBAeQgCAjhAABQgoAAgWgWg");
	this.shape_89.setTransform(52,-29.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AFRChQgNgLgKAAIggADQgZADgSgFIgTgGIgPAAQgcAAhiALQhfALg1gCQg2gCh+gcQh/gcjphsQgEgDAAgOQAAgWAQggQATgoAcAAQA8AbCQAqQCPArBfAAQBfAABegOQBggNAZgKIA3gXIBEgPQA3gMAhgOIBSgrQA0gbAagBQAZAAAJAMQAHAHAAARQAAApglAZQggAWhmAjQAoANAAAlQAAAFgRAeIAPAgQAAAgg0AVQglAPgVAAQgWAAgMgLg");
	this.shape_90.setTransform(42.1,-23.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_71}]}).to({state:[]},1).to({state:[{t:this.shape_72}]},1).to({state:[]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[]},1).to({state:[{t:this.shape_84}]},1).to({state:[]},1).to({state:[{t:this.shape_85}]},10).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[]},1).to({state:[{t:this.shape_88}]},6).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.9,-36.6,47.2,59);


(lib.cup34rarml01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B3E4E6").s().p("AgFBRQgbgLAAgDQAAgHAJgYIAIgZIgEgFQgEAFgMAUQgMATgCAGQgPgEAAgKQAAgQAFgNIAMgdQgJAEgEAEQgFAGgLAPQgKg/AdgWQAegXAXACQAVADAQAbQAQAdAAAqQAAAIgIATQgHAPgFAIQAOgMAHAAQAGAAALAHQAMAIAAAHQAAARgWAGQgKADgPAAQgLAAgagNg");
	this.shape.setTransform(-19.3,10.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#526139").s().p("AgOADQgGgPgwgYIAlgLQAfgKAKAAQAmAAAOAlQAHASAAARQAAALgPAJIg5AXQgJgcgCgbg");
	this.shape_1.setTransform(-11.5,3.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1F26").s().p("AhFAAQAIggAYgOQAOgJALAAQALAAAWAPQAjAWAOAjQgTgHgWAQQgRAPgGAPg");
	this.shape_2.setTransform(1.1,-16.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#758A51").s().p("AALCnQgLgigSgMIAFAAQATgCArgNQA3gQgDgHQgKgHgRgJQAIgTASgKQANgIAGAAQASAAAVATQAbAXAAAgQAAAMgJAKQgZAcg8AaQgfAOgoAOQABgNgKgcgAh0hfIhEg1QACgXAfgjIAAgBQAhgBCXCKQgKAAgUAXQgTAWgCANQhEg8gegXg");
	this.shape_3.setTransform(-4.5,-16.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1D1F26").s().p("AgpAwIAGgHQAIgQAIgtQAAgKgDgJQAAgEA/gFQAFA6gaAWQgSARghAAIgKgBg");
	this.shape_4.setTransform(-7.2,-28.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#758A51").s().p("Ai7ABQA/gkA/gNQAHAQAAAJQAAAhgRAUQgOAPgPAAQgNAAhgAPQgBgCgWAGQgSgaA/glgACuA3QgmgJh9gGQAYgbAEgXQACgKgEgYQgCgNAEgEQAFgFBEAEQBEAFAdASQAdASgBAcQgBAegKAPQgJAMgDAAQgIAAgggJg");
	this.shape_5.setTransform(-5.2,-27.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#526139").s().p("AgkA0IgMgFQAKgJAKgTQAJgRAAgEQgBgJgFgTQgFgOgEgJQABAAABAAQABAAAAAAQABAAAAgBQAAAAAAgBQALgCATAHQAUAIAOANQANANABAQQggA4ghAAQgHAAgMgEg");
	this.shape_6.setTransform(22.9,-25.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B3E4E6").s().p("AgeBzIhAgiIAKgEQAcgEAQgeQALgWAAgNQAAgLgNgNQgKgJgmgaQAPgKAagmQATgeASAAQAJAAAIAHIgGADQgOAHgUAUQgTATAAACQAAAHACABIADABQAIAAAXgYQAdgZA1gBQgBAPgUAWIgyA3IABAGQAEADADAAQAPgDA4gVQAGAAAIAEQAJAGAAAHQAAAfg8ASQg7ASAAATIANAaIAPAeIABACIgCADIgCABQgDAAgcgPg");
	this.shape_7.setTransform(32.3,-26.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B3E4E6").s().p("AATA3IgKhLIgQA4QgIAagYAAQgBgKgIgcQgFgOADgoQgPAEgGADQgKAFAAAOQAAAHAKAxQgFACgKAAQgTAAgHgaQgGgUAAgmQAAgjAVgKQAIgFAfgDQBVgIAxASQArAQAAAcQAAAQghAVQghAYAAAKIAAAHIACACIAFAFQAGgBAPgLIARgLQAJABACAJIAAALQAAAKgVAMQgVALgUAAQgYAAgEggg");
	this.shape_8.setTransform(8.7,-15.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1D1F26").s().p("AgoAYQgEgNAAgHQAAgOALgNQAPgSAcAAIAjAAQgMAVgEAJQgGAMAAAKIACAWIg7AJIgGgSg");
	this.shape_9.setTransform(1,-29.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#758A51").s().p("ACZAIQgjgRAAgJQAAgHgDgCIgGgDQgEASgUAOQgTARhbgMQAAgwAHgPQAHgPBDAGQBFAGAyAdQAxAdABAiQgBADgVAgQgMgngmgVgAjFguIBOgQQgRAgACASIAMAgIhmAcQADgPAYhPg");
	this.shape_10.setTransform(8.1,-26.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#526139").s().p("AgCgPQgMgNgZgMQBOARAAAwQAAAGgPAGIgPAEQAKgkgVgUg");
	this.shape_11.setTransform(21.9,-21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).wait(1));

	// Layer 1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ai4EIQgvgjAAhBQAAhUBwgoQAhgMBDgOQBBgOAZgIIisicQgzguAAgIQAAgbAOgRQALgOAfgQQB6BSAkAcQCGBnAjBPQAMAvhgA6QhPAviBArQAPAJALAVQAGALACAJQAAAUgNAOQgOAOgYAAQhCAAgogdg");
	this.shape_12.setTransform(-6.2,-7.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("ACqB6QgrgaAAgIQizgihMAAQgeAAhcAKIhqAMQACgEABgiQAKgkApgWQBIgqAzgNQA0gNBHAAQBGAAA2ASQA2ARALAAQAGAAAQgaQAUghAFgGQAfgkAaAGIAYAJQAXAIAPABQALABAFAEQAIAGAAAPQAAARgKAQQgJANgNAHQAlgHARAOQAMAKAAAQQAAAjgZASQgaAShIAOQAKAKALAYQAKAVAAAFQAAAXgbAAQgWAAgugcg");
	this.shape_13.setTransform(8.5,-26.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AASCbQgQgGgDgSQgOAIghgJIg2gOQghgPgDgUQgBgHAEheQgSABglAIQgfAFgNgMQAHgiAZhYIBxgQQCTgFBVAdQBcAfAAAxQgBAwgaAXQgbAZg5AZIAHAJQADAFAAAHQAAAfgeATQgaARggAAQgUAAgIgCg");
	this.shape_14.setTransform(9.1,-20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12}]}).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.5,-37.1,46.6,59.2);


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


(lib.CUPBODYNEST002copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// BROWS
	this.instance = new lib.CUP_34_brow_02("single",0);
	this.instance.setTransform(-37.6,-66.1,0.985,0.985,0,-16.6,163.3);

	this.instance_1 = new lib.CUP_34_brow_01("single",1);
	this.instance_1.setTransform(104.3,-61.5,1.052,0.786,0,33.1,-146.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{scaleX:1.052,skewX:33.1,skewY:-146.8,x:104.3,y:-61.5,scaleY:0.786,startPosition:1}},{t:this.instance,p:{skewX:-16.6,skewY:163.3,x:-37.6,y:-66.1,scaleX:0.985,scaleY:0.985}}]}).to({state:[{t:this.instance_1,p:{scaleX:1.051,skewX:16.6,skewY:-163.3,x:102.5,y:-52.3,scaleY:0.786,startPosition:1}},{t:this.instance,p:{skewX:-4.3,skewY:175.6,x:-34.6,y:-58.4,scaleX:0.985,scaleY:0.985}}]},4).to({state:[{t:this.instance_1,p:{scaleX:1.051,skewX:-2.1,skewY:177.8,x:101.3,y:-45.5,scaleY:0.785,startPosition:1}},{t:this.instance,p:{skewX:7.9,skewY:-172,x:-30.2,y:-55,scaleX:0.984,scaleY:0.984}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1.05,skewX:-5.9,skewY:174,x:100.7,y:-41.3,scaleY:0.785,startPosition:1}},{t:this.instance,p:{skewX:10.8,skewY:-169.1,x:-30.2,y:-49.8,scaleX:0.984,scaleY:0.984}}]},2).to({state:[{t:this.instance_1,p:{scaleX:1.05,skewX:-5.9,skewY:174,x:100.8,y:-40.3,scaleY:0.785,startPosition:1}},{t:this.instance,p:{skewX:10.8,skewY:-169.1,x:-30.1,y:-48.8,scaleX:0.984,scaleY:0.984}}]},2).to({state:[{t:this.instance_1,p:{scaleX:1.051,skewX:-2.1,skewY:177.8,x:101.3,y:-45.5,scaleY:0.785,startPosition:1}},{t:this.instance,p:{skewX:7.9,skewY:-172,x:-30.3,y:-53.7,scaleX:0.984,scaleY:0.984}}]},5).to({state:[{t:this.instance_1,p:{scaleX:1.052,skewX:33.1,skewY:-146.8,x:105.1,y:-63.1,scaleY:0.786,startPosition:0}},{t:this.instance,p:{skewX:-16.6,skewY:163.3,x:-32.6,y:-67.3,scaleX:0.985,scaleY:0.985}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1.052,skewX:33.1,skewY:-146.8,x:105.1,y:-68.6,scaleY:0.786,startPosition:0}},{t:this.instance,p:{skewX:-16.6,skewY:163.3,x:-32.6,y:-72.1,scaleX:0.985,scaleY:0.985}}]},2).to({state:[{t:this.instance_1,p:{scaleX:1.052,skewX:33.1,skewY:-146.8,x:104.8,y:-67.4,scaleY:0.786,startPosition:0}},{t:this.instance,p:{skewX:-16.6,skewY:163.3,x:-33,y:-70.5,scaleX:0.985,scaleY:0.985}}]},3).to({state:[{t:this.instance_1,p:{scaleX:1.052,skewX:33.1,skewY:-146.8,x:104.7,y:-66.5,scaleY:0.786,startPosition:0}},{t:this.instance,p:{skewX:-16.6,skewY:163.3,x:-33.1,y:-69.6,scaleX:0.985,scaleY:0.985}}]},2).to({state:[{t:this.instance_1,p:{scaleX:1.05,skewX:1.4,skewY:-178.5,x:101.7,y:-54.9,scaleY:0.785,startPosition:1}},{t:this.instance,p:{skewX:-4.3,skewY:175.6,x:-33.9,y:-69.8,scaleX:0.983,scaleY:0.983}}]},16).to({state:[{t:this.instance_1,p:{scaleX:1.051,skewX:3.2,skewY:-176.7,x:102.4,y:-52.8,scaleY:0.785,startPosition:1}},{t:this.instance,p:{skewX:-7.6,skewY:172.3,x:-35.6,y:-72.8,scaleX:0.984,scaleY:0.984}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1.05,skewX:13,skewY:-166.9,x:103.5,y:-58.8,scaleY:0.785,startPosition:1}},{t:this.instance,p:{skewX:-10.4,skewY:169.5,x:-36.3,y:-69.1,scaleX:0.983,scaleY:0.983}}]},23).to({state:[{t:this.instance_1,p:{scaleX:1.052,skewX:34.9,skewY:-145,x:104.1,y:-65.9,scaleY:0.786,startPosition:1}},{t:this.instance,p:{skewX:-15.7,skewY:164.2,x:-36.8,y:-63.7,scaleX:0.985,scaleY:0.985}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1.053,skewX:39.1,skewY:-140.8,x:104.5,y:-67.3,scaleY:0.787,startPosition:1}},{t:this.instance,p:{skewX:-15.7,skewY:164.2,x:-37,y:-63,scaleX:0.985,scaleY:0.985}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1.06,skewX:-6.6,skewY:173.3,x:100.6,y:-54.4,scaleY:0.792,startPosition:0}},{t:this.instance,p:{skewX:6,skewY:-173.9,x:-29.5,y:-58.5,scaleX:0.992,scaleY:0.992}}]},22).to({state:[{t:this.instance_1,p:{scaleX:1.06,skewX:-6.6,skewY:173.3,x:100.1,y:-47.7,scaleY:0.792,startPosition:0}},{t:this.instance,p:{skewX:6.8,skewY:-173.1,x:-29.9,y:-51.8,scaleX:0.992,scaleY:0.992}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1.06,skewX:-6.6,skewY:173.3,x:100.2,y:-45.5,scaleY:0.792,startPosition:0}},{t:this.instance,p:{skewX:6.8,skewY:-173.1,x:-29.9,y:-49.9,scaleX:0.992,scaleY:0.992}}]},2).to({state:[{t:this.instance_1,p:{scaleX:1.06,skewX:-6.6,skewY:173.3,x:99.9,y:-47.8,scaleY:0.792,startPosition:0}},{t:this.instance,p:{skewX:4,skewY:-175.9,x:-30.2,y:-52.6,scaleX:0.992,scaleY:0.992}}]},4).to({state:[{t:this.instance_1,p:{scaleX:1.059,skewX:13.2,skewY:-166.7,x:101.7,y:-59,scaleY:0.791,startPosition:0}},{t:this.instance,p:{skewX:-10.8,skewY:169.1,x:-31.8,y:-62.7,scaleX:0.991,scaleY:0.991}}]},2).to({state:[{t:this.instance_1,p:{scaleX:1.053,skewX:43.9,skewY:-136,x:105.4,y:-72.3,scaleY:0.787,startPosition:1}},{t:this.instance,p:{skewX:-21.9,skewY:158,x:-37,y:-71.8,scaleX:0.986,scaleY:0.986}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1.053,skewX:43.9,skewY:-136,x:105.3,y:-70.9,scaleY:0.787,startPosition:1}},{t:this.instance,p:{skewX:-21.9,skewY:158,x:-37.2,y:-70.5,scaleX:0.986,scaleY:0.986}}]},2).to({state:[{t:this.instance_1,p:{scaleX:1.053,skewX:43.9,skewY:-136,x:105.2,y:-70,scaleY:0.787,startPosition:1}},{t:this.instance,p:{skewX:-21.9,skewY:158,x:-37.3,y:-69.6,scaleX:0.986,scaleY:0.986}}]},2).to({state:[{t:this.instance_1,p:{scaleX:1.052,skewX:22.8,skewY:-157.1,x:103.5,y:-63.5,scaleY:0.786,startPosition:1}},{t:this.instance,p:{skewX:-11.8,skewY:168.1,x:-35.6,y:-68.7,scaleX:0.985,scaleY:0.985}}]},14).to({state:[{t:this.instance_1,p:{scaleX:1.051,skewX:-4.6,skewY:175.3,x:101.7,y:-57,scaleY:0.785,startPosition:1}},{t:this.instance,p:{skewX:0.6,skewY:-179.3,x:-34.3,y:-64.3,scaleX:0.984,scaleY:0.984}}]},2).to({state:[{t:this.instance_1,p:{scaleX:1.051,skewX:-7.1,skewY:172.8,x:101.6,y:-56.4,scaleY:0.785,startPosition:1}},{t:this.instance,p:{skewX:2.8,skewY:-177.1,x:-34.4,y:-63.7,scaleX:0.984,scaleY:0.984}}]},2).to({state:[{t:this.instance_1,p:{scaleX:1.05,skewX:-2.7,skewY:177.2,x:102.5,y:-49.7,scaleY:0.785,startPosition:1}},{t:this.instance,p:{skewX:4.1,skewY:-175.8,x:-31.8,y:-56.1,scaleX:0.984,scaleY:0.984}}]},7).to({state:[{t:this.instance_1,p:{scaleX:1.05,skewX:-5.9,skewY:174,x:100.8,y:-41.3,scaleY:0.785,startPosition:1}},{t:this.instance,p:{skewX:10.8,skewY:-169.1,x:-30.1,y:-49.8,scaleX:0.984,scaleY:0.984}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1.05,skewX:-5.9,skewY:174,x:101.4,y:-45,scaleY:0.785,startPosition:1}},{t:this.instance,p:{skewX:10.8,skewY:-169.1,x:-29.5,y:-53.5,scaleX:0.984,scaleY:0.984}}]},2).to({state:[{t:this.instance_1,p:{scaleX:1.05,skewX:-5.9,skewY:174,x:101.4,y:-49.1,scaleY:0.785,startPosition:1}},{t:this.instance,p:{skewX:10.8,skewY:-169.1,x:-29.5,y:-57.6,scaleX:0.984,scaleY:0.984}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1.05,skewX:-5.9,skewY:174,x:101.4,y:-51.8,scaleY:0.785,startPosition:1}},{t:this.instance,p:{skewX:10.8,skewY:-169.1,x:-29.5,y:-60.3,scaleX:0.984,scaleY:0.984}}]},2).to({state:[{t:this.instance_1,p:{scaleX:1.05,skewX:-0.4,skewY:179.5,x:101.6,y:-52.5,scaleY:0.785,startPosition:1}},{t:this.instance,p:{skewX:2.2,skewY:-177.7,x:-32,y:-65.4,scaleX:0.983,scaleY:0.983}}]},14).to({state:[{t:this.instance_1,p:{scaleX:1.05,skewX:17.1,skewY:-162.8,x:102.8,y:-55.9,scaleY:0.784,startPosition:1}},{t:this.instance,p:{skewX:-13.8,skewY:166.1,x:-35.7,y:-71.8,scaleX:0.983,scaleY:0.983}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1.051,skewX:8.3,skewY:-171.6,x:102.5,y:-52.3,scaleY:0.785,startPosition:1}},{t:this.instance,p:{skewX:-6.5,skewY:173.4,x:-34.5,y:-63.8,scaleX:0.984,scaleY:0.984}}]},16).to({state:[{t:this.instance_1,p:{scaleX:1.051,skewX:-2.1,skewY:177.8,x:101.3,y:-45.5,scaleY:0.785,startPosition:1}},{t:this.instance,p:{skewX:2.9,skewY:-177,x:-30.2,y:-55,scaleX:0.984,scaleY:0.984}}]},2).to({state:[{t:this.instance_1,p:{scaleX:1.05,skewX:-5.9,skewY:174,x:100.7,y:-41.3,scaleY:0.785,startPosition:1}},{t:this.instance,p:{skewX:10.8,skewY:-169.1,x:-30.2,y:-49.8,scaleX:0.984,scaleY:0.984}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1.05,skewX:-5.9,skewY:174,x:100.8,y:-40.3,scaleY:0.785,startPosition:1}},{t:this.instance,p:{skewX:10.8,skewY:-169.1,x:-30.1,y:-48.8,scaleX:0.984,scaleY:0.984}}]},2).to({state:[{t:this.instance_1,p:{scaleX:1.05,skewX:-5.9,skewY:174,x:100.9,y:-39.1,scaleY:0.785,startPosition:1}},{t:this.instance,p:{skewX:10.8,skewY:-169.1,x:-30,y:-47.6,scaleX:0.984,scaleY:0.984}}]},4).to({state:[{t:this.instance_1,p:{scaleX:1.051,skewX:-2.1,skewY:177.8,x:101.3,y:-45.5,scaleY:0.785,startPosition:1}},{t:this.instance,p:{skewX:7.9,skewY:-172,x:-30.3,y:-53.7,scaleX:0.984,scaleY:0.984}}]},2).to({state:[{t:this.instance_1,p:{scaleX:1.052,skewX:33.1,skewY:-146.8,x:105.1,y:-63.1,scaleY:0.786,startPosition:0}},{t:this.instance,p:{skewX:-16.6,skewY:163.3,x:-32.6,y:-67.3,scaleX:0.985,scaleY:0.985}}]},2).to({state:[{t:this.instance_1,p:{scaleX:1.052,skewX:33.1,skewY:-146.8,x:105.1,y:-68.6,scaleY:0.786,startPosition:0}},{t:this.instance,p:{skewX:-16.6,skewY:163.3,x:-32.6,y:-72.1,scaleX:0.985,scaleY:0.985}}]},2).to({state:[{t:this.instance_1,p:{scaleX:1.052,skewX:33.1,skewY:-146.8,x:105.3,y:-69.8,scaleY:0.786,startPosition:0}},{t:this.instance,p:{skewX:-16.6,skewY:163.3,x:-32.3,y:-73.9,scaleX:0.985,scaleY:0.985}}]},2).to({state:[{t:this.instance_1,p:{scaleX:1.052,skewX:33.1,skewY:-146.8,x:104.9,y:-68,scaleY:0.786,startPosition:0}},{t:this.instance,p:{skewX:-16.6,skewY:163.3,x:-32.8,y:-71.7,scaleX:0.985,scaleY:0.985}}]},5).to({state:[{t:this.instance_1,p:{scaleX:1.052,skewX:33.1,skewY:-146.8,x:104.7,y:-66.5,scaleY:0.786,startPosition:0}},{t:this.instance,p:{skewX:-16.6,skewY:163.3,x:-33.1,y:-69.6,scaleX:0.985,scaleY:0.985}}]},2).to({state:[{t:this.instance_1,p:{scaleX:1.06,skewX:-6.6,skewY:173.3,x:99.9,y:-47.8,scaleY:0.792,startPosition:0}},{t:this.instance,p:{skewX:4,skewY:-175.9,x:-30.2,y:-52.6,scaleX:0.992,scaleY:0.992}}]},2).to({state:[{t:this.instance_1,p:{scaleX:1.06,skewX:-7.8,skewY:172.1,x:100.6,y:-43.6,scaleY:0.792,startPosition:0}},{t:this.instance,p:{skewX:5.8,skewY:-174.1,x:-29.5,y:-48.4,scaleX:0.992,scaleY:0.992}}]},2).to({state:[{t:this.instance_1,p:{scaleX:1.06,skewX:-7.8,skewY:172.1,x:100.4,y:-44.8,scaleY:0.792,startPosition:0}},{t:this.instance,p:{skewX:5.8,skewY:-174.1,x:-29.7,y:-49.6,scaleX:0.992,scaleY:0.992}}]},3).to({state:[{t:this.instance_1,p:{scaleX:1.059,skewX:13.2,skewY:-166.7,x:101.7,y:-59,scaleY:0.791,startPosition:0}},{t:this.instance,p:{skewX:-10.8,skewY:169.1,x:-33.4,y:-60.1,scaleX:0.991,scaleY:0.991}}]},2).to({state:[{t:this.instance_1,p:{scaleX:1.052,skewX:33.1,skewY:-146.8,x:104.3,y:-61.5,scaleY:0.786,startPosition:1}},{t:this.instance,p:{skewX:-16.6,skewY:163.3,x:-37.6,y:-66.1,scaleX:0.985,scaleY:0.985}}]},1).wait(34));

	// PUPILS
	this.instance_2 = new lib.CUP_34_pupil_02("synched",0);
	this.instance_2.setTransform(-34.4,-32.5,1,1,0,0,180);

	this.instance_3 = new lib.CUP_34_pupil_01("synched",0);
	this.instance_3.setTransform(101.7,-32.5,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3,p:{x:101.7,y:-32.5}},{t:this.instance_2,p:{x:-34.4,y:-32.5}}]}).to({state:[{t:this.instance_3,p:{x:101.6,y:-28.7}},{t:this.instance_2,p:{x:-34.5,y:-28.7}}]},4).to({state:[{t:this.instance_3,p:{x:102.2,y:-25.6}},{t:this.instance_2,p:{x:-34,y:-25.6}}]},1).to({state:[{t:this.instance_3,p:{x:102,y:-22.4}},{t:this.instance_2,p:{x:-34.2,y:-22.4}}]},2).to({state:[{t:this.instance_3,p:{x:102,y:-21.9}},{t:this.instance_2,p:{x:-34.1,y:-21.9}}]},2).to({state:[{t:this.instance_3,p:{x:102.2,y:-25.6}},{t:this.instance_2,p:{x:-34,y:-25.6}}]},5).to({state:[]},1).to({state:[{t:this.instance_3,p:{x:102.1,y:-33.2}},{t:this.instance_2,p:{x:-34.1,y:-33.2}}]},23).to({state:[{t:this.instance_3,p:{x:101.7,y:-32.5}},{t:this.instance_2,p:{x:-34.4,y:-32.5}}]},1).to({state:[{t:this.instance_3,p:{x:101.7,y:-32.5}},{t:this.instance_2,p:{x:-34.4,y:-32.5}}]},23).to({state:[{t:this.instance_3,p:{x:101.7,y:-32.5}},{t:this.instance_2,p:{x:-34.4,y:-32.5}}]},1).to({state:[{t:this.instance_3,p:{x:101.7,y:-32.5}},{t:this.instance_2,p:{x:-34.4,y:-32.5}}]},1).to({state:[{t:this.instance_3,p:{x:99.8,y:-30.8}},{t:this.instance_2,p:{x:-33,y:-30.2}}]},22).to({state:[]},1).to({state:[{t:this.instance_3,p:{x:99.4,y:-29.5}},{t:this.instance_2,p:{x:-33.5,y:-28.5}}]},8).to({state:[{t:this.instance_3,p:{x:101.9,y:-33.9}},{t:this.instance_2,p:{x:-34.3,y:-33.8}}]},1).to({state:[{t:this.instance_3,p:{x:101.8,y:-33}},{t:this.instance_2,p:{x:-34.4,y:-32.9}}]},2).to({state:[{t:this.instance_3,p:{x:101.7,y:-32.5}},{t:this.instance_2,p:{x:-34.4,y:-32.5}}]},2).to({state:[{t:this.instance_3,p:{x:102,y:-34.3}},{t:this.instance_2,p:{x:-34.1,y:-34.3}}]},14).to({state:[]},2).to({state:[{t:this.instance_3,p:{x:102.1,y:-28.3}},{t:this.instance_2,p:{x:-34,y:-28.3}}]},9).to({state:[{t:this.instance_3,p:{x:102,y:-22.9}},{t:this.instance_2,p:{x:-34.1,y:-22.9}}]},1).to({state:[{t:this.instance_3,p:{x:102.7,y:-24.3}},{t:this.instance_2,p:{x:-33.5,y:-24.2}}]},2).to({state:[{t:this.instance_3,p:{x:102.6,y:-26.5}},{t:this.instance_2,p:{x:-33.5,y:-26.5}}]},1).to({state:[{t:this.instance_3,p:{x:102.7,y:-28.7}},{t:this.instance_2,p:{x:-33.5,y:-28.6}}]},2).to({state:[{t:this.instance_3,p:{x:102.9,y:-29.4}},{t:this.instance_2,p:{x:-33.3,y:-29.3}}]},14).to({state:[{t:this.instance_3,p:{x:101.7,y:-32.5}},{t:this.instance_2,p:{x:-34.4,y:-32.5}}]},1).to({state:[{t:this.instance_3,p:{x:101.6,y:-28.7}},{t:this.instance_2,p:{x:-34.5,y:-28.7}}]},16).to({state:[{t:this.instance_3,p:{x:102.2,y:-25.6}},{t:this.instance_2,p:{x:-34,y:-25.6}}]},2).to({state:[{t:this.instance_3,p:{x:102,y:-22.4}},{t:this.instance_2,p:{x:-34.2,y:-22.4}}]},1).to({state:[{t:this.instance_3,p:{x:102,y:-21.9}},{t:this.instance_2,p:{x:-34.1,y:-21.9}}]},2).to({state:[{t:this.instance_3,p:{x:102.1,y:-21.5}},{t:this.instance_2,p:{x:-34.1,y:-21.5}}]},4).to({state:[{t:this.instance_3,p:{x:102.2,y:-25.6}},{t:this.instance_2,p:{x:-34,y:-25.6}}]},2).to({state:[]},2).to({state:[{t:this.instance_3,p:{x:101.8,y:-29.7}},{t:this.instance_2,p:{x:-32.9,y:-28.6}}]},20).to({state:[{t:this.instance_3,p:{x:101.7,y:-32.5}},{t:this.instance_2,p:{x:-34.4,y:-32.5}}]},1).wait(34));

	// EYED
	this.instance_4 = new lib.CUP_34_eye_02("single",0);
	this.instance_4.setTransform(-36.9,-33.9,0.924,1,0,0,180);

	this.instance_5 = new lib.CUP_34_eye_01("single",0);
	this.instance_5.setTransform(104.9,-36.8,1,0.958,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5,p:{x:104.9,y:-36.8,startPosition:0}},{t:this.instance_4,p:{x:-36.9,y:-33.9,startPosition:0}}]}).to({state:[{t:this.instance_5,p:{x:104.8,y:-33,startPosition:0}},{t:this.instance_4,p:{x:-37,y:-30.1,startPosition:0}}]},4).to({state:[{t:this.instance_5,p:{x:105.4,y:-29.9,startPosition:0}},{t:this.instance_4,p:{x:-36.4,y:-27,startPosition:0}}]},1).to({state:[{t:this.instance_5,p:{x:105.2,y:-26.7,startPosition:0}},{t:this.instance_4,p:{x:-36.6,y:-23.8,startPosition:0}}]},2).to({state:[{t:this.instance_5,p:{x:105.2,y:-26.2,startPosition:0}},{t:this.instance_4,p:{x:-36.6,y:-23.3,startPosition:0}}]},2).to({state:[{t:this.instance_5,p:{x:105.4,y:-29.9,startPosition:1}},{t:this.instance_4,p:{x:-36.4,y:-27,startPosition:1}}]},5).to({state:[{t:this.instance_5,p:{x:105.9,y:-41.6,startPosition:2}},{t:this.instance_4,p:{x:-35.9,y:-38.7,startPosition:2}}]},1).to({state:[{t:this.instance_5,p:{x:105.7,y:-42.9,startPosition:2}},{t:this.instance_4,p:{x:-36.1,y:-40,startPosition:2}}]},2).to({state:[{t:this.instance_5,p:{x:105.4,y:-42.2,startPosition:2}},{t:this.instance_4,p:{x:-36.4,y:-39.3,startPosition:2}}]},3).to({state:[{t:this.instance_5,p:{x:105.4,y:-41.8,startPosition:2}},{t:this.instance_4,p:{x:-36.4,y:-38.9,startPosition:2}}]},2).to({state:[{t:this.instance_5,p:{x:105.3,y:-37.5,startPosition:1}},{t:this.instance_4,p:{x:-36.5,y:-34.6,startPosition:1}}]},16).to({state:[{t:this.instance_5,p:{x:104.9,y:-36.8,startPosition:0}},{t:this.instance_4,p:{x:-36.9,y:-33.9,startPosition:0}}]},1).to({state:[{t:this.instance_5,p:{x:104.9,y:-36.8,startPosition:0}},{t:this.instance_4,p:{x:-36.9,y:-33.9,startPosition:0}}]},23).to({state:[{t:this.instance_5,p:{x:104.9,y:-36.8,startPosition:0}},{t:this.instance_4,p:{x:-36.9,y:-33.9,startPosition:0}}]},1).to({state:[{t:this.instance_5,p:{x:104.9,y:-36.8,startPosition:0}},{t:this.instance_4,p:{x:-36.9,y:-33.9,startPosition:0}}]},1).to({state:[{t:this.instance_5,p:{x:105.1,y:-34.3,startPosition:1}},{t:this.instance_4,p:{x:-36.7,y:-31.4,startPosition:1}}]},22).to({state:[{t:this.instance_5,p:{x:104.8,y:-30.3,startPosition:2}},{t:this.instance_4,p:{x:-37,y:-27.4,startPosition:2}}]},1).to({state:[{t:this.instance_5,p:{x:104.9,y:-29.1,startPosition:2}},{t:this.instance_4,p:{x:-36.9,y:-26.2,startPosition:2}}]},2).to({state:[{t:this.instance_5,p:{x:104.8,y:-30,startPosition:2}},{t:this.instance_4,p:{x:-37,y:-27.1,startPosition:2}}]},4).to({state:[{t:this.instance_5,p:{x:105,y:-32.3,startPosition:1}},{t:this.instance_4,p:{x:-36.8,y:-29.4,startPosition:1}}]},2).to({state:[{t:this.instance_5,p:{x:105.1,y:-38.1,startPosition:0}},{t:this.instance_4,p:{x:-36.7,y:-35.2,startPosition:0}}]},1).to({state:[{t:this.instance_5,p:{x:105,y:-37.2,startPosition:0}},{t:this.instance_4,p:{x:-36.8,y:-34.3,startPosition:0}}]},2).to({state:[{t:this.instance_5,p:{x:104.9,y:-36.8,startPosition:0}},{t:this.instance_4,p:{x:-36.9,y:-33.9,startPosition:0}}]},2).to({state:[{t:this.instance_5,p:{x:105.2,y:-38.6,startPosition:1}},{t:this.instance_4,p:{x:-36.6,y:-35.7,startPosition:1}}]},14).to({state:[{t:this.instance_5,p:{x:105.1,y:-40.9,startPosition:2}},{t:this.instance_4,p:{x:-36.7,y:-38,startPosition:2}}]},2).to({state:[{t:this.instance_5,p:{x:105.3,y:-42.1,startPosition:2}},{t:this.instance_4,p:{x:-36.5,y:-39.2,startPosition:2}}]},2).to({state:[{t:this.instance_5,p:{x:105.3,y:-32.6,startPosition:1}},{t:this.instance_4,p:{x:-36.5,y:-29.7,startPosition:1}}]},7).to({state:[{t:this.instance_5,p:{x:105.2,y:-27.2,startPosition:0}},{t:this.instance_4,p:{x:-36.6,y:-24.3,startPosition:0}}]},1).to({state:[{t:this.instance_5,p:{x:105.9,y:-28.5,startPosition:0}},{t:this.instance_4,p:{x:-35.9,y:-25.6,startPosition:0}}]},2).to({state:[{t:this.instance_5,p:{x:105.8,y:-30.8,startPosition:0}},{t:this.instance_4,p:{x:-36,y:-27.9,startPosition:0}}]},1).to({state:[{t:this.instance_5,p:{x:105.9,y:-32.9,startPosition:0}},{t:this.instance_4,p:{x:-35.9,y:-30,startPosition:0}}]},2).to({state:[{t:this.instance_5,p:{x:106.1,y:-33.6,startPosition:0}},{t:this.instance_4,p:{x:-35.7,y:-30.7,startPosition:0}}]},14).to({state:[{t:this.instance_5,p:{x:104.9,y:-36.8,startPosition:0}},{t:this.instance_4,p:{x:-36.9,y:-33.9,startPosition:0}}]},1).to({state:[{t:this.instance_5,p:{x:104.8,y:-33,startPosition:0}},{t:this.instance_4,p:{x:-37,y:-30.1,startPosition:0}}]},16).to({state:[{t:this.instance_5,p:{x:105.4,y:-29.9,startPosition:0}},{t:this.instance_4,p:{x:-36.4,y:-27,startPosition:0}}]},2).to({state:[{t:this.instance_5,p:{x:105.2,y:-26.7,startPosition:0}},{t:this.instance_4,p:{x:-36.6,y:-23.8,startPosition:0}}]},1).to({state:[{t:this.instance_5,p:{x:105.2,y:-26.2,startPosition:0}},{t:this.instance_4,p:{x:-36.6,y:-23.3,startPosition:0}}]},2).to({state:[{t:this.instance_5,p:{x:105.3,y:-25.8,startPosition:0}},{t:this.instance_4,p:{x:-36.5,y:-22.9,startPosition:0}}]},4).to({state:[{t:this.instance_5,p:{x:105.4,y:-29.9,startPosition:1}},{t:this.instance_4,p:{x:-36.4,y:-27,startPosition:1}}]},2).to({state:[{t:this.instance_5,p:{x:105.9,y:-41.6,startPosition:2}},{t:this.instance_4,p:{x:-35.9,y:-38.7,startPosition:2}}]},2).to({state:[{t:this.instance_5,p:{x:105.7,y:-42.9,startPosition:2}},{t:this.instance_4,p:{x:-36.1,y:-40,startPosition:2}}]},2).to({state:[{t:this.instance_5,p:{x:105.7,y:-42.9,startPosition:2}},{t:this.instance_4,p:{x:-36.1,y:-40,startPosition:2}}]},2).to({state:[{t:this.instance_5,p:{x:105.4,y:-42.2,startPosition:2}},{t:this.instance_4,p:{x:-36.4,y:-39.3,startPosition:2}}]},5).to({state:[{t:this.instance_5,p:{x:105.4,y:-41.8,startPosition:2}},{t:this.instance_4,p:{x:-36.4,y:-38.9,startPosition:2}}]},2).to({state:[{t:this.instance_5,p:{x:104.8,y:-30,startPosition:2}},{t:this.instance_4,p:{x:-37,y:-27.1,startPosition:2}}]},2).to({state:[{t:this.instance_5,p:{x:105.2,y:-27.6,startPosition:2}},{t:this.instance_4,p:{x:-36.6,y:-24.7,startPosition:2}}]},2).to({state:[{t:this.instance_5,p:{x:105.1,y:-28.2,startPosition:2}},{t:this.instance_4,p:{x:-36.7,y:-25.3,startPosition:2}}]},3).to({state:[{t:this.instance_5,p:{x:105,y:-32.3,startPosition:1}},{t:this.instance_4,p:{x:-36.8,y:-29.4,startPosition:1}}]},2).to({state:[{t:this.instance_5,p:{x:104.9,y:-36.8,startPosition:0}},{t:this.instance_4,p:{x:-36.9,y:-33.9,startPosition:0}}]},1).wait(34));

	// MOUTH
	this.instance_6 = new lib.CUP_23_MOUTH_COMP02("single",1);
	this.instance_6.setTransform(51.8,-10,0.792,0.531,0,-10.7,171.3,31,10.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({x:51.7,y:-6.1},0).wait(1).to({x:52.3,y:-3,startPosition:2},0).wait(2).to({x:52.1,y:0,startPosition:7},0).wait(2).to({y:0.5,startPosition:8},0).wait(4).to({startPosition:7},0).wait(1).to({x:52.3,y:-3,startPosition:3},0).wait(1).to({x:52.8,y:-14.7,startPosition:18},0).wait(2).to({x:52.6,y:-16,startPosition:3},0).wait(1).to({startPosition:4},0).wait(2).to({x:52.3,y:-15.3,startPosition:3},0).wait(2).to({y:-14.9,startPosition:18},0).wait(11).to({startPosition:2},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:3},0).wait(1).to({x:52.2,y:-10.6,startPosition:2},0).wait(1).to({x:51.8,y:-9.9,startPosition:1},0).wait(2).to({startPosition:2},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:18},0).wait(2).to({startPosition:4},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(2).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:18},0).wait(2).to({startPosition:3},0).wait(2).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(2).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(3).to({startPosition:3},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:1},0).wait(1).to({x:50.7,y:-6.3,startPosition:2},0).wait(2).to({x:50.4,y:-5.2,startPosition:8},0).wait(4).to({x:50.6,y:-5.9,startPosition:7},0).wait(2).to({startPosition:4},0).wait(1).to({x:51.4,y:-9.6,startPosition:5},0).wait(2).to({x:51,y:-7.3,startPosition:3},0).wait(2).to({x:50.9,y:-7,startPosition:18},0).wait(2).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(2).to({startPosition:3},0).wait(1).to({startPosition:18},0).wait(2).to({startPosition:19},0).wait(6).to({x:52.1,y:-11.7,startPosition:3},0).wait(2).to({x:52,y:-14,startPosition:4},0).wait(2).to({x:52.2,y:-15.2,startPosition:3},0).wait(1).to({startPosition:19},0).wait(2).to({startPosition:18},0).wait(1).to({startPosition:1},0).wait(3).to({y:-5.7},0).wait(1).to({x:52.1,y:-0.3},0).wait(2).to({x:52.8,y:-1.6,startPosition:3},0).wait(1).to({x:52.7,y:-3.9,startPosition:4},0).wait(1).to({startPosition:3},0).wait(1).to({x:52.8,y:-6,startPosition:18},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(2).to({startPosition:3},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:2},0).wait(1).to({x:53,y:-6.7,startPosition:7},0).wait(2).to({x:51.8,y:-9.9,startPosition:8},0).wait(1).to({startPosition:9},0).wait(2).to({startPosition:8},0).wait(1).to({startPosition:18},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:3},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(6).to({x:51.7,y:-6.1},0).wait(2).to({x:52.3,y:-3},0).wait(1).to({x:52.1,y:0},0).wait(2).to({y:0.5,startPosition:2},0).wait(2).to({startPosition:3},0).wait(2).to({x:52.2,y:0.9},0).wait(1).to({startPosition:2},0).wait(1).to({x:52.3,y:-3,startPosition:1},0).wait(2).to({x:52.8,y:-14.7},0).wait(2).to({x:52.6,y:-16},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(2).to({startPosition:7},0).wait(1).to({startPosition:5},0).wait(1).to({x:52.3,y:-15.3,startPosition:4},0).wait(2).to({y:-14.9,startPosition:18},0).wait(2).to({x:51.8,y:-9.9},0).wait(2).to({x:52.2,y:-7.5},0).wait(3).to({x:53.3,y:-9.8},0).wait(2).to({regX:30.9,regY:10.4,scaleX:0.77,scaleY:0.46,x:52.1,y:-10.5},0).wait(1).to({regX:31,regY:10.3,scaleX:0.79,scaleY:0.53,x:51.8,y:-9.9,startPosition:1},0).wait(34));

	// BODY
	this.instance_7 = new lib.CUP_34_body("single",0);
	this.instance_7.setTransform(19.9,81.5,1,1,0,0,180,-1.5,82.4);

	this.instance_8 = new lib.CUP_34_handle("single",0);
	this.instance_8.setTransform(-70.2,11.2,1,1,0,0,180,-17.5,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7}]}).to({state:[{t:this.instance_8},{t:this.instance_7}]},4).to({state:[{t:this.instance_8},{t:this.instance_7}]},1).to({state:[{t:this.instance_8},{t:this.instance_7}]},2).to({state:[{t:this.instance_8},{t:this.instance_7}]},2).to({state:[{t:this.instance_8},{t:this.instance_7}]},5).to({state:[{t:this.instance_8},{t:this.instance_7}]},1).to({state:[{t:this.instance_8},{t:this.instance_7}]},2).to({state:[{t:this.instance_8},{t:this.instance_7}]},3).to({state:[{t:this.instance_8},{t:this.instance_7}]},2).to({state:[{t:this.instance_8},{t:this.instance_7}]},16).to({state:[{t:this.instance_8},{t:this.instance_7}]},1).to({state:[{t:this.instance_8},{t:this.instance_7}]},23).to({state:[{t:this.instance_8},{t:this.instance_7}]},1).to({state:[{t:this.instance_8},{t:this.instance_7}]},1).to({state:[{t:this.instance_8},{t:this.instance_7}]},22).to({state:[{t:this.instance_8},{t:this.instance_7}]},1).to({state:[{t:this.instance_8},{t:this.instance_7}]},2).to({state:[{t:this.instance_8},{t:this.instance_7}]},4).to({state:[{t:this.instance_8},{t:this.instance_7}]},2).to({state:[{t:this.instance_8},{t:this.instance_7}]},1).to({state:[{t:this.instance_8},{t:this.instance_7}]},2).to({state:[{t:this.instance_8},{t:this.instance_7}]},2).to({state:[{t:this.instance_8},{t:this.instance_7}]},14).to({state:[{t:this.instance_8},{t:this.instance_7}]},2).to({state:[{t:this.instance_8},{t:this.instance_7}]},2).to({state:[{t:this.instance_8},{t:this.instance_7}]},7).to({state:[{t:this.instance_8},{t:this.instance_7}]},1).to({state:[{t:this.instance_8},{t:this.instance_7}]},2).to({state:[{t:this.instance_8},{t:this.instance_7}]},1).to({state:[{t:this.instance_8},{t:this.instance_7}]},2).to({state:[{t:this.instance_8},{t:this.instance_7}]},14).to({state:[{t:this.instance_8},{t:this.instance_7}]},1).to({state:[{t:this.instance_8},{t:this.instance_7}]},42).to({state:[{t:this.instance_8},{t:this.instance_7}]},2).to({state:[{t:this.instance_8},{t:this.instance_7}]},3).to({state:[{t:this.instance_8},{t:this.instance_7}]},2).to({state:[{t:this.instance_8},{t:this.instance_7}]},1).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.5,-96.5,245.5,191.3);


(lib.CUPBODYNEST = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// BROWS
	this.instance = new lib.CUP_34_brow_02("single",0);
	this.instance.setTransform(-28,-58,0.989,0.989,0,13.5,-166.4);

	this.instance_1 = new lib.CUP_34_brow_01("single",0);
	this.instance_1.setTransform(100.5,-52.3,1.056,0.789,0,-6.5,173.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{x:100.5,y:-52.3,skewX:-6.5,skewY:173.4}},{t:this.instance,p:{x:-28,y:-58,scaleX:0.989,scaleY:0.989,skewX:13.5,skewY:-166.4}}]}).to({state:[{t:this.instance_1,p:{x:100.5,y:-52.3,skewX:-6.5,skewY:173.4}},{t:this.instance,p:{x:-28,y:-58,scaleX:0.989,scaleY:0.989,skewX:13.5,skewY:-166.4}}]},29).to({state:[{t:this.instance_1,p:{x:99.8,y:-37.9,skewX:-6.5,skewY:173.4}},{t:this.instance,p:{x:-28.7,y:-43.7,scaleX:0.989,scaleY:0.989,skewX:13.5,skewY:-166.4}}]},5).to({state:[{t:this.instance_1,p:{x:99.6,y:-33.8,skewX:-6.5,skewY:173.4}},{t:this.instance,p:{x:-28.9,y:-39.6,scaleX:0.989,scaleY:0.989,skewX:13.5,skewY:-166.4}}]},1).to({state:[{t:this.instance_1,p:{x:99.9,y:-40,skewX:-6.5,skewY:173.4}},{t:this.instance,p:{x:-28.6,y:-45.7,scaleX:0.989,scaleY:0.989,skewX:13.5,skewY:-166.4}}]},2).to({state:[{t:this.instance_1,p:{x:101.7,y:-66.2,skewX:3.1,skewY:-176.8}},{t:this.instance,p:{x:-26.9,y:-70.5,scaleX:0.988,scaleY:0.988,skewX:6.3,skewY:-173.6}}]},1).to({state:[{t:this.instance_1,p:{x:101.6,y:-64.1,skewX:3.1,skewY:-176.8}},{t:this.instance,p:{x:-27,y:-68.5,scaleX:0.988,scaleY:0.988,skewX:6.3,skewY:-173.6}}]},2).to({state:[{t:this.instance_1,p:{x:101.5,y:-62.1,skewX:3.1,skewY:-176.8}},{t:this.instance,p:{x:-27.1,y:-66.4,scaleX:0.988,scaleY:0.988,skewX:6.3,skewY:-173.6}}]},2).wait(1));

	// PUPILS
	this.instance_2 = new lib.CUP_34_pupil_02("synched",0);
	this.instance_2.setTransform(-28.3,-18.2,1,1,0,0,180);

	this.instance_3 = new lib.CUP_34_pupil_01("synched",0);
	this.instance_3.setTransform(104.5,-21.4,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3,p:{x:104.5,y:-21.4}},{t:this.instance_2,p:{x:-28.3,y:-18.2}}]}).to({state:[{t:this.instance_3,p:{x:104.5,y:-21.4}},{t:this.instance_2,p:{x:-28.3,y:-18.2}}]},29).to({state:[{t:this.instance_3,p:{x:103.8,y:-7.1}},{t:this.instance_2,p:{x:-29,y:-3.9}}]},5).to({state:[{t:this.instance_3,p:{x:103.6,y:-3}},{t:this.instance_2,p:{x:-29.2,y:0.2}}]},1).to({state:[{t:this.instance_3,p:{x:101.9,y:-16.3}},{t:this.instance_2,p:{x:-31.4,y:-13.7}}]},2).to({state:[{t:this.instance_3,p:{x:100.9,y:-40.2}},{t:this.instance_2,p:{x:-31.6,y:-40.9}}]},1).to({state:[{t:this.instance_3,p:{x:100.1,y:-37.3}},{t:this.instance_2,p:{x:-32.4,y:-38}}]},2).to({state:[{t:this.instance_3,p:{x:100.4,y:-34.7}},{t:this.instance_2,p:{x:-32.1,y:-35.4}}]},2).wait(1));

	// EYED
	this.instance_4 = new lib.CUP_34_eye_02("single",0);
	this.instance_4.setTransform(-36.8,-34.3,0.924,1,0,0,180);

	this.instance_5 = new lib.CUP_34_eye_01("single",0);
	this.instance_5.setTransform(105,-37.2,1,0.958,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5,p:{x:105,y:-37.2}},{t:this.instance_4,p:{x:-36.8,y:-34.3}}]}).to({state:[{t:this.instance_5,p:{x:105,y:-37.2}},{t:this.instance_4,p:{x:-36.8,y:-34.3}}]},29).to({state:[{t:this.instance_5,p:{x:104.3,y:-22.9}},{t:this.instance_4,p:{x:-37.5,y:-20}}]},5).to({state:[{t:this.instance_5,p:{x:104.1,y:-18.8}},{t:this.instance_4,p:{x:-37.7,y:-15.9}}]},1).to({state:[{t:this.instance_5,p:{x:104.4,y:-24.9}},{t:this.instance_4,p:{x:-37.4,y:-22}}]},2).to({state:[{t:this.instance_5,p:{x:105.2,y:-41.3}},{t:this.instance_4,p:{x:-36.6,y:-38.4}}]},1).to({state:[{t:this.instance_5,p:{x:105.1,y:-39.3}},{t:this.instance_4,p:{x:-36.7,y:-36.4}}]},2).to({state:[{t:this.instance_5,p:{x:105,y:-37.2}},{t:this.instance_4,p:{x:-36.8,y:-34.3}}]},2).wait(1));

	// MOUTH
	this.instance_6 = new lib.CUP_23_MOUTH_COMPcopy("single",1);
	this.instance_6.setTransform(51.9,-10.4,0.792,0.531,0,-10.7,171.3,31,10.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(23).to({startPosition:4},0).wait(11).to({x:51.2,y:3.8,startPosition:3},0).wait(1).to({x:51,y:7.9,startPosition:2},0).wait(2).to({x:51.3,y:1.8,startPosition:18},0).wait(1).to({x:52.1,y:-14.4},0).wait(2).to({x:52,y:-12.4,startPosition:1},0).wait(2).to({x:51.9,y:-10.3},0).wait(1));

	// BODY
	this.instance_7 = new lib.CUP_34_body("single",0);
	this.instance_7.setTransform(19.9,81.5,1,1,0,0,180,-1.5,82.4);

	this.instance_8 = new lib.CUP_34_handle("single",0);
	this.instance_8.setTransform(-70.2,11.2,1,1,0,0,180,-17.5,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7}]}).to({state:[{t:this.instance_8},{t:this.instance_7}]},29).to({state:[{t:this.instance_8},{t:this.instance_7}]},5).to({state:[{t:this.instance_8},{t:this.instance_7}]},1).to({state:[{t:this.instance_8},{t:this.instance_7}]},2).to({state:[{t:this.instance_8},{t:this.instance_7}]},1).to({state:[{t:this.instance_8},{t:this.instance_7}]},2).to({state:[{t:this.instance_8},{t:this.instance_7}]},2).wait(1));

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
p.nominalBounds = new cjs.Rectangle(-244.5,-483.3,272.5,257.8);


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