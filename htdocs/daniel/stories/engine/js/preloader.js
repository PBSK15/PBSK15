//  ------------------------------------------------------------------
//  preloader.js
//
//  Copyright 2014 PBS KIDS Interactive. All Rights Reserved.

PBS.KIDS.storybook.preloader = function (GLOBAL, PBS) {
    
    "use strict";
    
    var that = PBS.KIDS.storybook.eventDispatcher(),
        sb = PBS.KIDS.storybook,
        initialized = false,

        parentElement,
        loaderElement, //HTML Element used to capture click/tap for audio loading
        progressContainer,
        progressBook,
        progressBar,
        progressFill,
        playButton,
        isProgressShown = false,
        lastLoadEvent,
        progressCanvas,
        
        init = function () {
             if (!initialized) {
                initialized = true;

                //Create Loader Element that will capture any touch events to load any audio
                loaderElement = GLOBAL.document.createElement("div");
                loaderElement.className = "loadingContainer";

                //Create containing div
                progressContainer = GLOBAL.document.createElement("div");
                progressContainer.className = "preloaderContainer";
                loaderElement.appendChild(progressContainer);

                //Create div containing book animation
                progressBook = GLOBAL.document.createElement("div");
                progressBook.className = "preloaderBook";
                progressContainer.appendChild(progressBook);

                //Create Button
                playButton = GLOBAL.document.createElement("a");
                playButton.setAttribute('href', '#');
                playButton.className = "preloaderPlayButton";
                progressBook.appendChild(playButton);

                var playSymbolCorner = GLOBAL.document.createElement("div");
                playSymbolCorner.className = "preloaderPlaySymbolCorner";
                playButton.appendChild(playSymbolCorner);

                var playSymbolShadow = GLOBAL.document.createElement("div");
                playSymbolShadow.className = "preloaderPlaySymbolShadow";
                playButton.appendChild(playSymbolShadow);

                var playSymbol = GLOBAL.document.createElement("div");
                playSymbol.className = "preloaderPlaySymbol";
                playButton.appendChild(playSymbol);

                //Create Progress bar
                progressBar = GLOBAL.document.createElement("div");
                progressBar.className = "progressBar";
                progressContainer.appendChild(progressBar);

                progressCanvas = GLOBAL.document.createElement('canvas');
                progressCanvas.width = 328;
                progressCanvas.height = 70;
                progressBar.appendChild(progressCanvas);

                // loading text
                var loadingText = GLOBAL.document.createElement('div');
                loadingText.className = 'loadingText';
                progressBar.appendChild(loadingText);
    
                //Fill box
                // progressFill = GLOBAL.document.createElement("div");
                // progressFill.className = "progressFill";
                // progressBar.appendChild(progressFill);

                // // loading text
                // var loadingText = GLOBAL.document.createElement('div');
                // loadingText.className = 'loadingText';
                // loadingText.innerHTML = 'LOADING';
                // progressBar.appendChild(loadingText);
            }
        };

    that.createElementIn = function ( parentElement ) {

        parentElement = parentElement;
        parentElement.appendChild(loaderElement);
        return loaderElement;
    };

    that.showProgress = function() {
        isProgressShown = true;
        playButton.style.opacity = 0;
        progressBar.style.opacity = 1;
        progressBar.style.display = 'block';
        progressBook.className = "preloaderBook preloaderAnimate";

        that.updateProgress(lastLoadEvent);
    };
    
    // Update the text area
    that.updateProgress = function (loadEvent) {
        lastLoadEvent = loadEvent;
        if(isProgressShown) {

            var ctx = progressCanvas.getContext('2d'),
                w = progressCanvas.width,
                h = progressCanvas.height,
                p = loadEvent.progress / loadEvent.total;

            ctx.clearRect(0, 0, w, h);

            // frame/border
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(0, 4);
            ctx.lineTo(w, 0);
            ctx.lineTo(w - 2, h);
            ctx.lineTo(6, h - 8);
            ctx.closePath();

            ctx.fillStyle = '#cc1e1e';
            ctx.fill();
            ctx.restore();

            // bg
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(18, 20);
            ctx.lineTo(w - 16, 14);
            ctx.lineTo(w - 18, h - 14);
            ctx.lineTo(22, h - 22);
            ctx.closePath();

            ctx.fillStyle = '#8b0d07';
            ctx.fill();
            ctx.restore();

            // percentage/progress bar
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(18, 20);
            ctx.lineTo((w - 16) * p, 14 + (6 * (1 - p)));
            ctx.lineTo((w - 18) * p, h - 14 - (8 * (1 - p)));
            ctx.lineTo(22, h - 22);
            ctx.closePath();

            ctx.fillStyle = '#f05119';
            ctx.fill();
            ctx.restore();

            // progressFill.style.width = (((loadEvent.progress) / loadEvent.total) * 100) + "%";
        }
    };
    
    init();
    return that;
};