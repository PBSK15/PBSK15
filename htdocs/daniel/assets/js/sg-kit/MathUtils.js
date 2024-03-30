/**
 * Created by Matt Kucic on 4/10/2014.
 */
 
function isInside(x,y,rect){
    x1 = Math.min(rect.x, rect.x+rect.width);
    x2 = Math.max(rect.x, rect.x+rect.width);
    y1 = Math.min(rect.y, rect.y+rect.height);
    y2 = Math.max(rect.y, rect.y+rect.height);
    if ((x1 <= x && x <= x2) && (y1 <= y && y <= y2)) {
        return true;
    } else {
        return false;
    };
}

function ptInCircle(point, circle){
    if(ptToPtDistance(point.x,point.y,circle.x, circle.y)<= circle.radius){
        return true;
    }
    return false;
}

function ptToPtDistance(x1,y1,x2,y2){
    return Math.sqrt(((x2-x1)*(x2-x1))+((y2-y1)*(y2-y1)));
}
