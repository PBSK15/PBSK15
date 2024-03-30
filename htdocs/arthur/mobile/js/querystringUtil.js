 /**
 * @param qry the querystring
 * @param name name of parameter
 * @returns the parameter specified by name
 * @author eduardo.medeirospereira@gmail.com
 */

function getQueryStringParameter(qry,name){
    if(typeof qry !== undefined && qry !== ""){
        var keyValueArray = qry.split("&");
        for ( var i = 0; i < keyValueArray.length; i++) {
            if(keyValueArray[i].indexOf(name)>-1){
                return keyValueArray[i].split("=")[1];
            }
        }
    }
    return "";
}