(function(){
  var platformer = {};

  PBS = this.PBS || {};
  PBS.KIDS = this.PBS.KIDS || {};
  PBS.KIDS.platformer = platformer;

platformer.settings = {"global":{"autoLoad":true,"initialScene":"load","fps":60,"rootElement":"main_content","aspectRatio":2,"nativeAssetResolution":1536,"resizeFont":true},"aspects":[{"ogg":["firefox","opera","chrome"],"m4a":["android","silk"],"m4aCombined":["ipod","ipad","iphone"],"mp3":["msie","safari","trident"]}],"assets":{"ticket-font":{"id":"ticket-font","src":"stationrace/f/viper.ttf"},"intro-intro":{"id":"intro-intro","src":{"ogg":"stationrace/a/intro-intro.ogg","mp3":"stationrace/a/intro-intro.mp3","m4a":"stationrace/a/intro-intro.m4a","m4aCombined":{"assetId":"combined","src":"stationrace/a/combined.m4a","data":{"offset":2240,"length":14116}}}},"intro-choose":{"id":"intro-choose","src":{"ogg":"stationrace/a/intro-choose.ogg","mp3":"stationrace/a/intro-choose.mp3","m4a":"stationrace/a/intro-choose.m4a","m4aCombined":{"assetId":"combined","src":"stationrace/a/combined.m4a","data":{"offset":16776,"length":12724}}}},"instruct-trees":{"id":"instruct-trees","src":{"ogg":"stationrace/a/instruct-trees.ogg","mp3":"stationrace/a/instruct-trees.mp3","m4a":"stationrace/a/instruct-trees.m4a","m4aCombined":{"assetId":"combined","src":"stationrace/a/combined.m4a","data":{"offset":29920,"length":4996}}}},"instruct-time":{"id":"instruct-time","src":{"ogg":"stationrace/a/instruct-time.ogg","mp3":"stationrace/a/instruct-time.mp3","m4a":"stationrace/a/instruct-time.m4a","m4aCombined":{"assetId":"combined","src":"stationrace/a/combined.m4a","data":{"offset":35336,"length":5092}}}},"instruct-tap":{"id":"instruct-tap","src":{"ogg":"stationrace/a/instruct-tap.ogg","mp3":{"assetId":"combined","src":"stationrace/a/ie-combined.mp3","data":{"offset":2000,"length":2800}},"m4a":"stationrace/a/instruct-tap.m4a","m4aCombined":{"assetId":"combined","src":"stationrace/a/combined.m4a","data":{"offset":40848,"length":3244}}}},"instruct-station":{"id":"instruct-station","src":{"ogg":"stationrace/a/instruct-station.ogg","mp3":"stationrace/a/instruct-station.mp3","m4a":"stationrace/a/instruct-station.m4a","m4aCombined":{"assetId":"combined","src":"stationrace/a/combined.m4a","data":{"offset":44512,"length":5884}}}},"instruct-sauropod":{"id":"instruct-sauropod","src":{"ogg":"stationrace/a/instruct-sauropod.ogg","m4a":"stationrace/a/instruct-sauropod.m4a","m4aCombined":{"assetId":"combined","src":"stationrace/a/combined.m4a","data":{"offset":50816,"length":4876}}}},"instruct-sand":{"id":"instruct-sand","src":{"ogg":"stationrace/a/instruct-sand.ogg","m4a":"stationrace/a/instruct-sand.m4a","m4aCombined":{"assetId":"combined","src":"stationrace/a/combined.m4a","data":{"offset":56112,"length":6052}}}},"tick":{"id":"tick","src":{"ogg":"stationrace/a/tick.ogg","mp3":"stationrace/a/tick.mp3","m4a":"stationrace/a/tick.m4a"}},"instruct-bridge":{"id":"instruct-bridge","src":{"ogg":"stationrace/a/instruct-bridge.ogg","mp3":"stationrace/a/instruct-bridge.mp3","m4a":"stationrace/a/instruct-bridge.m4a","m4aCombined":{"assetId":"combined","src":"stationrace/a/combined.m4a","data":{"offset":63848,"length":2884}}}},"time-left":{"id":"time-left","src":{"ogg":"stationrace/a/time-left.ogg","mp3":"stationrace/a/time-left.mp3","m4a":"stationrace/a/time-left.m4a","m4aCombined":{"assetId":"combined","src":"stationrace/a/combined.m4a","data":{"offset":67152,"length":9724}}}},"triceratops-2":{"id":"triceratops-2","src":{"ogg":"stationrace/a/triceratops-2.ogg","m4a":"stationrace/a/triceratops-2.m4a","m4aCombined":{"assetId":"combined","src":"stationrace/a/combined.m4a","data":{"offset":77296,"length":6724}}}},"triceratops-1":{"id":"triceratops-1","src":{"ogg":"stationrace/a/triceratops-1.ogg","mp3":"stationrace/a/triceratops-1.mp3","m4a":"stationrace/a/triceratops-1.m4a","m4aCombined":{"assetId":"combined","src":"stationrace/a/combined.m4a","data":{"offset":84440,"length":6412}}}},"triceratops":{"id":"triceratops","src":{"ogg":"stationrace/a/triceratops.ogg","mp3":"stationrace/a/triceratops.mp3","m4a":"stationrace/a/triceratops.m4a","m4aCombined":{"assetId":"combined","src":"stationrace/a/combined.m4a","data":{"offset":91272,"length":2236}}}},"spinosaurus-2":{"id":"spinosaurus-2","src":{"ogg":"stationrace/a/spinosaurus-2.ogg","m4a":"stationrace/a/spinosaurus-2.m4a","m4aCombined":{"assetId":"combined","src":"stationrace/a/combined.m4a","data":{"offset":93928,"length":7900}}}},"spinosaurus-1":{"id":"spinosaurus-1","src":{"ogg":"stationrace/a/spinosaurus-1.ogg","mp3":"stationrace/a/spinosaurus-1.mp3","m4a":"stationrace/a/spinosaurus-1.m4a","m4aCombined":{"assetId":"combined","src":"stationrace/a/combined.m4a","data":{"offset":102248,"length":6052}}}},"spinosaurus":{"id":"spinosaurus","src":{"ogg":"stationrace/a/spinosaurus.ogg","mp3":"stationrace/a/spinosaurus.mp3","m4a":"stationrace/a/spinosaurus.m4a","m4aCombined":{"assetId":"combined","src":"stationrace/a/combined.m4a","data":{"offset":108720,"length":2164}}}},"set":{"id":"set","src":{"ogg":"stationrace/a/set.ogg","m4a":"stationrace/a/set.m4a","m4aCombined":{"assetId":"combined","src":"stationrace/a/combined.m4a","data":{"offset":111304,"length":1444}}}},"sauroposeidon-2":{"id":"sauroposeidon-2","src":{"ogg":"stationrace/a/sauroposeidon-2.ogg","m4a":"stationrace/a/sauroposeidon-2.m4a","m4aCombined":{"assetId":"combined","src":"stationrace/a/combined.m4a","data":{"offset":113168,"length":10276}}}},"sauroposeidon-1":{"id":"sauroposeidon-1","src":{"ogg":"stationrace/a/sauroposeidon-1.ogg","mp3":"stationrace/a/sauroposeidon-1.mp3","m4a":"stationrace/a/sauroposeidon-1.m4a","m4aCombined":{"assetId":"combined","src":"stationrace/a/combined.m4a","data":{"offset":123864,"length":6052}}}},"sauroposeidon":{"id":"sauroposeidon","src":{"ogg":"stationrace/a/sauroposeidon.ogg","mp3":"stationrace/a/sauroposeidon.mp3","m4a":"stationrace/a/sauroposeidon.m4a","m4aCombined":{"assetId":"combined","src":"stationrace/a/combined.m4a","data":{"offset":130336,"length":2092}}}},"ready":{"id":"ready","src":{"ogg":"stationrace/a/ready.ogg","mp3":"stationrace/a/ready.mp3","m4a":"stationrace/a/ready.m4a","m4aCombined":{"assetId":"combined","src":"stationrace/a/combined.m4a","data":{"offset":132848,"length":1612}}}},"quetzalcoatlus-2":{"id":"quetzalcoatlus-2","src":{"ogg":"stationrace/a/quetzalcoatlus-2.ogg","m4a":"stationrace/a/quetzalcoatlus-2.m4a","m4aCombined":{"assetId":"combined","src":"stationrace/a/combined.m4a","data":{"offset":134880,"length":6460}}}},"quetzalcoatlus-1":{"id":"quetzalcoatlus-1","src":{"ogg":"stationrace/a/quetzalcoatlus-1.ogg","mp3":"stationrace/a/quetzalcoatlus-1.mp3","m4a":"stationrace/a/quetzalcoatlus-1.m4a","m4aCombined":{"assetId":"combined","src":"stationrace/a/combined.m4a","data":{"offset":141760,"length":8212}}}},"quetzalcoatlus":{"id":"quetzalcoatlus","src":{"ogg":"stationrace/a/quetzalcoatlus.ogg","mp3":"stationrace/a/quetzalcoatlus.mp3","m4a":"stationrace/a/quetzalcoatlus.m4a","m4aCombined":{"assetId":"combined","src":"stationrace/a/combined.m4a","data":{"offset":150392,"length":2236}}}},"pteranodon-2":{"id":"pteranodon-2","src":{"ogg":"stationrace/a/pteranodon-2.ogg","m4a":"stationrace/a/pteranodon-2.m4a","m4aCombined":{"assetId":"combined","src":"stationrace/a/combined.m4a","data":{"offset":153048,"length":6244}}}},"pteranodon-1":{"id":"pteranodon-1","src":{"ogg":"stationrace/a/pteranodon-1.ogg","mp3":"stationrace/a/pteranodon-1.mp3","m4a":"stationrace/a/pteranodon-1.m4a","m4aCombined":{"assetId":"combined","src":"stationrace/a/combined.m4a","data":{"offset":159712,"length":5884}}}},"pteranodon":{"id":"pteranodon","src":{"ogg":"stationrace/a/pteranodon.ogg","mp3":"stationrace/a/pteranodon.mp3","m4a":"stationrace/a/pteranodon.m4a","m4aCombined":{"assetId":"combined","src":"stationrace/a/combined.m4a","data":{"offset":166016,"length":1708}}}},"power-up-time":{"id":"power-up-time","src":{"ogg":"stationrace/a/power-up-time.ogg","mp3":"stationrace/a/power-up-time.mp3","m4a":"stationrace/a/power-up-time.m4a","m4aCombined":{"assetId":"combined","src":"stationrace/a/combined.m4a","data":{"offset":168144,"length":4588}}}},"power-up-speed":{"id":"power-up-speed","src":{"ogg":"stationrace/a/power-up-speed.ogg","m4a":"stationrace/a/power-up-speed.m4a","m4aCombined":{"assetId":"combined","src":"stationrace/a/combined.m4a","data":{"offset":173152,"length":4756}}}},"picking-up":{"id":"picking-up","src":{"ogg":"stationrace/a/picking-up.ogg","mp3":"stationrace/a/picking-up.mp3","m4a":"stationrace/a/picking-up.m4a","m4aCombined":{"assetId":"combined","src":"stationrace/a/combined.m4a","data":{"offset":178328,"length":2644}}}},"kosmoceratops-2":{"id":"kosmoceratops-2","src":{"ogg":"stationrace/a/kosmoceratops-2.ogg","m4a":"stationrace/a/kosmoceratops-2.m4a","m4aCombined":{"assetId":"combined","src":"stationrace/a/combined.m4a","data":{"offset":181392,"length":6316}}}},"kosmoceratops-1":{"id":"kosmoceratops-1","src":{"ogg":"stationrace/a/kosmoceratops-1.ogg","mp3":"stationrace/a/kosmoceratops-1.mp3","m4a":"stationrace/a/kosmoceratops-1.m4a","m4aCombined":{"assetId":"combined","src":"stationrace/a/combined.m4a","data":{"offset":188128,"length":10204}}}},"kosmoceratops":{"id":"kosmoceratops","src":{"ogg":"stationrace/a/kosmoceratops.ogg","mp3":"stationrace/a/kosmoceratops.mp3","m4a":"stationrace/a/kosmoceratops.m4a","m4aCombined":{"assetId":"combined","src":"stationrace/a/combined.m4a","data":{"offset":198752,"length":2548}}}},"go":{"id":"go","src":{"ogg":"stationrace/a/go.ogg","m4a":"stationrace/a/go.m4a","m4aCombined":{"assetId":"combined","src":"stationrace/a/combined.m4a","data":{"offset":201720,"length":1876}}}},"finish-track":{"id":"finish-track","src":{"ogg":"stationrace/a/finish-track.ogg","mp3":"stationrace/a/finish-track.mp3","m4a":"stationrace/a/finish-track.m4a","m4aCombined":{"assetId":"combined","src":"stationrace/a/combined.m4a","data":{"offset":204016,"length":3772}}}},"final-success":{"id":"final-success","src":{"ogg":"stationrace/a/final-success.ogg","mp3":"stationrace/a/final-success.mp3","m4a":"stationrace/a/final-success.m4a","m4aCombined":{"assetId":"combined","src":"stationrace/a/combined.m4a","data":{"offset":208208,"length":3676}}}},"final-play-again":{"id":"final-play-again","src":{"ogg":"stationrace/a/final-play-again.ogg","mp3":"stationrace/a/final-play-again.mp3","m4a":"stationrace/a/final-play-again.m4a","m4aCombined":{"assetId":"combined","src":"stationrace/a/combined.m4a","data":{"offset":212304,"length":2764}}}},"final-home":{"id":"final-home","src":{"ogg":"stationrace/a/final-home.ogg","mp3":"stationrace/a/final-home.mp3","m4a":"stationrace/a/final-home.m4a","m4aCombined":{"assetId":"combined","src":"stationrace/a/combined.m4a","data":{"offset":215488,"length":3124}}}},"final-ending":{"id":"final-ending","src":{"ogg":"stationrace/a/final-ending.ogg","mp3":"stationrace/a/final-ending.mp3","m4a":"stationrace/a/final-ending.m4a","m4aCombined":{"assetId":"combined","src":"stationrace/a/combined.m4a","data":{"offset":219032,"length":8476}}}},"deinonychus-2":{"id":"deinonychus-2","src":{"ogg":"stationrace/a/deinonychus-2.ogg","m4a":"stationrace/a/deinonychus-2.m4a","m4aCombined":{"assetId":"combined","src":"stationrace/a/combined.m4a","data":{"offset":227928,"length":7324}}}},"deinonychus-1":{"id":"deinonychus-1","src":{"ogg":"stationrace/a/deinonychus-1.ogg","mp3":"stationrace/a/deinonychus-1.mp3","m4a":"stationrace/a/deinonychus-1.m4a","m4aCombined":{"assetId":"combined","src":"stationrace/a/combined.m4a","data":{"offset":235672,"length":5164}}}},"deinonychus":{"id":"deinonychus","src":{"ogg":"stationrace/a/deinonychus.ogg","mp3":"stationrace/a/deinonychus.mp3","m4a":"stationrace/a/deinonychus.m4a","m4aCombined":{"assetId":"combined","src":"stationrace/a/combined.m4a","data":{"offset":241256,"length":1996}}}},"argentinosaurus-2":{"id":"argentinosaurus-2","src":{"ogg":"stationrace/a/argentinosaurus-2.ogg","m4a":"stationrace/a/argentinosaurus-2.m4a","m4aCombined":{"assetId":"combined","src":"stationrace/a/combined.m4a","data":{"offset":243672,"length":7036}}}},"argentinosaurus-1":{"id":"argentinosaurus-1","src":{"ogg":"stationrace/a/argentinosaurus-1.ogg","mp3":"stationrace/a/argentinosaurus-1.mp3","m4a":"stationrace/a/argentinosaurus-1.m4a","m4aCombined":{"assetId":"combined","src":"stationrace/a/combined.m4a","data":{"offset":251128,"length":7924}}}},"argentinosaurus":{"id":"argentinosaurus","src":{"ogg":"stationrace/a/argentinosaurus.ogg","mp3":"stationrace/a/argentinosaurus.mp3","m4a":"stationrace/a/argentinosaurus.m4a","m4aCombined":{"assetId":"combined","src":"stationrace/a/combined.m4a","data":{"offset":259472,"length":2356}}}},"all-aboard":{"id":"all-aboard","src":{"ogg":"stationrace/a/all-aboard.ogg","mp3":{"assetId":"combined","src":"stationrace/a/ie-combined.mp3","data":{"offset":1,"length":1600}},"m4a":"stationrace/a/all-aboard.m4a","m4aCombined":{"assetId":"combined","src":"stationrace/a/combined.m4a","data":{"offset":262248,"length":2116}}}},"horn":{"id":"horn","src":{"ogg":"stationrace/a/horn.ogg","mp3":{"assetId":"combined","src":"stationrace/a/ie-combined.mp3","data":{"offset":7000,"length":1600}},"m4a":"stationrace/a/horn.m4a","m4aCombined":{"assetId":"combined","src":"stationrace/a/combined.m4a","data":{"offset":264784,"length":2404}}}},"whistle":{"id":"whistle","src":{"ogg":"stationrace/a/whistle.ogg","mp3":{"assetId":"combined","src":"stationrace/a/ie-combined.mp3","data":{"offset":5000,"length":1600}},"m4a":"stationrace/a/whistle.m4a","m4aCombined":{"assetId":"combined","src":"stationrace/a/combined.m4a","data":{"offset":267608,"length":1927}}}},"watch-15":{"id":"watch-15","src":{"ogg":"stationrace/a/watch-15.ogg","mp3":"stationrace/a/watch-15.mp3","m4a":"stationrace/a/watch-15.m4a","m4aCombined":{"assetId":"combined","src":"stationrace/a/combined.m4a","data":{"offset":269955,"length":2236}}}},"watch-0":{"id":"watch-0","src":{"ogg":"stationrace/a/watch-0.ogg","mp3":"stationrace/a/watch-0.mp3","m4a":"stationrace/a/watch-0.m4a","m4aCombined":{"assetId":"combined","src":"stationrace/a/combined.m4a","data":{"offset":272611,"length":4636}}}},"award-speed":{"id":"award-speed","src":{"ogg":"stationrace/a/award-speed.ogg","mp3":"stationrace/a/award-speed.mp3","m4a":"stationrace/a/award-speed.m4a","m4aCombined":{"assetId":"combined","src":"stationrace/a/combined.m4a","data":{"offset":277667,"length":2502}}}},"award-time":{"id":"award-time","src":{"ogg":"stationrace/a/award-time.ogg","mp3":"stationrace/a/award-time.mp3","m4a":"stationrace/a/award-time.m4a","m4aCombined":{"assetId":"combined","src":"stationrace/a/combined.m4a","data":{"offset":280589,"length":1640}}}},"time-first":{"id":"time-first","src":{"ogg":"stationrace/a/time-first.ogg","mp3":"stationrace/a/time-first.mp3","m4a":"stationrace/a/time-first.m4a","m4aCombined":{"assetId":"combined","src":"stationrace/a/combined.m4a","data":{"offset":282649,"length":3988}}}},"final-ending-empty":{"id":"final-ending-empty","src":{"ogg":"stationrace/a/final-ending-empty.ogg","mp3":"stationrace/a/final-ending-empty.mp3","m4a":"stationrace/a/final-ending-empty.m4a","m4aCombined":{"assetId":"combined","src":"stationrace/a/combined.m4a","data":{"offset":287057,"length":4900}}}},"background":{"id":"background","src":{"ogg":"stationrace/a/background.ogg","mp3":"stationrace/a/background.mp3","m4a":"stationrace/a/background.m4a"}},"argentinosaurus-self":{"id":"argentinosaurus-self","src":"stationrace/i/argentinosaurus.png"},"deinonychus-self":{"id":"deinonychus-self","src":"stationrace/i/deinonychus.png"},"kosmoceratops-self":{"id":"kosmoceratops-self","src":"stationrace/i/kosmoceratops.png"},"pteranodon-self":{"id":"pteranodon-self","src":"stationrace/i/pteranodon.png"},"quetzalcoatlus-self":{"id":"quetzalcoatlus-self","src":"stationrace/i/quetzalcoatlus.png"},"sauroposeidon-self":{"id":"sauroposeidon-self","src":"stationrace/i/sauroposeidon.png"},"spinosaurus-self":{"id":"spinosaurus-self","src":"stationrace/i/spinosaurus.png"},"triceratops-self":{"id":"triceratops-self","src":"stationrace/i/triceratops.png"},"blinks":{"id":"blinks","src":"stationrace/i/blinking_eyes.png"},"small-dinos":{"id":"small-dinos","src":"stationrace/i/small-dinos.png","data":{"rows":7,"columns":7}},"medium-dinos":{"id":"medium-dinos","src":"stationrace/i/medium-dinos.png","data":{"rows":9,"columns":8}},"big-dinos":{"id":"big-dinos","src":"stationrace/i/big-dinos.png","data":{"rows":12,"columns":6}},"loading":{"id":"loading","src":"stationrace/i/loading.gif"},"buttons":{"id":"buttons","src":"stationrace/i/buttons.png"},"facts":{"id":"facts","src":"stationrace/i/facts.png"},"popups":{"id":"popups","src":"stationrace/i/popups.png"},"pulse":{"id":"pulse","src":"stationrace/i/circle.png"},"traffic-light":{"id":"traffic-light","src":"stationrace/i/traffic_light.png"},"train-buttons":{"id":"train-buttons","src":"stationrace/i/train-buttons.png"},"menu-background":{"id":"menu-background","src":"stationrace/i/menu_background.png"},"menu-buttons":{"id":"menu-buttons","src":"stationrace/i/menu-buttons.png"},"car-dino-train":{"id":"car-dino-train","src":"stationrace/i/train_car_dinosaur.png"},"car-rocket-train":{"id":"car-rocket-train","src":"stationrace/i/train_car_rocket.png"},"engine-dino-train":{"id":"engine-dino-train","src":"stationrace/i/train_engine_dinosaur.png"},"engine-rocket-train":{"id":"engine-rocket-train","src":"stationrace/i/train_engine_rocket.png"},"tiles":{"id":"tiles","src":"stationrace/i/tiles.png","data":{"rows":10,"columns":10}},"stopwatch":{"id":"stopwatch","src":"stationrace/i/stopwatch.png"},"stopwatch-pie":{"id":"stopwatch-pie","src":"stationrace/i/stopwatch-pie.png"},"watch-hand":{"id":"watch-hand","src":"stationrace/i/watch-hand.png"},"ticket":{"id":"ticket","src":"stationrace/i/ticket.png"},"ticket-button":{"id":"ticket-button","src":"stationrace/i/ticket-button.png"},"conductor-arm":{"id":"conductor-arm","src":"stationrace/i/conductor_arm.png"},"conductor-head":{"id":"conductor-head","src":"stationrace/i/conductor_head.png"},"conductor-body":{"id":"conductor-body","src":"stationrace/i/conductor_body.png"}},"includes":{"../engine/main.js":{"src":"../engine/main.js","id":"../engine/main.js"},"../engine/vector2D.js":{"src":"../engine/vector2D.js","id":"../engine/vector2D.js"},"css/button.css":{"src":"../game/css/button.css","id":"css/button.css"},"css/main.css":{"src":"../game/css/main.css","id":"css/main.css"},"css/game.css":{"src":"../game/css/game.css","id":"css/game.css"},"css/gui.css":{"src":"../game/css/gui.css","id":"css/gui.css"},"css/fullscreen.css":{"src":"../game/css/fullscreen.css","id":"css/fullscreen.css"},"css/results.css":{"src":"../game/css/results.css","id":"css/results.css"},"css/intro.css":{"src":"../game/css/intro.css","id":"css/intro.css"},"css/stopwatch.css":{"src":"../game/css/stopwatch.css","id":"css/stopwatch.css"},"css/intro-dialog.css":{"src":"../game/css/intro-dialog.css","id":"css/intro-dialog.css"},"../engine/collision-shape.js":{"src":"../engine/collision-shape.js","id":"../engine/collision-shape.js"},"../engine/aabb.js":{"src":"../engine/aabb.js","id":"../engine/aabb.js"},"../engine/collision-data-container.js":{"src":"../engine/collision-data-container.js","id":"../engine/collision-data-container.js"},"../engine/messenger.js":{"src":"../engine/messenger.js","id":"../engine/messenger.js"},"../engine/browser.js":{"src":"../engine/browser.js","id":"../engine/browser.js"},"../engine/game.js":{"src":"../engine/game.js","id":"../engine/game.js"},"../engine/scene.js":{"src":"../engine/scene.js","id":"../engine/scene.js"},"../engine/entity.js":{"src":"../engine/entity.js","id":"../engine/entity.js"},"http://code.createjs.com/createjs-2013.12.12.min.js":{"src":"http://code.createjs.com/createjs-2013.12.12.min.js","id":"http://code.createjs.com/createjs-2013.12.12.min.js"},"../engine/factory.js":{"src":"../engine/factory.js","id":"../engine/factory.js"}},"components":{"asset-loader":{"id":"asset-loader","src":"../engine/components/asset-loader.js"},"component-switcher":{"id":"component-switcher","src":"../engine/components/component-switcher.js"},"enable-ios-audio":{"id":"enable-ios-audio","src":"../engine/components/enable-ios-audio.js"},"entity-linker":{"id":"entity-linker","src":"../engine/components/entity-linker.js"},"handler-collision":{"id":"handler-collision","src":"../engine/components/handler-collision.js"},"handler-controller":{"id":"handler-controller","src":"../engine/components/handler-controller.js"},"level-builder":{"id":"level-builder","src":"../engine/components/level-builder.js"},"logic-state-machine":{"id":"logic-state-machine","src":"../engine/components/logic-state-machine.js"},"node":{"id":"node","src":"../engine/components/node.js"},"node-map":{"id":"node-map","src":"../engine/components/node-map.js"},"node-resident":{"id":"node-resident","src":"../engine/components/node-resident.js"},"tiled-loader":{"id":"tiled-loader","src":"../engine/components/tiled-loader.js"},"tween":{"id":"tween","src":"../engine/components/tween.js"},"handler-render-createjs":{"id":"handler-render-createjs","src":"../engine/components/handler-render-createjs.js"},"handler-render-dom":{"id":"handler-render-dom","src":"../engine/components/handler-render-dom.js"},"handler-ai":{"id":"handler-ai","src":"../engine/components/handler-ai.js"},"handler-logic":{"id":"handler-logic","src":"../engine/components/handler-logic.js"},"camera":{"id":"camera","src":"../engine/components/camera.js"},"collision-group":{"id":"collision-group","src":"../engine/components/collision-group.js"},"audio":{"id":"audio","src":"../engine/components/audio.js"},"broadcast-events":{"id":"broadcast-events","src":"../engine/components/broadcast-events.js"},"change-scene":{"id":"change-scene","src":"../engine/components/change-scene.js"},"dom-element":{"id":"dom-element","src":"../engine/components/dom-element.js"},"entity-container":{"id":"entity-container","src":"../engine/components/entity-container.js"},"entity-controller":{"id":"entity-controller","src":"../engine/components/entity-controller.js"},"fullscreen":{"id":"fullscreen","src":"../engine/components/fullscreen.js"},"render-debug":{"id":"render-debug","src":"../engine/components/render-debug.js"},"render-tiles":{"id":"render-tiles","src":"../engine/components/render-tiles.js"},"logic-button":{"id":"logic-button","src":"../engine/components/logic-button.js"},"logic-delay-message":{"id":"logic-delay-message","src":"../engine/components/logic-delay-message.js"},"logic-directional-movement":{"id":"logic-directional-movement","src":"../engine/components/logic-directional-movement.js"},"logic-rotational-movement":{"id":"logic-rotational-movement","src":"../engine/components/logic-rotational-movement.js"},"logic-gravity":{"id":"logic-gravity","src":"../engine/components/logic-gravity.js"},"logic-jump":{"id":"logic-jump","src":"../engine/components/logic-jump.js"},"logic-portal":{"id":"logic-portal","src":"../engine/components/logic-portal.js"},"collision-basic":{"id":"collision-basic","src":"../engine/components/collision-basic.js"},"collision-tiles":{"id":"collision-tiles","src":"../engine/components/collision-tiles.js"},"logic-fps-counter":{"id":"logic-fps-counter","src":"../engine/components/logic-fps-counter.js"},"voice-over":{"id":"voice-over","src":"../engine/components/voice-over.js"},"eagle":{"id":"eagle","src":"../game/components/eagle.js"},"john-henry":{"id":"john-henry","src":"../game/components/john-henry.js"},"play-tutorial":{"id":"play-tutorial","src":"../game/components/play-tutorial.js"},"popup-adder":{"id":"popup-adder","src":"../game/components/popup-adder.js"},"race-monitor":{"id":"race-monitor","src":"../game/components/race-monitor.js"},"train-engine":{"id":"train-engine","src":"../game/components/train-engine.js"},"logic-watch":{"id":"logic-watch","src":"../game/components/logic-watch.js"},"logic-popup":{"id":"logic-popup","src":"../game/components/logic-popup.js"},"logic-results":{"id":"logic-results","src":"../game/components/logic-results.js"},"logic-intro":{"id":"logic-intro","src":"../game/components/logic-intro.js"},"render-sprite":{"id":"render-sprite","src":"../engine/components/render-sprite.js"}},"entities":{"argentinosaurus":{"id":"argentinosaurus","components":[{"type":"render-sprite","rotate":true,"animationMap":{"moving":"walking","default":"idle"},"spriteSheet":{"images":["big-dinos"],"frames":{"width":162,"height":49,"regY":25,"regX":81},"animations":{"walking":{"frames":[36,37,38,39,40,41,42,43,44,45,46,47],"speed":0.25},"idle":{"frames":[24,25,26,27,28,29,30,31,32,33,34,35],"speed":0.25}}}},{"type":"logic-state-machine","inputs":{"load":{"boarding":false,"on-board":false},"all-aboard!":{"boarding":true},"on-train":{"boarding":false,"on-board":true}},"sustained-inputs":{"look":"looking"},"outputs":{"!moving":{"boarding":{"!on-board":"find-train"},"looking":{"event":"goto-closest-node","message":{"type":"train-node","steps":1}}}}},{"type":"logic-delay-message","events":{"find-train":{"event":"look","delay":500,"repeat":true,"singleInstance":true,"cancelEvent":"on-train"}}},{"type":"broadcast-events","parentEvents":{"on-train":"dino-loaded"}},{"type":"node-resident","speed":0.03,"shares":["argentinosaurus","deinonychus","kosmoceratops","pteranodon","quetzalcoatlus","sauroposeidon","spinosaurus","triceratops"],"nodes":{"station-node":"new-place","train-node":"on-train"},"updateOrientation":true,"offset":{"z":10}}],"properties":{"alwaysOn":true,"z":200,"width":66,"height":21}},"deinonychus":{"id":"deinonychus","components":[{"type":"render-sprite","rotate":true,"animationMap":{"moving":"walking","default":"idle"},"spriteSheet":{"images":["medium-dinos"],"frames":{"width":114,"height":46,"regY":23,"regX":57},"animations":{"walking":{"frames":[60,61,62,63,64,65,66,67,68,69,70,71],"speed":0.5},"idle":{"frames":[48,49,50,51,52,53,54,55,56,57,58,59],"speed":0.5}}}},{"type":"logic-state-machine","inputs":{"load":{"boarding":false,"on-board":false},"all-aboard!":{"boarding":true},"on-train":{"boarding":false,"on-board":true}},"sustained-inputs":{"look":"looking"},"outputs":{"!moving":{"boarding":{"!on-board":"find-train"},"looking":{"event":"goto-closest-node","message":{"type":"train-node","steps":1}}}}},{"type":"logic-delay-message","events":{"find-train":{"event":"look","delay":500,"repeat":true,"singleInstance":true,"cancelEvent":"on-train"}}},{"type":"broadcast-events","parentEvents":{"on-train":"dino-loaded"}},{"type":"node-resident","speed":0.09,"shares":["argentinosaurus","deinonychus","kosmoceratops","pteranodon","quetzalcoatlus","sauroposeidon","spinosaurus","triceratops"],"nodes":{"station-node":"new-place","train-node":"on-train"},"updateOrientation":true,"offset":{"z":10}}],"properties":{"alwaysOn":true,"z":200,"width":66,"height":21}},"kosmoceratops":{"id":"kosmoceratops","components":[{"type":"render-sprite","rotate":true,"animationMap":{"moving":"walking","default":"idle"},"spriteSheet":{"images":["medium-dinos"],"frames":{"width":114,"height":46,"regY":23,"regX":57},"animations":{"walking":{"frames":[36,37,38,39,40,41,42,43,44,45,46,47],"speed":0.5},"idle":{"frames":[24,25,26,27,28,29,30,31,32,33,34,35],"speed":0.5}}}},{"type":"logic-state-machine","inputs":{"load":{"boarding":false,"on-board":false},"all-aboard!":{"boarding":true},"on-train":{"boarding":false,"on-board":true}},"sustained-inputs":{"look":"looking"},"outputs":{"!moving":{"boarding":{"!on-board":"find-train"},"looking":{"event":"goto-closest-node","message":{"type":"train-node","steps":1}}}}},{"type":"logic-delay-message","events":{"find-train":{"event":"look","delay":500,"repeat":true,"singleInstance":true,"cancelEvent":"on-train"}}},{"type":"broadcast-events","parentEvents":{"on-train":"dino-loaded"}},{"type":"node-resident","speed":0.05,"shares":["argentinosaurus","deinonychus","kosmoceratops","pteranodon","quetzalcoatlus","sauroposeidon","spinosaurus","triceratops"],"nodes":{"station-node":"new-place","train-node":"on-train"},"updateOrientation":true,"offset":{"z":10}}],"properties":{"alwaysOn":true,"z":200,"width":66,"height":21}},"pteranodon":{"id":"pteranodon","components":[{"type":"render-sprite","rotate":true,"animationMap":{"moving":"walking","default":"idle"},"spriteSheet":{"images":["small-dinos"],"frames":{"width":43,"height":40,"regY":21,"regX":20},"animations":{"walking":{"frames":[12,13,14,15,16,17,18,19,20,21,22,23],"speed":0.5},"idle":{"frames":[0,1,2,3,4,5,6,7,8,9,10,11],"speed":0.5}}}},{"type":"logic-state-machine","inputs":{"load":{"boarding":false,"on-board":false},"all-aboard!":{"boarding":true},"on-train":{"boarding":false,"on-board":true}},"sustained-inputs":{"look":"looking"},"outputs":{"!moving":{"boarding":{"!on-board":"find-train"},"looking":{"event":"goto-closest-node","message":{"type":"train-node","steps":1}}}}},{"type":"logic-delay-message","events":{"find-train":{"event":"look","delay":500,"repeat":true,"singleInstance":true,"cancelEvent":"on-train"}}},{"type":"broadcast-events","parentEvents":{"on-train":"dino-loaded"}},{"type":"node-resident","speed":0.07,"shares":["argentinosaurus","deinonychus","kosmoceratops","pteranodon","quetzalcoatlus","sauroposeidon","spinosaurus","triceratops"],"nodes":{"station-node":"new-place","train-node":"on-train"},"updateOrientation":true,"offset":{"z":10}}],"properties":{"alwaysOn":true,"z":200,"width":66,"height":21}},"quetzalcoatlus":{"id":"quetzalcoatlus","components":[{"type":"render-sprite","rotate":true,"animationMap":{"moving":"walking","default":"idle"},"spriteSheet":{"images":["small-dinos"],"frames":{"width":43,"height":40,"regY":21,"regX":20},"animations":{"walking":{"frames":[36,37,38,39,40,41,42,43,44,45,46,47],"speed":0.5},"idle":{"frames":[24,25,26,27,28,29,30,31,32,33,34,35],"speed":0.5}}}},{"type":"logic-state-machine","inputs":{"load":{"boarding":false,"on-board":false},"all-aboard!":{"boarding":true},"on-train":{"boarding":false,"on-board":true}},"sustained-inputs":{"look":"looking"},"outputs":{"!moving":{"boarding":{"!on-board":"find-train"},"looking":{"event":"goto-closest-node","message":{"type":"train-node","steps":1}}}}},{"type":"logic-delay-message","events":{"find-train":{"event":"look","delay":500,"repeat":true,"singleInstance":true,"cancelEvent":"on-train"}}},{"type":"broadcast-events","parentEvents":{"on-train":"dino-loaded"}},{"type":"node-resident","speed":0.07,"shares":["argentinosaurus","deinonychus","kosmoceratops","pteranodon","quetzalcoatlus","sauroposeidon","spinosaurus","triceratops"],"nodes":{"station-node":"new-place","train-node":"on-train"},"updateOrientation":true,"offset":{"z":10}}],"properties":{"alwaysOn":true,"z":200,"width":66,"height":21}},"sauroposeidon":{"id":"sauroposeidon","components":[{"type":"render-sprite","rotate":true,"animationMap":{"moving":"walking","default":"idle"},"spriteSheet":{"images":["big-dinos"],"frames":{"width":162,"height":49,"regY":25,"regX":81},"animations":{"walking":{"frames":[12,13,14,15,16,17,18,19,20,21,22,23],"speed":0.25},"idle":{"frames":[0,1,2,3,4,5,6,7,8,9,10,11],"speed":0.25}}}},{"type":"logic-state-machine","inputs":{"load":{"boarding":false,"on-board":false},"all-aboard!":{"boarding":true},"on-train":{"boarding":false,"on-board":true}},"sustained-inputs":{"look":"looking"},"outputs":{"!moving":{"boarding":{"!on-board":"find-train"},"looking":{"event":"goto-closest-node","message":{"type":"train-node","steps":1}}}}},{"type":"logic-delay-message","events":{"find-train":{"event":"look","delay":500,"repeat":true,"singleInstance":true,"cancelEvent":"on-train"}}},{"type":"broadcast-events","parentEvents":{"on-train":"dino-loaded"}},{"type":"node-resident","speed":0.03,"shares":["argentinosaurus","deinonychus","kosmoceratops","pteranodon","quetzalcoatlus","sauroposeidon","spinosaurus","triceratops"],"nodes":{"station-node":"new-place","train-node":"on-train"},"updateOrientation":true,"offset":{"z":10}}],"properties":{"alwaysOn":true,"z":200,"width":66,"height":21}},"spinosaurus":{"id":"spinosaurus","components":[{"type":"render-sprite","rotate":true,"animationMap":{"moving":"walking","default":"idle"},"spriteSheet":{"images":["big-dinos"],"frames":{"width":162,"height":49,"regY":25,"regX":81},"animations":{"walking":{"frames":[60,61,62,63,64,65,66,67,68,69,70,71],"speed":0.5},"idle":{"frames":[48,49,50,51,52,53,54,55,56,57,58,59],"speed":0.5}}}},{"type":"logic-state-machine","inputs":{"load":{"boarding":false,"on-board":false},"all-aboard!":{"boarding":true},"on-train":{"boarding":false,"on-board":true}},"sustained-inputs":{"look":"looking"},"outputs":{"!moving":{"boarding":{"!on-board":"find-train"},"looking":{"event":"goto-closest-node","message":{"type":"train-node","steps":1}}}}},{"type":"logic-delay-message","events":{"find-train":{"event":"look","delay":500,"repeat":true,"singleInstance":true,"cancelEvent":"on-train"}}},{"type":"broadcast-events","parentEvents":{"on-train":"dino-loaded"}},{"type":"node-resident","speed":0.09,"shares":["argentinosaurus","deinonychus","kosmoceratops","pteranodon","quetzalcoatlus","sauroposeidon","spinosaurus","triceratops"],"nodes":{"station-node":"new-place","train-node":"on-train"},"updateOrientation":true,"offset":{"z":10}}],"properties":{"alwaysOn":true,"z":200,"width":66,"height":21}},"triceratops":{"id":"triceratops","components":[{"type":"render-sprite","rotate":true,"animationMap":{"moving":"walking","default":"idle"},"spriteSheet":{"images":["medium-dinos"],"frames":{"width":114,"height":46,"regY":23,"regX":57},"animations":{"walking":{"frames":[12,13,14,15,16,17,18,19,20,21,22,23],"speed":0.5},"idle":{"frames":[0,1,2,3,4,5,6,7,8,9,10,11],"speed":0.5}}}},{"type":"logic-state-machine","inputs":{"load":{"boarding":false,"on-board":false},"all-aboard!":{"boarding":true},"on-train":{"boarding":false,"on-board":true}},"sustained-inputs":{"look":"looking"},"outputs":{"!moving":{"boarding":{"!on-board":"find-train"},"looking":{"event":"goto-closest-node","message":{"type":"train-node","steps":1}}}}},{"type":"logic-delay-message","events":{"find-train":{"event":"look","delay":500,"repeat":true,"singleInstance":true,"cancelEvent":"on-train"}}},{"type":"broadcast-events","parentEvents":{"on-train":"dino-loaded"}},{"type":"node-resident","speed":0.05,"shares":["argentinosaurus","deinonychus","kosmoceratops","pteranodon","quetzalcoatlus","sauroposeidon","spinosaurus","triceratops"],"nodes":{"station-node":"new-place","train-node":"on-train"},"updateOrientation":true,"offset":{"z":10}}],"properties":{"alwaysOn":true,"z":200,"width":66,"height":21}},"herd":{"id":"herd","components":[{"type":"collision-basic","collisionType":"herd","shapeType":"circle","solidCollisions":{"track":"turn!","water":"turn!","herd":"turn!","bush":"turn!","rock":"turn!"}},{"type":"logic-rotational-movement","speed":0.05,"degree":0.5,"angle":1.5714},{"type":"render-sprite","rotate":true,"animationMap":{"argentinosaurus,moving":"argentinosaurus-walking","argentinosaurus":"argentinosaurus-idle","sauroposeidon,moving":"sauroposeidon-walking","sauroposeidon":"sauroposeidon-idle"},"spriteSheet":{"images":["big-dinos"],"frames":{"width":162,"height":49,"regY":25,"regX":81},"animations":{"sauroposeidon-walking":{"frames":[12,13,14,15,16,17,18,19,20,21,22,23],"speed":0.25},"sauroposeidon-idle":{"frames":[0,1,2,3,4,5,6,7,8,9,10,11],"speed":0.25},"argentinosaurus-walking":{"frames":[36,37,38,39,40,41,42,43,44,45,46,47],"speed":0.25},"argentinosaurus-idle":{"frames":[24,25,26,27,28,29,30,31,32,33,34,35],"speed":0.25}}},"pins":[{"pinId":"left","x":56,"y":-15},{"pinId":"right","x":56,"y":65}]},{"type":"render-sprite","animationMap":{"argentinosaurus,moving":"argentinosaurus-walking","argentinosaurus":"argentinosaurus-idle","sauroposeidon,moving":"sauroposeidon-walking","sauroposeidon":"sauroposeidon-idle"},"spriteSheet":{"images":["big-dinos"],"frames":{"width":162,"height":49,"regY":25,"regX":81},"animations":{"sauroposeidon-walking":{"frames":[12,13,14,15,16,17,18,19,20,21,22,23],"speed":0.25},"sauroposeidon-idle":{"frames":[0,1,2,3,4,5,6,7,8,9,10,11],"speed":0.25},"argentinosaurus-walking":{"frames":[36,37,38,39,40,41,42,43,44,45,46,47],"speed":0.25},"argentinosaurus-idle":{"frames":[24,25,26,27,28,29,30,31,32,33,34,35],"speed":0.25}}},"pinTo":"left"},{"type":"render-sprite","animationMap":{"argentinosaurus,moving":"argentinosaurus-walking","argentinosaurus":"argentinosaurus-idle","sauroposeidon,moving":"sauroposeidon-walking","sauroposeidon":"sauroposeidon-idle"},"spriteSheet":{"images":["big-dinos"],"frames":{"width":162,"height":49,"regY":25,"regX":81},"animations":{"sauroposeidon-walking":{"frames":[12,13,14,15,16,17,18,19,20,21,22,23],"speed":0.25},"sauroposeidon-idle":{"frames":[0,1,2,3,4,5,6,7,8,9,10,11],"speed":0.25},"argentinosaurus-walking":{"frames":[36,37,38,39,40,41,42,43,44,45,46,47],"speed":0.25},"argentinosaurus-idle":{"frames":[24,25,26,27,28,29,30,31,32,33,34,35],"speed":0.25}}},"pinTo":"right"}],"properties":{"z":200,"width":128,"height":128}},"herd-small":{"id":"herd-small","components":[{"type":"collision-basic","collisionType":"herd","shapeType":"circle","solidCollisions":{"track":"turn!","water":"turn!","herd":"turn!","bush":"turn!","rock":"turn!"}},{"type":"logic-rotational-movement","speed":0.03,"degree":0.4,"angle":1.5714},{"type":"render-sprite","rotate":true,"scaleX":0.8,"scaleY":0.8,"animationMap":{"triceratops,moving":"triceratops-walking","triceratops":"triceratops-idle","kosmoceratops,moving":"kosmoceratops-walking","kosmoceratops":"kosmoceratops-idle"},"spriteSheet":{"images":["medium-dinos"],"frames":{"width":114,"height":46,"regY":23,"regX":57},"animations":{"triceratops-walking":{"frames":[12,13,14,15,16,17,18,19,20,21,22,23],"speed":0.25},"triceratops-idle":{"frames":[0,1,2,3,4,5,6,7,8,9,10,11],"speed":0.25},"kosmoceratops-walking":{"frames":[36,37,38,39,40,41,42,43,44,45,46,47],"speed":0.25},"kosmoceratops-idle":{"frames":[24,25,26,27,28,29,30,31,32,33,34,35],"speed":0.25}}},"pins":[{"pinId":"left","x":30,"y":-12},{"pinId":"right","x":30,"y":58}]},{"type":"render-sprite","animationMap":{"triceratops,moving":"triceratops-walking","triceratops":"triceratops-idle","kosmoceratops,moving":"kosmoceratops-walking","kosmoceratops":"kosmoceratops-idle"},"spriteSheet":{"images":["medium-dinos"],"frames":{"width":114,"height":46,"regY":23,"regX":57},"animations":{"triceratops-walking":{"frames":[12,13,14,15,16,17,18,19,20,21,22,23],"speed":0.25},"triceratops-idle":{"frames":[0,1,2,3,4,5,6,7,8,9,10,11],"speed":0.25},"kosmoceratops-walking":{"frames":[36,37,38,39,40,41,42,43,44,45,46,47],"speed":0.25},"kosmoceratops-idle":{"frames":[24,25,26,27,28,29,30,31,32,33,34,35],"speed":0.25}}},"pinTo":"left"},{"type":"render-sprite","animationMap":{"triceratops,moving":"triceratops-walking","triceratops":"triceratops-idle","kosmoceratops,moving":"kosmoceratops-walking","kosmoceratops":"kosmoceratops-idle"},"spriteSheet":{"images":["medium-dinos"],"frames":{"width":114,"height":46,"regY":23,"regX":57},"animations":{"triceratops-walking":{"frames":[12,13,14,15,16,17,18,19,20,21,22,23],"speed":0.25},"triceratops-idle":{"frames":[0,1,2,3,4,5,6,7,8,9,10,11],"speed":0.25},"kosmoceratops-walking":{"frames":[36,37,38,39,40,41,42,43,44,45,46,47],"speed":0.25},"kosmoceratops-idle":{"frames":[24,25,26,27,28,29,30,31,32,33,34,35],"speed":0.25}}},"pinTo":"right"}],"properties":{"z":200,"width":112,"height":112}},"conductor":{"id":"conductor","components":[{"type":"render-sprite","mirror":true,"image":"conductor-body","width":283,"height":432,"y":0,"x":0,"regX":141,"regY":432,"pins":[{"pinId":"conductor-neck","x":201,"y":40},{"pinId":"conductor-arm","x":245,"y":148,"z":-1}]},{"type":"render-sprite","pinTo":"conductor-arm","spriteSheet":{"images":["conductor-arm"],"frames":{"width":207,"height":173,"regX":14,"regY":85},"animations":{"default":{"frames":[16,17,18,19,20,21,22,23,23,23,23,23,23,23,23,23,23,24,25,26,27,28,29,30,31,32,33,33,33,33,33,33,33,33,33],"speed":0.25},"point-at-dino-train":{"frames":[0,1,2,3,4,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,5,4,3,2,1,0],"speed":0.25,"next":"stationary"},"point-at-rocket-train":{"frames":[15,14,13,12,11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,12,13,14,15],"speed":0.25,"next":"stationary"},"stationary":0}}},{"type":"voice-over","messagePrefix":"conductor-says","frameLength":100,"pinTo":"conductor-neck","animationMap":{"a":"face-a","b":"face-m","c":"face-d","d":"face-d","e":"face-a","f":"face-f","g":"face-d","h":"face-a","i":"face-i","j":"face-d","k":"face-d","l":"face-l","m":"face-m","n":"face-i","o":"face-o","p":"face-m","q":"face-o","r":"face-o","s":"face-i","t":"face-i","u":"face-d","v":"face-i","w":"face-i","x":"face-d","y":"face-d","z":"face-i","default":"default"},"spriteSheet":{"images":["conductor-head"],"frames":{"width":120,"height":147,"regX":34,"regY":117},"animations":{"face-m":23,"face-o":20,"face-i":22,"face-l":22,"face-a":19,"face-f":22,"face-d":21,"default":{"frames":[0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"speed":0.5}}},"voiceoverMap":{"intro":[{"sound":"intro-intro","voice":" legraitstaisnraisistodayy     helmistaonskejlnpkupasmanipasnjrsaswecanbilayntrakfltraainn    lesihomanidnosrswkapiupbiforltamrunsaaot"},{"sound":{"sound":"intro-choose","events":[{"time":0,"event":"point-at-dino-train"},{"time":2000,"event":"point-at-rocket-train"},{"time":7000,"event":"point-at-dino-train"},{"time":11000,"event":"point-at-rocket-train"}]},"voice":" suusldanosrtainn orlraktraintobginlayngtrak    iywanmrtaimtbildtak   susldanosrtrain  ifywanagofastr  suslraoketraainnn"}],"results":[{"sound":{"sound":"final-ending","events":[{"time":10000,"event":"show-results"}]},"voice":" fantastikkjaob   yurretrrifiktrakbidrr  wanaplaegnansifyukolekmorrdanosarrss"}],"results-empty":[{"sound":{"sound":"final-ending-empty","events":[{"time":10000,"event":"show-results"}]},"voice":"iitlokakwddlivranidanosrsstaim  ywnatragnn"}],"highlight-play-again":[{"sound":"final-play-again"},{"sound":{"sound":"final-home","events":[{"time":0,"event":"highlight-home"},{"time":10000,"event":"unhighlight-home"}]}}]}},{"type":"entity-linker","linkId":"conductor","events":{"go-away-screen":"hide-screen","show-results":"show-results","show-trains":"show-design-both","persistent-data":"set-persistent-scene-data","highlight-play-again":"highlight-play-again","highlight-home":"highlight-play-something-else","unhighlight-home":"unhighlight-play-something-else"}},{"type":"logic-delay-message","events":{"point-at-dino-train":{"event":"at-ease","delay":2000},"show-results":{"event":"highlight-play-again","delay":1000}}}],"properties":{"x":180,"y":560,"z":10}},"argentinosaurus-cs":{"id":"argentinosaurus-cs","components":[{"type":"render-sprite","image":"argentinosaurus-self","scaleX":0.8776,"scaleY":0.8776,"width":425,"height":438,"y":0,"x":0,"regX":0,"regY":0,"pins":[{"pinId":"eye","x":125,"y":15}]},{"type":"render-sprite","pinTo":"eye","spriteSheet":{"images":["blinks"],"frames":{"width":59,"height":49,"regX":30,"regY":25},"animations":{"default":{"frames":[6,7,8,8,7,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6],"speed":0.5}}}}],"properties":{"x":442,"y":11,"z":1}},"deinonychus-cs":{"id":"deinonychus-cs","components":[{"type":"render-sprite","image":"deinonychus-self","scaleX":0.6514,"scaleY":0.6514,"width":370,"height":397,"y":0,"x":0,"regX":0,"regY":0,"pins":[{"pinId":"eye","x":318,"y":20}]},{"type":"render-sprite","pinTo":"eye","spriteSheet":{"images":["blinks"],"frames":{"width":59,"height":49,"regX":30,"regY":25},"animations":{"default":{"frames":[3,4,5,5,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,5,5,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],"speed":0.5}}}}],"properties":{"x":495,"y":302,"z":8}},"kosmoceratops-cs":{"id":"kosmoceratops-cs","components":[{"type":"render-sprite","image":"kosmoceratops-self","scaleX":0.6185,"scaleY":0.6185,"width":498,"height":312,"y":0,"x":0,"regX":0,"regY":0,"pins":[{"pinId":"eye","x":424,"y":132}]},{"type":"render-sprite","pinTo":"eye","spriteSheet":{"images":["blinks"],"frames":{"width":59,"height":49,"regX":30,"regY":25},"animations":{"default":{"frames":[0,1,2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"speed":0.5}}}}],"properties":{"x":275,"y":286,"z":4}},"pteranodon-cs":{"id":"pteranodon-cs","components":[{"type":"render-sprite","image":"pteranodon-self","scaleX":0.5016,"scaleY":0.5016,"width":307,"height":439,"y":0,"x":0,"regX":0,"regY":0,"pins":[{"pinId":"eye","x":126,"y":62}]},{"type":"render-sprite","pinTo":"eye","spriteSheet":{"images":["blinks"],"frames":{"width":59,"height":49,"regX":30,"regY":25},"animations":{"default":{"frames":[11,10,9,9,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11],"speed":0.5}}}}],"properties":{"x":220,"y":330,"z":7}},"quetzalcoatlus-cs":{"id":"quetzalcoatlus-cs","components":[{"type":"render-sprite","image":"quetzalcoatlus-self","scaleX":0.9578,"scaleY":0.9578,"width":332,"height":441,"y":0,"x":0,"regX":0,"regY":0,"pins":[{"pinId":"eye","x":104,"y":33}]},{"type":"render-sprite","pinTo":"eye","spriteSheet":{"images":["blinks"],"frames":{"width":59,"height":49,"regX":30,"regY":25},"animations":{"default":{"frames":[21,22,23,23,22,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21],"speed":0.5}}}}],"properties":{"x":11,"y":110,"z":6}},"sauroposeidon-cs":{"id":"sauroposeidon-cs","components":[{"type":"render-sprite","image":"sauroposeidon-self","scaleX":0.9235,"scaleY":0.9235,"width":392,"height":441,"y":0,"x":0,"regX":76,"regY":0,"pins":[{"pinId":"eye","x":350,"y":33}]},{"type":"render-sprite","pinTo":"eye","spriteSheet":{"images":["blinks"],"frames":{"width":59,"height":49,"regX":30,"regY":25},"animations":{"default":{"frames":[12,13,14,14,13,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12],"speed":0.5}}}}],"properties":{"x":0,"y":21,"z":2}},"spinosaurus-cs":{"id":"spinosaurus-cs","components":[{"type":"render-sprite","image":"spinosaurus-self","scaleX":0.9389,"scaleY":0.9389,"width":491,"height":371,"y":0,"x":0,"regX":0,"regY":0,"pins":[{"pinId":"eye","x":383,"y":92}]},{"type":"render-sprite","pinTo":"eye","spriteSheet":{"images":["blinks"],"frames":{"width":59,"height":49,"regX":30,"regY":25},"animations":{"default":{"frames":[15,16,17,17,16,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,16,17,17,16,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15],"speed":0.5}}}}],"properties":{"x":121,"y":110,"z":3}},"triceratops-cs":{"id":"triceratops-cs","components":[{"type":"render-sprite","image":"triceratops-self","scaleX":0.9,"scaleY":0.9,"width":500,"height":256,"y":0,"x":0,"regX":0,"regY":0,"pins":[{"pinId":"eye","x":406,"y":101}]},{"type":"render-sprite","pinTo":"eye","spriteSheet":{"images":["blinks"],"frames":{"width":59,"height":49,"regX":30,"regY":25},"animations":{"default":{"frames":[18,19,20,20,19,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18],"speed":0.5}}}}],"properties":{"x":44,"y":275,"z":5}},"interface-layer":{"id":"interface-layer","components":[{"type":"handler-logic"},{"type":"handler-render-dom"},{"type":"entity-container","entities":[{"type":"button-fullscreen"},{"type":"fps-counter"},{"type":"stopwatch"},{"type":"corner-popups"},{"type":"intro-dialog"}],"childEvents":["link-entity","time-elapsed","scene-loaded"]}]},"tile-layer":{"id":"tile-layer","components":[{"type":"render-tiles","spriteSheet":"import","imageMap":"import"},{"type":"collision-tiles","collisionMap":"import"}]},"render-layer":{"id":"render-layer","components":[{"type":"render-tiles","spriteSheet":"import","imageMap":"import","entityCache":true}]},"collision-layer":{"id":"collision-layer","components":[{"type":"collision-tiles","collisionMap":"import"}]},"corner-popups":{"id":"corner-popups","components":[{"type":"dom-element","className":"corner-popups","id":"corner-popups","updateClassName":true,"aliases":{"ticket-state":"logical-state"}},{"type":"popup-adder"},{"type":"entity-linker","linkId":"ticket-master"}]},"bush":{"id":"bush","components":[{"type":"render-sprite","rotate":true,"spriteSheet":{"images":["tiles"],"frames":{"width":64,"height":64,"regY":32,"regX":32},"animations":{"alternate":52,"default":42}}},{"type":"collision-basic","collisionType":"bush","shapeType":"circle","softCollisions":{"track":""},"immobile":true},{"type":"broadcast-events","events":{"hit-by-track":"track-collision"}}],"properties":{"z":300}},"bush-large":{"id":"bush-large","components":[{"type":"collision-basic","collisionType":"bush","shape":{"type":"circle","radius":64},"softCollisions":{"track":""},"immobile":true},{"type":"render-sprite","image":"tiles","rotate":true,"width":128,"height":128,"y":256,"x":0,"regX":64,"regY":64},{"type":"broadcast-events","events":{"hit-by-track":"track-collision"}}],"properties":{"z":300}},"button-fullscreen":{"id":"button-fullscreen","components":[{"type":"dom-element","element":"div","className":"button-fullscreen","onmouseup":"toggle-fullscreen","ontouchend":"toggle-fullscreen"},{"type":"fullscreen"}]},"button-build-dino":{"id":"button-build-dino","components":[{"type":"dom-element","element":"div","className":"menu-button build-dino","updateClassName":true,"onmouseup":"new-scene","ontouchend":"new-scene"},{"type":"change-scene","scene":"build-dino-train","persistentData":{"train":"dino"},"transition":"fade-to-black"}]},"button-build-rocket":{"id":"button-build-rocket","components":[{"type":"dom-element","element":"div","className":"menu-button build-rocket","updateClassName":true,"onmouseup":"new-scene","ontouchend":"new-scene"},{"type":"change-scene","scene":"build-dino-train","persistentData":{"train":"rocket"},"transition":"fade-to-black"}]},"button-play-game":{"id":"button-play-game","components":[{"type":"dom-element","element":"div","className":"menu-button","onmouseup":"new-scene","ontouchend":"new-scene"},{"type":"change-scene","scene":"menu","transition":"fade-to-black","persistentData":{"special":"ceratopsian","dinos":{"A":["triceratops","pteranodon","pteranodon","pteranodon","pteranodon"],"B":["kosmoceratops","quetzalcoatlus","quetzalcoatlus","quetzalcoatlus","quetzalcoatlus","quetzalcoatlus","quetzalcoatlus"],"dA":["triceratops"],"dB":["kosmoceratops","sauroposeidon","sauroposeidon"],"rA":["kosmoceratops","spinosaurus"],"rB":["triceratops","deinonychus"]}}}]},"funnel":{"id":"funnel","components":[{"type":"collision-basic","collisionType":"funnel"}],"properties":{"z":50,"radius":32}},"popup":{"id":"popup","components":[{"type":"logic-popup","fadeThreshold":0.8,"time":1000,"aliases":{"load":"pop"}},{"type":"render-sprite","rotate":true,"spriteSheet":{"images":["tiles"],"frames":{"width":64,"height":64,"regX":32,"regY":32},"animations":{"a":80,"b":81,"c":82}}}],"properties":{"scaleX":0.3,"scaleY":0.3,"z":3999}},"pu-speed":{"id":"pu-speed","components":[{"type":"render-sprite","scaleX":0.75,"scaleY":0.75,"spriteSheet":{"images":["tiles"],"frames":[[193,321,126,126,0,63,63],[193,449,126,126,0,63,63]],"animations":{"dino":1,"rocket":0,"default":1}}},{"type":"logic-popup"},{"type":"broadcast-events","events":{"popped":"speed-acquired"}},{"type":"collision-basic","collisionType":"power-up","shapeType":"circle","softCollisions":{"train":"pop"}}],"properties":{"z":300}},"pu-time":{"id":"pu-time","components":[{"type":"render-sprite","scaleX":0.75,"scaleY":0.75,"spriteSheet":{"images":["tiles"],"frames":[[321,449,126,126,0,63,63]],"animations":{"default":0}}},{"type":"logic-popup"},{"type":"broadcast-events","events":{"popped":"time-acquired"}},{"type":"collision-basic","collisionType":"power-up","shapeType":"circle","softCollisions":{"train":"pop"}}],"properties":{"z":300}},"rocket-train":{"id":"rocket-train","components":[{"type":"collision-basic","collisionType":"train","shapeType":"circle","softCollisions":{"power-up":"power-up-acquired"}},{"type":"render-sprite","rotate":true,"animationMap":{"default":"facing-right"},"spriteSheet":{"images":["engine-rocket-train"],"frames":{"width":191,"height":64,"regY":32,"regX":95},"animations":{"facing-right":{"frames":[0]}}}},{"type":"train-engine"},{"type":"entity-linker","linkId":"train","events":{"set-speed":"set-property","east":"east"}},{"type":"node-resident","nodes":{"track":"passing-tie","track-bridge":"passing-tie","track-station":"passing-tie","track-sand":"passing-tie"},"updateOrientation":true,"offset":{"z":100}}],"properties":{"alwaysOn":true,"z":200,"width":80,"height":240,"camera":"forward"}},"rock":{"id":"rock","components":[{"type":"render-sprite","rotate":true,"spriteSheet":{"images":["tiles"],"frames":{"width":64,"height":64,"regY":32,"regX":32},"animations":{"alternate":72,"default":62}}},{"type":"collision-basic","collisionType":"rock","shapeType":"circle","softCollisions":{"track":""},"immobile":true},{"type":"broadcast-events","events":{"hit-by-track":"track-collision"}}],"properties":{"z":50}},"rock-large":{"id":"rock-large","components":[{"type":"collision-basic","collisionType":"rock","shape":{"type":"circle","radius":64},"softCollisions":{"track":""},"immobile":true},{"type":"render-sprite","image":"tiles","rotate":true,"width":128,"height":128,"y":384,"x":0,"regX":64,"regY":64},{"type":"broadcast-events","events":{"hit-by-track":"track-collision"}}],"properties":{"z":50}},"station":{"id":"station","components":[{"type":"collision-basic","collisionType":"station","softCollisions":{"track":""}},{"type":"broadcast-events","events":{"hit-by-track":"track-collision"}}],"properties":{"z":50,"radius":32}},"station-node":{"id":"station-node","components":[{"type":"node"}],"properties":{"orientation":0}},"stopwatch":{"id":"stopwatch","components":[{"type":"logic-watch"},{"type":"dom-element","className":"stopwatch cornered","id":"stopwatch","updateClassName":true,"aliases":{"ticket-state":"logical-state"}},{"type":"dom-element","className":"watch-hand","parent":"stopwatch","aliases":{"move-hand":"set-style"}},{"type":"dom-element","className":"pie slice-1","parent":"stopwatch"},{"type":"dom-element","className":"pie slice-2","parent":"stopwatch"},{"type":"dom-element","className":"pie slice-3","parent":"stopwatch"},{"type":"dom-element","className":"pie slice-4","parent":"stopwatch"},{"type":"dom-element","className":"pie slice-5","parent":"stopwatch"},{"type":"dom-element","className":"pie slice-6","parent":"stopwatch"},{"type":"dom-element","className":"pie slice-7","parent":"stopwatch"},{"type":"dom-element","className":"pie slice-8","parent":"stopwatch"},{"type":"dom-element","className":"pie slice-9","parent":"stopwatch"},{"type":"dom-element","className":"pie slice-10","parent":"stopwatch"},{"type":"dom-element","className":"pie slice-11","parent":"stopwatch"},{"type":"dom-element","className":"pie slice-12","parent":"stopwatch"},{"type":"entity-linker","linkId":"ticket-master","events":{"time-is-up!":"out-of-time","time-is-short":"time-is-short","time-is-left":"time-left"}},{"type":"audio","preventOverlaps":"ignore","audioMap":{"go":{"sound":"background","loop":12,"volume":0.8},"final-tick":"tick"},"aliases":{"time-is-up!":"stop-audio"}}]},"track":{"id":"track","components":[{"type":"collision-basic","collisionType":"track","softCollisions":{"funnel":"","sand":"","water":"","rock":"","bush":"","herd":"","station":""},"immobile":true},{"type":"broadcast-events","events":{"hit-by-funnel":"track-in-funnel"}},{"type":"render-sprite","rotate":true,"animationMap":{"permanent":"track-0","default":"track-1"},"spriteSheet":{"images":["tiles"],"frames":[[420,132,24,56,0,12,28],[420,196,24,56,0,12,28]],"animations":{"track-0":0,"track-1":1}}},{"type":"node"}],"properties":{"orientation":0,"opacity":0.5}},"track-bridge":{"id":"track-bridge","components":[{"type":"collision-basic","collisionType":"track","softCollisions":{"funnel":"","water":"","rock":"","bush":"","herd":"","station":""},"immobile":true},{"type":"render-sprite","rotate":true,"animationMap":{"bridge-0,permanent":"bridge-0","bridge-1,permanent":"bridge-0","bridge-2,permanent":"bridge-0","bridge-3,permanent":"bridge-0","bridge-4,permanent":"bridge-0","bridge-5,permanent":"bridge-1","bridge-0":"bridge-2","bridge-1":"bridge-2","bridge-2":"bridge-2","bridge-3":"bridge-2","bridge-4":"bridge-2","bridge-5":"bridge-3"},"spriteSheet":{"images":["tiles"],"frames":[[388,128,24,64,0,12,32],[392,256,48,96,0,36,48],[388,192,24,64,0,12,32],[392,352,48,96,0,36,48]],"animations":{"bridge-0":0,"bridge-1":1,"bridge-2":2,"bridge-3":3}}},{"type":"node"}],"properties":{"orientation":0,"opacity":0.5}},"track-fake":{"id":"track-fake","components":[{"type":"render-sprite","image":"tiles","rotate":true,"width":24,"height":56,"y":132,"x":420,"regX":12,"regY":28}],"properties":{"orientation":0}},"track-sand":{"id":"track-sand","components":[{"type":"collision-basic","collisionType":"track","softCollisions":{"funnel":"","sand":"","water":"","rock":"","bush":"","herd":"","station":""},"immobile":true},{"type":"render-sprite","rotate":true,"animationMap":{"sand-0,permanent":"sand-0","sand-1,permanent":"sand-1","sand-2,permanent":"sand-2","sand-3,permanent":"sand-3","sand-4,permanent":"sand-4","sand-5,permanent":"sand-5","sand-0":"sand-6","sand-1":"sand-7","sand-2":"sand-8","sand-3":"sand-9","sand-4":"sand-10","sand-5":"sand-11"},"spriteSheet":{"images":["tiles"],"frames":[[320,128,24,64,0,12,32],[340,128,24,64,0,12,32],[360,128,24,64,0,12,32],[320,192,24,64,0,12,32],[340,192,24,64,0,12,32],[360,192,24,64,0,12,32],[384,0,24,64,0,12,32],[404,0,24,64,0,12,32],[424,0,24,64,0,12,32],[384,64,24,64,0,12,32],[404,64,24,64,0,12,32],[424,64,24,64,0,12,32]],"animations":{"sand-0":0,"sand-1":1,"sand-2":2,"sand-3":3,"sand-4":4,"sand-5":5,"sand-6":6,"sand-7":7,"sand-8":8,"sand-9":9,"sand-10":10,"sand-11":11}}},{"type":"node"}],"properties":{"orientation":0,"opacity":0.5}},"track-station":{"id":"track-station","components":[{"type":"collision-basic","collisionType":"track-station","softCollisions":{"track":""},"immobile":true},{"type":"broadcast-events","events":{"hit-by-track":"track-collision"}},{"type":"render-sprite","image":"tiles","rotate":true,"width":24,"height":56,"y":132,"x":420,"regX":12,"regY":28},{"type":"node"}],"properties":{"orientation":0}},"train-car":{"id":"train-car","components":[{"type":"render-sprite","rotate":true,"spriteSheet":{"images":["car-dino-train","car-rocket-train"],"frames":{"width":119,"height":64,"regY":32,"regX":60},"animations":{"dino":{"frames":[0]},"rocket":{"frames":[1]}}}},{"type":"node-resident","nodes":{"track":"passing-tie","track-bridge":"passing-tie","track-station":"passing-tie","track-sand":"passing-tie"},"updateOrientation":true,"offset":{"z":100}},{"type":"logic-state-machine","outputs":{"!moving":"east"}},{"type":"entity-linker","linkId":"train"}],"properties":{"alwaysOn":true,"z":200,"width":128,"height":64}},"dino-train":{"id":"dino-train","components":[{"type":"collision-basic","collisionType":"train","shapeType":"circle","softCollisions":{"power-up":"power-up-acquired"}},{"type":"render-sprite","rotate":true,"animationMap":{"default":"facing-right"},"spriteSheet":{"images":["engine-dino-train"],"frames":{"width":174,"height":64,"regY":32,"regX":80},"animations":{"facing-right":{"frames":[0]}}}},{"type":"train-engine"},{"type":"entity-linker","linkId":"train","events":{"set-speed":"set-property","east":"east"}},{"type":"node-resident","nodes":{"track":"passing-tie","track-bridge":"passing-tie","track-station":"passing-tie","track-sand":"passing-tie"},"updateOrientation":true,"offset":{"z":100}}],"properties":{"alwaysOn":true,"z":200,"width":80,"height":240,"camera":"forward"}},"eagle":{"id":"eagle","components":[{"type":"eagle"}],"properties":{"z":300}},"train-node":{"id":"train-node","components":[{"type":"node"}],"properties":{"orientation":0}},"progress-bar":{"id":"progress-bar","components":[{"type":"dom-element","id":"progress-bar-container","className":"progress-bar"},{"type":"dom-element","id":"progress-bar-container-container","parent":"progress-bar-container"},{"type":"dom-element","id":"progress-bar","parent":"progress-bar-container-container"},{"type":"entity-container","entities":[{"id":"container","components":[{"type":"change-scene","scene":"menu","aliases":{"complete":"new-scene"}},{"type":"asset-loader","progressBar":"progress-bar","useXHR":false}]}]}]},"progress-bar-ios":{"id":"progress-bar-ios","components":[{"type":"dom-element","id":"progress-bar-container","className":"progress-bar"},{"type":"dom-element","id":"progress-bar-container-container","parent":"progress-bar-container"},{"type":"dom-element","id":"progress-bar","parent":"progress-bar-container-container"},{"type":"entity-container","entities":[{"id":"container","components":[{"type":"change-scene","scene":"play-game","aliases":{"complete":"new-scene"}},{"type":"asset-loader","progressBar":"progress-bar","useXHR":false}]}]}]},"pulse":{"id":"pulse","components":[{"type":"render-sprite","image":"pulse","top":0,"left":0,"width":300,"height":300,"regX":150,"regY":150},{"type":"tween","events":{"instruct-tap":[["to",{"opacity":1,"scaleX":1.2,"scaleY":1.2},500],["to",{"opacity":0.3,"scaleX":1,"scaleY":1},350],["to",{"opacity":1,"scaleX":1.2,"scaleY":1.2},350],["to",{"opacity":0.3,"scaleX":1,"scaleY":1},350],["to",{"opacity":1,"scaleX":1.2,"scaleY":1.2},350],["to",{"opacity":0.3,"scaleX":1,"scaleY":1},350],["to",{"opacity":1,"scaleX":1.2,"scaleY":1.2},350],["to",{"opacity":0,"scaleX":1,"scaleY":1},500]]}}],"properties":{"z":150,"width":300,"height":300,"opacity":0}},"level-portal":{"id":"level-portal","components":[{"type":"logic-portal"},{"type":"collision-basic","collisionType":"portal","immobile":true,"softCollisions":{"hero":"occupied-portal"}},{"type":"change-scene","transition":"fade-to-black"}],"properties":{"z":0}},"title-screen":{"id":"title-screen","components":[{"type":"dom-element","element":"div","className":"title-screen"}]},"fps-counter":{"id":"fps-counter","components":[{"type":"logic-fps-counter"},{"type":"dom-element","className":"fps-counter","style":{"position":"absolute","left":"0.1em","top":"0.1em","color":"white","fontSize":"0.4em","fontWeight":"bold","fontFamily":"Arial","pointerEvents":"none","zIndex":11}}]},"sand":{"id":"sand","components":[{"type":"collision-basic","collisionType":"sand","immobile":true}],"properties":{"z":50}},"tutorial-trigger":{"id":"tutorial-trigger","components":[{"type":"play-tutorial"},{"type":"audio","preventOverlaps":true,"audioMap":{"power-up-time":"power-up-time","power-up-speed":"power-up-speed","instruct-trees":"instruct-trees","instruct-sand":"instruct-sand","instruct-bridge":"instruct-bridge","instruct-station":"instruct-station","instruct-time":"instruct-time","instruct-sauropod":"instruct-sauropod"}},{"type":"collision-basic","collisionType":"tutorial","softCollisions":{"track":"play-tutorial","track-bridge":"play-tutorial","track-sand":"play-tutorial"}},{"type":"render-debug"}],"properties":{"z":300}},"results-interface":{"id":"results-interface","components":[{"type":"logic-results"},{"type":"dom-element","element":"div","id":"projector-screen","className":"projector-screen","updateClassName":true,"aliases":{"update-projector-screen":"logical-state"}},{"type":"dom-element","parent":"projector-screen","className":"dino-train"},{"type":"dom-element","parent":"projector-screen","className":"rocket-train"},{"type":"dom-element","element":"div","className":"results-blind","updateClassName":true,"aliases":{"update-results-blind":"logical-state"}},{"type":"dom-element","element":"div","className":"play-again-button end-button","updateClassName":true,"onmousedown":["audio-stop","new-scene"],"ontouchstart":["audio-stop","new-scene"],"aliases":{"update-play-again-button":"logical-state"}},{"type":"dom-element","element":"a","className":"something-else-button end-button","updateClassName":true,"href":"http://pbskids.org/dinosaurtrain/games/index.html","aliases":{"update-something-else-button":"logical-state"}},{"type":"change-scene","scene":"menu","transition":"fade-to-black"},{"type":"entity-linker","linkId":"conductor","events":{"results":"results","results-empty":"results-empty"}}]},"intro-dialog":{"id":"intro-dialog","components":[{"type":"dom-element","className":"intro-dialog","id":"dialog","updateClassName":true,"aliases":{"ticket-state":"logical-state"}},{"type":"dom-element","className":"go-light","updateClassName":true,"aliases":{"go-light":"logical-state","set":"logical-state","go":"logical-state"}},{"type":"dom-element","className":"dino","parent":"dialog"},{"type":"dom-element","className":"dino-title dino-argentinosaurus","innerHTML":"Argentinosaurus","parent":"dialog"},{"type":"dom-element","className":"dino-title dino-sauroposeidon","innerHTML":"Sauroposeidon","parent":"dialog"},{"type":"dom-element","className":"dino-title dino-deinonychus","innerHTML":"Deinonychus","parent":"dialog"},{"type":"dom-element","className":"dino-title dino-spinosaurus","innerHTML":"Spinosaurus","parent":"dialog"},{"type":"dom-element","className":"dino-title dino-kosmoceratops","innerHTML":"Kosmoceratops","parent":"dialog"},{"type":"dom-element","className":"dino-title dino-triceratops","innerHTML":"Triceratops","parent":"dialog"},{"type":"dom-element","className":"dino-title dino-pteranodon","innerHTML":"Pteranodon","parent":"dialog"},{"type":"dom-element","className":"dino-title dino-quetzalcoatlus","innerHTML":"Quetzalcoatlus","parent":"dialog"},{"type":"dom-element","className":"subtitle carnivore","innerHTML":"Carnivore","parent":"dialog"},{"type":"dom-element","className":"subtitle herbivore","innerHTML":"Herbivore","parent":"dialog"},{"type":"dom-element","className":"subtitle biped","innerHTML":"Biped","parent":"dialog"},{"type":"dom-element","className":"subtitle quadruped","innerHTML":"Quadruped","parent":"dialog"},{"type":"dom-element","className":"subtitle ceratopsian","innerHTML":"Ceratopsian","parent":"dialog"},{"type":"dom-element","className":"subtitle therapod","innerHTML":"Therapod","parent":"dialog"},{"type":"dom-element","className":"subtitle sauropod","innerHTML":"Sauropod","parent":"dialog"},{"type":"dom-element","className":"subtitle pterosaur","innerHTML":"Pterosaur","parent":"dialog"},{"type":"dom-element","className":"next-button","onmouseup":["audio-stop","next"],"ontouchend":["audio-stop","next"],"innerHTML":"&#10152;","parent":"dialog"},{"type":"audio","preventOverlaps":"append","audioMap":{"play-pteranodon-1-first":["all-aboard","time-first","picking-up","pteranodon",{"sound":"pteranodon-1","events":[{"event":"next","time":10000}]}],"play-pteranodon-2-first":["all-aboard","time-first","picking-up","pteranodon",{"sound":"pteranodon-2","events":[{"event":"next","time":10000}]}],"play-quetzalcoatlus-1-first":["all-aboard","time-first","picking-up","quetzalcoatlus",{"sound":"quetzalcoatlus-1","events":[{"event":"next","time":10000}]}],"play-quetzalcoatlus-2-first":["all-aboard","time-first","picking-up","quetzalcoatlus",{"sound":"quetzalcoatlus-2","events":[{"event":"next","time":10000}]}],"play-deinonychus-1-first":["all-aboard","time-first","picking-up","deinonychus",{"sound":"deinonychus-1","events":[{"event":"next","time":10000}]}],"play-deinonychus-2-first":["all-aboard","time-first","picking-up","deinonychus",{"sound":"deinonychus-2","events":[{"event":"next","time":10000}]}],"play-spinosaurus-1-first":["all-aboard","time-first","picking-up","spinosaurus",{"sound":"spinosaurus-1","events":[{"event":"next","time":10000}]}],"play-spinosaurus-2-first":["all-aboard","time-first","picking-up","spinosaurus",{"sound":"spinosaurus-2","events":[{"event":"next","time":10000}]}],"play-triceratops-1-first":["all-aboard","time-first","picking-up","triceratops",{"sound":"triceratops-1","events":[{"event":"next","time":10000}]}],"play-triceratops-2-first":["all-aboard","time-first","picking-up","triceratops",{"sound":"triceratops-2","events":[{"event":"next","time":10000}]}],"play-kosmoceratops-1-first":["all-aboard","time-first","picking-up","kosmoceratops",{"sound":"kosmoceratops-1","events":[{"event":"next","time":10000}]}],"play-kosmoceratops-2-first":["all-aboard","time-first","picking-up","kosmoceratops",{"sound":"kosmoceratops-2","events":[{"event":"next","time":10000}]}],"play-argentinosaurus-1-first":["all-aboard","time-first","picking-up","argentinosaurus",{"sound":"argentinosaurus-1","events":[{"event":"next","time":10000}]}],"play-argentinosaurus-2-first":["all-aboard","time-first","picking-up","argentinosaurus",{"sound":"argentinosaurus-2","events":[{"event":"next","time":10000}]}],"play-sauroposeidon-1-first":["all-aboard","time-first","picking-up","sauroposeidon",{"sound":"sauroposeidon-1","events":[{"event":"next","time":10000}]}],"play-sauroposeidon-2-first":["all-aboard","time-first","picking-up","sauroposeidon",{"sound":"sauroposeidon-2","events":[{"event":"next","time":10000}]}],"play-pteranodon-1":["all-aboard","time-left","picking-up","pteranodon",{"sound":"pteranodon-1","events":[{"event":"next","time":10000}]}],"play-pteranodon-2":["all-aboard","time-left","picking-up","pteranodon",{"sound":"pteranodon-2","events":[{"event":"next","time":10000}]}],"play-quetzalcoatlus-1":["all-aboard","time-left","picking-up","quetzalcoatlus",{"sound":"quetzalcoatlus-1","events":[{"event":"next","time":10000}]}],"play-quetzalcoatlus-2":["all-aboard","time-left","picking-up","quetzalcoatlus",{"sound":"quetzalcoatlus-2","events":[{"event":"next","time":10000}]}],"play-deinonychus-1":["all-aboard","time-left","picking-up","deinonychus",{"sound":"deinonychus-1","events":[{"event":"next","time":10000}]}],"play-deinonychus-2":["all-aboard","time-left","picking-up","deinonychus",{"sound":"deinonychus-2","events":[{"event":"next","time":10000}]}],"play-spinosaurus-1":["all-aboard","time-left","picking-up","spinosaurus",{"sound":"spinosaurus-1","events":[{"event":"next","time":10000}]}],"play-spinosaurus-2":["all-aboard","time-left","picking-up","spinosaurus",{"sound":"spinosaurus-2","events":[{"event":"next","time":10000}]}],"play-triceratops-1":["all-aboard","time-left","picking-up","triceratops",{"sound":"triceratops-1","events":[{"event":"next","time":10000}]}],"play-triceratops-2":["all-aboard","time-left","picking-up","triceratops",{"sound":"triceratops-2","events":[{"event":"next","time":10000}]}],"play-kosmoceratops-1":["all-aboard","time-left","picking-up","kosmoceratops",{"sound":"kosmoceratops-1","events":[{"event":"next","time":10000}]}],"play-kosmoceratops-2":["all-aboard","time-left","picking-up","kosmoceratops",{"sound":"kosmoceratops-2","events":[{"event":"next","time":10000}]}],"play-argentinosaurus-1":["all-aboard","time-left","picking-up","argentinosaurus",{"sound":"argentinosaurus-1","events":[{"event":"next","time":10000}]}],"play-argentinosaurus-2":["all-aboard","time-left","picking-up","argentinosaurus",{"sound":"argentinosaurus-2","events":[{"event":"next","time":10000}]}],"play-sauroposeidon-1":["all-aboard","time-left","picking-up","sauroposeidon",{"sound":"sauroposeidon-1","events":[{"event":"next","time":10000}]}],"play-sauroposeidon-2":["all-aboard","time-left","picking-up","sauroposeidon",{"sound":"sauroposeidon-2","events":[{"event":"next","time":10000}]}],"instruct-tap":"instruct-tap","finish-track":"finish-track","final-success-dino-train":[{"sound":"whistle","pan":1,"volume":0.7},"final-success"],"final-success-rocket-train":[{"sound":"horn","pan":1,"volume":0.7},"final-success"],"out-of-time":"watch-0","time-is-short":"watch-15","ready":"ready","set":"set","go":"go"}},{"type":"audio","audioMap":{"award-speed":"award-speed","award-time":"award-time"}},{"type":"entity-linker","linkId":"ticket-master","events":{"next":"next-step"}}]},"intro-interface":{"id":"intro-interface","components":[{"type":"logic-intro"},{"type":"dom-element","element":"div","id":"projector-screen","className":"projector-screen","updateClassName":true,"aliases":{"update-projector-screen":"logical-state"}},{"type":"dom-element","element":"div","className":"intro-design-rocket design-button","parent":"projector-screen","updateClassName":true,"onmouseup":"go-design-rocket","ontouchend":"go-design-rocket","aliases":{"update-intro-design-rocket":"logical-state"}},{"type":"dom-element","element":"div","className":"intro-design-dino design-button","parent":"projector-screen","updateClassName":true,"onmouseup":"go-design-dino","ontouchend":"go-design-dino","aliases":{"update-intro-design-dino":"logical-state"}},{"type":"change-scene","scene":"build-dino-train","persistentData":{"train":"dino","levelTemplate":[["s","t","f"]]},"transition":"fade-to-black","aliases":{"go-design-dino":"new-scene"}},{"type":"change-scene","scene":"build-dino-train","persistentData":{"train":"rocket","levelTemplate":[["s","t","f"]]},"transition":"fade-to-black","aliases":{"go-design-rocket":"new-scene"}},{"type":"entity-linker","linkId":"conductor","events":{"intro":"intro"}}]},"water":{"id":"water","components":[{"type":"collision-basic","collisionType":"water","immobile":true}],"properties":{"z":50}},"intro-background":{"id":"intro-background","components":[{"type":"dom-element","element":"div","id":"background","className":"intro-background"}]}},"scenes":{"load":{"layers":[{"id":"load-layer","filter":{"excludes":["iOS"]},"components":[{"type":"handler-logic"},{"type":"handler-render-dom"},{"type":"entity-container","entities":[{"type":"title-screen"},{"type":"progress-bar"}],"childEvents":["link-entity"]}]},{"id":"load-layer-ios","filter":{"includes":["iOS"]},"components":[{"type":"handler-logic"},{"type":"handler-render-dom"},{"type":"entity-container","entities":[{"type":"title-screen"},{"type":"progress-bar-ios"}],"childEvents":["link-entity"]}]}],"id":"load"},"play-game":{"layers":[{"id":"menu-layer","components":[{"type":"handler-logic"},{"type":"handler-render-dom"},{"type":"handler-controller"},{"type":"entity-container","entities":[{"type":"title-screen"},{"type":"button-play-game"}]}]},{"id":"enable-ios-audio-layer","filter":{"includes":["iOS"]},"components":[{"type":"enable-ios-audio","audioId":"combined"}]}],"id":"play-game"},"menu":{"layers":[{"id":"menu-layer","components":[{"type":"handler-logic"},{"type":"camera","width":1100},{"type":"handler-render-dom"},{"type":"handler-render-createjs","autoClear":true},{"type":"handler-controller"},{"type":"entity-container","entities":[{"type":"intro-background"},{"type":"conductor"},{"type":"intro-interface"}],"childEvents":["set-persistent-scene-data","scene-loaded","scene-live","link-entity"]}]}],"id":"menu"},"build-dino-train":{"layers":[{"id":"track-layer","components":[{"type":"handler-controller"},{"type":"handler-ai"},{"type":"handler-logic"},{"type":"handler-collision"},{"type":"camera","width":1536,"left":0,"transitionX":800,"transitionY":800},{"type":"handler-render-createjs","acceptInput":{"click":true,"touch":true,"camera":true,"movement":true}},{"type":"entity-container","entities":[{"type":"eagle"}],"childEvents":["link-entity","instruct-tap"]},{"type":"john-henry"},{"type":"level-builder","useUniques":true,"levelPieces":{"s":"start-blue-bottom","w":["level-1","level-2","level-3","level-4","level-5","level-6","level-7","river-1","river-2","river-3","sand-1","sand-2","sand-3"],"f":"end-blue-bottom","t":"tutorial"},"levelTemplate":[["s","w","w","w","w","w","w","f"]]},{"type":"tiled-loader","entityPositionX":"center","entityPositionY":"center","manuallyLoad":true,"unitsPerPixel":1,"imagesScale":1},{"type":"node-map"},{"type":"race-monitor"},{"type":"change-scene","scene":"build-dino-train","transition":"fade-to-black","aliases":{"next-level":"new-scene"}},{"type":"change-scene","scene":"results","transition":"fade-to-black","aliases":{"results":"new-scene"}},{"type":"entity-linker","linkId":"ticket-master","events":{"add-dinos":"add-dinos","ticket-time":"ticket-state","speed-acquired":"award-speed","time-acquired":["set-time","award-time"],"time-start":"set-time","ready":"ready","set":"set","go":["start-the-clock","go"],"go-light":"go-light","stop-time!":"stop-the-clock","play-pteranodon-1":"play-pteranodon-1","play-pteranodon-2":"play-pteranodon-2","play-quetzalcoatlus-1":"play-quetzalcoatlus-1","play-quetzalcoatlus-2":"play-quetzalcoatlus-2","play-deinonychus-1":"play-deinonychus-1","play-deinonychus-2":"play-deinonychus-2","play-spinosaurus-1":"play-spinosaurus-1","play-spinosaurus-2":"play-spinosaurus-2","play-triceratops-1":"play-triceratops-1","play-triceratops-2":"play-triceratops-2","play-kosmoceratops-1":"play-kosmoceratops-1","play-kosmoceratops-2":"play-kosmoceratops-2","play-argentinosaurus-1":"play-argentinosaurus-1","play-argentinosaurus-2":"play-argentinosaurus-2","play-sauroposeidon-1":"play-sauroposeidon-1","play-sauroposeidon-2":"play-sauroposeidon-2","play-pteranodon-1-first":"play-pteranodon-1-first","play-pteranodon-2-first":"play-pteranodon-2-first","play-quetzalcoatlus-1-first":"play-quetzalcoatlus-1-first","play-quetzalcoatlus-2-first":"play-quetzalcoatlus-2-first","play-deinonychus-1-first":"play-deinonychus-1-first","play-deinonychus-2-first":"play-deinonychus-2-first","play-spinosaurus-1-first":"play-spinosaurus-1-first","play-spinosaurus-2-first":"play-spinosaurus-2-first","play-triceratops-1-first":"play-triceratops-1-first","play-triceratops-2-first":"play-triceratops-2-first","play-kosmoceratops-1-first":"play-kosmoceratops-1-first","play-kosmoceratops-2-first":"play-kosmoceratops-2-first","play-argentinosaurus-1-first":"play-argentinosaurus-1-first","play-argentinosaurus-2-first":"play-argentinosaurus-2-first","play-sauroposeidon-1-first":"play-sauroposeidon-1-first","play-sauroposeidon-2-first":"play-sauroposeidon-2-first","instruct-tap":"instruct-tap","finish-track":"finish-track","final-success-dino-train":"final-success-dino-train","final-success-rocket-train":"final-success-rocket-train"}}]},{"type":"interface-layer"}],"id":"build-dino-train"},"results":{"layers":[{"id":"results-layer","components":[{"type":"handler-logic"},{"type":"camera","width":1100},{"type":"handler-render-dom"},{"type":"handler-render-createjs","autoClear":true},{"type":"handler-controller"},{"type":"entity-container","entities":[{"type":"intro-background"},{"type":"conductor","properties":{"x":1000,"orientation":3.1457}},{"type":"results-interface"}],"childEvents":["set-persistent-scene-data","scene-loaded","scene-live","link-entity"]}]}],"id":"results"}},"levels":{"level-1":{"height":12,"layers":[{"data":[1,1,1,1,1610612737,1,11,2684354581,2684354571,1,1,2147483654,1,2684354561,1,3221225473,1,1,6,1,21,3221225503,3221225483,1,1,1610612737,1610612737,3221225473,2684354561,2684354561,13,2684354583,2684354583,2684354573,1610612747,3221225483,3221225473,1,1,16,1,1,2684354561,1,23,3,3,2684354593,2147483661,2684354561,1,1,1,1,2147483664,1610612737,2684354561,1,23,3,3,3,2147483671,14,2684354574,1,1,1,2684354561,1,2684354561,3221225473,23,3,3,3,3221225495,24,3221225496,1,1,2147483664,6,1,2147483654,2684354561,1610612749,1610612769,3,3,3221225495,1610612750,2684354564,2684354584,2684354574,1,16,1,2684354561,1,1,23,3,3,2684354593,2684354573,1610612750,1610612760,3221225486,1610612737,1,1,2684354561,1,1,23,3,3,3,3221225495,1,1,1,1610612737,1,1,2684354561,3221225473,14,1610612749,1610612759,1610612769,3,3221225495,2684354561,3221225473,3221225473,1610612737,6,16,1,2684354561,1610612750,4,4,23,3,2684354593,2147483661,1,1,3221225473,2147483664,2684354561,2684354561,1,6,1610612750,3221225486,1610612749,1610612759,1610612759,3221225485,1,1,1610612737,1610612737,1],"height":12,"name":"background","opacity":1,"type":"tilelayer","visible":true,"width":14,"x":0,"y":0},{"height":12,"name":"entities","objects":[{"height":320,"name":"","properties":{},"type":"water","visible":true,"width":256,"x":128,"y":128},{"height":128,"name":"","properties":{},"type":"water","visible":true,"width":256,"x":320,"y":640},{"height":192,"name":"","properties":{},"type":"sand","visible":true,"width":128,"x":384,"y":0},{"height":128,"name":"","properties":{},"type":"sand","visible":true,"width":64,"x":512,"y":0},{"height":256,"name":"","properties":{},"type":"water","visible":true,"width":64,"x":384,"y":192},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":256,"y":768},{"gid":61,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":478,"y":355},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":607,"y":351},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":807,"y":483},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":608,"y":740},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":162,"y":94},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":512,"y":256},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":576,"y":64},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":320,"y":128},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":64,"y":64},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":128,"y":640},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":128,"y":576},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":512,"y":576},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":640,"y":576},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":128,"y":512},{"height":192,"name":"","properties":{},"type":"water","visible":true,"width":320,"x":192,"y":448},{"gid":98,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":512,"y":640},{"gid":95,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":704,"y":640},{"gid":96,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":640,"y":256}],"opacity":1,"type":"objectgroup","visible":true,"width":14,"x":0,"y":0}],"orientation":"orthogonal","properties":{},"tileheight":64,"tilesets":[{"firstgid":1,"image":"../game/images/tiles.png","imageheight":640,"imagewidth":640,"margin":0,"name":"tiles","properties":{},"spacing":0,"tileheight":64,"tileproperties":{"40":{"entity":"bush-large"},"42":{"entity":"bush"},"52":{"entity":"bush"},"60":{"entity":"rock-large"},"62":{"entity":"rock"},"72":{"entity":"rock"},"94":{"entity":"herd-small"},"95":{"entity":"herd"},"96":{"entity":"pu-speed"},"97":{"entity":"pu-time"},"98":{"entity":"train-node"},"99":{"entity":"station-node"}},"tilewidth":64}],"tilewidth":64,"version":1,"width":14,"id":"level-1"},"level-2":{"height":12,"layers":[{"data":[2684354561,1,1,1,1610612737,1,11,2684354581,2684354571,1,1,16,1,2684354561,1,3221225473,1,1,536870913,1,21,3221225503,3221225483,1,3221225473,1610612737,1610612737,3221225473,2684354561,2684354561,3758096385,1,1,1,1610612747,3221225483,3221225473,1,6,3221225473,1,1,2684354561,1,2684354561,1,1,1,1610612737,2684354561,1,6,16,1,1,1,2684354561,2147483664,2684354561,1,1610612737,1,1610612737,2684354561,3221225473,16,1,1,1,1,1,1,1,1,536870913,536870913,14,4,2684354574,1,1,1,1,1,16,1,1,1,2147483649,1,4,4,4,4,2684354574,1,1,1,1,2147483664,1,1,14,1610612740,3221225476,2684354564,1073741838,1610612760,3221225486,1610612737,1,2684354561,2684354561,1,2684354561,536870926,3221225476,4,4,2684354564,1,1,1,1610612737,3221225473,1610612737,2684354561,3221225473,1,24,2684354564,1610612740,3221225476,3221225486,2684354561,3221225473,3221225473,1610612737,2147483664,1,1,2684354561,3758096385,24,4,2684354564,4,1,1,3221225473,3221225473,3221225473,3221225473,2684354561,2684354561,1,2684354561,1073741838,1610612740,3221225476,3221225476,1,1,1,1,1610612737,1610612737,1],"height":12,"name":"background","opacity":1,"type":"tilelayer","visible":true,"width":14,"x":0,"y":0},{"height":12,"name":"entities","objects":[{"height":128,"name":"","properties":{},"type":"sand","visible":true,"width":192,"x":384,"y":0},{"height":64,"name":"","properties":{},"type":"sand","visible":true,"width":128,"x":384,"y":128},{"gid":61,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":418,"y":482},{"gid":61,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":354,"y":609},{"gid":61,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":353,"y":740},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":478,"y":739},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":224,"y":221},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":159,"y":92},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":576,"y":128},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":512,"y":256},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":320,"y":128},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":64,"y":64},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":128,"y":640},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":512,"y":576},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":640,"y":576},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":448,"y":384},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":512,"y":448},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":448,"y":576},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":320,"y":512},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":256,"y":768},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":737,"y":354},{"gid":98,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":448,"y":192},{"gid":95,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":128,"y":384},{"gid":96,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":640,"y":256}],"opacity":1,"type":"objectgroup","visible":true,"width":14,"x":0,"y":0}],"orientation":"orthogonal","properties":{},"tileheight":64,"tilesets":[{"firstgid":1,"image":"../game/images/tiles.png","imageheight":640,"imagewidth":640,"margin":0,"name":"tiles","properties":{},"spacing":0,"tileheight":64,"tileproperties":{"40":{"entity":"bush-large"},"42":{"entity":"bush"},"52":{"entity":"bush"},"60":{"entity":"rock-large"},"62":{"entity":"rock"},"72":{"entity":"rock"},"94":{"entity":"herd-small"},"95":{"entity":"herd"},"96":{"entity":"pu-speed"},"97":{"entity":"pu-time"},"98":{"entity":"train-node"},"99":{"entity":"station-node"}},"tilewidth":64}],"tilewidth":64,"version":1,"width":14,"id":"level-2"},"level-3":{"height":12,"layers":[{"data":[1,1,1,1,1,1,1,1,1,1,1,1610612737,1,2684354561,1,1,1,1,1,1,1,1,1,1,3221225473,1610612737,1610612737,3221225473,1,1,1,1,1,1,1,1,1,13,536870935,2147483661,1,1,1,1,1,1,1,1,1,1,1,23,2684354563,2684354593,2684354573,1610612737,1,1,1,1,11,2684354571,1610612737,2684354561,3221225473,23,3,3,3221225495,1,1,11,2684354581,2684354581,31,3221225493,14,4,2684354574,1610612749,1610612759,1610612769,3221225495,1,1,21,2,2684354562,2,3221225493,4,4,4,4,2684354574,23,3221225495,1,2684354561,21,1610612738,3221225474,2,3221225493,4,4,1073741838,1610612760,3221225486,1073741837,3221225485,1,3221225473,21,2,2684354562,2,3221225493,4,4,1,1,1,1,3221225473,1610612737,1610612737,21,1610612738,2684354562,2684354562,3221225493,4,3221225486,1,1,1,1,1,1,11,31,3221225503,1610612757,1610612757,3221225483,1,1,1,1,3221225473,3221225473,3221225473,2684354561,1610612747,1610612757,3221225483,1,1,1,1,1,1,1,1,1610612737,1610612737,1],"height":12,"name":"background","opacity":1,"type":"tilelayer","visible":true,"width":14,"x":0,"y":0},{"height":12,"name":"entities","objects":[{"height":128,"name":"","properties":{},"type":"water","visible":true,"width":64,"x":704,"y":384},{"height":320,"name":"","properties":{},"type":"water","visible":true,"width":64,"x":768,"y":192},{"height":256,"name":"","properties":{},"type":"water","visible":true,"width":192,"x":576,"y":128},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":29,"y":92},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":128,"y":64},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":192,"y":64},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":448,"y":192},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":512,"y":256},{"gid":61,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":348,"y":357},{"gid":61,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":488,"y":535},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":448,"y":640},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":153,"y":765},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":40,"y":670},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":256,"y":768},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":576,"y":64},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":320,"y":768},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":512,"y":384},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":128,"y":448},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":228,"y":700},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":704,"y":128},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":640,"y":64},{"height":64,"name":"","properties":{},"type":"sand","visible":true,"width":128,"x":256,"y":256},{"height":384,"name":"","properties":{},"type":"sand","visible":true,"width":320,"x":64,"y":320},{"height":64,"name":"","properties":{},"type":"sand","visible":true,"width":128,"x":0,"y":704},{"gid":97,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":192,"y":576},{"gid":95,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":192,"y":256},{"gid":95,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":640,"y":704}],"opacity":1,"type":"objectgroup","visible":true,"width":14,"x":0,"y":0}],"orientation":"orthogonal","properties":{},"tileheight":64,"tilesets":[{"firstgid":1,"image":"../game/images/tiles.png","imageheight":640,"imagewidth":640,"margin":0,"name":"tiles","properties":{},"spacing":0,"tileheight":64,"tileproperties":{"40":{"entity":"bush-large"},"42":{"entity":"bush"},"52":{"entity":"bush"},"60":{"entity":"rock-large"},"62":{"entity":"rock"},"72":{"entity":"rock"},"94":{"entity":"herd-small"},"95":{"entity":"herd"},"96":{"entity":"pu-speed"},"97":{"entity":"pu-time"},"98":{"entity":"train-node"},"99":{"entity":"station-node"}},"tilewidth":64}],"tilewidth":64,"version":1,"width":14,"id":"level-3"},"level-4":{"height":12,"layers":[{"data":[1,1,1,1,1,1,1,1,1,1,1,1,1,6,1,1,1,1,2147483664,1,1,1,1,2147483654,1,1,1,1,1,16,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1610612737,2684354561,1610612737,1,1,1,1,1,1,14,2684354574,1,1,2684354561,1,2684354561,1,2147483664,1,1,1,1,1,24,3221225476,2684354574,1,1610612737,1610612737,3221225473,1610612737,1,16,1,1,1,1,1610612750,2684354564,4,2684354584,2684354584,2684354574,2684354561,1,2684354561,1,1,16,1,2684354561,6,1610612750,1610612760,1610612760,1610612760,3221225486,1,2684354561,3221225473,2147483664,1,1,1,1,1,1,1,2147483654,1,1,3221225473,1610612737,1610612737,1610612737,1,1,1,3221225473,2684354561,1,2684354561,1,1,1,1,1,2684354561,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1610612737,6,3221225473,1,1,1,1,1,1,1,1,1,1],"height":12,"name":"background","opacity":1,"type":"tilelayer","visible":true,"width":14,"x":0,"y":0},{"height":12,"name":"entities","objects":[{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":741,"y":100},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":768,"y":192},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":704,"y":192},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":704,"y":320},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":512,"y":256},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":512,"y":576},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":640,"y":576},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":832,"y":768},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":768,"y":768},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":799,"y":676},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":673,"y":736},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":576,"y":768},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":512,"y":768},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":416,"y":735},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":320,"y":768},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":419,"y":550},{"gid":61,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":419,"y":419},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":512,"y":448},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":128,"y":640},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":192,"y":320},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":256,"y":192},{"gid":97,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":448,"y":192},{"gid":95,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":256,"y":512}],"opacity":1,"type":"objectgroup","visible":true,"width":14,"x":0,"y":0}],"orientation":"orthogonal","properties":{},"tileheight":64,"tilesets":[{"firstgid":1,"image":"../game/images/tiles.png","imageheight":640,"imagewidth":640,"margin":0,"name":"tiles","properties":{},"spacing":0,"tileheight":64,"tileproperties":{"40":{"entity":"bush-large"},"42":{"entity":"bush"},"52":{"entity":"bush"},"60":{"entity":"rock-large"},"62":{"entity":"rock"},"72":{"entity":"rock"},"94":{"entity":"herd-small"},"95":{"entity":"herd"},"96":{"entity":"pu-speed"},"97":{"entity":"pu-time"},"98":{"entity":"train-node"},"99":{"entity":"station-node"}},"tilewidth":64}],"tilewidth":64,"version":1,"width":14,"id":"level-4"},"level-5":{"height":12,"layers":[{"data":[14,2684354584,2684354574,1,14,2684354564,2684354574,16,6,14,2684354574,1610612737,1,2684354561,1610612750,4,2684354564,14,4,3221225476,4,2684354574,2147483664,2147483654,3221225486,2684354561,1610612737,3221225473,1,1610612750,1610612760,1610612760,2684354564,4,2684354564,3221225476,14,2684354574,3221225473,3221225473,1,1,1,11,2684354581,2684354581,2684354581,2684354571,1610612760,3758096408,1,3221225486,1,14,2684354561,1610612737,11,31,2684354562,3221225474,1610612738,3221225493,1610612737,2147483654,3221225473,3221225473,2684354561,1610612750,2684354561,1,1610612747,1610612757,12,2684354582,2684354572,3221225483,1,1,2684354574,1,1610612737,1610612737,3221225473,1610612737,1,3221225473,23,3,3221225495,1,1,16,1,4,2684354574,3221225473,6,1,2684354561,2147483654,23,2684354563,2684354593,2684354583,2684354573,1,1,1610612760,1,1610612737,1,2684354561,3221225473,1,1073741847,3221225475,3,3,2684354593,2684354583,2684354573,1,1,16,3221225473,1610612737,1610612737,1,23,1610612739,3,3,3,3,3221225495,3221225473,3221225473,1610612737,16,1,2684354561,3221225473,1610612749,1610612759,1610612759,1610612759,1610612759,1610612759,3221225485,3221225473,3221225473,3221225473,3221225473,2684354561,1,6,3221225473,1610612750,1610612760,1610612740,1610612760,3758096408,3221225486,1,16,1610612737,1610612737,1],"height":12,"name":"background","opacity":1,"type":"tilelayer","visible":true,"width":14,"x":0,"y":0},{"height":12,"name":"entities","objects":[{"height":384,"name":"","properties":{},"type":"water","visible":true,"width":192,"x":128,"y":320},{"height":192,"name":"","properties":{},"type":"sand","visible":true,"width":64,"x":64,"y":192},{"height":128,"name":"","properties":{},"type":"sand","visible":true,"width":64,"x":0,"y":256},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":256,"y":768},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":320,"y":768},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":384,"y":736},{"gid":73,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":288,"y":416},{"gid":73,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":96,"y":416},{"gid":61,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":231,"y":158},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":640,"y":64},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":64,"y":128},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":64,"y":64},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":256,"y":64},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":448,"y":192},{"gid":61,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":546,"y":223},{"gid":61,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":545,"y":415},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":704,"y":320},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":543,"y":547},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":730,"y":737},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":704,"y":640},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":576,"y":768},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":64,"y":640},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":0,"y":512},{"height":192,"name":"","properties":{},"type":"sand","visible":true,"width":64,"x":320,"y":192},{"height":128,"name":"","properties":{},"type":"sand","visible":true,"width":192,"x":128,"y":192},{"height":192,"name":"","properties":{},"type":"water","visible":true,"width":128,"x":448,"y":512},{"height":256,"name":"","properties":{},"type":"water","visible":true,"width":128,"x":320,"y":448},{"gid":97,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":320,"y":576},{"gid":95,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":704,"y":192},{"gid":96,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":768,"y":448}],"opacity":1,"type":"objectgroup","visible":true,"width":14,"x":0,"y":0}],"orientation":"orthogonal","properties":{},"tileheight":64,"tilesets":[{"firstgid":1,"image":"../game/images/tiles.png","imageheight":640,"imagewidth":640,"margin":0,"name":"tiles","properties":{},"spacing":0,"tileheight":64,"tileproperties":{"40":{"entity":"bush-large"},"42":{"entity":"bush"},"52":{"entity":"bush"},"60":{"entity":"rock-large"},"62":{"entity":"rock"},"72":{"entity":"rock"},"94":{"entity":"herd-small"},"95":{"entity":"herd"},"96":{"entity":"pu-speed"},"97":{"entity":"pu-time"},"98":{"entity":"train-node"},"99":{"entity":"station-node"}},"tilewidth":64}],"tilewidth":64,"version":1,"width":14,"id":"level-5"},"level-6":{"height":12,"layers":[{"data":[1,1,1,1,1,1,1,1,1,1,1,1,1,6,1,1,1,1,2147483664,1,1,1,1,2147483654,1,1,1,1,1,16,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1610612737,2684354561,1610612737,1,1,1,1,1,1,14,2684354574,1,1,2684354561,1,2684354561,1,2147483664,1,1,1,1,1,24,3221225476,2684354574,1,1610612737,1610612737,3221225473,1610612737,1,16,1,1,1,1,1610612750,2684354564,4,2684354584,2684354584,2684354574,2684354561,1,2684354561,1,1,16,1,2684354561,6,1610612750,1610612760,1610612760,1610612760,3221225486,1,2684354561,3221225473,2147483664,1,1,1,1,1,1,1,2147483654,1,1,3221225473,1610612737,1610612737,1610612737,1,1,1,3221225473,2684354561,1,2684354561,1,1,1,1,1,2684354561,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1610612737,6,3221225473,1,1,1,1,1,1,1,1,1,1],"height":12,"name":"background","opacity":1,"type":"tilelayer","visible":true,"width":14,"x":0,"y":0},{"height":12,"name":"entities","objects":[{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":229,"y":64},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":256,"y":156},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":192,"y":156},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":192,"y":284},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":0,"y":220},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":192,"y":602},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":320,"y":602},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":512,"y":794},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":448,"y":794},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":479,"y":702},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":353,"y":762},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":256,"y":794},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":192,"y":794},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":96,"y":761},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":0,"y":794},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":99,"y":576},{"gid":61,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":419,"y":419},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":512,"y":448},{"gid":97,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":640,"y":128},{"gid":95,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":384,"y":192},{"gid":95,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":704,"y":576}],"opacity":1,"type":"objectgroup","visible":true,"width":14,"x":0,"y":0}],"orientation":"orthogonal","properties":{},"tileheight":64,"tilesets":[{"firstgid":1,"image":"../game/images/tiles.png","imageheight":640,"imagewidth":640,"margin":0,"name":"tiles","properties":{},"spacing":0,"tileheight":64,"tileproperties":{"40":{"entity":"bush-large"},"42":{"entity":"bush"},"52":{"entity":"bush"},"60":{"entity":"rock-large"},"62":{"entity":"rock"},"72":{"entity":"rock"},"94":{"entity":"herd-small"},"95":{"entity":"herd"},"96":{"entity":"pu-speed"},"97":{"entity":"pu-time"},"98":{"entity":"train-node"},"99":{"entity":"station-node"}},"tilewidth":64}],"tilewidth":64,"version":1,"width":14,"id":"level-6"},"level-7":{"height":12,"layers":[{"data":[2147483654,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,6,2147483649,2147483649,2147483649,2147483649,16,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483664,2147483649,3758096385,536870913,3758096385,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,536870913,2147483649,536870913,2147483649,2147483649,536870926,2147483662,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,3758096385,1073741825,3758096385,3758096385,2147483649,536870926,1073741828,2147483672,2147483649,2147483649,2147483649,2147483649,2147483649,16,2147483649,536870913,536870926,536870936,536870936,2147483652,536870916,3758096398,2147483649,2147483649,2147483649,2147483649,2147483664,2147483649,536870913,2147483649,1073741838,3758096408,3758096408,3758096408,3758096398,2147483654,536870913,2147483649,2147483664,2147483649,2147483649,536870913,3758096385,1073741825,2147483649,2147483649,6,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,16,1073741825,2147483649,2147483649,2147483649,2147483649,2147483649,536870913,2147483649,536870913,1073741825,2147483649,2147483649,2147483649,3758096385,3758096385,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,536870913,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,1073741825,2147483654,3758096385,2147483649],"height":12,"name":"background","opacity":1,"type":"tilelayer","visible":true,"width":14,"x":0,"y":0},{"height":12,"name":"entities","objects":[{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":768,"y":128},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":704,"y":156},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":640,"y":156},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":671,"y":64},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":545,"y":124},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":448,"y":156},{"gid":98,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":640,"y":384},{"gid":96,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":64,"y":384},{"gid":96,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":384,"y":576},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":384,"y":732},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":576,"y":732},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":607,"y":640},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":704,"y":704},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":640,"y":732},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":481,"y":700},{"gid":96,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":768,"y":320},{"gid":96,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":256,"y":192},{"gid":96,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":384,"y":320},{"gid":96,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":128,"y":640},{"gid":96,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":768,"y":576}],"opacity":1,"type":"objectgroup","visible":true,"width":14,"x":0,"y":0}],"orientation":"orthogonal","properties":{},"tileheight":64,"tilesets":[{"firstgid":1,"image":"../game/images/tiles.png","imageheight":640,"imagewidth":640,"margin":0,"name":"tiles","properties":{},"spacing":0,"tileheight":64,"tileproperties":{"40":{"entity":"bush-large"},"42":{"entity":"bush"},"52":{"entity":"bush"},"60":{"entity":"rock-large"},"62":{"entity":"rock"},"72":{"entity":"rock"},"94":{"entity":"herd-small"},"95":{"entity":"herd"},"96":{"entity":"pu-speed"},"97":{"entity":"pu-time"},"98":{"entity":"train-node"},"99":{"entity":"station-node"}},"tilewidth":64}],"tilewidth":64,"version":1,"width":14,"id":"level-7"},"river-1":{"height":12,"layers":[{"data":[1,2147483664,1610612737,6,13,33,3,3,3221225495,1,1,2147483654,1,2684354561,1,2684354561,1,3758096385,1073741847,3,3,3,3221225495,1,1,1610612737,1610612737,3221225473,2147483664,6,1,2147483664,1073741847,3,3,3221225504,3221225484,2684354571,1,16,1,1,1,16,1,2147483649,23,3,3,3221225494,2,2684354591,2684354571,1,2147483664,1610612737,1610612737,1,1,2147483649,23,3,3,3221225494,2684354562,3221225474,3221225493,1,2684354561,1,1610612737,1,1,16,23,3,3,3221225494,1610612738,3221225503,3221225483,2147483664,6,1,1610612737,6,16,2147483649,1073741847,3,3,3221225494,2,3221225493,2684354574,1,16,1,3221225473,2147483664,2684354561,3758096385,1073741847,3,3,3221225494,2684354562,3221225493,3221225486,1610612737,1,1,1610612737,1610612737,1,3758096385,23,3,3,3221225494,3221225474,3221225493,1,1610612737,1,1,1610612737,2147483664,2147483654,3758096385,23,3,3,2684354592,2147483660,3221225483,3221225473,1610612737,6,16,3221225473,536870913,16,1073741825,23,3,3,3,3221225495,1,1,3221225473,2147483664,2684354561,1610612737,2147483649,3758096385,3758096385,1073741837,1610612769,3,3,3221225495,1,1,1610612737,1610612737,1],"height":12,"name":"background","opacity":1,"type":"tilelayer","visible":true,"width":14,"x":0,"y":0},{"height":12,"name":"entities","objects":[{"height":192,"name":"","properties":{},"type":"water","visible":true,"width":320,"x":256,"y":0},{"height":192,"name":"","properties":{},"type":"water","visible":true,"width":320,"x":256,"y":576},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":320,"y":576},{"gid":61,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":576,"y":640},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":576,"y":160},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":704,"y":448},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":608,"y":740},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":704,"y":256},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":768,"y":64},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":704,"y":768},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":635,"y":549},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":256,"y":256},{"height":384,"name":"","properties":{},"type":"water","visible":true,"width":256,"x":256,"y":192},{"gid":61,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":42,"y":738},{"height":192,"name":"","properties":{},"type":"sand","visible":true,"width":192,"x":512,"y":192},{"height":192,"name":"","properties":{},"type":"sand","visible":true,"width":128,"x":512,"y":384},{"gid":98,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":320,"y":384},{"height":64,"name":"","properties":{},"type":"sand","visible":true,"width":64,"x":576,"y":128},{"height":64,"name":"","properties":{},"type":"sand","visible":true,"width":64,"x":576,"y":576},{"gid":95,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":64,"y":192},{"gid":95,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":768,"y":640},{"gid":96,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":768,"y":192},{"gid":96,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":64,"y":576}],"opacity":1,"type":"objectgroup","visible":true,"width":14,"x":0,"y":0}],"orientation":"orthogonal","properties":{},"tileheight":64,"tilesets":[{"firstgid":1,"image":"../game/images/tiles.png","imageheight":640,"imagewidth":640,"margin":0,"name":"tiles","properties":{},"spacing":0,"tileheight":64,"tileproperties":{"40":{"entity":"bush-large"},"42":{"entity":"bush"},"52":{"entity":"bush"},"60":{"entity":"rock-large"},"62":{"entity":"rock"},"72":{"entity":"rock"},"94":{"entity":"herd-small"},"95":{"entity":"herd"},"96":{"entity":"pu-speed"},"97":{"entity":"pu-time"},"98":{"entity":"train-node"},"99":{"entity":"station-node"}},"tilewidth":64}],"tilewidth":64,"version":1,"width":14,"id":"river-1"},"river-2":{"height":12,"layers":[{"data":[3221225473,3221225473,23,3221225475,2684354593,2147483661,1,2147483654,1,2684354561,1,2147483654,536870913,2147483649,3221225473,3221225473,23,3221225475,3221225475,3221225495,1,1610612737,1610612737,3221225473,1,1610612737,1073741825,3758096385,11,2684354581,1073741836,1610612768,3221225475,3221225495,1,16,1,1,1,16,2147483649,2147483649,21,1610612738,2,22,3221225475,3221225495,1,1,2147483664,1610612737,1,1,3758096385,16,21,3221225474,1610612738,22,3221225475,2147483671,1,1,2684354561,1,1,1,2147483649,536870913,21,2,3221225474,22,3221225475,2147483671,1,2147483664,6,1,1,2147483664,2147483649,2147483654,21,2684354562,2684354562,22,3221225475,3221225495,1,1,16,1,1,1,2147483649,2147483664,21,2,1610612738,22,3221225475,3221225495,1,1610612737,1,1,1,1610612737,2147483649,2147483649,1610612747,1610612767,3221225474,22,3221225475,3221225495,1,1610612737,1,1,1,1610612737,2147483649,2147483649,3221225473,1610612747,12,32,3221225475,2147483671,3221225473,1610612737,6,16,3221225473,1610612737,2147483664,2147483654,3221225473,3221225473,23,3221225475,3221225475,2147483671,1,3221225473,2147483664,2684354561,1,3221225473,536870913,16,3221225473,3221225473,23,3221225475,3221225505,3221225485,1,1610612737,1610612737,1,1,1610612737,2147483649,3758096385],"height":12,"name":"background","opacity":1,"type":"tilelayer","visible":true,"width":14,"x":0,"y":0},{"height":12,"name":"entities","objects":[{"height":192,"name":"","properties":{},"type":"water","visible":true,"width":256,"x":128,"y":0},{"height":192,"name":"","properties":{},"type":"water","visible":true,"width":256,"x":128,"y":576},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":100,"y":667},{"gid":61,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":448,"y":576},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":640,"y":128},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":608,"y":740},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":768,"y":320},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":732,"y":65},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":704,"y":768},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":704,"y":704},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":95,"y":165},{"height":384,"name":"","properties":{},"type":"water","visible":true,"width":192,"x":192,"y":192},{"gid":61,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":384,"y":256},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":64,"y":448},{"height":384,"name":"","properties":{},"type":"sand","visible":true,"width":192,"x":0,"y":192},{"height":64,"name":"","properties":{},"type":"sand","visible":true,"width":128,"x":0,"y":128},{"gid":98,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":256,"y":448},{"height":64,"name":"","properties":{},"type":"sand","visible":true,"width":64,"x":64,"y":576},{"gid":95,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":640,"y":512},{"gid":96,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":576,"y":256}],"opacity":1,"type":"objectgroup","visible":true,"width":14,"x":0,"y":0}],"orientation":"orthogonal","properties":{},"tileheight":64,"tilesets":[{"firstgid":1,"image":"../game/images/tiles.png","imageheight":640,"imagewidth":640,"margin":0,"name":"tiles","properties":{},"spacing":0,"tileheight":64,"tileproperties":{"40":{"entity":"bush-large"},"42":{"entity":"bush"},"52":{"entity":"bush"},"60":{"entity":"rock-large"},"62":{"entity":"rock"},"72":{"entity":"rock"},"94":{"entity":"herd-small"},"95":{"entity":"herd"},"96":{"entity":"pu-speed"},"97":{"entity":"pu-time"},"98":{"entity":"train-node"},"99":{"entity":"station-node"}},"tilewidth":64}],"tilewidth":64,"version":1,"width":14,"id":"river-2"},"river-3":{"height":12,"layers":[{"data":[3221225473,3221225473,23,3221225475,3221225475,3221225475,3221225495,1,1,1,1,2147483654,1,2684354561,3221225473,13,33,3221225475,3221225475,3221225505,3221225485,1,1,1,1,1610612737,1610612737,3221225473,13,33,3,3,3221225475,3221225495,1,1,1,1,1,16,1,1,23,3,3,3,3221225505,3221225485,1,1,1,1,1,1,2147483664,1610612737,23,3,3,3221225505,3221225485,1,1,1,1,1,1,1,2684354561,1,23,3,3,3221225495,1,1,11,2684354581,2684354571,1,1,2147483664,6,1,23,3,3,2684354593,2147483661,1,1610612747,1610612767,3221225493,1,1,1,16,1,23,3,3,3,2684354593,2147483661,1,1610612747,3221225483,1,1,1610612737,1,1,1073741837,1610612769,3,3,3,3221225495,1,1,1,1,1,1610612737,1,1,3221225473,23,3,3,3221225475,2684354593,2147483661,1,1,1,1,1610612737,6,16,3221225473,1073741837,1610612769,3221225475,3221225475,3221225475,3221225495,1,1,1,1,3221225473,2147483664,2684354561,3221225473,3221225473,23,3221225475,3221225475,3221225475,3221225495,1,1,1,1,1610612737,1610612737,1],"height":12,"name":"background","opacity":1,"type":"tilelayer","visible":true,"width":14,"x":0,"y":0},{"height":12,"name":"entities","objects":[{"height":64,"name":"","properties":{},"type":"water","visible":true,"width":320,"x":128,"y":0},{"height":128,"name":"","properties":{},"type":"water","visible":true,"width":384,"x":64,"y":576},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":128,"y":640},{"gid":61,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":326,"y":727},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":670,"y":227},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":768,"y":640},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":768,"y":320},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":768,"y":256},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":704,"y":320},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":704,"y":448},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":448,"y":192},{"height":64,"name":"","properties":{},"type":"water","visible":true,"width":384,"x":64,"y":64},{"gid":61,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":348,"y":93},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":384,"y":576},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":64,"y":256},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":448,"y":384},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":192,"y":448},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":640,"y":512},{"height":128,"name":"","properties":{},"type":"water","visible":true,"width":384,"x":0,"y":128},{"height":64,"name":"","properties":{},"type":"water","visible":true,"width":320,"x":0,"y":384},{"height":64,"name":"","properties":{},"type":"water","visible":true,"width":256,"x":0,"y":320},{"height":128,"name":"","properties":{},"type":"water","visible":true,"width":384,"x":0,"y":448},{"height":64,"name":"","properties":{},"type":"water","visible":true,"width":320,"x":0,"y":256},{"height":64,"name":"","properties":{},"type":"water","visible":true,"width":320,"x":128,"y":704},{"height":64,"name":"","properties":{},"type":"sand","visible":true,"width":128,"x":448,"y":448},{"height":128,"name":"","properties":{},"type":"sand","visible":true,"width":192,"x":384,"y":320},{"gid":98,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":576,"y":640},{"gid":95,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":512,"y":704},{"gid":95,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":576,"y":128}],"opacity":1,"type":"objectgroup","visible":true,"width":14,"x":0,"y":0}],"orientation":"orthogonal","properties":{},"tileheight":64,"tilesets":[{"firstgid":1,"image":"../game/images/tiles.png","imageheight":640,"imagewidth":640,"margin":0,"name":"tiles","properties":{},"spacing":0,"tileheight":64,"tileproperties":{"40":{"entity":"bush-large"},"42":{"entity":"bush"},"52":{"entity":"bush"},"60":{"entity":"rock-large"},"62":{"entity":"rock"},"72":{"entity":"rock"},"94":{"entity":"herd-small"},"95":{"entity":"herd"},"96":{"entity":"pu-speed"},"97":{"entity":"pu-time"},"98":{"entity":"train-node"},"99":{"entity":"station-node"}},"tilewidth":64}],"tilewidth":64,"version":1,"width":14,"id":"river-3"},"sand-1":{"height":12,"layers":[{"data":[1,1610612747,1610612757,1610612757,1610612757,1610612767,2,1610612738,2,2684354591,2684354571,1610612750,4,3221225496,1,1,1,1,1,1610612747,1610612757,3221225474,2684354562,2684354562,2684354591,2684354571,24,3221225496,1,1,1,1,1,1,1,21,2,1610612738,2684354562,3221225493,24,3221225496,1,11,2684354581,2684354581,2684354571,1,1,1610612747,2684354562,3221225474,3221225474,3221225493,1610612750,3221225486,1,21,2,1610612738,3221225493,1,1,1,21,1610612738,3221225474,3221225493,1,1,11,2684354562,2,3221225474,2684354591,2684354571,1,1,1610612747,3221225474,1610612738,2684354591,2684354571,1,21,1610612738,2684354562,2684354562,2,3221225493,1,1,1,1610612747,3221225474,2684354562,3221225493,1,21,3221225474,3221225474,2684354562,2684354562,2684354591,2684354571,1,1,1,1610612747,1610612767,3221225493,1,21,2,1610612738,2,3221225474,1610612738,3221225493,1,1,1,1,1610612747,3221225483,1,1610612747,2684354562,3221225474,2684354562,3221225474,3221225503,3221225483,1,1,1,1,1,1,1,1,1610612747,1610612738,2,1610612738,3221225493,1,1,1,1,1,1,1,1,1,1,1610612747,1610612767,3221225503,3221225483,1,1,1,1,1,1,1,1],"height":12,"name":"background","opacity":1,"type":"tilelayer","visible":true,"width":14,"x":0,"y":0},{"height":12,"name":"entities","objects":[{"height":320,"name":"","properties":{},"type":"sand","visible":true,"width":64,"x":0,"y":320},{"height":448,"name":"","properties":{},"type":"sand","visible":true,"width":64,"x":576,"y":0},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":256,"y":768},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":320,"y":768},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":0,"y":768},{"gid":73,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":288,"y":416},{"gid":73,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":223,"y":384},{"gid":61,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":223,"y":289},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":512,"y":320},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":128,"y":192},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":64,"y":64},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":384,"y":64},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":448,"y":64},{"gid":61,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":478,"y":162},{"gid":61,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":545,"y":415},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":576,"y":128},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":639,"y":543},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":288,"y":99},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":384,"y":704},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":384,"y":448},{"height":512,"name":"","properties":{},"type":"sand","visible":true,"width":64,"x":640,"y":0},{"height":512,"name":"","properties":{},"type":"sand","visible":true,"width":64,"x":704,"y":64},{"height":256,"name":"","properties":{},"type":"sand","visible":true,"width":64,"x":768,"y":320},{"height":384,"name":"","properties":{},"type":"sand","visible":true,"width":64,"x":512,"y":0},{"height":256,"name":"","properties":{},"type":"sand","visible":true,"width":64,"x":448,"y":0},{"height":128,"name":"","properties":{},"type":"sand","visible":true,"width":128,"x":320,"y":0},{"height":64,"name":"","properties":{},"type":"sand","visible":true,"width":256,"x":64,"y":0},{"height":512,"name":"","properties":{},"type":"sand","visible":true,"width":64,"x":64,"y":192},{"height":576,"name":"","properties":{},"type":"sand","visible":true,"width":192,"x":128,"y":192},{"height":448,"name":"","properties":{},"type":"sand","visible":true,"width":64,"x":320,"y":320},{"height":192,"name":"","properties":{},"type":"sand","visible":true,"width":64,"x":384,"y":448},{"gid":61,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":672,"y":737},{"gid":61,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":94,"y":613},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":64,"y":512},{"gid":97,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":64,"y":448},{"gid":95,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":448,"y":576},{"gid":95,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":0,"y":192}],"opacity":1,"type":"objectgroup","visible":true,"width":14,"x":0,"y":0}],"orientation":"orthogonal","properties":{},"tileheight":64,"tilesets":[{"firstgid":1,"image":"../game/images/tiles.png","imageheight":640,"imagewidth":640,"margin":0,"name":"tiles","properties":{},"spacing":0,"tileheight":64,"tileproperties":{"40":{"entity":"bush-large"},"42":{"entity":"bush"},"52":{"entity":"bush"},"60":{"entity":"rock-large"},"62":{"entity":"rock"},"72":{"entity":"rock"},"94":{"entity":"herd-small"},"95":{"entity":"herd"},"96":{"entity":"pu-speed"},"97":{"entity":"pu-time"},"98":{"entity":"train-node"},"99":{"entity":"station-node"}},"tilewidth":64}],"tilewidth":64,"version":1,"width":14,"id":"sand-1"},"sand-2":{"height":12,"layers":[{"data":[1,1,1,21,3221225503,1610612757,1610612757,1610612757,1610612757,1610612767,2684354591,2684354581,2684354571,1,1,4,3221225486,21,3221225493,1,16,1,1,1610612747,1610612767,3221225474,3221225493,1,1,2147483654,11,31,3221225493,2684354574,1,1,1,1,1610612747,1610612767,3221225493,1,11,2684354581,31,2684354562,2684354591,2684354581,2684354581,2684354571,1,2147483664,1,21,3221225493,1,21,1610612738,2,3221225474,2684354562,2,2,2684354591,2684354571,1,1,21,3221225493,1,21,2684354562,2,1610612738,1610612738,2,2684354562,3221225474,2684354591,2684354581,2684354581,31,3221225493,1,1610612747,3758096405,3758096405,3758096405,1610612767,3221225474,2684354562,1610612738,2,3221225503,3758096405,3758096405,3221225483,1,1,1,6,1,1610612747,3758096405,1610612767,1610612738,3221225503,3221225483,1,1,1,1,1,1,1,1,1,1,1610612747,3758096405,3221225483,1,1,16,1,1,1,1,1,1,1,1,1,1,1,1,1,1,16,1,1,1,1,1,1,2147483654,11,536870933,2684354571,1,1,1,2147483664,1,1,1,11,536870933,536870933,536870933,31,2684354562,2684354591,536870933,536870933,2684354571,1,1],"height":12,"name":"background","opacity":1,"type":"tilelayer","visible":true,"width":14,"x":0,"y":0},{"height":12,"name":"entities","objects":[{"height":64,"name":"","properties":{},"type":"sand","visible":true,"width":192,"x":384,"y":640},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":0,"y":768},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":448,"y":576},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":576,"y":768},{"gid":73,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":64,"y":704},{"gid":73,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":768,"y":512},{"gid":61,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":157,"y":286},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":512,"y":320},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":192,"y":128},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":0,"y":512},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":286,"y":234},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":512,"y":64},{"gid":61,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":417,"y":283},{"gid":61,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":479,"y":741},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":576,"y":128},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":639,"y":543},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":806,"y":740},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":640,"y":256},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":290,"y":638},{"height":64,"name":"","properties":{},"type":"sand","visible":true,"width":640,"x":192,"y":0},{"height":64,"name":"","properties":{},"type":"sand","visible":true,"width":256,"x":576,"y":64},{"height":64,"name":"","properties":{},"type":"sand","visible":true,"width":192,"x":640,"y":128},{"height":64,"name":"","properties":{},"type":"sand","visible":true,"width":640,"x":128,"y":704},{"height":64,"name":"","properties":{},"type":"sand","visible":true,"width":512,"x":0,"y":192},{"height":64,"name":"","properties":{},"type":"sand","visible":true,"width":128,"x":192,"y":64},{"height":64,"name":"","properties":{},"type":"sand","visible":true,"width":384,"x":256,"y":448},{"height":64,"name":"","properties":{},"type":"sand","visible":true,"width":576,"x":0,"y":256},{"height":64,"name":"","properties":{},"type":"sand","visible":true,"width":192,"x":384,"y":512},{"height":64,"name":"","properties":{},"type":"sand","visible":true,"width":192,"x":128,"y":128},{"height":128,"name":"","properties":{},"type":"sand","visible":true,"width":128,"x":704,"y":192},{"height":128,"name":"","properties":{},"type":"sand","visible":true,"width":832,"x":0,"y":320},{"gid":97,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":128,"y":384},{"gid":95,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":128,"y":576},{"gid":96,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":64,"y":128}],"opacity":1,"type":"objectgroup","visible":true,"width":14,"x":0,"y":0}],"orientation":"orthogonal","properties":{},"tileheight":64,"tilesets":[{"firstgid":1,"image":"../game/images/tiles.png","imageheight":640,"imagewidth":640,"margin":0,"name":"tiles","properties":{},"spacing":0,"tileheight":64,"tileproperties":{"40":{"entity":"bush-large"},"42":{"entity":"bush"},"52":{"entity":"bush"},"60":{"entity":"rock-large"},"62":{"entity":"rock"},"72":{"entity":"rock"},"94":{"entity":"herd-small"},"95":{"entity":"herd"},"96":{"entity":"pu-speed"},"97":{"entity":"pu-time"},"98":{"entity":"train-node"},"99":{"entity":"station-node"}},"tilewidth":64}],"tilewidth":64,"version":1,"width":14,"id":"sand-2"},"sand-3":{"height":12,"layers":[{"data":[11,31,2684354562,2684354562,3221225474,1610612738,1610612738,3221225474,2684354562,1610612738,2,2147483669,1,1,21,12,2684354582,2684354582,2684354572,2684354562,3221225474,3221225474,2,1610612738,1610612738,536870924,2147483661,1,21,22,3,3,3221225494,2,2,2684354562,2684354562,2,12,32,3221225495,1,21,22,3,3,3221225494,2,2684354562,2,1610612738,2684354562,22,3221225505,3221225485,1,21,22,3,3221225504,3221225484,2,2,2,3221225474,536870924,32,3221225495,1,1,21,22,3,3221225494,1610612738,2,2684354562,2684354562,2684354562,22,3,3221225495,1,1,21,1610612748,1610612758,3221225484,2684354562,2,2,3221225474,12,32,3221225504,3758096396,2684354571,1,1610612747,1610612757,1610612757,1610612738,1610612738,2,1610612738,2,22,3,3221225494,3221225474,3221225493,1,1,1,1,1610612747,1610612757,1610612767,536870924,536870934,32,3,3221225494,2684354562,3221225493,1,1,1,14,2684354584,2684354574,21,22,3,3,3,3221225494,3221225503,3221225483,1,1,1,1610612750,4,3221225486,21,1610612748,1610612758,1610612758,1610612758,3221225484,3221225493,4,1,1,1,1,1,1,1610612747,1610612767,1610612738,2684354562,2,1610612738,3221225493,2147483652,1],"height":12,"name":"background","opacity":1,"type":"tilelayer","visible":true,"width":14,"x":0,"y":0},{"height":12,"name":"entities","objects":[{"height":64,"name":"","properties":{},"type":"sand","visible":true,"width":448,"x":320,"y":704},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":640,"y":704},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":448,"y":576},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":576,"y":768},{"gid":73,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":64,"y":448},{"gid":73,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":704,"y":448},{"gid":61,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":292,"y":481},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":576,"y":256},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":64,"y":128},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":0,"y":384},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":286,"y":234},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":256,"y":320},{"gid":61,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":610,"y":159},{"gid":61,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":740,"y":545},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":704,"y":128},{"height":256,"name":"","properties":{},"type":"sand","visible":true,"width":64,"x":768,"y":384},{"height":256,"name":"","properties":{},"type":"sand","visible":true,"width":64,"x":704,"y":448},{"height":64,"name":"","properties":{},"type":"sand","visible":true,"width":192,"x":192,"y":512},{"height":64,"name":"","properties":{},"type":"sand","visible":true,"width":704,"x":64,"y":0},{"height":128,"name":"","properties":{},"type":"sand","visible":true,"width":320,"x":320,"y":128},{"height":64,"name":"","properties":{},"type":"sand","visible":true,"width":384,"x":320,"y":64},{"height":64,"name":"","properties":{},"type":"sand","visible":true,"width":512,"x":0,"y":448},{"height":448,"name":"","properties":{},"type":"sand","visible":true,"width":64,"x":0,"y":0},{"height":64,"name":"","properties":{},"type":"sand","visible":true,"width":320,"x":256,"y":320},{"height":64,"name":"","properties":{},"type":"sand","visible":true,"width":256,"x":320,"y":256},{"height":64,"name":"","properties":{},"type":"sand","visible":true,"width":256,"x":256,"y":384},{"height":256,"name":"","properties":{},"type":"water","visible":true,"width":256,"x":64,"y":64},{"height":128,"name":"","properties":{},"type":"water","visible":true,"width":192,"x":64,"y":320},{"height":192,"name":"","properties":{},"type":"water","visible":true,"width":320,"x":384,"y":512},{"height":64,"name":"","properties":{},"type":"water","visible":true,"width":192,"x":512,"y":448},{"height":64,"name":"","properties":{},"type":"water","visible":true,"width":256,"x":512,"y":384},{"height":128,"name":"","properties":{},"type":"water","visible":true,"width":192,"x":576,"y":256},{"height":128,"name":"","properties":{},"type":"water","visible":true,"width":192,"x":640,"y":128},{"height":64,"name":"","properties":{},"type":"water","visible":true,"width":128,"x":704,"y":64},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":768,"y":64},{"height":128,"name":"","properties":{},"type":"sand","visible":true,"width":64,"x":320,"y":576},{"gid":97,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":256,"y":384},{"gid":96,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":64,"y":704}],"opacity":1,"type":"objectgroup","visible":true,"width":14,"x":0,"y":0}],"orientation":"orthogonal","properties":{},"tileheight":64,"tilesets":[{"firstgid":1,"image":"../game/images/tiles.png","imageheight":640,"imagewidth":640,"margin":0,"name":"tiles","properties":{},"spacing":0,"tileheight":64,"tileproperties":{"40":{"entity":"bush-large"},"42":{"entity":"bush"},"52":{"entity":"bush"},"60":{"entity":"rock-large"},"62":{"entity":"rock"},"72":{"entity":"rock"},"94":{"entity":"herd-small"},"95":{"entity":"herd"},"96":{"entity":"pu-speed"},"97":{"entity":"pu-time"},"98":{"entity":"train-node"},"99":{"entity":"station-node"}},"tilewidth":64}],"tilewidth":64,"version":1,"width":14,"id":"sand-3"},"start-red-bottom":{"height":12,"layers":[{"data":[4,1610612740,4,4,4,2684354564,4,4,4,2684354564,3221225476,1610612740,4,3221225486,4,3221225476,4,2684354564,4,4,2684354564,4,1610612740,4,1610612740,3221225476,3221225496,3221225473,4,1610612740,4,4,1610612740,2684354564,4,4,4,2684354564,3221225476,1610612740,3221225486,44,4,3221225476,4,2684354564,4,1610612740,3221225476,4,3221225476,3221225476,2684354564,3221225496,2684354561,1610612737,4,4,4,4,3221225476,4,2684354564,4,1610612740,1610612740,4,3221225486,2684354561,1,1610612750,3758096408,3758096408,3758096408,3758096408,3758096408,4,4,4,3221225476,2684354564,3221225473,3221225473,1610612737,1,44,1,1,1,2147483664,1610612750,3758096408,3758096408,3758096408,3221225486,1610612737,2684354561,2147483692,1,1,1,1,1,1,2684354561,2147483654,16,44,1,1610612737,1,2684354561,1,1,2147483649,1,2147483649,44,3221225473,3221225473,3221225473,3221225473,3221225473,3221225473,3221225473,1610612737,536870947,2684354595,2684354595,2684354595,536870947,536870947,536870947,2684354595,2684354595,2684354595,2684354585,1610612737,44,1,2684354565,2684354565,2684354565,2684354565,2684354565,536870981,536870941,536870951,2684354599,2684354589,2684354639,1610612737,3221225473,2684354561,3758096389,1610612741,1610612741,1610612741,3758096389,1610612785,536870921,536870931,2684354579,2684354569,2684354619,3221225473,1610612737,16],"height":12,"name":"background","opacity":1,"type":"tilelayer","visible":true,"width":14,"x":0,"y":0},{"height":12,"name":"entities","objects":[{"height":64,"name":"","properties":{"nodeId":"car-tie-2","station":"initial"},"type":"track-station","visible":true,"width":16,"x":80,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":64,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":96,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":112,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":0,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":16,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":32,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":48,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":128,"y":512},{"height":64,"name":"","properties":{"nodeId":"car-tie","station":"initial"},"type":"track-station","visible":true,"width":16,"x":224,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":160,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":176,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":192,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":208,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":144,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":240,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":256,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":272,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":288,"y":512},{"height":64,"name":"","properties":{"nodeId":"dino-train-tie","station":"initial"},"type":"track-station","visible":true,"width":16,"x":384,"y":512},{"height":64,"name":"","properties":{"nodeId":"rocket-train-tie","station":"initial"},"type":"track-station","visible":true,"width":16,"x":400,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":336,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":352,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":368,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":320,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":304,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":416,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":432,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":448,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":464,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":480,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":496,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":512,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":528,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":544,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":560,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":576,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":592,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":608,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":624,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":640,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":656,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":672,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":688,"y":512},{"height":192,"name":"","properties":{},"type":"station","visible":true,"width":704,"x":0,"y":576},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":705,"y":417},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":768,"y":320},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":640,"y":512},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":768,"y":223},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":832,"y":128},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":832,"y":64},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":768,"y":64},{"gid":100,"height":0,"name":"","properties":{"car":"rocket","station":"initial"},"type":"","visible":true,"width":0,"x":192,"y":704},{"gid":99,"height":0,"name":"","properties":{"station":"initial"},"type":"","visible":true,"width":0,"x":192,"y":576},{"height":512,"name":"","properties":{},"type":"station","visible":true,"width":704,"x":0,"y":0},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":128,"y":512},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":64,"y":512},{"gid":61,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":93,"y":236},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":384,"y":64},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":512,"y":64},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":0,"y":192},{"gid":61,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":353,"y":225},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":64,"y":384},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":256,"y":192},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":512,"y":256},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":192,"y":64},{"gid":61,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":64,"y":64},{"gid":61,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":227,"y":342},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":256,"y":512},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":512,"y":128},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":256,"y":64},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":128,"y":384},{"gid":61,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":422,"y":403},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":192,"y":128},{"gid":61,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":543,"y":395},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":-28,"y":341},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":704,"y":128},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":704,"y":256},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":704,"y":320},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":640,"y":192},{"gid":43,"height":0,"name":"","properties":{"permanent":"true"},"type":"","visible":true,"width":0,"x":192,"y":512}],"opacity":1,"type":"objectgroup","visible":true,"width":14,"x":0,"y":0}],"orientation":"orthogonal","properties":{},"tileheight":64,"tilesets":[{"firstgid":1,"image":"../game/images/tiles.png","imageheight":640,"imagewidth":640,"margin":0,"name":"tiles","properties":{},"spacing":0,"tileheight":64,"tileproperties":{"40":{"entity":"bush-large"},"42":{"entity":"bush"},"52":{"entity":"bush"},"60":{"entity":"rock-large"},"62":{"entity":"rock"},"72":{"entity":"rock"},"94":{"entity":"herd-small"},"95":{"entity":"herd"},"96":{"entity":"pu-speed"},"97":{"entity":"pu-time"},"98":{"entity":"train-node"},"99":{"entity":"station-node"}},"tilewidth":64}],"tilewidth":64,"version":1,"width":14,"id":"start-red-bottom"},"start-red-top":{"height":12,"layers":[{"data":[3221225477,2147483653,5,5,3221225477,1073741863,3221225491,3221225491,3221225491,3221225511,2147483683,2147483649,536870913,1073741825,3221225477,3221225477,1073741829,1073741829,3221225477,1073741853,3221225481,3221225481,3221225481,3221225501,2147483683,536870913,2147483649,3758096385,3221225487,3221225487,1073741839,1073741839,3221225487,1073741903,3221225531,3221225531,3221225531,3221225551,3221225497,536870913,536870913,1073741825,1073741825,1073741825,3221225473,1073741825,3221225473,1073741868,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,536870913,1073741825,1073741825,1073741825,1073741825,1073741825,1073741825,3758096385,3221225478,1073741840,1073741868,1073741825,536870913,1073741825,3758096385,1073741825,1073741868,1073741825,1073741825,1073741825,3221225488,536870923,536870933,536870933,536870933,2147483659,536870913,3758096385,1073741825,536870923,2684354581,536870933,536870933,2684354581,536870933,536870943,1073741869,3758096386,1073741826,2147483669,2147483649,2147483649,536870913,1073741845,1073741826,1073741826,1073741826,1073741826,1073741869,1073741826,536870924,536870934,2147483660,2147483679,2147483659,3758096385,1073741825,536870943,1073741826,12,536870934,536870934,2684354582,2684354582,536870944,536870915,2147483670,1073741826,2147483669,3758096385,536870913,3221225517,1073741826,22,1073741827,1073741827,1073741827,1073741827,1073741827,1610612782,2147483680,2147483660,2147483679,2147483659,1073741825,1073741826,1073741826,22,1073741827,1073741880,3758096430,1073741827,1073741827,1073741870,1073741827,2147483670,1073741826,2147483669,2147483649,1073741826,536870924,536870944,1073741827,3758096440,1073741827,1073741827,1073741827,3758096440,1073741827,2147483680,2684354572,2147483679,2684354571],"height":12,"name":"background","opacity":1,"type":"tilelayer","visible":true,"width":14,"x":0,"y":0},{"height":12,"name":"entities","objects":[{"height":64,"name":"","properties":{"nodeId":"car-tie-2","station":"initial"},"type":"track-station","visible":true,"width":16,"x":80,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":64,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":96,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":112,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":0,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":16,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":32,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":48,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":128,"y":192},{"height":64,"name":"","properties":{"nodeId":"car-tie","station":"initial"},"type":"track-station","visible":true,"width":16,"x":224,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":160,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":176,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":192,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":208,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":144,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":240,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":256,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":272,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":288,"y":192},{"height":64,"name":"","properties":{"nodeId":"dino-train-tie","station":"initial"},"type":"track-station","visible":true,"width":16,"x":384,"y":192},{"height":64,"name":"","properties":{"nodeId":"rocket-train-tie","station":"initial"},"type":"track-station","visible":true,"width":16,"x":400,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":336,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":352,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":368,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":320,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":304,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":416,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":432,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":448,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":464,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":480,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":496,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":512,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":528,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":544,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":560,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":576,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":592,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":608,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":624,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":640,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":656,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":672,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":688,"y":192},{"height":192,"name":"","properties":{},"type":"station","visible":true,"width":704,"x":0,"y":0},{"height":128,"name":"","properties":{},"type":"sand","visible":true,"width":64,"x":704,"y":448},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":832,"y":704},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":768,"y":576},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":704,"y":448},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":832,"y":640},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":832,"y":768},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":768,"y":768},{"height":64,"name":"","properties":{},"type":"water","visible":true,"width":64,"x":704,"y":704},{"height":128,"name":"","properties":{},"type":"sand","visible":true,"width":128,"x":704,"y":576},{"height":64,"name":"","properties":{},"type":"sand","visible":true,"width":128,"x":768,"y":704},{"gid":100,"height":0,"name":"","properties":{"car":"rocket","station":"initial"},"type":"","visible":true,"width":0,"x":192,"y":128},{"gid":99,"height":0,"name":"","properties":{"station":"initial"},"type":"","visible":true,"width":0,"x":192,"y":256},{"height":512,"name":"","properties":{},"type":"station","visible":true,"width":704,"x":0,"y":256},{"gid":43,"height":0,"name":"","properties":{"permanent":"true"},"type":"","visible":true,"width":0,"x":192,"y":320}],"opacity":1,"type":"objectgroup","visible":true,"width":14,"x":0,"y":0}],"orientation":"orthogonal","properties":{},"tileheight":64,"tilesets":[{"firstgid":1,"image":"../game/images/tiles.png","imageheight":640,"imagewidth":640,"margin":0,"name":"tiles","properties":{},"spacing":0,"tileheight":64,"tileproperties":{"40":{"entity":"bush-large"},"42":{"entity":"bush"},"52":{"entity":"bush"},"60":{"entity":"rock-large"},"62":{"entity":"rock"},"72":{"entity":"rock"},"94":{"entity":"herd-small"},"95":{"entity":"herd"},"96":{"entity":"pu-speed"},"97":{"entity":"pu-time"},"98":{"entity":"train-node"},"99":{"entity":"station-node"}},"tilewidth":64}],"tilewidth":64,"version":1,"width":14,"id":"start-red-top"},"end-red-bottom":{"height":12,"layers":[{"data":[1,2684354561,1,34,24,4,1610612740,4,4,4,2684354564,4,4,4,1,6,3221225473,34,1073741848,4,3221225476,4,2684354564,4,4,2684354564,4,1610612740,3758096385,2684354561,2684354561,34,1073741848,4,1610612740,4,4,1610612740,2684354564,4,4,4,1,44,1,34,1610612750,4,3221225476,4,2684354564,4,1610612740,3221225476,4,3221225476,1,2684354561,1,34,1,4,4,4,4,3221225476,4,2684354564,4,1610612740,1,2684354561,3221225473,34,1,1610612750,3758096408,3758096408,3758096408,3758096408,3758096408,4,4,4,1,1,2147483664,34,1,1,44,1,1,1,2147483664,1610612750,3758096408,3758096408,3758096385,2684354561,1,34,3221225473,1,1,1,1,1,1,2684354561,2147483654,16,1,2684354561,1,34,1,1,1,2147483649,1,2147483649,44,3221225473,3221225473,3221225473,44,2684354561,3221225473,34,536870937,536870947,2684354595,2684354595,2684354595,536870947,536870947,536870947,2684354595,2684354595,1,1,2684354561,34,536870927,2684354565,2684354565,2684354565,2684354565,2684354565,536870981,536870941,536870951,2684354599,1,2684354561,1,34,1610612751,3758096389,1610612741,1610612741,1610612741,3758096389,1610612785,536870921,536870931,2684354579],"height":12,"name":"background","opacity":1,"type":"tilelayer","visible":true,"width":14,"x":0,"y":0},{"height":12,"name":"entities","objects":[{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":256,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":304,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":288,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":272,"y":512},{"height":192,"name":"","properties":{},"type":"station","visible":true,"width":640,"x":256,"y":576},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":368,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":352,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":336,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":320,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":432,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":416,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":400,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":384,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":496,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":480,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":464,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":448,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":560,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":544,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":528,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":512,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":624,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":608,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":592,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":576,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":688,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":672,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":656,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":640,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":752,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":736,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":720,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":704,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":816,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":800,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":784,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":768,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":848,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":864,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":880,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":832,"y":512},{"height":320,"name":"","properties":{"station":"final"},"type":"funnel","visible":true,"width":256,"x":0,"y":384},{"height":64,"name":"","properties":{"station":"final"},"type":"track-fake","visible":true,"width":16,"x":240,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-fake","visible":true,"width":16,"x":208,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-fake","visible":true,"width":16,"x":224,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-fake","visible":true,"width":16,"x":192,"y":512},{"gid":99,"height":0,"name":"","properties":{"car":"rocket","station":"final","train":"rocket"},"type":"","visible":true,"width":0,"x":384,"y":576},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":292,"y":341},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":576,"y":512},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":448,"y":512},{"gid":61,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":384,"y":64},{"gid":100,"height":0,"name":"","properties":{"car":"rocket","nodeId":"r-13","station":"final"},"type":"","visible":true,"width":0,"x":384,"y":704},{"height":512,"name":"","properties":{},"type":"station","visible":true,"width":640,"x":256,"y":0},{"gid":61,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":742,"y":403},{"gid":61,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":863,"y":395},{"gid":61,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":673,"y":225},{"gid":61,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":413,"y":236},{"gid":61,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":547,"y":342},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":832,"y":64},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":832,"y":128},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":832,"y":256},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":704,"y":64},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":576,"y":64},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":512,"y":64},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":256,"y":64},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":256,"y":192},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":320,"y":192},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":384,"y":384},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":448,"y":384},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":576,"y":192},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":512,"y":128},{"gid":41,"height":0,"name":"","properties":{"permanent":"true"},"type":"","visible":true,"width":0,"x":34,"y":340},{"gid":41,"height":0,"name":"","properties":{"permanent":"true"},"type":"","visible":true,"width":0,"x":165,"y":220},{"gid":43,"height":0,"name":"","properties":{"permanent":"true"},"type":"","visible":true,"width":0,"x":386,"y":511},{"gid":43,"height":0,"name":"","properties":{"permanent":"true"},"type":"","visible":true,"width":0,"x":130,"y":319},{"gid":41,"height":0,"name":"","properties":{"permanent":"true"},"type":"","visible":true,"width":0,"x":38,"y":102},{"gid":41,"height":0,"name":"","properties":{"permanent":"true"},"type":"","visible":true,"width":0,"x":33,"y":735},{"gid":43,"height":0,"name":"","properties":{"permanent":"true"},"type":"","visible":true,"width":0,"x":64,"y":192},{"gid":43,"height":0,"name":"","properties":{"permanent":"true"},"type":"","visible":true,"width":0,"x":64,"y":256},{"height":384,"name":"","properties":{},"type":"station","visible":true,"width":192,"x":64,"y":0},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":912,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":928,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":896,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":944,"y":512}],"opacity":1,"type":"objectgroup","visible":true,"width":14,"x":0,"y":0}],"orientation":"orthogonal","properties":{},"tileheight":64,"tilesets":[{"firstgid":1,"image":"../game/images/tiles.png","imageheight":640,"imagewidth":640,"margin":0,"name":"tiles","properties":{},"spacing":0,"tileheight":64,"tileproperties":{"40":{"entity":"bush-large"},"42":{"entity":"bush"},"52":{"entity":"bush"},"60":{"entity":"rock-large"},"62":{"entity":"rock"},"72":{"entity":"rock"},"94":{"entity":"herd-small"},"95":{"entity":"herd"},"96":{"entity":"pu-speed"},"97":{"entity":"pu-time"},"98":{"entity":"train-node"},"99":{"entity":"station-node"}},"tilewidth":64}],"tilewidth":64,"version":1,"width":14,"id":"end-red-bottom"},"end-red-top":{"height":12,"layers":[{"data":[1073741825,3758096385,1073741825,1073741858,35,3221225477,2147483653,5,5,3221225477,1073741863,3221225491,3221225491,3221225491,1073741825,1073741825,3758096385,1073741858,1073741859,3221225477,3221225477,1073741829,1073741829,3221225477,1073741853,3221225481,3221225481,3221225481,1073741868,3758096385,2147483649,1073741858,1073741849,3221225487,3221225487,1073741839,1073741839,3221225487,1073741903,3221225531,3221225531,3221225531,1073741825,3758096385,1073741825,1073741858,1073741825,1073741825,1073741825,3221225473,1073741825,3221225473,1073741868,2147483649,2147483649,2147483649,2684354561,3758096385,1073741825,1073741858,2147483649,1073741825,1073741825,1073741825,1073741825,1073741825,1073741825,3758096385,3221225478,1073741840,1073741825,1073741825,3221225488,1073741858,1073741825,1073741825,1073741868,1073741825,1073741825,1073741825,3221225488,536870923,536870933,536870933,1073741825,3758096385,2147483649,1073741858,1073741825,536870923,2684354581,536870933,536870933,2684354581,536870933,536870943,1073741869,3758096386,1073741825,3758096385,1073741825,1073741858,1073741825,1073741845,1073741826,1073741826,1073741826,1073741826,1073741869,1073741826,536870924,536870934,1073741825,1073741868,1073741825,1073741858,536870923,536870943,1073741826,12,536870934,536870934,2684354582,2684354582,536870944,536870915,2684354561,3758096385,3758096385,1073741858,1073741845,3221225517,1073741826,22,1073741827,1073741827,1073741827,1073741827,1073741827,1610612782,1073741825,1073741830,2147483649,1073741858,1073741845,1073741826,1073741826,22,1073741827,1073741880,3758096430,1073741827,1073741827,1073741870,1073741825,3758096385,1073741825,1073741858,1073741845,1073741826,536870924,536870944,1073741827,3758096440,1073741827,1073741827,1073741827,3758096440],"height":12,"name":"background","opacity":1,"type":"tilelayer","visible":true,"width":14,"x":0,"y":0},{"height":12,"name":"entities","objects":[{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":256,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":304,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":288,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":272,"y":192},{"height":192,"name":"","properties":{},"type":"station","visible":true,"width":640,"x":256,"y":0},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":368,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":352,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":336,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":320,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":432,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":416,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":400,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":384,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":496,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":480,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":464,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":448,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":560,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":544,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":528,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":512,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":624,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":608,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":592,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":576,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":688,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":672,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":656,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":640,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":752,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":736,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":720,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":704,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":816,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":800,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":784,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":768,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":848,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":864,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":880,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":832,"y":192},{"height":320,"name":"","properties":{"station":"final"},"type":"funnel","visible":true,"width":256,"x":0,"y":64},{"height":64,"name":"","properties":{"station":"final"},"type":"track-fake","visible":true,"width":16,"x":240,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-fake","visible":true,"width":16,"x":208,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-fake","visible":true,"width":16,"x":224,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-fake","visible":true,"width":16,"x":192,"y":192},{"gid":99,"height":0,"name":"","properties":{"car":"rocket","station":"final","train":"rocket"},"type":"","visible":true,"width":0,"x":384,"y":256},{"gid":100,"height":0,"name":"","properties":{"car":"rocket","nodeId":"r-13","station":"final"},"type":"","visible":true,"width":0,"x":384,"y":128},{"height":512,"name":"","properties":{},"type":"station","visible":true,"width":640,"x":256,"y":256},{"gid":41,"height":0,"name":"","properties":{"permanent":"true"},"type":"","visible":true,"width":0,"x":171,"y":607},{"gid":41,"height":0,"name":"","properties":{"permanent":"true"},"type":"","visible":true,"width":0,"x":65,"y":706},{"gid":43,"height":0,"name":"","properties":{"permanent":"true"},"type":"","visible":true,"width":0,"x":129,"y":514},{"gid":41,"height":0,"name":"","properties":{"permanent":"true"},"type":"","visible":true,"width":0,"x":27,"y":91},{"gid":43,"height":0,"name":"","properties":{"permanent":"true"},"type":"","visible":true,"width":0,"x":385,"y":322},{"gid":41,"height":0,"name":"","properties":{"permanent":"true"},"type":"","visible":true,"width":0,"x":28,"y":477},{"gid":43,"height":0,"name":"","properties":{"permanent":"true"},"type":"","visible":true,"width":0,"x":0,"y":640},{"gid":43,"height":0,"name":"","properties":{"permanent":"true"},"type":"","visible":true,"width":0,"x":0,"y":576},{"height":384,"name":"","properties":{},"type":"station","visible":true,"width":192,"x":64,"y":384},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":912,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":928,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":896,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":944,"y":192}],"opacity":1,"type":"objectgroup","visible":true,"width":14,"x":0,"y":0}],"orientation":"orthogonal","properties":{},"tileheight":64,"tilesets":[{"firstgid":1,"image":"../game/images/tiles.png","imageheight":640,"imagewidth":640,"margin":0,"name":"tiles","properties":{},"spacing":0,"tileheight":64,"tileproperties":{"40":{"entity":"bush-large"},"42":{"entity":"bush"},"52":{"entity":"bush"},"60":{"entity":"rock-large"},"62":{"entity":"rock"},"72":{"entity":"rock"},"94":{"entity":"herd-small"},"95":{"entity":"herd"},"96":{"entity":"pu-speed"},"97":{"entity":"pu-time"},"98":{"entity":"train-node"},"99":{"entity":"station-node"}},"tilewidth":64}],"tilewidth":64,"version":1,"width":14,"id":"end-red-top"},"start-green-bottom":{"height":12,"layers":[{"data":[2,1610612748,1610612768,3,2684354616,3,3,3,2684354616,3,3221225504,3758096396,3221225503,3758096395,2,2,1073741846,3,56,2684354606,3,3,46,3,3221225494,2,3221225493,3221225473,2147483693,2,1073741846,3,3,3,3,3,536870958,3221225504,3221225484,3221225503,3221225483,1,1610612767,2,1073741836,1610612758,1610612758,3758096406,3758096406,1610612768,1610612739,3221225494,2,3221225493,2684354561,1610612737,21,2,2,2,2,45,2,1610612748,1610612758,3221225484,3221225503,3221225483,2684354561,1,1610612747,3758096405,1610612757,1610612757,3758096405,1610612757,1610612767,45,2684354562,2,3221225493,3221225473,3221225473,1610612737,1,44,1,1,1,2147483664,1610612747,1610612757,1610612757,1610612757,3221225483,1610612737,2684354561,1,1,1,1,1,1,1,2684354561,2147483654,16,44,1,1610612737,1,2684354561,1,1,2147483649,1,2147483649,44,3221225473,3221225473,3221225473,3221225473,3221225473,3221225473,3221225473,1610612737,2147483663,2147483663,15,15,2147483663,80,60,60,60,2147483728,2147483673,1610612737,1610612737,1,2147483653,2147483653,5,5,2147483653,30,10,10,10,2147483678,3221225507,1610612737,3221225473,2684354561,2147483653,3221225477,1073741829,1073741829,2147483653,40,20,20,20,2147483688,3221225507,3221225473,1610612737,1],"height":12,"name":"background","opacity":1,"type":"tilelayer","visible":true,"width":14,"x":0,"y":0},{"height":12,"name":"entities","objects":[{"height":64,"name":"","properties":{"nodeId":"car-tie-2","station":"initial"},"type":"track-station","visible":true,"width":16,"x":80,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":64,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":96,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":112,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":0,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":16,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":32,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":48,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":128,"y":512},{"height":64,"name":"","properties":{"nodeId":"car-tie","station":"initial"},"type":"track-station","visible":true,"width":16,"x":224,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":160,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":176,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":192,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":208,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":144,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":240,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":256,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":272,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":288,"y":512},{"height":64,"name":"","properties":{"nodeId":"dino-train-tie","station":"initial"},"type":"track-station","visible":true,"width":16,"x":384,"y":512},{"height":64,"name":"","properties":{"nodeId":"rocket-train-tie","station":"initial"},"type":"track-station","visible":true,"width":16,"x":400,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":336,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":352,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":368,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":320,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":304,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":416,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":432,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":448,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":464,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":480,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":496,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":512,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":528,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":544,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":560,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":576,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":592,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":608,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":624,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":640,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":656,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":672,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":688,"y":512},{"height":192,"name":"","properties":{},"type":"station","visible":true,"width":704,"x":0,"y":576},{"height":128,"name":"","properties":{},"type":"sand","visible":true,"width":64,"x":704,"y":192},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":705,"y":417},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":768,"y":320},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":640,"y":512},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":768,"y":223},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":832,"y":128},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":832,"y":64},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":768,"y":64},{"height":64,"name":"","properties":{},"type":"water","visible":true,"width":64,"x":704,"y":0},{"height":128,"name":"","properties":{},"type":"sand","visible":true,"width":128,"x":704,"y":64},{"height":64,"name":"","properties":{},"type":"sand","visible":true,"width":128,"x":768,"y":0},{"gid":100,"height":0,"name":"","properties":{"car":"rocket","station":"initial"},"type":"","visible":true,"width":0,"x":192,"y":704},{"gid":99,"height":0,"name":"","properties":{"station":"initial"},"type":"","visible":true,"width":0,"x":192,"y":576},{"height":512,"name":"","properties":{},"type":"station","visible":true,"width":704,"x":0,"y":0},{"gid":61,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":65,"y":62},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":129,"y":510},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":257,"y":510},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":-27,"y":339},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":65,"y":510},{"gid":43,"height":0,"name":"","properties":{"permanent":"true"},"type":"","visible":true,"width":0,"x":192,"y":512}],"opacity":1,"type":"objectgroup","visible":true,"width":14,"x":0,"y":0}],"orientation":"orthogonal","properties":{},"tileheight":64,"tilesets":[{"firstgid":1,"image":"../game/images/tiles.png","imageheight":640,"imagewidth":640,"margin":0,"name":"tiles","properties":{},"spacing":0,"tileheight":64,"tileproperties":{"40":{"entity":"bush-large"},"42":{"entity":"bush"},"52":{"entity":"bush"},"60":{"entity":"rock-large"},"62":{"entity":"rock"},"72":{"entity":"rock"},"94":{"entity":"herd-small"},"95":{"entity":"herd"},"96":{"entity":"pu-speed"},"97":{"entity":"pu-time"},"98":{"entity":"train-node"},"99":{"entity":"station-node"}},"tilewidth":64}],"tilewidth":64,"version":1,"width":14,"id":"start-green-bottom"},"start-green-top":{"height":12,"layers":[{"data":[2684354565,536870917,536870917,536870917,2684354565,536870962,536870922,536870932,2684354580,2684354570,2684354620,2147483649,536870913,1073741840,3758096389,3758096389,3758096389,3758096389,3758096389,1610612806,1610612766,1610612776,3758096424,3758096414,3758096464,536870913,2147483649,3758096385,1610612771,3758096419,3758096419,3758096419,1610612771,1610612771,1610612771,3758096419,3758096419,3758096419,3758096409,536870913,1073741868,1073741825,1073741825,1073741825,3221225473,1073741825,3221225473,1073741868,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,536870913,1073741825,1073741825,1073741825,1073741825,1073741825,1073741825,3758096385,3221225478,1073741840,1073741868,1073741825,536870913,1073741825,3758096385,1073741825,1073741868,1073741825,1073741825,2147483654,3221225488,1,1,1,1,1,536870913,3758096385,3221225516,1,1,1,1,1,1,1,1,1,1,1,1,2147483649,536870913,1,1,1,2147483692,1,16,1,1,1,44,1,1,3758096385,1073741825,1,1,1,1,1,1,1,1,1,1,1,1,3758096385,536870913,44,1,1,1,1,1,44,1,1,1,1,1,1,1073741868,1,1,6,1,1,2147483692,1,1,6,1,1,2147483692,1,2147483649,1,1,16,1,1,1,1,1,1,1,16,1,1,2147483662],"height":12,"name":"background","opacity":1,"type":"tilelayer","visible":true,"width":14,"x":0,"y":0},{"height":12,"name":"entities","objects":[{"height":64,"name":"","properties":{"nodeId":"car-tie-2","station":"initial"},"type":"track-station","visible":true,"width":16,"x":80,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":64,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":96,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":112,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":0,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":16,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":32,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":48,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":128,"y":192},{"height":64,"name":"","properties":{"nodeId":"car-tie","station":"initial"},"type":"track-station","visible":true,"width":16,"x":224,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":160,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":176,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":192,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":208,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":144,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":240,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":256,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":272,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":288,"y":192},{"height":64,"name":"","properties":{"nodeId":"dino-train-tie","station":"initial"},"type":"track-station","visible":true,"width":16,"x":384,"y":192},{"height":64,"name":"","properties":{"nodeId":"rocket-train-tie","station":"initial"},"type":"track-station","visible":true,"width":16,"x":400,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":336,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":352,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":368,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":320,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":304,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":416,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":432,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":448,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":464,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":480,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":496,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":512,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":528,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":544,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":560,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":576,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":592,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":608,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":624,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":640,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":656,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":672,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":688,"y":192},{"height":192,"name":"","properties":{},"type":"station","visible":true,"width":704,"x":0,"y":0},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":611,"y":356},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":704,"y":448},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":832,"y":512},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":768,"y":607},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":832,"y":704},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":832,"y":768},{"gid":100,"height":0,"name":"","properties":{"car":"rocket","station":"initial"},"type":"","visible":true,"width":0,"x":192,"y":128},{"gid":99,"height":0,"name":"","properties":{"station":"initial"},"type":"","visible":true,"width":0,"x":192,"y":256},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":64,"y":320},{"height":512,"name":"","properties":{},"type":"station","visible":true,"width":704,"x":0,"y":256},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":256,"y":320},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":-30,"y":411},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":395,"y":422},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":298,"y":602},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":28,"y":747},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":640,"y":576},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":576,"y":704},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":448,"y":768},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":448,"y":576},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":128,"y":512},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":128,"y":576},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":192,"y":704},{"gid":43,"height":0,"name":"","properties":{"permanent":"true"},"type":"","visible":true,"width":0,"x":192,"y":320}],"opacity":1,"type":"objectgroup","visible":true,"width":14,"x":0,"y":0}],"orientation":"orthogonal","properties":{},"tileheight":64,"tilesets":[{"firstgid":1,"image":"../game/images/tiles.png","imageheight":640,"imagewidth":640,"margin":0,"name":"tiles","properties":{},"spacing":0,"tileheight":64,"tileproperties":{"40":{"entity":"bush-large"},"42":{"entity":"bush"},"52":{"entity":"bush"},"60":{"entity":"rock-large"},"62":{"entity":"rock"},"72":{"entity":"rock"},"94":{"entity":"herd-small"},"95":{"entity":"herd"},"96":{"entity":"pu-speed"},"97":{"entity":"pu-time"},"98":{"entity":"train-node"},"99":{"entity":"station-node"}},"tilewidth":64}],"tilewidth":64,"version":1,"width":14,"id":"start-green-top"},"end-green-bottom":{"height":12,"layers":[{"data":[1,2684354561,1,34,21,2,1610612748,1610612768,3,2684354616,3,3,3,2684354616,1,6,3221225473,34,21,2,2,1073741846,3,56,2684354606,3,3,46,3758096385,2684354561,2684354561,34,21,2147483693,2,1073741846,3,3,3,3,3,536870958,1,44,1,34,1610612747,1610612767,2,1073741836,1610612758,1610612758,3758096406,3758096406,1610612768,1610612739,1,2684354561,1,34,1,21,2,2,2,2,45,2,1610612748,1610612758,1,2684354561,3221225473,34,1,1610612747,3758096405,1610612757,1610612757,3758096405,1610612757,1610612767,45,2684354562,1,1,2147483664,34,1,1,44,1,1,1,2147483664,1610612747,1610612757,1610612757,3758096385,2684354561,1,34,3221225473,1,1,1,1,1,1,2684354561,2147483654,16,1,2684354561,1,34,1,1,1,2147483649,1,2147483649,44,3221225473,3221225473,3221225473,44,2684354561,3221225473,34,25,2147483663,2147483663,15,15,2147483663,80,60,60,60,1,1,2684354561,34,35,2147483653,2147483653,5,5,2147483653,30,10,10,10,1,2684354561,1,34,1073741859,2147483653,3221225477,1073741829,1073741829,2147483653,40,20,20,20],"height":12,"name":"background","opacity":1,"type":"tilelayer","visible":true,"width":14,"x":0,"y":0},{"height":12,"name":"entities","objects":[{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":256,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":304,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":288,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":272,"y":512},{"height":192,"name":"","properties":{},"type":"station","visible":true,"width":640,"x":256,"y":576},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":368,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":352,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":336,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":320,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":432,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":416,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":400,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":384,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":496,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":480,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":464,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":448,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":560,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":544,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":528,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":512,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":624,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":608,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":592,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":576,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":688,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":672,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":656,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":640,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":752,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":736,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":720,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":704,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":816,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":800,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":784,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":768,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":848,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":864,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":880,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":832,"y":512},{"height":320,"name":"","properties":{"station":"final"},"type":"funnel","visible":true,"width":256,"x":0,"y":384},{"height":64,"name":"","properties":{"station":"final"},"type":"track-fake","visible":true,"width":16,"x":240,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-fake","visible":true,"width":16,"x":208,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-fake","visible":true,"width":16,"x":224,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-fake","visible":true,"width":16,"x":192,"y":512},{"gid":99,"height":0,"name":"","properties":{"car":"rocket","station":"final","train":"rocket"},"type":"","visible":true,"width":0,"x":384,"y":576},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":292,"y":341},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":576,"y":512},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":448,"y":512},{"gid":61,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":384,"y":64},{"gid":100,"height":0,"name":"","properties":{"car":"rocket","nodeId":"r-13","station":"final"},"type":"","visible":true,"width":0,"x":384,"y":704},{"height":512,"name":"","properties":{},"type":"station","visible":true,"width":640,"x":256,"y":0},{"gid":41,"height":0,"name":"","properties":{"permanent":"true"},"type":"","visible":true,"width":0,"x":33,"y":339},{"gid":41,"height":0,"name":"","properties":{"permanent":"true"},"type":"","visible":true,"width":0,"x":164,"y":219},{"gid":43,"height":0,"name":"","properties":{"permanent":"true"},"type":"","visible":true,"width":0,"x":385,"y":510},{"gid":43,"height":0,"name":"","properties":{"permanent":"true"},"type":"","visible":true,"width":0,"x":129,"y":318},{"gid":41,"height":0,"name":"","properties":{"permanent":"true"},"type":"","visible":true,"width":0,"x":37,"y":101},{"gid":41,"height":0,"name":"","properties":{"permanent":"true"},"type":"","visible":true,"width":0,"x":32,"y":734},{"gid":43,"height":0,"name":"","properties":{"permanent":"true"},"type":"","visible":true,"width":0,"x":64,"y":256},{"gid":43,"height":0,"name":"","properties":{"permanent":"true"},"type":"","visible":true,"width":0,"x":64,"y":192},{"height":384,"name":"","properties":{},"type":"station","visible":true,"width":192,"x":64,"y":0},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":912,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":928,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":896,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":944,"y":512}],"opacity":1,"type":"objectgroup","visible":true,"width":14,"x":0,"y":0}],"orientation":"orthogonal","properties":{},"tileheight":64,"tilesets":[{"firstgid":1,"image":"../game/images/tiles.png","imageheight":640,"imagewidth":640,"margin":0,"name":"tiles","properties":{},"spacing":0,"tileheight":64,"tileproperties":{"40":{"entity":"bush-large"},"42":{"entity":"bush"},"52":{"entity":"bush"},"60":{"entity":"rock-large"},"62":{"entity":"rock"},"72":{"entity":"rock"},"94":{"entity":"herd-small"},"95":{"entity":"herd"},"96":{"entity":"pu-speed"},"97":{"entity":"pu-time"},"98":{"entity":"train-node"},"99":{"entity":"station-node"}},"tilewidth":64}],"tilewidth":64,"version":1,"width":14,"id":"end-green-bottom"},"end-green-top":{"height":12,"layers":[{"data":[1073741825,3758096385,1073741825,1073741858,536870927,2684354565,536870917,536870917,536870917,2684354565,536870962,1610612746,1610612756,3758096404,1073741825,1073741825,3758096385,1073741858,1610612751,3758096389,3758096389,3758096389,3758096389,3758096389,1610612806,1610612766,1610612776,3758096424,1073741868,3758096385,2147483649,1073741858,1610612761,1610612771,3758096419,3758096419,3758096419,1610612771,1610612771,1610612771,3758096419,3758096419,1073741825,3758096385,1073741825,1073741858,1073741825,1073741825,1073741825,3221225473,1073741825,3221225473,1073741868,2147483649,2147483649,2147483649,2684354561,3758096385,1073741825,1073741858,2147483649,1073741825,1073741825,1073741825,1073741825,1073741825,1073741825,3758096385,3221225478,1073741840,1073741825,1073741825,3221225488,1073741858,1073741825,1073741825,1073741868,1073741825,1073741825,2147483654,3221225488,1,1,1,1073741825,3758096385,2147483649,1073741858,1073741825,1,1,1,1,1,1,1,1,1,1073741825,3758096385,1073741825,1073741858,1073741825,1,1,1,2147483692,1,16,1,1,1,1073741825,1073741868,1073741825,1073741858,1,1,1,1,1,1,1,1,1,1,2684354561,3758096385,3758096385,1073741858,1,44,1,1,1,1,1,44,1,1,1073741825,1073741830,2147483649,1073741858,1,1,1,6,1,1,2147483692,1,1,6,1073741825,3758096385,1073741825,1073741858,1,1,1,16,1,1,1,1,1,1],"height":12,"name":"background","opacity":1,"type":"tilelayer","visible":true,"width":14,"x":0,"y":0},{"height":12,"name":"entities","objects":[{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":256,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":304,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":288,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":272,"y":192},{"height":192,"name":"","properties":{},"type":"station","visible":true,"width":640,"x":256,"y":0},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":368,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":352,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":336,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":320,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":432,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":416,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":400,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":384,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":496,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":480,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":464,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":448,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":560,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":544,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":528,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":512,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":624,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":608,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":592,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":576,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":688,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":672,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":656,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":640,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":752,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":736,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":720,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":704,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":816,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":800,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":784,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":768,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":848,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":864,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":880,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":832,"y":192},{"height":320,"name":"","properties":{"station":"final"},"type":"funnel","visible":true,"width":256,"x":0,"y":64},{"height":64,"name":"","properties":{"station":"final"},"type":"track-fake","visible":true,"width":16,"x":240,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-fake","visible":true,"width":16,"x":208,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-fake","visible":true,"width":16,"x":224,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-fake","visible":true,"width":16,"x":192,"y":192},{"gid":99,"height":0,"name":"","properties":{"car":"rocket","station":"final","train":"rocket"},"type":"","visible":true,"width":0,"x":384,"y":256},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":290,"y":411},{"gid":100,"height":0,"name":"","properties":{"car":"rocket","nodeId":"r-13","station":"final"},"type":"","visible":true,"width":0,"x":384,"y":128},{"height":512,"name":"","properties":{},"type":"station","visible":true,"width":640,"x":256,"y":256},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":256,"y":768},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":256,"y":576},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":320,"y":576},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":447,"y":577},{"gid":43,"height":0,"name":"","properties":{"permanent":"true"},"type":"","visible":true,"width":0,"x":128,"y":512},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":767,"y":769},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":575,"y":321},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":347,"y":748},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":617,"y":603},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":714,"y":423},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":447,"y":513},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":511,"y":705},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":767,"y":577},{"gid":41,"height":0,"name":"","properties":{"permanent":"true"},"type":"","visible":true,"width":0,"x":26,"y":89},{"gid":41,"height":0,"name":"","properties":{"permanent":"true"},"type":"","visible":true,"width":0,"x":27,"y":475},{"gid":43,"height":0,"name":"","properties":{"permanent":"true"},"type":"","visible":true,"width":0,"x":384,"y":320},{"gid":41,"height":0,"name":"","properties":{"permanent":"true"},"type":"","visible":true,"width":0,"x":170,"y":605},{"gid":41,"height":0,"name":"","properties":{"permanent":"true"},"type":"","visible":true,"width":0,"x":64,"y":704},{"gid":43,"height":0,"name":"","properties":{"permanent":"true"},"type":"","visible":true,"width":0,"x":0,"y":640},{"gid":43,"height":0,"name":"","properties":{"permanent":"true"},"type":"","visible":true,"width":0,"x":0,"y":576},{"height":384,"name":"","properties":{},"type":"station","visible":true,"width":192,"x":64,"y":384},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":912,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":928,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":896,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":944,"y":192}],"opacity":1,"type":"objectgroup","visible":true,"width":14,"x":0,"y":0}],"orientation":"orthogonal","properties":{},"tileheight":64,"tilesets":[{"firstgid":1,"image":"../game/images/tiles.png","imageheight":640,"imagewidth":640,"margin":0,"name":"tiles","properties":{},"spacing":0,"tileheight":64,"tileproperties":{"40":{"entity":"bush-large"},"42":{"entity":"bush"},"52":{"entity":"bush"},"60":{"entity":"rock-large"},"62":{"entity":"rock"},"72":{"entity":"rock"},"94":{"entity":"herd-small"},"95":{"entity":"herd"},"96":{"entity":"pu-speed"},"97":{"entity":"pu-time"},"98":{"entity":"train-node"},"99":{"entity":"station-node"}},"tilewidth":64}],"tilewidth":64,"version":1,"width":14,"id":"end-green-top"},"start-blue-bottom":{"height":12,"layers":[{"data":[1,1,1,2147483654,21,12,32,2684354563,3221225475,3,3221225504,3758096396,3221225503,3758096395,1,536870913,536870913,2147483649,21,22,3,46,1610612739,3,3221225494,2,3221225493,3221225473,3758096385,2147483649,1,2147483649,21,22,3,536870958,3758096387,3221225504,3221225484,3221225503,3221225483,1,1,1,1,1610612737,21,1610612748,1610612768,1610612739,3221225475,3221225494,2,3221225493,2684354561,1610612737,1,1,1,2147483649,21,2,1610612748,1610612758,1610612758,3221225484,3221225503,3221225483,2684354561,1,1,1,1,1,1610612747,1610612767,2,2684354562,3221225474,2,3221225493,3221225473,3221225473,1610612737,1,1,1,1,2147483664,1610612747,1610612757,1610612757,1610612767,3221225503,3221225483,1610612737,2684354561,1,1,1,1,1,1,2684354561,2147483654,16,1610612747,3221225483,1,1610612737,1,2684354561,1,2147483649,1,2147483649,2684354561,3221225473,3221225473,3221225473,3221225473,3221225473,3221225473,3221225473,3221225473,1610612737,2147483663,15,15,2147483663,2147483663,78,58,58,58,2147483726,2147483673,1610612737,1610612737,1,2147483653,5,5,2147483653,2147483653,28,8,8,8,2147483676,3221225507,1610612737,3221225473,2684354561,3221225477,1073741829,1073741829,2147483653,2147483653,38,18,18,18,2147483686,3221225507,3221225473,1610612737,1],"height":12,"name":"background","opacity":1,"type":"tilelayer","visible":true,"width":14,"x":0,"y":0},{"height":12,"name":"entities","objects":[{"height":64,"name":"","properties":{"nodeId":"car-tie-2","station":"initial"},"type":"track-station","visible":true,"width":16,"x":80,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":64,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":96,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":112,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":0,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":16,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":32,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":48,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":128,"y":512},{"height":64,"name":"","properties":{"nodeId":"car-tie","station":"initial"},"type":"track-station","visible":true,"width":16,"x":224,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":160,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":176,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":192,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":208,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":144,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":240,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":256,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":272,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":288,"y":512},{"height":64,"name":"","properties":{"nodeId":"dino-train-tie","station":"initial"},"type":"track-station","visible":true,"width":16,"x":384,"y":512},{"height":64,"name":"","properties":{"nodeId":"rocket-train-tie","station":"initial"},"type":"track-station","visible":true,"width":16,"x":400,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":336,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":352,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":368,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":320,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":304,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":416,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":432,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":448,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":464,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":480,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":496,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":512,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":528,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":544,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":560,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":576,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":592,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":608,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":624,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":640,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":656,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":672,"y":512},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":688,"y":512},{"height":192,"name":"","properties":{},"type":"station","visible":true,"width":704,"x":0,"y":576},{"height":128,"name":"","properties":{},"type":"sand","visible":true,"width":64,"x":704,"y":192},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":705,"y":417},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":768,"y":320},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":640,"y":512},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":768,"y":223},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":832,"y":128},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":832,"y":64},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":768,"y":64},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":2,"y":316},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":2,"y":508},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":101,"y":347},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":96,"y":473},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":-28,"y":92},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":66,"y":252},{"gid":61,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":96,"y":28},{"height":64,"name":"","properties":{},"type":"water","visible":true,"width":64,"x":704,"y":0},{"height":128,"name":"","properties":{},"type":"sand","visible":true,"width":128,"x":704,"y":64},{"height":64,"name":"","properties":{},"type":"sand","visible":true,"width":128,"x":768,"y":0},{"gid":100,"height":0,"name":"","properties":{"car":"rocket","station":"initial"},"type":"","visible":true,"width":0,"x":192,"y":704},{"gid":99,"height":0,"name":"","properties":{"station":"initial"},"type":"","visible":true,"width":0,"x":192,"y":576},{"height":512,"name":"","properties":{},"type":"station","visible":true,"width":704,"x":0,"y":0},{"gid":43,"height":0,"name":"","properties":{"permanent":"true"},"type":"","visible":true,"width":0,"x":192,"y":512}],"opacity":1,"type":"objectgroup","visible":true,"width":14,"x":0,"y":0}],"orientation":"orthogonal","properties":{},"tileheight":64,"tilesets":[{"firstgid":1,"image":"../game/images/tiles.png","imageheight":640,"imagewidth":640,"margin":0,"name":"tiles","properties":{},"spacing":0,"tileheight":64,"tileproperties":{"40":{"entity":"bush-large"},"42":{"entity":"bush"},"52":{"entity":"bush"},"60":{"entity":"rock-large"},"62":{"entity":"rock"},"72":{"entity":"rock"},"94":{"entity":"herd-small"},"95":{"entity":"herd"},"96":{"entity":"pu-speed"},"97":{"entity":"pu-time"},"98":{"entity":"train-node"},"99":{"entity":"station-node"}},"tilewidth":64}],"tilewidth":64,"version":1,"width":14,"id":"start-blue-bottom"},"start-blue-top":{"height":12,"layers":[{"data":[2684354565,536870917,536870917,536870917,2684354565,536870960,536870920,536870930,2684354578,2684354568,2684354618,2147483649,536870913,1073741840,3758096389,3758096389,3758096389,3758096389,3758096389,1610612804,1610612764,1610612774,3758096422,3758096412,3758096462,536870913,2147483649,3758096385,1610612771,3758096419,3758096419,3758096419,1610612771,1610612771,1610612771,3758096419,3758096419,3758096419,3758096409,536870913,1073741868,1073741825,1073741825,1073741825,3221225473,1073741825,3221225473,1073741868,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,536870913,1073741825,1073741825,1073741825,1073741825,1073741825,1073741825,3758096385,3221225478,1073741840,1073741868,1073741825,536870913,1073741825,3758096385,1073741825,1073741868,1073741825,1073741825,1073741825,3221225488,536870926,2684354584,2684354584,2684354584,2147483662,536870913,3758096385,3221225516,536870926,2684354584,2684354584,2684354584,2684354584,2684354584,1073741828,1073741828,1073741828,2147483652,3758096388,2147483649,2147483649,536870913,1073741828,1073741828,1073741828,1073741828,2147483652,1073741828,3758096388,1073741828,536870916,536870916,1073741828,2147483662,3758096385,1073741825,1073741828,2147483652,1073741828,3758096388,1073741828,536870916,2147483652,1073741828,2147483652,2147483652,3758096388,2147483672,3758096385,536870913,1073741828,536870916,1073741828,1073741828,536870916,3758096388,1073741828,1073741828,1073741828,3758096388,2147483652,536870916,2147483662,1073741868,1073741828,2147483652,1073741828,3758096388,1073741828,1073741828,3758096388,1073741828,536870916,1073741828,536870916,2147483652,2147483672,2147483649,1073741828,536870916,1073741828,1073741828,1073741828,3758096388,1073741828,1073741828,1073741828,3758096388,2147483652,536870916,1073741828,2147483662],"height":12,"name":"background","opacity":1,"type":"tilelayer","visible":true,"width":14,"x":0,"y":0},{"height":12,"name":"entities","objects":[{"height":64,"name":"","properties":{"nodeId":"car-tie-2","station":"initial"},"type":"track-station","visible":true,"width":16,"x":80,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":64,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":96,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":112,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":0,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":16,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":32,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":48,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":128,"y":192},{"height":64,"name":"","properties":{"nodeId":"car-tie","station":"initial"},"type":"track-station","visible":true,"width":16,"x":224,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":160,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":176,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":192,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":208,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":144,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":240,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":256,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":272,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":288,"y":192},{"height":64,"name":"","properties":{"nodeId":"dino-train-tie","station":"initial"},"type":"track-station","visible":true,"width":16,"x":384,"y":192},{"height":64,"name":"","properties":{"nodeId":"rocket-train-tie","station":"initial"},"type":"track-station","visible":true,"width":16,"x":400,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":336,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":352,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":368,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":320,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":304,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":416,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":432,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":448,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":464,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":480,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":496,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":512,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":528,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":544,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":560,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":576,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":592,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":608,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":624,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":640,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":656,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":672,"y":192},{"height":64,"name":"","properties":{"station":"initial"},"type":"track-station","visible":true,"width":16,"x":688,"y":192},{"height":192,"name":"","properties":{},"type":"station","visible":true,"width":704,"x":0,"y":0},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":611,"y":356},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":704,"y":448},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":832,"y":512},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":768,"y":607},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":832,"y":704},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":832,"y":768},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":768,"y":768},{"gid":100,"height":0,"name":"","properties":{"car":"rocket","station":"initial"},"type":"","visible":true,"width":0,"x":192,"y":128},{"gid":99,"height":0,"name":"","properties":{"station":"initial"},"type":"","visible":true,"width":0,"x":192,"y":256},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":704,"y":704},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":704,"y":640},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":640,"y":448},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":640,"y":576},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":64,"y":320},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":128,"y":320},{"gid":61,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":93,"y":620},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":576,"y":640},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":384,"y":768},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":512,"y":768},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":0,"y":576},{"gid":61,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":353,"y":609},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":576,"y":768},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":62,"y":454},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":256,"y":576},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":512,"y":640},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":192,"y":768},{"height":512,"name":"","properties":{},"type":"station","visible":true,"width":704,"x":0,"y":256},{"gid":61,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":64,"y":768},{"gid":61,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":225,"y":412},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":256,"y":320},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":512,"y":704},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":256,"y":768},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":126,"y":454},{"gid":61,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":420,"y":473},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":192,"y":704},{"gid":61,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":541,"y":465},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":-30,"y":411},{"gid":43,"height":0,"name":"","properties":{"permanent":"true"},"type":"","visible":true,"width":0,"x":192,"y":320}],"opacity":1,"type":"objectgroup","visible":true,"width":14,"x":0,"y":0}],"orientation":"orthogonal","properties":{},"tileheight":64,"tilesets":[{"firstgid":1,"image":"../game/images/tiles.png","imageheight":640,"imagewidth":640,"margin":0,"name":"tiles","properties":{},"spacing":0,"tileheight":64,"tileproperties":{"40":{"entity":"bush-large"},"42":{"entity":"bush"},"52":{"entity":"bush"},"60":{"entity":"rock-large"},"62":{"entity":"rock"},"72":{"entity":"rock"},"94":{"entity":"herd-small"},"95":{"entity":"herd"},"96":{"entity":"pu-speed"},"97":{"entity":"pu-time"},"98":{"entity":"train-node"},"99":{"entity":"station-node"}},"tilewidth":64}],"tilewidth":64,"version":1,"width":14,"id":"start-blue-top"},"end-blue-bottom":{"height":12,"layers":[{"data":[1,2684354561,1,34,1,1,1,1,1,2147483654,21,12,32,2684354563,1,6,3221225473,34,1,1,1,536870913,536870913,2147483649,21,22,3,46,3758096385,2684354561,2684354561,34,1,1,3758096385,2147483649,1,2147483649,21,22,3,536870958,1,2684354561,1,34,1,1,1,1,1,1610612737,21,1610612748,1610612768,1610612739,1,2684354561,1,34,1,1,1,1,1,2147483649,21,2,1610612748,1610612758,1,2684354561,3221225473,34,1,1,1,1,1,1,1610612747,1610612767,2,2684354562,1,1,2147483664,34,1,1,1,1,1,1,2147483664,1610612747,1610612757,1610612757,3758096385,2684354561,1,34,3221225473,1,1,1,1,1,1,2684354561,2147483654,16,1,2684354561,1,34,1,1,1,2147483649,1,2147483649,2684354561,3221225473,3221225473,3221225473,1,2684354561,3221225473,34,25,2147483663,2147483663,15,15,2147483663,78,58,58,58,1,1,2684354561,34,35,2147483653,2147483653,5,5,2147483653,28,8,8,8,1,2684354561,1,34,1073741859,2147483653,3221225477,1073741829,1073741829,2147483653,38,18,18,18],"height":12,"name":"background","opacity":1,"type":"tilelayer","visible":true,"width":14,"x":0,"y":0},{"height":12,"name":"entities","objects":[{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":256,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":304,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":288,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":272,"y":512},{"height":192,"name":"","properties":{},"type":"station","visible":true,"width":640,"x":256,"y":576},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":368,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":352,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":336,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":320,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":432,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":416,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":400,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":384,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":496,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":480,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":464,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":448,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":560,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":544,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":528,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":512,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":624,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":608,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":592,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":576,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":688,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":672,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":656,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":640,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":752,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":736,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":720,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":704,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":816,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":800,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":784,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":768,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":848,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":864,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":880,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":832,"y":512},{"height":320,"name":"","properties":{"station":"final"},"type":"funnel","visible":true,"width":256,"x":0,"y":384},{"height":64,"name":"","properties":{"station":"final"},"type":"track-fake","visible":true,"width":16,"x":240,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-fake","visible":true,"width":16,"x":208,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-fake","visible":true,"width":16,"x":224,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-fake","visible":true,"width":16,"x":192,"y":512},{"gid":99,"height":0,"name":"","properties":{"car":"rocket","station":"final","train":"rocket"},"type":"","visible":true,"width":0,"x":384,"y":576},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":354,"y":96},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":289,"y":224},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":288,"y":351},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":483,"y":351},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":478,"y":477},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":576,"y":512},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":448,"y":256},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":384,"y":320},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":320,"y":512},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":256,"y":448},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":256,"y":128},{"gid":61,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":478,"y":32},{"gid":100,"height":0,"name":"","properties":{"car":"rocket","nodeId":"r-13","station":"final"},"type":"","visible":true,"width":0,"x":384,"y":704},{"height":512,"name":"","properties":{},"type":"station","visible":true,"width":640,"x":256,"y":0},{"gid":41,"height":0,"name":"","properties":{"permanent":"true"},"type":"","visible":true,"width":0,"x":163,"y":221},{"gid":41,"height":0,"name":"","properties":{"permanent":"true"},"type":"","visible":true,"width":0,"x":36,"y":103},{"gid":43,"height":0,"name":"","properties":{"permanent":"true"},"type":"","visible":true,"width":0,"x":128,"y":320},{"gid":41,"height":0,"name":"","properties":{"permanent":"true"},"type":"","visible":true,"width":0,"x":31,"y":736},{"gid":41,"height":0,"name":"","properties":{"permanent":"true"},"type":"","visible":true,"width":0,"x":32,"y":341},{"gid":43,"height":0,"name":"","properties":{"permanent":"true"},"type":"","visible":true,"width":0,"x":384,"y":512},{"gid":43,"height":0,"name":"","properties":{"permanent":"true"},"type":"","visible":true,"width":0,"x":64,"y":256},{"gid":43,"height":0,"name":"","properties":{"permanent":"true"},"type":"","visible":true,"width":0,"x":64,"y":192},{"height":384,"name":"","properties":{},"type":"station","visible":true,"width":192,"x":64,"y":0},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":912,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":928,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":896,"y":512},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":944,"y":512}],"opacity":1,"type":"objectgroup","visible":true,"width":14,"x":0,"y":0}],"orientation":"orthogonal","properties":{},"tileheight":64,"tilesets":[{"firstgid":1,"image":"../game/images/tiles.png","imageheight":640,"imagewidth":640,"margin":0,"name":"tiles","properties":{},"spacing":0,"tileheight":64,"tileproperties":{"40":{"entity":"bush-large"},"42":{"entity":"bush"},"52":{"entity":"bush"},"60":{"entity":"rock-large"},"62":{"entity":"rock"},"72":{"entity":"rock"},"94":{"entity":"herd-small"},"95":{"entity":"herd"},"96":{"entity":"pu-speed"},"97":{"entity":"pu-time"},"98":{"entity":"train-node"},"99":{"entity":"station-node"}},"tilewidth":64}],"tilewidth":64,"version":1,"width":14,"id":"end-blue-bottom"},"end-blue-top":{"height":12,"layers":[{"data":[1073741825,3758096385,1073741825,1073741858,536870927,2684354565,536870917,536870917,536870917,2684354565,536870960,536870920,536870930,2684354578,1073741825,1073741825,3758096385,1073741858,1610612751,3758096389,3758096389,3758096389,3758096389,3758096389,1610612804,1610612764,1610612774,3758096422,1073741868,3758096385,2147483649,1073741858,1610612761,1610612771,3758096419,3758096419,3758096419,1610612771,1610612771,1610612771,3758096419,3758096419,1073741825,3758096385,1073741825,1073741858,1073741825,1073741825,1073741825,3221225473,1073741825,3221225473,1073741868,2147483649,2147483649,2147483649,2684354561,3758096385,1073741825,1073741858,2147483649,1073741825,1073741825,1073741825,1073741825,1073741825,1073741825,3758096385,3221225478,1073741840,1073741825,1073741825,3221225488,1073741858,1073741825,1073741825,1073741868,1073741825,1073741825,1073741825,3221225488,536870926,2684354584,2684354584,1073741825,3758096385,2147483649,1073741858,1073741825,536870926,2684354584,2684354584,2684354584,2684354584,2684354584,1073741828,1073741828,1073741828,1073741825,3758096385,1073741825,1073741858,1073741825,1073741828,1073741828,1073741828,1073741828,2147483652,1073741828,3758096388,1073741828,536870916,1073741825,1073741868,1073741825,1073741858,536870926,1073741828,2147483652,1073741828,3758096388,1073741828,536870916,2147483652,1073741828,2147483652,2684354561,3758096385,3758096385,1073741858,24,1073741828,536870916,1073741828,1073741828,536870916,3758096388,1073741828,1073741828,1073741828,1073741825,1073741830,2147483649,1073741858,24,1073741828,2147483652,1073741828,3758096388,1073741828,1073741828,3758096388,1073741828,536870916,1073741825,3758096385,1073741825,1073741858,1073741848,1073741828,536870916,1073741828,1073741828,1073741828,3758096388,1073741828,1073741828,1073741828],"height":12,"name":"background","opacity":1,"type":"tilelayer","visible":true,"width":14,"x":0,"y":0},{"height":12,"name":"entities","objects":[{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":256,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":304,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":288,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":272,"y":192},{"height":192,"name":"","properties":{},"type":"station","visible":true,"width":640,"x":256,"y":0},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":368,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":352,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":336,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":320,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":432,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":416,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":400,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":384,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":496,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":480,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":464,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":448,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":560,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":544,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":528,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":512,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":624,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":608,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":592,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":576,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":688,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":672,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":656,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":640,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":752,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":736,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":720,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":704,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":816,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":800,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":784,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":768,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":848,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":864,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":880,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":832,"y":192},{"height":320,"name":"","properties":{"station":"final"},"type":"funnel","visible":true,"width":256,"x":0,"y":64},{"height":64,"name":"","properties":{"station":"final"},"type":"track-fake","visible":true,"width":16,"x":240,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-fake","visible":true,"width":16,"x":208,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-fake","visible":true,"width":16,"x":224,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-fake","visible":true,"width":16,"x":192,"y":192},{"gid":99,"height":0,"name":"","properties":{"car":"rocket","station":"final","train":"rocket"},"type":"","visible":true,"width":0,"x":384,"y":256},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":290,"y":411},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":576,"y":320},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":448,"y":320},{"gid":61,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":384,"y":768},{"gid":100,"height":0,"name":"","properties":{"car":"rocket","nodeId":"r-13","station":"final"},"type":"","visible":true,"width":0,"x":384,"y":128},{"height":512,"name":"","properties":{},"type":"station","visible":true,"width":640,"x":256,"y":256},{"gid":61,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":740,"y":473},{"gid":61,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":861,"y":465},{"gid":61,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":673,"y":609},{"gid":61,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":413,"y":620},{"gid":61,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":545,"y":412},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":832,"y":768},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":832,"y":704},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":832,"y":640},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":704,"y":768},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":576,"y":768},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":512,"y":768},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":256,"y":768},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":256,"y":576},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":320,"y":576},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":382,"y":454},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":446,"y":454},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":576,"y":576},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":512,"y":704},{"gid":41,"height":0,"name":"","properties":{"permanent":"true"},"type":"","visible":true,"width":0,"x":170,"y":606},{"gid":41,"height":0,"name":"","properties":{"permanent":"true"},"type":"","visible":true,"width":0,"x":64,"y":705},{"gid":43,"height":0,"name":"","properties":{"permanent":"true"},"type":"","visible":true,"width":0,"x":128,"y":513},{"gid":41,"height":0,"name":"","properties":{"permanent":"true"},"type":"","visible":true,"width":0,"x":26,"y":90},{"gid":43,"height":0,"name":"","properties":{"permanent":"true"},"type":"","visible":true,"width":0,"x":384,"y":321},{"gid":41,"height":0,"name":"","properties":{"permanent":"true"},"type":"","visible":true,"width":0,"x":27,"y":476},{"gid":43,"height":0,"name":"","properties":{"permanent":"true"},"type":"","visible":true,"width":0,"x":0,"y":640},{"gid":43,"height":0,"name":"","properties":{"permanent":"true"},"type":"","visible":true,"width":0,"x":0,"y":576},{"height":384,"name":"","properties":{},"type":"station","visible":true,"width":192,"x":64,"y":384},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":912,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":928,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":896,"y":192},{"height":64,"name":"","properties":{"station":"final"},"type":"track-station","visible":true,"width":16,"x":944,"y":192}],"opacity":1,"type":"objectgroup","visible":true,"width":14,"x":0,"y":0}],"orientation":"orthogonal","properties":{},"tileheight":64,"tilesets":[{"firstgid":1,"image":"../game/images/tiles.png","imageheight":640,"imagewidth":640,"margin":0,"name":"tiles","properties":{},"spacing":0,"tileheight":64,"tileproperties":{"40":{"entity":"bush-large"},"42":{"entity":"bush"},"52":{"entity":"bush"},"60":{"entity":"rock-large"},"62":{"entity":"rock"},"72":{"entity":"rock"},"94":{"entity":"herd-small"},"95":{"entity":"herd"},"96":{"entity":"pu-speed"},"97":{"entity":"pu-time"},"98":{"entity":"train-node"},"99":{"entity":"station-node"}},"tilewidth":64}],"tilewidth":64,"version":1,"width":14,"id":"end-blue-top"},"tutorial":{"height":12,"layers":[{"data":[6,1610612750,3758096408,3758096408,3758096398,2147483654,536870913,2147483649,2147483664,2147483649,2147483649,536870913,1,1,1,16,1,2684354561,6,1610612750,1610612760,1610612760,3758096398,2147483654,536870913,2147483649,2147483664,2147483649,2147483649,536870913,1,1,1,1,1,1,1,1,1,1,1,1,1,6,3758096385,536870913,3758096385,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,1,21,2,2,3221225493,1,1,536870926,23,3,3,3221225495,1,1,2147483649,2147483649,1610612750,3758096408,3758096408,3758096398,2147483654,536870913,2147483649,2147483664,2147483649,2147483649,536870913,1,1,1,16,1,2684354561,6,1610612750,1610612760,1610612760,1,1,6,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,16,1073741825,1,1,1,1,1,1,1,1,1,2147483654,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,16,1073741825,1,1,1,1,2147483664,1,1,1,1,2147483654,1,1,1,1,2147483649,536870913,2147483649,536870913,2147483649,2147483649,536870926,2147483662,2147483649,2147483649,6,2147483649,16,2147483649,2147483649,1,21,2,2,3221225493,1,1,2147483652,23,3,3221225505,3221225485,1,2147483649,2147483664,2147483649,1,6,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,16,1073741825,1,1,1,1,1,1,1,1,1,2147483654,2684354561,1,2147483649,536870913,2147483649,536870913,1073741825,2147483649,2147483649,2147483649,3758096385,3758096385,1,16,1,1,1,3221225473,2684354561,1,2684354561,1,2147483649,536870913,1073741825,2147483649,2147483649,2147483649,3758096385,3758096385,1,16,1,1,1,1,1,1,1,1,1,1,1,1,3758096385,1073741825,3758096385,3758096385,2147483649,536870926,1073741828,2147483672,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,1,1610612747,1610612767,2,2684354591,2684354581,2684354571,3758096408,23,3,3221225495,2147483649,1,1,2147483649,2147483649,1,2147483649,536870913,2147483649,536870913,1073741825,2147483649,2147483649,2147483649,3758096385,3758096385,1,16,1,1,1,3221225473,2684354561,1,2684354561,1,1,1,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,536870913,1,1,1,1,1,1,1,1,1,1,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,536870913,1,1,1,1,1,1,1,1,1,1,1,1610612737,2684354561,1610612737,2147483649,536870913,536870926,536870936,536870936,2147483652,536870916,3758096398,3758096385,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,1,3758096385,1610612747,1610612767,2,2,3221225493,2147483649,23,3,3221225495,2147483649,1,2147483649,2147483649,2147483649,1,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,536870913,1,1,1,1,1,1,1,1,1,1,1,1,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483654,3758096385,2147483649,1,1,6,1,1,1,1,1,1,1,2147483649,2147483649,2147483649,2147483649,2147483649,2147483654,3758096385,2147483649,1,1,1,1,1,1,14,2684354574,1,1,2684354561,1,2147483654,2147483649,536870913,2147483649,1073741838,3758096408,3758096408,3758096408,3758096398,2147483654,2147483649,2147483649,2147483649,2147483649,11,2684354571,2147483649,1,2147483649,2147483649,1610612747,1610612767,2,3221225493,536870913,23,3,3221225495,2147483649,1,2147483649,2147483649,2147483649,1,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483654,3758096385,2147483649,1,1,6,1,1,1,1,1,1,1,1,2147483664,2147483649,2147483649,16,2147483649,2147483649,2147483649,2147483649,1,1,1,1,1,2147483649,1,1,1,1,2147483664,1,1,16,2147483649,2147483649,2147483649,2147483649,1,1,1,1,1,1,1,6,1,24,3221225476,2684354574,1,1610612737,1610612737,2147483649,2147483649,2147483649,2147483649,6,2147483649,2147483649,2147483649,2147483649,2147483649,6,2147483649,2147483649,2147483649,21,2684354591,2684354581,2684354571,2147483649,2147483649,2147483649,1610612747,1610612757,3221225483,2147483649,23,3,3221225495,2147483649,1,2147483649,1073741825,2147483654,2147483664,2147483649,2147483649,16,2147483649,2147483649,2147483649,2147483649,1,1,1,1,1,2147483649,1,1,1,1,2147483664,1,1,1,1,2147483649,2147483649,2147483649,2147483649,2147483649,2147483664,2147483649,1,1,1,2147483654,1,2147483649,1,16,1,1,1,1,1,2147483649,2147483649,2147483649,2147483664,2147483649,1,1,1,2147483654,1,1,1,1,1,1610612750,2684354564,4,2684354584,2684354584,2684354574,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,1610612747,1610612757,1610612767,3221225493,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,23,3,3221225495,2147483649,1,2684354561,1610612737,1,1,2147483649,2147483649,2147483649,2147483649,2147483649,2147483664,2147483649,1,1,1,2147483654,1,2147483649,1,16,1,1,1,1,1,1,1,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,1,1,1,1,1,2147483649,1,1,1,1,1,1,1,2147483649,2147483649,2147483649,2147483649,2147483649,1,1,1,1,1,1,1,1,2684354561,6,1610612750,1610612760,1610612760,1610612760,3221225486,3758096385,536870913,3758096385,2147483649,2147483649,2147483649,3758096385,536870913,3758096385,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,21,2684354591,2684354571,1,1,1,1,1,1,23,3,3221225495,2684354561,1,2684354561,1,3221225473,1,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,1,1,1,1,1,2147483649,1,1,1,1,1,1,1,1,1,2147483662,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,1,1,1,1,1,2147483649,1,1,1,1,1,1,14,2147483649,2147483649,2147483649,2147483649,2147483649,1,1,1,1,1,1610612737,2684354561,1610612737,1,1,1,1,2147483654,1,1,2147483649,536870913,2147483649,536870913,2147483649,2147483649,2147483649,536870913,2147483649,536870913,2147483649,2147483649,536870926,2147483662,2147483649,2147483649,21,2,3221225493,1,1,14,2684354574,2684354574,13,33,3,3221225495,2684354561,1,3221225473,1610612737,1,1,2147483662,2147483649,2147483649,2147483649,2147483649,2147483649,2147483649,1,1,1,1,1,2147483649,1,1,1,1,1,1,14,1,1,2147483672,2147483649,2147483649,2147483649,2147483649,2147483649,16,14,2684354574,1,1,2684354561,2147483662,2147483664,1,1,1,1,1,24,2147483649,2147483649,2147483649,2147483649,16,14,2684354574,1,1,2684354561,1,2684354561,1,3221225473,2684354561,1,2684354561,1,1,1,3758096385,1073741825,3758096385,3758096385,2147483649,536870926,3758096385,1073741825,3758096385,3758096385,2147483649,536870926,1073741828,2147483672,2147483649,11,31,2,2684354591,2684354571,1,24,3221225476,3221225476,23,3,3,3221225495,3221225473,1,2684354561,1,1,1,2147483672,2147483649,2147483649,2147483649,2147483649,2147483649,16,14,2684354574,1,1,2684354561,2147483662,2147483664,1,1,1,1,1,24,1,1,3758096398,2147483649,2147483649,2147483649,2147483649,2147483664,2147483649,24,3221225476,2684354574,1,1610612737,2147483672,1,16,1,1,1,1,1610612750,2147483649,2147483649,2147483649,2147483664,2147483649,24,3221225476,2684354574,1,1610612737,1610612737,3221225473,1610612737,1,1,1,1,1,1,1,2147483649,536870913,536870926,536870936,536870936,2147483652,2147483649,536870913,536870926,536870936,536870936,2147483652,536870916,3758096398,2147483649,21,2,2,2,3221225493,1,1610612750,2684354564,2684354564,23,3,3221225505,3221225485,2684354561,3221225486,1,2684354561,1,1,3758096398,2147483649,2147483649,2147483649,2147483649,2147483664,2147483649,24,3221225476,2684354574,1,1610612737,2147483672,1,16,1,1,1,1,1610612750,16,1,2147483654,536870913,2147483649,2147483664,2147483649,2147483649,536870913,1610612750,2684354564,4,2684354584,2684354584,3758096398,2684354561,1,1,16,1,2684354561,6,2147483649,2147483664,2147483649,2147483649,536870913,1610612750,2684354564,4,2684354584,2684354584,2684354574,2684354561,1,1,1,1,1,1,1,1,536870913,2147483649,1073741838,3758096408,3758096408,3758096408,536870913,2147483649,1073741838,3758096408,3758096408,3758096408,3758096398,2147483654,11,31,2,2,2,2684354591,2684354571,6,1610612750,13,33,3,3221225495,3221225486,1,3221225486,1,2684354561,1,1,2147483654,536870913,2147483649,2147483664,2147483649,2147483649,536870913,1610612750,2684354564,4,2684354584,2684354584,3758096398,2684354561,1,1,16,1,2684354561,6],"height":12,"name":"background","opacity":1,"type":"tilelayer","visible":true,"width":96,"x":0,"y":0},{"height":12,"name":"entities","objects":[{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":3179,"y":98},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":3206,"y":190},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":3142,"y":190},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":3142,"y":318},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":2950,"y":254},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":2950,"y":574},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":3078,"y":574},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":3270,"y":766},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":3206,"y":766},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":3237,"y":674},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":3111,"y":734},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":3014,"y":766},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":2950,"y":766},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":2854,"y":733},{"gid":43,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":2758,"y":766},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":2857,"y":548},{"gid":61,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":2857,"y":417},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":2950,"y":446},{"gid":41,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":2856,"y":226},{"gid":97,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":2240,"y":256},{"gid":98,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":1600,"y":576},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":3014,"y":446},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":3014,"y":510},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":3078,"y":446},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":3078,"y":510},{"gid":61,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":3169,"y":482},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":2886,"y":318},{"gid":63,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":2822,"y":318},{"height":64,"name":"","properties":{},"type":"sand","visible":true,"width":128,"x":3584,"y":256},{"height":64,"name":"","properties":{},"type":"water","visible":true,"width":256,"x":4160,"y":704},{"height":192,"name":"","properties":{},"type":"water","visible":true,"width":256,"x":4224,"y":512},{"height":512,"name":"","properties":{},"type":"water","visible":true,"width":192,"x":4288,"y":0},{"height":128,"name":"","properties":{},"type":"water","visible":true,"width":64,"x":4480,"y":0},{"height":128,"name":"","properties":{},"type":"sand","visible":true,"width":256,"x":3584,"y":320},{"height":128,"name":"","properties":{},"type":"sand","visible":true,"width":192,"x":3712,"y":448},{"height":128,"name":"","properties":{},"type":"sand","visible":true,"width":320,"x":3648,"y":576},{"height":64,"name":"","properties":{},"type":"sand","visible":true,"width":448,"x":3584,"y":704},{"height":192,"name":"","properties":{},"type":"sand","visible":true,"width":256,"x":3840,"y":0},{"height":128,"name":"","properties":{},"type":"sand","visible":true,"width":256,"x":3968,"y":192},{"height":64,"name":"","properties":{},"type":"sand","visible":true,"width":64,"x":3904,"y":192},{"height":64,"name":"","properties":{},"type":"sand","visible":true,"width":192,"x":4032,"y":320},{"height":64,"name":"","properties":{},"type":"sand","visible":true,"width":128,"x":4096,"y":128},{"height":768,"name":"","properties":{"clip":"instruct-station"},"type":"tutorial-trigger","visible":true,"width":64,"x":5504,"y":0},{"height":768,"name":"","properties":{"clip":"instruct-bridge"},"type":"tutorial-trigger","visible":true,"width":64,"x":4160,"y":0},{"height":768,"name":"","properties":{"clip":"instruct-sand"},"type":"tutorial-trigger","visible":true,"width":64,"x":3520,"y":0},{"height":768,"name":"","properties":{"clip":"instruct-trees"},"type":"tutorial-trigger","visible":true,"width":64,"x":2560,"y":0},{"height":768,"name":"","properties":{"clip":"power-up-speed"},"type":"tutorial-trigger","visible":true,"width":64,"x":1920,"y":0},{"height":768,"name":"","properties":{"clip":"power-up-time"},"type":"tutorial-trigger","visible":true,"width":64,"x":1344,"y":0},{"height":768,"name":"","properties":{"clip":"instruct-time"},"type":"tutorial-trigger","visible":true,"width":64,"x":704,"y":0},{"height":768,"name":"","properties":{"clip":"instruct-sauropod"},"type":"tutorial-trigger","visible":true,"width":64,"x":4736,"y":0},{"gid":96,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":5120,"y":256},{"gid":98,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":5440,"y":576},{"gid":98,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":3840,"y":320},{"gid":96,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":4992,"y":512},{"gid":96,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":5248,"y":512},{"gid":96,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":5120,"y":640},{"gid":96,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":4992,"y":640},{"gid":96,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":5248,"y":640},{"gid":96,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":5120,"y":128},{"gid":96,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":5120,"y":512},{"gid":96,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":4992,"y":256},{"gid":96,"height":0,"name":"","properties":{},"type":"","visible":true,"width":0,"x":4992,"y":128},{"ellipse":true,"height":192,"name":"pulse","properties":{},"type":"pulse","visible":true,"width":192,"x":64,"y":320}],"opacity":1,"type":"objectgroup","visible":true,"width":96,"x":0,"y":0}],"orientation":"orthogonal","properties":{},"tileheight":64,"tilesets":[{"firstgid":1,"image":"../game/images/tiles.png","imageheight":640,"imagewidth":640,"margin":0,"name":"tiles","properties":{},"spacing":0,"tileheight":64,"tileproperties":{"40":{"entity":"bush-large"},"42":{"entity":"bush"},"52":{"entity":"bush"},"60":{"entity":"rock-large"},"62":{"entity":"rock"},"72":{"entity":"rock"},"94":{"entity":"herd-small"},"95":{"entity":"herd"},"96":{"entity":"pu-speed"},"97":{"entity":"pu-time"},"98":{"entity":"train-node"},"99":{"entity":"station-node"}},"tilewidth":64}],"tilewidth":64,"version":1,"width":96,"id":"tutorial"}},"debug":false};

/*--------------------------------------------------
 *   ../engine/main.js - ../engine/main.js
 */
/**
# Main.js
Main.js creates the game object. Main.js is called on the window 'load' event.

 Requires: ["browser.js", "game.js", "http://code.createjs.com/createjs-2013.12.12.min.js", "factory.js"]

*/

(function(window){
	if(window){
		
		// Clean up console logging for MSIE: Make sure window has at least console stub.
		if(!window.console){
			var console = window.console = {};
			console.log = console.warn = console.error = function(){};
		}

		// Make sure Array has isArray.
		if(window.Array && !window.Array.isArray) {
			window.Array.isArray = function (arr) {
			    return (arr instanceof Array);
			};
		}
	}
})(window);

window.addEventListener('load', function(){
	// This creates the game once the page is loaded. If the game should not appear on page load, global setting "autoLoad" needs to be set to `false` and game must be created independently.
	if(platformer.settings && platformer.settings.global && (platformer.settings.global.autoLoad !== false)){
		new platformer.Game(platformer.settings);
	}
}, false);


/*--------------------------------------------------
 *   ../engine/vector2D.js - ../engine/vector2D.js
 */
/**
# CLASS vector2D
This class defines a two-dimensional vector object and a variety of methods for manipulating the vector.

## Properties
- **x** - The x component of the vector.
- **y** - The y component of the vector.

## Methods
- **constructor** - Creates an object from the vector2D class.
  - @param x (number) - The x component of the vector.
  - @param y (number) - The y component of the vector.
- **set** - Sets the x and y component of the vector.
  - @param x (number) - The x component.
  - @param y (number) - The y component.
- **copyValues** - Sets the x and y component of the vector to values of the parameter vector.
  - @param x (number) - The x component.
  - @param y (number) - The y component.
  - @return vector2D - This.
- **setX** - Sets the x component of the vector.
  - @param x (number) - The x component.
  - @return vector2D - This.
- **setY** - Sets the y component of the vector.
  - @param y (number) - The y component.
  - @return vector2D - This.
- **magnitude** - Returns the magnitude of the vector.
  - @return number - The magnitude of the vector.
- **direction** - Returns the direction of the vector.
  - @return number - The direction of the vector.
- **getUnit** - Returns a normalized copy of the vector.
  - @return vector2D - A normalized vector in the same direction as this vector.
- **normalize** - Normalizes the vector.
  - @return vector2D - This.
- **rotate** - Rotates the vector by the given amount.
  - @param angle (number) - The amount to rotate the vector in radians.
  - @return vector2D - This.
- **add** - Adds the given components to this vector.
  - @param x (number) - The x component to add.
  - @param y (number) - The y component to add.
  - @return vector2D - This.
- **addVector** - Adds the given vector to this vector.
  - @param otherVector (vector2D) - The vector to add.
  - @return vector2D - This.
- **subtractVector** - Subtracts the given vector from this vector.
  - @param otherVector (vector2D) - The vector to subtract.  
  - @return vector2D - This.
- **scaleVector** - Scales the vector by the given factor.
  - @param factor (number) - The factor to scale by. 
  - @return vector2D - This.
- **dot** - Finds the dot product of the two vectors.
  - @param otherVector (vector2D) - The other vector. 
  - @return number - The dot product.
- **shortestAngleTo** - Finds the shortest angle between the two vectors .
  - @param otherVector (vector2D) - The other vector. 
  > return number - The angle between this vector and the received vector.     
- **scalarProjection** - Find the scalar value of projecting this vector onto the parameter vector or onto a vector at the specified angle away.
  - @param vectorOrAngle (vector2D or number) - The other vector or the angle between the vectors. 
  > return number - The magnitude of the projection. 
- **copy** - Returns a copy of this vector.
  - @return vector2D - A copy of this vector.
*/

platformer.Vector2D = (function(){
	var vector2D = function(x, y){
		this.x = x || 0;
		this.y = y || 0;
	};
	var proto = vector2D.prototype;
	
	proto.set = function(x, y){
		this.x = x;
		this.y = y;
		return this;
	};
	
	proto.copyValues = function(otherVector){
		this.x = otherVector.x;
		this.y = otherVector.y;
		return this;
	};
	
	proto.setX = function(x){
		this.x = x;
		return this;
	};
	
	proto.setY = function(y){
		this.y = y;
		return this;
	};
	
	proto.getX = function(){
		return this.x;
	};
	
	proto.getY = function(){
		return this.y;
	};
	
	proto.magnitude = function(){
		return Math.sqrt( Math.pow(this.x, 2) + Math.pow(this.y, 2));
	};
	
	proto.direction = function(){
		var mag = this.magnitude();
        var angle = 0;

        if (mag != 0){
                angle = Math.acos(this.x / mag);
                if (this.y < 0){
                        angle = (Math.PI * 2) - angle;
                }
        }
        return angle; 
	};
	
	proto.getUnit = function(){
		var mag = this.magnitude();
		if (mag == 0) {
			return new platformer.Vector2D(0, 0);
		} else {
			return new platformer.Vector2D(this.x / mag, this.y / mag);
		}
	};
	
	proto.getInverse = function(){
		return new platformer.Vector2D(-this.x, -this.y);
	};
	
	proto.normalize = function(){
		var mag = this.magnitude();
		if (mag != 0)
		{
			this.x /= mag;
			this.y /= mag;
		}
		return this;
	};
	
	proto.rotate = function(angle){
		var x = this.x;
		var y = this.y;
		this.x = x * Math.cos(angle) - y * Math.sin(angle);
		this.y = x * Math.sin(angle) + y * Math.cos(angle);
		return this;
	};
	
	proto.add = function (x, y){
		this.x += x;
		this.y += y;
		return this;
	};
	
	proto.addVector = function(otherVector){
		this.x += otherVector.x;
		this.y += otherVector.y;
		return this;
	};
	
	proto.subtractVector = function(otherVector){
		this.x -= otherVector.x;
		this.y -= otherVector.y;
		return this;
	};
	
	proto.scale = function(factor) {
		this.x *= factor;
		this.y *= factor;
		return this;
	};
	
	proto.dot = function(otherVector) {
		return this.x * otherVector.x + this.y * otherVector.y;
	};
	
	proto.shortestAngleTo = function(otherVector) {
		return Math.acos(this.dot(otherVector) / (this.magnitude() * otherVector.magnitude()));
	};
	
	proto.scalarProjection = function(vectorOrAngle) {
		var angle = 0;
		var vector = null;
		if (typeof vectorOrAngle == "number")
		{
			angle = vectorOrAngle;
		} else {
			vector = vectorOrAngle;
			angle = this.shortestAngleTo(vector);
		}
		return this.magnitude() * Math.cos(angle);
	};
	
	proto.copy = function() {
		return new vector2D(this.x, this.y);
	};
	
	return vector2D;
})();

/*--------------------------------------------------
 *   ../engine/collision-shape.js - ../engine/collision-shape.js
 */
/**
# CLASS collision-shape
This class defines a collision shape, which defines the 'space' an entity occupies in the collision system. Currently only rectangle shapes can be created (some code exists for right-triangles and circles, but the precise collision checking needed for these is not in place). Collision shapes include an axis-aligned bounding box (AABB) that tightly wraps the shape. The AABB is used for initial collision checks.

## Fields
- **offset** (number []) - An array of length 2 that holds the x and y offset of the collision shape from the owner entity's location.
- **x** (number) - The x position of the shape. The x is always located in the center of the object.
- **y** (number) - The y position of the shape. The y is always located in the center of the object.
- **prevX** (number) - The previous x position of the shape.
- **prevY** (number) - The previous y position of the shape.
- **type** (string) - The type of shape this is. Currently 'rectangle' is the default and only valid type.
- **subType** (string) - **Not Used** Only used for triangles, specifies which corner the right angle is in. Can be: tl, tr, bl, br.
- **points** (number [][]) - Points describing the shape. These points should describe the shape so that the center of the AABB will be at (0,0). For rectangles and circles you only need two points, a top-left and bottom-right. For triangles, you need three. The first should be the right angle, and it should proceed clockwise from there.
- **aABB** (object) - The AABB for this shape.
- **prevAABB** (object) - The previous location of the AABB for this shape.

## Methods
- **constructor** - Creates an object from the collisionShape class.
  - @param ownerLocation (number []) - An array [x,y] of the position.
  - @param type (string) - The type of shape this is. Currently 'rectangle' is the default and only valid type.
  - @param points (number [][]) - Points describing the shape. These points should describe the shape so that the center of the AABB will be at (0,0). For rectangles and circles you only need two points, a top-left and bottom-right. For triangles, you need three. The first should be the right angle, and it should proceed clockwise from there.
  - @param offset (number []) - An array of length 2 that holds the x and y offset of the shape from the owner's location.
- **update** - Updates the location of the shape and AABB. The position you send should be that of the owner, the offset of the shape is added inside the function.
  - @param ownerX (number) - The x position of the owner.
  - @param ownerY (number) - The y position of the owner.
- **reset** - Resets the location of the shape and AABBs so that the current and previous position are the same. The position you send should be that of the owner, the offset of the shape is added inside the function.
  - @param ownerX (number) - The x position of the owner.
  - @param ownerY (number) - The y position of the owner.
- **getXY** - Returns an array containing the position of the shape.
  - @return number [] - An array [x,y] of the position.
- **getX** - Returns the x position of the shape.
  - @return number - The x position.
- **getY** - Return the y position of the shape.
  - @return number - The y position.
- **getPrevXY** - Returns the previous position of the shape.
  - @return number [] - An array [x,y] of the previous position.
- **getPrevX** - Returns the previous x position of the shape.
  - @return number - The previous x position.
- **getPrevY** - Returns the previous y position of the shape.
  - @return number - The previous x position.
- **getAABB** - Returns the AABB of the shape.
  - @return AABB object - The AABB of the shape.
- **getPreviousAABB** - Returns the previous AABB of the shape.
  - @return AABB object - The previous AABB of the shape.
- **getXOffset** - Returns the x offset of the shape.
  - @return number - The x offset.
- **getYOffset** - Returns the y offset of the shape.
  - @return number - The y offset.
- **destroy** - Destroys the shape so that it can be memory collected safely.
*/

platformer.CollisionShape = (function(){
	var collisionShape = function(owner, definition, collisionType){
		var regX = definition.regX,
		regY     = definition.regY;
		
		this.owner = owner;
		this.collisionType = collisionType;
		
		this.width  = definition.width  || definition.radius || 0;
		this.height = definition.height || definition.radius || 0;
		this.radius = definition.radius || 0;
		
		if(typeof regX !== 'number'){
			regX = this.width / 2;
		}
		if(typeof regY !== 'number'){
			regY = this.height / 2;
		}
		this.offsetX = definition.offsetX || ((this.width  / 2) - regX);
		this.offsetY = definition.offsetY || ((this.height / 2) - regY);
		
		if(owner){
			this.x = owner.x + this.offsetX;
			this.y = owner.y + this.offsetY;
		} else {
			this.x = definition.x + this.offsetX;
			this.y = definition.y + this.offsetY;
		}

		this.type = definition.type || 'rectangle';
		this.subType = '';
		this.points = definition.points; //Points should distributed so that the center of the AABB is at (0,0).
		this.aABB = undefined;
		
		var width = 0;
		var height = 0; 
		switch (this.type)
		{
		case 'circle': //need TL and BR points
			width = height = this.radius * 2;
			break;
		case 'rectangle': //need TL and BR points
			width = this.width;
			height = this.height;
			break;
		case 'triangle': //Need three points, start with the right angle corner and go clockwise.
			if (this.points[0][1] == this.points[1][1] && this.points[0][0] == this.points[2][0])
			{
				if (this.points[0][0] < this.points[1][0])
				{
					//TOP LEFT CORNER IS RIGHT
					this.subType = 'tl';
					width = this.points[1][0] - this.points[0][0];
					height = this.points[2][1] - this.points[0][1];
				} else {
					//BOTTOM RIGHT CORNER IS RIGHT
					this.subType = 'br';
					width = this.points[0][0] - this.points[1][0];
					height = this.points[0][1] - this.points[2][1];
				}
				
			} else if (this.points[0][1] == this.points[2][1] && this.points[0][0] == this.points[1][0]) {
				if (this.points[0][1] < this.points[1][1])
				{
					//TOP RIGHT CORNER IS RIGHT
					this.subType = 'tr';
					width = this.points[0][0] - this.points[2][0];
					height = this.points[1][1] - this.points[0][1];
				} else {
					//BOTTOM LEFT CORNER IS RIGHT
					this.subType = 'bl';
					width = this.points[2][0] - this.points[0][0];
					height = this.points[0][1] - this.points[1][1];
				}
			} 
		}
		
		this.aABB     = new platformer.AABB(this.x, this.y, width, height);
	};
	var proto = collisionShape.prototype;
	
	proto.update = function(ownerX, ownerY){
		this.x = ownerX + this.offsetX;
		this.y = ownerY + this.offsetY;
		this.aABB.move(this.x, this.y);
	};
	
	proto.moveX = function(x){
		this.x = x;
		this.aABB.moveX(this.x);
	};
	
	proto.moveY = function(y){
		this.y = y;
		this.aABB.moveY(this.y);
	};
	
	proto.moveXBy = function(deltaX){
		this.x += deltaX;
		this.aABB.moveX(this.x);
	};
	
	proto.moveYBy = function(deltaY){
		this.y += deltaY;
		this.aABB.moveY(this.y);
	};
	
	proto.getXY = function () {
		return [this.x, this.y];
	};
	
	proto.getX = function () {
		return this.x;
	};
	
	proto.getY = function () {
		return this.y;
	};
	
	proto.getAABB = function(){
		return this.aABB;
	};

	proto.getXOffset = function(){
		return this.offsetX;
	};
	
	proto.getYOffset = function(){
		return this.offsetY;
	};
	
	proto.setXWithEntityX = function(entityX){
		this.x = entityX + this.offsetX;
		this.aABB.moveX(this.x);
	};
	
	proto.setYWithEntityY = function(entityY){
		this.y = entityY + this.offsetY;
		this.aABB.moveY(this.y);
	};
	
	proto.destroy = function(){
		this.aABB = undefined;
		this.points = undefined;
	};
	
	return collisionShape;
})();

/*--------------------------------------------------
 *   ../engine/aabb.js - ../engine/aabb.js
 */
/**
# CLASS aabb
This class defines an axis-aligned bounding box (AABB) which is used during the collision process to determine if two objects are colliding. This is used in a few places including [[Collision-Basic]] and [[Collision-Shape]].

## Fields
- **x** (number) - The x position of the AABB. The x is always located in the center of the object.
- **y** (number) - The y position of the AABB. The y is always located in the center of the object.
- **width** (number) - The width of the AABB.
- **height** (number) - The height of the AABB.
- **halfWidth** (number) - Half the width of the AABB.
- **halfHeight** (number) - Half the height of the AABB.
- **left** (number) - The x-position of the left edge of the AABB.
- **right** (number) - The x-position of the right edge of the AABB.
- **top** (number) - The y-position of the top edge of the AABB.
- **bottom** (number) - The y-position of the bottom edge of the AABB.


## Methods
- **constructor** - Creates an object from the aabb class.
  - @param x (number) - The x position of the AABB. The x is always located in the center of the object.
  - @param y (number) - The y position of the AABB. The y is always located in the center of the object.
  - @param width (number) - The width of the AABB.
  - @param height (number) - The height of the AABB.
  - @return aabb (object) - Returns the new aabb object.
- **setAll** - Sets all of the fields in the AABB.
  - @param x (number) - The x position of the AABB. The x is always located in the center of the object.
  - @param y (number) - The y position of the AABB. The y is always located in the center of the object.
  - @param width (number) - The width of the AABB.
  - @param height (number) - The height of the AABB.
- **reset** - Resets all the values in the AABB so that the AABB can be reused.
- **include** - Changes the size and position of the bounding box so that it contains the current area and the area described in the incoming AABB.
  - @param aabb (object) - The AABB who's area will be included in the area of the current AABB.
- **move** - Moves the AABB to the specified location.
  - @param x (number) - The new x position of the AABB.
  - @param y (number) - The new y position of the AABB.
- **getCopy** - Creates a new AABB with the same fields as this object.
  - @return aabb (object) - Returns the new AABB object.
*/

platformer.AABB = (function(){
	var aABB = function(x, y, width, height){
		this.empty = true;
		this.setAll(x, y, width, height);
	};
	var proto = aABB.prototype;
	
	proto.setAll = function(x, y, width, height){
		this.empty = false;
		this.x = x;
		this.y = y;
		this.width  = width || 0;
		this.height = height || 0;
		this.halfWidth = this.width / 2;
		this.halfHeight = this.height / 2;
		if(typeof x === 'undefined'){
			this.empty = true;
		} else {
			this.left = -this.halfWidth + this.x;
			this.right = this.halfWidth + this.x;
		}
		if(typeof y === 'undefined'){
			this.empty = true;
		} else {
			this.top = -this.halfHeight + this.y;
			this.bottom = this.halfHeight + this.y;
		}
		return this;
	};
	
	proto.set = function(aabb){
		this.empty = aabb.empty;
		this.x = aabb.x;
		this.y = aabb.y;
		this.width  = aabb.width;
		this.height = aabb.height;
		this.halfWidth = aabb.halfWidth;
		this.halfHeight = aabb.halfHeight;
		this.left = aabb.left;
		this.right = aabb.right;
		this.top = aabb.top;
		this.bottom = aabb.bottom;
		return this;
	};
	
	proto.reset = function(){
		this.empty = true;
		return this;
	};
	
	proto.include = function(aabb){
		if(aabb){
			if(this.empty){
				this.set(aabb);
			} else {
				if(this.left > aabb.left){
					this.left = aabb.left;
				}
				if(this.right < aabb.right){
					this.right = aabb.right;
				}
				if(this.top > aabb.top){
					this.top = aabb.top;
				}
				if(this.bottom < aabb.bottom){
					this.bottom = aabb.bottom;
				}
				
				this.width      = this.right  - this.left;
				this.height     = this.bottom - this.top;
				this.halfWidth  = this.width / 2;
				this.halfHeight = this.height / 2;
				this.x          = this.left + this.halfWidth;
				this.y          = this.top  + this.halfHeight;
			}
		}
	};
	
	proto.move = function(x, y){
		this.moveX(x);
		this.moveY(y);
		return this;
	};

	proto.moveX = function(x){
		this.x = x;
		this.left   = -this.halfWidth + this.x;
		this.right  = this.halfWidth + this.x;
		return this;
	};

	proto.moveY = function(y){
		this.y = y;
		this.top    = -this.halfHeight + this.y;
		this.bottom = this.halfHeight + this.y;
		return this;
	};
	
	proto.moveXBy = function(deltaX){
		this.x += deltaX;
		this.left   = -this.halfWidth + this.x;
		this.right  = this.halfWidth + this.x;
		return this;
	};

	proto.moveYBy = function(deltaY){
		this.y += deltaY;
		this.top    = -this.halfHeight + this.y;
		this.bottom = this.halfHeight + this.y;
		return this;
	};

	proto.getCopy = function(){
		return new aABB(this.x, this.y, this.width, this.height);
	};

	proto.matches = function(x, y, width, height){
		return !((this.x !== x) || (this.y !== y) || (this.width !== width) || (this.height !== height));
	};

	proto.contains = function(aabb){
		return !((aabb.top < this.top) || (aabb.bottom > this.bottom) || (aabb.left < this.left) || (aabb.right > this.right));
	};
	
	proto.containsVector = function(vector){
		return !((vector.y < this.top) || (vector.y > this.bottom) || (vector.x < this.left) || (vector.x > this.right));
	};
	
	proto.intersects = function(aabb){
		return !((aabb.bottom < this.top) || (aabb.top > this.bottom) || (aabb.right < this.left) || (aabb.left > this.right));
	};
	
	return aABB;
})();

/*--------------------------------------------------
 *   ../engine/collision-data-container.js - ../engine/collision-data-container.js
 */

platformer.CollisionData = (function(){
	var collisionData = function (occurred, direction, position, deltaMovement, aABB, thisShape, thatShape, vector){
		this.occurred = occurred || false;
		this.direction = direction || null;
		this.position = position || null;
		this.deltaMovement = deltaMovement || null;
		this.aABB = aABB || null;
		this.thisShape = thisShape || null;
		this.thatShape = thatShape || null;
		this.vector = vector || null;
	};
	var proto = collisionData.prototype;
	
	proto.copy = function (dataToCopy){
		this.occurred 		= dataToCopy.occurred;
		this.direction 		= dataToCopy.direction;
		this.position 		= dataToCopy.position;
		this.deltaMovement 	= dataToCopy.deltaMovement;
		this.aABB 			= dataToCopy.aABB;
		this.thisShape      = dataToCopy.thisShape;
		this.thatShape      = dataToCopy.thatShape;
		this.vector         = dataToCopy.vector;
	};
	proto.clear = function (){
		this.occurred 		   = false;
		this.direction 		   = null;
		this.position 		   = null;
		this.deltaMovement 	   = null;
		this.aABB 			   = null;
		this.thisShape  	   = null;
		this.thatShape  	   = null;
		this.vector            = null;
	};
	return collisionData;
})();

platformer.CollisionDataContainer = (function(){
	var collisionDataContainer = function(){
		this.xData = [new platformer.CollisionData(), new platformer.CollisionData()];
		this.yData = [new platformer.CollisionData(), new platformer.CollisionData()];
		this.xCount = 0;
		this.yCount = 0;
		this.xDeltaMovement = Infinity;
		this.yDeltaMovement = Infinity;
	};
	var proto = collisionDataContainer.prototype;
	
	proto.getXEntry = function (index) {
		return this.xData[index];
	};
	
	proto.getYEntry = function (index) {
		return this.yData[index];
	};
	
	proto.tryToAddX = function (dataToCopy) {
		if (dataToCopy.deltaMovement < this.xDeltaMovement)
		{
			this.xDeltaMovement = dataToCopy.deltaMovement;
			this.xData[0].copy(dataToCopy);
			this.xCount = 1;
			return true;
		} else if (dataToCopy.deltaMovement == this.xDeltaMovement) {
			this.ensureRoomX();
			this.xData[this.xCount].copy(dataToCopy);
			this.xCount++;
			return true;
		}
		return false;
	};
	
	proto.tryToAddY = function (dataToCopy) {
		if (dataToCopy.deltaMovement < this.yDeltaMovement)
		{
			this.yDeltaMovement = dataToCopy.deltaMovement;
			this.yData[0].copy(dataToCopy);
			this.yCount = 1;
			return true;
		} else if (dataToCopy.deltaMovement == this.yDeltaMovement) {
			this.ensureRoomY();
			this.yData[this.yCount].copy(dataToCopy);
			this.yCount++;
			return true;
		}
		return false;
	};
	
	proto.ensureRoomX = function() {
		var goalLength = this.xData.length * 2;
		if (this.xData.length <= this.xCount)
		{
			for (var j = this.xData.length; j < goalLength; j++)
			{
				this.xData[j] = new platformer.CollisionData();
			}
		}
	};
	
	proto.ensureRoomY = function() {
		var goalLength = this.yData.length * 2;
		if (this.yData.length <= this.yCount)
		{
			for (var j = this.yData.length; j < goalLength; j++)
			{
				this.yData[j] = new platformer.CollisionData();
			}
		}
	};
	
	proto.reset = function() {
		this.xCount = 0;
		this.yCount = 0;
		this.xDeltaMovement = Infinity;
		this.yDeltaMovement = Infinity;
	};
	
	return collisionDataContainer;
})();

/*--------------------------------------------------
 *   ../engine/messenger.js - ../engine/messenger.js
 */
/**
# CLASS messenger
The Messenger object facilitates communication between components and other game objects. Messenger is currently used by [[Entity]] and [[entity-container]].

## Messages

### Local Broadcasts:
- **load** - The entity triggers `load` on itself once all the properties and components have been attached, notifying the components that all their peer components are ready for messages.

## Methods
- **[constructor]** - Returns a new Messenger object.
  - @return messenger - returns a newly instantiated messenger.
- **bind** - Used by components to bind handler functions to triggered events. 
  - @param event (string) - This is the message being listened for.
  - @param func (function) - This is the function that will be run when the message is triggered.
  - @param scope (function) - This is the scope with which the function should be run.
- **toString** - Returns a string describing the messenger.
  - @return string - Returns the type as a string of the form "[messenger object]".
- **trigger** - This method is used by both internal components and external entities to trigger messages. When triggered, messenger checks through bound handlers to run as appropriate.
  - @param event (variant) - This is the message(s) to process. This can be a string, an object containing an "event" property (and optionally a "message" property, overriding the value below), or an array of the same.
  - @param value (variant) - This is a message object or other value to pass along to event handler.
  - @param debug (boolean) - This flags whether to output message contents and subscriber information to the console during game development. A "value" object parameter (above) will also set this flag if value.debug is set to true.
  - @return integer - The number of handlers for the triggered message.
- **triggerEvent** - This method is used by both internal components and external entities to trigger messages on this entity. When triggered, entity checks through bound handlers to run as appropriate.
  - @param event (string) - This is the message to process.
  - @param value (variant) - This is a message object or other value to pass along to handlers.
  - @param debug (boolean) - This flags whether to output message contents and subscriber information to the console during game development. A "value" object parameter (above) will also set this flag if value.debug is set to true.
  - @return integer - The number of handlers for the triggered message.
- **unbind** - Used to unbind handler functions.
  - @param event (string) - This is the message the component is currently listening to.
  - @param callback (function) - This is the function that was attached to the message.
  - @param scope (function) - This is the scope of the function that was attached to the message.
- **getMessageIds** - This method returns all the messages that this entity is concerned about.
  - @return Array - An array of strings listing all the messages for which this messenger has handlers.
*/
platformer.Messenger = (function(){
	var messenger = function (){
		this.messages    = {};
		this.loopCheck   = [];
		this.unbindLater = [];
	},
	proto = messenger.prototype;
	
	proto.toString = function(){
		return "[messenger Object]";
	};
	
	proto.bind = function(event, callback, scope){
		if(!this.messages[event]) this.messages[event] = [];
		this.messages[event].push({callback: callback, scope: scope});
	};
	
	proto.unbind = function(event, callback, scope){
		var found = false, j = 0;
		
		if(this.loopCheck.length){
			for(j = 0; j < this.loopCheck.length; j++){
				if(this.loopCheck[j] === event){
					found = true;
					break;
				}
			}
		}
			
		if(found){ //We're currently busy triggering messages like this, so we shouldn't remove message handlers until we're finished.
			this.unbindLater.push({event: event, callback: callback, scope: scope});
		} else {
			this.safelyUnbind(event, callback, scope);
		}
	};

	proto.safelyUnbind = function(event, callback, scope){
		if(!this.messages[event]) this.messages[event] = [];
		for (var x in this.messages[event]){
			if((this.messages[event][x].callback === callback) && (this.messages[event][x].scope === scope)){
				this.messages[event].splice(x,1);
				break;
			}
		}
	};
	
	// This handles multiple event structures: "", [], and {}
	proto.trigger = function(events, message, debug){
		var i = 0, count = 0;
		
		if(typeof events === 'string') {
			return this.triggerEvent(events, message, debug);
		} else if (Array.isArray(events)) {
			for (; i < events.length; i++){
				count += this.trigger(events[i], message, debug);
			}
			return count;
		} else if (events.event) {
			return this.triggerEvent(events.event, events.message || message, debug);
		} else {
			console.warn('Event incorrectly formatted: must be string, array, or object containing an "event" property.', events);
			return 0;
		}
	};
	
	// This handles string events only
	proto.triggerEvent = function(event, value, debug){
		var i = 0, j = 0, debugCount = 0;
		
		// Debug logging.
		if(this.debug || debug || (value && value.debug)){
			if(this.messages[event] && this.messages[event].length){
				console.log('Entity "' + this.type + '": Event "' + event + '" has ' + this.messages[event].length + ' subscriber' + ((this.messages[event].length>1)?'s':'') + '.', value);
			} else {
				console.warn('Entity "' + this.type + '": Event "' + event + '" has no subscribers.', value);
			}
			
			for (i = 0; i < this.loopCheck.length; i++){
				if(this.loopCheck[i] === event){
					debugCount += 1;
					if(debugCount > 5){
						throw "Endless loop detected for '" + event + "'.";
					} else {
						console.warn("Event '" + event + "' is nested inside another '" + event + "' event.");
					}
				}
			}
			i = 0;
		}

		this.loopCheck.push(event);
		if(this.messages[event]){
			for (i = 0; i < this.messages[event].length; i++){
				this.messages[event][i].callback.call(this.messages[event][i].scope || this, value, debug);
			}
		}
		this.loopCheck.length = this.loopCheck.length - 1;
		
		if(!this.loopCheck.length && this.unbindLater.length){
			for(j = 0; j < this.unbindLater.length; j++){
				this.safelyUnbind(this.unbindLater[j].event, this.unbindLater[j].callback, this.unbindLater[j].scope);
			}
			this.unbindLater.length = 0;
		}
		
		return i;
	};
	
	proto.getMessageIds = function(){
		var events = [];
		for (var event in this.messages){
			events.push(event);
		}
		return events;
	};
	
	proto.copyEventHandlers = function(event){
		return this.messages[events] || null;
	};
	
	return messenger;
})();

/*--------------------------------------------------
 *   ../engine/browser.js - ../engine/browser.js
 */
/**
# Function
Browser.js is one large function that is used to discover what browser is being used the capabilities of the browser. In addition to browser type, we determine whether it is mobile or desktop, whether it supports multi or single-touch, what type of audio it can play, and whether it supports canvas or not. 
All of this information is added to platformer.settings.supports and used throughout the code, including when determining which layers to display (e.g. adding a button layer for mobile devices), and in audio so that we load and play the correct sound types. 
*/
(function(){
	var uagent   = navigator.userAgent.toLowerCase(),
	    
	    myAudio  = document.createElement('audio'),
	    
	    supports = {
			canvas:      false, // determined below
			touch:       !!('ontouchstart' in window),

			// specific browsers as determined above
			iPod:      (uagent.search('ipod')    > -1),
			iPhone:    (uagent.search('iphone')  > -1),
			iPad:      (uagent.search('ipad')    > -1),
			safari:    (uagent.search('safari')  > -1),
			ie:        (uagent.search('msie')    > -1),
		    firefox:   (uagent.search('firefox') > -1),
			android:   (uagent.search('android') > -1),
			chrome:    (uagent.search('chrome')  > -1),
			silk:      (uagent.search('silk')    > -1),
			iOS:       false, //determined below
			mobile:    false, //determined below
			desktop:   false, //determined below
			multitouch:false, //determined below
			
			// audio support as determined below
			ogg:         true,
			m4a:         true,
			mp3:         true
		},
	    aspects = platformer.settings.aspects,
	    supportsAspects = {},
	    i = 0,
	    j = 0,
	    k = 0,
	    foundAspect = false,
	    listAspects = '';
	
	supports.iOS     = supports.iPod || supports.iPhone  || supports.iPad;
	supports.mobile  = supports.iOS  || supports.android || supports.silk;
	supports.desktop = !supports.mobile;
	
	//Determine multitouch:
	if(supports.touch){
		if (supports.android){
			if(parseInt(uagent.slice(uagent.indexOf("android") + 8)) > 2){
				supports.multitouch = true;
			}
		} else {
			supports.multitouch = true;
		}
	}
	
	// Determine audio support
	if ((myAudio.canPlayType) && !(!!myAudio.canPlayType && "" != myAudio.canPlayType('audio/ogg; codecs="vorbis"'))){
	    supports.ogg = false;
	    if(supports.ie || !(!!myAudio.canPlayType && "" != myAudio.canPlayType('audio/mp4'))){
	    	supports.m4a = false; //make IE use mp3's since it doesn't like the version of m4a made for mobiles
	    }
	}

	// Does the browser support canvas?
	var canvas = document.createElement('canvas');
	try	{
		supports.canvas = !!(canvas.getContext('2d')); // S60
	} catch(e) {
		supports.canvas = !!(canvas.getContext); // IE
	}
	delete canvas;

		//replace settings aspects build array with actual support of aspects
		platformer.settings.aspects = supportsAspects;
	platformer.settings.aspects = {};
	for (i in aspects){
		foundAspect = false;
		listAspects = '';
		for (j in aspects[i]){
			listAspects += ' ' + j;
			for (k in aspects[i][j]){
				if (uagent.search(aspects[i][j][k]) > -1){
					platformer.settings.aspects[j] = true;
					foundAspect = true;
					break;
				}
			}
			if(foundAspect) break;
		}
		if(!foundAspect){
			console.warn('This browser doesn\'t support any of the following: ' + listAspects);
		}
	}

	platformer.settings.supports = supports;

})();


/*--------------------------------------------------
 *   ../engine/game.js - ../engine/game.js
 */
/**
# CLASS game
This class is used to create the `platformer.game` object. The `game` object handles loading [[Scene]]s and transitions between scenes. It also accepts external events and passes them on to the current scene.

## Methods
- **constructor** - Creates an object from the game class.
  - @param definition (object) - Collection of settings from config.json.
  - @param onFinishedLoading (function) - An optional function to run once the game has begun.
- **tick** - Called by the CreateJS ticker. This calls tick on the scene.
  - @param delta (number) - The time passed since the last tick.
- **loadScene** - Loads a scene. If there's a transition, performs the transition.
  - @param sceneId (string) - The scene to load.
  - @param transition (string) - What type of transition to make. Currently there are: 'fade-to-black' and 'instant'
- **loadNextScene** - Sets the currentScene to the specified scene. Called by loadScene, shouldn't be called on its own.
  - @param sceneId (string) - The scene to load.
- **completeSceneTransition** - Ends the transition and destroys the old scene. Called when the scene effect is finished.
- **addEventListener** - Adding event listeners to the specified element and assigning callback functions.
  - @param element (DOM element) - The element to add the eventListener to.
  - @param event (DOM events) - The event to listen for.
  - @param callback (function) - The function to call when the event occurs.
- **destroy** - Destroys the object so that it's ready to garbage collect.
- **getEntitiesByType** - This method will return all game entities that match the provided type. For console debugging, you can also reference this function directly.
  - @param type (string) - Required. The entity type to find.
  - @return entities (Array of [[Entity]] objects) - Returns the entities that match the specified entity type.
- **getEntityById** - This method will return the first entity it finds with a matching id. For console debugging, you can also reference this function directly.
  - @param id (string) - Required. The entity id to find.
  - @return entity ([[Entity]] object) - Returns the entity that matches the specified entity id.

## Helper Function
- **bindEvent** - Returns a function which takes in an event and calls the callback function passing it the eventId and the event.
  - @param eventId (string) - The id of the event we're binding to.
  - @param callback (function) - The function to call.



Requires: ["scene.js"]
*/


platformer.Game = (function(){
	var bindEvent = function(eventId, callback){return function(event){callback(eventId, event);};};
	var game      = function (definition, onFinishedLoading){
		var innerRootElement = document.createElement('div'),
		outerRootElement = null;

		platformer.game = this; //Make this instance the only Game instance.
		
		this.currentScene = undefined;
		this.loaded    = null;
		this.settings = definition;

		// platform-specific settings should apply if not explicitly changed.
		if(!definition.aspects)    definition.aspects    = platformer.settings.aspects;
		if(!definition.supports)   definition.supports   = platformer.settings.supports;
		if(!definition.classes)    definition.classes    = platformer.settings.classes;
		if(!definition.components) definition.components = platformer.settings.components;
		
		if(document.getElementById(definition.global.rootElement || "root")){
			outerRootElement = document.getElementById(definition.global.rootElement || "root");
		} else {
			outerRootElement = document.createElement('div');
			outerRootElement.id = definition.global.rootElement || "root";
			document.getElementsByTagName('body')[0].appendChild(outerRootElement);
		}
		for (var i in definition.supports){
			if(definition.supports[i]){
				outerRootElement.className += ' supports-' + i;
			}
		}
		
		innerRootElement.id = 'inner-' + outerRootElement.id;
		outerRootElement.appendChild(innerRootElement);
		this.rootElement = innerRootElement;
		this.containerElement = outerRootElement;
		
		this.loadScene(definition.global.initialScene);

		// Send the following events along to the scene to handle as necessary:
		var self = this,
		callback = null;
		
		if(definition.debug){ //If this is a test build, leave in the browser key combinations so debug tools can be opened as expected.
			callback = function(eventId, event){
				self.currentScene.trigger(eventId, event);
			};
		} else { // Otherwise remove default browser behavior for key inputs so that they do not interfere with game-play.
			callback = function(eventId, event){
				self.currentScene.trigger(eventId, event);
				event.preventDefault(); // this may be too aggressive - if problems arise, we may need to limit this to certain key combos that get in the way of game-play. Example: (event.metaKey && event.keyCode == 37) causes an accidental cmd key press to send the browser back a page while playing and hitting the left arrow button.
			};
		}
		
		this.bindings = [];
		this.addEventListener(window, 'keydown', callback);
		this.addEventListener(window, 'keyup',   callback);

		// If aspect ratio of game area should be maintained on resizing, create new callback to handle it
		if(definition.global.aspectRatio){
			callback = function(eventId, event){
				var element = innerRootElement;
				var ratio   = definition.global.aspectRatio;
				var newW    = outerRootElement.offsetWidth;
				var newH    = outerRootElement.offsetHeight;
				if(definition.global.maxWidth && (definition.global.maxWidth < newW)){
					newW = definition.global.maxWidth;
				}
				var bodyRatio = newW / newH;
				if (bodyRatio > ratio)
				{  //Width is too wide
					element.style.height = newH + 'px';
				    newW = newH * ratio;
				    element.style.width = newW + 'px';
				} else {  //Height is too tall
					element.style.width = newW + 'px';
				    newH = newW / ratio;
				    element.style.height = newH + 'px';
				}
				if(definition.global.resizeFont){
					outerRootElement.style.fontSize = Math.round(newW / 20) + 'px';
				}
				element.style.marginTop = '-' + Math.round(newH / 2) + 'px';
				element.style.marginLeft = '-' + Math.round(newW / 2) + 'px';
				element.style.top = '50%';
				element.style.left = '50%';
				self.currentScene.trigger(eventId, event);
			};
			callback('resize');
		} else if(definition.global.resizeFont) {
			callback = function(eventId, event){
				outerRootElement.style.fontSize = Math.round(self.rootElement.offsetWidth / 20) + 'px';
				self.currentScene.trigger(eventId, event);
			};
			callback('resize');
		}
		this.addEventListener(window, 'orientationchange', callback);
		this.addEventListener(window, 'resize',            callback);
		
		if(onFinishedLoading){
			onFinishedLoading(this);
		}

		createjs.Ticker.timingMode = 'raf';
		createjs.Ticker.setFPS(definition.global.fps || 60);
		this.tickWrapper = function(e){
			self.tick(e);
		};
		createjs.Ticker.addEventListener("tick", this.tickWrapper);
		
		//Add entity-finder for debugging
		if(window){
			window.getEntityById = function(id){
				return self.getEntityById(id);
			};

			window.getEntitiesByType = function(type){
				return self.getEntitiesByType(type);
			};
		}
	};
	var proto = game.prototype;
	
	proto.tick = function(tickEvent){
		if(this.loadedScene){
			this.loadedScene.trigger('tick', tickEvent);
		}
		if(this.currentScene){
			this.currentScene.trigger('tick', tickEvent);
		}
	};
	
	proto.loadScene = function(sceneId, transition, persistantData, preloading){
		var self = this;
		this.inTransition = true;
		this.leavingScene = this.currentScene;
		
		if(preloading){
			this.loadNextScene(sceneId);
			return;
		}
		
		switch(transition){
		case 'fade-to-black':
			var element = document.createElement('div');
			this.rootElement.appendChild(element);
			element.style.width = '100%';
			element.style.height = '100%';
			element.style.position = 'absolute';
			element.style.zIndex = '1000';
			element.style.opacity = '0';
			element.style.background = '#000';
			new createjs.Tween(element.style).to({opacity:0}, 500).to({opacity:1}, 500).call(function(t){
				if(!this.loaded) {
					self.loadNextScene(sceneId, persistantData);
				}
				self.completeSceneTransition(persistantData);
			}).wait(500).to({opacity:0}, 500).call(function(t){
				self.rootElement.removeChild(element);
				element = undefined;
			});
			break;
		case 'instant':
		default:
			if(!this.loaded){
				self.loadNextScene(sceneId, persistantData);
			}
			this.completeSceneTransition(persistantData);
		}
	};
	
	proto.loadNextScene = function(sceneId, persistantData){
		var scene = null;
		
		if(typeof sceneId === 'string'){
			scene = this.settings.scenes[sceneId];
		} else {
			scene = sceneId;
		}
		
		this.loaded = sceneId;
		this.loadedScene = new platformer.Scene(scene, this.rootElement);

		console.log('Scene loaded: ' + sceneId); //putting a console log here, because Android seems to hang if I do not. Need to test more Android devices.
		this.loadedScene.trigger('scene-loaded', persistantData);
	};
	
	proto.completeSceneTransition = function(persistantData){
		var sceneId = this.loaded;
		
		this.currentScene = this.loadedScene;
		this.loadedScene  = null;
		
		this.loaded = false;
		this.inTransition = false;
		if(this.leavingScene){
			this.leavingScene.destroy();
			this.leavingScene = false;
		}

		console.log('Scene live: ' + sceneId); //putting a console log here, because Android seems to hang if I do not. Need to test more Android devices.
		this.currentScene.trigger('scene-live', persistantData);
	};
	
	proto.addEventListener = function(element, event, callback){
		this.bindings[event] = {element: element, event: event, callback: bindEvent(event, callback)};
		element.addEventListener(event, this.bindings[event].callback, true);
	};

	proto.getEntityById = function(id){
		if(this.currentScene){
			return this.currentScene.getEntityById(id);
		} else {
			return undefined;
		}
	};

	proto.getEntitiesByType = function(type){
		if(this.currentScene){
			return this.currentScene.getEntitiesByType(type);
		} else {
			return [];
		}
	};
	
	proto.destroy = function ()
	{
		createjs.Ticker.removeEventListener("tick", this.tickWrapper);
		for (var binding in this.bindings){
			this.bindings[binding].element.removeEventListener(this.bindings[binding].event, this.bindings[binding].callback);
		}
		this.bindings.length = 0;
	};
	
	return game;
})();

/*--------------------------------------------------
 *   ../engine/scene.js - ../engine/scene.js
 */
/**
# CLASS scene
This class is instantiated by [[Game]] and contains one or more entities as layers. Each layer [[Entity]] handles a unique aspect of the scene. For example, one layer might contain the game world, while another layer contains the game interface. Generally there is only a single scene loaded at any given moment.

## Messages

### Child Broadcasts:
- **[Messages specified in definition]** - Listens for messages and on receiving them, re-triggers them on each entity layer.
  - @param message (object) - sends the message object received by the original message.

## Methods
- **[constructor]** - Creates an object from the scene class and passes in a scene definition containing a list of layers to load and a DOM element where the scene will take place.
  - @param definition (object) - Base definition for the scene, including one or more layers with both properties, filters, and components as shown below under "JSON definition".
  - @param rootElement (DOM element) - DOM element where scene displays layers.
  - @return scene - returns the new scene composed of the provided layers.
- **getEntitiesByType** - This method will return all game entities that match the provided type.
  - @param type (string) - Required. The entity type to find.
  - @return entities (Array of [[Entity]] objects) - Returns the entities that match the specified entity type.
- **getEntityById** - This method will return the first entity it finds with a matching id.
  - @param id (string) - Required. The entity id to find.
  - @return entity ([[Entity]] object) - Returns the entity that matches the specified entity id.
- **trigger** - This method is used by external objects to trigger messages on the layers as well as internal entities broadcasting messages across the scope of the scene.
  - @param messageId (string) - This is the message to process.
  - @param value (variant) - This is a message object or other value to pass along to component functions.
- **destroy** - This method destroys all the layers in the scene.

## JSON Definition:
    {
      "layers":[
      // Required array listing the entities that should be loaded as scene layers. These can be actual entity JSON definitions as shown in [[Entity]] or references to entities by using the following specification.

        {
          "type": "entity-id",
          // This value maps to an entity definition with a matching "id" value as shown in [[Entity]] and will load that definition.
          
          "properties":{"x": 400}
          // Optional. If properties are passed in this reference, they override the entity definition's properties of the same name.
        }
      ]
    }
    
    
Requires: ["entity.js"]
*/
platformer.Scene = (function(){
	var scene = function(definition, rootElement){
		var layers = definition.layers,
		supportedLayer = true,
		layerDefinition = false,
		properties = false,
		messages = null;
		
		this.id = definition.id;
		
		this.storedMessages = [];
		
		this.rootElement = rootElement;
		this.layers = [];
		for(var layer in layers){
			layerDefinition = layers[layer];
			properties = {rootElement: this.rootElement, parent: this};
			if (layerDefinition.properties){
				for(i in layerDefinition.properties){
					properties[i] = layerDefinition.properties[i];
				}
			}

			if(layerDefinition.type){ // this layer should be loaded from an entity definition rather than this instance
				layerDefinition = platformer.game.settings.entities[layerDefinition.type];
			}
			
			supportedLayer = true;
			if(layerDefinition.filter){
				if(layerDefinition.filter.includes){
					supportedLayer = false;
					for(var filter in layerDefinition.filter.includes){
						if(platformer.game.settings.supports[layerDefinition.filter.includes[filter]]){
							supportedLayer = true;
						}
					}
				}
				if(layerDefinition.filter.excludes){
					for(var filter in layerDefinition.filter.excludes){
						if(platformer.game.settings.supports[layerDefinition.filter.excludes[filter]]){
							supportedLayer = false;
						}
					}
				}
			}
			if (supportedLayer){
				this.layers.push(new platformer.Entity(layerDefinition, {
					properties: properties
				}));
			}
		}
		// This allows the layer to gather messages that are triggered as it is loading and deliver them to all the layers once all the layers are in place.
		messages = this.storedMessages;
		this.storedMessages = false;
		for(var i = 0; i < messages.length; i++){
			this.trigger(messages[i].message, messages[i].value);
		}
		messages.length = 0;
		
		this.time = new Date().getTime();
		this.timeElapsed = {
			name: '',
			time: 0
		};
	};
	var proto = scene.prototype;
	
	proto.trigger = function(eventId, event){
		var i = 0,
		time  = 0;
		
		if(this.storedMessages){
			this.storedMessages.push({
				message: eventId,
				value: event
			});
		} else {
			if(eventId === 'tick'){
				time = new Date().getTime();
				this.timeElapsed.name = 'Non-Engine';
				this.timeElapsed.time = time - this.time;
				this.trigger('time-elapsed', this.timeElapsed);
				this.time = time;
			}
			for(; i < this.layers.length; i++){
				this.layers[i].trigger(eventId, event);
			}
			if(eventId === 'tick'){
				time = new Date().getTime();
				this.timeElapsed.name = 'Engine Total';
				this.timeElapsed.time = time - this.time;
				this.trigger('time-elapsed', this.timeElapsed);
				this.time = time;
			}
		}
	};
	
	proto.getEntityById = function(id){
		var i = 0,
		selection = null;
		
		for(; i < this.layers.length; i++){
			if(this.layers[i].id === id){
				return this.layers[i];
			}
			if(this.layers[i].getEntityById){
				selection = this.layers[i].getEntityById(id);
				if(selection){
					return selection;
				};
			}
		}
		return undefined;
	};

	proto.getEntitiesByType = function(type){
		var i     = 0,
		selection = null,
		entities  = [];
		
		for(; i < this.layers.length; i++){
			if(this.layers[i].type === type){
				entities.push(this.layers[i]);
			}
			if(this.layers[i].getEntitiesByType(type)){
				selection = this.layers[i].getEntitiesByType(type);
				if(selection){
					entities = entities.concat(selection);
				};
			}
		}
		return entities;
	};

	proto.destroy = function(){
		for(var layer in this.layers){
			this.layers[layer].destroy();
		}
		this.layers.length = 0;
	};
	
	return scene;
})();


/*--------------------------------------------------
 *   ../engine/entity.js - ../engine/entity.js
 */
/**
# CLASS entity
The Entity object acts as a container for components, facilitates communication between components and other game objects, and includes properties set by components to maintain a current state. The entity object serves as the foundation for most of the game objects in the Platformer engine.

## Dependencies
- **[[Messenger]] - Entity uses `messenger` in its prototypal chain to enable event handling.

## Messages

### Local Broadcasts:
- **load** - The entity triggers `load` on itself once all the properties and components have been attached, notifying the components that all their peer components are ready for messages.

## Methods
- **[constructor]** - Returns a new Entity object based on the definitions provided.
  - @param definition (object) - Base definition for the entity, includes properties and components as shown below under "JSON definition".
  - @param instanceDefinition (object) - Specific instance definition including properties that override the base definition properties.
  - @return entity - returns the new entity made up of the provided components. 
- **addComponent** - Attaches the provided component to the entity.
  - @param component (object) - Must be an object that functions as a [[Component]].
  - @return component - Returns the same object that was submitted.
- **removeComponent** - Removes the mentioned component from the entity.
  - @param component (object) - Must be a [[Component]] attached to the entity.
  - @return component|false - Returns the same object that was submitted if removal was successful; otherwise returns false (the component was not found attached to the entity).
- **bind** - Used by components to bind handler functions to triggered events on the entity. 
  - @param event (string) - This is the message for which the component is listening.
  - @param func (function) - This is the function that will be run when the message is triggered.
- **toString** - Returns a string describing the entity.
  - @return string - Returns the entity type as a string of the form "[entity entity-type]".
- **trigger** - This method is used by both internal components and external entities to trigger messages on this entity. When triggered, entity checks through bound handlers to run component functions as appropriate.
  - @param event (variant) - This is the message(s) to process. This can be a string, an object containing an "event" property (and optionally a "message" property, overriding the value below), or an array of the same.
  - @param value (variant) - This is a message object or other value to pass along to component functions.
  - @param debug (boolean) - This flags whether to output message contents and subscriber information to the console during game development. A "value" object parameter (above) will also set this flag if value.debug is set to true.
  - @return integer - The number of handlers for the triggered message: this is useful for determining whether the entity cares about a given message.
- **triggerEvent** - This method is used by both internal components and external entities to trigger messages on this entity. When triggered, entity checks through bound handlers to run component functions as appropriate.
  - @param event (string) - This is the message to process.
  - @param value (variant) - This is a message object or other value to pass along to component functions.
  - @param debug (boolean) - This flags whether to output message contents and subscriber information to the console during game development. A "value" object parameter (above) will also set this flag if value.debug is set to true.
  - @return integer - The number of handlers for the triggered message: this is useful for determining whether the entity cares about a given message.
- **unbind** - Used by components to unbind handler functions on the entity, typically called when a component is removed from the entity.
  - @param event (string) - This is the message the component is currently listening to.
  - @param func (function) - This is the function that was attached to the message.
- **getMessageIds** - This method returns all the messages that this entity is concerned about.
  - @return Array - An array of strings listing all the messages for which this entity has handlers.
- **destroy** - This method removes all components from the entity.

## JSON Definition:
    {
      "id": "entity-id",
      // "entity-id" becomes `entity.type` once the entity is created.
      
      "components": [
      // This array lists one or more component definition objects
      
        {"type": "example-component"}
        // The component objects must include a "type" property corresponding to a component to load, but may also include additional properties to customize the component in a particular way for this entity.
      ],
      
      "properties": [
      // This array lists properties that will be attached directly to this entity.
      
        "x": 240
        // For example, `x` becomes `entity.x` on the new entity.
      ],
      
      "filters": {
      // Filters are only used by top level entities loaded by the scene and are not used by the entity directly. They determine whether an entity should be loaded on a particular browser according to browser settings.
      
        "includes": ["touch"],
        // Optional. This filter specifies that this entity should be loaded on browsers/devices that support a touch interface. More than one setting can be added to the array.

        "excludes": ["multitouch"]
        // Optional. This filter specifies that this entity should not be loaded on browsers/devices that do not support a multitouch interface. More than one setting can be added to the array.
      }
    }
*/

/*
 * Requires: ["messenger.js"]
 */

platformer.Entity = (function(){
	var entityIds = {},
	entity = function (definition, instanceDefinition){
		var self             = this,
		index                = undefined,
		componentDefinition  = undefined,
		def                  = definition || {},
		componentDefinitions = def.components || [],
		defaultProperties    = def.properties || {},
		instance             = instanceDefinition || {},
		instanceProperties   = instance.properties || {};
		
		// Set properties of messenger on this entity.
		platformer.Messenger.call(this);
		
		self.components  = [];
		self.type = def.id || 'none';
		
		self.id = instanceDefinition.id || instanceProperties.id;
		if(!self.id){
			if(!entityIds[self.type]){
				entityIds[self.type] = 0;
			}
			self.id = self.type + '-' + entityIds[self.type];
			entityIds[self.type] += 1;
		}

		this.setProperty(defaultProperties); // This takes the list of properties in the JSON definition and appends them directly to the object.
		this.setProperty(instanceProperties); // This takes the list of options for this particular instance and appends them directly to the object.
		this.bind('set-property', function(keyValuePairs){
			self.setProperty(keyValuePairs);
		});
		
		if(!self.state){
			self.state = {}; //starts with no state information. This expands with boolean value properties entered by various logic components.
		}
		self.lastState = {}; //This is used to determine if the state of the entity has changed.
		
		for (index in componentDefinitions){
			componentDefinition = componentDefinitions[index];
			if(platformer.components[componentDefinition.type]){
				self.addComponent(new platformer.components[componentDefinition.type](self, componentDefinition));
			} else {
				console.warn("Component '" + componentDefinition.type + "' is not defined.", componentDefinition);
			}
		}
		
		self.trigger('load');
	};
	var proto = entity.prototype = new platformer.Messenger();
	
	proto.toString = function(){
		return "[entity " + this.type + "]";
	};
	
	proto.addComponent = function(component){
	    this.components.push(component);
	    return component;
	};
	
	proto.removeComponent = function(component){
		var index = '';
		
		if(typeof component === 'string'){
		    for (index in this.components){
			    if(this.components[index].type === component){
			    	component = this.components[index];
			    	this.components.splice(index, 1);
			    	component.destroy();
				    return component;
			    }
		    }
		} else {
		    for (index in this.components){
			    if(this.components[index] === component){
			    	this.components.splice(index, 1);
			    	component.destroy();
				    return component;
			    }
		    }
		}
		
	    return false;
	};
	
	proto.setProperty = function(keyValuePairs){
		var index = '';
		
		for (index in keyValuePairs){ // This takes a list of properties and appends them directly to the object.
			this[index] = keyValuePairs[index];
		}
	};
	
	proto.destroy = function(){
		for (var x in this.components) {
			this.components[x].destroy();
		}
		this.components.length = 0;
	};
	
	return entity;
})();

/*--------------------------------------------------
 *   ../engine/factory.js - ../engine/factory.js
 */
/*
 * This file includes a few helper functions to handle component code that is repeated across multiple components.
 * See ec-template.js for an example componentDefinition that can be sent into this component class factory.
 */
(function (ns){
	ns.components = {};
	
	ns.createComponentClass = function(componentDefinition, prototype){
		var	component = function(owner, definition){
			var func = null,
			name     = '';
			
			// if prototype provided, set up its properties here.
			if(prototype){
				prototype.call(this);
			}
			
			this.owner = owner;
			this.listener = {
				events: [],
				messages: []
			};
			this.publicMethods = {};
			this.type = componentDefinition.id;
			
			if(componentDefinition.events){
				for(func in componentDefinition.events){
					this.addEventListener(func, componentDefinition.events[func]);
					if(definition.aliases){
						for (var alias in definition.aliases){
							if(definition.aliases[alias] === func){
								this.addEventListener(alias, componentDefinition.events[func]);
							}
						}
					}
				}
			}
			
			if(componentDefinition.publicMethods){
				for(func in componentDefinition.publicMethods){
					name = func;
					if(definition.aliases){
						for (var alias in definition.aliases){
							if(definition.aliases[alias] === func){
								name = alias;
							}
						}
					}
					this.addMethod(name, componentDefinition.publicMethods[func]);
				}
			}
						
			if (this.constructor){
				this.constructor(definition);
			}
		},
		func  = null,
		proto = component.prototype;
		
		if(prototype){ //absorb template prototype if it exists.
			proto = component.prototype = new prototype();
		}
		
		// Have to copy rather than replace so definition is not corrupted
		proto.constructor = componentDefinition.constructor;

		if (componentDefinition.methods) for(func in componentDefinition.methods){
			if(func === 'destroy'){
				proto['___' + func] = componentDefinition.methods[func];
			} else {
				proto[func] = componentDefinition.methods[func];
			}
		}
		if (componentDefinition.publicMethods) for(func in componentDefinition.publicMethods){
			proto[func] = componentDefinition.publicMethods[func];
		}

		proto.toString = function(){
			return "[component " + this.type + "]";
		};

		// This function should never be called by the component itself. Call this.owner.removeComponent(this) instead.
		proto.destroy = function(){
			
			// Handle component's destroy method before removing messaging and methods.
			if(this.___destroy){
				this.___destroy();
			}
			
			// Now remove event listeners and methods.
			for(func in this.publicMethods){
				this.removeMethod(func);
			}
			this.removeEventListeners();
		};
		
		proto.setProperty = function(property, value){
			this[property] = value;
		};

		proto.addListeners = function(){
			console.warn('Component "' + this.type + '": "component.addListeners()" is deprecated. Use "component.addEventListener()".');
		};
		proto.addListener = function(){
			console.warn('Component "' + this.type + '": "component.addListener()" is deprecated. Use "component.addEventListener()".');
		};
		proto.removeListeners = function(){
			console.warn('Component "' + this.type + '": "component.removeListeners()" is deprecated. Use "component.removeEventListeners()".');
		};
		proto.removeListener = function(){
			console.warn('Component "' + this.type + '": "component.removeListener()" is deprecated. Use "component.removeEventListener()".');
		};
	
		proto.removeEventListeners = function(listeners){
			var events = null,
			messages = null;
			
			if(!listeners){
				events   = this.listener.events;
				messages = this.listener.messages;
				for(var i = 0; i < events.length; i++){
					this.removeEventListener(events[i], messages[i]);
				}
			} else {
				events   = listeners;
				for(var i = 0; i < events.length; i++){
					this.removeEventListener(events[i]);
				}
			}
		};
		
		proto.addEventListener = function(event, callback){
			this.listener.events.push(event);
			this.listener.messages.push(callback);
			this.owner.bind(event, callback, this);
		};
		
		proto.addMethod = function(name, func){
			var self = this;
			
			if(this.owner[name]){
				console.warn(owner.type + ': Entity already has a method called "' + name + '". Method not added.');
			} else {
				this.owner[name] = function(){
					return func.apply(self, arguments);
				};
				this.publicMethods[name] = func;
			}
		};
	
		proto.removeEventListener = function(event, callback){
			var events = this.listener.events,
			messages   = this.listener.messages;
			for(var i = 0; i < events.length; i++){
				if((events[i] === event) && (!callback || (messages[i] === callback))){
					this.owner.unbind(event, messages[i], this);
				}
			}
		};
		
		proto.removeMethod = function(name){
			if(!this.owner[name]){
				console.warn(owner.type + ': Entity does not have a method called "' + name + '".');
			} else {
				delete this.owner[name];
			}
			delete this.publicMethods[name];
		};

		ns.components[componentDefinition.id] = component;
	};
})(platformer);
platformer.components = {};

/*--------------------------------------------------
 *   asset-loader - ../engine/components/asset-loader.js
 */
/**
# COMPONENT **asset-loader**
This component loads a list of assets, wrapping PreloadJS functionality into a game engine component. Settings and files are pulled from the information provided in config.js, with the expectation that this component will exist on the initial loading screen.

## Dependencies
- [createjs.PreloadJS][link1] - Requires the PreloadJS library to load a list of assets.

## Messages

### Listens for:
- **load** - On receiving this event, the asset loader begins downloading the list of assets.
- **fileload** - This message used to update a progress bar if one has been defined by JSON.
  - @param fraction (Number) - Value of (progress / total) is used to set the width of the progress bar element.

### Local Broadcasts:
- **fileload** - This message is broadcast when an asset has been loaded.
  - @param complete (Boolean) - Whether this is the final asset to be loaded.
  - @param total (Number) - The total number of assets being loaded.
  - @param progress (Number) - The number of assets finished loading.
  - @param fraction (Number) - Value of (progress / total) provided for convenience.
- **complete** - This message is triggered when the asset loader is finished loading assets.

## JSON Definition
    {
      "type": "asset-loader",
      
      "assets": [
      // Optional. A list of assets to load; typically the asset list is pulled directly from the config.json file.
        {"id": "item-1",         "src": "images/item-1.png"},
        {"id": "item-2",         "src": "images/item-2.png"},
        {"id": "item-3",         "src": "images/item-3.png"}
      ]
      
      "progressBar": "progress-bar",
      // Optional. A DOM element id for a DIV that should be updated as assets are loaded.
      
      "useXHR": true
      // Whether to use XHR for asset downloading. The default is `true`.
    }

[link1]: http://www.createjs.com/Docs/PreloadJS/modules/PreloadJS.html

*/
(function(){
	return platformer.createComponentClass({
		id: 'asset-loader',
		
		constructor: function(definition){
			this.useXHR = true;
			
			if(definition.useXHR === false){
				this.useXHR = false;
			}
			
			this.assets = definition.assets || platformer.game.settings.assets;
			
			this.progressBar = definition.progressBar || false;
			
			this.message = {
				complete: false,
				total: 0,
				progress: 0,
				fraction: 0
			};
		},

		events: {// These are messages that this component listens for
		    "load": function(){
		    	var self = this,
		    	checkPush = function(asset, list){
		    		var i = 0,
		    		found = false;
		    		for(i in list){
		    			if(list[i].id === asset.id){
		    				found = true;
		    				break;
		    			}
		    		}
		    		if(!found){
		    			list.push(asset);
		    		}
		    	},
		    	loader     = new createjs.LoadQueue(this.useXHR),
		    	loadAssets = [],
		    	optimizeImages = platformer.game.settings.global.nativeAssetResolution || 0, //assets designed for this resolution
		    	scale = platformer.game.settings.scale = optimizeImages?Math.min(1, Math.max(window.screen.width, window.screen.height) * (window.devicePixelRatio || 1) / optimizeImages):1,
//		    	scale = platformer.game.settings.scale = optimizeImages?Math.min(1, Math.max(window.innerWidth, window.innerHeight) * window.devicePixelRatio / optimizeImages):1,
		    	scaleImage = function(img, columns, rows){
		    		var r          = rows    || 1,
		    		c              = columns || 1,
		    		imgWidth       = Math.ceil((img.width  / c) * scale) * c,
		    		imgHeight      = Math.ceil((img.height / r) * scale) * r,
		    		element        = document.createElement('canvas'),
		    		ctx            = element.getContext('2d');
		    		element.width  = imgWidth;
		    		element.height = imgHeight;
		    		element.scaleX = imgWidth  / img.width;
		    		element.scaleY = imgHeight / img.height;
		    		ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, imgWidth, imgHeight);
		    		return element;
		    	};
		    	
		    	loader.addEventListener('fileload', function (event) {
		    		var item = event.item,
		    		data     = item.data,
		    		result   = item.tag;
		    		
		    		if(event.item.type == "image"){
		    			if(optimizeImages && (scale !== 1)){
		    				if(data){
		    					result = scaleImage(result, data.columns, data.rows);
		    				} else {
		    					result = scaleImage(result);
		    				}
		    			}
		    		}
		    		
		    		platformer.assets[event.item.id] = result;
		    		
		    		self.message.progress += 1;
		    		self.message.fraction = self.message.progress/self.message.total;
		    		if(self.message.progress === self.message.total){
		    			self.message.complete = true;
		    		}
	    			self.owner.trigger('fileload', self.message);
		    	});
		    	
		    	loader.addEventListener('complete', function (event) {
	    			self.owner.trigger('complete');
		    	});
		    	
		    	for(var i in this.assets){
		    		if(typeof this.assets[i].src === 'string'){
		    			checkPush(this.assets[i], loadAssets);
		    		} else {
		    			for(var j in this.assets[i].src){
		    				if(platformer.game.settings.aspects[j] && this.assets[i].src[j]){
		    					if(typeof this.assets[i].src[j] === 'string'){
		    						this.assets[i].src  = this.assets[i].src[j];
		    						checkPush(this.assets[i], loadAssets);
		    					} else {
		    						this.assets[i].data    = this.assets[i].src[j].data || this.assets[i].data;
		    						this.assets[i].assetId = this.assets[i].src[j].assetId;
		    						this.assets[i].src     = this.assets[i].src[j].src;
		    						checkPush({
		    							id:  this.assets[i].assetId || this.assets[i].id,
		    							src: this.assets[i].src,
		    							data: this.assets[i].data
		    						}, loadAssets);
		    					}
		    					break;
		    				}
		    			}
		    			if(typeof this.assets[i].src !== 'string'){
		    				if(this.assets[i].src['default']){
		    					if(typeof this.assets[i].src['default'] === 'string'){
		    						this.assets[i].src  = this.assets[i].src['default'];
		    						checkPush(this.assets[i], loadAssets);
		    					} else {
		    						this.assets[i].data    = this.assets[i].src['default'].data || this.assets[i].data;
		    						this.assets[i].assetId = this.assets[i].src['default'].assetId;
		    						this.assets[i].src     = this.assets[i].src['default'].src;
		    						checkPush({
		    							id:  this.assets[i].assetId || this.assets[i].id,
		    							src: this.assets[i].src,
		    							data: this.assets[i].data
		    						}, loadAssets);
		    					}
		    				} else {
		    					console.warn('Asset has no valid source for this browser.', this.assets[i]);
		    				}
		    			}
		    		}
		    	}

		    	if(createjs.Sound){
			    	loader.installPlugin(createjs.Sound);
		    	}
		    	self.message.total = loadAssets.length;
		    	loader.loadManifest(loadAssets);
		    	platformer.assets = [];
		    },
		
		    "fileload": function(resp) {
		    	var pb = null;
		    	
		    	if(this.progressBar){
		    		pb = document.getElementById(this.progressBar);
		    		if(pb){
		    			pb = pb.style;
		    			
		    			pb.width = (resp.fraction * 100) + '%';
		    			pb.backgroundSize = ((1 / resp.fraction) * 100) + '%';
		    		}
		    	}
		    }
		}
		
	});
})();


/*--------------------------------------------------
 *   component-switcher - ../engine/components/component-switcher.js
 */
/**
# COMPONENT **component-switcher**
This component listens for messages and, according to its preset settings, will remove and add components to the entity. This is useful if certain events should modify the behavior of the entity in some way: for example, acquiring a pogo-stick might add a jumping component so the hero can jump.

## Messages

### Listens for:
- **[message(s) listed in the JSON definition componentMap]** - These messages will add or remove components.

### Parent Broadcasts:
- **child-entity-updated** - This message is triggered on the parent when the entity's components change.
  - @param entity ([[Entity]]) - This is the entity itself.

## JSON Definition
    {
      "type": "component-switcher"
      
      "componentMap":{
      // This is the list of messages to listen for (as the keys) with the settings as two arrays of components to add and components to remove.
      
        "found-pogostick":{
          
          "add":[
          // This is a list of components to add when "found-pogostick" is triggered on the entity. If it's adding a single component, "add" can be a reference to the component definition itself rather than an array of one object.
            {"type": "logic-jump"},
            {"type": "head-gear"}
          ]
          
          "remove": ["carseat"]
          // This is a string list of component ids to remove when "found-pogostick" is triggered on the entity. It will ignore listed components that are not connected to the entity.
        
        },
        
        // Multiple events can cause unique components to be added or removed
        "walking-indoors":{
          "remove": ["head-gear"]
        },
        
        "contemplate":{
          "add": {"type": "ai-pacer"}
        }
      
      }
    }
*/
(function(){
	var addRemoveComponents = function(definition, owner){
		return function(){
			var i = 0, j = 0;
			
			if(definition.remove){
				if(typeof definition.remove === 'string'){
					for(i = owner.components.length - 1; i > -1; i--){
						if(owner.components[i].type === definition.remove){
							owner.removeComponent(owner.components[i]);
						}
					}
				} else {
					for (i = 0; i < definition.remove.length; i++){
						for(j = owner.components.length - 1; j > -1; j--){
							if(owner.components[j].type === definition.remove[i]){
								owner.removeComponent(owner.components[j]);
							}
						}
					}
				}
			}

			if(definition.add){
				if(!Array.isArray(definition.add)){
					owner.addComponent(new platformer.components[definition.add.type](owner, definition.add));
				} else {
					for (i = 0; i < definition.add.length; i++){
						owner.addComponent(new platformer.components[definition.add[i].type](owner, definition.add[i]));
					}
				}
			}
			
			owner.parent.trigger('child-entity-updated', owner);
		};
	};
	
	return platformer.createComponentClass({
		id: 'component-switcher',
		constructor: function(definition){
			if(definition.componentMap){
				for(var event in definition.componentMap){
					this.addEventListener(event, addRemoveComponents(definition.componentMap[event], this.owner));
				}
			}
		}
	});
})();


/*--------------------------------------------------
 *   enable-ios-audio - ../engine/components/enable-ios-audio.js
 */
/**
# COMPONENT **enable-ios-audio**
This component enables JavaScript-triggered audio play-back on iOS devices by overlaying an invisible `div` across the game area that, when touched, causes the audio track to play, giving it necessary permissions for further programmatic play-back. Once touched, it removes itself as a component from the entity as well as removes the layer `div` DOM element.

## Dependencies:
- [createjs.SoundJS] [link1] - This component requires the SoundJS library to be included for audio functionality.
- **rootElement** property (on entity) - This component requires a DOM element which it uses to overlay the touchable audio-instantiation layer `div`.

## JSON Definition:
    {
      "type": "enable-ios-audio",
      
      "audioId": "combined",
      // Required. The SoundJS audio id for the audio clip to be enabled for future play-back.
    }

[link1]: http://www.createjs.com/Docs/SoundJS/module_SoundJS.html
*/
(function(){
	var iOSAudioEnabled = false,
    fileLoaded = false,
    userTapped = false,
    callback   = null,
	setupLoader = function(element, audio){
    	var tag = null,
    	succeeded = null,
    	loading = function () {
			var buffered = [],
			total = 0,
			percent = 0;
			
			if(!tag && audio.tag){
				// The audio.tag reference seems to disappear once the audio is paused, so we hold on to it for progress checking.
				tag = audio.tag;
				if(tag.src !== tag.id){ // This is a workaround for a bug in CreateJS: HTMLAudioPlugin, _handleTagLoad()
					tag.id = tag.src;
				}
			}
				
			if(tag){
				buffered = tag.buffered;

				for (var i = 0, len = buffered.length; i < len; i++) {
				    total += (buffered.end(i) - buffered.start(i));
				}

				percent = (Math.floor((total * 100) / tag.duration) || 0);
				element.innerHTML = 'Loading Audio: ' + percent + '%';
				
				if(percent >= 100){
					clearInterval(interval);
					userTapped = true;
					if(fileLoaded && callback){
	        			callback();
					}
				} else if(!succeeded){
			    	succeeded = function () {
					    tag.removeEventListener('play', succeeded);
					    audio.pause();
					};
					tag.addEventListener('play', succeeded);
				}
			}
		},
		interval = setInterval(loading, 500);
		
		element.innerHTML = 'Loading Audio...';
		element.className = 'loading-audio';
	},
	enableIOSAudio  = function(element, audioId){
		var click   = null,
		audioPath   = '',
	    overlay     = document.createElement('div');
		
		overlay.style.width    = '100%';
		overlay.style.height   = '100%';
		overlay.style.position = 'absolute';
		overlay.style.zIndex   = '20';
		element.appendChild(overlay);

		click = function(e){
			overlay.removeEventListener('touchstart', click, false);
			
			if(fileLoaded){
    			if(callback){
        			callback();
    			}
		    } else {
		    	audioPath = createjs.Sound.createInstance(audioId).src;
		    	createjs.Sound.removeSound(audioId);
		    	createjs.Sound.registerSound(audioPath, audioId, 1);
				setupLoader(overlay, createjs.Sound.play(audioId));
		    }
		};
		overlay.addEventListener('touchstart', click, false);
		
		return overlay;
	};

	createjs.HTMLAudioPlugin.enableIOS = true; // Allow iOS 5- to play HTML5 audio. (Otherwise there is no audio support for iOS 5-.)
	if(platformer.settings.supports.iOS){ // iOS Safari seems to crash when loading large audio files unless we go this route.
		createjs.Sound.registerPlugins([createjs.HTMLAudioPlugin]);
	} else {
    	createjs.Sound.initializeDefaultPlugins();
	}
	createjs.Sound.addEventListener('fileload', function(){
		fileLoaded = true;
		if(userTapped && callback){
   			callback();
		}
	});

	return platformer.createComponentClass({
		id: 'enable-ios-audio',
		constructor: function(definition){
			var self = this;
			
			if(!iOSAudioEnabled){
				iOSAudioEnabled = true;
				this.touchOverlay = enableIOSAudio(this.owner.rootElement, definition.audioId);
				callback = function(){
					callback = null;
					self.removeComponent();
				};
			} else {
				this.removeComponent();
			}
		},
		
		methods: {
		    removeComponent: function(){
				this.owner.removeComponent(this);
			},
			destroy: function(){
				if(this.touchOverlay){
					this.owner.rootElement.removeChild(this.touchOverlay);
				}
				delete this.touchOverlay;
			}
		}
	});
})();


/*--------------------------------------------------
 *   entity-linker - ../engine/components/entity-linker.js
 */
/**
# COMPONENT **entity-linker**
This component allows an entity to communicate directly with one or more entities via the message model, by passing local messages directly to the linked entities as new triggered events.

## Dependencies
- [[entity-linker]] - This component must also be on the other entities to which this entity should link, and use the same linkId.

## Messages

### Listens for:
- **adopted** - On receiving this message, this component triggers an `link-entity` message to connect to any peers with a matching `linkId`.
- **link-entity** - On receiving this message, this component checks the linkId and adds it to its list of connections if it matches.
  - @param entity ([[Entity]]) - The entity requesting a link.
  - @param linkId (string) - The linkId of the requesting entity. If it matches this component's linkId, the link is made.
  - @param reciprocate (boolean) - If true, "link-entity" is in-turn called on the sending entity to make the connection both ways.
- **unlink-entity** - This message will remove the requesting entity from this component's list of linked entities and no farther messages will be transmitted.
  - @param entity ([[Entity]]) - The entity requesting an unlink.
- **to-[linkId]-entities** - On receiving this message from the local entity, it is broadcast as "from-[linkId]-entities" to all linked entities.
  - @param message (string) - The message to be triggered on connected entities.
  - @param value (object) - The value to accompany the triggered message.
- **from-[linkId]-entities** - A message received from connected entities: the packaged message and values are triggered on this entity.
  - @param message (string) - The message to be triggered on this entity.
  - @param value (object) - The value to accompany the triggered message.
- **[events listed in JSON definition]** - on receiving these events from linked entities, the messages are re-triggered on this entity according to the JSON mapping.

### Local Broadcasts:
- **from-[linkId]-entities** - This message is broadcast on receiving "to-[linkId]-entities" from the local entity.
  - @param message (string) - The message to be triggered on connected entities.
  - @param value (object) - The value to accompany the triggered message.
- **[events listed in JSON definition]** - on receiving events from linked entities, the messages are re-triggered on this entity according to the JSON mapping.

### Parent Broadcasts:
- **link-entity** - On receiving an "adopted" message, this message is triggered to connect with any peers.
  - @param entity ([[Entity]]) - This entity.
  - @param linkId (string) - The linkId of this component.
  - @param reciprocate (boolean) - Set to true so that peer entities will make a two-way connection.

## JSON Definition
    {
      "type": "entity-linker"
      
      "linkId": "hero",
      // A string setting an id that should match across all connected entities. This serves as a sort of radio channel that multiple entities can be listening on.
      
      "events":{
      // This is a list of messages that this component should be listening for locally to broadcast to its linked entities.
      
        "sleeping": "good-night",
        // When another component on this entity triggers "sleeping", this mapping will broadcast "good-night" to all connected entities.
        
        "awake": ["alarm", "get-up"]
        // This mapping will take a local "awake" message and broadcast "alarm" and then "get-up" messages on all connected entities.
      }
    }
*/
(function(){
	var broadcast = function(event){
		if(typeof event === 'string'){
			return function(value, debug){
				var i = 0;
				
				for(; i < this.links.length; i++){
					this.links[i].trigger(event, value, debug);
				}
			};
		} else {
			return function(value, debug){
				var i = 0;
				for (var e in event){
					for(i = 0; i < this.links.length; i++){
						this.links[i].trigger(event[e], value, debug);
					}
				}
			};
		}
	};

	return platformer.createComponentClass({
		id: 'entity-linker',
		constructor: function(definition){
			var self = this;

			if(definition.events){
				for(var event in definition.events){
					this.addEventListener(event, broadcast(definition.events[event]));
				}
			}
	
			this.linkId = definition.linkId || this.owner.linkId || 'linked';
			
			if(!this.owner.linkId){
				this.owner.linkId = this.linkId;
			}
			
			this.addEventListener('to-' + this.linkId + '-entities', broadcast('from-' + this.linkId + '-entities'));
			this.addEventListener('from-' + this.linkId + '-entities', function(resp){
				self.owner.trigger(resp.message, resp.value, resp.debug);
			});
			
			this.links = [];
			
			if(this.owner.linkEntities){
				for (var entity in this.owner.linkEntities){
					this.links.push(this.owner.linkEntities[entity]);
				}
			}
			
			this.message = {
				message: '',
				value: null
			};
			this.linkMessage = {
				entity: this.owner,
				linkId: this.linkId,
				reciprocate: false
			};
			
			// In case linker is added after adoption
			if(this.owner.parent){
				this.resolveAdoption();
			}
		},
		
		events: {
			"adopted": function(resp){
				this.resolveAdoption(resp);
			},
			
			"link-entity": function(resp){
				var i   = 0,
				already = false;
				
				if((resp.linkId === this.linkId) && (resp.entity !== this.owner)){
					// Make sure this link is not already in place
					for (; i < this.links.length; i++){
						if(this.links[i] === resp.entity){
							already = true;
							break;
						}
					}
					
					if(!already){
						this.links.push(resp.entity);
						if(resp.reciprocate){
							this.linkMessage.reciprocate = false;
							resp.entity.trigger('link-entity', this.linkMessage);
						}
					}
				}
			},
			
			"unlink-entity": function(resp){
				var i = 0;
				for(; i < this.links.length; i++){
					if(resp.entity === this.links[i]){
						this.links.splice(i, 1);
						break;
					}
				}
			}
		},
		
		methods: {
			resolveAdoption: function(resp){
				var grandparent = this.owner.parent;
				while(grandparent.parent){
					grandparent = grandparent.parent;
				}
				this.linkMessage.reciprocate = true; 
				grandparent.trigger('link-entity', this.linkMessage, true);
			},
			
			destroy: function(){
				var i = 0;
				for (; i < this.links.length; i++){
					this.links[i].trigger('unlink-entity', this.linkMessage);
				}
				this.links.length = 0;
			}
		}
	});
})();


/*--------------------------------------------------
 *   handler-collision - ../engine/components/handler-collision.js
 */
/**
# COMPONENT **handler-collision**
This component checks for collisions between entities which typically have either a [[Collision-Tiles]] component for tile maps or a [[Collision-Basic]] component for other entities. It uses `entity-container` component messages if triggered to add to its collision list and also listens for explicit add/remove messages (useful in the absence of an `entity-container` component).

## Dependencies:
- [[handler-logic]] (on entity) - At the top-most layer, the logic handler triggers `check-collision-group` causing this component to test collisions on all children entities.

## Messages

### Listens for:
- **child-entity-added, add-collision-entity** - On receiving this message, the component checks the entity to determine whether it listens for collision messages. If so, the entity is added to the collision group.
  - @param message ([[Entity]] object) - The entity to be added.
- **child-entity-removed, remove-collision-entity** - On receiving this message, the component looks for the entity in its collision group and removes it.
  - @param message ([[Entity]] object) - The entity to be removed.
- **check-collision-group** - This message causes the component to go through the entities and check for collisions.
  - @param message.camera (object) - Optional. Specifies a region in which to check for collisions. Expects the camera object to contain the following properties: top, left, width, height, and buffer.

### Child Broadcasts
- **prepare-for-collision** - This message is triggered on collision entities to make sure their axis-aligned bounding box is prepared for collision testing.
- **relocate-entity** - This message is triggered on an entity that has been repositioned due to a solid collision.
- **hit-by-[collision-types specified in collision entities' definitions]** - When an entity collides with an entity of a listed collision-type, this message is triggered on the entity.
  - @param message.entity ([[Entity]]) - The entity with which the collision occurred.
  - @param message.type (string) - The collision type of the other entity.
  - @param message.shape ([[CollisionShape]]) - This is the shape of the other entity that caused the collision.
  - @param message.x (number) - Returns -1, 0, or 1 indicating on which side of this entity the collision occurred: left, neither, or right respectively.
  - @param message.y (number) - Returns -1, 0, or 1 indicating on which side of this entity the collision occurred: top, neither, or bottom respectively.

## Methods
- **getWorldEntities** - This method returns an object containing world entities grouped by collision type.
  - @return entities (object) - a list of key/value pairs where the keys are collision types and the values are arrays of entities of that type.
- **getWorldTerrain** - This method returns an entity representing the collision map of the world.
  - @return entity ([[Entity]]) - An entity describing the collision map of the world.
- **getEntityCollisions** - This method returns a list of collision objects describing soft collisions between an entity and a list of other entities.
  - @param entity ([[Entity]]) - Required: The entity to test against the world.
  - @param entities (Array of [[Entity]]) - Optional: The list of entities to check against. By default this is all the entities in the world.
  - @return collisions (Array of Objects) - This is a list of collision objects describing the soft collisions.

## JSON Definition:
    {
      "type": "handler-collision"
      // This component has no customizable properties.
    }
    
Requires: ["../collision-shape.js", "../aabb.js", "../vector2D.js", "../collision-data-container.js"]
*/
(function(){
	//set here to make them reusable objects
	var triggerMessage = {
		entity: null,
		type:   null,
		x: 0,
		y: 0,
		hitType: null,
		myType: null
	},
	xyPair = {
		x: 0,
		y: 0,
		relative: false
	},
	clearXYPair = function (pair) {
		pair.x = 0;
		pair.y = 0;
		pair.relative = false;
	},
	entityCollisionDataContainer = new platformer.CollisionDataContainer(),
	AABBCollision = function (boxX, boxY){
		if(boxX.left   >=  boxY.right)  return false;
		if(boxX.right  <=  boxY.left)   return false;
		if(boxX.top    >=  boxY.bottom) return false;
		if(boxX.bottom <=  boxY.top)    return false;
		return true;
	},
	shapeCollision = function(shapeA, shapeB){
		var distSquared = 0;
		var radiiSquared = 0;
		var circle = undefined;
		var rect = undefined;
		var shapeDistanceX = 0;
		var shapeDistanceY = 0;
		var rectAabb = undefined;
		var cornerDistanceSq = 0;
		if (shapeA.type == 'rectangle' && shapeB.type == 'rectangle') {
			return true;
		} else if (shapeA.type == 'circle' && shapeB.type == 'circle') {
			distSquared = Math.pow((shapeA.x - shapeB.x), 2) + Math.pow((shapeA.y - shapeB.y), 2);
			radiiSquared = Math.pow((shapeA.radius + shapeB.radius), 2);
			if (distSquared <= radiiSquared)
			{
				return true;
			} 
		} else if (shapeA.type == 'circle' && shapeB.type == 'rectangle' || shapeA.type == 'rectangle' && shapeB.type == 'circle' ) {
			if (shapeA.type == 'circle')
			{
				circle = shapeA;
				rect = shapeB;
			} else {
				circle = shapeB;
				rect = shapeA;
			}
			rectAabb = rect.getAABB();
			
			shapeDistanceX = Math.abs(circle.x - rect.x);
		    shapeDistanceY = Math.abs(circle.y - rect.y);

		    if (shapeDistanceX >= (rectAabb.halfWidth + circle.radius)) { return false; }
		    if (shapeDistanceY >= (rectAabb.halfHeight + circle.radius)) { return false; }

		    if (shapeDistanceX < (rectAabb.halfWidth)) { return true; } 
		    if (shapeDistanceY < (rectAabb.halfHeight)) { return true; }

			cornerDistanceSq = Math.pow((shapeDistanceX - rectAabb.halfWidth), 2) + Math.pow((shapeDistanceY - rectAabb.halfHeight), 2);
		    if (cornerDistanceSq < Math.pow(circle.radius, 2)) {
		    	return true;
		    }
		}
		return false;
	};
	
	return platformer.createComponentClass({
		id: 'handler-collision',
		
		constructor: function(definition){
			this.entitiesByType = {};
			this.entitiesByTypeLive = {};
			this.allEntities = [];
			this.solidEntitiesLive = [];
			this.softEntitiesLive = [];
			this.allEntitiesLive = [];
			this.groupsLive = [];
			this.nonColliders = [];
			
			this.terrain = undefined;
			this.aabb     = new platformer.AABB(this.owner.x, this.owner.y);
			this.prevAABB = new platformer.AABB(this.owner.x, this.owner.y);
			this.owner.previousX = this.owner.previousX || this.owner.x;
			this.owner.previousY = this.owner.previousY || this.owner.y;
			
			this.updateLiveList = true;
			this.cameraLogicAABB = new platformer.AABB(0, 0);
			this.cameraCollisionAABB = new platformer.AABB(0, 0);
			
			this.timeElapsed = {
				name: 'Col',
				time: 0
			};
		},
		
		events:{
			"child-entity-added": function(entity){
				this.addCollisionEntity(entity);
			},
			
			"add-collision-entity": function(entity){
				this.addCollisionEntity(entity);
			},
			
			"child-entity-removed": function(entity){
				this.removeCollisionEntity(entity);
			},
			
			"remove-collision-entity": function(entity){
				this.removeCollisionEntity(entity);
			},
			
			"check-collision-group": function(resp){
				var time = new Date().getTime(); //TODO: TML - Why create this in here?
				
				if(resp.camera){
					this.checkCamera(resp.camera);
				}/*
				if(resp.movers){
					this.checkMovers(resp.camera, resp.movers);
				}*/

				this.timeElapsed.name = 'Col-Cam';
				this.timeElapsed.time = new Date().getTime() - time;
				platformer.game.currentScene.trigger('time-elapsed', this.timeElapsed);
				time += this.timeElapsed.time;

				this.prepareCollisions(resp);

				this.timeElapsed.name = 'Col-Prep';
				this.timeElapsed.time = new Date().getTime() - time;
				platformer.game.currentScene.trigger('time-elapsed', this.timeElapsed);
				time += this.timeElapsed.time;

				this.checkGroupCollisions();

				this.timeElapsed.name = 'Col-Group';
				this.timeElapsed.time = new Date().getTime() - time;
				platformer.game.currentScene.trigger('time-elapsed', this.timeElapsed);
				time += this.timeElapsed.time;

				this.checkSolidCollisions();

				this.timeElapsed.name = 'Col-Solid';
				this.timeElapsed.time = new Date().getTime() - time;
				platformer.game.currentScene.trigger('time-elapsed', this.timeElapsed);
				time += this.timeElapsed.time;

				this.resolveNonCollisions(resp);

				this.timeElapsed.name = 'Col-None';
				this.timeElapsed.time = new Date().getTime() - time;
				platformer.game.currentScene.trigger('time-elapsed', this.timeElapsed);
				time += this.timeElapsed.time;

				this.checkSoftCollisions(resp);

				this.timeElapsed.name = 'Col-Soft';
				this.timeElapsed.time = new Date().getTime() - time;
				platformer.game.currentScene.trigger('time-elapsed', this.timeElapsed);
				time += this.timeElapsed.time;
			}
		},
		
		methods: {
			addCollisionEntity: function(entity){
				var i = 0,
				types = entity.collisionTypes;
				
				if ((entity.type == 'tile-layer') || (entity.type == 'collision-layer')) { //TODO: probably should have these reference a required function on the obj, rather than an explicit type list since new collision entity map types could be created - DDD
					this.terrain = entity;
					this.updateLiveList = true;
				} else {
					if(types){
						for(; i < types.length; i++){
							if(!this.entitiesByType[types[i]]){
								this.entitiesByType[types[i]] = [];
								this.entitiesByTypeLive[types[i]] = [];
							}
							this.entitiesByType[types[i]][this.entitiesByType[types[i]].length] = entity;
						}
						if(!entity.immobile){
							this.allEntities[this.allEntities.length] = entity;
							this.updateLiveList = true;
						}
					}
				}
			},

			removeCollisionEntity: function(entity){
				var x = 0,
				i     = 0,
				j	  = 0,
				types = entity.collisionTypes;

				if (types) {
					for(; i < types.length; i++){
						for (x in this.entitiesByType[types[i]]) {
							if(this.entitiesByType[types[i]][x] === entity){
								this.entitiesByType[types[i]].splice(x, 1);
								break;
							}
						}
					}
					
					if(!entity.immobile){
						for (j = 0; j < this.allEntities.length; j++) {
							if (this.allEntities[j] === entity) {
								this.allEntities.splice(j,1);
								break;
							}
						}
						this.updateLiveList = true;
					}
				}
			},
			
			checkCamera: (function(){
				var groupSortBySize = function(a, b){
					return a.collisionGroup.getAllEntities() - b.collisionGroup.getAllEntities();
				};
				return function(camera, movers){
					var i  = 0,
					j      = 0,
					length = 0,
					list   = null,
					all    = null,
					softs  = null,
					solids = null,
					width  = camera.width,
					height = camera.height,
					x      = camera.left + width  / 2,
					y      = camera.top  + height / 2,
					bufferLeft = camera.bufferLeft,
					bufferRight = camera.bufferRight,
					bufferTop = camera.bufferTop,
					bufferBottom = camera.bufferBottom,
					entities = undefined,
					entity = undefined,
					check  = AABBCollision,
					aabbLogic     = this.cameraLogicAABB,
					aabbCollision = this.cameraCollisionAABB,
					types = null;
					
					// store buffered size since the actual width x height is not used below.
					width += bufferLeft + bufferRight;
					height += bufferTop + bufferBottom;
					
					if(this.updateLiveList || !aabbLogic.matches(x, y, width, height)){
						
						aabbLogic.setAll(x, y, width, height);
						
						if(this.updateLiveList || !aabbCollision.contains(aabbLogic)){ //if the camera has not moved beyond the original buffer, we do not continue these calculations
							this.updateLiveList = false;
	
							all = this.allEntitiesLive;
							all.length = 0;
							
							solids = this.solidEntitiesLive;
							solids.length = 0;
							
							softs = this.softEntitiesLive;
							softs.length = 0;
							
							groups = this.groupsLive;
							groups.length = 0;
	
							length = this.allEntities.length;// console.log(length);
							for (i = 0; i < length; i++){
								entity = this.allEntities[i];
								if(entity.alwaysOn || entity.checkCollision || check(entity.getAABB(), aabbLogic)){
									entity.checkCollision = false;  //TML - This should be here. I think. :)
									all[all.length] = entity;
	
									types = entity.collisionTypes;
									if(entity !== this.owner){
										for (j = 0; j < types.length; j++) {
											if(entity.solidCollisions[types[j]].length){
												solids[solids.length] = entity;
												break;
											}
										}
									}
									for (j = 0; j < types.length; j++) {
										if(entity.softCollisions[types[j]].length){
											softs[softs.length] = entity;
											break;
										}
									}
									
									if(entity.collisionGroup){
										groups.push(entity);
									}
								} 
							}
							
							groups.sort(groupSortBySize);
							
							// add buffer again to capture stationary entities along the border that may be collided against 
							aabbCollision.setAll(x, y, width + bufferLeft + bufferRight, height + bufferTop + bufferBottom);
							
							for (i in this.entitiesByType){
								entities = this.entitiesByType[i];
								list = this.entitiesByTypeLive[i];
								list.length = 0;
								length = entities.length;
								for (j = 0; j < length; j++){
									entity = entities[j];
									if(entity.alwaysOn  || check(entity.getAABB(), aabbCollision)){
										list[list.length] = entity;
									}
								}
							}
						}
					}
				};
			})(),
			
			prepareCollisions: function (resp) {
				var entity = null;
				
				this.nonColliders.length = 0;
				
				for (var x = this.allEntitiesLive.length - 1; x > -1; x--) {
					entity = this.allEntitiesLive[x];
					entity.triggerEvent('prepare-for-collision', resp);
					if(!entity.collides){
						this.nonColliders.push(entity);
					}
				}
			},
			
			resolveNonCollisions: function (resp) {
				var entity = null,
				xy         = xyPair;

				xy.relative = false;
				
				for (var x = this.nonColliders.length - 1; x > -1; x--) {
					entity = this.nonColliders[x];
					xy.x = entity.x;
					xy.y = entity.y;
					entity.trigger('relocate-entity', xy);
				}
			},
			
			checkGroupCollisions:  (function(){
				var triggerCollisionMessages = function(entity, otherEntity, thisType, thatType, x, y, hitType, vector){
					
					triggerMessage.entity = otherEntity;
					triggerMessage.myType = thisType;
					triggerMessage.type   = thatType;
					triggerMessage.x      = x;
					triggerMessage.y      = y;
					triggerMessage.direction = vector;
					triggerMessage.hitType= hitType;
					entity.triggerEvent('hit-by-' + thatType, triggerMessage);
					
					if (otherEntity) {
						triggerMessage.entity = entity;
						triggerMessage.type   = thisType;
						triggerMessage.myType = thatType;
						triggerMessage.x      = -x;
						triggerMessage.y      = -y;
						triggerMessage.direction = vector.getInverse();
						triggerMessage.hitType= hitType;
						otherEntity.triggerEvent('hit-by-' + thisType, triggerMessage);
					}

				};

				return function (){
					var entities = this.groupsLive;
					
					for (var x = entities.length - 1; x > -1; x--){
						if(entities[x].collisionGroup.getSize() > 1){
							entityCollisionDataContainer.reset();
							clearXYPair(xyPair);
							xyPair = this.checkSolidEntityCollision(entities[x], entities[x].collisionGroup, entityCollisionDataContainer, xyPair);
							
							for (var i = 0; i < entityCollisionDataContainer.xCount; i++)
							{
								messageData = entityCollisionDataContainer.getXEntry(i);
								triggerCollisionMessages(messageData.thisShape.owner, messageData.thatShape.owner, messageData.thisShape.collisionType, messageData.thatShape.collisionType, messageData.direction, 0, 'solid', messageData.vector);
							}
							
							for (i = 0; i < entityCollisionDataContainer.yCount; i++)
							{
								messageData = entityCollisionDataContainer.getYEntry(i);
								triggerCollisionMessages(messageData.thisShape.owner, messageData.thatShape.owner, messageData.thisShape.collisionType, messageData.thatShape.collisionType, 0, messageData.direction, 'solid', messageData.vector);
							}
						}
					}
				};
			})(),
			
			checkSolidCollisions: (function(){
				var triggerCollisionMessages = function(entity, otherEntity, thisType, thatType, x, y, hitType, vector){
					
					triggerMessage.entity = otherEntity;
					triggerMessage.myType = thisType;
					triggerMessage.type   = thatType;
					triggerMessage.x      = x;
					triggerMessage.y      = y;
					triggerMessage.direction = vector;
					triggerMessage.hitType= hitType;
					entity.triggerEvent('hit-by-' + thatType, triggerMessage);
					
					if (otherEntity) {
						triggerMessage.entity = entity;
						triggerMessage.type   = thisType;
						triggerMessage.myType = thatType;
						triggerMessage.x      = -x;
						triggerMessage.y      = -y;
						triggerMessage.direction = vector.getInverse();
						triggerMessage.hitType= hitType;
						otherEntity.triggerEvent('hit-by-' + thisType, triggerMessage);
					}

				};

				return function (){
					var messageData = null,
					entities = this.solidEntitiesLive;
					
					for (var x = entities.length - 1; x > -1; x--){
						entityCollisionDataContainer.reset();
						clearXYPair(xyPair);
						xyPair = this.checkSolidEntityCollision(entities[x], entities[x], entityCollisionDataContainer, xyPair);
						
						for (var i = 0; i < entityCollisionDataContainer.xCount; i++)
						{
							messageData = entityCollisionDataContainer.getXEntry(i);
							triggerCollisionMessages(messageData.thisShape.owner, messageData.thatShape.owner, messageData.thisShape.collisionType, messageData.thatShape.collisionType, messageData.direction, 0, 'solid', messageData.vector);
						}
						
						for (i = 0; i < entityCollisionDataContainer.yCount; i++)
						{
							messageData = entityCollisionDataContainer.getYEntry(i);
							triggerCollisionMessages(messageData.thisShape.owner, messageData.thatShape.owner, messageData.thisShape.collisionType, messageData.thatShape.collisionType, 0, messageData.direction, 'solid', messageData.vector);
						}
					}
				};
			})(),
			
			checkSolidEntityCollision: function (ent, entityOrGroup, collisionDataCollection, xyInfo) {
				var steps         = 0,
				step              = 0,
				finalMovementInfo = xyInfo,
				entityDeltaX      = ent.x - ent.previousX,
				entityDeltaY      = ent.y - ent.previousY,
				aabb              = null,
				dX                = 0,
				dY                = 0,
				sW                = Infinity,
				sH                = Infinity,
				collisionTypes    = entityOrGroup.getCollisionTypes(),
				ignoredEntities   = false;
				
				if(entityOrGroup.getSolidEntities){
					ignoredEntities = entityOrGroup.getSolidEntities();
				}
				
				finalMovementInfo.x = ent.x;
				finalMovementInfo.y = ent.y;

				if (entityDeltaX || entityDeltaY) {
					
					if(ent.bullet){
						for(var i in collisionTypes){
							aabb = entityOrGroup.getAABB(collisionTypes[i]);
							sW = Math.min(sW, aabb.width);
							sH = Math.min(sH, aabb.height);
						}

						//Stepping to catch really fast entities - this is not perfect, but should prevent the majority of fallthrough cases.
						steps = Math.ceil(Math.max(Math.abs(entityDeltaX) / sW, Math.abs(entityDeltaY) / sH));
						steps = Math.min(steps, 100); //Prevent memory overflow if things move exponentially far.
						dX    = entityDeltaX / steps;
						dY    = entityDeltaY / steps;
					} else {
						steps = 1;
						dX    = entityDeltaX;
						dY    = entityDeltaY;
					}
					
					for(step = 0; step < steps; step++){
						entityOrGroup.prepareCollision(ent.previousX + dX, ent.previousY + dY);

						finalMovementInfo.x = ent.x;
						finalMovementInfo.y = ent.y;
						
						finalMovementInfo = this.processCollisionStep(ent, entityOrGroup, ignoredEntities, collisionDataCollection, finalMovementInfo, dX, dY, collisionTypes);
						
						
						if((finalMovementInfo.x === ent.previousX) && (finalMovementInfo.y === ent.previousY)){
							entityOrGroup.relocateEntity(finalMovementInfo.x, finalMovementInfo.y, collisionDataCollection);
							//No more movement so we bail!
							break;
						} else {
							entityOrGroup.relocateEntity(finalMovementInfo.x, finalMovementInfo.y, collisionDataCollection);
						}
					}
				}
				
				return finalMovementInfo;
			},
			
			processCollisionStep: (function(){
				var sweepAABB = new platformer.AABB(),
				includeEntity = function (thisEntity, aabb, otherEntity, otherCollisionType, ignoredEntities) {
					var otherAABB = otherEntity.getAABB(otherCollisionType);
					if (otherEntity === thisEntity){
						return false;
					} else if (otherEntity.jumpThrough && (aabb.bottom > otherAABB.top)) {
						return false;
					} else if (thisEntity.jumpThrough  && (otherAABB.bottom > aabb.top)) { // This will allow platforms to hit something solid sideways if it runs into them from the side even though originally they were above the top. - DDD
						return false;
					} else if(ignoredEntities){
						for (var i = 0; i < ignoredEntities.length; i++) {
							if(otherEntity === ignoredEntities[i]) {
								return false;
							}
						}
					}
					return true;
				};

				return function (ent, entityOrGroup, ignoredEntities, collisionDataCollection, finalMovementInfo, entityDeltaX, entityDeltaY, collisionTypes) {
					var potentialCollision = false;
					var potentialCollidingShapes = [];
					var previousAABB = null;
					var currentAABB = null;
					var collisionType = null;
					
					var otherEntity = null;
					var otherCollisionType = '';
					var otherShapes = null;
					var entitiesByTypeLive = this.getWorldEntities();
					var otherEntities = null;
					var terrain = this.getWorldTerrain(),
					solidCollisions = entityOrGroup.getSolidCollisions();
					
					if(!entityOrGroup.jumpThrough || (entityDeltaY >= 0)){ //TODO: Need to extend jumpthrough to handle different directions and forward motion - DDD
	
						for(var i = 0; i < collisionTypes.length; i++){
							//Sweep the full movement of each collision type
							potentialCollidingShapes[i] = [];
							collisionType = collisionTypes[i];
							previousAABB = entityOrGroup.getPreviousAABB(collisionType);
							currentAABB = entityOrGroup.getAABB(collisionType);
							
							sweepAABB.reset();
							sweepAABB.include(currentAABB);
							sweepAABB.include(previousAABB);
						
							for (var y = 0; y < solidCollisions[collisionType].length; y++) {
								otherCollisionType = solidCollisions[collisionType][y];
	
								if(entitiesByTypeLive[otherCollisionType]){
									otherEntities = entitiesByTypeLive[otherCollisionType];
									
									for(var z = 0; z < otherEntities.length; z++){
										
										//Chop out all the special case entities we don't want to check against.
										otherEntity = otherEntities[z];
										
										//Do our sweep check against the AABB of the other object and add potentially colliding shapes to our list.
										if(includeEntity(ent, previousAABB, otherEntity, otherCollisionType, ignoredEntities) && (AABBCollision(sweepAABB, otherEntity.getAABB(otherCollisionType)))) {
											otherShapes = otherEntity.getShapes(otherCollisionType);
											
											for (var q = 0; q < otherShapes.length; q++) {
												//Push the shapes on the end!
												potentialCollidingShapes[i].push(otherShapes[q]);
											} 
											potentialCollision = true;
										}
									}
								} else if (terrain && (otherCollisionType === 'tiles')) {
									//Do our sweep check against the tiles and add potentially colliding shapes to our list.
									otherShapes = terrain.getTileShapes(sweepAABB, previousAABB);
									for (var q = 0; q < otherShapes.length; q++) {
										//Push the shapes on the end!
										potentialCollidingShapes[i].push(otherShapes[q]);
										potentialCollision = true;
									}
								}
							}
						}
	
						if (potentialCollision) {
							finalMovementInfo = this.resolveCollisionPosition(ent, entityOrGroup, finalMovementInfo, potentialCollidingShapes, collisionDataCollection, collisionTypes, entityDeltaX, entityDeltaY);
						}
	
					}
					
					return finalMovementInfo;
				};
			})(),
			
			resolveCollisionPosition: (function(){
				var collisionData = new platformer.CollisionData();
				
				return function(ent, entityOrGroup, finalMovementInfo, potentialCollidingShapes, collisionDataCollection, collisionTypes, entityDeltaX, entityDeltaY){

					if (entityDeltaX != 0) {
						for(var j = 0; j < collisionTypes.length; j++){
							//Move each collision type in X to find the min X movement
							collisionData.clear();
							collisionData = this.findMinAxisMovement(ent, entityOrGroup, collisionTypes[j], 'x', potentialCollidingShapes[j], collisionData);
							
							if (collisionData.occurred)
							{
								collisionDataCollection.tryToAddX(collisionData);
							}
						}
					}
					
					if (collisionDataCollection.xCount > 0) {
						collisionData.copy(collisionDataCollection.getXEntry(0));
						finalMovementInfo.x = ent.previousX + collisionData.deltaMovement * collisionData.direction;
					} else {
						finalMovementInfo.x = ent.x;
					}
					
					// This moves the previous position of everything so that the check in Y can begin.
					entityOrGroup.movePreviousX(finalMovementInfo.x);
					
					if (entityDeltaY != 0) {
						for(var j = 0; j < collisionTypes.length; j++){
							//Move each collision type in Y to find the min Y movement
							collisionData.clear();
							collisionData = this.findMinAxisMovement(ent, entityOrGroup, collisionTypes[j], 'y', potentialCollidingShapes[j], collisionData);
							
							if (collisionData.occurred)
							{
								collisionDataCollection.tryToAddY(collisionData);
							}
						}
					}
					
					if (collisionDataCollection.yCount > 0)
					{
						collisionData.copy(collisionDataCollection.getYEntry(0));
						finalMovementInfo.y = ent.previousY + collisionData.deltaMovement * collisionData.direction;
					} else {
						finalMovementInfo.y = ent.y;
					}
					
					return finalMovementInfo;
				};
			})(),
			
			findMinAxisMovement: (function(){
				var shapeCollisionData = new platformer.CollisionData();
				
				return function (ent, entityOrGroup, collisionType, axis, potentialCollidingShapes, bestCollisionData) {
					//Loop through my shapes of this type vs the colliding shapes and do precise collision returning the shortest movement in axis direction
					
					var shapes = entityOrGroup.getShapes(collisionType);
					var prevShapes = entityOrGroup.getPrevShapes(collisionType);
					
					for (var i = 0; i < shapes.length; i++) {
						shapeCollisionData.clear();
						shapeCollisionData = this.findMinShapeMovementCollision(prevShapes[i], shapes[i], axis, potentialCollidingShapes, shapeCollisionData);
						
						if (shapeCollisionData.occurred && !bestCollisionData.occurred){
							//if a collision occurred and we haven't already have a collision.
							bestCollisionData.copy(shapeCollisionData);
						} else if (shapeCollisionData.occurred && bestCollisionData.occurred && (shapeCollisionData.deltaMovement < bestCollisionData.deltaMovement)) {
							//if a collision occurred and the diff is smaller than our best diff.
							bestCollisionData.copy(shapeCollisionData);
						}
					}
					
					return bestCollisionData;
				};
			})(),
			
			/**
			 * Find the earliest point at which this shape collides with one of the potential colliding shapes along this axis.
			 * For example, cycles through shapes a, b, and c to find the earliest position:
			 * 
			 *    O---->   [b]  [a]     [c]
			 *    
			 *    Returns collision location for:
			 *    
			 *            O[b]
			 * 
			 */
			findMinShapeMovementCollision: (function(){

				var storeCollisionData = function(collisionData, direction, position, initial, thisShape, thatShape, vector){
					collisionData.occurred = true;
					collisionData.direction = direction;
					collisionData.position = position;
					collisionData.deltaMovement = Math.abs(position - initial);
					collisionData.aABB = thatShape.getAABB();
					collisionData.thisShape = thisShape;
					collisionData.thatShape = thatShape;
					collisionData.vector = vector.copy();
				},
				findAxisCollisionPosition = (function(){
					var v = new platformer.Vector2D(),
					returnInfo = {
						position: 0,
						contactVector: v
					}, 
					getMovementDistance = function(currentDistance, minimumDistance){
						return Math.sqrt(Math.pow(minimumDistance, 2) - Math.pow(currentDistance, 2));
					},
					getCorner = function(circlePos, rectanglePos, half){
						var diff = circlePos - rectanglePos;
						return diff - (diff/Math.abs(diff)) * half;
					},
					getOffsetForAABB = function(axis, thisAABB, thatAABB){
						if (axis === 'x') {
							return thatAABB.halfWidth + thisAABB.halfWidth;
						} else if (axis === 'y') {
							return thatAABB.halfHeight + thisAABB.halfHeight;
						}
					},
					
					getOffsetForCircleVsAABB = function(axis, circle, rect, moving, direction){
						var newAxisPosition = 0;
						
						if (axis === 'x') {
							if (circle.y >= rect.aABB.top && circle.y <= rect.aABB.bottom) {
								return rect.aABB.halfWidth + circle.radius;
							} else {
								v.y = getCorner(circle.y, rect.y, rect.aABB.halfHeight);
								newAxisPosition = rect.aABB.halfWidth + getMovementDistance(v.y, circle.radius);
								if(moving === circle){
									v.x = -getCorner(circle.x - direction * newAxisPosition, rect.x, rect.aABB.halfWidth) / 2;
									v.y = -v.y;
								} else {
									v.x = getCorner(circle.x, rect.x - direction * newAxisPosition, rect.aABB.halfWidth) / 2;
								}
								v.normalize();
								return newAxisPosition;
							}
						} else if (axis === 'y') {
							if (circle.x >= rect.aABB.left && circle.x <= rect.aABB.right) {
								return rect.aABB.halfHeight + circle.radius;
							} else {
								v.x = getCorner(circle.x, rect.x, rect.aABB.halfWidth);
								newAxisPosition = rect.aABB.halfHeight + getMovementDistance(v.x, circle.radius);
								if(moving === circle){
									v.x = -v.x;
									v.y = -getCorner(circle.y - direction * newAxisPosition, rect.y, rect.aABB.halfWidth) / 2;
								} else {
									v.y = getCorner(circle.y, rect.y - direction * newAxisPosition, rect.aABB.halfWidth) / 2;
								}
								v.normalize();
								return newAxisPosition;
							}
						}
					},
					getOffsetForCircles = function(axis, thisShape, thatShape){
						if (axis === 'x') {
							return getMovementDistance(thisShape.y - thatShape.y, thisShape.radius + thatShape.radius);
						} else if (axis === 'y') {
							return getMovementDistance(thisShape.x - thatShape.x, thisShape.radius + thatShape.radius);
						}
					};

					return function(axis, direction, thisShape, thatShape){
						//Returns the value of the axis at which point thisShape collides with thatShape
						
						if (thisShape.type == 'rectangle') {
							if(thatShape.type == 'rectangle'){
								returnInfo.position = thatShape[axis] - direction * getOffsetForAABB(axis, thisShape.getAABB(), thatShape.getAABB());
								v.x = 0;
								v.y = 0;
								v[axis] = direction;
								return returnInfo;
							} else if (thatShape.type == 'circle'){
								v.x = 0;
								v.y = 0;
								v[axis] = direction;
								returnInfo.position = thatShape[axis] - direction * getOffsetForCircleVsAABB(axis, thatShape, thisShape, thisShape, direction);
								return returnInfo;
							}
						} else if (thisShape.type == 'circle') {
							if(thatShape.type == 'rectangle'){
								v.x = 0;
								v.y = 0;
								v[axis] = direction;
								returnInfo.position = thatShape[axis] - direction * getOffsetForCircleVsAABB(axis, thisShape, thatShape, thisShape, direction);
								return returnInfo;
							} else if (thatShape.type == 'circle'){
								returnInfo.position = thatShape[axis] - direction * getOffsetForCircles(axis, thisShape, thatShape);
								v.x = thatShape.x - thisShape.x;
								v.y = thatShape.y - thisShape.y;
								v[axis] = thatShape[axis] - returnInfo.position; 
								v.normalize();
								return returnInfo;
							}
						}
					};
				})();
				
				return function (prevShape, currentShape, axis, potentialCollidingShapes, collisionData) {
					var initialPoint = prevShape[axis];
					var goalPoint = currentShape[axis];
					var translatedShape = prevShape;
					var direction = (initialPoint < goalPoint) ? 1 : -1;
					var position = goalPoint;
					var collisionInfo = null;
					var finalPosition = goalPoint;
					
					if (initialPoint != goalPoint) {
						if(axis === 'x') {
							translatedShape.moveX(goalPoint);
						} else if (axis === 'y') {
							translatedShape.moveY(goalPoint);
						}
						
						for (var i = 0; i < potentialCollidingShapes.length; i++) {
							position = goalPoint;
							if(AABBCollision(translatedShape.getAABB(), potentialCollidingShapes[i].getAABB())) { //TML - Could potentially shove this back into the rectangle shape check, but I'll leave it here.
								if (shapeCollision(translatedShape, potentialCollidingShapes[i])) {
									collisionInfo = findAxisCollisionPosition(axis, direction, translatedShape, potentialCollidingShapes[i]);
									position = collisionInfo.position;
									
									if (direction > 0) {
										if (position < finalPosition) {
											if (position < initialPoint){ // Reality check: I think this is necessary due to floating point inaccuracies. - DDD
												position = initialPoint;
											}
											finalPosition = position;
											storeCollisionData(collisionData, direction, finalPosition, initialPoint, currentShape, potentialCollidingShapes[i], collisionInfo.contactVector);
										}
									} else {
										if (position > finalPosition) {
											if (position > initialPoint){ // Reality check: I think this is necessary due to floating point inaccuracies. - DDD
												position = initialPoint;
											}
											finalPosition = position;
											storeCollisionData(collisionData, direction, finalPosition, initialPoint, currentShape, potentialCollidingShapes[i], collisionInfo.contactVector);
										}
									}
								}
							}
						}
					}
					return collisionData;
				};
			})(),
			
			checkSoftCollisions: function (resp)	{
				var x = 0,
				liveEntities = this.getWorldEntities(),
				entity = null,
				handler = function(collision){
					entity.triggerEvent('hit-by-' + collision.type, collision);
				};

				for(x = 0; x < this.softEntitiesLive.length; x++){
					entity = this.softEntitiesLive[x];
					this.checkEntityForSoftCollisions(entity, liveEntities, handler);
				}
			},
			
			checkEntityForSoftCollisions: function(ent, entitiesByTypeLive, callback){
				var otherEntity = undefined,
				message = triggerMessage,
				i   = 0,
				j	= 0,
				k	= 0,
				y   = 0,
				z   = 0,
				checkAABBCollision = AABBCollision,
				softCollisions = null,
				otherEntities  = null,
				otherCollisionType = null,
				shapes = null,
				otherShapes = null,
				collisionFound = false;

				message.x = 0;
				message.y = 0;

				for (i = 0; i < ent.collisionTypes.length; i++){
					softCollisions = ent.softCollisions[ent.collisionTypes[i]];
					for (y = 0; y < softCollisions.length; y++){
						otherCollisionType = softCollisions[y];
						otherEntities = entitiesByTypeLive[otherCollisionType]; 
						if(otherEntities){
							for(z = 0; z < otherEntities.length; z++){
								otherEntity = otherEntities[z];
								if((otherEntity !== ent) && (checkAABBCollision(ent.getAABB(ent.collisionTypes[i]), otherEntity.getAABB(otherCollisionType)))) {
									collisionFound = false;
									shapes = ent.getShapes(ent.collisionTypes[i]);
									otherShapes = otherEntity.getShapes(otherCollisionType);
									for (j = 0; j < shapes.length; j++)
									{
										for (k = 0; k < otherShapes.length; k++)
										{
											if (shapeCollision(shapes[j], otherShapes[k])) {
												//TML - We're only reporting the first shape we hit even though there may be multiple that we could be hitting.
												message.entity = otherEntity;
												message.type   = otherCollisionType;
												message.myType = ent.collisionTypes[i];
												message.shape  = otherShapes[k];
												message.hitType= 'soft';
												
												callback(message);
												
												collisionFound = true;
												break;
											}
										}
										if (collisionFound) {
											break;
										}
									}
								}
							}
						}
					}
				}
			},
			
			destroy: function(){
				this.allEntities.length = 0;
				this.allEntitiesLive.length = 0;
				this.softEntitiesLive.length = 0;
				this.solidEntitiesLive.length = 0;
				for (var i in this.entitiesByType){
					this.entitiesByType[i].length = 0;
				}
			}
		},
		
		publicMethods: {
			getWorldEntities: function(){
				return this.entitiesByTypeLive;
			},
			
			getWorldTerrain: function(){
				return this.terrain;
			},
			
			getEntityCollisions: function(entity, entities){
				var collisions = [];
				
				this.checkEntityForSoftCollisions(entity, entities || this.entitiesByTypeLive, function(collision){
					var i = '',
					save  = {};
					for(i in collision){
						save[i] = collision[i];
					}
					collisions.push(save);
				});
				
				return collisions;
			}
		}
	});
})();

/*--------------------------------------------------
 *   handler-controller - ../engine/components/handler-controller.js
 */
/**
# COMPONENT **handler-controller**
This component handles capturing and relaying input information to the entities that care about it. It takes mouse, keyboard, and custom input messages. State messages are sent immediately to the entities when they are received, the 'handler-controller' message is sent to demarcate ticks.

## Dependencies
- **Needs a 'tick' or 'check-inputs' call** - This component doesn't need a specific component, but it does require a 'tick' or 'check-inputs' call to function. It's usually used as a component of an action-layer.

## Messages

### Listens for:
- **child-entity-added** - Called when a new entity has been added and should be considered for addition to the handler. If the entity has a 'handle-controller' message id it's added to the list of entities. Once an entity is added to the handler-controller 'controller-load' is called on the entity. If an entity has a control map that includes non-keyboard inputs, we add listeners for those and update functions to alert the entity when they happen. 
  - @param entity (Object) - The entity that is being considered for addition to the handler.
- **tick** - Sends a 'handle-controller' message to all the entities the component is handling. If an entity does not handle the message, it's removed it from the entity list.
  - @param resp (object) - An object containing delta which is the time passed since the last tick. 
- **keydown** - Sends a message to the handled entities 'key:' + the key id + ":down". 
  - @param event (DOM event) - The DOM event that triggered the keydown event. 
 - **keyup** - Sends a message to the handled entities 'key:' + the key id + ":up".
  - @param event (DOM event) - The DOM event that triggered the keyup event. 

### Child Broadcasts:
- **handle-controller** - Sent to entities on each tick to handle whatever they need to regarding controls.
  - @param resp (object) - An object containing a delta variable that is the time that's passed since the last tick.
- **controller-load** - Sent to entities when they are added to the handler-controller.
- **key:keyid:up** - Message sent to an entity when a key goes from down to up.
  - @param event (DOM event) - The DOM event that triggered the keyup event. 
- **key:keyid:down** - Message sent to an entity when a key goes from up to down.
  - @param event (DOM event) - The DOM event that triggered the keydown event. 
- **custom:up and custom:down messages** - Messages created when an entity has a control map with non-keyboard input. The handler creates these message when it adds the entity and then fires them on the entity when the input is received.
  - @param value (object) - A message object sent by the custom message.

## JSON Definition
    {
      "type": "handler-controller",
    }
*/

(function(){
	var relayUpDown = function(event, self){
		return function(value){
			if (value.released){
				event += ':up';
			} else if (value.pressed){
				event += ':down';
			}
			for (var x = 0; x < self.entities.length; x++) {
				self.entities[x].trigger(event, value);
			}
		}; 
	},
	relay = function(event, self){
		return function(value){
			for (var x = 0; x < self.entities.length; x++) {
				self.entities[x].trigger(event, value);
			}
		}; 
	},
	keyMap = { //Note: if this list is changed, be sure to update https://git.pbs.org/html5-platformer-engine/pages/Handler-Controller-Key-List
		kc0:   'unknown',         
		kc8:   'backspace',
		kc9:   'tab',
		kc12:  'numpad-5-shift',
		kc13:  'enter',
		kc16:  'shift',
		kc17:  'ctrl',
		kc18:  'alt',
		kc19:  'pause',
		kc20:  'caps-lock',
		kc27:  'esc',
		kc32:  'space',
		kc33:  'page-up',
		kc34:  'page-down',
		kc35:  'end',
		kc36:  'home',
		kc37:  'left-arrow',
		kc38:  'up-arrow',
		kc39:  'right-arrow',
		kc40:  'down-arrow',
		kc42:  'numpad-multiply',
		kc43:  'numpad-add',
		kc44:  'print-screen',
		kc45:  'insert',
		kc46:  'delete',
		kc47:  'numpad-division',
		kc48:  '0',
		kc49:  '1',
		kc50:  '2',
		kc51:  '3',
		kc52:  '4',
		kc53:  '5',
		kc54:  '6',
		kc55:  '7',
		kc56:  '8',
		kc57:  '9',
		kc59:  'semicolon',
		kc61:  'equals',
		kc65:  'a',
		kc66:  'b',
		kc67:  'c',
		kc68:  'd',
		kc69:  'e',
		kc70:  'f',
		kc71:  'g',
		kc72:  'h',
		kc73:  'i',
		kc74:  'j',
		kc75:  'k',
		kc76:  'l',
		kc77:  'm',
		kc78:  'n',
		kc79:  'o',
		kc80:  'p',
		kc81:  'q',
		kc82:  'r',
		kc83:  's',
		kc84:  't',
		kc85:  'u',
		kc86:  'v',
		kc87:  'w',
		kc88:  'x',
		kc89:  'y',
		kc90:  'z',
		kc91:  'left-windows-start',
		kc92:  'right-windows-start',
		kc93:  'windows-menu',
		kc96:  'back-quote',
		kc106: 'numpad-multiply',
		kc107: 'numpad-add',
		kc109: 'numpad-minus',
		kc110: 'numpad-period',
		kc111: 'numpad-division',
		kc112: 'f1',
		kc113: 'f2',
		kc114: 'f3',
		kc115: 'f4',
		kc116: 'f5',
		kc117: 'f6',
		kc118: 'f7',
		kc119: 'f8',
		kc120: 'f9',
		kc121: 'f10',
		kc122: 'f11',
		kc123: 'f12',
		kc144: 'num-lock',
		kc145: 'scroll-lock',
		kc186: 'semicolon',
		kc187: 'equals',
		kc188: 'comma',
		kc189: 'hyphen',
		kc190: 'period',
		kc191: 'forward-slash',
		kc192: 'back-quote',
		kc219: 'open-bracket',
		kc220: 'back-slash',
		kc221: 'close-bracket',
		kc222: 'quote'
	};

	return platformer.createComponentClass({
		id: 'handler-controller',
		constructor: function(definition){
			this.entities = [];
			this.timeElapsed = {
				name: 'Controller',
				time: 0
			};
		},
		events: {
			"keydown": function(event){
				for (var x = 0; x < this.entities.length; x++){
					this.entities[x].trigger('key:' + (keyMap['kc' + event.keyCode] || ('key-code-' + event.keyCode)) + ':down', event);
				}
			},
			"keyup": function(event){
				for (var x = 0; x < this.entities.length; x++){
					this.entities[x].trigger('key:' + (keyMap['kc' + event.keyCode] || ('key-code-' + event.keyCode)) + ':up', event);
				}
			},
			"tick": function(resp){
				var time    = new Date().getTime();
		
				for (var x = this.entities.length - 1; x > -1; x--){
					if(!this.entities[x].trigger('handle-controller', resp)) {
						this.entities.splice(x, 1);
					}
				}
				
				this.timeElapsed.time = new Date().getTime() - time;
				platformer.game.currentScene.trigger('time-elapsed', this.timeElapsed);
			},
			"child-entity-added": function(entity){
				this.updateEntity(entity);
			},
			"child-entity-updated": function(entity){
				this.updateEntity(entity);
			}
		},
		methods: {
			updateEntity: function(entity){
				var messageIds = entity.getMessageIds(),
				alreadyHere = false; 
				
				for (var x = 0; x < messageIds.length; x++){
					if (messageIds[x] == 'handle-controller'){
						for (var j = 0; j < this.entities.length; j++){
							if(this.entities[j] == entity){
								alreadyHere = true;
								break;
							}
						}
						
						if(!alreadyHere){
							// Check for custom input messages that should be relayed from scene.
							if(entity.controlMap){
								for(var y in entity.controlMap){
									if((y.indexOf('key:') < 0) && (y.indexOf('mouse:') < 0)){
										if(!this[y]){
											this.addEventListener(y,           relayUpDown(y,     this));
											this.addEventListener(y + ':up',   relay(y + ':up',   this));
											this.addEventListener(y + ':down', relay(y + ':down', this));
										}
									}
								}
							}
							
							this.entities.push(entity);
							entity.trigger('controller-load');
						}
						break;
					}
				}
			},
			destroy: function(){
				this.entities.length = 0;
			}
		}
	});
})();


/*--------------------------------------------------
 *   level-builder - ../engine/components/level-builder.js
 */
/**
# COMPONENT **level-builder**
This component works in tandem with [[tiled-loader]] by taking several Tiled maps and combining them before `tiled-loader` processes them. Tiled maps must use the same tilesets for this to function correctly.

Note: Set "manuallyLoad" to `true` in the `tiled-loader` component JSON definition so that it will wait for this component's "load-level" call.

## Dependencies
- [[tiled-loader]] - Feeds information into `tiled-loader` to load a combined map.

## Messages

### Listens for:
- **scene-loaded** - On receiving this message, `level-builder` uses its JSON definition to create a combined map.
  - @param message (object) - Optional. Data passed into this scene from the last scene.

### Local Broadcasts:
- **load-level** - Once the combined level is ready, this message is triggered so `tiled-loader` will handle it.
  - @param message.persistentData (obj) - Data received from the initiating "scene-loaded" call is passed on here.
  - @param message.level (obj) - This is a JSON structure representing the combined map.

## JSON Definition
    {
      "type": "level-builder"
      
      "levelPieces": {
      // Optional. This is a list of key/value pairs listing the pieces the level template (below) will use to compose a larger map. If not specified, labels map directly to level names.
        
        "start"  : "start-map",
        "end" 	 : "end-map",
        // Labels include map sections by their map names
        
        "forest" : ["forest-1", "forest-2", "forest-3"]
        // If one section should be chosen from many sections, maps can be listed in an array.
      },

      "levelTemplate": [ ["start", "forest"], ["forest", "end"] ]
      // Required. This is a 2d array, laying out the map structure using the labels above to compose the larger map.

      "useUniques": true
      // Optional. If set, no single map is used twice in the creation of the combined map.
    }
*/
(function(){
	var mergeData = function(levelData, levelMergeAxisLength, segmentData, segmentMergeAxisLength, nonMergeAxisLength, mergeAxis){
		var x = 0;
		var y = 0;
		var combined = levelData.slice();
		
		if (mergeAxis == 'horizontal')
		{
			for (y = nonMergeAxisLength - 1; y >= 0; y--) 
			{
				for ( x = y * segmentMergeAxisLength, z = 0; x < (y + 1) * segmentMergeAxisLength; x++, z++)
				{
					combined.splice(((y + 1) * levelMergeAxisLength) + z, 0, segmentData[x]);
				}
			}
			return combined;
		} else if (mergeAxis == 'vertical') {
			return levelData.concat(segmentData);
		}
	},
	mergeObjects  = function(obj1s, obj2s, mergeAxisLength, mergeAxis){
		var i 	 = 0;
		var list = obj1s.slice();
		var obj  = null;
		
		for (; i < obj2s.length; i++){
			obj = {};
			for (j in obj2s[i]){
				obj[j] = obj2s[i][j];
			}
			if (mergeAxis == 'horizontal') {
				obj.x += mergeAxisLength;
			} else if (mergeAxis == 'vertical') {
				obj.y += mergeAxisLength;
			}
			list.push(obj);
		}
		return list;
	},
	mergeSegment  = function(level, segment, mergeAxis){
		var i = 0;
		var j = 0;

		if (!level.tilewidth && !level.tileheight) {
			//set level tile size data if it's not already set.
			level.tilewidth  = segment.tilewidth;
			level.tileheight = segment.tileheight;
		} else if (level.tilewidth != segment.tilewidth || level.tileheight != segment.tileheight) {
			console.warn('Tiled-Loader: Your map has segments with different tile sizes. All tile sizes must match. Segment: ' + segment);
		}
		
		if (mergeAxis == 'horizontal') {
			if (level.height == 0)
			{
				level.height = segment.height;
			} else if (level.height != segment.height) {
				console.warn('Tiled-Loader: You are trying to merge segments with different heights. All segments need to have the same height. Level: ' + level + ' Segment: ' + segment);
			}
		} else if (mergeAxis == 'vertical') {
			if (level.width == 0)
			{
				level.width = segment.width;
			} else if (level.width != segment.width) {
				console.warn('Tiled-Loader: You are trying to merge segments with different widths. All segments need to have the same width. Level: ' + level + ' Segment: ' + segment);
			}
		}
		
		for (; i < segment.layers.length; i++){
			if (!level.layers[i]){
				//if the level doesn't have a layer yet, we're creating it and then copying it from the segment.
				level.layers[i] = {};
				for (j in segment.layers[i]){
					level.layers[i][j] = segment.layers[i][j];
				}
			} else {
				if (level.layers[i].type == segment.layers[i].type)
				{
					//if the level does have a layer, we're appending the new data to it.
					if(level.layers[i].data && segment.layers[i].data) {
						if (mergeAxis == 'horizontal') {
							level.layers[i].data = mergeData(level.layers[i].data, level.width, segment.layers[i].data, segment.width, level.height, mergeAxis);
							level.layers[i].width += segment.width;
						} else if (mergeAxis == 'vertical') {
							level.layers[i].data = mergeData(level.layers[i].data, level.height, segment.layers[i].data, segment.height, level.width, mergeAxis);
							level.layers[i].height += segment.height;
						}
					} else if (level.layers[i].objects && segment.layers[i].objects) {
						if (mergeAxis == 'horizontal') {
							level.layers[i].objects = mergeObjects(level.layers[i].objects, segment.layers[i].objects, level.width * level.tilewidth, mergeAxis);
						} else if (mergeAxis == 'vertical') {
							level.layers[i].objects = mergeObjects(level.layers[i].objects, segment.layers[i].objects, level.height * level.tileheight, mergeAxis);
						}
					}
				} else {
					console.warn('Tiled-Loader: The layers in your level segments do not match. Level: ' + level + ' Segment: ' + segment);
				}
				
			}
		}
		
		if (mergeAxis == 'horizontal') {
			level.width += segment.width;	
		} else if (mergeAxis == 'vertical') {
			level.height += segment.height;	
		}
		
		//Go through all the STUFF in segment and copy it to the level if it's not already there.
		for(i in segment){
			if(!level[i]){
				level[i] = segment[i];
			}
		}
	},
	mergeLevels = function(levelSegments){
		var i  = 0;
		var j  = 0;
		var levelDefinitions = platformer.game.settings.levels;
		var row =   {
						height: 0,
						width:  0,
						layers: []
					};
		var level = {
						height: 0,
						width:  0,
						layers: []
					};
		var segmentsWide = levelSegments[i].length;
		
		for (; i < levelSegments.length; i++)
		{
			if (segmentsWide != levelSegments[i].length) {
				console.warn('Tiled-Loader: Your map is not square. Maps must have an equal number of segments in every row.');
			}
			row = 	{
						height: 0,
						width:  0,
						layers: []
					};
			for (j = 0; j < levelSegments[i].length; j++)
			{
				//Merge horizontally
				if(typeof levelSegments[i][j] === 'string'){
					mergeSegment(row, levelDefinitions[levelSegments[i][j]], 'horizontal');
				} else {
					mergeSegment(row, levelSegments[i][j], 'horizontal');
				}
			}
			//Then merge vertically
			mergeSegment(level, row, 'vertical');
		}
		return level;
	};

	return platformer.createComponentClass({
		id: 'level-builder',
		constructor: function(definition){
			this.levelTemplate = this.owner.levelTemplate || definition.levelTemplate;
			if((this.owner.useUniques || definition.useUniques) === false){
				this.useUniques = false;
			} else {
				this.useUniques = true;
			}
			this.levelPieces = this.owner.levelPieces || definition.levelPieces;
			this.levelMessage = {level: null, persistentData: null};
		},

		events: {// These are messages that this component listens for
			"scene-loaded": function(persistentData) {
				var templateRow = null,
				piecesToCopy = null;
				
				this.levelMessage.persistentData = persistentData;

				this.levelTemplate = persistentData.levelTemplate || this.levelTemplate;
				this.useUniques = persistentData.useUniques || this.useUniques;
				piecesToCopy = persistentData.levelPieces || this.levelPieces;
				this.levelPieces = {};
				if (piecesToCopy) {
					for (var x in piecesToCopy) {
						if (typeof piecesToCopy[x] == "string") {
							this.levelPieces[x] = piecesToCopy[x];
						} else if (piecesToCopy[x].length) {
							this.levelPieces[x] = [];
							for (var y = 0; y < piecesToCopy[x].length; y++) {
								this.levelPieces[x].push(piecesToCopy[x][y]); 
							}
						} else {
							console.warn('Level Builder: Level pieces of incorrect type: ' + piecesToCopy[x]);
						}
					}
				}

				if (this.levelTemplate) {
					if(typeof this.levelTemplate == "string") {
						this.levelMessage.level = [this.getLevelPiece(this.levelTemplate)];
					} else if (this.levelTemplate.length) {
						this.levelMessage.level = [];
						for (var x = 0; x < this.levelTemplate.length; x++){
							templateRow = this.levelTemplate[x];
							if (typeof templateRow == "string") {
								this.levelMessage.level[x] = this.getLevelPiece(templateRow);
							} else if (templateRow.length) {
								this.levelMessage.level[x] = [];
								for (var y = 0; y < templateRow.length; y++){
									this.levelMessage.level[x][y] = this.getLevelPiece(templateRow[y]);
								}
							} else {
								console.warn('Level Builder: Template row is neither a string or array. What is it?');
							}
						}
					} else {
						console.warn('Level Builder: Template is neither a string or array. What is it?');
					}
				} else {
					console.warn('Level Builder: There is no level template.');
				}
				
				if(this.levelMessage.level){
					this.levelMessage.level = mergeLevels(this.levelMessage.level);
					this.owner.triggerEvent('load-level', this.levelMessage);
				}
			}
		},
		
		methods: {// These are methods that are called by this component.
			getLevelPiece: function (type) {
				var pieces = this.levelPieces[type] || type;
				var temp = null;
				var random = 0;
				if(pieces){
					if(typeof pieces == "string"){
						if (this.useUniques) {
							temp = pieces;
							this.levelPieces[type] = null;
							return temp;
						} else {
							return pieces;
						}
					} else if (pieces.length) {
						random = Math.floor(Math.random() * pieces.length);
						if (this.useUniques) {
							return (this.levelPieces[type].splice(random, 1))[0];
						} else {
							return pieces[random];
						}
					} else {
						console.warn('Level Builder: There are no MORE level pieces of type: ' + type);
					}
					
				} else {
					console.warn('Level Builder: There are no level pieces of type: ' + type);
				}
				
				return null;
			},
			destroy: function () {
				this.levelMessage.level = null;
				this.levelMessage.persistentData = null;
				this.levelMessage = null;
			}
		},
		
		publicMethods: {
			mergeLevels: function(levels){
				return mergeLevels(levels);
			}
		}
	});
})();


/*--------------------------------------------------
 *   logic-state-machine - ../engine/components/logic-state-machine.js
 */
/**
# COMPONENT **logic-state-machine**
This component is a general purpose state-machine for an entity, taking in various message inputs to determine the entity's state and triggering messages as necessary when a certain state occurs or several state combinations are in place.

## Dependencies:
- [[handler-logic]] (on entity's parent) - This component listens for a logic tick message to maintain and update its location.

## Messages

### Listens for:
- **handle-logic** - On a `tick` logic message, the component checks sustained inputs for changes in state.
- **update-state** - Updates the entity's state according to this message's state information.
  - @param message (object) - This is an object of key/value pairs where keys are states and the values are booleans to turn on and off states.
- **logical-state** - Updates the entity's state according to this message's state information, and broadcasts any applicable messages.
  - @param message (object) - This is an object of key/value pairs where keys are states and the values are booleans to turn on and off states.
- **[input messages]** - This component listens for messages as determined by the JSON settings.

### Local Broadcasts:
- **[output messages]** - This component triggers output messages as determined by the JSON settings.

## JSON Definition
    {
      "type": "logic-state-machine",
      
      "inputs":{
      // This is a list of messages that this component should listen for to change states.
      
        "smell-toast":{
        // If the entity triggers "smell-toast", this component will change the state of the entity as follows:
        
          "smelling-food": true,
          "smelling-nothing": false
        },
        
        "go-to-store":{
          "at-store": true
        }
      },
      
      "sustained-inputs":{
      // These are messages that must be triggered every tick for the state to remain true: if not, they become false.
        "near-grover": "smelling-trash"
      },
      
      "outputs":{
      //These are messages that should be triggered when certain conditions are met. The messages are only triggered the instant the condition is met, until the conditions are no longer met and then once again met.
      
        "smelling-food":{
        // Keys map to states, and if true, the value of the key is processed. In this case, the value of the "smelling-food" key is another object of key/value pairs, giving us another layer of checks.
        
          "!smelling-trash": "time-to-eat",
          // This key is an inverse check, meaning that the "smelling-trash" state of the entity must be false to continue along this path. This time the value is a string, so the string "time-to-eat" is treated as a message to be broadcast if the entity is both "smelling-food" and not "smelling-trash".
          
          "true": "belly-rumble"
          // In some cases, a message should be triggered for a set of states, while still doing deeper state checks like above. "true" will always handle the next layer of values if the parent key was true. 
        },
        
        "smelling-trash": "feeling-sick"
        // Multiple states can be handled to multiple depths, like a list of if() statements
        
        "!smelling-nothing":{
          "!smelling-trash":{
            "!at-store": "go-to-store",
            // Note that the "go-to-store" message will change this entity's state to "at-store" according to "inputs" above, but logic-state-machine uses a cache of states when broadcasting output messages, so the next section will not be processed until the next state check.
            
            "at-store":{
              "have-money": "buy-more-food",
              "!have-money": "buy-less-food"
            }
          }
        }
      }
    }
*/
(function(){
	var changeState = function(changes, state){
		return function(value){
			var i = null;
			
			for (i in changes){
				state[i] = changes[i];
			}
		};
	},
	changeSustainedState = function(change, state){
		return function(value){
			state[change] = true;
		};
	},
	handleResult = function(title, state, last, checks, changed, self, queue){
		var i = 0,
		resolved = false,
		message = checks.message || (checks.message === 0) || (checks.message === false);
		
		if(changed){
			if(typeof checks === 'string') {
				self.trigger(checks);
				resolved = true;
			} else if (Array.isArray(checks)) {
				for (i = 0; i < checks.length; i++){
					handleResult(title, state, last, checks[i], changed, self, queue);
				}
				resolved = true;
			} else if (checks.event && (message || checks.delay)){
				if(checks.delay){
					queue.push(checks);
				} else {
					self.trigger(checks.event, checks.message);
				}
				resolved = true;
			} else if (checks['true']){
				handleResult(title, state, last, checks['true'], changed, self, queue);
			}
		}
		
		if(!resolved) {
			for (i in checks) {
				if(i !== 'true'){
					handleOutput(i, state, last, checks[i], changed, self, queue);
				}
			}
		}
	},
	handleOutput = function(title, state, last, checks, changed, self, queue){
		var c = changed, 
		value = false;
		
		if(title.charAt(0) === '!') {
			value = (state[title.substring(1)] === false);
			if ((title !== 'outputs') && (last[title.substring(1)] !== state[title.substring(1)])) {
				c = true;
			}
		} else {
			value = (state[title] === true);
			if ((title !== 'outputs') && (last[title] !== state[title])) {
				c = true;
			}
		}
		
		if(value || (title === 'outputs')){
			handleResult(title, state, last, checks, c, self, queue);
		}
	};
	
	return platformer.createComponentClass({
		id: 'logic-state-machine',
		
		constructor: function(definition){
			var i = null;
			
			this.state = this.owner.state;
			
			if(definition.inputs){
				for (i in definition.inputs){
					this.addEventListener(i, changeState(definition.inputs[i], this.state));
				}
			}

			this.sustainedState = {};
			if(definition["sustained-inputs"]){
				for (i in definition["sustained-inputs"]){
					this.addEventListener(i, changeSustainedState(definition["sustained-inputs"][i], this.sustainedState));
					this.sustainedState[definition["sustained-inputs"][i]] = false;
				}
			}

			this.snapshot = {};
			this.last = {};
			this.tempQueue = [];
			this.queueTimes = [];
			this.queue = [];
			this.outputs = definition.outputs || null;
		},

		events: {
			"handle-logic":  function(resp){
				var i = null;
				
				for (i in this.sustainedState){
					if (this.owner.state[i] !== this.sustainedState[i]) {
						this.owner.state[i] = this.sustainedState[i];
					}
					this.sustainedState[i] = false;
				}
				
				for (i = this.queue.length - 1; i > -1; i--){
					this.queueTimes[i] -= resp.delta;
					
					if(this.queueTimes[i] <= 0){
						this.owner.trigger(this.queue[i].event, this.queue[i].message);
						this.queueTimes.splice(i,1);
						this.queue.splice(i,1);
					}
				}
			},
			
			"update-state": function(state){
				var i = null;
				
				for (i in state){
					this.state[i] = state[i];
				}
			},
			
			"logical-state": function(state){
				var i = null;
				
				if (this.outputs){
					for (i in state){
						if(state[i] !== this.snapshot[i]){
							this.snapshot[i] = state[i];
						}
					}
					this.tempQueue.length = 0;
					handleOutput('outputs', this.snapshot, this.last, this.outputs, false, this.owner, this.tempQueue);
					for (i = 0; i < this.tempQueue.length; i++){
						this.queue.push(this.tempQueue[i]);
						this.queueTimes.push(this.tempQueue[i].delay);
					}
					for (i in this.snapshot){
						if(this.snapshot[i] !== this.last[i]){
							this.last[i] = this.snapshot[i];
						}
					}
				}
			}
		}		
	});
})();


/*--------------------------------------------------
 *   node - ../engine/components/node.js
 */
/**
# COMPONENT **node**
This component causes an entity to be a position on a [[node-map]]. This component should not be confused with `node-resident` which should be used on entities that move around on a node-map: `node` simply represents a non-moving location on the node-map.

## Dependencies
- [[node-map]] (on entity's parent) - This component uses the `node-map` to determine its location and navigate to other nodes.
- [[handler-logic]] (on entity's parent) - This component listens for a logic tick message to maintain and update its location.

## Messages

### Listens for:
- **handle-logic** - On a `tick` logic message, the component updates its location and triggers messages regarding its neighbors.
  - @param message.delta (Number) - This component uses the current time to determine its progress along an edge if moving from node to node on the map.
- **on-node** - Sets the entity's position to the sent node, updates its coordinates, and triggers messages regarding its neighbors if any.
  - @param node (Node) - The node that this entity should be located on.
- **leave-node** - Removes the entity from its current node if it's on one.
- **goto-node** - Begins moving the entity along edges to get to sent node.
  - @param node (Node) - The node that this entity should move to.
- **follow** - Causes this entity to follow another entity. The leading entity must also have a `node-resident` component and exist in the node-map.
  - @param entity (Entity) - The entity that this entity should follow.

### Local Broadcasts:
- **next-to-[entity-type]** - This message is triggered when the entity is placed on a node. It will trigger on all neighboring entities, as well as on itself on behalf of neighboring entities.
  - @param entity (Entity) - The entity that is next to the listening entity.
- **with-[entity-type]** - This message is triggered when the entity is placed on a node. It will trigger on all entities residing on the same node, as well as on itself on behalf of all resident entities.
  - @param entity (Entity) - The entity that is with the listening entity.
- **left-node** - Triggered when the entity leaves a node.
  - @param node (Node) - The node that the entity just left.
- **[Messages specified in definition]** - When the entity is placed on a node, it checks out the type of node and triggers a message on the entity if an event is listed for the current node type.

## States
- **on-node** - This state is true when the entity is on a node.
- **moving** - This state is true when the entity is moving from one node to another.
- **going-[direction]** - This state is true when the entity is moving (or has just moved) in a direction (determined by the node-map) from one node to another.
  
## JSON Definition
    {
      "type": "node-resident",
      
      "nodeId": "city-hall",
      // Optional. The id of the node that this entity should start on. Uses the entity's nodeId property if not set here.
      
      "nodes": ['path','sidewalk','road'],
      // Optional. This is a list of node types that this entity can reside on. If not set, entity can reside on any type of node.
      
      "shares": ['friends','neighbors','city-council-members'],
      // Optional. This is a list of entities that this entity can reside with on the same node. If not set, this entity cannot reside with any entities on the same node.
      
      "speed": 5,
      // Optional. Sets the speed with which the entity moves along an edge to an adjacent node. Default is 0 (instantaneous movement).
      
      "updateOrientation": true
      // Optional. Determines whether the entity's orientation is updated by movement across the node-map. Default is false.
    }
*/
(function(){
	return platformer.createComponentClass({
		
		id: 'node',
		
		constructor: function(definition){
			this.nodeId = definition.nodeId || this.owner.nodeId || this.owner.id || '' + Math.random();
			
			if((typeof this.nodeId !== 'string') && (this.nodeId.length)){
				this.nodeId = definition.nodeId.join('|');
			}
			
			this.owner.nodeId = this.nodeId;
			
			this.owner.isNode = true;
			this.map = this.owner.map = this.owner.map || null;
			this.contains = this.owner.contains = [];
			this.edgesContain = this.owner.edgesContain = [];
			this.owner.x = this.owner.x || 0;
			this.owner.y = this.owner.y || 0;
			this.owner.z = this.owner.z || 0;
			
			this.neighbors = this.owner.neighbors = definition.neighbors || this.owner.neighbors || {};
		},
		
		events: {
			"add-neighbors": function(neighbors){
				var i     = 0,
				direction = null;
				
				for(direction in neighbors){
					this.neighbors[direction] = neighbors[direction];
				}
				
				for(; i < this.contains.length; i++){
					this.contains[i].triggerEvent('set-directions');
				}
			},
			"remove-neighbor": function(nodeOrNodeId){
				var i = null,
				id    = nodeOrNodeId;
				
				if(typeof id !== 'string'){
					id = id.nodeId;
				}

				for(i in this.neighbors){
					if(typeof this.neighbors[i] === 'string'){
						if(this.neighbors[i] === id){
							delete this.neighbors[i];
							break;
						}
					} else {
						if(this.neighbors[i].nodeId === id){
							delete this.neighbors[i];
							break;
						}
					}
				}
			}
		},
		
		publicMethods:{
			getNode: function(desc){
				var neighbor = null;
				
				//map check
				if(!this.map && this.owner.map){
					this.map = this.owner.map;
				}
				
				if(this.neighbors[desc]){
					neighbor = this.neighbors[desc];
					if(neighbor.isNode){
						return neighbor;
					} else if(typeof neighbor === 'string'){
						neighbor = this.map.getNode(neighbor);
						if(neighbor){
							this.neighbors[desc] = neighbor;
							return neighbor;
						}
					} else if (neighbor.length) {
						neighbor = this.map.getNode(neighbor.join('|'));
						if(neighbor){
							this.neighbors[desc] = neighbor;
							return neighbor;
						}
					}
					return null;
				} else {
					return null;
				}
			},
			addToNode: function(entity){
				for(var i = 0; i < this.contains.length; i++){
					if(this.contains[i] === entity){
						return false;
					}
				}
				this.contains.push(entity);
				return entity;
			},
			removeFromNode: function(entity){
				for(var i = 0; i < this.contains.length; i++){
					if(this.contains[i] === entity){
						return this.contains.splice(i,1)[0];
					}
				}
				return false;
			},
			addToEdge: function(entity){
				for(var i = 0; i < this.edgesContain.length; i++){
					if(this.edgesContain[i] === entity){
						return false;
					}
				}
				this.edgesContain.push(entity);
				return entity;
			},
			removeFromEdge: function(entity){
				for(var i = 0; i < this.edgesContain.length; i++){
					if(this.edgesContain[i] === entity){
						return this.edgesContain.splice(i,1)[0];
					}
				}
				return false;
			}
		}
	});
})();


/*--------------------------------------------------
 *   node-map - ../engine/components/node-map.js
 */
/**
# COMPONENT **node-map**
This component sets up a node-map to be used by the [[node-resident]] component on this entity's child entities.

## Dependencies
- [[entity-container]] - This component expects the entity to have an `entity-container` component so it knows when `node-resident` children are added.

## Messages

### Listens for:
- **add-node** - Expects a node definition to create a node in the node-map.
  - @param definition.nodeId (string or array) - This value becomes the id of the Node. Arrays are joined using "|" to create the id string.
  - @param definition.type (string) - This determines the type of the node.
  - @param definition.x (number) - Sets the x axis position of the node.
  - @param definition.y (number) - Sets the y axis position of the node.
  - @param definition.z (number) - Sets the z axis position of the node.
  - @param definition.neighbors (object) - A list of key/value pairs where the keys are directions from the node and values are node ids. For example: {"west": "node12"}.
- **child-entity-added** - Checks the child entity for a nodeId and if found adds the child to the corresponding node.
  - @param entity (Entity) - The entity that may be placed on a node.

## JSON Definition
    {
      "type": "node-map"
      
      "map": [
      // Optional. An array of node definitions to create the node-map.
        
        {
          "nodeId": "node1",
          // A string or array that becomes the id of the Node. Arrays are joined using "|" to create the id string.
          
          "type": "path",
          // A string that determines the type of the node.
          
          "x": 0,
          // Sets the x axis position of the node.
          
          "y": 0,
          // Sets the y axis position of the node.
          
          "z": 0,
          // Sets the z axis position of the node.

          "neighbors": {
          // A list of key/value pairs where the keys are directions from the node and values are node ids.
            
            "west": "node0",
            "east": "node2"
          }
        }
      ]
    }
*/
(function(){
	// This is a basic node object, but can be replaced by entities having a `node` component if more functionality is needed.
	var Node = function(definition, map){
		if(definition.nodeId){
			if(typeof definition.nodeId === 'string'){
				this.nodeId = definition.nodeId;
			} else if (Array.isArray(definition.nodeId)) {
				this.nodeId = definition.nodeId.join('|');
			} else {
				this.nodeId = '' + Math.random();
			}
		} else {
			this.nodeId = '' + Math.random();
		}
		
		this.isNode = true;
		this.map = map;
		this.contains = [];
		this.type = definition.type || '';
		this.x = definition.x || 0;
		this.y = definition.y || 0;
		this.z = definition.z || 0;
		
		this.neighbors = definition.neighbors || {};
	},
	proto = Node.prototype;
	
	proto.getNode = function(desc){
		var neighbor = null;
		
		if(this.neighbors[desc]){
			neighbor = this.neighbors[desc];
			if(neighbor.isNode){
				return neighbor;
			} else if(typeof neighbor === 'string'){
				neighbor = this.map.getNode(neighbor);
				if(neighbor){
					this.neighbors[desc] = neighbor;
					return neighbor;
				}
			} else if (neighbor.length) {
				neighbor = this.map.getNode(neighbor.join('|'));
				if(neighbor){
					this.neighbors[desc] = neighbor;
					return neighbor;
				}
			}
			return null;
		} else {
			return null;
		}
	};

	proto.addToNode = function(entity){
		for(var i = 0; i < this.contains.length; i++){
			if(this.contains[i] === entity){
				return false;
			}
		}
		this.contains.push(entity);
		return entity;
	};
	
	proto.removeFromNode = function(entity){
		for(var i = 0; i < this.contains.length; i++){
			if(this.contains[i] === entity){
				return this.contains.splice(i,1)[0];
			}
		}
		return false;
	};
	
	return platformer.createComponentClass({
		id: 'node-map',
		
		constructor: function(definition){
			var i = 0;
			
			this.map = [];
			
			if(definition.map){
				for(; i < definition.map.length; i++){
					this["add-node"](definition.map[i]);
				}
			}
		},

		events: {
			"add-node": function(nodeDefinition){
				if(nodeDefinition.isNode){// if it's already a node, put it on the map.
					nodeDefinition.map = this;
					this.map.push(nodeDefinition);
				} else {
					this.map.push(new Node(nodeDefinition, this));
				}
			},
			"child-entity-added": function(entity){
				if(entity.isNode){        // a node
					this.owner.triggerEvent('add-node', entity);
				} else if(entity.nodeId){ // a node-resident
					entity.node = this.getNode(entity.nodeId);
					entity.trigger('on-node', entity.node);
				}
			}
		},
		
		methods: {
			getNode: function(){
				var i   = 0,
				id      = '',
				divider = '',
				args    = arguments;
				
				if(args.length === 1){
					if(typeof args[0] !== 'string'){
						if(args[0].isNode){
							return args[0];
						} else if(args[0].length){
							args = args[0];
						}
					}
				}
				
				for (i = 0; i < args.length; i++){
					id += divider + args[i];
					divider = '|';
				}
				for (i = 0; i < this.map.length; i++){
					if(this.map[i].nodeId === id){
						return this.map[i];
					}
				}
				return null;
			}
		}
	});
})();


/*--------------------------------------------------
 *   node-resident - ../engine/components/node-resident.js
 */
/**
# COMPONENT **node-resident**
This component connects an entity to its parent's [[node-map]]. It manages navigating the node-map and triggering events on the entity related to its position.

## Dependencies
- [[node-map]] (on entity's parent) - This component uses the `node-map` to determine its location and navigate to other nodes.
- [[handler-logic]] (on entity's parent) - This component listens for a logic tick message to maintain and update its location.

## Messages

### Listens for:
- **handle-logic** - On a `tick` logic message, the component updates its location and triggers messages regarding its neighbors.
  - @param message.delta (Number) - This component uses the current time to determine its progress along an edge if moving from node to node on the map.
- **on-node** - Sets the entity's position to the sent node, updates its coordinates, and triggers messages regarding its neighbors if any.
  - @param node (Node) - The node that this entity should be located on.
- **leave-node** - Removes the entity from its current node if it's on one.
- **goto-node** - Begins moving the entity along edges to get to sent node.
  - @param node (Node) - The node that this entity should move to.
- **follow** - Causes this entity to follow another entity. The leading entity must also have a `node-resident` component and exist in the node-map.
  - @param entity (Entity) - The entity that this entity should follow.

### Local Broadcasts:
- **next-to-[entity-type]** - This message is triggered when the entity is placed on a node. It will trigger on all neighboring entities, as well as on itself on behalf of neighboring entities.
  - @param entity (Entity) - The entity that is next to the listening entity.
- **with-[entity-type]** - This message is triggered when the entity is placed on a node. It will trigger on all entities residing on the same node, as well as on itself on behalf of all resident entities.
  - @param entity (Entity) - The entity that is with the listening entity.
- **left-node** - Triggered when the entity leaves a node.
  - @param node (Node) - The node that the entity just left.
- **[Messages specified in definition]** - When the entity is placed on a node, it checks out the type of node and triggers a message on the entity if an event is listed for the current node type.

## States
- **on-node** - This state is true when the entity is on a node.
- **moving** - This state is true when the entity is moving from one node to another.
- **going-[direction]** - This state is true when the entity is moving (or has just moved) in a direction (determined by the node-map) from one node to another.
  
## JSON Definition
    {
      "type": "node-resident",
      
      "nodeId": "city-hall",
      // Optional. The id of the node that this entity should start on. Uses the entity's nodeId property if not set here.
      
      "nodes": {"path": "walking", "sidewalk": "walking", "road": "driving"],
      // Optional. This is a list of node types that this entity can reside on. If not set, entity can reside on any type of node.
      
      "shares": ['friends','neighbors','city-council-members'],
      // Optional. This is a list of entities that this entity can reside with on the same node. If not set, this entity cannot reside with any entities on the same node.
      
      "speed": 5,
      // Optional. Sets the speed with which the entity moves along an edge to an adjacent node. Default is 0 (instantaneous movement).
      
      "updateOrientation": true
      // Optional. Determines whether the entity's orientation is updated by movement across the node-map. Default is false.
    }
*/
(function(){
	var createGateway = function(nodeDefinition, map, gateway){
		return function(resp){
			// ensure it's a node if one is available at this gateway
			var node = map.getNode(nodeDefinition);
			
			if(this.isPassable(node)){
				this.destinationNodes.length = 0;
				this.destinationNodes.push(node);
				
				if(this.node){
					this.onEdge(node);
				} else {
					this.distance = 0;
				}
				this.progress = 0;
				
				this.setState('going-' + gateway);
				return true;
			}
			
			return false;
		};
	},
	distance = function(origin, destination){
		var x = destination.x - origin.x,
		y = destination.y - origin.y,
		z = destination.z - origin.z;
		
		return Math.sqrt(x*x + y*y + z*z);
	},
	angle = function(origin, destination, distance){
		var x = destination.x - origin.x,
		y     = destination.y - origin.y,
		a     = 0;
		
		if(!distance){
			return a;
		}

		a = Math.acos(x/distance);
		if (y < 0){
			a = (Math.PI * 2) - a;
		}
		return a;
	},
	axisProgress = function(r, o, d, f){
		return o * (1 - r) + d * r + f;
	},
	isFriendly = function(entities, kinds){
		var x = 0,
		y     = 0,
		found = false;
		
		if(!kinds){
			return false;
		}
		
		for(; x < entities.length; x++){
			for(y = 0; y < kinds.length; y++){
				if(entities[x].type === kinds[y]){
					found = true;
				}
			}
			if(!found){
				return false;
			} else {
				found = false;
			}
		}
		
		return true;
	};
	
	return platformer.createComponentClass({
		
		id: 'node-resident',
		
		constructor: function(definition){
			var offset = definition.offset || this.owner.nodeOffset || {};
			
			this.nodeId = this.owner.nodeId = definition.nodeId || this.owner.nodeId;
			
			this.neighbors = {};
			this.friendlyNodes = definition.nodes || null;
			this.friendlyEntities = definition.shares || null;
			this.speed = definition.speed || 0;
			this.snapToNodes = definition.snapToNodes || false;
			this.updateOrientation = definition.updateOrientation || false;
			this.distance = 0;
			this.buffer   = definition.buffer || 0;
			this.progress = 0;
			this.offset = {
				x: offset.x || 0,
				y: offset.y || 0,
				z: offset.z || 0
			};
			this.destinationNodes = [];
			this.algorithm = definition.algorithm || distance;
			
			this.state = this.owner.state;
			this.currentState = '';
			
		},
		
		events: {
			"set-algorithm": function(algorithm){
				this.algorithm = algorithm || distance;
			},
			"handle-logic": function(resp){
				var i    = 0,
				ratio    = 0,
				momentum = 0,
				node     = null;
				
				if(typeof this.owner.speed === 'number'){
					this.speed = this.owner.speed;
				}

				if(this.followEntity){
					node = this.followEntity.node || this.followEntity;
//					console.log('Following (' + (node && node.isNode && (node !== this.node)) + ')', node);
					if(node && node.isNode && (node !== this.node)){
						this.lag = 0;
						this.state.moving = this.gotoNode();
						if (this.followDistance){
							momentum = this.lag;
						}
					} else {
					    this.followEntity = null;
					}
				} else {
					momentum = this.speed * resp.delta;
				}

				// if goto-node was blocked, try again.
				if(this.blocked){
					this.blocked = false;
					if(this.goingToNode){
						this.owner.triggerEvent('goto-closest-node', this.goingToNode);
					}
				}
				
				if(this.destinationNodes.length){
					this.state.moving = true;
					if(this.node){
						//console.log('Leaving ' + this.node.id);
						this.onEdge(this.destinationNodes[0]);
					} else if(!this.lastNode){
						this.owner.triggerEvent('on-node', this.destinationNodes[0]);
						this.destinationNodes.splice(0, 1);
						if(!this.destinationNodes.length){
							this.state.moving = false;
							return ;
						}
					}
					
					if(this.snapToNodes){
						for(; i < this.destinationNodes.length; i++){
							this.owner.triggerEvent('on-node', this.destinationNodes[i]);
						}
						this.destinationNodes.length = 0;
					} else {
						while(this.destinationNodes.length && momentum){
							if((this.progress + momentum) >= this.distance){
								node = this.destinationNodes[0];
								momentum -= (this.distance - this.progress);
								this.progress = 0;
								this.destinationNodes.splice(0,1);
								this.owner.triggerEvent('on-node', node);
								if(this.destinationNodes.length && momentum){
									this.onEdge(this.destinationNodes[0]);								}
							} else {
								this.progress += momentum;
								ratio = this.progress / this.distance;
								this.owner.x = axisProgress(ratio, this.lastNode.x, this.destinationNodes[0].x, this.offset.x);
								this.owner.y = axisProgress(ratio, this.lastNode.y, this.destinationNodes[0].y, this.offset.y);
								this.owner.z = axisProgress(ratio, this.lastNode.z, this.destinationNodes[0].z, this.offset.z);
								if(this.updateOrientation){
									this.owner.orientation = angle(this.lastNode, this.destinationNodes[0], this.distance);
								}
								momentum = 0;
							}
						}
					}
				} else {
					this.state.moving = false;
				}
			},
			"on-node": function(node){
				var i    = '',
				j        = 0,
				entities = null;
				
				this.owner.node = this.node = node; //TODO: not sure if this needs to be accessible outside this component.
				this.node.removeFromEdge(this.owner);
				if(this.lastNode){
					this.lastNode.removeFromEdge(this.owner);
				}
				this.node.addToNode(this.owner);
				
				this.setState('on-node');
				
				this.owner.x = this.node.x + this.offset.x;
				this.owner.y = this.node.y + this.offset.y;
				this.owner.z = this.node.z + this.offset.z;
				if(this.updateOrientation && this.node.orientation){
					this.owner.orientation = this.node.orientation;
				}
				
				//add listeners for directions
				this.owner.triggerEvent('set-directions');
				
				//trigger mapped messages for node types
				if(this.friendlyNodes && this.friendlyNodes[node.type]){
					this.owner.trigger(this.friendlyNodes[node.type], node);
				}

				//trigger "with" events
				entities = node.contains;
				for (j = 0; j < entities.length; j++){
					if(this.owner !== entities[j]){
						entities[j].triggerEvent("with-" + this.owner.type, this.owner);
						this.owner.triggerEvent("with-" + entities[j].type, entities[j]);
					}
				}
			},
			"leave-node": function(){
				if(this.node){
					this.node.removeFromNode(this.owner);
					this.owner.triggerEvent('left-node', this.node);
					this.owner.triggerEvent('remove-directions');
				}
				this.lastNode = this.node;
				this.node = null;
			},
			"goto-node": function(node){
				this.gotoNode(node);
			},
			"follow": function(entityOrNode){
				if(entityOrNode.entity){
					this.followDistance = entityOrNode.distance;
					this.followEntity = entityOrNode.entity;
				} else {
					this.followDistance = 0;
					this.followEntity = entityOrNode;
				}
			},
			"goto-closest-node": (function(){
				var checkList = function(here, list){
					var i = 0;
					
					for (; i < list.length; i++){
						if(list[i] === here){
							return true;
						}
					}
					
					return false;
				},
				checkType = function(here, type){
					return (here.type === type);
				},
				checkObjectType = function(here, node){
					return (here.type === node.type);
				};
				
				return function(nodesOrNodeType){
					var travResp = null,
					depth        = 20, //arbitrary limit
					origin       = this.node || this.lastNode,
					test         = null,
					steps        = nodesOrNodeType.steps || 0;

					this.goingToNode = nodesOrNodeType;
					
					if(typeof nodesOrNodeType === 'string'){
						test = checkType;
					} else if(typeof nodesOrNodeType.type === 'string'){
						test = checkObjectType;
					} else {
						test = checkList;
					}
					
					if(origin && nodesOrNodeType && !test(origin, nodesOrNodeType)){
						travResp = this.traverseNode({
							depth:        depth,
							origin:       origin,
							position:     origin,
							test:         test,
							destination:  nodesOrNodeType,
							nodes:        [],
							shortestPath: Infinity,
							distance:     0,
							found:        false,
							algorithm:    this.algorithm,
							blocked:      false
						});
						
						travResp.distance -= this.progress;
						
						if(travResp.found){
							//TODO: should probably set this up apart from this containing function
							if(this.followEntity){
								if(!this.followDistance){
									return this.setPath(travResp, steps);
								} else {
									if((travResp.distance + (this.followEntity.progress || 0)) > this.followDistance){
										this.lag = travResp.distance + (this.followEntity.progress || 0) - this.followDistance;
										return this.setPath(travResp, steps);
									} else {
										this.lag = 0;
									}
								}
							} else {
								return this.setPath(travResp, steps);
							}
						} else if(travResp.blocked){
							this.blocked = true;
							return false;
						}
					}
					
					return false;
				};
			})(),
			"set-directions": function(){
				var i    = '',
				j        = 0,
				entities = null,
				node     = this.node,
				nextNode = null;
				
				this.owner.triggerEvent('remove-directions');
				
				for (i in node.neighbors){
					this.neighbors[i] = createGateway(node.neighbors[i], node.map, i);
					this.addEventListener(i, this.neighbors[i]);
					
					//trigger "next-to" events
					nextNode = node.map.getNode(node.neighbors[i]);
					if(nextNode){
						entities = nextNode.contains;
						for (j = 0; j < entities.length; j++){
							entities[j].triggerEvent("next-to-" + this.owner.type, this.owner);
							this.owner.triggerEvent("next-to-" + entities[j].type, entities[j]);
						}
					}
				}
			},
			"remove-directions": function(){
				for (var i in this.neighbors){
					this.removeEventListener(i, this.neighbors[i]);
					delete this.neighbors[i];
				}
			}
		},
		
		methods:{
			gotoNode: (function(){
				var test = function(here, there){
					return (here === there);
				};
				
				return function(node){
					var travResp = null,
					depth = 20, //arbitrary limit
					origin = this.node || this.lastNode;
					
					if(!node && this.followEntity){
						node = this.followEntity.node || this.followEntity.lastNode || this.followEntity;
					}
					
					if(origin && node && (this.node !== node)){
						travResp = this.traverseNode({
							depth:        depth,
							origin:       origin,
							position:     origin,
							test:         test,
							destination:  node,
							nodes:        [],
							shortestPath: Infinity,
							distance:     0,
							found:        false,
							algorithm:    this.algorithm,
							blocked:      false
						});
						
						travResp.distance -= this.progress;
						
						if(travResp.found){
							//TODO: should probably set this up apart from this containing function
							if(this.followEntity){
								if(!this.followDistance){
									return this.setPath(travResp);
								} else {
									if((travResp.distance + (this.followEntity.progress || 0)) > this.followDistance){
										this.lag = travResp.distance + (this.followEntity.progress || 0) - this.followDistance;
										return this.setPath(travResp);
									} else {
										this.lag = 0;
									}
								}
							} else {
								return this.setPath(travResp);
							}
						} else if(travResp.blocked){
							this.blocked = true;
							return false;
						}
					}
					
					return false;
				};
			})(),
			
			isPassable: function(node){
				/*if(log){
					if(!node){
						console.log('No node.'); 
					} else if(this.node === node) {
						console.log(node.id + ': Same as current node.');
					} else if((this.friendlyNodes && (typeof this.friendlyNodes[node.type] === 'undefined'))){
						console.log(node.id + ': Not a friendly node type (' + node.type + ').');
					} else if ((node.contains.length && !isFriendly(node.contains, this.friendlyEntities))){
						console.log(node.id + ': Blocked by Entity', node.contains);
					}
					return node && (this.node !== node) && (!this.friendlyNodes || (typeof this.friendlyNodes[node.type] !== 'undefined')) && (!node.contains.length || isFriendly(node.contains, this.friendlyEntities));
				}*/
				return node && (this.node !== node) && (!this.friendlyNodes || (typeof this.friendlyNodes[node.type] !== 'undefined')) && (!node.contains.length || isFriendly(node.contains, this.friendlyEntities));
			},
			traverseNode: function(record){
				//TODO: may want to make this use A*. Currently node traversal order is arbitrary and essentially searches entire graph, but does clip out paths that are too long.
				
				var i     = 1,
				j         = '',
				map       = record.position.map,
				neighbors = null,
				node      = null,
				nodeList  = null,
				resp      = null,
				algorithm = record.algorithm || distance,
				savedResp = {
					shortestPath: Infinity,
					found: false,
					blocked: false
				},
				blocked   = true,
				hasNeighbor = false;

				if((record.depth === 0) || (record.distance > record.shortestPath)){
					// if we've reached our search depth or are following a path longer than our recorded successful distance, bail
					return record;
				} else if(record.test(record.position, record.destination)){
					// if we've reached our destination, set shortest path information and bail.
					record.found = true;
					record.shortestPath = record.distance;
					return record;
				} else {
					//Make sure we do not trace an infinite node loop.
					nodeList = record.nodes;
					for(; i < nodeList.length - 1; i++){
						if(nodeList[i] === record.position){
							return record;
						}
					}
						
					neighbors = record.position.neighbors;
					for (j in neighbors){
						node = map.getNode(neighbors[j]);
						hasNeighbor = true;
						if(this.isPassable(node)){
							nodeList = record.nodes.slice();
							nodeList.push(node);
							resp = this.traverseNode({
								depth:        record.depth - 1,
								origin:       record.origin,
								position:     node,
								destination:  record.destination,
								test:         record.test,
								algorithm:    algorithm,
								nodes:        nodeList,
								shortestPath: record.shortestPath,
								distance:     record.distance + algorithm(record.position, node),
								gateway:      record.gateway || j,
								found:        false,
								blocked:      false
							});
							if(resp.found && (savedResp.shortestPath > resp.shortestPath)){
								savedResp = resp;
							}
							blocked = false;
						}
					}
					savedResp.blocked = (hasNeighbor && blocked);
					return savedResp;
				}
			},
			setPath: function(resp, steps){
				if(resp.nodes[0] === this.node){
					resp.nodes.splice(0,1);
				}
				this.destinationNodes = resp.nodes;
				if(steps){
					this.destinationNodes.length = Math.min(steps, this.destinationNodes.length);
				}
			},
			setState: function(state){
				if(state === 'on-node'){
					this.state['on-node'] = true;
				} else {
					this.state['on-node'] = false;
					if(this.currentState){
						this.state[this.currentState] = false;
					}
					this.currentState = state;
					this.state[state] = true;
				}
			},
			onEdge: function(toNode){
				this.distance = distance(this.node, toNode);
				if(this.updateOrientation){
					this.owner.orientation = angle(this.node, toNode, this.distance);
				}
				this.node.addToEdge(this.owner);
				toNode.addToEdge(this.owner);
				this.owner.triggerEvent('leave-node');
			}
		}
	});
})();


/*--------------------------------------------------
 *   tiled-loader - ../engine/components/tiled-loader.js
 */
/**
# COMPONENT **tiled-loader**
This component is attached to a top-level entity (loaded by the [[Scene]]) and, once its peer components are loaded, ingests a JSON file exported from the [Tiled map editor] [link1] and creates the tile maps and entities. Once it has finished loading the map, it removes itself from the list of components on the entity.

## Dependencies:
- Component [[entity-container]] (on entity's parent) - This component uses `entity.addEntity()` on the entity, provided by `entity-container`.
- Entity **collision-layer** - Used to create map entities corresponding with Tiled collision layers.
- Entity **render-layer** - Used to create map entities corresponding with Tiled render layers.
- Entity **tile-layer** - Used to create map entities corresponding with Tiled collision and render layers.

## Messages

### Listens for:
- **scene-loaded** - On receiving this message, the component commences loading the Tiled map JSON definition. Once finished, it removes itself from the entity's list of components.
- **load-level** - If `manuallyLoad` is set in the JSON definition, the component will wait for this message before loading the Tiled map JSON definition.
  - @param message.level (string or object) - Required. The level to load.
  - @param message.persistentData (object) - Optional. Information passed from the last scene.

### Local Broadcasts:
- **world-loaded** - Once finished loading the map, this message is triggered on the entity to notify other components of completion.
  - @param message.width (number) - The width of the world in world units.
  - @param message.height (number) - The height of the world in world units.
  - @param message.camera ([[Entity]]) - If a camera property is found on one of the loaded entities, this property will point to the entity on load that a world camera should focus on.

## JSON Definition:
    {
      "type": "tiled-loader",
      
      "level": "level-4",
      // Required. Specifies the JSON level to load.
      
      "unitsPerPixel": 10,
      // Optional. Sets how many world units in width and height correspond to a single pixel in the Tiled map. Default is 1: One pixel is one world unit.
      
      "images": ["spritesheet-1", "spritesheet-2"],
      // Optional. If specified, the referenced images are used as the game spritesheets instead of the images referenced in the Tiled map. This is useful for using different or better quality art from the art used in creating the Tiled map.
      
      "imagesScale": 5,
      // Optional. If images are set above, this property sets the scale of the art relative to world coordinates. Defaults to the value set in "unitsPerPixel".
      
      "zStep": 500,
      // Optional. Adds step number to each additional Tiled layer to maintain z-order. Defaults to 1000.
      
      "separateTiles": true,
      // Optional. Keeps the tile maps in separate render layers. Default is 'false' to for better optimization.
      
      "entityPositionX": "center",
      // Optional. Can be "left", "right", or "center". Defines where entities registered X position should be when spawned. Default is "center".

      "entityPositionY": "center",
      // Optional. Can be "top", "bottom", or "center". Defines where entities registered Y position should be when spawned. Default is "bottom".
      
      "manuallyLoad": true
      // Optional. Whether to wait for a "load-level" event before before loading. Defaults to `false`;
    }

[link1]: http://www.mapeditor.org/
*/
(function(){
	var transformCheck = function(v){
		var a = !!(0x20000000 & v),
		b     = !!(0x40000000 & v),
		c     = !!(0x80000000 & v);
		
		if (a && c){
			return -3;
		} else if (a){
			return -5;
		} else if (b){
			return -4;
		} else {
			return -2;
		}
	};
	
	return platformer.createComponentClass({
		id: 'tiled-loader',
		
		constructor: function(definition){
			this.entities     = [];
			this.layerZ       = 0;
			this.followEntity = false;
			
			this.manuallyLoad  = definition.manuallyLoad || false;
			this.level = this.owner.level || definition.level || null;

			this.unitsPerPixel = this.owner.unitsPerPixel || definition.unitsPerPixel || 1;
			this.images        = this.owner.images        || definition.images        || false;
			this.imagesScale   = this.owner.imagesScale   || definition.imagesScale   || this.unitsPerPixel;
			this.layerZStep    = this.owner.zStep         || definition.zStep         || 1000;
			this.separateTiles = this.owner.separateTiles || definition.separateTiles || false;
			this.entityPositionX = this.owner.entityPositionX || definition.entityPositionX || 'center';
			this.entityPositionY = this.owner.entityPositionY || definition.entityPositionY || 'bottom';
		},
		
		events: {
			"scene-loaded": function(persistentData){
				if (!this.manuallyLoad) {
					this.loadLevel({
						level: this.level || persistentData.level,
						persistentData: persistentData
					});
				}
			},
			
			"load-level": function(levelData){
				this.loadLevel(levelData);
			}
		},
		
		methods: {
			loadLevel: function(levelData){
				var level = levelData.level,
				actionLayer = 0,
				layer = false;

				//format level appropriately
				if(typeof level === 'string'){
					level = platformer.game.settings.levels[level];
				}
				
				for(; actionLayer < level.layers.length; actionLayer++){
					layer = this.setupLayer(level.layers[actionLayer], level, layer);
					if (this.separateTiles){
						layer = false;
					}
				}

				this.owner.trigger('world-loaded', {
					width:  level.width  * level.tilewidth  * this.unitsPerPixel,
					height: level.height * level.tileheight * this.unitsPerPixel,
					camera: this.followEntity
				});
				this.owner.removeComponent(this);
			},
			
			setupLayer: function(layer, level, combineRenderLayer){
				var self       = this,
				images         = self.images || [],
				tilesets       = level.tilesets,
				tileWidth      = level.tilewidth,
				tileHeight     = level.tileheight,
				widthOffset    = 0,
				heightOffset   = 0,
				x              = 0,
				y              = 0,
				obj            = 0,
				entity         = null,
				property       = null,
				entityType     = '',
				tileset        = null,
				properties     = null,
				layerCollides  = true,
				numberProperty = false,
				convertImageLayer = function(imageLayer){
					var tileLayer = {
						data:   [1],
						image:  '',
						height: 1,
						name:   imageLayer.name,
						type:   'tilelayer',
						width:  1,
						tileheight: tileHeight,
						tilewidth: tileWidth,
						x:      imageLayer.x,
						y:      imageLayer.y,
						properties: imageLayer.properties || {}
					};
					
					if(platformer.assets[imageLayer.name]){ // Prefer to have name in tiled match image id in game
						tileLayer.image      = platformer.assets[imageLayer.name];
						tileLayer.tileheight = tileLayer.image.height;
						tileLayer.tilewidth  = tileLayer.image.width;
					} else {
						console.warn('Component tiled-loader: Cannot find the "' + imageLayer.name + '" sprite sheet. Add it to the list of assets in config.json and give it the id "' + imageLayer.name + '".');
						tileLayer.image = imageLayer.image;
					}
					
					return tileLayer;
				},
				createLayer = function(entityKind, layer){
					var width       = layer.width,
					height          = layer.height,
					tHeight         = layer.tileheight || tileHeight,
					tWidth          = layer.tilewidth  || tileWidth,
					tileTypes       = 0,
					tileDefinition  = null,
					importAnimation = null,
					importCollision = null,
					importRender    = null,
					renderTiles     = false,
					tileset         = null,
					jumpthroughs    = null,
					index           = 0,
					x               = 0,
					y               = 0;
					
					//TODO: a bit of a hack to copy an object instead of overwrite values
					tileDefinition  = JSON.parse(JSON.stringify(platformer.game.settings.entities[entityKind]));

					importAnimation = {};
					importCollision = [];
					importRender    = [];
					
					if(entityKind === 'collision-layer'){
						jumpthroughs = [];
						for (x = 0; x < tilesets.length; x++){
							tileset = tilesets[x];
							if(tileset.tileproperties){
								for (y in tileset.tileproperties){
									if(tileset.tileproperties[y].jumpThrough){
										jumpthroughs.push(tileset.firstgid + +y - 1);
									}
								}
							}
						}
					}

					tileDefinition.properties            = tileDefinition.properties || {};
					tileDefinition.properties.width      = tWidth  * width  * self.unitsPerPixel;
					tileDefinition.properties.height     = tHeight * height * self.unitsPerPixel;
					tileDefinition.properties.columns    = width;
					tileDefinition.properties.rows       = height;
					tileDefinition.properties.tileWidth  = tWidth  * self.unitsPerPixel;
					tileDefinition.properties.tileHeight = tHeight * self.unitsPerPixel;
					tileDefinition.properties.scaleX     = self.imagesScale;
					tileDefinition.properties.scaleY     = self.imagesScale;
					tileDefinition.properties.layerZ     = self.layerZ;
					tileDefinition.properties.z    		 = self.layerZ;
					
					if(layer.image){
						tileTypes = (layer.image.width / tWidth) * (layer.image.height / tHeight);
					} else {
						tileTypes = (tilesets[tilesets.length - 1].imagewidth / tWidth) * (tilesets[tilesets.length - 1].imageheight / tHeight) + tilesets[tilesets.length - 1].firstgid;
					}
					for (x = -1; x < tileTypes; x++){
						importAnimation['tile' + x] = x;
					}
					for (x = 0; x < width; x++){
						importCollision[x] = [];
						importRender[x]    = [];
						for (y = 0; y < height; y++){
							index = +layer.data[x + y * width] - 1;
							importRender[x][y] = 'tile' + index;
							if(jumpthroughs){
								for (var z = 0; z < jumpthroughs.length; z++){
									if(jumpthroughs[z] === (0x0fffffff & index)){
										index = transformCheck(index);
									}
									break;
								}
							}
							importCollision[x][y] = index;
						}
					}
					for (x = 0; x < tileDefinition.components.length; x++){
						if(tileDefinition.components[x].type === 'render-tiles'){
							renderTiles = tileDefinition.components[x]; 
						}
						if(tileDefinition.components[x].spriteSheet == 'import'){
							tileDefinition.components[x].spriteSheet = {
								images: (layer.image?[layer.image]:images),
								frames: {
									width:  tWidth * self.unitsPerPixel / self.imagesScale,
									height: tHeight * self.unitsPerPixel / self.imagesScale//,
//									regX: (tileWidth * self.unitsPerPixel / self.imagesScale) / 2,
			//						regY: (tileHeight * self.unitsPerPixel / self.imagesScale) / 2
								},
								animations: importAnimation
							};
						}
						if(tileDefinition.components[x].collisionMap == 'import'){
							tileDefinition.components[x].collisionMap = importCollision;
						}
						if(tileDefinition.components[x].imageMap == 'import'){
							tileDefinition.components[x].imageMap = importRender;
						}
					}
					self.layerZ += self.layerZStep;
					
					if((entityKind === 'render-layer') && combineRenderLayer && (combineRenderLayer.tileHeight === tHeight) && (combineRenderLayer.tileWidth === tWidth)){
						combineRenderLayer.trigger('add-tiles', renderTiles);
						return combineRenderLayer; 
					} else {
						return self.owner.addEntity(new platformer.Entity(tileDefinition, {properties:{
							
						}})); 
					}
				};

				if(images.length == 0){
					for (x = 0; x < tilesets.length; x++){
						if(platformer.assets[tilesets[x].name]){ // Prefer to have name in tiled match image id in game
							images.push(platformer.assets[tilesets[x].name]);
						} else {
							console.warn('Component tiled-loader: Cannot find the "' + tilesets[x].name + '" sprite sheet. Add it to the list of assets in config.json and give it the id "' + tilesets[x].name + '".');
							images.push(tilesets[x].image);
						}
					}
				} else {
					images = images.slice(); //so we do not overwrite settings array
					for (x = 0; x < images.length; x++){
						if(platformer.assets[images[x]]){
							images[x] = platformer.assets[images[x]];
						}
					}
				}
				
				if(layer.type == 'tilelayer'){
					// First determine which type of entity this layer should behave as:
					entity = 'render-layer'; // default
					if(layer.properties && layer.properties.entity){
						entity = layer.properties.entity;
					} else { // If not explicitly defined, try using the name of the layer
						switch(layer.name){
						case "collision":
							entity = 'collision-layer';
							break;
						case "action":
							entity = 'tile-layer';
							for (x = 0; x < level.layers.length; x++){
								if(level.layers[x].name === 'collision' || (level.layers[x].properties && level.layers[x].properties.entity === 'collision-layer')){
									layerCollides = false;
								}
							}
							if(!layerCollides){
								entity = 'render-layer';
							}
							break;
						}
					}
					
					if(entity === 'tile-layer'){
						createLayer('collision-layer', layer);
						return createLayer('render-layer', layer);
					} else if (entity === 'collision-layer') {
						createLayer(entity, layer);
					} else {
						return createLayer(entity, layer);
					}
				} else if(layer.type == 'imagelayer'){
					// set up temp tile layer to pass in image layer as if it's tiled.
					return createLayer('render-layer', convertImageLayer(layer));
				} else if(layer.type == 'objectgroup'){
					for (obj = 0; obj < layer.objects.length; obj++){
						entity = layer.objects[obj];
						for (x = 0; x < tilesets.length; x++){
							if(tilesets[x].firstgid > entity.gid){
								break;
							} else {
								tileset = tilesets[x];
							}
						}
						
						// Check Tiled data to find this object's type
						entityType = '';
						if(entity.type !== ''){
							entityType = entity.type;
						} else if(entity.name !== ''){
							entityType = entity.name;
						} else if(tileset.tileproperties[entity.gid - tileset.firstgid]){
							if(tileset.tileproperties[entity.gid - tileset.firstgid].entity){
								entityType = tileset.tileproperties[entity.gid - tileset.firstgid].entity;
							} else if (tileset.tileproperties[entity.gid - tileset.firstgid].type){
								entityType = tileset.tileproperties[entity.gid - tileset.firstgid].type;
							}
						}
						
						if(entityType !== ''){
							properties = {};
							//Copy properties from Tiled

							if(tileset.tileproperties && tileset.tileproperties[entity.gid - tileset.firstgid]){
								for (x in tileset.tileproperties[entity.gid - tileset.firstgid]){
									//This is going to assume that if you pass in something that starts with a number, it is a number and converts it to one.
									numberProperty = parseFloat(tileset.tileproperties[entity.gid - tileset.firstgid][x]);
									if (numberProperty == 0 || (!!numberProperty)) {
										properties[x] = numberProperty;
									} else if(tileset.tileproperties[entity.gid - tileset.firstgid][x] == 'true') {
										properties[x] = true;
									} else if(tileset.tileproperties[entity.gid - tileset.firstgid][x] == 'false') {
										properties[x] = false;
									} else {
										properties[x] = tileset.tileproperties[entity.gid - tileset.firstgid][x];
									}
								}
							}
							
							for (x in entity.properties){
								property = entity.properties[x];
								if(typeof property === 'string'){
									//This is going to assume that if you pass in something that starts with a number, it is a number and converts it to one.
								    numberProperty = parseFloat(property);
									if (numberProperty == 0 || (!!numberProperty))
									{
										properties[x] = numberProperty;
									} else if(property == 'true') {
										properties[x] = true;
									} else if(property == 'false') {
										properties[x] = false;
									} else if((property.length > 2) && (((property[0] === '{') && (property[property.length - 1] === '}')) || ((property[0] === '[') && (property[property.length - 1] === ']')))){
										try {
											properties[x] = JSON.parse(property);
										} catch(e) {
											properties[x] = property;
										}
									} else {
										properties[x] = property;
									}
								} else {
									properties[x] = property;
								}
							}
							widthOffset  = properties.width  = (entity.width  || tileWidth)  * this.unitsPerPixel;
							heightOffset = properties.height = (entity.height || tileHeight) * this.unitsPerPixel;
							if (entityType && platformer.game.settings.entities[entityType] && platformer.game.settings.entities[entityType].properties) {
								properties.width  = platformer.game.settings.entities[entityType].properties.width  || properties.width;
								properties.height = platformer.game.settings.entities[entityType].properties.height || properties.height;
							}

							properties.x = entity.x * this.unitsPerPixel;
							if(this.entityPositionX === 'left'){
								properties.regX = 0;
							} else if(this.entityPositionX === 'center'){
								properties.regX = properties.width / 2;
								properties.x += widthOffset / 2;
							} else if(this.entityPositionX === 'right'){
								properties.regX = properties.width;
								properties.x += widthOffset;
							}

							properties.y = entity.y * this.unitsPerPixel;
							if(typeof entity.gid === 'undefined'){
								properties.y += properties.height;
							}
							if(this.entityPositionY === 'bottom'){
								properties.regY = properties.height;
							} else if(this.entityPositionY === 'center'){
								properties.regY = properties.height / 2;
								properties.y -= heightOffset / 2;
							} else if(this.entityPositionY === 'top'){
								properties.regY = 0;
								properties.y -= heightOffset;
							}

							properties.scaleX = this.imagesScale;//this.unitsPerPixel;
							properties.scaleY = this.imagesScale;//this.unitsPerPixel;
							properties.layerZ = this.layerZ;
							
							//Setting the z value. All values are getting added to the layerZ value.
							if (properties.z) {
								properties.z += this.layerZ;
							} else if (entityType && platformer.game.settings.entities[entityType] && platformer.game.settings.entities[entityType].properties && platformer.game.settings.entities[entityType].properties.z) {
								properties.z = this.layerZ + platformer.game.settings.entities[entityType].properties.z;
							} else {
								properties.z = this.layerZ;
							}
							
							properties.parent = this.owner;
							entity = this.owner.addEntity(new platformer.Entity(platformer.game.settings.entities[entityType], {properties:properties}));
							if(entity){
								if(entity.camera){
									this.followEntity = {entity: entity, mode: entity.camera}; //used by camera
								}
							}
						}
					}
					this.layerZ += this.layerZStep;
					return false;
				}
			},
			
			"destroy": function(){
				this.entities.length = 0;
			}
		}
	});
})();


/*--------------------------------------------------
 *   tween - ../engine/components/tween.js
 */
/**
# COMPONENT **tween**
Tween takes a list of tween definitions and plays them as needed.

## Dependencies
- [[TweenJS]] - This component requires the CreateJS TweenJS module.

## Messages

### Listens for:
- **[Messages specified in definition]** - Listens for messages and on receiving them, begins playing the corresponding tween.

### Local Broadcasts:
- **[Messages specified in definition]** - Broadcasts messages from a given tween definition.

## JSON Definition
    {
      "type": "tween",

	  "events": {
	  // Required. A key/value list of events and an array representing the tween they should trigger.

	        "begin-flying": [
	        // When "begin-flying" is triggered on this entity, the following tween begins. Tween definitions adhere to a similar structure outlined by the TweenJS documentation. Each milestone on the tween is an item in this array.

                ["to", {
                    "scaleY": 1,
                    "y": 400
                }, 500],
				// If the definition is an array, the first parameter is the type of milestone, in this case "to", with all following parameters passed directly to the equivalent Tween function.
                
                ["call", "fly"],
                // "call" milestones can take a function or a string. If it's a string, the string will be triggered as an event on the entity. In this case, the component will trigger "fly".
	        ]
	    }
    }
*/
(function(){
	var createTrigger = function(entity, event, message, debug){
		return function(){
			entity.trigger(event, message, debug);
		};
	},
	createTween = function(definition){
		return function(values){
			var i  = 0,
			tweens = definition,
			tweenDef = null,
			arr = null,
			tween = createjs.Tween.get(this.owner);
			
			if(Array.isArray(values)){
				tweens = values;
			}
			
			for (; i < tweens.length; i++){
				tweenDef = tweens[i];
				if(typeof tweenDef === 'string'){
					tween.call(createTrigger(this.owner, tweenDef));
				} else if (Array.isArray(tweenDef)) {
					if(tweenDef[0] === 'call' && typeof tweenDef[1] === 'string'){
						tween.call(createTrigger(this.owner, tweenDef[1]));
					} else {
						arr = tweenDef.slice();
						arr.splice(0,1);
						tween[tweenDef[0]].apply(tween, arr);
					}
				} else {
					if(tweenDef.method === 'call' && typeof tweenDef.arguments === 'string'){
						tween.call(createTrigger(this.owner, tweenDef.arguments));
					} else {
						tween[tweenDef.method].apply(tween, tweenDef.arguments);
					}
				}
			}
		};
	};

	return platformer.createComponentClass({
		id: 'tween',
		
		constructor: function(definition){
			if(definition.events){
				for(var event in definition.events){
					this.addEventListener(event, createTween(definition.events[event]));
				}
			}
		}
	});
})();


/*--------------------------------------------------
 *   handler-render-createjs - ../engine/components/handler-render-createjs.js
 */
/**
# COMPONENT **handler-render-createjs**
A component that handles updating rendering for components that are rendering via createjs. Each tick it calls all the entities that accept 'handle-render' messages.

## Dependencies
- **Needs a 'tick' or 'render' call** - This component doesn't need a specific component, but it does require a 'tick' or 'render' call to function. It's usually used as a component of an action-layer.
- [createjs.EaselJS][link1] - This component requires the EaselJS library to be included for canvas functionality.

## Messages

### Listens for:
- **child-entity-added** - Called when a new entity has been added to the parent and should be considered for addition to the handler. If the entity has a 'handle-render' or 'handle-render-load' message id it's added to the list of entities. Entities are sent a reference to the stage that we're rendering to, so they can add their display objects to it. 
  - @param entity (Object) - The entity that is being considered for addition to the handler.
- **tick, render** - Sends a 'handle-render' message to all the entities the component is handling. If an entity does not handle the message, it's removed it from the entity list. This function also sorts the display objects in the stage according to their z value. We detect when new objects are added by keeping track of the first element. If it changes the list gets resorted. Finally the whole stage is updated by CreateJS.
  - @param resp (object) - An object containing delta which is the time passed since the last tick. 
- **camera-update** - Called when the camera moves in the world, or if the window is resized. This function sets the canvas size and the stage transform.
  - @param cameraInfo (object) - An object containing the camera information. 

### Local Broadcasts:
- **mousedown** - This component captures this event on the canvas and triggers it on the entity.
  - @param event (event object) - The event from Javascript.
  - @param over (boolean) - Whether the mouse is over the object or not.
  - @param x (number) - The x-location of the mouse in stage coordinates.
  - @param y (number) - The y-location of the mouse in stage coordinates.
  - @param entity ([[Entity]]) - The entity clicked on.  
- **mouseup** - This component captures this event on the canvas and triggers it on the entity.
  - @param event (event object) - The event from Javascript.
  - @param over (boolean) - Whether the mouse is over the object or not.
  - @param x (number) - The x-location of the mouse in stage coordinates.
  - @param y (number) - The y-location of the mouse in stage coordinates.
  - @param entity ([[Entity]]) - The entity clicked on.  
- **mousemove** - This component captures this event on the canvas and triggers it on the entity.
  - @param event (event object) - The event from Javascript.
  - @param over (boolean) - Whether the mouse is over the object or not.
  - @param x (number) - The x-location of the mouse in stage coordinates.
  - @param y (number) - The y-location of the mouse in stage coordinates.
  - @param entity ([[Entity]]) - The entity clicked on.  

### Child Broadcasts:
- **handle-render** - Sent to entities to run their render for the tick.
  - @param object (object) - An object containing a delta variable that is the time that's passed since the last tick.
- **handle-render-load** - Sent to entities when they are added to the handler. Sends along the stage object so the entity can add its display objects. It also sends the parent DOM element of the canvas.
  - @param object.stage ([createjs.Stage][link2]) - The createjs stage object.
  - @param object.parentElement (object) - The DOM parent element of the canvas. 

## JSON Definition
    {
      "type": "handler-render-createjs",
      
      "acceptInput": {
      	//Optional - What types of input the object should take. This component defaults to not accept any input.
      	"touch": false, // Whether to listen for touch events (triggers mouse events)
      	"click": false, // Whether to listen for mouse events
      	"camera": false, // Whether camera movement while the mouse (or touch) is triggered should result in a mousemove event
      	"movement": false // Whether to capture mouse movement even when there is no mouse-down.
      },
      "autoClear": false, //By default this is set to false. If true the canvas will be cleared each tick.
      "canvasId": "bob"   //Sets the id of the canvas. The canvas defaults to having no id.
      
      "buffer" : 12,		//The buffer area around the camera in which entities are rendered. This value changes the buffer in all directions. Defaults to the camera width / 12.
      "bufferWidth" : 12, 	//The buffer area around the camera in which entities are rendered. This value changes the buffer in width only and overrides the buffer value. Defaults to the camera width / 12.
      "bufferHeight" : 12, 	//The buffer area around the camera in which entities are rendered. This value changes the buffer in height only and overrides the buffer value. Defaults to the camera width / 12.
      "bufferLeft" : 12,	//The buffer area around the camera in which entities are rendered. This value changes the buffer at the left of the camera and overrides buffer and bufferWidth. Defaults to the camera width / 12.
      "bufferRight" : 12,	//The buffer area around the camera in which entities are rendered. This value changes the buffer at the right of the camera and overrides buffer and bufferWidth. Defaults to the camera width / 12.
      "bufferTop" : 12,		//The buffer area around the camera in which entities are rendered. This value changes the buffer at the top of the camera and overrides buffer and bufferHeight. Defaults to the camera width / 12.
      "bufferBottom" : 12	//The buffer area around the camera in which entities are rendered. This value changes the buffer at the bottom of the camera and overrides buffer and bufferHeight. Defaults to the camera width / 12.
    }
    
[link1]: http://www.createjs.com/Docs/EaselJS/module_EaselJS.html
[link2]: http://createjs.com/Docs/EaselJS/Stage.html
*/
(function(){
	var uagent = navigator.userAgent.toLowerCase(),
	android4   = (uagent.indexOf('android 4.1') > -1) || (uagent.indexOf('android 4.2') > -1) || false, // This is used to detect and fix the duplicate rendering issue on certain native Android browsers.
	dpr        = window.devicePixelRatio || 1;
	
	return platformer.createComponentClass({

		id: "handler-render-createjs",
		
		constructor: function(definition){
			var self = this;
			
			this.canvas = this.owner.canvas = document.createElement('canvas');
			this.canvas.id = definition.canvasId || '';
			this.owner.canvasParent = null;
			if(this.owner.element){
				this.owner.canvasParent = this.owner.element;
				this.owner.element.appendChild(this.canvas);
			} else {
				this.owner.canvasParent = this.owner.rootElement;
				this.owner.rootElement.appendChild(this.canvas);
				this.owner.element = this.canvas; 
			}
			
			this.stage = new createjs.Stage(this.canvas);
			
			if(definition.autoClear !== true){
				this.stage.autoClear = false; //since most tile maps are re-painted every time, the canvas does not require clearing.
			}
			
			// The following appends necessary information to displayed objects to allow them to receive touches and clicks
			if(definition.acceptInput){
				if(definition.acceptInput.click || definition.acceptInput.touch){
					this.setupInput(definition.acceptInput.touch, definition.acceptInput.movement, definition.acceptInput.camera);
				}
			}
			
			this.camera = {
				left: 0,
				top: 0,
				width: 0,
				height: 0,
				bufferLeft: 	definition.bufferLeft 	|| definition.bufferWidth || definition.buffer || -1,
				bufferRight: 	definition.bufferRight 	|| definition.bufferWidth || definition.buffer || -1,
				bufferTop: 		definition.bufferTop 	|| definition.bufferHeight || definition.buffer || -1,
				bufferBottom: 	definition.bufferBottom || definition.bufferHeight || definition.buffer || -1
			};
			
			this.timeElapsed = {
				name: 'Render',
				time: 0
			};
			
			this.renderMessage = {
				delta: 0,
				stage:  this.stage
			};
			
			this.handleChildren = true;
			this.extraContent = false;
		},
		
		events:{
			"load": function(){
				var i = 0,
				last  = null;
				
				// Check for parallel render handlers. A bit gross, but viable until we find a better way - DDD
				for(; i < this.owner.components.length; i++){
					if((this.owner.components[i] === this) || (this.owner.components[i].type.substring(0,14) === 'handler-render')){
						last = this.owner.components[i];
					}
				}
				
				if(last !== this){
					this.handleChildren = false;
				} else {
					this.addEventListener("handle-render-addition", function(addition){
						var i = '';
						
						if(!this.extraContent){
							this.extraContent = {};
						}

						for(i in addition){
							this.extraContent[i] = addition[i];
						}
					});
				}
			},
			
			"child-entity-added": function(entity){
				var self = this;
				
				entity.triggerEvent('handle-render-load', {
					stage: self.stage,
					parentElement: self.owner.rootElement
				});
			},
			"pause-render": function(resp){
				if(resp && resp.time){
					this.paused = resp.time;
				} else {
					this.paused = -1;
				}
			},
			"unpause-render": function(){
				this.paused = 0;
			},
			"tick": (function(){
				var sort = function(a, b) {
					return a.z - b.z;
				};
				
				return function(resp){
					var i   = '',
					child   = undefined,
					time    = new Date().getTime(),
					message = this.renderMessage;
					
					message.delta = resp.delta;

					if(this.paused > 0){
						this.paused -= resp.delta;
						if(this.paused < 0){
							this.paused = 0;
						}
					}

					if(this.handleChildren){
						if(this.extraContent){
							for(i in this.extraContent){
								message[i] = this.extraContent[i];
							}
						}
						if(this.owner.triggerEventOnChildren){
							this.owner.triggerEventOnChildren('handle-render', message);
						}
						if(this.extraContent){
							for(i in this.extraContent){
								delete this.extraContent[i];
								delete message[i];
							}
						}
					} else {
						this.owner.triggerEvent('handle-render-addition', message);
					}
					
					if(this.stage){
						for (var x = this.stage.children.length - 1; x > -1; x--){
							child = this.stage.children[x];
							if (child.hidden) {
								if(child.visible) child.visible = false;
							} else if(child.name !== 'entity-managed'){
								if((child.x >= this.camera.x - this.camera.bufferLeft) && (child.x <= this.camera.x + this.camera.width + this.camera.bufferRight) && (child.y >= this.camera.y - this.camera.bufferTop) && (child.y <= this.camera.y + this.camera.height + this.camera.bufferBottom)){
									if(!child.visible) child.visible = true;
								} else {
									if(child.visible) child.visible = false;
								}
							}
							
							if(child.visible){
								if (child.paused && !this.paused){
									child.paused = false;
								} else if (this.paused) {
									child.paused = true;
								}
							}
						}

						if (this.stage.reorder) {
							this.stage.reorder = false;
							this.stage.sortChildren(sort);
						}
						
						this.timeElapsed.name = 'Render-Prep';
						this.timeElapsed.time = new Date().getTime() - time;
						platformer.game.currentScene.trigger('time-elapsed', this.timeElapsed);
						time += this.timeElapsed.time;

						this.stage.update(resp);
						
						// This is a fix for the Android 4.1 and 4.2 native browser where it duplicates the canvas. Also set "overflow: hidden" on the canvas's parent to bypass this rendering issue. - DDD
/*						if(android4 && this.stage.autoClear){
							this.canvas.style.opacity = 0.99;

							setTimeout(function() {
							  this.canvas.style.opacity = 1;
							}, 0);
						}*/
						
						this.timeElapsed.name = 'Render';
						this.timeElapsed.time = new Date().getTime() - time;
						platformer.game.currentScene.trigger('time-elapsed', this.timeElapsed);
					} 
				};
			})(),
			"camera-update": function(cameraInfo){
				this.camera.x = cameraInfo.viewportLeft;
				this.camera.y = cameraInfo.viewportTop;
				this.camera.width = cameraInfo.viewportWidth;
				this.camera.height = cameraInfo.viewportHeight;
				if(this.camera.bufferLeft == -1) {
					this.camera.bufferLeft = this.camera.width / 12; // sets a default buffer based on the size of the world units if the buffer was not explicitly set.
				}
				if(this.camera.bufferRight == -1) {
					this.camera.bufferRight = this.camera.width / 12; // sets a default buffer based on the size of the world units if the buffer was not explicitly set.
				}
				if(this.camera.bufferTop == -1) {
					this.camera.bufferTop = this.camera.width / 12; // sets a default buffer based on the size of the world units if the buffer was not explicitly set.
				}
				if(this.camera.bufferBottom == -1) {
					this.camera.bufferBottom = this.camera.width / 12; // sets a default buffer based on the size of the world units if the buffer was not explicitly set.
				}
				
				this.canvas.width  = this.canvas.offsetWidth * dpr;
				this.canvas.height = this.canvas.offsetHeight * dpr;
				this.stage.setTransform(-cameraInfo.viewportLeft * cameraInfo.scaleX * dpr, -cameraInfo.viewportTop * cameraInfo.scaleY * dpr, cameraInfo.scaleX * dpr, cameraInfo.scaleY * dpr);
				
				if(this.moveMouse){
					this.moveMouse(cameraInfo);
				}
			}
		},
		methods:{
			setupInput: (function(){
				return function(enableTouch, triggerOnAllMovement, cameraMovementMovesMouse){
					var self = this,
					originalEvent   = null,
					x        = 0,
					y        = 0,
					setXY   = function(event){
						originalEvent = event;
						x  = (event.stageX/* / dpr*/) / self.stage.scaleX + self.camera.x;
						y  = (event.stageY/* / dpr*/) / self.stage.scaleY + self.camera.y;
					},
					mousedown = function(event) {
						setXY(event);
						self.owner.trigger('mousedown', {
							event: event.nativeEvent,
							x: x,
							y: y,
							entity: self.owner
						});
						
						// This function is used to trigger a move event when the camera moves and the mouse is still triggered.
						if(cameraMovementMovesMouse){
							self.moveMouse = function(){
								setXY(originalEvent);
								self.owner.trigger('mousemove', {
									event: event.nativeEvent,
									x: x,
									y: y,
									entity: self.owner
								});
							};
						}
					},
					mouseup = function(event){
						setXY(event);
						self.owner.trigger('mouseup', {
							event: event.nativeEvent,
							x: x,
							y: y,
							entity: self.owner
						});
						if(cameraMovementMovesMouse){
							self.moveMouse = null;
						}
					},
					mousemove = function(event){
						setXY(event);
						if(triggerOnAllMovement || event.nativeEvent.which || event.nativeEvent.touches){
							self.owner.trigger('mousemove', {
								event: event.nativeEvent,
								x: x,
								y: y,
								entity: self.owner
							});
						}
					};
					
					if(enableTouch && !this.stage.__touch){ //__touch check due to this being overridden if we do this multiple times. - DDD
						createjs.Touch.enable(this.stage);
					}

					this.stage.addEventListener('stagemousedown', mousedown);
					this.stage.addEventListener('stagemouseup', mouseup);
					this.stage.addEventListener('stagemousemove', mousemove);
					
					this.removeStageListeners = function(){
						this.stage.removeEventListener('stagemousedown', mousedown);
						this.stage.removeEventListener('stagemouseup', mouseup);
						this.stage.removeEventListener('stagemousemove', mousemove);
					};
				};
			})(),
			
			destroy: function(){
				if(this.removeStageListeners){
					this.removeStageListeners();
				}
				this.stage = undefined;
				this.owner.canvasParent.removeChild(this.canvas);
				this.owner.canvasParent = null;
				this.owner.element = null;
				this.canvas = undefined;
			}
		}
	});
})();

/*--------------------------------------------------
 *   handler-render-dom - ../engine/components/handler-render-dom.js
 */
/**
# COMPONENT **handler-render-dom**
A component that handles the rendering of DOM elements. It creates a div element that it then shares with entities to add themselves too. It then alerts these entities when they should load and update their rendering.

## Dependencies
- **Needs a 'tick' or 'render' call** - This component doesn't need a specific component, but it does require a 'tick' or 'render' call to function. It's usually used as a component of an action-layer.

## Messages

### Listens for:
- **child-entity-added** - Called when a new entity has been added and should be considered for addition to the handler. If the entity has a 'handle-render' or 'handle-render-load' message id it's added to the list of entities. Also the 'handle-render-load' message is called immediately.
  - @param entity (Object) - The entity that is being considered for addition to the handler.
- **tick** - Sends a 'handle-render' message to all the entities the component is handling. If an entity does not handle the message, it's removed it from the entity list.
  - @param resp (object) - An object containing delta which is the time passed since the last tick. 

### Child Broadcasts:
- **handle-render-load** - Sent to an entity that has been added to the handler. Passes the entity a div element that it can add itself to.
  - @param obj.element (Object) - An object containing a DOM element that the entity should add child elements to.
- **handle-render** - Sent to entities to have them prepare to be rendered.
  - @param object - An object containing a delta variable that is the time that's passed since the last tick.

## Methods
- **getElementById** - Used to grab a DOM element that's a child of this layer. This is useful if another scene has not yet been unloaded and elements with matching ids are still in the DOM.
  - @param id (string) - An id that references the element to be returned.

## JSON Definition
    {
      "type": "handler-render-dom",

      "className": "top-band",
      //Optional. Any standard properties of the element can be set by listing property names and their values. "className" is one example, but other element properties can be specified in the same way.
      
      "onmousedown": "turn-green",
      //Optional. If specified properties begin with "on", it is assumed that the property is an event handler and the listed value is broadcast as a message on the entity where the message object is the event handler's event object.
    }
*/

(function(){
	
	return platformer.createComponentClass({
	
		id: 'handler-render-dom',
		
		constructor: function(definition){
			this.element = this.owner.element = document.createElement('div');
			this.owner.rootElement.appendChild(this.element);
			this.owner.element = this.element;
	
			for(var i in definition){
				if(i === 'style'){
					for(var j in definition[i]){
						this.element.style[j] = definition[i][j]; 
					}
				} else if(i !== 'type'){
					if(i.indexOf('on') === 0){
						this.element[i] = createFunction(definition[i], this.owner);
					} else {
						this.element[i] = definition[i];
					}
				}
			}

			this.handleChildren = true;
			this.extraContent = false;
		},
		events: {
			"load": function(){
				var i = 0,
				last  = null;
				
				// Check for parallel render handlers. A bit gross, but viable until we find a better way - DDD
				for(; i < this.owner.components.length; i++){
					if((this.owner.components[i] === this) || (this.owner.components[i].type.substring(0,14) === 'handler-render')){
						last = this.owner.components[i];
					}
				}
				
				if(last !== this){
					this.handleChildren = false;
				} else {
					this.addEventListener("handle-render-addition", function(addition){
						var i = '';
						
						if(!this.extraContent){
							this.extraContent = {};
						}

						for(i in addition){
							this.extraContent[i] = addition[i];
						}
					});
				}
			},
			
			"child-entity-added": function(entity){
				var self = this; 
				
				entity.trigger('handle-render-load', {
					element: self.element
				});
			},
			"tick": function(resp){
				var i   = '',
				message = {};
				
				if(this.handleChildren){
					for(i in resp){
						message[i] = resp[i];
					}
					if(this.extraContent){
						for(i in this.extraContent){
							message[i] = this.extraContent[i];
						}
					}
					if(this.owner.triggerEventOnChildren){
						this.owner.triggerEventOnChildren('handle-render', message);
					}
					if(this.extraContent){
						for(i in this.extraContent){
							delete this.extraContent[i];
							delete message[i];
						}
					}
				} else {
					this.owner.triggerEvent('handle-render-addition', message);
				}
			}
		},
		
		methods: {
			destroy: function(){
				this.owner.rootElement.removeChild(this.element);
				this.owner.element = null;
				this.element = undefined;
			}
		},
		
		publicMethods: {
			getElementById: function(id){
				var i = 0,
				all   = this.element.getElementsByTagName('*');

				for (; i < all.length; i++) {
				    if(all[i].getAttribute('id') === id){
				    	return all[i];
				    }
				}
				
				return document.getElementById(id);
			}
		}
	});
})();


/*--------------------------------------------------
 *   handler-ai - ../engine/components/handler-ai.js
 */
/**
# COMPONENT **handler-ai**
A component that handles updating ai components. Each tick it calls all the entities that accept 'handle-ai' messages.

## Dependencies
- **Needs a 'tick' call** - This component doesn't need a specific component, but it does require a 'tick' call to function. It's usually used as a component of an action-layer.

## Messages

### Listens for:
- **child-entity-added** - Called when a new entity has been added and should be considered for addition to the handler. If the entity has a 'handle-ai' message id it's added to the list of entities. 
  - @param entity (Object) - The entity that is being considered for addition to the handler.
- **tick** - Sends a 'handle-ai' message to all the entities the component is handling. If an entity does not handle the message, it's removed it from the entity list.
  - @param obj (object) - An object containing delta which is the time passed since the last tick. 

### Child Broadcasts:
- **handle-ai** - Sent to entities to run their ai for the tick.
  - @param object - An object containing a delta variable that is the time that's passed since the last tick.

## JSON Definition
    {
      "type": "handler-ai",
    }
*/


	
(function(){
	return platformer.createComponentClass({
		id: 'handler-ai',
		constructor: function(definition){
			this.entities = [];
		},
		events:{
			"child-entity-added": function(entity){
				var messageIds = entity.getMessageIds();
				
				for (var x = 0; x < messageIds.length; x++)
				{
					if (messageIds[x] == 'handle-ai')
					{
						this.entities.push(entity);
						break;
					}
				}
			},
			"tick": function(obj){
				for (var x = this.entities.length - 1; x > -1; x--)
				{
					if(!this.entities[x].trigger('handle-ai', obj))
					{
						this.entities.splice(x, 1);
					}
				}
			}
		},
		methods: {
			destroy: function(){
				this.entities.length = 0;
			}
		}
	});
})();


/*--------------------------------------------------
 *   handler-logic - ../engine/components/handler-logic.js
 */
/**
# COMPONENT **handler-logic**
A component that handles updating logic components. Each tick it calls all the entities that accept 'handle-logic' messages.

## Dependencies
- **Needs a 'tick' call** - This component doesn't need a specific component, but it does require a 'tick' call to function. It's usually used as a component of an "action-layer".

## Messages

### Listens for:
- **child-entity-added** - Called when a new entity has been added and should be considered for addition to the handler. If the entity has a 'handle-logic' message id it's added to the list of entities. 
  - @param entity (Object) - The entity that is being considered for addition to the handler.
- **tick** - Sends a 'handle-logic' message to all the entities the component is handling. If an entity does not handle the message, it's removed it from the entity list.
  - @param resp (object) - An object containing delta which is the time passed since the last tick. 
- **pause-logic** - `handle-logic` messages cease to be triggered on each tick
  - @param resp.time (number) - If set, this will pause the logic for this number of milliseconds. If not set, logic is paused until an `unpause-logic` message is triggered. 
- **unpause-logic** - `handle-logic` messages begin firing each tick.
- **camera-update** - Changes the active logic area when the camera location changes.
  - @param resp.viewportLeft (number) - The left side of the camera viewport in world units. 
  - @param resp.viewportTop (number) - The top side of the camera viewport in world units. 
  - @param resp.viewportWidth (number) - The width of the camera viewport in world units. 
  - @param resp.viewportHeight (number) - The height of the camera viewport in world units. 

### Child Broadcasts:
- **handle-logic** - Sent to entities to run their logic.
  - @param object - An object containing a delta variable that is the time that's passed since the last tick.
- **handle-post-collision-logic** - Sent to entities to run logic that may depend upon collision responses.
  - @param object - An object containing a delta variable that is the time that's passed since the last tick.
- **logical-state** - Sent to entities when their logical state has been changed.
  - @param object - An object a list of key/value pairs representing the owner's state (this value equals owner.state).

## JSON Definition
    {
      "type": "handler-logic",
      
      "buffer" : 12,		//The buffer area around the camera in which entity logic is active. This value changes the buffer in all directions. Defaults to the camera width / 10.
      "bufferWidth" : 12, 	//The buffer area around the camera in which entity logic is active. This value changes the buffer in width only and overrides the buffer value. Defaults to the camera width / 10.
      "bufferHeight" : 12, 	//The buffer area around the camera in which entity logic is active. This value changes the buffer in height only and overrides the buffer value. Defaults to the camera width / 10.
      "bufferLeft" : 12,	//The buffer area around the camera in which entity logic is active. This value changes the buffer at the left of the camera and overrides buffer and bufferWidth. Defaults to the camera width / 10.
      "bufferRight" : 12,	//The buffer area around the camera in which entity logic is active. This value changes the buffer at the right of the camera and overrides buffer and bufferWidth. Defaults to the camera width / 10.
      "bufferTop" : 12,		//The buffer area around the camera in which entity logic is active. This value changes the buffer at the top of the camera and overrides buffer and bufferHeight. Defaults to the camera width / 10.
      "bufferBottom" : 12	//The buffer area around the camera in which entity logic is active. This value changes the buffer at the bottom of the camera and overrides buffer and bufferHeight. Defaults to the camera width / 10.
    }
*/

(function(){
	var updateState = function(entity){
		var state = null,
		changed   = false;
		
		for (state in entity.state){
			if (entity.state[state] !== entity.lastState[state]){
				entity.lastState[state] = entity.state[state];
				changed = true;
			}
		}
		
		return changed;
	};

	return platformer.createComponentClass({
		id: "handler-logic",
	
		constructor: function(definition){
			this.entities = [];
			this.activeEntities = this.entities;
			
			this.paused = 0;
			this.stepLength    = definition.stepLength || 30;//15;
			this.leftoverTime = 0;
			this.maximumStepsPerTick = 10; //Math.ceil(500 / this.stepLength);
			this.camera = {
				left: 0,
				top: 0,
				width: 0,
				height: 0,
				bufferLeft: 	definition.bufferLeft 	|| definition.bufferWidth  || definition.buffer || -1,
				bufferRight: 	definition.bufferRight 	|| definition.bufferWidth  || definition.buffer || -1,
				bufferTop: 		definition.bufferTop 	|| definition.bufferHeight || definition.buffer || -1,
				bufferBottom: 	definition.bufferBottom || definition.bufferHeight || definition.buffer || -1,
				active: false
			};
			this.message = {
				delta: this.stepLength,
				tick: null,
				camera: this.camera,
				movers: this.activeEntities
			};
			this.timeElapsed = {
				name: 'Logic',
				time: 0
			};
		},
		
		events:{
			"child-entity-added": function(entity){
				var messageIds = entity.getMessageIds(); 
				
				for (var x = 0; x < messageIds.length; x++)
				{
					if (messageIds[x] == 'handle-logic' || messageIds[x] == 'handle-post-collision-logic'){
						this.entities.push(entity);
						this.updateNeeded = this.camera.active;
						break;
					}
				}
			},
			"child-entity-removed": function(entity){
				for (var j = this.entities.length - 1; j > -1; j--) {
					if(this.entities[j] === entity){
						this.entities.splice(j, 1);
						break;
					}
				}
			},
			"pause-logic": function(resp){
				if(resp && resp.time){
					this.paused = resp.time;
				} else {
					this.paused = -1;
				}
//				console.log('paused-logic');
			},
			"unpause-logic": function(){
				this.paused = 0;
			},

			"camera-update": function(camera){
				this.camera.left = camera.viewportLeft;
				this.camera.top = camera.viewportTop;
				this.camera.width = camera.viewportWidth;
				this.camera.height = camera.viewportHeight;
				
				if(this.camera.bufferLeft == -1) {
					this.camera.bufferLeft = this.camera.width / 10; // sets a default buffer based on the size of the world units if the buffer was not explicitly set.
				}
				if(this.camera.bufferRight == -1) {
					this.camera.bufferRight = this.camera.width / 10; // sets a default buffer based on the size of the world units if the buffer was not explicitly set.
				}
				if(this.camera.bufferTop == -1) {
					this.camera.bufferTop = this.camera.width / 10; // sets a default buffer based on the size of the world units if the buffer was not explicitly set.
				}
				if(this.camera.bufferBottom == -1) {
					this.camera.bufferBottom = this.camera.width / 10; // sets a default buffer based on the size of the world units if the buffer was not explicitly set.
				}
				
				this.camera.active = true;
				
				this.updateNeeded = true;
			},

			"tick": function(resp){
				var cycles = 0,
				child   = undefined,
				time    = new Date().getTime();
				
				this.leftoverTime += resp.delta;
				cycles = Math.floor(this.leftoverTime / this.stepLength) || 1;
		
				// This makes the frames smoother, but adds variance into the calculations
		//		this.message.delta = this.leftoverTime / cycles;
		//		this.leftoverTime = 0;
				
				// This makes the frames more exact, but varying step numbers between ticks can cause movement to be jerky
				this.message.delta = Math.min(this.leftoverTime, this.stepLength);
				this.leftoverTime = Math.max(this.leftoverTime - (cycles * this.stepLength), 0);
		
				if(this.paused > 0){
					this.paused -= resp.delta;
					if(this.paused < 0){
						this.paused = 0;
					}
				}
				
				if(!this.paused) {
					if(!this.message.tick){
						this.message.tick = resp;
					}
					
					//if(this.updateNeeded){//causes blocks to fall through dirt - not sure the connection here, so leaving out this optimization for now. - DDD
						if(this.activeEntities === this.entities){
							this.message.movers = this.activeEntities = [];
						}
						
						this.activeEntities.length = 0;
						for (var j = this.entities.length - 1; j > -1; j--) {
							child = this.entities[j];
							if(child.alwaysOn || (typeof child.x === 'undefined') || ((child.x >= this.camera.left - this.camera.bufferLeft) && (child.x <= this.camera.left + this.camera.width + this.camera.bufferRight) && (child.y >= this.camera.top - this.camera.bufferTop) && (child.y <= this.camera.top + this.camera.height + this.camera.bufferBottom))){
								this.activeEntities.push(child);
							}
						}
					//}
					
					//Prevents game lockdown when processing takes longer than time alotted.
					cycles = Math.min(cycles, this.maximumStepsPerTick);
					
					for(var i = 0; i < cycles; i++){
						for (var j = this.activeEntities.length - 1; j > -1; j--) {
							child = this.activeEntities[j];
							if(child.triggerEvent('handle-logic', this.message)){
								child.checkCollision = true;
							}
						}
						
						this.timeElapsed.name = 'Logic';
						this.timeElapsed.time = new Date().getTime() - time;
						platformer.game.currentScene.trigger('time-elapsed', this.timeElapsed);
						time += this.timeElapsed.time;
						
						if(this.owner.triggerEvent('check-collision-group', this.message)){ // If a collision group is attached, make sure collision is processed on each logic tick.
							this.timeElapsed.name = 'Collision';
							this.timeElapsed.time = new Date().getTime() - time;
							platformer.game.currentScene.trigger('time-elapsed', this.timeElapsed);
							time += this.timeElapsed.time;

							for (var j = this.activeEntities.length - 1; j > -1; j--) {
								child = this.activeEntities[j];
								child.triggerEvent('handle-post-collision-logic', this.message);
								if(updateState(child)){
									child.triggerEvent('logical-state', child.state);
								}
							}

							this.timeElapsed.name = 'Collision Logic';
							this.timeElapsed.time = new Date().getTime() - time;
							platformer.game.currentScene.trigger('time-elapsed', this.timeElapsed);
							time += this.timeElapsed.time;
						} else {
							for (var j = this.activeEntities.length - 1; j > -1; j--) {
								child = this.activeEntities[j];
								if(updateState(child)){
									child.triggerEvent('logical-state', child.state);
								}
							}
						}
					}
				}
				
				this.timeElapsed.time = new Date().getTime() - time;
				platformer.game.currentScene.trigger('time-elapsed', this.timeElapsed);
			}
		}
	});
})();

/*--------------------------------------------------
 *   camera - ../engine/components/camera.js
 */
/**
# COMPONENT **camera**
This component controls the game camera deciding where and how it should move. The camera also broadcasts messages when the window resizes or its orientation changes.

## Dependencies:
- **rootElement** property (on entity) - This component requires a DOM element which it uses as the "window" determining the camera's aspect ratio and size.

## Messages

### Listens for:
- **tick, camera** - On a `tick` or `camera` step message, the camera updates its location according to its current state.
  - @param message.delta - If necessary, the current camera update function may require the length of the tick to adjust movement rate.
- **follow** - On receiving this message, the camera begins following the requested object.
  - @param message.mode (string) - Required. Can be "locked", "forward", "bounding", or "static". "static" suspends following, but the other three settings require that the entity parameter be defined. Also set the bounding area parameters if sending "bounding" as the following method and the movement parameters if sending "forward" as the following method.
  - @param message.entity ([[Entity]]) - The entity that the camera should commence following.
  - @param message.top (number) - The top of a bounding box following an entity.
  - @param message.left (number) - The left of a bounding box following an entity.
  - @param message.width (number) - The width of a bounding box following an entity.
  - @param message.height (number) - The height of a bounding box following an entity.
  - @param message.movementX (number) - Movement multiplier for focusing the camera ahead of a moving entity in the horizontal direction.
  - @param message.movementY (number) - Movement multiplier for focusing the camera ahead of a moving entity in the vertical direction.
  - @param message.offsetX (number) - How far to offset the camera from the entity horizontally.
  - @param message.offsetY (number) - How far to offset the camera from the entity vertically.
  - @param message.time (number) - How many milliseconds to follow the entity.
- **resize, orientationchange** - The camera listens for these events passed along from [[Game]] (who receives them from `window`). It adjusts the camera viewport according to the new size and position of the window.
- **world-loaded** - On receiving this message, the camera updates its world location and size as necessary. An example of this message is triggered by the [[Tiled-Loader]] component.
  - @param message.width (number) - Optional. The width of the loaded world.
  - @param message.height (number) - Optional. The height of the loaded world.
  - @param message.camera ([[Entity]]) - Optional. An entity that the camera should follow in the loaded world.
- **child-entity-added** - If children entities are listening for a `camera-update` message, they are added to an internal list.
  - @param message ([[Entity]]} - Expects an entity as the message object to determine whether to trigger `camera-update` on it.
- **child-entity-removed** - If children are removed from the entity, they are also removed from this component.
  - @param message ([[Entity]]} - Expects an entity as the message object to determine the entity to remove from its list.

### Child Broadcasts:
- **camera-loaded** - On receiving a "world-loaded" message, the camera broadcast the world size to all children in the world.
  - @param message.width (number) - The width of the loaded world.
  - @param message.height (number) - The height of the loaded world.
- **camera-update** - This component fires this message when the position of the camera in the world has changed.
  - @param message.viewportTop (number) - The top of the camera viewport in world coordinates.
  - @param message.viewportLeft (number) - The left of the camera viewport in world coordinates.
  - @param message.viewportWidth (number) - The width of the camera viewport in world coordinates.
  - @param message.viewportHeight (number) - The height of the camera viewport in world coordinates.
  - @param message.scaleX (number) - Number of window pixels that comprise a single world coordinate on the x-axis.
  - @param message.scaleY (number) - Number of window pixels that comprise a single world coordinate on the y-axis.

### Local Broadcasts:
- **camera-stationary** - This event is triggered when the camera stops moving.
- **camera-update** - This component fires this message when the position of the camera in the world has changed or if the window has been resized.
  - @param message.viewportTop (number) - The top of the camera viewport in world coordinates.
  - @param message.viewportLeft (number) - The left of the camera viewport in world coordinates.
  - @param message.viewportWidth (number) - The width of the camera viewport in world coordinates.
  - @param message.viewportHeight (number) - The height of the camera viewport in world coordinates.
  - @param message.scaleX (number) - Number of window pixels that comprise a single world coordinate on the x-axis.
  - @param message.scaleY (number) - Number of window pixels that comprise a single world coordinate on the y-axis.

## JSON Definition:
    {
      "type": "camera",
      
      "top": 100,
      // Optional number specifying top of viewport in world coordinates
      
      "left": 100,
      // Optional number specifying left of viewport in world coordinates
      
      "width": 100,
      // Optional number specifying width of viewport in world coordinates
      
      "height": 100,
      // Optional number specifying height of viewport in world coordinates
      
      "stretch": true,
      // Optional boolean value that determines whether the camera should stretch the world viewport when window is resized. Defaults to false which maintains the proper aspect ratio.
      
      "scaleWidth": 480,
      // Optional. Sets the size in window coordinates at which the world zoom should snap to a larger multiple of pixel size (1,2, 3, etc). This is useful for maintaining a specific game pixel viewport width on pixel art games so pixels use multiples rather than smooth scaling. Default is 0 which causes smooth scaling of the game world in a resizing viewport.
      
      "transitionX": 400,
      // Optional. Sets how quickly the camera should pan to a new position in the horizontal direction. Default is 400.
      
      "transitionY": 400,
      // Optional. Sets how quickly the camera should pan to a new position in the vertical direction. Default is 600.
      
      "threshold": 3
      // Optional. Sets how many units the followed entity can move before the camera will re-center. Default is 1.
    }
*/
(function(){
	var resize = function (self){
		
		//The dimensions of the camera in the window
		self.window.viewportTop = self.element.offsetTop;
		self.window.viewportLeft = self.element.offsetLeft;
		self.window.viewportWidth = self.element.offsetWidth || self.worldWidth;
		self.window.viewportHeight = self.element.offsetHeight || self.worldHeight;

		if(self.scaleWidth){
			self.world.viewportWidth = self.window.viewportWidth / Math.ceil(self.window.viewportWidth / self.scaleWidth);
		}
		
		if(!self.stretch || self.scaleWidth){
			self.world.viewportHeight = self.window.viewportHeight * self.world.viewportWidth / self.window.viewportWidth;
		}
		
		self.worldPerWindowUnitWidth  = self.world.viewportWidth / self.window.viewportWidth;
		self.worldPerWindowUnitHeight = self.world.viewportHeight / self.window.viewportHeight;
		self.windowPerWorldUnitWidth  = self.window.viewportWidth / self.world.viewportWidth;
		self.windowPerWorldUnitHeight = self.window.viewportHeight/ self.world.viewportHeight;
		
		self.windowResized = true;
	};

	return platformer.createComponentClass({
		id: 'camera',
		constructor: function(definition){
			this.entities = [];

			// on resize should the view be stretched or should the world's initial aspect ratio be maintained?
			this.stretch = definition.stretch || false;
			
			this.transitionX = definition.transitionX || definition.transition;
			this.transitionY = definition.transitionY || definition.transition;
			if(isNaN(this.transitionX)){
				this.transitionX = 400;
			}
			if(isNaN(this.transitionY)){
				this.transitionY = 600;
			}

			this.threshold = definition.threshold || 1;
			this.element = null;
	
			//The dimensions of the camera in the window
			this.window = {
				viewportTop:    0,
				viewportLeft:   0,
				viewportWidth:  0,
				viewportHeight: 0
			};
			
			//The dimensions of the camera in the game world
			this.world = {
				viewportWidth:       definition.width       || 0,
				viewportHeight:      definition.height      || 0,
				viewportLeft:        definition.left        || 0,
				viewportTop:         definition.top         || 0
			};
			
			this.message = { //defined here so it can be reused
				viewportWidth:  0,
				viewportHeight: 0,
				viewportLeft:   0,
				viewportTop:    0,
				scaleX: 0,
				scaleY: 0
			};
	
			// on resize should the game snap to certain sizes or should it be fluid?
			// 0 == fluid scaling
			// set the windowWidth multiple that triggers zooming in
			this.scaleWidth = definition.scaleWidth || 0;
			
			//Whether the map has finished loading.
			this.worldIsLoaded = false;
			// The dimensions of the entire world
			this.worldWidth  = definition.worldWidth  || definition.width       || 0;
			this.worldHeight = definition.worldHeight || definition.height      || 0;
			
			this.following = undefined;
			this.state = 'static';//'roaming';
			
			//FOLLOW MODE VARIABLES
			
			//--Bounding
			this.bBBorderX = 0;
			this.bBBorderY = 0;
			this.bBInnerWidth = 0;
			this.bBInnerHeight = 0;
			this.setBoundingArea();
			
			//Forward Follow
			this.lastLeft = this.world.viewportLeft;
			this.lastTop = this.world.viewportTop;
			this.forwardX = 0;
			this.forwardY = 0;
			this.averageOffsetX = 0;
			this.averageOffsetY = 0;
			this.offsetX = 0;
			this.offsetY = 0;
			this.forwardFollower = {
				x: this.lastLeft,
				y: this.lastTop
			};
			
			this.lastFollow = {
				entity: null,
				mode: null,
				offsetX: 0,
				offsetY: 0,
				begin: 0
			};
			
			this.direction = true;
			this.stationary = false;
			
			this.newChild = false;
		},
		events: {
			"load": function(){
				this.element = this.owner.canvas || this.owner.element || this.owner.rootElement;
				resize(this);
			},
			"child-entity-added": function(entity){
				var messageIds = entity.getMessageIds(); 
				
				for (var x = 0; x < messageIds.length; x++)
				{
					if (messageIds[x] == 'camera-update') {
						this.entities.push(entity);
						this.newChild = true;
						
						if(this.worldIsLoaded){
							entity.trigger('camera-loaded', {
								width: this.worldWidth,
								height: this.worldHeight
							});
						}

						break;
					}
				}
			},
			"child-entity-removed": function(entity){
				var x = 0;

				for (x in this.entities) {
					if(this.entities[x] === entity){
						this.entities.splice(x, 1);
						break;
					}
				}
			},
			"world-loaded": function(values){
				this.worldIsLoaded = true;
				this.worldWidth   = this.owner.worldWidth  = values.width;
				this.worldHeight  = this.owner.worldHeight = values.height;
				if(values.camera){
					this.follow(values.camera);
				}
				for (var x = this.entities.length - 1; x > -1; x--) {
					this.entities[x].trigger('camera-loaded', values);
				}
			},
			"tick": function(resp){
				var broadcastUpdate = this.newChild;
				
				this.newChild = false;
				
				switch (this.state)
				{
				case 'following':
					broadcastUpdate = this.followingFunction(this.following, resp.delta);
					break;
				case 'static':
				default:
					break;
				}
				
				if(broadcastUpdate || this.windowResized){
					this.stationary = false;
					
					this.message.viewportLeft   = this.world.viewportLeft;
					this.message.viewportTop    = this.world.viewportTop;
					this.message.viewportWidth  = this.world.viewportWidth;
					this.message.viewportHeight = this.world.viewportHeight;
					this.message.scaleX         = this.windowPerWorldUnitWidth;
					this.message.scaleY         = this.windowPerWorldUnitHeight;

					this.windowResized = false;
					this.owner.trigger('camera-update', this.message);

					if(broadcastUpdate){
						for (var x = this.entities.length - 1; x > -1; x--)
						{
							if(!this.entities[x].trigger('camera-update', this.message)){
								this.entities.splice(x, 1);
							}
						}
					}
				} else if (!this.stationary){
					this.owner.trigger('camera-stationary', this.message);
					this.stationary = true;
				}
				
				if(this.lastFollow.begin){
					if(this.lastFollow.begin < new Date().getTime()){
						this.follow(this.lastFollow);
					}
				}
			},
			"resize": function(){
				resize(this);
			},
			"orientationchange": function(){
				resize(this);
			},
			"follow": function (def){
				this.follow(def);
			}
		},
		
		methods: {
			follow: function (def){
				if (def.time){ //save current follow
					if(!this.lastFollow.begin){
						this.lastFollow.entity = this.following;
						this.lastFollow.mode   = this.mode;
						this.lastFollow.offsetX = this.offsetX;
						this.lastFollow.offsetY = this.offsetY;
					}
					this.lastFollow.begin  = new Date().getTime() + def.time;
				} else {
					if(this.lastFollow.begin){
						this.lastFollow.begin = 0;
					}
				}
				
				this.mode = def.mode;
				
				switch (def.mode) {
				case 'locked':
					this.state = 'following';
					this.following = def.entity;
					this.followingFunction = this.lockedFollow;
					this.offsetX = def.offsetX || 0;
					this.offsetY = def.offsetY || 0;
					break;
				case 'forward':
					this.state = 'following';
					this.followFocused = false;
					this.following = def.entity;
					this.lastLeft  = def.entity.x || 0;
					this.lastTop   = def.entity.y || 0;
					this.forwardX  = def.movementX || (this.transitionX / 10);
					this.forwardY  = def.movementY || 0;
					this.averageOffsetX = 0;
					this.averageOffsetY = 0;
					this.offsetX = def.offsetX || 0;
					this.offsetY = def.offsetY || 0;
					this.followingFunction = this.forwardFollow;
					break;
				case 'bounding':
					this.state = 'following';
					this.following = def.entity;
					this.offsetX = def.offsetX || 0;
					this.offsetY = def.offsetY || 0;
					this.setBoundingArea(def.top, def.left, def.width, def.height);
					this.followingFunction = this.boundingFollow;
					break;
				case 'static':
				default:
					this.state = 'static';
					this.following = undefined;
					this.followingFunction = undefined;
					if(def && (typeof def.top === 'number') && (typeof def.left === 'number')){
						this.move(def.left, def.top);
					}
					break;
				}
				
				if(def.begin){ // get rid of last follow
					def.begin = 0;
				}

			},
			
			move: function (newLeft, newTop){
				var moved = this.moveLeft(newLeft);
				moved = this.moveTop(newTop) || moved;
				return moved;
			},
			
			moveLeft: function (newLeft){
				if(Math.abs(this.world.viewportLeft - newLeft) > this.threshold){
					if (this.worldWidth < this.world.viewportWidth){
						this.world.viewportLeft = (this.worldWidth - this.world.viewportWidth) / 2;
					} else if (this.worldWidth && (newLeft + this.world.viewportWidth > this.worldWidth)) {
						this.world.viewportLeft = this.worldWidth - this.world.viewportWidth;
					} else if (this.worldWidth && (newLeft < 0)) {
						this.world.viewportLeft = 0; 
					} else {
						this.world.viewportLeft = newLeft;
					}
					return true;
				}
				return false;
			},
			
			moveTop: function (newTop) {
				if(Math.abs(this.world.viewportTop - newTop) > this.threshold){
					if (this.worldHeight < this.world.viewportHeight){
						this.world.viewportTop = (this.worldHeight - this.world.viewportHeight) / 2;
					} else if (this.worldHeight && (newTop + this.world.viewportHeight > this.worldHeight)) {
						this.world.viewportTop = this.worldHeight - this.world.viewportHeight;
					} else if (this.worldHeight && (newTop < 0)) {
						this.world.viewportTop = 0; 
					} else {
						this.world.viewportTop = newTop;
//						console.log(newTop + ',' + this.world.viewportHeight + ',' + this.worldHeight);
					}
					return true;
				}
				return false;
			},
			
			lockedFollow: function (entity, time, slowdown){
				var newLeft = entity.x - (this.world.viewportWidth / 2),
				newTop      = entity.y - (this.world.viewportHeight / 2),
				ratioX      = (this.transitionX?Math.min(time / this.transitionX, 1):1),
				iratioX     = 1 - ratioX,
				ratioY      = (this.transitionY?Math.min(time / this.transitionY, 1):1),
				iratioY     = 1 - ratioY;

				return this.move(ratioX * newLeft + iratioX * this.world.viewportLeft, ratioY * newTop + iratioY * this.world.viewportTop);
			},
			
			forwardFollow: function (entity, time){
				var ff = this.forwardFollower,
				standardizeTimeDistance = 15 / time, //This allows the camera to pan appropriately on slower devices or longer ticks
				moved  = false,
				x = entity.x + this.offsetX,
				y = entity.y + this.offsetY;
				
				if(this.followFocused && (this.lastLeft === x) && (this.lastTop === y)){
//					ff.x = this.world.viewportLeft + (this.world.viewportWidth  / 2); 
//					ff.y = this.world.viewportTop  + (this.world.viewportHeight / 2); 

					return this.lockedFollow(ff, time);
				} else {
					// span over last 10 ticks to prevent jerkiness
					this.averageOffsetX *= 0.9;
					this.averageOffsetY *= 0.9;
					this.averageOffsetX += 0.1 * (x - this.lastLeft) * standardizeTimeDistance;
					this.averageOffsetY += 0.1 * (y - this.lastTop)  * standardizeTimeDistance;

					if (Math.abs(this.averageOffsetX) > (this.world.viewportWidth / (this.forwardX * 2))){
						this.averageOffsetX = 0;
					}
					if (Math.abs(this.averageOffsetY) > (this.world.viewportHeight / (this.forwardY * 2))){
						this.averageOffsetY = 0;
					}
					
					ff.x = this.averageOffsetX * this.forwardX + x;
					ff.y = this.averageOffsetY * this.forwardY + y;
					
					this.lastLeft = x;
					this.lastTop  = y;
					
					moved = this.lockedFollow(ff, time);

					if(!this.followFocused && !moved){
						this.followFocused = true;
					}
					
					return moved;
				}
				
				
			},
			
			setBoundingArea: function (top, left, width, height){
				this.bBBorderY = (typeof top !== 'undefined') ? top : this.world.viewportHeight  * 0.25;
				this.bBBorderX = (typeof left !== 'undefined') ? left : this.world.viewportWidth * 0.4;
				this.bBInnerWidth = (typeof width !== 'undefined') ? width : this.world.viewportWidth - (2 * this.bBBorderX);
				this.bBInnerHeight = (typeof height !== 'undefined') ? height : this.world.viewportHeight - (2 * this.bBBorderY);
			},
			
			boundingFollow: function (entity, time){
				var newLeft = null,
				newTop      = null,
				ratioX      = (this.transitionX?Math.min(time / this.transitionX, 1):1),
				iratioX     = 1 - ratioX,
				ratioY      = (this.transitionY?Math.min(time / this.transitionY, 1):1),
				iratioY     = 1 - ratioY;
				
				if (entity.x > this.world.viewportLeft + this.bBBorderX + this.bBInnerWidth){
					newLeft = entity.x -(this.bBBorderX + this.bBInnerWidth);
				} else if (entity.x < this.world.viewportLeft + this.bBBorderX) {
					newLeft = entity.x - this.bBBorderX;
				}
				
				if (entity.y > this.world.viewportTop + this.bBBorderY + this.bBInnerHeight){
					newTop = entity.y - (this.bBBorderY + this.bBInnerHeight);
				} else if (entity.y < this.world.viewportTop + this.bBBorderY) {
					newTop = entity.y - this.bBBorderY;
				}
				
				if (typeof newLeft !== 'null'){
					newLeft = this.moveLeft(ratioX * newLeft + iratioX * this.world.viewportLeft);
				}
				
				if (typeof newTop !== 'null'){
					newTop = this.moveTop(ratioY * newTop + iratioY * this.world.viewportTop);
				}
				
				return newLeft || newTop;
			},
			
			windowToWorld: function (sCoords){
				var wCoords = [];
				wCoords[0] = Math.round((sCoords[0] - this.window.viewportLeft) * this.worldPerWindowUnitWidth);
				wCoords[1] = Math.round((sCoords[1] - this.window.viewportTop)  * this.worldPerWindowUnitHeight);
				return wCoords; 
			},
			
			worldToWindow: function (wCoords){
				var sCoords = [];
				sCoords[0] = Math.round((wCoords[0] * this.windowPerWorldUnitWidth) + this.window.viewportLeft);
				sCoords[1] = Math.round((wCoords[1] * this.windowPerWorldUnitHeight) + this.window.viewportTop);
				return sCoords;
			},
			
			destroy: function(){
				this.entities.length = 0;
			}
		}
	});
})();


/*--------------------------------------------------
 *   collision-group - ../engine/components/collision-group.js
 */
/**
# COMPONENT **collision-group**
This component groups other entities with this entity for collision checking. This is useful for carrying and moving platforms. It uses `entity-container` component messages if triggered to add to its collision list and also listens for explicit add/remove messages (useful in the absence of an `entity-container` component).

## Dependencies:
- [[handler-collision]] (on entity's parent) - The collision handler uses the methods this component exposes to perform collision for this entity as a group before performing collision on each entity in the group.

## Messages

### Listens for:
- **child-entity-added, add-collision-entity** - On receiving this message, the component checks the entity to determine whether it listens for collision messages. If so, the entity is added to the collision group.
  - @param message ([[Entity]] object) - The entity to be added.
- **child-entity-removed, remove-collision-entity** - On receiving this message, the component looks for the entity in its collision group and removes it.
  - @param message ([[Entity]] object) - The entity to be removed.
- **relocate-entity** - When this message is triggered, the collision group updates its record of the owner's last (x, y) coordinate.

## JSON Definition:
    {
      "type": "collision-group"
      // This component has no customizable properties.
    }
    
Requires: ["../aabb.js"]
*/
(function(){
	//set here to make them reusable objects
	var appendUniqueItems = function(hostArray, insertArray){
		var i  = 0,
		j      = 0,
		length = hostArray.length,
		found  = false;
		
		for(; i < insertArray.length; i++){
			found = false;
			for(j = 0; j < length; j++){
				if(insertArray[i] === hostArray[j]){
					found = true;
					break;
				}
			}
			if(!found){
				hostArray.push(insertArray[i]);
			}
		}
		
		return hostArray;
	};
	
	return platformer.createComponentClass({
		id: 'collision-group',
		
		constructor: function(definition){
			var self = this;
			
			this.solidEntities = [];
			
			this.terrain = undefined;
			this.aabb     = new platformer.AABB(this.owner.x, this.owner.y);
			this.prevAABB = new platformer.AABB(this.owner.x, this.owner.y);
			this.owner.previousX = this.owner.previousX || this.owner.x;
			this.owner.previousY = this.owner.previousY || this.owner.y;
			
			this.collisionGroup = this.owner.collisionGroup = {
				getAllEntities: function(){
					var count = 0,
					childEntity = null;
					
					for (var x = 0; x < self.solidEntities.length; x++){
						childEntity = self.solidEntities[x];
						if((childEntity !== self.owner) && childEntity.collisionGroup){
							count += childEntity.collisionGroup.getAllEntities();
						} else {
							count += 1;
						}
					}

					return count;
				},
				getSize: function(){
					return self.solidEntities.length;
				},
				getCollisionTypes: function(){
					return self.getCollisionTypes();
				},
				getSolidCollisions: function(){
					return self.getSolidCollisions();
				},
				getAABB: function(collisionType){
					return self.getAABB(collisionType);
				},
				getPreviousAABB: function(collisionType){
					return self.getPreviousAABB(collisionType);
				},
				getShapes: function(collisionType){
					return self.getShapes(collisionType);
				},
				getPrevShapes: function(collisionType){
					return self.getPrevShapes(collisionType);
				},
				prepareCollision: function(x, y){
					return self.prepareCollision(x, y);
				},
				relocateEntity: function(x, y, collisionData){
					return self.relocateEntity(x, y, collisionData);
				},
				movePreviousX: function(x){
					return self.movePreviousX(x);
				},
				getSolidEntities: function(){
					return self.solidEntities;
				},
				jumpThrough: false //TODO: this introduces odd behavior - not sure how to resolve yet. - DDD
			};
		},
		
		events:{
			"child-entity-added": function(entity){
				this.addCollisionEntity(entity);
			},
			
			"add-collision-entity": function(entity){
				this.addCollisionEntity(entity);
			},
			
			"child-entity-removed": function(entity){
				this.removeCollisionEntity(entity);
			},
			
			"remove-collision-entity": function(entity){
				this.removeCollisionEntity(entity);
			},
			
			"relocate-entity": function(resp){
				this.owner.previousX = this.owner.x;
				this.owner.previousY = this.owner.y;
				this.updateAABB();
			}
		},
		
		methods: {
			addCollisionEntity: function(entity){
				var i = 0,
				types = entity.collisionTypes;
				
				if(types){
					for(; i < types.length; i++){
						if(entity.solidCollisions[types[i]].length && !entity.immobile){
							this.solidEntities[this.solidEntities.length] = entity;
						}
					}
					this.updateAABB();
				}
			},
			
			removeCollisionEntity: function(entity){
				var x = 0,
				i     = 0,
				types = entity.collisionTypes;

				if (types) {
					for(; i < types.length; i++){
						if(entity.solidCollisions[types[i]].length){
							for (x in this.solidEntities) {
								if(this.solidEntities[x] === entity){
									this.solidEntities.splice(x, 1);
									break;
								}
							}
						}
					}
					this.updateAABB();
				}
			},
			
			getCollisionTypes: function(){
				var childEntity = null,
				compiledList = [];
				
				for (var x = 0; x < this.solidEntities.length; x++){
					childEntity = this.solidEntities[x];
					if((childEntity !== this.owner) && childEntity.collisionGroup){
						childEntity = childEntity.collisionGroup;
					}
					compiledList = appendUniqueItems(compiledList, childEntity.getCollisionTypes());
				}
				
				return compiledList;
			},

			getSolidCollisions: function(){
				var childEntity = null,
				compiledList = {},
				entityList = null;
				
				for (var x = 0; x < this.solidEntities.length; x++){
					childEntity = this.solidEntities[x];
					if((childEntity !== this.owner) && childEntity.collisionGroup){
						childEntity = childEntity.collisionGroup;
					}
					entityList = childEntity.getSolidCollisions();
					for (var z in entityList){
						compiledList[z] = appendUniqueItems(compiledList[z] || [], entityList[z]);
					}
				}
				
				return compiledList;
			},
			
			getAABB: function(collisionType){
				var childEntity = null;
				
				if(!collisionType){
					return this.aabb;
				} else {
					var aabb = new platformer.AABB();
					for (var x = 0; x < this.solidEntities.length; x++){
						childEntity = this.solidEntities[x];
						if((childEntity !== this.owner) && childEntity.collisionGroup){
							childEntity = childEntity.collisionGroup;
						}
						
						aabb.include(childEntity.getAABB(collisionType));
					}
					return aabb;
				}
			},

			getPreviousAABB: function(collisionType){
				var childEntity = null;
				
				if(!collisionType){
					return this.prevAABB;
				} else {
					var aabb = new platformer.AABB();
					for (var x = 0; x < this.solidEntities.length; x++){
						childEntity = this.solidEntities[x];
						if((childEntity !== this.owner) && childEntity.collisionGroup){
							childEntity = childEntity.collisionGroup;
						}

						aabb.include(childEntity.getPreviousAABB(collisionType));
					}
					return aabb;
				}
			},
			
			updateAABB: function(){
				this.aabb.reset();
				for (var x = 0; x < this.solidEntities.length; x++){
					this.aabb.include(((this.solidEntities[x] !== this.owner) && this.solidEntities[x].getCollisionGroupAABB)?this.solidEntities[x].getCollisionGroupAABB():this.solidEntities[x].getAABB());
				}
			},
			
			getShapes: function(collisionType){
				var childEntity = null,
				shapes = [],
				newShapes = null;
				
				for (var x = 0; x < this.solidEntities.length; x++){
					childEntity = this.solidEntities[x];
					if((childEntity !== this.owner) && childEntity.collisionGroup){
						childEntity = childEntity.collisionGroup;
					}
					newShapes = childEntity.getShapes(collisionType);
					if(newShapes){
						shapes = shapes.concat(newShapes);
					}
				}
				return shapes;
			},

			getPrevShapes: function(collisionType){
				var childEntity = null,
				shapes = [];
				
				for (var x = 0; x < this.solidEntities.length; x++){
					childEntity = this.solidEntities[x];
					if((childEntity !== this.owner) && childEntity.collisionGroup){
						childEntity = childEntity.collisionGroup;
					}
					newShapes = childEntity.getPrevShapes(collisionType);
					if(newShapes){
						shapes = shapes.concat(newShapes);
					}
				}
				return shapes;
			},
			
			prepareCollision: function(x, y){
				var childEntity = null,
				oX = 0,
				oY = 0;
				
				for (var i = 0; i < this.solidEntities.length; i++){
					childEntity = this.solidEntities[i];
					childEntity.saveDX = childEntity.x - childEntity.previousX;
					childEntity.saveDY = childEntity.y - childEntity.previousY;
					oX = childEntity.saveOX = this.owner.previousX - childEntity.previousX;
					oY = childEntity.saveOY = this.owner.previousY - childEntity.previousY;
					if((childEntity !== this.owner) && childEntity.collisionGroup){
						childEntity = childEntity.collisionGroup;
					}
					childEntity.prepareCollision(x - oX, y - oY);
				}
			},
			
			movePreviousX: function(x){
				var childEntity = null,
				offset = 0,
				i = 0;
				
				for (; i < this.solidEntities.length; i++){
					childEntity = this.solidEntities[i];
					offset = childEntity.saveOX;
					if((childEntity !== this.owner) && childEntity.collisionGroup){
						childEntity = childEntity.collisionGroup;
					}
					childEntity.movePreviousX(x - offset);
				}
			},
			
			relocateEntity: function(x, y, collisionData){
				var childEntity = null,
				entity = null,
				i = 0;
				
				this.owner.saveDX -= x - this.owner.previousX;
				this.owner.saveDY -= y - this.owner.previousY;

				for(i = 0; i < collisionData.xCount; i++){
					if(collisionData.getXEntry(i).thisShape.owner === this.owner){
						this.owner.saveDX = 0;
						break;
					}
				}
				
				for(i = 0; i < collisionData.yCount; i++){
					if(collisionData.getYEntry(i).thisShape.owner === this.owner){
						this.owner.saveDY = 0;
						break;
					}
				}
				
				for (var i = 0; i < this.solidEntities.length; i++){
					childEntity = entity = this.solidEntities[i];
					if((childEntity !== this.owner) && childEntity.collisionGroup){
						childEntity = childEntity.collisionGroup;
					}
					childEntity.relocateEntity(x - entity.saveOX, y - entity.saveOY, collisionData);
					entity.x += entity.saveDX;
					entity.y += entity.saveDY;
					if(entity !== this.owner){
						entity.x += this.owner.saveDX;
						entity.y += this.owner.saveDY;
					}
				}
			},

			destroy: function(){
				this.solidEntities.length = 0;
			}
		},
		
		publicMethods: {
			getCollisionGroupAABB: function(){
				return this.getAABB();
			},
			
			getWorldEntities: function(){
				return this.owner.parent.getWorldEntities();
			},
			
			getWorldTerrain: function(){
				return this.owner.parent.getWorldTerrain();
			}
		}
	});
})();

/*--------------------------------------------------
 *   audio - ../engine/components/audio.js
 */
/**
# COMPONENT **audio**
This component plays audio. Audio is played in one of two ways, by triggering specific messages defined in the audio component definition or using an audio map which plays sounds when the entity enters specified states (like render-sprite).

## Dependencies:
- [createjs.SoundJS] [link1] - This component requires the SoundJS library to be included for audio functionality.
- [[handler-render-createjs]] (on entity's parent) - This component listens for a render "tick" message in order to stop audio clips that have a play length set.

## Messages

### Listens for:
- **handle-render** - On each `handle-render` message, this component checks its list of playing audio clips and stops any clips whose play length has been reached.
  - @param message.delta (number) - uses the value of delta (time since last `handle-render`) to track progess of the audio clip and stop clip if play length has been reached.
- **audio-mute-toggle** - On receiving this message, the audio will mute if unmuted, and unmute if muted.
  - @param message (string) - If a message is included, a string is expected that specifies an audio id, and that particular sound instance is toggled. Otherwise all audio is toggled from mute to unmute or vice versa.
- **audio-mute** - On receiving this message all audio will mute, or a particular sound instance will mute if an id is specified.
  - @param message (string) - If a message is included, a string is expected that specifies an audio id, and that particular sound instance is muted.
- **audio-unmute** - On receiving this message all audio will unmute, or a particular sound instance will unmute if an id is specified.
  - @param message (string) - If a message is included, a string is expected that specifies an audio id, and that particular sound instance is unmuted.
- **audio-stop** - On receiving this message all audio will stop playing.
- **logical-state** - This component listens for logical state changes and tests the current state of the entity against the audio map. If a match is found, the matching audio clip is played.
  - @param message (object) - Required. Lists various states of the entity as boolean values. For example: {jumping: false, walking: true}. This component retains its own list of states and updates them as `logical-state` messages are received, allowing multiple logical components to broadcast state messages.
- **[Messages specified in definition]** - Listens for additional messages and on receiving them, begins playing corresponding audio clips. Audio play message can optionally include several parameters, many of which correspond with [SoundJS play parameters] [link2].
  - @param message.interrupt (string) - Optional. Can be "any", "early", "late", or "none". Determines how to handle the audio when it's already playing but a new play request is received. Default is "any".
  - @param message.delay (integer) - Optional. Time in milliseconds to wait before playing audio once the message is received. Default is 0.
  - @param message.offset (integer) - Optional. Time in milliseconds determining where in the audio clip to begin playback. Default is 0.
  - @param message.length (integer) - Optional. Time in milliseconds to play audio before stopping it. If 0 or not specified, play continues to the end of the audio clip.
  - @param message.loop (integer) - Optional. Determines how many more times to play the audio clip once it finishes. Set to -1 for an infinite loop. Default is 0.
  - @param message.volume (float) - Optional. Used to specify how loud to play audio on a range from 0 (mute) to 1 (full volume). Default is 1.
  - @param message.pan (float) - Optional. Used to specify the pan of audio on a range of -1 (left) to 1 (right). Default is 0.
  - @param message.next (string) - Optional. Used to specify the next audio clip to play once this one is complete.

## JSON Definition:
    {
      "type": "audio",
      
      "audioMap":{
      // Required. Use the audioMap property object to map messages triggered with audio clips to play. At least one audio mapping should be included for audio to play.
      
        "message-triggered": "audio-id",
        // This simple form is useful to listen for "message-triggered" and play "audio-id" using default audio properties.
        
        "another-message": {
        // To specify audio properties, instead of mapping the message to an audio id string, map it to an object with one or more of the properties shown below. Many of these properties directly correspond to [SoundJS play parameters] (http://www.createjs.com/Docs/SoundJS/SoundJS.html#method_play).
        
          "sound": "another-audio-id",
          // Required. This is the audio clip to play when "another-message" is triggered.
          
          "interrupt": "none",
          // Optional. Can be "any", "early", "late", or "none". Determines how to handle the audio when it's already playing but a new play request is received. Default is "any".
          
          "delay": 500,
          // Optional. Time in milliseconds to wait before playing audio once the message is received. Default is 0.
          
          "offset": 1500,
          // Optional. Time in milliseconds determining where in the audio clip to begin playback. Default is 0.
          
          "length": 2500,
          // Optional. Time in milliseconds to play audio before stopping it. If 0 or not specified, play continues to the end of the audio clip.

          "loop": 4,
          // Optional. Determines how many more times to play the audio clip once it finishes. Set to -1 for an infinite loop. Default is 0.
          
          "volume": 0.75,
          // Optional. Used to specify how loud to play audio on a range from 0 (mute) to 1 (full volume). Default is 1.
          
          "pan": -0.25,
          // Optional. Used to specify the pan of audio on a range of -1 (left) to 1 (right). Default is 0.

          "next": ["audio-id"]
          // Optional. Used to specify a list of audio clips to play once this one is finished.
        }
      }
    }

[link1]: http://www.createjs.com/Docs/SoundJS/module_SoundJS.html
[link2]: http://www.createjs.com/Docs/SoundJS/SoundJS.html#method_play
*/
(function(){
	var preventOverlaps = [],
	defaultSettings = {
		interrupt: createjs.Sound.INTERRUPT_ANY, //INTERRUPT_ANY, INTERRUPT_EARLY, INTERRUPT_LATE, or INTERRUPT_NONE
		delay:     0,
		offset:    0,
		loop:      0,
		volume:    1,
		pan:       0,
		length:    0,
		next:      false,
		events:    false
	},
	stop = {
		stop: true,
		playthrough: true
	},
	audioInProgress = function(){
		if(!preventOverlaps.length){
			return false;
		}
		for (var i in preventOverlaps){
			if(preventOverlaps[i].priorityTrack){
				return preventOverlaps[i].priorityTrack;
			}
		}
		return false;
	},
	sortByTime = function(a,b){
		return a.time - b.time;
	},
	playSound = function(soundDefinition){
		var sound = '',
		attributes = undefined,
		instance = null,
		assets = platformer.game.settings.assets;
		if(typeof soundDefinition === 'string'){
			sound      = soundDefinition;
			attributes = {};
		} else if (Array.isArray(soundDefinition)){
			if(typeof soundDefinition[0] === 'string'){
				sound      = soundDefinition[0];
				attributes = {next: []};
			} else {
				sound      = soundDefinition[0].sound;
				attributes = {};
				for (var property in soundDefinition[0]){
					attributes[property] = soundDefinition[0][property];
				}
				if(attributes.next){
					attributes.next = attributes.next.slice();
				} else {
					attributes.next = [];
				}
			}
			for(var i = 1; i < soundDefinition.length; i++){
				attributes.next.push(soundDefinition[i]);
			}
		} else {
			sound      = soundDefinition.sound;
			attributes = {
				interrupt: soundDefinition.interrupt,
				delay:     soundDefinition.delay,
				offset:    soundDefinition.offset,
				loop:      soundDefinition.loop,
				volume:    soundDefinition.volume,
				pan:       soundDefinition.pan,
				length:    soundDefinition.length,
				next:      soundDefinition.next,
				events:    soundDefinition.events
			};
		}
		if(assets[sound]){
			if(assets[sound].data){
				for(var item in assets[sound].data){
					attributes[item] = attributes[item] || assets[sound].data[item];
				}
			}
			if(assets[sound].assetId){
				sound = assets[sound].assetId;
			}
			return function(value){
				var self = this,
				audio = undefined,
				next = false,
				events = false,
				offset = defaultSettings.offset,
				length    = 0,
				willOverlap = audioInProgress();
				
				if((this.preventOverlaps !== 'ignore') && willOverlap){
					if(this.preventOverlaps === 'append'){
						willOverlap.next.push(soundDefinition);
					}
					return ;
				}

				value = value || attributes;
				if(value && value.stop){
					if(instance) {
						if(value.playthrough){
							instance.remainingLoops = 0;
						} else {
							instance.stop();
							self.removeClip(instance);
						}
					}
				} else {
					if(value){
						var interrupt = value.interrupt || attributes.interrupt || defaultSettings.interrupt,
						delay         = value.delay     || attributes.delay  || defaultSettings.delay,
						loop          = value.loop      || attributes.loop   || defaultSettings.loop,
						volume        = (typeof value.volume !== 'undefined')? value.volume: ((typeof attributes.volume !== 'undefined')? attributes.volume: defaultSettings.volume),
						pan           = value.pan       || attributes.pan    || defaultSettings.pan;
						
						length        = value.length    || attributes.length || defaultSettings.length;
						offset        = value.offset    || attributes.offset || defaultSettings.offset;
						next          = value.next      || attributes.next   || defaultSettings.next;
						events        = value.events    || attributes.events || defaultSettings.events;

						audio = instance = createjs.Sound.play(sound, interrupt, delay, offset, loop, volume, pan);

					} else {
						audio = instance = createjs.Sound.play(sound, defaultSettings.interrupt, defaultSettings.delay, defaultSettings.offset, defaultSettings.loop, defaultSettings.volume, defaultSettings.pan);
					}
					
					if(this.preventOverlaps && (this.preventOverlaps !== 'ignore')){
						this.priorityTrack = {
							audio: audio,
							next: next || []
						};
					}

					if(events){
						audio.sequenceEvents = [];
						for(var i = 0; i < events.length; i++){
							audio.sequenceEvents.push({
								event: events[i].event,
								time: +events[i].time + offset,
								message: events[i].message
							});
						}
						audio.sequenceEvents.sort(sortByTime);
					}

					audio.addEventListener('complete', function(){
						self.onComplete(audio, next);
					});

					if(audio.playState === 'playFailed'){
						if(this.owner.debug){
							console.warn('Unable to play "' + sound + '".', audio);
						}
						this.onComplete(audio, next);
					} else {
						if(length){ // Length is specified so we need to turn off the sound at some point.
							this.timedAudioClips.push({length: length, progress: 0, audio: audio, next: next, offset: offset});
						}
						this.activeAudioClips.push(audio);
					}
				}
			};
		} else {
			console.warn('Audio clip "' + sound + '" needs to be added to config.js.');
			return function(){
			};
		}
	},
	createTest = function(testStates, audio){
		var states = testStates.replace(/ /g, '').split(',');
		if(testStates === 'default'){
			return function(state){
				return testStates;
			};
		} else {
			return function(state){
				for(var i = 0; i < states.length; i++){
					if(!state[states[i]]){
						return false;
					}
				}
				return testStates;
			};
		}
	};
	
	return platformer.createComponentClass({
		id: 'audio',
			
		constructor: function(definition){
			this.timedAudioClips = [];
			this.activeAudioClips = [];		
	
			this.state = {};
			this.stateChange = false;
			this.currentState = false;
	
			this.forcePlaythrough = this.owner.forcePlaythrough || definition.forcePlaythrough;
			if(typeof this.forcePlaythrough !== 'boolean') {
				this.forcePlaythrough = true;
			}
			
			if(definition.audioMap){
				this.checkStates = [];
				for (var key in definition.audioMap){
					this.addEventListener(key, playSound(definition.audioMap[key]));
					this.checkStates.push(createTest(key, definition.audioMap[key]));
				}
			}
			
			if(definition.preventOverlaps) {
				this.preventOverlaps = definition.preventOverlaps;
				if(this.preventOverlaps !== 'ignore'){
					preventOverlaps.push(this);
				}
			}
		},

		events: {// These are messages that this component listens for
		    "handle-render": function(resp){
				var i     = 0,
				audioClip = undefined,
				newArray  = undefined;
				
				if(this.timedAudioClips.length){
					newArray = this.timedAudioClips;
					this.timedAudioClips = [];
					for (i in newArray){
						audioClip = newArray[i];
						audioClip.progress += resp.delta;
						//console.log(this.owner.type + ' audio: ' + audioClip.progress + ', ' + audioClip.audio.gainNode.context.currentTime);
						if(audioClip.progress >= audioClip.length){
							audioClip.audio.stop();
							this.onComplete(audioClip.audio, audioClip.next);
						} else {
							this.timedAudioClips.push(audioClip);
						}
					}
//						this.timedAudioClips = newArray;
				}

				for(i = 0; i < this.activeAudioClips.length; i++){
					this.checkTimeEvents(this.activeAudioClips[i]);
				}

				i = 0;
				if(this.stateChange){
					if(this.checkStates){
						if(this.currentState){
							stop.playthrough = this.forcePlaythrough;
							this[this.currentState](stop);
						}
						this.currentState = false;
						for(; i < this.checkStates.length; i++){
							audioClip = this.checkStates[i](this.state);
							if(audioClip){
								this.currentState = audioClip;
								this[this.currentState]();
								break;
							}
						}
					}
					this.stateChange = false;
				}
	 	    },
	 	    
	 		"logical-state": function(state){
	 			for(var i in state){
	 				if(this.state[i] !== state[i]){
	 					this.stateChange = true;
	 					this.state[i] = state[i];
	 				}
	 			}
	 		},
	 	    
	 		"audio-mute-toggle": function(){
	 			createjs.Sound.setMute(!createjs.Sound.getMute());
	 		},
	 	    
	 		"audio-stop": function(){
	 			this.stopAudio();
	 		},
	 	    
	 		"audio-mute": function(){
	 			createjs.Sound.setMute(true);
	 		},
	 	    
	 		"audio-unmute": function(){
	 			createjs.Sound.setMute(false);
	 		}
		},
		
		methods: {
			stopAudio: function(){
	 			for (var i in this.activeAudioClips){
	 				this.activeAudioClips[i].stop();
	 			}
	 			this.activeAudioClips.length = 0;
	 			this.timedAudioClips.length = 0;
	 			this.priorityTrack = null;
			},
			
			checkTimeEvents: function(audioClip, finished){
				var currentTime = 0;
				
				if(audioClip.sequenceEvents && audioClip.sequenceEvents.length){
					currentTime = audioClip.getPosition();

					// If we're using timed audio clips, use this to get the position, since iOS doesn't guarantee that .getPosition is actually for the clip in question. - DDD
					if(this.timedAudioClips.length){
						for (var i in this.timedAudioClips){
							if(audioClip === this.timedAudioClips[i].audio){
								currentTime = this.timedAudioClips[i].offset + this.timedAudioClips[i].progress;
								break;
							}
						}
					}

					while(audioClip.sequenceEvents.length && (finished || (audioClip.sequenceEvents[0].time <= currentTime))){
						this.owner.trigger(audioClip.sequenceEvents[0].event, audioClip.sequenceEvents[0].message);
						audioClip.sequenceEvents.splice(0,1);
					}
				}
			},
		
			onComplete: function(audioClip, next){
				//clean up active clips
				this.removeClip(audioClip);
				
				this.checkTimeEvents(audioClip, true);
				
				this.owner.triggerEvent('clip-complete');
				
				if(this.priorityTrack && (audioClip === this.priorityTrack.audio)){
					next = this.priorityTrack.next;
					this.priorityTrack = null;
				}
				
				if(next && next.length){
					if(typeof next === 'string'){
						(playSound(next)).call(this);
					} else {
						var arr = next.slice();
						arr.splice(0,1);
						if(arr.length > 0){
							(playSound(next[0])).call(this, {'next': arr});
						} else {
							(playSound(next[0])).call(this);
						}
					}
				} else {
					this.owner.triggerEvent('sequence-complete');
				}
			},
			
			removeClip: function(audioClip){
				for (var i in this.activeAudioClips){
					if (this.activeAudioClips[i] === audioClip){
						this.activeAudioClips.splice(i,1);
						break;
					}
				}
			},
			
			destroy: function(){
				this.stopAudio();
				if(this.preventOverlaps){
					for(var i in preventOverlaps){
						if(preventOverlaps[i] === this){
							preventOverlaps.splice(i, 1);
							break;
						}
					}
				}
			}
		}
	});
})();	


/*--------------------------------------------------
 *   broadcast-events - ../engine/components/broadcast-events.js
 */
/**
# COMPONENT **broadcast-events**
This component listens for specified local entity messages and re-broadcasts them on itself, its parent entity, or at the game level.

**Note:** Make sure that this component is never set up to receive and broadcast identical messages or an infinite loop will result, since it will receive the same message it sent.

## Dependencies:
- [[Entity-Container]] (on entity's parent) - This component can broadcast messages to its parent; `this.parent` is commonly specified by being a member of an entity container.

## Messages

### Listens for:
- **[Messages specified in definition]** - Listens for specified messages and on receiving them, re-triggers them as new messages.
  - @param message (object) - accepts a message object that it will include in the new message to be triggered.

### Local Broadcasts:
- **[Messages specified in definition]** - Listens for specified messages and on receiving them, re-triggers them as new messages on the entity.
  - @param message (object) - sends the message object received by the original message.

### Parent Broadcasts:
- **[Messages specified in definition]** - Listens for specified messages and on receiving them, re-triggers them as new messages on the entity's parent if one exists.
  - @param message (object) - sends the message object received by the original message.

### Game Broadcasts:
- **[Messages specified in definition]** - Listens for specified messages and on receiving them, re-triggers them as new messages at the top game level.
  - @param message (object) - sends the message object received by the original message.

## JSON Definition:
    {
      "type": "broadcast-events",
      
      // One of the following event mappings must be specified: "events", "parentEvents", or "renameEvents".
      
      "events": {
      // Optional: Maps local messages to trigger global game messages. At least one of the following mappings should be included.
        
        "local-message-1": "global-game-message",
        // On receiving "local-message-1", triggers "global-game-message" at the game level.
        
        "local-message-2": ["multiple", "messages", "to-trigger"]
        // On receiving "local-message-2", triggers each message in the array in sequence at the game level.
      }
      
      "parentEvents": {
      // Optional: Maps local messages to trigger messages on the entity's parent. At least one of the following mappings should be included.
        
        "local-message-3": "parent-message",
        // On receiving "local-message-3", triggers "parent-message" on the entity's parent.
        
        "local-message-4": ["multiple", "messages", "to-trigger"]
        // On receiving "local-message-4", triggers each message in the array in sequence on the entity's parent.
      }
      
      "renameEvents": {
      // Optional: Maps local messages to trigger alternative messages on the entity itself. This can be useful as a basic fill-in for a logic component to translate an outgoing message from one component into an incoming message for another. At least one of the following mappings should be included.
        
        "local-message-5": "another-local-message",
        // On receiving "local-message-5", triggers "another-local-message" on the entity itself.
        
        "local-message-6": ["multiple", "messages", "to-trigger"]
        // On receiving "local-message-6", triggers each message in the array in sequence on the entity itself.
      }
    }
*/
(function(){
	var gameBroadcast = function(event){
		if(typeof event === 'string'){
			return function(value, debug){
				platformer.game.currentScene.trigger(event, value, debug);
			};
		} else {
			return function(value, debug){
				for (var e in event){
					platformer.game.currentScene.trigger(event[e], value, debug);
				}
			};
		}
	},
	parentBroadcast = function(event){
		if(typeof event === 'string'){
			return function(value, debug){
				if(this.owner.parent)
				{
					this.owner.parent.trigger(event, value, debug);
				}
				
			};
		} else {
			return function(value, debug){
				for (var e in event){
					this.owner.parent.trigger(event[e], value, debug);
				}
			};
		}
	},
	entityBroadcast = function(event){
		if(typeof event === 'string'){
			return function(value, debug){
				this.owner.trigger(event, value, debug);
			};
		} else {
			return function(value, debug){
				for (var e in event){
					this.owner.trigger(event[e], value, debug);
				}
			};
		}
	};
	
	return platformer.createComponentClass({
		id: 'broadcast-events',
		
		constructor: function(definition){
			// Messages that this component listens for and then broadcasts to all layers.
			if(definition.events){
				for(var event in definition.events){
					this.addEventListener(event, gameBroadcast(definition.events[event]));
				}
			}
			
			if(definition.parentEvents){
				for(var event in definition.parentEvents){
					this.addEventListener(event, parentBroadcast(definition.parentEvents[event]));
				}
			}
			
			// Messages that this component listens for and then triggers on itself as a renamed message - useful as a logic place-holder for simple entities.
			if(definition.renameEvents){
				for(var event in definition.renameEvents){
					this.addEventListener(event, entityBroadcast(definition.renameEvents[event]));
				}
			}
		}
	});
})();


/*--------------------------------------------------
 *   change-scene - ../engine/components/change-scene.js
 */
/**
# COMPONENT **change-scene**
This component allows the entity to initiate a change from the current scene to another scene.

## Messages

### Listens for:
- **new-scene** - On receiving this message, a new scene is loaded according to provided parameters or previously determined component settings.
  - @param message.scene (string) - This is a label corresponding with a predefined scene.
  - @param message.transition (string) - This can be "instant" or "fade-to-black". Defaults to an instant transition.
  - @param message.persistentData (object) - Any JavaScript value(s) that should be passed to the next scene via the "scene-loaded" call.
- **set-scene** - On receiving this message, a scene value is stored, waiting for a `new-scene` to make the transition.
  - @param scene (string) - This is a label corresponding with a predefined scene.
- **set-persistent-scene-data** - On receiving this message, persistent data is stored, waiting for a `new-scene` to make the transition.
  - @param persistentData (object) - Any JavaScript value(s) that should be passed to the next scene via the "scene-loaded" call.

## JSON Definition:
    {
      "type": "change-scene",
      
      "scene": "scene-menu",
      // Optional (but must be provided by a "change-scene" parameter if not defined here). This causes the "new-scene" trigger to load this scene.
      
      "transition": "fade-to-black",
      // Optional. This can be "instant" or "fade-to-black". Defaults to an "instant" transition.
      
      "preload": true,
      // Optional. Whether the scene should already be loaded in the background.
      
      "persistentData": {"runningScore": 1400}
      // Optional. An object containing key/value pairs of information that should be passed into the new scene on the new scenes "scene-loaded" call.
    }
*/
(function(){
	return platformer.createComponentClass({
		id: 'change-scene',
		
		constructor: function(definition){
			this.scene = this.owner.scene || definition.scene;
			this.transition = this.owner.transition || definition.transition || 'instant';
			this.persistentData = definition.persistentData || {};
			this.preload = definition.preload || false;
			
			// Notes definition changes from older versions of this component.
			if(definition.message){
				console.warn('"' + this.type + '" components no longer accept "message": "' + definition.message + '" as a definition parameter. Use "aliases": {"' + definition.message + '": "new-scene"} instead.');
			}
		},

		events: {
			"scene-live": function(){
				//Makes sure we're in the current scene before preloading the next one.
				if(this.preload){
					platformer.game.loadScene(this.scene, this.transition, this.persistentData, true);
				}
			},
			"new-scene": function(response){
				var resp   = response || this,
				scene      = resp.scene || this.scene,
				transition = resp.transition || this.transition;
				data 	   = resp.persistentData || this.persistentData;
			
				platformer.game.loadScene(scene, transition, data);
			},
			"set-scene": function(scene){
				this.scene = scene;
			},
			"set-persistent-scene-data": function(dataObj){
				for (var x in dataObj)
				{
					this.persistentData[x] = dataObj[x];    
				}
			}
		}
	});
})();


/*--------------------------------------------------
 *   dom-element - ../engine/components/dom-element.js
 */
/**
# COMPONENT **dom-element**
This component creates a DOM element associated with the entity. In addition to allowing for CSS styling, the element can also perform as a controller accepting click and touch inputs and triggering associated messages on the entity.

## Dependencies:
- [[handler-render-dom]] (on entity's parent) - This component listens for a render "handle-render-load" message with a DOM element to setup and display the element.

## Messages

### Listens for:
- **handle-render-load** - This event provides the parent DOM element that this component will require for displaying its DOM element.
  - @param message.element (DOM element) - Required. Provides the render component with the necessary DOM element parent.
- **handle-render** - On each `handle-render` message, this component checks to see if there has been a change in the state of the entity. If so (and updateClassName is set to true in the JSON definition) it updates its className accordingly.
- **logical-state** - This component listens for logical state changes and updates its local record of states.
  - @param message (object) - Required. Lists various states of the entity as boolean values. For example: {jumping: false, walking: true}. This component retains its own list of states and updates them as `logical-state` messages are received, allowing multiple logical components to broadcast state messages.
- **update-content** - This message updates the innerHTML of the DOM element.
  - @param message (string) - The text that should replace the DOM element's innerHTML.
  - @param message.text (string) - Alternatively an object may be passed in with a text property that should replace the DOM element's innerHTML.
- **set-parent** - This message appends the element to the provided parent element.
  - @param parent (DOM Element) - Required. The DOM Element that this element should be appended to.
- **set-attribute** - This message updates an attribute of the DOM element.
  - @param message.attribute (string) - The attribute that is to be changed.
  - @param message.value (string) - The value the changed attribute should have.
  - @param message (object) - Alternatively, multiple attributes may be changed with a list of key/value pairs where keys match the attributes whose values will be changed.
- **set-style** - This message updates the style of the DOM element.
  - @param message.attribute (string) - The CSS property that is to be changed.
  - @param message.value (string) - The value the changed CSS property should have.
  - @param message (object) - Alternatively, multiple CSS properties may be changed with a list of key/value pairs where keys match the properties whose values will be changed.

### Local Broadcasts:
- **[Messages specified in definition]** - Element event handlers will trigger messages as defined in the JSON definition.
  - @param message (DOM Event object) - When messages are triggered on the entity, the associated message object is the DOM Event object that was provided to the originating DOM Event handler.

## JSON Definition
    {
      "type": "dom-element",

      "element": "div",
      //Required. Sets what type of DOM element should be created.
      
      "innerHTML": "Hi!",
      //Optional. Sets the DOM element's inner text or HTML.
      
      "className": "top-band",
      //Optional. Any standard properties of the element can be set by listing property names and their values. "className" is one example, but other element properties can be specified in the same way.
      
      "updateClassName": true,
      //Optional. Specifies whether the className of the DOM element should be updated to reflect the entity's logical state. This setting will cause the className to equal its setting above followed by a space-delimited list of its `true` valued state names.
      
      "onmousedown": "turn-green",
      //Optional. If specified properties begin with "on", it is assumed that the property is an event handler and the listed value is broadcast as a message on the entity where the message object is the event handler's event object.

      "onmouseup": ["turn-red", "shout"]
      //Optional. In addition to the event syntax above, an Array of strings may be provided, causing multiple messages to be triggered in the order listed.
    }
*/
(function(){
	var createFunction = function(message, entity){
		if(typeof message === 'string'){
			return function(e){
				entity.trigger(message, e);
				e.preventDefault();
			};
		} else if (Array.isArray(message)){
			return function(e){
				for (var i = 0; i < message.length; i++){
					entity.trigger(message[i], e);
				}
				e.preventDefault();
			};
		} else {
			return function(e){
				entity.trigger(message.event, message.message);
				e.preventDefault();
			};
		}
	};
	
	return platformer.createComponentClass({
		id: 'dom-element',
		constructor: function(definition){
			var elementType = definition.element   || 'div';
			
			this.updateClassName = definition.updateClassName || false;
			this.className = '';
			this.states = {};
			this.stateChange = false;
			this.potentialParent = definition.parent;
			this.handleRenderLoadMessage = null;
			
			this.element = document.createElement(elementType);
			if(!this.owner.element){
				this.owner.element = this.element;
			}
			this.element.ondragstart = function() {return false;}; //prevent element dragging by default
			
			for(var i in definition){
				if(i === 'style'){
					for(var j in definition[i]){
						this.element.style[j] = definition[i][j]; 
					}
				} else if(((i !== 'type') || (elementType === 'input')) && (i !== 'element') && (i !== 'parent') && (i !== 'updateClassName') && (i !== 'attributes') && (i !== 'messageMap')){
					if(i.indexOf('on') === 0){
						this.element[i] = createFunction(definition[i], this.owner);
					} else {
						this.element[i] = definition[i];
						if(i == 'className'){
							this.className = definition[i];
						}
					}
				}
			}
			
			if(this.owner.className){
				this.className = this.element.className = this.owner.className;
			}
			if(this.owner.innerHTML){
				this.element.innerHTML = this.owner.innerHTML;
			}
		},
		events:{
			"handle-render-load": (function(){
				var getElementById = function(root, id){
					var i = 0,
					all   = root.getElementsByTagName('*');

					for (; i < all.length; i++) {
					    if(all[i].getAttribute('id') === id){
					    	return all[i];
					    }
					}
					
					return document.getElementById(id);
				};
				
				return function(resp){
					if(resp.element){
						
						if(!this.parentElement){
							if(this.potentialParent){
								this.parentElement = getElementById(resp.element, this.potentialParent);
								this.parentElement.appendChild(this.element);
							} else {
								this.parentElement = resp.element;
								this.parentElement.appendChild(this.element);
							}
						}
			
						if(this.owner.triggerEventOnChildren){
							var message = this.handleRenderLoadMessage = {};
							for (var item in resp){
								message[item] = resp[item];
							}
							message.element = this.element;
							this.owner.triggerEventOnChildren('handle-render-load', message);
						}
					}
				};
			})(),
			
			"child-entity-added": function(entity){
				if(this.handleRenderLoadMessage){
					entity.trigger("handle-render-load", this.handleRenderLoadMessage);
				}
			},
			
			"set-parent": function(element){
				if(this.parentElement){
					this.parentElement.removeChild(this.element);
				}
				this.parentElement = element;
				this.parentElement.appendChild(this.element);
			},
			
			"handle-render": function(resp){
				var i     = 0,
				className = this.className;
				
				if(this.stateChange && this.updateClassName){
					for(i in this.states){
						if(this.states[i]){
							className += ' ' + i;
						}
					}
					this.element.className = className;
					this.stateChange = false;
				}
			},
			
			"set-attribute": function(resp){
				var attribute = null;
				
				if(resp.attribute){ //Backwards compatibility for {attribute: 'attribute-name', value: 'new-value'} syntax
					this.element.setAttribute(resp.attribute, resp.value);
				} else {
					for (attribute in resp){
						this.element.setAttribute(attribute, resp[attribute]);
					}
				}
			},
			
			"set-style": function(resp){
				var attribute = null;
				
				if(resp.attribute){ //Backwards compatibility for {attribute: 'attribute-name', value: 'new-value'} syntax
					this.element.style[resp.attribute] = resp.value;
				} else {
					for (attribute in resp){
						this.element.style[attribute] = resp[attribute];
					}
				}
			},
			
			"update-content": function(resp){
				var text = resp;
				
				if(text && (typeof text.text === 'string')){
					text = text.text;
				}
				
				if((typeof text === 'string') && (text !== this.element.innerHTML)){
					this.element.innerHTML = text;
				}
			},
		
			"logical-state": function(state){
				for(var i in state){
					if(this.states[i] !== state[i]){
						this.stateChange = true;
						this.states[i] = state[i];
					}
				}
			}
		},
		methods: {
			destroy: function(){
				if(this.parentElement){
					this.parentElement.removeChild(this.element);
					this.parentElement = undefined;
				}
				if(this.owner.element === this.element){
					this.owner.element = undefined;
				}
				this.element = undefined;
			}
		}
	});
})();


/*--------------------------------------------------
 *   entity-container - ../engine/components/entity-container.js
 */
/**
# COMPONENT **entity-container**
This component allows the entity to contain child entities. It will add several methods to the entity to manage adding and removing entities.

## Dependencies
- **[[Messenger]] - Entity uses `messenger` in its prototypal chain to enable event handling.

## Messages

### Listens for:
- **load** - This component waits until all other entity components are loaded before it begins adding children entities. This allows other entity components to listen to entity-added messages and handle them if necessary.
- **add-entity** - This message will added the given entity to this component's list of entities.
  - @param message ([[Entity]] object) - Required. This is the entity to be added as a child.
- **remove-entity** - On receiving this message, the provided entity will be removed from the list of child entities.
  - @param message ([[Entity]] object) - Required. The entity to remove.
- **[Messages specified in definition]** - Listens for specified messages and on receiving them, re-triggers them on child entities.
  - @param message (object) - accepts a message object that it will include in the new message to be triggered.

### Local Broadcasts:
- **child-entity-added** - This message is triggered when a new entity has been added to the list of children entities.
  - @param message ([[Entity]] object) - The entity that was just added.
- **child-entity-removed** - This message is triggered when an entity has been removed from the list of children entities.
  - @param message ([[Entity]] object) - The entity that was just removed.

### Child Broadcasts:
- **peer-entity-added** - This message is triggered when a new entity has been added to the parent's list of children entities.
  - @param message ([[Entity]] object) - The entity that was just added.
- **peer-entity-removed** - This message is triggered when an entity has been removed from the parent's list of children entities.
  - @param message ([[Entity]] object) - The entity that was just removed.
- **[Messages specified in definition]** - Listens for specified messages and on receiving them, re-triggers them on child entities.
  - @param message (object) - sends the message object received by the original message.

## Entity Methods:
- **addEntity** -  This method will add the provided entity to this component's list of entities.
  - @param entity ([[Entity]] object) - Required. This is the entity to be added as a child.
  - @return entity ([[Entity]] object) - Returns the entity that was just added.
- **removeEntity** - This method will remove the provided entity from the list of child entities.
  - @param message ([[Entity]] object) - Required. The entity to remove.
  - @return entity ([[Entity]] object | false) - Returns the entity that was just removed. If the entity was not foudn as a child, `false` is returned, indicated that the provided entity was not a child of this entity.
- **getEntitiesByType** - This method will return all child entities (including grandchildren) that match the provided type.
  - @param type (string) - Required. The entity type to find.
  - @return entities (Array of [[Entity]] objects) - Returns the entities that match the specified entity type.
- **getEntityById** - This method will return the first child entity it finds with a matching id (including grandchildren).
  - @param id (string) - Required. The entity id to find.
  - @return entity ([[Entity]] object) - Returns the entity that matches the specified entity id.
- **triggerOnChildren** - This method is used by both internal components and external entities to trigger messages on the child entities.
  - @param event (variant) - This is the message(s) to process. This can be a string, an object containing an "event" property (and optionally a "message" property, overriding the value below), or an array of the same.
  - @param value (variant) - This is a message object or other value to pass along to component functions.
  - @param debug (boolean) - This flags whether to output message contents and subscriber information to the console during game development. A "value" object parameter (above) will also set this flag if value.debug is set to true.
  - @return integer - The number of handlers for the triggered message: this is useful for determining how many child entities care about a given message.
- **triggerEvent** - This method is used by both internal components and external entities to trigger messages on the child entities.
  - @param event (string) - This is the message to process.
  - @param value (variant) - This is a message object or other value to pass along to component functions.
  - @param debug (boolean) - This flags whether to output message contents and subscriber information to the console during game development. A "value" object parameter (above) will also set this flag if value.debug is set to true.
  - @return integer - The number of handlers for the triggered message: this is useful for determining how many child entities care about a given message.

## JSON Definition:
    {
      "type": "entity-container",
      
      "entities": [{"type": "hero"}, {"type": "tile"}],
      // Optional. "entities" is an Array listing entity definitions to specify entities that should be added as children when this component loads.
      
      "childEvents": ["tokens-flying", "rules-updated"],
      // Optional. "childEvents" lists messages that are triggered on the entity and should be triggered on the children as well.
      
      "aliases": {
      // Optional. To prevent function name conflicts on the entity, you can provide alternatives here.
      
          "addEntity": "addFruit"
          //This causes entity.addFruit() to be created on the entity rather than the default entity.addEntity().
      }
    }
*/

/*
 * Requires: ["../messenger.js"]
 */

(function(){
	var childBroadcast = function(event){
		return function(value, debug){
			this.triggerOnChildren(event, value, debug);
		};
	};
	
	return platformer.createComponentClass({
		id: 'entity-container',
		
		constructor: function(definition){
			var self = this;
	
			this.entities = [];
			
			 //saving list of entities for load message
			this.definedEntities = null;
			if(definition.entities && this.owner.entities){ //combine component list and entity list into one if they both exist.
				this.definedEntities = definition.entities.concat(this.owner.entities);
			} else {
				this.definedEntities = definition.entities || this.owner.entities || null;
			}
			
			this.owner.entities     = self.entities;
			
			this.childEvents = [];
			if(definition.childEvents){
				for(var event in definition.childEvents){
					this.addNewPublicEvent(definition.childEvents[event]);
				}
			}
			this.addNewPrivateEvent('peer-entity-added');
			this.addNewPrivateEvent('peer-entity-removed');
		},
		
		events:{
			"load": function(){
				// putting this here so all other components will have been loaded and can listen for "entity-added" calls.
				var i    = 0,
				j        = 0,
				k        = 0,
				entities = this.definedEntities,
				definition = null;
				
				this.definedEntities = false;
				
				if(entities){
					for (i = 0; i < entities.length; i++)
					{
						definition = {properties:{parent: this.owner}};
						for (j in entities[i]){
							if (j === 'properties'){
								for (k in entities[i].properties){
									definition.properties[k] = entities[i].properties[k];
								}
							} else {
								definition[j] = entities[i][j];
							}
						}
		
						this.addEntity(new platformer.Entity(entities[i].id?entities[i]:platformer.game.settings.entities[entities[i].type], definition));
					}
				}
			},
			
			"add-entity": function (entity) {
				this.addEntity(entity);
			},
			
			"remove-entity": function (entity) {
				this.removeEntity(entity);
			},
			
			"child-entity-updated": function (entity) {
				this.updateChildEventListeners(entity);
			}
		},
		
		methods:{
			addNewPublicEvent: function(event){
				this.addNewPrivateEvent(event);
				
				// Listen for message on owner
				for(var i = 0; i < this.childEvents.length; i++){
					if(this.childEvents[i] === event){
						return false;
					}
				}
				this.childEvents.push(event);
				this.addEventListener(event, childBroadcast(event));
			},
			
			addNewPrivateEvent: function(event){
				if(this.messages[event]){
					return false; // event is already added.
				}

				this.messages[event] = []; //to signify it's been added even if not used
				
				//Listen for message on children
				for (var x = 0; x < this.entities.length; x++) {
					if(this.entities[x].messages[event]){
						for (var y = 0; y < this.entities[x].messages[event].length; y++) {
							this.addChildEventListener(this.entities[x], event, this.entities[x].messages[event][y].callback, this.entities[x].messages[event][y].scope);
						}
					}
				}
			},
			
			updateChildEventListeners: function(entity){
				this.removeChildEventListeners(entity);
				this.addChildEventListeners(entity);
			},
			
			addChildEventListeners: function(entity){
				var event = '';
				
				for (event in this.messages) {
					if(entity.messages[event]){
						for (var y = 0; y < entity.messages[event].length; y++) {
							this.addChildEventListener(entity, event, entity.messages[event][y].callback, entity.messages[event][y].scope);
						}
					}
				}
			},
			
			removeChildEventListeners: function(entity){
				var events = null,
				messages   = null,
				scopes     = null;
				
				if(entity.containerListener){
					events   = entity.containerListener.events;
					messages = entity.containerListener.messages;
					scopes   = entity.containerListener.scopes;
					for(var i = 0; i < events.length; i++){
						this.removeChildEventListener(entity, events[i], messages[i], scopes[i]);
					}
					entity.containerListener = null;
				}
			},
			
			addChildEventListener: function(entity, event, callback, scope){
				if(!entity.containerListener){
					entity.containerListener = {
						events: [],
						messages: [],
						scopes: []
					};
				}
				entity.containerListener.events.push(event);
				entity.containerListener.messages.push(callback);
				entity.containerListener.scopes.push(scope);
				this.bind(event, callback, scope);
			},
			
			removeChildEventListener: function(entity, event, callback, scope){
				var events = entity.containerListener.events,
				messages   = entity.containerListener.messages,
				scopes     = entity.containerListener.scopes;
				for(var i = 0; i < events.length; i++){
					if((events[i] === event) && (!callback || (messages[i] === callback)) && (!scope || (scopes[i] === scope))){
						this.unbind(event, messages[i], scopes[i]);
					}
				}
			},

			destroy: function(){
				for (var i in this.entities){
					this.removeChildEventListeners(this.entities[i]);
					this.entities[i].destroy();
				}
				this.entities.length = 0;
			}
		},
		
		publicMethods: {
			getEntityById: function(id){
				var i = 0,
				selection = null;
				
				for(; i < this.entities.length; i++){
					if(this.entities[i].id === id){
						return this.entities[i];
					}
					if(this.entities[i].getEntityById){
						selection = this.entities[i].getEntityById(id);
						if(selection){
							return selection;
						};
					}
				}
				return undefined;
			},

			getEntitiesByType: function(type){
				var i     = 0,
				selection = null,
				entities  = [];
				
				for(; i < this.entities.length; i++){
					if(this.entities[i].type === type){
						entities.push(this.entities[i]);
					}
					if(this.entities[i].getEntitiesByType){
						selection = this.entities[i].getEntitiesByType(type);
						if(selection){
							entities = entities.concat(selection);
						};
					}
				}
				return entities;
			},

			addEntity: function(entity){
				entity.parent = this.owner;
				entity.trigger('adopted');
				
				for (var x = 0; x < this.entities.length; x++) {
					if(!entity.triggerEvent('peer-entity-added', this.entities[x])){
						break;
					}
				}
				
				this.triggerEventOnChildren('peer-entity-added', entity);

				this.addChildEventListeners(entity);
				this.entities.push(entity);
				this.owner.trigger('child-entity-added', entity);
				return entity;
			},
			
			removeEntity: function(entity){
				for (var x = 0; x < this.entities.length; x++){
				    if(this.entities[x] === entity){
						this.removeChildEventListeners(entity);
				    	this.entities.splice(x, 1);
						this.triggerEventOnChildren('peer-entity-removed', entity);
						this.owner.trigger('child-entity-removed', entity);
				    	entity.destroy();
				    	entity.parent = null;
					    return entity;
				    }
			    }
			    return false;
			},
			
			triggerEventOnChildren: function(event, message, debug){
				if(!this.messages[event]){
					this.addNewPrivateEvent(event);
				}
				return this.triggerEvent(event, message, debug);
			},
			triggerOnChildren: function(event, message, debug){
				if(!this.messages[event]){
					this.addNewPrivateEvent(event);
				}
				return this.trigger(event, message, debug);
			}
		}
	}, platformer.Messenger);
})();


/*--------------------------------------------------
 *   entity-controller - ../engine/components/entity-controller.js
 */
/**
# COMPONENT **entity-controller**
This component listens for input messages triggered on the entity and updates the state of any controller inputs it is listening for. It then broadcasts messages on the entity corresponding to the input it received.

## Dependencies:
- [[Handler-Controller]] (on entity's parent) - This component listens for a controller "tick" message in order to trigger messages regarding the state of its inputs.

## Messages

### Listens for:
- **handle-controller** - On each `handle-controller` message, this component checks its list of actions and if any of their states are currently true or were true on the last call, that action message is triggered.
- **mousedown** - This message triggers a new message on the entity that includes what button on the mouse was pressed: "mouse:left-button:down", "mouse:middle-button:down", or "mouse:right-button:down".
  - @param message.event (DOM Event object) - This event object is passed along with the new message.
- **mouseup** - This message triggers a new message on the entity that includes what button on the mouse was released: "mouse:left-button:up", "mouse:middle-button:up", or "mouse:right-button:up".
  - @param message.event (DOM Event object) - This event object is passed along with the new message.
- **mousemove** - Updates mouse action states with whether the mouse is currently over the entity.
  - @param message.over (boolean) - Whether the mouse is over the input entity.
- **pause-controls** - This message will stop the controller from triggering messages until "unpause-controls" is triggered on the entity.
- **unpause-controls** - This message will allow the controller to trigger messages until "pause-controls" is triggered on the entity.
- **[Messages specified in definition]** - Listens for additional messages and on receiving them, sets the appropriate state and broadcasts the associated message on the next `handle-controller` message. These messages come in pairs and typically have the form of "keyname:up" and "keyname:down" specifying the current state of the input.
  
### Local Broadcasts:
- **mouse:mouse-left:down, mouse:mouse-left:up, mouse:mouse-middle:down, mouse:mouse-middle:up, mouse:mouse-right:down, mouse:mouse-right:up** - This component triggers the state of mouse inputs on the entity if a render component of the entity accepts mouse input (for example [[Render-Animation]]).
  - @param message (DOM Event object) - The original mouse event object is passed along with the control message.
- **north, north-northeast, northeast, east-northeast, east, east-southeast, southeast, south-southeast, south, south-southwest, southwest, west-southwest, west, west-northwest, northwest, north-northwest** - If the soft joystick is enabled on this component, it will broadcast these directional messages if the joystick is in use.
  - @param message (DOM Event object) - Mirrors the mouse event object that moved the joystick.
- **joystick-orientation** - If the soft joystick is enabled on this component, this message will trigger to provide the current orientation of the joystick.
  - @param orientation (number) - A number in radians representing the orientation of the joystick.
- **[Messages specified in definition]** - Broadcasts active states using the JSON-defined message on each `handle-controller` message. Active states include `pressed` being true or `released` being true. If both of these states are false, the message is not broadcasted.
  - @param message.pressed (boolean) - Whether the current input is active.
  - @param message.released (boolean) - Whether the current input was active last tick but is no longer active.
  - @param message.triggered (boolean) - Whether the current input is active but was not active last tick.
  - @param message.over (boolean) - Whether the mouse was over the entity when pressed, released, or triggered. This value is always false for non-mouse input messages.

## JSON Definition:
    {
      "type": "entity-controller",
      
      "paused": true,
      // Optional. Whether input controls should start deactivated. Default is false.
      
      "controlMap":{
      // Required. Use the controlMap property object to map inputs to messages that should be triggered. At least one control mapping should be included. The following are a few examples:
      
        "key:x": "run-left",
        // This causes an "x" keypress to fire "run-left" on the entity. For a full listing of key names, check out the `handler-controller` component.
        
        "button-pressed": "throw-block",
        // custom input messages can be fired on this entity from other entities, allowing for on-screen input buttons to run through the same controller channel as other inputs.
        
        "mouse:left-button"
        // The controller can also handle mouse events on the entity if the entity's render component triggers mouse events on the entity (for example, the `render-sprite` component).
      },
	  
	  "joystick":{
	  // Optional. Determines whether this entity should listen for mouse events to trigger directional events. Can be set simply to "true" to accept all joystick defaults
	      
	      "directions": 8,
		  // Optional: 4, 8, or 16. Determines how many directions to broadcast. Default is 4 ("north", "east", "south", and "west").
		  
		  "innerRadius": 30,
		  // Optional. Number determining how far the mouse must be from the entity's position before joystick events should be triggered. Default is 0.
		  
		  "outerRadius": 60
		  // Optional. Number determining how far the mouse can move away from the entity's position before the joystick stops triggering events. Default is Infinity.
	  }
    }
*/
(function(){
	var distance = function(origin, destination){
		var x = destination.x - origin.x,
		y = destination.y - origin.y;
		
		return Math.sqrt(x*x + y*y);
	},
	angle = function(origin, destination, distance){
		var x = destination.x - origin.x,
		y     = destination.y - origin.y,
		a     = 0,
		circle= Math.PI * 2;
		
		if(!distance){
			return a;
		}

		a = Math.acos(x/distance);
		if (y < 0){
			a = circle - a;
		}
		return a;
	},
	directions = [null,null,null,null, //joystick directions
		['east', 'south', 'west', 'north'], null, null, null,
		['east', 'southeast', 'south', 'southwest', 'west', 'northwest', 'north', 'northeast'], null, null, null, null, null, null, null,
		['east', 'east-southeast', 'southeast', 'south-southeast', 'south', 'south-southwest', 'southwest', 'west-southwest', 'west', 'west-northwest', 'northwest', 'north-northwest', 'north', 'north-northeast', 'northeast', 'east-northeast']
	],
	mouseMap = ['left-button', 'middle-button', 'right-button'],
	state = function(event, trigger){
	    this.event = event;
	    this.trigger = trigger;
	    this.filters = false;
		this.current = false;
		this.last    = false;
		this.state   = false;
		this.stateSummary = {
			pressed:   false,
			released:  false,
			triggered: false,
			over:      false
		};
	},
	createUpHandler = function(state){
		if(Array.isArray(state)){
			return function(value){
				for (var i = 0; i < state.length; i++){
					state[i].state = false;
				}
			};
		} else {
			return function(value){
				state.state = false;
			};
		}
	},
	createDownHandler = function(state){
		if(Array.isArray(state)){
			return function(value){
				for (var i = 0; i < state.length; i++){
					state[i].current = true;
					state[i].state   = true;
					if(value && (typeof (value.over) !== 'undefined')) state[i].over = value.over;
				}
			};
		} else {
			return function(value){
				state.current = true;
				state.state   = true;
				if(value && (typeof (value.over) !== 'undefined')) state.over = value.over;
			};
		}
	},
	addActionState = function(actionList, action, trigger, requiredState){
		var actionState = actionList[action]; // If there's already a state storage object for this action, reuse it: there are multiple keys mapped to the same action.
		if(!actionState){                                // Otherwise create a new state storage object
			actionState = actionList[action] = new state(action, trigger);
		}
		if(requiredState){
			actionState.setFilter(requiredState);
		}
		return actionState;
	},
	stateProto = state.prototype;
	
	stateProto.update = function(){
		var i = 0;
		
		if(this.current || this.last){
			this.stateSummary.pressed   = this.current;
			this.stateSummary.released  = !this.current && this.last;
			this.stateSummary.triggered = this.current && !this.last;
			this.stateSummary.over      = this.over;
			if(this.filters){
				for(; i < this.filters.length; i++){
					if(this.stateSummary[this.filters[i]]){
						this.trigger(this.event, this.stateSummary);
					}
				}
			} else {
				this.trigger(this.event, this.stateSummary);
			}
		}
		
		this.last    = this.current;
		this.current = this.state;
	};
	
	stateProto.setFilter = function(filter){
		if(!this.filters){
			this.filters = [filter];
		} else {
			this.filters.push(filter);
		}
		return this;
	};

	stateProto.isPressed = function(){
		return this.current;
	};
	
	stateProto.isTriggered = function(){
		return this.current && !this.last;
	};

	stateProto.isReleased = function(){
		return !this.current && this.last;
	};

	return platformer.createComponentClass({
		id: 'entity-controller',
		
		constructor: function(definition){
			var i       = 0,
			j           = 0,
			k           = 0,
			key         = '',
			actionState = undefined,
			self        = this,
			trigger     = function(event, obj){
				if(!self.paused){
					self.owner.trigger(event, obj);
				}
			};
			
			this.paused = definition.paused || false;
			
			if(definition && definition.controlMap){
				this.owner.controlMap = definition.controlMap; // this is used and expected by the handler-controller to handle messages not covered by key and mouse inputs.
				this.actions  = {};
				for(key in definition.controlMap){
					if(typeof definition.controlMap[key] === 'string'){
						actionState = addActionState(this.actions, definition.controlMap[key], trigger);
					} else {
						actionState = [];
						if(Array.isArray(definition.controlMap[key])){
							for (i = 0; i < definition.controlMap[key].length; i++){
								actionState[i] = addActionState(this.actions, definition.controlMap[key][i], trigger);
							}
						} else {
							k = 0;
							for (j in definition.controlMap[key]){
								if(typeof definition.controlMap[key][j] === 'string'){
									actionState[k] = addActionState(this.actions, definition.controlMap[key][j], trigger, j);
									k += 1;
								} else {
									for (i = 0; i < definition.controlMap[key][j].length; i++){
										actionState[k] = addActionState(this.actions, definition.controlMap[key][j][i], trigger, j);
										k += 1;
									}
								}
							}
						}
					}
					this.addEventListener(key + ':up', createUpHandler(actionState));
					this.addEventListener(key + ':down', createDownHandler(actionState));
				}
			}
			
			if(definition.joystick){
				this.joystick = {};
				this.joystick.directions  = definition.joystick.directions  || 4; // 4 = n,e,s,w; 8 = n,ne,e,se,s,sw,w,nw; 16 = n,nne,ene,e...
				this.joystick.handleEdge  = definition.joystick.handleEdge  || false;
				this.joystick.innerRadius = definition.joystick.innerRadius || 0;
				this.joystick.outerRadius = definition.joystick.outerRadius || Infinity;
			}
		},
		
		events:{
			'handle-controller': function(){
				var action    = '';
				
				if(this.actions){
					for (action in this.actions){
						this.actions[action].update();
					}
				}
			},
			
			'mousedown': function(value){
				this.owner.trigger('mouse:' + mouseMap[value.event.button || 0] + ':down', value.event);
				if(this.joystick){
					this.owner.trigger('joystick:down', value.event);
					this.handleJoy(value);
				}
			},
			
			'mouseup': function(value){
				this.owner.trigger('mouse:' + mouseMap[value.event.button || 0] + ':up', value.event);
				if(this.joystick){
					this.owner.trigger('joystick:up', value.event);
					this.handleJoy(value);
				}
			},
			
			'mousemove': function(value){
				if(this.actions['mouse:left-button'] && (this.actions['mouse:left-button'].over !== value.over))     this.actions['mouse:left-button'].over = value.over;
				if(this.actions['mouse:middle-button'] && (this.actions['mouse:middle-button'].over !== value.over)) this.actions['mouse:middle-button'].over = value.over;
				if(this.actions['mouse:right-button'] && (this.actions['mouse:right-button'].over !== value.over))   this.actions['mouse:right-button'].over = value.over;
				if(this.joystick){
					this.handleJoy(value);
				}
			},
			
			'pause-controls': function(){
				this.paused = true;
			},
			
			'unpause-controls': function(){
				this.paused = false;
			}
		},
		
		methods:{
			handleJoy: function(event){
				// The following translate CreateJS mouse and touch events into messages that this controller can handle in a systematic way
				var segment = Math.PI / (this.joystick.directions / 2),
				dist        = distance(this.owner, event),
				orientation = 0,
				direction   = '',
				accuracy    = '';
				
				if((dist > this.joystick.outerRadius) || (dist < this.joystick.innerRadius)){
					return;
				} else if(!this.paused){
					orientation = angle(this.owner, event, dist);
					direction   = directions[this.joystick.directions][Math.floor(((orientation + segment / 2) % (Math.PI * 2)) / segment)];
					
					if(this.joystick.handleEdge){
						segment  = Math.PI / this.joystick.directions;
						accuracy = directions[this.joystick.directions * 2][Math.floor(((orientation + segment / 2) % (Math.PI * 2)) / segment)];
						if(accuracy !== direction){
							this.owner.trigger(accuracy.replace(direction, '').replace('-',''), event);  //There's probably a better way to perform this, but the current method is functional. - DDD
						}
					}
					this.owner.trigger(direction, event);
					this.owner.trigger("joystick-orientation", orientation);
				}
			}
		}
	});
})();


/*--------------------------------------------------
 *   fullscreen - ../engine/components/fullscreen.js
 */
/**
# COMPONENT **fullscreen**
This component listens for "toggle-fullscreen" messages to toggle the game's container to full-screen and back.

Note: This component connects to the browser's fullscreen API if available. It also sets a "full-screen" class on the game container that should be styled in CSS for proper behavior.

## Dependencies:
- [[Render-Animation]] (component on entity) - This component listens for the "animation-complete" event triggered by render-sprite.

## Messages:

### Listens for:
- **toggle-fullscreen** - On receiving this message, the component will go fullscreen if not already in fullscreen mode, and vice-versa.

## JSON Definition:
    {
      "type": "fullscreen"
    }
*/

//TODO: Ideally this should be set up to work for any given element, not just the game container. - DDD
(function(){
	var enabled = false,
	element = null,
	turnOffFullScreen = function(){
		enabled = false;
		element.className = element.className.replace(/ full-screen/g, '');
		platformer.game.bindings['resize'].callback();
	},
	toggleFullscreen = function(){
		if(enabled){
			if(document.webkitExitFullscreen){
				document.webkitExitFullscreen();
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if (document.exitFullscreen) {
				document.exitFullscreen();
			}
			turnOffFullScreen();
		} else {
			enabled = true;
			element.className += ' full-screen';
			if(element.webkitRequestFullscreen){
				if(!platformer.game.settings.supports.safari || platformer.game.settings.supports.chrome){ //Safari doesn't allow all keyboard input in fullscreen which breaks game input - DDD 5/27/2013
					element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
				}
			} else if (element.mozRequestFullScreen) {
				element.mozRequestFullScreen();
			} else if (element.requestFullscreen) {
				element.requestFullscreen(); // Opera
			}
			platformer.game.bindings['resize'].callback();
		}
	};
	document.addEventListener('fullscreenchange', function(e){
		if(!document.fullscreenElement){
			turnOffFullScreen();
		}
	});
	document.addEventListener('webkitfullscreenchange', function(e){
		if(!document.webkitFullscreenElement){
			turnOffFullScreen();
		}
	});
	document.addEventListener('mozfullscreenchange', function(e){
		if(!document.mozFullScreenElement){
			turnOffFullScreen();
		}
	});
	
	return platformer.createComponentClass({
		id: 'fullscreen',
		constructor: function(definition){
			if (!element) {
				element = platformer.game.containerElement;
			}
		},
		events:{
			"toggle-fullscreen": toggleFullscreen
		}
	});
	
})();


/*--------------------------------------------------
 *   render-debug - ../engine/components/render-debug.js
 */
/**
# COMPONENT **render-debug**
This component is attached to entities that will appear in the game world. It serves two purposes. First, it displays a rectangle that indicates location of the object. By default it uses the specified position and dimensions of the object (in grey), if the object has a collision component it will display the AABB of the collision shape (in pink). If the entity has a [[Logic-Carrier]] component and is/was carrying an object, a green rectangle will be drawn showing the collision group. The render-debug component also allows the user to click on an object and it will print the object in the debug console. 

## Dependencies
- [[handler-render-createjs]] (on entity's parent) - This component listens for a render "handle-render" and "handle-render-load" message to setup and display the content.

## Messages

### Listens for:
- **handle-render** - Repositions the pieces of the component in preparation for rendering
- **handle-render-load** - The visual components are set up and added to the stage. Setting up mouse input stuff. The click-to-print-to-console functionality is set up too. 
  - @param resp.stage ([createjs.Stage][link1]) - This is the stage on which the component will be displayed.

### Local Broadcasts:
- **mousedown** - Render-debug captures this message and uses it and then passes it on to the rest of the object in case it needs to do something else with it.
  - @param event (event object) - The event from Javascript.
  - @param over (boolean) - Whether the mouse is over the object or not.
  - @param x (number) - The x-location of the mouse in stage coordinates.
  - @param y (number) - The y-location of the mouse in stage coordinates.
  - @param entity ([[Entity]]) - The entity clicked on.  
- **mouseup** - Render-debug captures this message and uses it and then passes it on to the rest of the object in case it needs to do something else with it.
  - @param event (event object) - The event from Javascript.
  - @param over (boolean) - Whether the mouse is over the object or not.
  - @param x (number) - The x-location of the mouse in stage coordinates.
  - @param y (number) - The y-location of the mouse in stage coordinates.
  - @param entity ([[Entity]]) - The entity clicked on.  
- **mousemove** - Render-debug captures this message and uses it and then passes it on to the rest of the object in case it needs to do something else with it.
  - @param event (event object) - The event from Javascript.
  - @param over (boolean) - Whether the mouse is over the object or not.
  - @param x (number) - The x-location of the mouse in stage coordinates.
  - @param y (number) - The y-location of the mouse in stage coordinates.
  - @param entity ([[Entity]]) - The entity clicked on.  

## JSON Definition
    {
      "type": "render-debug",
      "acceptInput": {
      	//Optional - What types of input the object should take.
      	"hover": false;
      	"click": false; 
      }, 
      "regX": 0,
      //Optional - The X offset from X position for the displayed shape. If you're using the AABB this is set automatically.
      "regY": 0
      //Optional - The Y offset from Y position for the displayed shape. If you're using the AABB this is set automatically.
    }
    
[link1]: http://createjs.com/Docs/EaselJS/Stage.html
*/

(function(){
	var types = {
		"aabb":      "255,128,255",
		"render":    "128,128,128",
		"collision": "255,0,255",
		"group":     "0,255,0"
	},
	createShape = function(shape, type, width, height, regX, regY, z){
		var newShape = null;
		
		switch(shape){
		case 'rectangle':
			newShape = new createjs.Shape((new createjs.Graphics()).beginFill("rgba(" + types[type] + ",0.1)").setStrokeStyle(3).beginStroke("rgb(" + types[type] + ")").rect(0, 0, width, height));
			regX += width/2;
			regY += height/2;
			break;
		case 'circle':
			regX += width/2;
			regY += width/2;
			newShape = new createjs.Shape((new createjs.Graphics()).beginFill("rgba(" + types[type] + ",0.1)").setStrokeStyle(3).beginStroke("rgb(" + types[type] + ")").drawCircle(width/2, width/2, width));
			break;
		}
		newShape.regX  = regX;
		newShape.regY  = regY;
		newShape.z = z;
		
		return newShape;
	};
	
	return platformer.createComponentClass({
		
		id: 'render-debug', 
		
		constructor: function(definition){
			if(definition.acceptInput){
				this.hover = definition.acceptInput.hover || false;
				this.click = definition.acceptInput.click || false;
			} else {
				this.hover = false;
				this.click = false;
			}
			
			this.regX = definition.regX || 0;
			this.regY = definition.regY || 0;
			this.stage = undefined;
			this.shapes = [];
		},
		
		events: {// These are messages that this component listens for
			"handle-render-load": function(resp){
				var self = this,
				z        = (this.owner.z || 0) + 10000,
				i        = 0,
				j        = 0,
				width    = this.owner.width  = this.owner.width  || 300,
				height   = this.owner.height = this.owner.height || 100,
				over     = false,
				shapes   = null,
				aabb     = null;
				
				if(resp && resp.stage){
					this.stage = resp.stage;
					
					if(this.owner.getAABB){
						for(j = 0; j < this.owner.collisionTypes.length; j++){
							aabb   = this.owner.getAABB(this.owner.collisionTypes[j]);
							width  = this.initialWidth  = aabb.width;
							height = this.initialHeight = aabb.height;
							shapes = this.owner.getShapes(this.owner.collisionTypes[j]);
							
							this.shapes.push(createShape('rectangle', 'aabb', width, height, this.owner.x - aabb.x, this.owner.y - aabb.y, z--));
							this.stage.addChild(this.shapes[this.shapes.length - 1]);
							
							for(i = 0; i < shapes.length; i++){
								this.shapes.push(createShape(shapes[i].type, 'collision', shapes[i].radius || shapes[i].width, shapes[i].height, -shapes[i].offsetX, -shapes[i].offsetY, z--));
								this.stage.addChild(this.shapes[this.shapes.length - 1]);
							}
						}
					} else {
						this.shapes.push(createShape('rectangle', 'render', width, height, width/2, height/2, z--));
						this.stage.addChild(this.shapes[0]);
					}
					
					this.addInputs();

					if(!platformer.game.settings.debug){
						this.owner.removeComponent(this);
					}
				}
			},
			
			"handle-render": function(){
				var i = 0;
				
/*				if(this.owner.getAABB){
					var aabb   = this.owner.getAABB();
					this.shapes[0].scaleX = aabb.width / this.initialWidth;
					this.shapes[0].scaleY = aabb.height / this.initialHeight;
				}*/
				
				for(i = 0; i < this.shapes.length; i++){
					this.shapes[i].x = this.owner.x;
					this.shapes[i].y = this.owner.y;
				}
				
				if(this.owner.getCollisionGroupAABB){
					var aabb = this.owner.getCollisionGroupAABB();
					if(!this.groupShape){
						this.groupShape = new createjs.Shape((new createjs.Graphics()).beginFill("rgba(255,255,0,0.2)").rect(0, 0, 1, 1));
						this.groupShape.regX  = 0.5;
						this.groupShape.regY  = 0.5;
						this.groupShape.z     = (this.owner.z || 0) + 10000;
						this.stage.addChild(this.groupShape);
						console.log(aabb);
					}
					this.groupShape.scaleX = aabb.width;
					this.groupShape.scaleY = aabb.height;
					this.groupShape.x      = aabb.x;
					this.groupShape.y      = aabb.y;
				}
			}
		},
		
		methods:{
			addInputs: (function(){
				var lastEntityLog = null,
				createHandler = function(self, eventName){
					return function(event) {
						self.owner.trigger(eventName, {
							event: event.nativeEvent,
							cjsEvent: event,
							x: (event.stageX * dpr) / self.stage.scaleX + self.camera.x,
							y: (event.stageY * dpr) / self.stage.scaleY + self.camera.y,
							entity: self.owner
						});
						
						if((lastEntityLog !== self.owner) && (event.nativeEvent.button === 2)){
							lastEntityLog = self.owner;
							console.log('This Entity:', lastEntityLog);
						}
					};
				};
				
				return function(){
					var self = this,
					mousedown = null,
					mouseover = null,
					mouseout  = null,
					rollover  = null,
					rollout   = null,
					pressmove = null,
					pressup   = null,
					click     = null,
					dblclick  = null;
					
					// The following appends necessary information to displayed objects to allow them to receive touches and clicks
					if(this.click || this.touch){
						if(this.touch && !this.stage.__touch){ //__touch check due to this being overridden if we do this multiple times. - DDD
							createjs.Touch.enable(this.stage);
						}
						
						mousedown = createHandler(this, 'mousedown');
						pressmove = createHandler(this, 'pressmove');
						pressup   = createHandler(this, 'pressup'  );
						click     = createHandler(this, 'click'    );
						dblclick  = createHandler(this, 'dblclick' );
						
						this.sprite.addEventListener('mousedown', mousedown);
						this.sprite.addEventListener('pressmove', pressmove);
						this.sprite.addEventListener('pressup',   pressup  );
						this.sprite.addEventListener('click',     click    );
						this.sprite.addEventListener('dblclick',  dblclick );
					}
					if(this.hover){
						this.stage.enableMouseOver();
						mouseover = createHandler(this, 'mouseover');
						mouseout  = createHandler(this, 'mouseout' );
						rollover  = createHandler(this, 'rollover' );
						rollout   = createHandler(this, 'rollout'  );

						this.sprite.addEventListener('mouseover', mouseover);
						this.sprite.addEventListener('mouseout',  mouseout );
						this.container.addEventListener('rollover',  rollover );
						this.container.addEventListener('rollout',   rollout  );
					}

					this.removeInputListeners = function(){
						if(this.click || this.touch){
							this.sprite.removeEventListener('mousedown', mousedown);
							this.sprite.removeEventListener('pressmove', pressmove);
							this.sprite.removeEventListener('pressup',   pressup  );
							this.sprite.removeEventListener('click',     click    );
							this.sprite.removeEventListener('dblclick',  dblclick );
						}
						if(this.hover){
							this.sprite.removeEventListener('mouseover', mouseover);
							this.sprite.removeEventListener('mouseout',  mouseout );
							this.container.removeEventListener('rollover',  rollover );
							this.container.removeEventListener('rollout',   rollout  );
						}
					};
				};
			})(),
			
			destroy: function(){
				var i = 0;
				
				for(i = 0; i < this.shapes.length; i++){
					this.stage.removeChild(this.shapes[i]);
				}
				this.shapes.length = 0;
				this.stage = undefined;
			}
		}
	});
})();


/*--------------------------------------------------
 *   render-tiles - ../engine/components/render-tiles.js
 */
/**
# COMPONENT **render-tiles**
This component handles rendering tile map backgrounds. When rendering the background, this component figures out what tiles are being displayed as caches them so they are rendered as one image rather than individually. As the camera moves, the cache is updated by blitting the relevant part of the old cached image into the new cached image and then rendering the tiles that have shifted into the camera's view into the cache.

## Dependencies:
- [createjs.EaselJS][link1] - This component requires the EaselJS library to be included for canvas functionality.
- [[handler-render-createjs]] (on entity's parent) - This component listens for a render "handle-render-load" message to setup and display the content. This component is removed from the Handler-Render-Createjs list after the first tick because it doesn't possess a handle-render function. Instead it uses the camera-update function to update itself.

## Messages

### Listens for:
- **add-tiles** - This event adds a layer of tiles to render on top of the existing layer of rendered tiles.
  - @param message.imageMap (2d array) - Required. This lists a mapping of tile indexes to be rendered.
- **camera-loaded** - Provides the width and height of the world.
- **camera-update** - Triggered when the camera moves, this function updates which tiles need to be rendered and caches the image.
  - @param camera (object) - Required. Provides information about the camera.
- **handle-render-load** - This event is triggered before `handle-render` and provides the CreateJS stage that this component will require to display. In this case it compiles the array of tiles that make up the map and adds the tilesToRender displayObject to the stage.
  - @param message.stage ([createjs.Stage][link2]) - Required. Provides the render component with the CreateJS drawing [Stage][link2].
- **peer-entity-added** - If this component should cache entities, it checks peers for a "renderCache" display object and adds the display object to its list of objects to render on top of the tile set.
  - @param entity ([[Entity]]) - This is the peer entity to be checked for a renderCache.

## JSON Definition
    {
      "type": "render-tiles",
      
      "spritesheet": 
      //Required - The spritesheet for all the tile images.
      
      "imageMap" : [],
      //Required - This is a two dimensional array of the spritesheet indexes that describe the map that you're rendering.
	  
	  "scaleX" : 1,
	  //Optional - The x-scale the tilemap is being displayed at. Defaults to 1.
	  
	  "scaleY"  : 1,
	  //Optional - The y-scale the tilemap is being displayed at. Defaults to 1.
	  
	  "tileWidth"  : 32,
	  //Optional - The the width in pixels of a tile. Defaults to 10.
	  
	  "tileHeight"  : 32,
	  //Optional - The the height in pixels of a tile. Defaults to 10.
	  
	  "buffer"  : 32,
	  //Optional - The amount of space in pixels around the edge of the camera that we include in the buffered image. Is multiplied by the scaleX to get the actual buffersize. Defaults to the tileWidth.
	  
	  "entityCache": false
	  //Optional - Whether to cache entities on this layer if the entity's render component requests caching. Defaults to `false`.
    }
    
[link1]: http://www.createjs.com/Docs/EaselJS/module_EaselJS.html
[link2]: http://createjs.com/Docs/EaselJS/Stage.html
*/
(function(){
	var initializeCanvasConservation = function(displayObject){ //To make CreateJS Display Object have better canvas conservation.
		var canvas = [document.createElement("canvas"), document.createElement("canvas")],
		current    = 0;
		
		if(!displayObject.___cache){ //make sure this is only set up once
			displayObject.___cache = displayObject.cache;
			
			displayObject.cache = function(x, y, width, height, scale) {
				current = 1 - current;
				this.cacheCanvas = canvas[current];
				this.___cache(x, y, width, height, scale);
			};
		}
		
		return displayObject;
	},
	transform = {
		x: 1,
		y: 1,
		t: -1,
		r: 0
	},
	transformCheck = function(value){
		var v = +(value.substring(4)),
		resp  = transform,
		a = !!(0x20000000 & v),
		b = !!(0x40000000 & v),
		c = !!(0x80000000 & v);
		
		resp.t = 0x0fffffff & v;
		resp.x = 1;
		resp.y = 1;
		resp.r = 0;

		if(a || b || c){
			if(a && b && c){
				resp.x = -1;
				resp.r = 90;
			} else if (a && c){
				resp.r = 90;
			} else if (b && c){
				resp.r = 180;
			} else if (a && b){
				resp.r = 270;
			} else if (a){
				resp.y = -1;
				resp.r = 90;
			} else if (b){
				resp.y = -1;
			} else if (c){
				resp.x = -1;
			}
		}
		return resp;
	};

	return platformer.createComponentClass({
		
		id: 'render-tiles',
		
		constructor: function(definition){
			var x = 0,
			images = definition.spriteSheet.images.slice(),
			spriteSheet = null,
			scaleX = 1,
			scaleY = 1;
			
			if(images[0] && (typeof images[0] === 'string')){
				images = images.slice(); //so we do not overwrite settings array
				for (x = 0; x < images.length; x++){
					if(platformer.assets[images[x]]){
						images[x] = platformer.assets[images[x]];
					}
				}
			}
	
			spriteSheet = {
				images: images,
				frames: definition.spriteSheet.frames,
				animations: definition.spriteSheet.animations
			};
			scaleX = spriteSheet.images[0].scaleX || 1;
			scaleY = spriteSheet.images[0].scaleY || 1;
	
			if((scaleX !== 1) || (scaleY !== 1)){
				spriteSheet.frames = {
					width: spriteSheet.frames.width * scaleX,	
					height: spriteSheet.frames.height * scaleY,	
					regX: spriteSheet.frames.regX * scaleX,	
					regY: spriteSheet.frames.regY * scaleY
				};
			}
	
			this.controllerEvents = undefined;
			this.spriteSheet   = new createjs.SpriteSheet(spriteSheet);
			this.imageMap      = definition.imageMap   || [];
			this.doMap         = null; //list of display objects that should overlay tile map.
			this.tiles         = {};
			this.tilesToRender = undefined;
			this.scaleX        = ((definition.scaleX || 1) * (this.owner.scaleX || 1)) / scaleX;
			this.scaleY        = ((definition.scaleY || 1) * (this.owner.scaleY || 1)) / scaleY;
			this.tileWidth     = definition.tileWidth  || (this.owner.tileWidth / this.scaleX)  || 10;
			this.tileHeight    = definition.tileHeight || (this.owner.tileHeight / this.scaleY) || 10;
			this.entityCache   = definition.entityCache || false;
			
			// temp values
			this.worldWidth    = this.tilesWidth    = this.tileWidth;
			this.worldHeight   = this.tilesHeight   = this.tileHeight;
			
			
			var buffer = (definition.buffer || (this.tileWidth * 3 / 4)) * this.scaleX;
			this.camera = {
				x: -buffer - 1, //to force camera update
				y: -buffer - 1,
				buffer: buffer
			};
			this.cache = {
				minX: -1,
				minY: -1,
				maxX: -1,
				maxY: -1
			};
			
			this.doubleBuffer = [null, null];
			this.currentBuffer = 0;
		},

		events: {// These are messages that this component listens for
			"handle-render-load": function(resp){
				var x = 0,
				y     = 0,
				stage = null,
				index = '',
				imgMapDefinition = this.imageMap,
				newImgMap = [];

				if(resp && resp.stage){
					stage = this.stage = resp.stage;
					
					this.tilesToRender = initializeCanvasConservation(new createjs.Container());
					this.tilesToRender.name = 'entity-managed'; //its visibility is self-managed
					
					for(x = 0; x < imgMapDefinition.length; x++){
						newImgMap[x] = [];
						for (y = 0; y < imgMapDefinition[x].length; y++){
							newImgMap[x][y] = index = imgMapDefinition[x][y];
							if(!this.tiles[index]){
								this.tiles[index] = this.createTile(index);
							}
						}
					}
					this.imageMap = newImgMap;
					
					this.tilesWidth  = x * this.tileWidth;
					this.tilesHeight = y * this.tileHeight;
					
					this.tilesToRender.scaleX = this.scaleX;
					this.tilesToRender.scaleY = this.scaleY;
					this.tilesToRender.z = this.owner.z;
			
					stage.addChild(this.tilesToRender);
				}
			},
			
			"peer-entity-added": function(entity){
				var x = 0,
				y     = 0,
				imgMap = this.imageMap,
				object = entity.cacheRender,
				bounds = null,
				top = 0,
				bottom = 0,
				right = 0,
				left = 0;
				
				// Determine whether to merge this image with the background.
				if(this.entityCache && object){ //TODO: currently only handles a single display object on the cached entity.
					if(!this.doMap){
						this.doMap = [];
					}

					// Determine range:
					bounds = object.getBounds();
					top    = Math.max(0, Math.floor((entity.y - object.y) / this.tileHeight));
					bottom = Math.min(imgMap[0].length, Math.ceil((entity.y - bounds.y + bounds.height) / this.tileHeight));
					left   = Math.max(0, Math.floor((entity.x - object.x) / this.tileWidth));
					right  = Math.min(imgMap.length, Math.ceil((entity.x - bounds.x + bounds.width) / this.tileWidth));
					
					// Find tiles that should include this display object
					for(x = left; x < right; x++){
						if(!this.doMap[x]){
							this.doMap[x] = [];
						}
						for (y = top; y < bottom; y++){
							if(!this.doMap[x][y]){
								this.doMap[x][y] = [];
							}
							this.doMap[x][y].push(object); //TODO: may want to properly handle z-order here at some point?
						}
					}
					
					// Prevent subsequent draws
					entity.removeComponent('render-sprite');
				}
			},
			
			"add-tiles": function(definition){
				var x = 0,
				y     = 0,
				map   = definition.imageMap,
				index = '',
				newIndex = 0;
				
				if(map){
					for(x = 0; x < this.imageMap.length; x++){
						for (y = 0; y < this.imageMap[x].length; y++){
							newIndex = map[x][y];
							index = this.imageMap[x][y];
							if(this.tiles[index]){
								delete this.tiles[index];
							}
							index = this.imageMap[x][y] += ' ' + newIndex;
							if(!this.tiles[index]){
								this.tiles[index] = this.createTile(index);
							}
						}
					}
				}
			},

			"camera-loaded": function(dimensions){
				this.worldWidth  = dimensions.width;
				this.worldHeight = dimensions.height;
			},

			"camera-update": function(camera){
				var x  = 0,
				y      = 0,
				z      = 0,
				buffer = this.camera.buffer,
				cache  = this.cache,
				context= null,
				canvas = null,
				width  = 0,
				height = 0,
				maxX   = 0,
				maxY   = 0,
				minX   = 0,
				minY   = 0,
				camL   = this.convertCamera(camera.viewportLeft, this.worldWidth, this.tilesWidth, camera.viewportWidth),
				camT   = this.convertCamera(camera.viewportTop, this.worldHeight, this.tilesHeight, camera.viewportHeight),
				vpL    = Math.floor(camL / this.tileWidth)  * this.tileWidth,
				vpT    = Math.floor(camT / this.tileHeight) * this.tileHeight,
				tile   = null,
				ents   = [],
				oList  = null;
				
				this.tilesToRender.x = camera.viewportLeft - camL;
				this.tilesToRender.y = camera.viewportTop  - camT;
						
				if (((Math.abs(this.camera.x - vpL) > buffer) || (Math.abs(this.camera.y - vpT) > buffer)) && (this.imageMap.length > 0)){
					this.camera.x = vpL;
					this.camera.y = vpT;
					
					//only attempt to draw children that are relevant
					maxX = Math.min(Math.ceil((vpL + camera.viewportWidth + buffer) / (this.tileWidth * this.scaleX)), this.imageMap.length) - 1;
					minX = Math.max(Math.floor((vpL - buffer) / (this.tileWidth * this.scaleX)), 0);
					maxY = Math.min(Math.ceil((vpT + camera.viewportHeight + buffer) / (this.tileHeight * this.scaleY)), this.imageMap[0].length) - 1;
					minY = Math.max(Math.floor((vpT - buffer) / (this.tileHeight * this.scaleY)), 0);
		
					if((maxY > cache.maxY) || (minY < cache.minY) || (maxX > cache.maxX) || (minX < cache.minX)){
						if(this.tilesToRender.cacheCanvas){
							canvas = this.tilesToRender.cacheCanvas;
							this.tilesToRender.uncache();
						}
						
						this.tilesToRender.removeChildAt(0);
						this.tilesToRender.cache(minX * this.tileWidth, minY * this.tileHeight, (maxX - minX + 1) * this.tileWidth, (maxY - minY + 1) * this.tileHeight, 1);
						
						for(x = minX; x <= maxX; x++){
							for (y = minY; y <= maxY; y++){
								if((y > cache.maxY) || (y < cache.minY) || (x > cache.maxX) || (x < cache.minX)){
									// draw tiles
									tile = this.tiles[this.imageMap[x][y]];
									this.tilesToRender.removeChildAt(0); // Leaves one child in the display object so createjs will render the cached image.
									this.tilesToRender.addChild(tile);
									tile.x = (x + 0.5) * this.tileWidth;
									tile.y = (y + 0.5) * this.tileHeight;
									this.tilesToRender.updateCache('source-over');

									// check for cached entities
									if(this.doMap && this.doMap[x] && this.doMap[x][y]){
										oList = this.doMap[x][y];
										for(z = 0; z < oList.length; z++){
											if(!oList[z].drawn){
												oList[z].drawn = true;
												ents.push(oList[z]);
											}
										}
									}
								}
							}
						}
						
						// Draw cached entities
						if(ents.length){
							for(z = 0; z < ents.length; z++){
								delete ents[z].drawn;
								this.tilesToRender.removeChildAt(0); // Leaves one child in the display object so createjs will render the cached image.
								this.tilesToRender.addChild(ents[z]);
								this.tilesToRender.updateCache('source-over');
							}
						}
		
						if(canvas){
							context = this.tilesToRender.cacheCanvas.getContext('2d');
							width   = (cache.maxX - cache.minX + 1) * this.tileWidth;
							height  = (cache.maxY - cache.minY + 1) * this.tileHeight;
							context.drawImage(canvas, 0, 0, width, height, (cache.minX - minX) * this.tileWidth, (cache.minY - minY) * this.tileHeight, width, height);
							cache.minX = minX;
							cache.minY = minY;
							cache.maxX = maxX;
							cache.maxY = maxY;
						}
					}
				}
			}
		},
	
		methods:{
			convertCamera: function(distance, worldDistance, tileDistance, viewportDistance){
				if(((worldDistance / this.scaleX) === tileDistance) || ((worldDistance / this.scaleX) === viewportDistance)){
					return distance;
				} else {
					return distance * (tileDistance - viewportDistance) / ((worldDistance / this.scaleX) - viewportDistance);
				}
			},
			
			createTile: function(imageName){
				var i = 1,
				imageArray = imageName.split(' '),
				mergedTile = null,
				tile  = new createjs.Sprite(this.spriteSheet, 0),
				layer = null;
				
				tile.x = 0;
				tile.y = 0;
				tile.regX = this.tileWidth / 2;
				tile.regY = this.tileHeight / 2;
				if(imageArray[0] !== 'tile-1'){
					layer = transformCheck(imageArray[0]);
					tile.scaleX = layer.x;
					tile.scaleY = layer.y;
					tile.rotation = layer.r;
					tile.gotoAndStop('tile' + layer.t);
				} else {
					tile.gotoAndStop('tile-1');
				}
				
				for (; i < imageArray.length; i++){
					if(imageArray[i] !== 'tile-1'){
						if(!mergedTile){
							mergedTile = new createjs.Container();
							mergedTile.addChild(tile);
							mergedTile.cache(-this.tileWidth/2,-this.tileHeight/2,this.tileWidth,this.tileHeight,1);
						}
						layer = transformCheck(imageArray[i]);
						tile.scaleX = layer.x;
						tile.scaleY = layer.y;
						tile.rotation = layer.r;
						tile.gotoAndStop('tile' + layer.t);
						mergedTile.updateCache('source-over');
					}
				}

				if(mergedTile){
					return mergedTile;
				} else {
					tile.cache(0,0,this.tileWidth,this.tileHeight,1);
					return tile;
				}
			},
			
			destroy: function(){
				this.tilesToRender.removeAllChildren();
				this.stage.removeChild(this.tilesToRender);
				this.imageMap.length = 0;
				this.tiles = undefined;
				this.camera = undefined;
				this.stage = undefined;
				this.tilesToRender = undefined;
			}
		}
	});
})();


/*--------------------------------------------------
 *   logic-button - ../engine/components/logic-button.js
 */
/**
# COMPONENT **logic-button**
This component handles the pressed/released state of a button according to input. It can be set as a toggle button or a simple press-and-release button.

## Dependencies:
- [[handler-logic]] (on entity's parent) - This component listens for a logic tick message to maintain and update its state.

## Messages

### Listens for:
- **handle-logic** - On a `tick` logic message, the component updates its current state and broadcasts its logical state to the entity.
- **pressed** - on receiving this message, the state of the button is set to "pressed".
- **released** - on receiving this message, the state of the button is set to "released".
- **mousedown** - on receiving this message, the state of the button is set to "pressed". Note that this component will not listen for "mousedown" if the component is in toggle mode.
- **mouseup** - on receiving this message, the state of the button is set to "released" unless in toggle mode, in which case it toggles between "pressed" and "released".

### Local Broadcasts:
- **logical-state** - this component will trigger this message with both "pressed" and "released" properties denoting its state. Both of these work in tandem and never equal each other.
  - @param message.pressed (boolean) - whether the button is in a pressed state.
  - @param message.released (boolean) - whether the button is in a released state.

## JSON Definition:
    {
      "type": "logic-button",
      
      "toggle": true,
      // Optional. Determines whether this button should behave as a toggle. Defaults to "false".
      
      "state": "pressed"
      // Optional. Specifies starting state of button; typically only useful for toggle buttons. Defaults to "released".
    }
*/
(function(){
	return platformer.createComponentClass({
		id: 'logic-button',
		constructor: function(definition){
			this.state = this.owner.state;
			this.state.released = true;
			this.state.pressed  = false;
			this.stateChange = '';
			this.toggle = !!definition.toggle;

			if(definition.state === 'pressed'){
				this.stateChange = 'pressed';
			}
		},
		events:{
			"mousedown": function(){
				if(!this.toggle){
					this.stateChange = 'pressed';
				}
			},
			"pressed": function(){
				this.stateChange = 'pressed';
			},
			"pressup": function(){
				if(this.toggle){
					if(this.state.pressed){
						this.owner.triggerEvent('released');
					} else {
						this.owner.triggerEvent('pressed');
					}
				} else {
					this.owner.triggerEvent('released');
				}
			},
			"mouseup": function(){
				if(this.toggle){
					if(this.state.pressed){
						this.owner.triggerEvent('released');
					} else {
						this.owner.triggerEvent('pressed');
					}
				} else {
					this.owner.triggerEvent('released');
				}
			},
			"released": function(){
				this.stateChange = 'released';
			},
			"handle-logic": function(resp){
				if(this.state.released && (this.stateChange === 'pressed')){
					this.stateChange = '';
					this.state.pressed = true;
					this.state.released = false;
				}
				if(this.state.pressed && (this.stateChange === 'released')){
					this.stateChange = '';
					this.state.pressed = false;
					this.state.released = true;
				}
			}
		}
	});
})();


/*--------------------------------------------------
 *   logic-delay-message - ../engine/components/logic-delay-message.js
 */
/**
# COMPONENT **logic-delay-message**
This component allows certain messages to trigger new messages at a later time. This is useful for any sort of delayed reaction to events.

## Dependencies
- [[handler-logic]] (on entity's parent) - This component listens for a logic tick message to maintain and update its location.

## Messages

### Listens for:
- **handle-logic** - On a `tick` logic message, the component checks the running counts on its delayed messages to determine whether to trigger any.
  - @param message.delta - To determine whether to trigger messages, the component keeps a running count of tick lengths.
- **[input messages]** - This component listens for messages as determined by the JSON settings.

### Local Broadcasts:
- **[output messages]** - This component triggers output messages as determined by the JSON settings.

## JSON Definition
    {
      "type": "logic-delay-message",
      
      "events": {
      // Required: This is a list of event objects that should be listened for, and the messages that they should trigger at some time in the future.
      
        "saw-clown": {
        // This component will use the following to determine when and what to send on hearing the "saw-clown" event.
        
          "event": "laugh",
          // This component will trigger "laugh"
          
          "message": {"feeling": "happy", "sincerity": "85%"}
          // This can be a value or object to pass as the message content with the "laugh" event.
          
          "delay": 1500,
          // This is the delay in milliseconds before which the new message should be triggered.
          
          "singleInstance": true,
          // This determines whether more "saw-clown" events triggered during the delayed response period should be treated as new messages to be triggered or whether the initial instance prevents additional instances from occurring.
          
          "repeat": true,
          // This sets whether the event should continue to trigger every "delay" amount of time until "cancelEvent" is called. Defaults to `false`.
          
          "cancelEvent": "dropped-popcorn"
          // If set, on receiving this event, the component will not trigger the "laugh" event after all if it's currently planning to.
        },
        
        // Multiple delay messages can be set up on this component.
        "move-right":{
          "event": "look-left",
          "delay": 7000
        }
      
      }
    }
*/
(function(){
	var createMessage = function(event){
		var includeMessage = function(event, message){
			if(message && !event.message){
				return {
					event: event.event,
					message: message,
					delay: event.delay,
					repeat: event.repeat
				};
			} else {
				return event;
			}
		};
		if(event.singleInstance){
			return function(message){
				var i = 0,
				add = true;
				
				for (; i < this.queue.length; i++){
					if(this.queue[i].event === event.event){
						add = false;
					}
				}
				
				if(add){
					this.queue.push(includeMessage(event, message));
					this.queueTimes.push(event.delay);
				}
			};
		} else {
			return function(message){
				this.queue.push(includeMessage(event, message));
				this.queueTimes.push(event.delay);
			};
		}
	},
	createCancellation = function(cancelEvent){
		return function(){
			var i = this.queue.length - 1;
			
			for (; i > -1; i--){
				if(this.queue[i] === cancelEvent){
					this.queueTimes.splice(i,1);
					this.queue.splice(i,1);
				}
			}
		};
	};

	return platformer.createComponentClass({
		id: 'logic-delay-message',
		
		constructor: function(definition){
			this.queueTimes = [];
			this.queue = [];
			
			if(definition.events){
				for(var event in definition.events){
					this.addEventListener(event, createMessage(definition.events[event]));
					
					if(definition.events[event].cancelEvent) {
						this.addEventListener(definition.events[event].cancelEvent, createCancellation(definition.events[event]));
					}
				}
			}
		},

		events: {// These are messages that this component listens for
			"handle-logic":  function(resp){
				var i = this.queue.length - 1;
				
				for (; i > -1; i--){
					this.queueTimes[i] -= resp.delta;
					
					if(this.queueTimes[i] <= 0){
						this.owner.trigger(this.queue[i].event, this.queue[i].message);
						if(this.queue[i].repeat){
							this.queueTimes[i] += this.queue[i].delay;
						} else {
							this.queueTimes.splice(i,1);
							this.queue.splice(i,1);
						}
					}
				}
			}
		},
		
		methods: {
			destroy: function(){
				this.queueTimes.length = 0;
				this.queue.length = 0;
			}
		}
	});
})();


/*--------------------------------------------------
 *   logic-directional-movement - ../engine/components/logic-directional-movement.js
 */
/**
# COMPONENT **logic-directional-movement**
This component changes the (x, y) position of an object according to its current speed and heading. It maintains its own heading information independent of other components allowing it to be used simultaneously with other logic components like [[Logic-Pushable]] and [[Logic-Gravity]]. It accepts directional messages that can stand alone, or come from a mapped controller, in which case it checks the `pressed` value of the message before changing its course accordingly.

## Dependencies:
- [[handler-logic]] (on entity's parent) - This component listens for a logic tick message to maintain and update its location.

## Messages

### Listens for:
- **handle-logic** - On a `tick` logic message, the component updates its location according to its current state.
  - @param message.delta - To determine how far to move the entity, the component checks the length of the tick.
- **[directional message]** - Directional messages include `go-down`, `go-south`, `go-down-left`, `go-southwest`, `go-left`, `go-west`, `go-up-left`, `go-northwest`, `go-up`, `go-north`, `go-up-right`, `go-northeast`, `go-right`, `go-east`, `go-down-right`, and `go-southeast`. On receiving one of these messages, the entity adjusts its movement orientation.
  - @param message.pressed (boolean) - Optional. If `message` is included, the component checks the value of `pressed`: true causes movement in the triggered direction, false turns off movement in that direction. Note that if no message is included, the only way to stop movement in a particular direction is to trigger `stop` on the entity before progressing in a new orientation. This allows triggering `up` and `left` in sequence to cause `up-left` movement on the entity.
- **stop** - Stops motion in all directions until movement messages are again received.
  - @param message.pressed (boolean) - Optional. If `message` is included, the component checks the value of `pressed`: a value of false will not stop the entity.

### Local Broadcasts:
- **logical-state** - this component will trigger this message when its movement or direction changes. Note that directions are not mutually exclusive: adjacent directions can both be true, establishing that the entity is facing a diagonal direction.
  - @param message.moving (boolean) - whether the entity is in motion.
  - @param message.left (boolean)   - whether the entity is facing left.
  - @param message.right (boolean)  - whether the entity is facing right.
  - @param message.up (boolean)     - whether the entity is facing up.
  - @param message.down (boolean)   - whether the entity is facing down.

## JSON Definition:
    {
      "type": "logic-directional-movement",
      
      "speed": 4.5
      // Optional. Defines the distance in world units that the entity should be moved per millisecond. Defaults to 0.3.
    }
*/
(function(){
	var processDirection = function(direction){
		return function (state){
			if(state){
				this[direction] = (state.pressed !== false);
//				this.stopped = !state.pressed;
			} else {
				this[direction] = true;
//				this.stopped = false;
			}
		};
	},
	getAngle = function(x, y){
		var m = Math.sqrt(x * x + y * y),
		a     = 0;

		if (m != 0){
			a = Math.acos(x / m);
			if (y < 0){
				a = (Math.PI * 2) - a;
			}
		}
		return a;
	};
	
	return platformer.createComponentClass({
		id: 'logic-directional-movement',
		
		constructor: function(definition){
			var self = this;
			
			this.speed = definition.speed || .3;
			
			this.boost = false;
			this.paused = false;
			
			if(definition.pause || definition.boost){
				if(typeof definition.pause === 'string'){
					this.pausers = [definition.pause];
				} else {
					this.pausers = definition.pause;
				}
				this.addEventListener('logical-state', function(state){
					var paused = false;
					if(definition.pause){
						for(var i = 0; i < self.pausers.length; i++){
							paused = paused || state[self.pausers[i]];
						}
						this.paused = paused;
					}
					
					if(definition.boost){
						if(self.boost){
							if(state[definition.boost] === false){
								self.boost = false;
							}
						} else if(state[definition.boost] === true){
							self.boost = true;
						}
					}
				});
			}

			this.state = this.owner.state;
			this.state.moving = false;
			this.state.left = false;
			this.state.right = false;
			this.state.up = false;
			this.state.down = false;

			this.owner.orientation = 0;
			
			this.moving = false;
			this.left = false;
			this.right = false;
			this.up = false;
			this.down = false;
			this.upLeft = false;
			this.upRight = false;
			this.downLeft = false;
			this.downRight = false;
			this.facing = 'right';
		},
		events:{
			"handle-logic": function(resp){
				var vX    = 0,
				vY        = 0,
				up        = this.up        || this.upLeft || this.downLeft,
				upLeft    = this.upLeft    || (this.up   && this.left),
				left      = this.left      || this.upLeft || this.downLeft,
				downLeft  = this.downLeft  || (this.down && this.left),
				down      = this.down      || this.downLeft || this.downRight,
				downRight = this.downRight || (this.down && this.right),
				right     = this.right     || this.upRight || this.downRight,
				upRight   = this.upRight   || (this.up   && this.right),
				orientation = 0;
				
				if (up && down){
					this.moving = false;
				} else if (left && right) {
					this.moving = false;
				} else if (upLeft) {
					vX = -this.speed / 1.414;
					vY = -this.speed / 1.414;
					this.moving = true;
					this.facing = 'up-left';
				} else if (upRight) {
					vY = -this.speed / 1.414;
					vX =  this.speed / 1.414;
					this.moving = true;
					this.facing = 'up-right';
				} else if (downLeft) {
					vY =  this.speed / 1.414;
					vX = -this.speed / 1.414;
					this.moving = true;
					this.facing = 'down-left';
				} else if (downRight) {
					vY =  this.speed / 1.414;
					vX =  this.speed / 1.414;
					this.moving = true;
					this.facing = 'down-right';
				} else if(left)	{
					vX = -this.speed;
					this.moving = true;
					this.facing = 'left';
				} else if (right) {
					vX =  this.speed;
					this.moving = true;
					this.facing = 'right';
				} else if (up) {
					vY = -this.speed;
					this.moving = true;
					this.facing = 'up';
				} else if (down) {
					vY =  this.speed;
					this.moving = true;
					this.facing = 'down';
				} else {
					this.moving = false;
					
					// This is to retain the entity's direction even if there is no movement. There's probably a better way to do this since this is a bit of a retrofit. - DDD
					switch(this.facing){
					case 'up': up = true; break;
					case 'down': down = true; break;
					case 'left': left = true; break;
					case 'right': right = true; break;
					case 'up-left': up = true; left = true; break;
					case 'up-right': up = true; right = true; break;
					case 'down-left': down = true; left = true; break;
					case 'down-right': right = true; right = true; break;
					}
				}
				
				if(this.moving){
					if(!this.paused){
						if(this.boost) {
							vX *= 1.5;
							vY *= 1.5;
						}

						this.owner.x += (vX * resp.delta);
						this.owner.y += (vY * resp.delta);
					}
					
					orientation = getAngle(vX, vY);
					if(this.owner.orientation !== orientation){
						this.owner.orientation = orientation;
					}
				}
				
				//TODO: possibly remove the separation of this.state.direction and this.direction to just use state?
				if(this.state.moving !== this.moving){
					this.state.moving = this.moving;
				}
				if(this.state.up !== up){
					this.state.up = up;
				}
				if(this.state.right !== right){
					this.state.right = right;
				}
				if(this.state.down !== down){
					this.state.down = down;
				}
				if(this.state.left !== left){
					this.state.left = left;
				}
			},
			
			"go-down": processDirection('down'),
			"go-south": processDirection('down'),
			"go-down-left": processDirection('downLeft'),
			"go-southwest": processDirection('downLeft'),
			"go-left": processDirection('left'),
			"go-west": processDirection('left'),
			"go-up-left": processDirection('upLeft'),
			"go-northwest": processDirection('upLeft'),
			"go-up": processDirection('up'),
			"go-north": processDirection('up'),
			"go-up-right": processDirection('upRight'),
			"go-northeast": processDirection('upRight'),
			"go-right": processDirection('right'),
			"go-east": processDirection('right'),
			"go-down-right": processDirection('downRight'),
			"go-southeast": processDirection('downRight'),

			"stop": function(state){
				if(!state || (state.pressed !== false)){
					this.left = false;
					this.right = false;
					this.up = false;
					this.down = false;
					this.upLeft = false;
					this.upRight = false;
					this.downLeft = false;
					this.downRight = false;
				}
			},
			
			"accelerate": function(velocity) {
				this.speed = velocity;
			}
		}
	});
})();

/*--------------------------------------------------
 *   logic-rotational-movement - ../engine/components/logic-rotational-movement.js
 */
/**
# COMPONENT **logic-rotational-movement**
This component changes the (x, y) position of an object according to its current speed and heading. It maintains its own heading information independent of other components allowing it to be used simultaneously with other logic components like [[Logic-Pushable]] and [[Logic-Gravity]]. It accepts directional messages that can stand alone, or come from a mapped controller, in which case it checks the `pressed` value of the message before changing its course accordingly.

## Dependencies:
- [[handler-logic]] (on entity's parent) - This component listens for a logic tick message to maintain and update its location.

## Messages

### Listens for:
- **handle-logic** - On a `tick` logic message, the component updates its location according to its current state.
  - @param message.delta - To determine how far to move the entity, the component checks the length of the tick.
- **[directional message]** - Directional messages include `turn-left`, `turn-right`, `go-forward`, and `go-backward`. On receiving one of these messages, the entity adjusts its movement and orientation.
  - @param message.pressed (boolean) - Optional. If `message` is included, the component checks the value of `pressed`: true causes movement in the triggered direction, false turns off movement in that direction. Note that if no message is included, the only way to stop movement in a particular direction is to trigger `stop` on the entity before progressing in a new orientation.
- **stop** - Stops rotational and linear motion movement messages are again received.
  - @param message.pressed (boolean) - Optional. If `message` is included, the component checks the value of `pressed`: a value of false will not stop the entity.
- **stop-turning** - Stops rotational motion until movement messages are again received.
  - @param message.pressed (boolean) - Optional. If `message` is included, the component checks the value of `pressed`: a value of false will not stop the entity.
- **stop-moving** - Stops linear motion until movement messages are again received.
  - @param message.pressed (boolean) - Optional. If `message` is included, the component checks the value of `pressed`: a value of false will not stop the entity.

## JSON Definition:
    {
      "type": "logic-rotational-movement",
      
      "speed": 4.5,
      // Optional. Defines the distance in world units that the entity should be moved per millisecond. Defaults to 0.3.
      
      "angle": 0,
      // Optional: Radian orientation that entity should begin in. Defaults to 0 (facing right).
      
      "degree": 0.1
      // Optional: Unit in radian that the angle should change per millisecond.
    }
*/
(function(){
	var pi = Math.PI,
	cos = Math.cos,
	sin = Math.sin,
	polarToCartesianX = function(m, a){
		return m * cos(a);
	},
	polarToCartesianY = function(m, a){
		return m * sin(a);
	};
	
	return platformer.createComponentClass({
		id: 'logic-rotational-movement',
		constructor: function(definition){
			this.speed = definition.speed || .3;
			this.magnitude = 0;
			this.degree = (definition.degree || 1) * pi / 180;
			this.angle = definition.angle || 0;
			
			this.state = this.owner.state;
			this.state.moving       = false;
			this.state.turningRight = false;
			this.state.turningLeft  = false;
	
			this.owner.orientation  = 0;
			
			this.moving = false;
			this.turningRight = false;
			this.turningLeft = false;
		},
		events:{
			"handle-logic": function(resp){
				var vX    = 0,
				vY        = 0;
				
				if(this.turningRight){
					this.angle += this.degree * resp.delta / 15;
				}
		
				if(this.turningLeft){
					this.angle -= this.degree * resp.delta / 15;
				}
				
				if(this.moving){
					vX = polarToCartesianX(this.magnitude, this.angle);
					vY = polarToCartesianY(this.magnitude, this.angle);
				}
		
				this.owner.x += (vX * resp.delta);
				this.owner.y += (vY * resp.delta);
				
				if(this.state.moving !== this.moving){
					this.state.moving = this.moving;
				}
				if(this.state.turningLeft !== this.turningLeft){
					this.state.turningLeft = this.turningLeft;
				}
				if(this.state.turningRight !== this.turningRight){
					this.state.turningRight = this.turningRight;
				}
				if(this.owner.orientation !== this.angle){
					this.owner.orientation = this.angle;
				}
			},
			"turn-right": function (state){
				if(state){
					this.turningRight = state.pressed;
				} else {
					this.turningRight = true;
				}
			},
			"turn-left": function (state){
				if(state){
					this.turningLeft = state.pressed;
				} else {
					this.turningLeft = true;
				}
			},
			"go-forward": function(state){
				if(!state || state.pressed){
					this.moving = true;
					this.magnitude = this.speed;
				} else {
					this.moving = false;
				}
			},
			"go-backward": function(state){
				if(!state || state.pressed){
					this.moving = true;
					this.magnitude = -this.speed;
				} else {
					this.moving = false;
				}
			},
			"stop": function(state){
				if(!state || state.pressed){
					this.moving = false;
					this.turningLeft = false;
					this.turningRight = false;
				}
			},
			"stop-moving": function(state){
				if(!state || state.pressed){
					this.moving = false;
				}
			},
			"stop-turning": function(state){
				if(!state || state.pressed){
					this.turningLeft = false;
					this.turningRight = false;
				}
			}
		}
	});
})();


/*--------------------------------------------------
 *   logic-gravity - ../engine/components/logic-gravity.js
 */
/**
# COMPONENT **logic-gravity**
A component that causes the object to move according to a specified gravity.

## Dependencies
- [[Handler-Logic]] (on entity's parent) - This component listens for a "handle-logic" message. It then moves the entity according to the gravitational forces.
- [[Collision-Basic]] (on entity) - Not required if this object doesn't collide with things. This component listens for the message 'hit-solid' from the collision-basic component.

## Messages

### Listens for:
- **handle-logic** - Accelerates and moves the objects according to the set gravity. Objects will not move faster than the max velocity set. Though max velocity only limits the portion of the velocity maintained by the gravity component.
  - @param resp.delta (number) - The time since the last tick.
- **hit-solid** - Received when we collide with an object that is solid to the entity. We stop the movement in the direction of that object.
  - @param collisionInfo.x (number) - Either 1,0, or -1. 1 if we're colliding with an object on our right. -1 if on our left. 0 if not at all. 
  - @param collisionInfo.y (number) - Either 1,0, or -1. 1 if we're colliding with an object on our bottom. -1 if on our top. 0 if not at all.
- **glide** - Changes the maximum gravitational velocity.
  - @param message.maxVelocity, message.maxVelocityX, message.maxVelocityY (number) - The new maximum velocity the entity should have due to gravity.
  - @param message.duration, message.durationX, message.durationY (number) - Time in milliseconds to make the transition form current velocity to the maximum velocity.
  - @param message.acceleration, message.accelerationX, message.acclerationY (number) - How quickly to transition to new maximum velocity.
- **gravitate** - Changes the gravitational acceleration.
  - @param message.gravity, message.gravityX, message.gravityY (number) - Sets the new gravitational pull on the entity.
- **hover** - Causes gravitational affect on the entity's velocity to cease.
  - @param message.pressed (boolean) - Optional. If `message` is included, the component checks the value of `pressed`: a value of false will not stop gravity.
- **fall** - Causes the gravitational affect on the entity's velocity to continue.
  - @param message.pressed (boolean) - Optional. If `message` is included, the component checks the value of `pressed`: a value of false will not start gravity.
 

## JSON Definition
    {
      "type": "logic-gravity",
      "velocityX" : 0,
      //Optional - The starting x velocity of the entity. Defaults to 0.
	  "velocityY" : 0,
	  //Optional - The starting y velocity of the entity. Defaults to 0.
	  "maxVelocityX" : 3,
	  //Optional - The max x velocity attributed to the entity by gravity. Defaults to 3.
	  "maxVelocityY" : 3, 
	  //Optional - The max y velocity attributed to the entity by gravity. Defaults to 3.
	  "maxVelocity" : 3, 
	  //Optional - The max velocity attributed to the entity by gravity in both x and y. This is superseded by the specific maxVelocityX and maxVelocityY values. Defaults to 3.
	  "xGravity" : 0,
	  //Optional - The gravitational acceleration in units/millisecond that the entity moves in x. Defaults to 0.
	  "yGravity" : 0.01,
	  //Optional - The gravitational acceleration in units/millisecond that the entity moves in y. Defaults to .01.
	  "gravity" : 0
	  //Optional - The gravitational acceleration in units/millisecond that the entity moves in y. This is superseded by the specific yGravity. Defaults to .01.
    }
*/

(function(){
	return platformer.createComponentClass({
		id: 'logic-gravity',
		
		constructor: function(definition){
			this.vY = definition.gravity || definition.yGravity;
			if(typeof this.vY !== 'number'){
				this.vY = .01;
			}
			this.vX = definition.xGravity || 0;
			
			this.maxVelocity = definition.maxVelocity || 0;
			this.newMaxX = this.maxVelocityX = definition.maxVelocityX || this.maxVelocity;
			this.newMaxY = this.maxVelocityY = definition.maxVelocityY || this.maxVelocity;
			this.accelerationX = 0;
			this.accelerationY = 0;
			this.durationX = 0;
			this.durationY = 0;
			
			if(typeof this.owner.dx !== 'number'){
				this.owner.dx = 0;
			}
			if(typeof this.owner.dy !== 'number'){
				this.owner.dy = 0;
			}
			
			this.state = this.owner.state;
			
			this.hovering = this.state.hovering = this.state.hovering || false;
			this.falling  = this.state.falling  = this.state.falling  || false;
			this.grounded = this.state.grounded = this.state.grounded || !this.falling;
		},
		
		events:{
			"handle-logic": function(resp){
				var delta = resp.delta;
				
				if(!this.hovering){
					if(this.newMaxX !== this.maxVelocityX){
						if(this.durationX - delta > 0){
							this.maxVelocityX += (this.newMaxX - this.maxVelocityX) * (delta / this.durationX);
							this.durationX -= delta;
						} else if(this.accelerationX){
							if(this.newMaxX > this.maxVelocityX){
								if(this.owner.dx > this.maxVelocityX) {
									this.maxVelocityX = this.owner.dx;
								}
								this.maxVelocityX = Math.min(this.maxVelocityX + (this.accelerationX * resp.delta), this.newMaxX);
							} else {
								if(this.owner.dx < this.maxVelocityX) {
									this.maxVelocityX = this.owner.dx;
								}
								this.maxVelocityX = Math.max(this.maxVelocityX - (this.accelerationX * resp.delta), this.newMaxX);
							}
						} else {
							this.maxVelocityX = this.newMaxX;
							this.durationX = 0;
						}
					}
					
					if(this.newMaxY !== this.maxVelocityY){
						if(this.durationY - delta > 0){
							this.maxVelocityY += (this.newMaxY - this.maxVelocityY) * (delta / this.durationY);
							this.durationY -= delta;
						} else if(this.accelerationY){
							if(this.newMaxY > this.maxVelocityY){
								if(this.owner.dy > this.maxVelocityY) {
									this.maxVelocityY = this.owner.dy;
								}
								this.maxVelocityY = Math.min(this.maxVelocityY + (this.accelerationY * resp.delta), this.newMaxY);
							} else {
								if(this.owner.dy < this.maxVelocityY) {
									this.maxVelocityY = this.owner.dy;
								}
								this.maxVelocityY = Math.max(this.maxVelocityY - (this.accelerationY * resp.delta), this.newMaxY);
							}
						} else {
							this.maxVelocityY = this.newMaxY;
							this.durationY = 0;
						}
					}
					
					this.owner.dx += this.vX * delta;
					this.owner.dy += this.vY * delta;
					
					if(this.vX && this.maxVelocityX && (this.owner.dx > this.maxVelocityX)){
						this.owner.dx = this.maxVelocityX;
					}
					if(this.vY && this.maxVelocityY && (this.owner.dy > this.maxVelocityY)){
						this.owner.dy = this.maxVelocityY;
					}
				}
				
				if(this.state.hovering !== this.hovering){
					this.state.hovering = this.hovering;
				}
				if(this.state.falling !== this.falling){
					this.state.falling = this.falling;
				}
				if(this.state.grounded !== this.grounded){
					this.state.grounded = this.grounded;
				}
				this.grounded = false;
				this.falling  = true;
			},
			"hit-solid": function(collisionInfo){
				if(!this.hovering){
					if(((collisionInfo.y > 0) && (this.vY > 0)) || ((collisionInfo.y < 0) && (this.vY < 0))){
						this.owner.dy = 0;
						this.falling = false;
						this.grounded = true;
					} else if(((collisionInfo.x < 0) && (this.vX < 0)) || ((collisionInfo.x > 0) && (this.vX > 0))){
						this.owner.dx = 0;
						this.falling = false;
						this.grounded = true;
					}
				}
				return true;
			},
			"glide": function(resp) {
				var max      = resp.maxVelocity || this.maxVelocity,
				duration     = resp.duration || 0,
				acceleration = resp.acceleration || 0;				
				
				this.durationX = resp.durationX || duration;
				this.durationY = resp.durationY || duration;
				
				this.accelerationX = resp.accelerationX || acceleration;
				this.accelerationY = resp.accelerationY || acceleration;
				
				this.newMaxX = resp.maxVelocityX || max || this.maxVelocityX;
				this.newMaxY = resp.maxVelocityY || max || this.maxVelocityY;
				
				if(!this.durationX && !this.accelerationX){
					this.maxVelocityX = this.newMaxX;
				}
				if(!this.durationY && !this.accelerationY){
					this.maxVelocityY = this.newMaxY;
				}
			},
			"gravitate": function(value) {
				this.vY = value.gravity || value.yGravity || 0;
				this.vX = value.xGravity || 0;
			},
			"hover": function(value){
				this.owner.dx = 0;
				this.owner.dy = 0;
				this.hovering = !value || (value.pressed !== false);
			},
			"fall": function(value){
				this.hovering = !!value && (value.pressed === false);
			}
		},
		
		methods: {
			destroy: function(){
				this.owner.dx = 0;
				this.owner.dy = 0;
			}
		}
	});
})();


/*--------------------------------------------------
 *   logic-jump - ../engine/components/logic-jump.js
 */
/**
# COMPONENT **logic-jump**
This component will cause the entity to jump with a certain amount of acceleration for a certain period of time.

## Dependencies:
- [[handler-logic]] (on entity's parent) - This component listens for a logic tick message to maintain and update its location.

## Messages

### Listens for:
- **handle-logic** - On a `tick` logic message, the component updates its location according to its current state.
- **jump** - On receiving this message, the component causes the entity's position to change according to the preset behavior.
  - @param message.pressed (boolean) - Optional. If `message` is included, the component checks the value of `pressed`: a value of false will not make it jump.
- **hit-solid** - On receiving this message, the component discontinues its jump velocity.
  - @param collisionInfo.x (number) - Either 1,0, or -1. Zeros out the jump velocity if acceleration is in the contrary direction.
  - @param collisionInfo.y (number) - Either 1,0, or -1. Zeros out the jump velocity if acceleration is in the contrary direction.

### Local Broadcasts:
- **just-jumped** - this component will trigger this message when it receives a "jump" message and is able to jump. This is useful for tying in a jump sound.

## JSON Definition:
    {
      "type": "logic-jump",
      
      "accelerationX": 0.2,
      "accelerationY": -0.07,
      // Acceleration of the jump. Defaults to -1 for y, 0 for x.
      
      "time": 500
      // Optional: Time in milliseconds that the jump can continue being powered by the message input; defaults to 0 which causes instantaneous jumping behavior (and thus should have a substantially larger acceleration than applying jump acceleration over time). Defaults to 0.
    }

*/
(function(){
	return platformer.createComponentClass({
		id: 'logic-jump',
		constructor: function(definition){
			this.aX = this.owner.accelerationX || definition.accelerationX || 0;
			this.aY = this.owner.accelerationY || definition.accelerationY;
			if(typeof this.aY !== 'number'){
				this.aY = -1;
			}
			if(typeof this.owner.dx !== 'number'){
				this.owner.dx = 0;
			}
			if(typeof this.owner.dy !== 'number'){
				this.owner.dy = 0;
			}
			
			this.time = definition.time || 0;
			
			this.jumpLength = 0;
			
			this.jumping = false;
			this.justJumped = false;
			this.grounded = true;
			
			this.state = this.owner.state;
			this.state.jumping    = false;
			this.state.justJumped = false;

			// Notes definition changes from older versions of this component.
			if(definition.message){
				console.warn('"' + this.type + '" components no longer accept "message": "' + definition.message + '" as a definition parameter. Use "aliases": {"' + definition.message + '": "jump"} instead.');
			}
		},
		
		events:{
			"handle-logic": function(resp){
				var delta   = resp.delta;
				
				if(this.state.justJumped !== this.justJumped){
					this.state.justJumped = this.justJumped;
				}

				if(this.justJumped){
					this.justJumped = false;
					this.jumpLength = this.time;
					this.owner.triggerEvent("just-jumped");
				}
				
				if(this.state.jumping !== this.jumping){
					this.state.jumping = this.jumping;
				}

				if(this.jumping){
					if(this.time){
						this.owner.dx += this.aX * delta;
						this.owner.dy += this.aY * delta;
						
						this.jumpLength -= delta;
						if(this.jumpLength < 0){
							this.jumping = false;
						}
					} else {
						this.owner.dx = this.aX;
						this.owner.dy = this.aY;

						this.jumping = false;
					}
				}
				
				this.grounded = false;
			},
			
			"jump": function(state){
				var jumping = false;
				
				if(state){
					jumping = (state.pressed !== false);
				} else {
					jumping = true;
				}

				if(!this.jumping && jumping && this.grounded){
					this.justJumped = true;
					this.jumping = true;
				} else if (this.jumping && !jumping) {
					this.jumping = false;
				}
			},
			
			"hit-solid": function(collisionInfo){
				if(!this.justJumped){
					if(collisionInfo.y){
						this.owner.dy = 0;
						if(((collisionInfo.y > 0) && (this.aY < 0)) || ((collisionInfo.y < 0) && (this.aY > 0))){
							this.jumping = false;
							this.grounded = true;
						}
					} else if(collisionInfo.x){
						this.owner.dx = 0;
						if(((collisionInfo.x < 0) && (this.aX > 0)) || ((collisionInfo.x > 0) && (this.aX < 0))){
							this.jumping = false;
							this.grounded = true;
						}
					}
				}
				return true;
			}
		}
	});
})();


/*--------------------------------------------------
 *   logic-portal - ../engine/components/logic-portal.js
 */
/**
# COMPONENT **logic-portal**
A component which changes the scene when activated. When the portal receives an occupied message it sends the entity in that message notifying it. This message is meant to give the entity a chance to activate the portal in the manner it wants. The portal can also be activated by simply telling it to activate.

## Dependencies
- [[handler-logic]] (on entity's parent) - This component listens for a "handle-logic" message it then checks to see if it should change the scene if the portal is activated.
- [[change-scene]] (on entity) - This component listens for the "new-scene" message that the logic-portal sends and actually handles the scene changing.
- [[collision-basic]] (on entity) - Not required, but if we want the 'occupied-portal' call to fire on collision you'll need to have a collision-basic component on the portal.

## Messages

### Listens for:
- **handle-logic** - Checks to see if we should change scene if the portal is activated.
- **occupied-portal** - This message takes an entity and then sends the entity a 'portal-waiting' message. The idea behind this was that you could use it with collision. When an entity gets in front of the portal the collision sends this message, we then tell the entity that collided to do whatever it needs and then it calls back to activate the portal.
  - @param message.entity (entity Object) - The entity that will receive the 'portal-waiting' message.
- **activate-portal** - This message turns the portal on. The next 'handle-logic' call will cause a change of scene.

### Local Broadcasts:
- **new-scene** - Calls the 'change-scene' component to tell it to change scenes.
  - @param object.destination (string) - The id of the scene that we want to go to.

### Peer Broadcasts:
- **portal-waiting** - Informs another object that the portal is waiting on it to send the activate message.
  - @param entity - This is the portal entity. To be used so that the object can communicate with it directly.

## JSON Definition
    {
      "type": "name-of-component",
      "destination" : "level-2"
      //Required - The destination scene to which the portal will take us. In most cases this will come into the portal from Tiled where you'll set a property on the portal you place.
    }
*/
	
(function(){
	return platformer.createComponentClass({
		id: 'logic-portal',
 		constructor: function(definition){
			this.destination = this.owner.destination || definition.destination;
			this.activated = false;
			this.used = false; 
		},
		events:{
			"handle-logic": function(){
				if (!this.used && this.activated){
					this.owner.trigger("new-scene", {scene: this.destination});
					this.used = true;
				}
			},
			"occupied-portal": function(message){
				var entity = message.entity; 
				entity.trigger('portal-waiting', this.owner);
			},
			"activate-portal": function(){
				this.activated = true;
			}
		}
	});
})();


/*--------------------------------------------------
 *   collision-basic - ../engine/components/collision-basic.js
 */
/**
# COMPONENT **collision-basic**
This component causes this entity to collide with other entities. It must be part of a collision group and will receive messages when colliding with other entities in the collision group.

Multiple collision components may be added to a single entity if distinct messages should be triggered for certain collision areas on the entity or if the soft collision area is a different shape from the solid collision area. Be aware that too many additional collision areas may adversely affect performance. 

## Dependencies:
- [[handler-collision]] (on entity's parent) - This component listens for 'prepare-for-collision', 'relocate-entity', and 'hit-by' messages, commonly triggered by [[handler-collision]] on the parent entity.

## Messages

### Listens for:
- **collide-on** - On receiving this message, the component triggers `add-collision-entity` on the parent.
- **collide-off** - On receiving this message, the component triggers `remove-collision-entity` on the parent.
- **prepare-for-collision** - Updates the axis-aligned bounding box for this entity in preparation for collision checks.
- **relocate-entity** - This message causes the entity's x,y coordinates to update.
  - @param message.x (number) - Required. The new x coordinate.
  - @param message.y (number) - Required. The new y coordinate.
  - @param message.relative (boolean) - Optional. Determines whether the provided x,y coordinates are relative to the entity's current position. Defaults to `false`.
- **hit-by-[collision-types specified in definition]** - When the entity collides with a listed collision-type, this message is received and re-triggered as a new message according to the component definition.

### Local Broadcasts
- **[Message specified in definition]** - On receiving a 'hit-by' message, custom messages are triggered on the entity corresponding with the component definition.

### Parent Broadcasts
- **add-collision-entity** - On receiving 'collide-on', this message is triggered on the parent.
- **remove-collision-entity** - On receiving 'collide-off', this message is triggered on the parent.

## JSON Definition:
    {
      "type": "collision-basic",
      
      "collisionType": "boulder",
      // Optional. Defines how this entity should be recognized by other colliding entities. Defaults to `none`.
      
      "immobile": true,
      // Optional. Defaults to `false`, but should be set to true if entity doesn't move for better optimization.
      
      "shapes": [{
      //Optional. Defines one or more shapes to create the collision area. Defaults to a single shape with the width, height, regX, and regY properties of the entity if not specified.
      
        "type": "circle",
        // Optional. Defaults to "rectangle".
        
        "offsetX": 0,
        "offsetY": -120,
        // Optional. Specifies the collision shape's position relative to the entity's x,y coordinates. Defaults to 0. Alternatively, can specify regX and regY values, which are determined from the top-right of the collision object.
      }],
      
      //The following five properties are optional and can be specified instead of the more specific `shape` above. 
      "width": 160,
      // Optional. Sets the width of the collision area in world coordinates.
      
      "height": 240,
      // Optional. Sets the height of the collision area in world coordinates.
      
      "radius": 60,
      // Optional. Sets the radius of a circle collision area in world coordinates.
      
      "regX": 80,
      // Optional. Determines the x-axis center of the collision shape.

      "regY": 120,
      // Optional. Determines the y-axis center of the collision shape.
      
      "solidCollisions":{
      // Optional. Determines which collision types this entity should consider solid, meaning this entity should not pass through them.

        "boulder": "",
        // This specifies that this entity should not pass through other "boulder" collision-type entities.
        
        "diamond": "crack-up",
        // This specifies that this entity should not pass through "diamond" collision-type entities, but if it touches one, it triggers a "crack-up" message on the entity.

        "marble": ["flip", "dance", "crawl"]
        // This specifies that this entity should not pass through "marble" collision-type entities, but if it touches one, it triggers all three specified messages on the entity.
      },
      
      "softCollisions":{
      // Optional. Determines which collision types this entity should consider soft, meaning this entity may pass through them, but triggers collision messages on doing so.

        "water": "soaked",
        // This triggers a "soaked" message on the entity when it passes over a "water" collision-type entity.

        "lava": ["burn", "ouch"]
        // This triggers both messages on the entity when it passes over a "lava" collision-type entity.
      }
    }
    
Requires: ["../collision-shape.js", "../aabb.js"]
*/
(function(){
	var entityBroadcast = function(event, solidOrSoft, collisionType){
		if(typeof event === 'string'){
			return function(value){
				if(value.myType === collisionType){
					if(value.hitType === solidOrSoft){
						this.owner.triggerEvent(event, value);
					}
				}
			};
		} else if(Array.isArray(event)){
			return function(value){
				if(value.myType === collisionType){
					if(value.hitType === solidOrSoft){
						for (var e in event){
							this.owner.triggerEvent(event[e], value);
						}
					}
				}
			};
		} else {
			return function(collisionInfo){
				var dx = collisionInfo.x,
				dy     = collisionInfo.y;
				
				if(collisionInfo.entity && !(dx || dy)){
					dx = collisionInfo.entity.x - this.owner.x;
					dy = collisionInfo.entity.y - this.owner.y;
				}
				
				if(collisionInfo.myType === collisionType){
					if(collisionInfo.hitType === solidOrSoft){
						if((dy > 0) && event['bottom']){
							this.owner.trigger(event['bottom'], collisionInfo);
						}
						if((dy < 0) && event['top']){
							this.owner.trigger(event['top'], collisionInfo);
						}
						if((dx > 0) && event['right']){
							this.owner.trigger(event['right'], collisionInfo);
						}
						if((dx < 0) && event['left']){
							this.owner.trigger(event['left'], collisionInfo);
						}
						if(event['all']){
							this.owner.trigger(event['all'], collisionInfo);
						}
					}
				}
			};
		}
	},
	setupCollisionFunctions = function(self, entity){
		// This allows the same component type to be added multiple times.
		if(!entity.collisionFunctions){
			entity.collisionFunctions = {};
			entity.getAABB = function(collisionType){
				if(!collisionType){
					var aabb = entity.aabb = entity.aabb || new platformer.AABB();
					aabb.reset();
					for(var i in entity.collisionFunctions){
						aabb.include(entity.collisionFunctions[i].getAABB());
					}
					return aabb;
				} else if(entity.collisionFunctions[collisionType]){
					return entity.collisionFunctions[collisionType].getAABB();
				} else {
					return null;
				}
			};

			entity.getPreviousAABB = function(collisionType){
				if(entity.collisionFunctions[collisionType]){
					return entity.collisionFunctions[collisionType].getPreviousAABB();
				} else {
					return null;
				}
			};

			entity.getShapes = function(collisionType){
				if(entity.collisionFunctions[collisionType]){
					return entity.collisionFunctions[collisionType].getShapes();
				} else {
					return null;
				}
			};
			
			entity.getPrevShapes = function(collisionType){
				if(entity.collisionFunctions[collisionType]){
					return entity.collisionFunctions[collisionType].getPrevShapes();
				} else {
					return null;
				}
			};
			
			entity.prepareCollision = function(x, y){
				for(var i in entity.collisionFunctions){
					entity.collisionFunctions[i].prepareCollision(x, y);
				}
			};
			
			entity.relocateEntity = function(x, y){
				entity.triggerEvent('relocate-entity', {x:x, y:y});
			};
			
			entity.movePreviousX = function(x){
				for(var i in entity.collisionFunctions){
					entity.collisionFunctions[i].movePreviousX(x);
				}
			};
			
			entity.getCollisionTypes = function(){
				return entity.collisionTypes;
			};

			entity.getSolidCollisions = function(){
				return entity.solidCollisions;
			};
		}

		entity.collisionFunctions[self.collisionType] = {
			getAABB: function(){
				return self.getAABB();
			},

			getPreviousAABB: function(){
				return self.getPreviousAABB();
			},

			getShapes: function(){
				return self.getShapes();
			},
			
			getPrevShapes: function(){
				return self.getPrevShapes();
			},
			
			prepareCollision: function(x, y){
				self.prepareCollision(x, y);
			},
			
			movePreviousX: function(x){
				self.movePreviousX(x);
			}
		};
		
	};

	return platformer.createComponentClass({
		
		id: 'collision-basic',
		
		constructor: function(definition){
			var x        = 0,
			shapes       = null,
			regX         = definition.regX,
			regY         = definition.regY,
			width        = definition.width,
			height       = definition.height,
			radius       = definition.radius,
			margin       = definition.margin || 0,
			marginLeft   = definition.marginLeft   || margin,
			marginRight  = definition.marginRight  || margin,
			marginTop    = definition.marginTop    || margin,
			marginBottom = definition.marginBottom || margin;
			
			if(isNaN(width)){
				width = this.owner.width;
				if(isNaN(regX)){
					regX = this.owner.regX;
				}
			}
			if(isNaN(height)){
				height = this.owner.height;
				if(isNaN(regY)){
					regY = this.owner.regY;
				}
			}
			if(isNaN(radius)){
				radius = this.owner.radius;
				if(isNaN(regX)){
					regX = this.owner.regX;
				}
				if(isNaN(regY)){
					regY = this.owner.regY;
				}
			}

			this.immobile  = this.owner.immobile = this.owner.immobile || definition.immobile || false;
			this.owner.previousX = this.owner.previousX || this.owner.x;
			this.owner.previousY = this.owner.previousY || this.owner.y;
			
			this.aabb     = new platformer.AABB();
			this.prevAABB = new platformer.AABB();
			
			this.owner.bullet = this.owner.bullet || definition.bullet;

			if(definition.shapes){
				shapes = definition.shapes;
			} else if (definition.shape) {
				shapes = [definition.shape];
			} else {
				if(definition.shapeType === 'circle'){
					radius = radius || (((width || 0) + (height || 0)) / 4);
					shapes = [{
						regX: (isNaN(regX)?radius:regX) - (marginRight - marginLeft) / 2,
						regY: (isNaN(regY)?radius:regY) - (marginBottom - marginTop) / 2,
						radius: radius,
						width:  radius * 2,
						height: radius * 2,
						type: definition.shapeType
					}];
				} else {
					shapes = [{
						regX: (isNaN(regX)?(width  || 0) / 2:regX) - (marginRight  - marginLeft)/2,
						regY: (isNaN(regY)?(height || 0) / 2:regY) - (marginBottom - marginTop )/2,
						points: definition.points,
						width:  (width  || 0) + marginLeft + marginRight,
						height: (height || 0) + marginTop  + marginBottom,
						type: definition.shapeType
					}];
				}
			}
			
			this.collisionType = definition.collisionType || 'none';
			
			this.owner.collisionTypes = this.owner.collisionTypes || [];
			this.owner.collisionTypes.push(this.collisionType);
			
			this.shapes = [];
			this.prevShapes = [];
			this.entities = undefined;
			for (x in shapes){
				this.shapes.push(new platformer.CollisionShape(this.owner, shapes[x], this.collisionType));
				this.prevShapes.push(new platformer.CollisionShape(this.owner, shapes[x], this.collisionType));
				this.prevAABB.include(this.prevShapes[x].getAABB());
				this.aabb.include(this.shapes[x].getAABB());
			}
			
			
			
			if(definition.jumpThrough){
				this.owner.jumpThrough = true;
			}
			
			setupCollisionFunctions(this, this.owner);
			
			this.owner.solidCollisions = this.owner.solidCollisions || {};
			this.owner.solidCollisions[this.collisionType] = [];
			if(definition.solidCollisions){
				for(var i in definition.solidCollisions){
					this.owner.solidCollisions[this.collisionType].push(i);
					this.owner.collides = true; //informs handler-collision that this entity should be processed in the list of solid colliders.
					if(definition.solidCollisions[i]){
						this.addEventListener('hit-by-' + i, entityBroadcast(definition.solidCollisions[i], 'solid', this.collisionType));
					}
				}
			}
	
			this.owner.softCollisions = this.owner.softCollisions || {};
			this.owner.softCollisions[this.collisionType] = [];
			if(definition.softCollisions){
				for(var i in definition.softCollisions){
					this.owner.softCollisions[this.collisionType].push(i);
					if(definition.softCollisions[i]){
						this.addEventListener('hit-by-' + i, entityBroadcast(definition.softCollisions[i], 'soft', this.collisionType));
					}
				}
			}
		},
		
		events:{
			"collide-on": function(){
				this.owner.parent.trigger('add-collision-entity', this.owner);
			},
			
			"collide-off": function(){
				this.owner.parent.trigger('remove-collision-entity', this.owner);
			},
			
			"handle-logic": function(){
				if(this.owner.movementAbsorbed){
					this.owner.movementAbsorbed = false;
				}
			},
			
			"prepare-for-collision": function(resp){
				var x = this.owner.x,
				y     = this.owner.y;
				
				// absorb velocities from the last logic tick
				if(!this.owner.movementAbsorbed && resp){
					this.owner.movementAbsorbed = true;
					if(this.owner.dx){
						x += this.owner.dx * (resp.delta || 0);
					}
					if(this.owner.dy){
						y += this.owner.dy * (resp.delta || 0);
					}
				}
				
//				this.prepareCollision(x, y);
				this.owner.x = x;
				this.owner.y = y;
			},
			
			"relocate-entity": function(resp){
				if(resp.relative){
					this.owner.x = this.owner.previousX + resp.x;
					this.owner.y = this.owner.previousY + resp.y;
				} else {
					this.owner.x = resp.x;
					this.owner.y = resp.y;
				}

				this.aabb.reset();
				for (var x in this.shapes){
					this.shapes[x].update(this.owner.x, this.owner.y);
					this.aabb.include(this.shapes[x].getAABB());
				}

				this.owner.previousX = this.owner.x;
				this.owner.previousY = this.owner.y;
			}
		},
		
		methods: {
			getAABB: function(){
				return this.aabb;
			},
			
			getPreviousAABB: function(){
				return this.prevAABB;
			},
			
			getShapes: function(){
				return this.shapes;
			},
			
			getPrevShapes: function(){
				return this.prevShapes;
			},
			
			prepareCollision: function(x, y){
				var tempShapes = this.prevShapes;
				
				this.owner.x = x;
				this.owner.y = y;
				
				this.prevShapes = this.shapes;
				this.shapes = tempShapes;
				
				this.prevAABB.set(this.aabb);
				this.aabb.reset();
				
				// update shapes
				for (var x = 0; x < this.shapes.length; x++){
					this.shapes[x].update(this.owner.x, this.owner.y);
					this.aabb.include(this.shapes[x].getAABB());
				}
			},
			
			movePreviousX: function(x){
				this.prevAABB.moveX(x);
				for(var k = 0; k < this.prevShapes.length; k++) {
					this.prevShapes[k].setXWithEntityX(x);
				}
			}
		}
	});
})();
	


/*--------------------------------------------------
 *   collision-tiles - ../engine/components/collision-tiles.js
 */
/**
# COMPONENT **collision-tiles**
This component causes the tile-map to collide with other entities. It must be part of a collision group and will cause "hit-by-tile" messages to fire on colliding entities.

## Dependencies:
- [[handler-collision]] (on entity's parent) - This component handles the collision state of the map for the [[handler-collision]] component on the parent entity.
- [[Collision-Shape]] object - This component uses collisionShape objects to expose individual tiles to the collision group.

## Methods

- **getTiles** - Returns all the collision tiles within the provided axis-aligned bounding box.
  - @param aabb ([[Aabb]]) - The axis-aligned bounding box for which tiles should be returned.
  - @return tiles (Array of objects) - Each returned object provides the shape [[collisionShape]] of the tile and the grid coordinates of the returned tile.
- **getAABB** - Returns the axis-aligned bounding box of the entire map.
  - @return aabb (object) - The returned object provides the top, left, width, and height of the collision map.
- **isTile** - Confirms whether a particular map grid coordinate contains a tile.
  - @param x (number) - Integer specifying the row of tiles in the collision map to check.
  - @param y (number) - Integer specifying the column of tiles in the collision map to check.
  - @return isTile (boolean) - Returns `true` if the coordinate contains a collision tile, `false` if it does not.

## JSON Definition:
    {
      "type": "collision-tiles",
      
      "collisionMap": [[-1,-1,-1], [1,-1,-1], [1,1,1]],
      // Required. A 2D array describing the tile-map with off (-1) and on (!-1) states. Numbers > -1 are solid and numbers -2, -3, -4, and -5 provide for jumpthrough tiles with the solid side being top, right, bottom, and left respectively.
      
      "tileWidth": 240,
      // Optional. The width of tiles in world coordinates. Defaults to 10.
      
      "tileHeight": 240,
      // Optional. The height of tiles in world coordinates. Defaults to 10.
    }
    
Requires: ["../collision-shape.js"]
*/
(function(){
	var storedTiles = [],
	storedTileIndex = 0,
	serveTiles = [];

	return platformer.createComponentClass({
		id: 'collision-tiles',
		
		constructor: function(definition){
			this.collisionMap   = definition.collisionMap  || [];
			this.tileWidth      = definition.tileWidth  || this.owner.tileWidth  || 10;
			this.tileHeight     = definition.tileHeight || this.owner.tileHeight || 10;
			this.tileHalfWidth  = this.tileWidth  / 2;
			this.tileHalfHeight = this.tileHeight / 2;
		},
		
		methods:{
			getShape: function(prevAABB, x, y){
				var shape = null;
				
				if(storedTileIndex < storedTiles.length){
					shape = storedTiles[storedTileIndex];
					storedTileIndex += 1;
					shape.update(x * this.tileWidth + this.tileHalfWidth, y * this.tileHeight + this.tileHalfHeight);
				} else {
					storedTiles.push(new platformer.CollisionShape(null, {
						x:      x * this.tileWidth  + this.tileHalfWidth,
						y:      y * this.tileHeight + this.tileHalfHeight,
						type:   'rectangle',
						width:  this.tileWidth,
						height: this.tileHeight
					}, 'tiles'));
					shape = storedTiles[storedTileIndex];
				}
				
				return shape;
			},
			
			addShape: function(shapes, prevAABB, x, y){
				if (this.collisionMap[x][y] > -1) {
					shapes.push(this.getShape(prevAABB, x, y));
				} else if (this.collisionMap[x][y] < -1) {
					switch(this.collisionMap[x][y]){
					case -2: //Top
						if(prevAABB.bottom <= y * this.tileHeight){
							shapes.push(this.getShape(prevAABB, x, y));
						}
						break;
					case -3: //Right
						if(prevAABB.left >= (x + 1) * this.tileWidth){
							shapes.push(this.getShape(prevAABB, x, y));
						}
						break;
					case -4: //Bottom
						if(prevAABB.top >= (y + 1) * this.tileHeight){
							shapes.push(this.getShape(prevAABB, x, y));
						}
						break;
					case -5: //Left
						if(prevAABB.right <= x * this.tileWidth){
							shapes.push(this.getShape(prevAABB, x, y));
						}
						break;
					}
				}
				return shapes;
			}
		},
		
		publicMethods:{
			getAABB: function(){
				return {
					left: 0,
					top:  0,
					right: this.tileWidth * this.collisionMap.length,
					bottom: this.tileHeight * this.collisionMap.length[0]
				};
			},
			
			isTile: function (x, y) {
				return !((x < 0) || (y < 0) || (x >= this.collisionMap.length) || (y >= this.collisionMap[0].length) || (this.collisionMap[x][y] === -1));
			},
			
			getTileShapes: function(aabb, prevAABB){
				var left = Math.max(Math.floor(aabb.left   / this.tileWidth),  0),
				top      = Math.max(Math.floor(aabb.top    / this.tileHeight), 0),
				right    = Math.min(Math.ceil(aabb.right   / this.tileWidth),  this.collisionMap.length),
				bottom   = Math.min(Math.ceil(aabb.bottom  / this.tileHeight), this.collisionMap[0].length),
				x        = 0,
				y        = 0,
				shapes   = serveTiles;
				
				serveTiles.length = 0;
				storedTileIndex   = 0;
				
				for (x = left; x < right; x++){
					for (y = top; y < bottom; y++){
						this.addShape(shapes, prevAABB, x, y);
					}
				}
				
				return shapes;
			}
		}
	});
})();

/*--------------------------------------------------
 *   logic-fps-counter - ../engine/components/logic-fps-counter.js
 */
/*
# COMPONENT **logic-fps-counter**
This component renders the avg FPS and other developer defined debug data to the screen. The developer defined values can be used to keep track of how long portions of code are taking to process on average. To do this, send messages to 'time-elapsed' with a 'name' and 'time' value. The name value is the label that you want displayed. The time value should be the time in ms that was spent performing that operation. These values are averaged over a number of ticks. 

## Dependencies:
- [[Handler-Logic]] (on entity) - This component listens for the 'handle-logic' message to update itself.
- [[Dom-Element]] (on entity's) - This component requires a dom element to render the text.
- [[Scene]] - This component receives 'time-elapsed' message from the Scene which are necessary for its functionality.

## Messages

### Listens for:
- **handle-logic** - A call from the [[Handler-Logic]]. This updates the information we're displaying including the FPS counter.
- **time-elapsed** - Called to give the counter the time spent doing a certain operation. The Scene sends a value named 'Engine Total' when a tick has occurs.

### Local Broadcasts:
- **update-content** - Calls the dom element to update the information that should be displayed.
  - @param counter (object) - An object with a 'text' field which contains the html for the names and times that are to be displayed.

## JSON Definition:
    {
		"type": "logic-fps-counter",
		"ticks": 45
		//Optional - The number of ticks across which we average the values. Defaults to 30.
	}
*/

(function(){
	return platformer.createComponentClass({
		id: 'logic-fps-counter',
        constructor: function(definition){
			this.counter = {
				text: ''
			};
			this.times = {};
			this.timeElapsed = false;
			this.ticks = definition.ticks || 30; //number of ticks for which to take an average
			this.count = this.ticks;
		},
		events:{
			"handle-logic": function(){
				if(!platformer.game.settings.debug && this.owner.parent){
					this.owner.parent.removeEntity(this.owner);
				}
		
				if(this.timeElapsed){ //to make sure we're not including 0's from multiple logic calls between time elapsing.
					this.timeElapsed = false;
					this.count--;
					if(!this.count){
						this.count = this.ticks;
						var text = Math.floor(createjs.Ticker.getMeasuredFPS()) + " FPS<br />";
						for(var name in this.times){
							text += '<br />' + name + ': ' + Math.round(this.times[name] / this.ticks) + 'ms';
							this.times[name] = 0;
						}
						this.counter.text = text;
						this.owner.trigger('update-content', this.counter);
					}
				}
			},
			"time-elapsed": function(value){
				if(value){
					if(value.name){
						if((value.name === 'Engine Total') && !this.timeElapsed){
							this.timeElapsed = true;
						}
						if (!this.times[value.name]){
							this.times[value.name] = 0;
						}
						this.times[value.name] += value.time;
					}
				}
			}
		},
		methods:{
			destroy: function(){
				this.counter = null;
				this.times   = null;
			}
		}
	});
})();


/*--------------------------------------------------
 *   voice-over - ../engine/components/voice-over.js
 */
/**
# COMPONENT **voice-over**
This component uses its definition to load two other components (audio and render-sprite) who work in an interconnected way to render animations corresponding to one or more audio tracks.

## Dependencies
- [[render-sprite]] - This component creates a `render-sprite` component to handle facial movements corresponding to an audio track.
- [[audio]] - This component creates an `audio` component to handle playing a voice-over track and trigger events to update the facial rendering.

## Messages

### Listens for:
- **load** - On receiving this message, this component removes itself from the entity. (It creates the [[render-sprite]] and [[audio]] components in its constructor.)

## JSON Definition
    {
      "type": "voice-over"
      
      "frameLength": 200,
      // Optional. Specifies how long a described voice-over frame should last. Default is 100 milliseconds.
      
      "messagePrefix": "i-say",
      // Optional. Specifies the prefix that messages between the render and audio components should use. This will cause the audio to trigger events like "i-say-w" and "i-say-a" (characters listed in the animationMap), that the render-sprite uses to show the proper frame. Defaults to "voice-over".
      
      "animationMap": {
        "default": "mouth-closed"
        // Required. Specifies animation of default position.
        
        "w": "mouth-o",
        "a": "mouth-aah",
        "t": "mouth-t"
        // Optional. Also list single characters that should map to a given voice-over animation frame.
      }
      
      "voiceoverMap": {
        "message-triggered": [{
          "sound": "audio-id",
          // Required. This is the audio clip to play when "message-triggered" is triggered. It may be a string as shown or an object of key/value pairs as described in an [[audio]] component definition.
          
          "voice": "waat"
          // Optional. This string defines the voice-over sequence according to the frames defined above. Each character lasts the length specified by "frameLength" above. If not specified, voice will be the default frame.
        }]
      }
      
      "spriteSheet": {
      //Required. Defines an EaselJS sprite sheet to use for rendering. See http://www.createjs.com/Docs/EaselJS/SpriteSheet.html for the full specification.

	      "images": ["example0", "example1"],
	      //Required: An array of ids of the images from the asset list in config.js.
	      
	      "frames": {
	      //Required: The dimensions of the frames on the image and how to offset them around the entity position. The image is automatically cut up into pieces based on the dimensions. 
	      	"width":  100,
			"height": 100,
			"regY":   100,
			"regX":   50
	      },
	      
	      "animations":{
	      //Required: The list of animation ids and the frames that make up that animation. The speed determines how long each frame plays. There are other possible parameters. Additional parameters and formatting info can be found in createJS.
			"mouth-o":   0,
			"mouth-aah": 1,
			"mouth-t":   2,
			"mouth-closed": {"frames": [3, 4, 5], "speed": 4}
		  }
      }
      
      //This component also accepts all parameters accepted by either [[render-sprite]] or [[audio]] and passes them along when it creates those components.
    }
    
Requires: ["audio", "render-sprite"]
*/
(function(){
	var getEventName = function(msg, VO){
		if(VO === ' '){
			return msg + 'default';
		} else {
			return msg + VO;
		}
	},
	createVO = function(sound, events, message, frameLength){
		var i = '',
		definitions = [],
		definition = null;
		
		if(!events[' ']){
			events[' '] = events['default'];
		}
		
		if (Array.isArray(sound)){
			for (i in sound){
				definitions.push(createAudioDefinition(sound[i], events, message, frameLength));
			}
			definition = definitions.splice(0, 1)[0];
			definition.next = definitions;
			return definition;
		} else {
			return createAudioDefinition(sound, events, message, frameLength);
		}
	},
	createAudioDefinition = function(sound, events, message, frameLength){
		var i      = 0,
		definition = {},
		time       = 0,
		lastFrame  = '',
		thisFrame  = '',
		voice = sound.voice;
		
		if (typeof sound.sound === 'string'){
			definition.sound = sound.sound;
			definition.events = [];
		} else {
			for(i in sound.sound){
				definition[i] = sound.sound[i];
			}
			
			if(definition.events){
				definition.events = definition.events.slice();
			} else {
				definition.events = [];
			}
		}
		
		if(voice){
			voice += ' ';
			
			for (i = 0; i < voice.length; i++) {
				thisFrame = voice[i];
				if(thisFrame !== lastFrame){
					lastFrame = thisFrame;
					definition.events.push({
						"time": time,
						"event": getEventName(message, thisFrame)
					});
				}
				time += frameLength;
			}
		}
		
		return definition;
	};

	return platformer.createComponentClass({
		id: 'voice-over',
		
		constructor: function(definition){
			var i               = '',
			audioDefinition     = {
				audioMap: {},
				aliases:  definition.aliases
			},
			animationDefinition = {
				spriteSheet:   definition.spriteSheet,
				acceptInput:   definition.acceptInput,
				scaleX:        definition.scaleX,
				scaleY:        definition.scaleY,
				rotate:        definition.rotate,
				mirror:        definition.mirror,
				flip:          definition.flip,
				hidden:        definition.hidden,
				animationMap:  {},
				pins:          definition.pins,
				pinTo:         definition.pinTo,
				aliases:       definition.aliases
			};
			
			this.message = (definition.messagePrefix || 'voice-over') + '-';
			
			for (i in definition.animationMap){
				animationDefinition.animationMap[getEventName(this.message, i)] = definition.animationMap[i];
			}
			animationDefinition.animationMap['default'] = definition.animationMap['default'];
			this.owner.addComponent(new platformer.components['render-sprite'](this.owner, animationDefinition));

			for (i in definition.voiceoverMap){
				audioDefinition.audioMap[i] = createVO(definition.voiceoverMap[i], definition.animationMap, this.message, definition.frameLength || 100);
			}
			this.owner.addComponent(new platformer.components['audio'](this.owner, audioDefinition));
		},

		events: {// These are messages that this component listens for
		    "load": function(resp){
		        this.owner.removeComponent(this);
	 	    }
		}
	});
})();


/*--------------------------------------------------
 *   eagle - ../game/components/eagle.js
 */
/**
# COMPONENT **eagle**
Summarize the purpose of this component here.

## Dependencies
- [[Required-Component]] - List other components that this component requires to function properly on an entity.

## Messages

### Listens for:
- **received-message-label** - List all messages that this component responds to here.
  > @param message-object-property (type) - under each message label, list message object properties that are optional or required.

### Local Broadcasts:
- **local-message-label** - List all messages that are triggered by this component on this entity here.
  > @param message-object-property (type) - under each message label, list message object properties that are optional or required.

### Peer Broadcasts:
- **peer-message-label** - List all messages that are triggered by this component on other entities here.
  > @param message-object-property (type) - under each message label, list message object properties that are optional or required.

## JSON Definition
    {
      "type": "name-of-component"
      // List all additional parameters and their possible values here.
    }
*/
(function(){
	return platformer.createComponentClass({
		id: 'eagle',
		
		constructor: function(definition){
			this.train   = null;
			this.backestTrack = 0;
			this.owner.x = 0;
			this.owner.y = 0;
			this.loaded  = false;
			this.seeing  = false;
		},

		events: {// These are messages that this component listens for
			"handle-logic": function(){
				if(this.train){
					this.owner.x = Math.min(this.backestTrack - 192, this.train.x) + 750;
//					this.owner.x = this.train.x + 750;
					if(!this.seeing){
						if(this.loaded){
							if(this.train.state.racing){
								this.seeing = true;
								this.owner.parent.trigger('follow', {
									mode: 'locked',
									entity: this.owner
								});
							}
						} else if(this.train.state.loading){
							this.loaded = true;
						}
					}
				}
			},
			"backest-track": function(entity){
				this.backestTrack = entity.x;
			},
			"peer-entity-added": function(entity){
				if((entity.type === 'rocket-train') || (entity.type === 'dino-train')){
					this.train = entity;
				}
			}
		}
	});
})();


/*--------------------------------------------------
 *   john-henry - ../game/components/john-henry.js
 */
/**
# COMPONENT **trackification**
Summarize the purpose of this component here.

## Dependencies
- [[Required-Component]] - List other components that this component requires to function properly on an entity.

## Messages

### Listens for:
- **received-message-label** - List all messages that this component responds to here.
  > @param message-object-property (type) - under each message label, list message object properties that are optional or required.

### Local Broadcasts:
- **local-message-label** - List all messages that are triggered by this component on this entity here.
  > @param message-object-property (type) - under each message label, list message object properties that are optional or required.

### Peer Broadcasts:
- **peer-message-label** - List all messages that are triggered by this component on other entities here.
  > @param message-object-property (type) - under each message label, list message object properties that are optional or required.

## JSON Definition
    {
      "type": "name-of-component"
      // List all additional parameters and their possible values here.
    }
*/
(function(){
	var halfCircle = Math.PI,
	circle  = halfCircle * 2,
	speedDuration = 60, //ties
	speedMultiplier = 3,
	zIndex      = 1010, // to keep train above dinos.
	trackDropRate  = 110, //150, //milliseconds between laying track
	trackDropRateRocket = 90, //150, //milliseconds between laying track
	trackEraseRate = 60,
	maxAngle = Math.PI / 20,
	tieDistance  = 16,
	topBorder = 0.4 * 64,
	bottomBorder = 11.6 * 64,
	trackEntity       = platformer.settings.entities['track'],
	trackBridgeEntity = platformer.settings.entities['track-bridge'],
	trackSandEntity   = platformer.settings.entities['track-sand'],
	sandIndex = 0,
	properties = {
		properties:{
			x: 0,
			y: 0,
			z: 0,
			orientation: 0
		}
	},
	cartesian = function(m, a){
		var x = m * Math.cos(a);
		var y = m * Math.sin(a);
		return {x:x, y:y};
	},
	polar = function(x, y){
	  var m = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
	  var a = 0;
	  if (m != 0) {
	    a = Math.acos(x/m);
	    if (y < 0){
	    	a = -a;
	    }
	  }
	  return {m:m,a:a};
	},
	averageAngle = function(a, b){
		return (circle + b + ((((a - b + halfCircle + circle) % circle) - halfCircle) / 2)) % circle;
	};
	
	return platformer.createComponentClass({
		id: 'john-henry',
		
		constructor: function(definition){
			this.levelNumber = 0;
			this.sceneryRatio = 0.15;
			this.totalScenery  = 0;
			this.usedScenery   = 0;
			this.train = 'dino';
			this.trackDropRate = trackDropRate;
			this.eagle = null;
			
			this.current = new platformer.Vector2D(0, 640);
			this.currentAngle = 0;
			this.time = 0;
			this.goal = new platformer.Vector2D();
			this.layingTrack = false;
			this.tracks = [];
			this.fakeTracks = {};
			this.stations = {};
			this.stationNodes = {};
//			this.connectNodes = [];
			this.readyForDinos = false;
			this.cachedTracks = [];
			
			this.speedCount = 0;
			this.trackLayingTime = false;
			
			this.removePlacedTracks = false;
			this.placedTracks = [];
		},

		events: {// These are messages that this component listens for
			"load": function(){
				this.owner.trigger('race-track', this.tracks);
			},
			"tick": function(resp){
				if(this.removePlacedTracks){
					this.removeTracks();
				}
				if(this.layingTrack){
					this.time += resp.delta;
					this.time = this.layTrack(this.goal, this.time);
				} else {
					this.time = 0;
				}
				
				var track = null;
				if(this.eagle && this.tracks.length){
					track = this.tracks[0];
					for(var i = 1; i < this.tracks.length; i++){
						if(this.tracks[i].x < track.x){
							track = this.tracks[i];
						}
					}
					this.eagle.triggerEvent('backest-track', track); // used by `eagle` to set camera location.
				}
			},
			"scene-loaded": function(data){
				if(data.level){
					this.sceneryRatio = Math.min(.9, 0.15 + (+data.level * 0.05)); // adds more scenery to the level as levels increase
				}
				
				this.train   = data.train;
				if(this.train !== 'dino'){
					this.trackDropRate = trackDropRateRocket;
				}
				this.dinos   = data.dinos;
			},
			"mousedown": function(){
				this.ready = true;
			},
			"mousemove": function(resp){
				if((this.ready && this.trackLayingTime && ((resp.event.type === 'mousemove') || (resp.event.type === 'mousedown') || resp.event.touches))){
					this.layingTrack = true;
					this.goal.set(resp.x, resp.y);
				} else {
					this.layingTrack = false;
				}
			},
			"mouseup": function(){
				this.layingTrack = false;
			},
			"child-entity-added": (function(){
				var alternate = 0,
				turn  = ['turn-right', 'turn-left'],
				herds = {
					"herd": ['argentinosaurus', 'sauroposeidon'],
					"herd-small": ['triceratops', 'kosmoceratops']
				},
				insertTrack = function(track, railroad, orderByX){
					var i = 0;
					if(orderByX !== false){
						for (; i < railroad.length; i++){
							if(track.x < railroad[i].x){
								railroad.splice(i, 0, track);
								return;
							}
						}
					}
					railroad.push(track);
				};
				
				return function(entity){
					if((entity.type === 'track') || (entity.type === 'track-bridge') || (entity.type === 'track-sand')){
						if(entity.cache){
							this.cachedTracks.push(entity); //tracks coming in backward from station funnel
						} else {
							insertTrack(entity, this.tracks, false);
						}
					} else if(entity.type === 'track-station'){
						if(entity.station === 'initial'){
							insertTrack(entity, this.tracks);
							if(entity.x > this.current.x){
								this.current.x = entity.x;
								this.current.y = entity.y;
								this.currentAngle = entity.orientation;
							}
						} else {
							if(!this.stations[entity.station]){
								this.stations[entity.station] = [];
							}
							insertTrack(entity, this.stations[entity.station]);
						}
					} else if(entity.type === 'station-node'){
						if(!this.stationNodes[entity.station]){
							this.stationNodes[entity.station] = [];
						}
						this.stationNodes[entity.station].push(entity);
//						this.connectNode(entity);
					} else if((entity.type === 'bush') || (entity.type === 'rock')){
						if(!entity.permanent && ((this.usedScenery / this.totalScenery) > this.sceneryRatio)){
							this.totalScenery += 1;
							this.owner.removeEntity(entity);
						} else {
							if(!entity.permanent){
								this.totalScenery += 1;
								this.usedScenery += 1;
							}
							alternate = 1 - alternate;
							entity.orientation = Math.random() * Math.PI * 2;
							entity.state.alternate = !!alternate;
							if(entity.type === 'rock'){
								entity.z = zIndex - 1;
							} else {
								entity.z = zIndex + 1;
							}
							zIndex += 0.000001;
						}
					} else if((entity.type === 'bush-large') || (entity.type === 'rock-large')){
						if(!entity.permanent && ((this.usedScenery / this.totalScenery) > this.sceneryRatio)){
							this.totalScenery += 1;
							this.owner.removeEntity(entity);
						} else {
							if(!entity.permanent){
								this.totalScenery += 1;
								this.usedScenery += 1;
							}
							entity.orientation = Math.random() * Math.PI * 2;
							if(entity.type === 'rock-large'){
								entity.z = zIndex - 1;
							} else {
								entity.z = zIndex + 1;
							}
							zIndex += 0.000001;
						}
					} else if(entity.type === 'track-fake'){
						if(!this.fakeTracks[entity.station]){
							this.fakeTracks[entity.station] = [];
						}
						this.fakeTracks[entity.station].push(entity);
					} else if((entity.type === 'herd') || (entity.type === 'herd-small')){
						if((this.usedScenery / this.totalScenery) > this.sceneryRatio){
							this.totalScenery += 1;
							this.owner.removeEntity(entity);
						} else {
							this.totalScenery += 1;
							this.usedScenery += 1;
							entity.state[herds[entity.type][alternate]] = true;
							entity.components[1].degree -= Math.random() * 0.2 * Math.PI / 180;
							entity.components[1].angle = Math.random() * Math.PI * 2;
							
							entity.trigger(['go-forward', turn[alternate]]);
							alternate = 1 - alternate;
						}
					} else if(entity.type === 'pu-speed'){
						entity.state[this.train] = true;
					} else if(entity.type === 'eagle'){
						this.eagle = entity;
					}
				};
			})(),
			"child-entity-removed": function(entity){
				var i = 0;
				if((entity.type === 'track') || (entity.type === 'track-bridge') || (entity.type === 'track-sand')){
//					this.cachedTracks.length = 0;
					
					for(i = this.tracks.length - 1; i >= 0; i--){
						if(this.tracks[i] === entity){
							this.tracks.splice(i, 1);
							break;
						}
					}
				}
			},
			"go": function(){
				this.trackLayingTime = true;
			},
			"out-of-time": function(){
				this.trackLayingTime = false;
			},
			"speed-acquired": function(){
				this.speedCount = speedDuration;
			}
		},
		
		methods: {
			removeTrack: function(entity){
				if(entity && (this.tracks.length > 1) && ((entity.type === 'track') || (entity.type === 'track-bridge') || (entity.type === 'track-sand'))){
					this.owner.removeEntity(entity);
					return entity;
				}
				return false;
			},
			removeTracks: function(){
				var entity = null,
				i = this.placedTracks.length - 1;
				
				for (; i > -1; i--){
					this.removeTrack(this.placedTracks[i]);
				}
				
				this.placedTracks.length = 0;
				this.removePlacedTracks = false;

				entity = this.tracks[this.tracks.length - 1];
				if(entity){
					this.current.x = entity.x;
					this.current.y = entity.y;
					this.currentAngle = entity.orientation;
				}
			},
			addTrack: function(xyDestination, xyOrigin, inReverse, inFunnel){
				var i       = 0, 
				goalX       = xyDestination.x,
				goalY       = xyDestination.y,
				originX     = this.current.x,
				originY     = this.current.y,
				originAngle = this.currentAngle,
				angle       = null,
				destination = null,
				entity      = null,
				collisions  = null,
				funnel      = null,
				onSand      = false;

				if(xyOrigin){
					originX = xyOrigin.x;
					originY = xyOrigin.y;
					originAngle = xyOrigin.orientation;
				}
				
				//testing to see if we're going backwards
				if(inReverse){
					angle = (polar(originX - goalX, originY - goalY).a - originAngle + circle + circle) % circle; //double circles 'cause we're getting negative orientations that haven't been clamped
				} else {
					angle = (polar(goalX - originX, goalY - originY).a - originAngle + circle + circle) % circle;
				}
				
				if((angle > maxAngle) && (angle < (circle - maxAngle))){
					if(angle > Math.PI){
						angle = circle - maxAngle;
					} else {
						angle = maxAngle;
					}
				}
				angle = (angle + originAngle + circle) % circle;
				destination = cartesian(tieDistance, averageAngle(angle, originAngle));

				//testing to see if we're going backwards
				if(inReverse){
					properties.properties.x = originX - destination.x;
					properties.properties.y = originY - destination.y;
					properties.properties.cache = true;
				} else {
					properties.properties.x = originX + destination.x;
					properties.properties.y = originY + destination.y;
					properties.properties.cache = false;
				}
				
				if((properties.properties.y < topBorder) || (properties.properties.y > bottomBorder)){
					return null;
				}
				properties.properties.orientation = angle;
				properties.properties.z = zIndex;
				zIndex += 0.000001; // so railroad ties stay z-ordered.
				
				entity = new platformer.Entity(trackEntity, properties);
				
				collisions = this.owner.getEntityCollisions(entity);
				
				for(; i < collisions.length; i++){
					if(collisions[i].type === 'water'){
						angle = averageAngle(originAngle, angle);
						destination = cartesian(tieDistance, averageAngle(angle, originAngle));
						properties.properties.x = originX + destination.x;
						properties.properties.y = originY + destination.y;
						properties.properties.orientation = angle;
						properties.properties.cache = false;
						properties.properties.state = {};
						properties.properties.state['bridge-' + sandIndex] = true;
						entity = new platformer.Entity(trackBridgeEntity, properties);
						delete properties.properties.state;
						sandIndex = (sandIndex + 1) % 6;
						collisions = this.owner.getEntityCollisions(entity);
						for(i = 0; i < collisions.length; i++){
							if((collisions[i].type !== 'water') && (collisions[i].type !== 'sand')){
								return null;
							}
						}
						break;
					} else if(collisions[i].type === 'sand'){
						onSand = true;
					} else if(collisions[i].type === 'funnel'){
						funnel = collisions[i].entity;
					} else {
						return null;
					}
				}
				
				if(onSand &&/* !funnel && !inFunnel &&*/ (entity.type !== 'track-bridge')){
					properties.properties.state = {};
					properties.properties.state['sand-' + sandIndex] = true;
					entity = new platformer.Entity(trackSandEntity, properties);
					delete properties.properties.state;
					sandIndex = (sandIndex + 1) % 6;
				}
				
				this.owner.addEntity(entity);

				if(!inFunnel && funnel && this.isFunnelValid(funnel)){
					this.tracks = this.tracks.concat(this.stations[funnel.station]);
					this.owner.trigger('race-track', this.tracks);
					this.owner.trigger('finish-track');
					entity = this.tracks[this.tracks.length - 1];
					if(funnel.station === 'final'){
						this.owner.triggerEvent('stop-time!'); //Testing this again apart from Todd's opinion. //Todd thinks this is a dumb place to put this, so I moved it to Train arrival - DDD						
						this.owner.removeComponent(this);
					}
				}

				return entity;
			},
			isFunnelValid: function(funnel){
				var i        = 0,
				station      = this.stations[funnel.station],
				tracks       = [this.tracks[this.tracks.length - 1], station[0]],
				trackIndex   = 0,
				testMA       = null,
				maxAngle2    = maxAngle * 2,
				funnelTracks = null,
				valid        = true;
				
				if (this.current.x < station[0].x){
					funnelTracks = [];
					while((tracks[1].x - tracks[0].x) > tieDistance){
						trackIndex = 1 - trackIndex;
						tracks[trackIndex] = this.addTrack(tracks[1 - trackIndex], tracks[trackIndex], trackIndex, true);
						if(!tracks[trackIndex]){
							valid = false;
							break;
						}
						funnelTracks.push(tracks[trackIndex]);
					}
					if(valid){
						testMA = polar(tracks[1].x - tracks[0].x, tracks[1].y - tracks[0].y);

						if((testMA.m > tieDistance) || (((testMA.a - tracks[1].orientation + circle + maxAngle) % circle) > maxAngle2) || (((testMA.a - tracks[0].orientation + circle + maxAngle) % circle) > maxAngle2) || (((tracks[1].orientation - tracks[0].orientation + circle + maxAngle) % circle) > maxAngle2)){
							for(; i < funnelTracks.length; i++){
								this.owner.removeEntity(funnelTracks[i]);
							}
						} else {
							this.owner.removeEntity(funnel);
							for(; i < this.fakeTracks[funnel.station].length; i++){
								this.owner.removeEntity(this.fakeTracks[funnel.station][i]);
							}
							for(i = this.cachedTracks.length - 1; i > -1; i--){
								this.tracks.push(this.cachedTracks[i]);
							}
							this.cachedTracks.length = 0;
							return true;
						}
					} else {
						for(; i < funnelTracks.length; i++){
							this.owner.removeEntity(funnelTracks[i]);
						}
					}
				}
				this.cachedTracks.length = 0;
				return false;
			},
			layTrack: function(xy, time){
				var vector = new platformer.Vector2D(), // re-usable vector used for track-laying.
				dotp = 0,
				length = 0,
				tdr    = this.trackDropRate,
				entity = null;
				
				if(time){
					dotp = vector.copyValues(xy).subtractVector(this.current).dot(new platformer.Vector2D(Math.cos(this.currentAngle), Math.sin(this.currentAngle)));
					
//					if(this.current.x > xy.x + 64){ //64 is a buffer so erasing only happens if touch is back far enough
					if(dotp < -64){ //64 is a buffer so erasing only happens if touch is back far enough
						length = Math.floor(time / trackEraseRate);
						while((dotp < -64) && length){
							length -= 1;
							entity = this.tracks[this.tracks.length - 2];
							if(!this.removeTrack(this.tracks[this.tracks.length - 1])){
								entity = null;
							} else if(entity){
								this.current.x = entity.x;
								this.current.y = entity.y;
								this.currentAngle = entity.orientation;
							}
						}
						return time % trackEraseRate;
					} else {
						if(this.lastType === 'track-sand'){
							tdr *= 1.5;
						} else if (this.lastType === 'track-bridge') {
							tdr /= 3;
						}
						if(this.speedCount){
							tdr /= speedMultiplier;
							length = Math.floor(time / tdr);
							this.speedCount = Math.max(0, this.speedCount - length);
						} else {
							length = Math.floor(time / tdr);
						}
						this.placedTracks.length = 0;
						while((dotp > 0) && length){
							length -= 1;
							entity = this.addTrack(xy);
							if(entity){
								this.lastType = entity.type;
								this.current.x = entity.x;
								this.current.y = entity.y;
								this.currentAngle = entity.orientation;
								this.placedTracks.push(entity);
								if(length){ // only perform this calculation if we must.
									dotp = vector.copyValues(xy).subtractVector(this.current).dot(new platformer.Vector2D(Math.cos(this.currentAngle), Math.sin(this.currentAngle)));
								}
							} else {
								length = 0;
							}
						}
						return time % tdr;
					}
				}
			},
/*			connectNode: function(entity){
				var nodes = this.connectNodes;
				
				if(!nodes[entity.x]){
					nodes[entity.x] = [];
				}
				
				nodes[entity.x][entity.y] = entity;
				
				if(nodes[entity.x - 64] && nodes[entity.x - 64][entity.y]){
					entity.trigger('add-neighbors', {"west": nodes[entity.x - 64][entity.y]});
					nodes[entity.x - 64][entity.y].trigger('add-neighbors', {"east": entity});
				}
				if(nodes[entity.x + 64] && nodes[entity.x + 64][entity.y]){
					entity.trigger('add-neighbors', {"east": nodes[entity.x + 64][entity.y]});
					nodes[entity.x + 64][entity.y].trigger('add-neighbors', {"west": entity});
				}
				if(nodes[entity.x][entity.y - 64]){
					entity.trigger('add-neighbors', {"north": nodes[entity.x][entity.y - 64]});
					nodes[entity.x][entity.y - 64].trigger('add-neighbors', {"south": entity});
				}
				if(nodes[entity.x][entity.y + 64]){
					entity.trigger('add-neighbors', {"south": nodes[entity.x][entity.y + 64]});
					nodes[entity.x][entity.y + 64].trigger('add-neighbors', {"north": entity});
				}
			},*/
			nextScene: function(){
				this.owner.trigger('new-scene', {});
			}
		}
	});
})();


/*--------------------------------------------------
 *   play-tutorial - ../game/components/play-tutorial.js
 */
/**
# COMPONENT **name-of-component**
Summarize the purpose of this component here.

## Dependencies
- [[Required-Component]] - List other components that this component requires to function properly on an entity.

## Messages

### Listens for:
- **received-message-label** - List all messages that this component responds to here.
  - @param message-object-property (type) - under each message label, list message object properties that are optional or required.

### Local Broadcasts:
- **local-message-label** - List all messages that are triggered by this component on this entity here.
  - @param message-object-property (type) - under each message label, list message object properties that are optional or required.

### Peer Broadcasts:
- **peer-message-label** - List all messages that are triggered by this component on other entities here.
  - @param message-object-property (type) - under each message label, list message object properties that are optional or required.

## JSON Definition
    {
      "type": "name-of-component"
      // List all additional parameters and their possible values here.
    }
*/
(function(){
	/*********************************************************************
	 TODO: Place helper functions here that are suitable across all
	       component instances and should never be accessible from
	       outside this component.
	*********************************************************************/

	return platformer.createComponentClass({
		id: 'play-tutorial',
		constructor: function(definition){
			
		},

		events: {// These are messages that this component listens for
			"play-tutorial": function(){
				this.owner.triggerEvent(this.owner.clip);
				this.owner.removeComponent('collision-basic');
			}
		}
	});
})();


/*--------------------------------------------------
 *   popup-adder - ../game/components/popup-adder.js
 */
/**
# COMPONENT **name-of-component**
Summarize the purpose of this component here.

## Dependencies
- [[Required-Component]] - List other components that this component requires to function properly on an entity.

## Messages

### Listens for:
- **received-message-label** - List all messages that this component responds to here.
  - @param message-object-property (type) - under each message label, list message object properties that are optional or required.

### Local Broadcasts:
- **local-message-label** - List all messages that are triggered by this component on this entity here.
  - @param message-object-property (type) - under each message label, list message object properties that are optional or required.

### Peer Broadcasts:
- **peer-message-label** - List all messages that are triggered by this component on other entities here.
  - @param message-object-property (type) - under each message label, list message object properties that are optional or required.

## JSON Definition
    {
      "type": "name-of-component"
      // List all additional parameters and their possible values here.
    }
*/
(function(){
	/*********************************************************************
	 TODO: Place helper functions here that are suitable across all
	       component instances and should never be accessible from
	       outside this component.
	*********************************************************************/

	return platformer.createComponentClass({
		/*********************************************************************
		 "createComponentClass" creates the component class and adds the
		 following methods and properties that can be referenced from your
		 own methods and events:
		 
		 Property this.owner - a reference to the component's Entity
		 Property this.type  - identical to the id provided below
		 Method this.addEventListener(event, callback) - adds an event to
		     listen for
		 Method this.removeEventListener(event, callback) - removes an event
		 Method this.addMethod(name, function) - adds a method function to
		     the entity that is accessible from outside the entity.
		 Method this.removeMethod(name) - removes a method from the entity.
		*********************************************************************/
		
		id: 'popup-adder', //TODO: Change the name of the component!
		
		constructor: function(definition){
			this.popups = [];
			this.dinos = null;
		},

		events: {// These are messages that this component listens for
			'add-dinos': function(dinos){
				this.dinos = dinos;
			},
			'ready': function(){
				this.addDinoPopup(this.dinos);
			}
		},
		
		methods: {// These are internal methods that are invoked by this component.
			addDinoPopup: (function(){
				var div = platformer.components['dom-element'];
				
				return function(dinos){
					var self = this,
					owner    = this.owner,
					popups   = this.popups;
					
					if(dinos.length){
						setTimeout(function(){
							var dino = owner.addComponent(new div(owner, {
								className: 'dino-pic ' + dinos.splice(0,1)[0],
								parent: 'corner-popups'
							})),
							marginRight = -3;
							
							owner.trigger('handle-render-load', {element: owner.element});
							
							setTimeout(function(){
								dino.element.className += ' appear';
							}, 15);
							
							popups.push(dino.element);
							if(popups.length >= 5){
								marginRight = -19 + (60 / +popups.length);
							}
							for(var i in popups){
								popups[i].style.marginRight = (marginRight / 5) + 'em';
							}
							
							self.addDinoPopup(dinos);
						}, 250);
					}
				};
			})(),
		},
		
		publicMethods: {// These are methods that are available on the entity.
		}
	});
})();


/*--------------------------------------------------
 *   race-monitor - ../game/components/race-monitor.js
 */
/**
# COMPONENT **name-of-component**
Summarize the purpose of this component here.

## Dependencies
- [[Required-Component]] - List other components that this component requires to function properly on an entity.

## Messages

### Listens for:
- **received-message-label** - List all messages that this component responds to here.
  - @param message-object-property (type) - under each message label, list message object properties that are optional or required.

### Local Broadcasts:
- **local-message-label** - List all messages that are triggered by this component on this entity here.
  - @param message-object-property (type) - under each message label, list message object properties that are optional or required.

### Peer Broadcasts:
- **peer-message-label** - List all messages that are triggered by this component on other entities here.
  - @param message-object-property (type) - under each message label, list message object properties that are optional or required.

## JSON Definition
    {
      "type": "name-of-component"
      // List all additional parameters and their possible values here.
    }
*/
(function(){
	var unloadSpeed = 2000,
	baseTime = 35000,
	firstTime = 55000,
	timeDecrementer = 5000,
	trackBuffer = 20,
	sandSpeed = 0.4,
	trackSpeed = 0.5,
	bridgeSpeed = 1.5,
	flipNumber = 0,
	zIndex      = 1010; // to keep train above dinos.
//	popupClass = platformer.settings.entities['popup'];
	
	return platformer.createComponentClass({
		id: 'race-monitor',
		
		constructor: function(definition){
			this.dinos = [];
			this.special = '';
			this.train = null;
			this.dinoCollection = [];
			this.stationNodes = {};
			this.snRamps = {};
			this.tnRamps = {};
			this.readyForDinos = false;
			this.unloading = null;
			this.results = {
				time: 0,
				timeLeft: 0,
				cargo: []
			};
			this.count = 0;
			this.lastTrack = null;
			
			this.timeUp = false;
			
			this.data = null;
			
			this.ticketState = {};
		},

		events: {// These are messages that this component listens for
			"tick": function(resp){
				var self = this,
				state = this.ticketState,
				level = 0,
				message = '',
				time = baseTime;
				
				if(this.railroad.length > trackBuffer){
					this.appendTrack(this.railroad.splice(0, this.railroad.length - trackBuffer));
				}
				
				if(this.getStarted === 1){
					this.getStarted = 2;
				} else if(this.getStarted){
					this.getStarted = false;
					
					level = self.data.level || 0;
					
					if(!platformer.game.settings.aspects['mp3']){ // Don't do this for mp3's because we didn't include the 2nd round of facts for mp3s.
						flipNumber = 1 - flipNumber;
					}
					
					message = 'play-' + this.dinos[0].type + '-' + (flipNumber + 1);
					if(!level){
						message += '-first';
						time = firstTime;
					}
					this.owner.triggerEvent(message);
					
					state.clocking = true;
					this.owner.triggerEvent('ticket-time', state);
					setTimeout(function(){
						self.owner.triggerEvent('time-start', Math.max(time - (timeDecrementer * level), 0));
						setTimeout(function(){
							state.clocking = false;
							state.showing = true;
							state[self.dinos[0].type] = true;
							state.beginning = true;
							self.owner.triggerEvent('ticket-time', state);
						}, 3000);
					}, (level?6000:2000));
				}
			},
			"time-left": function(time){
				this.data.time = time;
			},
			"mousedown": function(){
				if(this.tapTimeout){
					clearTimeout(this.tapTimeout);
				} else {
					this.theyKnowHowToPlay = true;
				}
			},
			"next-step": function(){ //handle tickets
				var state = this.ticketState;
				
				// Start race
				if(state.showing){
					state.showing = false;
					this.owner.triggerEvent('ticket-time', state);
					this.loadTrain(this.train, 'initial');
					this.owner.triggerEvent('go-light', {showing: true});
				}
			},
			"finale": (function(){
				var fullSelection = ["end-red-bottom","end-green-bottom","end-blue-bottom","end-red-top","end-green-top","end-blue-top"],
				leftSelection = fullSelection.slice(),
				pieces = platformer.settings.scenes['build-dino-train'].layers[0].components[8].levelPieces; //hacky!
				
				return function(){
					var self = this;
					// Go to next level
					this.data.level = (this.data.level || 0) + 1;

					// set up next map
					if(!leftSelection.length){
						leftSelection = fullSelection.slice();
					}
					pieces.s = pieces.f.replace('end', 'start');
					pieces.f = leftSelection.splice(Math.floor(Math.random() * leftSelection.length),1)[0];
//					this.data.levelPieces = pieces;
						
					this.owner.triggerEvent('final-success-' + this.train.type);
					setTimeout(function(){
						self.owner.trigger('next-level', {
							persistentData: self.data
						});
					}, 5000);
				};
			})(),
			"speed-acquired": function(){
				if(this.train){
					this.train.trigger('speed-acquired');
				}
			},
			"race-track": function(railroad){
				this.railroad = railroad;
			},
			"child-entity-added": function(entity){
				if(entity.type === 'station-node'){
					if(!this.stationNodes[entity.station]){
						this.stationNodes[entity.station] = [];
					}
					this.stationNodes[entity.station].push(entity);
					this.snRamps[entity.station] = entity;
				} else if(entity.type === 'train-node'){
					this.tnRamps[entity.station] = entity;
				}
			},
			"scene-loaded": function(data){
				this.data = {
					time: data.time || 0,
					level: data.level || 0,
					dinos: data.dinos || null,
					train: data.train || null
				};
				delete data.levelTemplate; //removes tutorial level

				this.addDinos();
				this.addTrain(data.train, data.level);
			},
			"train-at-station": function(){
				// and end race
				//this.owner.triggerEvent('stop-time!'); // moved it back for testing to see how it feels. ///moved this here because Todd didn't like the time stopping when the track was connected in John Henry. - DDD
				this.loadTrain(this.train, 'final');
			},
			"world-loaded": function(data){
				this.addDinos();
			},
			"dino-loaded": function(node){
				var i    = 0,
				dinoList = null,
				dinos    = this.dinos,
				dino     = node.contains[0],
				state    = null;
				
				if(!this.unloading){
					dinoList = this.dinoCollection;
					dinoList.push(dino);
					dino.triggerEvent('leave-node');
					dino.triggerEvent('hide-animation');
					
					state = {};
					state[dino.type] = true;
					
					for(; i < dinos.length; i++){
						if(dinos[i] === dino){
							dinos.splice(i, 1);
							break;
						}
					}
					
					if(!this.loadCar(node)){
						this.owner.trigger('ready');
					}
				}
			},
			"out-of-time": function(){
				var self = this;
				
				this.timeUp = true;
				setTimeout(function(){
					self.owner.trigger('results', {
						persistentData: self.data
					});
				}, 5000);
			},
			"ready": function(){
				var self = this;
				setTimeout(function(){
					self.owner.triggerEvent('set', {showing: true, set: true});
				}, 1500);
			},
			"set": function(){
				var self = this;
				
				setTimeout(function(){
					self.owner.triggerEvent('go', {showing: true, go: true});
				}, 1500);
			},
			"go": (function(){
				var tapInstruction = false;
				
				return function(){
					var self = this;
					
					this.train.state.loading = false;
					this.train.state.racing  = true;
					this.train.speed = 0;
					this.train.trigger('passing-tie', {maxSpeed: 2}); //hack to set speed

					setTimeout(function(){
						self.owner.triggerEvent('go-light', {showing: false});
						if(!tapInstruction){
							tapInstruction = true;
							if(!self.theyKnowHowToPlay){
								self.tapTimeout = setTimeout(function(){
									self.owner.triggerEvent('instruct-tap');
								}, 1500);
							}
						}
					}, 1000);
				};
			})()
		},
		
		methods: {// These are methods that are called by this component.
			addTrain: function(train, level){
				var entity = platformer.Entity,
				entities   = platformer.game.settings.entities,
				state      = {};
				
				state[train] = true;

				this.train = this.owner.addEntity(new entity(entities[train + '-train'], {properties: {
					nodeId: train + '-train-tie',
					tieCount: 0
				}}));

				this.owner.addEntity(new entity(entities['train-car'], {properties: {
					nodeId: 'car-tie',
					state: state
				}}));
				
				if(level >= 4){
					this.owner.addEntity(new entity(entities['train-car'], {properties: {
						nodeId: 'car-tie-2',
						state: state
					}}));
				}
			},
			loadTrain: (function(){
				var connectNode = function(a, b){
					var info  = {},
					direction = "south";
					
					if(a.y > b.y){
						direction = "north";
					}
					info[direction] = b;
					
					a.triggerEvent('add-neighbors', info);
				};
				
				return function(train, station){
					if(station === 'final'){
/*						connectNode(this.tnRamps[station], this.snRamps[station]);
						this.unloadDinos(train);*/
						train.state.racing = false;
						train.state.loading = true;
						if(!this.timeUp){
							this.owner.triggerEvent('finale');
						}
					} else {
						connectNode(this.snRamps[station], this.tnRamps[station]);
						if(this.loadCar(this.tnRamps[station])){
							train.state.racing = false;
							train.state.loading = true;
						}
					}
				};
			})(),
			loadCar: (function(){
				var distance = function(origin, destination){
					return 1;//10 * (+destination.contains.length + +destination.edgesContain.length) + 1;
				};
				
				return function(node){
					var i = 0,
					dinos = this.dinos;
					
					for(; i < dinos.length; i++){
						if(!dinos[i].loading){
							dinos[i].triggerEvent('set-algorithm', distance);
							dinos[i].triggerEvent('goto-node', node);
							dinos[i].loading = node;
							return true;
						}
					}
					
					return false;
				};
			})(),
			addDinos: (function(){
				var dinoList = ["argentinosaurus", "sauroposeidon", "deinonychus", "spinosaurus", "kosmoceratops", "triceratops", "pteranodon", "quetzalcoatlus"],
				unusedDinoList = dinoList.slice();//,
				//firstLevel = true;
				
				return function(){
					var self = this,
					entity   = platformer.Entity,
					entities = platformer.game.settings.entities,
					nodes    = this.stationNodes['initial'],
					level    = 0;
					
					if(this.readyForDinos){ //check to make sure tiled map is loaded and scene data has been passed in.
						level = self.data.level || 0;
						
						//Add dinos
						if(!level || !unusedDinoList.length){
							unusedDinoList = dinoList.slice();
						}
						this.dinos.push(this.owner.addEntity(new entity(entities[unusedDinoList.splice(Math.floor(Math.random() * unusedDinoList.length), 1)[0]], {properties: {
							nodeId: (nodes.splice(Math.floor(Math.random() * nodes.length), 1))[0].nodeId,
							orientation: Math.random() * Math.PI * 2,
							nodeOffset: {
								x: Math.random() * 10 - 5,
								y: Math.random() * 10 - 5, 
								z: Math.random()
							}
						}})));
						
						if(!this.data.dinos){
							this.data.dinos = [];
						}
						this.data.dinos.push(this.dinos[0].type);
						this.owner.triggerEvent('add-dinos', this.data.dinos.slice());
						
						this.getStarted = 1;
					} else {
						this.readyForDinos = true;
					}
				};
			})(),
			appendTrack: (function(){
				var stationCount = 0,
				endOfTrack = [],
				tiesToEnd = 10,
				slowBuffer = function(incoming){
					if(endOfTrack.length === tiesToEnd){
						endOfTrack.length = tiesToEnd - 1;
					}
					endOfTrack.splice(0, 0, incoming);
					for(var i = 0; i < endOfTrack.length; i++){
						endOfTrack[i].speedMultiplier = Math.max(0.3, (+i + 1) / tiesToEnd);
					}
				};
				
				return function(railroad){
					var i = 0;
					
					tiesToEnd = 10;
					for (; i < railroad.length; i++){
						track = railroad[i];
						
						if(track.station){
							stationCount += 1;
							if(stationCount < 21){
								track.maxSpeed = 0.01 * (21 - stationCount);
							} else {
								if(stationCount === 21){
									track.stop = track.station;
								}
								track.maxSpeed = trackSpeed;
							}
						} else {
							stationCount = 0;
							if(track.type === 'track-bridge'){
								track.maxSpeed = bridgeSpeed;
							} else if(track.type === 'track-sand'){
								track.maxSpeed = sandSpeed;
							} else {
								track.maxSpeed = trackSpeed;
							}
						}
						
						if(this.lastTrack){
							this.lastTrack.triggerEvent('add-neighbors', {
								"east": track
							});
						}
						this.lastTrack = track;
						this.train.tieCount += 1;
						
						slowBuffer(track);
						track.state.permanent = true;
						track.opacity = 1;
						track.z = zIndex;
						zIndex += 0.000001; // so railroad ties stay z-ordered.
						
						if(stationCount === 21){
							track.stoppingPoint = true;
						}
					}
				};
			})()
		},
		
		publicMethods: {// These are methods that are available on the entity.
			/*********************************************************************
		     TODO: Additional methods that should be invoked at the entity level,
		           not just the local component level. Only one method of a given
		           name can be used on the entity, so be aware other components
		           may attempt to add an identically named method to the entity.
		           No method names should match the event or method names listed
		           above, since they can also be called at the component level.
		           
				   e.g.
				   "whatIsMyFavoriteColor": function(){
				       return '#ffff00';
				   }
				   
				   This function is callable on the entity as
				   entity.whatIsMyFavoriteColor().
		    *********************************************************************/
			
		}
	});
})();


/*--------------------------------------------------
 *   train-engine - ../game/components/train-engine.js
 */
/**
# COMPONENT **name-of-component**
Summarize the purpose of this component here.

## Dependencies
- [[Required-Component]] - List other components that this component requires to function properly on an entity.

## Messages

### Listens for:
- **received-message-label** - List all messages that this component responds to here.
  - @param message-object-property (type) - under each message label, list message object properties that are optional or required.

### Local Broadcasts:
- **local-message-label** - List all messages that are triggered by this component on this entity here.
  - @param message-object-property (type) - under each message label, list message object properties that are optional or required.

### Peer Broadcasts:
- **peer-message-label** - List all messages that are triggered by this component on other entities here.
  - @param message-object-property (type) - under each message label, list message object properties that are optional or required.

## JSON Definition
    {
      "type": "name-of-component"
      // List all additional parameters and their possible values here.
    }
*/
(function(){
	var speedUp = 0.025;
	
	return platformer.createComponentClass({
		/*********************************************************************
		 "createComponentClass" creates the component class and adds the
		 following methods and properties that can be referenced from your
		 own methods and events:
		 
		 Property this.owner - a reference to the component's Entity
		 Property this.type  - identical to the id provided below
		 Method addListener(event, callback) - adds an event to listen for
		 Method removeListener(event, callback) - removes an event
		*********************************************************************/
		
		id: 'train-engine',
		
		constructor: function(definition){
			this.owner.speed = 0;
			this.acceleration = definition.acceleration || 0.001;
			this.deceleration = definition.deceleration || 0.02;
			this.carsInTow = false;
			this.passedTies = 0;
			
			this.state = this.owner.state;
			
			this.movedLastTurn = false;
		},

		events: {// These are messages that this component listens for
			"handle-logic": function(resp){
				var delta = resp.delta,
				maxSpeed  = (this.owner.tieCount - 25 - this.passedTies) * speedUp;
				
				if(maxSpeed < this.owner.speed){
					this.owner.speed += (maxSpeed - this.owner.speed) * this.deceleration * delta;
				} else {
					this.owner.speed += (maxSpeed - this.owner.speed) * this.acceleration * delta;
				}
				
				if(!this.state.racing || !(this.state.moving || this.movedLastTurn)){
					this.owner.speed = 0;
				}
				this.movedLastTurn = this.state.moving;
				
				if(this.state.racing && !this.state.moving){
					this.owner.trigger('east');
				}
				
				this.owner.triggerEvent("set-speed", {
					"speed": this.owner.speed
				});
			},			
			"passing-tie": function(tie){
				this.passedTies += 1;
				
				if(tie.stop){
					this.owner.parent.triggerEvent('train-at-station', tie.stop);
				}
				if(this.owner.type === 'dino-train'){
					this.puff();
				}
			}
		},
		
		methods: {// These are methods that are called by this component.
			puff: (function(){
				var entity = platformer.Entity,
				popup      = null,
				style      = 0,
				styles = [{'a': true}, {'b': true}, {'c': true}],
				props = {
					state: null,
					x: 0,
					y: 0,
					orientation: 0
				},
				def = {
					properties: props
				};
				
				return function(){
					style = (style + 1) % 3;
					props.state = styles[style];
					props.x = this.owner.x + Math.cos(this.owner.orientation) * 35;
					props.y = this.owner.y + Math.sin(this.owner.orientation) * 35;
					props.orientation = Math.random() * Math.PI * 2;
					if(!popup){
						popup = platformer.game.settings.entities['popup'];
					}
					this.owner.parent.addEntity(new entity(popup, def));
				};
			})()
		},
		
		publicMethods: {// These are methods that are available on the entity.
			/*********************************************************************
		     TODO: Additional methods that should be invoked at the entity level,
		           not just the local component level. Only one method of a given
		           name can be used on the entity, so be aware other components
		           may attempt to add an identically named method to the entity.
		           No method names should match the event or method names listed
		           above, since they can also be called at the component level.
		           
				   e.g.
				   "whatIsMyFavoriteColor": function(){
				       return '#ffff00';
				   }
				   
				   This function is callable on the entity as
				   entity.whatIsMyFavoriteColor().
		    *********************************************************************/
			
		}
	});
})();


/*--------------------------------------------------
 *   logic-watch - ../game/components/logic-watch.js
 */
/**
# COMPONENT **name-of-component**
Summarize the purpose of this component here.

## Dependencies
- [[Required-Component]] - List other components that this component requires to function properly on an entity.

## Messages

### Listens for:
- **received-message-label** - List all messages that this component responds to here.
  - @param message-object-property (type) - under each message label, list message object properties that are optional or required.

### Local Broadcasts:
- **local-message-label** - List all messages that are triggered by this component on this entity here.
  - @param message-object-property (type) - under each message label, list message object properties that are optional or required.

### Peer Broadcasts:
- **peer-message-label** - List all messages that are triggered by this component on other entities here.
  - @param message-object-property (type) - under each message label, list message object properties that are optional or required.

## JSON Definition
    {
      "type": "name-of-component"
      // List all additional parameters and their possible values here.
    }
*/
(function(){
	var rate = 20, // times the delta
	timeBoost = 3000,
	timeLimit = 59000;

	return platformer.createComponentClass({
		id: 'logic-watch',
		
		constructor: function(definition){
			this.time = 0;
			this.going = false;
			this.incrementBy = 0;
			this.dead = false;
			this.short = definition.short || false;
			this.decrementMultiplier = 1;
			
			this.start = true;
			this.setState();
		},

		events: {// These are messages that this component listens for
			"scene-loaded": function(data) {
				if(data.time){
					this.setTime(data.time);
				} else {
					this.setTime(0);
				}
				
				if(data.train === 'dino'){
					this.decrementMultiplier = 0.75;
				}
			},
			"set-time": function(time){
				this.incrementBy += (time || timeBoost);
			},
			"start-the-clock": function(){
				this.going = true;
			},
			"stop-the-clock": function(){
				this.going = false;
				this.owner.triggerEvent('time-is-left', this.time);
			},
			"handle-logic": function(resp){
				var incrementRate = rate * resp.delta,
				addTime = 0;
				
				if(this.incrementBy && !this.dead){
					if(this.incrementBy < incrementRate){
						addTime = this.time + this.incrementBy;
						this.incrementBy = 0;
					} else {
						addTime = this.time + incrementRate;
						this.incrementBy -= incrementRate;
					}
					if(addTime){
						if(addTime > timeLimit){
							addTime = timeLimit;
							this.incrementBy = 0;
						}					
						this.setTime(addTime);
					}
				}
				
				if(this.going){
					this.time -= resp.delta * this.decrementMultiplier;
					this.setTime(this.time);
					if(this.time <= 0){
						this.owner.trigger('time-is-up!');
						this.time = 0;
						this.going = false;
						this.dead = true;
						this.owner.state.stopped = true;
					} else if (this.time <= 15000){
						if(!this.short){
							this.short = true; //so it doesn't replay
							this.owner.triggerEvent('time-is-short');
							this.lastTime = 15;
						} else if (this.time <= 5000){
							if(this.lastTime !== (Math.ceil(this.time / 500) / 2)){
								this.lastTime = Math.ceil(this.time / 500) / 2;
								this.owner.triggerEvent('final-tick', {
									pan: -1 + ((this.lastTime % 1) * 4)
								});
							}
						} else if(this.lastTime !== Math.ceil(this.time / 1000)){
							this.lastTime = Math.ceil(this.time / 1000);
							this.owner.triggerEvent('final-tick');
						}
					}
				}
			}
		},
		
		methods: {// These are methods that are called by this component.
			setTime: (function(){
				var lastSecond = -1;
				
				return function(time){
					var transform = '',
					thisSecond = Math.ceil(time / 1000);
					
					this.time = time;
					
					if((thisSecond !== lastSecond) || this.start){
						this.start = false;
						lastSecond = thisSecond;
						transform  = 'rotate(' + (-(time / 60000) * 360) + 'deg)';
						
						this.owner.triggerEvent('move-hand', {
							transform: transform,
							webkitTransform: transform,
							mozTransform: transform,
							msTransform: transform,
							oTransform: transform
						});
						
						this.setState();
					}
				};
			})(),
			
			setState: function(){
				var i = 0,
				time  = this.time / 1000,
				state = this.owner.state;
				
				for(; i < 60; i++){
					state['s' + i] = (time > +i);
				}
			}
		},
		
		publicMethods: {// These are methods that are available on the entity.
		}
	});
})();


/*--------------------------------------------------
 *   logic-popup - ../game/components/logic-popup.js
 */
/**
# COMPONENT **name-of-component**
Summarize the purpose of this component here.

## Dependencies
- [[Required-Component]] - List other components that this component requires to function properly on an entity.

## Messages

### Listens for:
- **received-message-label** - List all messages that this component responds to here.
  > @param message-object-property (type) - under each message label, list message object properties that are optional or required.

### Local Broadcasts:
- **local-message-label** - List all messages that are triggered by this component on this entity here.
  > @param message-object-property (type) - under each message label, list message object properties that are optional or required.

### Peer Broadcasts:
- **peer-message-label** - List all messages that are triggered by this component on other entities here.
  > @param message-object-property (type) - under each message label, list message object properties that are optional or required.

## JSON Definition
    {
      "type": "name-of-component"
      // List all additional parameters and their possible values here.
    }
*/
(function(){
	return platformer.createComponentClass({
		id: 'logic-popup',
		
		constructor: function(definition){
			this.popped = false;
			this.growFrom = definition.scale || this.owner.scale || this.owner.scaleX || this.owner.scaleY || 1;
			this.growBy = definition.growth || 1.5;
			this.opacitySwitch = definition.fadeThreshold || 0.1;
			this.deathTimerStart = this.deathTimer = definition.time || 1200;
		},

		events: {// These are messages that this component listens for
			"handle-logic": function (resp) {
				var delta = resp.delta;
				var ratio = 0;
				
				if(this.popped){
					this.deathTimer -= delta;
					if (this.deathTimer <= 0){
						this.owner.parent.removeEntity(this.owner);
					} else {
						ratio = this.deathTimer / this.deathTimerStart;
						
						this.owner.scaleX = this.growFrom + ((1 - ratio) * this.growBy);
						this.owner.scaleY = this.growFrom + ((1 - ratio) * this.growBy);
						
						if (ratio <= this.opacitySwitch) {
							this.owner.opacity = ratio / this.opacitySwitch;						
						}
					}
				}
			},
			"pop": function (collInfo) {
				if(!this.popped){
					this.popped = true;
					this.owner.triggerEvent("popped");
				}
			}
		}
	});
})();


/*--------------------------------------------------
 *   logic-results - ../game/components/logic-results.js
 */
/**
# COMPONENT **name-of-component**
Summarize the purpose of this component here.

## Dependencies
- [[Required-Component]] - List other components that this component requires to function properly on an entity.

## Messages

### Listens for:
- **received-message-label** - List all messages that this component responds to here.
  - @param message-object-property (type) - under each message label, list message object properties that are optional or required.

### Local Broadcasts:
- **local-message-label** - List all messages that are triggered by this component on this entity here.
  - @param message-object-property (type) - under each message label, list message object properties that are optional or required.

### Peer Broadcasts:
- **peer-message-label** - List all messages that are triggered by this component on other entities here.
  - @param message-object-property (type) - under each message label, list message object properties that are optional or required.

## JSON Definition
    {
      "type": "name-of-component"
      // List all additional parameters and their possible values here.
    }
*/
(function(){
	return platformer.createComponentClass({
		id: 'logic-results', 
		
		constructor: function(definition){
			this.screenState = {'down': true};
			this.appearState = {};
			this.dinos = null;
		},

		events: {// These are messages that this component listens for
			"scene-live": function(data) {
				var owner = this.owner;

				this.dinos = data.dinos;
				this.dinos.length -= 1;
				if(this.dinos.length > 8){ // so we don't load multiples.
					this.dinos.length = 8;
				}
				if(!this.dinos.length){
					setTimeout(function(){
						owner.triggerEvent('results-empty');
					}, 2000);
				} else {
					this.addDino();
					setTimeout(function(){
						owner.triggerEvent('results');
					}, 2000);
				}
			},
			"show-results": function(){
				this.owner.triggerEvent('delay-end-options');
				this.appearState.appear = true;
				this.owner.triggerEvent('update-play-again-button', this.appearState);
				this.owner.triggerEvent('update-something-else-button', this.appearState);
				this.owner.triggerEvent('update-results-blind', this.appearState);
			},
			"highlight-play-again": function(){
				this.owner.triggerEvent('update-play-again-button', {highlight: true});
			},
			"highlight-play-something-else": function(){
				this.owner.triggerEvent('update-play-again-button', {highlight: false});
				this.owner.triggerEvent('update-something-else-button', {highlight: true});
			},
			"unhighlight-play-something-else": function(){
				this.owner.triggerEvent('update-something-else-button', {highlight: false});
			}
		},
		
		methods: {// These are methods that are called by this component.
			addDino: (function(){
				var div = platformer.components['dom-element'];
				
				return function(){
					var self = this,
					owner    = this.owner,
					dinos    = this.dinos;
					
					if(dinos.length){
/*						owner.addComponent(new div(owner, {
							className: 'dino-image ' + dinos.splice(0,1)[0],
							parent: 'background'
						}));*/
						owner.parent.addEntity(new platformer.Entity(platformer.game.settings.entities[dinos.splice(0,1)[0] + '-cs'], {}));
						self.addDino();
					} else {
						owner.trigger('handle-render-load', {element: owner.element});
					}
				};
			})(),
			
			destroy: function(){
				this.medalState = null;
				this.appearState = null;
				this.endButtonState = null;
			}
		},
		
		publicMethods: {// These are methods that are available on the entity.
			/*********************************************************************
		     TODO: Additional methods that should be invoked at the entity level,
		           not just the local component level. Only one method of a given
		           name can be used on the entity, so be aware other components
		           may attempt to add an identically named method to the entity.
		           No method names should match the event or method names listed
		           above, since they can also be called at the component level.
		           
				   e.g.
				   "whatIsMyFavoriteColor": function(){
				       return '#ffff00';
				   }
				   
				   This function is callable on the entity as
				   entity.whatIsMyFavoriteColor().
		    *********************************************************************/
			
		}
	});
})();


/*--------------------------------------------------
 *   logic-intro - ../game/components/logic-intro.js
 */
/**
# COMPONENT **name-of-component**
Summarize the purpose of this component here.

## Dependencies
- [[Required-Component]] - List other components that this component requires to function properly on an entity.

## Messages

### Listens for:
- **received-message-label** - List all messages that this component responds to here.
  - @param message-object-property (type) - under each message label, list message object properties that are optional or required.

### Local Broadcasts:
- **local-message-label** - List all messages that are triggered by this component on this entity here.
  - @param message-object-property (type) - under each message label, list message object properties that are optional or required.

### Peer Broadcasts:
- **peer-message-label** - List all messages that are triggered by this component on other entities here.
  - @param message-object-property (type) - under each message label, list message object properties that are optional or required.

## JSON Definition
    {
      "type": "name-of-component"
      // List all additional parameters and their possible values here.
    }
*/
(function(){
	return platformer.createComponentClass({
		id: 'logic-intro',
		
		constructor: function(definition){
			this.screenState = {'down': true};
			this.showState = {'show': false};
			this.designButtonState = {'checked': false};
		},

		events: {// These are messages that this component listens for
			"scene-live": function(data) {
				var owner = this.owner;
				
				setTimeout(function(){
					owner.triggerEvent('intro');
				}, 2000);
			},
			"show-special": function() {
				this.showState.show = false;
				this.owner.triggerEvent('update-intro-medal', this.showState);
				this.showState.show = true;
				this.owner.triggerEvent('update-intro-skip-button', this.showState);
				this.owner.triggerEvent('update-intro-special-sign', this.showState);
				this.owner.triggerEvent('update-intro-special-dinos', this.showState);
				this.screenState.down = true;
				this.owner.triggerEvent('update-projector-screen', this.screenState);
			},
			"show-design-both": function(data) {
				this.showState.show = false;
				this.owner.triggerEvent('update-intro-special-sign', this.showState);
				this.owner.triggerEvent('update-intro-special-dinos', this.showState);
				
				this.showState.show = true;
				this.designButtonState.checked = false;
				this.owner.triggerEvent('update-intro-design-rocket', this.showState);
				this.owner.triggerEvent('update-intro-design-rocket', this.designButtonState);
				this.owner.triggerEvent('update-intro-design-dino', this.showState);
				this.owner.triggerEvent('update-intro-design-dino', this.designButtonState);
				
				this.screenState.down = true;
				this.owner.triggerEvent('update-projector-screen', this.screenState);
			},
			"skip": function() {
				this['hide-screen']();
				this["show-design-both"]();
			},
			"hide-screen": function() {
				this.showState.show = false;
				this.owner.triggerEvent('update-intro-skip-button', this.showState);
				this.screenState.down = false;
				this.owner.triggerEvent('update-projector-screen', this.screenState);
			}
			
		},
		
		methods: {// These are methods that are called by this component.
			destroy: function() {
				this.showState = null;
				this.designButtonState = null;
				this.screenState = null;
				this.cladeState = null;
			}
		},
		
		publicMethods: {// These are methods that are available on the entity.

		}
	});
})();


/*--------------------------------------------------
 *   render-sprite - ../engine/components/render-sprite.js
 */
/**
# COMPONENT **render-sprite**
This component is attached to entities that will appear in the game world. It renders a static or animated image. It listens for messages triggered on the entity or changes in the logical state of the entity to play a corresponding animation.

## Dependencies:
- [createjs.EaselJS][link1] - This component requires the EaselJS library to be included for canvas animation functionality.
- [[handler-render-createjs]] (on entity's parent) - This component listens for a render "handle-render" and "handle-render-load" message to setup and display the content.

## Messages

### Listens for:
- **handle-render-load** - This event is triggered when the entity is added to the render handler before 'handle-render' is called. It adds the sprite to the Stage and sets up the mouse input if necessary.
  - @param message.stage ([createjs.Stage][link2]) - Required. Provides the render component with the CreateJS drawing [Stage][link2].
- **handle-render** - On each `handle-render` message, this component checks to see if there has been a change in the state of the entity. If so, it updates its animation play-back accordingly.
- **logical-state** - This component listens for logical state changes and tests the current state of the entity against the animation map. If a match is found, the matching animation is played. Has some reserved values used for special functionality.
  - @param message (object) - Required. Lists various states of the entity as boolean values. For example: {jumping: false, walking: true}. This component retains its own list of states and updates them as `logical-state` messages are received, allowing multiple logical components to broadcast state messages. Reserved values: 'orientation' and 'hidden'. Orientation is used to set the angle value in the object, the angle value will be interpreted differently based on what the 'rotate', 'mirror', and 'flip' properties are set to. Hidden determines whether the sprite is rendered.
- **pin-me** - If this component has a matching pin location, it will trigger "attach-pin" on the entity with the matching pin location.
  - @param pinId (string) - Required. A string identifying the id of a pin location that the render-sprite wants to be pinned to.
- **attach-pin** - On receiving this message, the component checks whether it wants to be pinned, and if so, adds itself to the provided container.
  - @param pinId (string) - Pin Id of the received pin location.
  - @param container ([createjs.Container][link3]) - Container that render-sprite should be added to.
- **remove-pin** - On receiving this message, the component checks whether it is pinned, and if so, removes itself from the container.
  - @param pinId (string) - Pin Id of the pin location to remove itself from.
- **hide-sprite** - Makes the sprite invisible.
- **show-sprite** - Makes the sprite visible.
- **[Messages specified in definition]** - Listens for additional messages and on receiving them, begins playing the corresponding animations.

### Local Broadcasts:
- **mousedown** - This component captures this event from CreateJS and triggers it on the entity.
  - @param event (event object) - The event from Javascript.
  - @param over (boolean) - Whether the mouse is over the object or not.
  - @param x (number) - The x-location of the mouse in stage coordinates.
  - @param y (number) - The y-location of the mouse in stage coordinates.
  - @param entity ([[Entity]]) - The entity clicked on.  
- **mouseup** - This component captures this event from CreateJS and triggers it on the entity.
  - @param event (event object) - The event from Javascript.
  - @param over (boolean) - Whether the mouse is over the object or not.
  - @param x (number) - The x-location of the mouse in stage coordinates.
  - @param y (number) - The y-location of the mouse in stage coordinates.
  - @param entity ([[Entity]]) - The entity clicked on.  
- **mousemove** - This component captures this event from CreateJS and triggers it on the entity.
  - @param event (event object) - The event from Javascript.
  - @param over (boolean) - Whether the mouse is over the object or not.
  - @param x (number) - The x-location of the mouse in stage coordinates.
  - @param y (number) - The y-location of the mouse in stage coordinates.
  - @param entity ([[Entity]]) - The entity clicked on.  
- **pressmove** - This component captures this event from CreateJS and triggers it on the entity.
  - @param event (event object) - The event from Javascript.
  - @param over (boolean) - Whether the mouse is over the object or not.
  - @param x (number) - The x-location of the mouse in stage coordinates.
  - @param y (number) - The y-location of the mouse in stage coordinates.
  - @param entity ([[Entity]]) - The entity clicked on.  
- **pin-me** - If this component should be pinned to another sprite, it will trigger this event in an attempt to initiate the pinning.
  - @param pinId (string) - Required. A string identifying the id of a pin location that this render-sprite wants to be pinned to.
- **attach-pin** - This component broadcasts this message if it has a list of pins available for other sprites on the entity to attach to.
  - @param pinId (string) - Pin Id of an available pin location.
  - @param container ([createjs.Container][link3]) - Container that the render-sprite should be added to.
- **remove-pin** - When preparing to remove itself from an entity, render-sprite broadcasts this to all attached sprites.
  - @param pinId (string) - Pin Id of the pin location to be removed.

## JSON Definition
    {
      "type": "render-sprite",

      "animationMap":{
      //Optional. This defines a mapping from either triggered messages or one or more states for which to choose a new animation to play. The list is processed from top to bottom, so the most important actions should be listed first (for example, a jumping animation might take precedence over an idle animation). If not specified, an 1-to-1 animation map is created from the list of animations in the sprite sheet definition.
      
          "standing": "default-animation"
          // On receiving a "standing" message, or a "logical-state" where message.standing == true, the "default" animation will begin playing.
          
          "ground,moving": "walking",
          // Comma separated values have a special meaning when evaluating "logical-state" messages. The above example will cause the "walking" animation to play ONLY if the entity's state includes both "moving" and "ground" equal to true.
          
          "ground,striking": "swing!",
          // Putting an exclamation after an animation name causes this animation to complete before going to the next animation. This is useful for animations that would look poorly if interrupted.

          "default": "default-animation",
          // Optional. "default" is a special property that matches all states. If none of the above states are valid for the entity, it will use the default animation listed here.
      }  

      "spriteSheet": {
      //Required for animations but optional for static sprites (where only a single frame is necessary). Defines an EaselJS sprite sheet to use for rendering. See http://www.createjs.com/Docs/EaselJS/SpriteSheet.html for the full specification.

	      "images": ["example0", "example1"],
	      //Required: An array of ids of the images from the asset list in config.js.
	      
	      "frames": {
	      //Required: The dimensions of the frames on the image and how to offset them around the entity position. The image is automatically cut up into pieces based on the dimensions. 
	      	"width":  100,
			"height": 100,
			"regY":   100,
			"regX":   50
	      },
	      
	      "animations":{
	      //Required: The list of animation ids and the frames that make up that animation. The speed determines how long each frame plays. There are other possible parameters. Additional parameters and formatting info can be found in createJS.
			"default-animation":[2],
			"walking": {"frames": [0, 1, 2], "speed": 4},
			"swing": {"frames": [3, 4, 5], "speed": 4}
		  }
      },
      
      // If a sprite sheet definition is not set like shown above, this component will assume that the sprite is a static image and will use the following properties to set the source image and source size information. 
      "image": "example0", //An image id from the asset list in config.js.
      "x": 10,              //These set the source rectangle in the dimensions of the above image source. 
      "y": 10,
      "width":  100,
      "height": 100,
      "regY":   100,        //These specify the sprite offset from the entity's location.
      "regX":   50,
      
      "mask": {
      // Optional. A mask definition that determines where the image should clip. A string can also be used to create more complex shapes via the CreateJS graphics API like: "mask": "r(10,20,40,40).dc(30,10,12)". Defaults to no mask or, if simply set to true, a rectangle using the entity's dimensions.
          "x": 10,
          "y": 10,
          "width": 40,
          "height": 40
      },

      "acceptInput": {
      //Optional - What types of input the object should take. This component defaults to not accept any input.
      
          "hover": false,
          "click": false,
          
	      "hitArea": {
	      // Optional. A hitArea definition that determines where the image should be clickable. Defines the shape of the hitArea. A string can also be used to create more complex shapes via the CreateJS graphics API like: "hitArea": "r(10,20,40,40).dc(30,10,12)". Defaults to this component's image if not specified or, if simply set to `true`, a rectangle using the entity's dimensions.
	          "x": 10,
	          "y": 10,
	          "width": 40,
	          "height": 40
	      }
      },
      
      "pins": [{
      //Optional. Specifies whether other sprites can pin themselves to this sprite. This is useful for puppet-like dynamics
      
        "pinId": "head",
        //Required. How this pin location should be referred to by other sprites in order to link up.
        
        "x": 15,
        "y": -30,
        //These two values are required unless "frames" is provided below. Defines where the other sprite's regX and regY should be pinned to this sprite.
        
        "frames": [{"x": 12, "y": -32}, null, {"x": 12}]
        //Alternatively, pin locations can be specified for every frame in the sprite animation by providing an array. If a given index is null or a parameter is undefined, the x/y/z values above are used. If they're not specified, the pinned sprite is hidden.
      }],

      "pinTo": "body",
      //Optional. Pin id of another sprite on this entity to pin this sprite to.
      
      "scaleX": 1,
      //Optional - The X scaling factor for the image. Will default to 1.
      
      "scaleY": 1,
      //Optional - The Y scaling factor for the image. Will default to 1.

      "offsetZ": -1,
      //Optional - How much the z-index of the sprite should be relative to the entity's z-index. Will default to 0.

      "rotate": false,
      //Optional - Whether this object can be rotated. It's rotational angle is set by setting an orientation value on the entity.
      
      "mirror": true,
      //Optional - Whether this object can be mirrored over X. To mirror it over X set the orientation value in the logical state to be great than 90 but less than 270.
      
      "flip": false,
      //Optional - Whether this object can be flipped over Y. To flip it over Y set the orientation value in the logical state to be great than 180.
      
      "hidden": false,
      //Optional - Whether this object is visible or not. To change the hidden value dynamically add a 'hidden' property to the logical state object and set it to true or false.
      
      "eventBased": true,
      // Optional - Specifies whether this component should listen to events matching the animationMap to animate. Set this to false if the component should animate for state changes only. Default is true.
      
      "stateBased": true,
      // Optional - Specifies whether this component should listen to changes in the entity's state that match the animationMap to animate. Set this to false if the component should animate for events only. Default is true.
      
      "cache": false
      //Optional - Whether this sprite should be cached into an entity with a `render-tiles` component (like "render-layer"). The `render-tiles` component must have its "entityCache" property set to `true`. Warning! This is a one-direction setting and will remove this component from the entity once the current frame has been cached.
    }
    
[link1]: http://www.createjs.com/Docs/EaselJS/module_EaselJS.html
[link2]: http://createjs.com/Docs/EaselJS/Stage.html
[link3]: http://createjs.com/Docs/EaselJS/Container.html
*/
(function(){
	var dpr = window.devicePixelRatio || 1,
	changeState = function(state){
		return function(value){
			//9-23-13 TML - Commenting this line out to allow animation events to take precedence over the currently playing animation even if it's the same animation. This is useful for animations that should restart on key events.
			//				We may eventually want to add more complexity that would allow some animations to be overridden by messages and some not.
			//if(this.currentAnimation !== state){
				if(this.animationFinished || (this.lastState >= -1)){
					this.currentAnimation = state;
					this.lastState = -1;
					this.animationFinished = false;
					this.sprite.gotoAndPlay(state);
				} else {
					this.waitingAnimation = state;
					this.waitingState = -1;
				}
			//}
		};
	},
	createTest = function(testStates, animation){
		var states = testStates.replace(/ /g, '').split(',');
		if(testStates === 'default'){
			return function(state){
				return animation;
			};
		} else {
			return function(state){
				for(var i = 0; i < states.length; i++){
					if(!state[states[i]]){
						return false;
					}
				}
				return animation;
			};
		}
	},
	processGraphics = (function(){
		var process = function(gfx, value){
			var paren = value.indexOf('('),
			func      = value.substring(0, paren),
			values    = value.substring(paren + 1, value.indexOf(')'));
			
			if(values.length){
				gfx[func].apply(gfx, values.split(','));
			} else {
				gfx[func]();
			}
		};
		
		return function(gfx, value){
			var i = 0,
			arr   = value.split('.');
			
			for (; i < arr.length; i++){
				process(gfx, arr[i]);
			}
		};
	})();
	
	return platformer.createComponentClass({
		
		id: 'render-sprite',
		
		constructor: (function(){
			var defaultAnimations = {"default": 0},
			createSpriteSheet = function(def, entity){
				var i  = 0,
				arr    = null,
				image  = null,
				scaleX = 1,
				scaleY = 1,
				scaled = false,
				srcSS  = def.spritesheet || def.spriteSheet, // To prevent silly bugs.
				ss     = {
					framerate:     0,
					images:     null,
					frames:     null,
					animations: null
				};
				
				// Set framerate.
				if(srcSS && !isNaN(srcSS.framerate)){
					ss.framerate = srcSS.framerate;
				} else if(!isNaN(def.framerate)){
					ss.framerate = def.framerate;
				} else if(!isNaN(entity.framerate)) {
					ss.framerate = entity.framerate;
				}
				
				// Set source image(s)
				if(srcSS && Array.isArray(srcSS.images)){
					ss.images = srcSS.images.slice();
				} else if(srcSS && srcSS.image){
					ss.images = [srcSS.image];
				} else if(def.images){
					ss.images = def.images.slice();
				} else if(def.image){
					ss.images = [def.image];
				} else if(entity.images){
					ss.images = entity.images.slice();
				} else if(entity.image){
					ss.images = [entity.image];
				} else {
					console.warn('"' + entity.type + '" render component: No source image defined.');
				}
				
				// Convert image names into Image resources
				for (i = 0; i < ss.images.length; i++){
					if(typeof ss.images[i] === 'string'){
						ss.images[i] = platformer.assets[ss.images[i]];

						// Check here whether to scale coordinates in the frame setup section.
						if(!scaled && ((ss.images[i].scaleX && (ss.images[i].scaleX !== 1)) || (ss.images[i].scaleY && (ss.images[i].scaleY !== 1)))){
							scaled = true;
						}
					}
				}

				// Set frames.
				if(srcSS && srcSS.frames){
					ss.frames = srcSS.frames;
				} else if(def.frames){
					ss.frames = def.frames;
				} else if(entity.frames) {
					ss.frames = entity.frames;
				} else if(def.source){
					//TODO: Remove this option at some point once "render-image" notation is no longer in common use. - DDD 5/1/2014
					ss.frames = [[
					    def.source.x      || def.x      || 0,
					    def.source.y      || def.y      || 0,
					    def.source.width  || def.width  || ss.images[0].width  || entity.width,
					    def.source.height || def.height || ss.images[0].height || entity.height,
					    0,
					    def.regX          || entity.regX         || 0,
					    def.regY          || entity.regY         || 0
					]];
					console.warn('"' + entity.type + '" render component: The original render-image "source" parameter will soon be deprecated in favor of placing source information as individual parameters directly on the render component.');
				} else {
					// assume this is a single frame image and define accordingly.
					image = ss.images[0];
					if(image){
						ss.frames = [[
						    def.x      || 0,
						    def.y      || 0,
						    def.width  || ss.images[0].width  || entity.width,
						    def.height || ss.images[0].height || entity.height,
						    0,
						    def.regX   || entity.regX         || 0,
						    def.regY   || entity.regY         || 0
						]];
					}
				}
				
				// Process frames if the image size has been scaled from the original definition image. (This is sent as data on the image itself, usually due to dynamically reducing the size of source images for smaller devices.)
				if(scaled){
					if(Array.isArray(ss.frames)){ //frames are an array
						arr = ss.frames;
						ss.frames = [];
						for (i = 0; i < arr.length; i++){
							scaleX = ss.images[arr[i][4]].scaleX || 1;
							scaleY = ss.images[arr[i][4]].scaleY || 1;
							
							ss.frames.push([
							    arr[i][0] * scaleX,
							    arr[i][1] * scaleY,
							    arr[i][2] * scaleX,
							    arr[i][3] * scaleY,
							    arr[i][4],
							    arr[i][5] * scaleX,
							    arr[i][6] * scaleY
							]);
						}
					} else {
						scaleX = ss.images[0].scaleX || 1;
						scaleY = ss.images[0].scaleY || 1;
						ss.frames = {
							width: ss.frames.width * scaleX,	
							height: ss.frames.height * scaleY,	
							regX: ss.frames.regX * scaleX,	
							regY: ss.frames.regY * scaleY
						};
					}
				}
				
				// Set animations.
				if(srcSS && srcSS.animations){
					ss.animations = srcSS.animations;
				} else if(def.animations){
					ss.animations = def.animations;
				} else if(entity.animations) {
					ss.animations = entity.animations;
				} else {
					// assume this is a single frame image and define accordingly.
					ss.animations = defaultAnimations;
				}

				return ss;
			},
			createAnimationMap = function(def, ss){
				var map = null,
				anim    = '';
				
				if(def.animationMap){
					return def.animationMap;
				} else if (Array.isArray(ss.frames) && (ss.frames.length === 1)) {
					// This is a single frame animation, so no mapping is necessary
					return null;
				} else { // create 1-to-1 animation map since none was defined
					map = {};
					for (anim in ss.animations){
						map[anim] = anim;
					}
					return map;
				}
			},
			setupEventsAndStates = function(component, map){
				var anim  = '',
				animation = '';
				
				component.followThroughs = {};
				component.checkStates = [];

				for(anim in map){
					animation = map[anim];
					
					//TODO: Should probably find a cleaner way to accomplish this. Maybe in the animationMap definition? - DDD
					if(animation[animation.length - 1] === '!'){
						animation = animation.substring(0, animation.length - 1);
						component.followThroughs[animation] = true;
					} else {
						component.followThroughs[animation] = false;
					}
					
					if(component.eventBased){
						component.addEventListener(anim, changeState(animation));
					}
					if(component.stateBased){
						component.checkStates.push(createTest(anim, animation));
					}
				}
			};
			
			return function(definition){
				var self    = this, 
				spriteSheet = createSpriteSheet(definition, this.owner),
				map         = createAnimationMap(definition, spriteSheet);
				
				this.sprite     = null;
				
				this.stage      = null;
				this.rotate     = definition.rotate || false;
				this.mirror     = definition.mirror || false;
				this.flip       = definition.flip   || false;
				this.stateBased = map && (definition.stateBased !== false);
				this.eventBased = map && (definition.eventBased !== false);
				this.hover      = false;
				this.click      = false;
				this.touch      = false;

				this.forcePlaythrough = this.owner.forcePlaythrough || definition.forcePlaythrough || false;
				
				this.initialScaleX   = definition.scaleX || 1;
				this.initialScaleY   = definition.scaleY || 1;
				this.imageScaleX     = spriteSheet.images[0].scaleX || 1;
				this.imageScaleY     = spriteSheet.images[0].scaleY || 1;
				this.lastOwnerScaleX = this.owner.scaleX = this.owner.scaleX || 1;
				this.lastOwnerScaleY = this.owner.scaleY = this.owner.scaleY || 1;
				
				if(definition.acceptInput){
					this.hover = definition.acceptInput.hover || false;
					this.click = definition.acceptInput.click || false;
					this.touch = definition.acceptInput.touch || false;
					
					this.camera = {
						x: 0,
						y: 0
					};
					this.addEventListener('camera-update', function(camera){
						self.camera.x = camera.viewportLeft;
						self.camera.y = camera.viewportTop;
					});
				}
				
				if(this.eventBased || this.stateBased){
					setupEventsAndStates(this, map);
					this.currentAnimation = map['default'] || '';
				}
				
				/*
				 * CreateJS Sprite created here:
				 */
				this.sprite = new createjs.Sprite(new createjs.SpriteSheet(spriteSheet), this.currentAnimation || 0);
				
				// add pins to sprite and setup this.container if needed.
				if(definition.pins){
					this.container = new createjs.Container();
					this.container.addChild(this.sprite);
					this.sprite.z = 0;

					this.addPins(definition.pins, spriteSheet.frames);
				} else {
					this.container = this.sprite;
				}
	
				
				/* These next few need this.container set up */
				
				//handle hitArea
				if(definition.acceptInput && definition.acceptInput.hitArea){
					if(typeof definition.acceptInput.hitArea === 'string'){
						this.container.hitArea = this.setHitArea(definition.acceptInput.hitArea);
					} else {
						this.container.hitArea = this.setHitArea('r(' + (this.owner.x || 0) + ',' + (this.owner.y || 0) + ',' + (this.owner.width || 0) + ',' + (this.owner.height || 0) + ')');
					}
				}
				
				//handle mask
				if(definition.mask){
					this.container.mask = this.setMask(definition.mask);
				}
	
				// pin to another render-sprite
				this.pinTo = definition.pinTo || false;
				if(this.pinTo){
					this.owner.triggerEvent('pin-me', this.pinTo);
				}
				
				//This applies scaling to the correct objects if container and animation are separate, and applies them both to the animation if the container is also the animation. - DDD
				this.container.scaleX = this.initialScaleX * this.owner.scaleX;
				this.container.scaleY = this.initialScaleY * this.owner.scaleY;
				this.sprite.scaleX /= this.imageScaleX;
				this.sprite.scaleY /= this.imageScaleY;
				this.scaleX = this.container.scaleX;
				this.scaleY = this.container.scaleY;
	
				this.skewX = this.owner.skewX || definition.skewX;
				this.skewY = this.owner.skewY || definition.skewY;
				
				this.offsetZ = definition.offsetZ || 0;

				this.container.hidden = definition.hidden || false;
				this.state = this.owner.state;
				this.stateChange = false;
				this.lastState = -1;
	
				this.waitingAnimation = false;
				this.waitingState = 0;
				this.playWaiting = false;
				this.animationFinished = false;
	
				//Check state against entity's prior state to update animation if necessary on instantiation.
				this.stateChange = true;
				
				if(definition.cache){
					this.updateSprite();
					this.owner.cacheRender = this.container;
				}
			};
		})(),
		
		events: {
			"load": function(){
				var self = this,
				i        = 0,
				listener = false,
				messages = this.owner.getMessageIds();
				
				//See if anyone is listening for this before setting it up, since it can get expensive, especially for single-frame animations
				for(; i < messages.length; i++){
					if(messages[i] === 'animation-ended'){
						this.sprite.addEventListener('animationend', function(e){
							self.owner.trigger('animation-ended', e.name);
							if(self.waitingAnimation){
								self.currentAnimation = self.waitingAnimation;
								self.waitingAnimation = false;
								self.lastState = self.waitingState;
								
								self.animationFinished = false;
								self.sprite.gotoAndPlay(self.currentAnimation);
							} else {
								self.animationFinished = true;
							}
						});
					}
				}
			},
			
			"handle-render-load": function(resp){
				if(resp && resp.stage){
					this.addStage(resp.stage);
				}
			},
			
			"handle-render": function(resp){
				if(!this.stage){
					if(!this.pinTo) { //In case this component was added after handler-render is initiated
						if(!this.addStage(resp.stage)){
							console.warn('No CreateJS Stage, removing render component from "' + this.owner.type + '".');
							this.owner.removeComponent(this);
							return;
						}
					} else {
						return;
					}
				}
				
				this.updateSprite();
			},
			
			"logical-state": function(state){
				this.stateChange = true;
			},
			
			"hide-sprite": function(){
				this.container.hidden = true;
			},

			"show-sprite": function(){
				this.container.hidden = false;
			},
			
			"pin-me": function(pinId){
				if(this.pins && this.pins[pinId]){
					this.owner.trigger("attach-pin", this.pins[pinId]);
				}
			},
			
			"attach-pin": function(pinInfo){
				if(pinInfo.pinId === this.pinTo){
					this.stage = pinInfo.container;
					this.stage.addChild(this.container);
					this.addInputs();				
					this.pinnedTo = pinInfo;
				}
			},
			
			"remove-pin": function(pinInfo){
				if(pinInfo.pinId === this.pinTo){
					this.stage.removeChild(this.container);
					this.stage = null;
					this.pinnedTo = null;
				}
			},
			
			"dispatch-event": function(event){
				this.sprite.dispatchEvent(event);
			}
		},
		
		methods: {
			addStage: function(stage){
				if(stage && !this.pinTo){
					this.stage = stage;
					this.stage.addChild(this.container);
//					if(this.container.mask) this.stage.addChild(this.container.mask);
					this.addInputs();
					return stage;
				} else {
					return null;
				}
			},
			
			updateSprite: (function(){
				var sort = function(a, b) {
					return a.z - b.z;
				};
				
				return function(resp){
					var testCase = false, i = 0,
					angle = null;
					
					if(this.pinnedTo){
						if(this.pinnedTo.frames && this.pinnedTo.frames[this.pinnedTo.sprite.currentFrame]){
							this.container.x = this.pinnedTo.frames[this.pinnedTo.sprite.currentFrame].x;
							this.container.y = this.pinnedTo.frames[this.pinnedTo.sprite.currentFrame].y;
							if(this.container.z !== this.pinnedTo.frames[this.pinnedTo.sprite.currentFrame].z){
								if(this.stage){
									this.stage.reorder = true;
								}
								this.container.z = this.pinnedTo.frames[this.pinnedTo.sprite.currentFrame].z;
							}
							this.container.rotation = this.pinnedTo.frames[this.pinnedTo.sprite.currentFrame].angle || 0;
							this.container.visible = true;
						} else if (this.pinnedTo.defaultPin) {
							this.container.x = this.pinnedTo.defaultPin.x;
							this.container.y = this.pinnedTo.defaultPin.y;
							if(this.container.z !== this.pinnedTo.defaultPin.z){
								if(this.stage){
									this.stage.reorder = true;
								}
								this.container.z = this.pinnedTo.defaultPin.z;
							}
							this.container.rotation = this.pinnedTo.defaultPin.angle || 0;
							this.container.visible = true;
						} else {
							this.container.visible = false;
						}
					} else {
						this.container.x = this.owner.x;
						this.container.y = this.owner.y;
						if(this.container.z !== (this.owner.z + this.offsetZ)){
							if(this.stage){
								this.stage.reorder = true;
							}
							this.container.z = (this.owner.z + this.offsetZ);
						}
	
						if(this.owner.opacity || (this.owner.opacity === 0)){
							this.container.alpha = this.owner.opacity;
						}
					}
					
					if(this.container.reorder){
						this.container.reorder = false;
						this.container.sortChildren(sort);
					}
					
					if(this.skewX){
						this.container.skewX = this.skewX;
					}
					if(this.skewY){
						this.container.skewY = this.skewY;
					}
					
					if (this.owner.scaleX != this.lastOwnerScaleX || this.owner.scaleY != this.lastOwnerScaleY) {
						this.container.scaleX = this.initialScaleX * this.owner.scaleX;
						this.container.scaleY = this.initialScaleY * this.owner.scaleY;
						this.sprite.scaleX /= this.imageScaleX;
						this.sprite.scaleY /= this.imageScaleY;
						this.scaleX = this.container.scaleX;
						this.scaleY = this.container.scaleY;
						
						this.lastOwnerScaleX = this.owner.scaleX;
						this.lastOwnerScaleY = this.owner.scaleY;
					}
			
					//Special case affecting rotation of the animation
					if(this.rotate || this.mirror || this.flip){
						angle = ((this.owner.orientation * 180) / Math.PI + 360) % 360;
						
						if(this.rotate){
							this.container.rotation = angle;
						}
						
						if(this.mirror){
							if((angle > 90) && (angle < 270)){
								this.container.scaleX = -this.scaleX;
							} else {
								this.container.scaleX = this.scaleX;
							}
						}
						
						if(this.flip){
							if(angle > 180){
								this.container.scaleY = this.scaleY;
							} else {
								this.container.scaleY = -this.scaleY;
							}
						}
					}
					
					
					if(this.stateBased && this.stateChange){
						if(this.state['hidden'] !== undefined) {
							this.container.hidden = this.state['hidden'];
						}

						if(this.checkStates){
							for(; i < this.checkStates.length; i++){
								testCase = this.checkStates[i](this.state);
								if(testCase){
									if(this.currentAnimation !== testCase){
										if(!this.followThroughs[this.currentAnimation] && (!this.forcePlaythrough || (this.animationFinished || (this.lastState >= +i)))){
											this.currentAnimation = testCase;
											this.lastState = +i;
											this.animationFinished = false;
											this.sprite.gotoAndPlay(testCase);
										} else {
											this.waitingAnimation = testCase;
											this.waitingState = +i;
										}
									} else if(this.waitingAnimation && !this.followThroughs[this.currentAnimation]) {// keep animating this animation since this animation has already overlapped the waiting animation.
										this.waitingAnimation = false;
									}
									break;
								}
							}
						}
						this.stateChange = false;
					}
				};
			})(),
			
			addInputs: (function(){
				var createHandler = function(self, eventName){
					return function(event) {
						self.owner.trigger(eventName, {
							event: event.nativeEvent,
							cjsEvent: event,
							x: (event.stageX * dpr) / self.stage.scaleX + self.camera.x,
							y: (event.stageY * dpr) / self.stage.scaleY + self.camera.y,
							entity: self.owner
						});
					};
				};
				
				return function(){
					var self = this,
					mousedown = null,
					mouseover = null,
					mouseout  = null,
					rollover  = null,
					rollout   = null,
					pressmove = null,
					pressup   = null,
					click     = null,
					dblclick  = null;
					
					// The following appends necessary information to displayed objects to allow them to receive touches and clicks
					if(this.click || this.touch){
						if(this.touch && !this.stage.__touch){ //__touch check due to this being overridden if we do this multiple times. - DDD
							createjs.Touch.enable(this.stage);
						}
						
						mousedown = createHandler(this, 'mousedown');
						pressmove = createHandler(this, 'pressmove');
						pressup   = createHandler(this, 'pressup'  );
						click     = createHandler(this, 'click'    );
						dblclick  = createHandler(this, 'dblclick' );
						
						this.sprite.addEventListener('mousedown', mousedown);
						this.sprite.addEventListener('pressmove', pressmove);
						this.sprite.addEventListener('pressup',   pressup  );
						this.sprite.addEventListener('click',     click    );
						this.sprite.addEventListener('dblclick',  dblclick );
					}
					if(this.hover){
						this.stage.enableMouseOver();
						mouseover = createHandler(this, 'mouseover');
						mouseout  = createHandler(this, 'mouseout' );
						rollover  = createHandler(this, 'rollover' );
						rollout   = createHandler(this, 'rollout'  );

						this.sprite.addEventListener('mouseover', mouseover);
						this.sprite.addEventListener('mouseout',  mouseout );
						this.container.addEventListener('rollover',  rollover );
						this.container.addEventListener('rollout',   rollout  );
					}

					this.removeInputListeners = function(){
						if(this.click || this.touch){
							this.sprite.removeEventListener('mousedown', mousedown);
							this.sprite.removeEventListener('pressmove', pressmove);
							this.sprite.removeEventListener('pressup',   pressup  );
							this.sprite.removeEventListener('click',     click    );
							this.sprite.removeEventListener('dblclick',  dblclick );
						}
						if(this.hover){
							this.sprite.removeEventListener('mouseover', mouseover);
							this.sprite.removeEventListener('mouseout',  mouseout );
							this.container.removeEventListener('rollover',  rollover );
							this.container.removeEventListener('rollout',   rollout  );
						}
					};
				};
			})(),
			
			addPins: function(pins, frames){
				var i = 0,
				j     = 0,
				pin   = null,
				regX  = frames.regX || 0,
				regY  = frames.regY || 0,
				isArray = Array.isArray(frames);
				
				this.pinsToRemove = this.pinsToRemove || [];
				
				this.pins = {};
				
				for (; i < pins.length; i++){
					this.pinsToRemove.push(pins[i].pinId);

					if(isArray){
						regX = (frames[0][5] || 0) / this.imageScaleX;
						regY = (frames[0][6] || 0) / this.imageScaleY;
					}
					
					this.pins[pins[i].pinId] = pin = {
						pinId: pins[i].pinId,
						sprite: this.sprite,
						container: this.container
					};
					if((typeof pins[i].x === 'number') && (typeof pins[i].y === 'number')){
						pin.defaultPin = {
							x: (pins[i].x - regX),
							y: (pins[i].y - regY),
							z: pins[i].z || 0.00000001, //force z to prevent flickering z-order issues.
							angle: (pins[i].angle || 0)
						};
					}
					
					if(pins[i].frames){
						pin.frames = [];
						for (j = 0; j < pins[i].frames.length; j++){
							if(pins[i].frames[j]){
								if(isArray){
									regX = (frames[j][5] || 0) / this.imageScaleX;
									regY = (frames[j][6] || 0) / this.imageScaleY;
								}
								if((typeof pins[i].frames[j].x === 'number') && (typeof pins[i].frames[j].y === 'number')){
									pin.frames.push({
										x: (pins[i].frames[j].x - regX),
										y: (pins[i].frames[j].y - regY),
										z: pins[i].frames[j].z || (pin.defaultPin?pin.defaultPin.z:0.00000001),
										angle: pins[i].frames[j].angle || (pin.defaultPin?pin.defaultPin.angle:0)
									});
								} else if (pin.defaultPin) {
									if(typeof pins[i].frames[j].x === 'number'){
										pin.frames.push({
											x: (pins[i].frames[j].x - regX),
											y: pin.defaultPin.y,
											z: pins[i].frames[j].z || pin.defaultPin.z,
											angle: pins[i].frames[j].angle || pin.defaultPin.angle
										});
									} else if(typeof pins[i].frames[j].y === 'number'){
										pin.frames.push({
											x: pin.defaultPin.x,
											y: (pins[i].frames[j].y - regY),
											z: pins[i].frames[j].z || pin.defaultPin.z,
											angle: pins[i].frames[j].angle || pin.defaultPin.angle
										});
									} else {
										pin.frames.push(null);
									} 
								} else {
									pin.frames.push(null);
	 							}
							} else {
								pin.frames.push(null);
							}
						}
					}
					this.owner.trigger('attach-pin', pin);
				}
			},

			removePins: function(){
				var i = 0;
				
				if(this.pins && this.pinsToRemove){
					for (; i < this.pinsToRemove.length; i++){
						this.owner.trigger('remove-pin', this.pins[this.pinsToRemove[i]].pinId);
						delete this.pins[this.pinsToRemove[i]];
					}
					this.pinsToRemove.length = 0;
				}
			},
			
			setMask: function(shape){
				var mask = new createjs.Shape(),
				gfx      = mask.graphics;
				
				mask.x   = 0;
				mask.y   = 0;
				
				if(typeof shape === 'string'){
					processGraphics(gfx, shape);
				} else {
					if(shape.radius){
						gfx.dc(shape.x || 0, shape.y || 0, shape.radius);
					} else {
						gfx.r(shape.x || 0, shape.y || 0, shape.width || this.owner.width || 0, shape.height || this.owner.height || 0);
					}
				}

				return mask;
			},
			
			setHitArea: (function(){
				var savedHitAreas = {}; //So generated hitAreas are reused across identical entities.
				
				return function(shape){
					var ha = null,
					gfx    = null,
					sav    = '';
					
					if(typeof shape === 'string'){
						sav = shape;
					} else {
						sav = JSON.stringify(shape);
					}
					
					ha = savedHitAreas[sav];

					if(!ha){
						ha   = new createjs.Shape();
						gfx  = ha.graphics;
						ha.x = 0;
						ha.y = 0;

						gfx.beginFill("#000"); // Force the fill.

						if(typeof shape === 'string'){
							processGraphics(gfx, shape);
						} else if(shape.radius){
							gfx.dc(shape.x || 0, shape.y || 0, shape.radius);
						} else {
							gfx.r(shape.x || 0, shape.y || 0, shape.width || this.owner.width || 0, shape.height || this.owner.height || 0);
						}
						
						savedHitAreas[sav] = ha;
					}
					
					return ha;
				};
			})(),
			
			destroy: function(){
				if(this.removeInputListeners){
					this.removeInputListeners();
				}
				if (this.stage){
					this.stage.removeChild(this.container);
					this.stage = undefined;
				}
				this.removePins();
				this.followThroughs = null;
				this.sprite = undefined;
				this.container = undefined;
			}
		}
	});
})();

})();