var d = document;

function docwrite(str) { d.write(str); }

var warnPg = '/lions/need-flash.html';

function moreBtnOvr() { if (d.images) { d.moreBtn.src = moreOvr.src; d.arrowBtn.src = arrowOvr.src; } }
function moreBtnOff() { if (d.images) { d.moreBtn.src = more.src; d.arrowBtn.src = arrow.src; } }
