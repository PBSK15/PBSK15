function setCookie(n,v){

        var thisCookie=readCookie();
        if(thisCookie==0){
              newCookie(n,v);
        }
        var found=false;
        for(var i=0;i<thisCookie.length;i++){
              if(thisCookie[i].split("=")[0]==n){
                        found=true;
                        var expireDate = new Date();
                        expireDate.setMonth(expireDate.getMonth()+6);
                        document.cookie = n + "=" + v + ";expires=" + expireDate.toGMTString();
                        //document.cookie = n + "=" + v + ";expires=Wed, 09-09-09";
              }

        }
        if(found==false){
                newCookie(n,v);
        }

}
function getCookie(n){
       if(document.cookie!=""){
                var cook=document.cookie.split("; ");
                for(var i=0;i<cook.length;i++){

                        if(cook[i].split("=")[0]==n){
                                var j=cook[i].split("=")[1];
                                return(j);
                        }
                }
                return('false');
        }
        return('false');
}
function readCookie(){
        if(document.cookie!=""){
                var cook=document.cookie.split("; ");
                return(cook);
        }
        else{
                return(0);
        }
}
function newCookie(n,v){
        var expireDate = new Date();
        expireDate.setMonth(expireDate.getMonth()+6);
        document.cookie = n + "=" + v +";expires=" + expireDate.toGMTString();
}
