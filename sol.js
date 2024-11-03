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

function orzl(){
  return [{
   name: "星尘报社总部",
   createAuthor: "iceiceiceice",
   createTime: "2022.04.15",
  },{
    name: "服务用户协会",
    createAuthor: "沃尔夫冈",
    createTime: "2023.07.11"
  },{
    name: "物实之家-解忧咨询室",
    createAuthor: "生巧",
    createTime: "2022.08.09"
  },{
 name: "物实法理学协会",
 createAuthor: "逐影星空",
 createTime: "2023.02.25"
  },{
    name: "互助团",
    createAuthor: "钇Yttrium",
    createTime: "2023.01.24"
  },{
    name: "逐影联盟",
    createAuthor: "逐影星空",
    createTime: "2021.10.05"
  },{
    name: "星辉报社",
    createAuthor: "沃尔夫冈",
    createTime: "2023.02.03"
  },{
    name: "加强物理实验室黑洞区基础学科建设计划(强基计划)",
    createAuthor: "班长大大",
    createTime: "2022.04.21"
  },{
    name: "理颜计划",
    createAuthor: "无产阶级编辑",
    createTime: "2022.08.07"
  },{
    name: "晚会聊天室",
    createAuthor: "是橙子呀~",
    createTime: "2022.08.30"
  },{
    name: "微风周刊刊社",
    createAuthor: "眺跳",
    createTime: "2023.02.14"
  }];
}

function orz(n){ return (orzl())[n]; };

var htor='';
for(a=0; a<orzl().length; a++){
  if(gqu()!==undefined){
      if(orz(a).name.search(decodeBase64(gqu()))!=-1){
 htor+='<div class="orz"><h3>'+orz(a).name+'</h3><pre>创建者:'+orz(a).createAuthor+'\n创建时间:'+orz(a).createTime+'</pre></div>';
      }
  }
      }

document.getElementById("orzl").innerHTML=htor;

function ts(){
  var a=document.createElement("a");
  a.href='search.html?orz='+encodeBase64(document.getElementById('search').value);
  a.click();
}


function encodeBase64(str) {
    var utf8Str = unescape(encodeURIComponent(str));
    var base64Str = btoa(utf8Str);
    return base64Str;
}
