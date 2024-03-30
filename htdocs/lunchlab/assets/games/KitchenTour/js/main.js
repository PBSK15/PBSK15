!function(e){var t=function(){this.initialize()},i=t.prototype=new cloudkid.Application;i.name="KitchenTour";var n=!1,o=!1,a=null;i.scale=1;var s=null;images={};var d,r,c,l,h,u,m,g,k,p,v,f,b,w,B,x,y,_,L,C,E,A,S,O=!1,M=!1,T=!1,I=!1,P=!1,G=!1,D=!1,j=!1,K=!1,F=!1,X=!1,z=!1,U=10,R=1.25,q=900,H={bakingPans:{name:"Baking Pans",description:"Baking pans are used when baking meals in the oven, like turkey or casseroles."},mixingBowl:{name:"Mixing Bowl",description:"A kitchen standard, mixing bowls are helpful when preparing food."},mixer:{name:"Electric Mixer",description:"An electric mixer makes baking and mixing foods much easier by doing most of the work for you."},fryingPan:{name:"Skillet",description:"A skillet is a pan, usually made of cast iron, that is used on the stove to stir-fry and cook food."},stove:{name:"Oven/Stove",description:"The oven is the heart of the kitchen, with the stovetop used for heating pots and pans, and the oven for baking foods."},pressureCooker:{name:"Slowcooker",description:"A slowcooker is a pot that is used to cook soups and other warm meals that involve liquids. The pot cooks the food at a low temperature slowly, with very yummy results!"},ovenMitt:{name:"Oven Mitt",description:"Oven mitts are very helpful and important to use when handling hot pots and dishes so you don't burn yourself."},microwave:{name:"Microwave",description:"A microwave is a helpful little oven that is used to warm, cook, or defrost food."},blender:{name:"Blender",description:"A blender is an electric kitchen appliance that makes chopping and blending much faster and easier."},juicer:{name:"Juicer",description:"This appliance helps separate the juice from veggies and fruits."},soap:{name:"Hand Soap",description:"It's very important to wash your hands when handling food in the kitchen, especially when you are cooking with raw meats."},sink:{name:"Sink",description:"The kitchen sink is where you wash your hands, pots, pans, and dishes – basically anything that gets dirty when cooking. Don't forget to wash your fruits and veggies too!"},sponge:{name:"Sponges",description:"The kitchen sponge is necessary for washing utensils and items to keep them clean."},utensils:{name:"Spatula/Ladle/Utensils",description:"These utensils help you scoop, smooth, flip, and toss food while preparing and cooking!"},foodProcessor:{name:"Food Processor",description:"A food processor is a very helpful appliance that chops up mostly solid foods without the need of liquids, unlike a blender."},toasterOven:{name:"Toaster Oven",description:"A toaster oven is a handy appliance that works both to toast your foods, such as bread, and to act as an oven for smaller foods."},fridge:{name:"Refrigerator",description:"The kitchen refrigerator is where all of the perishable foods in your kitchen are stored at cooler temperatures."},cookBooks:{name:"Cookbooks",description:"Cookbooks are a great way of discovering new and exciting recipes and ways to prepare food!"},plates:{name:"Dinner Plates",description:"Dinner plates are flat dishware that we serve our food on."},bowls:{name:"Dinner Bowls",description:"Dinner bowls are used to eat our soups, cereal and oatmeal!"},timer:{name:"Cooking Timer",description:"It's very important to set a timer while cooking or baking, otherwise you may overcook your food."},cuttingBoard:{name:"Cutting Boards",description:"Cutting boards are important to protect the surface you're working on. It's a good idea to have one cutting board for raw meats, and one for everything else!"},trashCan:{name:"Recycle Bin/Trash",description:"Recycle bins and trash cans are good to have in a kitchen, to separate your waste from recyclables."},teaspoons:{name:"Measuring Spoons",description:"Measuring spoons are used to measure ingredients in small amounts."},measuringCup:{name:"Measuring Cups",description:"Measuring cups are used to measure large amounts of ingredients for our recipes."},bakingSheet:{name:"Baking Sheets",description:"These are used when baking cookies and yummy food in the oven."}},Y=[];i.init=function(){var e=cloudkid.OS.instance.stage;e.enableMouseOver(30),cloudkid.MediaLoader.instance.cacheManager.cacheBust=cloudkid.OS.instance.options.debug||!1,cloudkid.Audio.init("sounds/KitchenAudio.json",this.soundInitComplete.bind(this)),cloudkid.Animator.audioLib=cloudkid.Audio.instance,cloudkid.MediaLoader.instance.load("images/title.jpg",this._titleLoaded.bind(this)),cloudkid.MediaLoader.instance.load("images/playButton.png",this._playButtonLoaded.bind(this))},i._titleLoaded=function(t){t!==e&&(images.titleBG=t.content),O=!0,M&&this.finishInit()},i._playButtonLoaded=function(t){t!==e&&(images.playButton=t.content),M=!0,O&&this.finishInit()},i.finishInit=function(){d=new createjs.Bitmap(images.titleBG),r=new cloudkid.Button(images.playButton),this.addChild(d),a=this.resize.bind(this),$(window).on("resize",a),this.resize(),s=this,n&&this.activateTitle(),o=!0},t.instance=function(){return s},i.soundInitComplete=function(){o&&this.activateTitle(),n=!0},i.activateTitle=function(){lunchlab.Game.onGameLoaded(null),r.x=345,r.y=330,this.addChild(r),r.addEventListener("click",this._playClicked.bind(this)),d.addEventListener("click",this._playClicked.bind(this)),cloudkid.MediaLoader.instance.load("images/Counter.png",this._counterLoaded.bind(this)),cloudkid.MediaLoader.instance.load("images/KitchenTour_vBG.jpg",this._backgroundLoaded.bind(this)),cloudkid.MediaLoader.instance.load("js/KitchenTourArt.js",this._artLoaded.bind(this)),cloudkid.MediaLoader.instance.load("images/rightArrow.png",this._rightButtonLoaded.bind(this)),cloudkid.MediaLoader.instance.load("images/leftArrow.png",this._leftButtonLoaded.bind(this))},i._playClicked=function(){r.removeEventListener("click",this._playClicked.bind(this)),d.removeEventListener("click",this._playClicked.bind(this)),this.removeChild(r),this.removeChild(d),d=null,r=null,cloudkid.Audio.instance.load(this._soundLoaded.bind(this))},i._soundLoaded=function(){T=!0,G&&I&&P&&D&&j&&this.startGame()},i._artLoaded=function(t){t!==e&&document.body.appendChild(t.content),G=!0,T&&I&&P&&D&&j&&this.startGame()},i._rightButtonLoaded=function(t){t!==e&&(images.rightButton=t.content),c=new cloudkid.Button(images.rightButton),c.x=836,c.y=200,I=!0,G&&P&&T&&D&&j&&this.startGame()},i._leftButtonLoaded=function(t){t!==e&&(images.leftButton=t.content),l=new cloudkid.Button(images.leftButton),l.x=4,l.y=200,P=!0,G&&I&&T&&D&&j&&this.startGame()},i._counterLoaded=function(t){t!==e&&(images.Counter=t.content),D=!0,G&&P&&T&&I&&j&&this.startGame()},i._backgroundLoaded=function(t){t!==e&&(images.KitchenTour_vBG=t.content),j=!0,G&&I&&T&&D&&P&&this.startGame()},i.startGame=function(){h=new lib.KitchenTourArt,m=this._leftDown.bind(this),u=this._rightDown.bind(this),k=this._leftUp.bind(this),g=this._rightUp.bind(this),p=this._itemClicked.bind(this),L=this._closeDialog.bind(this),v=this._itemOver.bind(this),f=this._itemOut.bind(this),C=this._closeButtonOver.bind(this),E=this._closeButtonOut.bind(this),A=this._closeButtonDown.bind(this),b=this._dragStart.bind(this),w=this._dragEnd.bind(this),B=this._dragMove.bind(this),h.blocker.visible=!1,h.dialog.visible=!1,h.dialog.gotoAndStop(0),h.dialog.enableFramerateIndependence(30),h.dialog.mixie.enableFramerateIndependence(30),h.dialog.mixie.mixie.enableFramerateIndependence(30),h.dialog.mixie.gotoAndStop(0),h.dialog.mixie.mixie.gotoAndStop(0),h.dialog.mixie.visible=!1,h.dialog.closeButton.over.visible=h.dialog.closeButton.down.visible=!1,h.dialog.title.text=h.dialog.message.text="",h.total.font=h.found.font="36px cafeteriabold, sans-serif",h.dialog.title.font="30px cafeteriabold, sans-serif",h.total.stroke=h.found.stroke=h.dialog.title.stroke={width:2,color:"#172628"},h.total.text="26",h.found.text="0",h.kitchen.bakingPans.name="bakingPans",h.kitchen.bakingSheet.name="bakingSheet",h.kitchen.blender.name="blender",h.kitchen.bowls.name="bowls",h.kitchen.cookBooks.name="cookBooks",h.kitchen.cuttingBoard.name="cuttingBoard",h.kitchen.foodProcessor.name="foodProcessor",h.kitchen.fridge.name="fridge",h.kitchen.fryingPan.name="fryingPan",h.kitchen.juicer.name="juicer",h.kitchen.measuringCup.name="measuringCup",h.kitchen.microwave.name="microwave",h.kitchen.mixer.name="mixer",h.kitchen.mixingBowl.name="mixingBowl",h.kitchen.ovenMitt.name="ovenMitt",h.kitchen.plates.name="plates",h.kitchen.pressureCooker.name="pressureCooker",h.kitchen.sink.name="sink",h.kitchen.soap.name="soap",h.kitchen.sponge.name="sponge",h.kitchen.stove.name="stove",h.kitchen.teaspoons.name="teaspoons",h.kitchen.timer.name="timer",h.kitchen.toasterOven.name="toasterOven",h.kitchen.trashCan.name="trashCan",h.kitchen.utensils.name="utensils",S=[h.kitchen.bakingPans,h.kitchen.bakingSheet,h.kitchen.blender,h.kitchen.bowls,h.kitchen.cookBooks,h.kitchen.cuttingBoard,h.kitchen.foodProcessor,h.kitchen.fridge,h.kitchen.fryingPan,h.kitchen.juicer,h.kitchen.measuringCup,h.kitchen.microwave,h.kitchen.mixer,h.kitchen.mixingBowl,h.kitchen.ovenMitt,h.kitchen.plates,h.kitchen.pressureCooker,h.kitchen.sink,h.kitchen.soap,h.kitchen.sponge,h.kitchen.stove,h.kitchen.teaspoons,h.kitchen.timer,h.kitchen.toasterOven,h.kitchen.trashCan,h.kitchen.utensils];var e=0;for(e=0;e<S.length;e++)S[e].mouseChildren=!1,S[e].gotoAndStop(1),S[e].cache(S[e].nominalBounds.x,S[e].nominalBounds.y,S[e].nominalBounds.width,S[e].nominalBounds.height);this._activateItemButtons(!0),h.addChild(l),h.addChild(c),h.addChild(h.blocker),h.addChild(h.dialog),this.addChild(h),l.addEventListener("mousedown",m),c.addEventListener("mousedown",u)},i._activateItemButtons=function(e){var t=0;if(e){for(h.kitchen.island.addEventListener("mousedown",b),h.kitchen.background.addEventListener("mousedown",b),h.counters.addEventListener("mousedown",b),t=0;t<S.length;t++)S[t].addEventListener("mousedown",b),S[t].addEventListener("click",p),S[t].addEventListener("mouseover",v),S[t].addEventListener("mouseout",f),S[t].cursor="pointer";cloudkid.OS.instance.stage.enableMouseOver(30)}else for(h.kitchen.island.removeEventListener("mousedown",b),h.kitchen.background.removeEventListener("mousedown",b),h.counters.removeEventListener("mousedown",b),t=0;t<S.length;t++)0===S[t].currentFrame&&(S[t].gotoAndStop(1),S[t].updateCache()),S[t].removeEventListener("mousedown",b),S[t].removeEventListener("click",p),S[t].removeEventListener("mouseover",v),S[t].removeEventListener("mouseout",f),S[t].cursor=""},i._rightDown=function(){F=!0,cloudkid.OS.instance.stage.addEventListener("pressup",g)},i._leftDown=function(){X=!0,cloudkid.OS.instance.stage.addEventListener("pressup",k)},i._rightUp=function(){F=!1,cloudkid.OS.instance.stage.removeEventListener("pressup",g)},i._leftUp=function(){X=!1,cloudkid.OS.instance.stage.removeEventListener("pressup",k)},i._itemOver=function(e){1===e.target.currentFrame&&(e.target.gotoAndStop(0),e.target.updateCache())},i._itemOut=function(e){0===e.target.currentFrame&&(e.target.gotoAndStop(1),e.target.updateCache())},i._itemClicked=function(e){if(!z){y=e.target.name,this._activateItemButtons(!1),-1==Y.indexOf(y)&&(Y.push(y),h.found.text=Y.length,Y.length==S.length&&lunchlab.Game.earnCoins("KitchenTour_Complete")),_=new lib[y],_.gotoAndStop(1);var t;_.nominalBounds.width>_.nominalBounds.height?(t=h.dialog.icon.nominalBounds.width/_.nominalBounds.width,_.y=(h.dialog.icon.nominalBounds.height-_.nominalBounds.height*t)/2):(t=h.dialog.icon.nominalBounds.height/_.nominalBounds.height,_.x=(h.dialog.icon.nominalBounds.width-_.nominalBounds.width*t)/2),_.scaleX=_.scaleY=t,h.dialog.icon.addChild(_),h.dialog.visible=h.blocker.visible=!0,cloudkid.Animator.play(h.dialog,"onOpen",this._dialogOpened.bind(this))}},i._dialogOpened=function(){h.dialog.title.text=H[y].name,h.dialog.message.text=H[y].description,cloudkid.Animator.play(h.dialog,"onMixieEnter",this._mixieEntered.bind(this)),this._activateCloseButton(!0)},i._mixieEntered=function(){h.dialog.mixie.visible=!0,h.dialog.mixie.play(),h.dialog.mixie.mixie.play(),cloudkid.Audio.instance.play(y,L),h.dialog.gotoAndStop("onMixieIdle")},i._closeDialog=function(){this._activateCloseButton(!1),cloudkid.Audio.instance.stop(),h.dialog.mixie.visible=!1,h.dialog.mixie.gotoAndStop(0),h.dialog.mixie.mixie.gotoAndStop(0),cloudkid.Animator.play(h.dialog,"onMixieExit",this._mixieExited.bind(this))},i._mixieExited=function(){h.dialog.title.text="",h.dialog.message.text="",cloudkid.Animator.play(h.dialog,"onClose",this._dialogClosed.bind(this))},i._dialogClosed=function(){h.dialog.visible=h.blocker.visible=!1,h.dialog.icon.removeChild(_),_=null,this._activateItemButtons(!0)},i._activateCloseButton=function(e){e?(h.dialog.closeButton.cursor="pointer",h.dialog.closeButton.addEventListener("mouseover",C),h.dialog.closeButton.addEventListener("mouseout",E),h.dialog.closeButton.addEventListener("mousedown",L)):(this._closeButtonOut(),h.dialog.closeButton.cursor="",h.dialog.closeButton.removeEventListener("mouseover",C),h.dialog.closeButton.removeEventListener("mouseout",E),h.dialog.closeButton.removeEventListener("mousedown",L))},i._closeButtonOver=function(){h.dialog.closeButton.up.visible=h.dialog.closeButton.down.visible=!1,h.dialog.closeButton.over.visible=!0},i._closeButtonDown=function(){h.dialog.closeButton.up.visible=h.dialog.closeButton.over.visible=!1,h.dialog.closeButton.down.visible=!0},i._closeButtonOut=function(){h.dialog.closeButton.down.visible=h.dialog.closeButton.over.visible=!1,h.dialog.closeButton.up.visible=!0},i._dragStart=function(e){z=!1,x=e.stageX,e.target.addEventListener("pressup",w),e.target.addEventListener("pressmove",B)},i._dragMove=function(e){(x-e.stageX>10||x-e.stageX<-10)&&(cloudkid.OS.instance.stage.enableMouseOver(0),this._activateItemButtons(!1),K=!0,z=!0)},i._dragEnd=function(e){K=!1,e.target.removeEventListener("mouseup",w),e.target.removeEventListener("mousemove",w),this._activateItemButtons(!0)},i.update=function(e){var t;K?(t=x-cloudkid.OS.instance.stage.mouseX,x=cloudkid.OS.instance.stage.mouseX,0>t?h.kitchen.x<0+t?(h.kitchen.x-=t,h.counters.x-=t*R):(h.kitchen.x=0,h.counters.x=-3):h.kitchen.x>q-h.kitchen.nominalBounds.width+t?(h.kitchen.x-=t,h.counters.x-=t*R):(h.kitchen.x=q-h.kitchen.nominalBounds.width,h.counters.x=h.kitchen.x*R)):(t=U*e/33,X&&!F?h.kitchen.x<0-t?(h.kitchen.x+=t,h.counters.x+=t*R):h.kitchen.x<0&&(h.kitchen.x=0,h.counters.x=-3):F&&!X&&(h.kitchen.x>q-h.kitchen.nominalBounds.width+t?(h.kitchen.x-=t,h.counters.x-=t*R):h.kitchen.x>q-h.kitchen.nominalBounds.width&&(h.kitchen.x=q-h.kitchen.nominalBounds.width,h.counters.x=h.kitchen.x*R)))},i.resize=function(){var e=cloudkid.OS.instance.stage,t=window.innerWidth,i=window.innerHeight;t>1.5*i?(e.canvas.height=i,e.canvas.width=1.5*i):(e.canvas.width=t,e.canvas.height=t/1.5),this.scaleX=e.canvas.width/900,this.scaleY=e.canvas.width/900},i.destroy=function(){$(window).off("resize",a),this.removeAllChildren(),cloudkid.Audio.instance.stop(),cloudkid.Audio.instance.destroy(),s=null},namespace("lunchlab").KitchenTour=t}();