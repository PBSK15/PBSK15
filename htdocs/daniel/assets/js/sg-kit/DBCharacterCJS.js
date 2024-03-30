/**
 * Created by Matt Kucic on 4/4/2014.
 */
(function(window) {
    function DBCharacterCJS (id, location, armatureName, readyCallback) {
        this.initialize();
        var __this = this;
        this.id = id;
        this.armatureName = armatureName;        
        this.readyCallback = readyCallback;        

        if (typeof(location) == "string") {
            this.filesToLoad = 3;

            this.texture = new Image();
            this.texture.onload = function(){
                __this.filesToLoad --;
                charCreationCheck();
            }

            this.texture.src = location+"texture.png";
            $.getJSON(location+"texture.json",
                function(data){
                    //__this.bounds = {"x":0,"y":0,"width":0,"height":0};
                    __this.texData = data;
                    __this.filesToLoad --;
                    charCreationCheck();
                }
            );
            $.getJSON(location+"skeleton.json",
                function(data){
                    __this.skeletonData = data;
                    __this.filesToLoad --;
                    charCreationCheck();
                }
            );
        }
        else if (typeof(location) == "object") {
            __this.texData = location.textureData;
            __this.texture = location.texture;
            __this.skeletonData = location.skeletonData;

            build();
        }

        function build() {
            __this.factory = new dragonBones.factorys.CreateJSFactory();
            __this.factory.addSkeletonData(dragonBones.objects.DataParser.parseSkeletonData(__this.skeletonData));
            __this.factory.addTextureAtlas(new dragonBones.textures.CreateJSTextureAtlas(__this.texture, __this.texData));
            __this.armature = __this.factory.buildArmature(__this.armatureName);
            __this.addChild(__this.armature.getDisplay());

            if (readyCallback) {
                readyCallback(__this);
            }
        }

        function charCreationCheck(){
            if(__this.filesToLoad == 0){
                build();
            }
        }
    }

    DBCharacterCJS.prototype = new createjs.Container();

    DBCharacterCJS.prototype.getArmature = function(){
        return this.armature;
    };

    DBCharacterCJS.prototype.getArmatureByName = function(armatureName){
        return this.factory.buildArmature(armatureName);
    };
    DBCharacterCJS.prototype.getID = function(){
        return this.id;
    };
	DBCharacterCJS.prototype.getBounds = function(){
		var bounds = {"x":0,"y":0,"width":0,"height":0};
	};
    DBCharacterCJS.prototype.destroy = function(){
        this.armature.dispose();
        this.armature = null;
        this.texture = null;
        this.texData = null;
        this.skeletonData = null;

    }

    DBCharacterCJS.prototype.Container_initialize = DBCharacterCJS.prototype.initialize;
    DBCharacterCJS.prototype.initialize = function(){
        this.Container_initialize();
    }

    window.DBCharacterCJS = DBCharacterCJS;
}(window));
