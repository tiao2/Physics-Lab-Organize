function orzl(){
  return [{
   name: "星尘报社总部",
   createAuthor: "",
   createTime: "",
  },{
    name: "服务用户协会",
    createAuthor: "",
    createTime: ""
  },{
    name: "物实之家-解忧咨询室",
    createAuthor: "",
    createTime: ""
  },{
 name: "物实法理学协会",
 createAuthor: "",
 createTime: ""
  },{
    name: "互助团",
    createAuthor: "",
    createTime: ""
  },{
    name: "逐影联盟",
    createAuthor: "",
    createTime: ""
  },{
    name: "星辉报社",
    createAuthor: "",
    createTime: ""
  },{
    name: "加强物理实验室黑洞区基础学科建设计划(强基计划)",
    createAuthor: "",
    createTime: ""
  },{
    name: "理颜计划",
    createAuthor: "",
    createTime: ""
  },{
    name: "晚会聊天室",
    createAuthor: "",
    createTime: ""
  },{
    name: "微风周刊刊社",
    createAuthor: "",
    createTime: ""
  }];
}

function orz(n){ return (orzl())[n]; };

var htor='';
for(a=0; a<orzl().length; a++){
 htor+='<div class="orz"><h3>'+orz(a).name+'</h3><pre>创建者:'+orz(a).createAuthor+'\n创建时间:'+orz(a).createTime+'</pre></div>';
}

document.getElementById("orzl").innerHTML=htor;

function ts(){
  var a=document.createElement("a");
  a.href='search.html?orz='+toBase64(document.getElementById('search').value);
  a.click();
}
function toBase64(str) {
    let encoder = new TextEncoder();
    let encodedString = encoder.encode(str);
    return btoa(String.fromCharCode.apply(null, encodedString));
}
