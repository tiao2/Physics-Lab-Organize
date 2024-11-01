function gqu() {
    let queryParams = {};
    let ur = window.location.href;
    let queryString = ur.split('?')[1];
    if (queryString) {
        let params = queryString.split('&');
        params.forEach(function(param) {
            let split = param.split('=');
            queryParams[split[0]] = split[1];
        });
    }
    return queryParams.orz;
};

document.getElementById('search').value=(gqu()==undefined)?'':decodeBase64(gqu());
 
function decodeBase64(base64Str) {
    var utf8Str = atob(base64Str);
    var str = decodeURIComponent(escape(utf8Str));
    return str;
}
