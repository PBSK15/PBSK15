//MAGNET
function anim_magnet(){
    //##console.log("anim_magnet");

    //hide dragged arms' shoulder, show static shoulders on robot
    if(leftarm.shoulder) leftarm.removeChild(leftarm.shoulder);
    if(rightarm.shoulder) rightarm.removeChild(rightarm.shoulder);

    robot.shoulder_left.visible = true;
    robot.shoulder_right.visible = true;
    robot.addChild(robot.shoulder_left, robot.shoulder_right);


    bgA = new createjs.Bitmap(image['bg_normal']);
    bgA.x = 0; //bgA.x = randomInt(-900,0);
    bgA.alpha = 0;
    bgA.mask = gamemask;
    stage.addChild(bgA);

    bgB = false;

    //stage.addChild(theswitch);
    //stage.addChild(divider1);
    stage.addChild(robot); stage.addChild(palette, palette_divider);
    stage.addChild(george_bottom, divider1);
    stage.addChild(canvasblueborder);

    createjs.Tween.get(bgA, {loop:false})
        .to({alpha:1}, 500, createjs.Ease.none);

    //calls kill level (and goes to next level) after defined time sec.
    if(_isWin) setTimeout(kill_level, 5500);
    else setTimeout(returnto_level, 5000);

    //generic leftarm anim
    if(leftarm.partname=='hand_magnet'){
        createjs.Tween.get(leftarm, {loop:false})
            .to({x:leftarm.x+10, y:leftarm.y-10, rotation:leftarm.rotation+65}, 750, createjs.Ease.none)

        createjs.Tween.get(leftarm.c1, {loop:false})
            .to({rotation:leftarm.c1.rotation+105, y:leftarm.c1.y-2}, 750, createjs.Ease.none)
            .call(function(){
                //create bgloopers
                for(var i=0;i<3;i++){
                    bgloopers[i] = new createjs.Sprite(spritesheet['metalscraps']);
                    bgloopers[i].gotoAndStop(i);
                    bgloopers[i].x = -60;
                    bgloopers[i].y = randomInt(150,170);
                    bgloopers[i].startX = bgloopers[i].x;
                    bgloopers[i].startY = bgloopers[i].y;
                    bgloopers[i].finalX = randomInt(220,230);
                    stage.addChild(bgloopers[i]);
                    tween_metalscrap(bgloopers[i]);
                }
            });
    }
   else if(rightarm.partname=='hand_magnet'){
        createjs.Tween.get(rightarm, {loop:false})
            .to({x:rightarm.x-10, y:rightarm.y-10, rotation:0}, 750, createjs.Ease.none)

        createjs.Tween.get(rightarm.c1, {loop:false})
            .to({rotation:rightarm.c1.rotation+105}, 750, createjs.Ease.none)
            .call(function(){
                //create bgloopers
                for(var i=0;i<3;i++){
                    bgloopers[i] = new createjs.Sprite(spritesheet['metalscraps']);
                    bgloopers[i].gotoAndStop(i);
                    bgloopers[i].x = html5game.width + 60;
                    bgloopers[i].y = randomInt(150,170);
                    bgloopers[i].startX = bgloopers[i].x;
                    bgloopers[i].startY = bgloopers[i].y;
                    bgloopers[i].finalX = randomInt(690,700);
                    stage.addChild(bgloopers[i]);
                    tween_metalscrap(bgloopers[i]);
                }
            });
    }

    if(sandboxCount==0 && choiceIdx==0) playSound('that_robot_can', play_this_sound, 'stick_to_metal_sfx');
    else playSound('and'+(sandIdx%2).toString(), play_this_sound, 'stick_to_metal_sfx');
}


//HAMMER
function anim_hammer(){
    //##console.log("anim_hammer");
    //hide dragged arms' shoulder, show static shoulders on robot

    if(leftarm.shoulder) leftarm.removeChild(leftarm.shoulder);
    if(rightarm.shoulder) rightarm.removeChild(rightarm.shoulder);

    robot.shoulder_left.visible = true;
    robot.shoulder_right.visible = true;
    robot.addChild(robot.shoulder_left, robot.shoulder_right);

    bgA = new createjs.Bitmap(image['bg_normal']);
    bgA.x = 0; //bgA.x = randomInt(-900,0);
    bgA.alpha = 0;
    bgA.mask = gamemask;
    stage.addChild(bgA);

    bgB = false;

    //stage.addChild(theswitch);
    //stage.addChild(divider1);
    stage.addChild(robot); stage.addChild(palette, palette_divider);
    stage.addChild(george_bottom, divider1);
    stage.addChild(canvasblueborder);

    createjs.Tween.get(bgA, {loop:false})
        .to({alpha:1}, 500, createjs.Ease.none);


    var thearm;
    if(leftarm.partname=='hand_hammer') thearm = leftarm;
    else if(rightarm.partname=='hand_hammer') thearm = rightarm;


    extra = new createjs.Container();
    extra.claw = new createjs.Bitmap(image['extra_claw']);
    extra.piece = new createjs.Bitmap(image['extra_nail']);
    extra.addChild(extra.claw);
    extra.addChild(extra.piece);

    extra.piece.x = 113;
    extra.piece.y = 233;
    extra.x = 127;
    extra.y = -300;
    extra.finalY = 15;

    if(rightarm.partname=='hand_hammer'){
        extra.scaleX = -1;
        extra.x = 833;
    }

    stage.addChild(extra);
    stage.addChild(robot);
    stage.addChild(canvasblueborder);

    createjs.Tween.get(extra, {loop:false})
        .to({y:extra.finalY}, 500, createjs.Ease.none)
        .call(function(){

            createjs.Tween.get(thearm.c1, {loop:true})
                .to({rotation:thearm.c1.rotation+22}, 300, createjs.Ease.none)
                .to({rotation:thearm.c1.rotation-10}, 500, createjs.Ease.none)
                .to({rotation:thearm.c1.rotation}, 200, createjs.Ease.none)
        })

    //calls kill level (and goes to next level) after defined time sec.

    //only remove extra piece if it is NOT a win
    if(_isWin) setTimeout(function(){
        //stage.removeChild(extra);
        //extra = null;
        createjs.Tween.removeTweens(thearm.c1);
        kill_level();
    }, 8000);
    else setTimeout(function(){
        stage.removeChild(extra);
        extra = null;
        createjs.Tween.removeTweens(thearm.c1);
        returnto_level();
    }, 7500);


    if(sandboxCount==0 && choiceIdx==0) playSound('that_robot_can', play_this_sound, 'pound_a_nail_sfx');
    else playSound('and'+(sandIdx%2).toString(), play_this_sound, 'pound_a_nail_sfx');

}


//TRUMPET
function anim_trumpet(){
    //##console.log('anim_trumpet');
    //hide dragged arms' shoulder, show static shoulders on robot
    if(leftarm.shoulder) leftarm.removeChild(leftarm.shoulder);
    if(rightarm.shoulder) rightarm.removeChild(rightarm.shoulder);

    robot.shoulder_left.visible = true;
    robot.shoulder_right.visible = true;
    robot.addChild(robot.shoulder_left, robot.shoulder_right);

    bgA = new createjs.Bitmap(image['bg_normal']);
    bgA.x = 0; //bgA.x = randomInt(-900,0);
    bgA.alpha = 0;
    bgA.mask = gamemask;
    stage.addChild(bgA);

    bgB = false;

    //stage.addChild(theswitch);
    //stage.addChild(divider1);
    stage.addChild(robot); stage.addChild(palette, palette_divider);
    stage.addChild(george_bottom, divider1);
    stage.addChild(canvasblueborder);

    createjs.Tween.get(bgA, {loop:false})
        .to({alpha:1}, 500, createjs.Ease.none);


    if(leftarm.partname=='hand_trumpet'){
        robot.addChild(leftarm);
        robot.addChild(robot.shoulder_left, robot.shoulder_right);

        //trumpet leftarm anim
        createjs.Tween.get(leftarm, {loop:false})
            .to({rotation:leftarm.rotation+45}, 500, createjs.Ease.none)

        createjs.Tween.get(leftarm.c1, {loop:false})
            .to({rotation:leftarm.c1.rotation-15}, 750, createjs.Ease.none)
            .call(function(){
                //create bgloopers
                for(var i=0;i<3;i++){
                    bgloopers[i] = new createjs.Sprite(spritesheet['musicnotes']);
                    bgloopers[i].gotoAndStop(i);
                    bgloopers[i].x = 250 + i*20;
                    bgloopers[i].y  = randomInt(110,140);
                    bgloopers[i].startX = bgloopers[i].x;
                    bgloopers[i].startY = bgloopers[i].y;
                    bgloopers[i].alpha = 0;
                    stage.addChild(bgloopers[i]);
                    tween_musicnote(bgloopers[i]);
                }
            });

        createjs.Tween.get(leftarm.c2, {loop:false})
            .to({rotation:leftarm.c2.rotation+15}, 400, createjs.Ease.none)
    }
    else if(rightarm.partname=='hand_trumpet'){
        robot.addChild(rightarm);
        robot.addChild(robot.shoulder_left, robot.shoulder_right);

        //trumpet rightarm anim
        createjs.Tween.get(rightarm, {loop:false})
            .to({rotation:rightarm.rotation-45}, 500, createjs.Ease.none)

        createjs.Tween.get(rightarm.c1, {loop:false})
            .to({rotation:rightarm.c1.rotation-15}, 750, createjs.Ease.none)
            .call(function(){
                //create bgloopers
                for(var i=0;i<3;i++){
                    bgloopers[i] = new createjs.Sprite(spritesheet['musicnotes']);
                    bgloopers[i].gotoAndStop(i);
                    bgloopers[i].x = 700 - i*20;
                    bgloopers[i].y  = randomInt(110,140);
                    bgloopers[i].startX = bgloopers[i].x;
                    bgloopers[i].startY = bgloopers[i].y;
                    bgloopers[i].alpha = 0;
                    stage.addChild(bgloopers[i]);
                    tween_musicnote(bgloopers[i]);
                }
            });

        createjs.Tween.get(rightarm.c2, {loop:false})
            .to({rotation:rightarm.c2.rotation+15}, 400, createjs.Ease.none)
    }


    if(sandboxCount==0 && choiceIdx==0) playSound('that_robot_can', play_this_sound, 'play_music_sfx');
    else playSound('and'+(sandIdx%2).toString(), play_this_sound, 'play_music_sfx');


    //calls kill level (and goes to next level) after defined time sec.
    if(_isWin) setTimeout(kill_level, 6500);
    else setTimeout(returnto_level, 5500);
}


//TOOTHBRUSH
function anim_toothbrush(){
    //##console.log('anim_toothbrush');
    //hide dragged arms' shoulder, show static shoulders on robot
    if(leftarm.shoulder) leftarm.removeChild(leftarm.shoulder);
    if(rightarm.shoulder) rightarm.removeChild(rightarm.shoulder);

    robot.shoulder_left.visible = true;
    robot.shoulder_right.visible = true;
    robot.addChild(robot.shoulder_left, robot.shoulder_right);

    bgA = new createjs.Bitmap(image['bg_normal']);
    bgA.x = 0; //bgA.x = randomInt(-900,0);
    bgA.alpha = 0;
    bgA.mask = gamemask;
    stage.addChild(bgA);

    bgB = false;

    //stage.addChild(theswitch);
    //stage.addChild(divider1);
    stage.addChild(robot); stage.addChild(palette, palette_divider);
    stage.addChild(george_bottom, divider1);
    stage.addChild(canvasblueborder);

    createjs.Tween.get(bgA, {loop:false})
        .to({alpha:1}, 500, createjs.Ease.none);



    if(leftarm.partname=='hand_toothbrush'){
        robot.addChild(leftarm);
        robot.addChild(robot.shoulder_left, robot.shoulder_right);

        //toothbrush leftarm anim
        createjs.Tween.get(leftarm, {loop:false})
            .to({
                x:208,
                y:200,
                rotation:30
            }, 500, createjs.Ease.none)


        createjs.Tween.get(leftarm.c1, {loop:false})
            .to({rotation:-138}, 750, createjs.Ease.none)
            .call(function(){
                toothbrushAnimate(leftarm.hand);
            });

    }
    else if(rightarm.partname=='hand_toothbrush'){
        robot.addChild(rightarm);
        robot.addChild(robot.shoulder_left, robot.shoulder_right);

        createjs.Tween.get(rightarm, {loop:false})
            .to({
                x:353,
                y:203,
                rotation:-30
            }, 500, createjs.Ease.none)


        createjs.Tween.get(rightarm.c1, {loop:false})
            .to({rotation:-136}, 750, createjs.Ease.none)
            .call(function(){
                toothbrushAnimate(rightarm.hand);
            });

    }

    //calls kill level (and goes to next level) after defined time sec.
    if(_isWin) setTimeout(kill_level, 6000);
    else setTimeout(returnto_level, 6000);

    if(sandboxCount==0 && choiceIdx==0) playSound('that_robot_can', play_this_sound, 'brush_teeth_sfx');
    else playSound('and'+(sandIdx%2).toString(), play_this_sound, 'brush_teeth_sfx');


}


//FLASHLIGHT
function anim_flashlight(){
    //##console.log('anim_flashlight');
    //hide dragged arms' shoulder, show static shoulders on robot
    if(leftarm.shoulder) leftarm.removeChild(leftarm.shoulder);
    if(rightarm.shoulder) rightarm.removeChild(rightarm.shoulder);

    robot.shoulder_left.visible = true;
    robot.shoulder_right.visible = true;
    robot.addChild(robot.shoulder_left, robot.shoulder_right);

    bgA = new createjs.Bitmap(image['bg_normal']);
    bgA.x = 0; //bgA.x = randomInt(-900,0);
    bgA.alpha = 0;
    bgA.mask = gamemask;
    stage.addChild(bgA);

    //black transparent bg for darkening
    bgB = new createjs.Shape();
    bgB.graphics.beginFill("black").drawRect(0,0, html5game.width, html5game.height);
    bgB.mask = gamemask;
    bgB.alpha = 0;
    stage.addChild(bgB);


    //stage.addChild(theswitch);
    //stage.addChild(divider1);
    stage.addChild(robot); stage.addChild(palette, palette_divider);
    stage.addChild(george_bottom, divider1);
    stage.addChild(canvasblueborder);

    createjs.Tween.get(bgA, {loop:false})
        .to({alpha:1}, 500, createjs.Ease.none);
    createjs.Tween.get(bgB, {loop:false})
        .to({alpha:0.6}, 500, createjs.Ease.none);


    var thearm;
    if(leftarm.partname=='hand_flashlight'){
        thearm = leftarm;
        //toothbrush leftarm anim
        createjs.Tween.get(leftarm, {loop:false})
            .to({
                x:208,
                y:200,
                rotation:30
            }, 500, createjs.Ease.none)


        createjs.Tween.get(leftarm.c1, {loop:false})
            .to({rotation:-55}, 750, createjs.Ease.none)
            .call(function(){
                leftarm.hand.gotoAndPlay("on")
            });

    }
    else if(rightarm.partname=='hand_flashlight'){
        thearm = rightarm;
        createjs.Tween.get(rightarm, {loop:false})
            .to({
                x:353,
                y:203,
                rotation:-30
            }, 500, createjs.Ease.none)


        createjs.Tween.get(rightarm.c1, {loop:false})
            .to({rotation:-55}, 750, createjs.Ease.none)
            .call(function(){
                rightarm.hand.gotoAndPlay("on")
            });
    }


    //calls kill level (and goes to next level) after defined time sec.
    if(_isWin) setTimeout(function(){
        thearm.hand.gotoAndStop(0);
        kill_level();
    }, 6000);
    else setTimeout(function(){
        thearm.hand.gotoAndStop(0);
        returnto_level();
    }, 6000);


    if(sandboxCount==0 && choiceIdx==0) playSound('that_robot_can', play_this_sound, 'help_you_see_in_the_dark');
    else playSound('and'+(sandIdx%2).toString(), play_this_sound, 'help_you_see_in_the_dark');

}



//WALK  (also acting as 'generic' anim for legs)
function anim_walk(){
    //##console.log('anim_walk');
    //hide dragged legs' topbones, show static topbones on robot
    legs.leftleg.removeChild(legs.leftleg.topbone);
    legs.rightleg.removeChild(legs.rightleg.topbone);

    robot.topbone_left.visible = true;
    robot.topbone_right.visible = true;
    robot.addChild(robot.topbone_left, robot.topbone_right);

    bgA = new createjs.Bitmap(image['bg_normal']);
    bgB = bgA.clone();
    bgB.x = bgA.x + bgA.image.width;
    bgA.alpha = 0;
    bgB.alpha = 0;
    bgA.mask = gamemask;
    bgB.mask = gamemask;
    stage.addChild(bgA,bgB);

    bgA.cache(0,0, bgA.image.width,bgA.image.height);
    bgB.cache(0,0, bgB.image.width,bgB.image.height);

    //stage.addChild(theswitch);
    //stage.addChild(divider1);
    stage.addChild(robot); stage.addChild(palette, palette_divider);
    stage.addChild(george_bottom, divider1);
    stage.addChild(canvasblueborder);

    createjs.Tween.get(bgA, {loop:false})
        .to({alpha:1}, 500, createjs.Ease.none);
    createjs.Tween.get(bgB, {loop:false})
        .to({alpha:1}, 500, createjs.Ease.none);

    //calls kill level (and goes to next level) after defined time sec.
    if(_isWin) setTimeout(kill_level, 6000);
    else setTimeout(returnto_level, 6000);

    /*
    //for rotations
    bp.leftleg is the thigh + calf + foot
    bp.leftleg.c1 is the calf + foot
    bp.leftleg.c2 is the foot
    */

    //start walking
    stepMS = 250;
    bgMS = 4500;
    repeat_bg_left();

    //tween to initial rotation
    createjs.Tween.get(legs.leftleg, {loop:false})
        .to({rotation:legs.leftleg.startR+20}, stepMS, createjs.Ease.none)

    createjs.Tween.get(legs.rightleg, {loop:false})
        .to({rotation:legs.rightleg.startR-20}, stepMS, createjs.Ease.none)
        .call(walkAnimate);


    if(sandboxCount==0 && choiceIdx==0) playSound('that_robot_can', play_this_sound, 'walk_sfx');
    else playSound('and'+(sandIdx%2).toString(), play_this_sound, 'walk_sfx');

}



//SKATEBOARD
function anim_skateboard(){
    //##console.log('anim_skateboard');
    //hide dragged legs' topbones, show static topbones on robot
    legs.leftleg.removeChild(legs.leftleg.topbone);
    legs.rightleg.removeChild(legs.rightleg.topbone);

    robot.topbone_left.visible = true;
    robot.topbone_right.visible = true;
    robot.addChild(robot.topbone_left, robot.topbone_right);

    bgA = new createjs.Bitmap(image['bg_normal']);
    bgB = bgA.clone();
    bgB.x = bgA.x + bgA.image.width;
    bgA.alpha = 0;
    bgB.alpha = 0;
    bgA.mask = gamemask;
    bgB.mask = gamemask;
    stage.addChild(bgA,bgB);

    bgA.cache(0,0, bgA.image.width,bgA.image.height);
    bgB.cache(0,0, bgB.image.width,bgB.image.height);

    //stage.addChild(theswitch);
    //stage.addChild(divider1);
    stage.addChild(robot); stage.addChild(palette, palette_divider);
    stage.addChild(george_bottom, divider1);
    stage.addChild(canvasblueborder);

    createjs.Tween.get(bgA, {loop:false})
        .to({alpha:1}, 500, createjs.Ease.none);
    createjs.Tween.get(bgB, {loop:false})
        .to({alpha:1}, 500, createjs.Ease.none);


    //calls kill level (and goes to next level) after defined time sec.
    if(_isWin) setTimeout(kill_level, 8000);
    else setTimeout(returnto_level, 8000);

    /*
    //for rotations
    bp.leftleg is the thigh + calf + foot
    bp.leftleg.c1 is the calf + foot
    bp.leftleg.c2 is the foot
    */

    //start walking
    stepMS = 400;
    bgMS = 4500;

    //tween to initial rotation
    createjs.Tween.get(legs.leftleg, {loop:false})
        .to({rotation:legs.leftleg.startR-15}, stepMS, createjs.Ease.none)

    createjs.Tween.get(legs.leftleg.c1, {loop:false})
        .to({
            x:legs.leftleg.c1.x+1,
            y:legs.leftleg.c1.y+12,
            rotation:legs.leftleg.c1.startR+15

        }, stepMS, createjs.Ease.none)

    createjs.Tween.get(legs.rightleg, {loop:false})
        .to({rotation:legs.rightleg.startR-17}, stepMS, createjs.Ease.none)

    createjs.Tween.get(legs.rightleg.c1, {loop:false})
        .to({rotation:legs.rightleg.c1.startR+15}, stepMS, createjs.Ease.none)
        .call(function(){
            repeat_bg_left();
            skateboardAnimate();
        });


    if(sandboxCount==0 && choiceIdx==0) playSound('that_robot_can', play_this_sound, 'skateboard');
    else playSound('and'+(sandIdx%2).toString(), play_this_sound, 'skateboard');

}

//SNOWSHOE
function anim_snowshoe(){
    //##console.log('anim_snowshoe');
    //hide dragged legs' topbones, show static topbones on robot
    legs.leftleg.removeChild(legs.leftleg.topbone);
    legs.rightleg.removeChild(legs.rightleg.topbone);

    robot.topbone_left.visible = true;
    robot.topbone_right.visible = true;
    robot.addChild(robot.topbone_left, robot.topbone_right);


    //used for masking
    staticbg = new createjs.Shape();
    //staticbg.alpha = 0.4;
    staticbg.graphics.beginFill("red").drawRect(0,0, 200, 300);
    staticbg.x = 190;
    staticbg.y = 305;
    legs.mask = staticbg;

    bgA = new createjs.Bitmap(image['bg_snow']);
    bgB = bgA.clone();
    bgB.x = bgA.x + bgA.image.width;
    bgA.alpha = 0;
    bgB.alpha = 0;
    bgA.mask = gamemask;
    bgB.mask = gamemask;
    stage.addChild(bgA,bgB);

    bgA.cache(0,0, bgA.image.width,bgA.image.height);
    bgB.cache(0,0, bgB.image.width,bgB.image.height);

    //stage.addChild(theswitch);
    //stage.addChild(divider1);
    stage.addChild(robot); stage.addChild(palette, palette_divider);
    stage.addChild(george_bottom, divider1);
    stage.addChild(canvasblueborder);


    //robot.addChild(staticbg)
    createjs.Tween.get(bgA, {loop:false})
        .to({alpha:1}, 500, createjs.Ease.none);
    createjs.Tween.get(bgB, {loop:false})
        .to({alpha:1}, 500, createjs.Ease.none);

    legs.leftleg.startY = legs.leftleg.y;
    legs.rightleg.startY = legs.rightleg.y;

    //start walking
    stepMS = 400;
    bgMS = 20000;
    repeat_bg_left();

    snowshoeAnimate();


    //calls kill level (and goes to next level) after defined time sec.
    if(_isWin) setTimeout(kill_level, 8000);
    else setTimeout(function(){
        legs.leftleg.y = legs.leftleg.startY;
        legs.rightleg.y = legs.rightleg.startY;
        legs.mask = null;
        returnto_level();
    }, 8000);


    if(sandboxCount==0 && choiceIdx==0) playSound('that_robot_can', play_this_sound, 'walk_on_snow');
    else playSound('and'+(sandIdx%2).toString(), play_this_sound, 'walk_on_snow');

}


//SKI
function anim_ski(){
    //##console.log('anim_snowshoe');
    //hide dragged legs' topbones, show static topbones on robot
    legs.leftleg.removeChild(legs.leftleg.topbone);
    legs.rightleg.removeChild(legs.rightleg.topbone);

    robot.topbone_left.visible = true;
    robot.topbone_right.visible = true;
    robot.addChild(robot.topbone_left, robot.topbone_right);

    bgA = new createjs.Bitmap(image['bg_ski']);
    bgB = bgA.clone();
    //bgB.x = bgA.x + bgA.image.width;
    bgA.y=0;
    bgB.y=bgB.image.height;
    bgA.alpha = 0;
    bgB.alpha = 0;
    bgA.mask = gamemask;
    bgB.mask = gamemask;
    stage.addChild(bgA,bgB);

    bgA.cache(0,0, bgA.image.width,bgA.image.height);
    bgB.cache(0,0, bgB.image.width,bgB.image.height);

    //stage.addChild(theswitch);
    //stage.addChild(divider1);
    stage.addChild(robot); stage.addChild(palette, palette_divider);
    stage.addChild(george_bottom, divider1);
    stage.addChild(canvasblueborder);


    //robot.addChild(staticbg)
    createjs.Tween.get(bgA, {loop:false})
        .to({alpha:1}, 500, createjs.Ease.none);
    createjs.Tween.get(bgB, {loop:false})
        .to({alpha:1}, 500, createjs.Ease.none);

    legs.leftleg.startY = legs.leftleg.y;
    legs.rightleg.startY = legs.rightleg.y;

    //start walking
    stepMS = 400;
    bgMS = 2000;
    repeat_bg_down();

    //snowshoeAnimate();
    skiAnimate();

    //calls kill level (and goes to next level) after defined time sec.
    if(_isWin) setTimeout(function(){
        clearTimeout(to);
        kill_level();
    }, 8000);
    else setTimeout(function(){
        clearTimeout(to);
        robot.scaleX = 1;
        robot.x=200;
        robot.y=0;
        robot.rotation=0;
        returnto_level();
    }, 8000);


    if(sandboxCount==0 && choiceIdx==0) playSound('that_robot_can', play_this_sound, 'slide_down_snow');
    else playSound('and'+(sandIdx%2).toString(), play_this_sound, 'slide_down_snow');

}



//WHEEL (being used?)
function anim_wheel(){
    //##console.log('anim_wheel');
    //hide dragged legs' topbones, show static topbones on robot
    legs.leftleg.removeChild(legs.leftleg.topbone);
    legs.rightleg.removeChild(legs.rightleg.topbone);

    robot.topbone_left.visible = true;
    robot.topbone_right.visible = true;
    robot.addChild(robot.topbone_left, robot.topbone_right);


    bgA = new createjs.Bitmap(image['bg_normal']);
    bgB = bgA.clone();
    bgB.x = bgA.x + bgA.image.width;
    bgA.alpha = 0;
    bgB.alpha = 0;
    bgA.mask = gamemask;
    bgB.mask = gamemask;
    stage.addChild(bgA,bgB);

    bgA.cache(0,0, bgA.image.width,bgA.image.height);
    bgB.cache(0,0, bgB.image.width,bgB.image.height);

    //stage.addChild(theswitch);
    //stage.addChild(divider1);
    stage.addChild(robot); stage.addChild(palette, palette_divider);
    stage.addChild(george_bottom, divider1);
    stage.addChild(canvasblueborder);

    createjs.Tween.get(bgA, {loop:false})
        .to({alpha:1}, 500, createjs.Ease.none);
    createjs.Tween.get(bgB, {loop:false})
        .to({alpha:1}, 500, createjs.Ease.none);

    //calls kill level (and goes to next level) after defined time sec.
    if(_isWin) setTimeout(kill_level, 6000);
    else setTimeout(returnto_level, 6000);

    /*
    //for rotations
    bp.leftleg is the thigh + calf + foot
    bp.leftleg.c1 is the calf + foot
    bp.leftleg.c2 is the foot
    */

    //start grass repeating
    stepMS = 250;
    bgMS = 4500;
    repeat_bg_left();

    //playSound('that_robot_can', play_this_sound, 'slide_down_snow');
}


//JET
function anim_jet(){
    //##console.log("anim_jet");
    //creating static bg, layering amongst stage children, fading in
    staticbg = new createjs.Bitmap(image['sky']);
    staticbg.mask = gamemask;
    staticbg.alpha = 0;
    stage.addChild(staticbg);

    bgA = false;
    bgB = false;

    for(var i=0;i<5;i++){
        var r = randomInt(1,4);
        var cname = 'cloud' + r.toString();
        bgloopers[i] = new createjs.Bitmap(image[cname])

        bgloopers[i].x = randomInt(-70,800);
        bgloopers[i].y  = randomInt(-50,450);
        bgloopers[i].startX = bgloopers[i].x;
        bgloopers[i].startY = bgloopers[i].y;
        bgloopers[i].alpha = randomNum(0.75,1.0);
        stage.addChild(bgloopers[i]);
        tween_cloud(bgloopers[i], true);
    }

    //stage.addChild(theswitch);
    //stage.addChild(divider1);
    stage.addChild(robot); stage.addChild(palette, palette_divider);
    stage.addChild(george_bottom, divider1);
    stage.addChild(canvasblueborder);

    createjs.Tween.get(staticbg, {loop:false})
        .to({alpha:1}, 500, createjs.Ease.none);

    createjs.Tween.get(robot, {loop:false})
        .to({rotation:robot.rotation+15, x:robot.x+70, y:robot.y-50} , 500, createjs.Ease.none);

    legs.jet.gotoAndPlay('fly')


    //calls kill level (and goes to next level) after defined time sec.
    if(_isWin) setTimeout(kill_level, 6500);
    else setTimeout(function(){
        legs.jet.gotoAndStop(0);
        createjs.Tween.get(robot, {loop:false})
            .to({rotation:robot.rotation-15, x:robot.x-70, y:robot.y+50} , 500, createjs.Ease.none)
            .call(returnto_level);
    }, 6000);


    if(sandboxCount==0 && choiceIdx==0) playSound('that_robot_can', play_this_sound, 'jet_sfx');
    else playSound('and'+(sandIdx%2).toString(), play_this_sound, 'jet_sfx');

}



//PROPELLOR
function anim_propellor(){
    //##console.log("anim_propellor");
    //creating static bg, layering amongst stage children, fading in
        //staticbg = new createjs.Shape();
        //staticbg.graphics.beginFill("#8ee1ff").drawRect(0,0, html5game.width, html5game.height);
    staticbg = new createjs.Bitmap(image['sky']);
    staticbg.mask = gamemask;
    staticbg.alpha = 0;
    stage.addChild(staticbg);

    bgA = false;
    bgB = false;

    for(var i=0;i<5;i++){
        var r = randomInt(1,4);
        var cname = 'cloud' + r.toString();
        bgloopers[i] = new createjs.Bitmap(image[cname])

        bgloopers[i].x = randomInt(-70,800);
        bgloopers[i].y  = randomInt(-50,450);
        bgloopers[i].startX = bgloopers[i].x;
        bgloopers[i].startY = bgloopers[i].y;
        bgloopers[i].alpha = randomNum(0.75,1.0);
        stage.addChild(bgloopers[i]);
        tween_cloud(bgloopers[i]);
    }

    //stage.addChild(theswitch);
    //stage.addChild(divider1);
    stage.addChild(robot); stage.addChild(palette, palette_divider);
    stage.addChild(george_bottom, divider1);
    stage.addChild(canvasblueborder);

    createjs.Tween.get(staticbg, {loop:false})
        .to({alpha:1}, 500, createjs.Ease.none);

    createjs.Tween.get(robot, {loop:false})
        .to({
            //rotation:robot.rotation+15,
            //x:robot.x+70,
            //y:robot.y-50
        } , 500, createjs.Ease.none);

    head.appendage.gotoAndPlay('loop')


    //calls kill level (and goes to next level) after defined time sec.
    if(_isWin) setTimeout(kill_level, 8000);
    else setTimeout(function(){
        head.appendage.gotoAndStop(2);
        returnto_level();
    }, 7000);


    if(sandboxCount==0 && choiceIdx==0) playSound('that_robot_can', play_this_sound, 'propellor_sfx');
    else playSound('and'+(sandIdx%2).toString(), play_this_sound, 'propellor_sfx');

}


//UMBRELLA
function anim_umbrella(){
    //##console.log("anim_umbrella");

    bgA = new createjs.Bitmap(image['bg_normal']);
    bgA.x = 0; //bgA.x = randomInt(-900,0);
    bgA.alpha = 0;
    bgA.mask = gamemask;
    stage.addChild(bgA);


    //black transparent bg for darkening
    bgB = new createjs.Shape();
    bgB.graphics.beginFill("black").drawRect(0,0, html5game.width, html5game.height);
    bgB.mask = gamemask;
    bgB.alpha = 0;
    stage.addChild(bgB);


    //stage.addChild(theswitch);
    //stage.addChild(divider1);
    stage.addChild(robot); stage.addChild(palette, palette_divider);


    //rain = new createjs.Bitmap(image['rain'])
    rain = new createjs.Sprite(spritesheet['rain']);
    rain.scaleX = rain.scaleY = 2.0;
    rain.x = 900;
    rain.gotoAndPlay('loop');
    stage.addChild(rain);

    stage.addChild(george_bottom, divider1);
    stage.addChild(canvasblueborder);

    createjs.Tween.get(bgA, {loop:false})
        .to({alpha:1}, 500, createjs.Ease.none);
    createjs.Tween.get(bgB, {loop:false})
        .to({alpha:0.4}, 500, createjs.Ease.none);


    //calls kill level (and goes to next level) after defined time sec.
    if(_isWin) setTimeout(function(){
        rain.stop();
        stage.removeChild(rain);
        rain = null;

        kill_level();
    }, 8000);
    else setTimeout(function(){
        createjs.Tween.get(rain, {loop:false})
            .to({alpha:0} , 500, createjs.Ease.none)
            .call(function(){
                    rain.stop();
                    stage.removeChild(rain);
                    rain = null;
                    returnto_level();
            });
    }, 6000);


    if(sandboxCount==0 && choiceIdx==0) playSound('that_robot_can', play_this_sound, 'stay_dry_sfx');
    else playSound('and'+(sandIdx%2).toString(), play_this_sound, 'stay_dry_sfx');

}



//KITE
function anim_kite(){
    //##console.log('anim_kite');

    bgA = new createjs.Bitmap(image['bg_normal']);
    bgA.x = 0; //bgA.x = randomInt(-900,0);
    bgA.alpha = 0;
    bgA.mask = gamemask;
    stage.addChild(bgA);

    bgB = false;

    //stage.addChild(theswitch);
    //stage.addChild(divider1);
    stage.addChild(robot); stage.addChild(palette, palette_divider);

    stage.addChild(george_bottom, divider1);
    stage.addChild(canvasblueborder);

    createjs.Tween.get(bgA, {loop:false})
        .to({alpha:1}, 500, createjs.Ease.none);


    //kite stuff
    createjs.Tween.get(head.top2.maskshape, {loop:false})
        .wait(500)
        .to({x:head.top2.maskshape.finalX}, 500, createjs.Ease.none);

    createjs.Tween.get(head.kite, {loop:false})
        .wait(500)
        .to({x:head.kite.finalX, y:head.kite.finalY}, 500, createjs.Ease.none)
        .call(kiteAnimate);


    //
    //calls kill level (and goes to next level) after defined time sec.
    if(_isWin) setTimeout(function(){
        kill_level();
    }, 8000);
    else setTimeout(function(){
        head.top2.maskshape.x = head.top2.maskshape.startX;
        head.kite.x = head.kite.startX;
        head.kite.y = head.kite.startY;

        returnto_level();
    }, 6000);


    if(sandboxCount==0 && choiceIdx==0) playSound('that_robot_can', play_this_sound, 'fly_a_kite');
    else playSound('and'+(sandIdx%2).toString(), play_this_sound, 'fly_a_kite');

}


//MAGNIFYING GLASS
function anim_magglass(){
    //##console.log('anim_magglass');

    bgA = new createjs.Bitmap(image['bg_normal']);
    bgA.x = 0; //bgA.x = randomInt(-900,0);
    bgA.alpha = 0;
    bgA.mask = gamemask;
    stage.addChild(bgA);

    bgB = false;

    //stage.addChild(theswitch);
    //stage.addChild(divider1);
    stage.addChild(robot); stage.addChild(palette, palette_divider);

    stage.addChild(george_bottom, divider1);
    stage.addChild(canvasblueborder);

    createjs.Tween.get(bgA, {loop:false})
        .to({alpha:1}, 500, createjs.Ease.none);


    extra = new createjs.Container();
    extra.claw = new createjs.Bitmap(image['extra_claw']);
    extra.piece = new createjs.Bitmap(image['extra_plate_ant']);
    extra.addChild(extra.claw);
    extra.addChild(extra.piece);

    extra.piece.x = 113;
    extra.piece.y = 256;
    extra.x = 100;
    extra.y = -300;
    extra.finalY = -110;

    stage.addChild(extra);
    stage.addChild(robot);
    stage.addChild(canvasblueborder);


    createjs.Tween.get(extra, {loop:false})
        .to({y:extra.finalY}, 500, createjs.Ease.none)
        .call(function(){
            //magglass stuff
            head.magglass.gotoAndPlay('forward');
        });

    //
    //calls kill level (and goes to next level) after defined time sec.
    if(_isWin) setTimeout(function(){
        stage.removeChild(extra); extra = null;
        head.magglass.gotoAndPlay('reverse');
        kill_level();
    }, 6000);
    else setTimeout(function(){
        stage.removeChild(extra); extra = null;
        head.magglass.gotoAndPlay('reverse');
        returnto_level();
    }, 6000);


    if(sandboxCount==0 && choiceIdx==0) playSound('that_robot_can', play_this_sound, 'make_things_look_bigger');
    else playSound('and'+(sandIdx%2).toString(), play_this_sound, 'make_things_look_bigger');

}


//TELESCOPE
function anim_telescope(){
    //##console.log('anim_telescope');

    bgA = new createjs.Bitmap(image['bg_normal']);
    bgA.x = 0; //bgA.x = randomInt(-900,0);
    bgA.alpha = 0;
    bgA.mask = gamemask;
    stage.addChild(bgA);

    bgB = false;

    //stage.addChild(theswitch);
    //stage.addChild(divider1);
    stage.addChild(robot); stage.addChild(palette, palette_divider);

    stage.addChild(george_bottom, divider1);
    stage.addChild(canvasblueborder);

    createjs.Tween.get(bgA, {loop:false})
        .to({alpha:1}, 500, createjs.Ease.none)
        .call(function(){
            //telescope stuff
            head.telescope.gotoAndPlay('forward');
        });

    //
    //calls kill level (and goes to next level) after defined time sec.
    if(_isWin) setTimeout(function(){

        head.telescope.gotoAndPlay('reverse');
        kill_level();
    }, 6000);
    else setTimeout(function(){

        head.telescope.gotoAndPlay('reverse');
        returnto_level();
    }, 6000);


    if(sandboxCount==0 && choiceIdx==0) playSound('that_robot_can', play_this_sound, 'see_far_away');
    else playSound('and'+(sandIdx%2).toString(), play_this_sound, 'see_far_away');

}


//LAMP
function anim_lamp(){
    //##console.log('anim_lamp');

    bgA = new createjs.Bitmap(image['bg_normal']);
    bgA.x = 0; //bgA.x = randomInt(-900,0);
    bgA.alpha = 0;
    bgA.mask = gamemask;
    stage.addChild(bgA);

    //black transparent bg for darkening
    bgB = new createjs.Shape();
    bgB.graphics.beginFill("black").drawRect(0,0, html5game.width, html5game.height);
    bgB.mask = gamemask;
    bgB.alpha = 0;
    stage.addChild(bgB);


    //stage.addChild(theswitch);
    //stage.addChild(divider1);
    stage.addChild(robot); stage.addChild(palette, palette_divider);

    stage.addChild(george_bottom, divider1);
    stage.addChild(canvasblueborder);

    createjs.Tween.get(bgA, {loop:false})
        .to({alpha:1}, 500, createjs.Ease.none)
        .call(function(){
            //lamp stuff
            head.lamp.gotoAndPlay('forward');
        });

    createjs.Tween.get(bgB, {loop:false})
        .to({alpha:0.6}, 500, createjs.Ease.none)

    //
    //calls kill level (and goes to next level) after defined time sec.
    if(_isWin) setTimeout(function(){

        head.lamp.gotoAndPlay('reverse');
        kill_level();
    }, 6500);
    else setTimeout(function(){

        head.lamp.gotoAndPlay('reverse');
        returnto_level();
    }, 6000);


    if(sandboxCount==0 && choiceIdx==0) playSound('that_robot_can', play_this_sound, 'light_up_the_room');
    else playSound('and'+(sandIdx%2).toString(), play_this_sound, 'light_up_the_room');

}

//BASEBALL
function anim_baseball(){
    //##console.log('anim_baseball');

    //hide dragged arms' shoulder, show static shoulders on robot
    if(leftarm.shoulder) leftarm.removeChild(leftarm.shoulder);
    if(rightarm.shoulder) rightarm.removeChild(rightarm.shoulder);

    robot.shoulder_left.visible = true;
    robot.shoulder_right.visible = true;
    robot.addChild(robot.shoulder_left, robot.shoulder_right);

    bgA = new createjs.Bitmap(image['bg_normal']);
    bgA.x = 0; //bgA.x = randomInt(-900,0);
    bgA.alpha = 0;
    bgA.mask = gamemask;
    stage.addChild(bgA);

    bgB = false;

    //stage.addChild(theswitch);
    //stage.addChild(divider1);
    stage.addChild(robot); stage.addChild(palette, palette_divider);
    stage.addChild(george_bottom, divider1);
    stage.addChild(canvasblueborder);

    createjs.Tween.get(bgA, {loop:false})
        .to({alpha:1}, 500, createjs.Ease.none);


    //var thearm;
    if(leftarm.partname=='hand_baseball'){

        //baseball leftarm anim
        //create baseball (in bgloopers b/c it is cleared on kill_level)
        bgloopers[0] = new createjs.Bitmap(image['baseball']);
        bgloopers[0].x = 350;
        bgloopers[0].y  = -60;
        bgloopers[0].finalX = 289;
        bgloopers[0].finalY = 108;
        var baseball = bgloopers[0];
        stage.addChild(bgloopers[0]);

        createjs.Tween.get(leftarm, {loop:false})
            .to({x:leftarm.x+7, y:leftarm.y-5, rotation:leftarm.rotation+77}, 750, createjs.Ease.none)

        createjs.Tween.get(leftarm.c1, {loop:false})
            .to({rotation:leftarm.c1.rotation+75}, 750, createjs.Ease.none)

        createjs.Tween.get(baseball, {loop:false})
            //.wait(350)
            .wait(2000)
            .to({x:baseball.finalX, y:baseball.finalY}, 350, createjs.Ease.none)

    }
    else if(rightarm.partname=='hand_baseball'){
        //baseball rightarm anim

        //create baseball (in bgloopers b/c it is cleared on kill_level)
            bgloopers[0] = new createjs.Bitmap(image['baseball']);
            bgloopers[0].x = 700;
            bgloopers[0].y  = -60;
            bgloopers[0].finalX = 642;
            bgloopers[0].finalY = 112;
            var baseball = bgloopers[0];
            stage.addChild(bgloopers[0]);

        createjs.Tween.get(rightarm, {loop:false})
            .to({x:rightarm.x-7, y:rightarm.y-5, rotation:rightarm.rotation-77}, 750, createjs.Ease.none)

        createjs.Tween.get(rightarm.c1, {loop:false})
            .to({rotation:rightarm.c1.rotation+75}, 750, createjs.Ease.none)

        createjs.Tween.get(baseball, {loop:false})
            //.wait(350)
            .wait(2000)
            .to({x:baseball.finalX, y:baseball.finalY}, 350, createjs.Ease.none)
    }



    //calls kill level (and goes to next level) after defined time sec.
    if(_isWin) setTimeout(kill_level, 6500);
    else setTimeout(returnto_level, 4500);

    if(sandboxCount==0 && choiceIdx==0) playSound('that_robot_can', play_this_sound, 'catch_a_ball_sfx');
    else playSound('and'+(sandIdx%2).toString(), play_this_sound, 'catch_a_ball_sfx');

}


//ROLLERSKATE
function anim_rollerskate(){
    //##console.log('anim_rollerskate')
    //hide dragged legs' topbones, show static topbones on robot
    legs.leftleg.removeChild(legs.leftleg.topbone);
    legs.rightleg.removeChild(legs.rightleg.topbone);

    robot.topbone_left.visible = true;
    robot.topbone_right.visible = true;
    robot.addChild(robot.topbone_left, robot.topbone_right);


    bgA = new createjs.Bitmap(image['bg_normal']);
    bgB = bgA.clone();
    ////bgA.y = html5game.height - bgA.image.height;
    //bgB.y = bgA.y;
    bgB.x = bgA.x + bgA.image.width;
    bgA.alpha = 0;
    bgB.alpha = 0;
    bgA.mask = gamemask;
    bgB.mask = gamemask;
    stage.addChild(bgA,bgB);


    //stage.addChild(theswitch);
    //stage.addChild(divider1);
    stage.addChild(robot); stage.addChild(palette, palette_divider);
    stage.addChild(george_bottom, divider1);
    stage.addChild(canvasblueborder);

    createjs.Tween.get(bgA, {loop:false})
        .to({alpha:1}, 500, createjs.Ease.none);
    createjs.Tween.get(bgB, {loop:false})
        .to({alpha:1}, 500, createjs.Ease.none);

    //calls kill level (and goes to next level) after defined time sec.
    if(_isWin) setTimeout(kill_level, 6000);
    else setTimeout(returnto_level, 6000);

    //start walking
    stepMS = 500;
    bgMS = 3200;
    repeat_bg_left();

    rollerskateAnimate();

    if(sandboxCount==0 && choiceIdx==0) playSound('that_robot_can', play_this_sound, 'rollerskate');
    else playSound('and'+(sandIdx%2).toString(), play_this_sound, 'rollerskate');

}


//##############
//additional anim functions
function toothbrushAnimate(toothbrush){
    var ts = 30//100;

    createjs.Tween.get(toothbrush, {loop:true})
        .to({x:10}, ts*4, createjs.Ease.none)
        .wait(ts*2)
        .to({x:-15}, ts*8, createjs.Ease.none)
        .wait(ts*2)
        .to({x:toothbrush.x}, ts*4, createjs.Ease.none)

}

//variable speed,, based on stepMS
function walkAnimate(){
    createjs.Tween.get(legs.leftleg, {loop:true})
        //.to({rotation:legs.leftleg.startR+20}, stepMS, createjs.Ease.none)
        .to({rotation:legs.leftleg.startR-15}, stepMS, createjs.Ease.none)
        .to({rotation:legs.leftleg.startR-20}, stepMS, createjs.Ease.none)
        .to({rotation:legs.leftleg.startR-15}, stepMS, createjs.Ease.none)
        .to({rotation:legs.leftleg.startR+20}, stepMS, createjs.Ease.none)

    createjs.Tween.get(legs.rightleg, {loop:true})
        //.to({rotation:legs.rightleg.startR-20}, stepMS, createjs.Ease.none)
        .to({rotation:legs.rightleg.startR-5}, stepMS, createjs.Ease.none)
        .to({rotation:legs.rightleg.startR+20}, stepMS, createjs.Ease.none)
        .to({rotation:legs.rightleg.startR+5}, stepMS, createjs.Ease.none)
        .to({rotation:legs.rightleg.startR-20}, stepMS, createjs.Ease.none)

    createjs.Tween.get(legs.leftleg.c1, {loop:true})
        .to({rotation:legs.leftleg.c1.startR+45}, stepMS, createjs.Ease.none)
        .to({rotation:legs.leftleg.c1.startR}, stepMS, createjs.Ease.none)
        .to({rotation:legs.leftleg.c1.startR+20}, stepMS, createjs.Ease.none)
        .to({rotation:legs.leftleg.c1.startR}, stepMS, createjs.Ease.none)

    createjs.Tween.get(legs.rightleg.c1, {loop:true})
        .to({rotation:legs.rightleg.c1.startR+20}, stepMS, createjs.Ease.none)
        .to({rotation:legs.rightleg.c1.startR+15}, stepMS, createjs.Ease.none)
        .to({rotation:legs.rightleg.c1.startR+65}, stepMS*0.75, createjs.Ease.none)
        .wait(stepMS*0.25)
        .to({rotation:legs.rightleg.c1.startR}, stepMS, createjs.Ease.none)
}

function skateboardAnimate(){

    createjs.Tween.get(legs.leftleg.c1, {loop:true})
        .to({rotation:legs.leftleg.c1.startR+110}, stepMS, createjs.Ease.none)
        .to({rotation:legs.leftleg.c1.startR+15}, stepMS, createjs.Ease.none)
        .to({rotation:legs.leftleg.c1.startR+110}, stepMS, createjs.Ease.none)
        .to({rotation:legs.leftleg.c1.startR+15}, stepMS, createjs.Ease.none)
        .wait(750)
}
function snowshoeAnimate(){
    createjs.Tween.get(legs.leftleg, {loop:false})
        .to({y:legs.leftleg.y-25}, stepMS, createjs.Ease.none)
        .to({y:legs.leftleg.y}, stepMS, createjs.Ease.none)
        .call(function(){
            createjs.Tween.get(legs.rightleg, {loop:false})
                .to({y:legs.rightleg.y-25}, stepMS, createjs.Ease.none)
                .to({y:legs.rightleg.y}, stepMS, createjs.Ease.none)
                .call(snowshoeAnimate)
        });
}

function kiteAnimate(){

    createjs.Tween.get(head.kite, {loop:true})
        .to({x:head.kite.x-22, y:head.kite.y-10}, 500, createjs.Ease.none)
        .to({x:head.kite.x-10, y:head.kite.y+2}, 500, createjs.Ease.none)
        .to({x:head.kite.x-5, y:head.kite.y+15}, 500, createjs.Ease.none)
        .to({x:head.kite.x, y:head.kite.y}, 500, createjs.Ease.none);

}

function skiAnimate(d){
    //##console.log("skiAnimate");

    if(d){
        robot.rotation = -10;
        robot.scaleX = 1;
        robot.x = 200;
        robot.y = 25//-100;
        to=setTimeout(function(){
            skiAnimate(false);
        },1200);
    }
    else{
        robot.rotation = 10;
        robot.scaleX = -1;
        robot.x = 770;
        robot.y = 25//-100;
        to=setTimeout(function(){
            skiAnimate(true);
        },1200);

    }
}

//variable speed,, based on stepMS
function rollerskateAnimate(){
    createjs.Tween.get(legs.leftleg.c1, {loop:false})
        .to({rotation:legs.leftleg.c1.startR+120}, stepMS, createjs.Ease.none)
        .wait(stepMS)
        .to({rotation:legs.leftleg.c1.startR}, stepMS, createjs.Ease.none)
        .call(function(){
            createjs.Tween.get(legs.rightleg.c1, {loop:false})
                .to({rotation:legs.rightleg.c1.startR+120}, stepMS, createjs.Ease.none)
                .wait(stepMS)
                .to({rotation:legs.rightleg.c1.startR}, stepMS, createjs.Ease.none)
                .call(rollerskateAnimate)
        });
}



//#### George Expression Animations

function happyAnimate(){
    george_bottom.gotoAndPlay('turn_around_reverse_happy');

    setTimeout(function(){
        var i = randomInt(1,5);
        i = i.toString();
        playSound('correct'+ i);
    }, 400);

}
function sadAnimate(){
    george_bottom.gotoAndPlay('turn_around_reverse_sad');

    setTimeout(function(){
        var i = randomInt(1,4);
        i = i.toString();
        playSound('wrong'+ i);
    }, 400);
}
//

function tween_metalscrap(scrap){
    var ms = (bgloopers.indexOf(scrap)+1) *500;

    createjs.Tween.get(scrap, {loop:false})
    .to({x: scrap.finalX}, ms, createjs.Ease.cubicIn)

}

function tween_musicnote(note){
    var ms = randomInt(400,1000);
    createjs.Tween.get(note, {loop:false})
    .to({y:note.y - 20, alpha:1}, 250, createjs.Ease.none)
        .to({y:note.y - 100, alpha:0}, ms, createjs.Ease.none)
        .call(function(){
            note.y = note.startY;
            tween_musicnote(note);
        });
}

function tween_cloud(cloud, diagonal){
    var ms = randomInt(1500,2500);
    var shiftX=0;
    if(diagonal) shiftX = randomInt(200,400);
    else diagonal=false;

    createjs.Tween.get(cloud, {loop:false})
        .to({y:700, x:cloud.x-shiftX}, ms, createjs.Ease.none)
        .call(function(){
            cloud.x = randomInt(-70,800);
            cloud.y = -200;
            cloud.alpha = randomNum(0.75,1.0);
            tween_cloud(cloud, diagonal);
        });
}


//**************

//variable speed, based on bgMS
function repeat_bg_left(){

    createjs.Tween.get(bgA, {loop:false})
        .to({x:bgA.x-bgA.image.width}, bgMS, createjs.Ease.none)

    createjs.Tween.get(bgB, {loop:false})
        .to({x:bgB.x-bgB.image.width}, bgMS, createjs.Ease.none)
        .call(function(){
            bgA.x = bgB.image.width;

            createjs.Tween.get(bgA, {loop:false})
                .to({x:bgA.x-bgA.image.width}, bgMS, createjs.Ease.none)
            createjs.Tween.get(bgB, {loop:false})
                .to({x:bgB.x-bgB.image.width}, bgMS, createjs.Ease.none)
                .call(function(){
                    bgB.x = bgB.image.width;
                    repeat_bg_left();
                })
        })
}
//variable speed, based on bgMS
function repeat_bg_down(){

    createjs.Tween.get(bgA, {loop:false})
        .to({y:bgA.y-bgA.image.height}, bgMS, createjs.Ease.none)

    createjs.Tween.get(bgB, {loop:false})
        .to({y:bgB.y-bgB.image.height}, bgMS, createjs.Ease.none)
        .call(function(){
            bgA.y = bgB.image.height;

            createjs.Tween.get(bgA, {loop:false})
                .to({y:bgA.y-bgA.image.height}, bgMS, createjs.Ease.none)
            createjs.Tween.get(bgB, {loop:false})
                .to({y:bgB.y-bgB.image.height}, bgMS, createjs.Ease.none)
                .call(function(){
                    bgB.y = bgB.image.height;
                    repeat_bg_down();
                })
        })
}